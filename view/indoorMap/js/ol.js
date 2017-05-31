// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.15.1
(function(root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
} (this,
function() {
    var OPENLAYERS = {};
    var l, aa = this;
    function ca(a) {
        return void 0 !== a
    }
    function u(a, c, d) {
        a = a.split(".");
        d = d || aa;
        a[0] in d || !d.execScript || d.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) ! a.length && ca(c) ? d[e] = c: d[e] ? d = d[e] : d = d[e] = {}
    }
    function da(a) {
        a.Wb = function() {
            return a.Mg ? a.Mg: a.Mg = new a
        }
    }
    function ea(a) {
        var c = typeof a;
        if ("object" == c) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return c;
            var d = Object.prototype.toString.call(a);
            if ("[object Window]" == d) return "object";
            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
    }
    function fa(a) {
        var c = ea(a);
        return "array" == c || "object" == c && "number" == typeof a.length
    }
    function ga(a) {
        return "string" == typeof a
    }
    function ha(a) {
        return "number" == typeof a
    }
    function ia(a) {
        return "function" == ea(a)
    }
    function ja(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
    }
    function x(a) {
        return a[ka] || (a[ka] = ++la)
    }
    var ka = "closure_uid_" + (1E9 * Math.random() >>> 0),
    la = 0;
    function ma(a, c, d) {
        return a.call.apply(a.bind, arguments)
    }
    function na(a, c, d) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return a.apply(c, d)
            }
        }
        return function() {
            return a.apply(c, arguments)
        }
    }
    function pa(a, c, d) {
        pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma: na;
        return pa.apply(null, arguments)
    }
    function qa(a, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return a.apply(this, c)
        }
    }
    function y(a, c) {
        function d() {}
        d.prototype = c.prototype;
        a.ia = c.prototype;
        a.prototype = new d;
        a.prototype.constructor = a;
        a.sp = function(a, d, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return c.prototype[d].apply(a, h)
        }
    };
    var ra, sa;
    function ta() {};
    var ua;
    var va = String.prototype.trim ?
    function(a) {
        return a.trim()
    }: function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    function wa(a) {
        if (!xa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ya, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(za, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"));
        return a
    }
    var ya = /&/g,
    za = /</g,
    Ba = />/g,
    Ca = /"/g,
    Da = /'/g,
    Ea = /\x00/g,
    xa = /[\x00&<>"']/,
    Fa = String.prototype.repeat ?
    function(a, c) {
        return a.repeat(c)
    }: function(a, c) {
        return Array(c + 1).join(a)
    };
    function Ga(a, c) {
        var d = ca(c) ? a.toFixed(c) : String(a),
        e = d.indexOf("."); - 1 == e && (e = d.length);
        return Fa("0", Math.max(0, 2 - e)) + d
    }
    function Ha(a, c) {
        for (var d = 0,
        e = va(String(a)).split("."), f = va(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var k = e[h] || "",
            m = f[h] || "",
            n = RegExp("(\\d*)(\\D*)", "g"),
            p = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = n.exec(k) || ["", "", ""], r = p.exec(m) || ["", "", ""];
                if (0 == q[0].length && 0 == r[0].length) break;
                d = Ia(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || Ia(0 == q[2].length, 0 == r[2].length) || Ia(q[2], r[2])
            } while ( 0 == d )
        }
        return d
    }
    function Ia(a, c) {
        return a < c ? -1 : a > c ? 1 : 0
    };
    function La(a, c, d) {
        return Math.min(Math.max(a, c), d)
    }
    var Ma = function() {
        var a;
        "cosh" in Math ? a = Math.cosh: a = function(a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    } ();
    function Na(a, c, d, e, f, g) {
        var h = f - d,
        k = g - e;
        if (0 !== h || 0 !== k) {
            var m = ((a - d) * h + (c - e) * k) / (h * h + k * k);
            1 < m ? (d = f, e = g) : 0 < m && (d += h * m, e += k * m)
        }
        return Oa(a, c, d, e)
    }
    function Oa(a, c, d, e) {
        a = d - a;
        c = e - c;
        return a * a + c * c
    }
    function Pa(a) {
        return a * Math.PI / 180
    }
    function Qa(a, c) {
        var d = a % c;
        return 0 > d * c ? d + c: d
    }
    function Ra(a, c, d) {
        return a + d * (c - a)
    };
    function Sa(a) {
        return function(c) {
            if (c) return [La(c[0], a[0], a[2]), La(c[1], a[1], a[3])]
        }
    }
    function Ua(a) {
        return a
    };
    function Va(a, c) {
        return a > c ? 1 : a < c ? -1 : 0
    }
    function Wa(a, c) {
        return 0 <= a.indexOf(c)
    }
    function Xa(a, c, d) {
        var e = a.length;
        if (a[0] <= c) return 0;
        if (! (c <= a[e - 1])) if (0 < d) for (d = 1; d < e; ++d) {
            if (a[d] < c) return d - 1
        } else if (0 > d) for (d = 1; d < e; ++d) {
            if (a[d] <= c) return d
        } else for (d = 1; d < e; ++d) {
            if (a[d] == c) return d;
            if (a[d] < c) return a[d - 1] - c < c - a[d] ? d - 1 : d
        }
        return e - 1
    }
    function Ya(a) {
        return a.reduce(function(a, d) {
            return Array.isArray(d) ? a.concat(Ya(d)) : a.concat(d)
        },
        [])
    }
    function Za(a, c) {
        var d, e = fa(c) ? c: [c],
        f = e.length;
        for (d = 0; d < f; d++) a[a.length] = e[d]
    }
    function $a(a, c) {
        var d = a.indexOf(c),
        e = -1 < d;
        e && a.splice(d, 1);
        return e
    }
    function ab(a, c) {
        for (var d = a.length >>> 0,
        e, f = 0; f < d; f++) if (e = a[f], c(e, f, a)) return e;
        return null
    }
    function bb(a, c) {
        var d = a.length;
        if (d !== c.length) return ! 1;
        for (var e = 0; e < d; e++) if (a[e] !== c[e]) return ! 1;
        return ! 0
    }
    function cb(a) {
        var c = db,
        d = a.length,
        e = Array(a.length),
        f;
        for (f = 0; f < d; f++) e[f] = {
            index: f,
            value: a[f]
        };
        e.sort(function(a, d) {
            return c(a.value, d.value) || a.index - d.index
        });
        for (f = 0; f < a.length; f++) a[f] = e[f].value
    }
    function eb(a, c) {
        var d;
        return a.every(function(e, f) {
            d = f;
            return ! c(e, f, a)
        }) ? -1 : d
    };
    function fb(a) {
        return function(c, d, e) {
            if (void 0 !== c) return c = Xa(a, c, e),
            c = La(c + d, 0, a.length - 1),
            a[c]
        }
    }
    function gb(a, c, d) {
        return function(e, f, g) {
            if (void 0 !== e) return e = Math.max(Math.floor(Math.log(c / e) / Math.log(a) + (0 < g ? 0 : 0 > g ? 1 : .5)) + f, 0),
            void 0 !== d && (e = Math.min(e, d)),
            c / Math.pow(a, e)
        }
    };
    function hb(a) {
        if (void 0 !== a) return 0
    }
    function ib(a, c) {
        if (void 0 !== a) return a + c
    }
    function jb(a) {
        var c = 2 * Math.PI / a;
        return function(a, e) {
            if (void 0 !== a) return a = Math.floor((a + e) / c + .5) * c
        }
    }
    function kb() {
        var a = Pa(5);
        return function(c, d) {
            if (void 0 !== c) return Math.abs(c + d) <= a ? 0 : c + d
        }
    };
    function lb(a, c, d) {
        this.center = a;
        this.resolution = c;
        this.rotation = d
    };
    var mb = "function" === typeof Object.assign ? Object.assign: function(a, c) {
        if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var d = Object(a), e = 1, f = arguments.length; e < f; ++e) {
            var g = arguments[e];
            if (void 0 !== g && null !== g) for (var h in g) g.hasOwnProperty(h) && (d[h] = g[h])
        }
        return d
    };
    function nb(a) {
        for (var c in a) delete a[c]
    }
    function ob(a) {
        var c = [],
        d;
        for (d in a) c.push(a[d]);
        return c
    }
    function pb(a) {
        for (var c in a) return ! 1;
        return ! c
    };
    var qb = "olm_" + (1E4 * Math.random() | 0);
    function rb(a) {
        function c(c) {
            var e = a.listener,
            f = a.gg || a.target;
            a.ig && sb(a);
            return e.call(f, c)
        }
        return a.hg = c
    }
    function tb(a, c, d, e) {
        for (var f, g = 0,
        h = a.length; g < h; ++g) if (f = a[g], f.listener === c && f.gg === d) return e && (f.deleteIndex = g),
        f
    }
    function ub(a, c) {
        var d = a[qb];
        return d ? d[c] : void 0
    }
    function vb(a) {
        var c = a[qb];
        c || (c = a[qb] = {});
        return c
    }
    function wb(a, c) {
        var d = ub(a, c);
        if (d) {
            for (var e = 0,
            f = d.length; e < f; ++e) a.removeEventListener(c, d[e].hg),
            nb(d[e]);
            d.length = 0;
            if (d = a[qb]) delete d[c],
            0 === Object.keys(d).length && delete a[qb]
        }
    }
    function C(a, c, d, e, f) {
        var g = vb(a),
        h = g[c];
        h || (h = g[c] = []); (g = tb(h, d, e, !1)) ? f || (g.ig = !1) : (g = {
            gg: e,
            ig: !!f,
            listener: d,
            target: a,
            type: c
        },
        a.addEventListener(c, rb(g)), h.push(g));
        return g
    }
    function xb(a, c, d, e) {
        return C(a, c, d, e, !0)
    }
    function yb(a, c, d, e) { (a = ub(a, c)) && (d = tb(a, d, e, !0)) && sb(d)
    }
    function sb(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.hg);
            var c = ub(a.target, a.type);
            if (c) {
                var d = "deleteIndex" in a ? a.deleteIndex: c.indexOf(a); - 1 !== d && c.splice(d, 1);
                0 === c.length && wb(a.target, a.type)
            }
            nb(a)
        }
    }
    function zb(a) {
        var c = vb(a),
        d;
        for (d in c) wb(a, d)
    };
    function Ab() {}
    Ab.prototype.rb = !1;
    function Bb(a) {
        a.rb || (a.rb = !0, a.fa())
    }
    Ab.prototype.fa = ta;
    function Cb(a, c) {
        this.type = a;
        this.target = c || null
    }
    Cb.prototype.preventDefault = Cb.prototype.stopPropagation = function() {
        this.Vn = !0
    };
    function Db(a) {
        a.stopPropagation()
    }
    function Eb(a) {
        a.preventDefault()
    };
    function Fb() {
        this.Fa = {};
        this.va = {}
    }
    y(Fb, Ab);
    Fb.prototype.addEventListener = function(a, c) {
        var d = this.va[a];
        d || (d = this.va[a] = []); - 1 === d.indexOf(c) && d.push(c)
    };
    Fb.prototype.b = function(a) {
        var c = "string" === typeof a ? new Cb(a) : a;
        a = c.type;
        c.target = this;
        var d = this.va[a],
        e;
        if (d) {
            a in this.Fa || (this.Fa[a] = 0);
            for (var f = 0,
            g = d.length; f < g; ++f) if (!1 === d[f].call(this, c) || c.Vn) {
                e = !1;
                break
            }
            c = this.Fa[a];
            for (delete this.Fa[a]; c--;) this.removeEventListener(a, ta);
            return e
        }
    };
    Fb.prototype.fa = function() {
        zb(this)
    };
    function Gb(a, c) {
        return c ? c in a.va: 0 < Object.keys(a.va).length
    }
    Fb.prototype.removeEventListener = function(a, c) {
        var d = this.va[a];
        if (d) {
            var e = d.indexOf(c);
            a in this.Fa ? (d[e] = ta, ++this.Fa[a]) : (d.splice(e, 1), 0 === d.length && delete this.va[a])
        }
    };
    function Hb() {
        Fb.call(this);
        this.g = 0
    }
    y(Hb, Fb);
    function Ib(a) {
        if (Array.isArray(a)) for (var c = 0,
        d = a.length; c < d; ++c) sb(a[c]);
        else sb(a)
    }
    l = Hb.prototype;
    l.u = function() {++this.g;
        this.b("change")
    };
    l.K = function() {
        return this.g
    };
    l.I = function(a, c, d) {
        if (Array.isArray(a)) {
            for (var e = a.length,
            f = Array(e), g = 0; g < e; ++g) f[g] = C(this, a[g], c, d);
            return f
        }
        return C(this, a, c, d)
    };
    l.L = function(a, c, d) {
        if (Array.isArray(a)) {
            for (var e = a.length,
            f = Array(e), g = 0; g < e; ++g) f[g] = xb(this, a[g], c, d);
            return f
        }
        return xb(this, a, c, d)
    };
    l.J = function(a, c, d) {
        if (Array.isArray(a)) for (var e = 0,
        f = a.length; e < f; ++e) yb(this, a[e], c, d);
        else yb(this, a, c, d)
    };
    l.M = Ib;
    function Jb(a, c, d) {
        Cb.call(this, a);
        this.key = c;
        this.oldValue = d
    }
    y(Jb, Cb);
    function Kb(a) {
        Hb.call(this);
        x(this);
        this.U = {};
        void 0 !== a && this.C(a)
    }
    y(Kb, Hb);
    var Lb = {};
    function Mb(a) {
        return Lb.hasOwnProperty(a) ? Lb[a] : Lb[a] = "change:" + a
    }
    l = Kb.prototype;
    l.get = function(a) {
        var c;
        this.U.hasOwnProperty(a) && (c = this.U[a]);
        return c
    };
    l.O = function() {
        return Object.keys(this.U)
    };
    l.P = function() {
        return mb({},
        this.U)
    };
    function Nb(a, c, d) {
        var e;
        e = Mb(c);
        a.b(new Jb(e, c, d));
        a.b(new Jb("propertychange", c, d))
    }
    l.set = function(a, c, d) {
        d ? this.U[a] = c: (d = this.U[a], this.U[a] = c, d !== c && Nb(this, a, d))
    };
    l.C = function(a, c) {
        for (var d in a) this.set(d, a[d], c)
    };
    l.R = function(a, c) {
        if (a in this.U) {
            var d = this.U[a];
            delete this.U[a];
            c || Nb(this, a, d)
        }
    };
    function Ob(a, c, d) {
        void 0 === d && (d = [0, 0]);
        d[0] = a[0] + 2 * c;
        d[1] = a[1] + 2 * c;
        return d
    }
    function Pb(a, c, d) {
        void 0 === d && (d = [0, 0]);
        d[0] = a[0] * c + .5 | 0;
        d[1] = a[1] * c + .5 | 0;
        return d
    }
    function Qb(a, c) {
        if (Array.isArray(a)) return a;
        void 0 === c ? c = [a, a] : (c[0] = a, c[1] = a);
        return c
    };
    function Rb(a, c) {
        a[0] += c[0];
        a[1] += c[1];
        return a
    }
    function Sb(a, c) {
        var d = a[0],
        e = a[1],
        f = c[0],
        g = c[1],
        h = f[0],
        f = f[1],
        k = g[0],
        g = g[1],
        m = k - h,
        n = g - f,
        d = 0 === m && 0 === n ? 0 : (m * (d - h) + n * (e - f)) / (m * m + n * n || 0);
        0 >= d || (1 <= d ? (h = k, f = g) : (h += d * m, f += d * n));
        return [h, f]
    }
    function Tb(a, c, d) {
        a = Qa(a + 180, 360) - 180;
        var e = Math.abs(3600 * a);
        d = d || 0;
        return Math.floor(e / 3600) + "\u00b0 " + Ga(Math.floor(e / 60 % 60)) + "\u2032 " + Ga(e % 60, d) + "\u2033 " + c.charAt(0 > a ? 1 : 0)
    }
    function Ub(a, c, d) {
        return a ? c.replace("{x}", a[0].toFixed(d)).replace("{y}", a[1].toFixed(d)) : ""
    }
    function Vb(a, c) {
        for (var d = !0,
        e = a.length - 1; 0 <= e; --e) if (a[e] != c[e]) {
            d = !1;
            break
        }
        return d
    }
    function Wb(a, c) {
        var d = Math.cos(c),
        e = Math.sin(c),
        f = a[1] * d + a[0] * e;
        a[0] = a[0] * d - a[1] * e;
        a[1] = f;
        return a
    }
    function Xb(a, c) {
        var d = a[0] - c[0],
        e = a[1] - c[1];
        return d * d + e * e
    }
    function Yb(a, c) {
        return Xb(a, Sb(a, c))
    }
    function Zb(a, c) {
        return Ub(a, "{x}, {y}", c)
    };
    function $b(a) {
        this.length = a.length || a;
        for (var c = 0; c < this.length; c++) this[c] = a[c] || 0
    }
    $b.prototype.BYTES_PER_ELEMENT = 4;
    $b.prototype.set = function(a, c) {
        c = c || 0;
        for (var d = 0; d < a.length && c + d < this.length; d++) this[c + d] = a[d]
    };
    $b.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && ($b.BYTES_PER_ELEMENT = 4, $b.prototype.BYTES_PER_ELEMENT = $b.prototype.BYTES_PER_ELEMENT, $b.prototype.set = $b.prototype.set, $b.prototype.toString = $b.prototype.toString, u("Float32Array", $b, void 0));
    function ac(a) {
        this.length = a.length || a;
        for (var c = 0; c < this.length; c++) this[c] = a[c] || 0
    }
    ac.prototype.BYTES_PER_ELEMENT = 8;
    ac.prototype.set = function(a, c) {
        c = c || 0;
        for (var d = 0; d < a.length && c + d < this.length; d++) this[c + d] = a[d]
    };
    ac.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            ac.BYTES_PER_ELEMENT = 8
        } catch(a) {}
        ac.prototype.BYTES_PER_ELEMENT = ac.prototype.BYTES_PER_ELEMENT;
        ac.prototype.set = ac.prototype.set;
        ac.prototype.toString = ac.prototype.toString;
        u("Float64Array", ac, void 0)
    };
    function bc(a, c, d, e, f) {
        a[0] = c;
        a[1] = d;
        a[2] = e;
        a[3] = f
    };
    function cc() {
        var a = Array(16);
        dc(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return a
    }
    function ec() {
        var a = Array(16);
        dc(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return a
    }
    function dc(a, c, d, e, f, g, h, k, m, n, p, q, r, t, v, w, A) {
        a[0] = c;
        a[1] = d;
        a[2] = e;
        a[3] = f;
        a[4] = g;
        a[5] = h;
        a[6] = k;
        a[7] = m;
        a[8] = n;
        a[9] = p;
        a[10] = q;
        a[11] = r;
        a[12] = t;
        a[13] = v;
        a[14] = w;
        a[15] = A
    }
    function gc(a, c) {
        a[0] = c[0];
        a[1] = c[1];
        a[2] = c[2];
        a[3] = c[3];
        a[4] = c[4];
        a[5] = c[5];
        a[6] = c[6];
        a[7] = c[7];
        a[8] = c[8];
        a[9] = c[9];
        a[10] = c[10];
        a[11] = c[11];
        a[12] = c[12];
        a[13] = c[13];
        a[14] = c[14];
        a[15] = c[15]
    }
    function hc(a) {
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1
    }
    function ic(a, c, d) {
        var e = a[0],
        f = a[1],
        g = a[2],
        h = a[3],
        k = a[4],
        m = a[5],
        n = a[6],
        p = a[7],
        q = a[8],
        r = a[9],
        t = a[10],
        v = a[11],
        w = a[12],
        A = a[13],
        D = a[14];
        a = a[15];
        var z = c[0],
        B = c[1],
        J = c[2],
        K = c[3],
        M = c[4],
        Y = c[5],
        Ja = c[6],
        I = c[7],
        ba = c[8],
        oa = c[9],
        Ta = c[10],
        Aa = c[11],
        Ka = c[12],
        fc = c[13],
        uc = c[14];
        c = c[15];
        d[0] = e * z + k * B + q * J + w * K;
        d[1] = f * z + m * B + r * J + A * K;
        d[2] = g * z + n * B + t * J + D * K;
        d[3] = h * z + p * B + v * J + a * K;
        d[4] = e * M + k * Y + q * Ja + w * I;
        d[5] = f * M + m * Y + r * Ja + A * I;
        d[6] = g * M + n * Y + t * Ja + D * I;
        d[7] = h * M + p * Y + v * Ja + a * I;
        d[8] = e * ba + k * oa + q * Ta + w * Aa;
        d[9] = f * ba + m * oa + r * Ta + A * Aa;
        d[10] = g * ba + n * oa + t * Ta + D * Aa;
        d[11] = h * ba + p * oa + v * Ta + a * Aa;
        d[12] = e * Ka + k * fc + q * uc + w * c;
        d[13] = f * Ka + m * fc + r * uc + A * c;
        d[14] = g * Ka + n * fc + t * uc + D * c;
        d[15] = h * Ka + p * fc + v * uc + a * c
    }
    function jc(a, c) {
        var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        k = a[5],
        m = a[6],
        n = a[7],
        p = a[8],
        q = a[9],
        r = a[10],
        t = a[11],
        v = a[12],
        w = a[13],
        A = a[14],
        D = a[15],
        z = d * k - e * h,
        B = d * m - f * h,
        J = d * n - g * h,
        K = e * m - f * k,
        M = e * n - g * k,
        Y = f * n - g * m,
        Ja = p * w - q * v,
        I = p * A - r * v,
        ba = p * D - t * v,
        oa = q * A - r * w,
        Ta = q * D - t * w,
        Aa = r * D - t * A,
        Ka = z * Aa - B * Ta + J * oa + K * ba - M * I + Y * Ja;
        0 != Ka && (Ka = 1 / Ka, c[0] = (k * Aa - m * Ta + n * oa) * Ka, c[1] = ( - e * Aa + f * Ta - g * oa) * Ka, c[2] = (w * Y - A * M + D * K) * Ka, c[3] = ( - q * Y + r * M - t * K) * Ka, c[4] = ( - h * Aa + m * ba - n * I) * Ka, c[5] = (d * Aa - f * ba + g * I) * Ka, c[6] = ( - v * Y + A * J - D * B) * Ka, c[7] = (p * Y - r * J + t * B) * Ka, c[8] = (h * Ta - k * ba + n * Ja) * Ka, c[9] = ( - d * Ta + e * ba - g * Ja) * Ka, c[10] = (v * M - w * J + D * z) * Ka, c[11] = ( - p * M + q * J - t * z) * Ka, c[12] = ( - h * oa + k * I - m * Ja) * Ka, c[13] = (d * oa - e * I + f * Ja) * Ka, c[14] = ( - v * K + w * B - A * z) * Ka, c[15] = (p * K - q * B + r * z) * Ka)
    }
    function kc(a, c, d) {
        var e = a[1] * c + a[5] * d + 0 * a[9] + a[13],
        f = a[2] * c + a[6] * d + 0 * a[10] + a[14],
        g = a[3] * c + a[7] * d + 0 * a[11] + a[15];
        a[12] = a[0] * c + a[4] * d + 0 * a[8] + a[12];
        a[13] = e;
        a[14] = f;
        a[15] = g
    }
    function lc(a, c, d) {
        dc(a, a[0] * c, a[1] * c, a[2] * c, a[3] * c, a[4] * d, a[5] * d, a[6] * d, a[7] * d, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
    }
    function mc(a, c) {
        var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        k = a[5],
        m = a[6],
        n = a[7],
        p = Math.cos(c),
        q = Math.sin(c);
        a[0] = d * p + h * q;
        a[1] = e * p + k * q;
        a[2] = f * p + m * q;
        a[3] = g * p + n * q;
        a[4] = d * -q + h * p;
        a[5] = e * -q + k * p;
        a[6] = f * -q + m * p;
        a[7] = g * -q + n * p
    }
    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);
    function nc(a) {
        for (var c = oc(), d = 0, e = a.length; d < e; ++d) pc(c, a[d]);
        return c
    }
    function qc(a, c, d) {
        return d ? (d[0] = a[0] - c, d[1] = a[1] - c, d[2] = a[2] + c, d[3] = a[3] + c, d) : [a[0] - c, a[1] - c, a[2] + c, a[3] + c]
    }
    function rc(a, c) {
        return c ? (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c) : a.slice()
    }
    function sc(a, c, d) {
        c = c < a[0] ? a[0] - c: a[2] < c ? c - a[2] : 0;
        a = d < a[1] ? a[1] - d: a[3] < d ? d - a[3] : 0;
        return c * c + a * a
    }
    function tc(a, c) {
        return vc(a, c[0], c[1])
    }
    function wc(a, c) {
        return a[0] <= c[0] && c[2] <= a[2] && a[1] <= c[1] && c[3] <= a[3]
    }
    function vc(a, c, d) {
        return a[0] <= c && c <= a[2] && a[1] <= d && d <= a[3]
    }
    function xc(a, c) {
        var d = a[1],
        e = a[2],
        f = a[3],
        g = c[0],
        h = c[1],
        k = 0;
        g < a[0] ? k = k | 16 : g > e && (k = k | 4);
        h < d ? k |= 8 : h > f && (k |= 2);
        0 === k && (k = 1);
        return k
    }
    function oc() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }
    function yc(a, c, d, e, f) {
        return f ? (f[0] = a, f[1] = c, f[2] = d, f[3] = e, f) : [a, c, d, e]
    }
    function zc(a, c) {
        var d = a[0],
        e = a[1];
        return yc(d, e, d, e, c)
    }
    function Ac(a, c, d, e, f) {
        f = yc(Infinity, Infinity, -Infinity, -Infinity, f);
        return Bc(f, a, c, d, e)
    }
    function Cc(a, c) {
        return a[0] == c[0] && a[2] == c[2] && a[1] == c[1] && a[3] == c[3]
    }
    function Dc(a, c) {
        c[0] < a[0] && (a[0] = c[0]);
        c[2] > a[2] && (a[2] = c[2]);
        c[1] < a[1] && (a[1] = c[1]);
        c[3] > a[3] && (a[3] = c[3]);
        return a
    }
    function pc(a, c) {
        c[0] < a[0] && (a[0] = c[0]);
        c[0] > a[2] && (a[2] = c[0]);
        c[1] < a[1] && (a[1] = c[1]);
        c[1] > a[3] && (a[3] = c[1])
    }
    function Bc(a, c, d, e, f) {
        for (; d < e; d += f) {
            var g = a,
            h = c[d],
            k = c[d + 1];
            g[0] = Math.min(g[0], h);
            g[1] = Math.min(g[1], k);
            g[2] = Math.max(g[2], h);
            g[3] = Math.max(g[3], k)
        }
        return a
    }
    function Ec(a, c, d) {
        var e;
        return (e = c.call(d, Fc(a))) || (e = c.call(d, Gc(a))) || (e = c.call(d, Hc(a))) ? e: (e = c.call(d, Ic(a))) ? e: !1
    }
    function Jc(a) {
        var c = 0;
        Kc(a) || (c = Lc(a) * Mc(a));
        return c
    }
    function Fc(a) {
        return [a[0], a[1]]
    }
    function Gc(a) {
        return [a[2], a[1]]
    }
    function Nc(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }
    function Oc(a, c, d, e) {
        var f = c * e[0] / 2;
        e = c * e[1] / 2;
        c = Math.cos(d);
        var g = Math.sin(d);
        d = f * c;
        f *= g;
        c *= e;
        var h = e * g,
        k = a[0],
        m = a[1];
        a = k - d + h;
        e = k - d - h;
        g = k + d - h;
        d = k + d + h;
        var h = m - f - c,
        k = m - f + c,
        n = m + f + c,
        f = m + f - c;
        return yc(Math.min(a, e, g, d), Math.min(h, k, n, f), Math.max(a, e, g, d), Math.max(h, k, n, f), void 0)
    }
    function Mc(a) {
        return a[3] - a[1]
    }
    function Pc(a, c, d) {
        d = d ? d: oc();
        Qc(a, c) && (d[0] = a[0] > c[0] ? a[0] : c[0], d[1] = a[1] > c[1] ? a[1] : c[1], d[2] = a[2] < c[2] ? a[2] : c[2], d[3] = a[3] < c[3] ? a[3] : c[3]);
        return d
    }
    function Ic(a) {
        return [a[0], a[3]]
    }
    function Hc(a) {
        return [a[2], a[3]]
    }
    function Lc(a) {
        return a[2] - a[0]
    }
    function Qc(a, c) {
        return a[0] <= c[2] && a[2] >= c[0] && a[1] <= c[3] && a[3] >= c[1]
    }
    function Kc(a) {
        return a[2] < a[0] || a[3] < a[1]
    }
    function Rc(a, c) {
        var d = (a[2] - a[0]) / 2 * (c - 1),
        e = (a[3] - a[1]) / 2 * (c - 1);
        a[0] -= d;
        a[2] += d;
        a[1] -= e;
        a[3] += e
    }
    function Sc(a, c, d) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        c(a, a, 2);
        var e = [a[0], a[2], a[4], a[6]],
        f = [a[1], a[3], a[5], a[7]];
        c = Math.min.apply(null, e);
        a = Math.min.apply(null, f);
        e = Math.max.apply(null, e);
        f = Math.max.apply(null, f);
        return yc(c, a, e, f, d)
    };
    function Tc() {
        return ! 0
    }
    function Uc() {
        return ! 1
    };
    /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
    function Vc(a) {
        this.radius = a
    }
    Vc.prototype.a = function(a) {
        for (var c = 0,
        d = a.length,
        e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) var h = a[g][0],
        k = a[g][1],
        c = c + Pa(h - e) * (2 + Math.sin(Pa(f)) + Math.sin(Pa(k))),
        e = h,
        f = k;
        return c * this.radius * this.radius / 2
    };
    Vc.prototype.b = function(a, c) {
        var d = Pa(a[1]),
        e = Pa(c[1]),
        f = (e - d) / 2,
        g = Pa(c[0] - a[0]) / 2,
        d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
        return 2 * this.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    };
    Vc.prototype.offset = function(a, c, d) {
        var e = Pa(a[1]);
        c /= this.radius;
        var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
        return [180 * (Pa(a[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI]
    };
    var Wc = new Vc(6370997);
    var Xc = {};
    Xc.degrees = 2 * Math.PI * Wc.radius / 360;
    Xc.ft = .3048;
    Xc.m = 1;
    Xc["us-ft"] = 1200 / 3937;
    function Yc(a) {
        this.kb = a.code;
        this.g = a.units;
        this.c = void 0 !== a.extent ? a.extent: null;
        this.i = void 0 !== a.worldExtent ? a.worldExtent: null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation: "enu";
        this.f = void 0 !== a.global ? a.global: !1;
        this.a = !(!this.f || !this.c);
        this.o = void 0 !== a.getPointResolution ? a.getPointResolution: this.gk;
        this.j = null;
        this.l = a.metersPerUnit;
        var c = Zc,
        d = a.code,
        e = $c || aa.proj4;
        if ("function" == typeof e && void 0 === c[d]) {
            var f = e.defs(d);
            if (void 0 !== f) {
                void 0 !== f.axis && void 0 === a.axisOrientation && (this.b = f.axis);
                void 0 === a.metersPerUnit && (this.l = f.to_meter);
                void 0 === a.units && (this.g = f.units);
                for (var g in c) c = e.defs(g),
                void 0 !== c && (a = ad(g), c === f ? bd([a, this]) : (c = e(g, d), cd(a, this, c.forward, c.inverse)))
            }
        }
    }
    l = Yc.prototype;
    l.Ij = function() {
        return this.kb
    };
    l.G = function() {
        return this.c
    };
    l.xm = function() {
        return this.g
    };
    l.Xb = function() {
        return this.l || Xc[this.g]
    };
    l.tk = function() {
        return this.i
    };
    l.dl = function() {
        return this.f
    };
    l.Go = function(a) {
        this.f = a;
        this.a = !(!a || !this.c)
    };
    l.ym = function(a) {
        this.c = a;
        this.a = !(!this.f || !a)
    };
    l.Oo = function(a) {
        this.i = a
    };
    l.Fo = function(a) {
        this.o = a
    };
    l.gk = function(a, c) {
        if ("degrees" == this.g) return a;
        var d = dd(this, ad("EPSG:4326")),
        e = [c[0] - a / 2, c[1], c[0] + a / 2, c[1], c[0], c[1] - a / 2, c[0], c[1] + a / 2],
        e = d(e, e, 2),
        d = Wc.b(e.slice(0, 2), e.slice(2, 4)),
        e = Wc.b(e.slice(4, 6), e.slice(6, 8)),
        e = (d + e) / 2,
        d = this.Xb();
        void 0 !== d && (e /= d);
        return e
    };
    l.getPointResolution = function(a, c) {
        return this.o(a, c)
    };
    var Zc = {},
    ed = {},
    $c = null;
    function bd(a) {
        fd(a);
        a.forEach(function(c) {
            a.forEach(function(a) {
                c !== a && gd(c, a, hd)
            })
        })
    }
    function id() {
        var a = jd,
        c = kd,
        d = ld;
        md.forEach(function(e) {
            a.forEach(function(a) {
                gd(e, a, c);
                gd(a, e, d)
            })
        })
    }
    function nd(a) {
        Zc[a.kb] = a;
        gd(a, a, hd)
    }
    function fd(a) {
        var c = [];
        a.forEach(function(a) {
            c.push(nd(a))
        })
    }
    function od(a) {
        return a ? "string" === typeof a ? ad(a) : a: ad("EPSG:3857")
    }
    function gd(a, c, d) {
        a = a.kb;
        c = c.kb;
        a in ed || (ed[a] = {});
        ed[a][c] = d
    }
    function cd(a, c, d, e) {
        a = ad(a);
        c = ad(c);
        gd(a, c, pd(d));
        gd(c, a, pd(e))
    }
    function pd(a) {
        return function(c, d, e) {
            var f = c.length;
            e = void 0 !== e ? e: 2;
            d = void 0 !== d ? d: Array(f);
            var g, h;
            for (h = 0; h < f; h += e) for (g = a([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g) d[h + g] = c[h + g];
            return d
        }
    }
    function ad(a) {
        var c;
        if (a instanceof Yc) c = a;
        else if ("string" === typeof a) {
            c = Zc[a];
            var d = $c || aa.proj4;
            void 0 === c && "function" == typeof d && void 0 !== d.defs(a) && (c = new Yc({
                code: a
            }), nd(c))
        } else c = null;
        return c
    }
    function qd(a, c) {
        if (a === c) return ! 0;
        var d = a.g === c.g;
        return a.kb === c.kb ? d: dd(a, c) === hd && d
    }
    function rd(a, c) {
        var d = ad(a),
        e = ad(c);
        return dd(d, e)
    }
    function dd(a, c) {
        var d = a.kb,
        e = c.kb,
        f;
        d in ed && e in ed[d] && (f = ed[d][e]);
        void 0 === f && (f = sd);
        return f
    }
    function sd(a, c) {
        if (void 0 !== c && a !== c) {
            for (var d = 0,
            e = a.length; d < e; ++d) c[d] = a[d];
            a = c
        }
        return a
    }
    function hd(a, c) {
        var d;
        if (void 0 !== c) {
            d = 0;
            for (var e = a.length; d < e; ++d) c[d] = a[d];
            d = c
        } else d = a.slice();
        return d
    }
    function td(a, c, d) {
        return rd(c, d)(a, void 0, a.length)
    }
    function ud(a, c, d) {
        c = rd(c, d);
        return Sc(a, c)
    };
    function vd() {
        Kb.call(this);
        this.A = oc();
        this.B = -1;
        this.j = {};
        this.s = this.o = 0
    }
    y(vd, Kb);
    l = vd.prototype;
    l.xb = function(a, c) {
        var d = c ? c: [NaN, NaN];
        this.ub(a[0], a[1], d, Infinity);
        return d
    };
    l.lg = function(a) {
        return this.yc(a[0], a[1])
    };
    l.yc = Uc;
    l.G = function(a) {
        this.B != this.g && (this.A = this.Ld(this.A), this.B = this.g);
        var c = this.A;
        a ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3]) : a = c;
        return a
    };
    l.Ab = function(a) {
        return this.kd(a * a)
    };
    l.hb = function(a, c) {
        this.oc(rd(a, c));
        return this
    };
    function wd(a, c, d, e, f, g) {
        var h = f[0],
        k = f[1],
        m = f[4],
        n = f[5],
        p = f[12];
        f = f[13];
        for (var q = g ? g: [], r = 0; c < d; c += e) {
            var t = a[c],
            v = a[c + 1];
            q[r++] = h * t + m * v + p;
            q[r++] = k * t + n * v + f
        }
        g && q.length != r && (q.length = r);
        return q
    };
    function xd() {
        vd.call(this);
        this.f = "XY";
        this.a = 2;
        this.v = null
    }
    y(xd, vd);
    function yd(a) {
        if ("XY" == a) return 2;
        if ("XYZ" == a || "XYM" == a) return 3;
        if ("XYZM" == a) return 4
    }
    l = xd.prototype;
    l.yc = Uc;
    l.Ld = function(a) {
        return Ac(this.v, 0, this.v.length, this.a, a)
    };
    l.Fb = function() {
        return this.v.slice(0, this.a)
    };
    l.ga = function() {
        return this.v
    };
    l.Gb = function() {
        return this.v.slice(this.v.length - this.a)
    };
    l.Hb = function() {
        return this.f
    };
    l.kd = function(a) {
        this.s != this.g && (nb(this.j), this.o = 0, this.s = this.g);
        if (0 > a || 0 !== this.o && a <= this.o) return this;
        var c = a.toString();
        if (this.j.hasOwnProperty(c)) return this.j[c];
        var d = this.Hc(a);
        if (d.ga().length < this.v.length) return this.j[c] = d;
        this.o = a;
        return this
    };
    l.Hc = function() {
        return this
    };
    l.ra = function() {
        return this.a
    };
    function zd(a, c, d) {
        a.a = yd(c);
        a.f = c;
        a.v = d
    }
    function Ad(a, c, d, e) {
        if (c) d = yd(c);
        else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    a.f = "XY";
                    a.a = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY": 3 == d ? "XYZ": 4 == d ? "XYZM": void 0
        }
        a.f = c;
        a.a = d
    }
    l.oc = function(a) {
        this.v && (a(this.v, this.v, this.a), this.u())
    };
    l.rotate = function(a, c) {
        var d = this.ga();
        if (d) {
            for (var e = d.length,
            f = this.ra(), g = d ? d: [], h = Math.cos(a), k = Math.sin(a), m = c[0], n = c[1], p = 0, q = 0; q < e; q += f) {
                var r = d[q] - m,
                t = d[q + 1] - n;
                g[p++] = m + r * h - t * k;
                g[p++] = n + r * k + t * h;
                for (r = q + 2; r < q + f; ++r) g[p++] = d[r]
            }
            d && g.length != p && (g.length = p);
            this.u()
        }
    };
    l.Mc = function(a, c) {
        var d = this.ga();
        if (d) {
            var e = d.length,
            f = this.ra(),
            g = d ? d: [],
            h = 0,
            k,
            m;
            for (k = 0; k < e; k += f) for (g[h++] = d[k] + a, g[h++] = d[k + 1] + c, m = k + 2; m < k + f; ++m) g[h++] = d[m];
            d && g.length != h && (g.length = h);
            this.u()
        }
    };
    function Bd(a, c, d, e) {
        for (var f = 0,
        g = a[d - e], h = a[d - e + 1]; c < d; c += e) var k = a[c],
        m = a[c + 1],
        f = f + (h * k - g * m),
        g = k,
        h = m;
        return f / 2
    }
    function Cd(a, c, d, e) {
        var f = 0,
        g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
            f = f + Bd(a, c, k, e);
            c = k
        }
        return f
    };
    function Dd(a, c, d, e, f, g, h) {
        var k = a[c],
        m = a[c + 1],
        n = a[d] - k,
        p = a[d + 1] - m;
        if (0 !== n || 0 !== p) if (g = ((f - k) * n + (g - m) * p) / (n * n + p * p), 1 < g) c = d;
        else if (0 < g) {
            for (f = 0; f < e; ++f) h[f] = Ra(a[c + f], a[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f) h[f] = a[c + f];
        h.length = e
    }
    function Ed(a, c, d, e, f) {
        var g = a[c],
        h = a[c + 1];
        for (c += e; c < d; c += e) {
            var k = a[c],
            m = a[c + 1],
            g = Oa(g, h, k, m);
            g > f && (f = g);
            g = k;
            h = m
        }
        return f
    }
    function Fd(a, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g];
            f = Ed(a, c, k, e, f);
            c = k
        }
        return f
    }
    function Gd(a, c, d, e, f, g, h, k, m, n, p) {
        if (c == d) return n;
        var q;
        if (0 === f) {
            q = Oa(h, k, a[c], a[c + 1]);
            if (q < n) {
                for (p = 0; p < e; ++p) m[p] = a[c + p];
                m.length = e;
                return q
            }
            return n
        }
        for (var r = p ? p: [NaN, NaN], t = c + e; t < d;) if (Dd(a, t - e, t, e, h, k, r), q = Oa(h, k, r[0], r[1]), q < n) {
            n = q;
            for (p = 0; p < e; ++p) m[p] = r[p];
            m.length = e;
            t += e
        } else t += e * Math.max((Math.sqrt(q) - Math.sqrt(n)) / f | 0, 1);
        if (g && (Dd(a, d - e, c, e, h, k, r), q = Oa(h, k, r[0], r[1]), q < n)) {
            n = q;
            for (p = 0; p < e; ++p) m[p] = r[p];
            m.length = e
        }
        return n
    }
    function Hd(a, c, d, e, f, g, h, k, m, n, p) {
        p = p ? p: [NaN, NaN];
        var q, r;
        q = 0;
        for (r = d.length; q < r; ++q) {
            var t = d[q];
            n = Gd(a, c, t, e, f, g, h, k, m, n, p);
            c = t
        }
        return n
    };
    function Id(a, c) {
        var d = 0,
        e, f;
        e = 0;
        for (f = c.length; e < f; ++e) a[d++] = c[e];
        return d
    }
    function Jd(a, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f],
            k;
            for (k = 0; k < e; ++k) a[c++] = h[k]
        }
        return c
    }
    function Kd(a, c, d, e, f) {
        f = f ? f: [];
        var g = 0,
        h, k;
        h = 0;
        for (k = d.length; h < k; ++h) c = Jd(a, c, d[h], e),
        f[g++] = c;
        f.length = g;
        return f
    };
    function Ld(a, c, d, e, f) {
        f = void 0 !== f ? f: [];
        for (var g = 0; c < d; c += e) f[g++] = a.slice(c, c + e);
        f.length = g;
        return f
    }
    function Md(a, c, d, e, f) {
        f = void 0 !== f ? f: [];
        var g = 0,
        h, k;
        h = 0;
        for (k = d.length; h < k; ++h) {
            var m = d[h];
            f[g++] = Ld(a, c, m, e, f[g]);
            c = m
        }
        f.length = g;
        return f
    };
    function Nd(a, c, d, e, f, g, h) {
        var k = (d - c) / e;
        if (3 > k) {
            for (; c < d; c += e) g[h++] = a[c],
            g[h++] = a[c + 1];
            return h
        }
        var m = Array(k);
        m[0] = 1;
        m[k - 1] = 1;
        d = [c, d - e];
        for (var n = 0,
        p; 0 < d.length;) {
            var q = d.pop(),
            r = d.pop(),
            t = 0,
            v = a[r],
            w = a[r + 1],
            A = a[q],
            D = a[q + 1];
            for (p = r + e; p < q; p += e) {
                var z = Na(a[p], a[p + 1], v, w, A, D);
                z > t && (n = p, t = z)
            }
            t > f && (m[(n - c) / e] = 1, r + e < n && d.push(r, n), n + e < q && d.push(n, q))
        }
        for (p = 0; p < k; ++p) m[p] && (g[h++] = a[c + p * e], g[h++] = a[c + p * e + 1]);
        return h
    }
    function Od(a, c, d, e, f, g, h, k) {
        var m, n;
        m = 0;
        for (n = d.length; m < n; ++m) {
            var p = d[m];
            a: {
                var q = a,
                r = p,
                t = e,
                v = f,
                w = g;
                if (c != r) {
                    var A = v * Math.round(q[c] / v),
                    D = v * Math.round(q[c + 1] / v);
                    c += t;
                    w[h++] = A;
                    w[h++] = D;
                    var z = void 0,
                    B = void 0;
                    do
                    if (z = v * Math.round(q[c] / v), B = v * Math.round(q[c + 1] / v), c += t, c == r) {
                        w[h++] = z;
                        w[h++] = B;
                        break a
                    }
                    while (z == A && B == D);
                    for (; c < r;) {
                        var J, K;
                        J = v * Math.round(q[c] / v);
                        K = v * Math.round(q[c + 1] / v);
                        c += t;
                        if (J != z || K != B) {
                            var M = z - A,
                            Y = B - D,
                            Ja = J - A,
                            I = K - D;
                            M * I == Y * Ja && (0 > M && Ja < M || M == Ja || 0 < M && Ja > M) && (0 > Y && I < Y || Y == I || 0 < Y && I > Y) || (w[h++] = z, w[h++] = B, A = z, D = B);
                            z = J;
                            B = K
                        }
                    }
                    w[h++] = z;
                    w[h++] = B
                }
            }
            k.push(h);
            c = p
        }
        return h
    };
    function Pd(a, c) {
        xd.call(this);
        this.i = this.l = -1;
        this.ma(a, c)
    }
    y(Pd, xd);
    l = Pd.prototype;
    l.clone = function() {
        var a = new Pd(null);
        Qd(a, this.f, this.v.slice());
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        this.i != this.g && (this.l = Math.sqrt(Ed(this.v, 0, this.v.length, this.a, 0)), this.i = this.g);
        return Gd(this.v, 0, this.v.length, this.a, this.l, !0, a, c, d, e)
    };
    l.Zl = function() {
        return Bd(this.v, 0, this.v.length, this.a)
    };
    l.Z = function() {
        return Ld(this.v, 0, this.v.length, this.a)
    };
    l.Hc = function(a) {
        var c = [];
        c.length = Nd(this.v, 0, this.v.length, this.a, a, c, 0);
        a = new Pd(null);
        Qd(a, "XY", c);
        return a
    };
    l.X = function() {
        return "LinearRing"
    };
    l.ma = function(a, c) {
        a ? (Ad(this, c, a, 1), this.v || (this.v = []), this.v.length = Jd(this.v, 0, a, this.a), this.u()) : Qd(this, "XY", null)
    };
    function Qd(a, c, d) {
        zd(a, c, d);
        a.u()
    };
    function E(a, c) {
        xd.call(this);
        this.ma(a, c)
    }
    y(E, xd);
    l = E.prototype;
    l.clone = function() {
        var a = new E(null);
        a.ba(this.f, this.v.slice());
        return a
    };
    l.ub = function(a, c, d, e) {
        var f = this.v;
        a = Oa(a, c, f[0], f[1]);
        if (a < e) {
            e = this.a;
            for (c = 0; c < e; ++c) d[c] = f[c];
            d.length = e;
            return a
        }
        return e
    };
    l.Z = function() {
        return this.v ? this.v.slice() : []
    };
    l.Ld = function(a) {
        return zc(this.v, a)
    };
    l.X = function() {
        return "Point"
    };
    l.Ka = function(a) {
        return vc(a, this.v[0], this.v[1])
    };
    l.ma = function(a, c) {
        a ? (Ad(this, c, a, 0), this.v || (this.v = []), this.v.length = Id(this.v, a), this.u()) : this.ba("XY", null)
    };
    l.ba = function(a, c) {
        zd(this, a, c);
        this.u()
    };
    function Rd(a, c, d, e, f) {
        return ! Ec(f,
        function(f) {
            return ! Sd(a, c, d, e, f[0], f[1])
        })
    }
    function Sd(a, c, d, e, f, g) {
        for (var h = !1,
        k = a[d - e], m = a[d - e + 1]; c < d; c += e) {
            var n = a[c],
            p = a[c + 1];
            m > g != p > g && f < (n - k) * (g - m) / (p - m) + k && (h = !h);
            k = n;
            m = p
        }
        return h
    }
    function Td(a, c, d, e, f, g) {
        if (0 === d.length || !Sd(a, c, d[0], e, f, g)) return ! 1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c) if (Sd(a, d[c - 1], d[c], e, f, g)) return ! 1;
        return ! 0
    };
    function Ud(a, c, d, e, f, g, h) {
        var k, m, n, p, q, r = f[g + 1],
        t = [],
        v = d[0];
        n = a[v - e];
        q = a[v - e + 1];
        for (k = c; k < v; k += e) {
            p = a[k];
            m = a[k + 1];
            if (r <= q && m <= r || q <= r && r <= m) n = (r - q) / (m - q) * (p - n) + n,
            t.push(n);
            n = p;
            q = m
        }
        v = NaN;
        q = -Infinity;
        t.sort(Va);
        n = t[0];
        k = 1;
        for (m = t.length; k < m; ++k) {
            p = t[k];
            var w = Math.abs(p - n);
            w > q && (n = (n + p) / 2, Td(a, c, d, e, n, r) && (v = n, q = w));
            n = p
        }
        isNaN(v) && (v = f[g]);
        return h ? (h.push(v, r), h) : [v, r]
    };
    function Vd(a, c, d, e, f, g) {
        for (var h = [a[c], a[c + 1]], k = [], m; c + e < d; c += e) {
            k[0] = a[c + e];
            k[1] = a[c + e + 1];
            if (m = f.call(g, h, k)) return m;
            h[0] = k[0];
            h[1] = k[1]
        }
        return ! 1
    };
    function Wd(a, c, d, e, f) {
        var g = Bc(oc(), a, c, d, e);
        return Qc(f, g) ? wc(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : Vd(a, c, d, e,
        function(a, c) {
            var d = !1,
            e = xc(f, a),
            g = xc(f, c);
            if (1 === e || 1 === g) d = !0;
            else {
                var q = f[0],
                r = f[1],
                t = f[2],
                v = f[3],
                w = c[0],
                A = c[1],
                D = (A - a[1]) / (w - a[0]);
                g & 2 && !(e & 2) && (d = w - (A - v) / D, d = d >= q && d <= t);
                d || !(g & 4) || e & 4 || (d = A - (w - t) * D, d = d >= r && d <= v);
                d || !(g & 8) || e & 8 || (d = w - (A - r) / D, d = d >= q && d <= t);
                d || !(g & 16) || e & 16 || (d = A - (w - q) * D, d = d >= r && d <= v)
            }
            return d
        }) : !1
    }
    function Xd(a, c, d, e, f) {
        var g = d[0];
        if (! (Wd(a, c, g, e, f) || Sd(a, c, g, e, f[0], f[1]) || Sd(a, c, g, e, f[0], f[3]) || Sd(a, c, g, e, f[2], f[1]) || Sd(a, c, g, e, f[2], f[3]))) return ! 1;
        if (1 === d.length) return ! 0;
        c = 1;
        for (g = d.length; c < g; ++c) if (Rd(a, d[c - 1], d[c], e, f)) return ! 1;
        return ! 0
    };
    function Yd(a, c, d, e) {
        for (var f = 0,
        g = a[d - e], h = a[d - e + 1]; c < d; c += e) var k = a[c],
        m = a[c + 1],
        f = f + (k - g) * (m + h),
        g = k,
        h = m;
        return 0 < f
    }
    function Zd(a, c, d, e) {
        var f = 0;
        e = void 0 !== e ? e: !1;
        var g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g],
            f = Yd(a, f, k, d);
            if (0 === g) {
                if (e && f || !e && !f) return ! 1
            } else if (e && !f || !e && f) return ! 1;
            f = k
        }
        return ! 0
    }
    function $d(a, c, d, e, f) {
        f = void 0 !== f ? f: !1;
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
            m = Yd(a, c, k, e);
            if (0 === g ? f && m || !f && !m: f && !m || !f && m) for (var m = a,
            n = k,
            p = e; c < n - p;) {
                var q;
                for (q = 0; q < p; ++q) {
                    var r = m[c + q];
                    m[c + q] = m[n - p + q];
                    m[n - p + q] = r
                }
                c += p;
                n -= p
            }
            c = k
        }
        return c
    }
    function ae(a, c, d, e) {
        var f = 0,
        g, h;
        g = 0;
        for (h = c.length; g < h; ++g) f = $d(a, f, c[g], d, e);
        return f
    };
    function F(a, c) {
        xd.call(this);
        this.i = [];
        this.N = -1;
        this.H = null;
        this.T = this.D = this.S = -1;
        this.l = null;
        this.ma(a, c)
    }
    y(F, xd);
    l = F.prototype;
    l.pj = function(a) {
        this.v ? Za(this.v, a.ga()) : this.v = a.ga().slice();
        this.i.push(this.v.length);
        this.u()
    };
    l.clone = function() {
        var a = new F(null);
        a.ba(this.f, this.v.slice(), this.i.slice());
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        this.D != this.g && (this.S = Math.sqrt(Fd(this.v, 0, this.i, this.a, 0)), this.D = this.g);
        return Hd(this.v, 0, this.i, this.a, this.S, !0, a, c, d, e)
    };
    l.yc = function(a, c) {
        return Td(this.Mb(), 0, this.i, this.a, a, c)
    };
    l.bm = function() {
        return Cd(this.Mb(), 0, this.i, this.a)
    };
    l.Z = function(a) {
        var c;
        void 0 !== a ? (c = this.Mb().slice(), $d(c, 0, this.i, this.a, a)) : c = this.v;
        return Md(c, 0, this.i, this.a)
    };
    l.Bb = function() {
        return this.i
    };
    function be(a) {
        if (a.N != a.g) {
            var c = Nc(a.G());
            a.H = Ud(a.Mb(), 0, a.i, a.a, c, 0);
            a.N = a.g
        }
        return a.H
    }
    l.Rj = function() {
        return new E(be(this))
    };
    l.Wj = function() {
        return this.i.length
    };
    l.Ag = function(a) {
        if (0 > a || this.i.length <= a) return null;
        var c = new Pd(null);
        Qd(c, this.f, this.v.slice(0 === a ? 0 : this.i[a - 1], this.i[a]));
        return c
    };
    l.Qd = function() {
        var a = this.f,
        c = this.v,
        d = this.i,
        e = [],
        f = 0,
        g,
        h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
            m = new Pd(null);
            Qd(m, a, c.slice(f, k));
            e.push(m);
            f = k
        }
        return e
    };
    l.Mb = function() {
        if (this.T != this.g) {
            var a = this.v;
            Zd(a, this.i, this.a) ? this.l = a: (this.l = a.slice(), this.l.length = $d(this.l, 0, this.i, this.a));
            this.T = this.g
        }
        return this.l
    };
    l.Hc = function(a) {
        var c = [],
        d = [];
        c.length = Od(this.v, 0, this.i, this.a, Math.sqrt(a), c, 0, d);
        a = new F(null);
        a.ba("XY", c, d);
        return a
    };
    l.X = function() {
        return "Polygon"
    };
    l.Ka = function(a) {
        return Xd(this.Mb(), 0, this.i, this.a, a)
    };
    l.ma = function(a, c) {
        if (a) {
            Ad(this, c, a, 2);
            this.v || (this.v = []);
            var d = Kd(this.v, 0, a, this.a, this.i);
            this.v.length = 0 === d.length ? 0 : d[d.length - 1];
            this.u()
        } else this.ba("XY", null, this.i)
    };
    l.ba = function(a, c, d) {
        zd(this, a, c);
        this.i = d;
        this.u()
    };
    function ce(a, c, d, e) {
        var f = e ? e: 32;
        e = [];
        var g;
        for (g = 0; g < f; ++g) Za(e, a.offset(c, d, 2 * Math.PI * g / f));
        e.push(e[0], e[1]);
        a = new F(null);
        a.ba("XY", e, [e.length]);
        return a
    }
    function de(a) {
        var c = a[0],
        d = a[1],
        e = a[2];
        a = a[3];
        c = [c, d, c, a, e, a, e, d, c, d];
        d = new F(null);
        d.ba("XY", c, [c.length]);
        return d
    }
    function ee(a, c, d) {
        var e = c ? c: 32,
        f = a.ra();
        c = a.f;
        for (var g = new F(null, c), e = f * (e + 1), f = Array(e), h = 0; h < e; h++) f[h] = 0;
        g.ba(c, f, [f.length]);
        fe(g, a.od(), a.qf(), d);
        return g
    }
    function fe(a, c, d, e) {
        var f = a.ga(),
        g = a.f,
        h = a.ra(),
        k = a.Bb(),
        m = f.length / h - 1;
        e = e ? e: 0;
        for (var n, p, q = 0; q <= m; ++q) p = q * h,
        n = e + 2 * Qa(q, m) * Math.PI / m,
        f[p] = c[0] + d * Math.cos(n),
        f[p + 1] = c[1] + d * Math.sin(n);
        a.ba(g, f, k)
    };
    function ge(a) {
        Kb.call(this);
        a = a || {};
        this.f = [0, 0];
        var c = {};
        c.center = void 0 !== a.center ? a.center: null;
        this.i = od(a.projection);
        var d, e, f, g = void 0 !== a.minZoom ? a.minZoom: 0;
        d = void 0 !== a.maxZoom ? a.maxZoom: 28;
        var h = void 0 !== a.zoomFactor ? a.zoomFactor: 2;
        if (void 0 !== a.resolutions) d = a.resolutions,
        e = d[0],
        f = d[d.length - 1],
        d = fb(d);
        else {
            e = od(a.projection);
            f = e.G();
            var k = (f ? Math.max(Lc(f), Mc(f)) : 360 * Xc.degrees / e.Xb()) / 256 / Math.pow(2, 0),
            m = k / Math.pow(2, 28);
            e = a.maxResolution;
            void 0 !== e ? g = 0 : e = k / Math.pow(h, g);
            f = a.minResolution;
            void 0 === f && (f = void 0 !== a.maxZoom ? void 0 !== a.maxResolution ? e / Math.pow(h, d) : k / Math.pow(h, d) : m);
            d = g + Math.floor(Math.log(e / f) / Math.log(h));
            f = e / Math.pow(h, d - g);
            d = gb(h, e, d - g)
        }
        this.a = e;
        this.o = f;
        this.c = g;
        g = void 0 !== a.extent ? Sa(a.extent) : Ua; (void 0 !== a.enableRotation ? a.enableRotation: 1) ? (e = a.constrainRotation, e = void 0 === e || !0 === e ? kb() : !1 === e ? ib: ha(e) ? jb(e) : ib) : e = hb;
        this.j = new lb(g, d, e);
        void 0 !== a.resolution ? c.resolution = a.resolution: void 0 !== a.zoom && (c.resolution = this.constrainResolution(this.a, a.zoom - this.c));
        c.rotation = void 0 !== a.rotation ? a.rotation: 0;
        this.C(c)
    }
    y(ge, Kb);
    l = ge.prototype;
    l.Md = function(a) {
        return this.j.center(a)
    };
    l.constrainResolution = function(a, c, d) {
        return this.j.resolution(a, c || 0, d || 0)
    };
    l.constrainRotation = function(a, c) {
        return this.j.rotation(a, c || 0)
    };
    l.bb = function() {
        return this.get("center")
    };
    l.Gc = function(a) {
        var c = this.bb(),
        d = this.$(),
        e = this.Ma();
        return Oc(c, d, e, a)
    };
    l.Jl = function() {
        return this.i
    };
    l.$ = function() {
        return this.get("resolution")
    };
    function he(a, c) {
        return Math.max(Lc(a) / c[0], Mc(a) / c[1])
    }
    function ie(a) {
        var c = a.a,
        d = Math.log(c / a.o) / Math.log(2);
        return function(a) {
            return c / Math.pow(2, a * d)
        }
    }
    l.Ma = function() {
        return this.get("rotation")
    };
    function je(a) {
        var c = a.a,
        d = Math.log(c / a.o) / Math.log(2);
        return function(a) {
            return Math.log(c / a) / Math.log(2) / d
        }
    }
    l.V = function() {
        var a = this.bb(),
        c = this.i,
        d = this.$(),
        e = this.Ma();
        return {
            center: [Math.round(a[0] / d) * d, Math.round(a[1] / d) * d],
            projection: void 0 !== c ? c: null,
            resolution: d,
            rotation: e
        }
    };
    l.uk = function() {
        var a, c = this.$();
        if (void 0 !== c) {
            var d, e = 0;
            do {
                d = this.constrainResolution(this.a, e);
                if (d == c) {
                    a = e;
                    break
                }++e
            } while ( d > this . o )
        }
        return void 0 !== a ? this.c + a: a
    };
    l.Xe = function(a, c, d) {
        a instanceof xd || (a = de(a));
        var e = d || {};
        d = void 0 !== e.padding ? e.padding: [0, 0, 0, 0];
        var f = void 0 !== e.constrainResolution ? e.constrainResolution: !0,
        g = void 0 !== e.nearest ? e.nearest: !1,
        h;
        void 0 !== e.minResolution ? h = e.minResolution: void 0 !== e.maxZoom ? h = this.constrainResolution(this.a, e.maxZoom - this.c, 0) : h = 0;
        var k = a.ga(),
        m = this.Ma(),
        e = Math.cos( - m),
        m = Math.sin( - m),
        n = Infinity,
        p = Infinity,
        q = -Infinity,
        r = -Infinity;
        a = a.ra();
        for (var t = 0,
        v = k.length; t < v; t += a) var w = k[t] * e - k[t + 1] * m,
        A = k[t] * m + k[t + 1] * e,
        n = Math.min(n, w),
        p = Math.min(p, A),
        q = Math.max(q, w),
        r = Math.max(r, A);
        c = he([n, p, q, r], [c[0] - d[1] - d[3], c[1] - d[0] - d[2]]);
        c = isNaN(c) ? h: Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        this.Sb(c);
        m = -m;
        g = (n + q) / 2 + (d[1] - d[3]) / 2 * c;
        d = (p + r) / 2 + (d[0] - d[2]) / 2 * c;
        this.lb([g * e - d * m, d * e + g * m])
    };
    l.vj = function(a, c, d) {
        var e = this.Ma(),
        f = Math.cos( - e),
        e = Math.sin( - e),
        g = a[0] * f - a[1] * e;
        a = a[1] * f + a[0] * e;
        var h = this.$(),
        g = g + (c[0] / 2 - d[0]) * h;
        a += (d[1] - c[1] / 2) * h;
        e = -e;
        this.lb([g * f - a * e, a * f + g * e])
    };
    function ke(a) {
        return !! a.bb() && void 0 !== a.$()
    }
    l.rotate = function(a, c) {
        if (void 0 !== c) {
            var d, e = this.bb();
            void 0 !== e && (d = [e[0] - c[0], e[1] - c[1]], Wb(d, a - this.Ma()), Rb(d, c));
            this.lb(d)
        }
        this.ee(a)
    };
    l.lb = function(a) {
        this.set("center", a)
    };
    function le(a, c) {
        a.f[1] += c
    }
    l.Sb = function(a) {
        this.set("resolution", a)
    };
    l.ee = function(a) {
        this.set("rotation", a)
    };
    l.Po = function(a) {
        a = this.constrainResolution(this.a, a - this.c, 0);
        this.Sb(a)
    };
    function me(a) {
        return Math.pow(a, 3)
    }
    function ne(a) {
        return 1 - me(1 - a)
    }
    function oe(a) {
        return 3 * a * a - 2 * a * a * a
    }
    function pe(a) {
        return a
    }
    function qe(a) {
        return.5 > a ? oe(2 * a) : 1 - oe(2 * (a - .5))
    };
    function re(a) {
        var c = a.source,
        d = a.start ? a.start: Date.now(),
        e = c[0],
        f = c[1],
        g = void 0 !== a.duration ? a.duration: 1E3,
        h = a.easing ? a.easing: oe;
        return function(a, c) {
            if (c.time < d) return c.animate = !0,
            c.viewHints[0] += 1,
            !0;
            if (c.time < d + g) {
                var n = 1 - h((c.time - d) / g),
                p = e - c.viewState.center[0],
                q = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += n * p;
                c.viewState.center[1] += n * q;
                c.viewHints[0] += 1;
                return ! 0
            }
            return ! 1
        }
    }
    function se(a) {
        var c = a.rotation ? a.rotation: 0,
        d = a.start ? a.start: Date.now(),
        e = void 0 !== a.duration ? a.duration: 1E3,
        f = a.easing ? a.easing: oe,
        g = a.anchor ? a.anchor: null;
        return function(a, k) {
            if (k.time < d) return k.animate = !0,
            k.viewHints[0] += 1,
            !0;
            if (k.time < d + e) {
                var m = 1 - f((k.time - d) / e),
                m = (c - k.viewState.rotation) * m;
                k.animate = !0;
                k.viewState.rotation += m;
                if (g) {
                    var n = k.viewState.center;
                    n[0] -= g[0];
                    n[1] -= g[1];
                    Wb(n, m);
                    Rb(n, g)
                }
                k.viewHints[0] += 1;
                return ! 0
            }
            return ! 1
        }
    }
    function te(a) {
        var c = a.resolution,
        d = a.start ? a.start: Date.now(),
        e = void 0 !== a.duration ? a.duration: 1E3,
        f = a.easing ? a.easing: oe;
        return function(a, h) {
            if (h.time < d) return h.animate = !0,
            h.viewHints[0] += 1,
            !0;
            if (h.time < d + e) {
                var k = 1 - f((h.time - d) / e),
                m = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * m;
                h.viewHints[0] += 1;
                return ! 0
            }
            return ! 1
        }
    };
    function ue(a, c, d, e) {
        return void 0 !== e ? (e[0] = a, e[1] = c, e[2] = d, e) : [a, c, d]
    }
    function ve(a) {
        var c = a[0],
        d = Array(c),
        e = 1 << c - 1,
        f,
        g;
        for (f = 0; f < c; ++f) g = 48,
        a[1] & e && (g += 1),
        a[2] & e && (g += 2),
        d[f] = String.fromCharCode(g),
        e >>= 1;
        return d.join("")
    };
    function we(a, c, d, e) {
        this.ua = a;
        this.wa = c;
        this.za = d;
        this.Ba = e
    }
    we.prototype.contains = function(a) {
        return xe(this, a[1], a[2])
    };
    function xe(a, c, d) {
        return a.ua <= c && c <= a.wa && a.za <= d && d <= a.Ba
    }
    function ye(a, c) {
        return a.ua == c.ua && a.za == c.za && a.wa == c.wa && a.Ba == c.Ba
    }
    function ze(a, c) {
        return a.ua <= c.wa && a.wa >= c.ua && a.za <= c.Ba && a.Ba >= c.za
    };
    function Ae(a) {
        this.a = a.html;
        this.b = a.tileRanges ? a.tileRanges: null
    }
    Ae.prototype.g = function() {
        return this.a
    };
    function Be(a, c, d) {
        Cb.call(this, a, d);
        this.element = c
    }
    y(Be, Cb);
    function De(a) {
        Kb.call(this);
        this.a = a ? a: [];
        Ee(this)
    }
    y(De, Kb);
    l = De.prototype;
    l.clear = function() {
        for (; 0 < this.Zb();) this.pop()
    };
    l.jf = function(a) {
        var c, d;
        c = 0;
        for (d = a.length; c < d; ++c) this.push(a[c]);
        return this
    };
    l.forEach = function(a, c) {
        this.a.forEach(a, c)
    };
    l.ul = function() {
        return this.a
    };
    l.item = function(a) {
        return this.a[a]
    };
    l.Zb = function() {
        return this.get("length")
    };
    l.Zd = function(a, c) {
        this.a.splice(a, 0, c);
        Ee(this);
        this.b(new Be("add", c, this))
    };
    l.pop = function() {
        return this.Lf(this.Zb() - 1)
    };
    l.push = function(a) {
        var c = this.a.length;
        this.Zd(c, a);
        return c
    };
    l.remove = function(a) {
        var c = this.a,
        d, e;
        d = 0;
        for (e = c.length; d < e; ++d) if (c[d] === a) return this.Lf(d)
    };
    l.Lf = function(a) {
        var c = this.a[a];
        this.a.splice(a, 1);
        Ee(this);
        this.b(new Be("remove", c, this));
        return c
    };
    l.Co = function(a, c) {
        var d = this.Zb();
        if (a < d) d = this.a[a],
        this.a[a] = c,
        this.b(new Be("remove", d, this)),
        this.b(new Be("add", c, this));
        else {
            for (; d < a; ++d) this.Zd(d, void 0);
            this.Zd(a, c)
        }
    };
    function Ee(a) {
        a.set("length", a.a.length)
    };
    var Fe = Array.prototype.forEach ?
    function(a, c, d) {
        Array.prototype.forEach.call(a, c, d)
    }: function(a, c, d) {
        for (var e = a.length,
        f = ga(a) ? a.split("") : a, g = 0; g < e; g++) g in f && c.call(d, f[g], g, a)
    };
    function Ge(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }
    function He(a) {
        var c = a.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = a[e];
            return d
        }
        return []
    }
    function Ie(a, c, d) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d)
    };
    var Je = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Ke = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
    Le = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;
    function Me(a) {
        return Array.isArray(a) ? a: Ne(a)
    }
    function Oe(a) {
        if ("string" !== typeof a) {
            var c = a[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = a[2];
            e != (e | 0) && (e = e + .5 | 0);
            a = "rgba(" + c + "," + d + "," + e + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }
    var Ne = function() {
        var a = {},
        c = 0;
        return function(d) {
            var e;
            if (a.hasOwnProperty(d)) e = a[d];
            else {
                if (1024 <= c) {
                    e = 0;
                    for (var f in a) 0 === (e++&3) && (delete a[f], --c)
                }
                var g, h;
                Je.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = Le.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = Pe(e, e)) : (h = Ke.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), e = [e, f, g, 1], e = Pe(e, e)) : e = void 0;
                a[d] = e; ++c
            }
            return e
        }
    } ();
    function Pe(a, c) {
        var d = c || [];
        d[0] = La(a[0] + .5 | 0, 0, 255);
        d[1] = La(a[1] + .5 | 0, 0, 255);
        d[2] = La(a[2] + .5 | 0, 0, 255);
        d[3] = La(a[3], 0, 1);
        return d
    };
    function Qe(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a: Oe(a)
    };
    var Re;
    a: {
        var Se = aa.navigator;
        if (Se) {
            var Te = Se.userAgent;
            if (Te) {
                Re = Te;
                break a
            }
        }
        Re = ""
    }
    function Ue(a) {
        return - 1 != Re.indexOf(a)
    };
    function Ve(a, c) {
        for (var d in a) c.call(void 0, a[d], d, a)
    }
    var We = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Xe(a, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) a[d] = e[d];
            for (var g = 0; g < We.length; g++) d = We[g],
            Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
        }
    };
    var Ye = Ue("Opera") || Ue("OPR"),
    Ze = Ue("Trident") || Ue("MSIE"),
    $e = Ue("Edge"),
    af = Ue("Gecko") && !( - 1 != Re.toLowerCase().indexOf("webkit") && !Ue("Edge")) && !(Ue("Trident") || Ue("MSIE")) && !Ue("Edge"),
    bf = -1 != Re.toLowerCase().indexOf("webkit") && !Ue("Edge");
    function cf() {
        var a = aa.document;
        return a ? a.documentMode: void 0
    }
    var df;
    a: {
        var ef = "",
        ff = function() {
            var a = Re;
            if (af) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if ($e) return /Edge\/([\d\.]+)/.exec(a);
            if (Ze) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (bf) return /WebKit\/(\S+)/.exec(a);
            if (Ye) return /(?:Version)[ \/]?(\S+)/.exec(a)
        } ();
        ff && (ef = ff ? ff[1] : "");
        if (Ze) {
            var gf = cf();
            if (null != gf && gf > parseFloat(ef)) {
                df = String(gf);
                break a
            }
        }
        df = ef
    }
    var hf = {};
    function jf(a) {
        return hf[a] || (hf[a] = 0 <= Ha(df, a))
    }
    var kf = aa.document,
    lf = kf && Ze ? cf() || ("CSS1Compat" == kf.compatMode ? parseInt(df, 10) : 5) : void 0;
    var mf = !Ze || 9 <= Number(lf); ! af && !Ze || Ze && 9 <= Number(lf) || af && jf("1.9.1");
    Ze && jf("9");
    function nf(a, c) {
        this.x = ca(a) ? a: 0;
        this.y = ca(c) ? c: 0
    }
    l = nf.prototype;
    l.clone = function() {
        return new nf(this.x, this.y)
    };
    l.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function(a, c) {
        var d = ha(c) ? c: a;
        this.x *= a;
        this.y *= d;
        return this
    };
    function of(a, c) {
        this.width = a;
        this.height = c
    }
    l = of.prototype;
    l.clone = function() {
        return new of(this.width, this.height)
    };
    l.sj = function() {
        return this.width * this.height
    };
    l.Qa = function() {
        return ! this.sj()
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, c) {
        var d = ha(c) ? c: a;
        this.width *= a;
        this.height *= d;
        return this
    };
    function pf(a) {
        return a ? new qf(rf(a)) : ua || (ua = new qf)
    }
    function sf(a) {
        var c = document;
        return ga(a) ? c.getElementById(a) : a
    }
    function tf(a, c) {
        Ve(c,
        function(c, e) {
            "style" == e ? a.style.cssText = c: "class" == e ? a.className = c: "for" == e ? a.htmlFor = c: uf.hasOwnProperty(e) ? a.setAttribute(uf[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c
        })
    }
    var uf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function vf(a, c, d) {
        var e = arguments,
        f = document,
        g = e[0],
        h = e[1];
        if (!mf && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', wa(h.name), '"');
            if (h.type) {
                g.push(' type="', wa(h.type), '"');
                var k = {};
                Xe(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = f.createElement(g);
        h && (ga(h) ? g.className = h: "array" == ea(h) ? g.className = h.join(" ") : tf(g, h));
        2 < e.length && wf(f, g, e);
        return g
    }
    function wf(a, c, d) {
        function e(d) {
            d && c.appendChild(ga(d) ? a.createTextNode(d) : d)
        }
        for (var f = 2; f < d.length; f++) {
            var g = d[f]; ! fa(g) || ja(g) && 0 < g.nodeType ? e(g) : Fe(xf(g) ? He(g) : g, e)
        }
    }
    function yf(a) {
        for (var c; c = a.firstChild;) a.removeChild(c)
    }
    function zf(a, c, d) {
        a.insertBefore(c, a.childNodes[d] || null)
    }
    function Af(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function Bf(a, c) {
        var d = c.parentNode;
        d && d.replaceChild(a, c)
    }
    function Cf(a, c) {
        if (!a || !c) return ! 1;
        if (a.contains && 1 == c.nodeType) return a == c || a.contains(c);
        if ("undefined" != typeof a.compareDocumentPosition) return a == c || !!(a.compareDocumentPosition(c) & 16);
        for (; c && a != c;) c = c.parentNode;
        return c == a
    }
    function rf(a) {
        return 9 == a.nodeType ? a: a.ownerDocument || a.document
    }
    function xf(a) {
        if (a && "number" == typeof a.length) {
            if (ja(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ia(a)) return "function" == typeof a.item
        }
        return ! 1
    }
    function qf(a) {
        this.b = a || aa.document || document
    }
    qf.prototype.C = tf;
    qf.prototype.appendChild = function(a, c) {
        a.appendChild(c)
    };
    qf.prototype.contains = Cf;
    function Df(a, c, d, e) {
        this.top = a;
        this.right = c;
        this.bottom = d;
        this.left = e
    }
    l = Df.prototype;
    l.clone = function() {
        return new Df(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function(a) {
        return this && a ? a instanceof Df ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom: !1
    };
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    l.scale = function(a, c) {
        var d = ha(c) ? c: a;
        this.left *= a;
        this.right *= a;
        this.top *= d;
        this.bottom *= d;
        return this
    };
    function Ef(a, c) {
        var d = rf(a);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null)) ? d[c] || d.getPropertyValue(c) || "": ""
    }
    function Ff(a) {
        var c;
        try {
            c = a.getBoundingClientRect()
        } catch(d) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        Ze && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
        return c
    }
    function Gf(a) {
        var c = Hf;
        if ("none" != (Ef(a, "display") || (a.currentStyle ? a.currentStyle.display: null) || a.style && a.style.display)) return c(a);
        var d = a.style,
        e = d.display,
        f = d.visibility,
        g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        a = c(a);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return a
    }
    function Hf(a) {
        var c = a.offsetWidth,
        d = a.offsetHeight,
        e = bf && !c && !d;
        return ca(c) && !e || !a.getBoundingClientRect ? new of(c, d) : (a = Ff(a), new of(a.right - a.left, a.bottom - a.top))
    }
    function If(a, c) {
        a.style.display = c ? "": "none"
    }
    function Jf(a, c, d, e) {
        if (/^\d+px?$/.test(c)) return parseInt(c, 10);
        var f = a.style[d],
        g = a.runtimeStyle[d];
        a.runtimeStyle[d] = a.currentStyle[d];
        a.style[d] = c;
        c = a.style[e];
        a.style[d] = f;
        a.runtimeStyle[d] = g;
        return c
    }
    function Kf(a, c) {
        var d = a.currentStyle ? a.currentStyle[c] : null;
        return d ? Jf(a, d, "left", "pixelLeft") : 0
    }
    function Lf(a, c) {
        if (Ze) {
            var d = Kf(a, c + "Left"),
            e = Kf(a, c + "Right"),
            f = Kf(a, c + "Top"),
            g = Kf(a, c + "Bottom");
            return new Df(f, e, g, d)
        }
        d = Ef(a, c + "Left");
        e = Ef(a, c + "Right");
        f = Ef(a, c + "Top");
        g = Ef(a, c + "Bottom");
        return new Df(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d))
    }
    var Mf = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function Nf(a, c) {
        if ("none" == (a.currentStyle ? a.currentStyle[c + "Style"] : null)) return 0;
        var d = a.currentStyle ? a.currentStyle[c + "Width"] : null;
        return d in Mf ? Mf[d] : Jf(a, d, "left", "pixelLeft")
    };
    function Of(a, c, d) {
        Cb.call(this, a);
        this.map = c;
        this.frameState = void 0 !== d ? d: null
    }
    y(Of, Cb);
    function Pf(a) {
        Kb.call(this);
        this.element = a.element ? a.element: null;
        this.a = this.S = null;
        this.s = [];
        this.render = a.render ? a.render: ta;
        a.target && this.c(a.target)
    }
    y(Pf, Kb);
    Pf.prototype.fa = function() {
        Af(this.element);
        Pf.ia.fa.call(this)
    };
    Pf.prototype.i = function() {
        return this.a
    };
    Pf.prototype.setMap = function(a) {
        this.a && Af(this.element);
        for (var c = 0,
        d = this.s.length; c < d; ++c) sb(this.s[c]);
        this.s.length = 0;
        if (this.a = a)(this.S ? this.S: a.A).appendChild(this.element),
        this.render !== ta && this.s.push(C(a, "postrender", this.render, this)),
        a.render()
    };
    Pf.prototype.c = function(a) {
        this.S = sf(a)
    };
    function Qf() {
        this.g = 0;
        this.f = {};
        this.a = this.b = null
    }
    l = Qf.prototype;
    l.clear = function() {
        this.g = 0;
        this.f = {};
        this.a = this.b = null
    };
    function Rf(a, c) {
        return a.f.hasOwnProperty(c)
    }
    l.forEach = function(a, c) {
        for (var d = this.b; d;) a.call(c, d.kc, d.$d, this),
        d = d.zb
    };
    l.get = function(a) {
        a = this.f[a];
        if (a === this.a) return a.kc;
        a === this.b ? (this.b = this.b.zb, this.b.fc = null) : (a.zb.fc = a.fc, a.fc.zb = a.zb);
        a.zb = null;
        a.fc = this.a;
        this.a = this.a.zb = a;
        return a.kc
    };
    l.tc = function() {
        return this.g
    };
    l.O = function() {
        var a = Array(this.g),
        c = 0,
        d;
        for (d = this.a; d; d = d.fc) a[c++] = d.$d;
        return a
    };
    l.wc = function() {
        var a = Array(this.g),
        c = 0,
        d;
        for (d = this.a; d; d = d.fc) a[c++] = d.kc;
        return a
    };
    l.pop = function() {
        var a = this.b;
        delete this.f[a.$d];
        a.zb && (a.zb.fc = null);
        this.b = a.zb;
        this.b || (this.a = null); --this.g;
        return a.kc
    };
    l.replace = function(a, c) {
        this.get(a);
        this.f[a].kc = c
    };
    l.set = function(a, c) {
        var d = {
            $d: a,
            zb: null,
            fc: this.a,
            kc: c
        };
        this.a ? this.a.zb = d: this.b = d;
        this.a = d;
        this.f[a] = d; ++this.g
    };
    function Sf(a) {
        Qf.call(this);
        this.c = void 0 !== a ? a: 2048
    }
    y(Sf, Qf);
    function Tf(a) {
        return a.tc() > a.c
    }
    function Uf(a, c) {
        for (var d, e; Tf(a) && !(d = a.b.kc, e = d.ja[0].toString(), e in c && c[e].contains(d.ja));) Bb(a.pop())
    };
    function Vf(a, c) {
        Fb.call(this);
        this.ja = a;
        this.state = c;
        this.a = null;
        this.key = ""
    }
    y(Vf, Fb);
    function Wf(a) {
        a.b("change")
    }
    Vf.prototype.gb = function() {
        return x(this).toString()
    };
    Vf.prototype.f = function() {
        return this.ja
    };
    Vf.prototype.V = function() {
        return this.state
    };
    function Xf(a) {
        Kb.call(this);
        this.f = ad(a.projection);
        this.xa = Yf(a.attributions);
        this.H = a.logo;
        this.ya = void 0 !== a.state ? a.state: "ready";
        this.N = void 0 !== a.wrapX ? a.wrapX: !1
    }
    y(Xf, Kb);
    function Yf(a) {
        if ("string" === typeof a) return [new Ae({
            html: a
        })];
        if (a instanceof Ae) return [a];
        if (Array.isArray(a)) {
            for (var c = a.length,
            d = Array(c), e = 0; e < c; e++) {
                var f = a[e];
                d[e] = "string" === typeof f ? new Ae({
                    html: f
                }) : f
            }
            return d
        }
        return null
    }
    l = Xf.prototype;
    l.ie = ta;
    l.da = function() {
        return this.xa
    };
    l.qa = function() {
        return this.H
    };
    l.sa = function() {
        return this.f
    };
    l.V = function() {
        return this.ya
    };
    l.pa = function() {
        this.u()
    };
    l.la = function(a) {
        this.xa = Yf(a);
        this.u()
    };
    function Zf(a, c) {
        a.ya = c;
        a.u()
    };
    function $f(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom: 0;
        this.a = a.resolutions;
        this.maxZoom = this.a.length - 1;
        this.g = void 0 !== a.origin ? a.origin: null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins);
        var c = a.extent;
        void 0 === c || this.g || this.c || (this.g = Ic(c));
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes);
        this.o = void 0 !== a.tileSize ? a.tileSize: this.i ? null: 256;
        this.s = void 0 !== c ? c: null;
        this.b = null;
        void 0 !== a.sizes ? this.b = a.sizes.map(function(a) {
            return new we(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        },
        this) : c && ag(this, c);
        this.f = [0, 0]
    }
    var bg = [0, 0, 0];
    function cg(a, c, d, e, f) {
        f = a.Da(c, f);
        for (c = c[0] - 1; c >= a.minZoom;) {
            if (d.call(null, c, dg(a, f, c, e))) return ! 0; --c
        }
        return ! 1
    }
    l = $f.prototype;
    l.G = function() {
        return this.s
    };
    l.Bg = function() {
        return this.maxZoom
    };
    l.Cg = function() {
        return this.minZoom
    };
    l.Ia = function(a) {
        return this.g ? this.g: this.c[a]
    };
    l.$ = function(a) {
        return this.a[a]
    };
    l.Kb = function() {
        return this.a
    };
    function eg(a, c, d, e) {
        return c[0] < a.maxZoom ? (e = a.Da(c, e), dg(a, e, c[0] + 1, d)) : null
    }
    function fg(a, c, d, e) {
        gg(a, c[0], c[1], d, !1, bg);
        var f = bg[1],
        g = bg[2];
        gg(a, c[2], c[3], d, !0, bg);
        a = bg[1];
        c = bg[2];
        void 0 !== e ? (e.ua = f, e.wa = a, e.za = g, e.Ba = c) : e = new we(f, a, g, c);
        return e
    }
    function dg(a, c, d, e) {
        d = a.$(d);
        return fg(a, c, d, e)
    }
    function hg(a, c) {
        var d = a.Ia(c[0]),
        e = a.$(c[0]),
        f = Qb(a.Ya(c[0]), a.f);
        return [d[0] + (c[1] + .5) * f[0] * e, d[1] + (c[2] + .5) * f[1] * e]
    }
    l.Da = function(a, c) {
        var d = this.Ia(a[0]),
        e = this.$(a[0]),
        f = Qb(this.Ya(a[0]), this.f),
        g = d[0] + a[1] * f[0] * e,
        d = d[1] + a[2] * f[1] * e;
        return yc(g, d, g + f[0] * e, d + f[1] * e, c)
    };
    l.Ud = function(a, c, d) {
        return gg(this, a[0], a[1], c, !1, d)
    };
    function gg(a, c, d, e, f, g) {
        var h = ig(a, e),
        k = e / a.$(h),
        m = a.Ia(h);
        a = Qb(a.Ya(h), a.f);
        c = k * Math.floor((c - m[0]) / e + (f ? .5 : 0)) / a[0];
        d = k * Math.floor((d - m[1]) / e + (f ? 0 : .5)) / a[1];
        f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
        return ue(h, c, d, g)
    }
    l.md = function(a, c, d) {
        c = this.$(c);
        return gg(this, a[0], a[1], c, !1, d)
    };
    l.Ya = function(a) {
        return this.o ? this.o: this.i[a]
    };
    function ig(a, c) {
        var d = Xa(a.a, c, 0);
        return La(d, a.minZoom, a.maxZoom)
    }
    function ag(a, c) {
        for (var d = a.a.length,
        e = Array(d), f = a.minZoom; f < d; ++f) e[f] = dg(a, c, f);
        a.b = e
    }
    function jg(a) {
        var c = a.j;
        if (!c) {
            var c = kg(a),
            d = lg(c, void 0, void 0),
            c = new $f({
                extent: c,
                origin: Ic(c),
                resolutions: d,
                tileSize: void 0
            });
            a.j = c
        }
        return c
    }
    function mg(a) {
        var c = {};
        mb(c, void 0 !== a ? a: {});
        void 0 === c.extent && (c.extent = ad("EPSG:3857").G());
        c.resolutions = lg(c.extent, c.maxZoom, c.tileSize);
        delete c.maxZoom;
        return new $f(c)
    }
    function lg(a, c, d) {
        c = void 0 !== c ? c: 42;
        var e = Mc(a);
        a = Lc(a);
        d = Qb(void 0 !== d ? d: 256);
        d = Math.max(a / d[0], e / d[1]);
        c += 1;
        e = Array(c);
        for (a = 0; a < c; ++a) e[a] = d / Math.pow(2, a);
        return e
    }
    function kg(a) {
        a = ad(a);
        var c = a.G();
        c || (a = 180 * Xc.degrees / a.Xb(), c = yc( - a, -a, a, a));
        return c
    };
    function ng(a) {
        Xf.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.na = void 0 !== a.opaque ? a.opaque: !1;
        this.ta = void 0 !== a.tilePixelRatio ? a.tilePixelRatio: 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid: null;
        this.a = new Sf(a.cacheSize);
        this.j = [0, 0]
    }
    y(ng, Xf);
    l = ng.prototype;
    l.th = function() {
        return Tf(this.a)
    };
    l.uh = function(a, c) {
        var d = this.ld(a);
        d && Uf(d, c)
    };
    function og(a, c, d, e, f) {
        c = a.ld(c);
        if (!c) return ! 1;
        for (var g = !0,
        h, k, m = e.ua; m <= e.wa; ++m) for (var n = e.za; n <= e.Ba; ++n) h = a.Cb(d, m, n),
        k = !1,
        Rf(c, h) && (h = c.get(h), (k = 2 === h.V()) && (k = !1 !== f(h))),
        k || (g = !1);
        return g
    }
    l.Pd = function() {
        return 0
    };
    l.af = function() {
        return ""
    };
    l.Cb = function(a, c, d) {
        return a + "/" + c + "/" + d
    };
    l.cf = function() {
        return this.na
    };
    l.Kb = function() {
        return this.tileGrid.Kb()
    };
    l.Ja = function() {
        return this.tileGrid
    };
    l.eb = function(a) {
        return this.tileGrid ? this.tileGrid: jg(a)
    };
    l.ld = function(a) {
        var c = this.f;
        return c && !qd(c, a) ? null: this.a
    };
    l.Yb = function() {
        return this.ta
    };
    function pg(a, c, d, e) {
        e = a.eb(e);
        d = a.Yb(d);
        c = Qb(e.Ya(c), a.j);
        return 1 == d ? c: Pb(c, d, a.j)
    }
    function qg(a, c, d) {
        var e = void 0 !== d ? d: a.f;
        d = a.eb(e);
        if (a.N && e.f) {
            var f = c;
            c = f[0];
            a = hg(d, f);
            e = kg(e);
            tc(e, a) ? c = f: (f = Lc(e), a[0] += f * Math.ceil((e[0] - a[0]) / f), c = d.md(a, c))
        }
        f = c[0];
        e = c[1];
        a = c[2];
        if (d.minZoom > f || f > d.maxZoom) d = !1;
        else {
            var g = d.G();
            d = (d = g ? dg(d, g, f) : d.b ? d.b[f] : null) ? xe(d, e, a) : !0
        }
        return d ? c: null
    }
    l.pa = function() {
        this.a.clear();
        this.u()
    };
    l.Rf = ta;
    function rg(a, c) {
        Cb.call(this, a);
        this.tile = c
    }
    y(rg, Cb);
    function sg(a) {
        a = a ? a: {};
        this.N = document.createElement("UL");
        this.A = document.createElement("LI");
        this.N.appendChild(this.A);
        If(this.A, !1);
        this.f = void 0 !== a.collapsed ? a.collapsed: !0;
        this.o = void 0 !== a.collapsible ? a.collapsible: !0;
        this.o || (this.f = !1);
        var c = void 0 !== a.className ? a.className: "ol-attribution",
        d = void 0 !== a.tipLabel ? a.tipLabel: "Attributions",
        e = void 0 !== a.collapseLabel ? a.collapseLabel: "\u00bb";
        this.H = "string" === typeof e ? vf("SPAN", {},
        e) : e;
        e = void 0 !== a.label ? a.label: "i";
        this.D = "string" === typeof e ? vf("SPAN", {},
        e) : e;
        d = vf("BUTTON", {
            type: "button",
            title: d
        },
        this.o && !this.f ? this.H: this.D);
        C(d, "click", this.Ml, this);
        c = vf("DIV", c + " ol-unselectable ol-control" + (this.f && this.o ? " ol-collapsed": "") + (this.o ? "": " ol-uncollapsible"), this.N, d);
        Pf.call(this, {
            element: c,
            render: a.render ? a.render: tg,
            target: a.target
        });
        this.B = !0;
        this.l = {};
        this.j = {};
        this.T = {}
    }
    y(sg, Pf);
    function tg(a) {
        if (a = a.frameState) {
            var c, d, e, f, g, h, k, m, n, p, q, r = a.layerStatesArray,
            t = mb({},
            a.attributions),
            v = {},
            w = a.viewState.projection;
            d = 0;
            for (c = r.length; d < c; d++) if (h = r[d].layer.ea()) if (p = x(h).toString(), n = h.da()) for (e = 0, f = n.length; e < f; e++) if (k = n[e], m = x(k).toString(), !(m in t)) {
                if (g = a.usedTiles[p]) {
                    var A = h.eb(w);
                    a: {
                        q = k;
                        var D = w;
                        if (q.b) {
                            var z = void 0,
                            B = void 0,
                            J = void 0,
                            K = void 0;
                            for (K in g) if (K in q.b) for (var J = g[K], M, z = 0, B = q.b[K].length; z < B; ++z) {
                                M = q.b[K][z];
                                if (ze(M, J)) {
                                    q = !0;
                                    break a
                                }
                                var Y = dg(A, kg(D), parseInt(K, 10)),
                                Ja = Y.wa - Y.ua + 1;
                                if (J.ua < Y.ua || J.wa > Y.wa) if (ze(M, new we(Qa(J.ua, Ja), Qa(J.wa, Ja), J.za, J.Ba)) || J.wa - J.ua + 1 > Ja && ze(M, Y)) {
                                    q = !0;
                                    break a
                                }
                            }
                            q = !1
                        } else q = !0
                    }
                } else q = !1;
                q ? (m in v && delete v[m], t[m] = k) : v[m] = k
            }
            c = [t, v];
            d = c[0];
            c = c[1];
            for (var I in this.l) I in d ? (this.j[I] || (If(this.l[I], !0), this.j[I] = !0), delete d[I]) : I in c ? (this.j[I] && (If(this.l[I], !1), delete this.j[I]), delete c[I]) : (Af(this.l[I]), delete this.l[I], delete this.j[I]);
            for (I in d) e = document.createElement("LI"),
            e.innerHTML = d[I].a,
            this.N.appendChild(e),
            this.l[I] = e,
            this.j[I] = !0;
            for (I in c) e = document.createElement("LI"),
            e.innerHTML = c[I].a,
            If(e, !1),
            this.N.appendChild(e),
            this.l[I] = e;
            I = !pb(this.j) || !pb(a.logos);
            this.B != I && (If(this.element, I), this.B = I);
            I && pb(this.j) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            var ba;
            a = a.logos;
            I = this.T;
            for (ba in I) ba in a || (Af(I[ba]), delete I[ba]);
            for (var oa in a) oa in I || (ba = new Image, ba.src = oa, d = a[oa], "" === d ? d = ba: (d = vf("A", {
                href: d
            }), d.appendChild(ba)), this.A.appendChild(d), I[oa] = d);
            If(this.A, !pb(a))
        } else this.B && (If(this.element, !1), this.B = !1)
    }
    l = sg.prototype;
    l.Ml = function(a) {
        a.preventDefault();
        ug(this)
    };
    function ug(a) {
        a.element.classList.toggle("ol-collapsed");
        a.f ? Bf(a.H, a.D) : Bf(a.D, a.H);
        a.f = !a.f
    }
    l.Ll = function() {
        return this.o
    };
    l.Ol = function(a) {
        this.o !== a && (this.o = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.f && ug(this))
    };
    l.Nl = function(a) {
        this.o && this.f !== a && ug(this)
    };
    l.Kl = function() {
        return this.f
    };
    function vg(a) {
        a = a ? a: {};
        var c = void 0 !== a.className ? a.className: "ol-rotate",
        d = void 0 !== a.label ? a.label: "\u21e7";
        this.f = null;
        "string" === typeof d ? this.f = vf("SPAN", "ol-compass", d) : (this.f = d, this.f.classList.add(this.f, "ol-compass"));
        d = vf("BUTTON", {
            "class": c + "-reset",
            type: "button",
            title: a.tipLabel ? a.tipLabel: "Reset rotation"
        },
        this.f);
        C(d, "click", vg.prototype.B, this);
        c = vf("DIV", c + " ol-unselectable ol-control", d);
        d = a.render ? a.render: wg;
        this.o = a.resetNorth ? a.resetNorth: void 0;
        Pf.call(this, {
            element: c,
            render: d,
            target: a.target
        });
        this.l = void 0 !== a.duration ? a.duration: 250;
        this.j = void 0 !== a.autoHide ? a.autoHide: !0;
        this.A = void 0;
        this.j && this.element.classList.add("ol-hidden")
    }
    y(vg, Pf);
    vg.prototype.B = function(a) {
        a.preventDefault();
        if (void 0 !== this.o) this.o();
        else {
            a = this.a;
            var c = a.aa();
            if (c) {
                var d = c.Ma();
                void 0 !== d && (0 < this.l && (d %= 2 * Math.PI, d < -Math.PI && (d += 2 * Math.PI), d > Math.PI && (d -= 2 * Math.PI), a.Va(se({
                    rotation: d,
                    duration: this.l,
                    easing: ne
                }))), c.ee(0))
            }
        }
    };
    function wg(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.A) {
                var c = "rotate(" + a + "rad)";
                if (this.j) {
                    var d = this.element.classList.contains("ol-hidden");
                    d || 0 !== a ? d && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.f.style.msTransform = c;
                this.f.style.webkitTransform = c;
                this.f.style.transform = c
            }
            this.A = a
        }
    };
    function xg(a) {
        a = a ? a: {};
        var c = void 0 !== a.className ? a.className: "ol-zoom",
        d = void 0 !== a.delta ? a.delta: 1,
        e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel: "\u2212",
        f = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel: "Zoom out",
        g = vf("BUTTON", {
            "class": c + "-in",
            type: "button",
            title: void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel: "Zoom in"
        },
        void 0 !== a.zoomInLabel ? a.zoomInLabel: "+");
        C(g, "click", qa(xg.prototype.j, d), this);
        e = vf("BUTTON", {
            "class": c + "-out",
            type: "button",
            title: f
        },
        e);
        C(e, "click", qa(xg.prototype.j, -d), this);
        c = vf("DIV", c + " ol-unselectable ol-control", g, e);
        Pf.call(this, {
            element: c,
            target: a.target
        });
        this.f = void 0 !== a.duration ? a.duration: 250
    }
    y(xg, Pf);
    xg.prototype.j = function(a, c) {
        c.preventDefault();
        var d = this.a,
        e = d.aa();
        if (e) {
            var f = e.$();
            f && (0 < this.f && d.Va(te({
                resolution: f,
                duration: this.f,
                easing: ne
            })), d = e.constrainResolution(f, a), e.Sb(d))
        }
    };
    function yg(a) {
        a = a ? a: {};
        var c = new De; (void 0 !== a.zoom ? a.zoom: 1) && c.push(new xg(a.zoomOptions)); (void 0 !== a.rotate ? a.rotate: 1) && c.push(new vg(a.rotateOptions)); (void 0 !== a.attribution ? a.attribution: 1) && c.push(new sg(a.attributionOptions));
        return c
    };
    var zg = bf ? "webkitfullscreenchange": af ? "mozfullscreenchange": Ze ? "MSFullscreenChange": "fullscreenchange";
    function Ag() {
        var a = pf().b,
        c = a.body;
        return !! (c.webkitRequestFullscreen || c.mozRequestFullScreen && a.mozFullScreenEnabled || c.msRequestFullscreen && a.msFullscreenEnabled || c.requestFullscreen && a.fullscreenEnabled)
    }
    function Bg(a) {
        a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen()
    }
    function Cg() {
        var a = pf().b;
        return !! (a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement)
    };
    function Dg(a) {
        a = a ? a: {};
        this.f = void 0 !== a.className ? a.className: "ol-full-screen";
        var c = void 0 !== a.label ? a.label: "\u2922";
        this.j = "string" === typeof c ? document.createTextNode(c) : c;
        c = void 0 !== a.labelActive ? a.labelActive: "\u00d7";
        this.o = "string" === typeof c ? document.createTextNode(c) : c;
        c = a.tipLabel ? a.tipLabel: "Toggle full-screen";
        c = vf("BUTTON", {
            "class": this.f + "-" + Cg(),
            type: "button",
            title: c
        },
        this.j);
        C(c, "click", this.N, this);
        var d = this.f + " ol-unselectable ol-control " + (Ag() ? "": "ol-unsupported"),
        c = vf("DIV", d, c);
        Pf.call(this, {
            element: c,
            target: a.target
        });
        this.B = void 0 !== a.keys ? a.keys: !1;
        this.l = a.source
    }
    y(Dg, Pf);
    Dg.prototype.N = function(a) {
        a.preventDefault();
        Ag() && (a = this.a) && (Cg() ? (a = pf().b, a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen()) : (a = this.l ? sf(this.l) : a.vc(), this.B ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : Bg(a) : Bg(a)))
    };
    Dg.prototype.A = function() {
        var a = this.element.firstElementChild,
        c = this.a;
        Cg() ? (a.className = this.f + "-true", Bf(this.o, this.j)) : (a.className = this.f + "-false", Bf(this.j, this.o));
        c && c.Rc()
    };
    Dg.prototype.setMap = function(a) {
        Dg.ia.setMap.call(this, a);
        a && this.s.push(C(aa.document, zg, this.A, this))
    };
    function Eg(a) {
        a = a ? a: {};
        var c = document.createElement("DIV");
        c.className = void 0 !== a.className ? a.className: "ol-mouse-position";
        Pf.call(this, {
            element: c,
            render: a.render ? a.render: Fg,
            target: a.target
        });
        C(this, Mb("projection"), this.Pl, this);
        a.coordinateFormat && this.Xh(a.coordinateFormat);
        a.projection && this.ah(ad(a.projection));
        this.A = void 0 !== a.undefinedHTML ? a.undefinedHTML: "";
        this.l = c.innerHTML;
        this.o = this.j = this.f = null
    }
    y(Eg, Pf);
    function Fg(a) {
        a = a.frameState;
        a ? this.f != a.viewState.projection && (this.f = a.viewState.projection, this.j = null) : this.f = null;
        Gg(this, this.o)
    }
    l = Eg.prototype;
    l.Pl = function() {
        this.j = null
    };
    l.ug = function() {
        return this.get("coordinateFormat")
    };
    l.$g = function() {
        return this.get("projection")
    };
    l.Lk = function(a) {
        this.o = this.a.Od(a);
        Gg(this, this.o)
    };
    l.Mk = function() {
        Gg(this, null);
        this.o = null
    };
    l.setMap = function(a) {
        Eg.ia.setMap.call(this, a);
        a && (a = a.a, this.s.push(C(a, "mousemove", this.Lk, this), C(a, "mouseout", this.Mk, this)))
    };
    l.Xh = function(a) {
        this.set("coordinateFormat", a)
    };
    l.ah = function(a) {
        this.set("projection", a)
    };
    function Gg(a, c) {
        var d = a.A;
        if (c && a.f) {
            if (!a.j) {
                var e = a.$g();
                a.j = e ? dd(a.f, e) : sd
            }
            if (e = a.a.Oa(c)) a.j(e, e),
            d = (d = a.ug()) ? d(e) : e.toString()
        }
        a.l && d == a.l || (a.element.innerHTML = d, a.l = d)
    };
    function Hg(a) {
        var c = arguments,
        d = c.length;
        return function() {
            for (var a = 0; a < d; a++) if (!c[a].apply(this, arguments)) return ! 1;
            return ! 0
        }
    };
    function Ig(a, c) {
        var d = a;
        c && (d = pa(a, c)); ! ia(aa.setImmediate) || aa.Window && aa.Window.prototype && !Ue("Edge") && aa.Window.prototype.setImmediate == aa.setImmediate ? (Jg || (Jg = Kg()), Jg(d)) : aa.setImmediate(d)
    }
    var Jg;
    function Kg() {
        var a = aa.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Ue("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var c = a.contentWindow,
            a = c.document;
            a.open();
            a.write("");
            a.close();
            var d = "callImmediate" + Math.random(),
            e = "file:" == c.location.protocol ? "*": c.location.protocol + "//" + c.location.host,
            a = pa(function(a) {
                if (("*" == e || a.origin == e) && a.data == d) this.port1.onmessage()
            },
            this);
            c.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof a && !Ue("Trident") && !Ue("MSIE")) {
            var c = new a,
            d = {},
            e = d;
            c.port1.onmessage = function() {
                if (ca(d.next)) {
                    d = d.next;
                    var a = d.kg;
                    d.kg = null;
                    a()
                }
            };
            return function(a) {
                e.next = {
                    kg: a
                };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
        function(a) {
            var c = document.createElement("SCRIPT");
            c.onreadystatechange = function() {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                a();
                a = null
            };
            document.documentElement.appendChild(c)
        }: function(a) {
            aa.setTimeout(a, 0)
        }
    };
    function Lg(a, c, d) {
        Cb.call(this, a);
        this.b = c;
        a = d ? d: {};
        this.buttons = Mg(a);
        this.pressure = Ng(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles: !1;
        this.cancelable = "cancelable" in a ? a.cancelable: !1;
        this.view = "view" in a ? a.view: null;
        this.detail = "detail" in a ? a.detail: null;
        this.screenX = "screenX" in a ? a.screenX: 0;
        this.screenY = "screenY" in a ? a.screenY: 0;
        this.clientX = "clientX" in a ? a.clientX: 0;
        this.clientY = "clientY" in a ? a.clientY: 0;
        this.button = "button" in a ? a.button: 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget: null;
        this.pointerId = "pointerId" in a ? a.pointerId: 0;
        this.width = "width" in a ? a.width: 0;
        this.height = "height" in a ? a.height: 0;
        this.pointerType = "pointerType" in a ? a.pointerType: "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary: !1;
        c.preventDefault && (this.preventDefault = function() {
            c.preventDefault()
        })
    }
    y(Lg, Cb);
    function Mg(a) {
        if (a.buttons || Og) a = a.buttons;
        else switch (a.which) {
        case 1:
            a = 1;
            break;
        case 2:
            a = 4;
            break;
        case 3:
            a = 2;
            break;
        default:
            a = 0
        }
        return a
    }
    function Ng(a, c) {
        var d = 0;
        a.pressure ? d = a.pressure: d = c ? .5 : 0;
        return d
    }
    var Og = !1;
    try {
        Og = 1 === (new MouseEvent("click", {
            buttons: 1
        })).buttons
    } catch(a) {};
    function Pg(a, c) {
        var d = document.createElement("CANVAS");
        a && (d.width = a);
        c && (d.height = c);
        return d.getContext("2d")
    }
    var Qg = function() {
        var a;
        return function() {
            if (void 0 === a) {
                var c = document.createElement("P"),
                d,
                e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.appendChild(c);
                for (var f in e) f in c.style && (c.style[f] = "translate(1px,1px)", d = aa.getComputedStyle(c).getPropertyValue(e[f]));
                document.body.removeChild(c);
                a = d && "none" !== d
            }
            return a
        }
    } (),
    Rg = function() {
        var a;
        return function() {
            if (void 0 === a) {
                var c = document.createElement("P"),
                d,
                e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.appendChild(c);
                for (var f in e) f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = aa.getComputedStyle(c).getPropertyValue(e[f]));
                document.body.removeChild(c);
                a = d && "none" !== d
            }
            return a
        }
    } ();
    function Sg(a, c) {
        var d = a.style;
        d.WebkitTransform = c;
        d.MozTransform = c;
        d.b = c;
        d.msTransform = c;
        d.transform = c;
        Ze && jf("9.0") && (a.style.transformOrigin = "0 0")
    }
    function Tg(a, c) {
        var d;
        if (Rg()) {
            var e = Array(16);
            for (d = 0; 16 > d; ++d) e[d] = c[d].toFixed(6);
            Sg(a, "matrix3d(" + e.join(",") + ")")
        } else if (Qg()) {
            var e = [c[0], c[1], c[4], c[5], c[12], c[13]],
            f = Array(6);
            for (d = 0; 6 > d; ++d) f[d] = e[d].toFixed(6);
            Sg(a, "matrix(" + f.join(",") + ")")
        } else a.style.left = Math.round(c[12]) + "px",
        a.style.top = Math.round(c[13]) + "px"
    };
    var Ug = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
    function Vg(a, c) {
        var d, e, f = Ug.length;
        for (e = 0; e < f; ++e) try {
            if (d = a.getContext(Ug[e], c)) return d
        } catch(g) {}
        return null
    };
    var Wg, Xg = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
    Yg = -1 !== Xg.indexOf("firefox"),
    Zg = -1 !== Xg.indexOf("safari") && -1 === Xg.indexOf("chrom"),
    $g = -1 !== Xg.indexOf("macintosh"),
    ah = aa.devicePixelRatio || 1,
    bh = !1,
    ch = function() {
        if (! ("HTMLCanvasElement" in aa)) return ! 1;
        try {
            var a = Pg();
            return a ? (void 0 !== a.setLineDash && (bh = !0), !0) : !1
        } catch(c) {
            return ! 1
        }
    } (),
    dh = "DeviceOrientationEvent" in aa,
    eh = "geolocation" in aa.navigator,
    fh = "ontouchstart" in aa,
    gh = "PointerEvent" in aa,
    hh = !!aa.navigator.msPointerEnabled,
    ih = !1,
    jh,
    kh = [];
    if ("WebGLRenderingContext" in aa) try {
        var lh = Vg(document.createElement("CANVAS"), {
            failIfMajorPerformanceCaveat: !0
        });
        lh && (ih = !0, jh = lh.getParameter(lh.MAX_TEXTURE_SIZE), kh = lh.getSupportedExtensions())
    } catch(a) {}
    Wg = ih;
    sa = kh;
    ra = jh;
    function mh(a, c) {
        this.b = a;
        this.c = c
    };
    function nh(a) {
        mh.call(this, a, {
            mousedown: this.fl,
            mousemove: this.gl,
            mouseup: this.jl,
            mouseover: this.il,
            mouseout: this.hl
        });
        this.a = a.g;
        this.g = []
    }
    y(nh, mh);
    function oh(a, c) {
        for (var d = a.g,
        e = c.clientX,
        f = c.clientY,
        g = 0,
        h = d.length,
        k; g < h && (k = d[g]); g++) {
            var m = Math.abs(f - k[1]);
            if (25 >= Math.abs(e - k[0]) && 25 >= m) return ! 0
        }
        return ! 1
    }
    function ph(a) {
        var c = qh(a, a),
        d = c.preventDefault;
        c.preventDefault = function() {
            a.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }
    l = nh.prototype;
    l.fl = function(a) {
        if (!oh(this, a)) {
            if ((1).toString() in this.a) {
                var c = ph(a);
                rh(this.b, sh, c, a);
                delete this.a[(1).toString()]
            }
            c = ph(a);
            this.a[(1).toString()] = a;
            rh(this.b, th, c, a)
        }
    };
    l.gl = function(a) {
        if (!oh(this, a)) {
            var c = ph(a);
            rh(this.b, uh, c, a)
        }
    };
    l.jl = function(a) {
        if (!oh(this, a)) {
            var c = this.a[(1).toString()];
            c && c.button === a.button && (c = ph(a), rh(this.b, vh, c, a), delete this.a[(1).toString()])
        }
    };
    l.il = function(a) {
        if (!oh(this, a)) {
            var c = ph(a);
            wh(this.b, c, a)
        }
    };
    l.hl = function(a) {
        if (!oh(this, a)) {
            var c = ph(a);
            xh(this.b, c, a)
        }
    };
    function yh(a) {
        mh.call(this, a, {
            MSPointerDown: this.ol,
            MSPointerMove: this.pl,
            MSPointerUp: this.sl,
            MSPointerOut: this.ql,
            MSPointerOver: this.rl,
            MSPointerCancel: this.nl,
            MSGotPointerCapture: this.ll,
            MSLostPointerCapture: this.ml
        });
        this.a = a.g;
        this.g = ["", "unavailable", "touch", "pen", "mouse"]
    }
    y(yh, mh);
    function zh(a, c) {
        var d = c;
        ha(c.pointerType) && (d = qh(c, c), d.pointerType = a.g[c.pointerType]);
        return d
    }
    l = yh.prototype;
    l.ol = function(a) {
        this.a[a.pointerId.toString()] = a;
        var c = zh(this, a);
        rh(this.b, th, c, a)
    };
    l.pl = function(a) {
        var c = zh(this, a);
        rh(this.b, uh, c, a)
    };
    l.sl = function(a) {
        var c = zh(this, a);
        rh(this.b, vh, c, a);
        delete this.a[a.pointerId.toString()]
    };
    l.ql = function(a) {
        var c = zh(this, a);
        xh(this.b, c, a)
    };
    l.rl = function(a) {
        var c = zh(this, a);
        wh(this.b, c, a)
    };
    l.nl = function(a) {
        var c = zh(this, a);
        rh(this.b, sh, c, a);
        delete this.a[a.pointerId.toString()]
    };
    l.ml = function(a) {
        this.b.b(new Lg("lostpointercapture", a, a))
    };
    l.ll = function(a) {
        this.b.b(new Lg("gotpointercapture", a, a))
    };
    function Ah(a) {
        mh.call(this, a, {
            pointerdown: this.Nn,
            pointermove: this.On,
            pointerup: this.Rn,
            pointerout: this.Pn,
            pointerover: this.Qn,
            pointercancel: this.Mn,
            gotpointercapture: this.vk,
            lostpointercapture: this.el
        })
    }
    y(Ah, mh);
    l = Ah.prototype;
    l.Nn = function(a) {
        Bh(this.b, a)
    };
    l.On = function(a) {
        Bh(this.b, a)
    };
    l.Rn = function(a) {
        Bh(this.b, a)
    };
    l.Pn = function(a) {
        Bh(this.b, a)
    };
    l.Qn = function(a) {
        Bh(this.b, a)
    };
    l.Mn = function(a) {
        Bh(this.b, a)
    };
    l.el = function(a) {
        Bh(this.b, a)
    };
    l.vk = function(a) {
        Bh(this.b, a)
    };
    function Ch(a, c) {
        mh.call(this, a, {
            touchstart: this.Uo,
            touchmove: this.To,
            touchend: this.So,
            touchcancel: this.Ro
        });
        this.a = a.g;
        this.j = c;
        this.g = void 0;
        this.i = 0;
        this.f = void 0
    }
    y(Ch, mh);
    l = Ch.prototype;
    l.Vh = function() {
        this.i = 0;
        this.f = void 0
    };
    function Dh(a, c, d) {
        c = qh(c, d);
        c.pointerId = d.identifier + 2;
        c.bubbles = !0;
        c.cancelable = !0;
        c.detail = a.i;
        c.button = 0;
        c.buttons = 1;
        c.width = d.webkitRadiusX || d.radiusX || 0;
        c.height = d.webkitRadiusY || d.radiusY || 0;
        c.pressure = d.webkitForce || d.force || .5;
        c.isPrimary = a.g === d.identifier;
        c.pointerType = "touch";
        c.clientX = d.clientX;
        c.clientY = d.clientY;
        c.screenX = d.screenX;
        c.screenY = d.screenY;
        return c
    }
    function Eh(a, c, d) {
        function e() {
            c.preventDefault()
        }
        var f = Array.prototype.slice.call(c.changedTouches),
        g = f.length,
        h,
        k;
        for (h = 0; h < g; ++h) k = Dh(a, c, f[h]),
        k.preventDefault = e,
        d.call(a, c, k)
    }
    l.Uo = function(a) {
        var c = a.touches,
        d = Object.keys(this.a),
        e = d.length;
        if (e >= c.length) {
            var f = [],
            g,
            h,
            k;
            for (g = 0; g < e; ++g) {
                h = d[g];
                k = this.a[h];
                var m;
                if (! (m = 1 == h)) a: {
                    m = c.length;
                    for (var n = void 0,
                    p = 0; p < m; p++) if (n = c[p], n.identifier === h - 2) {
                        m = !0;
                        break a
                    }
                    m = !1
                }
                m || f.push(k.out)
            }
            for (g = 0; g < f.length; ++g) this.Oe(a, f[g])
        }
        c = a.changedTouches[0];
        d = Object.keys(this.a).length;
        if (0 === d || 1 === d && (1).toString() in this.a) this.g = c.identifier,
        void 0 !== this.f && aa.clearTimeout(this.f);
        Fh(this, a);
        this.i++;
        Eh(this, a, this.In)
    };
    l.In = function(a, c) {
        this.a[c.pointerId] = {
            target: c.target,
            out: c,
            Eh: c.target
        };
        var d = this.b;
        c.bubbles = !0;
        rh(d, Gh, c, a);
        d = this.b;
        c.bubbles = !1;
        rh(d, Hh, c, a);
        rh(this.b, th, c, a)
    };
    l.To = function(a) {
        a.preventDefault();
        Eh(this, a, this.kl)
    };
    l.kl = function(a, c) {
        var d = this.a[c.pointerId];
        if (d) {
            var e = d.out,
            f = d.Eh;
            rh(this.b, uh, c, a);
            e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (xh(this.b, e, a), wh(this.b, c, a)) : (c.target = f, c.relatedTarget = null, this.Oe(a, c)));
            d.out = c;
            d.Eh = c.target
        }
    };
    l.So = function(a) {
        Fh(this, a);
        Eh(this, a, this.Vo)
    };
    l.Vo = function(a, c) {
        rh(this.b, vh, c, a);
        this.b.out(c, a);
        var d = this.b;
        c.bubbles = !1;
        rh(d, Ih, c, a);
        delete this.a[c.pointerId];
        c.isPrimary && (this.g = void 0, this.f = aa.setTimeout(this.Vh.bind(this), 200))
    };
    l.Ro = function(a) {
        Eh(this, a, this.Oe)
    };
    l.Oe = function(a, c) {
        rh(this.b, sh, c, a);
        this.b.out(c, a);
        var d = this.b;
        c.bubbles = !1;
        rh(d, Ih, c, a);
        delete this.a[c.pointerId];
        c.isPrimary && (this.g = void 0, this.f = aa.setTimeout(this.Vh.bind(this), 200))
    };
    function Fh(a, c) {
        var d = a.j.g,
        e = c.changedTouches[0];
        if (a.g === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            aa.setTimeout(function() {
                $a(d, f)
            },
            2500)
        }
    };
    function Jh(a) {
        Fb.call(this);
        this.i = a;
        this.g = {};
        this.c = {};
        this.a = [];
        gh ? Kh(this, new Ah(this)) : hh ? Kh(this, new yh(this)) : (a = new nh(this), Kh(this, a), fh && Kh(this, new Ch(this, a)));
        a = this.a.length;
        for (var c, d = 0; d < a; d++) c = this.a[d],
        Lh(this, Object.keys(c.c))
    }
    y(Jh, Fb);
    function Kh(a, c) {
        var d = Object.keys(c.c);
        d && (d.forEach(function(a) {
            var d = c.c[a];
            d && (this.c[a] = d.bind(c))
        },
        a), a.a.push(c))
    }
    Jh.prototype.f = function(a) {
        var c = this.c[a.type];
        c && c(a)
    };
    function Lh(a, c) {
        c.forEach(function(a) {
            C(this.i, a, this.f, this)
        },
        a)
    }
    function Mh(a, c) {
        c.forEach(function(a) {
            yb(this.i, a, this.f, this)
        },
        a)
    }
    function qh(a, c) {
        for (var d = {},
        e, f = 0,
        g = Nh.length; f < g; f++) e = Nh[f][0],
        d[e] = a[e] || c[e] || Nh[f][1];
        return d
    }
    Jh.prototype.out = function(a, c) {
        a.bubbles = !0;
        rh(this, Oh, a, c)
    };
    function xh(a, c, d) {
        a.out(c, d);
        var e = c.relatedTarget;
        e && Cf(c.target, e) || (c.bubbles = !1, rh(a, Ih, c, d))
    }
    function wh(a, c, d) {
        c.bubbles = !0;
        rh(a, Gh, c, d);
        var e = c.relatedTarget;
        e && Cf(c.target, e) || (c.bubbles = !1, rh(a, Hh, c, d))
    }
    function rh(a, c, d, e) {
        a.b(new Lg(c, e, d))
    }
    function Bh(a, c) {
        a.b(new Lg(c.type, c, c))
    }
    Jh.prototype.fa = function() {
        for (var a = this.a.length,
        c, d = 0; d < a; d++) c = this.a[d],
        Mh(this, Object.keys(c.c));
        Jh.ia.fa.call(this)
    };
    var uh = "pointermove",
    th = "pointerdown",
    vh = "pointerup",
    Gh = "pointerover",
    Oh = "pointerout",
    Hh = "pointerenter",
    Ih = "pointerleave",
    sh = "pointercancel",
    Nh = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];
    function Ph(a, c, d, e, f) {
        Of.call(this, a, c, f);
        this.originalEvent = d;
        this.pixel = c.Od(d);
        this.coordinate = c.Oa(this.pixel);
        this.dragging = void 0 !== e ? e: !1
    }
    y(Ph, Of);
    Ph.prototype.preventDefault = function() {
        Ph.ia.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    Ph.prototype.stopPropagation = function() {
        Ph.ia.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };
    function Qh(a, c, d, e, f) {
        Ph.call(this, a, c, d.b, e, f);
        this.b = d
    }
    y(Qh, Ph);
    function Rh(a) {
        Fb.call(this);
        this.f = a;
        this.j = 0;
        this.o = !1;
        this.c = [];
        this.g = null;
        a = this.f.a;
        this.U = 0;
        this.A = {};
        this.i = new Jh(a);
        this.a = null;
        this.l = C(this.i, th, this.Ok, this);
        this.s = C(this.i, uh, this.qo, this)
    }
    y(Rh, Fb);
    function Sh(a, c) {
        var d;
        d = new Qh(Th, a.f, c);
        a.b(d);
        0 !== a.j ? (aa.clearTimeout(a.j), a.j = 0, d = new Qh(Uh, a.f, c), a.b(d)) : a.j = aa.setTimeout(function() {
            this.j = 0;
            var a = new Qh(Vh, this.f, c);
            this.b(a)
        }.bind(a), 250)
    }
    function Wh(a, c) {
        c.type == Xh || c.type == Yh ? delete a.A[c.pointerId] : c.type == Zh && (a.A[c.pointerId] = !0);
        a.U = Object.keys(a.A).length
    }
    l = Rh.prototype;
    l.Jg = function(a) {
        Wh(this, a);
        var c = new Qh(Xh, this.f, a);
        this.b(c); ! this.o && 0 === a.button && Sh(this, this.g);
        0 === this.U && (this.c.forEach(sb), this.c.length = 0, this.o = !1, this.g = null, Bb(this.a), this.a = null)
    };
    l.Ok = function(a) {
        Wh(this, a);
        var c = new Qh(Zh, this.f, a);
        this.b(c);
        this.g = a;
        0 === this.c.length && (this.a = new Jh(document), this.c.push(C(this.a, $h, this.Gl, this), C(this.a, Xh, this.Jg, this), C(this.i, Yh, this.Jg, this)))
    };
    l.Gl = function(a) {
        if (a.clientX != this.g.clientX || a.clientY != this.g.clientY) {
            this.o = !0;
            var c = new Qh(ai, this.f, a, this.o);
            this.b(c)
        }
        a.preventDefault()
    };
    l.qo = function(a) {
        this.b(new Qh(a.type, this.f, a, !(!this.g || a.clientX == this.g.clientX && a.clientY == this.g.clientY)))
    };
    l.fa = function() {
        this.s && (sb(this.s), this.s = null);
        this.l && (sb(this.l), this.l = null);
        this.c.forEach(sb);
        this.c.length = 0;
        this.a && (Bb(this.a), this.a = null);
        this.i && (Bb(this.i), this.i = null);
        Rh.ia.fa.call(this)
    };
    var Vh = "singleclick",
    Th = "click",
    Uh = "dblclick",
    ai = "pointerdrag",
    $h = "pointermove",
    Zh = "pointerdown",
    Xh = "pointerup",
    Yh = "pointercancel",
    bi = {
        np: Vh,
        bp: Th,
        cp: Uh,
        gp: ai,
        jp: $h,
        fp: Zh,
        mp: Xh,
        lp: "pointerover",
        kp: "pointerout",
        hp: "pointerenter",
        ip: "pointerleave",
        ep: Yh
    };
    function ci(a) {
        Kb.call(this);
        var c = mb({},
        a);
        c.opacity = void 0 !== a.opacity ? a.opacity: 1;
        c.visible = void 0 !== a.visible ? a.visible: !0;
        c.zIndex = void 0 !== a.zIndex ? a.zIndex: 0;
        c.maxResolution = void 0 !== a.maxResolution ? a.maxResolution: Infinity;
        c.minResolution = void 0 !== a.minResolution ? a.minResolution: 0;
        this.C(c)
    }
    y(ci, Kb);
    function di(a) {
        var c = a.Nb(),
        d = a.df(),
        e = a.yb(),
        f = a.G(),
        g = a.Ob(),
        h = a.Ib(),
        k = a.Jb();
        return {
            layer: a,
            opacity: La(c, 0, 1),
            D: d,
            visible: e,
            Kc: !0,
            extent: f,
            zIndex: g,
            maxResolution: h,
            minResolution: Math.max(k, 0)
        }
    }
    l = ci.prototype;
    l.G = function() {
        return this.get("extent")
    };
    l.Ib = function() {
        return this.get("maxResolution")
    };
    l.Jb = function() {
        return this.get("minResolution")
    };
    l.Nb = function() {
        return this.get("opacity")
    };
    l.yb = function() {
        return this.get("visible")
    };
    l.Ob = function() {
        return this.get("zIndex")
    };
    l.ac = function(a) {
        this.set("extent", a)
    };
    l.ic = function(a) {
        this.set("maxResolution", a)
    };
    l.jc = function(a) {
        this.set("minResolution", a)
    };
    l.bc = function(a) {
        this.set("opacity", a)
    };
    l.cc = function(a) {
        this.set("visible", a)
    };
    l.dc = function(a) {
        this.set("zIndex", a)
    };
    function ei() {};
    function fi(a, c, d, e, f, g) {
        Cb.call(this, a, c);
        this.vectorContext = d;
        this.frameState = e;
        this.context = f;
        this.glContext = g
    }
    y(fi, Cb);
    function gi(a) {
        var c = mb({},
        a);
        delete c.source;
        ci.call(this, c);
        this.l = this.o = this.j = null;
        a.map && this.setMap(a.map);
        C(this, Mb("source"), this.Uk, this);
        this.Cc(a.source ? a.source: null)
    }
    y(gi, ci);
    function hi(a, c) {
        return a.visible && c >= a.minResolution && c < a.maxResolution
    }
    l = gi.prototype;
    l.bf = function(a) {
        a = a ? a: [];
        a.push(di(this));
        return a
    };
    l.ea = function() {
        return this.get("source") || null
    };
    l.df = function() {
        var a = this.ea();
        return a ? a.V() : "undefined"
    };
    l.wm = function() {
        this.u()
    };
    l.Uk = function() {
        this.l && (sb(this.l), this.l = null);
        var a = this.ea();
        a && (this.l = C(a, "change", this.wm, this));
        this.u()
    };
    l.setMap = function(a) {
        this.j && (sb(this.j), this.j = null);
        a || this.u();
        this.o && (sb(this.o), this.o = null);
        a && (this.j = C(a, "precompose",
        function(a) {
            var d = di(this);
            d.Kc = !1;
            d.zIndex = Infinity;
            a.frameState.layerStatesArray.push(d);
            a.frameState.layerStates[x(this)] = d
        },
        this), this.o = C(this, "change", a.render, a), this.u())
    };
    l.Cc = function(a) {
        this.set("source", a)
    };
    function ii(a, c, d, e, f) {
        Fb.call(this);
        this.l = f;
        this.extent = a;
        this.f = d;
        this.resolution = c;
        this.state = e
    }
    y(ii, Fb);
    function ji(a) {
        a.b("change")
    }
    ii.prototype.da = function() {
        return this.l
    };
    ii.prototype.G = function() {
        return this.extent
    };
    ii.prototype.$ = function() {
        return this.resolution
    };
    ii.prototype.V = function() {
        return this.state
    };
    function ki(a, c, d, e, f, g, h, k) {
        hc(a);
        0 === c && 0 === d || kc(a, c, d);
        1 == e && 1 == f || lc(a, e, f);
        0 !== g && mc(a, g);
        0 === h && 0 === k || kc(a, h, k);
        return a
    }
    function li(a, c) {
        return a[0] == c[0] && a[1] == c[1] && a[4] == c[4] && a[5] == c[5] && a[12] == c[12] && a[13] == c[13]
    }
    function mi(a, c, d) {
        var e = a[1],
        f = a[5],
        g = a[13],
        h = c[0];
        c = c[1];
        d[0] = a[0] * h + a[4] * c + a[12];
        d[1] = e * h + f * c + g;
        return d
    };
    function ni(a) {
        Hb.call(this);
        this.a = a
    }
    y(ni, Hb);
    l = ni.prototype;
    l.ib = ta;
    l.zc = function(a, c, d, e) {
        a = a.slice();
        mi(c.pixelToCoordinateMatrix, a, a);
        if (this.ib(a, c, Tc, this)) return d.call(e, this.a)
    };
    l.he = Uc;
    l.Wc = function(a, c, d) {
        return function(e, f) {
            return og(a, c, e, f,
            function(a) {
                d[e] || (d[e] = {});
                d[e][a.ja.toString()] = a
            })
        }
    };
    l.Am = function(a) {
        2 === a.target.V() && oi(this)
    };
    function pi(a, c) {
        var d = c.V();
        2 != d && 3 != d && C(c, "change", a.Am, a);
        0 == d && (c.load(), d = c.V());
        return 2 == d
    }
    function oi(a) {
        var c = a.a;
        c.yb() && "ready" == c.df() && a.u()
    }
    function qi(a, c) {
        c.th() && a.postRenderFunctions.push(qa(function(a, c, f) {
            c = x(a).toString();
            a.uh(f.viewState.projection, f.usedTiles[c])
        },
        c))
    }
    function ri(a, c) {
        if (c) {
            var d, e, f;
            e = 0;
            for (f = c.length; e < f; ++e) d = c[e],
            a[x(d).toString()] = d
        }
    }
    function si(a, c) {
        var d = c.H;
        void 0 !== d && ("string" === typeof d ? a.logos[d] = "": ja(d) && (a.logos[d.src] = d.href))
    }
    function ti(a, c, d, e) {
        c = x(c).toString();
        d = d.toString();
        c in a ? d in a[c] ? (a = a[c][d], e.ua < a.ua && (a.ua = e.ua), e.wa > a.wa && (a.wa = e.wa), e.za < a.za && (a.za = e.za), e.Ba > a.Ba && (a.Ba = e.Ba)) : a[c][d] = e: (a[c] = {},
        a[c][d] = e)
    }
    function ui(a, c, d) {
        return [c * (Math.round(a[0] / c) + d[0] % 2 / 2), c * (Math.round(a[1] / c) + d[1] % 2 / 2)]
    }
    function vi(a, c, d, e, f, g, h, k, m, n) {
        var p = x(c).toString();
        p in a.wantedTiles || (a.wantedTiles[p] = {});
        var q = a.wantedTiles[p];
        a = a.tileQueue;
        var r = d.minZoom,
        t, v, w, A, D, z;
        for (z = h; z >= r; --z) for (v = dg(d, g, z, v), w = d.$(z), A = v.ua; A <= v.wa; ++A) for (D = v.za; D <= v.Ba; ++D) h - z <= k ? (t = c.Lb(z, A, D, e, f), 0 == t.V() && (q[t.ja.toString()] = !0, t.gb() in a.g || a.f([t, p, hg(d, t.ja), w])), void 0 !== m && m.call(n, t)) : c.Rf(z, A, D, f)
    };
    function wi(a) {
        this.A = a.opacity;
        this.B = a.rotateWithView;
        this.s = a.rotation;
        this.j = a.scale;
        this.N = a.snapToPixel
    }
    l = wi.prototype;
    l.le = function() {
        return this.A
    };
    l.Sd = function() {
        return this.B
    };
    l.me = function() {
        return this.s
    };
    l.ne = function() {
        return this.j
    };
    l.Td = function() {
        return this.N
    };
    l.oe = function(a) {
        this.A = a
    };
    l.pe = function(a) {
        this.s = a
    };
    l.qe = function(a) {
        this.j = a
    };
    function xi(a) {
        a = a || {};
        this.c = void 0 !== a.anchor ? a.anchor: [.5, .5];
        this.f = null;
        this.a = void 0 !== a.anchorOrigin ? a.anchorOrigin: "top-left";
        this.o = void 0 !== a.anchorXUnits ? a.anchorXUnits: "fraction";
        this.l = void 0 !== a.anchorYUnits ? a.anchorYUnits: "fraction";
        var c = void 0 !== a.crossOrigin ? a.crossOrigin: null,
        d = void 0 !== a.img ? a.img: null,
        e = void 0 !== a.imgSize ? a.imgSize: null,
        f = a.src;
        void 0 !== f && 0 !== f.length || !d || (f = d.src || x(d).toString());
        var g = void 0 !== a.src ? 0 : 2,
        h = void 0 !== a.color ? Me(a.color) : null,
        k = yi.Wb(),
        m = k.get(f, c, h);
        m || (m = new zi(d, f, e, c, g, h), k.set(f, c, h, m));
        this.b = m;
        this.H = void 0 !== a.offset ? a.offset: [0, 0];
        this.g = void 0 !== a.offsetOrigin ? a.offsetOrigin: "top-left";
        this.i = null;
        this.U = void 0 !== a.size ? a.size: null;
        wi.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity: 1,
            rotation: void 0 !== a.rotation ? a.rotation: 0,
            scale: void 0 !== a.scale ? a.scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel: !0,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView: !1
        })
    }
    y(xi, wi);
    l = xi.prototype;
    l.Vb = function() {
        if (this.f) return this.f;
        var a = this.c,
        c = this.Db();
        if ("fraction" == this.o || "fraction" == this.l) {
            if (!c) return null;
            a = this.c.slice();
            "fraction" == this.o && (a[0] *= c[0]);
            "fraction" == this.l && (a[1] *= c[1])
        }
        if ("top-left" != this.a) {
            if (!c) return null;
            a === this.c && (a = this.c.slice());
            if ("top-right" == this.a || "bottom-right" == this.a) a[0] = -a[0] + c[0];
            if ("bottom-left" == this.a || "bottom-right" == this.a) a[1] = -a[1] + c[1]
        }
        return this.f = a
    };
    l.ec = function() {
        var a = this.b;
        return a.c ? a.c: a.a
    };
    l.hd = function() {
        return this.b.g
    };
    l.qd = function() {
        return this.b.f
    };
    l.ke = function() {
        var a = this.b;
        if (!a.o) if (a.s) {
            var c = a.g[0],
            d = a.g[1],
            e = Pg(c, d);
            e.fillRect(0, 0, c, d);
            a.o = e.canvas
        } else a.o = a.a;
        return a.o
    };
    l.Ia = function() {
        if (this.i) return this.i;
        var a = this.H;
        if ("top-left" != this.g) {
            var c = this.Db(),
            d = this.b.g;
            if (!c || !d) return null;
            a = a.slice();
            if ("top-right" == this.g || "bottom-right" == this.g) a[0] = d[0] - c[0] - a[0];
            if ("bottom-left" == this.g || "bottom-right" == this.g) a[1] = d[1] - c[1] - a[1]
        }
        return this.i = a
    };
    l.cn = function() {
        return this.b.l
    };
    l.Db = function() {
        return this.U ? this.U: this.b.g
    };
    l.hf = function(a, c) {
        return C(this.b, "change", a, c)
    };
    l.load = function() {
        this.b.load()
    };
    l.Qf = function(a, c) {
        yb(this.b, "change", a, c)
    };
    function zi(a, c, d, e, f, g) {
        Fb.call(this);
        this.o = null;
        this.a = a ? a: new Image;
        null !== e && (this.a.crossOrigin = e);
        this.c = g ? document.createElement("CANVAS") : null;
        this.j = g;
        this.i = null;
        this.f = f;
        this.g = d;
        this.l = c;
        this.s = !1;
        2 == this.f && Ai(this)
    }
    y(zi, Fb);
    function Ai(a) {
        var c = Pg(1, 1);
        try {
            c.drawImage(a.a, 0, 0),
            c.getImageData(0, 0, 1, 1)
        } catch(d) {
            a.s = !0
        }
    }
    zi.prototype.A = function() {
        this.f = 3;
        this.i.forEach(sb);
        this.i = null;
        this.b("change")
    };
    zi.prototype.U = function() {
        this.f = 2;
        this.g && (this.a.width = this.g[0], this.a.height = this.g[1]);
        this.g = [this.a.width, this.a.height];
        this.i.forEach(sb);
        this.i = null;
        Ai(this);
        if (!this.s && null !== this.j) {
            this.c.width = this.a.width;
            this.c.height = this.a.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.a, 0, 0);
            for (var c = a.getImageData(0, 0, this.a.width, this.a.height), d = c.data, e = this.j[0] / 255, f = this.j[1] / 255, g = this.j[2] / 255, h = 0, k = d.length; h < k; h += 4) d[h] *= e,
            d[h + 1] *= f,
            d[h + 2] *= g;
            a.putImageData(c, 0, 0)
        }
        this.b("change")
    };
    zi.prototype.load = function() {
        if (0 == this.f) {
            this.f = 1;
            this.i = [xb(this.a, "error", this.A, this), xb(this.a, "load", this.U, this)];
            try {
                this.a.src = this.l
            } catch(a) {
                this.A()
            }
        }
    };
    function yi() {
        this.b = {};
        this.a = 0
    }
    da(yi);
    yi.prototype.clear = function() {
        this.b = {};
        this.a = 0
    };
    yi.prototype.get = function(a, c, d) {
        a = c + ":" + a + ":" + (d ? Oe(d) : "null");
        return a in this.b ? this.b[a] : null
    };
    yi.prototype.set = function(a, c, d, e) {
        this.b[c + ":" + a + ":" + (d ? Oe(d) : "null")] = e; ++this.a
    };
    function Bi(a, c) {
        this.i = c;
        this.g = {};
        this.s = {}
    }
    y(Bi, Ab);
    function Ci(a) {
        var c = a.viewState,
        d = a.coordinateToPixelMatrix;
        ki(d, a.size[0] / 2, a.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
        jc(d, a.pixelToCoordinateMatrix)
    }
    l = Bi.prototype;
    l.fa = function() {
        for (var a in this.g) Bb(this.g[a])
    };
    function Di() {
        var a = yi.Wb();
        if (32 < a.a) {
            var c = 0,
            d, e;
            for (d in a.b) e = a.b[d],
            0 !== (c++&3) || Gb(e) || (delete a.b[d], --a.a)
        }
    }
    l.sf = function(a, c, d, e, f, g) {
        function h(a, f) {
            var g = x(a).toString(),
            h = c.layerStates[x(f)].Kc;
            if (! (g in c.skippedFeatureUids) || h) return d.call(e, a, h ? f: null)
        }
        var k, m = c.viewState,
        n = m.resolution,
        p = m.projection,
        m = a;
        if (p.a) {
            var p = p.G(),
            q = Lc(p),
            r = a[0];
            if (r < p[0] || r > p[2]) m = [r + q * Math.ceil((p[0] - r) / q), a[1]]
        }
        p = c.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            var t = p[q],
            r = t.layer;
            if (hi(t, n) && f.call(g, r) && (t = Ei(this, r), r.ea() && (k = t.ib(r.ea().N ? m: a, c, h, e)), k)) return k
        }
    };
    l.kh = function(a, c, d, e, f, g) {
        var h, k = c.viewState.resolution,
        m = c.layerStatesArray,
        n;
        for (n = m.length - 1; 0 <= n; --n) {
            h = m[n];
            var p = h.layer;
            if (hi(h, k) && f.call(g, p) && (h = Ei(this, p).zc(a, c, d, e))) return h
        }
    };
    l.lh = function(a, c, d, e) {
        return void 0 !== this.sf(a, c, Tc, this, d, e)
    };
    function Ei(a, c) {
        var d = x(c).toString();
        if (d in a.g) return a.g[d];
        var e = a.Re(c);
        a.g[d] = e;
        a.s[d] = C(e, "change", a.Fk, a);
        return e
    }
    l.Fk = function() {
        this.i.render()
    };
    l.xe = ta;
    l.wo = function(a, c) {
        for (var d in this.g) if (! (c && d in c.layerStates)) {
            var e = d,
            f = this.g[e];
            delete this.g[e];
            sb(this.s[e]);
            delete this.s[e];
            Bb(f)
        }
    };
    function Fi(a, c) {
        for (var d in a.g) if (! (d in c.layerStates)) {
            c.postRenderFunctions.push(a.wo.bind(a));
            break
        }
    }
    function db(a, c) {
        return a.zIndex - c.zIndex
    };
    function Gi(a, c) {
        this.l = a;
        this.j = c;
        this.b = [];
        this.a = [];
        this.g = {}
    }
    Gi.prototype.clear = function() {
        this.b.length = 0;
        this.a.length = 0;
        nb(this.g)
    };
    function Hi(a) {
        var c = a.b,
        d = a.a,
        e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), Ii(a, 0));
        c = a.j(e);
        delete a.g[c];
        return e
    }
    Gi.prototype.f = function(a) {
        var c = this.l(a);
        return Infinity != c ? (this.b.push(a), this.a.push(c), this.g[this.j(a)] = !0, Ji(this, 0, this.b.length - 1), !0) : !1
    };
    Gi.prototype.tc = function() {
        return this.b.length
    };
    Gi.prototype.Qa = function() {
        return 0 === this.b.length
    };
    function Ii(a, c) {
        for (var d = a.b,
        e = a.a,
        f = d.length,
        g = d[c], h = e[c], k = c; c < f >> 1;) {
            var m = 2 * c + 1,
            n = 2 * c + 2,
            m = n < f && e[n] < e[m] ? n: m;
            d[c] = d[m];
            e[c] = e[m];
            c = m
        }
        d[c] = g;
        e[c] = h;
        Ji(a, k, c)
    }
    function Ji(a, c, d) {
        var e = a.b;
        a = a.a;
        for (var f = e[d], g = a[d]; d > c;) {
            var h = d - 1 >> 1;
            if (a[h] > g) e[d] = e[h],
            a[d] = a[h],
            d = h;
            else break
        }
        e[d] = f;
        a[d] = g
    }
    function Ki(a) {
        var c = a.l,
        d = a.b,
        e = a.a,
        f = 0,
        g = d.length,
        h, k, m;
        for (k = 0; k < g; ++k) h = d[k],
        m = c(h),
        Infinity == m ? delete a.g[a.j(h)] : (e[f] = m, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (a.b.length >> 1) - 1; 0 <= c; c--) Ii(a, c)
    };
    function Li(a, c) {
        Gi.call(this,
        function(c) {
            return a.apply(null, c)
        },
        function(a) {
            return a[0].gb()
        });
        this.s = c;
        this.i = 0;
        this.c = {}
    }
    y(Li, Gi);
    Li.prototype.f = function(a) {
        var c = Li.ia.f.call(this, a);
        c && C(a[0], "change", this.o, this);
        return c
    };
    Li.prototype.o = function(a) {
        a = a.target;
        var c = a.V();
        if (2 === c || 3 === c || 4 === c || 5 === c) yb(a, "change", this.o, this),
        a = a.gb(),
        a in this.c && (delete this.c[a], --this.i),
        this.s()
    };
    function Mi(a, c, d) {
        for (var e = 0,
        f, g; a.i < c && e < d && 0 < a.tc();) f = Hi(a)[0],
        g = f.gb(),
        0 !== f.V() || g in a.c || (a.c[g] = !0, ++a.i, ++e, f.load())
    };
    function Ni(a, c, d) {
        this.f = a;
        this.g = c;
        this.i = d;
        this.b = [];
        this.a = this.c = 0
    }
    function Oi(a, c) {
        var d = a.f,
        e = a.a,
        f = a.g - e,
        g = Math.log(a.g / a.a) / a.f;
        return re({
            source: c,
            duration: g,
            easing: function(a) {
                return e * (Math.exp(d * a * g) - 1) / f
            }
        })
    };
    function Pi(a) {
        Kb.call(this);
        this.A = null;
        this.i(!0);
        this.handleEvent = a.handleEvent
    }
    y(Pi, Kb);
    Pi.prototype.f = function() {
        return this.get("active")
    };
    Pi.prototype.j = function() {
        return this.A
    };
    Pi.prototype.i = function(a) {
        this.set("active", a)
    };
    Pi.prototype.setMap = function(a) {
        this.A = a
    };
    function Qi(a, c, d, e, f) {
        if (void 0 !== d) {
            var g = c.Ma(),
            h = c.bb();
            void 0 !== g && h && f && 0 < f && (a.Va(se({
                rotation: g,
                duration: f,
                easing: ne
            })), e && a.Va(re({
                source: h,
                duration: f,
                easing: ne
            })));
            c.rotate(d, e)
        }
    }
    function Ri(a, c, d, e, f) {
        var g = c.$();
        d = c.constrainResolution(g, d, 0);
        Si(a, c, d, e, f)
    }
    function Si(a, c, d, e, f) {
        if (d) {
            var g = c.$(),
            h = c.bb();
            void 0 !== g && h && d !== g && f && 0 < f && (a.Va(te({
                resolution: g,
                duration: f,
                easing: ne
            })), e && a.Va(re({
                source: h,
                duration: f,
                easing: ne
            })));
            if (e) {
                var k;
                a = c.bb();
                f = c.$();
                void 0 !== a && void 0 !== f && (k = [e[0] - d * (e[0] - a[0]) / f, e[1] - d * (e[1] - a[1]) / f]);
                c.lb(k)
            }
            c.Sb(d)
        }
    };
    function Ti(a) {
        a = a ? a: {};
        this.a = a.delta ? a.delta: 1;
        Pi.call(this, {
            handleEvent: Ui
        });
        this.c = void 0 !== a.duration ? a.duration: 250
    }
    y(Ti, Pi);
    function Ui(a) {
        var c = !1,
        d = a.originalEvent;
        if (a.type == Uh) {
            var c = a.map,
            e = a.coordinate,
            d = d.shiftKey ? -this.a: this.a,
            f = c.aa();
            Ri(c, f, d, e, this.c);
            a.preventDefault();
            c = !0
        }
        return ! c
    };
    function Vi(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }
    function Wi(a) {
        a = a.originalEvent;
        return 0 == a.button && !(bf && $g && a.ctrlKey)
    }
    function Xi(a) {
        return "pointermove" == a.type
    }
    function Yi(a) {
        return a.type == Vh
    }
    function Zi(a) {
        a = a.originalEvent;
        return ! a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }
    function $i(a) {
        a = a.originalEvent;
        return ! a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }
    function aj(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }
    function bj(a) {
        return "mouse" == a.b.pointerType
    };
    function cj(a) {
        a = a ? a: {};
        Pi.call(this, {
            handleEvent: a.handleEvent ? a.handleEvent: dj
        });
        this.Uc = a.handleDownEvent ? a.handleDownEvent: Uc;
        this.He = a.handleDragEvent ? a.handleDragEvent: ta;
        this.Ie = a.handleMoveEvent ? a.handleMoveEvent: ta;
        this.Je = a.handleUpEvent ? a.handleUpEvent: Uc;
        this.N = !1;
        this.xa = {};
        this.o = []
    }
    y(cj, Pi);
    function ej(a) {
        for (var c = a.length,
        d = 0,
        e = 0,
        f = 0; f < c; f++) d += a[f].clientX,
        e += a[f].clientY;
        return [d / c, e / c]
    }
    function dj(a) {
        if (! (a instanceof Qh)) return ! 0;
        var c = !1,
        d = a.type;
        if (d === Zh || d === ai || d === Xh) d = a.b,
        a.type == Xh ? delete this.xa[d.pointerId] : a.type == Zh ? this.xa[d.pointerId] = d: d.pointerId in this.xa && (this.xa[d.pointerId] = d),
        this.o = ob(this.xa);
        this.N && (a.type == ai ? this.He(a) : a.type == Xh && (this.N = this.Je(a)));
        a.type == Zh ? (this.N = a = this.Uc(a), c = this.Dc(a)) : a.type == $h && this.Ie(a);
        return ! c
    }
    cj.prototype.Dc = function(a) {
        return a
    };
    function fj(a) {
        cj.call(this, {
            handleDownEvent: gj,
            handleDragEvent: hj,
            handleUpEvent: ij
        });
        a = a ? a: {};
        this.a = a.kinetic;
        this.c = this.l = null;
        this.B = a.condition ? a.condition: Zi;
        this.s = !1
    }
    y(fj, cj);
    function hj(a) {
        var c = ej(this.o);
        this.a && this.a.b.push(c[0], c[1], Date.now());
        if (this.c) {
            var d = this.c[0] - c[0],
            e = c[1] - this.c[1];
            a = a.map;
            var f = a.aa(),
            g = f.V(),
            e = d = [d, e],
            h = g.resolution;
            e[0] *= h;
            e[1] *= h;
            Wb(d, g.rotation);
            Rb(d, g.center);
            d = f.Md(d);
            a.render();
            f.lb(d)
        }
        this.c = c
    }
    function ij(a) {
        a = a.map;
        var c = a.aa();
        if (0 === this.o.length) {
            var d;
            if (d = !this.s && this.a) if (d = this.a, 6 > d.b.length) d = !1;
            else {
                var e = Date.now() - d.i,
                f = d.b.length - 3;
                if (d.b[f + 2] < e) d = !1;
                else {
                    for (var g = f - 3; 0 < g && d.b[g + 2] > e;) g -= 3;
                    var e = d.b[f + 2] - d.b[g + 2],
                    h = d.b[f] - d.b[g],
                    f = d.b[f + 1] - d.b[g + 1];
                    d.c = Math.atan2(f, h);
                    d.a = Math.sqrt(h * h + f * f) / e;
                    d = d.a > d.g
                }
            }
            d && (d = this.a, d = (d.g - d.a) / d.f, f = this.a.c, g = c.bb(), this.l = Oi(this.a, g), a.Va(this.l), g = a.Ga(g), d = a.Oa([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.Md(d), c.lb(d));
            le(c, -1);
            a.render();
            return ! 1
        }
        this.c = null;
        return ! 0
    }
    function gj(a) {
        if (0 < this.o.length && this.B(a)) {
            var c = a.map,
            d = c.aa();
            this.c = null;
            this.N || le(d, 1);
            c.render();
            this.l && $a(c.D, this.l) && (d.lb(a.frameState.viewState.center), this.l = null);
            this.a && (a = this.a, a.b.length = 0, a.c = 0, a.a = 0);
            this.s = 1 < this.o.length;
            return ! 0
        }
        return ! 1
    }
    fj.prototype.Dc = Uc;
    function jj(a) {
        a = a ? a: {};
        cj.call(this, {
            handleDownEvent: kj,
            handleDragEvent: lj,
            handleUpEvent: mj
        });
        this.c = a.condition ? a.condition: Vi;
        this.a = void 0;
        this.l = void 0 !== a.duration ? a.duration: 250
    }
    y(jj, cj);
    function lj(a) {
        if (bj(a)) {
            var c = a.map,
            d = c.ab();
            a = a.pixel;
            d = Math.atan2(d[1] / 2 - a[1], a[0] - d[0] / 2);
            if (void 0 !== this.a) {
                a = d - this.a;
                var e = c.aa(),
                f = e.Ma();
                c.render();
                Qi(c, e, f - a)
            }
            this.a = d
        }
    }
    function mj(a) {
        if (!bj(a)) return ! 0;
        a = a.map;
        var c = a.aa();
        le(c, -1);
        var d = c.Ma(),
        e = this.l,
        d = c.constrainRotation(d, 0);
        Qi(a, c, d, void 0, e);
        return ! 1
    }
    function kj(a) {
        return bj(a) && Wi(a) && this.c(a) ? (a = a.map, le(a.aa(), 1), a.render(), this.a = void 0, !0) : !1
    }
    jj.prototype.Dc = Uc;
    function nj(a) {
        this.f = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.g = this.c = this.b = null
    }
    y(nj, Ab);
    nj.prototype.fa = function() {
        this.setMap(null)
    };
    function oj(a) {
        var c = a.c,
        d = a.g;
        a = a.a.style;
        a.left = Math.min(c[0], d[0]) + "px";
        a.top = Math.min(c[1], d[1]) + "px";
        a.width = Math.abs(d[0] - c[0]) + "px";
        a.height = Math.abs(d[1] - c[1]) + "px"
    }
    nj.prototype.setMap = function(a) {
        if (this.b) {
            this.b.B.removeChild(this.a);
            var c = this.a.style;
            c.left = c.top = c.width = c.height = "inherit"
        } (this.b = a) && this.b.B.appendChild(this.a)
    };
    function pj(a) {
        var c = a.c,
        d = a.g,
        c = [c, [c[0], d[1]], d, [d[0], c[1]]].map(a.b.Oa, a.b);
        c[4] = c[0].slice();
        a.f ? a.f.ma([c]) : a.f = new F([c])
    }
    nj.prototype.W = function() {
        return this.f
    };
    function qj(a, c, d) {
        Cb.call(this, a);
        this.coordinate = c;
        this.mapBrowserEvent = d
    }
    y(qj, Cb);
    function rj(a) {
        cj.call(this, {
            handleDownEvent: sj,
            handleDragEvent: tj,
            handleUpEvent: uj
        });
        a = a ? a: {};
        this.a = new nj(a.className || "ol-dragbox");
        this.c = null;
        this.H = a.condition ? a.condition: Tc;
        this.B = a.boxEndCondition ? a.boxEndCondition: vj
    }
    y(rj, cj);
    function vj(a, c, d) {
        a = d[0] - c[0];
        c = d[1] - c[1];
        return 64 <= a * a + c * c
    }
    function tj(a) {
        if (bj(a)) {
            var c = this.a,
            d = a.pixel;
            c.c = this.c;
            c.g = d;
            pj(c);
            oj(c);
            this.b(new qj("boxdrag", a.coordinate, a))
        }
    }
    rj.prototype.W = function() {
        return this.a.W()
    };
    rj.prototype.s = ta;
    function uj(a) {
        if (!bj(a)) return ! 0;
        this.a.setMap(null);
        this.B(a, this.c, a.pixel) && (this.s(a), this.b(new qj("boxend", a.coordinate, a)));
        return ! 1
    }
    function sj(a) {
        if (bj(a) && Wi(a) && this.H(a)) {
            this.c = a.pixel;
            this.a.setMap(a.map);
            var c = this.a,
            d = this.c;
            c.c = this.c;
            c.g = d;
            pj(c);
            oj(c);
            this.b(new qj("boxstart", a.coordinate, a));
            return ! 0
        }
        return ! 1
    };
    function wj(a) {
        a = a ? a: {};
        var c = a.condition ? a.condition: $i;
        this.l = void 0 !== a.duration ? a.duration: 200;
        this.D = void 0 !== a.out ? a.out: !1;
        rj.call(this, {
            condition: c,
            className: a.className || "ol-dragzoom"
        })
    }
    y(wj, rj);
    wj.prototype.s = function() {
        var a = this.A,
        c = a.aa(),
        d = a.ab(),
        e = this.W().G();
        if (this.D) {
            var f = c.Gc(d),
            e = [a.Ga(Fc(e)), a.Ga(Hc(e))],
            g = yc(Infinity, Infinity, -Infinity, -Infinity, void 0),
            h,
            k;
            h = 0;
            for (k = e.length; h < k; ++h) pc(g, e[h]);
            Rc(f, 1 / he(g, d));
            e = f
        }
        d = c.constrainResolution(he(e, d));
        f = c.$();
        g = c.bb();
        a.Va(te({
            resolution: f,
            duration: this.l,
            easing: ne
        }));
        a.Va(re({
            source: g,
            duration: this.l,
            easing: ne
        }));
        c.lb(Nc(e));
        c.Sb(d)
    };
    function xj(a) {
        Pi.call(this, {
            handleEvent: yj
        });
        a = a || {};
        this.a = function(a) {
            return Zi.call(this, a) && aj.call(this, a)
        };
        this.c = void 0 !== a.condition ? a.condition: this.a;
        this.o = void 0 !== a.duration ? a.duration: 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta: 128
    }
    y(xj, Pi);
    function yj(a) {
        var c = !1;
        if ("keydown" == a.type) {
            var d = a.originalEvent.keyCode;
            if (this.c(a) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = a.map,
                c = e.aa(),
                f = c.$() * this.l,
                g = 0,
                h = 0;
                40 == d ? h = -f: 37 == d ? g = -f: 39 == d ? g = f: h = f;
                d = [g, h];
                Wb(d, c.Ma());
                f = this.o;
                if (g = c.bb()) f && 0 < f && e.Va(re({
                    source: g,
                    duration: f,
                    easing: pe
                })),
                e = c.Md([g[0] + d[0], g[1] + d[1]]),
                c.lb(e);
                a.preventDefault();
                c = !0
            }
        }
        return ! c
    };
    function zj(a) {
        Pi.call(this, {
            handleEvent: Aj
        });
        a = a ? a: {};
        this.c = a.condition ? a.condition: aj;
        this.a = a.delta ? a.delta: 1;
        this.o = void 0 !== a.duration ? a.duration: 100
    }
    y(zj, Pi);
    function Aj(a) {
        var c = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var d = a.originalEvent.charCode;
            if (this.c(a) && (43 == d || 45 == d)) {
                c = a.map;
                d = 43 == d ? this.a: -this.a;
                c.render();
                var e = c.aa();
                Ri(c, e, d, void 0, this.o);
                a.preventDefault();
                c = !0
            }
        }
        return ! c
    };
    function Bj(a) {
        Pi.call(this, {
            handleEvent: Cj
        });
        a = a || {};
        this.c = 0;
        this.N = void 0 !== a.duration ? a.duration: 250;
        this.s = void 0 !== a.useAnchor ? a.useAnchor: !0;
        this.a = null;
        this.l = this.o = void 0
    }
    y(Bj, Pi);
    function Cj(a) {
        var c = !1;
        if ("wheel" == a.type || "mousewheel" == a.type) {
            var c = a.map,
            d = a.originalEvent;
            this.s && (this.a = a.coordinate);
            var e;
            "wheel" == a.type ? (e = d.deltaY, Yg && d.deltaMode === aa.WheelEvent.DOM_DELTA_PIXEL && (e /= ah), d.deltaMode === aa.WheelEvent.DOM_DELTA_LINE && (e *= 40)) : "mousewheel" == a.type && (e = -d.wheelDeltaY, Zg && (e /= 3));
            this.c += e;
            void 0 === this.o && (this.o = Date.now());
            e = Math.max(80 - (Date.now() - this.o), 0);
            aa.clearTimeout(this.l);
            this.l = aa.setTimeout(this.B.bind(this, c), e);
            a.preventDefault();
            c = !0
        }
        return ! c
    }
    Bj.prototype.B = function(a) {
        var c = La(this.c, -1, 1),
        d = a.aa();
        a.render();
        Ri(a, d, -c, this.a, this.N);
        this.c = 0;
        this.a = null;
        this.l = this.o = void 0
    };
    Bj.prototype.H = function(a) {
        this.s = a;
        a || (this.a = null)
    };
    function Dj(a) {
        cj.call(this, {
            handleDownEvent: Ej,
            handleDragEvent: Fj,
            handleUpEvent: Gj
        });
        a = a || {};
        this.c = null;
        this.l = void 0;
        this.a = !1;
        this.s = 0;
        this.H = void 0 !== a.threshold ? a.threshold: .3;
        this.B = void 0 !== a.duration ? a.duration: 250
    }
    y(Dj, cj);
    function Fj(a) {
        var c = 0,
        d = this.o[0],
        e = this.o[1],
        d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
        void 0 !== this.l && (c = d - this.l, this.s += c, !this.a && Math.abs(this.s) > this.H && (this.a = !0));
        this.l = d;
        a = a.map;
        d = a.a.getBoundingClientRect();
        e = ej(this.o);
        e[0] -= d.left;
        e[1] -= d.top;
        this.c = a.Oa(e);
        this.a && (d = a.aa(), e = d.Ma(), a.render(), Qi(a, d, e + c, this.c))
    }
    function Gj(a) {
        if (2 > this.o.length) {
            a = a.map;
            var c = a.aa();
            le(c, -1);
            if (this.a) {
                var d = c.Ma(),
                e = this.c,
                f = this.B,
                d = c.constrainRotation(d, 0);
                Qi(a, c, d, e, f)
            }
            return ! 1
        }
        return ! 0
    }
    function Ej(a) {
        return 2 <= this.o.length ? (a = a.map, this.c = null, this.l = void 0, this.a = !1, this.s = 0, this.N || le(a.aa(), 1), a.render(), !0) : !1
    }
    Dj.prototype.Dc = Uc;
    function Hj(a) {
        cj.call(this, {
            handleDownEvent: Ij,
            handleDragEvent: Jj,
            handleUpEvent: Kj
        });
        a = a ? a: {};
        this.c = null;
        this.s = void 0 !== a.duration ? a.duration: 400;
        this.a = void 0;
        this.l = 1
    }
    y(Hj, cj);
    function Jj(a) {
        var c = 1,
        d = this.o[0],
        e = this.o[1],
        f = d.clientX - e.clientX,
        d = d.clientY - e.clientY,
        f = Math.sqrt(f * f + d * d);
        void 0 !== this.a && (c = this.a / f);
        this.a = f;
        1 != c && (this.l = c);
        a = a.map;
        var f = a.aa(),
        d = f.$(),
        e = a.a.getBoundingClientRect(),
        g = ej(this.o);
        g[0] -= e.left;
        g[1] -= e.top;
        this.c = a.Oa(g);
        a.render();
        Si(a, f, d * c, this.c)
    }
    function Kj(a) {
        if (2 > this.o.length) {
            a = a.map;
            var c = a.aa();
            le(c, -1);
            var d = c.$(),
            e = this.c,
            f = this.s,
            d = c.constrainResolution(d, 0, this.l - 1);
            Si(a, c, d, e, f);
            return ! 1
        }
        return ! 0
    }
    function Ij(a) {
        return 2 <= this.o.length ? (a = a.map, this.c = null, this.a = void 0, this.l = 1, this.N || le(a.aa(), 1), a.render(), !0) : !1
    }
    Hj.prototype.Dc = Uc;
    function Lj(a) {
        a = a ? a: {};
        var c = new De,
        d = new Ni( - .005, .05, 100); (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate: 1) && c.push(new jj); (void 0 !== a.doubleClickZoom ? a.doubleClickZoom: 1) && c.push(new Ti({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        })); (void 0 !== a.dragPan ? a.dragPan: 1) && c.push(new fj({
            kinetic: d
        })); (void 0 !== a.pinchRotate ? a.pinchRotate: 1) && c.push(new Dj); (void 0 !== a.pinchZoom ? a.pinchZoom: 1) && c.push(new Hj({
            duration: a.zoomDuration
        }));
        if (void 0 !== a.keyboard ? a.keyboard: 1) c.push(new xj),
        c.push(new zj({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        })); (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom: 1) && c.push(new Bj({
            duration: a.zoomDuration
        })); (void 0 !== a.shiftDragZoom ? a.shiftDragZoom: 1) && c.push(new wj({
            duration: a.zoomDuration
        }));
        return c
    };
    function Mj(a) {
        var c = a || {};
        a = mb({},
        c);
        delete a.layers;
        c = c.layers;
        ci.call(this, a);
        this.f = [];
        this.a = {};
        C(this, Mb("layers"), this.Hk, this);
        c ? Array.isArray(c) && (c = new De(c.slice())) : c = new De;
        this.hh(c)
    }
    y(Mj, ci);
    l = Mj.prototype;
    l.Wd = function() {
        this.yb() && this.u()
    };
    l.Hk = function() {
        this.f.forEach(sb);
        this.f.length = 0;
        var a = this.Nc();
        this.f.push(C(a, "add", this.Gk, this), C(a, "remove", this.Ik, this));
        for (var c in this.a) this.a[c].forEach(sb);
        nb(this.a);
        var a = a.a,
        d, e;
        c = 0;
        for (d = a.length; c < d; c++) e = a[c],
        this.a[x(e).toString()] = [C(e, "propertychange", this.Wd, this), C(e, "change", this.Wd, this)];
        this.u()
    };
    l.Gk = function(a) {
        a = a.element;
        var c = x(a).toString();
        this.a[c] = [C(a, "propertychange", this.Wd, this), C(a, "change", this.Wd, this)];
        this.u()
    };
    l.Ik = function(a) {
        a = x(a.element).toString();
        this.a[a].forEach(sb);
        delete this.a[a];
        this.u()
    };
    l.Nc = function() {
        return this.get("layers")
    };
    l.hh = function(a) {
        this.set("layers", a)
    };
    l.bf = function(a) {
        var c = void 0 !== a ? a: [],
        d = c.length;
        this.Nc().forEach(function(a) {
            a.bf(c)
        });
        a = di(this);
        var e, f;
        for (e = c.length; d < e; d++) f = c[d],
        f.opacity *= a.opacity,
        f.visible = f.visible && a.visible,
        f.maxResolution = Math.min(f.maxResolution, a.maxResolution),
        f.minResolution = Math.max(f.minResolution, a.minResolution),
        void 0 !== a.extent && (f.extent = void 0 !== f.extent ? Pc(f.extent, a.extent) : a.extent);
        return c
    };
    l.df = function() {
        return "ready"
    };
    function Nj(a) {
        Yc.call(this, {
            code: a,
            units: "m",
            extent: Oj,
            global: !0,
            worldExtent: Pj
        })
    }
    y(Nj, Yc);
    Nj.prototype.getPointResolution = function(a, c) {
        return a / Ma(c[1] / 6378137)
    };
    var Qj = 6378137 * Math.PI,
    Oj = [ - Qj, -Qj, Qj, Qj],
    Pj = [ - 180, -85, 180, 85],
    jd = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a) {
        return new Nj(a)
    });
    function kd(a, c, d) {
        var e = a.length;
        d = 1 < d ? d: 2;
        void 0 === c && (2 < d ? c = a.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 6378137 * Math.PI * a[f] / 180,
        c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[f + 1] + 90) / 360));
        return c
    }
    function ld(a, c, d) {
        var e = a.length;
        d = 1 < d ? d: 2;
        void 0 === c && (2 < d ? c = a.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 180 * a[f] / (6378137 * Math.PI),
        c[f + 1] = 360 * Math.atan(Math.exp(a[f + 1] / 6378137)) / Math.PI - 90;
        return c
    };
    var Rj = new Vc(6378137);
    function Sj(a, c) {
        Yc.call(this, {
            code: a,
            units: "degrees",
            extent: Tj,
            axisOrientation: c,
            global: !0,
            metersPerUnit: Uj,
            worldExtent: Tj
        })
    }
    y(Sj, Yc);
    Sj.prototype.getPointResolution = function(a) {
        return a
    };
    var Tj = [ - 180, -90, 180, 90],
    Uj = Math.PI * Rj.radius / 180,
    md = [new Sj("CRS:84"), new Sj("EPSG:4326", "neu"), new Sj("urn:ogc:def:crs:EPSG::4326", "neu"), new Sj("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Sj("urn:ogc:def:crs:OGC:1.3:CRS84"), new Sj("urn:ogc:def:crs:OGC:2:84"), new Sj("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Sj("urn:x-ogc:def:crs:EPSG:4326", "neu")];
    function Vj() {
        bd(jd);
        bd(md);
        id()
    };
    function Wj(a) {
        gi.call(this, a ? a: {})
    }
    y(Wj, gi);
    function Xj(a) {
        a = a ? a: {};
        var c = mb({},
        a);
        delete c.preload;
        delete c.useInterimTilesOnError;
        gi.call(this, c);
        this.c(void 0 !== a.preload ? a.preload: 0);
        this.i(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError: !0)
    }
    y(Xj, gi);
    Xj.prototype.a = function() {
        return this.get("preload")
    };
    Xj.prototype.c = function(a) {
        this.set("preload", a)
    };
    Xj.prototype.f = function() {
        return this.get("useInterimTilesOnError")
    };
    Xj.prototype.i = function(a) {
        this.set("useInterimTilesOnError", a)
    };
    var Yj = [0, 0, 0, 1],
    Zj = [],
    ak = [0, 0, 0, 1];
    function bk(a, c, d, e) {
        0 !== c && (a.translate(d, e), a.rotate(c), a.translate( - d, -e))
    };
    function ck(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color: null;
        this.a = void 0
    }
    ck.prototype.g = function() {
        return this.b
    };
    ck.prototype.f = function(a) {
        this.b = a;
        this.a = void 0
    };
    function dk(a) {
        void 0 === a.a && (a.a = a.b instanceof CanvasPattern || a.b instanceof CanvasGradient ? x(a.b).toString() : "f" + (a.b ? Oe(a.b) : "-"));
        return a.a
    };
    function ek() {
        this.a = -1
    };
    function fk() {
        this.a = -1;
        this.a = 64;
        this.b = Array(4);
        this.c = Array(this.a);
        this.f = this.g = 0;
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.f = this.g = 0
    }
    y(fk, ek);
    function gk(a, c, d) {
        d || (d = 0);
        var e = Array(16);
        if (ga(c)) for (var f = 0; 16 > f; ++f) e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24;
        else for (f = 0; 16 > f; ++f) e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
        c = a.b[0];
        d = a.b[1];
        var f = a.b[2],
        g = a.b[3],
        h = 0,
        h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[3] + 3250441966 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[7] + 4139469664 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
        a.b[0] = a.b[0] + c & 4294967295;
        a.b[1] = a.b[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
        a.b[2] = a.b[2] + f & 4294967295;
        a.b[3] = a.b[3] + g & 4294967295
    }
    function hk(a, c) {
        var d;
        ca(d) || (d = c.length);
        for (var e = d - a.a,
        f = a.c,
        g = a.g,
        h = 0; h < d;) {
            if (0 == g) for (; h <= e;) gk(a, c, h),
            h += a.a;
            if (ga(c)) for (; h < d;) {
                if (f[g++] = c.charCodeAt(h++), g == a.a) {
                    gk(a, f);
                    g = 0;
                    break
                }
            } else for (; h < d;) if (f[g++] = c[h++], g == a.a) {
                gk(a, f);
                g = 0;
                break
            }
        }
        a.g = g;
        a.f += d
    };
    function ik(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color: null;
        this.f = a.lineCap;
        this.g = void 0 !== a.lineDash ? a.lineDash: null;
        this.c = a.lineJoin;
        this.i = a.miterLimit;
        this.a = a.width;
        this.j = void 0
    }
    l = ik.prototype;
    l.jn = function() {
        return this.b
    };
    l.Tj = function() {
        return this.f
    };
    l.kn = function() {
        return this.g
    };
    l.Uj = function() {
        return this.c
    };
    l.Zj = function() {
        return this.i
    };
    l.ln = function() {
        return this.a
    };
    l.mn = function(a) {
        this.b = a;
        this.j = void 0
    };
    l.Ho = function(a) {
        this.f = a;
        this.j = void 0
    };
    l.nn = function(a) {
        this.g = a;
        this.j = void 0
    };
    l.Io = function(a) {
        this.c = a;
        this.j = void 0
    };
    l.Jo = function(a) {
        this.i = a;
        this.j = void 0
    };
    l.No = function(a) {
        this.a = a;
        this.j = void 0
    };
    function jk(a) {
        if (void 0 === a.j) {
            var c = "s" + (a.b ? Oe(a.b) : "-") + "," + (void 0 !== a.f ? a.f.toString() : "-") + "," + (a.g ? a.g.toString() : "-") + "," + (void 0 !== a.c ? a.c: "-") + "," + (void 0 !== a.i ? a.i.toString() : "-") + "," + (void 0 !== a.a ? a.a.toString() : "-"),
            d = new fk;
            hk(d, c);
            c = Array((56 > d.g ? d.a: 2 * d.a) - d.g);
            c[0] = 128;
            for (var e = 1; e < c.length - 8; ++e) c[e] = 0;
            for (var f = 8 * d.f,
            e = c.length - 8; e < c.length; ++e) c[e] = f & 255,
            f /= 256;
            hk(d, c);
            c = Array(16);
            for (e = f = 0; 4 > e; ++e) for (var g = 0; 32 > g; g += 8) c[f++] = d.b[e] >>> g & 255;
            if (8192 >= c.length) d = String.fromCharCode.apply(null, c);
            else for (d = "", e = 0; e < c.length; e += 8192) f = Ie(c, e, e + 8192),
            d += String.fromCharCode.apply(null, f);
            a.j = d
        }
        return a.j
    };
    function kk(a) {
        a = a || {};
        this.i = this.b = this.c = null;
        this.f = void 0 !== a.fill ? a.fill: null;
        this.a = void 0 !== a.stroke ? a.stroke: null;
        this.g = a.radius;
        this.U = [0, 0];
        this.l = this.H = this.o = null;
        var c = a.atlasManager,
        d, e = null,
        f, g = 0;
        this.a && (f = Oe(this.a.b), g = this.a.a, void 0 === g && (g = 1), e = this.a.g, bh || (e = null));
        var h = 2 * (this.g + g) + 1;
        f = {
            strokeStyle: f,
            yd: g,
            size: h,
            lineDash: e
        };
        if (void 0 === c) this.b = document.createElement("CANVAS"),
        this.b.height = h,
        this.b.width = h,
        d = h = this.b.width,
        c = this.b.getContext("2d"),
        this.Ah(f, c, 0, 0),
        this.f ? this.i = this.b: (c = this.i = document.createElement("CANVAS"), c.height = f.size, c.width = f.size, c = c.getContext("2d"), this.zh(f, c, 0, 0));
        else {
            h = Math.round(h); (e = !this.f) && (d = this.zh.bind(this, f));
            var g = this.a ? jk(this.a) : "-",
            k = this.f ? dk(this.f) : "-";
            this.c && g == this.c[1] && k == this.c[2] && this.g == this.c[3] || (this.c = ["c" + g + k + (void 0 !== this.g ? this.g.toString() : "-"), g, k, this.g]);
            f = c.add(this.c[0], h, h, this.Ah.bind(this, f), d);
            this.b = f.image;
            this.U = [f.offsetX, f.offsetY];
            d = f.image.width;
            this.i = e ? f.Lg: this.b
        }
        this.o = [h / 2, h / 2];
        this.H = [h, h];
        this.l = [d, d];
        wi.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel: !0
        })
    }
    y(kk, wi);
    l = kk.prototype;
    l.Vb = function() {
        return this.o
    };
    l.$m = function() {
        return this.f
    };
    l.ke = function() {
        return this.i
    };
    l.ec = function() {
        return this.b
    };
    l.qd = function() {
        return 2
    };
    l.hd = function() {
        return this.l
    };
    l.Ia = function() {
        return this.U
    };
    l.an = function() {
        return this.g
    };
    l.Db = function() {
        return this.H
    };
    l.bn = function() {
        return this.a
    };
    l.hf = ta;
    l.load = ta;
    l.Qf = ta;
    l.Ah = function(a, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(a.size / 2, a.size / 2, this.g, 0, 2 * Math.PI, !0);
        this.f && (c.fillStyle = Qe(this.f.b), c.fill());
        this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.yd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
        c.closePath()
    };
    l.zh = function(a, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(a.size / 2, a.size / 2, this.g, 0, 2 * Math.PI, !0);
        c.fillStyle = Oe(Yj);
        c.fill();
        this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.yd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
        c.closePath()
    };
    function lk(a) {
        a = a || {};
        this.i = null;
        this.g = mk;
        void 0 !== a.geometry && this.Dh(a.geometry);
        this.c = void 0 !== a.fill ? a.fill: null;
        this.a = void 0 !== a.image ? a.image: null;
        this.f = void 0 !== a.stroke ? a.stroke: null;
        this.j = void 0 !== a.text ? a.text: null;
        this.b = a.zIndex
    }
    l = lk.prototype;
    l.W = function() {
        return this.i
    };
    l.Oj = function() {
        return this.g
    };
    l.pn = function() {
        return this.c
    };
    l.qn = function() {
        return this.a
    };
    l.rn = function() {
        return this.f
    };
    l.Ha = function() {
        return this.j
    };
    l.sn = function() {
        return this.b
    };
    l.Dh = function(a) {
        ia(a) ? this.g = a: "string" === typeof a ? this.g = function(c) {
            return c.get(a)
        }: a ? void 0 !== a && (this.g = function() {
            return a
        }) : this.g = mk;
        this.i = a
    };
    l.tn = function(a) {
        this.b = a
    };
    function nk(a) {
        if (!ia(a)) {
            var c;
            c = Array.isArray(a) ? a: [a];
            a = function() {
                return c
            }
        }
        return a
    }
    var ok = null;
    function pk() {
        if (!ok) {
            var a = new ck({
                color: "rgba(255,255,255,0.4)"
            }),
            c = new ik({
                color: "#3399CC",
                width: 1.25
            });
            ok = [new lk({
                image: new kk({
                    fill: a,
                    stroke: c,
                    radius: 5
                }),
                fill: a,
                stroke: c
            })]
        }
        return ok
    }
    function qk() {
        var a = {},
        c = [255, 255, 255, 1],
        d = [0, 153, 255, 1];
        a.Polygon = [new lk({
            fill: new ck({
                color: [255, 255, 255, .5]
            })
        })];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new lk({
            stroke: new ik({
                color: c,
                width: 5
            })
        }), new lk({
            stroke: new ik({
                color: d,
                width: 3
            })
        })];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new lk({
            image: new kk({
                radius: 6,
                fill: new ck({
                    color: d
                }),
                stroke: new ik({
                    color: c,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString, a.Point);
        return a
    }
    function mk(a) {
        return a.W()
    };
    function G(a) {
        a = a ? a: {};
        var c = mb({},
        a);
        delete c.style;
        delete c.renderBuffer;
        delete c.updateWhileAnimating;
        delete c.updateWhileInteracting;
        gi.call(this, c);
        this.a = void 0 !== a.renderBuffer ? a.renderBuffer: 100;
        this.B = null;
        this.f = void 0;
        this.c(a.style);
        this.s = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating: !1;
        this.A = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting: !1
    }
    y(G, gi);
    function rk(a) {
        return a.get("renderOrder")
    }
    G.prototype.N = function() {
        return this.B
    };
    G.prototype.H = function() {
        return this.f
    };
    G.prototype.c = function(a) {
        this.B = void 0 !== a ? a: pk;
        this.f = null === a ? void 0 : nk(this.B);
        this.u()
    };
    function H(a) {
        a = a ? a: {};
        var c = mb({},
        a);
        delete c.preload;
        delete c.useInterimTilesOnError;
        G.call(this, c);
        this.T(a.preload ? a.preload: 0);
        this.Y(a.useInterimTilesOnError ? a.useInterimTilesOnError: !0)
    }
    y(H, G);
    H.prototype.i = function() {
        return this.get("preload")
    };
    H.prototype.S = function() {
        return this.get("useInterimTilesOnError")
    };
    H.prototype.T = function(a) {
        this.set("preload", a)
    };
    H.prototype.Y = function(a) {
        this.set("useInterimTilesOnError", a)
    };
    function sk(a, c, d, e, f) {
        this.f = a;
        this.B = c;
        this.c = d;
        this.H = e;
        this.Uc = f;
        this.i = this.b = this.a = this.ya = this.xa = this.Y = null;
        this.rb = this.na = this.A = this.S = this.va = this.D = 0;
        this.oa = !1;
        this.j = this.ta = 0;
        this.Ua = !1;
        this.Fa = 0;
        this.g = "";
        this.l = this.N = this.lc = this.sb = 0;
        this.T = this.s = this.o = null;
        this.U = [];
        this.mc = cc()
    }
    y(sk, ei);
    function tk(a, c, d) {
        if (a.i) {
            c = wd(c, 0, d, 2, a.H, a.U);
            d = a.f;
            var e = a.mc,
            f = d.globalAlpha;
            1 != a.A && (d.globalAlpha = f * a.A);
            var g = a.ta;
            a.oa && (g += a.Uc);
            var h, k;
            h = 0;
            for (k = c.length; h < k; h += 2) {
                var m = c[h] - a.D,
                n = c[h + 1] - a.va;
                a.Ua && (m = Math.round(m), n = Math.round(n));
                if (0 !== g || 1 != a.j) {
                    var p = m + a.D,
                    q = n + a.va;
                    ki(e, p, q, a.j, a.j, g, -p, -q);
                    d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
                }
                d.drawImage(a.i, a.na, a.rb, a.Fa, a.S, m, n, a.Fa, a.S)
            }
            0 === g && 1 == a.j || d.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.A && (d.globalAlpha = f)
        }
    }
    function uk(a, c, d, e) {
        var f = 0;
        if (a.T && "" !== a.g) {
            a.o && vk(a, a.o);
            a.s && wk(a, a.s);
            var g = a.T,
            h = a.f,
            k = a.ya;
            k ? (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline)) : (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, a.ya = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            });
            c = wd(c, f, d, e, a.H, a.U);
            for (g = a.f; f < d; f += e) {
                h = c[f] + a.sb;
                k = c[f + 1] + a.lc;
                if (0 !== a.N || 1 != a.l) {
                    var m = ki(a.mc, h, k, a.l, a.l, a.N, -h, -k);
                    g.setTransform(m[0], m[1], m[4], m[5], m[12], m[13])
                }
                a.s && g.strokeText(a.g, h, k);
                a.o && g.fillText(a.g, h, k)
            }
            0 === a.N && 1 == a.l || g.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function xk(a, c, d, e, f, g) {
        var h = a.f;
        a = wd(c, d, e, f, a.H, a.U);
        h.moveTo(a[0], a[1]);
        c = a.length;
        g && (c -= 2);
        for (d = 2; d < c; d += 2) h.lineTo(a[d], a[d + 1]);
        g && h.closePath();
        return e
    }
    function yk(a, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = e.length; g < h; ++g) d = xk(a, c, d, e[g], f, !0);
        return d
    }
    l = sk.prototype;
    l.Nd = function(a) {
        if (Qc(this.c, a.G())) {
            if (this.a || this.b) {
                this.a && vk(this, this.a);
                this.b && wk(this, this.b);
                var c;
                c = this.H;
                var d = this.U,
                e = a.ga();
                c = e ? wd(e, 0, e.length, a.ra(), c, d) : null;
                d = c[2] - c[0];
                e = c[3] - c[1];
                d = Math.sqrt(d * d + e * e);
                e = this.f;
                e.beginPath();
                e.arc(c[0], c[1], d, 0, 2 * Math.PI);
                this.a && e.fill();
                this.b && e.stroke()
            }
            "" !== this.g && uk(this, a.od(), 2, 2)
        }
    };
    l.pd = function(a) {
        this.Qb(a.c, a.f);
        this.Rb(a.a);
        this.Tb(a.Ha())
    };
    l.pc = function(a) {
        switch (a.X()) {
        case "Point":
            this.rc(a);
            break;
        case "LineString":
            this.dd(a);
            break;
        case "Polygon":
            this.We(a);
            break;
        case "MultiPoint":
            this.qc(a);
            break;
        case "MultiLineString":
            this.Ue(a);
            break;
        case "MultiPolygon":
            this.Ve(a);
            break;
        case "GeometryCollection":
            this.Te(a);
            break;
        case "Circle":
            this.Nd(a)
        }
    };
    l.Se = function(a, c) {
        var d = (0, c.g)(a);
        d && Qc(this.c, d.G()) && (this.pd(c), this.pc(d))
    };
    l.Te = function(a) {
        a = a.c;
        var c, d;
        c = 0;
        for (d = a.length; c < d; ++c) this.pc(a[c])
    };
    l.rc = function(a) {
        var c = a.ga();
        a = a.ra();
        this.i && tk(this, c, c.length);
        "" !== this.g && uk(this, c, c.length, a)
    };
    l.qc = function(a) {
        var c = a.ga();
        a = a.ra();
        this.i && tk(this, c, c.length);
        "" !== this.g && uk(this, c, c.length, a)
    };
    l.dd = function(a) {
        if (Qc(this.c, a.G())) {
            if (this.b) {
                wk(this, this.b);
                var c = this.f,
                d = a.ga();
                c.beginPath();
                xk(this, d, 0, d.length, a.ra(), !1);
                c.stroke()
            }
            "" !== this.g && (a = zk(a), uk(this, a, 2, 2))
        }
    };
    l.Ue = function(a) {
        var c = a.G();
        if (Qc(this.c, c)) {
            if (this.b) {
                wk(this, this.b);
                var c = this.f,
                d = a.ga(),
                e = 0,
                f = a.Bb(),
                g = a.ra();
                c.beginPath();
                var h, k;
                h = 0;
                for (k = f.length; h < k; ++h) e = xk(this, d, e, f[h], g, !1);
                c.stroke()
            }
            "" !== this.g && (a = Ak(a), uk(this, a, a.length, 2))
        }
    };
    l.We = function(a) {
        if (Qc(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && vk(this, this.a);
                this.b && wk(this, this.b);
                var c = this.f;
                c.beginPath();
                yk(this, a.Mb(), 0, a.Bb(), a.ra());
                this.a && c.fill();
                this.b && c.stroke()
            }
            "" !== this.g && (a = be(a), uk(this, a, 2, 2))
        }
    };
    l.Ve = function(a) {
        if (Qc(this.c, a.G())) {
            if (this.b || this.a) {
                this.a && vk(this, this.a);
                this.b && wk(this, this.b);
                var c = this.f,
                d = Bk(a),
                e = 0,
                f = a.i,
                g = a.ra(),
                h,
                k;
                h = 0;
                for (k = f.length; h < k; ++h) {
                    var m = f[h];
                    c.beginPath();
                    e = yk(this, d, e, m, g);
                    this.a && c.fill();
                    this.b && c.stroke()
                }
            }
            "" !== this.g && (a = Ck(a), uk(this, a, a.length, 2))
        }
    };
    function vk(a, c) {
        var d = a.f,
        e = a.Y;
        e ? e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle) : (d.fillStyle = c.fillStyle, a.Y = {
            fillStyle: c.fillStyle
        })
    }
    function wk(a, c) {
        var d = a.f,
        e = a.xa;
        e ? (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), bh && !bb(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin = c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle)) : (d.lineCap = c.lineCap, bh && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, a.xa = {
            lineCap: c.lineCap,
            lineDash: c.lineDash,
            lineJoin: c.lineJoin,
            lineWidth: c.lineWidth,
            miterLimit: c.miterLimit,
            strokeStyle: c.strokeStyle
        })
    }
    l.Qb = function(a, c) {
        if (a) {
            var d = a.b;
            this.a = {
                fillStyle: Qe(d ? d: Yj)
            }
        } else this.a = null;
        if (c) {
            var d = c.b,
            e = c.f,
            f = c.g,
            g = c.c,
            h = c.a,
            k = c.i;
            this.b = {
                lineCap: void 0 !== e ? e: "round",
                lineDash: f ? f: Zj,
                lineJoin: void 0 !== g ? g: "round",
                lineWidth: this.B * (void 0 !== h ? h: 1),
                miterLimit: void 0 !== k ? k: 10,
                strokeStyle: Oe(d ? d: ak)
            }
        } else this.b = null
    };
    l.Rb = function(a) {
        if (a) {
            var c = a.Vb(),
            d = a.ec(1),
            e = a.Ia(),
            f = a.Db();
            this.D = c[0];
            this.va = c[1];
            this.S = f[1];
            this.i = d;
            this.A = a.A;
            this.na = e[0];
            this.rb = e[1];
            this.oa = a.B;
            this.ta = a.s;
            this.j = a.j;
            this.Ua = a.N;
            this.Fa = f[0]
        } else this.i = null
    };
    l.Tb = function(a) {
        if (a) {
            var c = a.b;
            c ? (c = c.b, this.o = {
                fillStyle: Qe(c ? c: Yj)
            }) : this.o = null;
            var d = a.j;
            if (d) {
                var c = d.b,
                e = d.f,
                f = d.g,
                g = d.c,
                h = d.a,
                d = d.i;
                this.s = {
                    lineCap: void 0 !== e ? e: "round",
                    lineDash: f ? f: Zj,
                    lineJoin: void 0 !== g ? g: "round",
                    lineWidth: void 0 !== h ? h: 1,
                    miterLimit: void 0 !== d ? d: 10,
                    strokeStyle: Oe(c ? c: ak)
                }
            } else this.s = null;
            var c = a.g,
            e = a.f,
            f = a.c,
            g = a.i,
            h = a.a,
            d = a.Ha(),
            k = a.o;
            a = a.l;
            this.T = {
                font: void 0 !== c ? c: "10px sans-serif",
                textAlign: void 0 !== k ? k: "center",
                textBaseline: void 0 !== a ? a: "middle"
            };
            this.g = void 0 !== d ? d: "";
            this.sb = void 0 !== e ? this.B * e: 0;
            this.lc = void 0 !== f ? this.B * f: 0;
            this.N = void 0 !== g ? g: 0;
            this.l = this.B * (void 0 !== h ? h: 1)
        } else this.g = ""
    };
    function Dk(a) {
        ni.call(this, a);
        this.D = cc()
    }
    y(Dk, ni);
    Dk.prototype.c = function(a, c, d) {
        Ek(this, "precompose", d, a, void 0);
        var e = this.f ? this.f.a() : null;
        if (e) {
            var f = c.extent,
            g = void 0 !== f;
            if (g) {
                var h = a.pixelRatio,
                k = a.size[0] * h,
                m = a.size[1] * h,
                n = a.viewState.rotation,
                p = Ic(f),
                q = Hc(f),
                r = Gc(f),
                f = Fc(f);
                mi(a.coordinateToPixelMatrix, p, p);
                mi(a.coordinateToPixelMatrix, q, q);
                mi(a.coordinateToPixelMatrix, r, r);
                mi(a.coordinateToPixelMatrix, f, f);
                d.save();
                bk(d, -n, k / 2, m / 2);
                d.beginPath();
                d.moveTo(p[0] * h, p[1] * h);
                d.lineTo(q[0] * h, q[1] * h);
                d.lineTo(r[0] * h, r[1] * h);
                d.lineTo(f[0] * h, f[1] * h);
                d.clip();
                bk(d, n, k / 2, m / 2)
            }
            h = this.l;
            k = d.globalAlpha;
            d.globalAlpha = c.opacity;
            d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(h[13]), Math.round(e.width * h[0]), Math.round(e.height * h[5]));
            d.globalAlpha = k;
            g && d.restore()
        }
        Fk(this, d, a)
    };
    function Ek(a, c, d, e, f) {
        var g = a.a;
        if (Gb(g, c)) {
            var h = e.size[0] * e.pixelRatio,
            k = e.size[1] * e.pixelRatio,
            m = e.viewState.rotation;
            bk(d, -m, h / 2, k / 2);
            a = void 0 !== f ? f: Gk(a, e, 0);
            a = new sk(d, e.pixelRatio, e.extent, a, e.viewState.rotation);
            g.b(new fi(c, g, a, e, d, null));
            bk(d, m, h / 2, k / 2)
        }
    }
    function Fk(a, c, d, e) {
        Ek(a, "postcompose", c, d, e)
    }
    function Gk(a, c, d) {
        var e = c.viewState,
        f = c.pixelRatio;
        return ki(a.D, f * c.size[0] / 2, f * c.size[1] / 2, f / e.resolution, -f / e.resolution, -e.rotation, -e.center[0] + d, -e.center[1])
    };
    var Hk = ["Polygon", "LineString", "Image", "Text"];
    function Ik(a, c, d) {
        this.rb = a;
        this.T = c;
        this.f = null;
        this.c = 0;
        this.resolution = d;
        this.S = this.va = null;
        this.a = [];
        this.coordinates = [];
        this.xa = cc();
        this.b = [];
        this.Y = [];
        this.ya = cc();
        this.na = cc()
    }
    y(Ik, ei);
    function Jk(a, c, d, e, f, g) {
        var h = a.coordinates.length,
        k = a.Ye(),
        m = [c[d], c[d + 1]],
        n = [NaN, NaN],
        p = !0,
        q,
        r,
        t;
        for (q = d + f; q < e; q += f) n[0] = c[q],
        n[1] = c[q + 1],
        t = xc(k, n),
        t !== r ? (p && (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1]), a.coordinates[h++] = n[0], a.coordinates[h++] = n[1], p = !1) : 1 === t ? (a.coordinates[h++] = n[0], a.coordinates[h++] = n[1], p = !1) : p = !0,
        m[0] = n[0],
        m[1] = n[1],
        r = t;
        q === d + f && (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1]);
        g && (a.coordinates[h++] = c[d], a.coordinates[h++] = c[d + 1]);
        return h
    }
    function Kk(a, c) {
        a.va = [0, c, 0];
        a.a.push(a.va);
        a.S = [0, c, 0];
        a.b.push(a.S)
    }
    function Lk(a, c, d, e, f, g, h, k, m) {
        var n;
        li(e, a.xa) ? n = a.Y: (n = wd(a.coordinates, 0, a.coordinates.length, 2, e, a.Y), gc(a.xa, e));
        e = !pb(g);
        var p = 0,
        q = h.length,
        r = 0,
        t, v = a.ya;
        a = a.na;
        for (var w, A, D, z; p < q;) {
            var B = h[p],
            J,
            K,
            M,
            Y;
            switch (B[0]) {
            case 0:
                r = B[1];
                e && g[x(r).toString()] || !r.W() ? p = B[2] : void 0 === m || Qc(m, r.W().G()) ? ++p: p = B[2];
                break;
            case 1:
                c.beginPath(); ++p;
                break;
            case 2:
                r = B[1];
                t = n[r];
                B = n[r + 1];
                D = n[r + 2] - t;
                r = n[r + 3] - B;
                c.arc(t, B, Math.sqrt(D * D + r * r), 0, 2 * Math.PI, !0); ++p;
                break;
            case 3:
                c.closePath(); ++p;
                break;
            case 4:
                r = B[1];
                t = B[2];
                J = B[3];
                M = B[4] * d;
                var Ja = B[5] * d,
                I = B[6];
                K = B[7];
                var ba = B[8],
                oa = B[9];
                D = B[11];
                z = B[12];
                var Ta = B[13],
                Aa = B[14];
                for (B[10] && (D += f); r < t; r += 2) {
                    B = n[r] - M;
                    Y = n[r + 1] - Ja;
                    Ta && (B = Math.round(B), Y = Math.round(Y));
                    if (1 != z || 0 !== D) {
                        var Ka = B + M,
                        fc = Y + Ja;
                        ki(v, Ka, fc, z, z, D, -Ka, -fc);
                        c.transform(v[0], v[1], v[4], v[5], v[12], v[13])
                    }
                    Ka = c.globalAlpha;
                    1 != K && (c.globalAlpha = Ka * K);
                    var fc = Aa + ba > J.width ? J.width - ba: Aa,
                    uc = I + oa > J.height ? J.height - oa: I;
                    c.drawImage(J, ba, oa, fc, uc, B, Y, fc * d, uc * d);
                    1 != K && (c.globalAlpha = Ka);
                    if (1 != z || 0 !== D) jc(v, a),
                    c.transform(a[0], a[1], a[4], a[5], a[12], a[13])
                }++p;
                break;
            case 5:
                r = B[1];
                t = B[2];
                M = B[3];
                Ja = B[4] * d;
                I = B[5] * d;
                D = B[6];
                z = B[7] * d;
                J = B[8];
                for (K = B[9]; r < t; r += 2) {
                    B = n[r] + Ja;
                    Y = n[r + 1] + I;
                    if (1 != z || 0 !== D) ki(v, B, Y, z, z, D, -B, -Y),
                    c.transform(v[0], v[1], v[4], v[5], v[12], v[13]);
                    ba = M.split("\n");
                    oa = ba.length;
                    1 < oa ? (Ta = Math.round(1.5 * c.measureText("M").width), Y -= (oa - 1) / 2 * Ta) : Ta = 0;
                    for (Aa = 0; Aa < oa; Aa++) Ka = ba[Aa],
                    K && c.strokeText(Ka, B, Y),
                    J && c.fillText(Ka, B, Y),
                    Y += Ta;
                    if (1 != z || 0 !== D) jc(v, a),
                    c.transform(a[0], a[1], a[4], a[5], a[12], a[13])
                }++p;
                break;
            case 6:
                if (void 0 !== k && (r = B[1], r = k(r))) return r; ++p;
                break;
            case 7:
                c.fill(); ++p;
                break;
            case 8:
                r = B[1];
                t = B[2];
                B = n[r];
                Y = n[r + 1];
                D = B + .5 | 0;
                z = Y + .5 | 0;
                if (D !== w || z !== A) c.moveTo(B, Y),
                w = D,
                A = z;
                for (r += 2; r < t; r += 2) if (B = n[r], Y = n[r + 1], D = B + .5 | 0, z = Y + .5 | 0, D !== w || z !== A) c.lineTo(B, Y),
                w = D,
                A = z; ++p;
                break;
            case 9:
                c.fillStyle = B[1]; ++p;
                break;
            case 10:
                w = void 0 !== B[7] ? B[7] : !0;
                A = B[2];
                c.strokeStyle = B[1];
                c.lineWidth = w ? A * d: A;
                c.lineCap = B[3];
                c.lineJoin = B[4];
                c.miterLimit = B[5];
                bh && c.setLineDash(B[6]);
                A = w = NaN; ++p;
                break;
            case 11:
                c.font = B[1];
                c.textAlign = B[2];
                c.textBaseline = B[3]; ++p;
                break;
            case 12:
                c.stroke(); ++p;
                break;
            default:
                ++p
            }
        }
    }
    function Mk(a) {
        var c = a.b;
        c.reverse();
        var d, e = c.length,
        f, g, h = -1;
        for (d = 0; d < e; ++d) if (f = c[d], g = f[0], 6 == g) h = d;
        else if (0 == g) {
            f[2] = d;
            f = a.b;
            for (g = d; h < g;) {
                var k = f[h];
                f[h] = f[g];
                f[g] = k; ++h; --g
            }
            h = -1
        }
    }
    function Nk(a, c) {
        a.va[2] = a.a.length;
        a.va = null;
        a.S[2] = a.b.length;
        a.S = null;
        var d = [6, c];
        a.a.push(d);
        a.b.push(d)
    }
    Ik.prototype.ge = ta;
    Ik.prototype.Ye = function() {
        return this.T
    };
    function Ok(a, c, d) {
        Ik.call(this, a, c, d);
        this.o = this.Fa = null;
        this.D = this.H = this.N = this.B = this.U = this.A = this.s = this.l = this.j = this.i = this.g = void 0
    }
    y(Ok, Ik);
    Ok.prototype.rc = function(a, c) {
        if (this.o) {
            Kk(this, c);
            var d = a.ga(),
            e = this.coordinates.length,
            d = Jk(this, d, 0, d.length, a.ra(), !1);
            this.a.push([4, e, d, this.o, this.g, this.i, this.j, this.l, this.s, this.A, this.U, this.B, this.N, this.H, this.D]);
            this.b.push([4, e, d, this.Fa, this.g, this.i, this.j, this.l, this.s, this.A, this.U, this.B, this.N, this.H, this.D]);
            Nk(this, c)
        }
    };
    Ok.prototype.qc = function(a, c) {
        if (this.o) {
            Kk(this, c);
            var d = a.ga(),
            e = this.coordinates.length,
            d = Jk(this, d, 0, d.length, a.ra(), !1);
            this.a.push([4, e, d, this.o, this.g, this.i, this.j, this.l, this.s, this.A, this.U, this.B, this.N, this.H, this.D]);
            this.b.push([4, e, d, this.Fa, this.g, this.i, this.j, this.l, this.s, this.A, this.U, this.B, this.N, this.H, this.D]);
            Nk(this, c)
        }
    };
    Ok.prototype.ge = function() {
        Mk(this);
        this.i = this.g = void 0;
        this.o = this.Fa = null;
        this.D = this.H = this.B = this.U = this.A = this.s = this.l = this.N = this.j = void 0
    };
    Ok.prototype.Rb = function(a) {
        var c = a.Vb(),
        d = a.Db(),
        e = a.ke(1),
        f = a.ec(1),
        g = a.Ia();
        this.g = c[0];
        this.i = c[1];
        this.Fa = e;
        this.o = f;
        this.j = d[1];
        this.l = a.A;
        this.s = g[0];
        this.A = g[1];
        this.U = a.B;
        this.B = a.s;
        this.N = a.j;
        this.H = a.N;
        this.D = d[0]
    };
    function Pk(a, c, d) {
        Ik.call(this, a, c, d);
        this.g = {
            bd: void 0,
            Xc: void 0,
            Yc: null,
            Zc: void 0,
            $c: void 0,
            ad: void 0,
            gf: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    y(Pk, Ik);
    function Qk(a, c, d, e, f) {
        var g = a.coordinates.length;
        c = Jk(a, c, d, e, f, !1);
        g = [8, g, c];
        a.a.push(g);
        a.b.push(g);
        return e
    }
    l = Pk.prototype;
    l.Ye = function() {
        this.f || (this.f = rc(this.T), 0 < this.c && qc(this.f, this.resolution * (this.c + 1) / 2, this.f));
        return this.f
    };
    function Rk(a) {
        var c = a.g,
        d = c.strokeStyle,
        e = c.lineCap,
        f = c.lineDash,
        g = c.lineJoin,
        h = c.lineWidth,
        k = c.miterLimit;
        c.bd == d && c.Xc == e && bb(c.Yc, f) && c.Zc == g && c.$c == h && c.ad == k || (c.gf != a.coordinates.length && (a.a.push([12]), c.gf = a.coordinates.length), a.a.push([10, d, h, e, g, k, f], [1]), c.bd = d, c.Xc = e, c.Yc = f, c.Zc = g, c.$c = h, c.ad = k)
    }
    l.dd = function(a, c) {
        var d = this.g,
        e = d.lineWidth;
        void 0 !== d.strokeStyle && void 0 !== e && (Rk(this), Kk(this, c), this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = a.ga(), Qk(this, d, 0, d.length, a.ra()), this.b.push([12]), Nk(this, c))
    };
    l.Ue = function(a, c) {
        var d = this.g,
        e = d.lineWidth;
        if (void 0 !== d.strokeStyle && void 0 !== e) {
            Rk(this);
            Kk(this, c);
            this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
            var d = a.Bb(),
            e = a.ga(),
            f = a.ra(),
            g = 0,
            h,
            k;
            h = 0;
            for (k = d.length; h < k; ++h) g = Qk(this, e, g, d[h], f);
            this.b.push([12]);
            Nk(this, c)
        }
    };
    l.ge = function() {
        this.g.gf != this.coordinates.length && this.a.push([12]);
        Mk(this);
        this.g = null
    };
    l.Qb = function(a, c) {
        var d = c.b;
        this.g.strokeStyle = Oe(d ? d: ak);
        d = c.f;
        this.g.lineCap = void 0 !== d ? d: "round";
        d = c.g;
        this.g.lineDash = d ? d: Zj;
        d = c.c;
        this.g.lineJoin = void 0 !== d ? d: "round";
        d = c.a;
        this.g.lineWidth = void 0 !== d ? d: 1;
        d = c.i;
        this.g.miterLimit = void 0 !== d ? d: 10;
        this.g.lineWidth > this.c && (this.c = this.g.lineWidth, this.f = null)
    };
    function Sk(a, c, d) {
        Ik.call(this, a, c, d);
        this.g = {
            ng: void 0,
            bd: void 0,
            Xc: void 0,
            Yc: null,
            Zc: void 0,
            $c: void 0,
            ad: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    y(Sk, Ik);
    function Tk(a, c, d, e, f) {
        var g = a.g,
        h = [1];
        a.a.push(h);
        a.b.push(h);
        var k, h = 0;
        for (k = e.length; h < k; ++h) {
            var m = e[h],
            n = a.coordinates.length;
            d = Jk(a, c, d, m, f, !0);
            d = [8, n, d];
            n = [3];
            a.a.push(d, n);
            a.b.push(d, n);
            d = m
        }
        c = [7];
        a.b.push(c);
        void 0 !== g.fillStyle && a.a.push(c);
        void 0 !== g.strokeStyle && (g = [12], a.a.push(g), a.b.push(g));
        return d
    }
    l = Sk.prototype;
    l.Nd = function(a, c) {
        var d = this.g,
        e = d.strokeStyle;
        if (void 0 !== d.fillStyle || void 0 !== e) {
            Uk(this);
            Kk(this, c);
            this.b.push([9, Oe(Yj)]);
            void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var f = a.ga(),
            e = this.coordinates.length;
            Jk(this, f, 0, f.length, a.ra(), !1);
            f = [1];
            e = [2, e];
            this.a.push(f, e);
            this.b.push(f, e);
            e = [7];
            this.b.push(e);
            void 0 !== d.fillStyle && this.a.push(e);
            void 0 !== d.strokeStyle && (d = [12], this.a.push(d), this.b.push(d));
            Nk(this, c)
        }
    };
    l.We = function(a, c) {
        var d = this.g,
        e = d.strokeStyle;
        if (void 0 !== d.fillStyle || void 0 !== e) Uk(this),
        Kk(this, c),
        this.b.push([9, Oe(Yj)]),
        void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]),
        d = a.Bb(),
        e = a.Mb(),
        Tk(this, e, 0, d, a.ra()),
        Nk(this, c)
    };
    l.Ve = function(a, c) {
        var d = this.g,
        e = d.strokeStyle;
        if (void 0 !== d.fillStyle || void 0 !== e) {
            Uk(this);
            Kk(this, c);
            this.b.push([9, Oe(Yj)]);
            void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var d = a.i,
            e = Bk(a),
            f = a.ra(),
            g = 0,
            h,
            k;
            h = 0;
            for (k = d.length; h < k; ++h) g = Tk(this, e, g, d[h], f);
            Nk(this, c)
        }
    };
    l.ge = function() {
        Mk(this);
        this.g = null;
        var a = this.rb;
        if (0 !== a) {
            var c = this.coordinates,
            d, e;
            d = 0;
            for (e = c.length; d < e; ++d) c[d] = a * Math.round(c[d] / a)
        }
    };
    l.Ye = function() {
        this.f || (this.f = rc(this.T), 0 < this.c && qc(this.f, this.resolution * (this.c + 1) / 2, this.f));
        return this.f
    };
    l.Qb = function(a, c) {
        var d = this.g;
        if (a) {
            var e = a.b;
            d.fillStyle = Qe(e ? e: Yj)
        } else d.fillStyle = void 0;
        c ? (e = c.b, d.strokeStyle = Oe(e ? e: ak), e = c.f, d.lineCap = void 0 !== e ? e: "round", e = c.g, d.lineDash = e ? e.slice() : Zj, e = c.c, d.lineJoin = void 0 !== e ? e: "round", e = c.a, d.lineWidth = void 0 !== e ? e: 1, e = c.i, d.miterLimit = void 0 !== e ? e: 10, d.lineWidth > this.c && (this.c = d.lineWidth, this.f = null)) : (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0)
    };
    function Uk(a) {
        var c = a.g,
        d = c.fillStyle,
        e = c.strokeStyle,
        f = c.lineCap,
        g = c.lineDash,
        h = c.lineJoin,
        k = c.lineWidth,
        m = c.miterLimit;
        void 0 !== d && c.ng != d && (a.a.push([9, d]), c.ng = c.fillStyle);
        void 0 === e || c.bd == e && c.Xc == f && c.Yc == g && c.Zc == h && c.$c == k && c.ad == m || (a.a.push([10, e, k, f, h, m, g]), c.bd = e, c.Xc = f, c.Yc = g, c.Zc = h, c.$c = k, c.ad = m)
    }
    function Vk(a, c, d) {
        Ik.call(this, a, c, d);
        this.H = this.N = this.B = null;
        this.o = "";
        this.U = this.A = this.s = this.l = 0;
        this.j = this.i = this.g = null
    }
    y(Vk, Ik);
    function Wk(a, c, d, e, f) {
        if ("" !== a.o && a.j && (a.g || a.i)) {
            if (a.g) {
                var g = a.g,
                h = a.B;
                if (!h || h.fillStyle != g.fillStyle) {
                    var k = [9, g.fillStyle];
                    a.a.push(k);
                    a.b.push(k);
                    h ? h.fillStyle = g.fillStyle: a.B = {
                        fillStyle: g.fillStyle
                    }
                }
            }
            a.i && (g = a.i, h = a.N, h && h.lineCap == g.lineCap && h.lineDash == g.lineDash && h.lineJoin == g.lineJoin && h.lineWidth == g.lineWidth && h.miterLimit == g.miterLimit && h.strokeStyle == g.strokeStyle || (k = [10, g.strokeStyle, g.lineWidth, g.lineCap, g.lineJoin, g.miterLimit, g.lineDash, !1], a.a.push(k), a.b.push(k), h ? (h.lineCap = g.lineCap, h.lineDash = g.lineDash, h.lineJoin = g.lineJoin, h.lineWidth = g.lineWidth, h.miterLimit = g.miterLimit, h.strokeStyle = g.strokeStyle) : a.N = {
                lineCap: g.lineCap,
                lineDash: g.lineDash,
                lineJoin: g.lineJoin,
                lineWidth: g.lineWidth,
                miterLimit: g.miterLimit,
                strokeStyle: g.strokeStyle
            }));
            g = a.j;
            h = a.H;
            h && h.font == g.font && h.textAlign == g.textAlign && h.textBaseline == g.textBaseline || (k = [11, g.font, g.textAlign, g.textBaseline], a.a.push(k), a.b.push(k), h ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline) : a.H = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            });
            Kk(a, f);
            g = a.coordinates.length;
            c = Jk(a, c, 0, d, e, !1);
            c = [5, g, c, a.o, a.l, a.s, a.A, a.U, !!a.g, !!a.i];
            a.a.push(c);
            a.b.push(c);
            Nk(a, f)
        }
    }
    Vk.prototype.Tb = function(a) {
        if (a) {
            var c = a.b;
            c ? (c = c.b, c = Qe(c ? c: Yj), this.g ? this.g.fillStyle = c: this.g = {
                fillStyle: c
            }) : this.g = null;
            var d = a.j;
            if (d) {
                var c = d.b,
                e = d.f,
                f = d.g,
                g = d.c,
                h = d.a,
                d = d.i,
                e = void 0 !== e ? e: "round",
                f = f ? f.slice() : Zj,
                g = void 0 !== g ? g: "round",
                h = void 0 !== h ? h: 1,
                d = void 0 !== d ? d: 10,
                c = Oe(c ? c: ak);
                if (this.i) {
                    var k = this.i;
                    k.lineCap = e;
                    k.lineDash = f;
                    k.lineJoin = g;
                    k.lineWidth = h;
                    k.miterLimit = d;
                    k.strokeStyle = c
                } else this.i = {
                    lineCap: e,
                    lineDash: f,
                    lineJoin: g,
                    lineWidth: h,
                    miterLimit: d,
                    strokeStyle: c
                }
            } else this.i = null;
            var m = a.g,
            c = a.f,
            e = a.c,
            f = a.i,
            h = a.a,
            d = a.Ha(),
            g = a.o,
            k = a.l;
            a = void 0 !== m ? m: "10px sans-serif";
            g = void 0 !== g ? g: "center";
            k = void 0 !== k ? k: "middle";
            this.j ? (m = this.j, m.font = a, m.textAlign = g, m.textBaseline = k) : this.j = {
                font: a,
                textAlign: g,
                textBaseline: k
            };
            this.o = void 0 !== d ? d: "";
            this.l = void 0 !== c ? c: 0;
            this.s = void 0 !== e ? e: 0;
            this.A = void 0 !== f ? f: 0;
            this.U = void 0 !== h ? h: 1
        } else this.o = ""
    };
    function Xk(a, c, d, e) {
        this.s = a;
        this.c = c;
        this.l = d;
        this.i = e;
        this.g = {};
        this.j = Pg(1, 1);
        this.o = cc()
    }
    function Yk(a) {
        for (var c in a.g) {
            var d = a.g[c],
            e;
            for (e in d) d[e].ge()
        }
    }
    Xk.prototype.f = function(a, c, d, e, f) {
        var g = this.o;
        ki(g, .5, .5, 1 / c, -1 / c, -d, -a[0], -a[1]);
        var h = this.j;
        h.clearRect(0, 0, 1, 1);
        var k;
        void 0 !== this.i && (k = oc(), pc(k, a), qc(k, c * this.i, k));
        return Zk(this, h, g, d, e,
        function(a) {
            if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
                if (a = f(a)) return a;
                h.clearRect(0, 0, 1, 1)
            }
        },
        k)
    };
    Xk.prototype.b = function(a, c) {
        var d = void 0 !== a ? a.toString() : "0",
        e = this.g[d];
        void 0 === e && (e = {},
        this.g[d] = e);
        d = e[c];
        void 0 === d && (d = new $k[c](this.s, this.c, this.l), e[c] = d);
        return d
    };
    Xk.prototype.Qa = function() {
        return pb(this.g)
    };
    Xk.prototype.a = function(a, c, d, e, f, g) {
        var h = Object.keys(this.g).map(Number);
        h.sort(Va);
        if (!1 !== g) {
            var k = this.c;
            g = k[0];
            var m = k[1],
            n = k[2],
            k = k[3];
            g = [g, m, g, k, n, k, n, m];
            wd(g, 0, 8, 2, d, g);
            a.save();
            a.beginPath();
            a.moveTo(g[0], g[1]);
            a.lineTo(g[2], g[3]);
            a.lineTo(g[4], g[5]);
            a.lineTo(g[6], g[7]);
            a.closePath();
            a.clip()
        }
        var p, q;
        g = 0;
        for (m = h.length; g < m; ++g) for (p = this.g[h[g].toString()], n = 0, k = Hk.length; n < k; ++n) q = p[Hk[n]],
        void 0 !== q && Lk(q, a, c, d, e, f, q.a, void 0);
        a.restore()
    };
    function Zk(a, c, d, e, f, g, h) {
        var k = Object.keys(a.g).map(Number);
        k.sort(function(a, c) {
            return c - a
        });
        var m, n, p, q, r;
        m = 0;
        for (n = k.length; m < n; ++m) for (q = a.g[k[m].toString()], p = Hk.length - 1; 0 <= p; --p) if (r = q[Hk[p]], void 0 !== r && (r = Lk(r, c, 1, d, e, f, r.b, g, h))) return r
    }
    var $k = {
        Image: Ok,
        LineString: Pk,
        Polygon: Sk,
        Text: Vk
    };
    function al(a, c, d, e) {
        this.g = a;
        this.b = c;
        this.c = d;
        this.f = e
    }
    l = al.prototype;
    l.get = function(a) {
        return this.f[a]
    };
    l.Bb = function() {
        return this.c
    };
    l.G = function() {
        this.a || (this.a = "Point" === this.g ? zc(this.b) : Ac(this.b, 0, this.b.length, 2));
        return this.a
    };
    l.Mb = function() {
        return this.b
    };
    l.ga = al.prototype.Mb;
    l.W = function() {
        return this
    };
    l.zm = function() {
        return this.f
    };
    l.kd = al.prototype.W;
    l.ra = function() {
        return 2
    };
    l.$b = ta;
    l.X = function() {
        return this.g
    };
    function bl(a, c) {
        return x(a) - x(c)
    }
    function cl(a, c) {
        var d = .5 * a / c;
        return d * d
    }
    function dl(a, c, d, e, f, g) {
        var h = !1,
        k, m;
        if (k = d.a) m = k.qd(),
        2 == m || 3 == m ? k.Qf(f, g) : (0 == m && k.load(), k.hf(f, g), h = !0);
        if (f = (0, d.g)(c)) e = f.kd(e),
        (0, el[e.X()])(a, e, d, c);
        return h
    }
    var el = {
        Point: function(a, c, d, e) {
            var f = d.a;
            if (f) {
                if (2 != f.qd()) return;
                var g = a.b(d.b, "Image");
                g.Rb(f);
                g.rc(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            Wk(a, c.ga(), 2, 2, e)
        },
        LineString: function(a, c, d, e) {
            var f = d.f;
            if (f) {
                var g = a.b(d.b, "LineString");
                g.Qb(null, f);
                g.dd(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            Wk(a, zk(c), 2, 2, e)
        },
        Polygon: function(a, c, d, e) {
            var f = d.c,
            g = d.f;
            if (f || g) {
                var h = a.b(d.b, "Polygon");
                h.Qb(f, g);
                h.We(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            Wk(a, be(c), 2, 2, e)
        },
        MultiPoint: function(a, c, d, e) {
            var f = d.a;
            if (f) {
                if (2 != f.qd()) return;
                var g = a.b(d.b, "Image");
                g.Rb(f);
                g.qc(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            d = c.ga(),
            Wk(a, d, d.length, c.ra(), e)
        },
        MultiLineString: function(a, c, d, e) {
            var f = d.f;
            if (f) {
                var g = a.b(d.b, "LineString");
                g.Qb(null, f);
                g.Ue(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            c = Ak(c),
            Wk(a, c, c.length, 2, e)
        },
        MultiPolygon: function(a, c, d, e) {
            var f = d.c,
            g = d.f;
            if (g || f) {
                var h = a.b(d.b, "Polygon");
                h.Qb(f, g);
                h.Ve(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            c = Ck(c),
            Wk(a, c, c.length, 2, e)
        },
        GeometryCollection: function(a, c, d, e) {
            c = c.c;
            var f, g;
            f = 0;
            for (g = c.length; f < g; ++f)(0, el[c[f].X()])(a, c[f], d, e)
        },
        Circle: function(a, c, d, e) {
            var f = d.c,
            g = d.f;
            if (f || g) {
                var h = a.b(d.b, "Polygon");
                h.Qb(f, g);
                h.Nd(c, e)
            }
            if (f = d.Ha()) a = a.b(d.b, "Text"),
            a.Tb(f),
            Wk(a, c.od(), 2, 2, e)
        }
    };
    function fl(a, c, d, e, f, g) {
        this.c = void 0 !== g ? g: null;
        ii.call(this, a, c, d, void 0 !== g ? 0 : 2, e);
        this.g = f
    }
    y(fl, ii);
    fl.prototype.i = function(a) {
        this.state = a ? 3 : 2;
        ji(this)
    };
    fl.prototype.load = function() {
        0 == this.state && (this.state = 1, ji(this), this.c(this.i.bind(this)))
    };
    fl.prototype.a = function() {
        return this.g
    };
    var gl = !((Ue("Chrome") || Ue("CriOS")) && !Ue("Opera") && !Ue("OPR") && !Ue("Edge")) || Ue("iPhone") && !Ue("iPod") && !Ue("iPad") || Ue("iPad") || Ue("iPod");
    function hl(a, c, d, e) {
        var f = td(d, c, a);
        d = c.getPointResolution(e, d);
        c = c.Xb();
        void 0 !== c && (d *= c);
        c = a.Xb();
        void 0 !== c && (d /= c);
        a = a.getPointResolution(d, f) / d;
        isFinite(a) && 0 < a && (d /= a);
        return d
    }
    function il(a, c, d, e) {
        a = d - a;
        c = e - c;
        var f = Math.sqrt(a * a + c * c);
        return [Math.round(d + a / f), Math.round(e + c / f)]
    }
    function jl(a, c, d, e, f, g, h, k, m, n, p) {
        var q = Pg(Math.round(d * a), Math.round(d * c));
        if (0 === m.length) return q.canvas;
        q.scale(d, d);
        var r = oc();
        m.forEach(function(a) {
            Dc(r, a.extent)
        });
        var t = Pg(Math.round(d * Lc(r) / e), Math.round(d * Mc(r) / e)),
        v = d / e;
        m.forEach(function(a) {
            t.drawImage(a.image, n, n, a.image.width - 2 * n, a.image.height - 2 * n, (a.extent[0] - r[0]) * v, -(a.extent[3] - r[3]) * v, Lc(a.extent) * v, Mc(a.extent) * v)
        });
        var w = Ic(h);
        k.f.forEach(function(a) {
            var c = a.source,
            f = a.target,
            h = c[1][0],
            k = c[1][1],
            m = c[2][0],
            n = c[2][1];
            a = (f[0][0] - w[0]) / g;
            var p = -(f[0][1] - w[1]) / g,
            v = (f[1][0] - w[0]) / g,
            I = -(f[1][1] - w[1]) / g,
            ba = (f[2][0] - w[0]) / g,
            oa = -(f[2][1] - w[1]) / g,
            f = c[0][0],
            c = c[0][1],
            h = h - f,
            k = k - c,
            m = m - f,
            n = n - c;
            a: {
                h = [[h, k, 0, 0, v - a], [m, n, 0, 0, ba - a], [0, 0, h, k, I - p], [0, 0, m, n, oa - p]];
                k = h.length;
                for (m = 0; m < k; m++) {
                    for (var n = m,
                    Ta = Math.abs(h[m][m]), Aa = m + 1; Aa < k; Aa++) {
                        var Ka = Math.abs(h[Aa][m]);
                        Ka > Ta && (Ta = Ka, n = Aa)
                    }
                    if (0 === Ta) {
                        h = null;
                        break a
                    }
                    Ta = h[n];
                    h[n] = h[m];
                    h[m] = Ta;
                    for (n = m + 1; n < k; n++) for (Ta = -h[n][m] / h[m][m], Aa = m; Aa < k + 1; Aa++) h[n][Aa] = m == Aa ? 0 : h[n][Aa] + Ta * h[m][Aa]
                }
                m = Array(k);
                for (n = k - 1; 0 <= n; n--) for (m[n] = h[n][k] / h[n][n], Ta = n - 1; 0 <= Ta; Ta--) h[Ta][k] -= h[Ta][n] * m[n];
                h = m
            }
            h && (q.save(), q.beginPath(), gl ? (m = (a + v + ba) / 3, n = (p + I + oa) / 3, k = il(m, n, a, p), v = il(m, n, v, I), ba = il(m, n, ba, oa), q.moveTo(k[0], k[1]), q.lineTo(v[0], v[1]), q.lineTo(ba[0], ba[1])) : (q.moveTo(a, p), q.lineTo(v, I), q.lineTo(ba, oa)), q.closePath(), q.clip(), q.transform(h[0], h[2], h[1], h[3], a, p), q.translate(r[0] - f, r[3] - c), q.scale(e / d, -e / d), q.drawImage(t.canvas, 0, 0), q.restore())
        });
        p && (q.save(), q.strokeStyle = "black", q.lineWidth = 1, k.f.forEach(function(a) {
            var c = a.target;
            a = (c[0][0] - w[0]) / g;
            var d = -(c[0][1] - w[1]) / g,
            e = (c[1][0] - w[0]) / g,
            f = -(c[1][1] - w[1]) / g,
            h = (c[2][0] - w[0]) / g,
            c = -(c[2][1] - w[1]) / g;
            q.beginPath();
            q.moveTo(a, d);
            q.lineTo(e, f);
            q.lineTo(h, c);
            q.closePath();
            q.stroke()
        }), q.restore());
        return q.canvas
    };
    function kl(a, c, d, e, f) {
        this.g = a;
        this.c = c;
        var g = {},
        h = rd(this.c, this.g);
        this.a = function(a) {
            var c = a[0] + "/" + a[1];
            g[c] || (g[c] = h(a));
            return g[c]
        };
        this.i = e;
        this.s = f * f;
        this.f = [];
        this.o = !1;
        this.l = this.g.a && !!e && !!this.g.G() && Lc(e) == Lc(this.g.G());
        this.b = this.g.G() ? Lc(this.g.G()) : null;
        this.j = this.c.G() ? Lc(this.c.G()) : null;
        a = Ic(d);
        c = Hc(d);
        e = Gc(d);
        d = Fc(d);
        f = this.a(a);
        var k = this.a(c),
        m = this.a(e),
        n = this.a(d);
        ll(this, a, c, e, d, f, k, m, n, 10);
        if (this.o) {
            var p = Infinity;
            this.f.forEach(function(a) {
                p = Math.min(p, a.source[0][0], a.source[1][0], a.source[2][0])
            });
            this.f.forEach(function(a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - p > this.b / 2) {
                    var c = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    c[0][0] - p > this.b / 2 && (c[0][0] -= this.b);
                    c[1][0] - p > this.b / 2 && (c[1][0] -= this.b);
                    c[2][0] - p > this.b / 2 && (c[2][0] -= this.b);
                    Math.max(c[0][0], c[1][0], c[2][0]) - Math.min(c[0][0], c[1][0], c[2][0]) < this.b / 2 && (a.source = c)
                }
            },
            this)
        }
        g = {}
    }
    function ll(a, c, d, e, f, g, h, k, m, n) {
        var p = nc([g, h, k, m]),
        q = a.b ? Lc(p) / a.b: null,
        r = a.g.a && .5 < q && 1 > q,
        t = !1;
        if (0 < n) {
            if (a.c.f && a.j) var v = nc([c, d, e, f]),
            t = t | .25 < Lc(v) / a.j; ! r && a.g.f && q && (t |= .25 < q)
        }
        if (t || !a.i || Qc(p, a.i)) {
            if (! (t || isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(k[0]) && isFinite(k[1]) && isFinite(m[0]) && isFinite(m[1]))) if (0 < n) t = !0;
            else return;
            if (0 < n && (t || (q = a.a([(c[0] + e[0]) / 2, (c[1] + e[1]) / 2]), p = r ? (Qa(g[0], a.b) + Qa(k[0], a.b)) / 2 - Qa(q[0], a.b) : (g[0] + k[0]) / 2 - q[0], q = (g[1] + k[1]) / 2 - q[1], t = p * p + q * q > a.s), t)) {
                Math.abs(c[0] - e[0]) <= Math.abs(c[1] - e[1]) ? (r = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(r), q = [(f[0] + c[0]) / 2, (f[1] + c[1]) / 2], t = a.a(q), ll(a, c, d, r, q, g, h, p, t, n - 1), ll(a, q, r, e, f, t, p, k, m, n - 1)) : (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], p = a.a(r), q = [(e[0] + f[0]) / 2, (e[1] + f[1]) / 2], t = a.a(q), ll(a, c, r, q, f, g, p, t, m, n - 1), ll(a, r, d, e, q, p, h, k, t, n - 1));
                return
            }
            if (r) {
                if (!a.l) return;
                a.o = !0
            }
            a.f.push({
                source: [g, k, m],
                target: [c, e, f]
            });
            a.f.push({
                source: [g, h, k],
                target: [c, d, e]
            })
        }
    }
    function ml(a) {
        var c = oc();
        a.f.forEach(function(a) {
            a = a.source;
            pc(c, a[0]);
            pc(c, a[1]);
            pc(c, a[2])
        });
        return c
    };
    function nl(a, c, d, e, f, g) {
        this.A = c;
        this.s = a.G();
        var h = c.G(),
        k = h ? Pc(d, h) : d,
        h = hl(a, c, Nc(k), e);
        this.j = new kl(a, c, k, this.s, .5 * h);
        this.c = e;
        this.g = d;
        a = ml(this.j);
        this.o = (this.pb = g(a, h, f)) ? this.pb.f: 1;
        this.xd = this.i = null;
        f = 2;
        g = [];
        this.pb && (f = 0, g = this.pb.da());
        ii.call(this, d, e, this.o, f, g)
    }
    y(nl, ii);
    nl.prototype.fa = function() {
        1 == this.state && (sb(this.xd), this.xd = null);
        nl.ia.fa.call(this)
    };
    nl.prototype.a = function() {
        return this.i
    };
    nl.prototype.wd = function() {
        var a = this.pb.V();
        2 == a && (this.i = jl(Lc(this.g) / this.c, Mc(this.g) / this.c, this.o, this.pb.$(), 0, this.c, this.g, this.j, [{
            extent: this.pb.G(),
            image: this.pb.a()
        }], 0));
        this.state = a;
        ji(this)
    };
    nl.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            ji(this);
            var a = this.pb.V();
            2 == a || 3 == a ? this.wd() : (this.xd = C(this.pb, "change",
            function() {
                var a = this.pb.V();
                if (2 == a || 3 == a) sb(this.xd),
                this.xd = null,
                this.wd()
            },
            this), this.pb.load())
        }
    };
    function pl(a) {
        Xf.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.A = void 0 !== a.resolutions ? a.resolutions: null;
        this.a = null;
        this.na = 0
    }
    y(pl, Xf);
    pl.prototype.Kb = function() {
        return this.A
    };
    function ql(a, c) {
        if (a.A) {
            var d = Xa(a.A, c, 0);
            c = a.A[d]
        }
        return c
    }
    pl.prototype.B = function(a, c, d, e) {
        var f = this.f;
        if (f && e && !qd(f, e)) {
            if (this.a) {
                if (this.na == this.g && qd(this.a.A, e) && this.a.$() == c && this.a.f == d && Cc(this.a.G(), a)) return this.a;
                Bb(this.a);
                this.a = null
            }
            this.a = new nl(f, e, a, c, d,
            function(a, c, d) {
                return this.gd(a, c, d, f)
            }.bind(this));
            this.na = this.g;
            return this.a
        }
        f && (e = f);
        return this.gd(a, c, d, e)
    };
    pl.prototype.o = function(a) {
        a = a.target;
        switch (a.V()) {
        case 1:
            this.b(new rl(sl, a));
            break;
        case 2:
            this.b(new rl(tl, a));
            break;
        case 3:
            this.b(new rl(ul, a))
        }
    };
    function vl(a, c) {
        a.a().src = c
    }
    function rl(a, c) {
        Cb.call(this, a);
        this.image = c
    }
    y(rl, Cb);
    var sl = "imageloadstart",
    tl = "imageloadend",
    ul = "imageloaderror";
    function wl(a) {
        pl.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.Y = a.canvasFunction;
        this.S = null;
        this.T = 0;
        this.oa = void 0 !== a.ratio ? a.ratio: 1.5
    }
    y(wl, pl);
    wl.prototype.gd = function(a, c, d, e) {
        c = ql(this, c);
        var f = this.S;
        if (f && this.T == this.g && f.$() == c && f.f == d && wc(f.G(), a)) return f;
        a = a.slice();
        Rc(a, this.oa); (e = this.Y(a, c, d, [Lc(a) / c * d, Mc(a) / c * d], e)) && (f = new fl(a, c, d, this.da(), e));
        this.S = f;
        this.T = this.g;
        return f
    };
    function xl(a) {
        Kb.call(this);
        this.i = void 0;
        this.a = "geometry";
        this.c = null;
        this.j = void 0;
        this.f = null;
        C(this, Mb(this.a), this.Vd, this);
        void 0 !== a && (a instanceof vd || !a ? this.Ra(a) : this.C(a))
    }
    y(xl, Kb);
    l = xl.prototype;
    l.clone = function() {
        var a = new xl(this.P());
        a.Bc(this.a);
        var c = this.W();
        c && a.Ra(c.clone()); (c = this.c) && a.lf(c);
        return a
    };
    l.W = function() {
        return this.get(this.a)
    };
    l.Wa = function() {
        return this.i
    };
    l.Pj = function() {
        return this.a
    };
    l.xl = function() {
        return this.c
    };
    l.$b = function() {
        return this.j
    };
    l.yl = function() {
        this.u()
    };
    l.Vd = function() {
        this.f && (sb(this.f), this.f = null);
        var a = this.W();
        a && (this.f = C(a, "change", this.yl, this));
        this.u()
    };
    l.Ra = function(a) {
        this.set(this.a, a)
    };
    l.lf = function(a) {
        this.j = (this.c = a) ? yl(a) : void 0;
        this.u()
    };
    l.hc = function(a) {
        this.i = a;
        this.u()
    };
    l.Bc = function(a) {
        yb(this, Mb(this.a), this.Vd, this);
        this.a = a;
        C(this, Mb(this.a), this.Vd, this);
        this.Vd()
    };
    function yl(a) {
        if (!ia(a)) {
            var c;
            c = Array.isArray(a) ? a: [a];
            a = function() {
                return c
            }
        }
        return a
    };
    function zl(a, c, d, e, f) {
        Vf.call(this, a, c);
        this.l = Pg();
        this.j = e;
        this.i = null;
        this.c = {
            cd: !1,
            Nf: null,
            Uh: -1,
            vd: null
        };
        this.A = f;
        this.o = d
    }
    y(zl, Vf);
    l = zl.prototype;
    l.fa = function() {
        zl.ia.fa.call(this)
    };
    l.Il = function() {
        return this.j
    };
    l.gb = function() {
        return this.o
    };
    l.load = function() {
        0 == this.state && (this.state = 1, Wf(this), this.A(this, this.o), this.s(null, NaN, null))
    };
    l.Zh = function(a) {
        this.i = a;
        this.state = 2;
        Wf(this)
    };
    l.pf = function(a) {
        this.g = a
    };
    l.ci = function(a) {
        this.s = a
    };
    var Al = document.implementation.createDocument("", "", null);
    function Bl(a, c) {
        return Al.createElementNS(a, c)
    }
    function Cl(a, c) {
        return Dl(a, c, []).join("")
    }
    function Dl(a, c, d) {
        if (4 == a.nodeType || 3 == a.nodeType) c ? d.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(a.nodeValue);
        else for (a = a.firstChild; a; a = a.nextSibling) Dl(a, c, d);
        return d
    }
    function El(a) {
        return a instanceof Document
    }
    function Fl(a) {
        return a instanceof Node
    }
    function Gl(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }
    function Hl(a, c) {
        return function(d, e) {
            var f = a.call(c, d, e);
            void 0 !== f && Za(e[e.length - 1], f)
        }
    }
    function Il(a, c) {
        return function(d, e) {
            var f = a.call(void 0 !== c ? c: this, d, e);
            void 0 !== f && e[e.length - 1].push(f)
        }
    }
    function Jl(a, c) {
        return function(d, e) {
            var f = a.call(void 0 !== c ? c: this, d, e);
            void 0 !== f && (e[e.length - 1] = f)
        }
    }
    function Kl(a) {
        return function(c, d) {
            var e = a.call(this, c, d);
            if (void 0 !== e) {
                var f = d[d.length - 1],
                g = c.localName,
                h;
                g in f ? h = f[g] : h = f[g] = [];
                h.push(e)
            }
        }
    }
    function L(a, c) {
        return function(d, e) {
            var f = a.call(this, d, e);
            void 0 !== f && (e[e.length - 1][void 0 !== c ? c: d.localName] = f)
        }
    }
    function N(a, c) {
        return function(d, e, f) {
            a.call(void 0 !== c ? c: this, d, e, f);
            f[f.length - 1].node.appendChild(d)
        }
    }
    function Ll(a) {
        var c, d;
        return function(e, f, g) {
            if (void 0 === c) {
                c = {};
                var h = {};
                h[e.localName] = a;
                c[e.namespaceURI] = h;
                d = Ml(e.localName)
            }
            Nl(c, d, f, g)
        }
    }
    function Ml(a, c) {
        return function(d, e, f) {
            d = e[e.length - 1].node;
            e = a;
            void 0 === e && (e = f);
            f = c;
            void 0 === c && (f = d.namespaceURI);
            return Bl(f, e)
        }
    }
    var Ol = Ml();
    function Pl(a, c) {
        for (var d = c.length,
        e = Array(d), f = 0; f < d; ++f) e[f] = a[c[f]];
        return e
    }
    function O(a, c, d) {
        d = void 0 !== d ? d: {};
        var e, f;
        e = 0;
        for (f = a.length; e < f; ++e) d[a[e]] = c;
        return d
    }
    function Ql(a, c, d, e) {
        for (c = c.firstElementChild; c; c = c.nextElementSibling) {
            var f = a[c.namespaceURI];
            void 0 !== f && (f = f[c.localName], void 0 !== f && f.call(e, c, d))
        }
    }
    function P(a, c, d, e, f) {
        e.push(a);
        Ql(c, d, e, f);
        return e.pop()
    }
    function Nl(a, c, d, e, f, g) {
        for (var h = (void 0 !== f ? f: d).length, k, m, n = 0; n < h; ++n) k = d[n],
        void 0 !== k && (m = c.call(g, k, e, void 0 !== f ? f[n] : void 0), void 0 !== m && a[m.namespaceURI][m.localName].call(g, m, k, e))
    }
    function Rl(a, c, d, e, f, g, h) {
        f.push(a);
        Nl(c, d, e, f, g, h);
        f.pop()
    };
    function Sl(a, c, d, e) {
        return function(f, g, h) {
            var k = new XMLHttpRequest;
            k.open("GET", ia(a) ? a(f, g, h) : a, !0);
            "arraybuffer" == c.X() && (k.responseType = "arraybuffer");
            k.onload = function() {
                if (200 <= k.status && 300 > k.status) {
                    var a = c.X(),
                    f;
                    "json" == a || "text" == a ? f = k.responseText: "xml" == a ? (f = k.responseXML) || (f = Gl(k.responseText)) : "arraybuffer" == a && (f = k.response);
                    f && d.call(this, c.Ea(f, {
                        featureProjection: h
                    }), c.Sa(f))
                } else e.call(this)
            }.bind(this);
            k.send()
        }
    }
    function Tl(a, c) {
        return Sl(a, c,
        function(a, c) {
            this.pf(c);
            this.Zh(a)
        },
        function() {
            this.state = 3;
            Wf(this)
        })
    }
    function Ul(a, c) {
        return Sl(a, c,
        function(a) {
            this.Fc(a)
        },
        ta)
    };
    function Vl() {
        return [[ - Infinity, -Infinity, Infinity, Infinity]]
    };
    var Wl, Xl, Yl, Zl; (function() {
        var a = {
            ha: {}
        }; (function() {
            function c(a, d) {
                if (! (this instanceof c)) return new c(a, d);
                this.Ne = Math.max(4, a || 9);
                this.ag = Math.max(2, Math.ceil(.4 * this.Ne));
                d && this.dj(d);
                this.clear()
            }
            function d(a, c) {
                a.bbox = e(a, 0, a.children.length, c)
            }
            function e(a, c, d, e) {
                for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++) h = a.children[c],
                f(g, a.La ? e(h) : h.bbox);
                return g
            }
            function f(a, c) {
                a[0] = Math.min(a[0], c[0]);
                a[1] = Math.min(a[1], c[1]);
                a[2] = Math.max(a[2], c[2]);
                a[3] = Math.max(a[3], c[3])
            }
            function g(a, c) {
                return a.bbox[0] - c.bbox[0]
            }
            function h(a, c) {
                return a.bbox[1] - c.bbox[1]
            }
            function k(a) {
                return (a[2] - a[0]) * (a[3] - a[1])
            }
            function m(a) {
                return a[2] - a[0] + (a[3] - a[1])
            }
            function n(a, c) {
                return a[0] <= c[0] && a[1] <= c[1] && c[2] <= a[2] && c[3] <= a[3]
            }
            function p(a, c) {
                return c[0] <= a[2] && c[1] <= a[3] && c[2] >= a[0] && c[3] >= a[1]
            }
            function q(a, c, d, e, f) {
                for (var g = [c, d], h; g.length;) d = g.pop(),
                c = g.pop(),
                d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, r(a, c, d, h, f), g.push(c, h, h, d))
            }
            function r(a, c, d, e, f) {
                for (var g, h, k, m, n; d > c;) {
                    600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g), m = .5 * Math.exp(2 * k / 3), n = .5 * Math.sqrt(k * m * (g - m) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * m / g + n)), h = Math.min(d, Math.floor(e + (g - h) * m / g + n)), r(a, k, h, e, f));
                    g = a[e];
                    h = c;
                    m = d;
                    t(a, c, e);
                    for (0 < f(a[d], g) && t(a, c, d); h < m;) {
                        t(a, h, m);
                        h++;
                        for (m--; 0 > f(a[h], g);) h++;
                        for (; 0 < f(a[m], g);) m--
                    }
                    0 === f(a[c], g) ? t(a, c, m) : (m++, t(a, m, d));
                    m <= e && (c = m + 1);
                    e <= m && (d = m - 1)
                }
            }
            function t(a, c, d) {
                var e = a[c];
                a[c] = a[d];
                a[d] = e
            }
            c.prototype = {
                all: function() {
                    return this.Wf(this.data, [])
                },
                search: function(a) {
                    var c = this.data,
                    d = [],
                    e = this.jb;
                    if (!p(a, c.bbox)) return d;
                    for (var f = [], g, h, k, m; c;) {
                        g = 0;
                        for (h = c.children.length; g < h; g++) k = c.children[g],
                        m = c.La ? e(k) : k.bbox,
                        p(a, m) && (c.La ? d.push(k) : n(a, m) ? this.Wf(k, d) : f.push(k));
                        c = f.pop()
                    }
                    return d
                },
                load: function(a) {
                    if (!a || !a.length) return this;
                    if (a.length < this.ag) {
                        for (var c = 0,
                        d = a.length; c < d; c++) this.Aa(a[c]);
                        return this
                    }
                    a = this.Yf(a.slice(), 0, a.length - 1, 0);
                    this.data.children.length ? this.data.height === a.height ? this.cg(this.data, a) : (this.data.height < a.height && (c = this.data, this.data = a, a = c), this.$f(a, this.data.height - a.height - 1, !0)) : this.data = a;
                    return this
                },
                Aa: function(a) {
                    a && this.$f(a, this.data.height - 1);
                    return this
                },
                clear: function() {
                    this.data = {
                        children: [],
                        height: 1,
                        bbox: [Infinity, Infinity, -Infinity, -Infinity],
                        La: !0
                    };
                    return this
                },
                remove: function(a) {
                    if (!a) return this;
                    for (var c = this.data,
                    d = this.jb(a), e = [], f = [], g, h, k, m; c || e.length;) {
                        c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0);
                        if (c.La && (k = c.children.indexOf(a), -1 !== k)) {
                            c.children.splice(k, 1);
                            e.push(c);
                            this.bj(e);
                            break
                        }
                        m || c.La || !n(c.bbox, d) ? h ? (g++, c = h.children[g], m = !1) : c = null: (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                    }
                    return this
                },
                jb: function(a) {
                    return a
                },
                Pe: function(a, c) {
                    return a[0] - c[0]
                },
                Qe: function(a, c) {
                    return a[1] - c[1]
                },
                toJSON: function() {
                    return this.data
                },
                Wf: function(a, c) {
                    for (var d = []; a;) a.La ? c.push.apply(c, a.children) : d.push.apply(d, a.children),
                    a = d.pop();
                    return c
                },
                Yf: function(a, c, e, f) {
                    var g = e - c + 1,
                    h = this.Ne,
                    k;
                    if (g <= h) return k = {
                        children: a.slice(c, e + 1),
                        height: 1,
                        bbox: null,
                        La: !0
                    },
                    d(k, this.jb),
                    k;
                    f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
                    k = {
                        children: [],
                        height: f,
                        bbox: null,
                        La: !1
                    };
                    var g = Math.ceil(g / h),
                    h = g * Math.ceil(Math.sqrt(h)),
                    m,
                    n,
                    p;
                    for (q(a, c, e, h, this.Pe); c <= e; c += h) for (n = Math.min(c + h - 1, e), q(a, c, n, g, this.Qe), m = c; m <= n; m += g) p = Math.min(m + g - 1, n),
                    k.children.push(this.Yf(a, m, p, f - 1));
                    d(k, this.jb);
                    return k
                },
                aj: function(a, c, d, e) {
                    for (var f, g, h, m, n, p, q, r;;) {
                        e.push(c);
                        if (c.La || e.length - 1 === d) break;
                        q = r = Infinity;
                        f = 0;
                        for (g = c.children.length; f < g; f++) h = c.children[f],
                        n = k(h.bbox),
                        p = h.bbox,
                        p = (Math.max(p[2], a[2]) - Math.min(p[0], a[0])) * (Math.max(p[3], a[3]) - Math.min(p[1], a[1])) - n,
                        p < r ? (r = p, q = n < q ? n: q, m = h) : p === r && n < q && (q = n, m = h);
                        c = m
                    }
                    return c
                },
                $f: function(a, c, d) {
                    var e = this.jb;
                    d = d ? a.bbox: e(a);
                    var e = [],
                    g = this.aj(d, this.data, c, e);
                    g.children.push(a);
                    for (f(g.bbox, d); 0 <= c;) if (e[c].children.length > this.Ne) this.jj(e, c),
                    c--;
                    else break;
                    this.Yi(d, e, c)
                },
                jj: function(a, c) {
                    var e = a[c],
                    f = e.children.length,
                    g = this.ag;
                    this.Zi(e, g, f);
                    f = this.$i(e, g, f);
                    f = {
                        children: e.children.splice(f, e.children.length - f),
                        height: e.height,
                        bbox: null,
                        La: !1
                    };
                    e.La && (f.La = !0);
                    d(e, this.jb);
                    d(f, this.jb);
                    c ? a[c - 1].children.push(f) : this.cg(e, f)
                },
                cg: function(a, c) {
                    this.data = {
                        children: [a, c],
                        height: a.height + 1,
                        bbox: null,
                        La: !1
                    };
                    d(this.data, this.jb)
                },
                $i: function(a, c, d) {
                    var f, g, h, m, n, p, q;
                    n = p = Infinity;
                    for (f = c; f <= d - c; f++) g = e(a, 0, f, this.jb),
                    h = e(a, f, d, this.jb),
                    m = Math.max(0, Math.min(g[2], h[2]) - Math.max(g[0], h[0])) * Math.max(0, Math.min(g[3], h[3]) - Math.max(g[1], h[1])),
                    g = k(g) + k(h),
                    m < n ? (n = m, q = f, p = g < p ? g: p) : m === n && g < p && (p = g, q = f);
                    return q
                },
                Zi: function(a, c, d) {
                    var e = a.La ? this.Pe: g,
                    f = a.La ? this.Qe: h,
                    k = this.Xf(a, c, d, e);
                    c = this.Xf(a, c, d, f);
                    k < c && a.children.sort(e)
                },
                Xf: function(a, c, d, g) {
                    a.children.sort(g);
                    g = this.jb;
                    var h = e(a, 0, c, g),
                    k = e(a, d - c, d, g),
                    n = m(h) + m(k),
                    p,
                    q;
                    for (p = c; p < d - c; p++) q = a.children[p],
                    f(h, a.La ? g(q) : q.bbox),
                    n += m(h);
                    for (p = d - c - 1; p >= c; p--) q = a.children[p],
                    f(k, a.La ? g(q) : q.bbox),
                    n += m(k);
                    return n
                },
                Yi: function(a, c, d) {
                    for (; 0 <= d; d--) f(c[d].bbox, a)
                },
                bj: function(a) {
                    for (var c = a.length - 1,
                    e; 0 <= c; c--) 0 === a[c].children.length ? 0 < c ? (e = a[c - 1].children, e.splice(e.indexOf(a[c]), 1)) : this.clear() : d(a[c], this.jb)
                },
                dj: function(a) {
                    var c = ["return a", " - b", ";"];
                    this.Pe = new Function("a", "b", c.join(a[0]));
                    this.Qe = new Function("a", "b", c.join(a[1]));
                    this.jb = new Function("a", "return [a" + a.join(", a") + "];")
                }
            };
            "undefined" !== typeof a ? a.ha = c: "undefined" !== typeof self ? self.b = c: window.b = c
        })();
        Wl = a.ha
    })();
    function $l(a) {
        this.a = Wl(a);
        this.b = {}
    }
    l = $l.prototype;
    l.Aa = function(a, c) {
        var d = [a[0], a[1], a[2], a[3], c];
        this.a.Aa(d);
        this.b[x(c)] = d
    };
    l.load = function(a, c) {
        for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
            var g = a[e],
            h = c[e],
            g = [g[0], g[1], g[2], g[3], h];
            d[e] = g;
            this.b[x(h)] = g
        }
        this.a.load(d)
    };
    l.remove = function(a) {
        a = x(a);
        var c = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(c)
    };
    function am(a, c, d) {
        var e = x(d);
        Cc(a.b[e].slice(0, 4), c) || (a.remove(d), a.Aa(c, d))
    }
    function bm(a) {
        return a.a.all().map(function(a) {
            return a[4]
        })
    }
    function cm(a, c) {
        return a.a.search(c).map(function(a) {
            return a[4]
        })
    }
    l.forEach = function(a, c) {
        return dm(bm(this), a, c)
    };
    function em(a, c, d, e) {
        return dm(cm(a, c), d, e)
    }
    function dm(a, c, d) {
        for (var e, f = 0,
        g = a.length; f < g && !(e = c.call(d, a[f])); f++);
        return e
    }
    l.Qa = function() {
        return pb(this.b)
    };
    l.clear = function() {
        this.a.clear();
        this.b = {}
    };
    l.G = function() {
        return this.a.data.bbox
    };
    function Q(a) {
        a = a || {};
        Xf.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        });
        this.D = ta;
        this.na = a.format;
        this.S = a.url;
        void 0 !== a.loader ? this.D = a.loader: void 0 !== this.S && (this.D = Ul(this.S, this.na));
        this.sb = void 0 !== a.strategy ? a.strategy: Vl;
        var c = void 0 !== a.useSpatialIndex ? a.useSpatialIndex: !0;
        this.a = c ? new $l: null;
        this.T = new $l;
        this.i = {};
        this.j = {};
        this.o = {};
        this.l = {};
        this.c = null;
        var d, e;
        a.features instanceof De ? (d = a.features, e = d.a) : Array.isArray(a.features) && (e = a.features);
        c || void 0 !== d || (d = new De(e));
        void 0 !== e && fm(this, e);
        void 0 !== d && gm(this, d)
    }
    y(Q, Xf);
    l = Q.prototype;
    l.tb = function(a) {
        var c = x(a).toString();
        if (hm(this, c, a)) {
            im(this, c, a);
            var d = a.W();
            d ? (c = d.G(), this.a && this.a.Aa(c, a)) : this.i[c] = a;
            this.b(new jm("addfeature", a))
        }
        this.u()
    };
    function im(a, c, d) {
        a.l[c] = [C(d, "change", a.yh, a), C(d, "propertychange", a.yh, a)]
    }
    function hm(a, c, d) {
        var e = !0,
        f = d.Wa();
        void 0 !== f ? f.toString() in a.j ? e = !1 : a.j[f.toString()] = d: a.o[c] = d;
        return e
    }
    l.Fc = function(a) {
        fm(this, a);
        this.u()
    };
    function fm(a, c) {
        var d, e, f, g, h = [],
        k = [],
        m = [];
        e = 0;
        for (f = c.length; e < f; e++) g = c[e],
        d = x(g).toString(),
        hm(a, d, g) && k.push(g);
        e = 0;
        for (f = k.length; e < f; e++) {
            g = k[e];
            d = x(g).toString();
            im(a, d, g);
            var n = g.W();
            n ? (d = n.G(), h.push(d), m.push(g)) : a.i[d] = g
        }
        a.a && a.a.load(h, m);
        e = 0;
        for (f = k.length; e < f; e++) a.b(new jm("addfeature", k[e]))
    }
    function gm(a, c) {
        var d = !1;
        C(a, "addfeature",
        function(a) {
            d || (d = !0, c.push(a.feature), d = !1)
        });
        C(a, "removefeature",
        function(a) {
            d || (d = !0, c.remove(a.feature), d = !1)
        });
        C(c, "add",
        function(a) {
            d || (a = a.element, d = !0, this.tb(a), d = !1)
        },
        a);
        C(c, "remove",
        function(a) {
            d || (a = a.element, d = !0, this.mb(a), d = !1)
        },
        a);
        a.c = c
    }
    l.clear = function(a) {
        if (a) {
            for (var c in this.l) this.l[c].forEach(sb);
            this.c || (this.l = {},
            this.j = {},
            this.o = {})
        } else if (this.a) {
            this.a.forEach(this.Mf, this);
            for (var d in this.i) this.Mf(this.i[d])
        }
        this.c && this.c.clear();
        this.a && this.a.clear();
        this.T.clear();
        this.i = {};
        this.b(new jm("clear"));
        this.u()
    };
    l.pg = function(a, c) {
        if (this.a) return this.a.forEach(a, c);
        if (this.c) return this.c.forEach(a, c)
    };
    function km(a, c, d) {
        a.wb([c[0], c[1], c[0], c[1]],
        function(a) {
            if (a.W().lg(c)) return d.call(void 0, a)
        })
    }
    l.wb = function(a, c, d) {
        if (this.a) return em(this.a, a, c, d);
        if (this.c) return this.c.forEach(c, d)
    };
    l.qg = function(a, c, d) {
        return this.wb(a,
        function(e) {
            if (e.W().Ka(a) && (e = c.call(d, e))) return e
        })
    };
    l.xg = function() {
        return this.c
    };
    l.je = function() {
        var a;
        this.c ? a = this.c.a: this.a && (a = bm(this.a), pb(this.i) || Za(a, ob(this.i)));
        return a
    };
    l.wg = function(a) {
        var c = [];
        km(this, a,
        function(a) {
            c.push(a)
        });
        return c
    };
    l.Ze = function(a) {
        return cm(this.a, a)
    };
    l.sg = function(a) {
        var c = a[0],
        d = a[1],
        e = null,
        f = [NaN, NaN],
        g = Infinity,
        h = [ - Infinity, -Infinity, Infinity, Infinity];
        em(this.a, h,
        function(a) {
            var m = a.W(),
            n = g;
            g = m.ub(c, d, f, g);
            g < n && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a)
        });
        return e
    };
    l.G = function() {
        return this.a.G()
    };
    l.vg = function(a) {
        a = this.j[a.toString()];
        return void 0 !== a ? a: null
    };
    l.wh = function() {
        return this.na
    };
    l.xh = function() {
        return this.S
    };
    l.yh = function(a) {
        a = a.target;
        var c = x(a).toString(),
        d = a.W();
        d ? (d = d.G(), c in this.i ? (delete this.i[c], this.a && this.a.Aa(d, a)) : this.a && am(this.a, d, a)) : c in this.i || (this.a && this.a.remove(a), this.i[c] = a);
        d = a.Wa();
        void 0 !== d ? (d = d.toString(), c in this.o ? (delete this.o[c], this.j[d] = a) : this.j[d] !== a && (lm(this, a), this.j[d] = a)) : c in this.o || (lm(this, a), this.o[c] = a);
        this.u();
        this.b(new jm("changefeature", a))
    };
    l.Qa = function() {
        return this.a.Qa() && pb(this.i)
    };
    l.Jc = function(a, c, d) {
        var e = this.T;
        a = this.sb(a, c);
        var f, g;
        f = 0;
        for (g = a.length; f < g; ++f) {
            var h = a[f];
            em(e, h,
            function(a) {
                return wc(a.extent, h)
            }) || (this.D.call(this, h, c, d), e.Aa(h, {
                extent: h.slice()
            }))
        }
    };
    l.mb = function(a) {
        var c = x(a).toString();
        c in this.i ? delete this.i[c] : this.a && this.a.remove(a);
        this.Mf(a);
        this.u()
    };
    l.Mf = function(a) {
        var c = x(a).toString();
        this.l[c].forEach(sb);
        delete this.l[c];
        var d = a.Wa();
        void 0 !== d ? delete this.j[d.toString()] : delete this.o[c];
        this.b(new jm("removefeature", a))
    };
    function lm(a, c) {
        for (var d in a.j) if (a.j[d] === c) {
            delete a.j[d];
            break
        }
    }
    function jm(a, c) {
        Cb.call(this, a);
        this.feature = c
    }
    y(jm, Cb);
    function mm(a) {
        this.c = a.source;
        this.ta = cc();
        this.i = Pg();
        this.j = [0, 0];
        this.s = null;
        wl.call(this, {
            attributions: a.attributions,
            canvasFunction: this.uj.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.c.V()
        });
        this.D = null;
        this.l = void 0;
        this.qh(a.style);
        C(this.c, "change", this.Lm, this)
    }
    y(mm, wl);
    l = mm.prototype;
    l.uj = function(a, c, d, e, f) {
        var g = new Xk(.5 * c / d, a, c);
        this.c.Jc(a, c, f);
        var h = !1;
        this.c.wb(a,
        function(a) {
            var e;
            if (! (e = h)) {
                var f; (e = a.$b()) ? f = e.call(a, c) : this.l && (f = this.l(a, c));
                if (f) {
                    var p, q = !1;
                    Array.isArray(f) || (f = [f]);
                    e = 0;
                    for (p = f.length; e < p; ++e) q = dl(g, a, f[e], cl(c, d), this.Km, this) || q;
                    e = q
                } else e = !1
            }
            h = e
        },
        this);
        Yk(g);
        if (h) return null;
        this.j[0] != e[0] || this.j[1] != e[1] ? (this.i.canvas.width = e[0], this.i.canvas.height = e[1], this.j[0] = e[0], this.j[1] = e[1]) : this.i.clearRect(0, 0, e[0], e[1]);
        a = nm(this, Nc(a), c, d, e);
        g.a(this.i, d, a, 0, {});
        this.s = g;
        return this.i.canvas
    };
    l.ie = function(a, c, d, e, f) {
        if (this.s) {
            var g = {};
            return this.s.f(a, c, 0, e,
            function(a) {
                var c = x(a).toString();
                if (! (c in g)) return g[c] = !0,
                f(a)
            })
        }
    };
    l.Hm = function() {
        return this.c
    };
    l.Im = function() {
        return this.D
    };
    l.Jm = function() {
        return this.l
    };
    function nm(a, c, d, e, f) {
        return ki(a.ta, f[0] / 2, f[1] / 2, e / d, -e / d, 0, -c[0], -c[1])
    }
    l.Km = function() {
        this.u()
    };
    l.Lm = function() {
        Zf(this, this.c.V())
    };
    l.qh = function(a) {
        this.D = void 0 !== a ? a: pk;
        this.l = a ? nk(this.D) : void 0;
        this.u()
    };
    function om(a) {
        Dk.call(this, a);
        this.f = null;
        this.l = cc();
        this.j = this.i = null
    }
    y(om, Dk);
    om.prototype.ib = function(a, c, d, e) {
        var f = this.a;
        return f.ea().ie(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids,
        function(a) {
            return d.call(e, a, f)
        })
    };
    om.prototype.zc = function(a, c, d, e) {
        if (this.f && this.f.a()) if (this.a.ea() instanceof mm) {
            if (a = a.slice(), mi(c.pixelToCoordinateMatrix, a, a), this.ib(a, c, Tc, this)) return d.call(e, this.a)
        } else if (this.i || (this.i = cc(), jc(this.l, this.i)), c = [0, 0], mi(this.i, a, c), this.j || (this.j = Pg(1, 1)), this.j.clearRect(0, 0, 1, 1), this.j.drawImage(this.f ? this.f.a() : null, c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.j.getImageData(0, 0, 1, 1).data[3]) return d.call(e, this.a)
    };
    om.prototype.o = function(a, c) {
        var d = a.pixelRatio,
        e = a.viewState,
        f = e.center,
        g = e.resolution,
        h = this.a.ea(),
        k = a.viewHints,
        m = a.extent;
        void 0 !== c.extent && (m = Pc(m, c.extent));
        k[0] || k[1] || Kc(m) || (e = h.B(m, g, d, e.projection)) && pi(this, e) && (this.f = e);
        if (this.f) {
            var e = this.f,
            k = e.G(),
            m = e.$(),
            n = e.f,
            g = d * m / (g * n);
            ki(this.l, d * a.size[0] / 2, d * a.size[1] / 2, g, g, 0, n * (k[0] - f[0]) / m, n * (f[1] - k[3]) / m);
            this.i = null;
            ri(a.attributions, e.da());
            si(a, h)
        }
        return !! this.f
    };
    function pm(a) {
        Dk.call(this, a);
        this.i = Pg();
        this.j = null;
        this.A = oc();
        this.s = cc()
    }
    y(pm, Dk);
    pm.prototype.c = function(a, c, d) {
        var e = a.pixelRatio,
        f = a.viewState,
        g = f.center,
        h = f.projection,
        k = f.rotation,
        m = a.size,
        n = Math.round(e * m[0] / 2),
        p = Math.round(e * m[1] / 2),
        q = e / f.resolution,
        r = this.a,
        t = r.ea(),
        v = t.Pd(h),
        f = Gk(this, a, 0);
        Ek(this, "precompose", d, a, f);
        var m = d,
        r = Gb(r, "render"),
        w,
        A,
        D,
        z;
        if (k || r) {
            m = this.i;
            w = m.canvas;
            D = t.Yb(e) / e;
            var B = d.canvas.width * D;
            A = d.canvas.height * D;
            z = Math.round(Math.sqrt(B * B + A * A));
            w.width != z ? w.width = w.height = z: m.clearRect(0, 0, z, z);
            w = (z - B) / 2 / D;
            A = (z - A) / 2 / D;
            q *= D;
            n = Math.round(D * (n + w));
            p = Math.round(D * (p + A))
        }
        B = m.globalAlpha;
        m.globalAlpha = c.opacity;
        var J = t.eb(h),
        K = this.j,
        M;
        c = t.cf(h) && 1 == c.opacity;
        c || (K.reverse(), M = []);
        for (var Y = 0,
        Ja = K.length; Y < Ja; ++Y) {
            var I = K[Y],
            ba = I.ja,
            oa = J.Da(ba, this.A),
            Ta = ba[0],
            Aa = Fc(J.Da(J.md(g, Ta))),
            ba = Math.round(Lc(oa) * q),
            Ka = Math.round(Mc(oa) * q),
            fc = Math.round((oa[0] - Aa[0]) * q / ba) * ba + n + Math.round((Aa[0] - g[0]) * q),
            oa = Math.round((Aa[1] - oa[3]) * q / Ka) * Ka + p + Math.round((g[1] - Aa[1]) * q);
            if (!c) {
                Aa = [fc, oa, fc + ba, oa + Ka];
                m.save();
                for (var uc = 0,
                Os = M.length; uc < Os; ++uc) {
                    var Ce = M[uc];
                    Qc(Aa, Ce) && (m.beginPath(), m.moveTo(Aa[0], Aa[1]), m.lineTo(Aa[0], Aa[3]), m.lineTo(Aa[2], Aa[3]), m.lineTo(Aa[2], Aa[1]), m.moveTo(Ce[0], Ce[1]), m.lineTo(Ce[2], Ce[1]), m.lineTo(Ce[2], Ce[3]), m.lineTo(Ce[0], Ce[3]), m.closePath(), m.clip())
                }
                M.push(Aa)
            }
            Ta = pg(t, Ta, e, h);
            m.drawImage(I.fb(), v, v, Ta[0], Ta[1], fc, oa, ba, Ka);
            c || m.restore()
        }
        r && (e = w - n / D + n, h = A - p / D + p, g = ki(this.s, z / 2 - e, z / 2 - h, q, -q, -k, -g[0] + e / q, -g[1] - h / q), Ek(this, "render", m, a, g)); (k || r) && d.drawImage(m.canvas, -Math.round(w), -Math.round(A), z / D, z / D);
        m.globalAlpha = B;
        Fk(this, d, a, f)
    };
    pm.prototype.o = function(a, c) {
        function d(a) {
            a = a.V();
            return 2 == a || 4 == a || 3 == a && !t
        }
        var e = a.pixelRatio,
        f = a.viewState,
        g = f.projection,
        h = this.a,
        k = h.ea(),
        m = k.eb(g),
        n = ig(m, f.resolution),
        p = m.$(n),
        q = f.center;
        p == f.resolution ? (q = ui(q, p, a.size), f = Oc(q, p, f.rotation, a.size)) : f = a.extent;
        void 0 !== c.extent && (f = Pc(f, c.extent));
        if (Kc(f)) return ! 1;
        p = fg(m, f, p);
        q = {};
        q[n] = {};
        var r = this.Wc(k, g, q),
        t = h.f(),
        v = oc(),
        w = new we(0, 0, 0, 0),
        A,
        D,
        z,
        B;
        for (z = p.ua; z <= p.wa; ++z) for (B = p.za; B <= p.Ba; ++B) A = k.Lb(n, z, B, e, g),
        !d(A) && A.a && (A = A.a),
        d(A) ? q[n][A.ja.toString()] = A: (D = cg(m, A.ja, r, w, v), D || (A = eg(m, A.ja, w, v)) && r(n + 1, A));
        r = Object.keys(q).map(Number);
        r.sort(Va);
        var v = [],
        J,
        w = 0;
        for (z = r.length; w < z; ++w) for (J in A = r[w], B = q[A], B) A = B[J],
        2 == A.V() && v.push(A);
        this.j = v;
        ti(a.usedTiles, k, n, p);
        vi(a, k, m, e, g, f, n, h.a());
        qi(a, k);
        si(a, k);
        return ! 0
    };
    pm.prototype.zc = function(a, c, d, e) {
        var f = this.i.canvas,
        g = c.size;
        f.width = g[0];
        f.height = g[1];
        this.c(c, di(this.a), this.i);
        if (0 < this.i.getImageData(a[0], a[1], 1, 1).data[3]) return d.call(e, this.a)
    };
    function qm(a) {
        Dk.call(this, a);
        this.i = !1;
        this.N = -1;
        this.B = NaN;
        this.A = oc();
        this.j = this.U = null;
        this.s = Pg()
    }
    y(qm, Dk);
    qm.prototype.c = function(a, c, d) {
        var e = a.extent,
        f = a.pixelRatio,
        g = c.Kc ? a.skippedFeatureUids: {},
        h = a.viewState,
        k = h.projection,
        h = h.rotation,
        m = k.G(),
        n = this.a.ea(),
        p = Gk(this, a, 0);
        Ek(this, "precompose", d, a, p);
        var q = this.j;
        if (q && !q.Qa()) {
            var r;
            Gb(this.a, "render") ? (this.s.canvas.width = d.canvas.width, this.s.canvas.height = d.canvas.height, r = this.s) : r = d;
            var t = r.globalAlpha;
            r.globalAlpha = c.opacity;
            c = a.size[0] * f;
            var v = a.size[1] * f;
            bk(r, -h, c / 2, v / 2);
            q.a(r, f, p, h, g);
            if (n.N && k.a && !wc(m, e)) {
                for (var k = e[0], n = Lc(m), w = 0; k < m[0];)--w,
                p = n * w,
                p = Gk(this, a, p),
                q.a(r, f, p, h, g),
                k += n;
                w = 0;
                for (k = e[2]; k > m[2];)++w,
                p = n * w,
                p = Gk(this, a, p),
                q.a(r, f, p, h, g),
                k -= n;
                p = Gk(this, a, 0)
            }
            bk(r, h, c / 2, v / 2);
            r != d && (Ek(this, "render", r, a, p), d.drawImage(r.canvas, 0, 0));
            r.globalAlpha = t
        }
        Fk(this, d, a, p)
    };
    qm.prototype.ib = function(a, c, d, e) {
        if (this.j) {
            var f = this.a,
            g = {};
            return this.j.f(a, c.viewState.resolution, c.viewState.rotation, {},
            function(a) {
                var c = x(a).toString();
                if (! (c in g)) return g[c] = !0,
                d.call(e, a, f)
            })
        }
    };
    qm.prototype.H = function() {
        oi(this)
    };
    qm.prototype.o = function(a) {
        function c(a) {
            var c, e = a.$b();
            e ? c = e.call(a, n) : (e = d.f) && (c = e(a, n));
            if (c) {
                if (c) {
                    e = !1;
                    if (Array.isArray(c)) for (var f = 0,
                    g = c.length; f < g; ++f) e = dl(r, a, c[f], cl(n, p), this.H, this) || e;
                    else e = dl(r, a, c, cl(n, p), this.H, this) || e;
                    a = e
                } else a = !1;
                this.i = this.i || a
            }
        }
        var d = this.a,
        e = d.ea();
        ri(a.attributions, e.da());
        si(a, e);
        var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.s,
        k = d.A;
        if (!this.i && !h && f || !k && g) return ! 0;
        var m = a.extent,
        k = a.viewState,
        f = k.projection,
        n = k.resolution,
        p = a.pixelRatio,
        g = d.g,
        q = d.a,
        h = rk(d);
        void 0 === h && (h = bl);
        m = qc(m, q * n);
        q = k.projection.G();
        e.N && k.projection.a && !wc(q, a.extent) && (a = Math.max(Lc(m) / 2, Lc(q)), m[0] = q[0] - a, m[2] = q[2] + a);
        if (!this.i && this.B == n && this.N == g && this.U == h && wc(this.A, m)) return ! 0;
        this.j = null;
        this.i = !1;
        var r = new Xk(.5 * n / p, m, n, d.a);
        e.Jc(m, n, f);
        if (h) {
            var t = [];
            e.wb(m,
            function(a) {
                t.push(a)
            },
            this);
            t.sort(h);
            t.forEach(c, this)
        } else e.wb(m, c, this);
        Yk(r);
        this.B = n;
        this.N = g;
        this.U = h;
        this.A = m;
        this.j = r;
        return ! 0
    };
    function rm(a, c) {
        var d = /\{z\}/g,
        e = /\{x\}/g,
        f = /\{y\}/g,
        g = /\{-y\}/g;
        return function(h) {
            if (h) return a.replace(d, h[0].toString()).replace(e, h[1].toString()).replace(f,
            function() {
                return ( - h[2] - 1).toString()
            }).replace(g,
            function() {
                var a = c.b ? c.b[h[0]] : null;
                return (a.Ba - a.za + 1 + h[2]).toString()
            })
        }
    }
    function sm(a, c) {
        for (var d = a.length,
        e = Array(d), f = 0; f < d; ++f) e[f] = rm(a[f], c);
        return tm(e)
    }
    function tm(a) {
        return 1 === a.length ? a[0] : function(c, d, e) {
            if (c) return a[Qa((c[1] << c[0]) + c[2], a.length)](c, d, e)
        }
    }
    function um() {}
    function vm(a) {
        var c = [],
        d = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
        if (d) {
            var e = d[2].charCodeAt(0),
            f;
            for (f = d[1].charCodeAt(0); f <= e; ++f) c.push(a.replace(d[0], String.fromCharCode(f)))
        } else c.push(a);
        return c
    };
    function wm(a) {
        ng.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.sc ? this.sc.bind(this) : um;
        this.urls = null;
        a.urls ? this.Ta(a.urls) : a.url && this.Pa(a.url);
        a.tileUrlFunction && this.Na(a.tileUrlFunction)
    }
    y(wm, ng);
    l = wm.prototype;
    l.Xa = function() {
        return this.tileLoadFunction
    };
    l.Za = function() {
        return this.tileUrlFunction
    };
    l.$a = function() {
        return this.urls
    };
    l.vh = function(a) {
        a = a.target;
        switch (a.V()) {
        case 1:
            this.b(new rg("tileloadstart", a));
            break;
        case 2:
            this.b(new rg("tileloadend", a));
            break;
        case 3:
            this.b(new rg("tileloaderror", a))
        }
    };
    l.cb = function(a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.u()
    };
    l.Na = function(a) {
        this.a.clear();
        this.tileUrlFunction = a;
        this.u()
    };
    l.Pa = function(a) {
        a = this.urls = vm(a);
        this.Na(this.sc ? this.sc.bind(this) : sm(a, this.tileGrid))
    };
    l.Ta = function(a) {
        this.urls = a;
        this.Na(this.sc ? this.sc.bind(this) : sm(a, this.tileGrid))
    };
    l.Rf = function(a, c, d) {
        a = this.Cb(a, c, d);
        Rf(this.a, a) && this.a.get(a)
    };
    function xm(a) {
        wm.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize: 128,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction: ym,
            tileUrlFunction: a.tileUrlFunction,
            tilePixelRatio: a.tilePixelRatio,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX
        });
        this.c = a.format ? a.format: null;
        this.tileClass = a.tileClass ? a.tileClass: zl
    }
    y(xm, wm);
    xm.prototype.Lb = function(a, c, d, e, f) {
        var g = this.Cb(a, c, d);
        if (Rf(this.a, g)) return this.a.get(g);
        a = [a, c, d];
        e = (c = qg(this, a, f)) ? this.tileUrlFunction(c, e, f) : void 0;
        e = new this.tileClass(a, void 0 !== e ? 0 : 4, void 0 !== e ? e: "", this.c, this.tileLoadFunction);
        C(e, "change", this.vh, this);
        this.a.set(g, e);
        return e
    };
    function ym(a, c) {
        a.ci(Tl(c, a.j))
    };
    function zm(a) {
        Dk.call(this, a);
        this.s = Pg();
        this.i = !1;
        this.A = [];
        this.U = oc();
        this.N = [NaN, NaN];
        this.j = cc()
    }
    y(zm, Dk);
    zm.prototype.c = function(a, c, d) {
        var e = a.pixelRatio,
        f = c.Kc ? a.skippedFeatureUids: {},
        g = a.viewState,
        h = g.center,
        k = g.projection,
        m = g.resolution,
        g = g.rotation,
        n = a.size,
        p = e / m,
        q = this.a,
        r = q.ea(),
        t = r.Yb(e),
        v = Gk(this, a, 0);
        Ek(this, "precompose", d, a, v);
        Gb(q, "render") ? (this.s.canvas.width = d.canvas.width, this.s.canvas.height = d.canvas.height, q = this.s) : q = d;
        var w = q.globalAlpha;
        q.globalAlpha = c.opacity;
        c = this.A;
        var A = r.tileGrid,
        D, z, B, J, K, M, Y, Ja, I, ba, oa, Ta, Aa;
        B = 0;
        for (J = c.length; B < J; ++B) if (ba = c[B], K = ba.c, Ja = A.Da(ba.ja, this.U), D = ba.ja[0], Ta = Qb(A.Ya(D), this.N), I = "tile-pixels" == ba.g.g, M = A.$(D), oa = M / t, z = M / m, M = Math.round(e * n[0] / 2), Y = Math.round(e * n[1] / 2), Aa = Ta[0] * e * z, z *= Ta[1] * e, Ta = Ta[0] * e, Aa < Ta / 4 || Aa > 4 * Ta) I ? (Ja = Ic(Ja), oa = ki(this.j, M, Y, p * oa, p * oa, g, (Ja[0] - h[0]) / oa, (h[1] - Ja[1]) / oa)) : oa = v,
        K.vd.a(q, e, oa, g, f);
        else {
            D = pg(r, D, e, k);
            I ? oa = ki(this.j, 0, 0, p * oa, p * oa, g, -D[0] / 2, -D[1] / 2) : (oa = Nc(Ja), oa = ki(this.j, 0, 0, p, -p, -g, -oa[0], -oa[1]));
            ba = ba.l;
            if (K.resolution !== m || K.rotation !== g) K.resolution = m,
            K.rotation = g,
            ba.canvas.width = Aa + .5,
            ba.canvas.height = z + .5,
            ba.translate(Aa / 2, z / 2),
            ba.rotate( - g),
            K.vd.a(ba, e, oa, g, f, !1);
            K = ki(this.j, 0, 0, p, -p, 0, -h[0], -h[1]);
            K = wd(Ic(Ja), 0, 1, 2, K);
            q.drawImage(ba.canvas, Math.round(K[0] + M), Math.round(K[1]) + Y)
        }
        q != d && (Ek(this, "render", q, a, v), d.drawImage(q.canvas, 0, 0));
        q.globalAlpha = w;
        Fk(this, d, a, v)
    };
    function Am(a, c, d, e, f) {
        function g(a) {
            var c, e = a.$b();
            e ? c = e.call(a, A) : (e = d.f) && (c = e(a, A));
            if (c) {
                Array.isArray(c) || (c = [c]);
                var e = z,
                f = D;
                if (c) {
                    var g = !1;
                    if (Array.isArray(c)) for (var h = 0,
                    k = c.length; h < k; ++h) g = dl(f, a, c[h], e, this.B, this) || g;
                    else g = dl(f, a, c, e, this.B, this) || g;
                    a = g
                } else a = !1;
                this.i = this.i || a;
                m.cd = m.cd || a
            }
        }
        var h = d.g,
        k = rk(d) || null,
        m = c.c;
        if (m.cd || m.Uh != h || m.Nf != k) {
            m.vd = null;
            m.cd = !1;
            var n = d.ea(),
            p = n.tileGrid,
            q = c.ja,
            r = c.g,
            t = "tile-pixels" == r.g,
            v,
            w;
            t ? (v = pg(n, q[0], e, c.g), v = [0, 0, v[0], v[1]]) : (v = p.Da(q), qd(f, r) || (w = !0, c.pf(f)));
            var A = p.$(q[0]),
            n = t ? n.Yb(e) : A;
            m.cd = !1;
            var D = new Xk(0, v, n, d.a),
            z = cl(n, e);
            c = c.i;
            k && k !== m.Nf && c.sort(k);
            n = 0;
            for (p = c.length; n < p; ++n) e = c[n],
            w && e.W().hb(r, f),
            g.call(a, e);
            Yk(D);
            m.Uh = h;
            m.Nf = k;
            m.vd = D;
            m.resolution = NaN
        }
    }
    zm.prototype.ib = function(a, c, d, e) {
        var f = c.pixelRatio,
        g = c.viewState.resolution;
        c = c.viewState.rotation;
        var h = this.a,
        k = {},
        m = this.A,
        n = h.ea(),
        p = n.tileGrid,
        q,
        r,
        t,
        v,
        w,
        A;
        t = 0;
        for (v = m.length; t < v; ++t) A = m[t],
        r = A.ja,
        w = n.tileGrid.Da(r, this.U),
        tc(w, a) && ("tile-pixels" === A.g.g ? (w = Ic(w), g = n.Yb(f), r = p.$(r[0]) / g, r = [(a[0] - w[0]) / r, (w[1] - a[1]) / r]) : r = a, A = A.c.vd, q = q || A.f(r, g, c, {},
        function(a) {
            var c = x(a).toString();
            if (! (c in k)) return k[c] = !0,
            d.call(e, a, h)
        }));
        return q
    };
    zm.prototype.B = function() {
        oi(this)
    };
    zm.prototype.o = function(a, c) {
        var d = this.a,
        e = d.ea();
        ri(a.attributions, e.da());
        si(a, e);
        var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.s,
        k = d.A;
        if (!this.i && !h && f || !k && g) return ! 0;
        h = a.extent;
        c.extent && (h = Pc(h, c.extent));
        if (Kc(h)) return ! 1;
        for (var g = a.viewState,
        f = g.projection,
        k = g.resolution,
        g = a.pixelRatio,
        m = e.tileGrid,
        n = m.Kb(), p = n.length - 1; 0 < p && n[p] < k;)--p;
        n = dg(m, h, p);
        ti(a.usedTiles, e, p, n);
        vi(a, e, m, g, f, h, p, d.i());
        qi(a, e);
        h = {};
        h[p] = {};
        var q = this.Wc(e, f, h),
        r = d.S(),
        t = this.U,
        v = new we(0, 0, 0, 0),
        w,
        A,
        D;
        for (A = n.ua; A <= n.wa; ++A) for (D = n.za; D <= n.Ba; ++D) k = e.Lb(p, A, D, g, f),
        w = k.V(),
        2 == w || 4 == w || 3 == w && !r ? h[p][k.ja.toString()] = k: (w = cg(m, k.ja, q, v, t), w || (k = eg(m, k.ja, v, t)) && q(p + 1, k));
        this.i = !1;
        e = Object.keys(h).map(Number);
        e.sort(Va);
        for (var m = [], z, p = 0, n = e.length; p < n; ++p) for (z in k = e[p], q = h[k], q) k = q[z],
        2 == k.V() && (m.push(k), Am(this, k, d, g, f));
        this.A = m;
        return ! 0
    };
    function Bm(a, c) {
        Bi.call(this, 0, c);
        this.f = Pg();
        Pg();
        this.b = this.f.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        zf(a, this.b, 0);
        this.a = !0;
        this.c = cc()
    }
    y(Bm, Bi);
    Bm.prototype.Re = function(a) {
        return a instanceof Wj ? new om(a) : a instanceof Xj ? new pm(a) : a instanceof H ? new zm(a) : a instanceof G ? new qm(a) : null
    };
    function Cm(a, c, d) {
        var e = a.i,
        f = a.f;
        if (Gb(e, c)) {
            var g = d.extent,
            h = d.pixelRatio,
            k = d.viewState.rotation,
            m = d.pixelRatio,
            n = d.viewState,
            p = n.resolution;
            a = ki(a.c, a.b.width / 2, a.b.height / 2, m / p, -m / p, -n.rotation, -n.center[0], -n.center[1]);
            g = new sk(f, h, g, a, k);
            e.b(new fi(c, e, g, d, f, null))
        }
    }
    Bm.prototype.X = function() {
        return "canvas"
    };
    Bm.prototype.xe = function(a) {
        if (a) {
            var c = this.f,
            d = a.pixelRatio,
            e = Math.round(a.size[0] * d),
            d = Math.round(a.size[1] * d);
            this.b.width != e || this.b.height != d ? (this.b.width = e, this.b.height = d) : c.clearRect(0, 0, e, d);
            var f = a.viewState.rotation;
            Ci(a);
            Cm(this, "precompose", a);
            var g = a.layerStatesArray;
            cb(g);
            bk(c, f, e / 2, d / 2);
            var h = a.viewState.resolution,
            k, m, n, p;
            k = 0;
            for (m = g.length; k < m; ++k) p = g[k],
            n = p.layer,
            n = Ei(this, n),
            hi(p, h) && "ready" == p.D && n.o(a, p) && n.c(a, p, c);
            bk(c, -f, e / 2, d / 2);
            Cm(this, "postcompose", a);
            this.a || (If(this.b, !0), this.a = !0);
            Fi(this, a);
            a.postRenderFunctions.push(Di)
        } else this.a && (If(this.b, !1), this.a = !1)
    };
    function Dm(a, c) {
        ni.call(this, a);
        this.target = c
    }
    y(Dm, ni);
    Dm.prototype.Kd = ta;
    Dm.prototype.mh = ta;
    function Em(a) {
        var c = document.createElement("DIV");
        c.style.position = "absolute";
        Dm.call(this, a, c);
        this.f = null;
        this.c = ec()
    }
    y(Em, Dm);
    Em.prototype.ib = function(a, c, d, e) {
        var f = this.a;
        return f.ea().ie(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids,
        function(a) {
            return d.call(e, a, f)
        })
    };
    Em.prototype.Kd = function() {
        yf(this.target);
        this.f = null
    };
    Em.prototype.tf = function(a, c) {
        var d = a.viewState,
        e = d.center,
        f = d.resolution,
        g = d.rotation,
        h = this.f,
        k = this.a.ea(),
        m = a.viewHints,
        n = a.extent;
        void 0 !== c.extent && (n = Pc(n, c.extent));
        m[0] || m[1] || Kc(n) || (d = k.B(n, f, a.pixelRatio, d.projection)) && pi(this, d) && (h = d);
        h && (m = h.G(), n = h.$(), d = cc(), ki(d, a.size[0] / 2, a.size[1] / 2, n / f, n / f, g, (m[0] - e[0]) / n, (e[1] - m[3]) / n), h != this.f && (e = h.a(this), e.style.maxWidth = "none", e.style.position = "absolute", yf(this.target), this.target.appendChild(e), this.f = h), li(d, this.c) || (Tg(this.target, d), gc(this.c, d)), ri(a.attributions, h.da()), si(a, k));
        return ! 0
    };
    function Fm(a) {
        var c = document.createElement("DIV");
        c.style.position = "absolute";
        Dm.call(this, a, c);
        this.c = !0;
        this.j = 1;
        this.i = 0;
        this.f = {}
    }
    y(Fm, Dm);
    Fm.prototype.Kd = function() {
        yf(this.target);
        this.i = 0
    };
    Fm.prototype.tf = function(a, c) {
        if (!c.visible) return this.c && (If(this.target, !1), this.c = !1),
        !0;
        var d = a.pixelRatio,
        e = a.viewState,
        f = e.projection,
        g = this.a,
        h = g.ea(),
        k = h.eb(f),
        m = h.Pd(f),
        n = ig(k, e.resolution),
        p = k.$(n),
        q = e.center,
        r;
        p == e.resolution ? (q = ui(q, p, a.size), r = Oc(q, p, e.rotation, a.size)) : r = a.extent;
        void 0 !== c.extent && (r = Pc(r, c.extent));
        var p = fg(k, r, p),
        t = {};
        t[n] = {};
        var v = this.Wc(h, f, t),
        w = g.f(),
        A = oc(),
        D = new we(0, 0, 0, 0),
        z,
        B,
        J,
        K;
        for (J = p.ua; J <= p.wa; ++J) for (K = p.za; K <= p.Ba; ++K) z = h.Lb(n, J, K, d, f),
        B = z.V(),
        B = 2 == B || 4 == B || 3 == B && !w,
        !B && z.a && (z = z.a),
        B = z.V(),
        2 == B ? t[n][z.ja.toString()] = z: 4 == B || 3 == B && !w || (B = cg(k, z.ja, v, D, A), B || (z = eg(k, z.ja, D, A)) && v(n + 1, z));
        var M;
        if (this.i != h.g) {
            for (M in this.f) w = this.f[ + M],
            Af(w.target);
            this.f = {};
            this.i = h.g
        }
        A = Object.keys(t).map(Number);
        A.sort(Va);
        var v = {},
        Y;
        J = 0;
        for (K = A.length; J < K; ++J) {
            M = A[J];
            M in this.f ? w = this.f[M] : (w = k.md(q, M), w = new Gm(k, w), v[M] = !0, this.f[M] = w);
            M = t[M];
            for (Y in M) {
                z = w;
                B = M[Y];
                var Ja = m,
                I = B.ja,
                ba = I[0],
                oa = I[1],
                Ta = I[2],
                I = I.toString();
                if (! (I in z.a)) {
                    var ba = Qb(z.c.Ya(ba), z.o),
                    Aa = B.fb(z),
                    Ka = Aa.style;
                    Ka.maxWidth = "none";
                    var fc = void 0,
                    uc = void 0;
                    0 < Ja ? (fc = document.createElement("DIV"), uc = fc.style, uc.overflow = "hidden", uc.width = ba[0] + "px", uc.height = ba[1] + "px", Ka.position = "absolute", Ka.left = -Ja + "px", Ka.top = -Ja + "px", Ka.width = ba[0] + 2 * Ja + "px", Ka.height = ba[1] + 2 * Ja + "px", fc.appendChild(Aa)) : (Ka.width = ba[0] + "px", Ka.height = ba[1] + "px", fc = Aa, uc = Ka);
                    uc.position = "absolute";
                    uc.left = (oa - z.g[1]) * ba[0] + "px";
                    uc.top = (z.g[2] - Ta) * ba[1] + "px";
                    z.b || (z.b = document.createDocumentFragment());
                    z.b.appendChild(fc);
                    z.a[I] = B
                }
            }
            w.b && (w.target.appendChild(w.b), w.b = null)
        }
        m = Object.keys(this.f).map(Number);
        m.sort(Va);
        J = cc();
        Y = 0;
        for (A = m.length; Y < A; ++Y) if (M = m[Y], w = this.f[M], M in t) if (z = w.$(), K = w.Ia(), ki(J, a.size[0] / 2, a.size[1] / 2, z / e.resolution, z / e.resolution, e.rotation, (K[0] - q[0]) / z, (q[1] - K[1]) / z), w.setTransform(J), M in v) {
            for (--M; 0 <= M; --M) if (M in this.f) {
                K = this.f[M].target;
                K.parentNode && K.parentNode.insertBefore(w.target, K.nextSibling);
                break
            }
            0 > M && zf(this.target, w.target, 0)
        } else {
            if (!a.viewHints[0] && !a.viewHints[1]) {
                B = dg(w.c, r, w.g[0], D);
                M = [];
                z = K = void 0;
                for (z in w.a) K = w.a[z],
                B.contains(K.ja) || M.push(K);
                Ja = B = void 0;
                B = 0;
                for (Ja = M.length; B < Ja; ++B) K = M[B],
                z = K.ja.toString(),
                Af(K.fb(w)),
                delete w.a[z]
            }
        } else Af(w.target),
        delete this.f[M];
        c.opacity != this.j && (this.j = this.target.style.opacity = c.opacity);
        c.visible && !this.c && (If(this.target, !0), this.c = !0);
        ti(a.usedTiles, h, n, p);
        vi(a, h, k, d, f, r, n, g.a());
        qi(a, h);
        si(a, h);
        return ! 0
    };
    function Gm(a, c) {
        this.target = document.createElement("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.c = a;
        this.g = c;
        this.i = Ic(a.Da(c));
        this.j = a.$(c[0]);
        this.a = {};
        this.b = null;
        this.f = ec();
        this.o = [0, 0]
    }
    Gm.prototype.Ia = function() {
        return this.i
    };
    Gm.prototype.$ = function() {
        return this.j
    };
    Gm.prototype.setTransform = function(a) {
        li(a, this.f) || (Tg(this.target, a), gc(this.f, a))
    };
    function Hm(a) {
        this.i = Pg();
        var c = this.i.canvas;
        c.style.maxWidth = "none";
        c.style.position = "absolute";
        Dm.call(this, a, c);
        this.f = !1;
        this.j = -1;
        this.s = NaN;
        this.o = oc();
        this.c = this.l = null;
        this.U = cc();
        this.A = cc()
    }
    y(Hm, Dm);
    l = Hm.prototype;
    l.Kd = function() {
        var a = this.i.canvas;
        a.width = a.width;
        this.j = 0
    };
    l.mh = function(a, c) {
        var d = a.viewState,
        e = d.center,
        f = d.rotation,
        g = d.resolution,
        d = a.pixelRatio,
        h = a.size[0],
        k = a.size[1],
        m = h * d,
        n = k * d,
        e = ki(this.U, d * h / 2, d * k / 2, d / g, -d / g, -f, -e[0], -e[1]),
        g = this.i;
        g.canvas.width = m;
        g.canvas.height = n;
        h = ki(this.A, 0, 0, 1 / d, 1 / d, 0, -(m - h) / 2 * d, -(n - k) / 2 * d);
        Tg(g.canvas, h);
        Im(this, "precompose", a, e); (h = this.c) && !h.Qa() && (g.globalAlpha = c.opacity, h.a(g, d, e, f, c.Kc ? a.skippedFeatureUids: {}), Im(this, "render", a, e));
        Im(this, "postcompose", a, e)
    };
    function Im(a, c, d, e) {
        var f = a.i;
        a = a.a;
        Gb(a, c) && (e = new sk(f, d.pixelRatio, d.extent, e, d.viewState.rotation), a.b(new fi(c, a, e, d, f, null)))
    }
    l.ib = function(a, c, d, e) {
        if (this.c) {
            var f = this.a,
            g = {};
            return this.c.f(a, c.viewState.resolution, c.viewState.rotation, {},
            function(a) {
                var c = x(a).toString();
                if (! (c in g)) return g[c] = !0,
                d.call(e, a, f)
            })
        }
    };
    l.nh = function() {
        oi(this)
    };
    l.tf = function(a) {
        function c(a) {
            var c, e = a.$b();
            e ? c = e.call(a, m) : (e = d.f) && (c = e(a, m));
            if (c) {
                if (c) {
                    e = !1;
                    if (Array.isArray(c)) for (var f = 0,
                    g = c.length; f < g; ++f) e = dl(p, a, c[f], cl(m, n), this.nh, this) || e;
                    else e = dl(p, a, c, cl(m, n), this.nh, this) || e;
                    a = e
                } else a = !1;
                this.f = this.f || a
            }
        }
        var d = this.a,
        e = d.ea();
        ri(a.attributions, e.da());
        si(a, e);
        var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.s,
        k = d.A;
        if (!this.f && !h && f || !k && g) return ! 0;
        var g = a.extent,
        h = a.viewState,
        f = h.projection,
        m = h.resolution,
        n = a.pixelRatio;
        a = d.g;
        k = d.a;
        h = rk(d);
        void 0 === h && (h = bl);
        g = qc(g, k * m);
        if (!this.f && this.s == m && this.j == a && this.l == h && wc(this.o, g)) return ! 0;
        this.c = null;
        this.f = !1;
        var p = new Xk(.5 * m / n, g, m, d.a);
        e.Jc(g, m, f);
        if (h) {
            var q = [];
            e.wb(g,
            function(a) {
                q.push(a)
            },
            this);
            q.sort(h);
            q.forEach(c, this)
        } else e.wb(g, c, this);
        Yk(p);
        this.s = m;
        this.j = a;
        this.l = h;
        this.o = g;
        this.c = p;
        return ! 0
    };
    function Jm(a, c) {
        Bi.call(this, 0, c);
        this.f = Pg();
        var d = this.f.canvas;
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.className = "ol-unselectable";
        zf(a, d, 0);
        this.c = cc();
        this.b = document.createElement("DIV");
        this.b.className = "ol-unselectable";
        d = this.b.style;
        d.position = "absolute";
        d.width = "100%";
        d.height = "100%";
        C(this.b, "touchstart", Eb);
        zf(a, this.b, 0);
        this.a = !0
    }
    y(Jm, Bi);
    Jm.prototype.fa = function() {
        Af(this.b);
        Jm.ia.fa.call(this)
    };
    Jm.prototype.Re = function(a) {
        if (a instanceof Wj) a = new Em(a);
        else if (a instanceof Xj) a = new Fm(a);
        else if (a instanceof G) a = new Hm(a);
        else return null;
        return a
    };
    function Km(a, c, d) {
        var e = a.i;
        if (Gb(e, c)) {
            var f = d.extent,
            g = d.pixelRatio,
            h = d.viewState,
            k = h.rotation,
            m = a.f,
            n = m.canvas;
            ki(a.c, n.width / 2, n.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            a = new sk(m, g, f, a.c, k);
            e.b(new fi(c, e, a, d, m, null))
        }
    }
    Jm.prototype.X = function() {
        return "dom"
    };
    Jm.prototype.xe = function(a) {
        if (a) {
            var c = this.i;
            if (Gb(c, "precompose") || Gb(c, "postcompose")) {
                var c = this.f.canvas,
                d = a.pixelRatio;
                c.width = a.size[0] * d;
                c.height = a.size[1] * d
            }
            Km(this, "precompose", a);
            c = a.layerStatesArray;
            cb(c);
            var d = a.viewState.resolution,
            e, f, g, h;
            e = 0;
            for (f = c.length; e < f; ++e) h = c[e],
            g = h.layer,
            g = Ei(this, g),
            zf(this.b, g.target, e),
            hi(h, d) && "ready" == h.D ? g.tf(a, h) && g.mh(a, h) : g.Kd();
            var c = a.layerStates,
            k;
            for (k in this.g) k in c || (g = this.g[k], Af(g.target));
            this.a || (If(this.b, !0), this.a = !0);
            Ci(a);
            Fi(this, a);
            a.postRenderFunctions.push(Di);
            Km(this, "postcompose", a)
        } else this.a && (If(this.b, !1), this.a = !1)
    };
    function Lm(a) {
        this.b = a
    }
    function Mm(a) {
        this.b = a
    }
    y(Mm, Lm);
    Mm.prototype.X = function() {
        return 35632
    };
    function Nm(a) {
        this.b = a
    }
    y(Nm, Lm);
    Nm.prototype.X = function() {
        return 35633
    };
    function Om() {
        this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    y(Om, Mm);
    da(Om);
    function Pm() {
        this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }
    y(Pm, Nm);
    da(Pm);
    function Qm(a, c) {
        this.o = a.getUniformLocation(c, "j");
        this.l = a.getUniformLocation(c, "i");
        this.i = a.getUniformLocation(c, "k");
        this.j = a.getUniformLocation(c, "h");
        this.b = a.getAttribLocation(c, "e");
        this.a = a.getAttribLocation(c, "f");
        this.f = a.getAttribLocation(c, "c");
        this.g = a.getAttribLocation(c, "g");
        this.c = a.getAttribLocation(c, "d")
    };
    function Rm(a) {
        this.b = void 0 !== a ? a: []
    };
    function Sm(a, c) {
        this.j = a;
        this.b = c;
        this.a = {};
        this.c = {};
        this.f = {};
        this.l = this.s = this.i = this.o = null; (this.g = Wa(sa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        C(this.j, "webglcontextlost", this.Cn, this);
        C(this.j, "webglcontextrestored", this.Dn, this)
    }
    y(Sm, Ab);
    function Tm(a, c, d) {
        var e = a.b,
        f = d.b,
        g = String(x(d));
        if (g in a.a) e.bindBuffer(c, a.a[g].buffer);
        else {
            var h = e.createBuffer();
            e.bindBuffer(c, h);
            var k;
            34962 == c ? k = new Float32Array(f) : 34963 == c && (k = a.g ? new Uint32Array(f) : new Uint16Array(f));
            e.bufferData(c, k, 35044);
            a.a[g] = {
                Eb: d,
                buffer: h
            }
        }
    }
    function Um(a, c) {
        var d = a.b,
        e = String(x(c)),
        f = a.a[e];
        d.isContextLost() || d.deleteBuffer(f.buffer);
        delete a.a[e]
    }
    l = Sm.prototype;
    l.fa = function() {
        zb(this.j);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var c in this.a) a.deleteBuffer(this.a[c].buffer);
            for (c in this.f) a.deleteProgram(this.f[c]);
            for (c in this.c) a.deleteShader(this.c[c]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.l);
            a.deleteTexture(this.s)
        }
    };
    l.Bn = function() {
        return this.b
    };
    function Vm(a) {
        if (!a.i) {
            var c = a.b,
            d = c.createFramebuffer();
            c.bindFramebuffer(c.FRAMEBUFFER, d);
            var e = Wm(c, 1, 1),
            f = c.createRenderbuffer();
            c.bindRenderbuffer(c.RENDERBUFFER, f);
            c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, 1, 1);
            c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, e, 0);
            c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, f);
            c.bindTexture(c.TEXTURE_2D, null);
            c.bindRenderbuffer(c.RENDERBUFFER, null);
            c.bindFramebuffer(c.FRAMEBUFFER, null);
            a.i = d;
            a.s = e;
            a.l = f
        }
        return a.i
    }
    function Xm(a, c) {
        var d = String(x(c));
        if (d in a.c) return a.c[d];
        var e = a.b,
        f = e.createShader(c.X());
        e.shaderSource(f, c.b);
        e.compileShader(f);
        return a.c[d] = f
    }
    function Ym(a, c, d) {
        var e = x(c) + "/" + x(d);
        if (e in a.f) return a.f[e];
        var f = a.b,
        g = f.createProgram();
        f.attachShader(g, Xm(a, c));
        f.attachShader(g, Xm(a, d));
        f.linkProgram(g);
        return a.f[e] = g
    }
    l.Cn = function() {
        nb(this.a);
        nb(this.c);
        nb(this.f);
        this.l = this.s = this.i = this.o = null
    };
    l.Dn = function() {};
    l.re = function(a) {
        if (a == this.o) return ! 1;
        this.b.useProgram(a);
        this.o = a;
        return ! 0
    };
    function Zm(a, c, d) {
        var e = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, e);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== c && a.texParameteri(3553, 10242, c);
        void 0 !== d && a.texParameteri(3553, 10243, d);
        return e
    }
    function Wm(a, c, d) {
        var e = Zm(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, c, d, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return e
    }
    function $m(a, c) {
        var d = Zm(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c);
        return d
    };
    function an(a, c) {
        this.N = this.B = void 0;
        this.l = Nc(c);
        this.U = [];
        this.i = [];
        this.D = void 0;
        this.c = [];
        this.f = [];
        this.S = this.va = void 0;
        this.a = [];
        this.H = this.o = null;
        this.Fa = void 0;
        this.ta = ec();
        this.Ua = ec();
        this.Y = this.T = void 0;
        this.sb = ec();
        this.na = this.ya = this.xa = void 0;
        this.oa = [];
        this.j = [];
        this.b = [];
        this.A = null;
        this.g = [];
        this.s = [];
        this.rb = void 0
    }
    y(an, ei);
    function bn(a, c) {
        var d = a.A,
        e = a.o,
        f = a.oa,
        g = a.j,
        h = c.b;
        return function() {
            if (!h.isContextLost()) {
                var a, m;
                a = 0;
                for (m = f.length; a < m; ++a) h.deleteTexture(f[a]);
                a = 0;
                for (m = g.length; a < m; ++a) h.deleteTexture(g[a])
            }
            Um(c, d);
            Um(c, e)
        }
    }
    function cn(a, c, d, e) {
        var f = a.B,
        g = a.N,
        h = a.D,
        k = a.va,
        m = a.S,
        n = a.Fa,
        p = a.T,
        q = a.Y,
        r = a.xa ? 1 : 0,
        t = a.ya,
        v = a.na,
        w = a.rb,
        A = Math.cos(t),
        t = Math.sin(t),
        D = a.a.length,
        z = a.b.length,
        B,
        J,
        K,
        M,
        Y,
        Ja;
        for (B = 0; B < d; B += e) Y = c[B] - a.l[0],
        Ja = c[B + 1] - a.l[1],
        J = z / 8,
        K = -v * f,
        M = -v * (h - g),
        a.b[z++] = Y,
        a.b[z++] = Ja,
        a.b[z++] = K * A - M * t,
        a.b[z++] = K * t + M * A,
        a.b[z++] = p / m,
        a.b[z++] = (q + h) / k,
        a.b[z++] = n,
        a.b[z++] = r,
        K = v * (w - f),
        M = -v * (h - g),
        a.b[z++] = Y,
        a.b[z++] = Ja,
        a.b[z++] = K * A - M * t,
        a.b[z++] = K * t + M * A,
        a.b[z++] = (p + w) / m,
        a.b[z++] = (q + h) / k,
        a.b[z++] = n,
        a.b[z++] = r,
        K = v * (w - f),
        M = v * g,
        a.b[z++] = Y,
        a.b[z++] = Ja,
        a.b[z++] = K * A - M * t,
        a.b[z++] = K * t + M * A,
        a.b[z++] = (p + w) / m,
        a.b[z++] = q / k,
        a.b[z++] = n,
        a.b[z++] = r,
        K = -v * f,
        M = v * g,
        a.b[z++] = Y,
        a.b[z++] = Ja,
        a.b[z++] = K * A - M * t,
        a.b[z++] = K * t + M * A,
        a.b[z++] = p / m,
        a.b[z++] = q / k,
        a.b[z++] = n,
        a.b[z++] = r,
        a.a[D++] = J,
        a.a[D++] = J + 1,
        a.a[D++] = J + 2,
        a.a[D++] = J,
        a.a[D++] = J + 2,
        a.a[D++] = J + 3
    }
    an.prototype.qc = function(a, c) {
        this.g.push(this.a.length);
        this.s.push(c);
        var d = a.ga();
        cn(this, d, d.length, a.ra())
    };
    an.prototype.rc = function(a, c) {
        this.g.push(this.a.length);
        this.s.push(c);
        var d = a.ga();
        cn(this, d, d.length, a.ra())
    };
    function dn(a, c) {
        var d = c.b;
        a.U.push(a.a.length);
        a.i.push(a.a.length);
        a.A = new Rm(a.b);
        Tm(c, 34962, a.A);
        a.o = new Rm(a.a);
        Tm(c, 34963, a.o);
        var e = {};
        en(a.oa, a.c, e, d);
        en(a.j, a.f, e, d);
        a.B = void 0;
        a.N = void 0;
        a.D = void 0;
        a.c = null;
        a.f = null;
        a.va = void 0;
        a.S = void 0;
        a.a = null;
        a.Fa = void 0;
        a.T = void 0;
        a.Y = void 0;
        a.xa = void 0;
        a.ya = void 0;
        a.na = void 0;
        a.b = null;
        a.rb = void 0
    }
    function en(a, c, d, e) {
        var f, g, h, k = c.length;
        for (h = 0; h < k; ++h) f = c[h],
        g = x(f).toString(),
        g in d ? f = d[g] : (f = $m(e, f), d[g] = f),
        a[h] = f
    }
    function fn(a, c, d, e, f, g, h, k, m, n, p) {
        var q = c.b;
        Tm(c, 34962, a.A);
        Tm(c, 34963, a.o);
        var r = Om.Wb(),
        t = Pm.Wb(),
        t = Ym(c, r, t);
        a.H ? r = a.H: (r = new Qm(q, t), a.H = r);
        c.re(t);
        q.enableVertexAttribArray(r.f);
        q.vertexAttribPointer(r.f, 2, 5126, !1, 32, 0);
        q.enableVertexAttribArray(r.b);
        q.vertexAttribPointer(r.b, 2, 5126, !1, 32, 8);
        q.enableVertexAttribArray(r.c);
        q.vertexAttribPointer(r.c, 2, 5126, !1, 32, 16);
        q.enableVertexAttribArray(r.a);
        q.vertexAttribPointer(r.a, 1, 5126, !1, 32, 24);
        q.enableVertexAttribArray(r.g);
        q.vertexAttribPointer(r.g, 1, 5126, !1, 32, 28);
        t = a.sb;
        ki(t, 0, 0, 2 / (e * g[0]), 2 / (e * g[1]), -f, -(d[0] - a.l[0]), -(d[1] - a.l[1]));
        d = a.Ua;
        e = 2 / g[0];
        g = 2 / g[1];
        hc(d);
        d[0] = e;
        d[5] = g;
        d[10] = 1;
        d[15] = 1;
        g = a.ta;
        hc(g);
        0 !== f && mc(g, -f);
        q.uniformMatrix4fv(r.j, !1, t);
        q.uniformMatrix4fv(r.l, !1, d);
        q.uniformMatrix4fv(r.o, !1, g);
        q.uniform1f(r.i, h);
        var v;
        if (void 0 === m) gn(a, q, c, k, a.oa, a.U);
        else {
            if (n) a: {
                f = c.g ? 5125 : 5123;
                c = c.g ? 4 : 2;
                g = a.g.length - 1;
                for (h = a.j.length - 1; 0 <= h; --h) for (q.bindTexture(3553, a.j[h]), n = 0 < h ? a.i[h - 1] : 0, t = a.i[h]; 0 <= g && a.g[g] >= n;) {
                    v = a.g[g];
                    d = a.s[g];
                    e = x(d).toString();
                    if (void 0 === k[e] && d.W() && (void 0 === p || Qc(p, d.W().G())) && (q.clear(q.COLOR_BUFFER_BIT | q.DEPTH_BUFFER_BIT), q.drawElements(4, t - v, f, v * c), t = m(d))) {
                        a = t;
                        break a
                    }
                    t = v;
                    g--
                }
                a = void 0
            } else q.clear(q.COLOR_BUFFER_BIT | q.DEPTH_BUFFER_BIT),
            gn(a, q, c, k, a.j, a.i),
            a = (a = m(null)) ? a: void 0;
            v = a
        }
        q.disableVertexAttribArray(r.f);
        q.disableVertexAttribArray(r.b);
        q.disableVertexAttribArray(r.c);
        q.disableVertexAttribArray(r.a);
        q.disableVertexAttribArray(r.g);
        return v
    }
    function gn(a, c, d, e, f, g) {
        var h = d.g ? 5125 : 5123;
        d = d.g ? 4 : 2;
        if (pb(e)) {
            var k;
            a = 0;
            e = f.length;
            for (k = 0; a < e; ++a) {
                c.bindTexture(3553, f[a]);
                var m = g[a];
                c.drawElements(4, m - k, h, k * d);
                k = m
            }
        } else {
            k = 0;
            var n, m = 0;
            for (n = f.length; m < n; ++m) {
                c.bindTexture(3553, f[m]);
                for (var p = 0 < m ? g[m - 1] : 0, q = g[m], r = p; k < a.g.length && a.g[k] <= q;) {
                    var t = x(a.s[k]).toString();
                    void 0 !== e[t] ? (r !== p && c.drawElements(4, p - r, h, r * d), p = r = k === a.g.length - 1 ? q: a.g[k + 1]) : p = k === a.g.length - 1 ? q: a.g[k + 1];
                    k++
                }
                r !== p && c.drawElements(4, p - r, h, r * d)
            }
        }
    }
    an.prototype.Rb = function(a) {
        var c = a.Vb(),
        d = a.ec(1),
        e = a.hd(),
        f = a.ke(1),
        g = a.A,
        h = a.Ia(),
        k = a.B,
        m = a.s,
        n = a.Db();
        a = a.j;
        var p;
        0 === this.c.length ? this.c.push(d) : (p = this.c[this.c.length - 1], x(p) != x(d) && (this.U.push(this.a.length), this.c.push(d)));
        0 === this.f.length ? this.f.push(f) : (p = this.f[this.f.length - 1], x(p) != x(f) && (this.i.push(this.a.length), this.f.push(f)));
        this.B = c[0];
        this.N = c[1];
        this.D = n[1];
        this.va = e[1];
        this.S = e[0];
        this.Fa = g;
        this.T = h[0];
        this.Y = h[1];
        this.ya = m;
        this.xa = k;
        this.na = a;
        this.rb = n[0]
    };
    function hn(a, c, d) {
        this.i = c;
        this.j = a;
        this.c = d;
        this.g = {}
    }
    function jn(a, c) {
        var d = [],
        e;
        for (e in a.g) d.push(bn(a.g[e], c));
        return function() {
            for (var a = d.length,
            c, e = 0; e < a; e++) c = d[e].apply(this, arguments);
            return c
        }
    }
    function kn(a, c) {
        for (var d in a.g) dn(a.g[d], c)
    }
    hn.prototype.b = function(a, c) {
        var d = this.g[c];
        void 0 === d && (d = new ln[c](this.j, this.i), this.g[c] = d);
        return d
    };
    hn.prototype.Qa = function() {
        return pb(this.g)
    };
    hn.prototype.a = function(a, c, d, e, f, g, h, k) {
        var m, n;
        g = 0;
        for (m = Hk.length; g < m; ++g) n = this.g[Hk[g]],
        void 0 !== n && fn(n, a, c, d, e, f, h, k, void 0, !1)
    };
    function mn(a, c, d, e, f, g, h, k, m, n) {
        var p = nn,
        q, r;
        for (q = Hk.length - 1; 0 <= q; --q) if (r = a.g[Hk[q]], void 0 !== r && (r = fn(r, c, d, e, f, p, g, h, k, m, n))) return r
    }
    hn.prototype.f = function(a, c, d, e, f, g, h, k, m, n) {
        var p = c.b;
        p.bindFramebuffer(p.FRAMEBUFFER, Vm(c));
        var q;
        void 0 !== this.c && (q = qc(zc(a), e * this.c));
        return mn(this, c, a, e, f, k, m,
        function(a) {
            var c = new Uint8Array(4);
            p.readPixels(0, 0, 1, 1, p.RGBA, p.UNSIGNED_BYTE, c);
            if (0 < c[3] && (a = n(a))) return a
        },
        !0, q)
    };
    function on(a, c, d, e, f, g, h) {
        var k = d.b;
        k.bindFramebuffer(k.FRAMEBUFFER, Vm(d));
        return void 0 !== mn(a, d, c, e, f, g, h,
        function() {
            var a = new Uint8Array(4);
            k.readPixels(0, 0, 1, 1, k.RGBA, k.UNSIGNED_BYTE, a);
            return 0 < a[3]
        },
        !1)
    }
    var ln = {
        Image: an
    },
    nn = [1, 1];
    function pn(a, c, d, e, f, g) {
        this.b = a;
        this.f = c;
        this.g = g;
        this.j = f;
        this.i = e;
        this.c = d;
        this.a = null
    }
    y(pn, ei);
    l = pn.prototype;
    l.pd = function(a) {
        this.Rb(a.a)
    };
    l.pc = function(a) {
        switch (a.X()) {
        case "Point":
            this.rc(a, null);
            break;
        case "MultiPoint":
            this.qc(a, null);
            break;
        case "GeometryCollection":
            this.Te(a, null)
        }
    };
    l.Se = function(a, c) {
        var d = (0, c.g)(a);
        d && Qc(this.g, d.G()) && (this.pd(c), this.pc(d))
    };
    l.Te = function(a) {
        a = a.c;
        var c, d;
        c = 0;
        for (d = a.length; c < d; ++c) this.pc(a[c])
    };
    l.rc = function(a, c) {
        var d = this.b,
        e = (new hn(1, this.g)).b(0, "Image");
        e.Rb(this.a);
        e.rc(a, c);
        dn(e, d);
        fn(e, this.b, this.f, this.c, this.i, this.j, 1, {},
        void 0, !1);
        bn(e, d)()
    };
    l.qc = function(a, c) {
        var d = this.b,
        e = (new hn(1, this.g)).b(0, "Image");
        e.Rb(this.a);
        e.qc(a, c);
        dn(e, d);
        fn(e, this.b, this.f, this.c, this.i, this.j, 1, {},
        void 0, !1);
        bn(e, d)()
    };
    l.Rb = function(a) {
        this.a = a
    };
    function qn() {
        this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }
    y(qn, Mm);
    da(qn);
    function rn() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    y(rn, Nm);
    da(rn);
    function sn(a, c) {
        this.g = a.getUniformLocation(c, "f");
        this.f = a.getUniformLocation(c, "e");
        this.i = a.getUniformLocation(c, "d");
        this.c = a.getUniformLocation(c, "g");
        this.b = a.getAttribLocation(c, "b");
        this.a = a.getAttribLocation(c, "c")
    };
    function tn(a, c) {
        ni.call(this, c);
        this.f = a;
        this.S = new Rm([ - 1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.i = this.qb = null;
        this.j = void 0;
        this.s = cc();
        this.U = ec();
        this.A = null
    }
    y(tn, ni);
    function un(a, c, d) {
        var e = a.f.f;
        if (void 0 === a.j || a.j != d) {
            c.postRenderFunctions.push(qa(function(a, c, d) {
                a.isContextLost() || (a.deleteFramebuffer(c), a.deleteTexture(d))
            },
            e, a.i, a.qb));
            c = Wm(e, d, d);
            var f = e.createFramebuffer();
            e.bindFramebuffer(36160, f);
            e.framebufferTexture2D(36160, 36064, 3553, c, 0);
            a.qb = c;
            a.i = f;
            a.j = d
        } else e.bindFramebuffer(36160, a.i)
    }
    tn.prototype.oh = function(a, c, d) {
        vn(this, "precompose", d, a);
        Tm(d, 34962, this.S);
        var e = d.b,
        f = qn.Wb(),
        g = rn.Wb(),
        f = Ym(d, f, g);
        this.A ? g = this.A: this.A = g = new sn(e, f);
        d.re(f) && (e.enableVertexAttribArray(g.b), e.vertexAttribPointer(g.b, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(g.a), e.vertexAttribPointer(g.a, 2, 5126, !1, 16, 8), e.uniform1i(g.c, 0));
        e.uniformMatrix4fv(g.i, !1, this.s);
        e.uniformMatrix4fv(g.f, !1, this.U);
        e.uniform1f(g.g, c.opacity);
        e.bindTexture(3553, this.qb);
        e.drawArrays(5, 0, 4);
        vn(this, "postcompose", d, a)
    };
    function vn(a, c, d, e) {
        a = a.a;
        if (Gb(a, c)) {
            var f = e.viewState;
            a.b(new fi(c, a, new pn(d, f.center, f.resolution, f.rotation, e.size, e.extent), e, null, d))
        }
    }
    tn.prototype.uf = function() {
        this.i = this.qb = null;
        this.j = void 0
    };
    function wn(a, c) {
        tn.call(this, a, c);
        this.l = this.o = this.c = null
    }
    y(wn, tn);
    function xn(a, c) {
        var d = c.a();
        return $m(a.f.f, d)
    }
    wn.prototype.ib = function(a, c, d, e) {
        var f = this.a;
        return f.ea().ie(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids,
        function(a) {
            return d.call(e, a, f)
        })
    };
    wn.prototype.vf = function(a, c) {
        var d = this.f.f,
        e = a.pixelRatio,
        f = a.viewState,
        g = f.center,
        h = f.resolution,
        k = f.rotation,
        m = this.c,
        n = this.qb,
        p = this.a.ea(),
        q = a.viewHints,
        r = a.extent;
        void 0 !== c.extent && (r = Pc(r, c.extent));
        q[0] || q[1] || Kc(r) || (f = p.B(r, h, e, f.projection)) && pi(this, f) && (m = f, n = xn(this, f), this.qb && a.postRenderFunctions.push(qa(function(a, c) {
            a.isContextLost() || a.deleteTexture(c)
        },
        d, this.qb)));
        m && (d = this.f.c.j, yn(this, d.width, d.height, e, g, h, k, m.G()), this.l = null, e = this.s, hc(e), lc(e, 1, -1), kc(e, 0, -1), this.c = m, this.qb = n, ri(a.attributions, m.da()), si(a, p));
        return ! 0
    };
    function yn(a, c, d, e, f, g, h, k) {
        c *= g;
        d *= g;
        a = a.U;
        hc(a);
        lc(a, 2 * e / c, 2 * e / d);
        mc(a, -h);
        kc(a, k[0] - f[0], k[1] - f[1]);
        lc(a, (k[2] - k[0]) / 2, (k[3] - k[1]) / 2);
        kc(a, 1, 1)
    }
    wn.prototype.he = function(a, c) {
        return void 0 !== this.ib(a, c, Tc, this)
    };
    wn.prototype.zc = function(a, c, d, e) {
        if (this.c && this.c.a()) if (this.a.ea() instanceof mm) {
            if (a = a.slice(), mi(c.pixelToCoordinateMatrix, a, a), this.ib(a, c, Tc, this)) return d.call(e, this.a)
        } else {
            var f = [this.c.a().width, this.c.a().height];
            if (!this.l) {
                var g = c.size;
                c = cc();
                hc(c);
                kc(c, -1, -1);
                lc(c, 2 / g[0], 2 / g[1]);
                kc(c, 0, g[1]);
                lc(c, 1, -1);
                g = cc();
                jc(this.U, g);
                var h = cc();
                hc(h);
                kc(h, 0, f[1]);
                lc(h, 1, -1);
                lc(h, f[0] / 2, f[1] / 2);
                kc(h, 1, 1);
                var k = cc();
                ic(h, g, k);
                ic(k, c, k);
                this.l = k
            }
            c = [0, 0];
            mi(this.l, a, c);
            if (! (0 > c[0] || c[0] > f[0] || 0 > c[1] || c[1] > f[1]) && (this.o || (this.o = Pg(1, 1)), this.o.clearRect(0, 0, 1, 1), this.o.drawImage(this.c.a(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.o.getImageData(0, 0, 1, 1).data[3])) return d.call(e, this.a)
        }
    };
    function zn() {
        this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }
    y(zn, Mm);
    da(zn);
    function An() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }
    y(An, Nm);
    da(An);
    function Bn(a, c) {
        this.g = a.getUniformLocation(c, "e");
        this.f = a.getUniformLocation(c, "d");
        this.b = a.getAttribLocation(c, "b");
        this.a = a.getAttribLocation(c, "c")
    };
    function Cn(a, c) {
        tn.call(this, a, c);
        this.H = zn.Wb();
        this.T = An.Wb();
        this.c = null;
        this.N = new Rm([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.B = this.o = null;
        this.l = -1;
        this.D = [0, 0]
    }
    y(Cn, tn);
    l = Cn.prototype;
    l.fa = function() {
        Um(this.f.c, this.N);
        Cn.ia.fa.call(this)
    };
    l.Wc = function(a, c, d) {
        var e = this.f;
        return function(f, g) {
            return og(a, c, f, g,
            function(a) {
                var c = Rf(e.a, a.gb());
                c && (d[f] || (d[f] = {}), d[f][a.ja.toString()] = a);
                return c
            })
        }
    };
    l.uf = function() {
        Cn.ia.uf.call(this);
        this.c = null
    };
    l.vf = function(a, c, d) {
        var e = this.f,
        f = d.b,
        g = a.viewState,
        h = g.projection,
        k = this.a,
        m = k.ea(),
        n = m.eb(h),
        p = ig(n, g.resolution),
        q = n.$(p),
        r = pg(m, p, a.pixelRatio, h),
        t = r[0] / Qb(n.Ya(p), this.D)[0],
        v = q / t,
        w = m.Pd(h),
        A = g.center,
        D;
        q == g.resolution ? (A = ui(A, q, a.size), D = Oc(A, q, g.rotation, a.size)) : D = a.extent;
        q = fg(n, D, q);
        if (this.o && ye(this.o, q) && this.l == m.g) v = this.B;
        else {
            var z = [q.wa - q.ua + 1, q.Ba - q.za + 1],
            B = Math.pow(2, Math.ceil(Math.log(Math.max(z[0] * r[0], z[1] * r[1])) / Math.LN2)),
            z = v * B,
            J = n.Ia(p),
            K = J[0] + q.ua * r[0] * v,
            v = J[1] + q.za * r[1] * v,
            v = [K, v, K + z, v + z];
            un(this, a, B);
            f.viewport(0, 0, B, B);
            f.clearColor(0, 0, 0, 0);
            f.clear(16384);
            f.disable(3042);
            B = Ym(d, this.H, this.T);
            d.re(B);
            this.c || (this.c = new Bn(f, B));
            Tm(d, 34962, this.N);
            f.enableVertexAttribArray(this.c.b);
            f.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 0);
            f.enableVertexAttribArray(this.c.a);
            f.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 8);
            f.uniform1i(this.c.g, 0);
            d = {};
            d[p] = {};
            var M = this.Wc(m, h, d),
            Y = k.f(),
            B = !0,
            K = oc(),
            Ja = new we(0, 0, 0, 0),
            I,
            ba,
            oa;
            for (ba = q.ua; ba <= q.wa; ++ba) for (oa = q.za; oa <= q.Ba; ++oa) {
                J = m.Lb(p, ba, oa, t, h);
                if (void 0 !== c.extent && (I = n.Da(J.ja, K), !Qc(I, c.extent))) continue;
                I = J.V();
                I = 2 == I || 4 == I || 3 == I && !Y; ! I && J.a && (J = J.a);
                I = J.V();
                if (2 == I) {
                    if (Rf(e.a, J.gb())) {
                        d[p][J.ja.toString()] = J;
                        continue
                    }
                } else if (4 == I || 3 == I && !Y) continue;
                B = !1;
                I = cg(n, J.ja, M, Ja, K);
                I || (J = eg(n, J.ja, Ja, K)) && M(p + 1, J)
            }
            c = Object.keys(d).map(Number);
            c.sort(Va);
            for (var M = new Float32Array(4), Ta, Aa, Ka, Y = 0, Ja = c.length; Y < Ja; ++Y) for (Ta in Aa = d[c[Y]], Aa) J = Aa[Ta],
            I = n.Da(J.ja, K),
            ba = 2 * (I[2] - I[0]) / z,
            oa = 2 * (I[3] - I[1]) / z,
            Ka = 2 * (I[0] - v[0]) / z - 1,
            I = 2 * (I[1] - v[1]) / z - 1,
            bc(M, ba, oa, Ka, I),
            f.uniform4fv(this.c.f, M),
            Dn(e, J, r, w * t),
            f.drawArrays(5, 0, 4);
            B ? (this.o = q, this.B = v, this.l = m.g) : (this.B = this.o = null, this.l = -1, a.animate = !0)
        }
        ti(a.usedTiles, m, p, q);
        var fc = e.o;
        vi(a, m, n, t, h, D, p, k.a(),
        function(a) {
            var c; (c = 2 != a.V() || Rf(e.a, a.gb())) || (c = a.gb() in fc.g);
            c || fc.f([a, hg(n, a.ja), n.$(a.ja[0]), r, w * t])
        },
        this);
        qi(a, m);
        si(a, m);
        f = this.s;
        hc(f);
        kc(f, (A[0] - v[0]) / (v[2] - v[0]), (A[1] - v[1]) / (v[3] - v[1]));
        0 !== g.rotation && mc(f, g.rotation);
        lc(f, a.size[0] * g.resolution / (v[2] - v[0]), a.size[1] * g.resolution / (v[3] - v[1]));
        kc(f, -.5, -.5);
        return ! 0
    };
    l.zc = function(a, c, d, e) {
        if (this.i) {
            var f = [0, 0];
            mi(this.s, [a[0] / c.size[0], (c.size[1] - a[1]) / c.size[1]], f);
            a = [f[0] * this.j, f[1] * this.j];
            c = this.f.c.b;
            c.bindFramebuffer(c.FRAMEBUFFER, this.i);
            f = new Uint8Array(4);
            c.readPixels(a[0], a[1], 1, 1, c.RGBA, c.UNSIGNED_BYTE, f);
            if (0 < f[3]) return d.call(e, this.a)
        }
    };
    function En(a, c) {
        tn.call(this, a, c);
        this.l = !1;
        this.D = -1;
        this.H = NaN;
        this.B = oc();
        this.o = this.c = this.N = null
    }
    y(En, tn);
    l = En.prototype;
    l.oh = function(a, c, d) {
        this.o = c;
        var e = a.viewState,
        f = this.c;
        f && !f.Qa() && f.a(d, e.center, e.resolution, e.rotation, a.size, a.pixelRatio, c.opacity, c.Kc ? a.skippedFeatureUids: {})
    };
    l.fa = function() {
        var a = this.c;
        a && (jn(a, this.f.c)(), this.c = null);
        En.ia.fa.call(this)
    };
    l.ib = function(a, c, d, e) {
        if (this.c && this.o) {
            var f = c.viewState,
            g = this.a,
            h = {};
            return this.c.f(a, this.f.c, f.center, f.resolution, f.rotation, c.size, c.pixelRatio, this.o.opacity, {},
            function(a) {
                var c = x(a).toString();
                if (! (c in h)) return h[c] = !0,
                d.call(e, a, g)
            })
        }
    };
    l.he = function(a, c) {
        if (this.c && this.o) {
            var d = c.viewState;
            return on(this.c, a, this.f.c, d.resolution, d.rotation, this.o.opacity, c.skippedFeatureUids)
        }
        return ! 1
    };
    l.zc = function(a, c, d, e) {
        a = a.slice();
        mi(c.pixelToCoordinateMatrix, a, a);
        if (this.he(a, c)) return d.call(e, this.a)
    };
    l.ph = function() {
        oi(this)
    };
    l.vf = function(a, c, d) {
        function e(a) {
            var c, d = a.$b();
            d ? c = d.call(a, n) : (d = f.f) && (c = d(a, n));
            if (c) {
                if (c) {
                    d = !1;
                    if (Array.isArray(c)) for (var e = 0,
                    g = c.length; e < g; ++e) d = dl(r, a, c[e], cl(n, p), this.ph, this) || d;
                    else d = dl(r, a, c, cl(n, p), this.ph, this) || d;
                    a = d
                } else a = !1;
                this.l = this.l || a
            }
        }
        var f = this.a;
        c = f.ea();
        ri(a.attributions, c.da());
        si(a, c);
        var g = a.viewHints[0],
        h = a.viewHints[1],
        k = f.s,
        m = f.A;
        if (!this.l && !k && g || !m && h) return ! 0;
        var h = a.extent,
        k = a.viewState,
        g = k.projection,
        n = k.resolution,
        p = a.pixelRatio,
        k = f.g,
        q = f.a,
        m = rk(f);
        void 0 === m && (m = bl);
        h = qc(h, q * n);
        if (!this.l && this.H == n && this.D == k && this.N == m && wc(this.B, h)) return ! 0;
        this.c && a.postRenderFunctions.push(jn(this.c, d));
        this.l = !1;
        var r = new hn(.5 * n / p, h, f.a);
        c.Jc(h, n, g);
        if (m) {
            var t = [];
            c.wb(h,
            function(a) {
                t.push(a)
            },
            this);
            t.sort(m);
            t.forEach(e, this)
        } else c.wb(h, e, this);
        kn(r, d);
        this.H = n;
        this.D = k;
        this.N = m;
        this.B = h;
        this.c = r;
        return ! 0
    };
    function Fn(a, c) {
        Bi.call(this, 0, c);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        zf(a, this.b, 0);
        this.U = this.B = 0;
        this.N = Pg();
        this.l = !0;
        this.f = Vg(this.b, {
            antialias: !0,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.c = new Sm(this.b, this.f);
        C(this.b, "webglcontextlost", this.Bm, this);
        C(this.b, "webglcontextrestored", this.Cm, this);
        this.a = new Qf;
        this.A = null;
        this.o = new Gi(function(a) {
            var c = a[1];
            a = a[2];
            var f = c[0] - this.A[0],
            c = c[1] - this.A[1];
            return 65536 * Math.log(a) + Math.sqrt(f * f + c * c) / a
        }.bind(this),
        function(a) {
            return a[0].gb()
        });
        this.H = function() {
            if (!this.o.Qa()) {
                Ki(this.o);
                var a = Hi(this.o);
                Dn(this, a[0], a[3], a[4])
            }
            return ! 1
        }.bind(this);
        this.j = 0;
        Gn(this)
    }
    y(Fn, Bi);
    function Dn(a, c, d, e) {
        var f = a.f,
        g = c.gb();
        if (Rf(a.a, g)) a = a.a.get(g),
        f.bindTexture(3553, a.qb),
        9729 != a.Pg && (f.texParameteri(3553, 10240, 9729), a.Pg = 9729),
        9729 != a.Rg && (f.texParameteri(3553, 10240, 9729), a.Rg = 9729);
        else {
            var h = f.createTexture();
            f.bindTexture(3553, h);
            if (0 < e) {
                var k = a.N.canvas,
                m = a.N;
                a.B !== d[0] || a.U !== d[1] ? (k.width = d[0], k.height = d[1], a.B = d[0], a.U = d[1]) : m.clearRect(0, 0, d[0], d[1]);
                m.drawImage(c.fb(), e, e, d[0], d[1], 0, 0, d[0], d[1]);
                f.texImage2D(3553, 0, 6408, 6408, 5121, k)
            } else f.texImage2D(3553, 0, 6408, 6408, 5121, c.fb());
            f.texParameteri(3553, 10240, 9729);
            f.texParameteri(3553, 10241, 9729);
            f.texParameteri(3553, 10242, 33071);
            f.texParameteri(3553, 10243, 33071);
            a.a.set(g, {
                qb: h,
                Pg: 9729,
                Rg: 9729
            })
        }
    }
    l = Fn.prototype;
    l.Re = function(a) {
        return a instanceof Wj ? new wn(this, a) : a instanceof Xj ? new Cn(this, a) : a instanceof G ? new En(this, a) : null
    };
    function Hn(a, c, d) {
        var e = a.i;
        if (Gb(e, c)) {
            a = a.c;
            var f = d.viewState;
            e.b(new fi(c, e, new pn(a, f.center, f.resolution, f.rotation, d.size, d.extent), d, null, a))
        }
    }
    l.fa = function() {
        var a = this.f;
        a.isContextLost() || this.a.forEach(function(c) {
            c && a.deleteTexture(c.qb)
        });
        Bb(this.c);
        Fn.ia.fa.call(this)
    };
    l.wj = function(a, c) {
        for (var d = this.f,
        e; 1024 < this.a.tc() - this.j;) {
            if (e = this.a.b.kc) d.deleteTexture(e.qb);
            else if ( + this.a.b.$d == c.index) break;
            else--this.j;
            this.a.pop()
        }
    };
    l.X = function() {
        return "webgl"
    };
    l.Bm = function(a) {
        a.preventDefault();
        this.a.clear();
        this.j = 0;
        a = this.g;
        for (var c in a) a[c].uf()
    };
    l.Cm = function() {
        Gn(this);
        this.i.render()
    };
    function Gn(a) {
        a = a.f;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }
    l.xe = function(a) {
        var c = this.c,
        d = this.f;
        if (d.isContextLost()) return ! 1;
        if (!a) return this.l && (If(this.b, !1), this.l = !1),
        !1;
        this.A = a.focus;
        this.a.set(( - a.index).toString(), null); ++this.j;
        Hn(this, "precompose", a);
        var e = [],
        f = a.layerStatesArray;
        cb(f);
        var g = a.viewState.resolution,
        h, k, m, n;
        h = 0;
        for (k = f.length; h < k; ++h) n = f[h],
        hi(n, g) && "ready" == n.D && (m = Ei(this, n.layer), m.vf(a, n, c) && e.push(n));
        f = a.size[0] * a.pixelRatio;
        g = a.size[1] * a.pixelRatio;
        if (this.b.width != f || this.b.height != g) this.b.width = f,
        this.b.height = g;
        d.bindFramebuffer(36160, null);
        d.clearColor(0, 0, 0, 0);
        d.clear(16384);
        d.enable(3042);
        d.viewport(0, 0, this.b.width, this.b.height);
        h = 0;
        for (k = e.length; h < k; ++h) n = e[h],
        m = Ei(this, n.layer),
        m.oh(a, n, c);
        this.l || (If(this.b, !0), this.l = !0);
        Ci(a);
        1024 < this.a.tc() - this.j && a.postRenderFunctions.push(this.wj.bind(this));
        this.o.Qa() || (a.postRenderFunctions.push(this.H), a.animate = !0);
        Hn(this, "postcompose", a);
        Fi(this, a);
        a.postRenderFunctions.push(Di)
    };
    l.sf = function(a, c, d, e, f, g) {
        var h;
        if (this.f.isContextLost()) return ! 1;
        var k = c.viewState,
        m = c.layerStatesArray,
        n;
        for (n = m.length - 1; 0 <= n; --n) {
            h = m[n];
            var p = h.layer;
            if (hi(h, k.resolution) && f.call(g, p) && (h = Ei(this, p).ib(a, c, d, e))) return h
        }
    };
    l.lh = function(a, c, d, e) {
        var f = !1;
        if (this.f.isContextLost()) return ! 1;
        var g = c.viewState,
        h = c.layerStatesArray,
        k;
        for (k = h.length - 1; 0 <= k; --k) {
            var m = h[k],
            n = m.layer;
            if (hi(m, g.resolution) && d.call(e, n) && (f = Ei(this, n).he(a, c))) return ! 0
        }
        return f
    };
    l.kh = function(a, c, d, e, f) {
        if (this.f.isContextLost()) return ! 1;
        var g = c.viewState,
        h, k = c.layerStatesArray,
        m;
        for (m = k.length - 1; 0 <= m; --m) {
            h = k[m];
            var n = h.layer;
            if (hi(h, g.resolution) && f.call(e, n) && (h = Ei(this, n).zc(a, c, d, e))) return h
        }
    };
    var In = ["canvas", "webgl", "dom"];
    function R(a) {
        Kb.call(this);
        var c = Jn(a);
        this.mc = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating: !1;
        this.Uc = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting: !1;
        this.Ie = void 0 !== a.pixelRatio ? a.pixelRatio: ah;
        this.He = c.logos;
        this.xa = function() {
            this.i = void 0;
            this.xo.call(this, Date.now())
        }.bind(this);
        this.sb = cc();
        this.Je = cc();
        this.lc = 0;
        this.f = null;
        this.Ua = oc();
        this.H = this.S = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (fh ? " ol-touch": "");
        this.a.style.position = "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.B = document.createElement("DIV");
        this.B.className = "ol-overlaycontainer";
        this.a.appendChild(this.B);
        this.A = document.createElement("DIV");
        this.A.className = "ol-overlaycontainer-stopevent";
        a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", Zh, "mousewheel", "wheel"];
        for (var d = 0,
        e = a.length; d < e; ++d) C(this.A, a[d], Db);
        this.a.appendChild(this.A);
        this.na = new Rh(this);
        for (var f in bi) C(this.na, bi[f], this.Ig, this);
        this.ya = c.keyboardEventTarget;
        this.s = null;
        C(this.a, "wheel", this.Ic, this);
        C(this.a, "mousewheel", this.Ic, this);
        this.o = c.controls;
        this.j = c.interactions;
        this.l = c.overlays;
        this.wf = {};
        this.N = new c.zo(this.a, this);
        this.T = null;
        this.D = [];
        this.ta = [];
        this.oa = new Li(this.qk.bind(this), this.Wk.bind(this));
        this.Y = {};
        C(this, Mb("layergroup"), this.Ck, this);
        C(this, Mb("view"), this.Xk, this);
        C(this, Mb("size"), this.Tk, this);
        C(this, Mb("target"), this.Vk, this);
        this.C(c.values);
        this.o.forEach(function(a) {
            a.setMap(this)
        },
        this);
        C(this.o, "add",
        function(a) {
            a.element.setMap(this)
        },
        this);
        C(this.o, "remove",
        function(a) {
            a.element.setMap(null)
        },
        this);
        this.j.forEach(function(a) {
            a.setMap(this)
        },
        this);
        C(this.j, "add",
        function(a) {
            a.element.setMap(this)
        },
        this);
        C(this.j, "remove",
        function(a) {
            a.element.setMap(null)
        },
        this);
        this.l.forEach(this.fg, this);
        C(this.l, "add",
        function(a) {
            this.fg(a.element)
        },
        this);
        C(this.l, "remove",
        function(a) {
            var c = a.element.Wa();
            void 0 !== c && delete this.wf[c.toString()];
            a.element.setMap(null)
        },
        this)
    }
    y(R, Kb);
    l = R.prototype;
    l.lj = function(a) {
        this.o.push(a)
    };
    l.mj = function(a) {
        this.j.push(a)
    };
    l.dg = function(a) {
        this.uc().Nc().push(a)
    };
    l.eg = function(a) {
        this.l.push(a)
    };
    l.fg = function(a) {
        var c = a.Wa();
        void 0 !== c && (this.wf[c.toString()] = a);
        a.setMap(this)
    };
    l.Va = function(a) {
        this.render();
        Array.prototype.push.apply(this.D, arguments)
    };
    l.fa = function() {
        Bb(this.na);
        Bb(this.N);
        yb(this.a, "wheel", this.Ic, this);
        yb(this.a, "mousewheel", this.Ic, this);
        void 0 !== this.c && (aa.removeEventListener("resize", this.c, !1), this.c = void 0);
        this.i && (aa.cancelAnimationFrame(this.i), this.i = void 0);
        this.Yg(null);
        R.ia.fa.call(this)
    };
    l.fd = function(a, c, d, e, f) {
        if (this.f) return a = this.Oa(a),
        this.N.sf(a, this.f, c, void 0 !== d ? d: null, void 0 !== e ? e: Tc, void 0 !== f ? f: null)
    };
    l.Hl = function(a, c, d, e, f) {
        if (this.f) return this.N.kh(a, this.f, c, void 0 !== d ? d: null, void 0 !== e ? e: Tc, void 0 !== f ? f: null)
    };
    l.Zk = function(a, c, d) {
        if (!this.f) return ! 1;
        a = this.Oa(a);
        return this.N.lh(a, this.f, void 0 !== c ? c: Tc, void 0 !== d ? d: null)
    };
    l.Lj = function(a) {
        return this.Oa(this.Od(a))
    };
    l.Od = function(a) {
        var c = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - c.left, a.clientY - c.top]
    };
    l.mf = function() {
        return this.get("target")
    };
    l.vc = function() {
        var a = this.mf();
        return void 0 !== a ? sf(a) : null
    };
    l.Oa = function(a) {
        var c = this.f;
        return c ? (a = a.slice(), mi(c.pixelToCoordinateMatrix, a, a)) : null
    };
    l.Jj = function() {
        return this.o
    };
    l.ck = function() {
        return this.l
    };
    l.bk = function(a) {
        a = this.wf[a.toString()];
        return void 0 !== a ? a: null
    };
    l.Qj = function() {
        return this.j
    };
    l.uc = function() {
        return this.get("layergroup")
    };
    l.Xg = function() {
        return this.uc().Nc()
    };
    l.Ga = function(a) {
        var c = this.f;
        return c ? (a = a.slice(0, 2), mi(c.coordinateToPixelMatrix, a, a)) : null
    };
    l.ab = function() {
        return this.get("size")
    };
    l.aa = function() {
        return this.get("view")
    };
    l.sk = function() {
        return this.a
    };
    l.qk = function(a, c, d, e) {
        var f = this.f;
        if (! (f && c in f.wantedTiles && f.wantedTiles[c][a.ja.toString()])) return Infinity;
        a = d[0] - f.focus[0];
        d = d[1] - f.focus[1];
        return 65536 * Math.log(e) + Math.sqrt(a * a + d * d) / e
    };
    l.Ic = function(a, c) {
        var d = new Ph(c || a.type, this, a);
        this.Ig(d)
    };
    l.Ig = function(a) {
        if (this.f) {
            this.T = a.coordinate;
            a.frameState = this.f;
            var c = this.j.a,
            d;
            if (!1 !== this.b(a)) for (d = c.length - 1; 0 <= d; d--) {
                var e = c[d];
                if (e.f() && !e.handleEvent(a)) break
            }
        }
    };
    l.Rk = function() {
        var a = this.f,
        c = this.oa;
        if (!c.Qa()) {
            var d = 16,
            e = d;
            if (a) {
                var f = a.viewHints;
                f[0] && (d = this.mc ? 8 : 0, e = 2);
                f[1] && (d = this.Uc ? 8 : 0, e = 2)
            }
            c.i < d && (Ki(c), Mi(c, d, e))
        }
        c = this.ta;
        d = 0;
        for (e = c.length; d < e; ++d) c[d](this, a);
        c.length = 0
    };
    l.Tk = function() {
        this.render()
    };
    l.Vk = function() {
        var a;
        this.mf() && (a = this.vc());
        if (this.s) {
            for (var c = 0,
            d = this.s.length; c < d; ++c) sb(this.s[c]);
            this.s = null
        }
        a ? (a.appendChild(this.a), a = this.ya ? this.ya: a, this.s = [C(a, "keydown", this.Ic, this), C(a, "keypress", this.Ic, this)], this.c || (this.c = this.Rc.bind(this), aa.addEventListener("resize", this.c, !1))) : (Af(this.a), void 0 !== this.c && (aa.removeEventListener("resize", this.c, !1), this.c = void 0));
        this.Rc()
    };
    l.Wk = function() {
        this.render()
    };
    l.Yk = function() {
        this.render()
    };
    l.Xk = function() {
        this.S && (sb(this.S), this.S = null);
        var a = this.aa();
        a && (this.S = C(a, "propertychange", this.Yk, this));
        this.render()
    };
    l.Dk = function() {
        this.render()
    };
    l.Ek = function() {
        this.render()
    };
    l.Ck = function() {
        this.H && (this.H.forEach(sb), this.H = null);
        var a = this.uc();
        a && (this.H = [C(a, "propertychange", this.Ek, this), C(a, "change", this.Dk, this)]);
        this.render()
    };
    l.yo = function() {
        this.i && aa.cancelAnimationFrame(this.i);
        this.xa()
    };
    l.render = function() {
        void 0 === this.i && (this.i = aa.requestAnimationFrame(this.xa))
    };
    l.ro = function(a) {
        return this.o.remove(a)
    };
    l.so = function(a) {
        return this.j.remove(a)
    };
    l.uo = function(a) {
        return this.uc().Nc().remove(a)
    };
    l.vo = function(a) {
        return this.l.remove(a)
    };
    l.xo = function(a) {
        var c, d, e, f = this.ab(),
        g = this.aa(),
        h = null;
        if (void 0 !== f && 0 < f[0] && 0 < f[1] && g && ke(g)) {
            var h = g.f.slice(),
            k = this.uc().bf(),
            m = {};
            c = 0;
            for (d = k.length; c < d; ++c) m[x(k[c].layer)] = k[c];
            e = g.V();
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.sb,
                extent: null,
                focus: this.T ? this.T: e.center,
                index: this.lc++,
                layerStates: m,
                layerStatesArray: k,
                logos: mb({},
                this.He),
                pixelRatio: this.Ie,
                pixelToCoordinateMatrix: this.Je,
                postRenderFunctions: [],
                size: f,
                skippedFeatureUids: this.Y,
                tileQueue: this.oa,
                time: a,
                usedTiles: {},
                viewState: e,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (h) {
            a = this.D;
            c = f = 0;
            for (d = a.length; c < d; ++c) g = a[c],
            g(this, h) && (a[f++] = g);
            a.length = f;
            h.extent = Oc(e.center, e.resolution, e.rotation, h.size)
        }
        this.f = h;
        this.N.xe(h);
        h && (h.animate && this.render(), Array.prototype.push.apply(this.ta, h.postRenderFunctions), 0 !== this.D.length || h.viewHints[0] || h.viewHints[1] || Cc(h.extent, this.Ua) || (this.b(new Of("moveend", this, h)), rc(h.extent, this.Ua)));
        this.b(new Of("postrender", this, h));
        Ig(this.Rk, this)
    };
    l.bi = function(a) {
        this.set("layergroup", a)
    };
    l.Pf = function(a) {
        this.set("size", a)
    };
    l.Yg = function(a) {
        this.set("target", a)
    };
    l.Mo = function(a) {
        this.set("view", a)
    };
    l.ki = function(a) {
        a = x(a).toString();
        this.Y[a] = !0;
        this.render()
    };
    l.Rc = function() {
        var a = this.vc();
        if (a) {
            var c = rf(a),
            d = Ze && a.currentStyle,
            e;
            if (e = d) pf(c),
            e = !0;
            if (e && "auto" != d.width && "auto" != d.height && !d.boxSizing) c = Jf(a, d.width, "width", "pixelWidth"),
            a = Jf(a, d.height, "height", "pixelHeight"),
            a = new of(c, a);
            else {
                d = new of(a.offsetWidth, a.offsetHeight);
                c = Lf(a, "padding");
                if (!Ze || 9 <= Number(lf)) e = Ef(a, "borderLeftWidth"),
                f = Ef(a, "borderRightWidth"),
                g = Ef(a, "borderTopWidth"),
                a = Ef(a, "borderBottomWidth"),
                a = new Df(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(e));
                else {
                    e = Nf(a, "borderLeft");
                    var f = Nf(a, "borderRight"),
                    g = Nf(a, "borderTop"),
                    a = Nf(a, "borderBottom"),
                    a = new Df(g, f, a, e)
                }
                a = new of(d.width - a.left - c.left - c.right - a.right, d.height - a.top - c.top - c.bottom - a.bottom)
            }
            this.Pf([a.width, a.height])
        } else this.Pf(void 0)
    };
    l.mi = function(a) {
        a = x(a).toString();
        delete this.Y[a];
        this.render()
    };
    function Jn(a) {
        var c = null;
        void 0 !== a.keyboardEventTarget && (c = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var d = {},
        e = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "http://openlayers.org/";
        else {
            var f = a.logo;
            "string" === typeof f ? e[f] = "": ja(f) && (e[f.src] = f.href)
        }
        f = a.layers instanceof Mj ? a.layers: new Mj({
            layers: a.layers
        });
        d.layergroup = f;
        d.target = a.target;
        d.view = void 0 !== a.view ? a.view: new ge;
        var f = Bi,
        g;
        void 0 !== a.renderer ? Array.isArray(a.renderer) ? g = a.renderer: "string" === typeof a.renderer && (g = [a.renderer]) : g = In;
        var h, k;
        h = 0;
        for (k = g.length; h < k; ++h) {
            var m = g[h];
            if ("canvas" == m) {
                if (ch) {
                    f = Bm;
                    break
                }
            } else if ("dom" == m) {
                f = Jm;
                break
            } else if ("webgl" == m && Wg) {
                f = Fn;
                break
            }
        }
        var n;
        void 0 !== a.controls ? n = Array.isArray(a.controls) ? new De(a.controls.slice()) : a.controls: n = yg();
        var p;
        void 0 !== a.interactions ? p = Array.isArray(a.interactions) ? new De(a.interactions.slice()) : a.interactions: p = Lj();
        a = void 0 !== a.overlays ? Array.isArray(a.overlays) ? new De(a.overlays.slice()) : a.overlays: new De;
        return {
            controls: n,
            interactions: p,
            keyboardEventTarget: c,
            logos: e,
            overlays: a,
            zo: f,
            values: d
        }
    }
    Vj();
    function Kn(a) {
        Kb.call(this);
        this.l = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst: !0;
        this.s = void 0 !== a.stopEvent ? a.stopEvent: !0;
        this.f = document.createElement("DIV");
        this.f.className = "ol-overlay-container";
        this.f.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan: !1;
        this.i = void 0 !== a.autoPanAnimation ? a.autoPanAnimation: {};
        this.j = void 0 !== a.autoPanMargin ? a.autoPanMargin: 20;
        this.a = {
            Jd: "",
            ae: "",
            ye: "",
            ze: "",
            visible: !0
        };
        this.c = null;
        C(this, Mb("element"), this.yk, this);
        C(this, Mb("map"), this.Jk, this);
        C(this, Mb("offset"), this.Nk, this);
        C(this, Mb("position"), this.Pk, this);
        C(this, Mb("positioning"), this.Qk, this);
        void 0 !== a.element && this.Yh(a.element);
        this.di(void 0 !== a.offset ? a.offset: [0, 0]);
        this.gi(void 0 !== a.positioning ? a.positioning: "top-left");
        void 0 !== a.position && this.nf(a.position)
    }
    y(Kn, Kb);
    l = Kn.prototype;
    l.ce = function() {
        return this.get("element")
    };
    l.Wa = function() {
        return this.l
    };
    l.de = function() {
        return this.get("map")
    };
    l.Dg = function() {
        return this.get("offset")
    };
    l.Zg = function() {
        return this.get("position")
    };
    l.Eg = function() {
        return this.get("positioning")
    };
    l.yk = function() {
        yf(this.f);
        var a = this.ce();
        a && this.f.appendChild(a)
    };
    l.Jk = function() {
        this.c && (Af(this.f), sb(this.c), this.c = null);
        var a = this.de();
        a && (this.c = C(a, "postrender", this.render, this), Ln(this), a = this.s ? a.A: a.B, this.o ? zf(a, this.f, 0) : a.appendChild(this.f))
    };
    l.render = function() {
        Ln(this)
    };
    l.Nk = function() {
        Ln(this)
    };
    l.Pk = function() {
        Ln(this);
        if (void 0 !== this.get("position") && this.autoPan) {
            var a = this.de();
            if (void 0 !== a && a.vc()) {
                var c = Mn(a.vc(), a.ab()),
                d = this.ce(),
                e = d.offsetWidth,
                f = d.currentStyle || aa.getComputedStyle(d),
                e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)),
                f = d.offsetHeight,
                g = d.currentStyle || aa.getComputedStyle(d),
                f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)),
                h = Mn(d, [e, f]),
                d = this.j;
                wc(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d: 0 > f && (c[0] = Math.abs(f) + d), 0 > g ? c[1] = g - d: 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = a.aa().bb(), e = a.Ga(d), c = [e[0] + c[0], e[1] + c[1]], this.i && (this.i.source = d, a.Va(re(this.i))), a.aa().lb(a.Oa(c)))
            }
        }
    };
    l.Qk = function() {
        Ln(this)
    };
    l.Yh = function(a) {
        this.set("element", a)
    };
    l.setMap = function(a) {
        this.set("map", a)
    };
    l.di = function(a) {
        this.set("offset", a)
    };
    l.nf = function(a) {
        this.set("position", a)
    };
    function Mn(a, c) {
        var d = rf(a),
        e = new nf(0, 0),
        f;
        f = d ? rf(d) : document;
        var g; (g = !Ze || 9 <= Number(lf)) || (pf(f), g = !0);
        a != (g ? f.documentElement: f.body) && (f = Ff(a), g = pf(d).b, d = g.scrollingElement ? g.scrollingElement: bf ? g.body || g.documentElement: g.documentElement, g = g.parentWindow || g.defaultView, d = Ze && jf("10") && g.pageYOffset != d.scrollTop ? new nf(d.scrollLeft, d.scrollTop) : new nf(g.pageXOffset || d.scrollLeft, g.pageYOffset || d.scrollTop), e.x = f.left + d.x, e.y = f.top + d.y);
        return [e.x, e.y, e.x + c[0], e.y + c[1]]
    }
    l.gi = function(a) {
        this.set("positioning", a)
    };
    function Nn(a, c) {
        a.a.visible !== c && (If(a.f, c), a.a.visible = c)
    }
    function Ln(a) {
        var c = a.de(),
        d = a.Zg();
        if (void 0 !== c && c.f && void 0 !== d) {
            var d = c.Ga(d),
            e = c.ab(),
            c = a.f.style,
            f = a.Dg(),
            g = a.Eg(),
            h = f[0],
            f = f[1];
            if ("bottom-right" == g || "center-right" == g || "top-right" == g)"" !== a.a.ae && (a.a.ae = c.left = ""),
            h = Math.round(e[0] - d[0] - h) + "px",
            a.a.ye != h && (a.a.ye = c.right = h);
            else {
                "" !== a.a.ye && (a.a.ye = c.right = "");
                if ("bottom-center" == g || "center-center" == g || "top-center" == g) h -= Gf(a.f).width / 2;
                h = Math.round(d[0] + h) + "px";
                a.a.ae != h && (a.a.ae = c.left = h)
            }
            if ("bottom-left" == g || "bottom-center" == g || "bottom-right" == g)"" !== a.a.ze && (a.a.ze = c.top = ""),
            d = Math.round(e[1] - d[1] - f) + "px",
            a.a.Jd != d && (a.a.Jd = c.bottom = d);
            else {
                "" !== a.a.Jd && (a.a.Jd = c.bottom = "");
                if ("center-left" == g || "center-center" == g || "center-right" == g) f -= Gf(a.f).height / 2;
                d = Math.round(d[1] + f) + "px";
                a.a.ze != d && (a.a.ze = c.top = d)
            }
            Nn(a, !0)
        } else Nn(a, !1)
    };
    function On(a) {
        a = a ? a: {};
        this.j = void 0 !== a.collapsed ? a.collapsed: !0;
        this.o = void 0 !== a.collapsible ? a.collapsible: !0;
        this.o || (this.j = !1);
        var c = void 0 !== a.className ? a.className: "ol-overviewmap",
        d = void 0 !== a.tipLabel ? a.tipLabel: "Overview map",
        e = void 0 !== a.collapseLabel ? a.collapseLabel: "\u00ab";
        this.A = "string" === typeof e ? vf("SPAN", {},
        e) : e;
        e = void 0 !== a.label ? a.label: "\u00bb";
        this.B = "string" === typeof e ? vf("SPAN", {},
        e) : e;
        d = vf("BUTTON", {
            type: "button",
            title: d
        },
        this.o && !this.j ? this.A: this.B);
        C(d, "click", this.Sl, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-map";
        var f = this.f = new R({
            controls: new De,
            interactions: new De,
            target: e,
            view: a.view
        });
        a.layers && a.layers.forEach(function(a) {
            f.dg(a)
        },
        this);
        var g = document.createElement("DIV");
        g.className = "ol-overviewmap-box";
        g.style.boxSizing = "border-box";
        this.l = new Kn({
            position: [0, 0],
            positioning: "bottom-left",
            element: g
        });
        this.f.eg(this.l);
        c = vf("DIV", c + " ol-unselectable ol-control" + (this.j && this.o ? " ol-collapsed": "") + (this.o ? "": " ol-uncollapsible"), e, d);
        Pf.call(this, {
            element: c,
            render: a.render ? a.render: Pn,
            target: a.target
        })
    }
    y(On, Pf);
    l = On.prototype;
    l.setMap = function(a) {
        var c = this.a;
        a !== c && (c && (c = c.aa()) && yb(c, Mb("rotation"), this.Xd, this), On.ia.setMap.call(this, a), a && (this.s.push(C(a, "propertychange", this.Kk, this)), 0 === this.f.Xg().Zb() && this.f.bi(a.uc()), a = a.aa())) && (C(a, Mb("rotation"), this.Xd, this), ke(a) && (this.f.Rc(), Qn(this)))
    };
    l.Kk = function(a) {
        "view" === a.key && ((a = a.oldValue) && yb(a, Mb("rotation"), this.Xd, this), a = this.a.aa(), C(a, Mb("rotation"), this.Xd, this))
    };
    l.Xd = function() {
        this.f.aa().ee(this.a.aa().Ma())
    };
    function Pn() {
        var a = this.a,
        c = this.f;
        if (a.f && c.f) {
            var d = a.ab(),
            a = a.aa().Gc(d),
            e = c.ab(),
            d = c.aa().Gc(e),
            f = c.Ga(Ic(a)),
            g = c.Ga(Gc(a)),
            c = Math.abs(f[0] - g[0]),
            f = Math.abs(f[1] - g[1]),
            g = e[0],
            e = e[1];
            c < .1 * g || f < .1 * e || c > .75 * g || f > .75 * e ? Qn(this) : wc(d, a) || (a = this.f, d = this.a.aa(), a.aa().lb(d.bb()))
        }
        Rn(this)
    }
    function Qn(a) {
        var c = a.a;
        a = a.f;
        var d = c.ab(),
        c = c.aa().Gc(d),
        d = a.ab();
        a = a.aa();
        Rc(c, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.Xe(c, d)
    }
    function Rn(a) {
        var c = a.a,
        d = a.f;
        if (c.f && d.f) {
            var e = c.ab(),
            f = c.aa(),
            g = d.aa();
            d.ab();
            var d = f.Ma(),
            c = a.l,
            h = a.l.ce(),
            f = f.Gc(e),
            e = g.$(),
            g = Fc(f),
            f = Hc(f),
            k;
            if (a = a.a.aa().bb()) k = [g[0] - a[0], g[1] - a[1]],
            Wb(k, d),
            Rb(k, a);
            c.nf(k);
            h && (h.style.width = Math.abs((g[0] - f[0]) / e) + "px", h.style.height = Math.abs((f[1] - g[1]) / e) + "px")
        }
    }
    l.Sl = function(a) {
        a.preventDefault();
        Sn(this)
    };
    function Sn(a) {
        a.element.classList.toggle("ol-collapsed");
        a.j ? Bf(a.A, a.B) : Bf(a.B, a.A);
        a.j = !a.j;
        var c = a.f;
        a.j || c.f || (c.Rc(), Qn(a), xb(c, "postrender",
        function() {
            Rn(this)
        },
        a))
    }
    l.Rl = function() {
        return this.o
    };
    l.Ul = function(a) {
        this.o !== a && (this.o = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.j && Sn(this))
    };
    l.Tl = function(a) {
        this.o && this.j !== a && Sn(this)
    };
    l.Ql = function() {
        return this.j
    };
    l.dk = function() {
        return this.f
    };
    function Tn(a) {
        a = a ? a: {};
        var c = void 0 !== a.className ? a.className: "ol-scale-line";
        this.o = document.createElement("DIV");
        this.o.className = c + "-inner";
        this.f = document.createElement("DIV");
        this.f.className = c + " ol-unselectable";
        this.f.appendChild(this.o);
        this.A = null;
        this.l = void 0 !== a.minWidth ? a.minWidth: 64;
        this.j = !1;
        this.H = void 0;
        this.B = "";
        Pf.call(this, {
            element: this.f,
            render: a.render ? a.render: Un,
            target: a.target
        });
        C(this, Mb("units"), this.T, this);
        this.D(a.units || "metric")
    }
    y(Tn, Pf);
    var Vn = [1, 2, 5];
    Tn.prototype.N = function() {
        return this.get("units")
    };
    function Un(a) { (a = a.frameState) ? this.A = a.viewState: this.A = null;
        Wn(this)
    }
    Tn.prototype.T = function() {
        Wn(this)
    };
    Tn.prototype.D = function(a) {
        this.set("units", a)
    };
    function Wn(a) {
        var c = a.A;
        if (c) {
            var d = c.projection,
            e = d.Xb(),
            c = d.getPointResolution(c.resolution, c.center) * e,
            e = a.l * c,
            d = "",
            f = a.N();
            "degrees" == f ? (d = Xc.degrees, c /= d, e < d / 60 ? (d = "\u2033", c *= 3600) : e < d ? (d = "\u2032", c *= 60) : d = "\u00b0") : "imperial" == f ? .9144 > e ? (d = "in", c /= .0254) : 1609.344 > e ? (d = "ft", c /= .3048) : (d = "mi", c /= 1609.344) : "nautical" == f ? (c /= 1852, d = "nm") : "metric" == f ? 1 > e ? (d = "mm", c *= 1E3) : 1E3 > e ? d = "m": (d = "km", c /= 1E3) : "us" == f && (.9144 > e ? (d = "in", c *= 39.37) : 1609.344 > e ? (d = "ft", c /= .30480061) : (d = "mi", c /= 1609.3472));
            for (var f = 3 * Math.floor(Math.log(a.l * c) / Math.log(10)), g;;) {
                g = Vn[(f % 3 + 3) % 3] * Math.pow(10, Math.floor(f / 3));
                e = Math.round(g / c);
                if (isNaN(e)) {
                    If(a.f, !1);
                    a.j = !1;
                    return
                }
                if (e >= a.l) break; ++f
            }
            c = g + " " + d;
            a.B != c && (a.o.innerHTML = c, a.B = c);
            a.H != e && (a.o.style.width = e + "px", a.H = e);
            a.j || (If(a.f, !0), a.j = !0)
        } else a.j && (If(a.f, !1), a.j = !1)
    };
    function Xn(a) {
        a = a ? a: {};
        this.f = void 0;
        this.j = Yn;
        this.A = [];
        this.N = this.l = 0;
        this.T = null;
        this.xa = !1;
        this.Y = void 0 !== a.duration ? a.duration: 200;
        var c = void 0 !== a.className ? a.className: "ol-zoomslider",
        d = vf("BUTTON", {
            type: "button",
            "class": c + "-thumb ol-unselectable"
        }),
        c = vf("DIV", [c, "ol-unselectable", "ol-control"], d);
        this.o = new Jh(c);
        C(this.o, th, this.xk, this);
        C(this.o, uh, this.Gg, this);
        C(this.o, vh, this.Hg, this);
        C(c, "click", this.wk, this);
        C(d, "click", Db);
        Pf.call(this, {
            element: c,
            render: a.render ? a.render: Zn
        })
    }
    y(Xn, Pf);
    Xn.prototype.fa = function() {
        Bb(this.o);
        Xn.ia.fa.call(this)
    };
    var Yn = 0;
    l = Xn.prototype;
    l.setMap = function(a) {
        Xn.ia.setMap.call(this, a);
        a && a.render()
    };
    function Zn(a) {
        if (a.frameState) {
            if (!this.xa) {
                var c = this.element,
                d = Gf(c),
                e = c.firstElementChild,
                c = Lf(e, "margin"),
                f = new of(e.offsetWidth, e.offsetHeight),
                e = f.width + c.right + c.left,
                c = f.height + c.top + c.bottom;
                this.T = [e, c];
                d.width > d.height ? (this.j = 1, this.N = d.width - e) : (this.j = Yn, this.l = d.height - c);
                this.xa = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.f && (this.f = a, $n(this, a))
        }
    }
    l.wk = function(a) {
        var c = this.a,
        d = c.aa(),
        e = d.$();
        c.Va(te({
            resolution: e,
            duration: this.Y,
            easing: ne
        }));
        a = ao(this, La(1 === this.j ? (a.offsetX - this.T[0] / 2) / this.N: (a.offsetY - this.T[1] / 2) / this.l, 0, 1));
        d.Sb(d.constrainResolution(a))
    };
    l.xk = function(a) {
        if (!this.B && a.b.target === this.element.firstElementChild && (le(this.a.aa(), 1), this.H = a.clientX, this.D = a.clientY, this.B = !0, 0 === this.A.length)) {
            a = this.Gg;
            var c = this.Hg;
            this.A.push(C(document, "mousemove", a, this), C(document, "touchmove", a, this), C(document, uh, a, this), C(document, "mouseup", c, this), C(document, "touchend", c, this), C(document, vh, c, this))
        }
    };
    l.Gg = function(a) {
        if (this.B) {
            var c = this.element.firstElementChild;
            this.f = ao(this, La(1 === this.j ? (a.clientX - this.H + parseInt(c.style.left, 10)) / this.N: (a.clientY - this.D + parseInt(c.style.top, 10)) / this.l, 0, 1));
            this.a.aa().Sb(this.f);
            $n(this, this.f);
            this.H = a.clientX;
            this.D = a.clientY
        }
    };
    l.Hg = function() {
        if (this.B) {
            var a = this.a,
            c = a.aa();
            le(c, -1);
            a.Va(te({
                resolution: this.f,
                duration: this.Y,
                easing: ne
            }));
            a = c.constrainResolution(this.f);
            c.Sb(a);
            this.B = !1;
            this.D = this.H = void 0;
            this.A.forEach(sb);
            this.A.length = 0
        }
    };
    function $n(a, c) {
        var d;
        d = 1 - je(a.a.aa())(c);
        var e = a.element.firstElementChild;
        1 == a.j ? e.style.left = a.N * d + "px": e.style.top = a.l * d + "px"
    }
    function ao(a, c) {
        return ie(a.a.aa())(1 - c)
    };
    function bo(a) {
        a = a ? a: {};
        this.f = a.extent ? a.extent: null;
        var c = void 0 !== a.className ? a.className: "ol-zoom-extent",
        d = vf("BUTTON", {
            type: "button",
            title: void 0 !== a.tipLabel ? a.tipLabel: "Fit to extent"
        },
        void 0 !== a.label ? a.label: "E");
        C(d, "click", this.j, this);
        c = vf("DIV", c + " ol-unselectable ol-control", d);
        Pf.call(this, {
            element: c,
            target: a.target
        })
    }
    y(bo, Pf);
    bo.prototype.j = function(a) {
        a.preventDefault();
        var c = this.a;
        a = c.aa();
        var d = this.f ? this.f: a.i.G(),
        c = c.ab();
        a.Xe(d, c)
    };
    function co(a) {
        Kb.call(this);
        a = a ? a: {};
        this.a = null;
        C(this, Mb("tracking"), this.wl, this);
        this.kf(void 0 !== a.tracking ? a.tracking: !1)
    }
    y(co, Kb);
    l = co.prototype;
    l.fa = function() {
        this.kf(!1);
        co.ia.fa.call(this)
    };
    l.Gn = function(a) {
        if (null !== a.alpha) {
            var c = Pa(a.alpha);
            this.set("alpha", c);
            "boolean" === typeof a.absolute && a.absolute ? this.set("heading", c) : ha(a.webkitCompassHeading) && -1 != a.webkitCompassAccuracy && this.set("heading", Pa(a.webkitCompassHeading))
        }
        null !== a.beta && this.set("beta", Pa(a.beta));
        null !== a.gamma && this.set("gamma", Pa(a.gamma));
        this.u()
    };
    l.Ej = function() {
        return this.get("alpha")
    };
    l.Hj = function() {
        return this.get("beta")
    };
    l.Nj = function() {
        return this.get("gamma")
    };
    l.vl = function() {
        return this.get("heading")
    };
    l.Tg = function() {
        return this.get("tracking")
    };
    l.wl = function() {
        if (dh) {
            var a = this.Tg();
            a && !this.a ? this.a = C(aa, "deviceorientation", this.Gn, this) : a || null === this.a || (sb(this.a), this.a = null)
        }
    };
    l.kf = function(a) {
        this.set("tracking", a)
    };
    function eo() {
        this.defaultDataProjection = null
    }
    function fo(a, c, d) {
        var e;
        d && (e = {
            dataProjection: d.dataProjection ? d.dataProjection: a.Sa(c),
            featureProjection: d.featureProjection
        });
        return go(a, e)
    }
    function go(a, c) {
        var d;
        c && (d = {
            featureProjection: c.featureProjection,
            dataProjection: c.dataProjection ? c.dataProjection: a.defaultDataProjection,
            rightHanded: c.rightHanded
        },
        c.decimals && (d.decimals = c.decimals));
        return d
    }
    function ho(a, c, d) {
        var e = d ? ad(d.featureProjection) : null,
        f = d ? ad(d.dataProjection) : null,
        g;
        e && f && !qd(e, f) ? a instanceof vd ? g = (c ? a.clone() : a).hb(c ? e: f, c ? f: e) : g = ud(c ? a.slice() : a, c ? e: f, c ? f: e) : g = a;
        if (c && d && d.decimals) {
            var h = Math.pow(10, d.decimals);
            a = function(a) {
                for (var c = 0,
                d = a.length; c < d; ++c) a[c] = Math.round(a[c] * h) / h;
                return a
            };
            Array.isArray(g) ? a(g) : g.oc(a)
        }
        return g
    };
    function io() {
        this.defaultDataProjection = null
    }
    y(io, eo);
    function jo(a) {
        return ja(a) ? a: "string" === typeof a ? (a = JSON.parse(a)) ? a: null: null
    }
    l = io.prototype;
    l.X = function() {
        return "json"
    };
    l.Pb = function(a, c) {
        return this.Oc(jo(a), fo(this, a, c))
    };
    l.Ea = function(a, c) {
        return this.Df(jo(a), fo(this, a, c))
    };
    l.Pc = function(a, c) {
        return this.Kh(jo(a), fo(this, a, c))
    };
    l.Sa = function(a) {
        return this.Rh(jo(a))
    };
    l.Ad = function(a, c) {
        return JSON.stringify(this.Sc(a, c))
    };
    l.Ub = function(a, c) {
        return JSON.stringify(this.Ce(a, c))
    };
    l.Tc = function(a, c) {
        return JSON.stringify(this.Ee(a, c))
    };
    function ko(a, c, d, e, f, g) {
        var h = NaN,
        k = NaN,
        m = (d - c) / e;
        if (0 !== m) if (1 == m) h = a[c],
        k = a[c + 1];
        else if (2 == m) h = (1 - f) * a[c] + f * a[c + e],
        k = (1 - f) * a[c + 1] + f * a[c + e + 1];
        else {
            var k = a[c],
            m = a[c + 1],
            n = 0,
            h = [0],
            p;
            for (p = c + e; p < d; p += e) {
                var q = a[p],
                r = a[p + 1],
                n = n + Math.sqrt((q - k) * (q - k) + (r - m) * (r - m));
                h.push(n);
                k = q;
                m = r
            }
            d = f * n;
            m = 0;
            n = h.length;
            for (p = !1; m < n;) f = m + (n - m >> 1),
            k = +Va(h[f], d),
            0 > k ? m = f + 1 : (n = f, p = !k);
            f = p ? m: ~m;
            0 > f ? (d = (d - h[ - f - 2]) / (h[ - f - 1] - h[ - f - 2]), c += ( - f - 2) * e, h = Ra(a[c], a[c + e], d), k = Ra(a[c + 1], a[c + e + 1], d)) : (h = a[c + f * e], k = a[c + f * e + 1])
        }
        return g ? (g[0] = h, g[1] = k, g) : [h, k]
    }
    function lo(a, c, d, e, f, g) {
        if (d == c) return null;
        if (f < a[c + e - 1]) return g ? (d = a.slice(c, c + e), d[e - 1] = f, d) : null;
        if (a[d - 1] < f) return g ? (d = a.slice(d - e, d), d[e - 1] = f, d) : null;
        if (f == a[c + e - 1]) return a.slice(c, c + e);
        c /= e;
        for (d /= e; c < d;) g = c + d >> 1,
        f < a[(g + 1) * e - 1] ? d = g: c = g + 1;
        d = a[c * e - 1];
        if (f == d) return a.slice((c - 1) * e, (c - 1) * e + e);
        g = (f - d) / (a[(c + 1) * e - 1] - d);
        d = [];
        var h;
        for (h = 0; h < e - 1; ++h) d.push(Ra(a[(c - 1) * e + h], a[c * e + h], g));
        d.push(f);
        return d
    }
    function mo(a, c, d, e, f, g) {
        var h = 0;
        if (g) return lo(a, h, c[c.length - 1], d, e, f);
        if (e < a[d - 1]) return f ? (a = a.slice(0, d), a[d - 1] = e, a) : null;
        if (a[a.length - 1] < e) return f ? (a = a.slice(a.length - d), a[d - 1] = e, a) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var k = c[f];
            if (h != k) {
                if (e < a[h + d - 1]) break;
                if (e <= a[k - 1]) return lo(a, h, k, d, e, !1);
                h = k
            }
        }
        return null
    };
    function S(a, c) {
        xd.call(this);
        this.i = null;
        this.N = this.H = this.l = -1;
        this.ma(a, c)
    }
    y(S, xd);
    l = S.prototype;
    l.nj = function(a) {
        this.v ? Za(this.v, a) : this.v = a.slice();
        this.u()
    };
    l.clone = function() {
        var a = new S(null);
        a.ba(this.f, this.v.slice());
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        this.N != this.g && (this.H = Math.sqrt(Ed(this.v, 0, this.v.length, this.a, 0)), this.N = this.g);
        return Gd(this.v, 0, this.v.length, this.a, this.H, !1, a, c, d, e)
    };
    l.Bj = function(a, c) {
        return Vd(this.v, 0, this.v.length, this.a, a, c)
    };
    l.Xl = function(a, c) {
        return "XYM" != this.f && "XYZM" != this.f ? null: lo(this.v, 0, this.v.length, this.a, a, void 0 !== c ? c: !1)
    };
    l.Z = function() {
        return Ld(this.v, 0, this.v.length, this.a)
    };
    l.tg = function(a, c) {
        return ko(this.v, 0, this.v.length, this.a, a, c)
    };
    l.Yl = function() {
        var a = this.v,
        c = this.a,
        d = a[0],
        e = a[1],
        f = 0,
        g;
        for (g = 0 + c; g < this.v.length; g += c) var h = a[g],
        k = a[g + 1],
        f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)),
        d = h,
        e = k;
        return f
    };
    function zk(a) {
        a.l != a.g && (a.i = a.tg(.5, a.i), a.l = a.g);
        return a.i
    }
    l.Hc = function(a) {
        var c = [];
        c.length = Nd(this.v, 0, this.v.length, this.a, a, c, 0);
        a = new S(null);
        a.ba("XY", c);
        return a
    };
    l.X = function() {
        return "LineString"
    };
    l.Ka = function(a) {
        return Wd(this.v, 0, this.v.length, this.a, a)
    };
    l.ma = function(a, c) {
        a ? (Ad(this, c, a, 1), this.v || (this.v = []), this.v.length = Jd(this.v, 0, a, this.a), this.u()) : this.ba("XY", null)
    };
    l.ba = function(a, c) {
        zd(this, a, c);
        this.u()
    };
    function T(a, c) {
        xd.call(this);
        this.i = [];
        this.l = this.N = -1;
        this.ma(a, c)
    }
    y(T, xd);
    l = T.prototype;
    l.oj = function(a) {
        this.v ? Za(this.v, a.ga().slice()) : this.v = a.ga().slice();
        this.i.push(this.v.length);
        this.u()
    };
    l.clone = function() {
        var a = new T(null);
        a.ba(this.f, this.v.slice(), this.i.slice());
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        this.l != this.g && (this.N = Math.sqrt(Fd(this.v, 0, this.i, this.a, 0)), this.l = this.g);
        return Hd(this.v, 0, this.i, this.a, this.N, !1, a, c, d, e)
    };
    l.$l = function(a, c, d) {
        return "XYM" != this.f && "XYZM" != this.f || 0 === this.v.length ? null: mo(this.v, this.i, this.a, a, void 0 !== c ? c: !1, void 0 !== d ? d: !1)
    };
    l.Z = function() {
        return Md(this.v, 0, this.i, this.a)
    };
    l.Bb = function() {
        return this.i
    };
    l.Vj = function(a) {
        if (0 > a || this.i.length <= a) return null;
        var c = new S(null);
        c.ba(this.f, this.v.slice(0 === a ? 0 : this.i[a - 1], this.i[a]));
        return c
    };
    l.jd = function() {
        var a = this.v,
        c = this.i,
        d = this.f,
        e = [],
        f = 0,
        g,
        h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g],
            m = new S(null);
            m.ba(d, a.slice(f, k));
            e.push(m);
            f = k
        }
        return e
    };
    function Ak(a) {
        var c = [],
        d = a.v,
        e = 0,
        f = a.i;
        a = a.a;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var k = f[g],
            e = ko(d, e, k, a, .5);
            Za(c, e);
            e = k
        }
        return c
    }
    l.Hc = function(a) {
        var c = [],
        d = [],
        e = this.v,
        f = this.i,
        g = this.a,
        h = 0,
        k = 0,
        m,
        n;
        m = 0;
        for (n = f.length; m < n; ++m) {
            var p = f[m],
            k = Nd(e, h, p, g, a, c, k);
            d.push(k);
            h = p
        }
        c.length = k;
        a = new T(null);
        a.ba("XY", c, d);
        return a
    };
    l.X = function() {
        return "MultiLineString"
    };
    l.Ka = function(a) {
        a: {
            var c = this.v,
            d = this.i,
            e = this.a,
            f = 0,
            g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                if (Wd(c, f, d[g], e, a)) {
                    a = !0;
                    break a
                }
                f = d[g]
            }
            a = !1
        }
        return a
    };
    l.ma = function(a, c) {
        if (a) {
            Ad(this, c, a, 2);
            this.v || (this.v = []);
            var d = Kd(this.v, 0, a, this.a, this.i);
            this.v.length = 0 === d.length ? 0 : d[d.length - 1];
            this.u()
        } else this.ba("XY", null, this.i)
    };
    l.ba = function(a, c, d) {
        zd(this, a, c);
        this.i = d;
        this.u()
    };
    function no(a, c) {
        var d = a.f,
        e = [],
        f = [],
        g,
        h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g];
            0 === g && (d = k.f);
            Za(e, k.ga());
            f.push(e.length)
        }
        a.ba(d, e, f)
    };
    function oo(a, c) {
        xd.call(this);
        this.ma(a, c)
    }
    y(oo, xd);
    l = oo.prototype;
    l.qj = function(a) {
        this.v ? Za(this.v, a.ga()) : this.v = a.ga().slice();
        this.u()
    };
    l.clone = function() {
        var a = new oo(null);
        a.ba(this.f, this.v.slice());
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        var f = this.v,
        g = this.a,
        h, k, m;
        h = 0;
        for (k = f.length; h < k; h += g) if (m = Oa(a, c, f[h], f[h + 1]), m < e) {
            e = m;
            for (m = 0; m < g; ++m) d[m] = f[h + m];
            d.length = g
        }
        return e
    };
    l.Z = function() {
        return Ld(this.v, 0, this.v.length, this.a)
    };
    l.fk = function(a) {
        var c = this.v ? this.v.length / this.a: 0;
        if (0 > a || c <= a) return null;
        c = new E(null);
        c.ba(this.f, this.v.slice(a * this.a, (a + 1) * this.a));
        return c
    };
    l.fe = function() {
        var a = this.v,
        c = this.f,
        d = this.a,
        e = [],
        f,
        g;
        f = 0;
        for (g = a.length; f < g; f += d) {
            var h = new E(null);
            h.ba(c, a.slice(f, f + d));
            e.push(h)
        }
        return e
    };
    l.X = function() {
        return "MultiPoint"
    };
    l.Ka = function(a) {
        var c = this.v,
        d = this.a,
        e, f, g, h;
        e = 0;
        for (f = c.length; e < f; e += d) if (g = c[e], h = c[e + 1], vc(a, g, h)) return ! 0;
        return ! 1
    };
    l.ma = function(a, c) {
        a ? (Ad(this, c, a, 1), this.v || (this.v = []), this.v.length = Jd(this.v, 0, a, this.a), this.u()) : this.ba("XY", null)
    };
    l.ba = function(a, c) {
        zd(this, a, c);
        this.u()
    };
    function po(a, c) {
        xd.call(this);
        this.i = [];
        this.N = -1;
        this.H = null;
        this.T = this.D = this.S = -1;
        this.l = null;
        this.ma(a, c)
    }
    y(po, xd);
    l = po.prototype;
    l.rj = function(a) {
        if (this.v) {
            var c = this.v.length;
            Za(this.v, a.ga());
            a = a.Bb().slice();
            var d, e;
            d = 0;
            for (e = a.length; d < e; ++d) a[d] += c
        } else this.v = a.ga().slice(),
        a = a.Bb().slice(),
        this.i.push();
        this.i.push(a);
        this.u()
    };
    l.clone = function() {
        for (var a = new po(null), c = this.i.length, d = Array(c), e = 0; e < c; ++e) d[e] = this.i[e].slice();
        qo(a, this.f, this.v.slice(), d);
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        if (this.D != this.g) {
            var f = this.i,
            g = 0,
            h = 0,
            k, m;
            k = 0;
            for (m = f.length; k < m; ++k) var n = f[k],
            h = Fd(this.v, g, n, this.a, h),
            g = n[n.length - 1];
            this.S = Math.sqrt(h);
            this.D = this.g
        }
        f = Bk(this);
        g = this.i;
        h = this.a;
        k = this.S;
        m = 0;
        var n = [NaN, NaN],
        p,
        q;
        p = 0;
        for (q = g.length; p < q; ++p) {
            var r = g[p];
            e = Hd(f, m, r, h, k, !0, a, c, d, e, n);
            m = r[r.length - 1]
        }
        return e
    };
    l.yc = function(a, c) {
        var d;
        a: {
            d = Bk(this);
            var e = this.i,
            f = 0;
            if (0 !== e.length) {
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var k = e[g];
                    if (Td(d, f, k, this.a, a, c)) {
                        d = !0;
                        break a
                    }
                    f = k[k.length - 1]
                }
            }
            d = !1
        }
        return d
    };
    l.am = function() {
        var a = Bk(this),
        c = this.i,
        d = 0,
        e = 0,
        f,
        g;
        f = 0;
        for (g = c.length; f < g; ++f) var h = c[f],
        e = e + Cd(a, d, h, this.a),
        d = h[h.length - 1];
        return e
    };
    l.Z = function(a) {
        var c;
        void 0 !== a ? (c = Bk(this).slice(), ae(c, this.i, this.a, a)) : c = this.v;
        a = c;
        c = this.i;
        var d = this.a,
        e = 0,
        f = [],
        g = 0,
        h,
        k;
        h = 0;
        for (k = c.length; h < k; ++h) {
            var m = c[h];
            f[g++] = Md(a, e, m, d, f[g]);
            e = m[m.length - 1]
        }
        f.length = g;
        return f
    };
    function Ck(a) {
        if (a.N != a.g) {
            var c = a.v,
            d = a.i,
            e = a.a,
            f = 0,
            g = [],
            h,
            k,
            m = oc();
            h = 0;
            for (k = d.length; h < k; ++h) {
                var n = d[h],
                m = Ac(c, f, n[0], e);
                g.push((m[0] + m[2]) / 2, (m[1] + m[3]) / 2);
                f = n[n.length - 1]
            }
            c = Bk(a);
            d = a.i;
            e = a.a;
            f = 0;
            h = [];
            k = 0;
            for (m = d.length; k < m; ++k) n = d[k],
            h = Ud(c, f, n, e, g, 2 * k, h),
            f = n[n.length - 1];
            a.H = h;
            a.N = a.g
        }
        return a.H
    }
    l.Sj = function() {
        var a = new oo(null);
        a.ba("XY", Ck(this).slice());
        return a
    };
    function Bk(a) {
        if (a.T != a.g) {
            var c = a.v,
            d;
            a: {
                d = a.i;
                var e, f;
                e = 0;
                for (f = d.length; e < f; ++e) if (!Zd(c, d[e], a.a, void 0)) {
                    d = !1;
                    break a
                }
                d = !0
            }
            d ? a.l = c: (a.l = c.slice(), a.l.length = ae(a.l, a.i, a.a));
            a.T = a.g
        }
        return a.l
    }
    l.Hc = function(a) {
        var c = [],
        d = [],
        e = this.v,
        f = this.i,
        g = this.a;
        a = Math.sqrt(a);
        var h = 0,
        k = 0,
        m, n;
        m = 0;
        for (n = f.length; m < n; ++m) {
            var p = f[m],
            q = [],
            k = Od(e, h, p, g, a, c, k, q);
            d.push(q);
            h = p[p.length - 1]
        }
        c.length = k;
        e = new po(null);
        qo(e, "XY", c, d);
        return e
    };
    l.hk = function(a) {
        if (0 > a || this.i.length <= a) return null;
        var c;
        0 === a ? c = 0 : (c = this.i[a - 1], c = c[c.length - 1]);
        a = this.i[a].slice();
        var d = a[a.length - 1];
        if (0 !== c) {
            var e, f;
            e = 0;
            for (f = a.length; e < f; ++e) a[e] -= c
        }
        e = new F(null);
        e.ba(this.f, this.v.slice(c, d), a);
        return e
    };
    l.Rd = function() {
        var a = this.f,
        c = this.v,
        d = this.i,
        e = [],
        f = 0,
        g,
        h,
        k,
        m;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var n = d[g].slice(),
            p = n[n.length - 1];
            if (0 !== f) for (k = 0, m = n.length; k < m; ++k) n[k] -= f;
            k = new F(null);
            k.ba(a, c.slice(f, p), n);
            e.push(k);
            f = p
        }
        return e
    };
    l.X = function() {
        return "MultiPolygon"
    };
    l.Ka = function(a) {
        a: {
            var c = Bk(this),
            d = this.i,
            e = this.a,
            f = 0,
            g,
            h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var k = d[g];
                if (Xd(c, f, k, e, a)) {
                    a = !0;
                    break a
                }
                f = k[k.length - 1]
            }
            a = !1
        }
        return a
    };
    l.ma = function(a, c) {
        if (a) {
            Ad(this, c, a, 3);
            this.v || (this.v = []);
            var d = this.v,
            e = this.a,
            f = this.i,
            g = 0,
            f = f ? f: [],
            h = 0,
            k,
            m;
            k = 0;
            for (m = a.length; k < m; ++k) g = Kd(d, g, a[k], e, f[h]),
            f[h++] = g,
            g = g[g.length - 1];
            f.length = h;
            0 === f.length ? this.v.length = 0 : (d = f[f.length - 1], this.v.length = 0 === d.length ? 0 : d[d.length - 1]);
            this.u()
        } else qo(this, "XY", null, this.i)
    };
    function qo(a, c, d, e) {
        zd(a, c, d);
        a.i = e;
        a.u()
    }
    function ro(a, c) {
        var d = a.f,
        e = [],
        f = [],
        g,
        h,
        k;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var m = c[g];
            0 === g && (d = m.f);
            var n = e.length;
            k = m.Bb();
            var p, q;
            p = 0;
            for (q = k.length; p < q; ++p) k[p] += n;
            Za(e, m.ga());
            f.push(k)
        }
        qo(a, d, e, f)
    };
    function so(a) {
        a = a ? a: {};
        this.defaultDataProjection = null;
        this.b = a.geometryName
    }
    y(so, io);
    function to(a, c) {
        if (!a) return null;
        var d;
        if (ha(a.x) && ha(a.y)) d = "Point";
        else if (a.points) d = "MultiPoint";
        else if (a.paths) d = 1 === a.paths.length ? "LineString": "MultiLineString";
        else if (a.rings) {
            var e = a.rings,
            f = uo(a),
            g = [];
            d = [];
            var h, k;
            h = 0;
            for (k = e.length; h < k; ++h) {
                var m = Ya(e[h]);
                Yd(m, 0, m.length, f.length) ? g.push([e[h]]) : d.push(e[h])
            }
            for (; d.length;) {
                e = d.shift();
                f = !1;
                for (h = g.length - 1; 0 <= h; h--) if (wc((new Pd(g[h][0])).G(), (new Pd(e)).G())) {
                    g[h].push(e);
                    f = !0;
                    break
                }
                f || g.push([e.reverse()])
            }
            a = mb({},
            a);
            1 === g.length ? (d = "Polygon", a.rings = g[0]) : (d = "MultiPolygon", a.rings = g)
        }
        return ho((0, vo[d])(a), !1, c)
    }
    function uo(a) {
        var c = "XY"; ! 0 === a.hasZ && !0 === a.hasM ? c = "XYZM": !0 === a.hasZ ? c = "XYZ": !0 === a.hasM && (c = "XYM");
        return c
    }
    function wo(a) {
        a = a.f;
        return {
            hasZ: "XYZ" === a || "XYZM" === a,
            hasM: "XYM" === a || "XYZM" === a
        }
    }
    var vo = {
        Point: function(a) {
            return void 0 !== a.m && void 0 !== a.z ? new E([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new E([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new E([a.x, a.y, a.m], "XYM") : new E([a.x, a.y])
        },
        LineString: function(a) {
            return new S(a.paths[0], uo(a))
        },
        Polygon: function(a) {
            return new F(a.rings, uo(a))
        },
        MultiPoint: function(a) {
            return new oo(a.points, uo(a))
        },
        MultiLineString: function(a) {
            return new T(a.paths, uo(a))
        },
        MultiPolygon: function(a) {
            return new po(a.rings, uo(a))
        }
    },
    xo = {
        Point: function(a) {
            var c = a.Z();
            a = a.f;
            if ("XYZ" === a) return {
                x: c[0],
                y: c[1],
                z: c[2]
            };
            if ("XYM" === a) return {
                x: c[0],
                y: c[1],
                m: c[2]
            };
            if ("XYZM" === a) return {
                x: c[0],
                y: c[1],
                z: c[2],
                m: c[3]
            };
            if ("XY" === a) return {
                x: c[0],
                y: c[1]
            }
        },
        LineString: function(a) {
            var c = wo(a);
            return {
                hasZ: c.hasZ,
                hasM: c.hasM,
                paths: [a.Z()]
            }
        },
        Polygon: function(a) {
            var c = wo(a);
            return {
                hasZ: c.hasZ,
                hasM: c.hasM,
                rings: a.Z(!1)
            }
        },
        MultiPoint: function(a) {
            var c = wo(a);
            return {
                hasZ: c.hasZ,
                hasM: c.hasM,
                points: a.Z()
            }
        },
        MultiLineString: function(a) {
            var c = wo(a);
            return {
                hasZ: c.hasZ,
                hasM: c.hasM,
                paths: a.Z()
            }
        },
        MultiPolygon: function(a) {
            var c = wo(a);
            a = a.Z(!1);
            for (var d = [], e = 0; e < a.length; e++) for (var f = a[e].length - 1; 0 <= f; f--) d.push(a[e][f]);
            return {
                hasZ: c.hasZ,
                hasM: c.hasM,
                rings: d
            }
        }
    };
    l = so.prototype;
    l.Oc = function(a, c) {
        var d = to(a.geometry, c),
        e = new xl;
        this.b && e.Bc(this.b);
        e.Ra(d);
        c && c.ff && a.attributes[c.ff] && e.hc(a.attributes[c.ff]);
        a.attributes && e.C(a.attributes);
        return e
    };
    l.Df = function(a, c) {
        var d = c ? c: {};
        if (a.features) {
            var e = [],
            f = a.features,
            g,
            h;
            d.ff = a.objectIdFieldName;
            g = 0;
            for (h = f.length; g < h; ++g) e.push(this.Oc(f[g], d));
            return e
        }
        return [this.Oc(a, d)]
    };
    l.Kh = function(a, c) {
        return to(a, c)
    };
    l.Rh = function(a) {
        return a.spatialReference && a.spatialReference.wkid ? ad("EPSG:" + a.spatialReference.wkid) : null
    };
    function yo(a, c) {
        return (0, xo[a.X()])(ho(a, !0, c), c)
    }
    l.Ee = function(a, c) {
        return yo(a, go(this, c))
    };
    l.Sc = function(a, c) {
        c = go(this, c);
        var d = {},
        e = a.W();
        e && (d.geometry = yo(e, c));
        e = a.P();
        delete e[a.a];
        d.attributes = pb(e) ? {}: e;
        c && c.featureProjection && (d.spatialReference = {
            wkid: ad(c.featureProjection).kb.split(":").pop()
        });
        return d
    };
    l.Ce = function(a, c) {
        c = go(this, c);
        var d = [],
        e,
        f;
        e = 0;
        for (f = a.length; e < f; ++e) d.push(this.Sc(a[e], c));
        return {
            features: d
        }
    };
    function zo(a) {
        vd.call(this);
        this.c = a ? a: null;
        Ao(this)
    }
    y(zo, vd);
    function Bo(a) {
        var c = [],
        d,
        e;
        d = 0;
        for (e = a.length; d < e; ++d) c.push(a[d].clone());
        return c
    }
    function Co(a) {
        var c, d;
        if (a.c) for (c = 0, d = a.c.length; c < d; ++c) yb(a.c[c], "change", a.u, a)
    }
    function Ao(a) {
        var c, d;
        if (a.c) for (c = 0, d = a.c.length; c < d; ++c) C(a.c[c], "change", a.u, a)
    }
    l = zo.prototype;
    l.clone = function() {
        var a = new zo(null);
        a.$h(this.c);
        return a
    };
    l.ub = function(a, c, d, e) {
        if (e < sc(this.G(), a, c)) return e;
        var f = this.c,
        g, h;
        g = 0;
        for (h = f.length; g < h; ++g) e = f[g].ub(a, c, d, e);
        return e
    };
    l.yc = function(a, c) {
        var d = this.c,
        e, f;
        e = 0;
        for (f = d.length; e < f; ++e) if (d[e].yc(a, c)) return ! 0;
        return ! 1
    };
    l.Ld = function(a) {
        yc(Infinity, Infinity, -Infinity, -Infinity, a);
        for (var c = this.c,
        d = 0,
        e = c.length; d < e; ++d) Dc(a, c[d].G());
        return a
    };
    l.yg = function() {
        return Bo(this.c)
    };
    l.kd = function(a) {
        this.s != this.g && (nb(this.j), this.o = 0, this.s = this.g);
        if (0 > a || 0 !== this.o && a < this.o) return this;
        var c = a.toString();
        if (this.j.hasOwnProperty(c)) return this.j[c];
        var d = [],
        e = this.c,
        f = !1,
        g,
        h;
        g = 0;
        for (h = e.length; g < h; ++g) {
            var k = e[g],
            m = k.kd(a);
            d.push(m);
            m !== k && (f = !0)
        }
        if (f) return a = new zo(null),
        Co(a),
        a.c = d,
        Ao(a),
        a.u(),
        this.j[c] = a;
        this.o = a;
        return this
    };
    l.X = function() {
        return "GeometryCollection"
    };
    l.Ka = function(a) {
        var c = this.c,
        d, e;
        d = 0;
        for (e = c.length; d < e; ++d) if (c[d].Ka(a)) return ! 0;
        return ! 1
    };
    l.Qa = function() {
        return 0 === this.c.length
    };
    l.rotate = function(a, c) {
        for (var d = this.c,
        e = 0,
        f = d.length; e < f; ++e) d[e].rotate(a, c);
        this.u()
    };
    l.$h = function(a) {
        a = Bo(a);
        Co(this);
        this.c = a;
        Ao(this);
        this.u()
    };
    l.oc = function(a) {
        var c = this.c,
        d, e;
        d = 0;
        for (e = c.length; d < e; ++d) c[d].oc(a);
        this.u()
    };
    l.Mc = function(a, c) {
        var d = this.c,
        e, f;
        e = 0;
        for (f = d.length; e < f; ++e) d[e].Mc(a, c);
        this.u()
    };
    l.fa = function() {
        Co(this);
        zo.ia.fa.call(this)
    };
    function Do(a) {
        a = a ? a: {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ad(a.defaultDataProjection ? a.defaultDataProjection: "EPSG:4326");
        this.b = a.geometryName
    }
    y(Do, io);
    function Eo(a, c) {
        return a ? ho((0, Fo[a.type])(a), !1, c) : null
    }
    function Go(a, c) {
        return (0, Ho[a.X()])(ho(a, !0, c), c)
    }
    var Fo = {
        Point: function(a) {
            return new E(a.coordinates)
        },
        LineString: function(a) {
            return new S(a.coordinates)
        },
        Polygon: function(a) {
            return new F(a.coordinates)
        },
        MultiPoint: function(a) {
            return new oo(a.coordinates)
        },
        MultiLineString: function(a) {
            return new T(a.coordinates)
        },
        MultiPolygon: function(a) {
            return new po(a.coordinates)
        },
        GeometryCollection: function(a, c) {
            var d = a.geometries.map(function(a) {
                return Eo(a, c)
            });
            return new zo(d)
        }
    },
    Ho = {
        Point: function(a) {
            return {
                type: "Point",
                coordinates: a.Z()
            }
        },
        LineString: function(a) {
            return {
                type: "LineString",
                coordinates: a.Z()
            }
        },
        Polygon: function(a, c) {
            var d;
            c && (d = c.rightHanded);
            return {
                type: "Polygon",
                coordinates: a.Z(d)
            }
        },
        MultiPoint: function(a) {
            return {
                type: "MultiPoint",
                coordinates: a.Z()
            }
        },
        MultiLineString: function(a) {
            return {
                type: "MultiLineString",
                coordinates: a.Z()
            }
        },
        MultiPolygon: function(a, c) {
            var d;
            c && (d = c.rightHanded);
            return {
                type: "MultiPolygon",
                coordinates: a.Z(d)
            }
        },
        GeometryCollection: function(a, c) {
            return {
                type: "GeometryCollection",
                geometries: a.c.map(function(a) {
                    var e = mb({},
                    c);
                    delete e.featureProjection;
                    return Go(a, e)
                })
            }
        },
        Circle: function() {
            return {
                type: "GeometryCollection",
                geometries: []
            }
        }
    };
    l = Do.prototype;
    l.Oc = function(a, c) {
        var d = Eo(a.geometry, c),
        e = new xl;
        this.b && e.Bc(this.b);
        e.Ra(d);
        void 0 !== a.id && e.hc(a.id);
        a.properties && e.C(a.properties);
        return e
    };
    l.Df = function(a, c) {
        if ("Feature" == a.type) return [this.Oc(a, c)];
        if ("FeatureCollection" == a.type) {
            var d = [],
            e = a.features,
            f,
            g;
            f = 0;
            for (g = e.length; f < g; ++f) d.push(this.Oc(e[f], c));
            return d
        }
        return []
    };
    l.Kh = function(a, c) {
        return Eo(a, c)
    };
    l.Rh = function(a) {
        return (a = a.crs) ? "name" == a.type ? ad(a.properties.name) : "EPSG" == a.type ? ad("EPSG:" + a.properties.code) : null: this.defaultDataProjection
    };
    l.Sc = function(a, c) {
        c = go(this, c);
        var d = {
            type: "Feature"
        },
        e = a.Wa();
        void 0 !== e && (d.id = e); (e = a.W()) ? d.geometry = Go(e, c) : d.geometry = null;
        e = a.P();
        delete e[a.a];
        pb(e) ? d.properties = null: d.properties = e;
        return d
    };
    l.Ce = function(a, c) {
        c = go(this, c);
        var d = [],
        e,
        f;
        e = 0;
        for (f = a.length; e < f; ++e) d.push(this.Sc(a[e], c));
        return {
            type: "FeatureCollection",
            features: d
        }
    };
    l.Ee = function(a, c) {
        return Go(a, go(this, c))
    };
    function Io() {
        this.f = new XMLSerializer;
        this.defaultDataProjection = null
    }
    y(Io, eo);
    l = Io.prototype;
    l.X = function() {
        return "xml"
    };
    l.Pb = function(a, c) {
        if (El(a)) return Jo(this, a, c);
        if (Fl(a)) return this.Ih(a, c);
        if ("string" === typeof a) {
            var d = Gl(a);
            return Jo(this, d, c)
        }
        return null
    };
    function Jo(a, c, d) {
        a = Ko(a, c, d);
        return 0 < a.length ? a[0] : null
    }
    l.Ea = function(a, c) {
        if (El(a)) return Ko(this, a, c);
        if (Fl(a)) return this.gc(a, c);
        if ("string" === typeof a) {
            var d = Gl(a);
            return Ko(this, d, c)
        }
        return []
    };
    function Ko(a, c, d) {
        var e = [];
        for (c = c.firstChild; c; c = c.nextSibling) 1 == c.nodeType && Za(e, a.gc(c, d));
        return e
    }
    l.Pc = function(a, c) {
        if (El(a)) return this.A(a, c);
        if (Fl(a)) {
            var d = this.te(a, [fo(this, a, c ? c: {})]);
            return d ? d: null
        }
        return "string" === typeof a ? (d = Gl(a), this.A(d, c)) : null
    };
    l.Sa = function(a) {
        return El(a) ? this.Jf(a) : Fl(a) ? this.we(a) : "string" === typeof a ? (a = Gl(a), this.Jf(a)) : null
    };
    l.Jf = function() {
        return this.defaultDataProjection
    };
    l.we = function() {
        return this.defaultDataProjection
    };
    l.Ad = function(a, c) {
        var d = this.B(a, c);
        return this.f.serializeToString(d)
    };
    l.Ub = function(a, c) {
        var d = this.a(a, c);
        return this.f.serializeToString(d)
    };
    l.Tc = function(a, c) {
        var d = this.s(a, c);
        return this.f.serializeToString(d)
    };
    function Lo(a) {
        a = a ? a: {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Jl(Lo.prototype.sd),
            featureMembers: Jl(Lo.prototype.sd)
        };
        Io.call(this)
    }
    y(Lo, Io);
    var Mo = /^[\s\xa0]*$/;
    l = Lo.prototype;
    l.sd = function(a, c) {
        var d = a.localName,
        e;
        if ("FeatureCollection" == d)"http://www.opengis.net/wfs" === a.namespaceURI ? e = P([], this.b, a, c, this) : e = P(null, this.b, a, c, this);
        else if ("featureMembers" == d || "featureMember" == d) {
            var f = c[0],
            g = f.featureType;
            e = f.featureNS;
            var h, k;
            if (!g && a.childNodes) {
                g = [];
                e = {};
                h = 0;
                for (k = a.childNodes.length; h < k; ++h) {
                    var m = a.childNodes[h];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if ( - 1 === g.indexOf(n)) {
                            var p = "",
                            q = 0,
                            m = m.namespaceURI,
                            r;
                            for (r in e) {
                                if (e[r] === m) {
                                    p = r;
                                    break
                                }++q
                            }
                            p || (p = "p" + q, e[p] = m);
                            g.push(p + ":" + n)
                        }
                    }
                }
                f.featureType = g;
                f.featureNS = e
            }
            "string" === typeof e && (h = e, e = {},
            e.p0 = h);
            r = {};
            var g = Array.isArray(g) ? g: [g],
            t;
            for (t in e) {
                f = {};
                h = 0;
                for (k = g.length; h < k; ++h)( - 1 === g[h].indexOf(":") ? "p0": g[h].split(":")[0]) === t && (f[g[h].split(":").pop()] = "featureMembers" == d ? Il(this.Cf, this) : Jl(this.Cf, this));
                r[e[t]] = f
            }
            e = P([], r, a, c)
        }
        e || (e = []);
        return e
    };
    l.te = function(a, c) {
        var d = c[0];
        d.srsName = a.firstElementChild.getAttribute("srsName");
        var e = P(null, this.Vf, a, c, this);
        if (e) return ho(e, !1, d)
    };
    l.Cf = function(a, c) {
        var d, e; (e = a.getAttribute("fid")) || (e = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var f = {},
        g;
        for (d = a.firstElementChild; d; d = d.nextElementSibling) {
            var h = d.localName;
            if (0 === d.childNodes.length || 1 === d.childNodes.length && (3 === d.firstChild.nodeType || 4 === d.firstChild.nodeType)) {
                var k = Cl(d, !1);
                Mo.test(k) && (k = void 0);
                f[h] = k
            } else "boundedBy" !== h && (g = h),
            f[h] = this.te(d, c)
        }
        d = new xl(f);
        g && d.Bc(g);
        e && d.hc(e);
        return d
    };
    l.Qh = function(a, c) {
        var d = this.se(a, c);
        if (d) {
            var e = new E(null);
            e.ba("XYZ", d);
            return e
        }
    };
    l.Oh = function(a, c) {
        var d = P([], this.Li, a, c, this);
        if (d) return new oo(d)
    };
    l.Nh = function(a, c) {
        var d = P([], this.Ki, a, c, this);
        if (d) {
            var e = new T(null);
            no(e, d);
            return e
        }
    };
    l.Ph = function(a, c) {
        var d = P([], this.Mi, a, c, this);
        if (d) {
            var e = new po(null);
            ro(e, d);
            return e
        }
    };
    l.Fh = function(a, c) {
        Ql(this.Pi, a, c, this)
    };
    l.Ng = function(a, c) {
        Ql(this.Ii, a, c, this)
    };
    l.Gh = function(a, c) {
        Ql(this.Qi, a, c, this)
    };
    l.ue = function(a, c) {
        var d = this.se(a, c);
        if (d) {
            var e = new S(null);
            e.ba("XYZ", d);
            return e
        }
    };
    l.ao = function(a, c) {
        var d = P(null, this.Cd, a, c, this);
        if (d) return d
    };
    l.Mh = function(a, c) {
        var d = this.se(a, c);
        if (d) {
            var e = new Pd(null);
            Qd(e, "XYZ", d);
            return e
        }
    };
    l.ve = function(a, c) {
        var d = P([null], this.Ge, a, c, this);
        if (d && d[0]) {
            var e = new F(null),
            f = d[0],
            g = [f.length],
            h,
            k;
            h = 1;
            for (k = d.length; h < k; ++h) Za(f, d[h]),
            g.push(f.length);
            e.ba("XYZ", f, g);
            return e
        }
    };
    l.se = function(a, c) {
        return P(null, this.Cd, a, c, this)
    };
    l.Li = {
        "http://www.opengis.net/gml": {
            pointMember: Il(Lo.prototype.Fh),
            pointMembers: Il(Lo.prototype.Fh)
        }
    };
    l.Ki = {
        "http://www.opengis.net/gml": {
            lineStringMember: Il(Lo.prototype.Ng),
            lineStringMembers: Il(Lo.prototype.Ng)
        }
    };
    l.Mi = {
        "http://www.opengis.net/gml": {
            polygonMember: Il(Lo.prototype.Gh),
            polygonMembers: Il(Lo.prototype.Gh)
        }
    };
    l.Pi = {
        "http://www.opengis.net/gml": {
            Point: Il(Lo.prototype.se)
        }
    };
    l.Ii = {
        "http://www.opengis.net/gml": {
            LineString: Il(Lo.prototype.ue)
        }
    };
    l.Qi = {
        "http://www.opengis.net/gml": {
            Polygon: Il(Lo.prototype.ve)
        }
    };
    l.Dd = {
        "http://www.opengis.net/gml": {
            LinearRing: Jl(Lo.prototype.ao)
        }
    };
    l.gc = function(a, c) {
        var d = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        c && mb(d, fo(this, a, c));
        return this.sd(a, [d])
    };
    l.we = function(a) {
        return ad(this.srsName ? this.srsName: a.firstElementChild.getAttribute("srsName"))
    };
    function No(a) {
        a = Cl(a, !1);
        return Oo(a)
    }
    function Oo(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a)) return void 0 !== a[1] || !1
    }
    function Po(a) {
        a = Cl(a, !1);
        if (a = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)) {
            var c = Date.UTC(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10), parseInt(a[6], 10)) / 1E3;
            if ("Z" != a[7]) {
                var d = "-" == a[8] ? -1 : 1,
                c = c + 60 * d * parseInt(a[9], 10);
                void 0 !== a[10] && (c += 3600 * d * parseInt(a[10], 10))
            }
            return c
        }
    }
    function Qo(a) {
        a = Cl(a, !1);
        return Ro(a)
    }
    function Ro(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a)) return parseFloat(a[1])
    }
    function So(a) {
        a = Cl(a, !1);
        return To(a)
    }
    function To(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a)) return parseInt(a[1], 10)
    }
    function U(a) {
        return Cl(a, !1).trim()
    }
    function Uo(a, c) {
        Vo(a, c ? "1": "0")
    }
    function Wo(a, c) {
        a.appendChild(Al.createTextNode(c.toPrecision()))
    }
    function Xo(a, c) {
        a.appendChild(Al.createTextNode(c.toString()))
    }
    function Vo(a, c) {
        a.appendChild(Al.createTextNode(c))
    };
    function Yo(a) {
        a = a ? a: {};
        Lo.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Il(Lo.prototype.sd);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation: "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }
    y(Yo, Lo);
    l = Yo.prototype;
    l.Jh = function(a, c) {
        var d = Cl(a, !1).replace(/^\s*|\s*$/g, ""),
        e = c[0].srsName,
        f = a.parentNode.getAttribute("srsDimension"),
        g = "enu";
        e && (e = ad(e)) && (g = e.b);
        d = d.split(/[\s,]+/);
        e = 2;
        a.getAttribute("srsDimension") ? e = To(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? e = To(a.getAttribute("dimension")) : f && (e = To(f));
        for (var h, k, m = [], n = 0, p = d.length; n < p; n += e) f = parseFloat(d[n]),
        h = parseFloat(d[n + 1]),
        k = 3 === e ? parseFloat(d[n + 2]) : 0,
        "en" === g.substr(0, 2) ? m.push(f, h, k) : m.push(h, f, k);
        return m
    };
    l.Yn = function(a, c) {
        var d = P([null], this.Ei, a, c, this);
        return yc(d[1][0], d[1][1], d[1][3], d[1][4])
    };
    l.al = function(a, c) {
        var d = P(void 0, this.Dd, a, c, this);
        d && c[c.length - 1].push(d)
    };
    l.Hn = function(a, c) {
        var d = P(void 0, this.Dd, a, c, this);
        d && (c[c.length - 1][0] = d)
    };
    l.Cd = {
        "http://www.opengis.net/gml": {
            coordinates: Jl(Yo.prototype.Jh)
        }
    };
    l.Ge = {
        "http://www.opengis.net/gml": {
            innerBoundaryIs: Yo.prototype.al,
            outerBoundaryIs: Yo.prototype.Hn
        }
    };
    l.Ei = {
        "http://www.opengis.net/gml": {
            coordinates: Il(Yo.prototype.Jh)
        }
    };
    l.Vf = {
        "http://www.opengis.net/gml": {
            Point: Jl(Lo.prototype.Qh),
            MultiPoint: Jl(Lo.prototype.Oh),
            LineString: Jl(Lo.prototype.ue),
            MultiLineString: Jl(Lo.prototype.Nh),
            LinearRing: Jl(Lo.prototype.Mh),
            Polygon: Jl(Lo.prototype.ve),
            MultiPolygon: Jl(Lo.prototype.Ph),
            Box: Jl(Yo.prototype.Yn)
        }
    };
    function Zo(a) {
        a = a ? a: {};
        Lo.call(this, a);
        this.l = void 0 !== a.surface ? a.surface: !1;
        this.i = void 0 !== a.curve ? a.curve: !1;
        this.j = void 0 !== a.multiCurve ? a.multiCurve: !0;
        this.o = void 0 !== a.multiSurface ? a.multiSurface: !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation: "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }
    y(Zo, Lo);
    l = Zo.prototype;
    l.fo = function(a, c) {
        var d = P([], this.Ji, a, c, this);
        if (d) {
            var e = new T(null);
            no(e, d);
            return e
        }
    };
    l.ho = function(a, c) {
        var d = P([], this.Ni, a, c, this);
        if (d) {
            var e = new po(null);
            ro(e, d);
            return e
        }
    };
    l.og = function(a, c) {
        Ql(this.Fi, a, c, this)
    };
    l.li = function(a, c) {
        Ql(this.Ui, a, c, this)
    };
    l.ko = function(a, c) {
        return P([null], this.Oi, a, c, this)
    };
    l.mo = function(a, c) {
        return P([null], this.Ti, a, c, this)
    };
    l.lo = function(a, c) {
        return P([null], this.Ge, a, c, this)
    };
    l.eo = function(a, c) {
        return P([null], this.Cd, a, c, this)
    };
    l.cl = function(a, c) {
        var d = P(void 0, this.Dd, a, c, this);
        d && c[c.length - 1].push(d)
    };
    l.xj = function(a, c) {
        var d = P(void 0, this.Dd, a, c, this);
        d && (c[c.length - 1][0] = d)
    };
    l.Sh = function(a, c) {
        var d = P([null], this.Vi, a, c, this);
        if (d && d[0]) {
            var e = new F(null),
            f = d[0],
            g = [f.length],
            h,
            k;
            h = 1;
            for (k = d.length; h < k; ++h) Za(f, d[h]),
            g.push(f.length);
            e.ba("XYZ", f, g);
            return e
        }
    };
    l.Hh = function(a, c) {
        var d = P([null], this.Gi, a, c, this);
        if (d) {
            var e = new S(null);
            e.ba("XYZ", d);
            return e
        }
    };
    l.$n = function(a, c) {
        var d = P([null], this.Hi, a, c, this);
        return yc(d[1][0], d[1][1], d[2][0], d[2][1])
    };
    l.bo = function(a, c) {
        for (var d = Cl(a, !1), e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, f = [], g; g = e.exec(d);) f.push(parseFloat(g[1])),
        d = d.substr(g[0].length);
        if ("" === d) {
            d = c[0].srsName;
            e = "enu";
            d && (e = ad(d).b);
            if ("neu" === e) for (d = 0, e = f.length; d < e; d += 3) g = f[d],
            f[d] = f[d + 1],
            f[d + 1] = g;
            d = f.length;
            2 == d && f.push(0);
            return 0 === d ? void 0 : f
        }
    };
    l.Gf = function(a, c) {
        var d = Cl(a, !1).replace(/^\s*|\s*$/g, ""),
        e = c[0].srsName,
        f = a.parentNode.getAttribute("srsDimension"),
        g = "enu";
        e && (g = ad(e).b);
        d = d.split(/\s+/);
        e = 2;
        a.getAttribute("srsDimension") ? e = To(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? e = To(a.getAttribute("dimension")) : f && (e = To(f));
        for (var h, k, m = [], n = 0, p = d.length; n < p; n += e) f = parseFloat(d[n]),
        h = parseFloat(d[n + 1]),
        k = 3 === e ? parseFloat(d[n + 2]) : 0,
        "en" === g.substr(0, 2) ? m.push(f, h, k) : m.push(h, f, k);
        return m
    };
    l.Cd = {
        "http://www.opengis.net/gml": {
            pos: Jl(Zo.prototype.bo),
            posList: Jl(Zo.prototype.Gf)
        }
    };
    l.Ge = {
        "http://www.opengis.net/gml": {
            interior: Zo.prototype.cl,
            exterior: Zo.prototype.xj
        }
    };
    l.Vf = {
        "http://www.opengis.net/gml": {
            Point: Jl(Lo.prototype.Qh),
            MultiPoint: Jl(Lo.prototype.Oh),
            LineString: Jl(Lo.prototype.ue),
            MultiLineString: Jl(Lo.prototype.Nh),
            LinearRing: Jl(Lo.prototype.Mh),
            Polygon: Jl(Lo.prototype.ve),
            MultiPolygon: Jl(Lo.prototype.Ph),
            Surface: Jl(Zo.prototype.Sh),
            MultiSurface: Jl(Zo.prototype.ho),
            Curve: Jl(Zo.prototype.Hh),
            MultiCurve: Jl(Zo.prototype.fo),
            Envelope: Jl(Zo.prototype.$n)
        }
    };
    l.Ji = {
        "http://www.opengis.net/gml": {
            curveMember: Il(Zo.prototype.og),
            curveMembers: Il(Zo.prototype.og)
        }
    };
    l.Ni = {
        "http://www.opengis.net/gml": {
            surfaceMember: Il(Zo.prototype.li),
            surfaceMembers: Il(Zo.prototype.li)
        }
    };
    l.Fi = {
        "http://www.opengis.net/gml": {
            LineString: Il(Lo.prototype.ue),
            Curve: Il(Zo.prototype.Hh)
        }
    };
    l.Ui = {
        "http://www.opengis.net/gml": {
            Polygon: Il(Lo.prototype.ve),
            Surface: Il(Zo.prototype.Sh)
        }
    };
    l.Vi = {
        "http://www.opengis.net/gml": {
            patches: Jl(Zo.prototype.ko)
        }
    };
    l.Gi = {
        "http://www.opengis.net/gml": {
            segments: Jl(Zo.prototype.mo)
        }
    };
    l.Hi = {
        "http://www.opengis.net/gml": {
            lowerCorner: Il(Zo.prototype.Gf),
            upperCorner: Il(Zo.prototype.Gf)
        }
    };
    l.Oi = {
        "http://www.opengis.net/gml": {
            PolygonPatch: Jl(Zo.prototype.lo)
        }
    };
    l.Ti = {
        "http://www.opengis.net/gml": {
            LineStringSegment: Jl(Zo.prototype.eo)
        }
    };
    function $o(a, c, d) {
        d = d[d.length - 1].srsName;
        c = c.Z();
        for (var e = c.length,
        f = Array(e), g, h = 0; h < e; ++h) {
            g = c[h];
            var k = h,
            m = "enu";
            d && (m = ad(d).b);
            f[k] = "en" === m.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0]
        }
        Vo(a, f.join(" "))
    }
    l.Ai = function(a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        e = Bl(a.namespaceURI, "pos");
        a.appendChild(e);
        d = d[d.length - 1].srsName;
        a = "enu";
        d && (a = ad(d).b);
        c = c.Z();
        Vo(e, "en" === a.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0])
    };
    var ap = {
        "http://www.opengis.net/gml": {
            lowerCorner: N(Vo),
            upperCorner: N(Vo)
        }
    };
    l = Zo.prototype;
    l.Yo = function(a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        Rl({
            node: a
        },
        ap, Ol, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this)
    };
    l.xi = function(a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        e = Bl(a.namespaceURI, "posList");
        a.appendChild(e);
        $o(e, c, d)
    };
    l.Si = function(a, c) {
        var d = c[c.length - 1],
        e = d.node,
        f = d.exteriorWritten;
        void 0 === f && (d.exteriorWritten = !0);
        return Bl(e.namespaceURI, void 0 !== f ? "interior": "exterior")
    };
    l.Fe = function(a, c, d) {
        var e = d[d.length - 1].srsName;
        "PolygonPatch" !== a.nodeName && e && a.setAttribute("srsName", e);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (c = c.Qd(), Rl({
            node: a,
            srsName: e
        },
        bp, this.Si, c, d, void 0, this)) : "Surface" === a.nodeName && (e = Bl(a.namespaceURI, "patches"), a.appendChild(e), a = Bl(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.Fe(a, c, d))
    };
    l.Ae = function(a, c, d) {
        var e = d[d.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && e && a.setAttribute("srsName", e);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (e = Bl(a.namespaceURI, "posList"), a.appendChild(e), $o(e, c, d)) : "Curve" === a.nodeName && (e = Bl(a.namespaceURI, "segments"), a.appendChild(e), a = Bl(e.namespaceURI, "LineStringSegment"), e.appendChild(a), this.Ae(a, c, d))
    };
    l.zi = function(a, c, d) {
        var e = d[d.length - 1],
        f = e.srsName,
        e = e.surface;
        f && a.setAttribute("srsName", f);
        c = c.Rd();
        Rl({
            node: a,
            srsName: f,
            surface: e
        },
        cp, this.c, c, d, void 0, this)
    };
    l.Zo = function(a, c, d) {
        var e = d[d.length - 1].srsName;
        e && a.setAttribute("srsName", e);
        c = c.fe();
        Rl({
            node: a,
            srsName: e
        },
        dp, Ml("pointMember"), c, d, void 0, this)
    };
    l.yi = function(a, c, d) {
        var e = d[d.length - 1],
        f = e.srsName,
        e = e.curve;
        f && a.setAttribute("srsName", f);
        c = c.jd();
        Rl({
            node: a,
            srsName: f,
            curve: e
        },
        ep, this.c, c, d, void 0, this)
    };
    l.Bi = function(a, c, d) {
        var e = Bl(a.namespaceURI, "LinearRing");
        a.appendChild(e);
        this.xi(e, c, d)
    };
    l.Ci = function(a, c, d) {
        var e = this.g(c, d);
        e && (a.appendChild(e), this.Fe(e, c, d))
    };
    l.$o = function(a, c, d) {
        var e = Bl(a.namespaceURI, "Point");
        a.appendChild(e);
        this.Ai(e, c, d)
    };
    l.wi = function(a, c, d) {
        var e = this.g(c, d);
        e && (a.appendChild(e), this.Ae(e, c, d))
    };
    l.De = function(a, c, d) {
        var e = d[d.length - 1],
        f = mb({},
        e);
        f.node = a;
        var g;
        Array.isArray(c) ? e.dataProjection ? g = ud(c, e.featureProjection, e.dataProjection) : g = c: g = ho(c, !0, e);
        Rl(f, fp, this.g, [g], d, void 0, this)
    };
    l.si = function(a, c, d) {
        var e = c.Wa();
        e && a.setAttribute("fid", e);
        var e = d[d.length - 1],
        f = e.featureNS,
        g = c.a;
        e.Ac || (e.Ac = {},
        e.Ac[f] = {});
        var h = c.P();
        c = [];
        var k = [],
        m;
        for (m in h) {
            var n = h[m];
            null !== n && (c.push(m), k.push(n), m == g || n instanceof vd ? m in e.Ac[f] || (e.Ac[f][m] = N(this.De, this)) : m in e.Ac[f] || (e.Ac[f][m] = N(Vo)))
        }
        m = mb({},
        e);
        m.node = a;
        Rl(m, e.Ac, Ml(void 0, f), k, d, c)
    };
    var cp = {
        "http://www.opengis.net/gml": {
            surfaceMember: N(Zo.prototype.Ci),
            polygonMember: N(Zo.prototype.Ci)
        }
    },
    dp = {
        "http://www.opengis.net/gml": {
            pointMember: N(Zo.prototype.$o)
        }
    },
    ep = {
        "http://www.opengis.net/gml": {
            lineStringMember: N(Zo.prototype.wi),
            curveMember: N(Zo.prototype.wi)
        }
    },
    bp = {
        "http://www.opengis.net/gml": {
            exterior: N(Zo.prototype.Bi),
            interior: N(Zo.prototype.Bi)
        }
    },
    fp = {
        "http://www.opengis.net/gml": {
            Curve: N(Zo.prototype.Ae),
            MultiCurve: N(Zo.prototype.yi),
            Point: N(Zo.prototype.Ai),
            MultiPoint: N(Zo.prototype.Zo),
            LineString: N(Zo.prototype.Ae),
            MultiLineString: N(Zo.prototype.yi),
            LinearRing: N(Zo.prototype.xi),
            Polygon: N(Zo.prototype.Fe),
            MultiPolygon: N(Zo.prototype.zi),
            Surface: N(Zo.prototype.Fe),
            MultiSurface: N(Zo.prototype.zi),
            Envelope: N(Zo.prototype.Yo)
        }
    },
    gp = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    Zo.prototype.c = function(a, c) {
        return Bl("http://www.opengis.net/gml", gp[c[c.length - 1].node.nodeName])
    };
    Zo.prototype.g = function(a, c) {
        var d = c[c.length - 1],
        e = d.multiSurface,
        f = d.surface,
        g = d.curve,
        d = d.multiCurve,
        h;
        Array.isArray(a) ? h = "Envelope": (h = a.X(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface": "Polygon" === h && !0 === f ? h = "Surface": "LineString" === h && !0 === g ? h = "Curve": "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
        return Bl("http://www.opengis.net/gml", h)
    };
    Zo.prototype.s = function(a, c) {
        c = go(this, c);
        var d = Bl("http://www.opengis.net/gml", "geom"),
        e = {
            node: d,
            srsName: this.srsName,
            curve: this.i,
            surface: this.l,
            multiSurface: this.o,
            multiCurve: this.j
        };
        c && mb(e, c);
        this.De(d, a, [e]);
        return d
    };
    Zo.prototype.a = function(a, c) {
        c = go(this, c);
        var d = Bl("http://www.opengis.net/gml", "featureMembers");
        d.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var e = {
            srsName: this.srsName,
            curve: this.i,
            surface: this.l,
            multiSurface: this.o,
            multiCurve: this.j,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        c && mb(e, c);
        var e = [e],
        f = e[e.length - 1],
        g = f.featureType,
        h = f.featureNS,
        k = {};
        k[h] = {};
        k[h][g] = N(this.si, this);
        f = mb({},
        f);
        f.node = d;
        Rl(f, k, Ml(g, h), a, e);
        return d
    };
    function hp(a) {
        a = a ? a: {};
        Io.call(this);
        this.defaultDataProjection = ad("EPSG:4326");
        this.b = a.readExtensions
    }
    y(hp, Io);
    var ip = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];
    function jp(a, c, d) {
        a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (a.push(d.ele), delete d.ele) : a.push(0);
        "time" in d ? (a.push(d.time), delete d.time) : a.push(0);
        return a
    }
    function kp(a, c) {
        var d = c[c.length - 1],
        e = a.getAttribute("href");
        null !== e && (d.link = e);
        Ql(lp, a, c)
    }
    function mp(a, c) {
        c[c.length - 1].extensionsNode_ = a
    }
    function np(a, c) {
        var d = c[0],
        e = P({
            flatCoordinates: []
        },
        op, a, c);
        if (e) {
            var f = e.flatCoordinates;
            delete e.flatCoordinates;
            var g = new S(null);
            g.ba("XYZM", f);
            ho(g, !1, d);
            d = new xl(g);
            d.C(e);
            return d
        }
    }
    function pp(a, c) {
        var d = c[0],
        e = P({
            flatCoordinates: [],
            ends: []
        },
        qp, a, c);
        if (e) {
            var f = e.flatCoordinates;
            delete e.flatCoordinates;
            var g = e.ends;
            delete e.ends;
            var h = new T(null);
            h.ba("XYZM", f, g);
            ho(h, !1, d);
            d = new xl(h);
            d.C(e);
            return d
        }
    }
    function rp(a, c) {
        var d = c[0],
        e = P({},
        sp, a, c);
        if (e) {
            var f = jp([], a, e),
            f = new E(f, "XYZM");
            ho(f, !1, d);
            d = new xl(f);
            d.C(e);
            return d
        }
    }
    var tp = {
        rte: np,
        trk: pp,
        wpt: rp
    },
    up = O(ip, {
        rte: Il(np),
        trk: Il(pp),
        wpt: Il(rp)
    }),
    lp = O(ip, {
        text: L(U, "linkText"),
        type: L(U, "linkType")
    }),
    op = O(ip, {
        name: L(U),
        cmt: L(U),
        desc: L(U),
        src: L(U),
        link: kp,
        number: L(So),
        extensions: mp,
        type: L(U),
        rtept: function(a, c) {
            var d = P({},
            vp, a, c);
            d && jp(c[c.length - 1].flatCoordinates, a, d)
        }
    }),
    vp = O(ip, {
        ele: L(Qo),
        time: L(Po)
    }),
    qp = O(ip, {
        name: L(U),
        cmt: L(U),
        desc: L(U),
        src: L(U),
        link: kp,
        number: L(So),
        type: L(U),
        extensions: mp,
        trkseg: function(a, c) {
            var d = c[c.length - 1];
            Ql(wp, a, c);
            d.ends.push(d.flatCoordinates.length)
        }
    }),
    wp = O(ip, {
        trkpt: function(a, c) {
            var d = P({},
            xp, a, c);
            d && jp(c[c.length - 1].flatCoordinates, a, d)
        }
    }),
    xp = O(ip, {
        ele: L(Qo),
        time: L(Po)
    }),
    sp = O(ip, {
        ele: L(Qo),
        time: L(Po),
        magvar: L(Qo),
        geoidheight: L(Qo),
        name: L(U),
        cmt: L(U),
        desc: L(U),
        src: L(U),
        link: kp,
        sym: L(U),
        type: L(U),
        fix: L(U),
        sat: L(So),
        hdop: L(Qo),
        vdop: L(Qo),
        pdop: L(Qo),
        ageofdgpsdata: L(Qo),
        dgpsid: L(So),
        extensions: mp
    });
    function yp(a, c) {
        c || (c = []);
        for (var d = 0,
        e = c.length; d < e; ++d) {
            var f = c[d];
            if (a.b) {
                var g = f.get("extensionsNode_") || null;
                a.b(f, g)
            }
            f.set("extensionsNode_", void 0)
        }
    }
    hp.prototype.Ih = function(a, c) {
        if (!Wa(ip, a.namespaceURI)) return null;
        var d = tp[a.localName];
        if (!d) return null;
        d = d(a, [fo(this, a, c)]);
        if (!d) return null;
        yp(this, [d]);
        return d
    };
    hp.prototype.gc = function(a, c) {
        if (!Wa(ip, a.namespaceURI)) return [];
        if ("gpx" == a.localName) {
            var d = P([], up, a, [fo(this, a, c)]);
            if (d) return yp(this, d),
            d
        }
        return []
    };
    function zp(a, c, d) {
        a.setAttribute("href", c);
        c = d[d.length - 1].properties;
        Rl({
            node: a
        },
        Ap, Ol, [c.linkText, c.linkType], d, Bp)
    }
    function Cp(a, c, d) {
        var e = d[d.length - 1],
        f = e.node.namespaceURI,
        g = e.properties;
        a.setAttributeNS(null, "lat", c[1]);
        a.setAttributeNS(null, "lon", c[0]);
        switch (e.geometryLayout) {
        case "XYZM":
            0 !== c[3] && (g.time = c[3]);
        case "XYZ":
            0 !== c[2] && (g.ele = c[2]);
            break;
        case "XYM":
            0 !== c[2] && (g.time = c[2])
        }
        c = Dp[f];
        e = Pl(g, c);
        Rl({
            node: a,
            properties: g
        },
        Ep, Ol, e, d, c)
    }
    var Bp = ["text", "type"],
    Ap = O(ip, {
        text: N(Vo),
        type: N(Vo)
    }),
    Fp = O(ip, "name cmt desc src link number type rtept".split(" ")),
    Gp = O(ip, {
        name: N(Vo),
        cmt: N(Vo),
        desc: N(Vo),
        src: N(Vo),
        link: N(zp),
        number: N(Xo),
        type: N(Vo),
        rtept: Ll(N(Cp))
    }),
    Hp = O(ip, "name cmt desc src link number type trkseg".split(" ")),
    Kp = O(ip, {
        name: N(Vo),
        cmt: N(Vo),
        desc: N(Vo),
        src: N(Vo),
        link: N(zp),
        number: N(Xo),
        type: N(Vo),
        trkseg: Ll(N(function(a, c, d) {
            Rl({
                node: a,
                geometryLayout: c.f,
                properties: {}
            },
            Ip, Jp, c.Z(), d)
        }))
    }),
    Jp = Ml("trkpt"),
    Ip = O(ip, {
        trkpt: N(Cp)
    }),
    Dp = O(ip, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
    Ep = O(ip, {
        ele: N(Wo),
        time: N(function(a, c) {
            var d = new Date(1E3 * c),
            d = d.getUTCFullYear() + "-" + Ga(d.getUTCMonth() + 1) + "-" + Ga(d.getUTCDate()) + "T" + Ga(d.getUTCHours()) + ":" + Ga(d.getUTCMinutes()) + ":" + Ga(d.getUTCSeconds()) + "Z";
            a.appendChild(Al.createTextNode(d))
        }),
        magvar: N(Wo),
        geoidheight: N(Wo),
        name: N(Vo),
        cmt: N(Vo),
        desc: N(Vo),
        src: N(Vo),
        link: N(zp),
        sym: N(Vo),
        type: N(Vo),
        fix: N(Vo),
        sat: N(Xo),
        hdop: N(Wo),
        vdop: N(Wo),
        pdop: N(Wo),
        ageofdgpsdata: N(Wo),
        dgpsid: N(Xo)
    }),
    Lp = {
        Point: "wpt",
        LineString: "rte",
        MultiLineString: "trk"
    };
    function Mp(a, c) {
        var d = a.W();
        if (d && (d = Lp[d.X()])) return Bl(c[c.length - 1].node.namespaceURI, d)
    }
    var Np = O(ip, {
        rte: N(function(a, c, d) {
            var e = d[0],
            f = c.P();
            a = {
                node: a,
                properties: f
            };
            if (c = c.W()) c = ho(c, !0, e),
            a.geometryLayout = c.f,
            f.rtept = c.Z();
            e = Fp[d[d.length - 1].node.namespaceURI];
            f = Pl(f, e);
            Rl(a, Gp, Ol, f, d, e)
        }),
        trk: N(function(a, c, d) {
            var e = d[0],
            f = c.P();
            a = {
                node: a,
                properties: f
            };
            if (c = c.W()) c = ho(c, !0, e),
            f.trkseg = c.jd();
            e = Hp[d[d.length - 1].node.namespaceURI];
            f = Pl(f, e);
            Rl(a, Kp, Ol, f, d, e)
        }),
        wpt: N(function(a, c, d) {
            var e = d[0],
            f = d[d.length - 1];
            f.properties = c.P();
            if (c = c.W()) c = ho(c, !0, e),
            f.geometryLayout = c.f,
            Cp(a, c.Z(), d)
        })
    });
    hp.prototype.a = function(a, c) {
        c = go(this, c);
        var d = Bl("http://www.topografix.com/GPX/1/1", "gpx");
        Rl({
            node: d
        },
        Np, Mp, a, [c]);
        return d
    };
    function Op() {
        this.defaultDataProjection = null
    }
    y(Op, eo);
    function Pp(a) {
        return "string" === typeof a ? a: ""
    }
    l = Op.prototype;
    l.X = function() {
        return "text"
    };
    l.Pb = function(a, c) {
        return this.rd(Pp(a), go(this, c))
    };
    l.Ea = function(a, c) {
        return this.Ef(Pp(a), go(this, c))
    };
    l.Pc = function(a, c) {
        return this.td(Pp(a), go(this, c))
    };
    l.Sa = function(a) {
        Pp(a);
        return this.defaultDataProjection
    };
    l.Ad = function(a, c) {
        return this.Be(a, go(this, c))
    };
    l.Ub = function(a, c) {
        return this.ti(a, go(this, c))
    };
    l.Tc = function(a, c) {
        return this.Bd(a, go(this, c))
    };
    function Qp(a) {
        a = a ? a: {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ad("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode: "none"
    }
    y(Qp, Op);
    var Rp = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
    Sp = /^H.([A-Z]{3}).*?:(.*)/,
    Tp = /^HFDTE(\d{2})(\d{2})(\d{2})/,
    Up = /\r\n|\r|\n/;
    Qp.prototype.rd = function(a, c) {
        var d = this.b,
        e = a.split(Up),
        f = {},
        g = [],
        h = 2E3,
        k = 0,
        m = 1,
        n,
        p;
        n = 0;
        for (p = e.length; n < p; ++n) {
            var q = e[n],
            r;
            if ("B" == q.charAt(0)) {
                if (r = Rp.exec(q)) {
                    var q = parseInt(r[1], 10),
                    t = parseInt(r[2], 10),
                    v = parseInt(r[3], 10),
                    w = parseInt(r[4], 10) + parseInt(r[5], 10) / 6E4;
                    "S" == r[6] && (w = -w);
                    var A = parseInt(r[7], 10) + parseInt(r[8], 10) / 6E4;
                    "W" == r[9] && (A = -A);
                    g.push(A, w);
                    "none" != d && g.push("gps" == d ? parseInt(r[11], 10) : "barometric" == d ? parseInt(r[12], 10) : 0);
                    g.push(Date.UTC(h, k, m, q, t, v) / 1E3)
                }
            } else if ("H" == q.charAt(0)) if (r = Tp.exec(q)) m = parseInt(r[1], 10),
            k = parseInt(r[2], 10) - 1,
            h = 2E3 + parseInt(r[3], 10);
            else if (r = Sp.exec(q)) f[r[1]] = r[2].trim(),
            Tp.exec(q)
        }
        if (0 === g.length) return null;
        e = new S(null);
        e.ba("none" == d ? "XYM": "XYZM", g);
        d = new xl(ho(e, !1, c));
        d.C(f);
        return d
    };
    Qp.prototype.Ef = function(a, c) {
        var d = this.rd(a, c);
        return d ? [d] : []
    };
    function Vp(a, c) {
        this.a = {};
        this.b = [];
        this.g = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2) throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (a) {
            var f;
            if (a instanceof Vp) f = a.O(),
            e = a.wc();
            else {
                var d = [],
                g = 0;
                for (f in a) d[g++] = f;
                f = d;
                d = [];
                g = 0;
                for (e in a) d[g++] = a[e];
                e = d
            }
            for (d = 0; d < f.length; d++) this.set(f[d], e[d])
        }
    }
    l = Vp.prototype;
    l.tc = function() {
        return this.g
    };
    l.wc = function() {
        Wp(this);
        for (var a = [], c = 0; c < this.b.length; c++) a.push(this.a[this.b[c]]);
        return a
    };
    l.O = function() {
        Wp(this);
        return this.b.concat()
    };
    l.Qa = function() {
        return 0 == this.g
    };
    l.clear = function() {
        this.a = {};
        this.g = this.b.length = 0
    };
    l.remove = function(a) {
        return Xp(this.a, a) ? (delete this.a[a], this.g--, this.b.length > 2 * this.g && Wp(this), !0) : !1
    };
    function Wp(a) {
        if (a.g != a.b.length) {
            for (var c = 0,
            d = 0; c < a.b.length;) {
                var e = a.b[c];
                Xp(a.a, e) && (a.b[d++] = e);
                c++
            }
            a.b.length = d
        }
        if (a.g != a.b.length) {
            for (var f = {},
            d = c = 0; c < a.b.length;) e = a.b[c],
            Xp(f, e) || (a.b[d++] = e, f[e] = 1),
            c++;
            a.b.length = d
        }
    }
    l.get = function(a, c) {
        return Xp(this.a, a) ? this.a[a] : c
    };
    l.set = function(a, c) {
        Xp(this.a, a) || (this.g++, this.b.push(a));
        this.a[a] = c
    };
    l.forEach = function(a, c) {
        for (var d = this.O(), e = 0; e < d.length; e++) {
            var f = d[e],
            g = this.get(f);
            a.call(c, g, f, this)
        }
    };
    l.clone = function() {
        return new Vp(this)
    };
    function Xp(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    var Yp = /^(?:([^:/ ? #.] + ) : ) ? ( ? :\ / \ / ( ? :([ ^ /?#]*)@)?([^/# ? ] * ?)( ? ::([0 - 9] + )) ? ( ? =[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    function Zp(a, c) {
        if (a) for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].indexOf("="),
            g = null,
            h = null;
            0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
            c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
        }
    }
    function $p(a) {
        if (a[1]) {
            var c = a[0],
            d = c.indexOf("#");
            0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? a[1] = "?": d == c.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }
    function aq(a, c, d) {
        if ("array" == ea(c)) for (var e = 0; e < c.length; e++) aq(a, String(c[e]), d);
        else null != c && d.push("&", a, "" === c ? "": "=", encodeURIComponent(String(c)))
    }
    function bq(a, c) {
        for (var d in c) aq(d, c[d], a);
        return a
    };
    function cq(a, c) {
        this.a = this.j = this.g = "";
        this.o = null;
        this.f = this.b = "";
        this.c = !1;
        var d;
        a instanceof cq ? (this.c = ca(c) ? c: a.c, dq(this, a.g), this.j = a.j, this.a = a.a, eq(this, a.o), this.b = a.b, fq(this, a.i.clone()), this.f = a.f) : a && (d = String(a).match(Yp)) ? (this.c = !!c, dq(this, d[1] || "", !0), this.j = gq(d[2] || ""), this.a = gq(d[3] || "", !0), eq(this, d[4]), this.b = gq(d[5] || "", !0), fq(this, d[6] || "", !0), this.f = gq(d[7] || "")) : (this.c = !!c, this.i = new hq(null, 0, this.c))
    }
    cq.prototype.toString = function() {
        var a = [],
        c = this.g;
        c && a.push(iq(c, jq, !0), ":");
        var d = this.a;
        if (d || "file" == c) a.push("//"),
        (c = this.j) && a.push(iq(c, jq, !0), "@"),
        a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        d = this.o,
        null != d && a.push(":", String(d));
        if (d = this.b) this.a && "/" != d.charAt(0) && a.push("/"),
        a.push(iq(d, "/" == d.charAt(0) ? kq: lq, !0)); (d = this.i.toString()) && a.push("?", d); (d = this.f) && a.push("#", iq(d, mq));
        return a.join("")
    }; cq.prototype.clone = function() {
        return new cq(this)
    };
    function dq(a, c, d) {
        a.g = d ? gq(c, !0) : c;
        a.g && (a.g = a.g.replace(/:$/, ""))
    }
    function eq(a, c) {
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
            a.o = c
        } else a.o = null
    }
    function fq(a, c, d) {
        c instanceof hq ? (a.i = c, nq(a.i, a.c)) : (d || (c = iq(c, oq)), a.i = new hq(c, 0, a.c))
    }
    function pq(a) {
        return a instanceof cq ? a.clone() : new cq(a, void 0)
    }
    function qq(a, c) {
        a instanceof cq || (a = pq(a));
        c instanceof cq || (c = pq(c));
        var d = a,
        e = c,
        f = d.clone(),
        g = !!e.g;
        g ? dq(f, e.g) : g = !!e.j;
        g ? f.j = e.j: g = !!e.a;
        g ? f.a = e.a: g = null != e.o;
        var h = e.b;
        if (g) eq(f, e.o);
        else if (g = !!e.b) if ("/" != h.charAt(0) && (d.a && !d.b ? h = "/" + h: (d = f.b.lastIndexOf("/"), -1 != d && (h = f.b.substr(0, d + 1) + h))), d = h, ".." == d || "." == d) h = "";
        else if ( - 1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
            for (var h = 0 == d.lastIndexOf("/", 0), d = d.split("/"), k = [], m = 0; m < d.length;) {
                var n = d[m++];
                "." == n ? h && m == d.length && k.push("") : ".." == n ? ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), h && m == d.length && k.push("")) : (k.push(n), h = !0)
            }
            h = k.join("/")
        } else h = d;
        g ? f.b = h: g = "" !== e.i.toString();
        g ? fq(f, gq(e.i.toString())) : g = !!e.f;
        g && (f.f = e.f);
        return f
    }
    function gq(a, c) {
        return a ? c ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    function iq(a, c, d) {
        return ga(a) ? (a = encodeURI(a).replace(c, rq), d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }
    function rq(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var jq = /[#\/\?@]/g,
    lq = /[\#\?:]/g,
    kq = /[\#\?]/g,
    oq = /[\#\?@]/g,
    mq = /#/g;
    function hq(a, c, d) {
        this.a = this.b = null;
        this.g = a || null;
        this.f = !!d
    }
    function sq(a) {
        a.b || (a.b = new Vp, a.a = 0, a.g && Zp(a.g,
        function(c, d) {
            a.add(decodeURIComponent(c.replace(/\+/g, " ")), d)
        }))
    }
    l = hq.prototype; l.tc = function() {
        sq(this);
        return this.a
    }; l.add = function(a, c) {
        sq(this);
        this.g = null;
        a = tq(this, a);
        var d = this.b.get(a);
        d || this.b.set(a, d = []);
        d.push(c);
        this.a = this.a + 1;
        return this
    }; l.remove = function(a) {
        sq(this);
        a = tq(this, a);
        return Xp(this.b.a, a) ? (this.g = null, this.a = this.a - this.b.get(a).length, this.b.remove(a)) : !1
    }; l.clear = function() {
        this.b = this.g = null;
        this.a = 0
    }; l.Qa = function() {
        sq(this);
        return 0 == this.a
    };
    function uq(a, c) {
        sq(a);
        c = tq(a, c);
        return Xp(a.b.a, c)
    }
    l.O = function() {
        sq(this);
        for (var a = this.b.wc(), c = this.b.O(), d = [], e = 0; e < c.length; e++) for (var f = a[e], g = 0; g < f.length; g++) d.push(c[e]);
        return d
    }; l.wc = function(a) {
        sq(this);
        var c = [];
        if (ga(a)) uq(this, a) && (c = Ge(c, this.b.get(tq(this, a))));
        else {
            a = this.b.wc();
            for (var d = 0; d < a.length; d++) c = Ge(c, a[d])
        }
        return c
    }; l.set = function(a, c) {
        sq(this);
        this.g = null;
        a = tq(this, a);
        uq(this, a) && (this.a = this.a - this.b.get(a).length);
        this.b.set(a, [c]);
        this.a = this.a + 1;
        return this
    }; l.get = function(a, c) {
        var d = a ? this.wc(a) : [];
        return 0 < d.length ? String(d[0]) : c
    }; l.toString = function() {
        if (this.g) return this.g;
        if (!this.b) return "";
        for (var a = [], c = this.b.O(), d = 0; d < c.length; d++) for (var e = c[d], f = encodeURIComponent(String(e)), e = this.wc(e), g = 0; g < e.length; g++) {
            var h = f;
            "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
            a.push(h)
        }
        return this.g = a.join("&")
    }; l.clone = function() {
        var a = new hq;
        a.g = this.g;
        this.b && (a.b = this.b.clone(), a.a = this.a);
        return a
    };
    function tq(a, c) {
        var d = String(c);
        a.f && (d = d.toLowerCase());
        return d
    }
    function nq(a, c) {
        c && !a.f && (sq(a), a.g = null, a.b.forEach(function(a, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), this.remove(f), 0 < a.length && (this.g = null, this.b.set(tq(this, f), He(a)), this.a = this.a + a.length))
        },
        a));
        a.f = c
    };
    function vq(a) {
        a = a || {};
        this.g = a.font;
        this.i = a.rotation;
        this.a = a.scale;
        this.s = a.text;
        this.o = a.textAlign;
        this.l = a.textBaseline;
        this.b = void 0 !== a.fill ? a.fill: new ck({
            color: "#333"
        });
        this.j = void 0 !== a.stroke ? a.stroke: null;
        this.f = void 0 !== a.offsetX ? a.offsetX: 0;
        this.c = void 0 !== a.offsetY ? a.offsetY: 0
    }
    l = vq.prototype; l.Mj = function() {
        return this.g
    }; l.$j = function() {
        return this.f
    }; l.ak = function() {
        return this.c
    }; l.vn = function() {
        return this.b
    }; l.wn = function() {
        return this.i
    }; l.xn = function() {
        return this.a
    }; l.yn = function() {
        return this.j
    }; l.Ha = function() {
        return this.s
    }; l.mk = function() {
        return this.o
    }; l.nk = function() {
        return this.l
    }; l.Eo = function(a) {
        this.g = a
    }; l.ei = function(a) {
        this.f = a
    }; l.fi = function(a) {
        this.c = a
    }; l.Do = function(a) {
        this.b = a
    }; l.zn = function(a) {
        this.i = a
    }; l.An = function(a) {
        this.a = a
    }; l.Ko = function(a) {
        this.j = a
    }; l.hi = function(a) {
        this.s = a
    }; l.ii = function(a) {
        this.o = a
    }; l.Lo = function(a) {
        this.l = a
    };
    function wq(a) {
        a = a ? a: {};
        Io.call(this);
        this.defaultDataProjection = ad("EPSG:4326");
        this.g = a.defaultStyle ? a.defaultStyle: xq;
        this.c = void 0 !== a.extractStyles ? a.extractStyles: !0;
        this.j = void 0 !== a.writeStyles ? a.writeStyles: !0;
        this.b = {};
        this.i = void 0 !== a.showPointNames ? a.showPointNames: !0
    }
    y(wq, Io);
    var yq = ["http://www.google.com/kml/ext/2.2"], zq = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"], Aq = [255, 255, 255, 1], Bq = new ck({
        color: Aq
    }), Cq = [20, 2], Dq = [64, 64], Eq = new xi({
        anchor: Cq,
        anchorOrigin: "bottom-left",
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        rotation: 0,
        scale: .5,
        size: Dq,
        src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
    }), Fq = new ik({
        color: Aq,
        width: 1
    }), Gq = new vq({
        font: "bold 16px Helvetica",
        fill: Bq,
        stroke: new ik({
            color: [51, 51, 51, 1],
            width: 2
        }),
        scale: .8
    }), xq = [new lk({
        fill: Bq,
        image: Eq,
        text: Gq,
        stroke: Fq,
        zIndex: 0
    })], Hq = {
        fraction: "fraction",
        pixels: "pixels"
    };
    function Iq(a, c) {
        var d = null,
        e = [0, 0],
        f = "start";
        a.a && (d = a.a.hd()) && 2 == d.length && (e[0] = a.a.j * d[0] / 2, e[1] = -a.a.j * d[1] / 2, f = "left");
        if (pb(a.Ha())) d = new vq({
            text: c,
            offsetX: e[0],
            offsetY: e[1],
            textAlign: f
        });
        else {
            var d = a.Ha(),
            g = {},
            h;
            for (h in d) g[h] = d[h];
            d = g;
            d.hi(c);
            d.ii(f);
            d.ei(e[0]);
            d.fi(e[1])
        }
        return new lk({
            text: d
        })
    }
    function Jq(a, c, d, e, f) {
        return function() {
            var g = f,
            h = "";
            g && this.W() && (g = "Point" === this.W().X());
            g && (h = this.get("name"), g = g && h);
            if (a) return g ? (g = Iq(a[0], h), a.concat(g)) : a;
            if (c) {
                var k = Kq(c, d, e);
                return g ? (g = Iq(k[0], h), k.concat(g)) : k
            }
            return g ? (g = Iq(d[0], h), d.concat(g)) : d
        }
    }
    function Kq(a, c, d) {
        return Array.isArray(a) ? a: "string" === typeof a ? (!(a in d) && "#" + a in d && (a = "#" + a), Kq(d[a], c, d)) : c
    }
    function Lq(a) {
        a = Cl(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a)) return a = a[1],
        [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }
    function Mq(a) {
        a = Cl(a, !1);
        for (var c = [], d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, e; e = d.exec(a);) c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0),
        a = a.substr(e[0].length);
        return "" !== a ? void 0 : c
    }
    function Nq(a) {
        var c = Cl(a, !1);
        return a.baseURI ? qq(a.baseURI, c.trim()).toString() : c.trim()
    }
    function Oq(a) {
        a = Qo(a);
        if (void 0 !== a) return Math.sqrt(a)
    }
    function Pq(a, c) {
        return P(null, Qq, a, c)
    }
    function Rq(a, c) {
        var d = P({
            v: [],
            pi: []
        },
        Sq, a, c);
        if (d) {
            var e = d.v,
            d = d.pi,
            f, g;
            f = 0;
            for (g = Math.min(e.length, d.length); f < g; ++f) e[4 * f + 3] = d[f];
            d = new S(null);
            d.ba("XYZM", e);
            return d
        }
    }
    function Tq(a, c) {
        var d = P({},
        Uq, a, c),
        e = P(null, Vq, a, c);
        if (e) {
            var f = new S(null);
            f.ba("XYZ", e);
            f.C(d);
            return f
        }
    }
    function Wq(a, c) {
        var d = P({},
        Uq, a, c),
        e = P(null, Vq, a, c);
        if (e) {
            var f = new F(null);
            f.ba("XYZ", e, [e.length]);
            f.C(d);
            return f
        }
    }
    function Xq(a, c) {
        var d = P([], Yq, a, c);
        if (!d) return null;
        if (0 === d.length) return new zo(d);
        var e = !0,
        f = d[0].X(),
        g,
        h,
        k;
        h = 1;
        for (k = d.length; h < k; ++h) if (g = d[h], g.X() != f) {
            e = !1;
            break
        }
        if (e) {
            if ("Point" == f) {
                g = d[0];
                e = g.f;
                f = g.ga();
                h = 1;
                for (k = d.length; h < k; ++h) g = d[h],
                Za(f, g.ga());
                g = new oo(null);
                g.ba(e, f);
                Zq(g, d);
                return g
            }
            return "LineString" == f ? (g = new T(null), no(g, d), Zq(g, d), g) : "Polygon" == f ? (g = new po(null), ro(g, d), Zq(g, d), g) : "GeometryCollection" == f ? new zo(d) : null
        }
        return new zo(d)
    }
    function $q(a, c) {
        var d = P({},
        Uq, a, c),
        e = P(null, Vq, a, c);
        if (e) {
            var f = new E(null);
            f.ba("XYZ", e);
            f.C(d);
            return f
        }
    }
    function ar(a, c) {
        var d = P({},
        Uq, a, c),
        e = P([null], br, a, c);
        if (e && e[0]) {
            var f = new F(null),
            g = e[0],
            h = [g.length],
            k,
            m;
            k = 1;
            for (m = e.length; k < m; ++k) Za(g, e[k]),
            h.push(g.length);
            f.ba("XYZ", g, h);
            f.C(d);
            return f
        }
    }
    function cr(a, c) {
        var d = P({},
        dr, a, c);
        if (!d) return null;
        var e = "fillStyle" in d ? d.fillStyle: Bq,
        f = d.fill;
        void 0 === f || f || (e = null);
        var f = "imageStyle" in d ? d.imageStyle: Eq,
        g = "textStyle" in d ? d.textStyle: Gq,
        h = "strokeStyle" in d ? d.strokeStyle: Fq,
        d = d.outline;
        void 0 === d || d || (h = null);
        return [new lk({
            fill: e,
            image: f,
            stroke: h,
            text: g,
            zIndex: void 0
        })]
    }
    function Zq(a, c) {
        var d = c.length,
        e = Array(c.length),
        f = Array(c.length),
        g,
        h,
        k,
        m;
        k = m = !1;
        for (h = 0; h < d; ++h) g = c[h],
        e[h] = g.get("extrude"),
        f[h] = g.get("altitudeMode"),
        k = k || void 0 !== e[h],
        m = m || f[h];
        k && a.set("extrude", e);
        m && a.set("altitudeMode", f)
    }
    function er(a, c) {
        Ql(fr, a, c)
    }
    var gr = O(zq, {
        value: Jl(U)
    }), fr = O(zq, {
        Data: function(a, c) {
            var d = a.getAttribute("name");
            if (null !== d) {
                var e = P(void 0, gr, a, c);
                e && (c[c.length - 1][d] = e)
            }
        },
        SchemaData: function(a, c) {
            Ql(hr, a, c)
        }
    }), Uq = O(zq, {
        extrude: L(No),
        altitudeMode: L(U)
    }), Qq = O(zq, {
        coordinates: Jl(Mq)
    }), br = O(zq, {
        innerBoundaryIs: function(a, c) {
            var d = P(void 0, ir, a, c);
            d && c[c.length - 1].push(d)
        },
        outerBoundaryIs: function(a, c) {
            var d = P(void 0, jr, a, c);
            d && (c[c.length - 1][0] = d)
        }
    }), Sq = O(zq, {
        when: function(a, c) {
            var d = c[c.length - 1].pi,
            e = Cl(a, !1);
            if (e = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
                var f = Date.UTC(parseInt(e[1], 10), e[3] ? parseInt(e[3], 10) - 1 : 0, e[5] ? parseInt(e[5], 10) : 1, e[7] ? parseInt(e[7], 10) : 0, e[8] ? parseInt(e[8], 10) : 0, e[9] ? parseInt(e[9], 10) : 0);
                if (e[10] && "Z" != e[10]) {
                    var g = "-" == e[11] ? -1 : 1,
                    f = f + 60 * g * parseInt(e[12], 10);
                    e[13] && (f += 3600 * g * parseInt(e[13], 10))
                }
                d.push(f)
            } else d.push(0)
        }
    },
    O(yq, {
        coord: function(a, c) {
            var d = c[c.length - 1].v,
            e = Cl(a, !1); (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ? d.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), 0) : d.push(0, 0, 0, 0)
        }
    })), Vq = O(zq, {
        coordinates: Jl(Mq)
    }), kr = O(zq, {
        href: L(Nq)
    },
    O(yq, {
        x: L(Qo),
        y: L(Qo),
        w: L(Qo),
        h: L(Qo)
    })), lr = O(zq, {
        Icon: L(function(a, c) {
            var d = P({},
            kr, a, c);
            return d ? d: null
        }),
        heading: L(Qo),
        hotSpot: L(function(a) {
            var c = a.getAttribute("xunits"),
            d = a.getAttribute("yunits");
            return {
                x: parseFloat(a.getAttribute("x")),
                Tf: Hq[c],
                y: parseFloat(a.getAttribute("y")),
                Uf: Hq[d]
            }
        }),
        scale: L(Oq)
    }), ir = O(zq, {
        LinearRing: Jl(Pq)
    }), mr = O(zq, {
        color: L(Lq),
        scale: L(Oq)
    }), nr = O(zq, {
        color: L(Lq),
        width: L(Qo)
    }), Yq = O(zq, {
        LineString: Il(Tq),
        LinearRing: Il(Wq),
        MultiGeometry: Il(Xq),
        Point: Il($q),
        Polygon: Il(ar)
    }), or = O(yq, {
        Track: Il(Rq)
    }), qr = O(zq, {
        ExtendedData: er,
        Link: function(a, c) {
            Ql(pr, a, c)
        },
        address: L(U),
        description: L(U),
        name: L(U),
        open: L(No),
        phoneNumber: L(U),
        visibility: L(No)
    }), pr = O(zq, {
        href: L(Nq)
    }), jr = O(zq, {
        LinearRing: Jl(Pq)
    }), rr = O(zq, {
        Style: L(cr),
        key: L(U),
        styleUrl: L(function(a) {
            var c = Cl(a, !1).trim();
            return a.baseURI ? qq(a.baseURI, c).toString() : c
        })
    }), tr = O(zq, {
        ExtendedData: er,
        MultiGeometry: L(Xq, "geometry"),
        LineString: L(Tq, "geometry"),
        LinearRing: L(Wq, "geometry"),
        Point: L($q, "geometry"),
        Polygon: L(ar, "geometry"),
        Style: L(cr),
        StyleMap: function(a, c) {
            var d = P(void 0, sr, a, c);
            if (d) {
                var e = c[c.length - 1];
                Array.isArray(d) ? e.Style = d: "string" === typeof d && (e.styleUrl = d)
            }
        },
        address: L(U),
        description: L(U),
        name: L(U),
        open: L(No),
        phoneNumber: L(U),
        styleUrl: L(Nq),
        visibility: L(No)
    },
    O(yq, {
        MultiTrack: L(function(a, c) {
            var d = P([], or, a, c);
            if (d) {
                var e = new T(null);
                no(e, d);
                return e
            }
        },
        "geometry"),
        Track: L(Rq, "geometry")
    })), ur = O(zq, {
        color: L(Lq),
        fill: L(No),
        outline: L(No)
    }), hr = O(zq, {
        SimpleData: function(a, c) {
            var d = a.getAttribute("name");
            if (null !== d) {
                var e = U(a);
                c[c.length - 1][d] = e
            }
        }
    }), dr = O(zq, {
        IconStyle: function(a, c) {
            var d = P({},
            lr, a, c);
            if (d) {
                var e = c[c.length - 1],
                f = "Icon" in d ? d.Icon: {},
                g;
                g = (g = f.href) ? g: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                var h, k, m, n = d.hotSpot;
                n ? (h = [n.x, n.y], k = n.Tf, m = n.Uf) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = Cq, m = k = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) && (h = [.5, 0], m = k = "fraction");
                var p, n = f.x,
                q = f.y;
                void 0 !== n && void 0 !== q && (p = [n, q]);
                var r, n = f.w,
                f = f.h;
                void 0 !== n && void 0 !== f && (r = [n, f]);
                var t, f = d.heading;
                void 0 !== f && (t = Pa(f));
                d = d.scale;
                "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (r = Dq, void 0 === d && (d = .5));
                h = new xi({
                    anchor: h,
                    anchorOrigin: "bottom-left",
                    anchorXUnits: k,
                    anchorYUnits: m,
                    crossOrigin: "anonymous",
                    offset: p,
                    offsetOrigin: "bottom-left",
                    rotation: t,
                    scale: d,
                    size: r,
                    src: g
                });
                e.imageStyle = h
            }
        },
        LabelStyle: function(a, c) {
            var d = P({},
            mr, a, c);
            d && (c[c.length - 1].textStyle = new vq({
                fill: new ck({
                    color: "color" in d ? d.color: Aq
                }),
                scale: d.scale
            }))
        },
        LineStyle: function(a, c) {
            var d = P({},
            nr, a, c);
            d && (c[c.length - 1].strokeStyle = new ik({
                color: "color" in d ? d.color: Aq,
                width: "width" in d ? d.width: 1
            }))
        },
        PolyStyle: function(a, c) {
            var d = P({},
            ur, a, c);
            if (d) {
                var e = c[c.length - 1];
                e.fillStyle = new ck({
                    color: "color" in d ? d.color: Aq
                });
                var f = d.fill;
                void 0 !== f && (e.fill = f);
                d = d.outline;
                void 0 !== d && (e.outline = d)
            }
        }
    }), sr = O(zq, {
        Pair: function(a, c) {
            var d = P({},
            rr, a, c);
            if (d) {
                var e = d.key;
                e && "normal" == e && ((e = d.styleUrl) && (c[c.length - 1] = e), (d = d.Style) && (c[c.length - 1] = d))
            }
        }
    }); l = wq.prototype; l.Af = function(a, c) {
        var d = O(zq, {
            Document: Hl(this.Af, this),
            Folder: Hl(this.Af, this),
            Placemark: Il(this.If, this),
            Style: this.oo.bind(this),
            StyleMap: this.no.bind(this)
        });
        if (d = P([], d, a, c, this)) return d
    }; l.If = function(a, c) {
        var d = P({
            geometry: null
        },
        tr, a, c);
        if (d) {
            var e = new xl,
            f = a.getAttribute("id");
            null !== f && e.hc(f);
            var f = c[0],
            g = d.geometry;
            g && ho(g, !1, f);
            e.Ra(g);
            delete d.geometry;
            this.c && e.lf(Jq(d.Style, d.styleUrl, this.g, this.b, this.i));
            delete d.Style;
            e.C(d);
            return e
        }
    }; l.oo = function(a, c) {
        var d = a.getAttribute("id");
        if (null !== d) {
            var e = cr(a, c);
            e && (d = a.baseURI ? qq(a.baseURI, "#" + d).toString() : "#" + d, this.b[d] = e)
        }
    }; l.no = function(a, c) {
        var d = a.getAttribute("id");
        if (null !== d) {
            var e = P(void 0, sr, a, c);
            e && (d = a.baseURI ? qq(a.baseURI, "#" + d).toString() : "#" + d, this.b[d] = e)
        }
    }; l.Ih = function(a, c) {
        if (!Wa(zq, a.namespaceURI)) return null;
        var d = this.If(a, [fo(this, a, c)]);
        return d ? d: null
    }; l.gc = function(a, c) {
        if (!Wa(zq, a.namespaceURI)) return [];
        var d;
        d = a.localName;
        if ("Document" == d || "Folder" == d) return (d = this.Af(a, [fo(this, a, c)])) ? d: [];
        if ("Placemark" == d) return (d = this.If(a, [fo(this, a, c)])) ? [d] : [];
        if ("kml" == d) {
            d = [];
            var e;
            for (e = a.firstElementChild; e; e = e.nextElementSibling) {
                var f = this.gc(e, c);
                f && Za(d, f)
            }
            return d
        }
        return []
    }; l.io = function(a) {
        if (El(a)) return vr(this, a);
        if (Fl(a)) return wr(this, a);
        if ("string" === typeof a) return a = Gl(a),
        vr(this, a)
    };
    function vr(a, c) {
        var d;
        for (d = c.firstChild; d; d = d.nextSibling) if (1 == d.nodeType) {
            var e = wr(a, d);
            if (e) return e
        }
    }
    function wr(a, c) {
        var d;
        for (d = c.firstElementChild; d; d = d.nextElementSibling) if (Wa(zq, d.namespaceURI) && "name" == d.localName) return U(d);
        for (d = c.firstElementChild; d; d = d.nextElementSibling) {
            var e = d.localName;
            if (Wa(zq, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = wr(a, d))) return e
        }
    }
    l.jo = function(a) {
        var c = [];
        El(a) ? Za(c, xr(this, a)) : Fl(a) ? Za(c, yr(this, a)) : "string" === typeof a && (a = Gl(a), Za(c, xr(this, a)));
        return c
    };
    function xr(a, c) {
        var d, e = [];
        for (d = c.firstChild; d; d = d.nextSibling) 1 == d.nodeType && Za(e, yr(a, d));
        return e
    }
    function yr(a, c) {
        var d, e = [];
        for (d = c.firstElementChild; d; d = d.nextElementSibling) if (Wa(zq, d.namespaceURI) && "NetworkLink" == d.localName) {
            var f = P({},
            qr, d, []);
            e.push(f)
        }
        for (d = c.firstElementChild; d; d = d.nextElementSibling) f = d.localName,
        !Wa(zq, d.namespaceURI) || "Document" != f && "Folder" != f && "kml" != f || Za(e, yr(a, d));
        return e
    }
    function zr(a, c) {
        var d = Me(c),
        d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]],
        e;
        for (e = 0; 4 > e; ++e) {
            var f = parseInt(d[e], 10).toString(16);
            d[e] = 1 == f.length ? "0" + f: f
        }
        Vo(a, d.join(""))
    }
    function Ar(a, c, d) {
        Rl({
            node: a
        },
        Br, Cr, [c], d)
    }
    function Dr(a, c, d) {
        var e = {
            node: a
        };
        c.Wa() && a.setAttribute("id", c.Wa());
        a = c.P();
        var f = c.$b();
        f && (f = f.call(c, 0)) && (f = Array.isArray(f) ? f[0] : f, this.j && (a.Style = f), (f = f.Ha()) && (a.name = f.Ha()));
        f = Er[d[d.length - 1].node.namespaceURI];
        a = Pl(a, f);
        Rl(e, Fr, Ol, a, d, f);
        a = d[0]; (c = c.W()) && (c = ho(c, !0, a));
        Rl(e, Fr, Gr, [c], d)
    }
    function Hr(a, c, d) {
        var e = c.ga();
        a = {
            node: a
        };
        a.layout = c.f;
        a.stride = c.ra();
        Rl(a, Ir, Jr, [e], d)
    }
    function Kr(a, c, d) {
        c = c.Qd();
        var e = c.shift();
        a = {
            node: a
        };
        Rl(a, Lr, Mr, c, d);
        Rl(a, Lr, Nr, [e], d)
    }
    function Or(a, c) {
        Wo(a, Math.round(c * c * 1E6) / 1E6)
    }
    var Pr = O(zq, ["Document", "Placemark"]), Sr = O(zq, {
        Document: N(function(a, c, d) {
            Rl({
                node: a
            },
            Qr, Rr, c, d, void 0, this)
        }),
        Placemark: N(Dr)
    }), Qr = O(zq, {
        Placemark: N(Dr)
    }), Tr = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry"
    },
    Ur = O(zq, ["href"], O(yq, ["x", "y", "w", "h"])), Vr = O(zq, {
        href: N(Vo)
    },
    O(yq, {
        x: N(Wo),
        y: N(Wo),
        w: N(Wo),
        h: N(Wo)
    })), Wr = O(zq, ["scale", "heading", "Icon", "hotSpot"]), Yr = O(zq, {
        Icon: N(function(a, c, d) {
            a = {
                node: a
            };
            var e = Ur[d[d.length - 1].node.namespaceURI],
            f = Pl(c, e);
            Rl(a, Vr, Ol, f, d, e);
            e = Ur[yq[0]];
            f = Pl(c, e);
            Rl(a, Vr, Xr, f, d, e)
        }),
        heading: N(Wo),
        hotSpot: N(function(a, c) {
            a.setAttribute("x", c.x);
            a.setAttribute("y", c.y);
            a.setAttribute("xunits", c.Tf);
            a.setAttribute("yunits", c.Uf)
        }),
        scale: N(Or)
    }), Zr = O(zq, ["color", "scale"]), $r = O(zq, {
        color: N(zr),
        scale: N(Or)
    }), as = O(zq, ["color", "width"]), bs = O(zq, {
        color: N(zr),
        width: N(Wo)
    }), Br = O(zq, {
        LinearRing: N(Hr)
    }), cs = O(zq, {
        LineString: N(Hr),
        Point: N(Hr),
        Polygon: N(Kr)
    }), Er = O(zq, "name open visibility address phoneNumber description styleUrl Style".split(" ")), Fr = O(zq, {
        MultiGeometry: N(function(a, c, d) {
            a = {
                node: a
            };
            var e = c.X(),
            f,
            g;
            "MultiPoint" == e ? (f = c.fe(), g = ds) : "MultiLineString" == e ? (f = c.jd(), g = es) : "MultiPolygon" == e && (f = c.Rd(), g = fs);
            Rl(a, cs, g, f, d)
        }),
        LineString: N(Hr),
        LinearRing: N(Hr),
        Point: N(Hr),
        Polygon: N(Kr),
        Style: N(function(a, c, d) {
            a = {
                node: a
            };
            var e = {},
            f = c.c,
            g = c.f,
            h = c.a;
            c = c.Ha();
            h instanceof xi && (e.IconStyle = h);
            c && (e.LabelStyle = c);
            g && (e.LineStyle = g);
            f && (e.PolyStyle = f);
            c = gs[d[d.length - 1].node.namespaceURI];
            e = Pl(e, c);
            Rl(a, hs, Ol, e, d, c)
        }),
        address: N(Vo),
        description: N(Vo),
        name: N(Vo),
        open: N(Uo),
        phoneNumber: N(Vo),
        styleUrl: N(Vo),
        visibility: N(Uo)
    }), Ir = O(zq, {
        coordinates: N(function(a, c, d) {
            d = d[d.length - 1];
            var e = d.layout;
            d = d.stride;
            var f;
            "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
            var g, h = c.length,
            k = "";
            if (0 < h) {
                k += c[0];
                for (e = 1; e < f; ++e) k += "," + c[e];
                for (g = d; g < h; g += d) for (k += " " + c[g], e = 1; e < f; ++e) k += "," + c[g + e]
            }
            Vo(a, k)
        })
    }), Lr = O(zq, {
        outerBoundaryIs: N(Ar),
        innerBoundaryIs: N(Ar)
    }), is = O(zq, {
        color: N(zr)
    }), gs = O(zq, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), hs = O(zq, {
        IconStyle: N(function(a, c, d) {
            a = {
                node: a
            };
            var e = {},
            f = c.Db(),
            g = c.hd(),
            h = {
                href: c.b.l
            };
            if (f) {
                h.w = f[0];
                h.h = f[1];
                var k = c.Vb(),
                m = c.Ia();
                m && g && 0 !== m[0] && m[1] !== f[1] && (h.x = m[0], h.y = g[1] - (m[1] + f[1]));
                k && 0 !== k[0] && k[1] !== f[1] && (e.hotSpot = {
                    x: k[0],
                    Tf: "pixels",
                    y: f[1] - k[1],
                    Uf: "pixels"
                })
            }
            e.Icon = h;
            f = c.j;
            1 !== f && (e.scale = f);
            c = c.s;
            0 !== c && (e.heading = c);
            c = Wr[d[d.length - 1].node.namespaceURI];
            e = Pl(e, c);
            Rl(a, Yr, Ol, e, d, c)
        }),
        LabelStyle: N(function(a, c, d) {
            a = {
                node: a
            };
            var e = {},
            f = c.b;
            f && (e.color = f.b); (c = c.a) && 1 !== c && (e.scale = c);
            c = Zr[d[d.length - 1].node.namespaceURI];
            e = Pl(e, c);
            Rl(a, $r, Ol, e, d, c)
        }),
        LineStyle: N(function(a, c, d) {
            a = {
                node: a
            };
            var e = as[d[d.length - 1].node.namespaceURI];
            c = Pl({
                color: c.b,
                width: c.a
            },
            e);
            Rl(a, bs, Ol, c, d, e)
        }),
        PolyStyle: N(function(a, c, d) {
            Rl({
                node: a
            },
            is, js, [c.b], d)
        })
    });
    function Xr(a, c, d) {
        return Bl(yq[0], "gx:" + d)
    }
    function Rr(a, c) {
        return Bl(c[c.length - 1].node.namespaceURI, "Placemark")
    }
    function Gr(a, c) {
        if (a) return Bl(c[c.length - 1].node.namespaceURI, Tr[a.X()])
    }
    var js = Ml("color"), Jr = Ml("coordinates"), Mr = Ml("innerBoundaryIs"), ds = Ml("Point"), es = Ml("LineString"), Cr = Ml("LinearRing"), fs = Ml("Polygon"), Nr = Ml("outerBoundaryIs"); wq.prototype.a = function(a, c) {
        c = go(this, c);
        var d = Bl(zq[4], "kml");
        d.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", yq[0]);
        d.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        d.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var e = {
            node: d
        },
        f = {};
        1 < a.length ? f.Document = a: 1 == a.length && (f.Placemark = a[0]);
        var g = Pr[d.namespaceURI],
        f = Pl(f, g);
        Rl(e, Sr, Ol, f, [c], g, this);
        return d
    }; (function() {
        var a = {},
        c = {
            ha: a
        }; (function(d) {
            if ("object" === typeof a && "undefined" !== typeof c) c.ha = d();
            else {
                var e;
                "undefined" !== typeof window ? e = window: "undefined" !== typeof global ? e = global: "undefined" !== typeof self ? e = self: e = this;
                e.tp = d()
            }
        })(function() {
            return function e(a, c, h) {
                function k(n, q) {
                    if (!c[n]) {
                        if (!a[n]) {
                            var r = "function" == typeof require && require;
                            if (!q && r) return r(n, !0);
                            if (m) return m(n, !0);
                            r = Error("Cannot find module '" + n + "'");
                            throw r.code = "MODULE_NOT_FOUND",
                            r;
                        }
                        r = c[n] = {
                            ha: {}
                        };
                        a[n][0].call(r.ha,
                        function(c) {
                            var e = a[n][1][c];
                            return k(e ? e: c)
                        },
                        r, r.ha, e, a, c, h)
                    }
                    return c[n].ha
                }
                for (var m = "function" == typeof require && require,
                n = 0; n < h.length; n++) k(h[n]);
                return k
            } ({
                1 : [function(a, c) {
                    function g(a) {
                        var c;
                        a && a.length && (c = a, a = c.length);
                        a = new Uint8Array(a || 0);
                        c && a.set(c);
                        a.Th = m.Th;
                        a.Sf = m.Sf;
                        a.Lh = m.Lh;
                        a.vi = m.vi;
                        a.Hf = m.Hf;
                        a.ui = m.ui;
                        a.Bf = m.Bf;
                        a.ri = m.ri;
                        a.toString = m.toString;
                        a.write = m.write;
                        a.slice = m.slice;
                        a.mg = m.mg;
                        a.ej = !0;
                        return a
                    }
                    function h(a) {
                        for (var c = a.length,
                        e = [], f = 0, g, h; f < c; f++) {
                            g = a.charCodeAt(f);
                            if (55295 < g && 57344 > g) if (h) if (56320 > g) {
                                e.push(239, 191, 189);
                                h = g;
                                continue
                            } else g = h - 55296 << 10 | g - 56320 | 65536,
                            h = null;
                            else {
                                56319 < g || f + 1 === c ? e.push(239, 191, 189) : h = g;
                                continue
                            } else h && (e.push(239, 191, 189), h = null);
                            128 > g ? e.push(g) : 2048 > g ? e.push(g >> 6 | 192, g & 63 | 128) : 65536 > g ? e.push(g >> 12 | 224, g >> 6 & 63 | 128, g & 63 | 128) : e.push(g >> 18 | 240, g >> 12 & 63 | 128, g >> 6 & 63 | 128, g & 63 | 128)
                        }
                        return e
                    }
                    c.ha = g;
                    var k = a("ieee754"),
                    m,
                    n,
                    p;
                    m = {
                        Th: function(a) {
                            return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3]
                        },
                        Sf: function(a, c) {
                            this[c] = a;
                            this[c + 1] = a >>> 8;
                            this[c + 2] = a >>> 16;
                            this[c + 3] = a >>> 24
                        },
                        Lh: function(a) {
                            return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + (this[a + 3] << 24)
                        },
                        Hf: function(a) {
                            return k.read(this, a, !0, 23, 4)
                        },
                        Bf: function(a) {
                            return k.read(this, a, !0, 52, 8)
                        },
                        ui: function(a, c) {
                            return k.write(this, a, c, !0, 23, 4)
                        },
                        ri: function(a, c) {
                            return k.write(this, a, c, !0, 52, 8)
                        },
                        toString: function(a, c, e) {
                            var f = a = "";
                            e = Math.min(this.length, e || this.length);
                            for (c = c || 0; c < e; c++) {
                                var g = this[c];
                                127 >= g ? (a += decodeURIComponent(f) + String.fromCharCode(g), f = "") : f += "%" + g.toString(16)
                            }
                            return a += decodeURIComponent(f)
                        },
                        write: function(a, c) {
                            for (var e = a === n ? p: h(a), f = 0; f < e.length; f++) this[c + f] = e[f]
                        },
                        slice: function(a, c) {
                            return this.subarray(a, c)
                        },
                        mg: function(a, c) {
                            c = c || 0;
                            for (var e = 0; e < this.length; e++) a[c + e] = this[e]
                        }
                    };
                    m.vi = m.Sf;
                    g.byteLength = function(a) {
                        n = a;
                        p = h(a);
                        return p.length
                    };
                    g.isBuffer = function(a) {
                        return ! (!a || !a.ej)
                    }
                },
                {
                    ieee754: 3
                }],
                2 : [function(a, c) { (function(g) {
                        function h(a) {
                            this.Eb = k.isBuffer(a) ? a: new k(a || 0);
                            this.ca = 0;
                            this.length = this.Eb.length
                        }
                        c.ha = h;
                        var k = g.ap || a("./buffer");
                        h.f = 0;
                        h.g = 1;
                        h.b = 2;
                        h.a = 5;
                        var m = Math.pow(2, 63);
                        h.prototype = {
                            Ff: function(a, c, e) {
                                for (e = e || this.length; this.ca < e;) {
                                    var f = this.Ca(),
                                    g = this.ca;
                                    a(f >> 3, c, this);
                                    this.ca === g && this.Qo(f)
                                }
                                return c
                            },
                            co: function() {
                                var a = this.Eb.Hf(this.ca);
                                this.ca += 4;
                                return a
                            },
                            Zn: function() {
                                var a = this.Eb.Bf(this.ca);
                                this.ca += 8;
                                return a
                            },
                            Ca: function() {
                                var a = this.Eb,
                                c, e, f, g, h;
                                c = a[this.ca++];
                                if (128 > c) return c;
                                c = c & 127;
                                f = a[this.ca++];
                                if (128 > f) return c | f << 7;
                                f = (f & 127) << 7;
                                g = a[this.ca++];
                                if (128 > g) return c | f | g << 14;
                                g = (g & 127) << 14;
                                h = a[this.ca++];
                                if (128 > h) return c | f | g | h << 21;
                                e = a[this.ca++];
                                c = (c | f | g | (h & 127) << 21) + 268435456 * (e & 127);
                                if (128 > e) return c;
                                e = a[this.ca++];
                                c += 34359738368 * (e & 127);
                                if (128 > e) return c;
                                e = a[this.ca++];
                                c += 4398046511104 * (e & 127);
                                if (128 > e) return c;
                                e = a[this.ca++];
                                c += 562949953421312 * (e & 127);
                                if (128 > e) return c;
                                e = a[this.ca++];
                                c += 72057594037927936 * (e & 127);
                                if (128 > e) return c;
                                e = a[this.ca++];
                                if (128 > e) return c + 0x7fffffffffffffff * (e & 127);
                                throw Error("Expected varint not more than 10 bytes");
                            },
                            po: function() {
                                var a = this.ca,
                                c = this.Ca();
                                if (c < m) return c;
                                for (var e = this.ca - 2; 255 === this.Eb[e];) e--;
                                e < a && (e = a);
                                for (var f = c = 0; f < e - a + 1; f++) var g = ~this.Eb[a + f] & 127,
                                c = c + (4 > f ? g << 7 * f: g * Math.pow(2, 7 * f));
                                return - c - 1
                            },
                            ud: function() {
                                var a = this.Ca();
                                return 1 === a % 2 ? (a + 1) / -2 : a / 2
                            },
                            Xn: function() {
                                return !! this.Ca()
                            },
                            Kf: function() {
                                var a = this.Ca() + this.ca,
                                c = this.Eb.toString("utf8", this.ca, a);
                                this.ca = a;
                                return c
                            },
                            Qo: function(a) {
                                a = a & 7;
                                if (a === h.f) for (; 127 < this.Eb[this.ca++];);
                                else if (a === h.b) this.ca = this.Ca() + this.ca;
                                else if (a === h.a) this.ca += 4;
                                else if (a === h.g) this.ca += 8;
                                else throw Error("Unimplemented type: " + a);
                            }
                        }
                    }).call(this, "undefined" !== typeof global ? global: "undefined" !== typeof self ? self: "undefined" !== typeof window ? window: {})
                },
                {
                    "./buffer": 1
                }],
                3 : [function(a, c, g) {
                    g.read = function(a, c, e, f, g) {
                        var q;
                        q = 8 * g - f - 1;
                        var r = (1 << q) - 1,
                        t = r >> 1,
                        v = -7;
                        g = e ? g - 1 : 0;
                        var w = e ? -1 : 1,
                        A = a[c + g];
                        g += w;
                        e = A & (1 << -v) - 1;
                        A >>= -v;
                        for (v += q; 0 < v; e = 256 * e + a[c + g], g += w, v -= 8);
                        q = e & (1 << -v) - 1;
                        e >>= -v;
                        for (v += f; 0 < v; q = 256 * q + a[c + g], g += w, v -= 8);
                        if (0 === e) e = 1 - t;
                        else {
                            if (e === r) return q ? NaN: Infinity * (A ? -1 : 1);
                            q += Math.pow(2, f);
                            e = e - t
                        }
                        return (A ? -1 : 1) * q * Math.pow(2, e - f)
                    };
                    g.write = function(a, c, e, f, g, q) {
                        var r, t = 8 * q - g - 1,
                        v = (1 << t) - 1,
                        w = v >> 1,
                        A = 23 === g ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                        q = f ? 0 : q - 1;
                        var D = f ? 1 : -1,
                        z = 0 > c || 0 === c && 0 > 1 / c ? 1 : 0;
                        c = Math.abs(c);
                        isNaN(c) || Infinity === c ? (c = isNaN(c) ? 1 : 0, f = v) : (f = Math.floor(Math.log(c) / Math.LN2), 1 > c * (r = Math.pow(2, -f)) && (f--, r *= 2), c = 1 <= f + w ? c + A / r: c + A * Math.pow(2, 1 - w), 2 <= c * r && (f++, r /= 2), f + w >= v ? (c = 0, f = v) : 1 <= f + w ? (c = (c * r - 1) * Math.pow(2, g), f += w) : (c = c * Math.pow(2, w - 1) * Math.pow(2, g), f = 0));
                        for (; 8 <= g; a[e + q] = c & 255, q += D, c /= 256, g -= 8);
                        f = f << g | c;
                        for (t += g; 0 < t; a[e + q] = f & 255, q += D, f /= 256, t -= 8);
                        a[e + q - D] |= 128 * z
                    }
                },
                {}]
            },
            {},
            [2])(2)
        });
        Xl = c.ha
    })(); (function() {
        var a = {},
        c = {
            ha: a
        }; (function(d) {
            if ("object" === typeof a && "undefined" !== typeof c) c.ha = d();
            else {
                var e;
                "undefined" !== typeof window ? e = window: "undefined" !== typeof global ? e = global: "undefined" !== typeof self ? e = self: e = this;
                e.vp = d()
            }
        })(function() {
            return function e(a, c, h) {
                function k(n, q) {
                    if (!c[n]) {
                        if (!a[n]) {
                            var r = "function" == typeof require && require;
                            if (!q && r) return r(n, !0);
                            if (m) return m(n, !0);
                            r = Error("Cannot find module '" + n + "'");
                            throw r.code = "MODULE_NOT_FOUND",
                            r;
                        }
                        r = c[n] = {
                            ha: {}
                        };
                        a[n][0].call(r.ha,
                        function(c) {
                            var e = a[n][1][c];
                            return k(e ? e: c)
                        },
                        r, r.ha, e, a, c, h)
                    }
                    return c[n].ha
                }
                for (var m = "function" == typeof require && require,
                n = 0; n < h.length; n++) k(h[n]);
                return k
            } ({
                1 : [function(a, c) {
                    c.ha.Wi = a("./lib/vectortile.js");
                    c.ha.op = a("./lib/vectortilefeature.js");
                    c.ha.pp = a("./lib/vectortilelayer.js")
                },
                {
                    "./lib/vectortile.js": 2,
                    "./lib/vectortilefeature.js": 3,
                    "./lib/vectortilelayer.js": 4
                }],
                2 : [function(a, c) {
                    function g(a, c, e) {
                        3 === a && (a = new h(e, e.Ca() + e.ca), a.length && (c[a.name] = a))
                    }
                    var h = a("./vectortilelayer");
                    c.ha = function(a, c) {
                        this.layers = a.Ff(g, {},
                        c)
                    }
                },
                {
                    "./vectortilelayer": 4
                }],
                3 : [function(a, c) {
                    function g(a, c, e, f, g) {
                        this.properties = {};
                        this.extent = e;
                        this.type = 0;
                        this.nc = a;
                        this.Ke = -1;
                        this.Fd = f;
                        this.Hd = g;
                        a.Ff(h, this, c)
                    }
                    function h(a, c, e) {
                        if (1 == a) c.rp = e.Ca();
                        else if (2 == a) for (a = e.Ca() + e.ca; e.ca < a;) {
                            var f = c.Fd[e.Ca()],
                            g = c.Hd[e.Ca()];
                            c.properties[f] = g
                        } else 3 == a ? c.type = e.Ca() : 4 == a && (c.Ke = e.ca)
                    }
                    var k = a("point-geometry");
                    c.ha = g;
                    g.b = ["Unknown", "Point", "LineString", "Polygon"];
                    g.prototype.Og = function() {
                        var a = this.nc;
                        a.ca = this.Ke;
                        for (var c = a.Ca() + a.ca, e = 1, f = 0, g = 0, h = 0, v = [], w; a.ca < c;) if (f || (f = a.Ca(), e = f & 7, f = f >> 3), f--, 1 === e || 2 === e) g += a.ud(),
                        h += a.ud(),
                        1 === e && (w && v.push(w), w = []),
                        w.push(new k(g, h));
                        else if (7 === e) w && w.push(w[0].clone());
                        else throw Error("unknown command " + e);
                        w && v.push(w);
                        return v
                    };
                    g.prototype.bbox = function() {
                        var a = this.nc;
                        a.ca = this.Ke;
                        for (var c = a.Ca() + a.ca, e = 1, f = 0, g = 0, h = 0, k = Infinity, w = -Infinity, A = Infinity, D = -Infinity; a.ca < c;) if (f || (f = a.Ca(), e = f & 7, f = f >> 3), f--, 1 === e || 2 === e) g += a.ud(),
                        h += a.ud(),
                        g < k && (k = g),
                        g > w && (w = g),
                        h < A && (A = h),
                        h > D && (D = h);
                        else if (7 !== e) throw Error("unknown command " + e);
                        return [k, A, w, D]
                    }
                },
                {
                    "point-geometry": 5
                }],
                4 : [function(a, c) {
                    function g(a, c) {
                        this.version = 1;
                        this.name = null;
                        this.extent = 4096;
                        this.length = 0;
                        this.nc = a;
                        this.Fd = [];
                        this.Hd = [];
                        this.Ed = [];
                        a.Ff(h, this, c);
                        this.length = this.Ed.length
                    }
                    function h(a, c, e) {
                        15 === a ? c.version = e.Ca() : 1 === a ? c.name = e.Kf() : 5 === a ? c.extent = e.Ca() : 2 === a ? c.Ed.push(e.ca) : 3 === a ? c.Fd.push(e.Kf()) : 4 === a && c.Hd.push(k(e))
                    }
                    function k(a) {
                        for (var c = null,
                        e = a.Ca() + a.ca; a.ca < e;) c = a.Ca() >> 3,
                        c = 1 === c ? a.Kf() : 2 === c ? a.co() : 3 === c ? a.Zn() : 4 === c ? a.po() : 5 === c ? a.Ca() : 6 === c ? a.ud() : 7 === c ? a.Xn() : null;
                        return c
                    }
                    var m = a("./vectortilefeature.js");
                    c.ha = g;
                    g.prototype.feature = function(a) {
                        if (0 > a || a >= this.Ed.length) throw Error("feature index out of bounds");
                        this.nc.ca = this.Ed[a];
                        a = this.nc.Ca() + this.nc.ca;
                        return new m(this.nc, a, this.extent, this.Fd, this.Hd)
                    }
                },
                {
                    "./vectortilefeature.js": 3
                }],
                5 : [function(a, c) {
                    function g(a, c) {
                        this.x = a;
                        this.y = c
                    }
                    c.ha = g;
                    g.prototype = {
                        clone: function() {
                            return new g(this.x, this.y)
                        },
                        add: function(a) {
                            return this.clone().Xi(a)
                        },
                        rotate: function(a) {
                            return this.clone().hj(a)
                        },
                        round: function() {
                            return this.clone().ij()
                        },
                        angle: function() {
                            return Math.atan2(this.y, this.x)
                        },
                        Xi: function(a) {
                            this.x += a.x;
                            this.y += a.y;
                            return this
                        },
                        hj: function(a) {
                            var c = Math.cos(a);
                            a = Math.sin(a);
                            var e = a * this.x + c * this.y;
                            this.x = c * this.x - a * this.y;
                            this.y = e;
                            return this
                        },
                        ij: function() {
                            this.x = Math.round(this.x);
                            this.y = Math.round(this.y);
                            return this
                        }
                    };
                    g.b = function(a) {
                        return a instanceof g ? a: Array.isArray(a) ? new g(a[0], a[1]) : a
                    }
                },
                {}]
            },
            {},
            [1])(1)
        });
        Yl = c.ha
    })();
    function ks(a) {
        this.defaultDataProjection = null;
        a = a ? a: {};
        this.defaultDataProjection = new Yc({
            code: "",
            units: "tile-pixels"
        });
        this.b = a.featureClass ? a.featureClass: al;
        this.g = a.geometryName ? a.geometryName: "geometry";
        this.a = a.layerName ? a.layerName: "layer";
        this.f = a.layers ? a.layers: null
    }
    y(ks, eo); ks.prototype.X = function() {
        return "arraybuffer"
    }; ks.prototype.Ea = function(a, c) {
        var d = this.f,
        e = new Xl(a),
        e = new Yl.Wi(e),
        f = [],
        g = this.b,
        h,
        k,
        m;
        for (m in e.layers) if (!d || -1 != d.indexOf(m)) {
            h = e.layers[m];
            for (var n = 0,
            p = h.length; n < p; ++n) {
                if (g === al) {
                    var q = h.feature(n);
                    k = m;
                    var r = q.Og(),
                    t = [],
                    v = [];
                    ls(r, v, t);
                    var w = q.type,
                    A = void 0;
                    1 === w ? A = 1 === r.length ? "Point": "MultiPoint": 2 === w ? A = 1 === r.length ? "LineString": "MultiLineString": 3 === w && (A = "Polygon");
                    q = q.properties;
                    q[this.a] = k;
                    k = new this.b(A, v, t, q)
                } else {
                    q = h.feature(n);
                    A = m;
                    v = c;
                    k = new this.b;
                    t = q.properties;
                    t[this.a] = A;
                    A = q.type;
                    if (0 === A) A = null;
                    else {
                        q = q.Og();
                        r = [];
                        w = [];
                        ls(q, w, r);
                        var D = void 0;
                        1 === A ? D = 1 === q.length ? new E(null) : new oo(null) : 2 === A ? 1 === q.length ? D = new S(null) : D = new T(null) : 3 === A && (D = new F(null));
                        D.ba("XY", w, r);
                        A = D
                    } (v = ho(A, !1, go(this, v))) && (t[this.g] = v);
                    k.C(t);
                    k.Bc(this.g)
                }
                f.push(k)
            }
        }
        return f
    }; ks.prototype.Sa = function() {
        return this.defaultDataProjection
    }; ks.prototype.c = function(a) {
        this.f = a
    };
    function ls(a, c, d) {
        for (var e = 0,
        f = 0,
        g = a.length; f < g; ++f) {
            var h = a[f],
            k,
            m;
            k = 0;
            for (m = h.length; k < m; ++k) {
                var n = h[k];
                c.push(n.x, n.y)
            }
            e += 2 * k;
            d.push(e)
        }
    };
    function ms() {
        Io.call(this);
        this.defaultDataProjection = ad("EPSG:4326")
    }
    y(ms, Io);
    function ns(a, c) {
        c[c.length - 1].zd[a.getAttribute("k")] = a.getAttribute("v")
    }
    var os = [null], ps = O(os, {
        nd: function(a, c) {
            c[c.length - 1].Lc.push(a.getAttribute("ref"))
        },
        tag: ns
    }), rs = O(os, {
        node: function(a, c) {
            var d = c[0],
            e = c[c.length - 1],
            f = a.getAttribute("id"),
            g = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            e.Sg[f] = g;
            var h = P({
                zd: {}
            },
            qs, a, c);
            pb(h.zd) || (g = new E(g), ho(g, !1, d), d = new xl(g), d.hc(f), d.C(h.zd), e.features.push(d))
        },
        way: function(a, c) {
            for (var d = c[0], e = a.getAttribute("id"), f = P({
                Lc: [],
                zd: {}
            },
            ps, a, c), g = c[c.length - 1], h = [], k = 0, m = f.Lc.length; k < m; k++) Za(h, g.Sg[f.Lc[k]]);
            f.Lc[0] == f.Lc[f.Lc.length - 1] ? (k = new F(null), k.ba("XY", h, [h.length])) : (k = new S(null), k.ba("XY", h));
            ho(k, !1, d);
            d = new xl(k);
            d.hc(e);
            d.C(f.zd);
            g.features.push(d)
        }
    }), qs = O(os, {
        tag: ns
    }); ms.prototype.gc = function(a, c) {
        var d = fo(this, a, c);
        return "osm" == a.localName && (d = P({
            Sg: {},
            features: []
        },
        rs, a, [d]), d.features) ? d.features: []
    };
    function ss(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function ts() {}
    ts.prototype.read = function(a) {
        return El(a) ? this.a(a) : Fl(a) ? this.b(a) : "string" === typeof a ? (a = Gl(a), this.a(a)) : null
    };
    function us() {}
    y(us, ts); us.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (1 == a.nodeType) return this.b(a);
        return null
    }; us.prototype.b = function(a) {
        return (a = P({},
        vs, a, [])) ? a: null
    };
    var ws = [null, "http://www.opengis.net/ows/1.1"], vs = O(ws, {
        ServiceIdentification: L(function(a, c) {
            return P({},
            xs, a, c)
        }),
        ServiceProvider: L(function(a, c) {
            return P({},
            ys, a, c)
        }),
        OperationsMetadata: L(function(a, c) {
            return P({},
            zs, a, c)
        })
    }), As = O(ws, {
        DeliveryPoint: L(U),
        City: L(U),
        AdministrativeArea: L(U),
        PostalCode: L(U),
        Country: L(U),
        ElectronicMailAddress: L(U)
    }), Bs = O(ws, {
        Value: Kl(function(a) {
            return U(a)
        })
    }), Cs = O(ws, {
        AllowedValues: L(function(a, c) {
            return P({},
            Bs, a, c)
        })
    }), Es = O(ws, {
        Phone: L(function(a, c) {
            return P({},
            Ds, a, c)
        }),
        Address: L(function(a, c) {
            return P({},
            As, a, c)
        })
    }), Gs = O(ws, {
        HTTP: L(function(a, c) {
            return P({},
            Fs, a, c)
        })
    }), Fs = O(ws, {
        Get: Kl(function(a, c) {
            var d = ss(a);
            return d ? P({
                href: d
            },
            Hs, a, c) : void 0
        }),
        Post: void 0
    }), Is = O(ws, {
        DCP: L(function(a, c) {
            return P({},
            Gs, a, c)
        })
    }), zs = O(ws, {
        Operation: function(a, c) {
            var d = a.getAttribute("name"),
            e = P({},
            Is, a, c);
            e && (c[c.length - 1][d] = e)
        }
    }), Ds = O(ws, {
        Voice: L(U),
        Facsimile: L(U)
    }), Hs = O(ws, {
        Constraint: Kl(function(a, c) {
            var d = a.getAttribute("name");
            return d ? P({
                name: d
            },
            Cs, a, c) : void 0
        })
    }), Js = O(ws, {
        IndividualName: L(U),
        PositionName: L(U),
        ContactInfo: L(function(a, c) {
            return P({},
            Es, a, c)
        })
    }), xs = O(ws, {
        Title: L(U),
        ServiceTypeVersion: L(U),
        ServiceType: L(U)
    }), ys = O(ws, {
        ProviderName: L(U),
        ProviderSite: L(ss),
        ServiceContact: L(function(a, c) {
            return P({},
            Js, a, c)
        })
    });
    function Ks(a, c, d, e) {
        var f;
        void 0 !== e ? f = e: f = [];
        for (var g = e = 0; g < c;) {
            var h = a[g++];
            f[e++] = a[g++];
            f[e++] = h;
            for (h = 2; h < d; ++h) f[e++] = a[g++]
        }
        f.length = e
    };
    function Ls(a) {
        a = a ? a: {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ad("EPSG:4326");
        this.b = a.factor ? a.factor: 1E5;
        this.a = a.geometryLayout ? a.geometryLayout: "XY"
    }
    y(Ls, Op);
    function Ms(a, c, d) {
        var e, f = Array(c);
        for (e = 0; e < c; ++e) f[e] = 0;
        var g, h;
        g = 0;
        for (h = a.length; g < h;) for (e = 0; e < c; ++e, ++g) {
            var k = a[g],
            m = k - f[e];
            f[e] = k;
            a[g] = m
        }
        return Ns(a, d ? d: 1E5)
    }
    function Ps(a, c, d) {
        var e, f = Array(c);
        for (e = 0; e < c; ++e) f[e] = 0;
        a = Qs(a, d ? d: 1E5);
        var g;
        d = 0;
        for (g = a.length; d < g;) for (e = 0; e < c; ++e, ++d) f[e] += a[d],
        a[d] = f[e];
        return a
    }
    function Ns(a, c) {
        var d = c ? c: 1E5,
        e,
        f;
        e = 0;
        for (f = a.length; e < f; ++e) a[e] = Math.round(a[e] * d);
        d = 0;
        for (e = a.length; d < e; ++d) f = a[d],
        a[d] = 0 > f ? ~ (f << 1) : f << 1;
        d = "";
        e = 0;
        for (f = a.length; e < f; ++e) {
            for (var g = a[e], h = void 0, k = ""; 32 <= g;) h = (32 | g & 31) + 63,
            k += String.fromCharCode(h),
            g >>= 5;
            k += String.fromCharCode(g + 63);
            d += k
        }
        return d
    }
    function Qs(a, c) {
        var d = c ? c: 1E5,
        e = [],
        f = 0,
        g = 0,
        h,
        k;
        h = 0;
        for (k = a.length; h < k; ++h) {
            var m = a.charCodeAt(h) - 63,
            f = f | (m & 31) << g;
            32 > m ? (e.push(f), g = f = 0) : g += 5
        }
        f = 0;
        for (g = e.length; f < g; ++f) h = e[f],
        e[f] = h & 1 ? ~ (h >> 1) : h >> 1;
        f = 0;
        for (g = e.length; f < g; ++f) e[f] /= d;
        return e
    }
    l = Ls.prototype; l.rd = function(a, c) {
        var d = this.td(a, c);
        return new xl(d)
    }; l.Ef = function(a, c) {
        return [this.rd(a, c)]
    }; l.td = function(a, c) {
        var d = yd(this.a),
        e = Ps(a, d, this.b);
        Ks(e, e.length, d, e);
        d = Ld(e, 0, e.length, d);
        return ho(new S(d, this.a), !1, go(this, c))
    }; l.Be = function(a, c) {
        var d = a.W();
        return d ? this.Bd(d, c) : ""
    }; l.ti = function(a, c) {
        return this.Be(a[0], c)
    }; l.Bd = function(a, c) {
        a = ho(a, !0, go(this, c));
        var d = a.ga(),
        e = a.ra();
        Ks(d, d.length, e, d);
        return Ms(d, e, this.b)
    };
    function Rs(a) {
        a = a ? a: {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ad(a.defaultDataProjection ? a.defaultDataProjection: "EPSG:4326")
    }
    y(Rs, io);
    function Ss(a, c) {
        var d = [],
        e,
        f,
        g,
        h;
        g = 0;
        for (h = a.length; g < h; ++g) e = a[g],
        0 < g && d.pop(),
        0 <= e ? f = c[e] : f = c[~e].slice().reverse(),
        d.push.apply(d, f);
        e = 0;
        for (f = d.length; e < f; ++e) d[e] = d[e].slice();
        return d
    }
    function Ts(a, c, d, e, f) {
        a = a.geometries;
        var g = [],
        h,
        k;
        h = 0;
        for (k = a.length; h < k; ++h) g[h] = Us(a[h], c, d, e, f);
        return g
    }
    function Us(a, c, d, e, f) {
        var g = a.type,
        h = Vs[g];
        c = "Point" === g || "MultiPoint" === g ? h(a, d, e) : h(a, c);
        d = new xl;
        d.Ra(ho(c, !1, f));
        void 0 !== a.id && d.hc(a.id);
        a.properties && d.C(a.properties);
        return d
    }
    Rs.prototype.Df = function(a, c) {
        if ("Topology" == a.type) {
            var d, e = null,
            f = null;
            a.transform && (d = a.transform, e = d.scale, f = d.translate);
            var g = a.arcs;
            if (d) {
                d = e;
                var h = f,
                k, m;
                k = 0;
                for (m = g.length; k < m; ++k) for (var n = g[k], p = d, q = h, r = 0, t = 0, v = void 0, w = void 0, A = void 0, w = 0, A = n.length; w < A; ++w) v = n[w],
                r += v[0],
                t += v[1],
                v[0] = r,
                v[1] = t,
                Ws(v, p, q)
            }
            d = [];
            h = ob(a.objects);
            k = 0;
            for (m = h.length; k < m; ++k)"GeometryCollection" === h[k].type ? (n = h[k], d.push.apply(d, Ts(n, g, e, f, c))) : (n = h[k], d.push(Us(n, g, e, f, c)));
            return d
        }
        return []
    };
    function Ws(a, c, d) {
        a[0] = a[0] * c[0] + d[0];
        a[1] = a[1] * c[1] + d[1]
    }
    Rs.prototype.Sa = function() {
        return this.defaultDataProjection
    };
    var Vs = {
        Point: function(a, c, d) {
            a = a.coordinates;
            c && d && Ws(a, c, d);
            return new E(a)
        },
        LineString: function(a, c) {
            var d = Ss(a.arcs, c);
            return new S(d)
        },
        Polygon: function(a, c) {
            var d = [],
            e,
            f;
            e = 0;
            for (f = a.arcs.length; e < f; ++e) d[e] = Ss(a.arcs[e], c);
            return new F(d)
        },
        MultiPoint: function(a, c, d) {
            a = a.coordinates;
            var e, f;
            if (c && d) for (e = 0, f = a.length; e < f; ++e) Ws(a[e], c, d);
            return new oo(a)
        },
        MultiLineString: function(a, c) {
            var d = [],
            e,
            f;
            e = 0;
            for (f = a.arcs.length; e < f; ++e) d[e] = Ss(a.arcs[e], c);
            return new T(d)
        },
        MultiPolygon: function(a, c) {
            var d = [],
            e,
            f,
            g,
            h,
            k,
            m;
            k = 0;
            for (m = a.arcs.length; k < m; ++k) {
                e = a.arcs[k];
                f = [];
                g = 0;
                for (h = e.length; g < h; ++g) f[g] = Ss(e[g], c);
                d[k] = f
            }
            return new po(d)
        }
    };
    function Xs(a) {
        a = a ? a: {};
        this.i = a.featureType;
        this.g = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat: new Zo;
        this.c = a.schemaLocation ? a.schemaLocation: "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        Io.call(this)
    }
    y(Xs, Io); Xs.prototype.gc = function(a, c) {
        var d = {
            featureType: this.i,
            featureNS: this.g
        };
        mb(d, fo(this, a, c ? c: {}));
        d = [d];
        this.b.b["http://www.opengis.net/gml"].featureMember = Il(Lo.prototype.sd); (d = P([], this.b.b, a, d, this.b)) || (d = []);
        return d
    }; Xs.prototype.o = function(a) {
        if (El(a)) return Ys(a);
        if (Fl(a)) return P({},
        Zs, a, []);
        if ("string" === typeof a) return a = Gl(a),
        Ys(a)
    }; Xs.prototype.j = function(a) {
        if (El(a)) return $s(this, a);
        if (Fl(a)) return at(this, a);
        if ("string" === typeof a) return a = Gl(a),
        $s(this, a)
    };
    function $s(a, c) {
        for (var d = c.firstChild; d; d = d.nextSibling) if (1 == d.nodeType) return at(a, d)
    }
    var bt = {
        "http://www.opengis.net/gml": {
            boundedBy: L(Lo.prototype.te, "bounds")
        }
    };
    function at(a, c) {
        var d = {},
        e = To(c.getAttribute("numberOfFeatures"));
        d.numberOfFeatures = e;
        return P(d, bt, c, [], a.b)
    }
    var ct = {
        "http://www.opengis.net/wfs": {
            totalInserted: L(So),
            totalUpdated: L(So),
            totalDeleted: L(So)
        }
    },
    dt = {
        "http://www.opengis.net/ogc": {
            FeatureId: Il(function(a) {
                return a.getAttribute("fid")
            })
        }
    },
    et = {
        "http://www.opengis.net/wfs": {
            Feature: function(a, c) {
                Ql(dt, a, c)
            }
        }
    },
    Zs = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: L(function(a, c) {
                return P({},
                ct, a, c)
            },
            "transactionSummary"),
            InsertResults: L(function(a, c) {
                return P([], et, a, c)
            },
            "insertIds")
        }
    };
    function Ys(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (1 == a.nodeType) return P({},
        Zs, a, [])
    }
    var ft = {
        "http://www.opengis.net/wfs": {
            PropertyName: N(Vo)
        }
    };
    function gt(a, c) {
        var d = Bl("http://www.opengis.net/ogc", "Filter"),
        e = Bl("http://www.opengis.net/ogc", "FeatureId");
        d.appendChild(e);
        e.setAttribute("fid", c);
        a.appendChild(d)
    }
    var ht = {
        "http://www.opengis.net/wfs": {
            Insert: N(function(a, c, d) {
                var e = d[d.length - 1],
                e = Bl(e.featureNS, e.featureType);
                a.appendChild(e);
                Zo.prototype.si(e, c, d)
            }),
            Update: N(function(a, c, d) {
                var e = d[d.length - 1],
                f = e.featureType,
                g = e.featurePrefix,
                g = g ? g: "feature",
                h = e.featureNS;
                a.setAttribute("typeName", g + ":" + f);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
                f = c.Wa();
                if (void 0 !== f) {
                    for (var g = c.O(), h = [], k = 0, m = g.length; k < m; k++) {
                        var n = c.get(g[k]);
                        void 0 !== n && h.push({
                            name: g[k],
                            value: n
                        })
                    }
                    Rl({
                        node: a,
                        srsName: e.srsName
                    },
                    ht, Ml("Property"), h, d);
                    gt(a, f)
                }
            }),
            Delete: N(function(a, c, d) {
                var e = d[d.length - 1];
                d = e.featureType;
                var f = e.featurePrefix,
                f = f ? f: "feature",
                e = e.featureNS;
                a.setAttribute("typeName", f + ":" + d);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
                c = c.Wa();
                void 0 !== c && gt(a, c)
            }),
            Property: N(function(a, c, d) {
                var e = Bl("http://www.opengis.net/wfs", "Name");
                a.appendChild(e);
                Vo(e, c.name);
                void 0 !== c.value && null !== c.value && (e = Bl("http://www.opengis.net/wfs", "Value"), a.appendChild(e), c.value instanceof vd ? Zo.prototype.De(e, c.value, d) : Vo(e, c.value))
            }),
            Native: N(function(a, c) {
                c.Xo && a.setAttribute("vendorId", c.Xo);
                void 0 !== c.Bo && a.setAttribute("safeToIgnore", c.Bo);
                void 0 !== c.value && Vo(a, c.value)
            })
        }
    },
    it = {
        "http://www.opengis.net/wfs": {
            Query: N(function(a, c, d) {
                var e = d[d.length - 1],
                f = e.featurePrefix,
                g = e.featureNS,
                h = e.propertyNames,
                k = e.srsName;
                a.setAttribute("typeName", (f ? f + ":": "") + c);
                k && a.setAttribute("srsName", k);
                g && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                c = mb({},
                e);
                c.node = a;
                Rl(c, ft, Ml("PropertyName"), h, d);
                if (e = e.bbox) h = Bl("http://www.opengis.net/ogc", "Filter"),
                c = d[d.length - 1].geometryName,
                f = Bl("http://www.opengis.net/ogc", "BBOX"),
                h.appendChild(f),
                g = Bl("http://www.opengis.net/ogc", "PropertyName"),
                Vo(g, c),
                f.appendChild(g),
                Zo.prototype.De(f, e, d),
                a.appendChild(h)
            })
        }
    }; Xs.prototype.l = function(a) {
        var c = Bl("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        a && (a.handle && c.setAttribute("handle", a.handle), a.outputFormat && c.setAttribute("outputFormat", a.outputFormat), void 0 !== a.maxFeatures && c.setAttribute("maxFeatures", a.maxFeatures), a.resultType && c.setAttribute("resultType", a.resultType), void 0 !== a.startIndex && c.setAttribute("startIndex", a.startIndex), void 0 !== a.count && c.setAttribute("count", a.count));
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        var d = a.featureTypes;
        a = [{
            node: c,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS: this.g,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            bbox: a.bbox,
            propertyNames: a.propertyNames ? a.propertyNames: []
        }];
        var e = mb({},
        a[a.length - 1]);
        e.node = c;
        Rl(e, it, Ml("Query"), d, a);
        return c
    }; Xs.prototype.U = function(a, c, d, e) {
        var f = [],
        g = Bl("http://www.opengis.net/wfs", "Transaction");
        g.setAttribute("service", "WFS");
        g.setAttribute("version", "1.1.0");
        var h, k;
        e && (h = e.gmlOptions ? e.gmlOptions: {},
        e.handle && g.setAttribute("handle", e.handle));
        g.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        a && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        },
        mb(k, h), Rl(k, ht, Ml("Insert"), a, f));
        c && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        },
        mb(k, h), Rl(k, ht, Ml("Update"), c, f));
        d && Rl({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        },
        ht, Ml("Delete"), d, f);
        e.nativeElements && Rl({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        },
        ht, Ml("Native"), e.nativeElements, f);
        return g
    }; Xs.prototype.Jf = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (1 == a.nodeType) return this.we(a);
        return null
    }; Xs.prototype.we = function(a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild) for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling) if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var c = [{}];
            this.b.te(a, c);
            return ad(c.pop().srsName)
        }
        return null
    };
    function jt(a) {
        a = a ? a: {};
        this.defaultDataProjection = null;
        this.b = void 0 !== a.splitCollection ? a.splitCollection: !1
    }
    y(jt, Op);
    function kt(a) {
        a = a.Z();
        return 0 === a.length ? "": a[0] + " " + a[1]
    }
    function lt(a) {
        a = a.Z();
        for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a[d][0] + " " + a[d][1]);
        return c.join(",")
    }
    function mt(a) {
        var c = [];
        a = a.Qd();
        for (var d = 0,
        e = a.length; d < e; ++d) c.push("(" + lt(a[d]) + ")");
        return c.join(",")
    }
    function nt(a) {
        var c = a.X();
        a = (0, ot[c])(a);
        c = c.toUpperCase();
        return 0 === a.length ? c + " EMPTY": c + "(" + a + ")"
    }
    var ot = {
        Point: kt,
        LineString: lt,
        Polygon: mt,
        MultiPoint: function(a) {
            var c = [];
            a = a.fe();
            for (var d = 0,
            e = a.length; d < e; ++d) c.push("(" + kt(a[d]) + ")");
            return c.join(",")
        },
        MultiLineString: function(a) {
            var c = [];
            a = a.jd();
            for (var d = 0,
            e = a.length; d < e; ++d) c.push("(" + lt(a[d]) + ")");
            return c.join(",")
        },
        MultiPolygon: function(a) {
            var c = [];
            a = a.Rd();
            for (var d = 0,
            e = a.length; d < e; ++d) c.push("(" + mt(a[d]) + ")");
            return c.join(",")
        },
        GeometryCollection: function(a) {
            var c = [];
            a = a.yg();
            for (var d = 0,
            e = a.length; d < e; ++d) c.push(nt(a[d]));
            return c.join(",")
        }
    }; l = jt.prototype; l.rd = function(a, c) {
        var d = this.td(a, c);
        if (d) {
            var e = new xl;
            e.Ra(d);
            return e
        }
        return null
    }; l.Ef = function(a, c) {
        var d = [],
        e = this.td(a, c);
        this.b && "GeometryCollection" == e.X() ? d = e.c: d = [e];
        for (var f = [], g = 0, h = d.length; g < h; ++g) e = new xl,
        e.Ra(d[g]),
        f.push(e);
        return f
    }; l.td = function(a, c) {
        var d;
        d = new pt(new qt(a));
        d.b = rt(d.a);
        return (d = st(d)) ? ho(d, !1, c) : null
    }; l.Be = function(a, c) {
        var d = a.W();
        return d ? this.Bd(d, c) : ""
    }; l.ti = function(a, c) {
        if (1 == a.length) return this.Be(a[0], c);
        for (var d = [], e = 0, f = a.length; e < f; ++e) d.push(a[e].W());
        d = new zo(d);
        return this.Bd(d, c)
    }; l.Bd = function(a, c) {
        return nt(ho(a, !0, c))
    };
    function qt(a) {
        this.a = a;
        this.b = -1
    }
    function rt(a) {
        var c = a.a.charAt(++a.b),
        d = {
            position: a.b,
            value: c
        };
        if ("(" == c) d.type = 2;
        else if ("," == c) d.type = 5;
        else if (")" == c) d.type = 3;
        else if ("0" <= c && "9" >= c || "." == c || "-" == c) {
            d.type = 4;
            var e, c = a.b,
            f = !1,
            g = !1;
            do {
                if ("." == e) f = !0;
                else if ("e" == e || "E" == e) g = !0;
                e = a.a.charAt(++a.b)
            } while ("0" <= e && "9" >= e || "." == e && ( void 0 === f || ! f ) || !g && ("e" == e || "E" == e) || g && ("-" == e || "+" == e));
            a = parseFloat(a.a.substring(c, a.b--));
            d.value = a
        } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
            d.type = 1;
            c = a.b;
            do e = a.a.charAt(++a.b);
            while ("a" <= e && "z" >= e || "A" <= e && "Z" >= e);
            a = a.a.substring(c, a.b--).toUpperCase();
            d.value = a
        } else {
            if (" " == c || "\t" == c || "\r" == c || "\n" == c) return rt(a);
            if ("" === c) d.type = 6;
            else throw Error("Unexpected character: " + c);
        }
        return d
    }
    function pt(a) {
        this.a = a
    }
    l = pt.prototype; l.match = function(a) {
        if (a = this.b.type == a) this.b = rt(this.a);
        return a
    };
    function st(a) {
        var c = a.b;
        if (a.match(1)) {
            var d = c.value;
            if ("GEOMETRYCOLLECTION" == d) {
                a: {
                    if (a.match(2)) {
                        c = [];
                        do c.push(st(a));
                        while (a.match(5));
                        if (a.match(3)) {
                            a = c;
                            break a
                        }
                    } else if (tt(a)) {
                        a = [];
                        break a
                    }
                    throw Error(ut(a));
                }
                return new zo(a)
            }
            var e = vt[d],
            c = wt[d];
            if (!e || !c) throw Error("Invalid geometry type: " + d);
            a = e.call(a);
            return new c(a)
        }
        throw Error(ut(a));
    }
    l.yf = function() {
        if (this.match(2)) {
            var a = xt(this);
            if (this.match(3)) return a
        } else if (tt(this)) return null;
        throw Error(ut(this));
    }; l.xf = function() {
        if (this.match(2)) {
            var a = yt(this);
            if (this.match(3)) return a
        } else if (tt(this)) return [];
        throw Error(ut(this));
    }; l.zf = function() {
        if (this.match(2)) {
            var a = zt(this);
            if (this.match(3)) return a
        } else if (tt(this)) return [];
        throw Error(ut(this));
    }; l.Kn = function() {
        if (this.match(2)) {
            var a;
            if (2 == this.b.type) for (a = [this.yf()]; this.match(5);) a.push(this.yf());
            else a = yt(this);
            if (this.match(3)) return a
        } else if (tt(this)) return [];
        throw Error(ut(this));
    }; l.Jn = function() {
        if (this.match(2)) {
            var a = zt(this);
            if (this.match(3)) return a
        } else if (tt(this)) return [];
        throw Error(ut(this));
    }; l.Ln = function() {
        if (this.match(2)) {
            for (var a = [this.zf()]; this.match(5);) a.push(this.zf());
            if (this.match(3)) return a
        } else if (tt(this)) return [];
        throw Error(ut(this));
    };
    function xt(a) {
        for (var c = [], d = 0; 2 > d; ++d) {
            var e = a.b;
            if (a.match(4)) c.push(e.value);
            else break
        }
        if (2 == c.length) return c;
        throw Error(ut(a));
    }
    function yt(a) {
        for (var c = [xt(a)]; a.match(5);) c.push(xt(a));
        return c
    }
    function zt(a) {
        for (var c = [a.xf()]; a.match(5);) c.push(a.xf());
        return c
    }
    function tt(a) {
        var c = 1 == a.b.type && "EMPTY" == a.b.value;
        c && (a.b = rt(a.a));
        return c
    }
    function ut(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.a.a + "`"
    }
    var wt = {
        POINT: E,
        LINESTRING: S,
        POLYGON: F,
        MULTIPOINT: oo,
        MULTILINESTRING: T,
        MULTIPOLYGON: po
    },
    vt = {
        POINT: pt.prototype.yf,
        LINESTRING: pt.prototype.xf,
        POLYGON: pt.prototype.zf,
        MULTIPOINT: pt.prototype.Kn,
        MULTILINESTRING: pt.prototype.Jn,
        MULTIPOLYGON: pt.prototype.Ln
    };
    function At() {
        this.version = void 0
    }
    y(At, ts); At.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (1 == a.nodeType) return this.b(a);
        return null
    }; At.prototype.b = function(a) {
        this.version = a.getAttribute("version").trim();
        return (a = P({
            version: this.version
        },
        Bt, a, [])) ? a: null
    };
    function Ct(a, c) {
        return P({},
        Dt, a, c)
    }
    function Et(a, c) {
        return P({},
        Ft, a, c)
    }
    function Gt(a, c) {
        var d = Ct(a, c);
        if (d) {
            var e = [To(a.getAttribute("width")), To(a.getAttribute("height"))];
            d.size = e;
            return d
        }
    }
    function Ht(a, c) {
        return P([], It, a, c)
    }
    var Jt = [null, "http://www.opengis.net/wms"], Bt = O(Jt, {
        Service: L(function(a, c) {
            return P({},
            Kt, a, c)
        }),
        Capability: L(function(a, c) {
            return P({},
            Lt, a, c)
        })
    }), Lt = O(Jt, {
        Request: L(function(a, c) {
            return P({},
            Mt, a, c)
        }),
        Exception: L(function(a, c) {
            return P([], Nt, a, c)
        }),
        Layer: L(function(a, c) {
            return P({},
            Ot, a, c)
        })
    }), Kt = O(Jt, {
        Name: L(U),
        Title: L(U),
        Abstract: L(U),
        KeywordList: L(Ht),
        OnlineResource: L(ss),
        ContactInformation: L(function(a, c) {
            return P({},
            Pt, a, c)
        }),
        Fees: L(U),
        AccessConstraints: L(U),
        LayerLimit: L(So),
        MaxWidth: L(So),
        MaxHeight: L(So)
    }), Pt = O(Jt, {
        ContactPersonPrimary: L(function(a, c) {
            return P({},
            Qt, a, c)
        }),
        ContactPosition: L(U),
        ContactAddress: L(function(a, c) {
            return P({},
            Rt, a, c)
        }),
        ContactVoiceTelephone: L(U),
        ContactFacsimileTelephone: L(U),
        ContactElectronicMailAddress: L(U)
    }), Qt = O(Jt, {
        ContactPerson: L(U),
        ContactOrganization: L(U)
    }), Rt = O(Jt, {
        AddressType: L(U),
        Address: L(U),
        City: L(U),
        StateOrProvince: L(U),
        PostCode: L(U),
        Country: L(U)
    }), Nt = O(Jt, {
        Format: Il(U)
    }), Ot = O(Jt, {
        Name: L(U),
        Title: L(U),
        Abstract: L(U),
        KeywordList: L(Ht),
        CRS: Kl(U),
        EX_GeographicBoundingBox: L(function(a, c) {
            var d = P({},
            St, a, c);
            if (d) {
                var e = d.westBoundLongitude,
                f = d.southBoundLatitude,
                g = d.eastBoundLongitude,
                d = d.northBoundLatitude;
                return void 0 === e || void 0 === f || void 0 === g || void 0 === d ? void 0 : [e, f, g, d]
            }
        }),
        BoundingBox: Kl(function(a) {
            var c = [Ro(a.getAttribute("minx")), Ro(a.getAttribute("miny")), Ro(a.getAttribute("maxx")), Ro(a.getAttribute("maxy"))],
            d = [Ro(a.getAttribute("resx")), Ro(a.getAttribute("resy"))];
            return {
                crs: a.getAttribute("CRS"),
                extent: c,
                res: d
            }
        }),
        Dimension: Kl(function(a) {
            return {
                name: a.getAttribute("name"),
                units: a.getAttribute("units"),
                unitSymbol: a.getAttribute("unitSymbol"),
                "default": a.getAttribute("default"),
                multipleValues: Oo(a.getAttribute("multipleValues")),
                nearestValue: Oo(a.getAttribute("nearestValue")),
                current: Oo(a.getAttribute("current")),
                values: U(a)
            }
        }),
        Attribution: L(function(a, c) {
            return P({},
            Tt, a, c)
        }),
        AuthorityURL: Kl(function(a, c) {
            var d = Ct(a, c);
            if (d) return d.name = a.getAttribute("name"),
            d
        }),
        Identifier: Kl(U),
        MetadataURL: Kl(function(a, c) {
            var d = Ct(a, c);
            if (d) return d.type = a.getAttribute("type"),
            d
        }),
        DataURL: Kl(Ct),
        FeatureListURL: Kl(Ct),
        Style: Kl(function(a, c) {
            return P({},
            Ut, a, c)
        }),
        MinScaleDenominator: L(Qo),
        MaxScaleDenominator: L(Qo),
        Layer: Kl(function(a, c) {
            var d = c[c.length - 1],
            e = P({},
            Ot, a, c);
            if (e) {
                var f = Oo(a.getAttribute("queryable"));
                void 0 === f && (f = d.queryable);
                e.queryable = void 0 !== f ? f: !1;
                f = To(a.getAttribute("cascaded"));
                void 0 === f && (f = d.cascaded);
                e.cascaded = f;
                f = Oo(a.getAttribute("opaque"));
                void 0 === f && (f = d.opaque);
                e.opaque = void 0 !== f ? f: !1;
                f = Oo(a.getAttribute("noSubsets"));
                void 0 === f && (f = d.noSubsets);
                e.noSubsets = void 0 !== f ? f: !1; (f = Ro(a.getAttribute("fixedWidth"))) || (f = d.fixedWidth);
                e.fixedWidth = f; (f = Ro(a.getAttribute("fixedHeight"))) || (f = d.fixedHeight);
                e.fixedHeight = f; ["Style", "CRS", "AuthorityURL"].forEach(function(a) {
                    a in d && (e[a] = (e[a] || []).concat(d[a]))
                });
                "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) {
                    a in e || (e[a] = d[a])
                });
                return e
            }
        })
    }), Tt = O(Jt, {
        Title: L(U),
        OnlineResource: L(ss),
        LogoURL: L(Gt)
    }), St = O(Jt, {
        westBoundLongitude: L(Qo),
        eastBoundLongitude: L(Qo),
        southBoundLatitude: L(Qo),
        northBoundLatitude: L(Qo)
    }), Mt = O(Jt, {
        GetCapabilities: L(Et),
        GetMap: L(Et),
        GetFeatureInfo: L(Et)
    }), Ft = O(Jt, {
        Format: Kl(U),
        DCPType: Kl(function(a, c) {
            return P({},
            Vt, a, c)
        })
    }), Vt = O(Jt, {
        HTTP: L(function(a, c) {
            return P({},
            Wt, a, c)
        })
    }), Wt = O(Jt, {
        Get: L(Ct),
        Post: L(Ct)
    }), Ut = O(Jt, {
        Name: L(U),
        Title: L(U),
        Abstract: L(U),
        LegendURL: Kl(Gt),
        StyleSheetURL: L(Ct),
        StyleURL: L(Ct)
    }), Dt = O(Jt, {
        Format: L(U),
        OnlineResource: L(ss)
    }), It = O(Jt, {
        Keyword: Il(U)
    });
    function Xt(a) {
        a = a ? a: {};
        this.g = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new Yo;
        this.c = a.layers ? a.layers: null;
        Io.call(this)
    }
    y(Xt, Io); Xt.prototype.gc = function(a, c) {
        var d = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        c && mb(d, fo(this, a, c));
        var e = [d];
        a.setAttribute("namespaceURI", this.g);
        var f = a.localName,
        d = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == f) for (var g = 0,
            h = a.childNodes.length; g < h; g++) {
                var k = a.childNodes[g];
                if (1 === k.nodeType) {
                    var m = e[0],
                    n = k.localName.replace("_layer", "");
                    if (!this.c || Wa(this.c, n)) {
                        n += "_feature";
                        m.featureType = n;
                        m.featureNS = this.g;
                        var p = {};
                        p[n] = Il(this.b.Cf, this.b);
                        m = O([m.featureNS, null], p);
                        k.setAttribute("namespaceURI", this.g); (k = P([], m, k, e, this.b)) && Za(d, k)
                    }
                }
            }
            "FeatureCollection" == f && (e = P([], this.b.b, a, [{}], this.b)) && (d = e)
        }
        return d
    };
    function Yt() {
        this.g = new us
    }
    y(Yt, ts); Yt.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (1 == a.nodeType) return this.b(a);
        return null
    }; Yt.prototype.b = function(a) {
        var c = a.getAttribute("version").trim(),
        d = this.g.b(a);
        if (!d) return null;
        d.version = c;
        return (d = P(d, Zt, a, [])) ? d: null
    };
    function $t(a) {
        var c = U(a).split(" ");
        if (c && 2 == c.length) return a = +c[0],
        c = +c[1],
        isNaN(a) || isNaN(c) ? void 0 : [a, c]
    }
    var au = [null, "http://www.opengis.net/wmts/1.0"], bu = [null, "http://www.opengis.net/ows/1.1"], Zt = O(au, {
        Contents: L(function(a, c) {
            return P({},
            cu, a, c)
        })
    }), cu = O(au, {
        Layer: Kl(function(a, c) {
            return P({},
            du, a, c)
        }),
        TileMatrixSet: Kl(function(a, c) {
            return P({},
            eu, a, c)
        })
    }), du = O(au, {
        Style: Kl(function(a, c) {
            var d = P({},
            fu, a, c);
            if (d) {
                var e = "true" === a.getAttribute("isDefault");
                d.isDefault = e;
                return d
            }
        }),
        Format: Kl(U),
        TileMatrixSetLink: Kl(function(a, c) {
            return P({},
            gu, a, c)
        }),
        Dimension: Kl(function(a, c) {
            return P({},
            hu, a, c)
        }),
        ResourceURL: Kl(function(a) {
            var c = a.getAttribute("format"),
            d = a.getAttribute("template");
            a = a.getAttribute("resourceType");
            var e = {};
            c && (e.format = c);
            d && (e.template = d);
            a && (e.resourceType = a);
            return e
        })
    },
    O(bu, {
        Title: L(U),
        Abstract: L(U),
        WGS84BoundingBox: L(function(a, c) {
            var d = P([], iu, a, c);
            return 2 != d.length ? void 0 : nc(d)
        }),
        Identifier: L(U)
    })), fu = O(au, {
        LegendURL: Kl(function(a) {
            var c = {};
            c.format = a.getAttribute("format");
            c.href = ss(a);
            return c
        })
    },
    O(bu, {
        Title: L(U),
        Identifier: L(U)
    })), gu = O(au, {
        TileMatrixSet: L(U)
    }), hu = O(au, {
        Default: L(U),
        Value: Kl(U)
    },
    O(bu, {
        Identifier: L(U)
    })), iu = O(bu, {
        LowerCorner: Il($t),
        UpperCorner: Il($t)
    }), eu = O(au, {
        WellKnownScaleSet: L(U),
        TileMatrix: Kl(function(a, c) {
            return P({},
            ju, a, c)
        })
    },
    O(bu, {
        SupportedCRS: L(U),
        Identifier: L(U)
    })), ju = O(au, {
        TopLeftCorner: L($t),
        ScaleDenominator: L(Qo),
        TileWidth: L(So),
        TileHeight: L(So),
        MatrixWidth: L(So),
        MatrixHeight: L(So)
    },
    O(bu, {
        Identifier: L(U)
    }));
    function ku(a) {
        Kb.call(this);
        a = a || {};
        this.a = null;
        this.c = sd;
        this.f = void 0;
        C(this, Mb("projection"), this.Bl, this);
        C(this, Mb("tracking"), this.Cl, this);
        void 0 !== a.projection && this.Wg(ad(a.projection));
        void 0 !== a.trackingOptions && this.ji(a.trackingOptions);
        this.be(void 0 !== a.tracking ? a.tracking: !1)
    }
    y(ku, Kb); l = ku.prototype; l.fa = function() {
        this.be(!1);
        ku.ia.fa.call(this)
    }; l.Bl = function() {
        var a = this.Ug();
        a && (this.c = dd(ad("EPSG:4326"), a), this.a && this.set("position", this.c(this.a)))
    }; l.Cl = function() {
        if (eh) {
            var a = this.Vg();
            a && void 0 === this.f ? this.f = aa.navigator.geolocation.watchPosition(this.Sn.bind(this), this.Tn.bind(this), this.Fg()) : a || void 0 === this.f || (aa.navigator.geolocation.clearWatch(this.f), this.f = void 0)
        }
    }; l.Sn = function(a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : Pa(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var c = this.c(this.a);
        this.set("position", c);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = ce(Rj, this.a, a.accuracy);
        a.oc(this.c);
        this.set("accuracyGeometry", a);
        this.u()
    }; l.Tn = function(a) {
        a.type = "error";
        this.be(!1);
        this.b(a)
    }; l.Cj = function() {
        return this.get("accuracy")
    }; l.Dj = function() {
        return this.get("accuracyGeometry") || null
    }; l.Fj = function() {
        return this.get("altitude")
    }; l.Gj = function() {
        return this.get("altitudeAccuracy")
    }; l.zl = function() {
        return this.get("heading")
    }; l.Al = function() {
        return this.get("position")
    }; l.Ug = function() {
        return this.get("projection")
    }; l.kk = function() {
        return this.get("speed")
    }; l.Vg = function() {
        return this.get("tracking")
    }; l.Fg = function() {
        return this.get("trackingOptions")
    }; l.Wg = function(a) {
        this.set("projection", a)
    }; l.be = function(a) {
        this.set("tracking", a)
    }; l.ji = function(a) {
        this.set("trackingOptions", a)
    };
    function lu(a, c, d) {
        xd.call(this);
        this.Of(a, c ? c: 0, d)
    }
    y(lu, xd); l = lu.prototype; l.clone = function() {
        var a = new lu(null),
        c = this.v.slice();
        zd(a, this.f, c);
        a.u();
        return a
    }; l.ub = function(a, c, d, e) {
        var f = this.v;
        a -= f[0];
        var g = c - f[1];
        c = a * a + g * g;
        if (c < e) {
            if (0 === c) for (e = 0; e < this.a; ++e) d[e] = f[e];
            else for (e = this.qf() / Math.sqrt(c), d[0] = f[0] + e * a, d[1] = f[1] + e * g, e = 2; e < this.a; ++e) d[e] = f[e];
            d.length = this.a;
            return c
        }
        return e
    }; l.yc = function(a, c) {
        var d = this.v,
        e = a - d[0],
        d = c - d[1];
        return e * e + d * d <= mu(this)
    }; l.od = function() {
        return this.v.slice(0, this.a)
    }; l.Ld = function(a) {
        var c = this.v,
        d = c[this.a] - c[0];
        return yc(c[0] - d, c[1] - d, c[0] + d, c[1] + d, a)
    }; l.qf = function() {
        return Math.sqrt(mu(this))
    };
    function mu(a) {
        var c = a.v[a.a] - a.v[0];
        a = a.v[a.a + 1] - a.v[1];
        return c * c + a * a
    }
    l.X = function() {
        return "Circle"
    }; l.Ka = function(a) {
        var c = this.G();
        return Qc(a, c) ? (c = this.od(), a[0] <= c[0] && a[2] >= c[0] || a[1] <= c[1] && a[3] >= c[1] ? !0 : Ec(a, this.lg, this)) : !1
    }; l.Vl = function(a) {
        var c = this.a,
        d = this.v[c] - this.v[0],
        e = a.slice();
        e[c] = e[0] + d;
        for (d = 1; d < c; ++d) e[c + d] = a[d];
        zd(this, this.f, e);
        this.u()
    }; l.Of = function(a, c, d) {
        if (a) {
            Ad(this, d, a, 0);
            this.v || (this.v = []);
            d = this.v;
            a = Id(d, a);
            d[a++] = d[0] + c;
            var e;
            c = 1;
            for (e = this.a; c < e; ++c) d[a++] = d[c];
            d.length = a
        } else zd(this, "XY", null);
        this.u()
    }; l.Wl = function(a) {
        this.v[this.a] = this.v[0] + a;
        this.u()
    };
    function nu(a, c, d) {
        for (var e = [], f = a(0), g = a(1), h = c(f), k = c(g), m = [g, f], n = [k, h], p = [1, 0], q = {},
        r = 1E5, t, v, w, A, D; 0 < --r && 0 < p.length;) w = p.pop(),
        f = m.pop(),
        h = n.pop(),
        g = w.toString(),
        g in q || (e.push(h[0], h[1]), q[g] = !0),
        A = p.pop(),
        g = m.pop(),
        k = n.pop(),
        D = (w + A) / 2,
        t = a(D),
        v = c(t),
        Na(v[0], v[1], h[0], h[1], k[0], k[1]) < d ? (e.push(k[0], k[1]), g = A.toString(), q[g] = !0) : (p.push(A, D, D, w), n.push(k, v, v, h), m.push(g, t, t, f));
        return e
    }
    function ou(a, c, d, e, f) {
        var g = ad("EPSG:4326");
        return nu(function(e) {
            return [a, c + (d - c) * e]
        },
        rd(g, e), f)
    }
    function pu(a, c, d, e, f) {
        var g = ad("EPSG:4326");
        return nu(function(e) {
            return [c + (d - c) * e, a]
        },
        rd(g, e), f)
    };
    function qu(a) {
        a = a || {};
        this.c = this.o = null;
        this.g = this.i = Infinity;
        this.f = this.j = -Infinity;
        this.B = this.U = Infinity;
        this.H = this.N = -Infinity;
        this.S = void 0 !== a.targetSize ? a.targetSize: 100;
        this.D = void 0 !== a.maxLines ? a.maxLines: 100;
        this.b = [];
        this.a = [];
        this.va = void 0 !== a.strokeStyle ? a.strokeStyle: ru;
        this.A = this.l = void 0;
        this.s = null;
        this.setMap(void 0 !== a.map ? a.map: null)
    }
    var ru = new ik({
        color: "rgba(0,0,0,0.2)"
    }), su = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];
    function tu(a, c, d, e, f, g, h) {
        var k = h;
        c = ou(c, d, e, a.c, f);
        k = void 0 !== a.b[k] ? a.b[k] : new S(null);
        k.ba("XY", c);
        Qc(k.G(), g) && (a.b[h++] = k);
        return h
    }
    function uu(a, c, d, e, f) {
        var g = f;
        c = pu(c, a.f, a.g, a.c, d);
        g = void 0 !== a.a[g] ? a.a[g] : new S(null);
        g.ba("XY", c);
        Qc(g.G(), e) && (a.a[f++] = g);
        return f
    }
    l = qu.prototype; l.Dl = function() {
        return this.o
    }; l.Yj = function() {
        return this.b
    }; l.ek = function() {
        return this.a
    }; l.Kg = function(a) {
        var c = a.vectorContext,
        d = a.frameState,
        e = d.extent;
        a = d.viewState;
        var f = a.center,
        g = a.projection,
        h = a.resolution;
        a = d.pixelRatio;
        a = h * h / (4 * a * a);
        if (!this.c || !qd(this.c, g)) {
            var k = ad("EPSG:4326"),
            m = g.G(),
            n = g.i,
            p = ud(n, k, g),
            q = n[2],
            r = n[1],
            t = n[0],
            v = p[3],
            w = p[2],
            A = p[1],
            p = p[0];
            this.i = n[3];
            this.g = q;
            this.j = r;
            this.f = t;
            this.U = v;
            this.B = w;
            this.N = A;
            this.H = p;
            this.l = rd(k, g);
            this.A = rd(g, k);
            this.s = this.A(Nc(m));
            this.c = g
        }
        k = 0;
        g.a && (g = g.G(), k = Lc(g), d = d.focus[0], d < g[0] || d > g[2]) && (k *= Math.ceil((g[0] - d) / k), e = [e[0] + k, e[1], e[2] + k, e[3]]);
        d = this.s[0];
        g = this.s[1];
        k = -1;
        n = Math.pow(this.S * h, 2);
        q = [];
        r = [];
        h = 0;
        for (m = su.length; h < m; ++h) {
            t = su[h] / 2;
            q[0] = d - t;
            q[1] = g - t;
            r[0] = d + t;
            r[1] = g + t;
            this.l(q, q);
            this.l(r, r);
            t = Math.pow(r[0] - q[0], 2) + Math.pow(r[1] - q[1], 2);
            if (t <= n) break;
            k = su[h]
        }
        h = k;
        if ( - 1 == h) this.b.length = this.a.length = 0;
        else {
            d = this.A(f);
            f = d[0];
            d = d[1];
            g = this.D;
            k = [Math.max(e[0], this.H), Math.max(e[1], this.N), Math.min(e[2], this.B), Math.min(e[3], this.U)];
            k = ud(k, this.c, "EPSG:4326");
            n = k[3];
            r = k[1];
            f = Math.floor(f / h) * h;
            q = La(f, this.f, this.g);
            m = tu(this, q, r, n, a, e, 0);
            for (k = 0; q != this.f && k++<g;) q = Math.max(q - h, this.f),
            m = tu(this, q, r, n, a, e, m);
            q = La(f, this.f, this.g);
            for (k = 0; q != this.g && k++<g;) q = Math.min(q + h, this.g),
            m = tu(this, q, r, n, a, e, m);
            this.b.length = m;
            d = Math.floor(d / h) * h;
            f = La(d, this.j, this.i);
            m = uu(this, f, a, e, 0);
            for (k = 0; f != this.j && k++<g;) f = Math.max(f - h, this.j),
            m = uu(this, f, a, e, m);
            f = La(d, this.j, this.i);
            for (k = 0; f != this.i && k++<g;) f = Math.min(f + h, this.i),
            m = uu(this, f, a, e, m);
            this.a.length = m
        }
        c.Qb(null, this.va);
        a = 0;
        for (f = this.b.length; a < f; ++a) h = this.b[a],
        c.dd(h, null);
        a = 0;
        for (f = this.a.length; a < f; ++a) h = this.a[a],
        c.dd(h, null)
    }; l.setMap = function(a) {
        this.o && (this.o.J("postcompose", this.Kg, this), this.o.render());
        a && (a.I("postcompose", this.Kg, this), a.render());
        this.o = a
    };
    function vu(a, c, d, e, f, g, h) {
        ii.call(this, a, c, d, 0, e);
        this.o = f;
        this.g = new Image;
        null !== g && (this.g.crossOrigin = g);
        this.i = {};
        this.c = null;
        this.state = 0;
        this.j = h
    }
    y(vu, ii); vu.prototype.a = function(a) {
        if (void 0 !== a) {
            var c;
            a = x(a);
            if (a in this.i) return this.i[a];
            pb(this.i) ? c = this.g: c = this.g.cloneNode(!1);
            return this.i[a] = c
        }
        return this.g
    }; vu.prototype.s = function() {
        this.state = 3;
        this.c.forEach(sb);
        this.c = null;
        ji(this)
    }; vu.prototype.A = function() {
        void 0 === this.resolution && (this.resolution = Mc(this.extent) / this.g.height);
        this.state = 2;
        this.c.forEach(sb);
        this.c = null;
        ji(this)
    }; vu.prototype.load = function() {
        0 == this.state && (this.state = 1, ji(this), this.c = [xb(this.g, "error", this.s, this), xb(this.g, "load", this.A, this)], this.j(this, this.o))
    };
    function wu(a, c, d, e, f) {
        Vf.call(this, a, c);
        this.o = d;
        this.g = new Image;
        null !== e && (this.g.crossOrigin = e);
        this.c = {};
        this.j = null;
        this.l = f
    }
    y(wu, Vf); l = wu.prototype; l.fa = function() {
        1 == this.state && xu(this);
        this.a && Bb(this.a);
        this.state = 5;
        Wf(this);
        wu.ia.fa.call(this)
    }; l.fb = function(a) {
        if (void 0 !== a) {
            var c = x(a);
            if (c in this.c) return this.c[c];
            a = pb(this.c) ? this.g: this.g.cloneNode(!1);
            return this.c[c] = a
        }
        return this.g
    }; l.gb = function() {
        return this.o
    }; l.El = function() {
        this.state = 3;
        xu(this);
        Wf(this)
    }; l.Fl = function() {
        this.state = this.g.naturalWidth && this.g.naturalHeight ? 2 : 4;
        xu(this);
        Wf(this)
    }; l.load = function() {
        0 == this.state && (this.state = 1, Wf(this), this.j = [xb(this.g, "error", this.El, this), xb(this.g, "load", this.Fl, this)], this.l(this, this.o))
    };
    function xu(a) {
        a.j.forEach(sb);
        a.j = null
    };
    function yu(a) {
        a = a ? a: {};
        Pi.call(this, {
            handleEvent: Tc
        });
        this.c = a.formatConstructors ? a.formatConstructors: [];
        this.l = a.projection ? ad(a.projection) : null;
        this.a = null;
        this.target = a.target ? a.target: null
    }
    y(yu, Pi);
    function zu(a) {
        a = a.dataTransfer.files;
        var c, d, e;
        c = 0;
        for (d = a.length; c < d; ++c) {
            e = a.item(c);
            var f = new FileReader;
            f.addEventListener("load", qa(this.o, e).bind(this));
            f.readAsText(e)
        }
    }
    function Au(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }
    yu.prototype.o = function(a, c) {
        var d = c.target.result,
        e = this.A,
        f = this.l;
        f || (f = e.aa().i);
        var e = this.c,
        g = [],
        h,
        k;
        h = 0;
        for (k = e.length; h < k; ++h) {
            var m = new e[h];
            var n = {
                featureProjection: f
            };
            try {
                g = m.Ea(d, n)
            } catch(p) {
                g = null
            }
            if (g && 0 < g.length) break
        }
        this.b(new Bu(Cu, this, a, g, f))
    }; yu.prototype.setMap = function(a) {
        this.a && (this.a.forEach(sb), this.a = null);
        yu.ia.setMap.call(this, a);
        a && (a = this.target ? this.target: a.a, this.a = [C(a, "drop", zu, this), C(a, "dragenter", Au, this), C(a, "dragover", Au, this), C(a, "drop", Au, this)])
    };
    var Cu = "addfeatures";
    function Bu(a, c, d, e, f) {
        Cb.call(this, a, c);
        this.features = e;
        this.file = d;
        this.projection = f
    }
    y(Bu, Cb);
    function Du(a) {
        a = a ? a: {};
        cj.call(this, {
            handleDownEvent: Eu,
            handleDragEvent: Fu,
            handleUpEvent: Gu
        });
        this.s = a.condition ? a.condition: $i;
        this.a = this.c = void 0;
        this.l = 0;
        this.B = void 0 !== a.duration ? a.duration: 400
    }
    y(Du, cj);
    function Fu(a) {
        if (bj(a)) {
            var c = a.map,
            d = c.ab(),
            e = a.pixel;
            a = e[0] - d[0] / 2;
            e = d[1] / 2 - e[1];
            d = Math.atan2(e, a);
            a = Math.sqrt(a * a + e * e);
            e = c.aa();
            c.render();
            if (void 0 !== this.c) {
                var f = d - this.c;
                Qi(c, e, e.Ma() - f)
            }
            this.c = d;
            void 0 !== this.a && (d = this.a * (e.$() / a), Si(c, e, d));
            void 0 !== this.a && (this.l = this.a / a);
            this.a = a
        }
    }
    function Gu(a) {
        if (!bj(a)) return ! 0;
        a = a.map;
        var c = a.aa();
        le(c, -1);
        var d = this.l - 1,
        e = c.Ma(),
        e = c.constrainRotation(e, 0);
        Qi(a, c, e, void 0, void 0);
        var e = c.$(),
        f = this.B,
        e = c.constrainResolution(e, 0, d);
        Si(a, c, e, void 0, f);
        this.l = 0;
        return ! 1
    }
    function Eu(a) {
        return bj(a) && this.s(a) ? (le(a.map.aa(), 1), this.a = this.c = void 0, !0) : !1
    };
    function Hu(a, c) {
        Cb.call(this, a);
        this.feature = c
    }
    y(Hu, Cb);
    function Iu(a) {
        cj.call(this, {
            handleDownEvent: Ju,
            handleEvent: Ku,
            handleUpEvent: Lu
        });
        this.ya = null;
        this.S = !1;
        this.mc = a.source ? a.source: null;
        this.sb = a.features ? a.features: null;
        this.kj = a.snapTolerance ? a.snapTolerance: 12;
        this.Y = a.type;
        this.c = Mu(this.Y);
        this.Ua = a.minPoints ? a.minPoints: this.c === Nu ? 3 : 2;
        this.ta = a.maxPoints ? a.maxPoints: Infinity;
        var c = a.geometryFunction;
        if (!c) if ("Circle" === this.Y) c = function(a, c) {
            var d = c ? c: new lu([NaN, NaN]);
            d.Of(a[0], Math.sqrt(Xb(a[0], a[1])));
            return d
        };
        else {
            var d, c = this.c;
            c === Ou ? d = E: c === Pu ? d = S: c === Nu && (d = F);
            c = function(a, c) {
                var g = c;
                g ? g.ma(a) : g = new d(a);
                return g
            }
        }
        this.H = c;
        this.T = this.B = this.a = this.D = this.l = this.s = null;
        this.tj = a.clickTolerance ? a.clickTolerance * a.clickTolerance: 36;
        this.na = new G({
            source: new Q({
                useSpatialIndex: !1,
                wrapX: a.wrapX ? a.wrapX: !1
            }),
            style: a.style ? a.style: Qu()
        });
        this.lc = a.geometryName;
        this.Di = a.condition ? a.condition: Zi;
        this.oa = a.freehandCondition ? a.freehandCondition: $i;
        C(this, Mb("active"), this.oi, this)
    }
    y(Iu, cj);
    function Qu() {
        var a = qk();
        return function(c) {
            return a[c.W().X()]
        }
    }
    l = Iu.prototype; l.setMap = function(a) {
        Iu.ia.setMap.call(this, a);
        this.oi()
    };
    function Ku(a) {
        this.c !== Pu && this.c !== Nu || !this.oa(a) || (this.S = !0);
        var c = !this.S;
        this.S && a.type === ai ? (Ru(this, a), c = !1) : a.type === $h ? c = Su(this, a) : a.type === Uh && (c = !1);
        return dj.call(this, a) && c
    }
    function Ju(a) {
        return this.Di(a) ? (this.ya = a.pixel, !0) : this.S ? (this.ya = a.pixel, this.s || Tu(this, a), !0) : !1
    }
    function Lu(a) {
        this.S = !1;
        var c = this.ya,
        d = a.pixel,
        e = c[0] - d[0],
        c = c[1] - d[1],
        d = !0;
        e * e + c * c <= this.tj && (Su(this, a), this.s ? this.c === Uu ? this.ed() : Vu(this, a) ? this.ed() : Ru(this, a) : (Tu(this, a), this.c === Ou && this.ed()), d = !1);
        return d
    }
    function Su(a, c) {
        if (a.s) {
            var d = c.coordinate,
            e = a.l.W(),
            f;
            a.c === Ou ? f = a.a: a.c === Nu ? (f = a.a[0], f = f[f.length - 1], Vu(a, c) && (d = a.s.slice())) : (f = a.a, f = f[f.length - 1]);
            f[0] = d[0];
            f[1] = d[1];
            a.H(a.a, e);
            a.D && a.D.W().ma(d);
            e instanceof F && a.c !== Nu ? (a.B || (a.B = new xl(new S(null))), e = e.Ag(0), d = a.B.W(), d.ba(e.f, e.ga())) : a.T && (d = a.B.W(), d.ma(a.T));
            Wu(a)
        } else d = c.coordinate.slice(),
        a.D ? a.D.W().ma(d) : (a.D = new xl(new E(d)), Wu(a));
        return ! 0
    }
    function Vu(a, c) {
        var d = !1;
        if (a.l) {
            var e = !1,
            f = [a.s];
            a.c === Pu ? e = a.a.length > a.Ua: a.c === Nu && (e = a.a[0].length > a.Ua, f = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (e) for (var e = c.map,
            g = 0,
            h = f.length; g < h; g++) {
                var k = f[g],
                m = e.Ga(k),
                n = c.pixel,
                d = n[0] - m[0],
                m = n[1] - m[1],
                n = a.S && a.oa(c) ? 1 : a.kj;
                if (d = Math.sqrt(d * d + m * m) <= n) {
                    a.s = k;
                    break
                }
            }
        }
        return d
    }
    function Tu(a, c) {
        var d = c.coordinate;
        a.s = d;
        a.c === Ou ? a.a = d.slice() : a.c === Nu ? (a.a = [[d.slice(), d.slice()]], a.T = a.a[0]) : (a.a = [d.slice(), d.slice()], a.c === Uu && (a.T = a.a));
        a.T && (a.B = new xl(new S(a.T)));
        d = a.H(a.a);
        a.l = new xl;
        a.lc && a.l.Bc(a.lc);
        a.l.Ra(d);
        Wu(a);
        a.b(new Hu("drawstart", a.l))
    }
    function Ru(a, c) {
        var d = c.coordinate,
        e = a.l.W(),
        f,
        g;
        if (a.c === Pu) a.s = d.slice(),
        g = a.a,
        g.push(d.slice()),
        f = g.length > a.ta,
        a.H(g, e);
        else if (a.c === Nu) {
            g = a.a[0];
            g.push(d.slice());
            if (f = g.length > a.ta) a.s = g[0];
            a.H(a.a, e)
        }
        Wu(a);
        f && a.ed()
    }
    l.to = function() {
        var a = this.l.W(),
        c,
        d;
        this.c === Pu ? (c = this.a, c.splice( - 2, 1), this.H(c, a)) : this.c === Nu && (c = this.a[0], c.splice( - 2, 1), d = this.B.W(), d.ma(c), this.H(this.a, a));
        0 === c.length && (this.s = null);
        Wu(this)
    }; l.ed = function() {
        var a = Xu(this),
        c = this.a,
        d = a.W();
        this.c === Pu ? (c.pop(), this.H(c, d)) : this.c === Nu && (c[0].pop(), c[0].push(c[0][0]), this.H(c, d));
        "MultiPoint" === this.Y ? a.Ra(new oo([c])) : "MultiLineString" === this.Y ? a.Ra(new T([c])) : "MultiPolygon" === this.Y && a.Ra(new po([c]));
        this.b(new Hu("drawend", a));
        this.sb && this.sb.push(a);
        this.mc && this.mc.tb(a)
    };
    function Xu(a) {
        a.s = null;
        var c = a.l;
        c && (a.l = null, a.D = null, a.B = null, a.na.ea().clear(!0));
        return c
    }
    l.cm = function(a) {
        var c = a.W();
        this.l = a;
        this.a = c.Z();
        a = this.a[this.a.length - 1];
        this.s = a.slice();
        this.a.push(a.slice());
        Wu(this);
        this.b(new Hu("drawstart", this.l))
    }; l.Dc = Uc;
    function Wu(a) {
        var c = [];
        a.l && c.push(a.l);
        a.B && c.push(a.B);
        a.D && c.push(a.D);
        a = a.na.ea();
        a.clear(!0);
        a.Fc(c)
    }
    l.oi = function() {
        var a = this.A,
        c = this.f();
        a && c || Xu(this);
        this.na.setMap(c ? a: null)
    };
    function Mu(a) {
        var c;
        "Point" === a || "MultiPoint" === a ? c = Ou: "LineString" === a || "MultiLineString" === a ? c = Pu: "Polygon" === a || "MultiPolygon" === a ? c = Nu: "Circle" === a && (c = Uu);
        return c
    }
    var Ou = "Point",
    Pu = "LineString",
    Nu = "Polygon",
    Uu = "Circle";
    function Yu(a, c, d) {
        Cb.call(this, a);
        this.features = c;
        this.mapBrowserPointerEvent = d
    }
    y(Yu, Cb);
    function Zu(a) {
        cj.call(this, {
            handleDownEvent: $u,
            handleDragEvent: av,
            handleEvent: bv,
            handleUpEvent: cv
        });
        this.ta = a.deleteCondition ? a.deleteCondition: Hg(Zi, Yi);
        this.oa = this.c = null;
        this.ya = [0, 0];
        this.H = this.T = !1;
        this.a = new $l;
        this.D = void 0 !== a.pixelTolerance ? a.pixelTolerance: 10;
        this.s = this.na = !1;
        this.l = null;
        this.S = new G({
            source: new Q({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.style ? a.style: dv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.Y = {
            Point: this.jm,
            LineString: this.dh,
            LinearRing: this.dh,
            Polygon: this.km,
            MultiPoint: this.hm,
            MultiLineString: this.gm,
            MultiPolygon: this.im,
            GeometryCollection: this.fm
        };
        this.B = a.features;
        this.B.forEach(this.rf, this);
        C(this.B, "add", this.dm, this);
        C(this.B, "remove", this.em, this)
    }
    y(Zu, cj); l = Zu.prototype; l.rf = function(a) {
        var c = a.W();
        c.X() in this.Y && this.Y[c.X()].call(this, a, c); (c = this.A) && ev(this, this.ya, c);
        C(a, "change", this.bh, this)
    };
    function fv(a, c) {
        a.H || (a.H = !0, a.b(new Yu("modifystart", a.B, c)))
    }
    function gv(a, c) {
        hv(a, c);
        a.c && 0 === a.B.Zb() && (a.S.ea().mb(a.c), a.c = null);
        yb(c, "change", a.bh, a)
    }
    function hv(a, c) {
        var d = a.a,
        e = [];
        d.forEach(function(a) {
            c === a.feature && e.push(a)
        });
        for (var f = e.length - 1; 0 <= f; --f) d.remove(e[f])
    }
    l.setMap = function(a) {
        this.S.setMap(a);
        Zu.ia.setMap.call(this, a)
    }; l.dm = function(a) {
        this.rf(a.element)
    }; l.bh = function(a) {
        this.s || (a = a.target, gv(this, a), this.rf(a))
    }; l.em = function(a) {
        gv(this, a.element)
    }; l.jm = function(a, c) {
        var d = c.Z(),
        d = {
            feature: a,
            geometry: c,
            ka: [d, d]
        };
        this.a.Aa(c.G(), d)
    }; l.hm = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g;
        f = 0;
        for (g = d.length; f < g; ++f) e = d[f],
        e = {
            feature: a,
            geometry: c,
            depth: [f],
            index: f,
            ka: [e, e]
        },
        this.a.Aa(c.G(), e)
    }; l.dh = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h;
        e = 0;
        for (f = d.length - 1; e < f; ++e) g = d.slice(e, e + 2),
        h = {
            feature: a,
            geometry: c,
            index: e,
            ka: g
        },
        this.a.Aa(nc(g), h)
    }; l.gm = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
        h = 0;
        for (k = d.length; h < k; ++h) for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) m = e.slice(f, f + 2),
        n = {
            feature: a,
            geometry: c,
            depth: [h],
            index: f,
            ka: m
        },
        this.a.Aa(nc(m), n)
    }; l.km = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
        h = 0;
        for (k = d.length; h < k; ++h) for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) m = e.slice(f, f + 2),
        n = {
            feature: a,
            geometry: c,
            depth: [h],
            index: f,
            ka: m
        },
        this.a.Aa(nc(m), n)
    }; l.im = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h,
        k,
        m,
        n,
        p,
        q,
        r;
        m = 0;
        for (n = d.length; m < n; ++m) for (p = d[m], h = 0, k = p.length; h < k; ++h) for (e = p[h], f = 0, g = e.length - 1; f < g; ++f) q = e.slice(f, f + 2),
        r = {
            feature: a,
            geometry: c,
            depth: [h, m],
            index: f,
            ka: q
        },
        this.a.Aa(nc(q), r)
    }; l.fm = function(a, c) {
        var d, e = c.c;
        for (d = 0; d < e.length; ++d) this.Y[e[d].X()].call(this, a, e[d])
    };
    function iv(a, c) {
        var d = a.c;
        d ? d.W().ma(c) : (d = new xl(new E(c)), a.c = d, a.S.ea().tb(d))
    }
    function jv(a, c) {
        return a.index - c.index
    }
    function $u(a) {
        ev(this, a.pixel, a.map);
        this.l = [];
        this.H = !1;
        var c = this.c;
        if (c) {
            var d = [],
            c = c.W().Z(),
            e = nc([c]),
            e = cm(this.a, e),
            f = {};
            e.sort(jv);
            for (var g = 0,
            h = e.length; g < h; ++g) {
                var k = e[g],
                m = k.ka,
                n = x(k.feature),
                p = k.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if (Vb(m[0], c) && !f[n][0]) this.l.push([k, 0]),
                f[n][0] = k;
                else if (Vb(m[1], c) && !f[n][1]) {
                    if ("LineString" !== k.geometry.X() && "MultiLineString" !== k.geometry.X() || !f[n][0] || 0 !== f[n][0].index) this.l.push([k, 1]),
                    f[n][1] = k
                } else x(m) in this.oa && !f[n][0] && !f[n][1] && d.push([k, c])
            }
            d.length && fv(this, a);
            for (a = d.length - 1; 0 <= a; --a) this.bl.apply(this, d[a])
        }
        return !! this.c
    }
    function av(a) {
        this.T = !1;
        fv(this, a);
        a = a.coordinate;
        for (var c = 0,
        d = this.l.length; c < d; ++c) {
            for (var e = this.l[c], f = e[0], g = f.depth, h = f.geometry, k = h.Z(), m = f.ka, e = e[1]; a.length < h.ra();) a.push(0);
            switch (h.X()) {
            case "Point":
                k = a;
                m[0] = m[1] = a;
                break;
            case "MultiPoint":
                k[f.index] = a;
                m[0] = m[1] = a;
                break;
            case "LineString":
                k[f.index + e] = a;
                m[e] = a;
                break;
            case "MultiLineString":
                k[g[0]][f.index + e] = a;
                m[e] = a;
                break;
            case "Polygon":
                k[g[0]][f.index + e] = a;
                m[e] = a;
                break;
            case "MultiPolygon":
                k[g[1]][g[0]][f.index + e] = a,
                m[e] = a
            }
            f = h;
            this.s = !0;
            f.ma(k);
            this.s = !1
        }
        iv(this, a)
    }
    function cv(a) {
        for (var c, d = this.l.length - 1; 0 <= d; --d) c = this.l[d][0],
        am(this.a, nc(c.ka), c);
        this.H && (this.b(new Yu("modifyend", this.B, a)), this.H = !1);
        return ! 1
    }
    function bv(a) {
        if (! (a instanceof Qh)) return ! 0;
        var c;
        a.map.aa().f.slice()[1] || a.type != $h || this.N || (this.ya = a.pixel, ev(this, a.pixel, a.map));
        if (this.c && this.ta(a)) if (a.type == Vh && this.T) c = !0;
        else {
            this.c.W();
            fv(this, a);
            c = this.l;
            var d = {},
            e, f, g, h, k, m, n, p, q;
            for (k = c.length - 1; 0 <= k; --k) if (g = c[k], p = g[0], h = p.geometry, f = h.Z(), q = x(p.feature), p.depth && (q += "-" + p.depth.join("-")), n = e = m = void 0, 0 === g[1] ? (e = p, m = p.index) : 1 == g[1] && (n = p, m = p.index + 1), q in d || (d[q] = [n, e, m]), g = d[q], void 0 !== n && (g[0] = n), void 0 !== e && (g[1] = e), void 0 !== g[0] && void 0 !== g[1]) {
                e = f;
                q = !1;
                n = m - 1;
                switch (h.X()) {
                case "MultiLineString":
                    f[p.depth[0]].splice(m, 1);
                    q = !0;
                    break;
                case "LineString":
                    f.splice(m, 1);
                    q = !0;
                    break;
                case "MultiPolygon":
                    e = e[p.depth[1]];
                case "Polygon":
                    e = e[p.depth[0]],
                    4 < e.length && (m == e.length - 1 && (m = 0), e.splice(m, 1), q = !0, 0 === m && (e.pop(), e.push(e[0]), n = e.length - 1))
                }
                q && (this.a.remove(g[0]), this.a.remove(g[1]), e = h, this.s = !0, e.ma(f), this.s = !1, f = {
                    depth: p.depth,
                    feature: p.feature,
                    geometry: p.geometry,
                    index: n,
                    ka: [g[0].ka[0], g[1].ka[1]]
                },
                this.a.Aa(nc(f.ka), f), kv(this, h, m, p.depth, -1), this.c && (this.S.ea().mb(this.c), this.c = null))
            }
            c = !0;
            this.b(new Yu("modifyend", this.B, a));
            this.H = !1
        }
        a.type == Vh && (this.T = !1);
        return dj.call(this, a) && !c
    }
    function ev(a, c, d) {
        function e(a, c) {
            return Yb(f, a.ka) - Yb(f, c.ka)
        }
        var f = d.Oa(c),
        g = d.Oa([c[0] - a.D, c[1] + a.D]),
        h = d.Oa([c[0] + a.D, c[1] - a.D]),
        g = nc([g, h]),
        g = cm(a.a, g);
        if (0 < g.length) {
            g.sort(e);
            var h = g[0].ka,
            k = Sb(f, h),
            m = d.Ga(k);
            if (Math.sqrt(Xb(c, m)) <= a.D) {
                c = d.Ga(h[0]);
                d = d.Ga(h[1]);
                c = Xb(m, c);
                d = Xb(m, d);
                a.na = Math.sqrt(Math.min(c, d)) <= a.D;
                a.na && (k = c > d ? h[1] : h[0]);
                iv(a, k);
                d = {};
                d[x(h)] = !0;
                c = 1;
                for (m = g.length; c < m; ++c) if (k = g[c].ka, Vb(h[0], k[0]) && Vb(h[1], k[1]) || Vb(h[0], k[1]) && Vb(h[1], k[0])) d[x(k)] = !0;
                else break;
                a.oa = d;
                return
            }
        }
        a.c && (a.S.ea().mb(a.c), a.c = null)
    }
    l.bl = function(a, c) {
        for (var d = a.ka,
        e = a.feature,
        f = a.geometry,
        g = a.depth,
        h = a.index,
        k; c.length < f.ra();) c.push(0);
        switch (f.X()) {
        case "MultiLineString":
            k = f.Z();
            k[g[0]].splice(h + 1, 0, c);
            break;
        case "Polygon":
            k = f.Z();
            k[g[0]].splice(h + 1, 0, c);
            break;
        case "MultiPolygon":
            k = f.Z();
            k[g[1]][g[0]].splice(h + 1, 0, c);
            break;
        case "LineString":
            k = f.Z();
            k.splice(h + 1, 0, c);
            break;
        default:
            return
        }
        this.s = !0;
        f.ma(k);
        this.s = !1;
        k = this.a;
        k.remove(a);
        kv(this, f, h, g, 1);
        var m = {
            ka: [d[0], c],
            feature: e,
            geometry: f,
            depth: g,
            index: h
        };
        k.Aa(nc(m.ka), m);
        this.l.push([m, 1]);
        d = {
            ka: [c, d[1]],
            feature: e,
            geometry: f,
            depth: g,
            index: h + 1
        };
        k.Aa(nc(d.ka), d);
        this.l.push([d, 0]);
        this.T = !0
    };
    function kv(a, c, d, e, f) {
        em(a.a, c.G(),
        function(a) {
            a.geometry === c && (void 0 === e || void 0 === a.depth || bb(a.depth, e)) && a.index > d && (a.index += f)
        })
    }
    function dv() {
        var a = qk();
        return function() {
            return a.Point
        }
    };
    function lv(a, c, d, e) {
        Cb.call(this, a);
        this.selected = c;
        this.deselected = d;
        this.mapBrowserEvent = e
    }
    y(lv, Cb);
    function mv(a) {
        Pi.call(this, {
            handleEvent: nv
        });
        var c = a ? a: {};
        this.N = c.condition ? c.condition: Yi;
        this.B = c.addCondition ? c.addCondition: Uc;
        this.H = c.removeCondition ? c.removeCondition: Uc;
        this.D = c.toggleCondition ? c.toggleCondition: $i;
        this.s = c.multi ? c.multi: !1;
        this.o = c.filter ? c.filter: Tc;
        this.c = new G({
            source: new Q({
                useSpatialIndex: !1,
                features: c.features,
                wrapX: c.wrapX
            }),
            style: c.style ? c.style: ov(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (c.layers) if (ia(c.layers)) a = function(a) {
            return c.layers(a)
        };
        else {
            var d = c.layers;
            a = function(a) {
                return Wa(d, a)
            }
        } else a = Tc;
        this.l = a;
        this.a = {};
        a = this.c.ea().c;
        C(a, "add", this.lm, this);
        C(a, "remove", this.om, this)
    }
    y(mv, Pi); l = mv.prototype; l.mm = function() {
        return this.c.ea().c
    }; l.nm = function(a) {
        a = x(a);
        return this.a[a]
    };
    function nv(a) {
        if (!this.N(a)) return ! 0;
        var c = this.B(a),
        d = this.H(a),
        e = this.D(a),
        f = !c && !d && !e,
        g = a.map,
        h = this.c.ea().c,
        k = [],
        m = [],
        n = !1;
        if (f) g.fd(a.pixel,
        function(a, c) {
            if (this.o(a, c)) {
                m.push(a);
                var d = x(a);
                this.a[d] = c;
                return ! this.s
            }
        },
        this, this.l),
        0 < m.length && 1 == h.Zb() && h.item(0) == m[0] || (n = !0, 0 !== h.Zb() && (k = Array.prototype.concat(h.a), h.clear()), h.jf(m), 0 === m.length ? nb(this.a) : 0 < k.length && k.forEach(function(a) {
            a = x(a);
            delete this.a[a]
        },
        this));
        else {
            g.fd(a.pixel,
            function(a, f) {
                if (this.o(a, f)) {
                    if (!c && !e || Wa(h.a, a))(d || e) && Wa(h.a, a) && (k.push(a), g = x(a), delete this.a[g]);
                    else {
                        m.push(a);
                        var g = x(a);
                        this.a[g] = f
                    }
                    return ! this.s
                }
            },
            this, this.l);
            for (f = k.length - 1; 0 <= f; --f) h.remove(k[f]);
            h.jf(m);
            if (0 < m.length || 0 < k.length) n = !0
        }
        n && this.b(new lv("select", m, k, a));
        return Xi(a)
    }
    l.setMap = function(a) {
        var c = this.A,
        d = this.c.ea().c;
        c && d.forEach(c.mi, c);
        mv.ia.setMap.call(this, a);
        this.c.setMap(a);
        a && d.forEach(a.ki, a)
    };
    function ov() {
        var a = qk();
        Za(a.Polygon, a.LineString);
        Za(a.GeometryCollection, a.LineString);
        return function(c) {
            return a[c.W().X()]
        }
    }
    l.lm = function(a) {
        a = a.element;
        var c = this.A;
        c && c.ki(a)
    }; l.om = function(a) {
        a = a.element;
        var c = this.A;
        c && c.mi(a)
    };
    function pv(a) {
        cj.call(this, {
            handleEvent: qv,
            handleDownEvent: Tc,
            handleUpEvent: rv
        });
        a = a ? a: {};
        this.s = a.source ? a.source: null;
        this.na = void 0 !== a.vertex ? a.vertex: !0;
        this.T = void 0 !== a.edge ? a.edge: !0;
        this.l = a.features ? a.features: null;
        this.oa = [];
        this.H = {};
        this.D = {};
        this.Y = {};
        this.B = {};
        this.S = null;
        this.c = void 0 !== a.pixelTolerance ? a.pixelTolerance: 10;
        this.ta = sv.bind(this);
        this.a = new $l;
        this.ya = {
            Point: this.um,
            LineString: this.gh,
            LinearRing: this.gh,
            Polygon: this.vm,
            MultiPoint: this.sm,
            MultiLineString: this.rm,
            MultiPolygon: this.tm,
            GeometryCollection: this.qm
        }
    }
    y(pv, cj); l = pv.prototype; l.tb = function(a, c) {
        var d = void 0 !== c ? c: !0,
        e = a.W(),
        f = this.ya[e.X()];
        if (f) {
            var g = x(a);
            this.Y[g] = e.G(oc());
            f.call(this, a, e);
            d && (this.D[g] = C(e, "change", this.Ak.bind(this, a), this), this.H[g] = C(a, Mb(a.a), this.pm, this))
        }
    }; l.zj = function(a) {
        this.tb(a)
    }; l.Aj = function(a) {
        this.mb(a)
    }; l.eh = function(a) {
        var c;
        a instanceof jm ? c = a.feature: a instanceof Be && (c = a.element);
        this.tb(c)
    }; l.fh = function(a) {
        var c;
        a instanceof jm ? c = a.feature: a instanceof Be && (c = a.element);
        this.mb(c)
    }; l.pm = function(a) {
        a = a.target;
        this.mb(a, !0);
        this.tb(a, !0)
    }; l.Ak = function(a) {
        if (this.N) {
            var c = x(a);
            c in this.B || (this.B[c] = a)
        } else this.ni(a)
    }; l.mb = function(a, c) {
        var d = void 0 !== c ? c: !0,
        e = x(a),
        f = this.Y[e];
        if (f) {
            var g = this.a,
            h = [];
            em(g, f,
            function(c) {
                a === c.feature && h.push(c)
            });
            for (f = h.length - 1; 0 <= f; --f) g.remove(h[f]);
            d && (Ib(this.D[e]), delete this.D[e], Ib(this.H[e]), delete this.H[e])
        }
    }; l.setMap = function(a) {
        var c = this.A,
        d = this.oa,
        e;
        this.l ? e = this.l: this.s && (e = this.s.je());
        c && (d.forEach(Ib), d.length = 0, e.forEach(this.Aj, this));
        pv.ia.setMap.call(this, a);
        a && (this.l ? d.push(C(this.l, "add", this.eh, this), C(this.l, "remove", this.fh, this)) : this.s && d.push(C(this.s, "addfeature", this.eh, this), C(this.s, "removefeature", this.fh, this)), e.forEach(this.zj, this))
    }; l.Dc = Uc; l.ni = function(a) {
        this.mb(a, !1);
        this.tb(a, !1)
    }; l.qm = function(a, c) {
        var d, e = c.c;
        for (d = 0; d < e.length; ++d) this.ya[e[d].X()].call(this, a, e[d])
    }; l.gh = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h;
        e = 0;
        for (f = d.length - 1; e < f; ++e) g = d.slice(e, e + 2),
        h = {
            feature: a,
            ka: g
        },
        this.a.Aa(nc(g), h)
    }; l.rm = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
        h = 0;
        for (k = d.length; h < k; ++h) for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) m = e.slice(f, f + 2),
        n = {
            feature: a,
            ka: m
        },
        this.a.Aa(nc(m), n)
    }; l.sm = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g;
        f = 0;
        for (g = d.length; f < g; ++f) e = d[f],
        e = {
            feature: a,
            ka: [e, e]
        },
        this.a.Aa(c.G(), e)
    }; l.tm = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h,
        k,
        m,
        n,
        p,
        q,
        r;
        m = 0;
        for (n = d.length; m < n; ++m) for (p = d[m], h = 0, k = p.length; h < k; ++h) for (e = p[h], f = 0, g = e.length - 1; f < g; ++f) q = e.slice(f, f + 2),
        r = {
            feature: a,
            ka: q
        },
        this.a.Aa(nc(q), r)
    }; l.um = function(a, c) {
        var d = c.Z(),
        d = {
            feature: a,
            ka: [d, d]
        };
        this.a.Aa(c.G(), d)
    }; l.vm = function(a, c) {
        var d = c.Z(),
        e,
        f,
        g,
        h,
        k,
        m,
        n;
        h = 0;
        for (k = d.length; h < k; ++h) for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) m = e.slice(f, f + 2),
        n = {
            feature: a,
            ka: m
        },
        this.a.Aa(nc(m), n)
    };
    function qv(a) {
        var c, d;
        d = a.pixel;
        var e = a.coordinate;
        c = a.map;
        var f = c.Oa([d[0] - this.c, d[1] + this.c]),
        g = c.Oa([d[0] + this.c, d[1] - this.c]),
        f = nc([f, g]),
        h = cm(this.a, f),
        k = !1,
        f = !1,
        m = null,
        g = null;
        if (0 < h.length) {
            this.S = e;
            h.sort(this.ta);
            h = h[0].ka;
            if (this.na && !this.T) {
                if (e = c.Ga(h[0]), k = c.Ga(h[1]), e = Xb(d, e), d = Xb(d, k), k = Math.sqrt(Math.min(e, d)), k = k <= this.c) f = !0,
                m = e > d ? h[1] : h[0],
                g = c.Ga(m)
            } else this.T && (m = Sb(e, h), g = c.Ga(m), Math.sqrt(Xb(d, g)) <= this.c && (f = !0, this.na && (e = c.Ga(h[0]), k = c.Ga(h[1]), e = Xb(g, e), d = Xb(g, k), k = Math.sqrt(Math.min(e, d)), k = k <= this.c))) && (m = e > d ? h[1] : h[0], g = c.Ga(m));
            f && (g = [Math.round(g[0]), Math.round(g[1])])
        }
        c = m;
        d = g;
        f && (a.coordinate = c.slice(0, 2), a.pixel = d);
        return dj.call(this, a)
    }
    function rv() {
        var a = ob(this.B);
        a.length && (a.forEach(this.ni, this), this.B = {});
        return ! 1
    }
    function sv(a, c) {
        return Yb(this.S, a.ka) - Yb(this.S, c.ka)
    };
    function tv(a, c, d) {
        Cb.call(this, a);
        this.features = c;
        this.coordinate = d
    }
    y(tv, Cb);
    function uv(a) {
        cj.call(this, {
            handleDownEvent: vv,
            handleDragEvent: wv,
            handleMoveEvent: xv,
            handleUpEvent: yv
        });
        this.s = void 0;
        this.a = null;
        this.c = void 0 !== a.features ? a.features: null;
        this.l = null
    }
    y(uv, cj);
    function vv(a) {
        this.l = zv(this, a.pixel, a.map);
        return ! this.a && this.l ? (this.a = a.coordinate, xv.call(this, a), this.b(new tv("translatestart", this.c, a.coordinate)), !0) : !1
    }
    function yv(a) {
        return this.a ? (this.a = null, xv.call(this, a), this.b(new tv("translateend", this.c, a.coordinate)), !0) : !1
    }
    function wv(a) {
        if (this.a) {
            a = a.coordinate;
            var c = a[0] - this.a[0],
            d = a[1] - this.a[1];
            if (this.c) this.c.forEach(function(a) {
                var e = a.W();
                e.Mc(c, d);
                a.Ra(e)
            });
            else if (this.l) {
                var e = this.l.W();
                e.Mc(c, d);
                this.l.Ra(e)
            }
            this.a = a;
            this.b(new tv("translating", this.c, a))
        }
    }
    function xv(a) {
        var c = a.map.vc();
        if (a = a.map.fd(a.pixel,
        function(a) {
            return a
        })) {
            var d = !1;
            this.c && Wa(this.c.a, a) && (d = !0);
            this.s = c.style.cursor;
            c.style.cursor = this.a ? "-webkit-grabbing": d ? "-webkit-grab": "pointer";
            c.style.cursor = this.a ? d ? "grab": "pointer": "grabbing"
        } else c.style.cursor = void 0 !== this.s ? this.s: "",
        this.s = void 0
    }
    function zv(a, c, d) {
        var e = null;
        c = d.fd(c,
        function(a) {
            return a
        });
        a.c && Wa(a.c.a, c) && (e = c);
        return e
    };
    function V(a) {
        a = a ? a: {};
        var c = mb({},
        a);
        delete c.gradient;
        delete c.radius;
        delete c.blur;
        delete c.shadow;
        delete c.weight;
        G.call(this, c);
        this.i = null;
        this.Y = void 0 !== a.shadow ? a.shadow: 250;
        this.T = void 0;
        this.S = null;
        C(this, Mb("gradient"), this.Bk, this);
        this.ai(a.gradient ? a.gradient: Av);
        this.Wh(void 0 !== a.blur ? a.blur: 15);
        this.jh(void 0 !== a.radius ? a.radius: 8);
        C(this, Mb("blur"), this.ef, this);
        C(this, Mb("radius"), this.ef, this);
        this.ef();
        var d = a.weight ? a.weight: "weight",
        e;
        "string" === typeof d ? e = function(a) {
            return a.get(d)
        }: e = d;
        this.c(function(a) {
            a = e(a);
            a = void 0 !== a ? La(a, 0, 1) : 1;
            var c = 255 * a | 0,
            d = this.S[c];
            d || (d = [new lk({
                image: new xi({
                    opacity: a,
                    src: this.T
                })
            })], this.S[c] = d);
            return d
        }.bind(this));
        this.set("renderOrder", null);
        C(this, "render", this.Sk, this)
    }
    y(V, G);
    var Av = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"]; l = V.prototype; l.rg = function() {
        return this.get("blur")
    }; l.zg = function() {
        return this.get("gradient")
    }; l.ih = function() {
        return this.get("radius")
    }; l.Bk = function() {
        for (var a = this.zg(), c = Pg(1, 256), d = c.createLinearGradient(0, 0, 1, 256), e = 1 / (a.length - 1), f = 0, g = a.length; f < g; ++f) d.addColorStop(f * e, a[f]);
        c.fillStyle = d;
        c.fillRect(0, 0, 1, 256);
        this.i = c.getImageData(0, 0, 1, 256).data
    }; l.ef = function() {
        var a = this.ih(),
        c = this.rg(),
        d = a + c + 1,
        e = 2 * d,
        e = Pg(e, e);
        e.shadowOffsetX = e.shadowOffsetY = this.Y;
        e.shadowBlur = c;
        e.shadowColor = "#000";
        e.beginPath();
        c = d - this.Y;
        e.arc(c, c, a, 0, 2 * Math.PI, !0);
        e.fill();
        this.T = e.canvas.toDataURL();
        this.S = Array(256);
        this.u()
    }; l.Sk = function(a) {
        a = a.context;
        var c = a.canvas,
        c = a.getImageData(0, 0, c.width, c.height),
        d = c.data,
        e,
        f,
        g;
        e = 0;
        for (f = d.length; e < f; e += 4) if (g = 4 * d[e + 3]) d[e] = this.i[g],
        d[e + 1] = this.i[g + 1],
        d[e + 2] = this.i[g + 2];
        a.putImageData(c, 0, 0)
    }; l.Wh = function(a) {
        this.set("blur", a)
    }; l.ai = function(a) {
        this.set("gradient", a)
    }; l.jh = function(a) {
        this.set("radius", a)
    };
    function Bv(a, c, d, e) {
        function f() {
            delete aa[h];
            g.parentNode.removeChild(g)
        }
        var g = aa.document.createElement("script"),
        h = "olc_" + x(c);
        g.async = !0;
        g.src = a + ( - 1 == a.indexOf("?") ? "?": "&") + (e || "callback") + "=" + h;
        var k = aa.setTimeout(function() {
            f();
            d && d()
        },
        1E4);
        aa[h] = function(a) {
            aa.clearTimeout(k);
            f();
            c(a)
        };
        aa.document.getElementsByTagName("head")[0].appendChild(g)
    };
    function Cv(a, c, d, e, f, g, h, k, m, n, p) {
        Vf.call(this, f, 0);
        this.N = void 0 !== p ? p: !1;
        this.B = h;
        this.U = k;
        this.i = null;
        this.c = {};
        this.j = c;
        this.l = e;
        this.s = g ? g: f;
        this.g = [];
        this.Qc = null;
        this.o = 0;
        g = e.Da(this.s);
        k = this.l.G();
        f = this.j.G();
        g = k ? Pc(g, k) : g;
        if (0 === Jc(g)) this.state = 4;
        else if ((k = a.G()) && (f ? f = Pc(f, k) : f = k), e = e.$(this.s[0]), e = hl(a, d, Nc(g), e), !isFinite(e) || 0 >= e) this.state = 4;
        else if (this.A = new kl(a, d, g, f, e * (void 0 !== n ? n: .5)), 0 === this.A.f.length) this.state = 4;
        else if (this.o = ig(c, e), d = ml(this.A), f && (a.a ? (d[1] = La(d[1], f[1], f[3]), d[3] = La(d[3], f[1], f[3])) : d = Pc(d, f)), Jc(d)) if (a = dg(c, d, this.o), 100 > (a.wa - a.ua + 1) * (a.Ba - a.za + 1)) {
            for (c = a.ua; c <= a.wa; c++) for (d = a.za; d <= a.Ba; d++)(n = m(this.o, c, d, h)) && this.g.push(n);
            0 === this.g.length && (this.state = 4)
        } else this.state = 3;
        else this.state = 4
    }
    y(Cv, Vf); Cv.prototype.fa = function() {
        1 == this.state && (this.Qc.forEach(sb), this.Qc = null);
        Cv.ia.fa.call(this)
    }; Cv.prototype.fb = function(a) {
        if (void 0 !== a) {
            var c = x(a);
            if (c in this.c) return this.c[c];
            a = pb(this.c) ? this.i: this.i.cloneNode(!1);
            return this.c[c] = a
        }
        return this.i
    }; Cv.prototype.wd = function() {
        var a = [];
        this.g.forEach(function(c) {
            c && 2 == c.V() && a.push({
                extent: this.j.Da(c.ja),
                image: c.fb()
            })
        },
        this);
        this.g.length = 0;
        if (0 === a.length) this.state = 3;
        else {
            var c = this.s[0],
            d = this.l.Ya(c),
            e = ha(d) ? d: d[0],
            d = ha(d) ? d: d[1],
            c = this.l.$(c),
            f = this.j.$(this.o),
            g = this.l.Da(this.s);
            this.i = jl(e, d, this.B, f, this.j.G(), c, g, this.A, a, this.U, this.N);
            this.state = 2
        }
        Wf(this)
    }; Cv.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            Wf(this);
            var a = 0;
            this.Qc = [];
            this.g.forEach(function(c) {
                var d = c.V();
                if (0 == d || 1 == d) {
                    a++;
                    var e;
                    e = C(c, "change",
                    function() {
                        var d = c.V();
                        if (2 == d || 3 == d || 4 == d) sb(e),
                        a--,
                        0 === a && (this.Qc.forEach(sb), this.Qc = null, this.wd())
                    },
                    this);
                    this.Qc.push(e)
                }
            },
            this);
            this.g.forEach(function(a) {
                0 == a.V() && a.load()
            });
            0 === a && aa.setTimeout(this.wd.bind(this), 0)
        }
    };
    function W(a) {
        wm.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction: Dv,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin: null;
        this.tileClass = void 0 !== a.tileClass ? a.tileClass: wu;
        this.i = {};
        this.l = {};
        this.oa = a.reprojectionErrorThreshold;
        this.B = !1
    }
    y(W, wm); l = W.prototype; l.th = function() {
        if (Tf(this.a)) return ! 0;
        for (var a in this.i) if (Tf(this.i[a])) return ! 0;
        return ! 1
    }; l.uh = function(a, c) {
        var d = this.ld(a);
        Uf(this.a, this.a == d ? c: {});
        for (var e in this.i) {
            var f = this.i[e];
            Uf(f, f == d ? c: {})
        }
    }; l.Pd = function(a) {
        return this.f && a && !qd(this.f, a) ? 0 : this.$e()
    }; l.$e = function() {
        return 0
    }; l.cf = function(a) {
        return this.f && a && !qd(this.f, a) ? !1 : W.ia.cf.call(this, a)
    }; l.eb = function(a) {
        var c = this.f;
        return ! this.tileGrid || c && !qd(c, a) ? (c = x(a).toString(), c in this.l || (this.l[c] = jg(a)), this.l[c]) : this.tileGrid
    }; l.ld = function(a) {
        var c = this.f;
        if (!c || qd(c, a)) return this.a;
        a = x(a).toString();
        a in this.i || (this.i[a] = new Sf);
        return this.i[a]
    };
    function Ev(a, c, d, e, f, g, h) {
        c = [c, d, e];
        f = (d = qg(a, c, g)) ? a.tileUrlFunction(d, f, g) : void 0;
        f = new a.tileClass(c, void 0 !== f ? 0 : 4, void 0 !== f ? f: "", a.crossOrigin, a.tileLoadFunction);
        f.key = h;
        C(f, "change", a.vh, a);
        return f
    }
    l.Lb = function(a, c, d, e, f) {
        if (this.f && f && !qd(this.f, f)) {
            var g = this.ld(f);
            c = [a, c, d];
            a = this.Cb.apply(this, c);
            if (Rf(g, a)) return g.get(a);
            var h = this.f;
            d = this.eb(h);
            var k = this.eb(f),
            m = qg(this, c, f);
            e = new Cv(h, d, f, k, c, m, this.Yb(e), this.$e(),
            function(a, c, d, e) {
                return Fv(this, a, c, d, e, h)
            }.bind(this), this.oa, this.B);
            g.set(a, e);
            return e
        }
        return Fv(this, a, c, d, e, f)
    };
    function Fv(a, c, d, e, f, g) {
        var h = null,
        k = a.Cb(c, d, e),
        m = a.af();
        if (Rf(a.a, k)) {
            if (h = a.a.get(k), h.key != m) {
                var n = h;
                h.a && h.a.key == m ? (h = h.a, 2 == n.V() && (h.a = n)) : (h = Ev(a, c, d, e, f, g, m), 2 == n.V() ? h.a = n: n.a && 2 == n.a.V() && (h.a = n.a, n.a = null));
                h.a && (h.a.a = null);
                a.a.replace(k, h)
            }
        } else h = Ev(a, c, d, e, f, g, m),
        a.a.set(k, h);
        return h
    }
    l.nb = function(a) {
        if (this.B != a) {
            this.B = a;
            for (var c in this.i) this.i[c].clear();
            this.u()
        }
    }; l.ob = function(a, c) {
        var d = ad(a);
        d && (d = x(d).toString(), d in this.l || (this.l[d] = c))
    };
    function Dv(a, c) {
        a.fb().src = c
    };
    function Gv(a) {
        W.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: ad("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        });
        this.o = void 0 !== a.culture ? a.culture: "en-us";
        this.c = void 0 !== a.maxZoom ? a.maxZoom: -1;
        Bv("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.imagerySet + "?uriScheme=https&include=ImageryProviders&key=" + a.key, this.s.bind(this), void 0, "jsonp")
    }
    y(Gv, W);
    var Hv = new Ae({
        html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'
    }); Gv.prototype.s = function(a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) Zf(this, "error");
        else {
            var c = a.brandLogoUri; - 1 == c.indexOf("https") && (c = c.replace("http", "https"));
            var d = a.resourceSets[0].resources[0],
            e = -1 == this.c ? d.zoomMax: this.c;
            a = kg(this.f);
            var f = mg({
                extent: a,
                minZoom: d.zoomMin,
                maxZoom: e,
                tileSize: d.imageWidth == d.imageHeight ? d.imageWidth: [d.imageWidth, d.imageHeight]
            });
            this.tileGrid = f;
            var g = this.o;
            this.tileUrlFunction = tm(d.imageUrlSubdomains.map(function(a) {
                var c = [0, 0, 0],
                e = d.imageUrl.replace("{subdomain}", a).replace("{culture}", g);
                return function(a) {
                    if (a) return ue(a[0], a[1], -a[2] - 1, c),
                    e.replace("{quadkey}", ve(c))
                }
            }));
            if (d.imageryProviders) {
                var h = dd(ad("EPSG:4326"), this.f);
                a = d.imageryProviders.map(function(a) {
                    var c = a.attribution,
                    d = {};
                    a.coverageAreas.forEach(function(a) {
                        var c = a.zoomMin,
                        g = Math.min(a.zoomMax, e);
                        a = a.bbox;
                        a = Sc([a[1], a[0], a[3], a[2]], h);
                        var k, m;
                        for (k = c; k <= g; ++k) m = k.toString(),
                        c = dg(f, a, k),
                        m in d ? d[m].push(c) : d[m] = [c]
                    });
                    return new Ae({
                        html: c,
                        tileRanges: d
                    })
                });
                a.push(Hv);
                this.la(a)
            }
            this.H = c;
            Zf(this, "ready")
        }
    };
    function Iv(a) {
        var c = void 0 !== a.projection ? a.projection: "EPSG:3857",
        d = void 0 !== a.tileGrid ? a.tileGrid: mg({
            extent: kg(c),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: c,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        })
    }
    y(Iv, W);
    function Jv(a) {
        this.s = a.account;
        this.A = a.map || "";
        this.c = a.config || {};
        this.o = {};
        Iv.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom: 18,
            minZoom: a.minZoom,
            projection: a.projection,
            wrapX: a.wrapX
        });
        Kv(this)
    }
    y(Jv, Iv); Jv.prototype.D = function() {
        return this.c
    }; Jv.prototype.Y = function(a) {
        for (var c in a) this.c[c] = a[c];
        Kv(this)
    };
    function Kv(a) {
        var c = JSON.stringify(a.c);
        if (a.o[c]) Lv(a, a.o[c]);
        else {
            var d = "https://" + a.s + ".cartodb.com/api/v1/map";
            a.A && (d += "/named/" + a.A);
            var e = new XMLHttpRequest;
            e.addEventListener("load", a.T.bind(a, c));
            e.addEventListener("error", a.S.bind(a));
            e.open("POST", d);
            e.setRequestHeader("Content-type", "application/json");
            e.send(JSON.stringify(a.c))
        }
    }
    Jv.prototype.T = function(a, c) {
        var d = c.target;
        if (200 <= d.status && 300 > d.status) {
            var e;
            try {
                e = JSON.parse(d.responseText)
            } catch(f) {
                Zf(this, "error");
                return
            }
            Lv(this, e);
            this.o[a] = e
        } else Zf(this, "error")
    }; Jv.prototype.S = function() {
        Zf(this, "error")
    };
    function Lv(a, c) {
        a.Pa("https://" + c.cdn_url.https + "/" + a.s + "/api/v1/map/" + c.layergroupid + "/{z}/{x}/{y}.png")
    };
    function X(a) {
        Q.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.B = void 0;
        this.oa = void 0 !== a.distance ? a.distance: 20;
        this.A = [];
        this.Y = a.geometryFunction ||
        function(a) {
            return a.W()
        };
        this.s = a.source;
        this.s.I("change", X.prototype.Ua, this)
    }
    y(X, Q); X.prototype.ta = function() {
        return this.s
    }; X.prototype.Jc = function(a, c, d) {
        this.s.Jc(a, c, d);
        c !== this.B && (this.clear(), this.B = c, Mv(this), this.Fc(this.A))
    }; X.prototype.Ua = function() {
        this.clear();
        Mv(this);
        this.Fc(this.A);
        this.u()
    };
    function Mv(a) {
        if (void 0 !== a.B) {
            a.A.length = 0;
            for (var c = oc(), d = a.oa * a.B, e = a.s.je(), f = {},
            g = 0, h = e.length; g < h; g++) {
                var k = e[g];
                x(k).toString() in f || !(k = a.Y(k)) || (k = k.Z(), zc(k, c), qc(c, d, c), k = a.s.Ze(c), k = k.filter(function(a) {
                    a = x(a).toString();
                    return a in f ? !1 : f[a] = !0
                }), a.A.push(Nv(a, k)))
            }
        }
    }
    function Nv(a, c) {
        for (var d = [0, 0], e = c.length - 1; 0 <= e; --e) {
            var f = a.Y(c[e]);
            f ? Rb(d, f.Z()) : c.splice(e, 1)
        }
        e = 1 / c.length;
        d[0] *= e;
        d[1] *= e;
        d = new xl(new E(d));
        d.set("features", c);
        return d
    };
    function Ov(a) {
        pl.call(this, {
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.T = void 0 !== a.crossOrigin ? a.crossOrigin: null;
        this.l = void 0 !== a.displayDpi ? a.displayDpi: 96;
        this.j = a.params || {};
        this.S = a.url;
        this.c = void 0 !== a.imageLoadFunction ? a.imageLoadFunction: vl;
        this.Y = void 0 !== a.hidpi ? a.hidpi: !0;
        this.oa = void 0 !== a.metersPerUnit ? a.metersPerUnit: 1;
        this.s = void 0 !== a.ratio ? a.ratio: 1;
        this.ta = void 0 !== a.useOverlay ? a.useOverlay: !1;
        this.i = null;
        this.D = 0
    }
    y(Ov, pl); l = Ov.prototype; l.Em = function() {
        return this.j
    }; l.gd = function(a, c, d) {
        c = ql(this, c);
        d = this.Y ? d: 1;
        var e = this.i;
        if (e && this.D == this.g && e.$() == c && e.f == d && wc(e.G(), a)) return e;
        1 != this.s && (a = a.slice(), Rc(a, this.s));
        var f = [Lc(a) / c * d, Mc(a) / c * d];
        if (void 0 !== this.S) {
            var e = this.S,
            g = Nc(a),
            h = this.oa,
            k = Lc(a),
            m = Mc(a),
            n = f[0],
            p = f[1],
            q = .0254 / this.l,
            f = {
                OPERATION: this.ta ? "GETDYNAMICMAPOVERLAYIMAGE": "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.l,
                SETDISPLAYWIDTH: Math.round(f[0]),
                SETDISPLAYHEIGHT: Math.round(f[1]),
                SETVIEWSCALE: p * k > n * m ? k * h / (n * q) : m * h / (p * q),
                SETVIEWCENTERX: g[0],
                SETVIEWCENTERY: g[1]
            };
            mb(f, this.j);
            e = $p(bq([e], f));
            e = new vu(a, c, d, this.da(), e, this.T, this.c);
            C(e, "change", this.o, this)
        } else e = null;
        this.i = e;
        this.D = this.g;
        return e
    }; l.Dm = function() {
        return this.c
    }; l.Gm = function(a) {
        mb(this.j, a);
        this.u()
    }; l.Fm = function(a) {
        this.i = null;
        this.c = a;
        this.u()
    };
    function Pv(a) {
        var c = a.imageExtent,
        d = void 0 !== a.crossOrigin ? a.crossOrigin: null,
        e = void 0 !== a.imageLoadFunction ? a.imageLoadFunction: vl;
        pl.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: ad(a.projection)
        });
        this.c = new vu(c, void 0, 1, this.da(), a.url, d, e);
        this.i = a.imageSize ? a.imageSize: null;
        C(this.c, "change", this.o, this)
    }
    y(Pv, pl); Pv.prototype.gd = function(a) {
        return Qc(a, this.c.G()) ? this.c: null
    }; Pv.prototype.o = function(a) {
        if (2 == this.c.V()) {
            var c = this.c.G(),
            d = this.c.a(),
            e,
            f;
            this.i ? (e = this.i[0], f = this.i[1]) : (e = d.width, f = d.height);
            c = Math.ceil(Lc(c) / (Mc(c) / f));
            if (c != e) {
                var g = document.createElement("canvas");
                g.width = c;
                g.height = f;
                g.getContext("2d").drawImage(d, 0, 0, e, f, 0, 0, g.width, g.height);
                this.c.g = g
            }
        }
        Pv.ia.o.call(this, a)
    };
    function Qv(a) {
        a = a || {};
        pl.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.oa = void 0 !== a.crossOrigin ? a.crossOrigin: null;
        this.j = a.url;
        this.D = void 0 !== a.imageLoadFunction ? a.imageLoadFunction: vl;
        this.i = a.params || {};
        this.s = !0;
        Rv(this);
        this.Y = a.serverType;
        this.ta = void 0 !== a.hidpi ? a.hidpi: !0;
        this.c = null;
        this.S = [0, 0];
        this.T = 0;
        this.l = void 0 !== a.ratio ? a.ratio: 1.5
    }
    y(Qv, pl);
    var Sv = [101, 101]; l = Qv.prototype; l.Mm = function(a, c, d, e) {
        if (void 0 !== this.j) {
            var f = Oc(a, c, 0, Sv),
            g = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            mb(g, this.i, e);
            e = Math.floor((f[3] - a[1]) / c);
            g[this.s ? "I": "X"] = Math.floor((a[0] - f[0]) / c);
            g[this.s ? "J": "Y"] = e;
            return Tv(this, f, Sv, 1, ad(d), g)
        }
    }; l.Om = function() {
        return this.i
    }; l.gd = function(a, c, d, e) {
        if (void 0 === this.j) return null;
        c = ql(this, c);
        1 == d || this.ta && void 0 !== this.Y || (d = 1);
        a = a.slice();
        var f = (a[0] + a[2]) / 2,
        g = (a[1] + a[3]) / 2,
        h = c / d,
        k = Lc(a) / h,
        h = Mc(a) / h,
        m = this.c;
        if (m && this.T == this.g && m.$() == c && m.f == d && wc(m.G(), a)) return m;
        if (1 != this.l) {
            var m = this.l * Lc(a) / 2,
            n = this.l * Mc(a) / 2;
            a[0] = f - m;
            a[1] = g - n;
            a[2] = f + m;
            a[3] = g + n
        }
        f = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetMap",
            FORMAT: "image/png",
            TRANSPARENT: !0
        };
        mb(f, this.i);
        this.S[0] = Math.ceil(k * this.l);
        this.S[1] = Math.ceil(h * this.l);
        e = Tv(this, a, this.S, d, e, f);
        this.c = new vu(a, c, d, this.da(), e, this.oa, this.D);
        this.T = this.g;
        C(this.c, "change", this.o, this);
        return this.c
    }; l.Nm = function() {
        return this.D
    };
    function Tv(a, c, d, e, f, g) {
        g[a.s ? "CRS": "SRS"] = f.kb;
        "STYLES" in a.i || (g.STYLES = new String(""));
        if (1 != e) switch (a.Y) {
        case "geoserver":
            e = 90 * e + .5 | 0;
            g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + e) : "dpi:" + e;
            break;
        case "mapserver":
            g.MAP_RESOLUTION = 90 * e;
            break;
        case "carmentaserver":
        case "qgis":
            g.DPI = 90 * e
        }
        g.WIDTH = d[0];
        g.HEIGHT = d[1];
        d = f.b;
        var h;
        a.s && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
        g.BBOX = h.join(",");
        return $p(bq([a.j], g))
    }
    l.Pm = function() {
        return this.j
    }; l.Qm = function(a) {
        this.c = null;
        this.D = a;
        this.u()
    }; l.Rm = function(a) {
        a != this.j && (this.j = a, this.c = null, this.u())
    }; l.Sm = function(a) {
        mb(this.i, a);
        Rv(this);
        this.c = null;
        this.u()
    };
    function Rv(a) {
        a.s = 0 <= Ha(a.i.VERSION || "1.3.0", "1.3")
    };
    function Uv(a) {
        a = a || {};
        var c;
        void 0 !== a.attributions ? c = a.attributions: c = [Vv];
        Iv.call(this, {
            attributions: c,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin: "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque: !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom: 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }
    y(Uv, Iv);
    var Vv = new Ae({
        html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
    });
    function Wv(a) {
        a = a || {};
        var c = Xv[a.layer];
        this.c = a.layer;
        Iv.call(this, {
            attributions: c.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            logo: "https://developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            opaque: c.opaque,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url: "https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.c + "/{z}/{x}/{y}.jpg"
        })
    }
    y(Wv, Iv);
    var Yv = new Ae({
        html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'
    }), Xv = {
        osm: {
            maxZoom: 19,
            opaque: !0,
            attributions: [Yv, Vv]
        },
        sat: {
            maxZoom: 18,
            opaque: !0,
            attributions: [Yv, new Ae({
                html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"
            })]
        },
        hyb: {
            maxZoom: 18,
            opaque: !1,
            attributions: [Yv, Vv]
        }
    }; Wv.prototype.o = function() {
        return this.c
    }; (function() {
        var a = {},
        c = {
            ha: a
        }; (function(d) {
            if ("object" === typeof a && "undefined" !== typeof c) c.ha = d();
            else {
                var e;
                "undefined" !== typeof window ? e = window: "undefined" !== typeof global ? e = global: "undefined" !== typeof self ? e = self: e = this;
                e.up = d()
            }
        })(function() {
            return function e(a, c, h) {
                function k(n, q) {
                    if (!c[n]) {
                        if (!a[n]) {
                            var r = "function" == typeof require && require;
                            if (!q && r) return r(n, !0);
                            if (m) return m(n, !0);
                            r = Error("Cannot find module '" + n + "'");
                            throw r.code = "MODULE_NOT_FOUND",
                            r;
                        }
                        r = c[n] = {
                            ha: {}
                        };
                        a[n][0].call(r.ha,
                        function(c) {
                            var e = a[n][1][c];
                            return k(e ? e: c)
                        },
                        r, r.ha, e, a, c, h)
                    }
                    return c[n].ha
                }
                for (var m = "function" == typeof require && require,
                n = 0; n < h.length; n++) k(h[n]);
                return k
            } ({
                1 : [function(a, c, g) {
                    a = a("./processor");
                    g.Ri = a
                },
                {
                    "./processor": 2
                }],
                2 : [function(a, c) {
                    function g(a) {
                        var c = !0;
                        try {
                            new ImageData(10, 10)
                        } catch(e) {
                            c = !1
                        }
                        return function(e) {
                            var f = e.buffers,
                            g = e.meta,
                            h = e.width,
                            k = e.height,
                            m = f.length,
                            n = f[0].byteLength;
                            if (e.imageOps) {
                                n = Array(m);
                                for (e = 0; e < m; ++e) {
                                    var B = n,
                                    J = e,
                                    K;
                                    K = new Uint8ClampedArray(f[e]);
                                    var M = h,
                                    Y = k;
                                    K = c ? new ImageData(K, M, Y) : {
                                        data: K,
                                        width: M,
                                        height: Y
                                    };
                                    B[J] = K
                                }
                                h = a(n, g).data
                            } else {
                                h = new Uint8ClampedArray(n);
                                k = Array(m);
                                B = Array(m);
                                for (e = 0; e < m; ++e) k[e] = new Uint8ClampedArray(f[e]),
                                B[e] = [0, 0, 0, 0];
                                for (f = 0; f < n; f += 4) {
                                    for (e = 0; e < m; ++e) J = k[e],
                                    B[e][0] = J[f],
                                    B[e][1] = J[f + 1],
                                    B[e][2] = J[f + 2],
                                    B[e][3] = J[f + 3];
                                    e = a(B, g);
                                    h[f] = e[0];
                                    h[f + 1] = e[1];
                                    h[f + 2] = e[2];
                                    h[f + 3] = e[3]
                                }
                            }
                            return h.buffer
                        }
                    }
                    function h(a, c) {
                        var e = Object.keys(a.lib || {}).map(function(c) {
                            return "var " + c + " = " + a.lib[c].toString() + ";"
                        }).concat(["var __minion__ = (" + g.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]),
                        e = URL.createObjectURL(new Blob(e, {
                            type: "text/javascript"
                        })),
                        e = new Worker(e);
                        e.addEventListener("message", c);
                        return e
                    }
                    function k(a, c) {
                        var e = g(a.operation);
                        return {
                            postMessage: function(a) {
                                setTimeout(function() {
                                    c({
                                        data: {
                                            buffer: e(a),
                                            meta: a.meta
                                        }
                                    })
                                },
                                0)
                            }
                        }
                    }
                    function m(a) {
                        this.Le = !!a.$k;
                        var c;
                        0 === a.threads ? c = 0 : this.Le ? c = 1 : c = a.threads || 1;
                        var e = [];
                        if (c) for (var f = 0; f < c; ++f) e[f] = h(a, this.bg.bind(this, f));
                        else e[0] = k(a, this.bg.bind(this, 0));
                        this.Id = e;
                        this.Vc = [];
                        this.fj = a.Wn || Infinity;
                        this.Gd = 0;
                        this.Ec = {};
                        this.Me = null
                    }
                    var n = a("./util").tl;
                    m.prototype.Un = function(a, c, e) {
                        this.cj({
                            xc: a,
                            Qg: c,
                            jg: e
                        });
                        this.Zf()
                    };
                    m.prototype.cj = function(a) {
                        for (this.Vc.push(a); this.Vc.length > this.fj;) this.Vc.shift().jg(null, null)
                    };
                    m.prototype.Zf = function() {
                        if (0 === this.Gd && 0 < this.Vc.length) {
                            var a = this.Me = this.Vc.shift(),
                            c = a.xc[0].width,
                            e = a.xc[0].height,
                            f = a.xc.map(function(a) {
                                return a.data.buffer
                            }),
                            g = this.Id.length;
                            this.Gd = g;
                            if (1 === g) this.Id[0].postMessage({
                                buffers: f,
                                meta: a.Qg,
                                imageOps: this.Le,
                                width: c,
                                height: e
                            },
                            f);
                            else for (var h = 4 * Math.ceil(a.xc[0].data.length / 4 / g), k = 0; k < g; ++k) {
                                for (var m = k * h,
                                n = [], B = 0, J = f.length; B < J; ++B) n.push(f[k].slice(m, m + h));
                                this.Id[k].postMessage({
                                    buffers: n,
                                    meta: a.Qg,
                                    imageOps: this.Le,
                                    width: c,
                                    height: e
                                },
                                n)
                            }
                        }
                    };
                    m.prototype.bg = function(a, c) {
                        this.qp || (this.Ec[a] = c.data, --this.Gd, 0 === this.Gd && this.gj())
                    };
                    m.prototype.gj = function() {
                        var a = this.Me,
                        c = this.Id.length,
                        e, f;
                        if (1 === c) e = new Uint8ClampedArray(this.Ec[0].buffer),
                        f = this.Ec[0].meta;
                        else {
                            var g = a.xc[0].data.length;
                            e = new Uint8ClampedArray(g);
                            f = Array(g);
                            for (var g = 4 * Math.ceil(g / 4 / c), h = 0; h < c; ++h) {
                                var k = h * g;
                                e.set(new Uint8ClampedArray(this.Ec[h].buffer), k);
                                f[h] = this.Ec[h].meta
                            }
                        }
                        this.Me = null;
                        this.Ec = {};
                        a.jg(null, n(e, a.xc[0].width, a.xc[0].height), f);
                        this.Zf()
                    };
                    c.ha = m
                },
                {
                    "./util": 3
                }],
                3 : [function(a, c, g) {
                    var h = !0;
                    try {
                        new ImageData(10, 10)
                    } catch(m) {
                        h = !1
                    }
                    var k = document.createElement("canvas").getContext("2d");
                    g.tl = function(a, c, e) {
                        if (h) return new ImageData(a, c, e);
                        c = k.createImageData(c, e);
                        c.data.set(a);
                        return c
                    }
                },
                {}]
            },
            {},
            [1])(1)
        });
        Zl = c.ha
    })();
    function Zv(a) {
        this.D = null;
        this.ta = void 0 !== a.operationType ? a.operationType: "pixel";
        this.Ua = void 0 !== a.threads ? a.threads: 1;
        this.c = $v(a.sources);
        for (var c = 0,
        d = this.c.length; c < d; ++c) C(this.c[c], "change", this.u, this);
        this.i = Pg();
        this.Y = new Li(function() {
            return 1
        },
        this.u.bind(this));
        for (var c = aw(this.c), d = {},
        e = 0, f = c.length; e < f; ++e) d[x(c[e].layer)] = c[e];
        this.j = this.l = null;
        this.T = {
            animate: !1,
            attributions: {},
            coordinateToPixelMatrix: cc(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: d,
            layerStatesArray: c,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateMatrix: cc(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.Y,
            time: Date.now(),
            usedTiles: {},
            viewState: {
                rotation: 0
            },
            viewHints: [],
            wantedTiles: {}
        };
        pl.call(this, {});
        void 0 !== a.operation && this.s(a.operation, a.lib)
    }
    y(Zv, pl); Zv.prototype.s = function(a, c) {
        this.D = new Zl.Ri({
            operation: a,
            $k: "image" === this.ta,
            Wn: 1,
            lib: c,
            threads: this.Ua
        });
        this.u()
    };
    function bw(a, c, d) {
        var e = a.l;
        return ! e || a.g !== e.Ao || d !== e.resolution || !Cc(c, e.extent)
    }
    Zv.prototype.B = function(a, c, d, e) {
        d = !0;
        for (var f, g = 0,
        h = this.c.length; g < h; ++g) if (f = this.c[g].a.ea(), "ready" !== f.V()) {
            d = !1;
            break
        }
        if (!d) return null;
        if (!bw(this, a, c)) return this.j;
        d = this.i.canvas;
        f = Math.round(Lc(a) / c);
        g = Math.round(Mc(a) / c);
        if (f !== d.width || g !== d.height) d.width = f,
        d.height = g;
        f = mb({},
        this.T);
        f.viewState = mb({},
        f.viewState);
        var g = Nc(a),
        h = Math.round(Lc(a) / c),
        k = Math.round(Mc(a) / c);
        f.extent = a;
        f.focus = Nc(a);
        f.size[0] = h;
        f.size[1] = k;
        h = f.viewState;
        h.center = g;
        h.projection = e;
        h.resolution = c;
        this.j = e = new fl(a, c, 1, this.da(), d, this.S.bind(this, f));
        this.l = {
            extent: a,
            resolution: c,
            Ao: this.g
        };
        return e
    }; Zv.prototype.S = function(a, c) {
        for (var d = this.c.length,
        e = Array(d), f = 0; f < d; ++f) {
            var g;
            g = this.c[f];
            var h = a,
            k = a.layerStatesArray[f];
            if (g.o(h, k)) {
                var m = h.size[0],
                n = h.size[1];
                if (cw) {
                    var p = cw.canvas;
                    p.width !== m || p.height !== n ? cw = Pg(m, n) : cw.clearRect(0, 0, m, n)
                } else cw = Pg(m, n);
                g.c(h, k, cw);
                g = cw.getImageData(0, 0, m, n)
            } else g = null;
            if (g) e[f] = g;
            else return
        }
        d = {};
        this.b(new dw(ew, a, d));
        this.D.Un(e, d, this.oa.bind(this, a, c));
        Mi(a.tileQueue, 16, 16)
    }; Zv.prototype.oa = function(a, c, d, e, f) {
        d ? c(d) : e && (this.b(new dw(fw, a, f)), bw(this, a.extent, a.viewState.resolution / a.pixelRatio) || this.i.putImageData(e, 0, 0), c(null))
    };
    var cw = null;
    function aw(a) {
        return a.map(function(a) {
            return di(a.a)
        })
    }
    function $v(a) {
        for (var c = a.length,
        d = Array(c), e = 0; e < c; ++e) {
            var f = e,
            g = a[e],
            h = null;
            g instanceof ng ? (g = new Xj({
                source: g
            }), h = new pm(g)) : g instanceof pl && (g = new Wj({
                source: g
            }), h = new om(g));
            d[f] = h
        }
        return d
    }
    function dw(a, c, d) {
        Cb.call(this, a);
        this.extent = c.extent;
        this.resolution = c.viewState.resolution / c.pixelRatio;
        this.data = d
    }
    y(dw, Cb);
    var ew = "beforeoperations",
    fw = "afteroperations";
    var gw = {
        terrain: {
            vb: "jpg",
            opaque: !0
        },
        "terrain-background": {
            vb: "jpg",
            opaque: !0
        },
        "terrain-labels": {
            vb: "png",
            opaque: !1
        },
        "terrain-lines": {
            vb: "png",
            opaque: !1
        },
        "toner-background": {
            vb: "png",
            opaque: !0
        },
        toner: {
            vb: "png",
            opaque: !0
        },
        "toner-hybrid": {
            vb: "png",
            opaque: !1
        },
        "toner-labels": {
            vb: "png",
            opaque: !1
        },
        "toner-lines": {
            vb: "png",
            opaque: !1
        },
        "toner-lite": {
            vb: "png",
            opaque: !0
        },
        watercolor: {
            vb: "jpg",
            opaque: !0
        }
    },
    hw = {
        terrain: {
            minZoom: 4,
            maxZoom: 18
        },
        toner: {
            minZoom: 0,
            maxZoom: 20
        },
        watercolor: {
            minZoom: 1,
            maxZoom: 16
        }
    };
    function iw(a) {
        var c = a.layer.indexOf("-"),
        c = -1 == c ? a.layer: a.layer.slice(0, c),
        c = hw[c],
        d = gw[a.layer];
        Iv.call(this, {
            attributions: jw,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: c.maxZoom,
            minZoom: c.minZoom,
            opaque: d.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url: "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + d.vb
        })
    }
    y(iw, Iv);
    var jw = [new Ae({
        html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'
    }), Vv];
    function kw(a) {
        a = a || {};
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        });
        this.c = a.params || {};
        this.o = oc()
    }
    y(kw, W); kw.prototype.s = function() {
        return this.c
    }; kw.prototype.Yb = function(a) {
        return a
    }; kw.prototype.sc = function(a, c, d) {
        var e = this.tileGrid;
        e || (e = this.eb(d));
        if (! (e.Kb().length <= a[0])) {
            var f = e.Da(a, this.o),
            g = Qb(e.Ya(a[0]), this.j);
            1 != c && (g = Pb(g, c, this.j));
            e = {
                F: "image",
                FORMAT: "PNG32",
                TRANSPARENT: !0
            };
            mb(e, this.c);
            var h = this.urls;
            h ? (d = d.kb.split(":").pop(), e.SIZE = g[0] + "," + g[1], e.BBOX = f.join(","), e.BBOXSR = d, e.IMAGESR = d, e.DPI = Math.round(e.DPI ? e.DPI * c: 90 * c), a = (1 == h.length ? h[0] : h[Qa((a[1] << a[0]) + a[2], h.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"), a = $p(bq([a], e))) : a = void 0;
            return a
        }
    }; kw.prototype.A = function(a) {
        mb(this.c, a);
        this.u()
    };
    function lw(a, c, d) {
        Vf.call(this, a, 2);
        this.i = c;
        this.c = d;
        this.g = {}
    }
    y(lw, Vf); lw.prototype.fb = function(a) {
        a = void 0 !== a ? x(a) : -1;
        if (a in this.g) return this.g[a];
        var c = this.i,
        d = Pg(c[0], c[1]);
        d.strokeStyle = "black";
        d.strokeRect(.5, .5, c[0] + .5, c[1] + .5);
        d.fillStyle = "black";
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.font = "24px sans-serif";
        d.fillText(this.c, c[0] / 2, c[1] / 2);
        return this.g[a] = d.canvas
    };
    function mw(a) {
        ng.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        })
    }
    y(mw, ng); mw.prototype.Lb = function(a, c, d) {
        var e = this.Cb(a, c, d);
        if (Rf(this.a, e)) return this.a.get(e);
        var f = Qb(this.tileGrid.Ya(a));
        a = [a, c, d];
        c = (c = qg(this, a)) ? qg(this, c).toString() : "";
        f = new lw(a, f, c);
        this.a.set(e, f);
        return f
    };
    function nw(a) {
        this.c = null;
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: ad("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        });
        if (a.jsonp) Bv(a.url, this.rh.bind(this), this.Yd.bind(this));
        else {
            var c = new XMLHttpRequest;
            c.addEventListener("load", this.Fn.bind(this));
            c.addEventListener("error", this.En.bind(this));
            c.open("GET", a.url);
            c.send()
        }
    }
    y(nw, W); l = nw.prototype; l.Fn = function(a) {
        a = a.target;
        if (200 <= a.status && 300 > a.status) {
            var c;
            try {
                c = JSON.parse(a.responseText)
            } catch(d) {
                this.Yd();
                return
            }
            this.rh(c)
        } else this.Yd()
    }; l.En = function() {
        this.Yd()
    }; l.pk = function() {
        return this.c
    }; l.rh = function(a) {
        var c = ad("EPSG:4326"),
        d = this.f,
        e;
        void 0 !== a.bounds && (e = Sc(a.bounds, dd(c, d)));
        var f = a.minzoom || 0,
        g = a.maxzoom || 22;
        this.tileGrid = d = mg({
            extent: kg(d),
            maxZoom: g,
            minZoom: f
        });
        this.tileUrlFunction = sm(a.tiles, d);
        if (void 0 !== a.attribution && !this.da()) {
            c = void 0 !== e ? e: c.G();
            e = {};
            for (var h; f <= g; ++f) h = f.toString(),
            e[h] = [dg(d, c, f)];
            this.la([new Ae({
                html: a.attribution,
                tileRanges: e
            })])
        }
        this.c = a;
        Zf(this, "ready")
    }; l.Yd = function() {
        Zf(this, "error")
    };
    function ow(a) {
        ng.call(this, {
            projection: ad("EPSG:3857"),
            state: "loading"
        });
        this.o = void 0 !== a.preemptive ? a.preemptive: !0;
        this.i = um;
        this.c = void 0;
        a.url ? Bv(a.url, this.sh.bind(this)) : a.tileJSON && this.sh(a.tileJSON)
    }
    y(ow, ng); l = ow.prototype; l.lk = function() {
        return this.c
    }; l.yj = function(a, c, d, e, f) {
        this.tileGrid ? (c = this.tileGrid.Ud(a, c), pw(this.Lb(c[0], c[1], c[2], 1, this.f), a, d, e, f)) : !0 === f ? Ig(function() {
            d.call(e, null)
        }) : d.call(e, null)
    }; l.sh = function(a) {
        var c = ad("EPSG:4326"),
        d = this.f,
        e;
        void 0 !== a.bounds && (e = Sc(a.bounds, dd(c, d)));
        var f = a.minzoom || 0,
        g = a.maxzoom || 22;
        this.tileGrid = d = mg({
            extent: kg(d),
            maxZoom: g,
            minZoom: f
        });
        this.c = a.template;
        var h = a.grids;
        if (h) {
            this.i = sm(h, d);
            if (void 0 !== a.attribution) {
                c = void 0 !== e ? e: c.G();
                for (e = {}; f <= g; ++f) h = f.toString(),
                e[h] = [dg(d, c, f)];
                this.la([new Ae({
                    html: a.attribution,
                    tileRanges: e
                })])
            }
            Zf(this, "ready")
        } else Zf(this, "error")
    }; l.Lb = function(a, c, d, e, f) {
        var g = this.Cb(a, c, d);
        if (Rf(this.a, g)) return this.a.get(g);
        a = [a, c, d];
        c = qg(this, a, f);
        e = this.i(c, e, f);
        e = new qw(a, void 0 !== e ? 0 : 4, void 0 !== e ? e: "", this.tileGrid.Da(a), this.o);
        this.a.set(g, e);
        return e
    }; l.Rf = function(a, c, d) {
        a = this.Cb(a, c, d);
        Rf(this.a, a) && this.a.get(a)
    };
    function qw(a, c, d, e, f) {
        Vf.call(this, a, c);
        this.o = d;
        this.g = e;
        this.l = f;
        this.j = this.i = this.c = null
    }
    y(qw, Vf); l = qw.prototype; l.fb = function() {
        return null
    }; l.getData = function(a) {
        if (!this.c || !this.i || !this.j) return null;
        var c = this.c[Math.floor((1 - (a[1] - this.g[1]) / (this.g[3] - this.g[1])) * this.c.length)];
        if ("string" !== typeof c) return null;
        a = c.charCodeAt(Math.floor((a[0] - this.g[0]) / (this.g[2] - this.g[0]) * c.length));
        93 <= a && a--;
        35 <= a && a--;
        a -= 32;
        return a in this.i ? this.j[this.i[a]] : null
    };
    function pw(a, c, d, e, f) {
        0 == a.state && !0 === f ? (xb(a, "change",
        function() {
            d.call(e, this.getData(c))
        },
        a), rw(a)) : !0 === f ? Ig(function() {
            d.call(e, this.getData(c))
        },
        a) : d.call(e, a.getData(c))
    }
    l.gb = function() {
        return this.o
    }; l.zk = function() {
        this.state = 3;
        Wf(this)
    }; l.Tm = function(a) {
        this.c = a.grid;
        this.i = a.keys;
        this.j = a.data;
        this.state = 4;
        Wf(this)
    };
    function rw(a) {
        0 == a.state && (a.state = 1, Bv(a.o, a.Tm.bind(a), a.zk.bind(a)))
    }
    l.load = function() {
        this.l && rw(this)
    };
    function sw(a) {
        a = a || {};
        var c = a.params || {};
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in c ? c.TRANSPARENT: 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !0
        });
        this.s = void 0 !== a.gutter ? a.gutter: 0;
        this.c = c;
        this.Y = "";
        tw(this);
        this.o = !0;
        this.A = a.serverType;
        this.S = void 0 !== a.hidpi ? a.hidpi: !0;
        this.D = "";
        uw(this);
        this.T = oc();
        vw(this)
    }
    y(sw, W); l = sw.prototype; l.Um = function(a, c, d, e) {
        d = ad(d);
        var f = this.tileGrid;
        f || (f = this.eb(d));
        c = f.Ud(a, c);
        if (! (f.Kb().length <= c[0])) {
            var g = f.$(c[0]),
            h = f.Da(c, this.T),
            f = Qb(f.Ya(c[0]), this.j),
            k = this.s;
            0 !== k && (f = Ob(f, k, this.j), h = qc(h, g * k, h));
            k = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.c.LAYERS
            };
            mb(k, this.c, e);
            e = Math.floor((h[3] - a[1]) / g);
            k[this.o ? "I": "X"] = Math.floor((a[0] - h[0]) / g);
            k[this.o ? "J": "Y"] = e;
            return ww(this, c, f, h, 1, d, k)
        }
    }; l.$e = function() {
        return this.s
    }; l.af = function() {
        return this.Y
    }; l.Cb = function(a, c, d) {
        return this.D + sw.ia.Cb.call(this, a, c, d)
    }; l.Vm = function() {
        return this.c
    };
    function ww(a, c, d, e, f, g, h) {
        var k = a.urls;
        if (k) {
            h.WIDTH = d[0];
            h.HEIGHT = d[1];
            h[a.o ? "CRS": "SRS"] = g.kb;
            "STYLES" in a.c || (h.STYLES = new String(""));
            if (1 != f) switch (a.A) {
            case "geoserver":
                d = 90 * f + .5 | 0;
                h.FORMAT_OPTIONS = "FORMAT_OPTIONS" in h ? h.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                h.MAP_RESOLUTION = 90 * f;
                break;
            case "carmentaserver":
            case "qgis":
                h.DPI = 90 * f
            }
            g = g.b;
            a.o && "ne" == g.substr(0, 2) && (a = e[0], e[0] = e[1], e[1] = a, a = e[2], e[2] = e[3], e[3] = a);
            h.BBOX = e.join(",");
            return $p(bq([1 == k.length ? k[0] : k[Qa((c[1] << c[0]) + c[2], k.length)]], h))
        }
    }
    l.Yb = function(a) {
        return this.S && void 0 !== this.A ? a: 1
    };
    function uw(a) {
        var c = 0,
        d = [];
        if (a.urls) {
            var e, f;
            e = 0;
            for (f = a.urls.length; e < f; ++e) d[c++] = a.urls[e]
        }
        a.D = d.join("#")
    }
    function tw(a) {
        var c = 0,
        d = [],
        e;
        for (e in a.c) d[c++] = e + "-" + a.c[e];
        a.Y = d.join("/")
    }
    l.sc = function(a, c, d) {
        var e = this.tileGrid;
        e || (e = this.eb(d));
        if (! (e.Kb().length <= a[0])) {
            1 == c || this.S && void 0 !== this.A || (c = 1);
            var f = e.$(a[0]),
            g = e.Da(a, this.T),
            e = Qb(e.Ya(a[0]), this.j),
            h = this.s;
            0 !== h && (e = Ob(e, h, this.j), g = qc(g, f * h, g));
            1 != c && (e = Pb(e, c, this.j));
            f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetMap",
                FORMAT: "image/png",
                TRANSPARENT: !0
            };
            mb(f, this.c);
            return ww(this, a, e, g, c, d, f)
        }
    }; l.Wm = function(a) {
        mb(this.c, a);
        uw(this);
        tw(this);
        vw(this);
        this.u()
    };
    function vw(a) {
        a.o = 0 <= Ha(a.c.VERSION || "1.3.0", "1.3")
    };
    function xw(a) {
        this.j = a.matrixIds;
        $f.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }
    y(xw, $f); xw.prototype.l = function() {
        return this.j
    };
    function yw(a, c) {
        var d = [],
        e = [],
        f = [],
        g = [],
        h = [],
        k;
        k = ad(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var m = k.Xb(),
        n = "ne" == k.b.substr(0, 2);
        a.TileMatrix.sort(function(a, c) {
            return c.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function(a) {
            e.push(a.Identifier);
            var c = 2.8E-4 * a.ScaleDenominator / m,
            k = a.TileWidth,
            t = a.TileHeight;
            n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : f.push(a.TopLeftCorner);
            d.push(c);
            g.push(k == t ? k: [k, t]);
            h.push([a.MatrixWidth, -a.MatrixHeight])
        });
        return new xw({
            extent: c,
            origins: f,
            resolutions: d,
            matrixIds: e,
            tileSizes: g,
            sizes: h
        })
    };
    function Z(a) {
        function c(a) {
            a = "KVP" == e ? $p(bq([a], g)) : a.replace(/\{(\w+?)\}/g,
            function(a, c) {
                return c.toLowerCase() in g ? g[c.toLowerCase()] : a
            });
            return function(c) {
                if (c) {
                    var d = {
                        TileMatrix: f.j[c[0]],
                        TileCol: c[1],
                        TileRow: -c[2] - 1
                    };
                    mb(d, h);
                    c = a;
                    return c = "KVP" == e ? $p(bq([c], d)) : c.replace(/\{(\w+?)\}/g,
                    function(a, c) {
                        return d[c]
                    })
                }
            }
        }
        this.T = void 0 !== a.version ? a.version: "1.0.0";
        this.A = void 0 !== a.format ? a.format: "image/jpeg";
        this.c = void 0 !== a.dimensions ? a.dimensions: {};
        this.o = "";
        zw(this);
        this.D = a.layer;
        this.s = a.matrixSet;
        this.S = a.style;
        var d = a.urls;
        void 0 === d && void 0 !== a.url && (d = vm(a.url));
        var e = this.Y = void 0 !== a.requestEncoding ? a.requestEncoding: "KVP",
        f = a.tileGrid,
        g = {
            layer: this.D,
            style: this.S,
            tilematrixset: this.s
        };
        "KVP" == e && mb(g, {
            Service: "WMTS",
            Request: "GetTile",
            Version: this.T,
            Format: this.A
        });
        var h = this.c,
        k = d && 0 < d.length ? tm(d.map(c)) : um;
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: f,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: k,
            urls: d,
            wrapX: void 0 !== a.wrapX ? a.wrapX: !1
        })
    }
    y(Z, W); l = Z.prototype; l.Kj = function() {
        return this.c
    }; l.Xm = function() {
        return this.A
    }; l.af = function() {
        return this.o
    }; l.Ym = function() {
        return this.D
    }; l.Xj = function() {
        return this.s
    }; l.jk = function() {
        return this.Y
    }; l.Zm = function() {
        return this.S
    }; l.rk = function() {
        return this.T
    };
    function zw(a) {
        var c = 0,
        d = [],
        e;
        for (e in a.c) d[c++] = e + "-" + a.c[e];
        a.o = d.join("/")
    }
    l.Wo = function(a) {
        mb(this.c, a);
        zw(this);
        this.u()
    };
    function Aw(a) {
        a = a || {};
        var c = a.size,
        d = c[0],
        e = c[1],
        f = [],
        g = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation: "default") {
        case "default":
            for (; d > g || e > g;) f.push([Math.ceil(d / g), Math.ceil(e / g)]),
            g += g;
            break;
        case "truncated":
            for (; d > g || e > g;) f.push([Math.ceil(d / g), Math.ceil(e / g)]),
            d >>= 1,
            e >>= 1
        }
        f.push([1, 1]);
        f.reverse();
        for (var g = [1], h = [0], e = 1, d = f.length; e < d; e++) g.push(1 << e),
        h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
        g.reverse();
        var c = [0, -c[1], c[0], 0],
        c = new $f({
            extent: c,
            origin: Ic(c),
            resolutions: g
        }),
        k = a.url;
        W.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: Bw,
            tileGrid: c,
            tileUrlFunction: function(a) {
                if (a) {
                    var c = a[0],
                    d = a[1];
                    a = -a[2] - 1;
                    return k + "TileGroup" + ((d + a * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + a + ".jpg"
                }
            }
        })
    }
    y(Aw, W);
    function Bw(a, c, d, e, f) {
        wu.call(this, a, c, d, e, f);
        this.i = {}
    }
    y(Bw, wu); Bw.prototype.fb = function(a) {
        var c = void 0 !== a ? x(a).toString() : "";
        if (c in this.i) return this.i[c];
        a = Bw.ia.fb.call(this, a);
        if (2 == this.state) {
            if (256 == a.width && 256 == a.height) return this.i[c] = a;
            var d = Pg(256, 256);
            d.drawImage(a, 0, 0);
            return this.i[c] = d.canvas
        }
        return a
    };
    function Cw(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize: 256;
        this.g = void 0 !== a.maxSize ? a.maxSize: void 0 !== ra ? ra: 2048;
        this.b = void 0 !== a.space ? a.space: 1;
        this.c = [new Dw(this.a, this.b)];
        this.f = this.a;
        this.i = [new Dw(this.f, this.b)]
    }
    Cw.prototype.add = function(a, c, d, e, f, g) {
        if (c + this.b > this.g || d + this.b > this.g) return null;
        e = Ew(this, !1, a, c, d, e, g);
        if (!e) return null;
        a = Ew(this, !0, a, c, d, void 0 !== f ? f: ta, g);
        return {
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            image: e.image,
            Lg: a.image
        }
    };
    function Ew(a, c, d, e, f, g, h) {
        var k = c ? a.i: a.c,
        m,
        n,
        p;
        n = 0;
        for (p = k.length; n < p; ++n) {
            m = k[n];
            if (m = m.add(d, e, f, g, h)) return m;
            m || n !== p - 1 || (c ? (m = Math.min(2 * a.f, a.g), a.f = m) : (m = Math.min(2 * a.a, a.g), a.a = m), m = new Dw(m, a.b), k.push(m), ++p)
        }
    }
    function Dw(a, c) {
        this.b = c;
        this.a = [{
            x: 0,
            y: 0,
            width: a,
            height: a
        }];
        this.f = {};
        this.g = document.createElement("CANVAS");
        this.g.width = a;
        this.g.height = a;
        this.c = this.g.getContext("2d")
    }
    Dw.prototype.get = function(a) {
        return this.f[a] || null
    }; Dw.prototype.add = function(a, c, d, e, f) {
        var g, h, k;
        h = 0;
        for (k = this.a.length; h < k; ++h) if (g = this.a[h], g.width >= c + this.b && g.height >= d + this.b) return k = {
            offsetX: g.x + this.b,
            offsetY: g.y + this.b,
            image: this.g
        },
        this.f[a] = k,
        e.call(f, this.c, g.x + this.b, g.y + this.b),
        a = h,
        c = c + this.b,
        d = d + this.b,
        f = e = void 0,
        g.width - c > g.height - d ? (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: g.height
        },
        f = {
            x: g.x,
            y: g.y + d,
            width: c,
            height: g.height - d
        },
        Fw(this, a, e, f)) : (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: d
        },
        f = {
            x: g.x,
            y: g.y + d,
            width: g.width,
            height: g.height - d
        },
        Fw(this, a, e, f)),
        k;
        return null
    };
    function Fw(a, c, d, e) {
        c = [c, 1];
        0 < d.width && 0 < d.height && c.push(d);
        0 < e.width && 0 < e.height && c.push(e);
        a.a.splice.apply(a.a, c)
    };
    function Gw(a) {
        this.U = this.f = this.c = null;
        this.l = void 0 !== a.fill ? a.fill: null;
        this.va = [0, 0];
        this.b = a.points;
        this.g = void 0 !== a.radius ? a.radius: a.radius1;
        this.i = void 0 !== a.radius2 ? a.radius2: this.g;
        this.o = void 0 !== a.angle ? a.angle: 0;
        this.a = void 0 !== a.stroke ? a.stroke: null;
        this.D = this.S = this.H = null;
        var c = a.atlasManager,
        d = "",
        e = "",
        f = 0,
        g = null,
        h, k = 0;
        this.a && (h = Oe(this.a.b), k = this.a.a, void 0 === k && (k = 1), g = this.a.g, bh || (g = null), e = this.a.c, void 0 === e && (e = "round"), d = this.a.f, void 0 === d && (d = "round"), f = this.a.i, void 0 === f && (f = 10));
        var m = 2 * (this.g + k) + 1,
        d = {
            strokeStyle: h,
            yd: k,
            size: m,
            lineCap: d,
            lineDash: g,
            lineJoin: e,
            miterLimit: f
        };
        if (void 0 === c) {
            this.f = document.createElement("CANVAS");
            this.f.height = m;
            this.f.width = m;
            var c = m = this.f.width,
            n = this.f.getContext("2d");
            this.Ch(d, n, 0, 0);
            this.l ? this.U = this.f: (n = this.U = document.createElement("CANVAS"), n.height = d.size, n.width = d.size, n = n.getContext("2d"), this.Bh(d, n, 0, 0))
        } else m = Math.round(m),
        (e = !this.l) && (n = this.Bh.bind(this, d)),
        f = this.a ? jk(this.a) : "-",
        g = this.l ? dk(this.l) : "-",
        this.c && f == this.c[1] && g == this.c[2] && this.g == this.c[3] && this.i == this.c[4] && this.o == this.c[5] && this.b == this.c[6] || (this.c = ["r" + f + g + (void 0 !== this.g ? this.g.toString() : "-") + (void 0 !== this.i ? this.i.toString() : "-") + (void 0 !== this.o ? this.o.toString() : "-") + (void 0 !== this.b ? this.b.toString() : "-"), f, g, this.g, this.i, this.o, this.b]),
        n = c.add(this.c[0], m, m, this.Ch.bind(this, d), n),
        this.f = n.image,
        this.va = [n.offsetX, n.offsetY],
        c = n.image.width,
        this.U = e ? n.Lg: this.f;
        this.H = [m / 2, m / 2];
        this.S = [m, m];
        this.D = [c, c];
        wi.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView: !1,
            rotation: void 0 !== a.rotation ? a.rotation: 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel: !0
        })
    }
    y(Gw, wi); l = Gw.prototype; l.Vb = function() {
        return this.H
    }; l.dn = function() {
        return this.o
    }; l.en = function() {
        return this.l
    }; l.ke = function() {
        return this.U
    }; l.ec = function() {
        return this.f
    }; l.hd = function() {
        return this.D
    }; l.qd = function() {
        return 2
    }; l.Ia = function() {
        return this.va
    }; l.fn = function() {
        return this.b
    }; l.gn = function() {
        return this.g
    }; l.ik = function() {
        return this.i
    }; l.Db = function() {
        return this.S
    }; l.hn = function() {
        return this.a
    }; l.hf = ta; l.load = ta; l.Qf = ta; l.Ch = function(a, c, d, e) {
        var f;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.i !== this.g && (this.b *= 2);
        for (d = 0; d <= this.b; d++) e = 2 * d * Math.PI / this.b - Math.PI / 2 + this.o,
        f = 0 === d % 2 ? this.g: this.i,
        c.lineTo(a.size / 2 + f * Math.cos(e), a.size / 2 + f * Math.sin(e));
        this.l && (c.fillStyle = Qe(this.l.b), c.fill());
        this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.yd, a.lineDash && c.setLineDash(a.lineDash), c.lineCap = a.lineCap, c.lineJoin = a.lineJoin, c.miterLimit = a.miterLimit, c.stroke());
        c.closePath()
    }; l.Bh = function(a, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.i !== this.g && (this.b *= 2);
        var f;
        for (d = 0; d <= this.b; d++) f = 2 * d * Math.PI / this.b - Math.PI / 2 + this.o,
        e = 0 === d % 2 ? this.g: this.i,
        c.lineTo(a.size / 2 + e * Math.cos(f), a.size / 2 + e * Math.sin(f));
        c.fillStyle = Yj;
        c.fill();
        this.a && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.yd, a.lineDash && c.setLineDash(a.lineDash), c.stroke());
        c.closePath()
    }; u("ol.animation.bounce",
    function(a) {
        var c = a.resolution,
        d = a.start ? a.start: Date.now(),
        e = void 0 !== a.duration ? a.duration: 1E3,
        f = a.easing ? a.easing: qe;
        return function(a, h) {
            if (h.time < d) return h.animate = !0,
            h.viewHints[0] += 1,
            !0;
            if (h.time < d + e) {
                var k = f((h.time - d) / e),
                m = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * m;
                h.viewHints[0] += 1;
                return ! 0
            }
            return ! 1
        }
    },
    OPENLAYERS); u("ol.animation.pan", re, OPENLAYERS); u("ol.animation.rotate", se, OPENLAYERS); u("ol.animation.zoom", te, OPENLAYERS); u("ol.Attribution", Ae, OPENLAYERS); Ae.prototype.getHTML = Ae.prototype.g; Be.prototype.element = Be.prototype.element; u("ol.Collection", De, OPENLAYERS); De.prototype.clear = De.prototype.clear; De.prototype.extend = De.prototype.jf; De.prototype.forEach = De.prototype.forEach; De.prototype.getArray = De.prototype.ul; De.prototype.item = De.prototype.item; De.prototype.getLength = De.prototype.Zb; De.prototype.insertAt = De.prototype.Zd; De.prototype.pop = De.prototype.pop; De.prototype.push = De.prototype.push; De.prototype.remove = De.prototype.remove; De.prototype.removeAt = De.prototype.Lf; De.prototype.setAt = De.prototype.Co; u("ol.colorlike.asColorLike", Qe, OPENLAYERS); u("ol.coordinate.add", Rb, OPENLAYERS); u("ol.coordinate.createStringXY",
    function(a) {
        return function(c) {
            return Zb(c, a)
        }
    },
    OPENLAYERS); u("ol.coordinate.format", Ub, OPENLAYERS); u("ol.coordinate.rotate", Wb, OPENLAYERS); u("ol.coordinate.toStringHDMS",
    function(a, c) {
        return a ? Tb(a[1], "NS", c) + " " + Tb(a[0], "EW", c) : ""
    },
    OPENLAYERS); u("ol.coordinate.toStringXY", Zb, OPENLAYERS); u("ol.DeviceOrientation", co, OPENLAYERS); co.prototype.getAlpha = co.prototype.Ej; co.prototype.getBeta = co.prototype.Hj; co.prototype.getGamma = co.prototype.Nj; co.prototype.getHeading = co.prototype.vl; co.prototype.getTracking = co.prototype.Tg; co.prototype.setTracking = co.prototype.kf; u("ol.easing.easeIn", me, OPENLAYERS); u("ol.easing.easeOut", ne, OPENLAYERS); u("ol.easing.inAndOut", oe, OPENLAYERS); u("ol.easing.linear", pe, OPENLAYERS); u("ol.easing.upAndDown", qe, OPENLAYERS); u("ol.extent.boundingExtent", nc, OPENLAYERS); u("ol.extent.buffer", qc, OPENLAYERS); u("ol.extent.containsCoordinate", tc, OPENLAYERS); u("ol.extent.containsExtent", wc, OPENLAYERS); u("ol.extent.containsXY", vc, OPENLAYERS); u("ol.extent.createEmpty", oc, OPENLAYERS); u("ol.extent.equals", Cc, OPENLAYERS); u("ol.extent.extend", Dc, OPENLAYERS); u("ol.extent.getBottomLeft", Fc, OPENLAYERS); u("ol.extent.getBottomRight", Gc, OPENLAYERS); u("ol.extent.getCenter", Nc, OPENLAYERS); u("ol.extent.getHeight", Mc, OPENLAYERS); u("ol.extent.getIntersection", Pc, OPENLAYERS); u("ol.extent.getSize",
    function(a) {
        return [a[2] - a[0], a[3] - a[1]]
    },
    OPENLAYERS); u("ol.extent.getTopLeft", Ic, OPENLAYERS); u("ol.extent.getTopRight", Hc, OPENLAYERS); u("ol.extent.getWidth", Lc, OPENLAYERS); u("ol.extent.intersects", Qc, OPENLAYERS); u("ol.extent.isEmpty", Kc, OPENLAYERS); u("ol.extent.applyTransform", Sc, OPENLAYERS); u("ol.Feature", xl, OPENLAYERS); xl.prototype.clone = xl.prototype.clone; xl.prototype.getGeometry = xl.prototype.W; xl.prototype.getId = xl.prototype.Wa; xl.prototype.getGeometryName = xl.prototype.Pj; xl.prototype.getStyle = xl.prototype.xl; xl.prototype.getStyleFunction = xl.prototype.$b; xl.prototype.setGeometry = xl.prototype.Ra; xl.prototype.setStyle = xl.prototype.lf; xl.prototype.setId = xl.prototype.hc; xl.prototype.setGeometryName = xl.prototype.Bc; u("ol.featureloader.tile", Tl, OPENLAYERS); u("ol.featureloader.xhr", Ul, OPENLAYERS); u("ol.Geolocation", ku, OPENLAYERS); ku.prototype.getAccuracy = ku.prototype.Cj; ku.prototype.getAccuracyGeometry = ku.prototype.Dj; ku.prototype.getAltitude = ku.prototype.Fj; ku.prototype.getAltitudeAccuracy = ku.prototype.Gj; ku.prototype.getHeading = ku.prototype.zl; ku.prototype.getPosition = ku.prototype.Al; ku.prototype.getProjection = ku.prototype.Ug; ku.prototype.getSpeed = ku.prototype.kk; ku.prototype.getTracking = ku.prototype.Vg; ku.prototype.getTrackingOptions = ku.prototype.Fg; ku.prototype.setProjection = ku.prototype.Wg; ku.prototype.setTracking = ku.prototype.be; ku.prototype.setTrackingOptions = ku.prototype.ji; u("ol.Graticule", qu, OPENLAYERS); qu.prototype.getMap = qu.prototype.Dl; qu.prototype.getMeridians = qu.prototype.Yj; qu.prototype.getParallels = qu.prototype.ek; qu.prototype.setMap = qu.prototype.setMap; u("ol.has.DEVICE_PIXEL_RATIO", ah, OPENLAYERS); u("ol.has.CANVAS", ch, OPENLAYERS); u("ol.has.DEVICE_ORIENTATION", dh, OPENLAYERS); u("ol.has.GEOLOCATION", eh, OPENLAYERS); u("ol.has.TOUCH", fh, OPENLAYERS); u("ol.has.WEBGL", Wg, OPENLAYERS); vu.prototype.getImage = vu.prototype.a; wu.prototype.getImage = wu.prototype.fb; u("ol.Kinetic", Ni, OPENLAYERS); u("ol.loadingstrategy.all", Vl, OPENLAYERS); u("ol.loadingstrategy.bbox",
    function(a) {
        return [a]
    },
    OPENLAYERS); u("ol.loadingstrategy.tile",
    function(a) {
        return function(c, d) {
            var e = ig(a, d),
            f = dg(a, c, e),
            g = [],
            e = [e, 0, 0];
            for (e[1] = f.ua; e[1] <= f.wa; ++e[1]) for (e[2] = f.za; e[2] <= f.Ba; ++e[2]) g.push(a.Da(e));
            return g
        }
    },
    OPENLAYERS); u("ol.Map", R, OPENLAYERS); R.prototype.addControl = R.prototype.lj; R.prototype.addInteraction = R.prototype.mj; R.prototype.addLayer = R.prototype.dg; R.prototype.addOverlay = R.prototype.eg; R.prototype.beforeRender = R.prototype.Va; R.prototype.forEachFeatureAtPixel = R.prototype.fd; R.prototype.forEachLayerAtPixel = R.prototype.Hl; R.prototype.hasFeatureAtPixel = R.prototype.Zk; R.prototype.getEventCoordinate = R.prototype.Lj; R.prototype.getEventPixel = R.prototype.Od; R.prototype.getTarget = R.prototype.mf; R.prototype.getTargetElement = R.prototype.vc; R.prototype.getCoordinateFromPixel = R.prototype.Oa; R.prototype.getControls = R.prototype.Jj; R.prototype.getOverlays = R.prototype.ck; R.prototype.getOverlayById = R.prototype.bk; R.prototype.getInteractions = R.prototype.Qj; R.prototype.getLayerGroup = R.prototype.uc; R.prototype.getLayers = R.prototype.Xg; R.prototype.getPixelFromCoordinate = R.prototype.Ga; R.prototype.getSize = R.prototype.ab; R.prototype.getView = R.prototype.aa; R.prototype.getViewport = R.prototype.sk; R.prototype.renderSync = R.prototype.yo; R.prototype.render = R.prototype.render; R.prototype.removeControl = R.prototype.ro; R.prototype.removeInteraction = R.prototype.so; R.prototype.removeLayer = R.prototype.uo; R.prototype.removeOverlay = R.prototype.vo; R.prototype.setLayerGroup = R.prototype.bi; R.prototype.setSize = R.prototype.Pf; R.prototype.setTarget = R.prototype.Yg; R.prototype.setView = R.prototype.Mo; R.prototype.updateSize = R.prototype.Rc; Ph.prototype.originalEvent = Ph.prototype.originalEvent; Ph.prototype.pixel = Ph.prototype.pixel; Ph.prototype.coordinate = Ph.prototype.coordinate; Ph.prototype.dragging = Ph.prototype.dragging; Of.prototype.map = Of.prototype.map; Of.prototype.frameState = Of.prototype.frameState; Jb.prototype.key = Jb.prototype.key; Jb.prototype.oldValue = Jb.prototype.oldValue; u("ol.Object", Kb, OPENLAYERS); Kb.prototype.get = Kb.prototype.get; Kb.prototype.getKeys = Kb.prototype.O; Kb.prototype.getProperties = Kb.prototype.P; Kb.prototype.set = Kb.prototype.set; Kb.prototype.setProperties = Kb.prototype.C; Kb.prototype.unset = Kb.prototype.R; u("ol.Observable", Hb, OPENLAYERS); u("ol.Observable.unByKey", Ib, OPENLAYERS); Hb.prototype.changed = Hb.prototype.u; Hb.prototype.dispatchEvent = Hb.prototype.b; Hb.prototype.getRevision = Hb.prototype.K; Hb.prototype.on = Hb.prototype.I; Hb.prototype.once = Hb.prototype.L; Hb.prototype.un = Hb.prototype.J; Hb.prototype.unByKey = Hb.prototype.M; u("ol.inherits", y, OPENLAYERS); u("ol.Overlay", Kn, OPENLAYERS); Kn.prototype.getElement = Kn.prototype.ce; Kn.prototype.getId = Kn.prototype.Wa; Kn.prototype.getMap = Kn.prototype.de; Kn.prototype.getOffset = Kn.prototype.Dg; Kn.prototype.getPosition = Kn.prototype.Zg; Kn.prototype.getPositioning = Kn.prototype.Eg; Kn.prototype.setElement = Kn.prototype.Yh; Kn.prototype.setMap = Kn.prototype.setMap; Kn.prototype.setOffset = Kn.prototype.di; Kn.prototype.setPosition = Kn.prototype.nf; Kn.prototype.setPositioning = Kn.prototype.gi; u("ol.render.toContext",
    function(a, c) {
        var d = a.canvas,
        e = c ? c: {},
        f = e.pixelRatio || ah;
        if (e = e.size) d.width = e[0] * f,
        d.height = e[1] * f,
        d.style.width = e[0] + "px",
        d.style.height = e[1] + "px";
        d = [0, 0, d.width, d.height];
        e = ki(cc(), 0, 0, f, f, 0, 0, 0);
        return new sk(a, f, d, e, 0)
    },
    OPENLAYERS); u("ol.size.toSize", Qb, OPENLAYERS); Vf.prototype.getTileCoord = Vf.prototype.f; zl.prototype.getFormat = zl.prototype.Il; zl.prototype.setFeatures = zl.prototype.Zh; zl.prototype.setProjection = zl.prototype.pf; zl.prototype.setLoader = zl.prototype.ci; u("ol.View", ge, OPENLAYERS); ge.prototype.constrainCenter = ge.prototype.Md; ge.prototype.constrainResolution = ge.prototype.constrainResolution; ge.prototype.constrainRotation = ge.prototype.constrainRotation; ge.prototype.getCenter = ge.prototype.bb; ge.prototype.calculateExtent = ge.prototype.Gc; ge.prototype.getProjection = ge.prototype.Jl; ge.prototype.getResolution = ge.prototype.$; ge.prototype.getRotation = ge.prototype.Ma; ge.prototype.getZoom = ge.prototype.uk; ge.prototype.fit = ge.prototype.Xe; ge.prototype.centerOn = ge.prototype.vj; ge.prototype.rotate = ge.prototype.rotate; ge.prototype.setCenter = ge.prototype.lb; ge.prototype.setResolution = ge.prototype.Sb; ge.prototype.setRotation = ge.prototype.ee; ge.prototype.setZoom = ge.prototype.Po; u("ol.xml.getAllTextContent", Cl, OPENLAYERS); u("ol.xml.parse", Gl, OPENLAYERS); Sm.prototype.getGL = Sm.prototype.Bn; Sm.prototype.useProgram = Sm.prototype.re; u("ol.tilegrid.TileGrid", $f, OPENLAYERS); $f.prototype.getMaxZoom = $f.prototype.Bg; $f.prototype.getMinZoom = $f.prototype.Cg; $f.prototype.getOrigin = $f.prototype.Ia; $f.prototype.getResolution = $f.prototype.$; $f.prototype.getResolutions = $f.prototype.Kb; $f.prototype.getTileCoordExtent = $f.prototype.Da; $f.prototype.getTileCoordForCoordAndResolution = $f.prototype.Ud; $f.prototype.getTileCoordForCoordAndZ = $f.prototype.md; $f.prototype.getTileSize = $f.prototype.Ya; u("ol.tilegrid.createXYZ", mg, OPENLAYERS); u("ol.tilegrid.WMTS", xw, OPENLAYERS); xw.prototype.getMatrixIds = xw.prototype.l; u("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", yw, OPENLAYERS); u("ol.style.AtlasManager", Cw, OPENLAYERS); u("ol.style.Circle", kk, OPENLAYERS); kk.prototype.getFill = kk.prototype.$m; kk.prototype.getImage = kk.prototype.ec; kk.prototype.getRadius = kk.prototype.an; kk.prototype.getStroke = kk.prototype.bn; u("ol.style.Fill", ck, OPENLAYERS); ck.prototype.getColor = ck.prototype.g; ck.prototype.setColor = ck.prototype.f; u("ol.style.Icon", xi, OPENLAYERS); xi.prototype.getAnchor = xi.prototype.Vb; xi.prototype.getImage = xi.prototype.ec; xi.prototype.getOrigin = xi.prototype.Ia; xi.prototype.getSrc = xi.prototype.cn; xi.prototype.getSize = xi.prototype.Db; xi.prototype.load = xi.prototype.load; u("ol.style.Image", wi, OPENLAYERS); wi.prototype.getOpacity = wi.prototype.le; wi.prototype.getRotateWithView = wi.prototype.Sd; wi.prototype.getRotation = wi.prototype.me; wi.prototype.getScale = wi.prototype.ne; wi.prototype.getSnapToPixel = wi.prototype.Td; wi.prototype.setOpacity = wi.prototype.oe; wi.prototype.setRotation = wi.prototype.pe; wi.prototype.setScale = wi.prototype.qe; u("ol.style.RegularShape", Gw, OPENLAYERS); Gw.prototype.getAnchor = Gw.prototype.Vb; Gw.prototype.getAngle = Gw.prototype.dn; Gw.prototype.getFill = Gw.prototype.en; Gw.prototype.getImage = Gw.prototype.ec; Gw.prototype.getOrigin = Gw.prototype.Ia; Gw.prototype.getPoints = Gw.prototype.fn; Gw.prototype.getRadius = Gw.prototype.gn; Gw.prototype.getRadius2 = Gw.prototype.ik; Gw.prototype.getSize = Gw.prototype.Db; Gw.prototype.getStroke = Gw.prototype.hn; u("ol.style.Stroke", ik, OPENLAYERS); ik.prototype.getColor = ik.prototype.jn; ik.prototype.getLineCap = ik.prototype.Tj; ik.prototype.getLineDash = ik.prototype.kn; ik.prototype.getLineJoin = ik.prototype.Uj; ik.prototype.getMiterLimit = ik.prototype.Zj; ik.prototype.getWidth = ik.prototype.ln; ik.prototype.setColor = ik.prototype.mn; ik.prototype.setLineCap = ik.prototype.Ho; ik.prototype.setLineDash = ik.prototype.nn; ik.prototype.setLineJoin = ik.prototype.Io; ik.prototype.setMiterLimit = ik.prototype.Jo; ik.prototype.setWidth = ik.prototype.No; u("ol.style.Style", lk, OPENLAYERS); lk.prototype.getGeometry = lk.prototype.W; lk.prototype.getGeometryFunction = lk.prototype.Oj; lk.prototype.getFill = lk.prototype.pn; lk.prototype.getImage = lk.prototype.qn; lk.prototype.getStroke = lk.prototype.rn; lk.prototype.getText = lk.prototype.Ha; lk.prototype.getZIndex = lk.prototype.sn; lk.prototype.setGeometry = lk.prototype.Dh; lk.prototype.setZIndex = lk.prototype.tn; u("ol.style.Text", vq, OPENLAYERS); vq.prototype.getFont = vq.prototype.Mj; vq.prototype.getOffsetX = vq.prototype.$j; vq.prototype.getOffsetY = vq.prototype.ak; vq.prototype.getFill = vq.prototype.vn; vq.prototype.getRotation = vq.prototype.wn; vq.prototype.getScale = vq.prototype.xn; vq.prototype.getStroke = vq.prototype.yn; vq.prototype.getText = vq.prototype.Ha; vq.prototype.getTextAlign = vq.prototype.mk; vq.prototype.getTextBaseline = vq.prototype.nk; vq.prototype.setFont = vq.prototype.Eo; vq.prototype.setOffsetX = vq.prototype.ei; vq.prototype.setOffsetY = vq.prototype.fi; vq.prototype.setFill = vq.prototype.Do; vq.prototype.setRotation = vq.prototype.zn; vq.prototype.setScale = vq.prototype.An; vq.prototype.setStroke = vq.prototype.Ko; vq.prototype.setText = vq.prototype.hi; vq.prototype.setTextAlign = vq.prototype.ii; vq.prototype.setTextBaseline = vq.prototype.Lo; u("ol.Sphere", Vc, OPENLAYERS); Vc.prototype.geodesicArea = Vc.prototype.a; Vc.prototype.haversineDistance = Vc.prototype.b; u("ol.source.BingMaps", Gv, OPENLAYERS); u("ol.source.BingMaps.TOS_ATTRIBUTION", Hv, OPENLAYERS); u("ol.source.CartoDB", Jv, OPENLAYERS); Jv.prototype.getConfig = Jv.prototype.D; Jv.prototype.updateConfig = Jv.prototype.Y; u("ol.source.Cluster", X, OPENLAYERS); X.prototype.getSource = X.prototype.ta; u("ol.source.ImageCanvas", wl, OPENLAYERS); u("ol.source.ImageMapGuide", Ov, OPENLAYERS); Ov.prototype.getParams = Ov.prototype.Em; Ov.prototype.getImageLoadFunction = Ov.prototype.Dm; Ov.prototype.updateParams = Ov.prototype.Gm; Ov.prototype.setImageLoadFunction = Ov.prototype.Fm; u("ol.source.Image", pl, OPENLAYERS); rl.prototype.image = rl.prototype.image; u("ol.source.ImageStatic", Pv, OPENLAYERS); u("ol.source.ImageVector", mm, OPENLAYERS); mm.prototype.getSource = mm.prototype.Hm; mm.prototype.getStyle = mm.prototype.Im; mm.prototype.getStyleFunction = mm.prototype.Jm; mm.prototype.setStyle = mm.prototype.qh; u("ol.source.ImageWMS", Qv, OPENLAYERS); Qv.prototype.getGetFeatureInfoUrl = Qv.prototype.Mm; Qv.prototype.getParams = Qv.prototype.Om; Qv.prototype.getImageLoadFunction = Qv.prototype.Nm; Qv.prototype.getUrl = Qv.prototype.Pm; Qv.prototype.setImageLoadFunction = Qv.prototype.Qm; Qv.prototype.setUrl = Qv.prototype.Rm; Qv.prototype.updateParams = Qv.prototype.Sm; u("ol.source.MapQuest", Wv, OPENLAYERS); Wv.prototype.getLayer = Wv.prototype.o; u("ol.source.OSM", Uv, OPENLAYERS); u("ol.source.OSM.ATTRIBUTION", Vv, OPENLAYERS); u("ol.source.Raster", Zv, OPENLAYERS); Zv.prototype.setOperation = Zv.prototype.s; dw.prototype.extent = dw.prototype.extent; dw.prototype.resolution = dw.prototype.resolution; dw.prototype.data = dw.prototype.data; u("ol.source.Source", Xf, OPENLAYERS); Xf.prototype.getAttributions = Xf.prototype.da; Xf.prototype.getLogo = Xf.prototype.qa; Xf.prototype.getProjection = Xf.prototype.sa; Xf.prototype.getState = Xf.prototype.V; Xf.prototype.refresh = Xf.prototype.pa; Xf.prototype.setAttributions = Xf.prototype.la; u("ol.source.Stamen", iw, OPENLAYERS); u("ol.source.TileArcGISRest", kw, OPENLAYERS); kw.prototype.getParams = kw.prototype.s; kw.prototype.updateParams = kw.prototype.A; u("ol.source.TileDebug", mw, OPENLAYERS); u("ol.source.TileImage", W, OPENLAYERS); W.prototype.setRenderReprojectionEdges = W.prototype.nb; W.prototype.setTileGridForProjection = W.prototype.ob; u("ol.source.TileJSON", nw, OPENLAYERS); nw.prototype.getTileJSON = nw.prototype.pk; u("ol.source.Tile", ng, OPENLAYERS); ng.prototype.getTileGrid = ng.prototype.Ja; rg.prototype.tile = rg.prototype.tile; u("ol.source.TileUTFGrid", ow, OPENLAYERS); ow.prototype.getTemplate = ow.prototype.lk; ow.prototype.forDataAtCoordinateAndResolution = ow.prototype.yj; u("ol.source.TileWMS", sw, OPENLAYERS); sw.prototype.getGetFeatureInfoUrl = sw.prototype.Um; sw.prototype.getParams = sw.prototype.Vm; sw.prototype.updateParams = sw.prototype.Wm; wm.prototype.getTileLoadFunction = wm.prototype.Xa; wm.prototype.getTileUrlFunction = wm.prototype.Za; wm.prototype.getUrls = wm.prototype.$a; wm.prototype.setTileLoadFunction = wm.prototype.cb; wm.prototype.setTileUrlFunction = wm.prototype.Na; wm.prototype.setUrl = wm.prototype.Pa; wm.prototype.setUrls = wm.prototype.Ta; u("ol.source.Vector", Q, OPENLAYERS); Q.prototype.addFeature = Q.prototype.tb; Q.prototype.addFeatures = Q.prototype.Fc; Q.prototype.clear = Q.prototype.clear; Q.prototype.forEachFeature = Q.prototype.pg; Q.prototype.forEachFeatureInExtent = Q.prototype.wb; Q.prototype.forEachFeatureIntersectingExtent = Q.prototype.qg; Q.prototype.getFeaturesCollection = Q.prototype.xg; Q.prototype.getFeatures = Q.prototype.je; Q.prototype.getFeaturesAtCoordinate = Q.prototype.wg; Q.prototype.getFeaturesInExtent = Q.prototype.Ze; Q.prototype.getClosestFeatureToCoordinate = Q.prototype.sg; Q.prototype.getExtent = Q.prototype.G; Q.prototype.getFeatureById = Q.prototype.vg; Q.prototype.getFormat = Q.prototype.wh; Q.prototype.getUrl = Q.prototype.xh; Q.prototype.removeFeature = Q.prototype.mb; jm.prototype.feature = jm.prototype.feature; u("ol.source.VectorTile", xm, OPENLAYERS); u("ol.source.WMTS", Z, OPENLAYERS); Z.prototype.getDimensions = Z.prototype.Kj; Z.prototype.getFormat = Z.prototype.Xm; Z.prototype.getLayer = Z.prototype.Ym; Z.prototype.getMatrixSet = Z.prototype.Xj; Z.prototype.getRequestEncoding = Z.prototype.jk; Z.prototype.getStyle = Z.prototype.Zm; Z.prototype.getVersion = Z.prototype.rk; Z.prototype.updateDimensions = Z.prototype.Wo; u("ol.source.WMTS.optionsFromCapabilities",
    function(a, c) {
        var d = ab(a.Contents.Layer,
        function(a) {
            return a.Identifier == c.layer
        }),
        e = a.Contents.TileMatrixSet,
        f,
        g;
        f = 1 < d.TileMatrixSetLink.length ? "projection" in c ? eb(d.TileMatrixSetLink,
        function(a) {
            return ab(e,
            function(c) {
                return c.Identifier == a.TileMatrixSet
            }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == c.projection
        }) : eb(d.TileMatrixSetLink,
        function(a) {
            return a.TileMatrixSet == c.matrixSet
        }) : 0;
        0 > f && (f = 0);
        g = d.TileMatrixSetLink[f].TileMatrixSet;
        var h = d.Format[0];
        "format" in c && (h = c.format);
        f = eb(d.Style,
        function(a) {
            return "style" in c ? a.Title == c.style: a.isDefault
        });
        0 > f && (f = 0);
        f = d.Style[f].Identifier;
        var k = {};
        "Dimension" in d && d.Dimension.forEach(function(a) {
            var c = a.Identifier,
            d = a.Default;
            void 0 === d && (d = a.Value[0]);
            k[c] = d
        });
        var m = ab(a.Contents.TileMatrixSet,
        function(a) {
            return a.Identifier == g
        }),
        n;
        n = "projection" in c ? ad(c.projection) : ad(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = d.WGS84BoundingBox,
        q, r;
        void 0 !== p && (r = ad("EPSG:4326").G(), r = p[0] == r[0] && p[2] == r[2], q = ud(p, "EPSG:4326", n), (p = n.G()) && (wc(p, q) || (q = void 0)));
        var m = yw(m, q),
        t = [];
        q = c.requestEncoding;
        q = void 0 !== q ? q: "";
        if (a.hasOwnProperty("OperationsMetadata") && a.OperationsMetadata.hasOwnProperty("GetTile") && 0 !== q.indexOf("REST")) for (var d = a.OperationsMetadata.GetTile.DCP.HTTP.Get,
        p = 0,
        v = d.length; p < v; ++p) {
            var w = ab(d[p].Constraint,
            function(a) {
                return "GetEncoding" == a.name
            }).AllowedValues.Value;
            0 < w.length && Wa(w, "KVP") && (q = "KVP", t.push(d[p].href))
        } else q = "REST",
        d.ResourceURL.forEach(function(a) {
            "tile" == a.resourceType && (h = a.format, t.push(a.template))
        });
        return {
            urls: t,
            layer: c.layer,
            matrixSet: g,
            format: h,
            projection: n,
            requestEncoding: q,
            tileGrid: m,
            style: f,
            dimensions: k,
            wrapX: r
        }
    },
    OPENLAYERS); u("ol.source.XYZ", Iv, OPENLAYERS); u("ol.source.Zoomify", Aw, OPENLAYERS); fi.prototype.vectorContext = fi.prototype.vectorContext; fi.prototype.frameState = fi.prototype.frameState; fi.prototype.context = fi.prototype.context; fi.prototype.glContext = fi.prototype.glContext; al.prototype.get = al.prototype.get; al.prototype.getExtent = al.prototype.G; al.prototype.getGeometry = al.prototype.W; al.prototype.getProperties = al.prototype.zm; al.prototype.getType = al.prototype.X; u("ol.render.VectorContext", ei, OPENLAYERS); pn.prototype.setStyle = pn.prototype.pd; pn.prototype.drawGeometry = pn.prototype.pc; pn.prototype.drawFeature = pn.prototype.Se; sk.prototype.drawCircle = sk.prototype.Nd; sk.prototype.setStyle = sk.prototype.pd; sk.prototype.drawGeometry = sk.prototype.pc; sk.prototype.drawFeature = sk.prototype.Se; u("ol.proj.common.add", Vj, OPENLAYERS); u("ol.proj.METERS_PER_UNIT", Xc, OPENLAYERS); u("ol.proj.Projection", Yc, OPENLAYERS); Yc.prototype.getCode = Yc.prototype.Ij; Yc.prototype.getExtent = Yc.prototype.G; Yc.prototype.getUnits = Yc.prototype.xm; Yc.prototype.getMetersPerUnit = Yc.prototype.Xb; Yc.prototype.getWorldExtent = Yc.prototype.tk; Yc.prototype.isGlobal = Yc.prototype.dl; Yc.prototype.setGlobal = Yc.prototype.Go; Yc.prototype.setExtent = Yc.prototype.ym; Yc.prototype.setWorldExtent = Yc.prototype.Oo; Yc.prototype.setGetPointResolution = Yc.prototype.Fo; Yc.prototype.getPointResolution = Yc.prototype.getPointResolution; u("ol.proj.setProj4",
    function(a) {
        $c = a
    },
    OPENLAYERS); u("ol.proj.addEquivalentProjections", bd, OPENLAYERS); u("ol.proj.addProjection", nd, OPENLAYERS); u("ol.proj.addCoordinateTransforms", cd, OPENLAYERS); u("ol.proj.fromLonLat",
    function(a, c) {
        return td(a, "EPSG:4326", void 0 !== c ? c: "EPSG:3857")
    },
    OPENLAYERS); u("ol.proj.toLonLat",
    function(a, c) {
        return td(a, void 0 !== c ? c: "EPSG:3857", "EPSG:4326")
    },
    OPENLAYERS); u("ol.proj.get", ad, OPENLAYERS); u("ol.proj.equivalent", qd, OPENLAYERS); u("ol.proj.getTransform", rd, OPENLAYERS); u("ol.proj.transform", td, OPENLAYERS); u("ol.proj.transformExtent", ud, OPENLAYERS); u("ol.layer.Heatmap", V, OPENLAYERS); V.prototype.getBlur = V.prototype.rg; V.prototype.getGradient = V.prototype.zg; V.prototype.getRadius = V.prototype.ih; V.prototype.setBlur = V.prototype.Wh; V.prototype.setGradient = V.prototype.ai; V.prototype.setRadius = V.prototype.jh; u("ol.layer.Image", Wj, OPENLAYERS); Wj.prototype.getSource = Wj.prototype.ea; u("ol.layer.Layer", gi, OPENLAYERS); gi.prototype.getSource = gi.prototype.ea; gi.prototype.setMap = gi.prototype.setMap; gi.prototype.setSource = gi.prototype.Cc; u("ol.layer.Base", ci, OPENLAYERS); ci.prototype.getExtent = ci.prototype.G; ci.prototype.getMaxResolution = ci.prototype.Ib; ci.prototype.getMinResolution = ci.prototype.Jb; ci.prototype.getOpacity = ci.prototype.Nb; ci.prototype.getVisible = ci.prototype.yb; ci.prototype.getZIndex = ci.prototype.Ob; ci.prototype.setExtent = ci.prototype.ac; ci.prototype.setMaxResolution = ci.prototype.ic; ci.prototype.setMinResolution = ci.prototype.jc; ci.prototype.setOpacity = ci.prototype.bc; ci.prototype.setVisible = ci.prototype.cc; ci.prototype.setZIndex = ci.prototype.dc; u("ol.layer.Group", Mj, OPENLAYERS); Mj.prototype.getLayers = Mj.prototype.Nc; Mj.prototype.setLayers = Mj.prototype.hh; u("ol.layer.Tile", Xj, OPENLAYERS); Xj.prototype.getPreload = Xj.prototype.a; Xj.prototype.getSource = Xj.prototype.ea; Xj.prototype.setPreload = Xj.prototype.c; Xj.prototype.getUseInterimTilesOnError = Xj.prototype.f; Xj.prototype.setUseInterimTilesOnError = Xj.prototype.i; u("ol.layer.Vector", G, OPENLAYERS); G.prototype.getSource = G.prototype.ea; G.prototype.getStyle = G.prototype.N; G.prototype.getStyleFunction = G.prototype.H; G.prototype.setStyle = G.prototype.c; u("ol.layer.VectorTile", H, OPENLAYERS); H.prototype.getPreload = H.prototype.i; H.prototype.getUseInterimTilesOnError = H.prototype.S; H.prototype.setPreload = H.prototype.T; H.prototype.setUseInterimTilesOnError = H.prototype.Y; u("ol.interaction.DoubleClickZoom", Ti, OPENLAYERS); u("ol.interaction.DoubleClickZoom.handleEvent", Ui, OPENLAYERS); u("ol.interaction.DragAndDrop", yu, OPENLAYERS); u("ol.interaction.DragAndDrop.handleEvent", Tc, OPENLAYERS); Bu.prototype.features = Bu.prototype.features; Bu.prototype.file = Bu.prototype.file; Bu.prototype.projection = Bu.prototype.projection; qj.prototype.coordinate = qj.prototype.coordinate; qj.prototype.mapBrowserEvent = qj.prototype.mapBrowserEvent; u("ol.interaction.DragBox", rj, OPENLAYERS); rj.prototype.getGeometry = rj.prototype.W; u("ol.interaction.DragPan", fj, OPENLAYERS); u("ol.interaction.DragRotateAndZoom", Du, OPENLAYERS); u("ol.interaction.DragRotate", jj, OPENLAYERS); u("ol.interaction.DragZoom", wj, OPENLAYERS); Hu.prototype.feature = Hu.prototype.feature; u("ol.interaction.Draw", Iu, OPENLAYERS); u("ol.interaction.Draw.handleEvent", Ku, OPENLAYERS); Iu.prototype.removeLastPoint = Iu.prototype.to; Iu.prototype.finishDrawing = Iu.prototype.ed; Iu.prototype.extend = Iu.prototype.cm; u("ol.interaction.Draw.createRegularPolygon",
    function(a, c) {
        return function(d, e) {
            var f = d[0],
            g = d[1],
            h = Math.sqrt(Xb(f, g)),
            k = e ? e: ee(new lu(f), a);
            fe(k, f, h, c ? c: Math.atan((g[1] - f[1]) / (g[0] - f[0])));
            return k
        }
    },
    OPENLAYERS); u("ol.interaction.Interaction", Pi, OPENLAYERS); Pi.prototype.getActive = Pi.prototype.f; Pi.prototype.getMap = Pi.prototype.j; Pi.prototype.setActive = Pi.prototype.i; u("ol.interaction.defaults", Lj, OPENLAYERS); u("ol.interaction.KeyboardPan", xj, OPENLAYERS); u("ol.interaction.KeyboardPan.handleEvent", yj, OPENLAYERS); u("ol.interaction.KeyboardZoom", zj, OPENLAYERS); u("ol.interaction.KeyboardZoom.handleEvent", Aj, OPENLAYERS); Yu.prototype.features = Yu.prototype.features; Yu.prototype.mapBrowserPointerEvent = Yu.prototype.mapBrowserPointerEvent; u("ol.interaction.Modify", Zu, OPENLAYERS); u("ol.interaction.Modify.handleEvent", bv, OPENLAYERS); u("ol.interaction.MouseWheelZoom", Bj, OPENLAYERS); u("ol.interaction.MouseWheelZoom.handleEvent", Cj, OPENLAYERS); Bj.prototype.setMouseAnchor = Bj.prototype.H; u("ol.interaction.PinchRotate", Dj, OPENLAYERS); u("ol.interaction.PinchZoom", Hj, OPENLAYERS); u("ol.interaction.Pointer", cj, OPENLAYERS); u("ol.interaction.Pointer.handleEvent", dj, OPENLAYERS); lv.prototype.selected = lv.prototype.selected; lv.prototype.deselected = lv.prototype.deselected; lv.prototype.mapBrowserEvent = lv.prototype.mapBrowserEvent; u("ol.interaction.Select", mv, OPENLAYERS); mv.prototype.getFeatures = mv.prototype.mm; mv.prototype.getLayer = mv.prototype.nm; u("ol.interaction.Select.handleEvent", nv, OPENLAYERS); mv.prototype.setMap = mv.prototype.setMap; u("ol.interaction.Snap", pv, OPENLAYERS); pv.prototype.addFeature = pv.prototype.tb; pv.prototype.removeFeature = pv.prototype.mb; tv.prototype.features = tv.prototype.features; tv.prototype.coordinate = tv.prototype.coordinate; u("ol.interaction.Translate", uv, OPENLAYERS); u("ol.geom.Circle", lu, OPENLAYERS); lu.prototype.clone = lu.prototype.clone; lu.prototype.getCenter = lu.prototype.od; lu.prototype.getRadius = lu.prototype.qf; lu.prototype.getType = lu.prototype.X; lu.prototype.intersectsExtent = lu.prototype.Ka; lu.prototype.setCenter = lu.prototype.Vl; lu.prototype.setCenterAndRadius = lu.prototype.Of; lu.prototype.setRadius = lu.prototype.Wl; lu.prototype.transform = lu.prototype.hb; u("ol.geom.Geometry", vd, OPENLAYERS); vd.prototype.getClosestPoint = vd.prototype.xb; vd.prototype.getExtent = vd.prototype.G; vd.prototype.rotate = vd.prototype.rotate; vd.prototype.simplify = vd.prototype.Ab; vd.prototype.transform = vd.prototype.hb; u("ol.geom.GeometryCollection", zo, OPENLAYERS); zo.prototype.clone = zo.prototype.clone; zo.prototype.getGeometries = zo.prototype.yg; zo.prototype.getType = zo.prototype.X; zo.prototype.intersectsExtent = zo.prototype.Ka; zo.prototype.setGeometries = zo.prototype.$h; zo.prototype.applyTransform = zo.prototype.oc; zo.prototype.translate = zo.prototype.Mc; u("ol.geom.LinearRing", Pd, OPENLAYERS); Pd.prototype.clone = Pd.prototype.clone; Pd.prototype.getArea = Pd.prototype.Zl; Pd.prototype.getCoordinates = Pd.prototype.Z; Pd.prototype.getType = Pd.prototype.X; Pd.prototype.setCoordinates = Pd.prototype.ma; u("ol.geom.LineString", S, OPENLAYERS); S.prototype.appendCoordinate = S.prototype.nj; S.prototype.clone = S.prototype.clone; S.prototype.forEachSegment = S.prototype.Bj; S.prototype.getCoordinateAtM = S.prototype.Xl; S.prototype.getCoordinates = S.prototype.Z; S.prototype.getCoordinateAt = S.prototype.tg; S.prototype.getLength = S.prototype.Yl; S.prototype.getType = S.prototype.X; S.prototype.intersectsExtent = S.prototype.Ka; S.prototype.setCoordinates = S.prototype.ma; u("ol.geom.MultiLineString", T, OPENLAYERS); T.prototype.appendLineString = T.prototype.oj; T.prototype.clone = T.prototype.clone; T.prototype.getCoordinateAtM = T.prototype.$l; T.prototype.getCoordinates = T.prototype.Z; T.prototype.getLineString = T.prototype.Vj; T.prototype.getLineStrings = T.prototype.jd; T.prototype.getType = T.prototype.X; T.prototype.intersectsExtent = T.prototype.Ka; T.prototype.setCoordinates = T.prototype.ma; u("ol.geom.MultiPoint", oo, OPENLAYERS); oo.prototype.appendPoint = oo.prototype.qj; oo.prototype.clone = oo.prototype.clone; oo.prototype.getCoordinates = oo.prototype.Z; oo.prototype.getPoint = oo.prototype.fk; oo.prototype.getPoints = oo.prototype.fe; oo.prototype.getType = oo.prototype.X; oo.prototype.intersectsExtent = oo.prototype.Ka; oo.prototype.setCoordinates = oo.prototype.ma; u("ol.geom.MultiPolygon", po, OPENLAYERS); po.prototype.appendPolygon = po.prototype.rj; po.prototype.clone = po.prototype.clone; po.prototype.getArea = po.prototype.am; po.prototype.getCoordinates = po.prototype.Z; po.prototype.getInteriorPoints = po.prototype.Sj; po.prototype.getPolygon = po.prototype.hk; po.prototype.getPolygons = po.prototype.Rd; po.prototype.getType = po.prototype.X; po.prototype.intersectsExtent = po.prototype.Ka; po.prototype.setCoordinates = po.prototype.ma; u("ol.geom.Point", E, OPENLAYERS); E.prototype.clone = E.prototype.clone; E.prototype.getCoordinates = E.prototype.Z; E.prototype.getType = E.prototype.X; E.prototype.intersectsExtent = E.prototype.Ka; E.prototype.setCoordinates = E.prototype.ma; u("ol.geom.Polygon", F, OPENLAYERS); F.prototype.appendLinearRing = F.prototype.pj; F.prototype.clone = F.prototype.clone; F.prototype.getArea = F.prototype.bm; F.prototype.getCoordinates = F.prototype.Z; F.prototype.getInteriorPoint = F.prototype.Rj; F.prototype.getLinearRingCount = F.prototype.Wj; F.prototype.getLinearRing = F.prototype.Ag; F.prototype.getLinearRings = F.prototype.Qd; F.prototype.getType = F.prototype.X; F.prototype.intersectsExtent = F.prototype.Ka; F.prototype.setCoordinates = F.prototype.ma; u("ol.geom.Polygon.circular", ce, OPENLAYERS); u("ol.geom.Polygon.fromExtent", de, OPENLAYERS); u("ol.geom.Polygon.fromCircle", ee, OPENLAYERS); u("ol.geom.SimpleGeometry", xd, OPENLAYERS); xd.prototype.getFirstCoordinate = xd.prototype.Fb; xd.prototype.getLastCoordinate = xd.prototype.Gb; xd.prototype.getLayout = xd.prototype.Hb; xd.prototype.applyTransform = xd.prototype.oc; xd.prototype.translate = xd.prototype.Mc; u("ol.format.EsriJSON", so, OPENLAYERS); so.prototype.readFeature = so.prototype.Pb; so.prototype.readFeatures = so.prototype.Ea; so.prototype.readGeometry = so.prototype.Pc; so.prototype.readProjection = so.prototype.Sa; so.prototype.writeGeometry = so.prototype.Tc; so.prototype.writeGeometryObject = so.prototype.Ee; so.prototype.writeFeature = so.prototype.Ad; so.prototype.writeFeatureObject = so.prototype.Sc; so.prototype.writeFeatures = so.prototype.Ub; so.prototype.writeFeaturesObject = so.prototype.Ce; u("ol.format.Feature", eo, OPENLAYERS); u("ol.format.GeoJSON", Do, OPENLAYERS); Do.prototype.readFeature = Do.prototype.Pb; Do.prototype.readFeatures = Do.prototype.Ea; Do.prototype.readGeometry = Do.prototype.Pc; Do.prototype.readProjection = Do.prototype.Sa; Do.prototype.writeFeature = Do.prototype.Ad; Do.prototype.writeFeatureObject = Do.prototype.Sc; Do.prototype.writeFeatures = Do.prototype.Ub; Do.prototype.writeFeaturesObject = Do.prototype.Ce; Do.prototype.writeGeometry = Do.prototype.Tc; Do.prototype.writeGeometryObject = Do.prototype.Ee; u("ol.format.GPX", hp, OPENLAYERS); hp.prototype.readFeature = hp.prototype.Pb; hp.prototype.readFeatures = hp.prototype.Ea; hp.prototype.readProjection = hp.prototype.Sa; hp.prototype.writeFeatures = hp.prototype.Ub; hp.prototype.writeFeaturesNode = hp.prototype.a; u("ol.format.IGC", Qp, OPENLAYERS); Qp.prototype.readFeature = Qp.prototype.Pb; Qp.prototype.readFeatures = Qp.prototype.Ea; Qp.prototype.readProjection = Qp.prototype.Sa; u("ol.format.KML", wq, OPENLAYERS); wq.prototype.readFeature = wq.prototype.Pb; wq.prototype.readFeatures = wq.prototype.Ea; wq.prototype.readName = wq.prototype.io; wq.prototype.readNetworkLinks = wq.prototype.jo; wq.prototype.readProjection = wq.prototype.Sa; wq.prototype.writeFeatures = wq.prototype.Ub; wq.prototype.writeFeaturesNode = wq.prototype.a; u("ol.format.MVT", ks, OPENLAYERS); ks.prototype.setLayers = ks.prototype.c; u("ol.format.OSMXML", ms, OPENLAYERS); ms.prototype.readFeatures = ms.prototype.Ea; ms.prototype.readProjection = ms.prototype.Sa; u("ol.format.Polyline", Ls, OPENLAYERS); u("ol.format.Polyline.encodeDeltas", Ms, OPENLAYERS); u("ol.format.Polyline.decodeDeltas", Ps, OPENLAYERS); u("ol.format.Polyline.encodeFloats", Ns, OPENLAYERS); u("ol.format.Polyline.decodeFloats", Qs, OPENLAYERS); Ls.prototype.readFeature = Ls.prototype.Pb; Ls.prototype.readFeatures = Ls.prototype.Ea; Ls.prototype.readGeometry = Ls.prototype.Pc; Ls.prototype.readProjection = Ls.prototype.Sa; Ls.prototype.writeGeometry = Ls.prototype.Tc; u("ol.format.TopoJSON", Rs, OPENLAYERS); Rs.prototype.readFeatures = Rs.prototype.Ea; Rs.prototype.readProjection = Rs.prototype.Sa; u("ol.format.WFS", Xs, OPENLAYERS); Xs.prototype.readFeatures = Xs.prototype.Ea; Xs.prototype.readTransactionResponse = Xs.prototype.o; Xs.prototype.readFeatureCollectionMetadata = Xs.prototype.j; Xs.prototype.writeGetFeature = Xs.prototype.l; Xs.prototype.writeTransaction = Xs.prototype.U; Xs.prototype.readProjection = Xs.prototype.Sa; u("ol.format.WKT", jt, OPENLAYERS); jt.prototype.readFeature = jt.prototype.Pb; jt.prototype.readFeatures = jt.prototype.Ea; jt.prototype.readGeometry = jt.prototype.Pc; jt.prototype.writeFeature = jt.prototype.Ad; jt.prototype.writeFeatures = jt.prototype.Ub; jt.prototype.writeGeometry = jt.prototype.Tc; u("ol.format.WMSCapabilities", At, OPENLAYERS); At.prototype.read = At.prototype.read; u("ol.format.WMSGetFeatureInfo", Xt, OPENLAYERS); Xt.prototype.readFeatures = Xt.prototype.Ea; u("ol.format.WMTSCapabilities", Yt, OPENLAYERS); Yt.prototype.read = Yt.prototype.read; u("ol.format.GML2", Yo, OPENLAYERS); u("ol.format.GML3", Zo, OPENLAYERS); Zo.prototype.writeGeometryNode = Zo.prototype.s; Zo.prototype.writeFeatures = Zo.prototype.Ub; Zo.prototype.writeFeaturesNode = Zo.prototype.a; u("ol.format.GML", Zo, OPENLAYERS); Zo.prototype.writeFeatures = Zo.prototype.Ub; Zo.prototype.writeFeaturesNode = Zo.prototype.a; Lo.prototype.readFeatures = Lo.prototype.Ea; u("ol.events.condition.altKeyOnly",
    function(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    },
    OPENLAYERS); u("ol.events.condition.altShiftKeysOnly", Vi, OPENLAYERS); u("ol.events.condition.always", Tc, OPENLAYERS); u("ol.events.condition.click",
    function(a) {
        return a.type == Th
    },
    OPENLAYERS); u("ol.events.condition.never", Uc, OPENLAYERS); u("ol.events.condition.pointerMove", Xi, OPENLAYERS); u("ol.events.condition.singleClick", Yi, OPENLAYERS); u("ol.events.condition.doubleClick",
    function(a) {
        return a.type == Uh
    },
    OPENLAYERS); u("ol.events.condition.noModifierKeys", Zi, OPENLAYERS); u("ol.events.condition.platformModifierKeyOnly",
    function(a) {
        a = a.originalEvent;
        return ! a.altKey && ($g ? a.metaKey: a.ctrlKey) && !a.shiftKey
    },
    OPENLAYERS); u("ol.events.condition.shiftKeyOnly", $i, OPENLAYERS); u("ol.events.condition.targetNotEditable", aj, OPENLAYERS); u("ol.events.condition.mouseOnly", bj, OPENLAYERS); Cb.prototype.type = Cb.prototype.type; Cb.prototype.target = Cb.prototype.target; Cb.prototype.preventDefault = Cb.prototype.preventDefault; Cb.prototype.stopPropagation = Cb.prototype.stopPropagation; u("ol.control.Attribution", sg, OPENLAYERS); u("ol.control.Attribution.render", tg, OPENLAYERS); sg.prototype.getCollapsible = sg.prototype.Ll; sg.prototype.setCollapsible = sg.prototype.Ol; sg.prototype.setCollapsed = sg.prototype.Nl; sg.prototype.getCollapsed = sg.prototype.Kl; u("ol.control.Control", Pf, OPENLAYERS); Pf.prototype.getMap = Pf.prototype.i; Pf.prototype.setMap = Pf.prototype.setMap; Pf.prototype.setTarget = Pf.prototype.c; u("ol.control.defaults", yg, OPENLAYERS); u("ol.control.FullScreen", Dg, OPENLAYERS); u("ol.control.MousePosition", Eg, OPENLAYERS); u("ol.control.MousePosition.render", Fg, OPENLAYERS); Eg.prototype.getCoordinateFormat = Eg.prototype.ug; Eg.prototype.getProjection = Eg.prototype.$g; Eg.prototype.setCoordinateFormat = Eg.prototype.Xh; Eg.prototype.setProjection = Eg.prototype.ah; u("ol.control.OverviewMap", On, OPENLAYERS); u("ol.control.OverviewMap.render", Pn, OPENLAYERS); On.prototype.getCollapsible = On.prototype.Rl; On.prototype.setCollapsible = On.prototype.Ul; On.prototype.setCollapsed = On.prototype.Tl; On.prototype.getCollapsed = On.prototype.Ql; On.prototype.getOverviewMap = On.prototype.dk; u("ol.control.Rotate", vg, OPENLAYERS); u("ol.control.Rotate.render", wg, OPENLAYERS); u("ol.control.ScaleLine", Tn, OPENLAYERS); Tn.prototype.getUnits = Tn.prototype.N; u("ol.control.ScaleLine.render", Un, OPENLAYERS); Tn.prototype.setUnits = Tn.prototype.D; u("ol.control.Zoom", xg, OPENLAYERS); u("ol.control.ZoomSlider", Xn, OPENLAYERS); u("ol.control.ZoomSlider.render", Zn, OPENLAYERS); u("ol.control.ZoomToExtent", bo, OPENLAYERS); u("ol.color.asArray", Me, OPENLAYERS); u("ol.color.asString", Oe, OPENLAYERS); Be.prototype.type = Be.prototype.type; Be.prototype.target = Be.prototype.target; Be.prototype.preventDefault = Be.prototype.preventDefault; Be.prototype.stopPropagation = Be.prototype.stopPropagation; Kb.prototype.changed = Kb.prototype.u; Kb.prototype.dispatchEvent = Kb.prototype.b; Kb.prototype.getRevision = Kb.prototype.K; Kb.prototype.on = Kb.prototype.I; Kb.prototype.once = Kb.prototype.L; Kb.prototype.un = Kb.prototype.J; Kb.prototype.unByKey = Kb.prototype.M; De.prototype.get = De.prototype.get; De.prototype.getKeys = De.prototype.O; De.prototype.getProperties = De.prototype.P; De.prototype.set = De.prototype.set; De.prototype.setProperties = De.prototype.C; De.prototype.unset = De.prototype.R; De.prototype.changed = De.prototype.u; De.prototype.dispatchEvent = De.prototype.b; De.prototype.getRevision = De.prototype.K; De.prototype.on = De.prototype.I; De.prototype.once = De.prototype.L; De.prototype.un = De.prototype.J; De.prototype.unByKey = De.prototype.M; co.prototype.get = co.prototype.get; co.prototype.getKeys = co.prototype.O; co.prototype.getProperties = co.prototype.P; co.prototype.set = co.prototype.set; co.prototype.setProperties = co.prototype.C; co.prototype.unset = co.prototype.R; co.prototype.changed = co.prototype.u; co.prototype.dispatchEvent = co.prototype.b; co.prototype.getRevision = co.prototype.K; co.prototype.on = co.prototype.I; co.prototype.once = co.prototype.L; co.prototype.un = co.prototype.J; co.prototype.unByKey = co.prototype.M; xl.prototype.get = xl.prototype.get; xl.prototype.getKeys = xl.prototype.O; xl.prototype.getProperties = xl.prototype.P; xl.prototype.set = xl.prototype.set; xl.prototype.setProperties = xl.prototype.C; xl.prototype.unset = xl.prototype.R; xl.prototype.changed = xl.prototype.u; xl.prototype.dispatchEvent = xl.prototype.b; xl.prototype.getRevision = xl.prototype.K; xl.prototype.on = xl.prototype.I; xl.prototype.once = xl.prototype.L; xl.prototype.un = xl.prototype.J; xl.prototype.unByKey = xl.prototype.M; ku.prototype.get = ku.prototype.get; ku.prototype.getKeys = ku.prototype.O; ku.prototype.getProperties = ku.prototype.P; ku.prototype.set = ku.prototype.set; ku.prototype.setProperties = ku.prototype.C; ku.prototype.unset = ku.prototype.R; ku.prototype.changed = ku.prototype.u; ku.prototype.dispatchEvent = ku.prototype.b; ku.prototype.getRevision = ku.prototype.K; ku.prototype.on = ku.prototype.I; ku.prototype.once = ku.prototype.L; ku.prototype.un = ku.prototype.J; ku.prototype.unByKey = ku.prototype.M; wu.prototype.getTileCoord = wu.prototype.f; R.prototype.get = R.prototype.get; R.prototype.getKeys = R.prototype.O; R.prototype.getProperties = R.prototype.P; R.prototype.set = R.prototype.set; R.prototype.setProperties = R.prototype.C; R.prototype.unset = R.prototype.R; R.prototype.changed = R.prototype.u; R.prototype.dispatchEvent = R.prototype.b; R.prototype.getRevision = R.prototype.K; R.prototype.on = R.prototype.I; R.prototype.once = R.prototype.L; R.prototype.un = R.prototype.J; R.prototype.unByKey = R.prototype.M; Of.prototype.type = Of.prototype.type; Of.prototype.target = Of.prototype.target; Of.prototype.preventDefault = Of.prototype.preventDefault; Of.prototype.stopPropagation = Of.prototype.stopPropagation; Ph.prototype.map = Ph.prototype.map; Ph.prototype.frameState = Ph.prototype.frameState; Ph.prototype.type = Ph.prototype.type; Ph.prototype.target = Ph.prototype.target; Ph.prototype.preventDefault = Ph.prototype.preventDefault; Ph.prototype.stopPropagation = Ph.prototype.stopPropagation; Qh.prototype.originalEvent = Qh.prototype.originalEvent; Qh.prototype.pixel = Qh.prototype.pixel; Qh.prototype.coordinate = Qh.prototype.coordinate; Qh.prototype.dragging = Qh.prototype.dragging; Qh.prototype.preventDefault = Qh.prototype.preventDefault; Qh.prototype.stopPropagation = Qh.prototype.stopPropagation; Qh.prototype.map = Qh.prototype.map; Qh.prototype.frameState = Qh.prototype.frameState; Qh.prototype.type = Qh.prototype.type; Qh.prototype.target = Qh.prototype.target; Jb.prototype.type = Jb.prototype.type; Jb.prototype.target = Jb.prototype.target; Jb.prototype.preventDefault = Jb.prototype.preventDefault; Jb.prototype.stopPropagation = Jb.prototype.stopPropagation; Kn.prototype.get = Kn.prototype.get; Kn.prototype.getKeys = Kn.prototype.O; Kn.prototype.getProperties = Kn.prototype.P; Kn.prototype.set = Kn.prototype.set; Kn.prototype.setProperties = Kn.prototype.C; Kn.prototype.unset = Kn.prototype.R; Kn.prototype.changed = Kn.prototype.u; Kn.prototype.dispatchEvent = Kn.prototype.b; Kn.prototype.getRevision = Kn.prototype.K; Kn.prototype.on = Kn.prototype.I; Kn.prototype.once = Kn.prototype.L; Kn.prototype.un = Kn.prototype.J; Kn.prototype.unByKey = Kn.prototype.M; zl.prototype.getTileCoord = zl.prototype.f; ge.prototype.get = ge.prototype.get; ge.prototype.getKeys = ge.prototype.O; ge.prototype.getProperties = ge.prototype.P; ge.prototype.set = ge.prototype.set; ge.prototype.setProperties = ge.prototype.C; ge.prototype.unset = ge.prototype.R; ge.prototype.changed = ge.prototype.u; ge.prototype.dispatchEvent = ge.prototype.b; ge.prototype.getRevision = ge.prototype.K; ge.prototype.on = ge.prototype.I; ge.prototype.once = ge.prototype.L; ge.prototype.un = ge.prototype.J; ge.prototype.unByKey = ge.prototype.M; xw.prototype.getMaxZoom = xw.prototype.Bg; xw.prototype.getMinZoom = xw.prototype.Cg; xw.prototype.getOrigin = xw.prototype.Ia; xw.prototype.getResolution = xw.prototype.$; xw.prototype.getResolutions = xw.prototype.Kb; xw.prototype.getTileCoordExtent = xw.prototype.Da; xw.prototype.getTileCoordForCoordAndResolution = xw.prototype.Ud; xw.prototype.getTileCoordForCoordAndZ = xw.prototype.md; xw.prototype.getTileSize = xw.prototype.Ya; kk.prototype.getOpacity = kk.prototype.le; kk.prototype.getRotateWithView = kk.prototype.Sd; kk.prototype.getRotation = kk.prototype.me; kk.prototype.getScale = kk.prototype.ne; kk.prototype.getSnapToPixel = kk.prototype.Td; kk.prototype.setOpacity = kk.prototype.oe; kk.prototype.setRotation = kk.prototype.pe; kk.prototype.setScale = kk.prototype.qe; xi.prototype.getOpacity = xi.prototype.le; xi.prototype.getRotateWithView = xi.prototype.Sd; xi.prototype.getRotation = xi.prototype.me; xi.prototype.getScale = xi.prototype.ne; xi.prototype.getSnapToPixel = xi.prototype.Td; xi.prototype.setOpacity = xi.prototype.oe; xi.prototype.setRotation = xi.prototype.pe; xi.prototype.setScale = xi.prototype.qe; Gw.prototype.getOpacity = Gw.prototype.le; Gw.prototype.getRotateWithView = Gw.prototype.Sd; Gw.prototype.getRotation = Gw.prototype.me; Gw.prototype.getScale = Gw.prototype.ne; Gw.prototype.getSnapToPixel = Gw.prototype.Td; Gw.prototype.setOpacity = Gw.prototype.oe; Gw.prototype.setRotation = Gw.prototype.pe; Gw.prototype.setScale = Gw.prototype.qe; Xf.prototype.get = Xf.prototype.get; Xf.prototype.getKeys = Xf.prototype.O; Xf.prototype.getProperties = Xf.prototype.P; Xf.prototype.set = Xf.prototype.set; Xf.prototype.setProperties = Xf.prototype.C; Xf.prototype.unset = Xf.prototype.R; Xf.prototype.changed = Xf.prototype.u; Xf.prototype.dispatchEvent = Xf.prototype.b; Xf.prototype.getRevision = Xf.prototype.K; Xf.prototype.on = Xf.prototype.I; Xf.prototype.once = Xf.prototype.L; Xf.prototype.un = Xf.prototype.J; Xf.prototype.unByKey = Xf.prototype.M; ng.prototype.getAttributions = ng.prototype.da; ng.prototype.getLogo = ng.prototype.qa; ng.prototype.getProjection = ng.prototype.sa; ng.prototype.getState = ng.prototype.V; ng.prototype.refresh = ng.prototype.pa; ng.prototype.setAttributions = ng.prototype.la; ng.prototype.get = ng.prototype.get; ng.prototype.getKeys = ng.prototype.O; ng.prototype.getProperties = ng.prototype.P; ng.prototype.set = ng.prototype.set; ng.prototype.setProperties = ng.prototype.C; ng.prototype.unset = ng.prototype.R; ng.prototype.changed = ng.prototype.u; ng.prototype.dispatchEvent = ng.prototype.b; ng.prototype.getRevision = ng.prototype.K; ng.prototype.on = ng.prototype.I; ng.prototype.once = ng.prototype.L; ng.prototype.un = ng.prototype.J; ng.prototype.unByKey = ng.prototype.M; wm.prototype.getTileGrid = wm.prototype.Ja; wm.prototype.refresh = wm.prototype.pa; wm.prototype.getAttributions = wm.prototype.da; wm.prototype.getLogo = wm.prototype.qa; wm.prototype.getProjection = wm.prototype.sa; wm.prototype.getState = wm.prototype.V; wm.prototype.setAttributions = wm.prototype.la; wm.prototype.get = wm.prototype.get; wm.prototype.getKeys = wm.prototype.O; wm.prototype.getProperties = wm.prototype.P; wm.prototype.set = wm.prototype.set; wm.prototype.setProperties = wm.prototype.C; wm.prototype.unset = wm.prototype.R; wm.prototype.changed = wm.prototype.u; wm.prototype.dispatchEvent = wm.prototype.b; wm.prototype.getRevision = wm.prototype.K; wm.prototype.on = wm.prototype.I; wm.prototype.once = wm.prototype.L; wm.prototype.un = wm.prototype.J; wm.prototype.unByKey = wm.prototype.M; W.prototype.getTileLoadFunction = W.prototype.Xa; W.prototype.getTileUrlFunction = W.prototype.Za; W.prototype.getUrls = W.prototype.$a; W.prototype.setTileLoadFunction = W.prototype.cb; W.prototype.setTileUrlFunction = W.prototype.Na; W.prototype.setUrl = W.prototype.Pa; W.prototype.setUrls = W.prototype.Ta; W.prototype.getTileGrid = W.prototype.Ja; W.prototype.refresh = W.prototype.pa; W.prototype.getAttributions = W.prototype.da; W.prototype.getLogo = W.prototype.qa; W.prototype.getProjection = W.prototype.sa; W.prototype.getState = W.prototype.V; W.prototype.setAttributions = W.prototype.la; W.prototype.get = W.prototype.get; W.prototype.getKeys = W.prototype.O; W.prototype.getProperties = W.prototype.P; W.prototype.set = W.prototype.set; W.prototype.setProperties = W.prototype.C; W.prototype.unset = W.prototype.R; W.prototype.changed = W.prototype.u; W.prototype.dispatchEvent = W.prototype.b; W.prototype.getRevision = W.prototype.K; W.prototype.on = W.prototype.I; W.prototype.once = W.prototype.L; W.prototype.un = W.prototype.J; W.prototype.unByKey = W.prototype.M; Gv.prototype.setRenderReprojectionEdges = Gv.prototype.nb; Gv.prototype.setTileGridForProjection = Gv.prototype.ob; Gv.prototype.getTileLoadFunction = Gv.prototype.Xa; Gv.prototype.getTileUrlFunction = Gv.prototype.Za; Gv.prototype.getUrls = Gv.prototype.$a; Gv.prototype.setTileLoadFunction = Gv.prototype.cb; Gv.prototype.setTileUrlFunction = Gv.prototype.Na; Gv.prototype.setUrl = Gv.prototype.Pa; Gv.prototype.setUrls = Gv.prototype.Ta; Gv.prototype.getTileGrid = Gv.prototype.Ja; Gv.prototype.refresh = Gv.prototype.pa; Gv.prototype.getAttributions = Gv.prototype.da; Gv.prototype.getLogo = Gv.prototype.qa; Gv.prototype.getProjection = Gv.prototype.sa; Gv.prototype.getState = Gv.prototype.V; Gv.prototype.setAttributions = Gv.prototype.la; Gv.prototype.get = Gv.prototype.get; Gv.prototype.getKeys = Gv.prototype.O; Gv.prototype.getProperties = Gv.prototype.P; Gv.prototype.set = Gv.prototype.set; Gv.prototype.setProperties = Gv.prototype.C; Gv.prototype.unset = Gv.prototype.R; Gv.prototype.changed = Gv.prototype.u; Gv.prototype.dispatchEvent = Gv.prototype.b; Gv.prototype.getRevision = Gv.prototype.K; Gv.prototype.on = Gv.prototype.I; Gv.prototype.once = Gv.prototype.L; Gv.prototype.un = Gv.prototype.J; Gv.prototype.unByKey = Gv.prototype.M; Iv.prototype.setRenderReprojectionEdges = Iv.prototype.nb; Iv.prototype.setTileGridForProjection = Iv.prototype.ob; Iv.prototype.getTileLoadFunction = Iv.prototype.Xa; Iv.prototype.getTileUrlFunction = Iv.prototype.Za; Iv.prototype.getUrls = Iv.prototype.$a; Iv.prototype.setTileLoadFunction = Iv.prototype.cb; Iv.prototype.setTileUrlFunction = Iv.prototype.Na; Iv.prototype.setUrl = Iv.prototype.Pa; Iv.prototype.setUrls = Iv.prototype.Ta; Iv.prototype.getTileGrid = Iv.prototype.Ja; Iv.prototype.refresh = Iv.prototype.pa; Iv.prototype.getAttributions = Iv.prototype.da; Iv.prototype.getLogo = Iv.prototype.qa; Iv.prototype.getProjection = Iv.prototype.sa; Iv.prototype.getState = Iv.prototype.V; Iv.prototype.setAttributions = Iv.prototype.la; Iv.prototype.get = Iv.prototype.get; Iv.prototype.getKeys = Iv.prototype.O; Iv.prototype.getProperties = Iv.prototype.P; Iv.prototype.set = Iv.prototype.set; Iv.prototype.setProperties = Iv.prototype.C; Iv.prototype.unset = Iv.prototype.R; Iv.prototype.changed = Iv.prototype.u; Iv.prototype.dispatchEvent = Iv.prototype.b; Iv.prototype.getRevision = Iv.prototype.K; Iv.prototype.on = Iv.prototype.I; Iv.prototype.once = Iv.prototype.L; Iv.prototype.un = Iv.prototype.J; Iv.prototype.unByKey = Iv.prototype.M; Jv.prototype.setRenderReprojectionEdges = Jv.prototype.nb; Jv.prototype.setTileGridForProjection = Jv.prototype.ob; Jv.prototype.getTileLoadFunction = Jv.prototype.Xa; Jv.prototype.getTileUrlFunction = Jv.prototype.Za; Jv.prototype.getUrls = Jv.prototype.$a; Jv.prototype.setTileLoadFunction = Jv.prototype.cb; Jv.prototype.setTileUrlFunction = Jv.prototype.Na; Jv.prototype.setUrl = Jv.prototype.Pa; Jv.prototype.setUrls = Jv.prototype.Ta; Jv.prototype.getTileGrid = Jv.prototype.Ja; Jv.prototype.refresh = Jv.prototype.pa; Jv.prototype.getAttributions = Jv.prototype.da; Jv.prototype.getLogo = Jv.prototype.qa; Jv.prototype.getProjection = Jv.prototype.sa; Jv.prototype.getState = Jv.prototype.V; Jv.prototype.setAttributions = Jv.prototype.la; Jv.prototype.get = Jv.prototype.get; Jv.prototype.getKeys = Jv.prototype.O; Jv.prototype.getProperties = Jv.prototype.P; Jv.prototype.set = Jv.prototype.set; Jv.prototype.setProperties = Jv.prototype.C; Jv.prototype.unset = Jv.prototype.R; Jv.prototype.changed = Jv.prototype.u; Jv.prototype.dispatchEvent = Jv.prototype.b; Jv.prototype.getRevision = Jv.prototype.K; Jv.prototype.on = Jv.prototype.I; Jv.prototype.once = Jv.prototype.L; Jv.prototype.un = Jv.prototype.J; Jv.prototype.unByKey = Jv.prototype.M; Q.prototype.getAttributions = Q.prototype.da; Q.prototype.getLogo = Q.prototype.qa; Q.prototype.getProjection = Q.prototype.sa; Q.prototype.getState = Q.prototype.V; Q.prototype.refresh = Q.prototype.pa; Q.prototype.setAttributions = Q.prototype.la; Q.prototype.get = Q.prototype.get; Q.prototype.getKeys = Q.prototype.O; Q.prototype.getProperties = Q.prototype.P; Q.prototype.set = Q.prototype.set; Q.prototype.setProperties = Q.prototype.C; Q.prototype.unset = Q.prototype.R; Q.prototype.changed = Q.prototype.u; Q.prototype.dispatchEvent = Q.prototype.b; Q.prototype.getRevision = Q.prototype.K; Q.prototype.on = Q.prototype.I; Q.prototype.once = Q.prototype.L; Q.prototype.un = Q.prototype.J; Q.prototype.unByKey = Q.prototype.M; X.prototype.addFeature = X.prototype.tb; X.prototype.addFeatures = X.prototype.Fc; X.prototype.clear = X.prototype.clear; X.prototype.forEachFeature = X.prototype.pg; X.prototype.forEachFeatureInExtent = X.prototype.wb; X.prototype.forEachFeatureIntersectingExtent = X.prototype.qg; X.prototype.getFeaturesCollection = X.prototype.xg; X.prototype.getFeatures = X.prototype.je; X.prototype.getFeaturesAtCoordinate = X.prototype.wg; X.prototype.getFeaturesInExtent = X.prototype.Ze; X.prototype.getClosestFeatureToCoordinate = X.prototype.sg; X.prototype.getExtent = X.prototype.G; X.prototype.getFeatureById = X.prototype.vg; X.prototype.getFormat = X.prototype.wh; X.prototype.getUrl = X.prototype.xh; X.prototype.removeFeature = X.prototype.mb; X.prototype.getAttributions = X.prototype.da; X.prototype.getLogo = X.prototype.qa; X.prototype.getProjection = X.prototype.sa; X.prototype.getState = X.prototype.V; X.prototype.refresh = X.prototype.pa; X.prototype.setAttributions = X.prototype.la; X.prototype.get = X.prototype.get; X.prototype.getKeys = X.prototype.O; X.prototype.getProperties = X.prototype.P; X.prototype.set = X.prototype.set; X.prototype.setProperties = X.prototype.C; X.prototype.unset = X.prototype.R; X.prototype.changed = X.prototype.u; X.prototype.dispatchEvent = X.prototype.b; X.prototype.getRevision = X.prototype.K; X.prototype.on = X.prototype.I; X.prototype.once = X.prototype.L; X.prototype.un = X.prototype.J; X.prototype.unByKey = X.prototype.M; pl.prototype.getAttributions = pl.prototype.da; pl.prototype.getLogo = pl.prototype.qa; pl.prototype.getProjection = pl.prototype.sa; pl.prototype.getState = pl.prototype.V; pl.prototype.refresh = pl.prototype.pa; pl.prototype.setAttributions = pl.prototype.la; pl.prototype.get = pl.prototype.get; pl.prototype.getKeys = pl.prototype.O; pl.prototype.getProperties = pl.prototype.P; pl.prototype.set = pl.prototype.set; pl.prototype.setProperties = pl.prototype.C; pl.prototype.unset = pl.prototype.R; pl.prototype.changed = pl.prototype.u; pl.prototype.dispatchEvent = pl.prototype.b; pl.prototype.getRevision = pl.prototype.K; pl.prototype.on = pl.prototype.I; pl.prototype.once = pl.prototype.L; pl.prototype.un = pl.prototype.J; pl.prototype.unByKey = pl.prototype.M; wl.prototype.getAttributions = wl.prototype.da; wl.prototype.getLogo = wl.prototype.qa; wl.prototype.getProjection = wl.prototype.sa; wl.prototype.getState = wl.prototype.V; wl.prototype.refresh = wl.prototype.pa; wl.prototype.setAttributions = wl.prototype.la; wl.prototype.get = wl.prototype.get; wl.prototype.getKeys = wl.prototype.O; wl.prototype.getProperties = wl.prototype.P; wl.prototype.set = wl.prototype.set; wl.prototype.setProperties = wl.prototype.C; wl.prototype.unset = wl.prototype.R; wl.prototype.changed = wl.prototype.u; wl.prototype.dispatchEvent = wl.prototype.b; wl.prototype.getRevision = wl.prototype.K; wl.prototype.on = wl.prototype.I; wl.prototype.once = wl.prototype.L; wl.prototype.un = wl.prototype.J; wl.prototype.unByKey = wl.prototype.M; Ov.prototype.getAttributions = Ov.prototype.da; Ov.prototype.getLogo = Ov.prototype.qa; Ov.prototype.getProjection = Ov.prototype.sa; Ov.prototype.getState = Ov.prototype.V; Ov.prototype.refresh = Ov.prototype.pa; Ov.prototype.setAttributions = Ov.prototype.la; Ov.prototype.get = Ov.prototype.get; Ov.prototype.getKeys = Ov.prototype.O; Ov.prototype.getProperties = Ov.prototype.P; Ov.prototype.set = Ov.prototype.set; Ov.prototype.setProperties = Ov.prototype.C; Ov.prototype.unset = Ov.prototype.R; Ov.prototype.changed = Ov.prototype.u; Ov.prototype.dispatchEvent = Ov.prototype.b; Ov.prototype.getRevision = Ov.prototype.K; Ov.prototype.on = Ov.prototype.I; Ov.prototype.once = Ov.prototype.L; Ov.prototype.un = Ov.prototype.J; Ov.prototype.unByKey = Ov.prototype.M; rl.prototype.type = rl.prototype.type; rl.prototype.target = rl.prototype.target; rl.prototype.preventDefault = rl.prototype.preventDefault; rl.prototype.stopPropagation = rl.prototype.stopPropagation; Pv.prototype.getAttributions = Pv.prototype.da; Pv.prototype.getLogo = Pv.prototype.qa; Pv.prototype.getProjection = Pv.prototype.sa; Pv.prototype.getState = Pv.prototype.V; Pv.prototype.refresh = Pv.prototype.pa; Pv.prototype.setAttributions = Pv.prototype.la; Pv.prototype.get = Pv.prototype.get; Pv.prototype.getKeys = Pv.prototype.O; Pv.prototype.getProperties = Pv.prototype.P; Pv.prototype.set = Pv.prototype.set; Pv.prototype.setProperties = Pv.prototype.C; Pv.prototype.unset = Pv.prototype.R; Pv.prototype.changed = Pv.prototype.u; Pv.prototype.dispatchEvent = Pv.prototype.b; Pv.prototype.getRevision = Pv.prototype.K; Pv.prototype.on = Pv.prototype.I; Pv.prototype.once = Pv.prototype.L; Pv.prototype.un = Pv.prototype.J; Pv.prototype.unByKey = Pv.prototype.M; mm.prototype.getAttributions = mm.prototype.da; mm.prototype.getLogo = mm.prototype.qa; mm.prototype.getProjection = mm.prototype.sa; mm.prototype.getState = mm.prototype.V; mm.prototype.refresh = mm.prototype.pa; mm.prototype.setAttributions = mm.prototype.la; mm.prototype.get = mm.prototype.get; mm.prototype.getKeys = mm.prototype.O; mm.prototype.getProperties = mm.prototype.P; mm.prototype.set = mm.prototype.set; mm.prototype.setProperties = mm.prototype.C; mm.prototype.unset = mm.prototype.R; mm.prototype.changed = mm.prototype.u; mm.prototype.dispatchEvent = mm.prototype.b; mm.prototype.getRevision = mm.prototype.K; mm.prototype.on = mm.prototype.I; mm.prototype.once = mm.prototype.L; mm.prototype.un = mm.prototype.J; mm.prototype.unByKey = mm.prototype.M; Qv.prototype.getAttributions = Qv.prototype.da; Qv.prototype.getLogo = Qv.prototype.qa; Qv.prototype.getProjection = Qv.prototype.sa; Qv.prototype.getState = Qv.prototype.V; Qv.prototype.refresh = Qv.prototype.pa; Qv.prototype.setAttributions = Qv.prototype.la; Qv.prototype.get = Qv.prototype.get; Qv.prototype.getKeys = Qv.prototype.O; Qv.prototype.getProperties = Qv.prototype.P; Qv.prototype.set = Qv.prototype.set; Qv.prototype.setProperties = Qv.prototype.C; Qv.prototype.unset = Qv.prototype.R; Qv.prototype.changed = Qv.prototype.u; Qv.prototype.dispatchEvent = Qv.prototype.b; Qv.prototype.getRevision = Qv.prototype.K; Qv.prototype.on = Qv.prototype.I; Qv.prototype.once = Qv.prototype.L; Qv.prototype.un = Qv.prototype.J; Qv.prototype.unByKey = Qv.prototype.M; Wv.prototype.setRenderReprojectionEdges = Wv.prototype.nb; Wv.prototype.setTileGridForProjection = Wv.prototype.ob; Wv.prototype.getTileLoadFunction = Wv.prototype.Xa; Wv.prototype.getTileUrlFunction = Wv.prototype.Za; Wv.prototype.getUrls = Wv.prototype.$a; Wv.prototype.setTileLoadFunction = Wv.prototype.cb; Wv.prototype.setTileUrlFunction = Wv.prototype.Na; Wv.prototype.setUrl = Wv.prototype.Pa; Wv.prototype.setUrls = Wv.prototype.Ta; Wv.prototype.getTileGrid = Wv.prototype.Ja; Wv.prototype.refresh = Wv.prototype.pa; Wv.prototype.getAttributions = Wv.prototype.da; Wv.prototype.getLogo = Wv.prototype.qa; Wv.prototype.getProjection = Wv.prototype.sa; Wv.prototype.getState = Wv.prototype.V; Wv.prototype.setAttributions = Wv.prototype.la; Wv.prototype.get = Wv.prototype.get; Wv.prototype.getKeys = Wv.prototype.O; Wv.prototype.getProperties = Wv.prototype.P; Wv.prototype.set = Wv.prototype.set; Wv.prototype.setProperties = Wv.prototype.C; Wv.prototype.unset = Wv.prototype.R; Wv.prototype.changed = Wv.prototype.u; Wv.prototype.dispatchEvent = Wv.prototype.b; Wv.prototype.getRevision = Wv.prototype.K; Wv.prototype.on = Wv.prototype.I; Wv.prototype.once = Wv.prototype.L; Wv.prototype.un = Wv.prototype.J; Wv.prototype.unByKey = Wv.prototype.M; Uv.prototype.setRenderReprojectionEdges = Uv.prototype.nb; Uv.prototype.setTileGridForProjection = Uv.prototype.ob; Uv.prototype.getTileLoadFunction = Uv.prototype.Xa; Uv.prototype.getTileUrlFunction = Uv.prototype.Za; Uv.prototype.getUrls = Uv.prototype.$a; Uv.prototype.setTileLoadFunction = Uv.prototype.cb; Uv.prototype.setTileUrlFunction = Uv.prototype.Na; Uv.prototype.setUrl = Uv.prototype.Pa; Uv.prototype.setUrls = Uv.prototype.Ta; Uv.prototype.getTileGrid = Uv.prototype.Ja; Uv.prototype.refresh = Uv.prototype.pa; Uv.prototype.getAttributions = Uv.prototype.da; Uv.prototype.getLogo = Uv.prototype.qa; Uv.prototype.getProjection = Uv.prototype.sa; Uv.prototype.getState = Uv.prototype.V; Uv.prototype.setAttributions = Uv.prototype.la; Uv.prototype.get = Uv.prototype.get; Uv.prototype.getKeys = Uv.prototype.O; Uv.prototype.getProperties = Uv.prototype.P; Uv.prototype.set = Uv.prototype.set; Uv.prototype.setProperties = Uv.prototype.C; Uv.prototype.unset = Uv.prototype.R; Uv.prototype.changed = Uv.prototype.u; Uv.prototype.dispatchEvent = Uv.prototype.b; Uv.prototype.getRevision = Uv.prototype.K; Uv.prototype.on = Uv.prototype.I; Uv.prototype.once = Uv.prototype.L; Uv.prototype.un = Uv.prototype.J; Uv.prototype.unByKey = Uv.prototype.M; Zv.prototype.getAttributions = Zv.prototype.da; Zv.prototype.getLogo = Zv.prototype.qa; Zv.prototype.getProjection = Zv.prototype.sa; Zv.prototype.getState = Zv.prototype.V; Zv.prototype.refresh = Zv.prototype.pa; Zv.prototype.setAttributions = Zv.prototype.la; Zv.prototype.get = Zv.prototype.get; Zv.prototype.getKeys = Zv.prototype.O; Zv.prototype.getProperties = Zv.prototype.P; Zv.prototype.set = Zv.prototype.set; Zv.prototype.setProperties = Zv.prototype.C; Zv.prototype.unset = Zv.prototype.R; Zv.prototype.changed = Zv.prototype.u; Zv.prototype.dispatchEvent = Zv.prototype.b; Zv.prototype.getRevision = Zv.prototype.K; Zv.prototype.on = Zv.prototype.I; Zv.prototype.once = Zv.prototype.L; Zv.prototype.un = Zv.prototype.J; Zv.prototype.unByKey = Zv.prototype.M; dw.prototype.type = dw.prototype.type; dw.prototype.target = dw.prototype.target; dw.prototype.preventDefault = dw.prototype.preventDefault; dw.prototype.stopPropagation = dw.prototype.stopPropagation; iw.prototype.setRenderReprojectionEdges = iw.prototype.nb; iw.prototype.setTileGridForProjection = iw.prototype.ob; iw.prototype.getTileLoadFunction = iw.prototype.Xa; iw.prototype.getTileUrlFunction = iw.prototype.Za; iw.prototype.getUrls = iw.prototype.$a; iw.prototype.setTileLoadFunction = iw.prototype.cb; iw.prototype.setTileUrlFunction = iw.prototype.Na; iw.prototype.setUrl = iw.prototype.Pa; iw.prototype.setUrls = iw.prototype.Ta; iw.prototype.getTileGrid = iw.prototype.Ja; iw.prototype.refresh = iw.prototype.pa; iw.prototype.getAttributions = iw.prototype.da; iw.prototype.getLogo = iw.prototype.qa; iw.prototype.getProjection = iw.prototype.sa; iw.prototype.getState = iw.prototype.V; iw.prototype.setAttributions = iw.prototype.la; iw.prototype.get = iw.prototype.get; iw.prototype.getKeys = iw.prototype.O; iw.prototype.getProperties = iw.prototype.P; iw.prototype.set = iw.prototype.set; iw.prototype.setProperties = iw.prototype.C; iw.prototype.unset = iw.prototype.R; iw.prototype.changed = iw.prototype.u; iw.prototype.dispatchEvent = iw.prototype.b; iw.prototype.getRevision = iw.prototype.K; iw.prototype.on = iw.prototype.I; iw.prototype.once = iw.prototype.L; iw.prototype.un = iw.prototype.J; iw.prototype.unByKey = iw.prototype.M; kw.prototype.setRenderReprojectionEdges = kw.prototype.nb; kw.prototype.setTileGridForProjection = kw.prototype.ob; kw.prototype.getTileLoadFunction = kw.prototype.Xa; kw.prototype.getTileUrlFunction = kw.prototype.Za; kw.prototype.getUrls = kw.prototype.$a; kw.prototype.setTileLoadFunction = kw.prototype.cb; kw.prototype.setTileUrlFunction = kw.prototype.Na; kw.prototype.setUrl = kw.prototype.Pa; kw.prototype.setUrls = kw.prototype.Ta; kw.prototype.getTileGrid = kw.prototype.Ja; kw.prototype.refresh = kw.prototype.pa; kw.prototype.getAttributions = kw.prototype.da; kw.prototype.getLogo = kw.prototype.qa; kw.prototype.getProjection = kw.prototype.sa; kw.prototype.getState = kw.prototype.V; kw.prototype.setAttributions = kw.prototype.la; kw.prototype.get = kw.prototype.get; kw.prototype.getKeys = kw.prototype.O; kw.prototype.getProperties = kw.prototype.P; kw.prototype.set = kw.prototype.set; kw.prototype.setProperties = kw.prototype.C; kw.prototype.unset = kw.prototype.R; kw.prototype.changed = kw.prototype.u; kw.prototype.dispatchEvent = kw.prototype.b; kw.prototype.getRevision = kw.prototype.K; kw.prototype.on = kw.prototype.I; kw.prototype.once = kw.prototype.L; kw.prototype.un = kw.prototype.J; kw.prototype.unByKey = kw.prototype.M; mw.prototype.getTileGrid = mw.prototype.Ja; mw.prototype.refresh = mw.prototype.pa; mw.prototype.getAttributions = mw.prototype.da; mw.prototype.getLogo = mw.prototype.qa; mw.prototype.getProjection = mw.prototype.sa; mw.prototype.getState = mw.prototype.V; mw.prototype.setAttributions = mw.prototype.la; mw.prototype.get = mw.prototype.get; mw.prototype.getKeys = mw.prototype.O; mw.prototype.getProperties = mw.prototype.P; mw.prototype.set = mw.prototype.set; mw.prototype.setProperties = mw.prototype.C; mw.prototype.unset = mw.prototype.R; mw.prototype.changed = mw.prototype.u; mw.prototype.dispatchEvent = mw.prototype.b; mw.prototype.getRevision = mw.prototype.K; mw.prototype.on = mw.prototype.I; mw.prototype.once = mw.prototype.L; mw.prototype.un = mw.prototype.J; mw.prototype.unByKey = mw.prototype.M; nw.prototype.setRenderReprojectionEdges = nw.prototype.nb; nw.prototype.setTileGridForProjection = nw.prototype.ob; nw.prototype.getTileLoadFunction = nw.prototype.Xa; nw.prototype.getTileUrlFunction = nw.prototype.Za; nw.prototype.getUrls = nw.prototype.$a; nw.prototype.setTileLoadFunction = nw.prototype.cb; nw.prototype.setTileUrlFunction = nw.prototype.Na; nw.prototype.setUrl = nw.prototype.Pa; nw.prototype.setUrls = nw.prototype.Ta; nw.prototype.getTileGrid = nw.prototype.Ja; nw.prototype.refresh = nw.prototype.pa; nw.prototype.getAttributions = nw.prototype.da; nw.prototype.getLogo = nw.prototype.qa; nw.prototype.getProjection = nw.prototype.sa; nw.prototype.getState = nw.prototype.V; nw.prototype.setAttributions = nw.prototype.la; nw.prototype.get = nw.prototype.get; nw.prototype.getKeys = nw.prototype.O; nw.prototype.getProperties = nw.prototype.P; nw.prototype.set = nw.prototype.set; nw.prototype.setProperties = nw.prototype.C; nw.prototype.unset = nw.prototype.R; nw.prototype.changed = nw.prototype.u; nw.prototype.dispatchEvent = nw.prototype.b; nw.prototype.getRevision = nw.prototype.K; nw.prototype.on = nw.prototype.I; nw.prototype.once = nw.prototype.L; nw.prototype.un = nw.prototype.J; nw.prototype.unByKey = nw.prototype.M; rg.prototype.type = rg.prototype.type; rg.prototype.target = rg.prototype.target; rg.prototype.preventDefault = rg.prototype.preventDefault; rg.prototype.stopPropagation = rg.prototype.stopPropagation; ow.prototype.getTileGrid = ow.prototype.Ja; ow.prototype.refresh = ow.prototype.pa; ow.prototype.getAttributions = ow.prototype.da; ow.prototype.getLogo = ow.prototype.qa; ow.prototype.getProjection = ow.prototype.sa; ow.prototype.getState = ow.prototype.V; ow.prototype.setAttributions = ow.prototype.la; ow.prototype.get = ow.prototype.get; ow.prototype.getKeys = ow.prototype.O; ow.prototype.getProperties = ow.prototype.P; ow.prototype.set = ow.prototype.set; ow.prototype.setProperties = ow.prototype.C; ow.prototype.unset = ow.prototype.R; ow.prototype.changed = ow.prototype.u; ow.prototype.dispatchEvent = ow.prototype.b; ow.prototype.getRevision = ow.prototype.K; ow.prototype.on = ow.prototype.I; ow.prototype.once = ow.prototype.L; ow.prototype.un = ow.prototype.J; ow.prototype.unByKey = ow.prototype.M; sw.prototype.setRenderReprojectionEdges = sw.prototype.nb; sw.prototype.setTileGridForProjection = sw.prototype.ob; sw.prototype.getTileLoadFunction = sw.prototype.Xa; sw.prototype.getTileUrlFunction = sw.prototype.Za; sw.prototype.getUrls = sw.prototype.$a; sw.prototype.setTileLoadFunction = sw.prototype.cb; sw.prototype.setTileUrlFunction = sw.prototype.Na; sw.prototype.setUrl = sw.prototype.Pa; sw.prototype.setUrls = sw.prototype.Ta; sw.prototype.getTileGrid = sw.prototype.Ja; sw.prototype.refresh = sw.prototype.pa; sw.prototype.getAttributions = sw.prototype.da; sw.prototype.getLogo = sw.prototype.qa; sw.prototype.getProjection = sw.prototype.sa; sw.prototype.getState = sw.prototype.V; sw.prototype.setAttributions = sw.prototype.la; sw.prototype.get = sw.prototype.get; sw.prototype.getKeys = sw.prototype.O; sw.prototype.getProperties = sw.prototype.P; sw.prototype.set = sw.prototype.set; sw.prototype.setProperties = sw.prototype.C; sw.prototype.unset = sw.prototype.R; sw.prototype.changed = sw.prototype.u; sw.prototype.dispatchEvent = sw.prototype.b; sw.prototype.getRevision = sw.prototype.K; sw.prototype.on = sw.prototype.I; sw.prototype.once = sw.prototype.L; sw.prototype.un = sw.prototype.J; sw.prototype.unByKey = sw.prototype.M; jm.prototype.type = jm.prototype.type; jm.prototype.target = jm.prototype.target; jm.prototype.preventDefault = jm.prototype.preventDefault; jm.prototype.stopPropagation = jm.prototype.stopPropagation; xm.prototype.getTileLoadFunction = xm.prototype.Xa; xm.prototype.getTileUrlFunction = xm.prototype.Za; xm.prototype.getUrls = xm.prototype.$a; xm.prototype.setTileLoadFunction = xm.prototype.cb; xm.prototype.setTileUrlFunction = xm.prototype.Na; xm.prototype.setUrl = xm.prototype.Pa; xm.prototype.setUrls = xm.prototype.Ta; xm.prototype.getTileGrid = xm.prototype.Ja; xm.prototype.refresh = xm.prototype.pa; xm.prototype.getAttributions = xm.prototype.da; xm.prototype.getLogo = xm.prototype.qa; xm.prototype.getProjection = xm.prototype.sa; xm.prototype.getState = xm.prototype.V; xm.prototype.setAttributions = xm.prototype.la; xm.prototype.get = xm.prototype.get; xm.prototype.getKeys = xm.prototype.O; xm.prototype.getProperties = xm.prototype.P; xm.prototype.set = xm.prototype.set; xm.prototype.setProperties = xm.prototype.C; xm.prototype.unset = xm.prototype.R; xm.prototype.changed = xm.prototype.u; xm.prototype.dispatchEvent = xm.prototype.b; xm.prototype.getRevision = xm.prototype.K; xm.prototype.on = xm.prototype.I; xm.prototype.once = xm.prototype.L; xm.prototype.un = xm.prototype.J; xm.prototype.unByKey = xm.prototype.M; Z.prototype.setRenderReprojectionEdges = Z.prototype.nb; Z.prototype.setTileGridForProjection = Z.prototype.ob; Z.prototype.getTileLoadFunction = Z.prototype.Xa; Z.prototype.getTileUrlFunction = Z.prototype.Za; Z.prototype.getUrls = Z.prototype.$a; Z.prototype.setTileLoadFunction = Z.prototype.cb; Z.prototype.setTileUrlFunction = Z.prototype.Na; Z.prototype.setUrl = Z.prototype.Pa; Z.prototype.setUrls = Z.prototype.Ta; Z.prototype.getTileGrid = Z.prototype.Ja; Z.prototype.refresh = Z.prototype.pa; Z.prototype.getAttributions = Z.prototype.da; Z.prototype.getLogo = Z.prototype.qa; Z.prototype.getProjection = Z.prototype.sa; Z.prototype.getState = Z.prototype.V; Z.prototype.setAttributions = Z.prototype.la; Z.prototype.get = Z.prototype.get; Z.prototype.getKeys = Z.prototype.O; Z.prototype.getProperties = Z.prototype.P; Z.prototype.set = Z.prototype.set; Z.prototype.setProperties = Z.prototype.C; Z.prototype.unset = Z.prototype.R; Z.prototype.changed = Z.prototype.u; Z.prototype.dispatchEvent = Z.prototype.b; Z.prototype.getRevision = Z.prototype.K; Z.prototype.on = Z.prototype.I; Z.prototype.once = Z.prototype.L; Z.prototype.un = Z.prototype.J; Z.prototype.unByKey = Z.prototype.M; Aw.prototype.setRenderReprojectionEdges = Aw.prototype.nb; Aw.prototype.setTileGridForProjection = Aw.prototype.ob; Aw.prototype.getTileLoadFunction = Aw.prototype.Xa; Aw.prototype.getTileUrlFunction = Aw.prototype.Za; Aw.prototype.getUrls = Aw.prototype.$a; Aw.prototype.setTileLoadFunction = Aw.prototype.cb; Aw.prototype.setTileUrlFunction = Aw.prototype.Na; Aw.prototype.setUrl = Aw.prototype.Pa; Aw.prototype.setUrls = Aw.prototype.Ta; Aw.prototype.getTileGrid = Aw.prototype.Ja; Aw.prototype.refresh = Aw.prototype.pa; Aw.prototype.getAttributions = Aw.prototype.da; Aw.prototype.getLogo = Aw.prototype.qa; Aw.prototype.getProjection = Aw.prototype.sa; Aw.prototype.getState = Aw.prototype.V; Aw.prototype.setAttributions = Aw.prototype.la; Aw.prototype.get = Aw.prototype.get; Aw.prototype.getKeys = Aw.prototype.O; Aw.prototype.getProperties = Aw.prototype.P; Aw.prototype.set = Aw.prototype.set; Aw.prototype.setProperties = Aw.prototype.C; Aw.prototype.unset = Aw.prototype.R; Aw.prototype.changed = Aw.prototype.u; Aw.prototype.dispatchEvent = Aw.prototype.b; Aw.prototype.getRevision = Aw.prototype.K; Aw.prototype.on = Aw.prototype.I; Aw.prototype.once = Aw.prototype.L; Aw.prototype.un = Aw.prototype.J; Aw.prototype.unByKey = Aw.prototype.M; Cv.prototype.getTileCoord = Cv.prototype.f; ni.prototype.changed = ni.prototype.u; ni.prototype.dispatchEvent = ni.prototype.b; ni.prototype.getRevision = ni.prototype.K; ni.prototype.on = ni.prototype.I; ni.prototype.once = ni.prototype.L; ni.prototype.un = ni.prototype.J; ni.prototype.unByKey = ni.prototype.M; tn.prototype.changed = tn.prototype.u; tn.prototype.dispatchEvent = tn.prototype.b; tn.prototype.getRevision = tn.prototype.K; tn.prototype.on = tn.prototype.I; tn.prototype.once = tn.prototype.L; tn.prototype.un = tn.prototype.J; tn.prototype.unByKey = tn.prototype.M; wn.prototype.changed = wn.prototype.u; wn.prototype.dispatchEvent = wn.prototype.b; wn.prototype.getRevision = wn.prototype.K; wn.prototype.on = wn.prototype.I; wn.prototype.once = wn.prototype.L; wn.prototype.un = wn.prototype.J; wn.prototype.unByKey = wn.prototype.M; Cn.prototype.changed = Cn.prototype.u; Cn.prototype.dispatchEvent = Cn.prototype.b; Cn.prototype.getRevision = Cn.prototype.K; Cn.prototype.on = Cn.prototype.I; Cn.prototype.once = Cn.prototype.L; Cn.prototype.un = Cn.prototype.J; Cn.prototype.unByKey = Cn.prototype.M; En.prototype.changed = En.prototype.u; En.prototype.dispatchEvent = En.prototype.b; En.prototype.getRevision = En.prototype.K; En.prototype.on = En.prototype.I; En.prototype.once = En.prototype.L; En.prototype.un = En.prototype.J; En.prototype.unByKey = En.prototype.M; Dm.prototype.changed = Dm.prototype.u; Dm.prototype.dispatchEvent = Dm.prototype.b; Dm.prototype.getRevision = Dm.prototype.K; Dm.prototype.on = Dm.prototype.I; Dm.prototype.once = Dm.prototype.L; Dm.prototype.un = Dm.prototype.J; Dm.prototype.unByKey = Dm.prototype.M; Em.prototype.changed = Em.prototype.u; Em.prototype.dispatchEvent = Em.prototype.b; Em.prototype.getRevision = Em.prototype.K; Em.prototype.on = Em.prototype.I; Em.prototype.once = Em.prototype.L; Em.prototype.un = Em.prototype.J; Em.prototype.unByKey = Em.prototype.M; Fm.prototype.changed = Fm.prototype.u; Fm.prototype.dispatchEvent = Fm.prototype.b; Fm.prototype.getRevision = Fm.prototype.K; Fm.prototype.on = Fm.prototype.I; Fm.prototype.once = Fm.prototype.L; Fm.prototype.un = Fm.prototype.J; Fm.prototype.unByKey = Fm.prototype.M; Hm.prototype.changed = Hm.prototype.u; Hm.prototype.dispatchEvent = Hm.prototype.b; Hm.prototype.getRevision = Hm.prototype.K; Hm.prototype.on = Hm.prototype.I; Hm.prototype.once = Hm.prototype.L; Hm.prototype.un = Hm.prototype.J; Hm.prototype.unByKey = Hm.prototype.M; Dk.prototype.changed = Dk.prototype.u; Dk.prototype.dispatchEvent = Dk.prototype.b; Dk.prototype.getRevision = Dk.prototype.K; Dk.prototype.on = Dk.prototype.I; Dk.prototype.once = Dk.prototype.L; Dk.prototype.un = Dk.prototype.J; Dk.prototype.unByKey = Dk.prototype.M; om.prototype.changed = om.prototype.u; om.prototype.dispatchEvent = om.prototype.b; om.prototype.getRevision = om.prototype.K; om.prototype.on = om.prototype.I; om.prototype.once = om.prototype.L; om.prototype.un = om.prototype.J; om.prototype.unByKey = om.prototype.M; pm.prototype.changed = pm.prototype.u; pm.prototype.dispatchEvent = pm.prototype.b; pm.prototype.getRevision = pm.prototype.K; pm.prototype.on = pm.prototype.I; pm.prototype.once = pm.prototype.L; pm.prototype.un = pm.prototype.J; pm.prototype.unByKey = pm.prototype.M; qm.prototype.changed = qm.prototype.u; qm.prototype.dispatchEvent = qm.prototype.b; qm.prototype.getRevision = qm.prototype.K; qm.prototype.on = qm.prototype.I; qm.prototype.once = qm.prototype.L; qm.prototype.un = qm.prototype.J; qm.prototype.unByKey = qm.prototype.M; zm.prototype.changed = zm.prototype.u; zm.prototype.dispatchEvent = zm.prototype.b; zm.prototype.getRevision = zm.prototype.K; zm.prototype.on = zm.prototype.I; zm.prototype.once = zm.prototype.L; zm.prototype.un = zm.prototype.J; zm.prototype.unByKey = zm.prototype.M; fi.prototype.type = fi.prototype.type; fi.prototype.target = fi.prototype.target; fi.prototype.preventDefault = fi.prototype.preventDefault; fi.prototype.stopPropagation = fi.prototype.stopPropagation; Lg.prototype.type = Lg.prototype.type; Lg.prototype.target = Lg.prototype.target; Lg.prototype.preventDefault = Lg.prototype.preventDefault; Lg.prototype.stopPropagation = Lg.prototype.stopPropagation; ci.prototype.get = ci.prototype.get; ci.prototype.getKeys = ci.prototype.O; ci.prototype.getProperties = ci.prototype.P; ci.prototype.set = ci.prototype.set; ci.prototype.setProperties = ci.prototype.C; ci.prototype.unset = ci.prototype.R; ci.prototype.changed = ci.prototype.u; ci.prototype.dispatchEvent = ci.prototype.b; ci.prototype.getRevision = ci.prototype.K; ci.prototype.on = ci.prototype.I; ci.prototype.once = ci.prototype.L; ci.prototype.un = ci.prototype.J; ci.prototype.unByKey = ci.prototype.M; gi.prototype.getExtent = gi.prototype.G; gi.prototype.getMaxResolution = gi.prototype.Ib; gi.prototype.getMinResolution = gi.prototype.Jb; gi.prototype.getOpacity = gi.prototype.Nb; gi.prototype.getVisible = gi.prototype.yb; gi.prototype.getZIndex = gi.prototype.Ob; gi.prototype.setExtent = gi.prototype.ac; gi.prototype.setMaxResolution = gi.prototype.ic; gi.prototype.setMinResolution = gi.prototype.jc; gi.prototype.setOpacity = gi.prototype.bc; gi.prototype.setVisible = gi.prototype.cc; gi.prototype.setZIndex = gi.prototype.dc; gi.prototype.get = gi.prototype.get; gi.prototype.getKeys = gi.prototype.O; gi.prototype.getProperties = gi.prototype.P; gi.prototype.set = gi.prototype.set; gi.prototype.setProperties = gi.prototype.C; gi.prototype.unset = gi.prototype.R; gi.prototype.changed = gi.prototype.u; gi.prototype.dispatchEvent = gi.prototype.b; gi.prototype.getRevision = gi.prototype.K; gi.prototype.on = gi.prototype.I; gi.prototype.once = gi.prototype.L; gi.prototype.un = gi.prototype.J; gi.prototype.unByKey = gi.prototype.M; G.prototype.setMap = G.prototype.setMap; G.prototype.setSource = G.prototype.Cc; G.prototype.getExtent = G.prototype.G; G.prototype.getMaxResolution = G.prototype.Ib; G.prototype.getMinResolution = G.prototype.Jb; G.prototype.getOpacity = G.prototype.Nb; G.prototype.getVisible = G.prototype.yb; G.prototype.getZIndex = G.prototype.Ob; G.prototype.setExtent = G.prototype.ac; G.prototype.setMaxResolution = G.prototype.ic; G.prototype.setMinResolution = G.prototype.jc; G.prototype.setOpacity = G.prototype.bc; G.prototype.setVisible = G.prototype.cc; G.prototype.setZIndex = G.prototype.dc; G.prototype.get = G.prototype.get; G.prototype.getKeys = G.prototype.O; G.prototype.getProperties = G.prototype.P; G.prototype.set = G.prototype.set; G.prototype.setProperties = G.prototype.C; G.prototype.unset = G.prototype.R; G.prototype.changed = G.prototype.u; G.prototype.dispatchEvent = G.prototype.b; G.prototype.getRevision = G.prototype.K; G.prototype.on = G.prototype.I; G.prototype.once = G.prototype.L; G.prototype.un = G.prototype.J; G.prototype.unByKey = G.prototype.M; V.prototype.getSource = V.prototype.ea; V.prototype.getStyle = V.prototype.N; V.prototype.getStyleFunction = V.prototype.H; V.prototype.setStyle = V.prototype.c; V.prototype.setMap = V.prototype.setMap; V.prototype.setSource = V.prototype.Cc; V.prototype.getExtent = V.prototype.G; V.prototype.getMaxResolution = V.prototype.Ib; V.prototype.getMinResolution = V.prototype.Jb; V.prototype.getOpacity = V.prototype.Nb; V.prototype.getVisible = V.prototype.yb; V.prototype.getZIndex = V.prototype.Ob; V.prototype.setExtent = V.prototype.ac; V.prototype.setMaxResolution = V.prototype.ic; V.prototype.setMinResolution = V.prototype.jc; V.prototype.setOpacity = V.prototype.bc; V.prototype.setVisible = V.prototype.cc; V.prototype.setZIndex = V.prototype.dc; V.prototype.get = V.prototype.get; V.prototype.getKeys = V.prototype.O; V.prototype.getProperties = V.prototype.P; V.prototype.set = V.prototype.set; V.prototype.setProperties = V.prototype.C; V.prototype.unset = V.prototype.R; V.prototype.changed = V.prototype.u; V.prototype.dispatchEvent = V.prototype.b; V.prototype.getRevision = V.prototype.K; V.prototype.on = V.prototype.I; V.prototype.once = V.prototype.L; V.prototype.un = V.prototype.J; V.prototype.unByKey = V.prototype.M; Wj.prototype.setMap = Wj.prototype.setMap; Wj.prototype.setSource = Wj.prototype.Cc; Wj.prototype.getExtent = Wj.prototype.G; Wj.prototype.getMaxResolution = Wj.prototype.Ib; Wj.prototype.getMinResolution = Wj.prototype.Jb; Wj.prototype.getOpacity = Wj.prototype.Nb; Wj.prototype.getVisible = Wj.prototype.yb; Wj.prototype.getZIndex = Wj.prototype.Ob; Wj.prototype.setExtent = Wj.prototype.ac; Wj.prototype.setMaxResolution = Wj.prototype.ic; Wj.prototype.setMinResolution = Wj.prototype.jc; Wj.prototype.setOpacity = Wj.prototype.bc; Wj.prototype.setVisible = Wj.prototype.cc; Wj.prototype.setZIndex = Wj.prototype.dc; Wj.prototype.get = Wj.prototype.get; Wj.prototype.getKeys = Wj.prototype.O; Wj.prototype.getProperties = Wj.prototype.P; Wj.prototype.set = Wj.prototype.set; Wj.prototype.setProperties = Wj.prototype.C; Wj.prototype.unset = Wj.prototype.R; Wj.prototype.changed = Wj.prototype.u; Wj.prototype.dispatchEvent = Wj.prototype.b; Wj.prototype.getRevision = Wj.prototype.K; Wj.prototype.on = Wj.prototype.I; Wj.prototype.once = Wj.prototype.L; Wj.prototype.un = Wj.prototype.J; Wj.prototype.unByKey = Wj.prototype.M; Mj.prototype.getExtent = Mj.prototype.G; Mj.prototype.getMaxResolution = Mj.prototype.Ib; Mj.prototype.getMinResolution = Mj.prototype.Jb; Mj.prototype.getOpacity = Mj.prototype.Nb; Mj.prototype.getVisible = Mj.prototype.yb; Mj.prototype.getZIndex = Mj.prototype.Ob; Mj.prototype.setExtent = Mj.prototype.ac; Mj.prototype.setMaxResolution = Mj.prototype.ic; Mj.prototype.setMinResolution = Mj.prototype.jc; Mj.prototype.setOpacity = Mj.prototype.bc; Mj.prototype.setVisible = Mj.prototype.cc; Mj.prototype.setZIndex = Mj.prototype.dc; Mj.prototype.get = Mj.prototype.get; Mj.prototype.getKeys = Mj.prototype.O; Mj.prototype.getProperties = Mj.prototype.P; Mj.prototype.set = Mj.prototype.set; Mj.prototype.setProperties = Mj.prototype.C; Mj.prototype.unset = Mj.prototype.R; Mj.prototype.changed = Mj.prototype.u; Mj.prototype.dispatchEvent = Mj.prototype.b; Mj.prototype.getRevision = Mj.prototype.K; Mj.prototype.on = Mj.prototype.I; Mj.prototype.once = Mj.prototype.L; Mj.prototype.un = Mj.prototype.J; Mj.prototype.unByKey = Mj.prototype.M; Xj.prototype.setMap = Xj.prototype.setMap; Xj.prototype.setSource = Xj.prototype.Cc; Xj.prototype.getExtent = Xj.prototype.G; Xj.prototype.getMaxResolution = Xj.prototype.Ib; Xj.prototype.getMinResolution = Xj.prototype.Jb; Xj.prototype.getOpacity = Xj.prototype.Nb; Xj.prototype.getVisible = Xj.prototype.yb; Xj.prototype.getZIndex = Xj.prototype.Ob; Xj.prototype.setExtent = Xj.prototype.ac; Xj.prototype.setMaxResolution = Xj.prototype.ic; Xj.prototype.setMinResolution = Xj.prototype.jc; Xj.prototype.setOpacity = Xj.prototype.bc; Xj.prototype.setVisible = Xj.prototype.cc; Xj.prototype.setZIndex = Xj.prototype.dc; Xj.prototype.get = Xj.prototype.get; Xj.prototype.getKeys = Xj.prototype.O; Xj.prototype.getProperties = Xj.prototype.P; Xj.prototype.set = Xj.prototype.set; Xj.prototype.setProperties = Xj.prototype.C; Xj.prototype.unset = Xj.prototype.R; Xj.prototype.changed = Xj.prototype.u; Xj.prototype.dispatchEvent = Xj.prototype.b; Xj.prototype.getRevision = Xj.prototype.K; Xj.prototype.on = Xj.prototype.I; Xj.prototype.once = Xj.prototype.L; Xj.prototype.un = Xj.prototype.J; Xj.prototype.unByKey = Xj.prototype.M; H.prototype.getSource = H.prototype.ea; H.prototype.getStyle = H.prototype.N; H.prototype.getStyleFunction = H.prototype.H; H.prototype.setStyle = H.prototype.c; H.prototype.setMap = H.prototype.setMap; H.prototype.setSource = H.prototype.Cc; H.prototype.getExtent = H.prototype.G; H.prototype.getMaxResolution = H.prototype.Ib; H.prototype.getMinResolution = H.prototype.Jb; H.prototype.getOpacity = H.prototype.Nb; H.prototype.getVisible = H.prototype.yb; H.prototype.getZIndex = H.prototype.Ob; H.prototype.setExtent = H.prototype.ac; H.prototype.setMaxResolution = H.prototype.ic; H.prototype.setMinResolution = H.prototype.jc; H.prototype.setOpacity = H.prototype.bc; H.prototype.setVisible = H.prototype.cc; H.prototype.setZIndex = H.prototype.dc; H.prototype.get = H.prototype.get; H.prototype.getKeys = H.prototype.O; H.prototype.getProperties = H.prototype.P; H.prototype.set = H.prototype.set; H.prototype.setProperties = H.prototype.C; H.prototype.unset = H.prototype.R; H.prototype.changed = H.prototype.u; H.prototype.dispatchEvent = H.prototype.b; H.prototype.getRevision = H.prototype.K; H.prototype.on = H.prototype.I; H.prototype.once = H.prototype.L; H.prototype.un = H.prototype.J; H.prototype.unByKey = H.prototype.M; Pi.prototype.get = Pi.prototype.get; Pi.prototype.getKeys = Pi.prototype.O; Pi.prototype.getProperties = Pi.prototype.P; Pi.prototype.set = Pi.prototype.set; Pi.prototype.setProperties = Pi.prototype.C; Pi.prototype.unset = Pi.prototype.R; Pi.prototype.changed = Pi.prototype.u; Pi.prototype.dispatchEvent = Pi.prototype.b; Pi.prototype.getRevision = Pi.prototype.K; Pi.prototype.on = Pi.prototype.I; Pi.prototype.once = Pi.prototype.L; Pi.prototype.un = Pi.prototype.J; Pi.prototype.unByKey = Pi.prototype.M; Ti.prototype.getActive = Ti.prototype.f; Ti.prototype.getMap = Ti.prototype.j; Ti.prototype.setActive = Ti.prototype.i; Ti.prototype.get = Ti.prototype.get; Ti.prototype.getKeys = Ti.prototype.O; Ti.prototype.getProperties = Ti.prototype.P; Ti.prototype.set = Ti.prototype.set; Ti.prototype.setProperties = Ti.prototype.C; Ti.prototype.unset = Ti.prototype.R; Ti.prototype.changed = Ti.prototype.u; Ti.prototype.dispatchEvent = Ti.prototype.b; Ti.prototype.getRevision = Ti.prototype.K; Ti.prototype.on = Ti.prototype.I; Ti.prototype.once = Ti.prototype.L; Ti.prototype.un = Ti.prototype.J; Ti.prototype.unByKey = Ti.prototype.M; yu.prototype.getActive = yu.prototype.f; yu.prototype.getMap = yu.prototype.j; yu.prototype.setActive = yu.prototype.i; yu.prototype.get = yu.prototype.get; yu.prototype.getKeys = yu.prototype.O; yu.prototype.getProperties = yu.prototype.P; yu.prototype.set = yu.prototype.set; yu.prototype.setProperties = yu.prototype.C; yu.prototype.unset = yu.prototype.R; yu.prototype.changed = yu.prototype.u; yu.prototype.dispatchEvent = yu.prototype.b; yu.prototype.getRevision = yu.prototype.K; yu.prototype.on = yu.prototype.I; yu.prototype.once = yu.prototype.L; yu.prototype.un = yu.prototype.J; yu.prototype.unByKey = yu.prototype.M; Bu.prototype.type = Bu.prototype.type; Bu.prototype.target = Bu.prototype.target; Bu.prototype.preventDefault = Bu.prototype.preventDefault; Bu.prototype.stopPropagation = Bu.prototype.stopPropagation; qj.prototype.type = qj.prototype.type; qj.prototype.target = qj.prototype.target; qj.prototype.preventDefault = qj.prototype.preventDefault; qj.prototype.stopPropagation = qj.prototype.stopPropagation; cj.prototype.getActive = cj.prototype.f; cj.prototype.getMap = cj.prototype.j; cj.prototype.setActive = cj.prototype.i; cj.prototype.get = cj.prototype.get; cj.prototype.getKeys = cj.prototype.O; cj.prototype.getProperties = cj.prototype.P; cj.prototype.set = cj.prototype.set; cj.prototype.setProperties = cj.prototype.C; cj.prototype.unset = cj.prototype.R; cj.prototype.changed = cj.prototype.u; cj.prototype.dispatchEvent = cj.prototype.b; cj.prototype.getRevision = cj.prototype.K; cj.prototype.on = cj.prototype.I; cj.prototype.once = cj.prototype.L; cj.prototype.un = cj.prototype.J; cj.prototype.unByKey = cj.prototype.M; rj.prototype.getActive = rj.prototype.f; rj.prototype.getMap = rj.prototype.j; rj.prototype.setActive = rj.prototype.i; rj.prototype.get = rj.prototype.get; rj.prototype.getKeys = rj.prototype.O; rj.prototype.getProperties = rj.prototype.P; rj.prototype.set = rj.prototype.set; rj.prototype.setProperties = rj.prototype.C; rj.prototype.unset = rj.prototype.R; rj.prototype.changed = rj.prototype.u; rj.prototype.dispatchEvent = rj.prototype.b; rj.prototype.getRevision = rj.prototype.K; rj.prototype.on = rj.prototype.I; rj.prototype.once = rj.prototype.L; rj.prototype.un = rj.prototype.J; rj.prototype.unByKey = rj.prototype.M; fj.prototype.getActive = fj.prototype.f; fj.prototype.getMap = fj.prototype.j; fj.prototype.setActive = fj.prototype.i; fj.prototype.get = fj.prototype.get; fj.prototype.getKeys = fj.prototype.O; fj.prototype.getProperties = fj.prototype.P; fj.prototype.set = fj.prototype.set; fj.prototype.setProperties = fj.prototype.C; fj.prototype.unset = fj.prototype.R; fj.prototype.changed = fj.prototype.u; fj.prototype.dispatchEvent = fj.prototype.b; fj.prototype.getRevision = fj.prototype.K; fj.prototype.on = fj.prototype.I; fj.prototype.once = fj.prototype.L; fj.prototype.un = fj.prototype.J; fj.prototype.unByKey = fj.prototype.M; Du.prototype.getActive = Du.prototype.f; Du.prototype.getMap = Du.prototype.j; Du.prototype.setActive = Du.prototype.i; Du.prototype.get = Du.prototype.get; Du.prototype.getKeys = Du.prototype.O; Du.prototype.getProperties = Du.prototype.P; Du.prototype.set = Du.prototype.set; Du.prototype.setProperties = Du.prototype.C; Du.prototype.unset = Du.prototype.R; Du.prototype.changed = Du.prototype.u; Du.prototype.dispatchEvent = Du.prototype.b; Du.prototype.getRevision = Du.prototype.K; Du.prototype.on = Du.prototype.I; Du.prototype.once = Du.prototype.L; Du.prototype.un = Du.prototype.J; Du.prototype.unByKey = Du.prototype.M; jj.prototype.getActive = jj.prototype.f; jj.prototype.getMap = jj.prototype.j; jj.prototype.setActive = jj.prototype.i; jj.prototype.get = jj.prototype.get; jj.prototype.getKeys = jj.prototype.O; jj.prototype.getProperties = jj.prototype.P; jj.prototype.set = jj.prototype.set; jj.prototype.setProperties = jj.prototype.C; jj.prototype.unset = jj.prototype.R; jj.prototype.changed = jj.prototype.u; jj.prototype.dispatchEvent = jj.prototype.b; jj.prototype.getRevision = jj.prototype.K; jj.prototype.on = jj.prototype.I; jj.prototype.once = jj.prototype.L; jj.prototype.un = jj.prototype.J; jj.prototype.unByKey = jj.prototype.M; wj.prototype.getGeometry = wj.prototype.W; wj.prototype.getActive = wj.prototype.f; wj.prototype.getMap = wj.prototype.j; wj.prototype.setActive = wj.prototype.i; wj.prototype.get = wj.prototype.get; wj.prototype.getKeys = wj.prototype.O; wj.prototype.getProperties = wj.prototype.P; wj.prototype.set = wj.prototype.set; wj.prototype.setProperties = wj.prototype.C; wj.prototype.unset = wj.prototype.R; wj.prototype.changed = wj.prototype.u; wj.prototype.dispatchEvent = wj.prototype.b; wj.prototype.getRevision = wj.prototype.K; wj.prototype.on = wj.prototype.I; wj.prototype.once = wj.prototype.L; wj.prototype.un = wj.prototype.J; wj.prototype.unByKey = wj.prototype.M; Hu.prototype.type = Hu.prototype.type; Hu.prototype.target = Hu.prototype.target; Hu.prototype.preventDefault = Hu.prototype.preventDefault; Hu.prototype.stopPropagation = Hu.prototype.stopPropagation; Iu.prototype.getActive = Iu.prototype.f; Iu.prototype.getMap = Iu.prototype.j; Iu.prototype.setActive = Iu.prototype.i; Iu.prototype.get = Iu.prototype.get; Iu.prototype.getKeys = Iu.prototype.O; Iu.prototype.getProperties = Iu.prototype.P; Iu.prototype.set = Iu.prototype.set; Iu.prototype.setProperties = Iu.prototype.C; Iu.prototype.unset = Iu.prototype.R; Iu.prototype.changed = Iu.prototype.u; Iu.prototype.dispatchEvent = Iu.prototype.b; Iu.prototype.getRevision = Iu.prototype.K; Iu.prototype.on = Iu.prototype.I; Iu.prototype.once = Iu.prototype.L; Iu.prototype.un = Iu.prototype.J; Iu.prototype.unByKey = Iu.prototype.M; xj.prototype.getActive = xj.prototype.f; xj.prototype.getMap = xj.prototype.j; xj.prototype.setActive = xj.prototype.i; xj.prototype.get = xj.prototype.get; xj.prototype.getKeys = xj.prototype.O; xj.prototype.getProperties = xj.prototype.P; xj.prototype.set = xj.prototype.set; xj.prototype.setProperties = xj.prototype.C; xj.prototype.unset = xj.prototype.R; xj.prototype.changed = xj.prototype.u; xj.prototype.dispatchEvent = xj.prototype.b; xj.prototype.getRevision = xj.prototype.K; xj.prototype.on = xj.prototype.I; xj.prototype.once = xj.prototype.L; xj.prototype.un = xj.prototype.J; xj.prototype.unByKey = xj.prototype.M; zj.prototype.getActive = zj.prototype.f; zj.prototype.getMap = zj.prototype.j; zj.prototype.setActive = zj.prototype.i; zj.prototype.get = zj.prototype.get; zj.prototype.getKeys = zj.prototype.O; zj.prototype.getProperties = zj.prototype.P; zj.prototype.set = zj.prototype.set; zj.prototype.setProperties = zj.prototype.C; zj.prototype.unset = zj.prototype.R; zj.prototype.changed = zj.prototype.u; zj.prototype.dispatchEvent = zj.prototype.b; zj.prototype.getRevision = zj.prototype.K; zj.prototype.on = zj.prototype.I; zj.prototype.once = zj.prototype.L; zj.prototype.un = zj.prototype.J; zj.prototype.unByKey = zj.prototype.M; Yu.prototype.type = Yu.prototype.type; Yu.prototype.target = Yu.prototype.target; Yu.prototype.preventDefault = Yu.prototype.preventDefault; Yu.prototype.stopPropagation = Yu.prototype.stopPropagation; Zu.prototype.getActive = Zu.prototype.f; Zu.prototype.getMap = Zu.prototype.j; Zu.prototype.setActive = Zu.prototype.i; Zu.prototype.get = Zu.prototype.get; Zu.prototype.getKeys = Zu.prototype.O; Zu.prototype.getProperties = Zu.prototype.P; Zu.prototype.set = Zu.prototype.set; Zu.prototype.setProperties = Zu.prototype.C; Zu.prototype.unset = Zu.prototype.R; Zu.prototype.changed = Zu.prototype.u; Zu.prototype.dispatchEvent = Zu.prototype.b; Zu.prototype.getRevision = Zu.prototype.K; Zu.prototype.on = Zu.prototype.I; Zu.prototype.once = Zu.prototype.L; Zu.prototype.un = Zu.prototype.J; Zu.prototype.unByKey = Zu.prototype.M; Bj.prototype.getActive = Bj.prototype.f; Bj.prototype.getMap = Bj.prototype.j; Bj.prototype.setActive = Bj.prototype.i; Bj.prototype.get = Bj.prototype.get; Bj.prototype.getKeys = Bj.prototype.O; Bj.prototype.getProperties = Bj.prototype.P; Bj.prototype.set = Bj.prototype.set; Bj.prototype.setProperties = Bj.prototype.C; Bj.prototype.unset = Bj.prototype.R; Bj.prototype.changed = Bj.prototype.u; Bj.prototype.dispatchEvent = Bj.prototype.b; Bj.prototype.getRevision = Bj.prototype.K; Bj.prototype.on = Bj.prototype.I; Bj.prototype.once = Bj.prototype.L; Bj.prototype.un = Bj.prototype.J; Bj.prototype.unByKey = Bj.prototype.M; Dj.prototype.getActive = Dj.prototype.f; Dj.prototype.getMap = Dj.prototype.j; Dj.prototype.setActive = Dj.prototype.i; Dj.prototype.get = Dj.prototype.get; Dj.prototype.getKeys = Dj.prototype.O; Dj.prototype.getProperties = Dj.prototype.P; Dj.prototype.set = Dj.prototype.set; Dj.prototype.setProperties = Dj.prototype.C; Dj.prototype.unset = Dj.prototype.R; Dj.prototype.changed = Dj.prototype.u; Dj.prototype.dispatchEvent = Dj.prototype.b; Dj.prototype.getRevision = Dj.prototype.K; Dj.prototype.on = Dj.prototype.I; Dj.prototype.once = Dj.prototype.L; Dj.prototype.un = Dj.prototype.J; Dj.prototype.unByKey = Dj.prototype.M; Hj.prototype.getActive = Hj.prototype.f; Hj.prototype.getMap = Hj.prototype.j; Hj.prototype.setActive = Hj.prototype.i; Hj.prototype.get = Hj.prototype.get; Hj.prototype.getKeys = Hj.prototype.O; Hj.prototype.getProperties = Hj.prototype.P; Hj.prototype.set = Hj.prototype.set; Hj.prototype.setProperties = Hj.prototype.C; Hj.prototype.unset = Hj.prototype.R; Hj.prototype.changed = Hj.prototype.u; Hj.prototype.dispatchEvent = Hj.prototype.b; Hj.prototype.getRevision = Hj.prototype.K; Hj.prototype.on = Hj.prototype.I; Hj.prototype.once = Hj.prototype.L; Hj.prototype.un = Hj.prototype.J; Hj.prototype.unByKey = Hj.prototype.M; lv.prototype.type = lv.prototype.type; lv.prototype.target = lv.prototype.target; lv.prototype.preventDefault = lv.prototype.preventDefault; lv.prototype.stopPropagation = lv.prototype.stopPropagation; mv.prototype.getActive = mv.prototype.f; mv.prototype.getMap = mv.prototype.j; mv.prototype.setActive = mv.prototype.i; mv.prototype.get = mv.prototype.get; mv.prototype.getKeys = mv.prototype.O; mv.prototype.getProperties = mv.prototype.P; mv.prototype.set = mv.prototype.set; mv.prototype.setProperties = mv.prototype.C; mv.prototype.unset = mv.prototype.R; mv.prototype.changed = mv.prototype.u; mv.prototype.dispatchEvent = mv.prototype.b; mv.prototype.getRevision = mv.prototype.K; mv.prototype.on = mv.prototype.I; mv.prototype.once = mv.prototype.L; mv.prototype.un = mv.prototype.J; mv.prototype.unByKey = mv.prototype.M; pv.prototype.getActive = pv.prototype.f; pv.prototype.getMap = pv.prototype.j; pv.prototype.setActive = pv.prototype.i; pv.prototype.get = pv.prototype.get; pv.prototype.getKeys = pv.prototype.O; pv.prototype.getProperties = pv.prototype.P; pv.prototype.set = pv.prototype.set; pv.prototype.setProperties = pv.prototype.C; pv.prototype.unset = pv.prototype.R; pv.prototype.changed = pv.prototype.u; pv.prototype.dispatchEvent = pv.prototype.b; pv.prototype.getRevision = pv.prototype.K; pv.prototype.on = pv.prototype.I; pv.prototype.once = pv.prototype.L; pv.prototype.un = pv.prototype.J; pv.prototype.unByKey = pv.prototype.M; tv.prototype.type = tv.prototype.type; tv.prototype.target = tv.prototype.target; tv.prototype.preventDefault = tv.prototype.preventDefault; tv.prototype.stopPropagation = tv.prototype.stopPropagation; uv.prototype.getActive = uv.prototype.f; uv.prototype.getMap = uv.prototype.j; uv.prototype.setActive = uv.prototype.i; uv.prototype.get = uv.prototype.get; uv.prototype.getKeys = uv.prototype.O; uv.prototype.getProperties = uv.prototype.P; uv.prototype.set = uv.prototype.set; uv.prototype.setProperties = uv.prototype.C; uv.prototype.unset = uv.prototype.R; uv.prototype.changed = uv.prototype.u; uv.prototype.dispatchEvent = uv.prototype.b; uv.prototype.getRevision = uv.prototype.K; uv.prototype.on = uv.prototype.I; uv.prototype.once = uv.prototype.L; uv.prototype.un = uv.prototype.J; uv.prototype.unByKey = uv.prototype.M; vd.prototype.get = vd.prototype.get; vd.prototype.getKeys = vd.prototype.O; vd.prototype.getProperties = vd.prototype.P; vd.prototype.set = vd.prototype.set; vd.prototype.setProperties = vd.prototype.C; vd.prototype.unset = vd.prototype.R; vd.prototype.changed = vd.prototype.u; vd.prototype.dispatchEvent = vd.prototype.b; vd.prototype.getRevision = vd.prototype.K; vd.prototype.on = vd.prototype.I; vd.prototype.once = vd.prototype.L; vd.prototype.un = vd.prototype.J; vd.prototype.unByKey = vd.prototype.M; xd.prototype.getClosestPoint = xd.prototype.xb; xd.prototype.getExtent = xd.prototype.G; xd.prototype.rotate = xd.prototype.rotate; xd.prototype.simplify = xd.prototype.Ab; xd.prototype.transform = xd.prototype.hb; xd.prototype.get = xd.prototype.get; xd.prototype.getKeys = xd.prototype.O; xd.prototype.getProperties = xd.prototype.P; xd.prototype.set = xd.prototype.set; xd.prototype.setProperties = xd.prototype.C; xd.prototype.unset = xd.prototype.R; xd.prototype.changed = xd.prototype.u; xd.prototype.dispatchEvent = xd.prototype.b; xd.prototype.getRevision = xd.prototype.K; xd.prototype.on = xd.prototype.I; xd.prototype.once = xd.prototype.L; xd.prototype.un = xd.prototype.J; xd.prototype.unByKey = xd.prototype.M; lu.prototype.getFirstCoordinate = lu.prototype.Fb; lu.prototype.getLastCoordinate = lu.prototype.Gb; lu.prototype.getLayout = lu.prototype.Hb; lu.prototype.rotate = lu.prototype.rotate; lu.prototype.getClosestPoint = lu.prototype.xb; lu.prototype.getExtent = lu.prototype.G; lu.prototype.simplify = lu.prototype.Ab; lu.prototype.get = lu.prototype.get; lu.prototype.getKeys = lu.prototype.O; lu.prototype.getProperties = lu.prototype.P; lu.prototype.set = lu.prototype.set; lu.prototype.setProperties = lu.prototype.C; lu.prototype.unset = lu.prototype.R; lu.prototype.changed = lu.prototype.u; lu.prototype.dispatchEvent = lu.prototype.b; lu.prototype.getRevision = lu.prototype.K; lu.prototype.on = lu.prototype.I; lu.prototype.once = lu.prototype.L; lu.prototype.un = lu.prototype.J; lu.prototype.unByKey = lu.prototype.M; zo.prototype.getClosestPoint = zo.prototype.xb; zo.prototype.getExtent = zo.prototype.G; zo.prototype.rotate = zo.prototype.rotate; zo.prototype.simplify = zo.prototype.Ab; zo.prototype.transform = zo.prototype.hb; zo.prototype.get = zo.prototype.get; zo.prototype.getKeys = zo.prototype.O; zo.prototype.getProperties = zo.prototype.P; zo.prototype.set = zo.prototype.set; zo.prototype.setProperties = zo.prototype.C; zo.prototype.unset = zo.prototype.R; zo.prototype.changed = zo.prototype.u; zo.prototype.dispatchEvent = zo.prototype.b; zo.prototype.getRevision = zo.prototype.K; zo.prototype.on = zo.prototype.I; zo.prototype.once = zo.prototype.L; zo.prototype.un = zo.prototype.J; zo.prototype.unByKey = zo.prototype.M; Pd.prototype.getFirstCoordinate = Pd.prototype.Fb; Pd.prototype.getLastCoordinate = Pd.prototype.Gb; Pd.prototype.getLayout = Pd.prototype.Hb; Pd.prototype.rotate = Pd.prototype.rotate; Pd.prototype.getClosestPoint = Pd.prototype.xb; Pd.prototype.getExtent = Pd.prototype.G; Pd.prototype.simplify = Pd.prototype.Ab; Pd.prototype.transform = Pd.prototype.hb; Pd.prototype.get = Pd.prototype.get; Pd.prototype.getKeys = Pd.prototype.O; Pd.prototype.getProperties = Pd.prototype.P; Pd.prototype.set = Pd.prototype.set; Pd.prototype.setProperties = Pd.prototype.C; Pd.prototype.unset = Pd.prototype.R; Pd.prototype.changed = Pd.prototype.u; Pd.prototype.dispatchEvent = Pd.prototype.b; Pd.prototype.getRevision = Pd.prototype.K; Pd.prototype.on = Pd.prototype.I; Pd.prototype.once = Pd.prototype.L; Pd.prototype.un = Pd.prototype.J; Pd.prototype.unByKey = Pd.prototype.M; S.prototype.getFirstCoordinate = S.prototype.Fb; S.prototype.getLastCoordinate = S.prototype.Gb; S.prototype.getLayout = S.prototype.Hb; S.prototype.rotate = S.prototype.rotate; S.prototype.getClosestPoint = S.prototype.xb; S.prototype.getExtent = S.prototype.G; S.prototype.simplify = S.prototype.Ab; S.prototype.transform = S.prototype.hb; S.prototype.get = S.prototype.get; S.prototype.getKeys = S.prototype.O; S.prototype.getProperties = S.prototype.P; S.prototype.set = S.prototype.set; S.prototype.setProperties = S.prototype.C; S.prototype.unset = S.prototype.R; S.prototype.changed = S.prototype.u; S.prototype.dispatchEvent = S.prototype.b; S.prototype.getRevision = S.prototype.K; S.prototype.on = S.prototype.I; S.prototype.once = S.prototype.L; S.prototype.un = S.prototype.J; S.prototype.unByKey = S.prototype.M; T.prototype.getFirstCoordinate = T.prototype.Fb; T.prototype.getLastCoordinate = T.prototype.Gb; T.prototype.getLayout = T.prototype.Hb; T.prototype.rotate = T.prototype.rotate; T.prototype.getClosestPoint = T.prototype.xb; T.prototype.getExtent = T.prototype.G; T.prototype.simplify = T.prototype.Ab; T.prototype.transform = T.prototype.hb; T.prototype.get = T.prototype.get; T.prototype.getKeys = T.prototype.O; T.prototype.getProperties = T.prototype.P; T.prototype.set = T.prototype.set; T.prototype.setProperties = T.prototype.C; T.prototype.unset = T.prototype.R; T.prototype.changed = T.prototype.u; T.prototype.dispatchEvent = T.prototype.b; T.prototype.getRevision = T.prototype.K; T.prototype.on = T.prototype.I; T.prototype.once = T.prototype.L; T.prototype.un = T.prototype.J; T.prototype.unByKey = T.prototype.M; oo.prototype.getFirstCoordinate = oo.prototype.Fb; oo.prototype.getLastCoordinate = oo.prototype.Gb; oo.prototype.getLayout = oo.prototype.Hb; oo.prototype.rotate = oo.prototype.rotate; oo.prototype.getClosestPoint = oo.prototype.xb; oo.prototype.getExtent = oo.prototype.G; oo.prototype.simplify = oo.prototype.Ab; oo.prototype.transform = oo.prototype.hb; oo.prototype.get = oo.prototype.get; oo.prototype.getKeys = oo.prototype.O; oo.prototype.getProperties = oo.prototype.P; oo.prototype.set = oo.prototype.set; oo.prototype.setProperties = oo.prototype.C; oo.prototype.unset = oo.prototype.R; oo.prototype.changed = oo.prototype.u; oo.prototype.dispatchEvent = oo.prototype.b; oo.prototype.getRevision = oo.prototype.K; oo.prototype.on = oo.prototype.I; oo.prototype.once = oo.prototype.L; oo.prototype.un = oo.prototype.J; oo.prototype.unByKey = oo.prototype.M; po.prototype.getFirstCoordinate = po.prototype.Fb; po.prototype.getLastCoordinate = po.prototype.Gb; po.prototype.getLayout = po.prototype.Hb; po.prototype.rotate = po.prototype.rotate; po.prototype.getClosestPoint = po.prototype.xb; po.prototype.getExtent = po.prototype.G; po.prototype.simplify = po.prototype.Ab; po.prototype.transform = po.prototype.hb; po.prototype.get = po.prototype.get; po.prototype.getKeys = po.prototype.O; po.prototype.getProperties = po.prototype.P; po.prototype.set = po.prototype.set; po.prototype.setProperties = po.prototype.C; po.prototype.unset = po.prototype.R; po.prototype.changed = po.prototype.u; po.prototype.dispatchEvent = po.prototype.b; po.prototype.getRevision = po.prototype.K; po.prototype.on = po.prototype.I; po.prototype.once = po.prototype.L; po.prototype.un = po.prototype.J; po.prototype.unByKey = po.prototype.M; E.prototype.getFirstCoordinate = E.prototype.Fb; E.prototype.getLastCoordinate = E.prototype.Gb; E.prototype.getLayout = E.prototype.Hb; E.prototype.rotate = E.prototype.rotate; E.prototype.getClosestPoint = E.prototype.xb; E.prototype.getExtent = E.prototype.G; E.prototype.simplify = E.prototype.Ab; E.prototype.transform = E.prototype.hb; E.prototype.get = E.prototype.get; E.prototype.getKeys = E.prototype.O; E.prototype.getProperties = E.prototype.P; E.prototype.set = E.prototype.set; E.prototype.setProperties = E.prototype.C; E.prototype.unset = E.prototype.R; E.prototype.changed = E.prototype.u; E.prototype.dispatchEvent = E.prototype.b; E.prototype.getRevision = E.prototype.K; E.prototype.on = E.prototype.I; E.prototype.once = E.prototype.L; E.prototype.un = E.prototype.J; E.prototype.unByKey = E.prototype.M; F.prototype.getFirstCoordinate = F.prototype.Fb; F.prototype.getLastCoordinate = F.prototype.Gb; F.prototype.getLayout = F.prototype.Hb; F.prototype.rotate = F.prototype.rotate; F.prototype.getClosestPoint = F.prototype.xb; F.prototype.getExtent = F.prototype.G; F.prototype.simplify = F.prototype.Ab; F.prototype.transform = F.prototype.hb; F.prototype.get = F.prototype.get; F.prototype.getKeys = F.prototype.O; F.prototype.getProperties = F.prototype.P; F.prototype.set = F.prototype.set; F.prototype.setProperties = F.prototype.C; F.prototype.unset = F.prototype.R; F.prototype.changed = F.prototype.u; F.prototype.dispatchEvent = F.prototype.b; F.prototype.getRevision = F.prototype.K; F.prototype.on = F.prototype.I; F.prototype.once = F.prototype.L; F.prototype.un = F.prototype.J; F.prototype.unByKey = F.prototype.M; Yo.prototype.readFeatures = Yo.prototype.Ea; Zo.prototype.readFeatures = Zo.prototype.Ea; Zo.prototype.readFeatures = Zo.prototype.Ea; Pf.prototype.get = Pf.prototype.get; Pf.prototype.getKeys = Pf.prototype.O; Pf.prototype.getProperties = Pf.prototype.P; Pf.prototype.set = Pf.prototype.set; Pf.prototype.setProperties = Pf.prototype.C; Pf.prototype.unset = Pf.prototype.R; Pf.prototype.changed = Pf.prototype.u; Pf.prototype.dispatchEvent = Pf.prototype.b; Pf.prototype.getRevision = Pf.prototype.K; Pf.prototype.on = Pf.prototype.I; Pf.prototype.once = Pf.prototype.L; Pf.prototype.un = Pf.prototype.J; Pf.prototype.unByKey = Pf.prototype.M; sg.prototype.getMap = sg.prototype.i; sg.prototype.setMap = sg.prototype.setMap; sg.prototype.setTarget = sg.prototype.c; sg.prototype.get = sg.prototype.get; sg.prototype.getKeys = sg.prototype.O; sg.prototype.getProperties = sg.prototype.P; sg.prototype.set = sg.prototype.set; sg.prototype.setProperties = sg.prototype.C; sg.prototype.unset = sg.prototype.R; sg.prototype.changed = sg.prototype.u; sg.prototype.dispatchEvent = sg.prototype.b; sg.prototype.getRevision = sg.prototype.K; sg.prototype.on = sg.prototype.I; sg.prototype.once = sg.prototype.L; sg.prototype.un = sg.prototype.J; sg.prototype.unByKey = sg.prototype.M; Dg.prototype.getMap = Dg.prototype.i; Dg.prototype.setMap = Dg.prototype.setMap; Dg.prototype.setTarget = Dg.prototype.c; Dg.prototype.get = Dg.prototype.get; Dg.prototype.getKeys = Dg.prototype.O; Dg.prototype.getProperties = Dg.prototype.P; Dg.prototype.set = Dg.prototype.set; Dg.prototype.setProperties = Dg.prototype.C; Dg.prototype.unset = Dg.prototype.R; Dg.prototype.changed = Dg.prototype.u; Dg.prototype.dispatchEvent = Dg.prototype.b; Dg.prototype.getRevision = Dg.prototype.K; Dg.prototype.on = Dg.prototype.I; Dg.prototype.once = Dg.prototype.L; Dg.prototype.un = Dg.prototype.J; Dg.prototype.unByKey = Dg.prototype.M; Eg.prototype.getMap = Eg.prototype.i; Eg.prototype.setMap = Eg.prototype.setMap; Eg.prototype.setTarget = Eg.prototype.c; Eg.prototype.get = Eg.prototype.get; Eg.prototype.getKeys = Eg.prototype.O; Eg.prototype.getProperties = Eg.prototype.P; Eg.prototype.set = Eg.prototype.set; Eg.prototype.setProperties = Eg.prototype.C; Eg.prototype.unset = Eg.prototype.R; Eg.prototype.changed = Eg.prototype.u; Eg.prototype.dispatchEvent = Eg.prototype.b; Eg.prototype.getRevision = Eg.prototype.K; Eg.prototype.on = Eg.prototype.I; Eg.prototype.once = Eg.prototype.L; Eg.prototype.un = Eg.prototype.J; Eg.prototype.unByKey = Eg.prototype.M; On.prototype.getMap = On.prototype.i; On.prototype.setMap = On.prototype.setMap; On.prototype.setTarget = On.prototype.c; On.prototype.get = On.prototype.get; On.prototype.getKeys = On.prototype.O; On.prototype.getProperties = On.prototype.P; On.prototype.set = On.prototype.set; On.prototype.setProperties = On.prototype.C; On.prototype.unset = On.prototype.R; On.prototype.changed = On.prototype.u; On.prototype.dispatchEvent = On.prototype.b; On.prototype.getRevision = On.prototype.K; On.prototype.on = On.prototype.I; On.prototype.once = On.prototype.L; On.prototype.un = On.prototype.J; On.prototype.unByKey = On.prototype.M; vg.prototype.getMap = vg.prototype.i; vg.prototype.setMap = vg.prototype.setMap; vg.prototype.setTarget = vg.prototype.c; vg.prototype.get = vg.prototype.get; vg.prototype.getKeys = vg.prototype.O; vg.prototype.getProperties = vg.prototype.P; vg.prototype.set = vg.prototype.set; vg.prototype.setProperties = vg.prototype.C; vg.prototype.unset = vg.prototype.R; vg.prototype.changed = vg.prototype.u; vg.prototype.dispatchEvent = vg.prototype.b; vg.prototype.getRevision = vg.prototype.K; vg.prototype.on = vg.prototype.I; vg.prototype.once = vg.prototype.L; vg.prototype.un = vg.prototype.J; vg.prototype.unByKey = vg.prototype.M; Tn.prototype.getMap = Tn.prototype.i; Tn.prototype.setMap = Tn.prototype.setMap; Tn.prototype.setTarget = Tn.prototype.c; Tn.prototype.get = Tn.prototype.get; Tn.prototype.getKeys = Tn.prototype.O; Tn.prototype.getProperties = Tn.prototype.P; Tn.prototype.set = Tn.prototype.set; Tn.prototype.setProperties = Tn.prototype.C; Tn.prototype.unset = Tn.prototype.R; Tn.prototype.changed = Tn.prototype.u; Tn.prototype.dispatchEvent = Tn.prototype.b; Tn.prototype.getRevision = Tn.prototype.K; Tn.prototype.on = Tn.prototype.I; Tn.prototype.once = Tn.prototype.L; Tn.prototype.un = Tn.prototype.J; Tn.prototype.unByKey = Tn.prototype.M; xg.prototype.getMap = xg.prototype.i; xg.prototype.setMap = xg.prototype.setMap; xg.prototype.setTarget = xg.prototype.c; xg.prototype.get = xg.prototype.get; xg.prototype.getKeys = xg.prototype.O; xg.prototype.getProperties = xg.prototype.P; xg.prototype.set = xg.prototype.set; xg.prototype.setProperties = xg.prototype.C; xg.prototype.unset = xg.prototype.R; xg.prototype.changed = xg.prototype.u; xg.prototype.dispatchEvent = xg.prototype.b; xg.prototype.getRevision = xg.prototype.K; xg.prototype.on = xg.prototype.I; xg.prototype.once = xg.prototype.L; xg.prototype.un = xg.prototype.J; xg.prototype.unByKey = xg.prototype.M; Xn.prototype.getMap = Xn.prototype.i; Xn.prototype.setMap = Xn.prototype.setMap; Xn.prototype.setTarget = Xn.prototype.c; Xn.prototype.get = Xn.prototype.get; Xn.prototype.getKeys = Xn.prototype.O; Xn.prototype.getProperties = Xn.prototype.P; Xn.prototype.set = Xn.prototype.set; Xn.prototype.setProperties = Xn.prototype.C; Xn.prototype.unset = Xn.prototype.R; Xn.prototype.changed = Xn.prototype.u; Xn.prototype.dispatchEvent = Xn.prototype.b; Xn.prototype.getRevision = Xn.prototype.K; Xn.prototype.on = Xn.prototype.I; Xn.prototype.once = Xn.prototype.L; Xn.prototype.un = Xn.prototype.J; Xn.prototype.unByKey = Xn.prototype.M; bo.prototype.getMap = bo.prototype.i; bo.prototype.setMap = bo.prototype.setMap; bo.prototype.setTarget = bo.prototype.c; bo.prototype.get = bo.prototype.get; bo.prototype.getKeys = bo.prototype.O; bo.prototype.getProperties = bo.prototype.P; bo.prototype.set = bo.prototype.set; bo.prototype.setProperties = bo.prototype.C; bo.prototype.unset = bo.prototype.R; bo.prototype.changed = bo.prototype.u; bo.prototype.dispatchEvent = bo.prototype.b; bo.prototype.getRevision = bo.prototype.K; bo.prototype.on = bo.prototype.I; bo.prototype.once = bo.prototype.L; bo.prototype.un = bo.prototype.J; bo.prototype.unByKey = bo.prototype.M;
    return OPENLAYERS.ol;
}));