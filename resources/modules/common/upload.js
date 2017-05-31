define(['jquery', 'layer', 'WebUploader', 'Ajax'], function ($, layer, WebUploader, Ajax) {
    return function (option) {
        var defaultOption = {
            swf: '/beyoulife_new/resources/libs/webuploader/Uploader.swf',
            server: 'http://webuploader.duapp.com/server/fileupload.php',
            fileSingleSizeLimit: 3 * 1024 * 1024,
            duplicate: true
        };
        defaultOption = $.extend(defaultOption, option);
        var uploader, queueItem, uploadDom;
        /**
         * @description 初始化上传组件
         */
        var initUpload = function () {
            uploadDom = $(defaultOption.pick);
            uploader = WebUploader.create(defaultOption);
            //选择文件
            uploader.on('fileQueued', function (file) {
                //触发自定义选择文件事件
                createQueue(file);
                uploader.upload();
            });
            //上传中
            uploader.on('uploadProgress', function (file, percentage) {
                queueItem.find('.quene-percent').html((percentage * 100).toFixed(2) + '%');
                queueItem.find('.process-bar').css('width', percentage * 100 + '%');
                queueItem.find('.quene-msg').html('已上传：' + formatFileSize(file.size * percentage) + '/' + formatFileSize(file.size));
            });
            //上传成功
            uploader.on('uploadSuccess', function (file, response) {
                queueItem.find('.quene-msg').html('文件上传成功请稍后...');
                queueItem.delay(500).fadeOut(500, function () {
                    $(this).remove();
                    layer.closeAll();
                });
                if (response.code == 0) {
                    //上传完成事件
                    queueItem.find('.quene-msg').html('文件上传成功请稍后...');
                    queueItem.delay(500).fadeOut(500, function () {
                        $(this).remove();
                        layer.closeAll();
                    });
                } else {
                    layer.msg(response.result, {
                        time: 3500
                    });
                    if (response.code == 100) {
                        setTimeout(function () {
                            window.location.href = '/beyoulife/login.html';
                        }, 1500);
                    } else {
                        //后台错误,重置上传
                        queueItem.delay(500).fadeOut(500, function () {
                            $(this).remove();
                        });
                    }
                }
                defaultOption.uploadSuccess && defaultOption.uploadSuccess(arguments);
                //refresh();
            });
            //上传出错
            uploader.on('uploadError', function (file, error) {
                queueItem.stop(true);
                queueItem.find('.quene-quit').remove();
                queueItem.find('.quene-msg').html('上传失败:' + error + '-error').addClass('error');
                queueItem.delay(2000).fadeOut(500, function () {
                    $(this).remove();
                });
                //上传出错事件
                defaultOption.uploadError && defaultOption.uploadError.apply(this,arguments);
            });
            uploader.on('error', function (handler) {
                var errorInfo = {
                    'F_EXCEED_SIZE': function () {
                        layer.msg('文件大小超过规定限制');
                        return false;
                    },
                    'Q_TYPE_DENIED': function () {
                        layer.msg('暂不支持该格式');
                        return false;
                    }
                }
                errorInfo[handler].apply(this, arguments);
            });

        };
        /**
         * @description 绑定事件
         */
        var bindEvent = function () {
            //取消上传
            $("body").on('click', '.quene-quit', quitUpload);
            $('.chooseFile').click(function () {
                $('.error-info').empty();
            });
        };
        /**
         * @description 创建文件上传队列
         * @param {Object} file 文件对象
         */
        var createQueue = function (file) {
            var position = uploadDom.position();
            queueItem = $('<div class="quene">\
							<div class="quene-info">\
								<span class="quene-file-name"></span>\
								<a class="quene-quit">取消上传</a>\
								<span class="quene-percent" style="float: right;"></span></div>\
							<div class="process">\
								<div class="process-bar"></div></div>\
			             <div class="quene-msg"></div></div>');
            queueItem.css({
                left: position.left,
                top: position.top + uploadDom.height()
            })
            queueItem.find('.quene-file-name').html(file.name);
            queueItem.id = file.id;
            $("body").append(queueItem);
        };
        /**
         * @description 文件大小格式化
         * @param {Object} size 单位 b
         */
        var formatFileSize = function (size) {
            size = size / 1024;
            if (size < 1024) {
                return size.toFixed(1) + 'KB';
            }
            return (size / 1024).toFixed(1) + 'MB';
        };
        /**
         * @description 取消上传
         */
        var quitUpload = function () {
            //uploader.stop(true);
            layer.confirm('取消上传将清除已上传的数据,确定要取消本次上传吗？', {
                btn: ['取消上传', '继续上传'],
            }, function () {
                try {
                    uploader.cancelFile(queueItem.id);
                } catch (e) {

                }
                queueItem.delay(500).fadeOut(500, function () {
                    $(this).remove();
                });
                layer.closeAll();
            }, function () {
                layer.closeAll();
            });
        };
        /**
         * @description 刷新上传组件
         */
        var refresh = function () {
            $("#fileName").empty().hide();
            //layer.closeAll();
            saleData = [];
            uploader && uploader.destroy();
            initUpload();
        };
        var init = function () {
            initUpload();
            bindEvent();
            return uploader;
        }
        return init();
    }
});