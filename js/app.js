! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        o = n.slice,
        i = n.flat ? function(t) {
            return n.flat.call(t)
        } : function(t) {
            return n.concat.apply([], t)
        },
        a = n.push,
        l = n.indexOf,
        s = {},
        u = s.toString,
        c = s.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        h = {},
        p = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
        },
        y = function(t) {
            return null != t && t === t.window
        },
        m = t.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function g(t, e, n) {
        var r, o, i = (n = n || m).createElement("script");
        if (i.text = t, e)
            for (r in v)(o = e[r] || e.getAttribute && e.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? s[u.call(t)] || "object" : typeof t
    }
    var _ = "3.6.3",
        w = function(t, e) {
            return new w.fn.init(t, e)
        };

    function x(t) {
        var e = !!t && "length" in t && t.length,
            n = b(t);
        return !p(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = w.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return w.each(this, t)
        },
        map: function(t) {
            return this.pushStack(w.map(this, (function(e, n) {
                return t.call(e, n, e)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(w.grep(this, (function(t, e) {
                return (e + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(w.grep(this, (function(t, e) {
                return e % 2
            })))
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var t, e, n, r, o, i, a = arguments[0] || {},
            l = 1,
            s = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || p(a) || (a = {}), l === s && (a = this, l--); l < s; l++)
            if (null != (t = arguments[l]))
                for (e in t) r = t[e], "__proto__" !== e && a !== r && (u && r && (w.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[e], i = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, a[e] = w.extend(u, i, r)) : void 0 !== r && (a[e] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t) || (e = r(t)) && ("function" != typeof(n = c.call(e, "constructor") && e.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t, e, n) {
            g(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function(t, e) {
            var n, r = 0;
            if (x(t))
                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (x(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : l.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, o = t.length; r < n; r++) t[o++] = e[r];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var r = [], o = 0, i = t.length, a = !n; o < i; o++) !e(t[o], o) !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, n) {
            var r, o, a = 0,
                l = [];
            if (x(t))
                for (r = t.length; a < r; a++) null != (o = e(t[a], a, n)) && l.push(o);
            else
                for (a in t) null != (o = e(t[a], a, n)) && l.push(o);
            return i(l)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
        s["[object " + e + "]"] = e.toLowerCase()
    }));
    var E = function(t) {
        var e, n, r, o, i, a, l, s, u, c, f, d, h, p, y, m, v, g, b, _ = "sizzle" + 1 * new Date,
            w = t.document,
            x = 0,
            E = 0,
            O = st(),
            k = st(),
            T = st(),
            S = st(),
            A = function(t, e) {
                return t === e && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            C = [],
            j = C.pop,
            q = C.push,
            L = C.push,
            P = C.slice,
            D = function(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n] === e) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]",
            H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            U = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            W = new RegExp("^" + R + "*," + R + "*"),
            z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            K = new RegExp(R + "|>"),
            V = new RegExp(H),
            Q = new RegExp("^" + M + "$"),
            $ = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            nt = function(t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ot = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            it = function() {
                d()
            },
            at = _t((function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(C = P.call(w.childNodes), w.childNodes), C[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: C.length ? function(t, e) {
                    q.apply(t, P.call(e))
                } : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }

        function lt(t, e, r, o) {
            var i, l, u, c, f, p, v, g = e && e.ownerDocument,
                w = e ? e.nodeType : 9;
            if (r = r || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!o && (d(e), e = e || h, y)) {
                if (11 !== w && (f = J.exec(t)))
                    if (i = f[1]) {
                        if (9 === w) {
                            if (!(u = e.getElementById(i))) return r;
                            if (u.id === i) return r.push(u), r
                        } else if (g && (u = g.getElementById(i)) && b(e, u) && u.id === i) return r.push(u), r
                    } else {
                        if (f[2]) return L.apply(r, e.getElementsByTagName(t)), r;
                        if ((i = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(r, e.getElementsByClassName(i)), r
                    }
                if (n.qsa && !S[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                    if (v = t, g = e, 1 === w && (K.test(t) || z.test(t))) {
                        for ((g = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(rt, ot) : e.setAttribute("id", c = _)), l = (p = a(t)).length; l--;) p[l] = (c ? "#" + c : ":scope") + " " + bt(p[l]);
                        v = p.join(",")
                    }
                    try {
                        if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + v + "))")) throw new Error;
                        return L.apply(r, g.querySelectorAll(v)), r
                    } catch (e) {
                        S(t, !0)
                    } finally {
                        c === _ && e.removeAttribute("id")
                    }
                }
            }
            return s(t.replace(U, "$1"), e, r, o)
        }

        function st() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
        }

        function ut(t) {
            return t[_] = !0, t
        }

        function ct(t) {
            var e = h.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ft(t, e) {
            for (var n = t.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = e
        }

        function dt(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ht(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pt(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function yt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function mt(t) {
            return ut((function(e) {
                return e = +e, ut((function(n, r) {
                    for (var o, i = t([], n.length, e), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                }))
            }))
        }

        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = lt.support = {}, i = lt.isXML = function(t) {
                var e = t && t.namespaceURI,
                    n = t && (t.ownerDocument || t).documentElement;
                return !Y.test(e || n && n.nodeName || "HTML")
            }, d = lt.setDocument = function(t) {
                var e, o, a = t ? t.ownerDocument || t : w;
                return a != h && 9 === a.nodeType && a.documentElement && (p = (h = a).documentElement, y = !i(h), w != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.scope = ct((function(t) {
                    return p.appendChild(t).appendChild(h.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                })), n.cssSupportsSelector = ct((function() {
                    return CSS.supports("selector(*)") && h.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                })), n.attributes = ct((function(t) {
                    return t.className = "i", !t.getAttribute("className")
                })), n.getElementsByTagName = ct((function(t) {
                    return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                })), n.getElementsByClassName = G.test(h.getElementsByClassName), n.getById = ct((function(t) {
                    return p.appendChild(t).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                })), n.getById ? (r.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, r.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && y) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, r.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && y) {
                        var n, r, o, i = e.getElementById(t);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === t) return [i];
                            for (o = e.getElementsByName(t), r = 0; i = o[r++];)
                                if ((n = i.getAttributeNode("id")) && n.value === t) return [i]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, r = [],
                        o = 0,
                        i = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, r.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && y) return e.getElementsByClassName(t)
                }, v = [], m = [], (n.qsa = G.test(h.querySelectorAll)) && (ct((function(t) {
                    var e;
                    p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (e = h.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                })), ct((function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = h.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = G.test(g = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct((function(t) {
                    n.disconnectedMatch = g.call(t, "*"), g.call(t, "[s!='']:x"), v.push("!=", H)
                })), n.cssSupportsSelector || m.push(":has"), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(p.compareDocumentPosition), b = e || G.test(p.contains) ? function(t, e) {
                    var n = 9 === t.nodeType && t.documentElement || t,
                        r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, A = e ? function(t, e) {
                    if (t === e) return f = !0, 0;
                    var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return r || (1 & (r = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t == h || t.ownerDocument == w && b(w, t) ? -1 : e == h || e.ownerDocument == w && b(w, e) ? 1 : c ? D(c, t) - D(c, e) : 0 : 4 & r ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return f = !0, 0;
                    var n, r = 0,
                        o = t.parentNode,
                        i = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !i) return t == h ? -1 : e == h ? 1 : o ? -1 : i ? 1 : c ? D(c, t) - D(c, e) : 0;
                    if (o === i) return dt(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[r] === l[r];) r++;
                    return r ? dt(a[r], l[r]) : a[r] == w ? -1 : l[r] == w ? 1 : 0
                }), h
            }, lt.matches = function(t, e) {
                return lt(t, null, null, e)
            }, lt.matchesSelector = function(t, e) {
                if (d(t), n.matchesSelector && y && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                    var r = g.call(t, e);
                    if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                } catch (t) {
                    S(e, !0)
                }
                return 0 < lt(e, h, null, [t]).length
            }, lt.contains = function(t, e) {
                return (t.ownerDocument || t) != h && d(t), b(t, e)
            }, lt.attr = function(t, e) {
                (t.ownerDocument || t) != h && d(t);
                var o = r.attrHandle[e.toLowerCase()],
                    i = o && N.call(r.attrHandle, e.toLowerCase()) ? o(t, e, !y) : void 0;
                return void 0 !== i ? i : n.attributes || !y ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, lt.escape = function(t) {
                return (t + "").replace(rt, ot)
            }, lt.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, lt.uniqueSort = function(t) {
                var e, r = [],
                    o = 0,
                    i = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(A), f) {
                    for (; e = t[i++];) e === t[i] && (o = r.push(i));
                    for (; o--;) t.splice(r[o], 1)
                }
                return c = null, t
            }, o = lt.getText = function(t) {
                var e, n = "",
                    r = 0,
                    i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                    } else if (3 === i || 4 === i) return t.nodeValue
                } else
                    for (; e = t[r++];) n += o(e);
                return n
            }, (r = lt.selectors = {
                cacheLength: 50,
                createPseudo: ut,
                match: $,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || lt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && lt.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return $.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = O[t + " "];
                        return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && O(t, (function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(t, e, n) {
                        return function(r) {
                            var o = lt.attr(r, t);
                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && -1 < o.indexOf(n) : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? -1 < (" " + o.replace(F, " ") + " ").indexOf(n) : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, r, o) {
                        var i = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            l = "of-type" === e;
                        return 1 === r && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, s) {
                            var u, c, f, d, h, p, y = i !== a ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = l && e.nodeName.toLowerCase(),
                                g = !s && !l,
                                b = !1;
                            if (m) {
                                if (i) {
                                    for (; y;) {
                                        for (d = e; d = d[y];)
                                            if (l ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = y = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && g) {
                                    for (b = (h = (u = (c = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === x && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[y] || (b = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            c[t] = [x, h, b];
                                            break
                                        }
                                } else if (g && (b = h = (u = (c = (f = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === x && u[1]), !1 === b)
                                    for (;
                                        (d = ++h && d && d[y] || (b = h = 0) || p.pop()) && ((l ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (g && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [x, b]), d !== e)););
                                return (b -= o) === r || b % r == 0 && 0 <= b / r
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, o = r.pseudos[t] || r.setFilters[t.toLowerCase()] || lt.error("unsupported pseudo: " + t);
                        return o[_] ? o(e) : 1 < o.length ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function(t, n) {
                            for (var r, i = o(t, e), a = i.length; a--;) t[r = D(t, i[a])] = !(n[r] = i[a])
                        })) : function(t) {
                            return o(t, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: ut((function(t) {
                        var e = [],
                            n = [],
                            r = l(t.replace(U, "$1"));
                        return r[_] ? ut((function(t, e, n, o) {
                            for (var i, a = r(t, null, o, []), l = t.length; l--;)(i = a[l]) && (t[l] = !(e[l] = i))
                        })) : function(t, o, i) {
                            return e[0] = t, r(e, null, i, n), e[0] = null, !n.pop()
                        }
                    })),
                    has: ut((function(t) {
                        return function(e) {
                            return 0 < lt(t, e).length
                        }
                    })),
                    contains: ut((function(t) {
                        return t = t.replace(et, nt),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    })),
                    lang: ut((function(t) {
                        return Q.test(t || "") || lt.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    })),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: yt(!1),
                    disabled: yt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !r.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Z.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: mt((function() {
                        return [0]
                    })),
                    last: mt((function(t, e) {
                        return [e - 1]
                    })),
                    eq: mt((function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    })),
                    even: mt((function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    })),
                    odd: mt((function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    })),
                    lt: mt((function(t, e, n) {
                        for (var r = n < 0 ? n + e : e < n ? e : n; 0 <= --r;) t.push(r);
                        return t
                    })),
                    gt: mt((function(t, e, n) {
                        for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                        return t
                    }))
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[e] = ht(e);
        for (e in {
                submit: !0,
                reset: !0
            }) r.pseudos[e] = pt(e);

        function gt() {}

        function bt(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r
        }

        function _t(t, e, n) {
            var r = e.dir,
                o = e.next,
                i = o || r,
                a = n && "parentNode" === i,
                l = E++;
            return e.first ? function(e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || a) return t(e, n, o);
                return !1
            } : function(e, n, s) {
                var u, c, f, d = [x, l];
                if (s) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || a) && t(e, n, s)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || a)
                            if (c = (f = e[_] || (e[_] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[r] || e;
                            else {
                                if ((u = c[i]) && u[0] === x && u[1] === l) return d[2] = u[2];
                                if ((c[i] = d)[2] = t(e, n, s)) return !0
                            } return !1
            }
        }

        function wt(t) {
            return 1 < t.length ? function(e, n, r) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function xt(t, e, n, r, o) {
            for (var i, a = [], l = 0, s = t.length, u = null != e; l < s; l++)(i = t[l]) && (n && !n(i, r, o) || (a.push(i), u && e.push(l)));
            return a
        }

        function Et(t, e, n, r, o, i) {
            return r && !r[_] && (r = Et(r)), o && !o[_] && (o = Et(o, i)), ut((function(i, a, l, s) {
                var u, c, f, d = [],
                    h = [],
                    p = a.length,
                    y = i || function(t, e, n) {
                        for (var r = 0, o = e.length; r < o; r++) lt(t, e[r], n);
                        return n
                    }(e || "*", l.nodeType ? [l] : l, []),
                    m = !t || !i && e ? y : xt(y, d, t, l, s),
                    v = n ? o || (i ? t : p || r) ? [] : a : m;
                if (n && n(m, v, l, s), r)
                    for (u = xt(v, h), r(u, [], l, s), c = u.length; c--;)(f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                            o(null, v = [], u, s)
                        }
                        for (c = v.length; c--;)(f = v[c]) && -1 < (u = o ? D(i, f) : d[c]) && (i[u] = !(a[u] = f))
                    }
                } else v = xt(v === a ? v.splice(p, v.length) : v), o ? o(null, a, v, s) : L.apply(a, v)
            }))
        }

        function Ot(t) {
            for (var e, n, o, i = t.length, a = r.relative[t[0].type], l = a || r.relative[" "], s = a ? 1 : 0, c = _t((function(t) {
                    return t === e
                }), l, !0), f = _t((function(t) {
                    return -1 < D(e, t)
                }), l, !0), d = [function(t, n, r) {
                    var o = !a && (r || n !== u) || ((e = n).nodeType ? c(t, n, r) : f(t, n, r));
                    return e = null, o
                }]; s < i; s++)
                if (n = r.relative[t[s].type]) d = [_t(wt(d), n)];
                else {
                    if ((n = r.filter[t[s].type].apply(null, t[s].matches))[_]) {
                        for (o = ++s; o < i && !r.relative[t[o].type]; o++);
                        return Et(1 < s && wt(d), 1 < s && bt(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(U, "$1"), n, s < o && Ot(t.slice(s, o)), o < i && Ot(t = t.slice(o)), o < i && bt(t))
                    }
                    d.push(n)
                }
            return wt(d)
        }
        return gt.prototype = r.filters = r.pseudos, r.setFilters = new gt, a = lt.tokenize = function(t, e) {
            var n, o, i, a, l, s, u, c = k[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (l = t, s = [], u = r.preFilter; l;) {
                for (a in n && !(o = W.exec(l)) || (o && (l = l.slice(o[0].length) || l), s.push(i = [])), n = !1, (o = z.exec(l)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace(U, " ")
                    }), l = l.slice(n.length)), r.filter) !(o = $[a].exec(l)) || u[a] && !(o = u[a](o)) || (n = o.shift(), i.push({
                    value: n,
                    type: a,
                    matches: o
                }), l = l.slice(n.length));
                if (!n) break
            }
            return e ? l.length : l ? lt.error(t) : k(t, s).slice(0)
        }, l = lt.compile = function(t, e) {
            var n, o, i, l, s, c, f = [],
                p = [],
                m = T[t + " "];
            if (!m) {
                for (e || (e = a(t)), n = e.length; n--;)(m = Ot(e[n]))[_] ? f.push(m) : p.push(m);
                (m = T(t, (o = p, l = 0 < (i = f).length, s = 0 < o.length, c = function(t, e, n, a, c) {
                    var f, p, m, v = 0,
                        g = "0",
                        b = t && [],
                        _ = [],
                        w = u,
                        E = t || s && r.find.TAG("*", c),
                        O = x += null == w ? 1 : Math.random() || .1,
                        k = E.length;
                    for (c && (u = e == h || e || c); g !== k && null != (f = E[g]); g++) {
                        if (s && f) {
                            for (p = 0, e || f.ownerDocument == h || (d(f), n = !y); m = o[p++];)
                                if (m(f, e || h, n)) {
                                    a.push(f);
                                    break
                                }
                            c && (x = O)
                        }
                        l && ((f = !m && f) && v--, t && b.push(f))
                    }
                    if (v += g, l && g !== v) {
                        for (p = 0; m = i[p++];) m(b, _, e, n);
                        if (t) {
                            if (0 < v)
                                for (; g--;) b[g] || _[g] || (_[g] = j.call(a));
                            _ = xt(_)
                        }
                        L.apply(a, _), c && !t && 0 < _.length && 1 < v + i.length && lt.uniqueSort(a)
                    }
                    return c && (x = O, u = w), b
                }, l ? ut(c) : c))).selector = t
            }
            return m
        }, s = lt.select = function(t, e, n, o) {
            var i, s, u, c, f, d = "function" == typeof t && t,
                h = !o && a(t = d.selector || t);
            if (n = n || [], 1 === h.length) {
                if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (u = s[0]).type && 9 === e.nodeType && y && r.relative[s[1].type]) {
                    if (!(e = (r.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                    d && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (i = $.needsContext.test(t) ? 0 : s.length; i-- && (u = s[i], !r.relative[c = u.type]);)
                    if ((f = r.find[c]) && (o = f(u.matches[0].replace(et, nt), tt.test(s[0].type) && vt(e.parentNode) || e))) {
                        if (s.splice(i, 1), !(t = o.length && bt(s))) return L.apply(n, o), n;
                        break
                    }
            }
            return (d || l(t, h))(o, e, !y, n, !e || tt.test(t) && vt(e.parentNode) || e), n
        }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ct((function(t) {
            return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
        })), ct((function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        })) || ft("type|href|height|width", (function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        })), n.attributes && ct((function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        })) || ft("value", (function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        })), ct((function(t) {
            return null == t.getAttribute("disabled")
        })) || ft(I, (function(t, e, n) {
            var r;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        })), lt
    }(t);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var O = function(t, e, n) {
            for (var r = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && w(t).is(n)) break;
                    r.push(t)
                }
            return r
        },
        k = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        T = w.expr.match.needsContext;

    function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(t, e, n) {
        return p(e) ? w.grep(t, (function(t, r) {
            return !!e.call(t, r, t) !== n
        })) : e.nodeType ? w.grep(t, (function(t) {
            return t === e !== n
        })) : "string" != typeof e ? w.grep(t, (function(t) {
            return -1 < l.call(e, t) !== n
        })) : w.filter(e, t, n)
    }
    w.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? w.find.matchesSelector(r, t) ? [r] : [] : w.find.matches(t, w.grep(e, (function(t) {
            return 1 === t.nodeType
        })))
    }, w.fn.extend({
        find: function(t) {
            var e, n, r = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(w(t).filter((function() {
                for (e = 0; e < r; e++)
                    if (w.contains(o[e], this)) return !0
            })));
            for (n = this.pushStack([]), e = 0; e < r; e++) w.find(t, o[e], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(N(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(N(this, t || [], !0))
        },
        is: function(t) {
            return !!N(this, "string" == typeof t && T.test(t) ? w(t) : t || [], !1).length
        }
    });
    var C, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(t, e, n) {
        var r, o;
        if (!t) return this;
        if (n = n || C, "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : j.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), A.test(r[1]) && w.isPlainObject(e))
                    for (r in e) p(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (o = m.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : p(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, C = w(m);
    var q = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    w.fn.extend({
        has: function(t) {
            var e = w(t, this),
                n = e.length;
            return this.filter((function() {
                for (var t = 0; t < n; t++)
                    if (w.contains(this, e[t])) return !0
            }))
        },
        closest: function(t, e) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof t && w(t);
            if (!T.test(t))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(1 < i.length ? w.uniqueSort(i) : i)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(w(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), w.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return O(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return O(t, "parentNode", n)
        },
        next: function(t) {
            return P(t, "nextSibling")
        },
        prev: function(t) {
            return P(t, "previousSibling")
        },
        nextAll: function(t) {
            return O(t, "nextSibling")
        },
        prevAll: function(t) {
            return O(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return O(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return O(t, "previousSibling", n)
        },
        siblings: function(t) {
            return k((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return k(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && r(t.contentDocument) ? t.contentDocument : (S(t, "tool") && (t = t.content || t), w.merge([], t.childNodes))
        }
    }, (function(t, e) {
        w.fn[t] = function(n, r) {
            var o = w.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (o = w.filter(r, o)), 1 < this.length && (L[t] || w.uniqueSort(o), q.test(t) && o.reverse()), this.pushStack(o)
        }
    }));
    var D = /[^\x20\t\r\n\f]+/g;

    function I(t) {
        return t
    }

    function R(t) {
        throw t
    }

    function M(t, e, n, r) {
        var o;
        try {
            t && p(o = t.promise) ? o.call(t).done(e).fail(n) : t && p(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(r))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    w.Callbacks = function(t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, w.each(e.match(D) || [], (function(t, e) {
            n[e] = !0
        })), n) : w.extend({}, t);
        var r, o, i, a, l = [],
            s = [],
            u = -1,
            c = function() {
                for (a = a || t.once, i = r = !0; s.length; u = -1)
                    for (o = s.shift(); ++u < l.length;) !1 === l[u].apply(o[0], o[1]) && t.stopOnFalse && (u = l.length, o = !1);
                t.memory || (o = !1), r = !1, a && (l = o ? [] : "")
            },
            f = {
                add: function() {
                    return l && (o && !r && (u = l.length - 1, s.push(o)), function e(n) {
                        w.each(n, (function(n, r) {
                            p(r) ? t.unique && f.has(r) || l.push(r) : r && r.length && "string" !== b(r) && e(r)
                        }))
                    }(arguments), o && !r && c()), this
                },
                remove: function() {
                    return w.each(arguments, (function(t, e) {
                        for (var n; - 1 < (n = w.inArray(e, l, n));) l.splice(n, 1), n <= u && u--
                    })), this
                },
                has: function(t) {
                    return t ? -1 < w.inArray(t, l) : 0 < l.length
                },
                empty: function() {
                    return l && (l = []), this
                },
                disable: function() {
                    return a = s = [], l = o = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = s = [], o || r || (l = o = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(t, e) {
                    return a || (e = [t, (e = e || []).slice ? e.slice() : e], s.push(e), r || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return f
    }, w.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return w.Deferred((function(e) {
                            w.each(n, (function(n, r) {
                                var o = p(t[r[4]]) && t[r[4]];
                                i[r[1]]((function() {
                                    var t = o && o.apply(this, arguments);
                                    t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[r[0] + "With"](this, o ? [t] : arguments)
                                }))
                            })), t = null
                        })).promise()
                    },
                    then: function(e, r, o) {
                        var i = 0;

                        function a(e, n, r, o) {
                            return function() {
                                var l = this,
                                    s = arguments,
                                    u = function() {
                                        var t, u;
                                        if (!(e < i)) {
                                            if ((t = r.apply(l, s)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = t && ("object" == typeof t || "function" == typeof t) && t.then, p(u) ? o ? u.call(t, a(i, n, I, o), a(i, n, R, o)) : (i++, u.call(t, a(i, n, I, o), a(i, n, R, o), a(i, n, I, n.notifyWith))) : (r !== I && (l = void 0, s = [t]), (o || n.resolveWith)(l, s))
                                        }
                                    },
                                    c = o ? u : function() {
                                        try {
                                            u()
                                        } catch (t) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), i <= e + 1 && (r !== R && (l = void 0, s = [t]), n.rejectWith(l, s))
                                        }
                                    };
                                e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }
                        return w.Deferred((function(t) {
                            n[0][3].add(a(0, t, p(o) ? o : I, t.notifyWith)), n[1][3].add(a(0, t, p(e) ? e : I)), n[2][3].add(a(0, t, p(r) ? r : R))
                        })).promise()
                    },
                    promise: function(t) {
                        return null != t ? w.extend(t, o) : o
                    }
                },
                i = {};
            return w.each(n, (function(t, e) {
                var a = e[2],
                    l = e[5];
                o[e[1]] = a.add, l && a.add((function() {
                    r = l
                }), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), i[e[0]] = function() {
                    return i[e[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[e[0] + "With"] = a.fireWith
            })), o.promise(i), e && e.call(i, i), i
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                l = function(t) {
                    return function(n) {
                        r[t] = this, i[t] = 1 < arguments.length ? o.call(arguments) : n, --e || a.resolveWith(r, i)
                    }
                };
            if (e <= 1 && (M(t, a.done(l(n)).resolve, a.reject, !e), "pending" === a.state() || p(i[n] && i[n].then))) return a.then();
            for (; n--;) M(i[n], l(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && B.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, w.readyException = function(e) {
        t.setTimeout((function() {
            throw e
        }))
    };
    var H = w.Deferred();

    function F() {
        m.removeEventListener("DOMContentLoaded", F), t.removeEventListener("load", F), w.ready()
    }
    w.fn.ready = function(t) {
        return H.then(t).catch((function(t) {
            w.readyException(t)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || H.resolveWith(m, [w])
        }
    }), w.ready.then = H.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", F), t.addEventListener("load", F));
    var U = function(t, e, n, r, o, i, a) {
            var l = 0,
                s = t.length,
                u = null == n;
            if ("object" === b(n))
                for (l in o = !0, n) U(t, e, l, n[l], !0, i, a);
            else if (void 0 !== r && (o = !0, p(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(w(t), n)
                })), e))
                for (; l < s; l++) e(t[l], n, a ? r : r.call(t[l], l, e(t[l], n)));
            return o ? t : u ? e.call(t) : s ? e(t[0], n) : i
        },
        W = /^-ms-/,
        z = /-([a-z])/g;

    function K(t, e) {
        return e.toUpperCase()
    }

    function V(t) {
        return t.replace(W, "ms-").replace(z, K)
    }
    var Q = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function $() {
        this.expando = w.expando + $.uid++
    }
    $.uid = 1, $.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var r, o = this.cache(t);
            if ("string" == typeof e) o[V(e)] = n;
            else
                for (r in e) o[V(r)] = e[r];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(V) : (e = V(e)) in r ? [e] : e.match(D) || []).length;
                    for (; n--;) delete r[e[n]]
                }(void 0 === e || w.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !w.isEmptyObject(e)
        }
    };
    var Y = new $,
        X = new $,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function J(t, e, n) {
        var r, o;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(G, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o)
                } catch (t) {}
                X.set(t, e, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(t) {
            return X.hasData(t) || Y.hasData(t)
        },
        data: function(t, e, n) {
            return X.access(t, e, n)
        },
        removeData: function(t, e) {
            X.remove(t, e)
        },
        _data: function(t, e, n) {
            return Y.access(t, e, n)
        },
        _removeData: function(t, e) {
            Y.remove(t, e)
        }
    }), w.fn.extend({
        data: function(t, e) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === t) {
                if (this.length && (o = X.get(i), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), J(i, r, o[r]));
                    Y.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each((function() {
                X.set(this, t)
            })) : U(this, (function(e) {
                var n;
                if (i && void 0 === e) return void 0 !== (n = X.get(i, t)) || void 0 !== (n = J(i, t)) ? n : void 0;
                this.each((function() {
                    X.set(this, t, e)
                }))
            }), null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each((function() {
                X.remove(this, t)
            }))
        }
    }), w.extend({
        queue: function(t, e, n) {
            var r;
            if (t) return e = (e || "fx") + "queue", r = Y.get(t, e), n && (!r || Array.isArray(n) ? r = Y.access(t, e, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = w.queue(t, e),
                r = n.length,
                o = n.shift(),
                i = w._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === e && n.unshift("inprogress"), delete i.stop, o.call(t, (function() {
                w.dequeue(t, e)
            }), i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Y.get(t, n) || Y.access(t, n, {
                empty: w.Callbacks("once memory").add((function() {
                    Y.remove(t, [e + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                var n = w.queue(this, t, e);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
            }))
        },
        dequeue: function(t) {
            return this.each((function() {
                w.dequeue(this, t)
            }))
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
                o = w.Deferred(),
                i = this,
                a = this.length,
                l = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Y.get(i[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(l));
            return l(), o.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        rt = m.documentElement,
        ot = function(t) {
            return w.contains(t.ownerDocument, t)
        },
        it = {
            composed: !0
        };
    rt.getRootNode && (ot = function(t) {
        return w.contains(t.ownerDocument, t) || t.getRootNode(it) === t.ownerDocument
    });
    var at = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === w.css(t, "display")
    };

    function lt(t, e, n, r) {
        var o, i, a = 20,
            l = r ? function() {
                return r.cur()
            } : function() {
                return w.css(t, e, "")
            },
            s = l(),
            u = n && n[3] || (w.cssNumber[e] ? "" : "px"),
            c = t.nodeType && (w.cssNumber[e] || "px" !== u && +s) && et.exec(w.css(t, e));
        if (c && c[3] !== u) {
            for (s /= 2, u = u || c[3], c = +s || 1; a--;) w.style(t, e, c + u), (1 - i) * (1 - (i = l() / s || .5)) <= 0 && (a = 0), c /= i;
            c *= 2, w.style(t, e, c + u), n = n || []
        }
        return n && (c = +c || +s || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
    }
    var st = {};

    function ut(t, e) {
        for (var n, r, o, i, a, l, s, u = [], c = 0, f = t.length; c < f; c++)(r = t[c]).style && (n = r.style.display, e ? ("none" === n && (u[c] = Y.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && at(r) && (u[c] = (s = a = i = void 0, a = (o = r).ownerDocument, l = o.nodeName, (s = st[l]) || (i = a.body.appendChild(a.createElement(l)), s = w.css(i, "display"), i.parentNode.removeChild(i), "none" === s && (s = "block"), st[l] = s)))) : "none" !== n && (u[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (t[c].style.display = u[c]);
        return t
    }
    w.fn.extend({
        show: function() {
            return ut(this, !0)
        },
        hide: function() {
            return ut(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                at(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var ct, ft, dt = /^(?:checkbox|radio)$/i,
        ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pt = /^$|^module$|\/(?:java|ecma)script/i;
    ct = m.createDocumentFragment().appendChild(m.createElement("div")), (ft = m.createElement("input")).setAttribute("type", "radio"), ft.setAttribute("checked", "checked"), ft.setAttribute("name", "t"), ct.appendChild(ft), h.checkClone = ct.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ct.cloneNode(!0).lastChild.defaultValue, ct.innerHTML = "<option></option>", h.option = !!ct.lastChild;
    var yt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function mt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? w.merge([t], n) : n
    }

    function vt(t, e) {
        for (var n = 0, r = t.length; n < r; n++) Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval"))
    }
    yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, h.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var gt = /<|&#?\w+;/;

    function bt(t, e, n, r, o) {
        for (var i, a, l, s, u, c, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
            if ((i = t[h]) || 0 === i)
                if ("object" === b(i)) w.merge(d, i.nodeType ? [i] : i);
                else if (gt.test(i)) {
            for (a = a || f.appendChild(e.createElement("div")), l = (ht.exec(i) || ["", ""])[1].toLowerCase(), s = yt[l] || yt._default, a.innerHTML = s[1] + w.htmlPrefilter(i) + s[2], c = s[0]; c--;) a = a.lastChild;
            w.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(e.createTextNode(i));
        for (f.textContent = "", h = 0; i = d[h++];)
            if (r && -1 < w.inArray(i, r)) o && o.push(i);
            else if (u = ot(i), a = mt(f.appendChild(i), "script"), u && vt(a), n)
            for (c = 0; i = a[c++];) pt.test(i.type || "") && n.push(i);
        return f
    }
    var _t = /^([^.]*)(?:\.(.+)|)/;

    function wt() {
        return !0
    }

    function xt() {
        return !1
    }

    function Et(t, e) {
        return t === function() {
            try {
                return m.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function Ot(t, e, n, r, o, i) {
        var a, l;
        if ("object" == typeof e) {
            for (l in "string" != typeof n && (r = r || n, n = void 0), e) Ot(t, l, n, r, e[l], i);
            return t
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = xt;
        else if (!o) return t;
        return 1 === i && (a = o, (o = function(t) {
            return w().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), t.each((function() {
            w.event.add(this, e, o, r, n)
        }))
    }

    function kt(t, e, n) {
        n ? (Y.set(t, e, !1), w.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var r, i, a = Y.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (a.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (a = o.call(arguments), Y.set(this, e, a), r = n(this, e), this[e](), a !== (i = Y.get(this, e)) || r ? Y.set(this, e, !1) : i = {}, a !== i) return t.stopImmediatePropagation(), t.preventDefault(), i && i.value
                } else a.length && (Y.set(this, e, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(t, e) && w.event.add(t, e, wt)
    }
    w.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, a, l, s, u, c, f, d, h, p, y, m = Y.get(t);
            if (Q(t))
                for (n.handler && (n = (i = n).handler, o = i.selector), o && w.find.matchesSelector(rt, o), n.guid || (n.guid = w.guid++), (s = m.events) || (s = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(D) || [""]).length; u--;) h = y = (l = _t.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = w.event.special[h] || {}, c = w.extend({
                    type: h,
                    origType: y,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, i), (d = s[h]) || ((d = s[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[h] = !0)
        },
        remove: function(t, e, n, r, o) {
            var i, a, l, s, u, c, f, d, h, p, y, m = Y.hasData(t) && Y.get(t);
            if (m && (s = m.events)) {
                for (u = (e = (e || "").match(D) || [""]).length; u--;)
                    if (h = y = (l = _t.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), h) {
                        for (f = w.event.special[h] || {}, d = s[h = (r ? f.delegateType : f.bindType) || h] || [], l = l[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && y !== c.origType || n && n.guid !== c.guid || l && !l.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || w.removeEvent(t, h, m.handle), delete s[h])
                    } else
                        for (h in s) w.event.remove(t, h + e[u], n, r, !0);
                w.isEmptyObject(s) && Y.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, r, o, i, a, l = new Array(arguments.length),
                s = w.event.fix(t),
                u = (Y.get(this, "events") || Object.create(null))[s.type] || [],
                c = w.event.special[s.type] || {};
            for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = w.event.handlers.call(this, s, u), e = 0;
                    (o = a[e++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(t, e) {
            var n, r, o, i, a, l = [],
                s = e.delegateCount,
                u = t.target;
            if (s && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (i = [], a = {}, n = 0; n < s; n++) void 0 === a[o = (r = e[n]).selector + " "] && (a[o] = r.needsContext ? -1 < w(o, this).index(u) : w.find(o, this, null, [u]).length), a[o] && i.push(r);
                        i.length && l.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return u = this, s < e.length && l.push({
                elem: u,
                handlers: e.slice(s)
            }), l
        },
        addProp: function(t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: p(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[w.expando] ? t : new w.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && S(e, "input") && kt(e, "click", wt), !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && S(e, "input") && kt(e, "click"), !0
                },
                _default: function(t) {
                    var e = t.target;
                    return dt.test(e.type) && e.click && S(e, "input") && Y.get(e, "click") || S(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, w.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, w.Event = function(t, e) {
        if (!(this instanceof w.Event)) return new w.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : xt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: xt,
        isPropagationStopped: xt,
        isImmediatePropagationStopped: xt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        w.event.special[t] = {
            setup: function() {
                return kt(this, t, Et), !1
            },
            trigger: function() {
                return kt(this, t), !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(t, e) {
        w.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === this || w.contains(this, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    })), w.fn.extend({
        on: function(t, e, n, r) {
            return Ot(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return Ot(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, o;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, w(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = xt), this.each((function() {
                w.event.remove(this, t, n, e)
            }))
        }
    });
    var Tt = /<script|<style|<link/i,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        At = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Nt(t, e) {
        return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }

    function Ct(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function jt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function qt(t, e) {
        var n, r, o, i, a, l;
        if (1 === e.nodeType) {
            if (Y.hasData(t) && (l = Y.get(t).events))
                for (o in Y.remove(e, "handle events"), l)
                    for (n = 0, r = l[o].length; n < r; n++) w.event.add(e, o, l[o][n]);
            X.hasData(t) && (i = X.access(t), a = w.extend({}, i), X.set(e, a))
        }
    }

    function Lt(t, e, n, r) {
        e = i(e);
        var o, a, l, s, u, c, f = 0,
            d = t.length,
            y = d - 1,
            m = e[0],
            v = p(m);
        if (v || 1 < d && "string" == typeof m && !h.checkClone && St.test(m)) return t.each((function(o) {
            var i = t.eq(o);
            v && (e[0] = m.call(this, o, i.html())), Lt(i, e, n, r)
        }));
        if (d && (a = (o = bt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
            for (s = (l = w.map(mt(o, "script"), Ct)).length; f < d; f++) u = o, f !== y && (u = w.clone(u, !0, !0), s && w.merge(l, mt(u, "script"))), n.call(t[f], u, f);
            if (s)
                for (c = l[l.length - 1].ownerDocument, w.map(l, jt), f = 0; f < s; f++) u = l[f], pt.test(u.type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, c) : g(u.textContent.replace(At, ""), u, c))
        }
        return t
    }

    function Pt(t, e, n) {
        for (var r, o = e ? w.filter(e, t) : t, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || w.cleanData(mt(r)), r.parentNode && (n && ot(r) && vt(mt(r, "script")), r.parentNode.removeChild(r));
        return t
    }
    w.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, n) {
            var r, o, i, a, l, s, u, c = t.cloneNode(!0),
                f = ot(t);
            if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                for (a = mt(c), r = 0, o = (i = mt(t)).length; r < o; r++) l = i[r], "input" === (u = (s = a[r]).nodeName.toLowerCase()) && dt.test(l.type) ? s.checked = l.checked : "input" !== u && "textarea" !== u || (s.defaultValue = l.defaultValue);
            if (e)
                if (n)
                    for (i = i || mt(t), a = a || mt(c), r = 0, o = i.length; r < o; r++) qt(i[r], a[r]);
                else qt(t, c);
            return 0 < (a = mt(c, "script")).length && vt(a, !f && mt(t, "script")), c
        },
        cleanData: function(t) {
            for (var e, n, r, o = w.event.special, i = 0; void 0 !== (n = t[i]); i++)
                if (Q(n)) {
                    if (e = n[Y.expando]) {
                        if (e.events)
                            for (r in e.events) o[r] ? w.event.remove(n, r) : w.removeEvent(n, r, e.handle);
                        n[Y.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(t) {
            return Pt(this, t, !0)
        },
        remove: function(t) {
            return Pt(this, t)
        },
        text: function(t) {
            return U(this, (function(t) {
                return void 0 === t ? w.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }))
            }), null, t, arguments.length)
        },
        append: function() {
            return Lt(this, arguments, (function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, t).appendChild(t)
            }))
        },
        prepend: function() {
            return Lt(this, arguments, (function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Nt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }))
        },
        before: function() {
            return Lt(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }))
        },
        after: function() {
            return Lt(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }))
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(mt(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                return w.clone(this, t, e)
            }))
        },
        html: function(t) {
            return U(this, (function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Tt.test(t) && !yt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = w.htmlPrefilter(t);
                    try {
                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(mt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }), null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Lt(this, arguments, (function(e) {
                var n = this.parentNode;
                w.inArray(this, t) < 0 && (w.cleanData(mt(this)), n && n.replaceChild(e, this))
            }), t)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(t, e) {
        w.fn[t] = function(t) {
            for (var n, r = [], o = w(t), i = o.length - 1, l = 0; l <= i; l++) n = l === i ? this : this.clone(!0), w(o[l])[e](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Dt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        It = /^--/,
        Rt = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Mt = function(t, e, n) {
            var r, o, i = {};
            for (o in e) i[o] = t.style[o], t.style[o] = e[o];
            for (o in r = n.call(t), e) t.style[o] = i[o];
            return r
        },
        Bt = new RegExp(nt.join("|"), "i"),
        Ht = "[\\x20\\t\\r\\n\\f]",
        Ft = new RegExp("^" + Ht + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ht + "+$", "g");

    function Ut(t, e, n) {
        var r, o, i, a, l = It.test(e),
            s = t.style;
        return (n = n || Rt(t)) && (a = n.getPropertyValue(e) || n[e], l && a && (a = a.replace(Ft, "$1") || void 0), "" !== a || ot(t) || (a = w.style(t, e)), !h.pixelBoxStyles() && Dt.test(a) && Bt.test(e) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function Wt(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (c) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(u).appendChild(c);
                var e = t.getComputedStyle(c);
                r = "1%" !== e.top, s = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", i = 12 === n(c.offsetWidth / 3), rt.removeChild(u), c = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var r, o, i, a, l, s, u = m.createElement("div"),
            c = m.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return e(), o
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, n, r, o;
                return null == l && (e = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", rt.appendChild(e).appendChild(n).appendChild(r), o = t.getComputedStyle(n), l = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, rt.removeChild(e)), l
            }
        }))
    }();
    var zt = ["Webkit", "Moz", "ms"],
        Kt = m.createElement("div").style,
        Vt = {};

    function Qt(t) {
        return w.cssProps[t] || Vt[t] || (t in Kt ? t : Vt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--;)
                if ((t = zt[n] + e) in Kt) return t
        }(t) || t)
    }
    var $t = /^(none|table(?!-c[ea]).+)/,
        Yt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Zt(t, e, n) {
        var r = et.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function Gt(t, e, n, r, o, i) {
        var a = "width" === e ? 1 : 0,
            l = 0,
            s = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (s += w.css(t, n + nt[a], !0, o)), r ? ("content" === n && (s -= w.css(t, "padding" + nt[a], !0, o)), "margin" !== n && (s -= w.css(t, "border" + nt[a] + "Width", !0, o))) : (s += w.css(t, "padding" + nt[a], !0, o), "padding" !== n ? s += w.css(t, "border" + nt[a] + "Width", !0, o) : l += w.css(t, "border" + nt[a] + "Width", !0, o));
        return !r && 0 <= i && (s += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - s - l - .5)) || 0), s
    }

    function Jt(t, e, n) {
        var r = Rt(t),
            o = (!h.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, r),
            i = o,
            a = Ut(t, e, r),
            l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Dt.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && S(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(t, "display", !1, r)) && t.getClientRects().length && (o = "border-box" === w.css(t, "boxSizing", !1, r), (i = l in t) && (a = t[l])), (a = parseFloat(a) || 0) + Gt(t, e, n || (o ? "border" : "content"), i, r, a) + "px"
    }

    function te(t, e, n, r, o) {
        return new te.prototype.init(t, e, n, r, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Ut(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, i, a, l = V(e),
                    s = It.test(e),
                    u = t.style;
                if (s || (e = Qt(l)), a = w.cssHooks[e] || w.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, r)) ? o : u[e];
                "string" == (i = typeof n) && (o = et.exec(n)) && o[1] && (n = lt(t, e, o), i = "number"), null != n && n == n && ("number" !== i || s || (n += o && o[3] || (w.cssNumber[l] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (s ? u.setProperty(e, n) : u[e] = n))
            }
        },
        css: function(t, e, n, r) {
            var o, i, a, l = V(e);
            return It.test(e) || (e = Qt(l)), (a = w.cssHooks[e] || w.cssHooks[l]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = Ut(t, e, r)), "normal" === o && e in Xt && (o = Xt[e]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), w.each(["height", "width"], (function(t, e) {
        w.cssHooks[e] = {
            get: function(t, n, r) {
                if (n) return !$t.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, r) : Mt(t, Yt, (function() {
                    return Jt(t, e, r)
                }))
            },
            set: function(t, n, r) {
                var o, i = Rt(t),
                    a = !h.scrollboxSize() && "absolute" === i.position,
                    l = (a || r) && "border-box" === w.css(t, "boxSizing", !1, i),
                    s = r ? Gt(t, e, r, l, i) : 0;
                return l && a && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(i[e]) - Gt(t, e, "border", !1, i) - .5)), s && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Zt(0, n, s)
            }
        }
    })), w.cssHooks.marginLeft = Wt(h.reliableMarginLeft, (function(t, e) {
        if (e) return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - Mt(t, {
            marginLeft: 0
        }, (function() {
            return t.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(t, e) {
        w.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[t + nt[r] + e] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, "margin" !== t && (w.cssHooks[t + e].set = Zt)
    })), w.fn.extend({
        css: function(t, e) {
            return U(this, (function(t, e, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(e)) {
                    for (r = Rt(t), o = e.length; a < o; a++) i[e[a]] = w.css(t, e[a], !1, r);
                    return i
                }
                return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
            }), t, e, 1 < arguments.length)
        }
    }), ((w.Tween = te).prototype = {
        constructor: te,
        init: function(t, e, n, r, o, i) {
            this.elem = t, this.prop = n, this.easing = o || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = i || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = te.propHooks[this.prop];
            return t && t.get ? t.get(this) : te.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = te.propHooks[this.prop];
            return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : te.propHooks._default.set(this), this
        }
    }).init.prototype = te.prototype, (te.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Qt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = te.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, w.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = te.prototype.init, w.fx.step = {};
    var ee, ne, re, oe, ie = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;

    function le() {
        ne && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(le) : t.setTimeout(le, w.fx.interval), w.fx.tick())
    }

    function se() {
        return t.setTimeout((function() {
            ee = void 0
        })), ee = Date.now()
    }

    function ue(t, e) {
        var n, r = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; r < 4; r += 2 - e) o["margin" + (n = nt[r])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function ce(t, e, n) {
        for (var r, o = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, e, t)) return r
    }

    function fe(t, e, n) {
        var r, o, i = 0,
            a = fe.prefilters.length,
            l = w.Deferred().always((function() {
                delete s.elem
            })),
            s = function() {
                if (o) return !1;
                for (var e = ee || se(), n = Math.max(0, u.startTime + u.duration - e), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++) u.tweens[i].run(r);
                return l.notifyWith(t, [u, r, n]), r < 1 && a ? n : (a || l.notifyWith(t, [u, 1, 0]), l.resolveWith(t, [u]), !1)
            },
            u = l.promise({
                elem: t,
                props: w.extend({}, e),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ee || se(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = w.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(e) {
                    var n = 0,
                        r = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) u.tweens[n].run(1);
                    return e ? (l.notifyWith(t, [u, 1, 0]), l.resolveWith(t, [u, e])) : l.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (function(t, e) {
                var n, r, o, i, a;
                for (n in t)
                    if (o = e[r = V(n)], i = t[n], Array.isArray(i) && (o = i[1], i = t[n] = i[0]), n !== r && (t[r] = i, delete t[n]), (a = w.cssHooks[r]) && "expand" in a)
                        for (n in i = a.expand(i), delete t[r], i) n in t || (t[n] = i[n], e[n] = o);
                    else e[r] = o
            }(c, u.opts.specialEasing); i < a; i++)
            if (r = fe.prefilters[i].call(u, t, c, u.opts)) return p(r.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, ce, u), p(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(s, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    w.Animation = w.extend(fe, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return lt(n.elem, t, et.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            p(t) ? (e = t, t = ["*"]) : t = t.match(D);
            for (var n, r = 0, o = t.length; r < o; r++) n = t[r], fe.tweeners[n] = fe.tweeners[n] || [], fe.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var r, o, i, a, l, s, u, c, f = "width" in e || "height" in e,
                d = this,
                h = {},
                p = t.style,
                y = t.nodeType && at(t),
                m = Y.get(t, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, d.always((function() {
                    d.always((function() {
                        a.unqueued--, w.queue(t, "fx").length || a.empty.fire()
                    }))
                }))), e)
                if (o = e[r], ie.test(o)) {
                    if (delete e[r], i = i || "toggle" === o, o === (y ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r]) continue;
                        y = !0
                    }
                    h[r] = m && m[r] || w.style(t, r)
                }
            if ((s = !w.isEmptyObject(e)) || !w.isEmptyObject(h))
                for (r in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Y.get(t, "display")), "none" === (c = w.css(t, "display")) && (u ? c = u : (ut([t], !0), u = t.style.display || u, c = w.css(t, "display"), ut([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(t, "float") && (s || (d.done((function() {
                        p.display = u
                    })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }))), s = !1, h) s || (m ? "hidden" in m && (y = m.hidden) : m = Y.access(t, "fxshow", {
                    display: u
                }), i && (m.hidden = !y), y && ut([t], !0), d.done((function() {
                    for (r in y || ut([t]), Y.remove(t, "fxshow"), h) w.style(t, r, h[r])
                }))), s = ce(y ? m[r] : 0, r, d), r in m || (m[r] = s.start, y && (s.end = s.start, s.start = 0))
        }],
        prefilter: function(t, e) {
            e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
        }
    }), w.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? w.extend({}, t) : {
            complete: n || !n && e || p(t) && t,
            duration: t,
            easing: n && e || e && !p(e) && e
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            p(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(at).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(t, e, n, r) {
            var o = w.isEmptyObject(t),
                i = w.speed(e, n, r),
                a = function() {
                    var e = fe(this, w.extend({}, t), i);
                    (o || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                var e = !0,
                    o = null != t && t + "queueHooks",
                    i = w.timers,
                    a = Y.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else
                    for (o in a) a[o] && a[o].stop && ae.test(o) && r(a[o]);
                for (o = i.length; o--;) i[o].elem !== this || null != t && i[o].queue !== t || (i[o].anim.stop(n), e = !1, i.splice(o, 1));
                !e && n || w.dequeue(this, t)
            }))
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each((function() {
                var e, n = Y.get(this),
                    r = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    i = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function(t, e) {
        var n = w.fn[e];
        w.fn[e] = function(t, r, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ue(e, !0), t, r, o)
        }
    })), w.each({
        slideDown: ue("show"),
        slideUp: ue("hide"),
        slideToggle: ue("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(t, e) {
        w.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    })), w.timers = [], w.fx.tick = function() {
        var t, e = 0,
            n = w.timers;
        for (ee = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || w.fx.stop(), ee = void 0
    }, w.fx.timer = function(t) {
        w.timers.push(t), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        ne || (ne = !0, le())
    }, w.fx.stop = function() {
        ne = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(e, n) {
        return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, r) {
            var o = t.setTimeout(n, e);
            r.stop = function() {
                t.clearTimeout(o)
            }
        }))
    }, re = m.createElement("input"), oe = m.createElement("select").appendChild(m.createElement("option")), re.type = "checkbox", h.checkOn = "" !== re.value, h.optSelected = oe.selected, (re = m.createElement("input")).value = "t", re.type = "radio", h.radioValue = "t" === re.value;
    var de, he = w.expr.attrHandle;
    w.fn.extend({
        attr: function(t, e) {
            return U(this, w.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each((function() {
                w.removeAttr(this, t)
            }))
        }
    }), w.extend({
        attr: function(t, e, n) {
            var r, o, i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === i && w.isXMLDoc(t) || (o = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : o && "set" in o && void 0 !== (r = o.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (r = o.get(t, e)) ? r : null == (r = w.find.attr(t, e)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!h.radioValue && "radio" === e && S(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r = 0,
                o = e && e.match(D);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) t.removeAttribute(n)
        }
    }), de = {
        set: function(t, e, n) {
            return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(t, e) {
        var n = he[e] || w.find.attr;
        he[e] = function(t, e, r) {
            var o, i, a = e.toLowerCase();
            return r || (i = he[a], he[a] = o, o = null != n(t, e, r) ? a : null, he[a] = i), o
        }
    }));
    var pe = /^(?:input|select|textarea|button)$/i,
        ye = /^(?:a|area)$/i;

    function me(t) {
        return (t.match(D) || []).join(" ")
    }

    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function ge(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(D) || []
    }
    w.fn.extend({
        prop: function(t, e) {
            return U(this, w.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each((function() {
                delete this[w.propFix[t] || t]
            }))
        }
    }), w.extend({
        prop: function(t, e, n) {
            var r, o, i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && w.isXMLDoc(t) || (e = w.propFix[e] || e, o = w.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(t, n, e)) ? r : t[e] = n : o && "get" in o && null !== (r = o.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = w.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : pe.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function(t) {
            var e, n, r, o, i, a;
            return p(t) ? this.each((function(e) {
                w(this).addClass(t.call(this, e, ve(this)))
            })) : (e = ge(t)).length ? this.each((function() {
                if (r = ve(this), n = 1 === this.nodeType && " " + me(r) + " ") {
                    for (i = 0; i < e.length; i++) o = e[i], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    a = me(n), r !== a && this.setAttribute("class", a)
                }
            })) : this
        },
        removeClass: function(t) {
            var e, n, r, o, i, a;
            return p(t) ? this.each((function(e) {
                w(this).removeClass(t.call(this, e, ve(this)))
            })) : arguments.length ? (e = ge(t)).length ? this.each((function() {
                if (r = ve(this), n = 1 === this.nodeType && " " + me(r) + " ") {
                    for (i = 0; i < e.length; i++)
                        for (o = e[i]; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                    a = me(n), r !== a && this.setAttribute("class", a)
                }
            })) : this : this.attr("class", "")
        },
        toggleClass: function(t, e) {
            var n, r, o, i, a = typeof t,
                l = "string" === a || Array.isArray(t);
            return p(t) ? this.each((function(n) {
                w(this).toggleClass(t.call(this, n, ve(this), e), e)
            })) : "boolean" == typeof e && l ? e ? this.addClass(t) : this.removeClass(t) : (n = ge(t), this.each((function() {
                if (l)
                    for (i = w(this), o = 0; o < n.length; o++) r = n[o], i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = ve(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            })))
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + me(ve(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var be = /\r/g;
    w.fn.extend({
        val: function(t) {
            var e, n, r, o = this[0];
            return arguments.length ? (r = p(t), this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? t.call(this, n, w(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, (function(t) {
                    return null == t ? "" : t + ""
                }))), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            }))) : o ? (e = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(be, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = w.find.attr(t, "value");
                    return null != e ? e : me(w.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, r, o = t.options,
                        i = t.selectedIndex,
                        a = "select-one" === t.type,
                        l = a ? null : [],
                        s = a ? i + 1 : o.length;
                    for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (e = w(n).val(), a) return e;
                            l.push(e)
                        }
                    return l
                },
                set: function(t, e) {
                    for (var n, r, o = t.options, i = w.makeArray(e), a = o.length; a--;)((r = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), i)) && (n = !0);
                    return n || (t.selectedIndex = -1), i
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function() {
        w.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e)
            }
        }, h.checkOn || (w.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    })), h.focusin = "onfocusin" in t;
    var _e = /^(?:focusinfocus|focusoutblur)$/,
        we = function(t) {
            t.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(e, n, r, o) {
            var i, a, l, s, u, f, d, h, v = [r || m],
                g = c.call(e, "type") ? e.type : e,
                b = c.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = h = l = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(g + w.event.triggered) && (-1 < g.indexOf(".") && (g = (b = g.split(".")).shift(), b.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[w.expando] ? e : new w.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !y(r)) {
                    for (s = d.delegateType || g, _e.test(s + g) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || m) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (i = 0;
                    (a = v[i++]) && !e.isPropagationStopped();) h = a, e.type = 1 < i ? s : d.bindType || g, (f = (Y.get(a, "events") || Object.create(null))[e.type] && Y.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && Q(a) && (e.result = f.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = g, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Q(r) || u && p(r[g]) && !y(r) && ((l = r[u]) && (r[u] = null), w.event.triggered = g, e.isPropagationStopped() && h.addEventListener(g, we), r[g](), e.isPropagationStopped() && h.removeEventListener(g, we), w.event.triggered = void 0, l && (r[u] = l)), e.result
            }
        },
        simulate: function(t, e, n) {
            var r = w.extend(new w.Event, n, {
                type: t,
                isSimulated: !0
            });
            w.event.trigger(r, null, e)
        }
    }), w.fn.extend({
        trigger: function(t, e) {
            return this.each((function() {
                w.event.trigger(t, e, this)
            }))
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return w.event.trigger(t, e, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        var n = function(t) {
            w.event.simulate(e, t.target, w.event.fix(t))
        };
        w.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    o = Y.access(r, e);
                o || r.addEventListener(t, n, !0), Y.access(r, e, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    o = Y.access(r, e) - 1;
                o ? Y.access(r, e, o) : (r.removeEventListener(t, n, !0), Y.remove(r, e))
            }
        }
    }));
    var xe = t.location,
        Ee = {
            guid: Date.now()
        },
        Oe = /\?/;
    w.parseXML = function(e) {
        var n, r;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || w.error("Invalid XML: " + (r ? w.map(r.childNodes, (function(t) {
            return t.textContent
        })).join("\n") : e)), n
    };
    var ke = /\[\]$/,
        Te = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;

    function Ne(t, e, n, r) {
        var o;
        if (Array.isArray(e)) w.each(e, (function(e, o) {
            n || ke.test(t) ? r(t, o) : Ne(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, r)
        }));
        else if (n || "object" !== b(e)) r(t, e);
        else
            for (o in e) Ne(t + "[" + o + "]", e[o], n, r)
    }
    w.param = function(t, e) {
        var n, r = [],
            o = function(t, e) {
                var n = p(e) ? e() : e;
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, (function() {
            o(this.name, this.value)
        }));
        else
            for (n in t) Ne(n, t[n], e, o);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var t = w.prop(this, "elements");
                return t ? w.makeArray(t) : this
            })).filter((function() {
                var t = this.type;
                return this.name && !w(this).is(":disabled") && Ae.test(this.nodeName) && !Se.test(t) && (this.checked || !dt.test(t))
            })).map((function(t, e) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Te, "\r\n")
                    }
                })) : {
                    name: e.name,
                    value: n.replace(Te, "\r\n")
                }
            })).get()
        }
    });
    var Ce = /%20/g,
        je = /#.*$/,
        qe = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pe = /^(?:GET|HEAD)$/,
        De = /^\/\//,
        Ie = {},
        Re = {},
        Me = "*/".concat("*"),
        Be = m.createElement("a");

    function He(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, o = 0,
                i = e.toLowerCase().match(D) || [];
            if (p(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function Fe(t, e, n, r) {
        var o = {},
            i = t === Re;

        function a(l) {
            var s;
            return o[l] = !0, w.each(t[l] || [], (function(t, l) {
                var u = l(e, n, r);
                return "string" != typeof u || i || o[u] ? i ? !(s = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
            })), s
        }
        return a(e.dataTypes[0]) || !o["*"] && a("*")
    }

    function Ue(t, e) {
        var n, r, o = w.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : r || (r = {}))[n] = e[n]);
        return r && w.extend(!0, t, r), t
    }
    Be.href = xe.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Me,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ue(Ue(t, w.ajaxSettings), e) : Ue(w.ajaxSettings, t)
        },
        ajaxPrefilter: He(Ie),
        ajaxTransport: He(Re),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, i, a, l, s, u, c, f, d, h = w.ajaxSetup({}, n),
                p = h.context || h,
                y = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                v = w.Deferred(),
                g = w.Callbacks("once memory"),
                b = h.statusCode || {},
                _ = {},
                x = {},
                E = "canceled",
                O = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Le.exec(i);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? i : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, _[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u) O.always(t[O.status]);
                            else
                                for (e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || E;
                        return r && r.abort(e), k(0, e), this
                    }
                };
            if (v.promise(O), h.url = ((e || h.url || xe.href) + "").replace(De, xe.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(D) || [""], null == h.crossDomain) {
                s = m.createElement("a");
                try {
                    s.href = h.url, s.href = s.href, h.crossDomain = Be.protocol + "//" + Be.host != s.protocol + "//" + s.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Fe(Ie, h, n, O), u) return O;
            for (f in (c = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pe.test(h.type), o = h.url.replace(je, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ce, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Oe.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(qe, "$1"), d = (Oe.test(o) ? "&" : "?") + "_=" + Ee.guid++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && O.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && O.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && O.setRequestHeader("Content-Type", h.contentType), O.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : h.accepts["*"]), h.headers) O.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, O, h) || u)) return O.abort();
            if (E = "abort", g.add(h.complete), O.done(h.success), O.fail(h.error), r = Fe(Re, h, n, O)) {
                if (O.readyState = 1, c && y.trigger("ajaxSend", [O, h]), u) return O;
                h.async && 0 < h.timeout && (l = t.setTimeout((function() {
                    O.abort("timeout")
                }), h.timeout));
                try {
                    u = !1, r.send(_, k)
                } catch (e) {
                    if (u) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(e, n, a, s) {
                var f, d, m, _, x, E = n;
                u || (u = !0, l && t.clearTimeout(l), r = void 0, i = s || "", O.readyState = 0 < e ? 4 : 0, f = 200 <= e && e < 300 || 304 === e, a && (_ = function(t, e, n) {
                    for (var r, o, i, a, l = t.contents, s = t.dataTypes;
                        "*" === s[0];) s.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in l)
                            if (l[o] && l[o].test(r)) {
                                s.unshift(o);
                                break
                            }
                    if (s[0] in n) i = s[0];
                    else {
                        for (o in n) {
                            if (!s[0] || t.converters[o + " " + s[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i) return i !== s[0] && s.unshift(i), n[i]
                }(h, O, a)), !f && -1 < w.inArray("script", h.dataTypes) && w.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), _ = function(t, e, n, r) {
                    var o, i, a, l, s, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                    for (i = c.shift(); i;)
                        if (t.responseFields[i] && (n[t.responseFields[i]] = e), !s && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), s = i, i = c.shift())
                            if ("*" === i) i = s;
                            else if ("*" !== s && s !== i) {
                        if (!(a = u[s + " " + i] || u["* " + i]))
                            for (o in u)
                                if ((l = o.split(" "))[1] === i && (a = u[s + " " + l[0]] || u["* " + l[0]])) {
                                    !0 === a ? a = u[o] : !0 !== u[o] && (i = l[0], c.unshift(l[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + s + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(h, _, O, f), f ? (h.ifModified && ((x = O.getResponseHeader("Last-Modified")) && (w.lastModified[o] = x), (x = O.getResponseHeader("etag")) && (w.etag[o] = x)), 204 === e || "HEAD" === h.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = _.state, d = _.data, f = !(m = _.error))) : (m = E, !e && E || (E = "error", e < 0 && (e = 0))), O.status = e, O.statusText = (n || E) + "", f ? v.resolveWith(p, [d, E, O]) : v.rejectWith(p, [O, E, m]), O.statusCode(b), b = void 0, c && y.trigger(f ? "ajaxSuccess" : "ajaxError", [O, h, f ? d : m]), g.fireWith(p, [O, E]), c && (y.trigger("ajaxComplete", [O, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return O
        },
        getJSON: function(t, e, n) {
            return w.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return w.get(t, void 0, e, "script")
        }
    }), w.each(["get", "post"], (function(t, e) {
        w[e] = function(t, n, r, o) {
            return p(n) && (o = o || r, r = n, n = void 0), w.ajax(w.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: r
            }, w.isPlainObject(t) && t))
        }
    })), w.ajaxPrefilter((function(t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    })), w._evalUrl = function(t, e, n) {
        return w.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                w.globalEval(t, e, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (p(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            })).append(this)), this
        },
        wrapInner: function(t) {
            return p(t) ? this.each((function(e) {
                w(this).wrapInner(t.call(this, e))
            })) : this.each((function() {
                var e = w(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            }))
        },
        wrap: function(t) {
            var e = p(t);
            return this.each((function(n) {
                w(this).wrapAll(e ? t.call(this, n) : t)
            }))
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each((function() {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function(t) {
        return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var We = {
            0: 200,
            1223: 204
        },
        ze = w.ajaxSettings.xhr();
    h.cors = !!ze && "withCredentials" in ze, h.ajax = ze = !!ze, w.ajaxTransport((function(e) {
        var n, r;
        if (h.cors || ze && !e.crossDomain) return {
            send: function(o, i) {
                var a, l = e.xhr();
                if (l.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) l[a] = e.xhrFields[a];
                for (a in e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) l.setRequestHeader(a, o[a]);
                n = function(t) {
                    return function() {
                        n && (n = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === t ? l.abort() : "error" === t ? "number" != typeof l.status ? i(0, "error") : i(l.status, l.statusText) : i(We[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                            binary: l.response
                        } : {
                            text: l.responseText
                        }, l.getAllResponseHeaders()))
                    }
                }, l.onload = n(), r = l.onerror = l.ontimeout = n("error"), void 0 !== l.onabort ? l.onabort = r : l.onreadystatechange = function() {
                    4 === l.readyState && t.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    l.send(e.hasContent && e.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function(t) {
        t.crossDomain && (t.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return w.globalEval(t), t
            }
        }
    }), w.ajaxPrefilter("script", (function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    })), w.ajaxTransport("script", (function(t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function(r, o) {
                e = w("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), m.head.appendChild(e[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Ke, Ve = [],
        Qe = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ve.pop() || w.expando + "_" + Ee.guid++;
            return this[t] = !0, t
        }
    }), w.ajaxPrefilter("json jsonp", (function(e, n, r) {
        var o, i, a, l = !1 !== e.jsonp && (Qe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(e.data) && "data");
        if (l || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Qe, "$1" + o) : !1 !== e.jsonp && (e.url += (Oe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return a || w.error(o + " was not called"), a[0]
        }, e.dataTypes[0] = "json", i = t[o], t[o] = function() {
            a = arguments
        }, r.always((function() {
            void 0 === i ? w(t).removeProp(o) : t[o] = i, e[o] && (e.jsonpCallback = n.jsonpCallback, Ve.push(o)), a && p(i) && i(a[0]), a = i = void 0
        })), "script"
    })), h.createHTMLDocument = ((Ke = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ke.childNodes.length), w.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (h.createHTMLDocument ? ((r = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(r)) : e = m), i = !n && [], (o = A.exec(t)) ? [e.createElement(o[1])] : (o = bt([t], e, i), i && i.length && w(i).remove(), w.merge([], o.childNodes)));
        var r, o, i
    }, w.fn.load = function(t, e, n) {
        var r, o, i, a = this,
            l = t.indexOf(" ");
        return -1 < l && (r = me(t.slice(l)), t = t.slice(0, l)), p(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < a.length && w.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done((function(t) {
            i = arguments, a.html(r ? w("<div>").append(w.parseHTML(t)).find(r) : t)
        })).always(n && function(t, e) {
            a.each((function() {
                n.apply(this, i || [t.responseText, e, t])
            }))
        }), this
    }, w.expr.pseudos.animated = function(t) {
        return w.grep(w.timers, (function(e) {
            return t === e.elem
        })).length
    }, w.offset = {
        setOffset: function(t, e, n) {
            var r, o, i, a, l, s, u = w.css(t, "position"),
                c = w(t),
                f = {};
            "static" === u && (t.style.position = "relative"), l = c.offset(), i = w.css(t, "top"), s = w.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < (i + s).indexOf("auto") ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(s) || 0), p(e) && (e = e.call(t, n, w.extend({}, l))), null != e.top && (f.top = e.top - l.top + a), null != e.left && (f.left = e.left - l.left + o), "using" in e ? e.using.call(t, f) : c.css(f)
        }
    }, w.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                w.offset.setOffset(this, t, e)
            }));
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) e = r.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                    t && t !== r && 1 === t.nodeType && ((o = w(t).offset()).top += w.css(t, "borderTopWidth", !0), o.left += w.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - w.css(r, "marginTop", !0),
                    left: e.left - o.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                return t || rt
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, e) {
        var n = "pageYOffset" === e;
        w.fn[t] = function(r) {
            return U(this, (function(t, r, o) {
                var i;
                if (y(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === o) return i ? i[e] : t[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : t[r] = o
            }), t, r, arguments.length)
        }
    })), w.each(["top", "left"], (function(t, e) {
        w.cssHooks[e] = Wt(h.pixelPosition, (function(t, n) {
            if (n) return n = Ut(t, e), Dt.test(n) ? w(t).position()[e] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function(t, e) {
        w.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, (function(n, r) {
            w.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    l = n || (!0 === o || !0 === i ? "margin" : "border");
                return U(this, (function(e, n, o) {
                    var i;
                    return y(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === o ? w.css(e, n, l) : w.style(e, n, o, l)
                }), e, a ? o : void 0, a)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
        w.fn[e] = function(t) {
            return this.on(e, t)
        }
    })), w.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
        w.fn[e] = function(t, n) {
            return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
        }
    }));
    var $e = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    w.proxy = function(t, e) {
        var n, r, i;
        if ("string" == typeof e && (n = t[e], e = t, t = n), p(t)) return r = o.call(arguments, 2), (i = function() {
            return t.apply(e || this, r.concat(o.call(arguments)))
        }).guid = t.guid = t.guid || w.guid++, i
    }, w.holdReady = function(t) {
        t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = p, w.isWindow = y, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function(t) {
        var e = w.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, w.trim = function(t) {
        return null == t ? "" : (t + "").replace($e, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return w
    }));
    var Ye = t.jQuery,
        Xe = t.$;
    return w.noConflict = function(e) {
        return t.$ === w && (t.$ = Xe), e && t.jQuery === w && (t.jQuery = Ye), w
    }, void 0 === e && (t.jQuery = t.$ = w), w
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery)
}(this, (function(t, e) {
    "use strict";

    function n(t) {
        return t && "object" == typeof t && "default" in t ? t : {
            default: t
        }
    }
    var r = n(e);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function i(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function a() {
        return a = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, a.apply(this, arguments)
    }

    function l(t, e) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        }, l(t, e)
    }
    var s = "transitionend";

    function u(t) {
        var e = this,
            n = !1;
        return r.default(this).one(c.TRANSITION_END, (function() {
            n = !0
        })), setTimeout((function() {
            n || c.triggerTransitionEnd(e)
        }), t), this
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = r.default(t).css("transition-duration"),
                n = r.default(t).css("transition-delay"),
                o = parseFloat(e),
                i = parseFloat(n);
            return o || i ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            r.default(t).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var o = n[r],
                        i = e[r],
                        a = i && c.isElement(i) ? "element" : null == (l = i) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = r.default.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    c.jQueryDetection(), r.default.fn.emulateTransitionEnd = u, r.default.event.special[c.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(t) {
            if (r.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var f = "alert",
        d = "bs.alert",
        h = "." + d,
        p = r.default.fn[f],
        y = "close" + h,
        m = "closed" + h,
        v = "click" + h + ".data-api",
        g = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() {
                r.default.removeData(this._element, d), this._element = null
            }, e._getRootElement = function(t) {
                var e = c.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = r.default(t).closest(".alert")[0]), n
            }, e._triggerCloseEvent = function(t) {
                var e = r.default.Event(y);
                return r.default(t).trigger(e), e
            }, e._removeElement = function(t) {
                var e = this;
                if (r.default(t).removeClass("show"), r.default(t).hasClass("fade")) {
                    var n = c.getTransitionDurationFromElement(t);
                    r.default(t).one(c.TRANSITION_END, (function(n) {
                        return e._destroyElement(t, n)
                    })).emulateTransitionEnd(n)
                } else this._destroyElement(t)
            }, e._destroyElement = function(t) {
                r.default(t).detach().trigger(m).remove()
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this),
                        o = n.data(d);
                    o || (o = new t(this), n.data(d, o)), "close" === e && o[e](this)
                }))
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }]), t
        }();
    r.default(document).on(v, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.default.fn[f] = g._jQueryInterface, r.default.fn[f].Constructor = g, r.default.fn[f].noConflict = function() {
        return r.default.fn[f] = p, g._jQueryInterface
    };
    var b = "button",
        _ = "bs.button",
        w = "." + _,
        x = ".data-api",
        E = r.default.fn[b],
        O = "active",
        k = "click" + w + x,
        T = "focus" + w + x + " blur" + w + x,
        S = "load" + w + x,
        A = '[data-toggle^="button"]',
        N = 'input:not([type="hidden"])',
        C = ".btn",
        j = function() {
            function t(t) {
                this._element = t, this.shouldAvoidTriggerChange = !1
            }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    n = r.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var o = this._element.querySelector(N);
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains(O)) t = !1;
                            else {
                                var i = n.querySelector(".active");
                                i && r.default(i).removeClass(O)
                            }
                        t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains(O)), this.shouldAvoidTriggerChange || r.default(o).trigger("change")), o.focus(), e = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(O)), t && r.default(this._element).toggleClass(O))
            }, e.dispose = function() {
                r.default.removeData(this._element, _), this._element = null
            }, t._jQueryInterface = function(e, n) {
                return this.each((function() {
                    var o = r.default(this),
                        i = o.data(_);
                    i || (i = new t(this), o.data(_, i)), i.shouldAvoidTriggerChange = n, "toggle" === e && i[e]()
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }]), t
        }();
    r.default(document).on(k, A, (function(t) {
        var e = t.target,
            n = e;
        if (r.default(e).hasClass("btn") || (e = r.default(e).closest(C)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else {
            var o = e.querySelector(N);
            if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === e.tagName || j._jQueryInterface.call(r.default(e), "toggle", "INPUT" === n.tagName)
        }
    })).on(T, A, (function(t) {
        var e = r.default(t.target).closest(C)[0];
        r.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    })), r.default(window).on(S, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var r = t[e],
                o = r.querySelector(N);
            o.checked || o.hasAttribute("checked") ? r.classList.add(O) : r.classList.remove(O)
        }
        for (var i = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; i < a; i++) {
            var l = t[i];
            "true" === l.getAttribute("aria-pressed") ? l.classList.add(O) : l.classList.remove(O)
        }
    })), r.default.fn[b] = j._jQueryInterface, r.default.fn[b].Constructor = j, r.default.fn[b].noConflict = function() {
        return r.default.fn[b] = E, j._jQueryInterface
    };
    var q = "carousel",
        L = "bs.carousel",
        P = "." + L,
        D = ".data-api",
        I = r.default.fn[q],
        R = "active",
        M = "next",
        B = "prev",
        H = "slide" + P,
        F = "slid" + P,
        U = "keydown" + P,
        W = "mouseenter" + P,
        z = "mouseleave" + P,
        K = "touchstart" + P,
        V = "touchmove" + P,
        Q = "touchend" + P,
        $ = "pointerdown" + P,
        Y = "pointerup" + P,
        X = "dragstart" + P,
        Z = "load" + P + D,
        G = "click" + P + D,
        J = ".active.carousel-item",
        tt = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        et = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        nt = {
            TOUCH: "touch",
            PEN: "pen"
        },
        rt = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var e = t.prototype;
            return e.next = function() {
                this._isSliding || this._slide(M)
            }, e.nextWhenVisible = function() {
                var t = r.default(this._element);
                !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(B)
            }, e.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(J);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) r.default(this._element).one(F, (function() {
                        return e.to(t)
                    }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var o = t > n ? M : B;
                        this._slide(o, this._items[t])
                    }
            }, e.dispose = function() {
                r.default(this._element).off(P), r.default.removeData(this._element, L), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(t) {
                return t = a({}, tt, t), c.typeCheckConfig(q, t, et), t
            }, e._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && r.default(this._element).on(U, (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && r.default(this._element).on(W, (function(e) {
                    return t.pause(e)
                })).on(z, (function(e) {
                    return t.cycle(e)
                })), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var e = function(e) {
                            t._pointerEvent && nt[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        n = function(e) {
                            t._pointerEvent && nt[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                                return t.cycle(e)
                            }), 500 + t._config.interval))
                        };
                    r.default(this._element.querySelectorAll(".carousel-item img")).on(X, (function(t) {
                        return t.preventDefault()
                    })), this._pointerEvent ? (r.default(this._element).on($, (function(t) {
                        return e(t)
                    })), r.default(this._element).on(Y, (function(t) {
                        return n(t)
                    })), this._element.classList.add("pointer-event")) : (r.default(this._element).on(K, (function(t) {
                        return e(t)
                    })), r.default(this._element).on(V, (function(e) {
                        return function(e) {
                            t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX
                        }(e)
                    })), r.default(this._element).on(Q, (function(t) {
                        return n(t)
                    })))
                }
            }, e._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
            }, e._getItemByDirection = function(t, e) {
                var n = t === M,
                    r = t === B,
                    o = this._getItemIndex(e),
                    i = this._items.length - 1;
                if ((r && 0 === o || n && o === i) && !this._config.wrap) return e;
                var a = (o + (t === B ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, e._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    o = this._getItemIndex(this._element.querySelector(J)),
                    i = r.default.Event(H, {
                        relatedTarget: t,
                        direction: e,
                        from: o,
                        to: n
                    });
                return r.default(this._element).trigger(i), i
            }, e._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    r.default(e).removeClass(R);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && r.default(n).addClass(R)
                }
            }, e._updateInterval = function() {
                var t = this._activeElement || this._element.querySelector(J);
                if (t) {
                    var e = parseInt(t.getAttribute("data-interval"), 10);
                    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, e._slide = function(t, e) {
                var n, o, i, a = this,
                    l = this._element.querySelector(J),
                    s = this._getItemIndex(l),
                    u = e || l && this._getItemByDirection(t, l),
                    f = this._getItemIndex(u),
                    d = Boolean(this._interval);
                if (t === M ? (n = "carousel-item-left", o = "carousel-item-next", i = "left") : (n = "carousel-item-right", o = "carousel-item-prev", i = "right"), u && r.default(u).hasClass(R)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, i).isDefaultPrevented() && l && u) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;
                    var h = r.default.Event(F, {
                        relatedTarget: u,
                        direction: i,
                        from: s,
                        to: f
                    });
                    if (r.default(this._element).hasClass("slide")) {
                        r.default(u).addClass(o), c.reflow(u), r.default(l).addClass(n), r.default(u).addClass(n);
                        var p = c.getTransitionDurationFromElement(l);
                        r.default(l).one(c.TRANSITION_END, (function() {
                            r.default(u).removeClass(n + " " + o).addClass(R), r.default(l).removeClass(R + " " + o + " " + n), a._isSliding = !1, setTimeout((function() {
                                return r.default(a._element).trigger(h)
                            }), 0)
                        })).emulateTransitionEnd(p)
                    } else r.default(l).removeClass(R), r.default(u).addClass(R), this._isSliding = !1, r.default(this._element).trigger(h);
                    d && this.cycle()
                }
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this).data(L),
                        o = a({}, tt, r.default(this).data());
                    "object" == typeof e && (o = a({}, o, e));
                    var i = "string" == typeof e ? e : o.slide;
                    if (n || (n = new t(this, o), r.default(this).data(L, n)), "number" == typeof e) n.to(e);
                    else if ("string" == typeof i) {
                        if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                        n[i]()
                    } else o.interval && o.ride && (n.pause(), n.cycle())
                }))
            }, t._dataApiClickHandler = function(e) {
                var n = c.getSelectorFromElement(this);
                if (n) {
                    var o = r.default(n)[0];
                    if (o && r.default(o).hasClass("carousel")) {
                        var i = a({}, r.default(o).data(), r.default(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (i.interval = !1), t._jQueryInterface.call(r.default(o), i), l && r.default(o).data(L).to(l), e.preventDefault()
                    }
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return tt
                }
            }]), t
        }();
    r.default(document).on(G, "[data-slide], [data-slide-to]", rt._dataApiClickHandler), r.default(window).on(Z, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
            var o = r.default(t[e]);
            rt._jQueryInterface.call(o, o.data())
        }
    })), r.default.fn[q] = rt._jQueryInterface, r.default.fn[q].Constructor = rt, r.default.fn[q].noConflict = function() {
        return r.default.fn[q] = I, rt._jQueryInterface
    };
    var ot = "collapse",
        it = "bs.collapse",
        at = "." + it,
        lt = r.default.fn[ot],
        st = "show",
        ut = "collapse",
        ct = "collapsing",
        ft = "collapsed",
        dt = "width",
        ht = "show" + at,
        pt = "shown" + at,
        yt = "hide" + at,
        mt = "hidden" + at,
        vt = "click" + at + ".data-api",
        gt = '[data-toggle="collapse"]',
        bt = {
            toggle: !0,
            parent: ""
        },
        _t = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        wt = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(gt)), r = 0, o = n.length; r < o; r++) {
                    var i = n[r],
                        a = c.getSelectorFromElement(i),
                        l = [].slice.call(document.querySelectorAll(a)).filter((function(e) {
                            return e === t
                        }));
                    null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(i))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = t.prototype;
            return e.toggle = function() {
                r.default(this._element).hasClass(st) ? this.hide() : this.show()
            }, e.show = function() {
                var e, n, o = this;
                if (!this._isTransitioning && !r.default(this._element).hasClass(st) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(ut)
                    }))).length && (e = null), !(e && (n = r.default(e).not(this._selector).data(it)) && n._isTransitioning))) {
                    var i = r.default.Event(ht);
                    if (r.default(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(r.default(e).not(this._selector), "hide"), n || r.default(e).data(it, null));
                        var a = this._getDimension();
                        r.default(this._element).removeClass(ut).addClass(ct), this._element.style[a] = 0, this._triggerArray.length && r.default(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            s = c.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(c.TRANSITION_END, (function() {
                            r.default(o._element).removeClass(ct).addClass(ut + " " + st), o._element.style[a] = "", o.setTransitioning(!1), r.default(o._element).trigger(pt)
                        })).emulateTransitionEnd(s), this._element.style[a] = this._element[l] + "px"
                    }
                }
            }, e.hide = function() {
                var t = this;
                if (!this._isTransitioning && r.default(this._element).hasClass(st)) {
                    var e = r.default.Event(yt);
                    if (r.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", c.reflow(this._element), r.default(this._element).addClass(ct).removeClass(ut + " " + st);
                        var o = this._triggerArray.length;
                        if (o > 0)
                            for (var i = 0; i < o; i++) {
                                var a = this._triggerArray[i],
                                    l = c.getSelectorFromElement(a);
                                if (null !== l) r.default([].slice.call(document.querySelectorAll(l))).hasClass(st) || r.default(a).addClass(ft).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var s = c.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(c.TRANSITION_END, (function() {
                            t.setTransitioning(!1), r.default(t._element).removeClass(ct).addClass(ut).trigger(mt)
                        })).emulateTransitionEnd(s)
                    }
                }
            }, e.setTransitioning = function(t) {
                this._isTransitioning = t
            }, e.dispose = function() {
                r.default.removeData(this._element, it), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(t) {
                return (t = a({}, bt, t)).toggle = Boolean(t.toggle), c.typeCheckConfig(ot, t, _t), t
            }, e._getDimension = function() {
                return r.default(this._element).hasClass(dt) ? dt : "height"
            }, e._getParent = function() {
                var e, n = this;
                c.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(o));
                return r.default(i).each((function(e, r) {
                    n._addAriaAndCollapsedClass(t._getTargetFromElement(r), [r])
                })), e
            }, e._addAriaAndCollapsedClass = function(t, e) {
                var n = r.default(t).hasClass(st);
                e.length && r.default(e).toggleClass(ft, !n).attr("aria-expanded", n)
            }, t._getTargetFromElement = function(t) {
                var e = c.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this),
                        o = n.data(it),
                        i = a({}, bt, n.data(), "object" == typeof e && e ? e : {});
                    if (!o && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), o || (o = new t(this, i), n.data(it, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return bt
                }
            }]), t
        }();
    r.default(document).on(vt, gt, (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = r.default(this),
            n = c.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(n));
        r.default(o).each((function() {
            var t = r.default(this),
                n = t.data(it) ? "toggle" : e.data();
            wt._jQueryInterface.call(t, n)
        }))
    })), r.default.fn[ot] = wt._jQueryInterface, r.default.fn[ot].Constructor = wt, r.default.fn[ot].noConflict = function() {
        return r.default.fn[ot] = lt, wt._jQueryInterface
    };
    var xt = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        Et = function() {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (xt && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0
        }();
    var Ot = xt && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0, window.Promise.resolve().then((function() {
                e = !1, t()
            })))
        }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout((function() {
                e = !1, t()
            }), Et))
        }
    };

    function kt(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function Tt(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function St(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function At(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Tt(t),
            n = e.overflow,
            r = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + r) ? t : At(St(t))
    }

    function Nt(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }
    var Ct = xt && !(!window.MSInputMethodContext || !document.documentMode),
        jt = xt && /MSIE 10/.test(navigator.userAgent);

    function qt(t) {
        return 11 === t ? Ct : 10 === t ? jt : Ct || jt
    }

    function Lt(t) {
        if (!t) return document.documentElement;
        for (var e = qt(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Tt(n, "position") ? Lt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Pt(t) {
        return null !== t.parentNode ? Pt(t.parentNode) : t
    }

    function Dt(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? t : e,
            o = n ? e : t,
            i = document.createRange();
        i.setStart(r, 0), i.setEnd(o, 0);
        var a, l, s = i.commonAncestorContainer;
        if (t !== s && e !== s || r.contains(o)) return "BODY" === (l = (a = s).nodeName) || "HTML" !== l && Lt(a.firstElementChild) !== a ? Lt(s) : s;
        var u = Pt(t);
        return u.host ? Dt(u.host, e) : Dt(t, Pt(e).host)
    }

    function It(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            r = t.nodeName;
        if ("BODY" === r || "HTML" === r) {
            var o = t.ownerDocument.documentElement,
                i = t.ownerDocument.scrollingElement || o;
            return i[n]
        }
        return t[n]
    }

    function Rt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = It(e, "top"),
            o = It(e, "left"),
            i = n ? -1 : 1;
        return t.top += r * i, t.bottom += r * i, t.left += o * i, t.right += o * i, t
    }

    function Mt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + r + "Width"])
    }

    function Bt(t, e, n, r) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], qt(10) ? parseInt(n["offset" + t]) + parseInt(r["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function Ht(t) {
        var e = t.body,
            n = t.documentElement,
            r = qt(10) && getComputedStyle(n);
        return {
            height: Bt("Height", e, n, r),
            width: Bt("Width", e, n, r)
        }
    }
    var Ft = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Ut = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        Wt = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        zt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function Kt(t) {
        return zt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Vt(t) {
        var e = {};
        try {
            if (qt(10)) {
                e = t.getBoundingClientRect();
                var n = It(t, "top"),
                    r = It(t, "left");
                e.top += n, e.left += r, e.bottom += n, e.right += r
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            i = "HTML" === t.nodeName ? Ht(t.ownerDocument) : {},
            a = i.width || t.clientWidth || o.width,
            l = i.height || t.clientHeight || o.height,
            s = t.offsetWidth - a,
            u = t.offsetHeight - l;
        if (s || u) {
            var c = Tt(t);
            s -= Mt(c, "x"), u -= Mt(c, "y"), o.width -= s, o.height -= u
        }
        return Kt(o)
    }

    function Qt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = qt(10),
            o = "HTML" === e.nodeName,
            i = Vt(t),
            a = Vt(e),
            l = At(t),
            s = Tt(e),
            u = parseFloat(s.borderTopWidth),
            c = parseFloat(s.borderLeftWidth);
        n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var f = Kt({
            top: i.top - a.top - u,
            left: i.left - a.left - c,
            width: i.width,
            height: i.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !r && o) {
            var d = parseFloat(s.marginTop),
                h = parseFloat(s.marginLeft);
            f.top -= u - d, f.bottom -= u - d, f.left -= c - h, f.right -= c - h, f.marginTop = d, f.marginLeft = h
        }
        return (r && !n ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (f = Rt(f, e)), f
    }

    function $t(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            r = Qt(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            i = Math.max(n.clientHeight, window.innerHeight || 0),
            a = e ? 0 : It(n),
            l = e ? 0 : It(n, "left"),
            s = {
                top: a - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: i
            };
        return Kt(s)
    }

    function Yt(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === Tt(t, "position")) return !0;
        var n = St(t);
        return !!n && Yt(n)
    }

    function Xt(t) {
        if (!t || !t.parentElement || qt()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === Tt(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function Zt(t, e, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = {
                top: 0,
                left: 0
            },
            a = o ? Xt(t) : Dt(t, Nt(e));
        if ("viewport" === r) i = $t(a, o);
        else {
            var l = void 0;
            "scrollParent" === r ? "BODY" === (l = At(St(e))).nodeName && (l = t.ownerDocument.documentElement) : l = "window" === r ? t.ownerDocument.documentElement : r;
            var s = Qt(l, a, o);
            if ("HTML" !== l.nodeName || Yt(a)) i = s;
            else {
                var u = Ht(t.ownerDocument),
                    c = u.height,
                    f = u.width;
                i.top += s.top - s.marginTop, i.bottom = c + s.top, i.left += s.left - s.marginLeft, i.right = f + s.left
            }
        }
        var d = "number" == typeof(n = n || 0);
        return i.left += d ? n : n.left || 0, i.top += d ? n : n.top || 0, i.right -= d ? n : n.right || 0, i.bottom -= d ? n : n.bottom || 0, i
    }

    function Gt(t) {
        return t.width * t.height
    }

    function Jt(t, e, n, r, o) {
        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = Zt(n, r, i, o),
            l = {
                top: {
                    width: a.width,
                    height: e.top - a.top
                },
                right: {
                    width: a.right - e.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - e.bottom
                },
                left: {
                    width: e.left - a.left,
                    height: a.height
                }
            },
            s = Object.keys(l).map((function(t) {
                return zt({
                    key: t
                }, l[t], {
                    area: Gt(l[t])
                })
            })).sort((function(t, e) {
                return e.area - t.area
            })),
            u = s.filter((function(t) {
                var e = t.width,
                    r = t.height;
                return e >= n.clientWidth && r >= n.clientHeight
            })),
            c = u.length > 0 ? u[0].key : s[0].key,
            f = t.split("-")[1];
        return c + (f ? "-" + f : "")
    }

    function te(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = r ? Xt(e) : Dt(e, Nt(n));
        return Qt(n, o, r)
    }

    function ee(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + r,
            height: t.offsetHeight + n
        }
    }

    function ne(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return e[t]
        }))
    }

    function re(t, e, n) {
        n = n.split("-")[0];
        var r = ee(t),
            o = {
                width: r.width,
                height: r.height
            },
            i = -1 !== ["right", "left"].indexOf(n),
            a = i ? "top" : "left",
            l = i ? "left" : "top",
            s = i ? "height" : "width",
            u = i ? "width" : "height";
        return o[a] = e[a] + e[s] / 2 - r[s] / 2, o[l] = n === l ? e[l] - r[u] : e[ne(l)], o
    }

    function oe(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function ie(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex((function(t) {
                return t[e] === n
            }));
            var r = oe(t, (function(t) {
                return t[e] === n
            }));
            return t.indexOf(r)
        }(t, "name", n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && kt(n) && (e.offsets.popper = Kt(e.offsets.popper), e.offsets.reference = Kt(e.offsets.reference), e = n(e, t))
        })), e
    }

    function ae() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = te(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Jt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = re(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ie(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function le(t, e) {
        return t.some((function(t) {
            var n = t.name;
            return t.enabled && n === e
        }))
    }

    function se(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
            var o = e[r],
                i = o ? "" + o + n : t;
            if (void 0 !== document.body.style[i]) return i
        }
        return null
    }

    function ue() {
        return this.state.isDestroyed = !0, le(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[se("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function ce(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function fe(t, e, n, r) {
        var o = "BODY" === t.nodeName,
            i = o ? t.ownerDocument.defaultView : t;
        i.addEventListener(e, n, {
            passive: !0
        }), o || fe(At(i.parentNode), e, n, r), r.push(i)
    }

    function de(t, e, n, r) {
        n.updateBound = r, ce(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = At(t);
        return fe(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function he() {
        this.state.eventsEnabled || (this.state = de(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function pe() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ce(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) {
            t.removeEventListener("scroll", e.updateBound)
        })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function ye(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function me(t, e) {
        Object.keys(e).forEach((function(n) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ye(e[n]) && (r = "px"), t.style[n] = e[n] + r
        }))
    }
    var ve = xt && /Firefox/i.test(navigator.userAgent);

    function ge(t, e, n) {
        var r = oe(t, (function(t) {
                return t.name === e
            })),
            o = !!r && t.some((function(t) {
                return t.name === n && t.enabled && t.order < r.order
            }));
        if (!o) {
            var i = "`" + e + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
        }
        return o
    }
    var be = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        _e = be.slice(3);

    function we(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = _e.indexOf(t),
            r = _e.slice(n + 1).concat(_e.slice(0, n));
        return e ? r.reverse() : r
    }
    var xe = "flip",
        Ee = "clockwise",
        Oe = "counterclockwise";

    function ke(t, e, n, r) {
        var o = [0, 0],
            i = -1 !== ["right", "left"].indexOf(r),
            a = t.split(/(\+|\-)/).map((function(t) {
                return t.trim()
            })),
            l = a.indexOf(oe(a, (function(t) {
                return -1 !== t.search(/,|\s/)
            })));
        a[l] && -1 === a[l].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var s = /\s*,\s*|\s+/,
            u = -1 !== l ? [a.slice(0, l).concat([a[l].split(s)[0]]), [a[l].split(s)[1]].concat(a.slice(l + 1))] : [a];
        return u = u.map((function(t, r) {
            var o = (1 === r ? !i : i) ? "height" : "width",
                a = !1;
            return t.reduce((function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
            }), []).map((function(t) {
                return function(t, e, n, r) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        i = +o[1],
                        a = o[2];
                    if (!i) return t;
                    if (0 === a.indexOf("%")) {
                        return Kt("%p" === a ? n : r)[e] / 100 * i
                    }
                    if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
                    return i
                }(t, o, e, n)
            }))
        })), u.forEach((function(t, e) {
            t.forEach((function(n, r) {
                ye(n) && (o[e] += n * ("-" === t[r - 1] ? -1 : 1))
            }))
        })), o
    }
    var Te = {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        r = e.split("-")[1];
                    if (r) {
                        var o = t.offsets,
                            i = o.reference,
                            a = o.popper,
                            l = -1 !== ["bottom", "top"].indexOf(n),
                            s = l ? "left" : "top",
                            u = l ? "width" : "height",
                            c = {
                                start: Wt({}, s, i[s]),
                                end: Wt({}, s, i[s] + i[u] - a[u])
                            };
                        t.offsets.popper = zt({}, a, c[r])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.offset,
                        r = t.placement,
                        o = t.offsets,
                        i = o.popper,
                        a = o.reference,
                        l = r.split("-")[0],
                        s = void 0;
                    return s = ye(+n) ? [+n, 0] : ke(n, i, a, l), "left" === l ? (i.top += s[0], i.left -= s[1]) : "right" === l ? (i.top += s[0], i.left += s[1]) : "top" === l ? (i.left += s[0], i.top -= s[1]) : "bottom" === l && (i.left += s[0], i.top += s[1]), t.popper = i, t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.boundariesElement || Lt(t.instance.popper);
                    t.instance.reference === n && (n = Lt(n));
                    var r = se("transform"),
                        o = t.instance.popper.style,
                        i = o.top,
                        a = o.left,
                        l = o[r];
                    o.top = "", o.left = "", o[r] = "";
                    var s = Zt(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                    o.top = i, o.left = a, o[r] = l, e.boundaries = s;
                    var u = e.priority,
                        c = t.offsets.popper,
                        f = {
                            primary: function(t) {
                                var n = c[t];
                                return c[t] < s[t] && !e.escapeWithReference && (n = Math.max(c[t], s[t])), Wt({}, t, n)
                            },
                            secondary: function(t) {
                                var n = "right" === t ? "left" : "top",
                                    r = c[n];
                                return c[t] > s[t] && !e.escapeWithReference && (r = Math.min(c[n], s[t] - ("right" === t ? c.width : c.height))), Wt({}, n, r)
                            }
                        };
                    return u.forEach((function(t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        c = zt({}, c, f[e](t))
                    })), t.offsets.popper = c, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets,
                        n = e.popper,
                        r = e.reference,
                        o = t.placement.split("-")[0],
                        i = Math.floor,
                        a = -1 !== ["top", "bottom"].indexOf(o),
                        l = a ? "right" : "bottom",
                        s = a ? "left" : "top",
                        u = a ? "width" : "height";
                    return n[l] < i(r[s]) && (t.offsets.popper[s] = i(r[s]) - n[u]), n[s] > i(r[l]) && (t.offsets.popper[s] = i(r[l])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, e) {
                    var n;
                    if (!ge(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var r = e.element;
                    if ("string" == typeof r) {
                        if (!(r = t.instance.popper.querySelector(r))) return t
                    } else if (!t.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var o = t.placement.split("-")[0],
                        i = t.offsets,
                        a = i.popper,
                        l = i.reference,
                        s = -1 !== ["left", "right"].indexOf(o),
                        u = s ? "height" : "width",
                        c = s ? "Top" : "Left",
                        f = c.toLowerCase(),
                        d = s ? "left" : "top",
                        h = s ? "bottom" : "right",
                        p = ee(r)[u];
                    l[h] - p < a[f] && (t.offsets.popper[f] -= a[f] - (l[h] - p)), l[f] + p > a[h] && (t.offsets.popper[f] += l[f] + p - a[h]), t.offsets.popper = Kt(t.offsets.popper);
                    var y = l[f] + l[u] / 2 - p / 2,
                        m = Tt(t.instance.popper),
                        v = parseFloat(m["margin" + c]),
                        g = parseFloat(m["border" + c + "Width"]),
                        b = y - t.offsets.popper[f] - v - g;
                    return b = Math.max(Math.min(a[u] - p, b), 0), t.arrowElement = r, t.offsets.arrow = (Wt(n = {}, f, Math.round(b)), Wt(n, d, ""), n), t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (le(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var n = Zt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                        r = t.placement.split("-")[0],
                        o = ne(r),
                        i = t.placement.split("-")[1] || "",
                        a = [];
                    switch (e.behavior) {
                        case xe:
                            a = [r, o];
                            break;
                        case Ee:
                            a = we(r);
                            break;
                        case Oe:
                            a = we(r, !0);
                            break;
                        default:
                            a = e.behavior
                    }
                    return a.forEach((function(l, s) {
                        if (r !== l || a.length === s + 1) return t;
                        r = t.placement.split("-")[0], o = ne(r);
                        var u = t.offsets.popper,
                            c = t.offsets.reference,
                            f = Math.floor,
                            d = "left" === r && f(u.right) > f(c.left) || "right" === r && f(u.left) < f(c.right) || "top" === r && f(u.bottom) > f(c.top) || "bottom" === r && f(u.top) < f(c.bottom),
                            h = f(u.left) < f(n.left),
                            p = f(u.right) > f(n.right),
                            y = f(u.top) < f(n.top),
                            m = f(u.bottom) > f(n.bottom),
                            v = "left" === r && h || "right" === r && p || "top" === r && y || "bottom" === r && m,
                            g = -1 !== ["top", "bottom"].indexOf(r),
                            b = !!e.flipVariations && (g && "start" === i && h || g && "end" === i && p || !g && "start" === i && y || !g && "end" === i && m),
                            _ = !!e.flipVariationsByContent && (g && "start" === i && p || g && "end" === i && h || !g && "start" === i && m || !g && "end" === i && y),
                            w = b || _;
                        (d || v || w) && (t.flipped = !0, (d || v) && (r = a[s + 1]), w && (i = function(t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t
                        }(i)), t.placement = r + (i ? "-" + i : ""), t.offsets.popper = zt({}, t.offsets.popper, re(t.instance.popper, t.offsets.reference, t.placement)), t = ie(t.instance.modifiers, t, "flip"))
                    })), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        r = t.offsets,
                        o = r.popper,
                        i = r.reference,
                        a = -1 !== ["left", "right"].indexOf(n),
                        l = -1 === ["top", "left"].indexOf(n);
                    return o[a ? "left" : "top"] = i[n] - (l ? o[a ? "width" : "height"] : 0), t.placement = ne(e), t.offsets.popper = Kt(o), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!ge(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        n = oe(t.instance.modifiers, (function(t) {
                            return "preventOverflow" === t.name
                        })).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.x,
                        r = e.y,
                        o = t.offsets.popper,
                        i = oe(t.instance.modifiers, (function(t) {
                            return "applyStyle" === t.name
                        })).gpuAcceleration;
                    void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a = void 0 !== i ? i : e.gpuAcceleration,
                        l = Lt(t.instance.popper),
                        s = Vt(l),
                        u = {
                            position: o.position
                        },
                        c = function(t, e) {
                            var n = t.offsets,
                                r = n.popper,
                                o = n.reference,
                                i = Math.round,
                                a = Math.floor,
                                l = function(t) {
                                    return t
                                },
                                s = i(o.width),
                                u = i(r.width),
                                c = -1 !== ["left", "right"].indexOf(t.placement),
                                f = -1 !== t.placement.indexOf("-"),
                                d = e ? c || f || s % 2 == u % 2 ? i : a : l,
                                h = e ? i : l;
                            return {
                                left: d(s % 2 == 1 && u % 2 == 1 && !f && e ? r.left - 1 : r.left),
                                top: h(r.top),
                                bottom: h(r.bottom),
                                right: d(r.right)
                            }
                        }(t, window.devicePixelRatio < 2 || !ve),
                        f = "bottom" === n ? "top" : "bottom",
                        d = "right" === r ? "left" : "right",
                        h = se("transform"),
                        p = void 0,
                        y = void 0;
                    if (y = "bottom" === f ? "HTML" === l.nodeName ? -l.clientHeight + c.bottom : -s.height + c.bottom : c.top, p = "right" === d ? "HTML" === l.nodeName ? -l.clientWidth + c.right : -s.width + c.right : c.left, a && h) u[h] = "translate3d(" + p + "px, " + y + "px, 0)", u[f] = 0, u[d] = 0, u.willChange = "transform";
                    else {
                        var m = "bottom" === f ? -1 : 1,
                            v = "right" === d ? -1 : 1;
                        u[f] = y * m, u[d] = p * v, u.willChange = f + ", " + d
                    }
                    var g = {
                        "x-placement": t.placement
                    };
                    return t.attributes = zt({}, g, t.attributes), t.styles = zt({}, u, t.styles), t.arrowStyles = zt({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    var e, n;
                    return me(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {
                        !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                    })), t.arrowElement && Object.keys(t.arrowStyles).length && me(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function(t, e, n, r, o) {
                    var i = te(o, e, t, n.positionFixed),
                        a = Jt(n.placement, i, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", a), me(e, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        },
        Se = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: Te
        },
        Ae = function() {
            function t(e, n) {
                var r = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Ft(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = Ot(this.update.bind(this)), this.options = zt({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(zt({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) {
                    r.options.modifiers[e] = zt({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                    return zt({
                        name: t
                    }, r.options.modifiers[t])
                })).sort((function(t, e) {
                    return t.order - e.order
                })), this.modifiers.forEach((function(t) {
                    t.enabled && kt(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                })), this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(), this.state.eventsEnabled = i
            }
            return Ut(t, [{
                key: "update",
                value: function() {
                    return ae.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return ue.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return he.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return pe.call(this)
                }
            }]), t
        }();
    Ae.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ae.placements = be, Ae.Defaults = Se;
    var Ne = Ae,
        Ce = "dropdown",
        je = "bs.dropdown",
        qe = "." + je,
        Le = ".data-api",
        Pe = r.default.fn[Ce],
        De = new RegExp("38|40|27"),
        Ie = "disabled",
        Re = "show",
        Me = "dropdown-menu-right",
        Be = "hide" + qe,
        He = "hidden" + qe,
        Fe = "show" + qe,
        Ue = "shown" + qe,
        We = "click" + qe,
        ze = "click" + qe + Le,
        Ke = "keydown" + qe + Le,
        Ve = "keyup" + qe + Le,
        Qe = '[data-toggle="dropdown"]',
        $e = ".dropdown-menu",
        Ye = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Xe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        Ze = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = t.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !r.default(this._element).hasClass(Ie)) {
                    var e = r.default(this._menu).hasClass(Re);
                    t._clearMenus(), e || this.show(!0)
                }
            }, e.show = function(e) {
                if (void 0 === e && (e = !1), !(this._element.disabled || r.default(this._element).hasClass(Ie) || r.default(this._menu).hasClass(Re))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        o = r.default.Event(Fe, n),
                        i = t._getParentFromElement(this._element);
                    if (r.default(i).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar && e) {
                            if (void 0 === Ne) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = i : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && r.default(i).addClass("position-static"), this._popper = new Ne(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === r.default(i).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), r.default(this._menu).toggleClass(Re), r.default(i).toggleClass(Re).trigger(r.default.Event(Ue, n))
                    }
                }
            }, e.hide = function() {
                if (!this._element.disabled && !r.default(this._element).hasClass(Ie) && r.default(this._menu).hasClass(Re)) {
                    var e = {
                            relatedTarget: this._element
                        },
                        n = r.default.Event(Be, e),
                        o = t._getParentFromElement(this._element);
                    r.default(o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass(Re), r.default(o).toggleClass(Re).trigger(r.default.Event(He, e)))
                }
            }, e.dispose = function() {
                r.default.removeData(this._element, je), r.default(this._element).off(qe), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                r.default(this._element).on(We, (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, e._getConfig = function(t) {
                return t = a({}, this.constructor.Default, r.default(this._element).data(), t), c.typeCheckConfig(Ce, t, this.constructor.DefaultType), t
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector($e))
                }
                return this._menu
            }, e._getPlacement = function() {
                var t = r.default(this._element.parentNode),
                    e = "bottom-start";
                return t.hasClass("dropup") ? e = r.default(this._menu).hasClass(Me) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : r.default(this._menu).hasClass(Me) && (e = "bottom-end"), e
            }, e._detectNavbar = function() {
                return r.default(this._element).closest(".navbar").length > 0
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element)), e
                } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), a({}, t, this._config.popperConfig)
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this).data(je);
                    if (n || (n = new t(this, "object" == typeof e ? e : null), r.default(this).data(je, n)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = [].slice.call(document.querySelectorAll(Qe)), o = 0, i = n.length; o < i; o++) {
                        var a = t._getParentFromElement(n[o]),
                            l = r.default(n[o]).data(je),
                            s = {
                                relatedTarget: n[o]
                            };
                        if (e && "click" === e.type && (s.clickEvent = e), l) {
                            var u = l._menu;
                            if (r.default(a).hasClass(Re) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && r.default.contains(a, e.target))) {
                                var c = r.default.Event(Be, s);
                                r.default(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), n[o].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), r.default(u).removeClass(Re), r.default(a).removeClass(Re).trigger(r.default.Event(He, s)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, n = c.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function(e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || r.default(e.target).closest($e).length) : !De.test(e.which)) && !this.disabled && !r.default(this).hasClass(Ie)) {
                    var n = t._getParentFromElement(this),
                        o = r.default(n).hasClass(Re);
                    if (o || 27 !== e.which) {
                        if (e.preventDefault(), e.stopPropagation(), !o || 27 === e.which || 32 === e.which) return 27 === e.which && r.default(n.querySelector(Qe)).trigger("focus"), void r.default(this).trigger("click");
                        var i = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                            return r.default(t).is(":visible")
                        }));
                        if (0 !== i.length) {
                            var a = i.indexOf(e.target);
                            38 === e.which && a > 0 && a--, 40 === e.which && a < i.length - 1 && a++, a < 0 && (a = 0), i[a].focus()
                        }
                    }
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ye
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Xe
                }
            }]), t
        }();
    r.default(document).on(Ke, Qe, Ze._dataApiKeydownHandler).on(Ke, $e, Ze._dataApiKeydownHandler).on(ze + " " + Ve, Ze._clearMenus).on(ze, Qe, (function(t) {
        t.preventDefault(), t.stopPropagation(), Ze._jQueryInterface.call(r.default(this), "toggle")
    })).on(ze, ".dropdown form", (function(t) {
        t.stopPropagation()
    })), r.default.fn[Ce] = Ze._jQueryInterface, r.default.fn[Ce].Constructor = Ze, r.default.fn[Ce].noConflict = function() {
        return r.default.fn[Ce] = Pe, Ze._jQueryInterface
    };
    var Ge = "modal",
        Je = "bs.modal",
        tn = "." + Je,
        en = r.default.fn[Ge],
        nn = "modal-open",
        rn = "fade",
        on = "show",
        an = "modal-static",
        ln = "hide" + tn,
        sn = "hidePrevented" + tn,
        un = "hidden" + tn,
        cn = "show" + tn,
        fn = "shown" + tn,
        dn = "focusin" + tn,
        hn = "resize" + tn,
        pn = "click.dismiss" + tn,
        yn = "keydown.dismiss" + tn,
        mn = "mouseup.dismiss" + tn,
        vn = "mousedown.dismiss" + tn,
        gn = "click" + tn + ".data-api",
        bn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        _n = ".sticky-top",
        wn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        xn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        En = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var e = t.prototype;
            return e.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, e.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    var n = r.default.Event(cn, {
                        relatedTarget: t
                    });
                    r.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, r.default(this._element).hasClass(rn) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r.default(this._element).on(pn, '[data-dismiss="modal"]', (function(t) {
                        return e.hide(t)
                    })), r.default(this._dialog).on(vn, (function() {
                        r.default(e._element).one(mn, (function(t) {
                            r.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return e._showElement(t)
                    })))
                }
            }, e.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = r.default.Event(ln);
                    if (r.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = r.default(this._element).hasClass(rn);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r.default(document).off(dn), r.default(this._element).removeClass(on), r.default(this._element).off(pn), r.default(this._dialog).off(vn), o) {
                            var i = c.getTransitionDurationFromElement(this._element);
                            r.default(this._element).one(c.TRANSITION_END, (function(t) {
                                return e._hideModal(t)
                            })).emulateTransitionEnd(i)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return r.default(t).off(tn)
                })), r.default(document).off(dn), r.default.removeData(this._element, Je), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(t) {
                return t = a({}, wn, t), c.typeCheckConfig(Ge, t, xn), t
            }, e._triggerBackdropTransition = function() {
                var t = this,
                    e = r.default.Event(sn);
                if (r.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add(an);
                    var o = c.getTransitionDurationFromElement(this._dialog);
                    r.default(this._element).off(c.TRANSITION_END), r.default(this._element).one(c.TRANSITION_END, (function() {
                        t._element.classList.remove(an), n || r.default(t._element).one(c.TRANSITION_END, (function() {
                            t._element.style.overflowY = ""
                        })).emulateTransitionEnd(t._element, o)
                    })).emulateTransitionEnd(o), this._element.focus()
                }
            }, e._showElement = function(t) {
                var e = this,
                    n = r.default(this._element).hasClass(rn),
                    o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), r.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && c.reflow(this._element), r.default(this._element).addClass(on), this._config.focus && this._enforceFocus();
                var i = r.default.Event(fn, {
                        relatedTarget: t
                    }),
                    a = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, r.default(e._element).trigger(i)
                    };
                if (n) {
                    var l = c.getTransitionDurationFromElement(this._dialog);
                    r.default(this._dialog).one(c.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, e._enforceFocus = function() {
                var t = this;
                r.default(document).off(dn).on(dn, (function(e) {
                    document !== e.target && t._element !== e.target && 0 === r.default(t._element).has(e.target).length && t._element.focus()
                }))
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown ? r.default(this._element).on(yn, (function(e) {
                    t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
                })) : this._isShown || r.default(this._element).off(yn)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? r.default(window).on(hn, (function(e) {
                    return t.handleUpdate(e)
                })) : r.default(window).off(hn)
            }, e._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                    r.default(document.body).removeClass(nn), t._resetAdjustments(), t._resetScrollbar(), r.default(t._element).trigger(un)
                }))
            }, e._removeBackdrop = function() {
                this._backdrop && (r.default(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(t) {
                var e = this,
                    n = r.default(this._element).hasClass(rn) ? rn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), r.default(this._backdrop).appendTo(document.body), r.default(this._element).on(pn, (function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                        })), n && c.reflow(this._backdrop), r.default(this._backdrop).addClass(on), !t) return;
                    if (!n) return void t();
                    var o = c.getTransitionDurationFromElement(this._backdrop);
                    r.default(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    r.default(this._backdrop).removeClass(on);
                    var i = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (r.default(this._element).hasClass(rn)) {
                        var a = c.getTransitionDurationFromElement(this._backdrop);
                        r.default(this._backdrop).one(c.TRANSITION_END, i).emulateTransitionEnd(a)
                    } else i()
                } else t && t()
            }, e._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(bn)),
                        n = [].slice.call(document.querySelectorAll(_n));
                    r.default(e).each((function(e, n) {
                        var o = n.style.paddingRight,
                            i = r.default(n).css("padding-right");
                        r.default(n).data("padding-right", o).css("padding-right", parseFloat(i) + t._scrollbarWidth + "px")
                    })), r.default(n).each((function(e, n) {
                        var o = n.style.marginRight,
                            i = r.default(n).css("margin-right");
                        r.default(n).data("margin-right", o).css("margin-right", parseFloat(i) - t._scrollbarWidth + "px")
                    }));
                    var o = document.body.style.paddingRight,
                        i = r.default(document.body).css("padding-right");
                    r.default(document.body).data("padding-right", o).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                r.default(document.body).addClass(nn)
            }, e._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(bn));
                r.default(t).each((function(t, e) {
                    var n = r.default(e).data("padding-right");
                    r.default(e).removeData("padding-right"), e.style.paddingRight = n || ""
                }));
                var e = [].slice.call(document.querySelectorAll("" + _n));
                r.default(e).each((function(t, e) {
                    var n = r.default(e).data("margin-right");
                    void 0 !== n && r.default(e).css("margin-right", n).removeData("margin-right")
                }));
                var n = r.default(document.body).data("padding-right");
                r.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(e, n) {
                return this.each((function() {
                    var o = r.default(this).data(Je),
                        i = a({}, wn, r.default(this).data(), "object" == typeof e && e ? e : {});
                    if (o || (o = new t(this, i), r.default(this).data(Je, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](n)
                    } else i.show && o.show(n)
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return wn
                }
            }]), t
        }();
    r.default(document).on(gn, '[data-toggle="modal"]', (function(t) {
        var e, n = this,
            o = c.getSelectorFromElement(this);
        o && (e = document.querySelector(o));
        var i = r.default(e).data(Je) ? "toggle" : a({}, r.default(e).data(), r.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var l = r.default(e).one(cn, (function(t) {
            t.isDefaultPrevented() || l.one(un, (function() {
                r.default(n).is(":visible") && n.focus()
            }))
        }));
        En._jQueryInterface.call(r.default(e), i, this)
    })), r.default.fn[Ge] = En._jQueryInterface, r.default.fn[Ge].Constructor = En, r.default.fn[Ge].noConflict = function() {
        return r.default.fn[Ge] = en, En._jQueryInterface
    };
    var On = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        kn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Tn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Sn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function An(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var r = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), i = [].slice.call(r.body.querySelectorAll("*")), a = function(t, n) {
                var r = i[t],
                    a = r.nodeName.toLowerCase();
                if (-1 === o.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                var l = [].slice.call(r.attributes),
                    s = [].concat(e["*"] || [], e[a] || []);
                l.forEach((function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === On.indexOf(n) || Boolean(Tn.test(t.nodeValue) || Sn.test(t.nodeValue));
                        for (var r = e.filter((function(t) {
                                return t instanceof RegExp
                            })), o = 0, i = r.length; o < i; o++)
                            if (r[o].test(n)) return !0;
                        return !1
                    })(t, s) || r.removeAttribute(t.nodeName)
                }))
            }, l = 0, s = i.length; l < s; l++) a(l);
        return r.body.innerHTML
    }
    var Nn = "tooltip",
        Cn = "bs.tooltip",
        jn = "." + Cn,
        qn = r.default.fn[Nn],
        Ln = "bs-tooltip",
        Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
        Dn = ["sanitize", "whiteList", "sanitizeFn"],
        In = "fade",
        Rn = "show",
        Mn = "show",
        Bn = "out",
        Hn = "hover",
        Fn = "focus",
        Un = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Wn = {
            animation: !0,
            tool: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: kn,
            popperConfig: null
        },
        zn = {
            animation: "boolean",
            tool: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Kn = {
            HIDE: "hide" + jn,
            HIDDEN: "hidden" + jn,
            SHOW: "show" + jn,
            SHOWN: "shown" + jn,
            INSERTED: "inserted" + jn,
            CLICK: "click" + jn,
            FOCUSIN: "focusin" + jn,
            FOCUSOUT: "focusout" + jn,
            MOUSEENTER: "mouseenter" + jn,
            MOUSELEAVE: "mouseleave" + jn
        },
        Vn = function() {
            function t(t, e) {
                if (void 0 === Ne) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var e = t.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = r.default(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), r.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (r.default(this.getTipElement()).hasClass(Rn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), r.default.removeData(this.element, this.constructor.DATA_KEY), r.default(this.element).off(this.constructor.EVENT_KEY), r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && r.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = r.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    r.default(this.element).trigger(e);
                    var n = c.findShadowRoot(this.element),
                        o = r.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !o) return;
                    var i = this.getTipElement(),
                        a = c.getUID(this.constructor.NAME);
                    i.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && r.default(i).addClass(In);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(l);
                    this.addAttachmentClass(s);
                    var u = this._getContainer();
                    r.default(i).data(this.constructor.DATA_KEY, this), r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(i).appendTo(u), r.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ne(this.element, i, this._getPopperConfig(s)), r.default(i).addClass(Rn), r.default(i).addClass(this.config.customClass), "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                    var f = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, r.default(t.element).trigger(t.constructor.Event.SHOWN), e === Bn && t._leave(null, t)
                    };
                    if (r.default(this.tip).hasClass(In)) {
                        var d = c.getTransitionDurationFromElement(this.tip);
                        r.default(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(d)
                    } else f()
                }
            }, e.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    o = r.default.Event(this.constructor.Event.HIDE),
                    i = function() {
                        e._hoverState !== Mn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), r.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (r.default(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (r.default(n).removeClass(Rn), "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), this._activeTrigger.click = !1, this._activeTrigger[Fn] = !1, this._activeTrigger[Hn] = !1, r.default(this.tip).hasClass(In)) {
                        var a = c.getTransitionDurationFromElement(n);
                        r.default(n).one(c.TRANSITION_END, i).emulateTransitionEnd(a)
                    } else i();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(t) {
                r.default(this.getTipElement()).addClass(Ln + "-" + t)
            }, e.getTipElement = function() {
                return this.tip = this.tip || r.default(this.config.tool)[0], this.tip
            }, e.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(r.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), r.default(t).removeClass(In + " " + Rn)
            }, e.setElementContent = function(t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = An(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? r.default(e).parent().is(t) || t.empty().append(e) : t.text(r.default(e).text())
            }, e.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, e._getPopperConfig = function(t) {
                var e = this;
                return a({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }, this.config.popperConfig)
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element)), e
                } : e.offset = this.config.offset, e
            }, e._getContainer = function() {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container)
            }, e._getAttachment = function(t) {
                return Un[t.toUpperCase()]
            }, e._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) r.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== e) {
                        var n = e === Hn ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = e === Hn ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        r.default(t.element).on(n, t.config.selector, (function(e) {
                            return t._enter(e)
                        })).on(o, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t.element && t.hide()
                }, r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || r.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), r.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Fn : Hn] = !0), r.default(e.getTipElement()).hasClass(Rn) || e._hoverState === Mn ? e._hoverState = Mn : (clearTimeout(e._timeout), e._hoverState = Mn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                    e._hoverState === Mn && e.show()
                }), e.config.delay.show) : e.show())
            }, e._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || r.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), r.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Fn : Hn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Bn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                    e._hoverState === Bn && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, e._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, e._getConfig = function(t) {
                var e = r.default(this.element).data();
                return Object.keys(e).forEach((function(t) {
                    -1 !== Dn.indexOf(t) && delete e[t]
                })), "number" == typeof(t = a({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c.typeCheckConfig(Nn, t, this.constructor.DefaultType), t.sanitize && (t.tool = An(t.tool, t.whiteList, t.sanitizeFn)), t
            }, e._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, e._cleanTipClass = function() {
                var t = r.default(this.getTipElement()),
                    e = t.attr("class").match(Pn);
                null !== e && e.length && t.removeClass(e.join(""))
            }, e._handlePopperPlacementChange = function(t) {
                this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, e._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (r.default(t).removeClass(In), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this),
                        o = n.data(Cn),
                        i = "object" == typeof e && e;
                    if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this, i), n.data(Cn, o)), "string" == typeof e)) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return Wn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Nn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Cn
                }
            }, {
                key: "Event",
                get: function() {
                    return Kn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return jn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return zn
                }
            }]), t
        }();
    r.default.fn[Nn] = Vn._jQueryInterface, r.default.fn[Nn].Constructor = Vn, r.default.fn[Nn].noConflict = function() {
        return r.default.fn[Nn] = qn, Vn._jQueryInterface
    };
    var Qn = "popover",
        $n = "bs.popover",
        Yn = "." + $n,
        Xn = r.default.fn[Qn],
        Zn = "bs-popover",
        Gn = new RegExp("(^|\\s)" + Zn + "\\S+", "g"),
        Jn = a({}, Vn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            tool: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        tr = a({}, Vn.DefaultType, {
            content: "(string|element|function)"
        }),
        er = {
            HIDE: "hide" + Yn,
            HIDDEN: "hidden" + Yn,
            SHOW: "show" + Yn,
            SHOWN: "shown" + Yn,
            INSERTED: "inserted" + Yn,
            CLICK: "click" + Yn,
            FOCUSIN: "focusin" + Yn,
            FOCUSOUT: "focusout" + Yn,
            MOUSEENTER: "mouseenter" + Yn,
            MOUSELEAVE: "mouseleave" + Yn
        },
        nr = function(t) {
            var e, n;

            function o() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, l(e, n);
            var a = o.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(t) {
                r.default(this.getTipElement()).addClass(Zn + "-" + t)
            }, a.getTipElement = function() {
                return this.tip = this.tip || r.default(this.config.tool)[0], this.tip
            }, a.setContent = function() {
                var t = r.default(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var t = r.default(this.getTipElement()),
                    e = t.attr("class").match(Gn);
                null !== e && e.length > 0 && t.removeClass(e.join(""))
            }, o._jQueryInterface = function(t) {
                return this.each((function() {
                    var e = r.default(this).data($n),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), r.default(this).data($n, e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, i(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return Jn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Qn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return $n
                }
            }, {
                key: "Event",
                get: function() {
                    return er
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Yn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return tr
                }
            }]), o
        }(Vn);
    r.default.fn[Qn] = nr._jQueryInterface, r.default.fn[Qn].Constructor = nr, r.default.fn[Qn].noConflict = function() {
        return r.default.fn[Qn] = Xn, nr._jQueryInterface
    };
    var rr = "scrollspy",
        or = "bs.scrollspy",
        ir = "." + or,
        ar = r.default.fn[rr],
        lr = "active",
        sr = "activate" + ir,
        ur = "scroll" + ir,
        cr = "load" + ir + ".data-api",
        fr = "position",
        dr = ".nav, .list-group",
        hr = ".nav-link",
        pr = ".list-group-item",
        yr = {
            offset: 10,
            method: "auto",
            target: ""
        },
        mr = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        vr = function() {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + hr + "," + this._config.target + " " + pr + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, r.default(this._scrollElement).on(ur, (function(t) {
                    return n._process(t)
                })), this.refresh(), this._process()
            }
            var e = t.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : fr,
                    n = "auto" === this._config.method ? e : this._config.method,
                    o = n === fr ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                    var e, i = c.getSelectorFromElement(t);
                    if (i && (e = document.querySelector(i)), e) {
                        var a = e.getBoundingClientRect();
                        if (a.width || a.height) return [r.default(e)[n]().top + o, i]
                    }
                    return null
                })).filter(Boolean).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, e.dispose = function() {
                r.default.removeData(this._element, or), r.default(this._scrollElement).off(ir), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(t) {
                if ("string" != typeof(t = a({}, yr, "object" == typeof t && t ? t : {})).target && c.isElement(t.target)) {
                    var e = r.default(t.target).attr("id");
                    e || (e = c.getUID(rr), r.default(t.target).attr("id", e)), t.target = "#" + e
                }
                return c.typeCheckConfig(rr, t, mr), t
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    n = r.default([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(lr), n.addClass(lr)) : (n.addClass(lr), n.parents(dr).prev(hr + ", " + pr).addClass(lr), n.parents(dr).prev(".nav-item").children(hr).addClass(lr)), r.default(this._scrollElement).trigger(sr, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                    return t.classList.contains(lr)
                })).forEach((function(t) {
                    return t.classList.remove(lr)
                }))
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this).data(or);
                    if (n || (n = new t(this, "object" == typeof e && e), r.default(this).data(or, n)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "Default",
                get: function() {
                    return yr
                }
            }]), t
        }();
    r.default(window).on(cr, (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
            var n = r.default(t[e]);
            vr._jQueryInterface.call(n, n.data())
        }
    })), r.default.fn[rr] = vr._jQueryInterface, r.default.fn[rr].Constructor = vr, r.default.fn[rr].noConflict = function() {
        return r.default.fn[rr] = ar, vr._jQueryInterface
    };
    var gr = "tab",
        br = "bs.tab",
        _r = "." + br,
        wr = r.default.fn[gr],
        xr = "active",
        Er = "fade",
        Or = "show",
        kr = "hide" + _r,
        Tr = "hidden" + _r,
        Sr = "show" + _r,
        Ar = "shown" + _r,
        Nr = "click" + _r + ".data-api",
        Cr = ".active",
        jr = "> li > .active",
        qr = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass(xr) || r.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
                    var e, n, o = r.default(this._element).closest(".nav, .list-group")[0],
                        i = c.getSelectorFromElement(this._element);
                    if (o) {
                        var a = "UL" === o.nodeName || "OL" === o.nodeName ? jr : Cr;
                        n = (n = r.default.makeArray(r.default(o).find(a)))[n.length - 1]
                    }
                    var l = r.default.Event(kr, {
                            relatedTarget: this._element
                        }),
                        s = r.default.Event(Sr, {
                            relatedTarget: n
                        });
                    if (n && r.default(n).trigger(l), r.default(this._element).trigger(s), !s.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        i && (e = document.querySelector(i)), this._activate(this._element, o);
                        var u = function() {
                            var e = r.default.Event(Tr, {
                                    relatedTarget: t._element
                                }),
                                o = r.default.Event(Ar, {
                                    relatedTarget: n
                                });
                            r.default(n).trigger(e), r.default(t._element).trigger(o)
                        };
                        e ? this._activate(e, e.parentNode, u) : u()
                    }
                }
            }, e.dispose = function() {
                r.default.removeData(this._element, br), this._element = null
            }, e._activate = function(t, e, n) {
                var o = this,
                    i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? r.default(e).children(Cr) : r.default(e).find(jr))[0],
                    a = n && i && r.default(i).hasClass(Er),
                    l = function() {
                        return o._transitionComplete(t, i, n)
                    };
                if (i && a) {
                    var s = c.getTransitionDurationFromElement(i);
                    r.default(i).removeClass(Or).one(c.TRANSITION_END, l).emulateTransitionEnd(s)
                } else l()
            }, e._transitionComplete = function(t, e, n) {
                if (e) {
                    r.default(e).removeClass(xr);
                    var o = r.default(e.parentNode).find("> .dropdown-menu .active")[0];
                    o && r.default(o).removeClass(xr), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                r.default(t).addClass(xr), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), c.reflow(t), t.classList.contains(Er) && t.classList.add(Or);
                var i = t.parentNode;
                if (i && "LI" === i.nodeName && (i = i.parentNode), i && r.default(i).hasClass("dropdown-menu")) {
                    var a = r.default(t).closest(".dropdown")[0];
                    if (a) {
                        var l = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
                        r.default(l).addClass(xr)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this),
                        o = n.data(br);
                    if (o || (o = new t(this), n.data(br, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }]), t
        }();
    r.default(document).on(Nr, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(), qr._jQueryInterface.call(r.default(this), "show")
    })), r.default.fn[gr] = qr._jQueryInterface, r.default.fn[gr].Constructor = qr, r.default.fn[gr].noConflict = function() {
        return r.default.fn[gr] = wr, qr._jQueryInterface
    };
    var Lr = "toast",
        Pr = "bs.toast",
        Dr = "." + Pr,
        Ir = r.default.fn[Lr],
        Rr = "hide",
        Mr = "show",
        Br = "showing",
        Hr = "click.dismiss" + Dr,
        Fr = "hide" + Dr,
        Ur = "hidden" + Dr,
        Wr = "show" + Dr,
        zr = "shown" + Dr,
        Kr = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Vr = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Qr = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var e = t.prototype;
            return e.show = function() {
                var t = this,
                    e = r.default.Event(Wr);
                if (r.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var n = function() {
                        t._element.classList.remove(Br), t._element.classList.add(Mr), r.default(t._element).trigger(zr), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove(Rr), c.reflow(this._element), this._element.classList.add(Br), this._config.animation) {
                        var o = c.getTransitionDurationFromElement(this._element);
                        r.default(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(o)
                    } else n()
                }
            }, e.hide = function() {
                if (this._element.classList.contains(Mr)) {
                    var t = r.default.Event(Fr);
                    r.default(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                }
            }, e.dispose = function() {
                this._clearTimeout(), this._element.classList.contains(Mr) && this._element.classList.remove(Mr), r.default(this._element).off(Hr), r.default.removeData(this._element, Pr), this._element = null, this._config = null
            }, e._getConfig = function(t) {
                return t = a({}, Kr, r.default(this._element).data(), "object" == typeof t && t ? t : {}), c.typeCheckConfig(Lr, t, this.constructor.DefaultType), t
            }, e._setListeners = function() {
                var t = this;
                r.default(this._element).on(Hr, '[data-dismiss="toast"]', (function() {
                    return t.hide()
                }))
            }, e._close = function() {
                var t = this,
                    e = function() {
                        t._element.classList.add(Rr), r.default(t._element).trigger(Ur)
                    };
                if (this._element.classList.remove(Mr), this._config.animation) {
                    var n = c.getTransitionDurationFromElement(this._element);
                    r.default(this._element).one(c.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, e._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = r.default(this),
                        o = n.data(Pr);
                    if (o || (o = new t(this, "object" == typeof e && e), n.data(Pr, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](this)
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.2"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Vr
                }
            }, {
                key: "Default",
                get: function() {
                    return Kr
                }
            }]), t
        }();
    r.default.fn[Lr] = Qr._jQueryInterface, r.default.fn[Lr].Constructor = Qr, r.default.fn[Lr].noConflict = function() {
        return r.default.fn[Lr] = Ir, Qr._jQueryInterface
    }, t.Alert = g, t.Button = j, t.Carousel = rt, t.Collapse = wt, t.Dropdown = Ze, t.Modal = En, t.Popover = nr, t.Scrollspy = vr, t.Tab = qr, t.Toast = Qr, t.Tooltip = Vn, t.Util = c, Object.defineProperty(t, "__esModule", {
        value: !0
    })
})),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, (function() {
    return e = {
        686: function(t, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return m
                }
            });
            e = n(279);
            var r = n.n(e),
                o = (e = n(370), n.n(e)),
                i = (e = n(817), n.n(e));

            function a(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }
            var l = function(t) {
                return t = i()(t), a("cut"), t
            };

            function s(t, e) {
                var n, r;
                n = t, r = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[r ? "right" : "left"] = "-9999px", r = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(r, "px"), t.setAttribute("readonly", ""), t.value = n;
                return e.container.appendChild(t), e = i()(t), a("copy"), t.remove(), e
            }
            var u = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        container: document.body
                    },
                    n = "";
                return "string" == typeof t ? n = s(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = s(t.value, e) : (n = i()(t), a("copy")), n
            };

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f(t) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function y(t, e) {
                if (t = "data-clipboard-".concat(t), e.hasAttribute(t)) return e.getAttribute(t)
            }
            var m = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && h(t, e)
                }(a, r());
                var t, e, n, i = function(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = p(t);
                        return n = e ? (n = p(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this, !n || "object" !== f(n) && "function" != typeof n ? function(t) {
                            if (void 0 !== t) return t;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(r) : n
                    }
                }(a);

                function a(t, e) {
                    var n;
                    return function(t) {
                        if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this), (n = i.call(this)).resolveOptions(e), n.listenClick(t), n
                }
                return t = a, n = [{
                    key: "copy",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return u(t, e)
                    }
                }, {
                    key: "cut",
                    value: function(t) {
                        return l(t)
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        var t = "string" == typeof(t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [t] : t,
                            e = !!document.queryCommandSupported;
                        return t.forEach((function(t) {
                            e = e && !!document.queryCommandSupported(t)
                        })), e
                    }
                }], (e = [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === f(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = o()(t, "click", (function(t) {
                            return e.onClick(t)
                        }))
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget,
                            n = this.action(e) || "copy";
                        t = function() {
                            var t = void 0 === (n = (r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : n,
                                e = r.container,
                                n = r.target,
                                r = r.text;
                            if ("copy" !== t && "cut" !== t) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (void 0 !== n) {
                                if (!n || "object" !== c(n) || 1 !== n.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === t && n.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === t && (n.hasAttribute("readonly") || n.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                            }
                            return r ? u(r, {
                                container: e
                            }) : n ? "cut" === t ? l(n) : u(n, {
                                container: e
                            }) : void 0
                        }({
                            action: n,
                            container: this.container,
                            target: this.target(e),
                            text: this.text(e)
                        });
                        this.emit(t ? "success" : "error", {
                            action: n,
                            text: t,
                            trigger: e,
                            clearSelection: function() {
                                e && e.focus(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return y("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        if (t = y("target", t)) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return y("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]) && d(t.prototype, e), n && d(t, n), a
            }()
        },
        828: function(t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        },
        438: function(t, e, n) {
            var r = n(828);

            function o(t, e, n, o, i) {
                var a = function(t, e, n, o) {
                    return function(n) {
                        n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
                    }
                }.apply(this, arguments);
                return t.addEventListener(n, a, i), {
                    destroy: function() {
                        t.removeEventListener(n, a, i)
                    }
                }
            }
            t.exports = function(t, e, n, r, i) {
                return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                    return o(t, e, n, r, i)
                })))
            }
        },
        879: function(t, e) {
            e.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, e.nodeList = function(t) {
                var n = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
            }, e.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, e.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function(t, e, n) {
            var r = n(879),
                o = n(438);
            t.exports = function(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!r.string(e)) throw new TypeError("Second argument must be a String");
                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                if (r.node(t)) return u = e, c = n, (s = t).addEventListener(u, c), {
                    destroy: function() {
                        s.removeEventListener(u, c)
                    }
                };
                if (r.nodeList(t)) return i = t, a = e, l = n, Array.prototype.forEach.call(i, (function(t) {
                    t.addEventListener(a, l)
                })), {
                    destroy: function() {
                        Array.prototype.forEach.call(i, (function(t) {
                            t.removeEventListener(a, l)
                        }))
                    }
                };
                if (r.string(t)) return o(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var i, a, l, s, u, c
            }
        },
        817: function(t) {
            t.exports = function(t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), n = window.getSelection(), (e = document.createRange()).selectNodeContents(t), n.removeAllRanges(), n.addRange(e), n.toString());
                return n
            }
        },
        279: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    var r = this;

                    function o() {
                        r.off(t, o), e.apply(n, arguments)
                    }
                    return o._ = e, this.on(t, o, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        r = n[t],
                        o = [];
                    if (r && e)
                        for (var i = 0, a = r.length; i < a; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                    return o.length ? n[t] = o : delete n[t], this
                }
            }, t.exports = e, t.exports.TinyEmitter = e
        }
    }, n = {}, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, {
            a: n
        }), n
    }, t.d = function(e, n) {
        for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r]
        })
    }, t.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, t(686).default;

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {}
        };
        return e[r](o, o.exports, t), o.exports
    }
    var e, n
})),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quill = e() : t.Quill = e()
}("undefined" != typeof self ? self : this, (function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 45)
    }([function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(17),
            o = n(18),
            i = n(19),
            a = n(48),
            l = n(49),
            s = n(50),
            u = n(51),
            c = n(52),
            f = n(11),
            d = n(29),
            h = n(30),
            p = n(28),
            y = n(1),
            m = {
                Scope: y.Scope,
                create: y.create,
                find: y.find,
                query: y.query,
                register: y.register,
                Container: r.default,
                Format: o.default,
                Leaf: i.default,
                Embed: u.default,
                Scroll: a.default,
                Block: s.default,
                Inline: l.default,
                Text: c.default,
                Attributor: {
                    Attribute: f.default,
                    Class: d.default,
                    Style: h.default,
                    Store: p.default
                }
            };
        e.default = m
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n;
            if (void 0 === e && (e = a.ANY), "string" == typeof t) n = c[t] || l[t];
            else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = c.text;
            else if ("number" == typeof t) t & a.LEVEL & a.BLOCK ? n = c.block : t & a.LEVEL & a.INLINE && (n = c.inline);
            else if (t instanceof HTMLElement) {
                var r = (t.getAttribute("class") || "").split(/\s+/);
                for (var o in r)
                    if (n = s[r[o]]) break;
                n = n || u[t.tagName]
            }
            return null == n ? null : e & a.LEVEL & n.scope && e & a.TYPE & n.scope ? n : null
        }
        var o = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e(e) {
                var n = this;
                return e = "[Parchment] " + e, (n = t.call(this, e) || this).message = e, n.name = n.constructor.name, n
            }
            return o(e, t), e
        }(Error);
        e.ParchmentError = i;
        var a, l = {},
            s = {},
            u = {},
            c = {};
        e.DATA_KEY = "__blot",
            function(t) {
                t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
            }(a = e.Scope || (e.Scope = {})), e.create = function(t, e) {
                var n = r(t);
                if (null == n) throw new i("Unable to create " + t + " blot");
                var o = n;
                return new o(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : o.create(e), e)
            }, e.find = function t(n, r) {
                return void 0 === r && (r = !1), null == n ? null : null != n[e.DATA_KEY] ? n[e.DATA_KEY].blot : r ? t(n.parentNode, r) : null
            }, e.query = r, e.register = function t() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                if (e.length > 1) return e.map((function(e) {
                    return t(e)
                }));
                var r = e[0];
                if ("string" != typeof r.blotName && "string" != typeof r.attrName) throw new i("Invalid definition");
                if ("abstract" === r.blotName) throw new i("Cannot register abstract class");
                if (c[r.blotName || r.attrName] = r, "string" == typeof r.keyName) l[r.keyName] = r;
                else if (null != r.className && (s[r.className] = r), null != r.tagName) {
                    Array.isArray(r.tagName) ? r.tagName = r.tagName.map((function(t) {
                        return t.toUpperCase()
                    })) : r.tagName = r.tagName.toUpperCase();
                    var o = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
                    o.forEach((function(t) {
                        null != u[t] && null != r.className || (u[t] = r)
                    }))
                }
                return r
            }
    }, function(t, e) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString,
            o = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor,
            a = function(t) {
                return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t)
            },
            l = function(t) {
                if (!t || "[object Object]" !== r.call(t)) return !1;
                var e, o = n.call(t, "constructor"),
                    i = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                if (t.constructor && !o && !i) return !1;
                for (e in t);
                return void 0 === e || n.call(t, e)
            },
            s = function(t, e) {
                o && "__proto__" === e.name ? o(t, e.name, {
                    enumerable: !0,
                    configurable: !0,
                    value: e.newValue,
                    writable: !0
                }) : t[e.name] = e.newValue
            },
            u = function(t, e) {
                if ("__proto__" === e) {
                    if (!n.call(t, e)) return;
                    if (i) return i(t, e).value
                }
                return t[e]
            };
        t.exports = function t() {
            var e, n, r, o, i, c, f = arguments[0],
                d = 1,
                h = arguments.length,
                p = !1;
            for ("boolean" == typeof f && (p = f, f = arguments[1] || {}, d = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); d < h; ++d)
                if (null != (e = arguments[d]))
                    for (n in e) r = u(f, n), f !== (o = u(e, n)) && (p && o && (l(o) || (i = a(o))) ? (i ? (i = !1, c = r && a(r) ? r : []) : c = r && l(r) ? r : {}, s(f, {
                        name: n,
                        newValue: t(p, c, o)
                    })) : void 0 !== o && s(f, {
                        name: n,
                        newValue: o
                    }));
            return f
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function l(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return null == t ? e : ("function" == typeof t.formats && (e = (0, c.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : l(t.parent, e))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            c = r(n(2)),
            f = r(n(4)),
            d = r(n(0)),
            h = r(n(14)),
            p = r(n(5)),
            y = r(n(8)),
            m = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, t), s(e, [{
                    key: "attach",
                    value: function() {
                        u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new d.default.Attributor.Store(this.domNode)
                    }
                }, {
                    key: "delta",
                    value: function() {
                        return (new f.default).insert(this.value(), (0, c.default)(this.formats(), this.attributes.values()))
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        var n = d.default.query(t, d.default.Scope.BLOCK_ATTRIBUTE);
                        null != n && this.attributes.attribute(n, e)
                    }
                }, {
                    key: "formatAt",
                    value: function(t, e, n, r) {
                        this.format(n, r)
                    }
                }, {
                    key: "insertAt",
                    value: function(t, n, r) {
                        if ("string" == typeof n && n.endsWith("\n")) {
                            var o = d.default.create(v.blotName);
                            this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, n.slice(0, -1))
                        } else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r)
                    }
                }]), e
            }(d.default.Embed);
        m.scope = d.default.Scope.BLOCK_BLOT;
        var v = function(t) {
            function e(t) {
                o(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return n.cache = {}, n
            }
            return a(e, t), s(e, [{
                key: "delta",
                value: function() {
                    return null == this.cache.delta && (this.cache.delta = this.descendants(d.default.Leaf).reduce((function(t, e) {
                        return 0 === e.length() ? t : t.insert(e.value(), l(e))
                    }), new f.default).insert("\n", l(this))), this.cache.delta
                }
            }, {
                key: "deleteAt",
                value: function(t, n) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {}
                }
            }, {
                key: "formatAt",
                value: function(t, n, r, o) {
                    n <= 0 || (d.default.query(r, d.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, o), this.cache = {})
                }
            }, {
                key: "insertAt",
                value: function(t, n, r) {
                    if (null != r) return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                    if (0 !== n.length) {
                        var o = n.split("\n"),
                            i = o.shift();
                        i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
                        var a = this;
                        o.reduce((function(t, e) {
                            return (a = a.split(t, !0)).insertAt(0, e), e.length
                        }), t + i.length)
                    }
                }
            }, {
                key: "insertBefore",
                value: function(t, n) {
                    var r = this.children.head;
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), r instanceof h.default && r.remove(), this.cache = {}
                }
            }, {
                key: "length",
                value: function() {
                    return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length
                }
            }, {
                key: "moveChildren",
                value: function(t, n) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {}
                }
            }, {
                key: "optimize",
                value: function(t) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {}
                }
            }, {
                key: "path",
                value: function(t) {
                    return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0)
                }
            }, {
                key: "removeChild",
                value: function(t) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {}
                }
            }, {
                key: "split",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (n && (0 === t || t >= this.length() - 1)) {
                        var r = this.clone();
                        return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r)
                    }
                    var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);
                    return this.cache = {}, o
                }
            }]), e
        }(d.default.Block);
        v.blotName = "block", v.tagName = "P", v.defaultChild = "break", v.allowedChildren = [p.default, d.default.Embed, y.default], e.bubbleFormats = l, e.BlockEmbed = m, e.default = v
    }, function(t, e, n) {
        var r = n(54),
            o = n(12),
            i = n(2),
            a = n(20),
            l = String.fromCharCode(0),
            s = function(t) {
                Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
            };
        s.prototype.insert = function(t, e) {
            var n = {};
            return 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n))
        }, s.prototype.delete = function(t) {
            return t <= 0 ? this : this.push({
                delete: t
            })
        }, s.prototype.retain = function(t, e) {
            if (t <= 0) return this;
            var n = {
                retain: t
            };
            return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)
        }, s.prototype.push = function(t) {
            var e = this.ops.length,
                n = this.ops[e - 1];
            if (t = i(!0, {}, t), "object" == typeof n) {
                if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
                    delete: n.delete + t.delete
                }, this;
                if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;
                if (o(t.attributes, n.attributes)) {
                    if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
                        insert: n.insert + t.insert
                    }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
                    if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
                        retain: n.retain + t.retain
                    }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
                }
            }
            return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
        }, s.prototype.chop = function() {
            var t = this.ops[this.ops.length - 1];
            return t && t.retain && !t.attributes && this.ops.pop(), this
        }, s.prototype.filter = function(t) {
            return this.ops.filter(t)
        }, s.prototype.forEach = function(t) {
            this.ops.forEach(t)
        }, s.prototype.map = function(t) {
            return this.ops.map(t)
        }, s.prototype.partition = function(t) {
            var e = [],
                n = [];
            return this.forEach((function(r) {
                (t(r) ? e : n).push(r)
            })), [e, n]
        }, s.prototype.reduce = function(t, e) {
            return this.ops.reduce(t, e)
        }, s.prototype.changeLength = function() {
            return this.reduce((function(t, e) {
                return e.insert ? t + a.length(e) : e.delete ? t - e.delete : t
            }), 0)
        }, s.prototype.length = function() {
            return this.reduce((function(t, e) {
                return t + a.length(e)
            }), 0)
        }, s.prototype.slice = function(t, e) {
            t = t || 0, "number" != typeof e && (e = 1 / 0);
            for (var n = [], r = a.iterator(this.ops), o = 0; o < e && r.hasNext();) {
                var i;
                o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += a.length(i)
            }
            return new s(n)
        }, s.prototype.compose = function(t) {
            var e = a.iterator(this.ops),
                n = a.iterator(t.ops),
                r = [],
                i = n.peek();
            if (null != i && "number" == typeof i.retain && null == i.attributes) {
                for (var l = i.retain;
                    "insert" === e.peekType() && e.peekLength() <= l;) l -= e.peekLength(), r.push(e.next());
                i.retain - l > 0 && n.next(i.retain - l)
            }
            for (var u = new s(r); e.hasNext() || n.hasNext();)
                if ("insert" === n.peekType()) u.push(n.next());
                else if ("delete" === e.peekType()) u.push(e.next());
            else {
                var c = Math.min(e.peekLength(), n.peekLength()),
                    f = e.next(c),
                    d = n.next(c);
                if ("number" == typeof d.retain) {
                    var h = {};
                    "number" == typeof f.retain ? h.retain = c : h.insert = f.insert;
                    var p = a.attributes.compose(f.attributes, d.attributes, "number" == typeof f.retain);
                    if (p && (h.attributes = p), u.push(h), !n.hasNext() && o(u.ops[u.ops.length - 1], h)) {
                        var y = new s(e.rest());
                        return u.concat(y).chop()
                    }
                } else "number" == typeof d.delete && "number" == typeof f.retain && u.push(d)
            }
            return u.chop()
        }, s.prototype.concat = function(t) {
            var e = new s(this.ops.slice());
            return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e
        }, s.prototype.diff = function(t, e) {
            if (this.ops === t.ops) return new s;
            var n = [this, t].map((function(e) {
                    return e.map((function(n) {
                        if (null != n.insert) return "string" == typeof n.insert ? n.insert : l;
                        throw new Error("diff() called " + (e === t ? "on" : "with") + " non-document")
                    })).join("")
                })),
                i = new s,
                u = r(n[0], n[1], e),
                c = a.iterator(this.ops),
                f = a.iterator(t.ops);
            return u.forEach((function(t) {
                for (var e = t[1].length; e > 0;) {
                    var n = 0;
                    switch (t[0]) {
                        case r.INSERT:
                            n = Math.min(f.peekLength(), e), i.push(f.next(n));
                            break;
                        case r.DELETE:
                            n = Math.min(e, c.peekLength()), c.next(n), i.delete(n);
                            break;
                        case r.EQUAL:
                            n = Math.min(c.peekLength(), f.peekLength(), e);
                            var l = c.next(n),
                                s = f.next(n);
                            o(l.insert, s.insert) ? i.retain(n, a.attributes.diff(l.attributes, s.attributes)) : i.push(s).delete(n)
                    }
                    e -= n
                }
            })), i.chop()
        }, s.prototype.eachLine = function(t, e) {
            e = e || "\n";
            for (var n = a.iterator(this.ops), r = new s, o = 0; n.hasNext();) {
                if ("insert" !== n.peekType()) return;
                var i = n.peek(),
                    l = a.length(i) - n.peekLength(),
                    u = "string" == typeof i.insert ? i.insert.indexOf(e, l) - l : -1;
                if (u < 0) r.push(n.next());
                else if (u > 0) r.push(n.next(u));
                else {
                    if (!1 === t(r, n.next(1).attributes || {}, o)) return;
                    o += 1, r = new s
                }
            }
            r.length() > 0 && t(r, {}, o)
        }, s.prototype.transform = function(t, e) {
            if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
            for (var n = a.iterator(this.ops), r = a.iterator(t.ops), o = new s; n.hasNext() || r.hasNext();)
                if ("insert" !== n.peekType() || !e && "insert" === r.peekType())
                    if ("insert" === r.peekType()) o.push(r.next());
                    else {
                        var i = Math.min(n.peekLength(), r.peekLength()),
                            l = n.next(i),
                            u = r.next(i);
                        if (l.delete) continue;
                        u.delete ? o.push(u) : o.retain(i, a.attributes.transform(l.attributes, u.attributes, e))
                    }
            else o.retain(a.length(n.next()));
            return o.chop()
        }, s.prototype.transformPosition = function(t, e) {
            e = !!e;
            for (var n = a.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
                var o = n.peekLength(),
                    i = n.peekType();
                n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r)
            }
            return t
        }, t.exports = s
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            s = r(n(8)),
            u = r(n(0)),
            c = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), a(e, [{
                    key: "formatAt",
                    value: function(t, n, r, o) {
                        if (e.compare(this.statics.blotName, r) < 0 && u.default.query(r, u.default.Scope.BLOT)) {
                            var i = this.isolate(t, n);
                            o && i.wrap(r, o)
                        } else l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o)
                    }
                }, {
                    key: "optimize",
                    value: function(t) {
                        if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                            var n = this.parent.isolate(this.offset(), this.length());
                            this.moveChildren(n), n.wrap(this)
                        }
                    }
                }], [{
                    key: "compare",
                    value: function(t, n) {
                        var r = e.order.indexOf(t),
                            o = e.order.indexOf(n);
                        return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1
                    }
                }]), e
            }(u.default.Inline);
        c.allowedChildren = [c, u.default.Embed, s.default], c.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if ((e = (0, _.default)(!0, {
                    container: t,
                    modules: {
                        clipboard: !0,
                        keyboard: !0,
                        history: !0
                    }
                }, e)).theme && e.theme !== O.DEFAULTS.theme) {
                if (e.theme = O.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?")
            } else e.theme = x.default;
            var n = (0, _.default)(!0, {}, e.theme.DEFAULTS);
            [n, e].forEach((function(t) {
                t.modules = t.modules || {}, Object.keys(t.modules).forEach((function(e) {
                    !0 === t.modules[e] && (t.modules[e] = {})
                }))
            }));
            var r = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((function(t, e) {
                var n = O.import("modules/" + e);
                return null == n ? E.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t
            }), {});
            return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                container: e.modules.toolbar
            }), e = (0, _.default)(!0, {}, O.DEFAULTS, {
                modules: r
            }, n, e), ["bounds", "container", "scrollingContainer"].forEach((function(t) {
                "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
            })), e.modules = Object.keys(e.modules).reduce((function(t, n) {
                return e.modules[n] && (t[n] = e.modules[n]), t
            }), {}), e
        }

        function l(t, e, n, r) {
            if (this.options.strict && !this.isEnabled() && e === y.default.sources.USER) return new h.default;
            var o = null == n ? null : this.getSelection(),
                i = this.editor.delta,
                a = t();
            if (null != o && (!0 === n && (n = o.index), null == r ? o = u(o, a, e) : 0 !== r && (o = u(o, n, r, e)), this.setSelection(o, y.default.sources.SILENT)), a.length() > 0) {
                var l, s, c = [y.default.events.TEXT_CHANGE, a, i, e];
                if ((l = this.emitter).emit.apply(l, [y.default.events.EDITOR_CHANGE].concat(c)), e !== y.default.sources.SILENT)(s = this.emitter).emit.apply(s, c)
            }
            return a
        }

        function s(t, e, n, r, o) {
            var i = {};
            return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : c(n)) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), [t, e, i, o = o || y.default.sources.API]
        }

        function u(t, e, n, r) {
            if (null == t) return null;
            var o = void 0,
                i = void 0;
            if (e instanceof h.default) {
                var a = [t.index, t.index + t.length].map((function(t) {
                        return e.transformPosition(t, r !== y.default.sources.USER)
                    })),
                    l = f(a, 2);
                o = l[0], i = l[1]
            } else {
                var s = [t.index, t.index + t.length].map((function(t) {
                        return t < e || t === e && r === y.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
                    })),
                    u = f(s, 2);
                o = u[0], i = u[1]
            }
            return new g.Range(o, i - o)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.overload = e.expandConfig = void 0;
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            f = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            d = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }();
        n(53);
        var h = r(n(4)),
            p = r(n(57)),
            y = r(n(9)),
            m = r(n(7)),
            v = r(n(0)),
            g = n(22),
            b = r(g),
            _ = r(n(2)),
            w = r(n(10)),
            x = r(n(32)),
            E = (0, w.default)("quill"),
            O = function() {
                function t(e) {
                    var n = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (i(this, t), this.options = a(e, r), this.container = this.options.container, null == this.container) return E.error("Invalid Quill container", e);
                    this.options.debug && t.debug(this.options.debug);
                    var o = this.container.innerHTML.trim();
                    this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new y.default, this.scroll = v.default.create(this.root, {
                        emitter: this.emitter,
                        whitelist: this.options.formats
                    }), this.editor = new p.default(this.scroll), this.selection = new b.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(y.default.events.EDITOR_CHANGE, (function(t) {
                        t === y.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
                    })), this.emitter.on(y.default.events.SCROLL_UPDATE, (function(t, e) {
                        var r = n.selection.lastRange,
                            o = r && 0 === r.length ? r.index : void 0;
                        l.call(n, (function() {
                            return n.editor.update(null, e, o)
                        }), t)
                    }));
                    var s = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
                    this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
                }
                return d(t, null, [{
                    key: "debug",
                    value: function(t) {
                        !0 === t && (t = "log"), w.default.level(t)
                    }
                }, {
                    key: "find",
                    value: function(t) {
                        return t.__quill || v.default.find(t)
                    }
                }, {
                    key: "import",
                    value: function(t) {
                        return null == this.imports[t] && E.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t]
                    }
                }, {
                    key: "register",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if ("string" != typeof t) {
                            var o = t.attrName || t.blotName;
                            "string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach((function(r) {
                                n.register(r, t[r], e)
                            }))
                        } else null == this.imports[t] || r || E.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? v.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
                    }
                }]), d(t, [{
                    key: "addContainer",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if ("string" == typeof t) {
                            var n = t;
                            (t = document.createElement("div")).classList.add(n)
                        }
                        return this.container.insertBefore(t, e), t
                    }
                }, {
                    key: "blur",
                    value: function() {
                        this.selection.setRange(null)
                    }
                }, {
                    key: "deleteText",
                    value: function(t, e, n) {
                        var r = this,
                            o = s(t, e, n),
                            i = f(o, 4);
                        return t = i[0], e = i[1], n = i[3], l.call(this, (function() {
                            return r.editor.deleteText(t, e)
                        }), n, t, -1 * e)
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.enable(!1)
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
                    }
                }, {
                    key: "focus",
                    value: function() {
                        var t = this.scrollingContainer.scrollTop;
                        this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.default.sources.API;
                        return l.call(this, (function() {
                            var r = n.getSelection(!0),
                                i = new h.default;
                            if (null == r) return i;
                            if (v.default.query(t, v.default.Scope.BLOCK)) i = n.editor.formatLine(r.index, r.length, o({}, t, e));
                            else {
                                if (0 === r.length) return n.selection.format(t, e), i;
                                i = n.editor.formatText(r.index, r.length, o({}, t, e))
                            }
                            return n.setSelection(r, y.default.sources.SILENT), i
                        }), r)
                    }
                }, {
                    key: "formatLine",
                    value: function(t, e, n, r, o) {
                        var i, a = this,
                            u = s(t, e, n, r, o),
                            c = f(u, 4);
                        return t = c[0], e = c[1], i = c[2], o = c[3], l.call(this, (function() {
                            return a.editor.formatLine(t, e, i)
                        }), o, t, 0)
                    }
                }, {
                    key: "formatText",
                    value: function(t, e, n, r, o) {
                        var i, a = this,
                            u = s(t, e, n, r, o),
                            c = f(u, 4);
                        return t = c[0], e = c[1], i = c[2], o = c[3], l.call(this, (function() {
                            return a.editor.formatText(t, e, i)
                        }), o, t, 0)
                    }
                }, {
                    key: "getBounds",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = void 0;
                        n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
                        var r = this.container.getBoundingClientRect();
                        return {
                            bottom: n.bottom - r.top,
                            height: n.height,
                            left: n.left - r.left,
                            right: n.right - r.left,
                            top: n.top - r.top,
                            width: n.width
                        }
                    }
                }, {
                    key: "getContents",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                            n = s(t, e),
                            r = f(n, 2);
                        return t = r[0], e = r[1], this.editor.getContents(t, e)
                    }
                }, {
                    key: "getFormat",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                    }
                }, {
                    key: "getIndex",
                    value: function(t) {
                        return t.offset(this.scroll)
                    }
                }, {
                    key: "getLength",
                    value: function() {
                        return this.scroll.length()
                    }
                }, {
                    key: "getLeaf",
                    value: function(t) {
                        return this.scroll.leaf(t)
                    }
                }, {
                    key: "getLine",
                    value: function(t) {
                        return this.scroll.line(t)
                    }
                }, {
                    key: "getLines",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                        return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                    }
                }, {
                    key: "getModule",
                    value: function(t) {
                        return this.theme.modules[t]
                    }
                }, {
                    key: "getSelection",
                    value: function() {
                        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
                    }
                }, {
                    key: "getText",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                            n = s(t, e),
                            r = f(n, 2);
                        return t = r[0], e = r[1], this.editor.getText(t, e)
                    }
                }, {
                    key: "hasFocus",
                    value: function() {
                        return this.selection.hasFocus()
                    }
                }, {
                    key: "insertEmbed",
                    value: function(e, n, r) {
                        var o = this,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
                        return l.call(this, (function() {
                            return o.editor.insertEmbed(e, n, r)
                        }), i, e)
                    }
                }, {
                    key: "insertText",
                    value: function(t, e, n, r, o) {
                        var i, a = this,
                            u = s(t, 0, n, r, o),
                            c = f(u, 4);
                        return t = c[0], i = c[2], o = c[3], l.call(this, (function() {
                            return a.editor.insertText(t, e, i)
                        }), o, t, e.length)
                    }
                }, {
                    key: "isEnabled",
                    value: function() {
                        return !this.container.classList.contains("ql-disabled")
                    }
                }, {
                    key: "off",
                    value: function() {
                        return this.emitter.off.apply(this.emitter, arguments)
                    }
                }, {
                    key: "on",
                    value: function() {
                        return this.emitter.on.apply(this.emitter, arguments)
                    }
                }, {
                    key: "once",
                    value: function() {
                        return this.emitter.once.apply(this.emitter, arguments)
                    }
                }, {
                    key: "pasteHTML",
                    value: function(t, e, n) {
                        this.clipboard.dangerouslyPasteHTML(t, e, n)
                    }
                }, {
                    key: "removeFormat",
                    value: function(t, e, n) {
                        var r = this,
                            o = s(t, e, n),
                            i = f(o, 4);
                        return t = i[0], e = i[1], n = i[3], l.call(this, (function() {
                            return r.editor.removeFormat(t, e)
                        }), n, t)
                    }
                }, {
                    key: "scrollIntoView",
                    value: function() {
                        this.selection.scrollIntoView(this.scrollingContainer)
                    }
                }, {
                    key: "setContents",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.default.sources.API;
                        return l.call(this, (function() {
                            t = new h.default(t);
                            var n = e.getLength(),
                                r = e.editor.deleteText(0, n),
                                o = e.editor.applyDelta(t),
                                i = o.ops[o.ops.length - 1];
                            return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), r.compose(o)
                        }), n)
                    }
                }, {
                    key: "setSelection",
                    value: function(e, n, r) {
                        if (null == e) this.selection.setRange(null, n || t.sources.API);
                        else {
                            var o = s(e, n, r),
                                i = f(o, 4);
                            e = i[0], n = i[1], r = i[3], this.selection.setRange(new g.Range(e, n), r), r !== y.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                        }
                    }
                }, {
                    key: "setText",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.default.sources.API,
                            n = (new h.default).insert(t);
                        return this.setContents(n, e)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.default.sources.USER,
                            e = this.scroll.update(t);
                        return this.selection.update(t), e
                    }
                }, {
                    key: "updateContents",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.default.sources.API;
                        return l.call(this, (function() {
                            return t = new h.default(t), e.editor.applyDelta(t, n)
                        }), n, !0)
                    }
                }]), t
            }();
        O.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: "default"
        }, O.events = y.default.events, O.sources = y.default.sources, O.version = "1.3.7", O.imports = {
            delta: h.default,
            parchment: v.default,
            "core/module": m.default,
            "core/theme": x.default
        }, e.expandConfig = a, e.overload = s, e.default = O
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r(this, t), this.quill = e, this.options = n
        };
        o.DEFAULTS = {}, e.default = o
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            a = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(i.default.Text);
        e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            i = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            a = r(n(58)),
            l = (0, r(n(10)).default)("quill:events");
        ["selectionchange", "mousedown", "mouseup", "click"].forEach((function(t) {
            document.addEventListener(t, (function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                [].slice.call(document.querySelectorAll(".ql-container")).forEach((function(t) {
                    var n;
                    t.__quill && t.__quill.emitter && (n = t.__quill.emitter).handleDOM.apply(n, e)
                }))
            }))
        }));
        var s = function(t) {
            function e() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.listeners = {}, t.on("error", l.error), t
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), o(e, [{
                key: "emit",
                value: function() {
                    l.log.apply(l, arguments), i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments)
                }
            }, {
                key: "handleDOM",
                value: function(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    (this.listeners[t.type] || []).forEach((function(e) {
                        var r = e.node,
                            o = e.handler;
                        (t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
                    }))
                }
            }, {
                key: "listenDOM",
                value: function(t, e, n) {
                    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                        node: e,
                        handler: n
                    })
                }
            }]), e
        }(a.default);
        s.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
        }, s.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
        }, e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (i.indexOf(t) <= i.indexOf(a)) {
                for (var e, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                (e = console)[t].apply(e, r)
            }
        }

        function o(t) {
            return i.reduce((function(e, n) {
                return e[n] = r.bind(console, n, t), e
            }), {})
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = ["error", "warn", "log", "info"],
            a = "warn";
        r.level = o.level = function(t) {
            a = t
        }, e.default = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(1),
            o = function() {
                function t(t, e, n) {
                    void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
                    var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                    null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
                }
                return t.keys = function(t) {
                    return [].map.call(t.attributes, (function(t) {
                        return t.name
                    }))
                }, t.prototype.add = function(t, e) {
                    return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
                }, t.prototype.canAdd = function(t, e) {
                    return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1))
                }, t.prototype.remove = function(t) {
                    t.removeAttribute(this.keyName)
                }, t.prototype.value = function(t) {
                    var e = t.getAttribute(this.keyName);
                    return this.canAdd(t, e) && e ? e : ""
                }, t
            }();
        e.default = o
    }, function(t, e, n) {
        function r(t) {
            return null == t
        }

        function o(t) {
            return !(!t || "object" != typeof t || "number" != typeof t.length || "function" != typeof t.copy || "function" != typeof t.slice || t.length > 0 && "number" != typeof t[0])
        }
        var i = Array.prototype.slice,
            a = n(55),
            l = n(56),
            s = t.exports = function(t, e, n) {
                return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : function(t, e, n) {
                    var u, c;
                    if (r(t) || r(e)) return !1;
                    if (t.prototype !== e.prototype) return !1;
                    if (l(t)) return !!l(e) && (t = i.call(t), e = i.call(e), s(t, e, n));
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (t.length !== e.length) return !1;
                        for (u = 0; u < t.length; u++)
                            if (t[u] !== e[u]) return !1;
                        return !0
                    }
                    try {
                        var f = a(t),
                            d = a(e)
                    } catch (t) {
                        return !1
                    }
                    if (f.length != d.length) return !1;
                    for (f.sort(), d.sort(), u = f.length - 1; u >= 0; u--)
                        if (f[u] != d[u]) return !1;
                    for (u = f.length - 1; u >= 0; u--)
                        if (c = f[u], !s(t[c], e[c], n)) return !1;
                    return typeof t == typeof e
                }(t, e, n))
            }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.Code = void 0;
        var l = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            c = r(n(4)),
            f = r(n(0)),
            d = r(n(3)),
            h = r(n(5)),
            p = r(n(8)),
            y = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, t), e
            }(h.default);
        y.blotName = "code", y.tagName = "CODE";
        var m = function(t) {
            function e() {
                return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return a(e, t), s(e, [{
                key: "delta",
                value: function() {
                    var t = this,
                        e = this.domNode.textContent;
                    return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce((function(e, n) {
                        return e.insert(n).insert("\n", t.formats())
                    }), new c.default)
                }
            }, {
                key: "format",
                value: function(t, n) {
                    if (t !== this.statics.blotName || !n) {
                        var r = this.descendant(p.default, this.length() - 1),
                            o = l(r, 1)[0];
                        null != o && o.deleteAt(o.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                    }
                }
            }, {
                key: "formatAt",
                value: function(t, n, r, o) {
                    if (0 !== n && null != f.default.query(r, f.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
                        var i = this.newlineIndex(t);
                        if (!(i < 0 || i >= t + n)) {
                            var a = this.newlineIndex(t, !0) + 1,
                                l = i - a + 1,
                                s = this.isolate(a, l),
                                u = s.next;
                            s.format(r, o), u instanceof e && u.formatAt(0, t - a + n - l, r, o)
                        }
                    }
                }
            }, {
                key: "insertAt",
                value: function(t, e, n) {
                    if (null == n) {
                        var r = this.descendant(p.default, t),
                            o = l(r, 2),
                            i = o[0],
                            a = o[1];
                        i.insertAt(a, e)
                    }
                }
            }, {
                key: "length",
                value: function() {
                    var t = this.domNode.textContent.length;
                    return this.domNode.textContent.endsWith("\n") ? t : t + 1
                }
            }, {
                key: "newlineIndex",
                value: function(t) {
                    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
                    var e = this.domNode.textContent.slice(t).indexOf("\n");
                    return e > -1 ? t + e : -1
                }
            }, {
                key: "optimize",
                value: function(t) {
                    this.domNode.textContent.endsWith("\n") || this.appendChild(f.default.create("text", "\n")), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                    var n = this.next;
                    null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove())
                }
            }, {
                key: "replace",
                value: function(t) {
                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach((function(t) {
                        var e = f.default.find(t);
                        null == e ? t.parentNode.removeChild(t) : e instanceof f.default.Embed ? e.remove() : e.unwrap()
                    }))
                }
            }], [{
                key: "create",
                value: function(t) {
                    var n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                    return n.setAttribute("spellcheck", !1), n
                }
            }, {
                key: "formats",
                value: function() {
                    return !0
                }
            }]), e
        }(d.default);
        m.blotName = "code-block", m.tagName = "PRE", m.TAB = "  ", e.Code = y, e.default = m
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "insertInto",
                    value: function(t, n) {
                        0 === t.children.length ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove()
                    }
                }, {
                    key: "length",
                    value: function() {
                        return 0
                    }
                }, {
                    key: "value",
                    value: function() {
                        return ""
                    }
                }], [{
                    key: "value",
                    value: function() {}
                }]), e
            }(l.default.Embed);
        s.blotName = "break", s.tagName = "BR", e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e) {
            var n = document.createElement("a");
            n.href = t;
            var r = n.href.slice(0, n.href.indexOf(":"));
            return e.indexOf(r) > -1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.sanitize = e.default = void 0;
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(5)),
            u = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), a(e, [{
                    key: "format",
                    value: function(t, n) {
                        if (t !== this.statics.blotName || !n) return l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                        n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = l(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("rel", "noopener noreferrer"), n.setAttribute("target", "_blank"), n
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return t.getAttribute("href")
                    }
                }, {
                    key: "sanitize",
                    value: function(t) {
                        return i(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
                    }
                }]), e
            }(s.default);
        u.blotName = "link", u.tagName = "A", u.SANITIZED_URL = "about:blank", u.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = u, e.sanitize = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            t.setAttribute(e, !("true" === t.getAttribute(e)))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = r(n(25)),
            s = r(n(106)),
            u = 0,
            c = function() {
                function t(e) {
                    var n = this;
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", (function() {
                        n.togglePicker()
                    })), this.label.addEventListener("keydown", (function(t) {
                        switch (t.keyCode) {
                            case l.default.keys.ENTER:
                                n.togglePicker();
                                break;
                            case l.default.keys.ESCAPE:
                                n.escape(), t.preventDefault()
                        }
                    })), this.select.addEventListener("change", this.update.bind(this))
                }
                return a(t, [{
                    key: "togglePicker",
                    value: function() {
                        this.container.classList.toggle("ql-expanded"), o(this.label, "aria-expanded"), o(this.options, "aria-hidden")
                    }
                }, {
                    key: "buildItem",
                    value: function(t) {
                        var e = this,
                            n = document.createElement("span");
                        return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", (function() {
                            e.selectItem(n, !0)
                        })), n.addEventListener("keydown", (function(t) {
                            switch (t.keyCode) {
                                case l.default.keys.ENTER:
                                    e.selectItem(n, !0), t.preventDefault();
                                    break;
                                case l.default.keys.ESCAPE:
                                    e.escape(), t.preventDefault()
                            }
                        })), n
                    }
                }, {
                    key: "buildLabel",
                    value: function() {
                        var t = document.createElement("span");
                        return t.classList.add("ql-picker-label"), t.innerHTML = s.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t
                    }
                }, {
                    key: "buildOptions",
                    value: function() {
                        var t = this,
                            e = document.createElement("span");
                        e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + u, u += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach((function(n) {
                            var r = t.buildItem(n);
                            e.appendChild(r), !0 === n.selected && t.selectItem(r)
                        })), this.container.appendChild(e)
                    }
                }, {
                    key: "buildPicker",
                    value: function() {
                        var t = this;
                        [].slice.call(this.select.attributes).forEach((function(e) {
                            t.container.setAttribute(e.name, e.value)
                        })), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
                    }
                }, {
                    key: "escape",
                    value: function() {
                        var t = this;
                        this.close(), setTimeout((function() {
                            return t.label.focus()
                        }), 1)
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true")
                    }
                }, {
                    key: "selectItem",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.container.querySelector(".ql-selected");
                        if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
                            if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
                            else if ("object" === ("undefined" == typeof Event ? "undefined" : i(Event))) {
                                var r = document.createEvent("Event");
                                r.initEvent("change", !0, !0), this.select.dispatchEvent(r)
                            }
                            this.close()
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = void 0;
                        if (this.select.selectedIndex > -1) {
                            var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                            t = this.select.options[this.select.selectedIndex], this.selectItem(e)
                        } else this.selectItem(null);
                        var n = null != t && t !== this.select.querySelector("option[selected]");
                        this.label.classList.toggle("ql-active", n)
                    }
                }]), t
            }();
        e.default = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = l.find(t);
            if (null == e) try {
                e = l.create(t)
            } catch (n) {
                e = l.create(l.Scope.INLINE), [].slice.call(t.childNodes).forEach((function(t) {
                    e.domNode.appendChild(t)
                })), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach()
            }
            return e
        }
        var o = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(47),
            a = n(27),
            l = n(1),
            s = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.build(), n
                }
                return o(e, t), e.prototype.appendChild = function(t) {
                    this.insertBefore(t)
                }, e.prototype.attach = function() {
                    t.prototype.attach.call(this), this.children.forEach((function(t) {
                        t.attach()
                    }))
                }, e.prototype.build = function() {
                    var t = this;
                    this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach((function(e) {
                        try {
                            var n = r(e);
                            t.insertBefore(n, t.children.head || void 0)
                        } catch (t) {
                            if (t instanceof l.ParchmentError) return;
                            throw t
                        }
                    }))
                }, e.prototype.deleteAt = function(t, e) {
                    if (0 === t && e === this.length()) return this.remove();
                    this.children.forEachAt(t, e, (function(t, e, n) {
                        t.deleteAt(e, n)
                    }))
                }, e.prototype.descendant = function(t, n) {
                    var r = this.children.find(n),
                        o = r[0],
                        i = r[1];
                    return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                }, e.prototype.descendants = function(t, n, r) {
                    void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
                    var o = [],
                        i = r;
                    return this.children.forEachAt(n, r, (function(n, r, a) {
                        (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= a
                    })), o
                }, e.prototype.detach = function() {
                    this.children.forEach((function(t) {
                        t.detach()
                    })), t.prototype.detach.call(this)
                }, e.prototype.formatAt = function(t, e, n, r) {
                    this.children.forEachAt(t, e, (function(t, e, o) {
                        t.formatAt(e, o, n, r)
                    }))
                }, e.prototype.insertAt = function(t, e, n) {
                    var r = this.children.find(t),
                        o = r[0],
                        i = r[1];
                    if (o) o.insertAt(i, e, n);
                    else {
                        var a = null == n ? l.create("text", e) : l.create(e, n);
                        this.appendChild(a)
                    }
                }, e.prototype.insertBefore = function(t, e) {
                    if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some((function(e) {
                            return t instanceof e
                        }))) throw new l.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                    t.insertInto(this, e)
                }, e.prototype.length = function() {
                    return this.children.reduce((function(t, e) {
                        return t + e.length()
                    }), 0)
                }, e.prototype.moveChildren = function(t, e) {
                    this.children.forEach((function(n) {
                        t.insertBefore(n, e)
                    }))
                }, e.prototype.optimize = function(e) {
                    if (t.prototype.optimize.call(this, e), 0 === this.children.length)
                        if (null != this.statics.defaultChild) {
                            var n = l.create(this.statics.defaultChild);
                            this.appendChild(n), n.optimize(e)
                        } else this.remove()
                }, e.prototype.path = function(t, n) {
                    void 0 === n && (n = !1);
                    var r = this.children.find(t, n),
                        o = r[0],
                        i = r[1],
                        a = [
                            [this, t]
                        ];
                    return o instanceof e ? a.concat(o.path(i, n)) : (null != o && a.push([o, i]), a)
                }, e.prototype.removeChild = function(t) {
                    this.children.remove(t)
                }, e.prototype.replace = function(n) {
                    n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n)
                }, e.prototype.split = function(t, e) {
                    if (void 0 === e && (e = !1), !e) {
                        if (0 === t) return this;
                        if (t === this.length()) return this.next
                    }
                    var n = this.clone();
                    return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), (function(t, r, o) {
                        t = t.split(r, e), n.appendChild(t)
                    })), n
                }, e.prototype.unwrap = function() {
                    this.moveChildren(this.parent, this.next), this.remove()
                }, e.prototype.update = function(t, e) {
                    var n = this,
                        o = [],
                        i = [];
                    t.forEach((function(t) {
                        t.target === n.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), i.push.apply(i, t.removedNodes))
                    })), i.forEach((function(t) {
                        if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                            var e = l.find(t);
                            null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
                        }
                    })), o.filter((function(t) {
                        return t.parentNode == n.domNode
                    })).sort((function(t, e) {
                        return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                    })).forEach((function(t) {
                        var e = null;
                        null != t.nextSibling && (e = l.find(t.nextSibling));
                        var o = r(t);
                        o.next == e && null != o.next || (null != o.parent && o.parent.removeChild(n), n.insertBefore(o, e || void 0))
                    }))
                }, e
            }(a.default);
        e.default = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(11),
            i = n(28),
            a = n(17),
            l = n(1),
            s = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.attributes = new i.default(n.domNode), n
                }
                return r(e, t), e.formats = function(t) {
                    return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                }, e.prototype.format = function(t, e) {
                    var n = l.query(t);
                    n instanceof o.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
                }, e.prototype.formats = function() {
                    var t = this.attributes.values(),
                        e = this.statics.formats(this.domNode);
                    return null != e && (t[this.statics.blotName] = e), t
                }, e.prototype.replaceWith = function(e, n) {
                    var r = t.prototype.replaceWith.call(this, e, n);
                    return this.attributes.copy(r), r
                }, e.prototype.update = function(e, n) {
                    var r = this;
                    t.prototype.update.call(this, e, n), e.some((function(t) {
                        return t.target === r.domNode && "attributes" === t.type
                    })) && this.attributes.build()
                }, e.prototype.wrap = function(n, r) {
                    var o = t.prototype.wrap.call(this, n, r);
                    return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o
                }, e
            }(a.default);
        e.default = s
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(27),
            i = n(1),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.value = function(t) {
                    return !0
                }, e.prototype.index = function(t, e) {
                    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
                }, e.prototype.position = function(t, e) {
                    var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                    return t > 0 && (n += 1), [this.parent.domNode, n]
                }, e.prototype.value = function() {
                    var t;
                    return (t = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0, t
                }, e.scope = i.Scope.INLINE_BLOT, e
            }(o.default);
        e.default = a
    }, function(t, e, n) {
        function r(t) {
            this.ops = t, this.index = 0, this.offset = 0
        }
        var o = n(12),
            i = n(2),
            a = {
                attributes: {
                    compose: function(t, e, n) {
                        "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                        var r = i(!0, {}, e);
                        for (var o in n || (r = Object.keys(r).reduce((function(t, e) {
                                return null != r[e] && (t[e] = r[e]), t
                            }), {})), t) void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
                        return Object.keys(r).length > 0 ? r : void 0
                    },
                    diff: function(t, e) {
                        "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                        var n = Object.keys(t).concat(Object.keys(e)).reduce((function(n, r) {
                            return o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
                        }), {});
                        return Object.keys(n).length > 0 ? n : void 0
                    },
                    transform: function(t, e, n) {
                        if ("object" != typeof t) return e;
                        if ("object" == typeof e) {
                            if (!n) return e;
                            var r = Object.keys(e).reduce((function(n, r) {
                                return void 0 === t[r] && (n[r] = e[r]), n
                            }), {});
                            return Object.keys(r).length > 0 ? r : void 0
                        }
                    }
                },
                iterator: function(t) {
                    return new r(t)
                },
                length: function(t) {
                    return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                }
            };
        r.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0
        }, r.prototype.next = function(t) {
            t || (t = 1 / 0);
            var e = this.ops[this.index];
            if (e) {
                var n = this.offset,
                    r = a.length(e);
                if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {
                    delete: t
                };
                var o = {};
                return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o
            }
            return {
                retain: 1 / 0
            }
        }, r.prototype.peek = function() {
            return this.ops[this.index]
        }, r.prototype.peekLength = function() {
            return this.ops[this.index] ? a.length(this.ops[this.index]) - this.offset : 1 / 0
        }, r.prototype.peekType = function() {
            return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
        }, r.prototype.rest = function() {
            if (this.hasNext()) {
                if (0 === this.offset) return this.ops.slice(this.index);
                var t = this.offset,
                    e = this.index,
                    n = this.next(),
                    r = this.ops.slice(this.index);
                return this.offset = t, this.index = e, [n].concat(r)
            }
            return []
        }, t.exports = a
    }, function(t, e) {
        var n = function() {
            "use strict";

            function t(t, e) {
                return null != e && t instanceof e
            }

            function e(n, l, s, u, c) {
                "object" == typeof l && (s = l.depth, u = l.prototype, c = l.includeNonEnumerable, l = l.circular);
                var f = [],
                    d = [],
                    h = "undefined" != typeof Buffer;
                return void 0 === l && (l = !0), void 0 === s && (s = 1 / 0),
                    function n(s, p) {
                        if (null === s) return null;
                        if (0 === p) return s;
                        var y, m;
                        if ("object" != typeof s) return s;
                        if (t(s, o)) y = new o;
                        else if (t(s, i)) y = new i;
                        else if (t(s, a)) y = new a((function(t, e) {
                            s.then((function(e) {
                                t(n(e, p - 1))
                            }), (function(t) {
                                e(n(t, p - 1))
                            }))
                        }));
                        else if (e.__isArray(s)) y = [];
                        else if (e.__isRegExp(s)) y = new RegExp(s.source, r(s)), s.lastIndex && (y.lastIndex = s.lastIndex);
                        else if (e.__isDate(s)) y = new Date(s.getTime());
                        else {
                            if (h && Buffer.isBuffer(s)) return y = Buffer.allocUnsafe ? Buffer.allocUnsafe(s.length) : new Buffer(s.length), s.copy(y), y;
                            t(s, Error) ? y = Object.create(s) : void 0 === u ? (m = Object.getPrototypeOf(s), y = Object.create(m)) : (y = Object.create(u), m = u)
                        }
                        if (l) {
                            var v = f.indexOf(s);
                            if (-1 != v) return d[v];
                            f.push(s), d.push(y)
                        }
                        for (var g in t(s, o) && s.forEach((function(t, e) {
                                var r = n(e, p - 1),
                                    o = n(t, p - 1);
                                y.set(r, o)
                            })), t(s, i) && s.forEach((function(t) {
                                var e = n(t, p - 1);
                                y.add(e)
                            })), s) {
                            var b;
                            m && (b = Object.getOwnPropertyDescriptor(m, g)), b && null == b.set || (y[g] = n(s[g], p - 1))
                        }
                        if (Object.getOwnPropertySymbols) {
                            var _ = Object.getOwnPropertySymbols(s);
                            for (g = 0; g < _.length; g++) {
                                var w = _[g];
                                (!(E = Object.getOwnPropertyDescriptor(s, w)) || E.enumerable || c) && (y[w] = n(s[w], p - 1), E.enumerable || Object.defineProperty(y, w, {
                                    enumerable: !1
                                }))
                            }
                        }
                        if (c) {
                            var x = Object.getOwnPropertyNames(s);
                            for (g = 0; g < x.length; g++) {
                                var E, O = x[g];
                                (E = Object.getOwnPropertyDescriptor(s, O)) && E.enumerable || (y[O] = n(s[O], p - 1), Object.defineProperty(y, O, {
                                    enumerable: !1
                                }))
                            }
                        }
                        return y
                    }(n, s)
            }

            function n(t) {
                return Object.prototype.toString.call(t)
            }

            function r(t) {
                var e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
            }
            var o, i, a;
            try {
                o = Map
            } catch (t) {
                o = function() {}
            }
            try {
                i = Set
            } catch (t) {
                i = function() {}
            }
            try {
                a = Promise
            } catch (t) {
                a = function() {}
            }
            return e.clonePrototype = function(t) {
                if (null === t) return null;
                var e = function() {};
                return e.prototype = t, new e
            }, e.__objToStr = n, e.__isDate = function(t) {
                return "object" == typeof t && "[object Date]" === n(t)
            }, e.__isArray = function(t) {
                return "object" == typeof t && "[object Array]" === n(t)
            }, e.__isRegExp = function(t) {
                return "object" == typeof t && "[object RegExp]" === n(t)
            }, e.__getRegExpFlags = r, e
        }();
        "object" == typeof t && t.exports && (t.exports = n)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            try {
                e.parentNode
            } catch (t) {
                return !1
            }
            return e instanceof Text && (e = e.parentNode), t.contains(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.Range = void 0;
        var l = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = r(n(0)),
            c = r(n(21)),
            f = r(n(12)),
            d = r(n(9)),
            h = (0, r(n(10)).default)("quill:selection"),
            p = function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                i(this, t), this.index = e, this.length = n
            },
            y = function() {
                function t(e, n) {
                    var r = this;
                    i(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = u.default.create("cursor", this), this.lastRange = this.savedRange = new p(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, (function() {
                        r.mouseDown || setTimeout(r.update.bind(r, d.default.sources.USER), 1)
                    })), this.emitter.on(d.default.events.EDITOR_CHANGE, (function(t, e) {
                        t === d.default.events.TEXT_CHANGE && e.length() > 0 && r.update(d.default.sources.SILENT)
                    })), this.emitter.on(d.default.events.SCROLL_BEFORE_UPDATE, (function() {
                        if (r.hasFocus()) {
                            var t = r.getNativeRange();
                            null != t && t.start.node !== r.cursor.textNode && r.emitter.once(d.default.events.SCROLL_UPDATE, (function() {
                                try {
                                    r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
                                } catch (t) {}
                            }))
                        }
                    })), this.emitter.on(d.default.events.SCROLL_OPTIMIZE, (function(t, e) {
                        if (e.range) {
                            var n = e.range,
                                o = n.startNode,
                                i = n.startOffset,
                                a = n.endNode,
                                l = n.endOffset;
                            r.setNativeRange(o, i, a, l)
                        }
                    })), this.update(d.default.sources.SILENT)
                }
                return s(t, [{
                    key: "handleComposition",
                    value: function() {
                        var t = this;
                        this.root.addEventListener("compositionstart", (function() {
                            t.composing = !0
                        })), this.root.addEventListener("compositionend", (function() {
                            if (t.composing = !1, t.cursor.parent) {
                                var e = t.cursor.restore();
                                if (!e) return;
                                setTimeout((function() {
                                    t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
                                }), 1)
                            }
                        }))
                    }
                }, {
                    key: "handleDragging",
                    value: function() {
                        var t = this;
                        this.emitter.listenDOM("mousedown", document.body, (function() {
                            t.mouseDown = !0
                        })), this.emitter.listenDOM("mouseup", document.body, (function() {
                            t.mouseDown = !1, t.update(d.default.sources.USER)
                        }))
                    }
                }, {
                    key: "focus",
                    value: function() {
                        this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
                    }
                }, {
                    key: "format",
                    value: function(t, e) {
                        if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
                            this.scroll.update();
                            var n = this.getNativeRange();
                            if (null != n && n.native.collapsed && !u.default.query(t, u.default.Scope.BLOCK)) {
                                if (n.start.node !== this.cursor.textNode) {
                                    var r = u.default.find(n.start.node, !1);
                                    if (null == r) return;
                                    if (r instanceof u.default.Leaf) {
                                        var o = r.split(n.start.offset);
                                        r.parent.insertBefore(this.cursor, o)
                                    } else r.insertBefore(this.cursor, n.start.node);
                                    this.cursor.attach()
                                }
                                this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                            }
                        }
                    }
                }, {
                    key: "getBounds",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = this.scroll.length();
                        t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
                        var r = void 0,
                            o = this.scroll.leaf(t),
                            i = l(o, 2),
                            a = i[0],
                            s = i[1];
                        if (null == a) return null;
                        var u = a.position(s, !0),
                            c = l(u, 2);
                        r = c[0], s = c[1];
                        var f = document.createRange();
                        if (e > 0) {
                            f.setStart(r, s);
                            var d = this.scroll.leaf(t + e),
                                h = l(d, 2);
                            if (a = h[0], s = h[1], null == a) return null;
                            var p = a.position(s, !0),
                                y = l(p, 2);
                            return r = y[0], s = y[1], f.setEnd(r, s), f.getBoundingClientRect()
                        }
                        var m = "left",
                            v = void 0;
                        return r instanceof Text ? (s < r.data.length ? (f.setStart(r, s), f.setEnd(r, s + 1)) : (f.setStart(r, s - 1), f.setEnd(r, s), m = "right"), v = f.getBoundingClientRect()) : (v = a.domNode.getBoundingClientRect(), s > 0 && (m = "right")), {
                            bottom: v.top + v.height,
                            height: v.height,
                            left: v[m],
                            right: v[m],
                            top: v.top,
                            width: 0
                        }
                    }
                }, {
                    key: "getNativeRange",
                    value: function() {
                        var t = document.getSelection();
                        if (null == t || t.rangeCount <= 0) return null;
                        var e = t.getRangeAt(0);
                        if (null == e) return null;
                        var n = this.normalizeNative(e);
                        return h.info("getNativeRange", n), n
                    }
                }, {
                    key: "getRange",
                    value: function() {
                        var t = this.getNativeRange();
                        return null == t ? [null, null] : [this.normalizedToRange(t), t]
                    }
                }, {
                    key: "hasFocus",
                    value: function() {
                        return document.activeElement === this.root
                    }
                }, {
                    key: "normalizedToRange",
                    value: function(t) {
                        var e = this,
                            n = [
                                [t.start.node, t.start.offset]
                            ];
                        t.native.collapsed || n.push([t.end.node, t.end.offset]);
                        var r = n.map((function(t) {
                                var n = l(t, 2),
                                    r = n[0],
                                    o = n[1],
                                    i = u.default.find(r, !0),
                                    a = i.offset(e.scroll);
                                return 0 === o ? a : i instanceof u.default.Container ? a + i.length() : a + i.index(r, o)
                            })),
                            i = Math.min(Math.max.apply(Math, o(r)), this.scroll.length() - 1),
                            a = Math.min.apply(Math, [i].concat(o(r)));
                        return new p(a, i - a)
                    }
                }, {
                    key: "normalizeNative",
                    value: function(t) {
                        if (!a(this.root, t.startContainer) || !t.collapsed && !a(this.root, t.endContainer)) return null;
                        var e = {
                            start: {
                                node: t.startContainer,
                                offset: t.startOffset
                            },
                            end: {
                                node: t.endContainer,
                                offset: t.endOffset
                            },
                            native: t
                        };
                        return [e.start, e.end].forEach((function(t) {
                            for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
                                if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
                                else {
                                    if (e.childNodes.length !== n) break;
                                    n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length + 1
                                }
                            t.node = e, t.offset = n
                        })), e
                    }
                }, {
                    key: "rangeToNative",
                    value: function(t) {
                        var e = this,
                            n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                            r = [],
                            o = this.scroll.length();
                        return n.forEach((function(t, n) {
                            t = Math.min(o - 1, t);
                            var i, a = e.scroll.leaf(t),
                                s = l(a, 2),
                                u = s[0],
                                c = s[1],
                                f = u.position(c, 0 !== n),
                                d = l(f, 2);
                            i = d[0], c = d[1], r.push(i, c)
                        })), r.length < 2 && (r = r.concat(r)), r
                    }
                }, {
                    key: "scrollIntoView",
                    value: function(t) {
                        var e = this.lastRange;
                        if (null != e) {
                            var n = this.getBounds(e.index, e.length);
                            if (null != n) {
                                var r = this.scroll.length() - 1,
                                    o = this.scroll.line(Math.min(e.index, r)),
                                    i = l(o, 1)[0],
                                    a = i;
                                if (e.length > 0) {
                                    var s = this.scroll.line(Math.min(e.index + e.length, r));
                                    a = l(s, 1)[0]
                                }
                                if (null != i && null != a) {
                                    var u = t.getBoundingClientRect();
                                    n.top < u.top ? t.scrollTop -= u.top - n.top : n.bottom > u.bottom && (t.scrollTop += n.bottom - u.bottom)
                                }
                            }
                        }
                    }
                }, {
                    key: "setNativeRange",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (h.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                            var i = document.getSelection();
                            if (null != i)
                                if (null != t) {
                                    this.hasFocus() || this.root.focus();
                                    var a = (this.getNativeRange() || {}).native;
                                    if (null == a || o || t !== a.startContainer || e !== a.startOffset || n !== a.endContainer || r !== a.endOffset) {
                                        "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
                                        var l = document.createRange();
                                        l.setStart(t, e), l.setEnd(n, r), i.removeAllRanges(), i.addRange(l)
                                    }
                                } else i.removeAllRanges(), this.root.blur(), document.body.focus()
                        }
                    }
                }, {
                    key: "setRange",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.sources.API;
                        if ("string" == typeof e && (n = e, e = !1), h.info("setRange", t), null != t) {
                            var r = this.rangeToNative(t);
                            this.setNativeRange.apply(this, o(r).concat([e]))
                        } else this.setNativeRange(null);
                        this.update(n)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.default.sources.USER,
                            e = this.lastRange,
                            n = this.getRange(),
                            r = l(n, 2),
                            o = r[0],
                            i = r[1];
                        if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !(0, f.default)(e, this.lastRange)) {
                            var a;
                            !this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode && this.cursor.restore();
                            var s, u = [d.default.events.SELECTION_CHANGE, (0, c.default)(this.lastRange), (0, c.default)(e), t];
                            if ((a = this.emitter).emit.apply(a, [d.default.events.EDITOR_CHANGE].concat(u)), t !== d.default.sources.SILENT)(s = this.emitter).emit.apply(s, u)
                        }
                    }
                }]), t
            }();
        e.Range = p, e.default = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(n(0)),
            l = n(3),
            s = r(l),
            u = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(a.default.Container);
        u.allowedChildren = [s.default, l.BlockEmbed, u], e.default = u
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "value",
                    value: function(t) {
                        var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);
                        return n.startsWith("rgb(") ? "#" + (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")).split(",").map((function(t) {
                            return ("00" + parseInt(t).toString(16)).slice(-2)
                        })).join("") : n
                    }
                }]), e
            }(l.default.Attributor.Style),
            u = new l.default.Attributor.Class("color", "ql-color", {
                scope: l.default.Scope.INLINE
            }),
            c = new s("color", "color", {
                scope: l.default.Scope.INLINE
            });
        e.ColorAttributor = s, e.ColorClass = u, e.ColorStyle = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e) {
            var n, r = t === S.keys.LEFT ? "prefix" : "suffix";
            return o(n = {
                key: t,
                shiftKey: e,
                altKey: null
            }, r, /^$/), o(n, "handler", (function(n) {
                var r = n.index;
                t === S.keys.RIGHT && (r += n.length + 1);
                var o = this.quill.getLeaf(r);
                return !(p(o, 1)[0] instanceof w.default.Embed && (t === S.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, x.default.sources.USER) : this.quill.setSelection(n.index - 1, x.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, x.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, x.default.sources.USER), 1))
            })), n
        }

        function a(t, e) {
            if (!(0 === t.index || this.quill.getLength() <= 1)) {
                var n = this.quill.getLine(t.index),
                    r = p(n, 1)[0],
                    o = {};
                if (0 === e.offset) {
                    var i = this.quill.getLine(t.index - 1),
                        a = p(i, 1)[0];
                    if (null != a && a.length() > 1) {
                        var l = r.formats(),
                            s = this.quill.getFormat(t.index - 1, 1);
                        o = _.default.attributes.diff(l, s) || {}
                    }
                }
                var u = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                this.quill.deleteText(t.index - u, u, x.default.sources.USER), Object.keys(o).length > 0 && this.quill.formatLine(t.index - u, u, o, x.default.sources.USER), this.quill.focus()
            }
        }

        function l(t, e) {
            var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
            if (!(t.index >= this.quill.getLength() - n)) {
                var r = {},
                    o = 0,
                    i = this.quill.getLine(t.index),
                    a = p(i, 1)[0];
                if (e.offset >= a.length() - 1) {
                    var l = this.quill.getLine(t.index + 1),
                        s = p(l, 1)[0];
                    if (s) {
                        var u = a.formats(),
                            c = this.quill.getFormat(t.index, 1);
                        r = _.default.attributes.diff(u, c) || {}, o = s.length()
                    }
                }
                this.quill.deleteText(t.index, n, x.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index + o - 1, n, r, x.default.sources.USER)
            }
        }

        function s(t) {
            var e = this.quill.getLines(t),
                n = {};
            if (e.length > 1) {
                var r = e[0].formats(),
                    o = e[e.length - 1].formats();
                n = _.default.attributes.diff(o, r) || {}
            }
            this.quill.deleteText(t, x.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, x.default.sources.USER), this.quill.setSelection(t.index, x.default.sources.SILENT), this.quill.focus()
        }

        function u(t, e) {
            var n = this;
            t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
            var r = Object.keys(e.format).reduce((function(t, n) {
                return w.default.query(n, w.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t
            }), {});
            this.quill.insertText(t.index, "\n", r, x.default.sources.USER), this.quill.setSelection(t.index + 1, x.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach((function(t) {
                null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], x.default.sources.USER))
            }))
        }

        function c(t) {
            return {
                key: S.keys.TAB,
                shiftKey: !t,
                format: {
                    "code-block": !0
                },
                handler: function(e) {
                    var n = w.default.query("code-block"),
                        r = e.index,
                        o = e.length,
                        i = this.quill.scroll.descendant(n, r),
                        a = p(i, 2),
                        l = a[0],
                        s = a[1];
                    if (null != l) {
                        var u = this.quill.getIndex(l),
                            c = l.newlineIndex(s, !0) + 1,
                            f = l.newlineIndex(u + s + o),
                            d = l.domNode.textContent.slice(c, f).split("\n");
                        s = 0, d.forEach((function(e, i) {
                            t ? (l.insertAt(c + s, n.TAB), s += n.TAB.length, 0 === i ? r += n.TAB.length : o += n.TAB.length) : e.startsWith(n.TAB) && (l.deleteAt(c + s, n.TAB.length), s -= n.TAB.length, 0 === i ? r -= n.TAB.length : o -= n.TAB.length), s += e.length + 1
                        })), this.quill.update(x.default.sources.USER), this.quill.setSelection(r, o, x.default.sources.SILENT)
                    }
                }
            }
        }

        function f(t) {
            return {
                key: t[0].toUpperCase(),
                shortKey: !0,
                handler: function(e, n) {
                    this.quill.format(t, !n.format[t], x.default.sources.USER)
                }
            }
        }

        function d(t) {
            if ("string" == typeof t || "number" == typeof t) return d({
                key: t
            });
            if ("object" === (void 0 === t ? "undefined" : h(t)) && (t = (0, m.default)(t, !1)), "string" == typeof t.key)
                if (null != S.keys[t.key.toUpperCase()]) t.key = S.keys[t.key.toUpperCase()];
                else {
                    if (1 !== t.key.length) return null;
                    t.key = t.key.toUpperCase().charCodeAt(0)
                }
            return t.shortKey && (t[T] = t.shortKey, delete t.shortKey), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SHORTKEY = e.default = void 0;
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            p = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            y = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            m = r(n(21)),
            v = r(n(12)),
            g = r(n(2)),
            b = r(n(4)),
            _ = r(n(20)),
            w = r(n(0)),
            x = r(n(6)),
            E = r(n(10)),
            O = r(n(7)),
            k = (0, E.default)("quill:keyboard"),
            T = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
            S = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.bindings = {}, Object.keys(r.options.bindings).forEach((function(e) {
                        ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[e] && r.addBinding(r.options.bindings[e])
                    })), r.addBinding({
                        key: e.keys.ENTER,
                        shiftKey: null
                    }, u), r.addBinding({
                        key: e.keys.ENTER,
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }, (function() {})), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
                        key: e.keys.BACKSPACE
                    }, {
                        collapsed: !0
                    }, a), r.addBinding({
                        key: e.keys.DELETE
                    }, {
                        collapsed: !0
                    }, l)) : (r.addBinding({
                        key: e.keys.BACKSPACE
                    }, {
                        collapsed: !0,
                        prefix: /^.?$/
                    }, a), r.addBinding({
                        key: e.keys.DELETE
                    }, {
                        collapsed: !0,
                        suffix: /^.?$/
                    }, l)), r.addBinding({
                        key: e.keys.BACKSPACE
                    }, {
                        collapsed: !1
                    }, s), r.addBinding({
                        key: e.keys.DELETE
                    }, {
                        collapsed: !1
                    }, s), r.addBinding({
                        key: e.keys.BACKSPACE,
                        altKey: null,
                        ctrlKey: null,
                        metaKey: null,
                        shiftKey: null
                    }, {
                        collapsed: !0,
                        offset: 0
                    }, a), r.listen(), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), y(e, null, [{
                    key: "match",
                    value: function(t, e) {
                        return e = d(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some((function(n) {
                            return !!e[n] !== t[n] && null !== e[n]
                        })) && e.key === (t.which || t.keyCode)
                    }
                }]), y(e, [{
                    key: "addBinding",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = d(t);
                        if (null == r || null == r.key) return k.warn("Attempted to add invalid keyboard binding", r);
                        "function" == typeof e && (e = {
                            handler: e
                        }), "function" == typeof n && (n = {
                            handler: n
                        }), r = (0, g.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r)
                    }
                }, {
                    key: "listen",
                    value: function() {
                        var t = this;
                        this.quill.root.addEventListener("keydown", (function(n) {
                            if (!n.defaultPrevented) {
                                var r = n.which || n.keyCode,
                                    o = (t.bindings[r] || []).filter((function(t) {
                                        return e.match(n, t)
                                    }));
                                if (0 !== o.length) {
                                    var i = t.quill.getSelection();
                                    if (null != i && t.quill.hasFocus()) {
                                        var a = t.quill.getLine(i.index),
                                            l = p(a, 2),
                                            s = l[0],
                                            u = l[1],
                                            c = t.quill.getLeaf(i.index),
                                            f = p(c, 2),
                                            d = f[0],
                                            y = f[1],
                                            m = 0 === i.length ? [d, y] : t.quill.getLeaf(i.index + i.length),
                                            g = p(m, 2),
                                            b = g[0],
                                            _ = g[1],
                                            x = d instanceof w.default.Text ? d.value().slice(0, y) : "",
                                            E = b instanceof w.default.Text ? b.value().slice(_) : "",
                                            O = {
                                                collapsed: 0 === i.length,
                                                empty: 0 === i.length && s.length() <= 1,
                                                format: t.quill.getFormat(i),
                                                offset: u,
                                                prefix: x,
                                                suffix: E
                                            };
                                        o.some((function(e) {
                                            if (null != e.collapsed && e.collapsed !== O.collapsed) return !1;
                                            if (null != e.empty && e.empty !== O.empty) return !1;
                                            if (null != e.offset && e.offset !== O.offset) return !1;
                                            if (Array.isArray(e.format)) {
                                                if (e.format.every((function(t) {
                                                        return null == O.format[t]
                                                    }))) return !1
                                            } else if ("object" === h(e.format) && !Object.keys(e.format).every((function(t) {
                                                    return !0 === e.format[t] ? null != O.format[t] : !1 === e.format[t] ? null == O.format[t] : (0, v.default)(e.format[t], O.format[t])
                                                }))) return !1;
                                            return !(null != e.prefix && !e.prefix.test(O.prefix) || null != e.suffix && !e.suffix.test(O.suffix) || !0 === e.handler.call(t, i, O))
                                        })) && n.preventDefault()
                                    }
                                }
                            }
                        }))
                    }
                }]), e
            }(O.default);
        S.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
        }, S.DEFAULTS = {
            bindings: {
                bold: f("bold"),
                italic: f("italic"),
                underline: f("underline"),
                indent: {
                    key: S.keys.TAB,
                    format: ["blockquote", "indent", "list"],
                    handler: function(t, e) {
                        if (e.collapsed && 0 !== e.offset) return !0;
                        this.quill.format("indent", "+1", x.default.sources.USER)
                    }
                },
                outdent: {
                    key: S.keys.TAB,
                    shiftKey: !0,
                    format: ["blockquote", "indent", "list"],
                    handler: function(t, e) {
                        if (e.collapsed && 0 !== e.offset) return !0;
                        this.quill.format("indent", "-1", x.default.sources.USER)
                    }
                },
                "outdent backspace": {
                    key: S.keys.BACKSPACE,
                    collapsed: !0,
                    shiftKey: null,
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null,
                    format: ["indent", "list"],
                    offset: 0,
                    handler: function(t, e) {
                        null != e.format.indent ? this.quill.format("indent", "-1", x.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, x.default.sources.USER)
                    }
                },
                "indent code-block": c(!0),
                "outdent code-block": c(!1),
                "remove tab": {
                    key: S.keys.TAB,
                    shiftKey: !0,
                    collapsed: !0,
                    prefix: /\t$/,
                    handler: function(t) {
                        this.quill.deleteText(t.index - 1, 1, x.default.sources.USER)
                    }
                },
                tab: {
                    key: S.keys.TAB,
                    handler: function(t) {
                        this.quill.history.cutoff();
                        var e = (new b.default).retain(t.index).delete(t.length).insert("\t");
                        this.quill.updateContents(e, x.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, x.default.sources.SILENT)
                    }
                },
                "list empty enter": {
                    key: S.keys.ENTER,
                    collapsed: !0,
                    format: ["list"],
                    empty: !0,
                    handler: function(t, e) {
                        this.quill.format("list", !1, x.default.sources.USER), e.format.indent && this.quill.format("indent", !1, x.default.sources.USER)
                    }
                },
                "checklist enter": {
                    key: S.keys.ENTER,
                    collapsed: !0,
                    format: {
                        list: "checked"
                    },
                    handler: function(t) {
                        var e = this.quill.getLine(t.index),
                            n = p(e, 2),
                            r = n[0],
                            o = n[1],
                            i = (0, g.default)({}, r.formats(), {
                                list: "checked"
                            }),
                            a = (new b.default).retain(t.index).insert("\n", i).retain(r.length() - o - 1).retain(1, {
                                list: "unchecked"
                            });
                        this.quill.updateContents(a, x.default.sources.USER), this.quill.setSelection(t.index + 1, x.default.sources.SILENT), this.quill.scrollIntoView()
                    }
                },
                "header enter": {
                    key: S.keys.ENTER,
                    collapsed: !0,
                    format: ["header"],
                    suffix: /^$/,
                    handler: function(t, e) {
                        var n = this.quill.getLine(t.index),
                            r = p(n, 2),
                            o = r[0],
                            i = r[1],
                            a = (new b.default).retain(t.index).insert("\n", e.format).retain(o.length() - i - 1).retain(1, {
                                header: null
                            });
                        this.quill.updateContents(a, x.default.sources.USER), this.quill.setSelection(t.index + 1, x.default.sources.SILENT), this.quill.scrollIntoView()
                    }
                },
                "list autofill": {
                    key: " ",
                    collapsed: !0,
                    format: {
                        list: !1
                    },
                    prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                    handler: function(t, e) {
                        var n = e.prefix.length,
                            r = this.quill.getLine(t.index),
                            o = p(r, 2),
                            i = o[0],
                            a = o[1];
                        if (a > n) return !0;
                        var l = void 0;
                        switch (e.prefix.trim()) {
                            case "[]":
                            case "[ ]":
                                l = "unchecked";
                                break;
                            case "[x]":
                                l = "checked";
                                break;
                            case "-":
                            case "*":
                                l = "bullet";
                                break;
                            default:
                                l = "ordered"
                        }
                        this.quill.insertText(t.index, " ", x.default.sources.USER), this.quill.history.cutoff();
                        var s = (new b.default).retain(t.index - a).delete(n + 1).retain(i.length() - 2 - a).retain(1, {
                            list: l
                        });
                        this.quill.updateContents(s, x.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - n, x.default.sources.SILENT)
                    }
                },
                "code exit": {
                    key: S.keys.ENTER,
                    collapsed: !0,
                    format: ["code-block"],
                    prefix: /\n\n$/,
                    suffix: /^\s+$/,
                    handler: function(t) {
                        var e = this.quill.getLine(t.index),
                            n = p(e, 2),
                            r = n[0],
                            o = n[1],
                            i = (new b.default).retain(t.index + r.length() - o - 2).retain(1, {
                                "code-block": null
                            }).delete(1);
                        this.quill.updateContents(i, x.default.sources.USER)
                    }
                },
                "embed left": i(S.keys.LEFT, !1),
                "embed left shift": i(S.keys.LEFT, !0),
                "embed right": i(S.keys.RIGHT, !1),
                "embed right shift": i(S.keys.RIGHT, !0)
            }
        }, e.default = S, e.SHORTKEY = T
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            align: {
                "": n(75),
                center: n(76),
                right: n(77),
                justify: n(78)
            },
            background: n(79),
            blockquote: n(80),
            bold: n(81),
            clean: n(82),
            code: n(40),
            "code-block": n(40),
            color: n(83),
            direction: {
                "": n(84),
                rtl: n(85)
            },
            float: {
                center: n(86),
                full: n(87),
                left: n(88),
                right: n(89)
            },
            formula: n(90),
            header: {
                1: n(91),
                2: n(92)
            },
            italic: n(93),
            image: n(94),
            indent: {
                "+1": n(95),
                "-1": n(96)
            },
            link: n(97),
            list: {
                ordered: n(98),
                bullet: n(99),
                check: n(100)
            },
            script: {
                sub: n(101),
                super: n(102)
            },
            strike: n(103),
            underline: n(104),
            video: n(105)
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(1),
            o = function() {
                function t(t) {
                    this.domNode = t, this.domNode[r.DATA_KEY] = {
                        blot: this
                    }
                }
                return Object.defineProperty(t.prototype, "statics", {
                    get: function() {
                        return this.constructor
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.create = function(t) {
                    if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");
                    var e;
                    return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
                }, t.prototype.attach = function() {
                    null != this.parent && (this.scroll = this.parent.scroll)
                }, t.prototype.clone = function() {
                    var t = this.domNode.cloneNode(!1);
                    return r.create(t)
                }, t.prototype.detach = function() {
                    null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY]
                }, t.prototype.deleteAt = function(t, e) {
                    this.isolate(t, e).remove()
                }, t.prototype.formatAt = function(t, e, n, o) {
                    var i = this.isolate(t, e);
                    if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);
                    else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
                        var a = r.create(this.statics.scope);
                        i.wrap(a), a.format(n, o)
                    }
                }, t.prototype.insertAt = function(t, e, n) {
                    var o = null == n ? r.create("text", e) : r.create(e, n),
                        i = this.split(t);
                    this.parent.insertBefore(o, i)
                }, t.prototype.insertInto = function(t, e) {
                    void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
                    var n = null;
                    t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach()
                }, t.prototype.isolate = function(t, e) {
                    var n = this.split(t);
                    return n.split(e), n
                }, t.prototype.length = function() {
                    return 1
                }, t.prototype.offset = function(t) {
                    return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                }, t.prototype.optimize = function(t) {
                    null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations
                }, t.prototype.remove = function() {
                    null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
                }, t.prototype.replace = function(t) {
                    null != t.parent && (t.parent.insertBefore(this, t.next), t.remove())
                }, t.prototype.replaceWith = function(t, e) {
                    var n = "string" == typeof t ? r.create(t, e) : t;
                    return n.replace(this), n
                }, t.prototype.split = function(t, e) {
                    return 0 === t ? this : this.next
                }, t.prototype.update = function(t, e) {}, t.prototype.wrap = function(t, e) {
                    var n = "string" == typeof t ? r.create(t, e) : t;
                    return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n
                }, t.blotName = "abstract", t
            }();
        e.default = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(11),
            o = n(29),
            i = n(30),
            a = n(1),
            l = function() {
                function t(t) {
                    this.attributes = {}, this.domNode = t, this.build()
                }
                return t.prototype.attribute = function(t, e) {
                    e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
                }, t.prototype.build = function() {
                    var t = this;
                    this.attributes = {};
                    var e = r.default.keys(this.domNode),
                        n = o.default.keys(this.domNode),
                        l = i.default.keys(this.domNode);
                    e.concat(n).concat(l).forEach((function(e) {
                        var n = a.query(e, a.Scope.ATTRIBUTE);
                        n instanceof r.default && (t.attributes[n.attrName] = n)
                    }))
                }, t.prototype.copy = function(t) {
                    var e = this;
                    Object.keys(this.attributes).forEach((function(n) {
                        var r = e.attributes[n].value(e.domNode);
                        t.format(n, r)
                    }))
                }, t.prototype.move = function(t) {
                    var e = this;
                    this.copy(t), Object.keys(this.attributes).forEach((function(t) {
                        e.attributes[t].remove(e.domNode)
                    })), this.attributes = {}
                }, t.prototype.values = function() {
                    var t = this;
                    return Object.keys(this.attributes).reduce((function(e, n) {
                        return e[n] = t.attributes[n].value(t.domNode), e
                    }), {})
                }, t
            }();
        e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            return (t.getAttribute("class") || "").split(/\s+/).filter((function(t) {
                return 0 === t.indexOf(e + "-")
            }))
        }
        var o = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e.keys = function(t) {
                return (t.getAttribute("class") || "").split(/\s+/).map((function(t) {
                    return t.split("-").slice(0, -1).join("-")
                }))
            }, e.prototype.add = function(t, e) {
                return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
            }, e.prototype.remove = function(t) {
                r(t, this.keyName).forEach((function(e) {
                    t.classList.remove(e)
                })), 0 === t.classList.length && t.removeAttribute("class")
            }, e.prototype.value = function(t) {
                var e = (r(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
                return this.canAdd(t, e) ? e : ""
            }, e
        }(n(11).default);
        e.default = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = t.split("-"),
                n = e.slice(1).map((function(t) {
                    return t[0].toUpperCase() + t.slice(1)
                })).join("");
            return e[0] + n
        }
        var o = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e.keys = function(t) {
                return (t.getAttribute("style") || "").split(";").map((function(t) {
                    return t.split(":")[0].trim()
                }))
            }, e.prototype.add = function(t, e) {
                return !!this.canAdd(t, e) && (t.style[r(this.keyName)] = e, !0)
            }, e.prototype.remove = function(t) {
                t.style[r(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
            }, e.prototype.value = function(t) {
                var e = t.style[r(this.keyName)];
                return this.canAdd(t, e) ? e : ""
            }, e
        }(n(11).default);
        e.default = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            i = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = r(n(0)),
            s = r(n(8)),
            u = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), a(e, null, [{
                    key: "value",
                    value: function() {}
                }]), a(e, [{
                    key: "detach",
                    value: function() {
                        null != this.parent && this.parent.removeChild(this)
                    }
                }, {
                    key: "format",
                    value: function(t, n) {
                        if (0 !== this._length) return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                        for (var r = this, o = 0; null != r && r.statics.scope !== l.default.Scope.BLOCK_BLOT;) o += r.offset(r.parent), r = r.parent;
                        null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(o, e.CONTENTS.length, t, n), this._length = 0)
                    }
                }, {
                    key: "index",
                    value: function(t, n) {
                        return t === this.textNode ? 0 : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                    }
                }, {
                    key: "length",
                    value: function() {
                        return this._length
                    }
                }, {
                    key: "position",
                    value: function() {
                        return [this.textNode, this.textNode.data.length]
                    }
                }, {
                    key: "remove",
                    value: function() {
                        i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null
                    }
                }, {
                    key: "restore",
                    value: function() {
                        if (!this.selection.composing && null != this.parent) {
                            var t = this.textNode,
                                n = this.selection.getNativeRange(),
                                r = void 0,
                                i = void 0,
                                a = void 0;
                            if (null != n && n.start.node === t && n.end.node === t) {
                                var u = [t, n.start.offset, n.end.offset];
                                r = u[0], i = u[1], a = u[2]
                            }
                            for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                            if (this.textNode.data !== e.CONTENTS) {
                                var c = this.textNode.data.split(e.CONTENTS).join("");
                                this.next instanceof s.default ? (r = this.next.domNode, this.next.insertAt(0, c), this.textNode.data = e.CONTENTS) : (this.textNode.data = c, this.parent.insertBefore(l.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode))
                            }
                            if (this.remove(), null != i) {
                                var f = [i, a].map((function(t) {
                                        return Math.max(0, Math.min(r.data.length, t - 1))
                                    })),
                                    d = o(f, 2);
                                return i = d[0], a = d[1], {
                                    startNode: r,
                                    startOffset: i,
                                    endNode: r,
                                    endOffset: a
                                }
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        var n = this;
                        if (t.some((function(t) {
                                return "characterData" === t.type && t.target === n.textNode
                            }))) {
                            var r = this.restore();
                            r && (e.range = r)
                        }
                    }
                }, {
                    key: "value",
                    value: function() {
                        return ""
                    }
                }]), e
            }(l.default.Embed);
        u.blotName = "cursor", u.className = "ql-cursor", u.tagName = "span", u.CONTENTS = "\ufeff", e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function() {
                function t(e, n) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.quill = e, this.options = n, this.modules = {}
                }
                return r(t, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        Object.keys(this.options.modules).forEach((function(e) {
                            null == t.modules[e] && t.addModule(e)
                        }))
                    }
                }, {
                    key: "addModule",
                    value: function(t) {
                        var e = this.quill.constructor.import("modules/" + t);
                        return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
                    }
                }]), t
            }();
        o.DEFAULTS = {
            modules: {}
        }, o.themes = {
            default: o
        }, e.default = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            i = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            a = r(n(0)),
            l = r(n(8)),
            s = "\ufeff",
            u = function(t) {
                function e(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach((function(t) {
                        n.contentNode.appendChild(t)
                    })), n.leftGuard = document.createTextNode(s), n.rightGuard = document.createTextNode(s), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), o(e, [{
                    key: "index",
                    value: function(t, n) {
                        return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                    }
                }, {
                    key: "restore",
                    value: function(t) {
                        var e = void 0,
                            n = void 0,
                            r = t.data.split(s).join("");
                        if (t === this.leftGuard)
                            if (this.prev instanceof l.default) {
                                var o = this.prev.length();
                                this.prev.insertAt(o, r), e = {
                                    startNode: this.prev.domNode,
                                    startOffset: o + r.length
                                }
                            } else n = document.createTextNode(r), this.parent.insertBefore(a.default.create(n), this), e = {
                                startNode: n,
                                startOffset: r.length
                            };
                        else t === this.rightGuard && (this.next instanceof l.default ? (this.next.insertAt(0, r), e = {
                            startNode: this.next.domNode,
                            startOffset: r.length
                        }) : (n = document.createTextNode(r), this.parent.insertBefore(a.default.create(n), this.next), e = {
                            startNode: n,
                            startOffset: r.length
                        }));
                        return t.data = s, e
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        var n = this;
                        t.forEach((function(t) {
                            if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                                var r = n.restore(t.target);
                                r && (e.range = r)
                            }
                        }))
                    }
                }]), e
            }(a.default.Embed);
        e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            o = {
                scope: r.default.Scope.BLOCK,
                whitelist: ["right", "center", "justify"]
            },
            i = new r.default.Attributor.Attribute("align", "align", o),
            a = new r.default.Attributor.Class("align", "ql-align", o),
            l = new r.default.Attributor.Style("align", "text-align", o);
        e.AlignAttribute = i, e.AlignClass = a, e.AlignStyle = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BackgroundStyle = e.BackgroundClass = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            o = n(24),
            i = new r.default.Attributor.Class("background", "ql-bg", {
                scope: r.default.Scope.INLINE
            }),
            a = new o.ColorAttributor("background", "background-color", {
                scope: r.default.Scope.INLINE
            });
        e.BackgroundClass = i, e.BackgroundStyle = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            o = {
                scope: r.default.Scope.BLOCK,
                whitelist: ["rtl"]
            },
            i = new r.default.Attributor.Attribute("direction", "dir", o),
            a = new r.default.Attributor.Class("direction", "ql-direction", o),
            l = new r.default.Attributor.Style("direction", "direction", o);
        e.DirectionAttribute = i, e.DirectionClass = a, e.DirectionStyle = l
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.FontClass = e.FontStyle = void 0;
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            s = {
                scope: l.default.Scope.INLINE,
                whitelist: ["serif", "monospace"]
            },
            u = new l.default.Attributor.Class("font", "ql-font", s),
            c = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "value",
                    value: function(t) {
                        return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "")
                    }
                }]), e
            }(l.default.Attributor.Style),
            f = new c("font", "font-family", s);
        e.FontStyle = f, e.FontClass = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SizeStyle = e.SizeClass = void 0;
        var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            o = new r.default.Attributor.Class("size", "ql-size", {
                scope: r.default.Scope.INLINE,
                whitelist: ["small", "large", "huge"]
            }),
            i = new r.default.Attributor.Style("size", "font-size", {
                scope: r.default.Scope.INLINE,
                whitelist: ["10px", "18px", "32px"]
            });
        e.SizeClass = o, e.SizeStyle = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(5)),
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "optimize",
                    value: function(t) {
                        a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
                    }
                }], [{
                    key: "create",
                    value: function() {
                        return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
                    }
                }, {
                    key: "formats",
                    value: function() {
                        return !0
                    }
                }]), e
            }(l.default);
        s.blotName = "bold", s.tagName = ["STRONG", "B"], e.default = s
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(16)),
            a = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.label.innerHTML = n, r.container.classList.add("ql-color-picker"), [].slice.call(r.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach((function(t) {
                        t.classList.add("ql-primary")
                    })), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), r(e, [{
                    key: "buildItem",
                    value: function(t) {
                        var n = o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
                        return n.style.backgroundColor = t.getAttribute("value") || "", n
                    }
                }, {
                    key: "selectItem",
                    value: function(t, n) {
                        o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
                        var r = this.label.querySelector(".ql-color-label"),
                            i = t && t.getAttribute("data-value") || "";
                        r && ("line" === r.tagName ? r.style.stroke = i : r.style.fill = i)
                    }
                }]), e
            }(i.default);
        e.default = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(16)),
            a = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.container.classList.add("ql-icon-picker"), [].forEach.call(r.container.querySelectorAll(".ql-picker-item"), (function(t) {
                        t.innerHTML = n[t.getAttribute("data-value") || ""]
                    })), r.defaultItem = r.container.querySelector(".ql-selected"), r.selectItem(r.defaultItem), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), r(e, [{
                    key: "selectItem",
                    value: function(t, n) {
                        o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML
                    }
                }]), e
            }(i.default);
        e.default = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function() {
                function t(e, n) {
                    var r = this;
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TOOL, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", (function() {
                        r.root.style.marginTop = -1 * r.quill.root.scrollTop + "px"
                    })), this.hide()
                }
                return r(t, [{
                    key: "hide",
                    value: function() {
                        this.root.classList.add("ql-hidden")
                    }
                }, {
                    key: "position",
                    value: function(t) {
                        var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                            n = t.bottom + this.quill.root.scrollTop;
                        this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
                        var r = this.boundsContainer.getBoundingClientRect(),
                            o = this.root.getBoundingClientRect(),
                            i = 0;
                        if (o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), o.bottom > r.bottom) {
                            var a = o.bottom - o.top,
                                l = t.bottom - t.top + a;
                            this.root.style.top = n - l + "px", this.root.classList.add("ql-flip")
                        }
                        return i
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
                    }
                }]), t
            }();
        e.default = o
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function l(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.forEach((function(e) {
                var r = document.createElement("option");
                e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r)
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.BaseTooltip = void 0;
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            c = r(n(2)),
            f = r(n(4)),
            d = r(n(9)),
            h = r(n(25)),
            p = r(n(32)),
            y = r(n(41)),
            m = r(n(42)),
            v = r(n(16)),
            g = r(n(43)),
            b = [!1, "center", "right", "justify"],
            _ = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
            w = [!1, "serif", "monospace"],
            x = ["1", "2", "3", !1],
            E = ["small", !1, "large", "huge"],
            O = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return t.emitter.listenDOM("click", document.body, (function e(n) {
                        if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
                        null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach((function(t) {
                            t.container.contains(n.target) || t.close()
                        }))
                    })), r
                }
                return a(e, t), s(e, [{
                    key: "addModule",
                    value: function(t) {
                        var n = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);
                        return "toolbar" === t && this.extendToolbar(n), n
                    }
                }, {
                    key: "buildButtons",
                    value: function(t, e) {
                        t.forEach((function(t) {
                            (t.getAttribute("class") || "").split(/\s+/).forEach((function(n) {
                                if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n]))
                                    if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;
                                    else if ("string" == typeof e[n]) t.innerHTML = e[n];
                                else {
                                    var r = t.value || "";
                                    null != r && e[n][r] && (t.innerHTML = e[n][r])
                                }
                            }))
                        }))
                    }
                }, {
                    key: "buildPickers",
                    value: function(t, e) {
                        var n = this;
                        this.pickers = t.map((function(t) {
                            if (t.classList.contains("ql-align")) return null == t.querySelector("option") && l(t, b), new m.default(t, e.align);
                            if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                                var n = t.classList.contains("ql-background") ? "background" : "color";
                                return null == t.querySelector("option") && l(t, _, "background" === n ? "#ffffff" : "#000000"), new y.default(t, e[n])
                            }
                            return null == t.querySelector("option") && (t.classList.contains("ql-font") ? l(t, w) : t.classList.contains("ql-header") ? l(t, x) : t.classList.contains("ql-size") && l(t, E)), new v.default(t)
                        }));
                        this.quill.on(d.default.events.EDITOR_CHANGE, (function() {
                            n.pickers.forEach((function(t) {
                                t.update()
                            }))
                        }))
                    }
                }]), e
            }(p.default);
        O.DEFAULTS = (0, c.default)(!0, {}, p.default.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        formula: function() {
                            this.quill.theme.tooltip.edit("formula")
                        },
                        image: function() {
                            var t = this,
                                e = this.container.querySelector("input.ql-image[type=file]");
                            null == e && ((e = document.createElement("input")).setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", (function() {
                                if (null != e.files && null != e.files[0]) {
                                    var n = new FileReader;
                                    n.onload = function(n) {
                                        var r = t.quill.getSelection(!0);
                                        t.quill.updateContents((new f.default).retain(r.index).delete(r.length).insert({
                                            image: n.target.result
                                        }), d.default.sources.USER), t.quill.setSelection(r.index + 1, d.default.sources.SILENT), e.value = ""
                                    }, n.readAsDataURL(e.files[0])
                                }
                            })), this.container.appendChild(e)), e.click()
                        },
                        video: function() {
                            this.quill.theme.tooltip.edit("video")
                        }
                    }
                }
            }
        });
        var k = function(t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r
            }
            return a(e, t), s(e, [{
                key: "listen",
                value: function() {
                    var t = this;
                    this.textbox.addEventListener("keydown", (function(e) {
                        h.default.match(e, "enter") ? (t.save(), e.preventDefault()) : h.default.match(e, "escape") && (t.cancel(), e.preventDefault())
                    }))
                }
            }, {
                key: "cancel",
                value: function() {
                    this.hide()
                }
            }, {
                key: "edit",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t)
                }
            }, {
                key: "restoreFocus",
                value: function() {
                    var t = this.quill.scrollingContainer.scrollTop;
                    this.quill.focus(), this.quill.scrollingContainer.scrollTop = t
                }
            }, {
                key: "save",
                value: function() {
                    var t = this.textbox.value;
                    switch (this.root.getAttribute("data-mode")) {
                        case "link":
                            var e = this.quill.root.scrollTop;
                            this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, d.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, d.default.sources.USER)), this.quill.root.scrollTop = e;
                            break;
                        case "video":
                            t = function(t) {
                                var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                                return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t
                            }(t);
                        case "formula":
                            if (!t) break;
                            var n = this.quill.getSelection(!0);
                            if (null != n) {
                                var r = n.index + n.length;
                                this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), t, d.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", d.default.sources.USER), this.quill.setSelection(r + 2, d.default.sources.USER)
                            }
                    }
                    this.textbox.value = "", this.hide()
                }
            }]), e
        }(g.default);
        e.BaseTooltip = k, e.default = O
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(n(46)),
            i = n(34),
            a = n(36),
            l = n(62),
            s = r(n(63)),
            u = r(n(64)),
            c = n(65),
            f = r(c),
            d = n(35),
            h = n(24),
            p = n(37),
            y = n(38),
            m = r(n(39)),
            v = r(n(66)),
            g = r(n(15)),
            b = r(n(67)),
            _ = r(n(68)),
            w = r(n(69)),
            x = r(n(70)),
            E = r(n(71)),
            O = n(13),
            k = r(O),
            T = r(n(72)),
            S = r(n(73)),
            A = r(n(74)),
            N = r(n(26)),
            C = r(n(16)),
            j = r(n(41)),
            q = r(n(42)),
            L = r(n(43)),
            P = r(n(107)),
            D = r(n(108));
        o.default.register({
            "attributors/attribute/direction": a.DirectionAttribute,
            "attributors/class/align": i.AlignClass,
            "attributors/class/background": d.BackgroundClass,
            "attributors/class/color": h.ColorClass,
            "attributors/class/direction": a.DirectionClass,
            "attributors/class/font": p.FontClass,
            "attributors/class/size": y.SizeClass,
            "attributors/style/align": i.AlignStyle,
            "attributors/style/background": d.BackgroundStyle,
            "attributors/style/color": h.ColorStyle,
            "attributors/style/direction": a.DirectionStyle,
            "attributors/style/font": p.FontStyle,
            "attributors/style/size": y.SizeStyle
        }, !0), o.default.register({
            "formats/align": i.AlignClass,
            "formats/direction": a.DirectionClass,
            "formats/indent": l.IndentClass,
            "formats/background": d.BackgroundStyle,
            "formats/color": h.ColorStyle,
            "formats/font": p.FontClass,
            "formats/size": y.SizeClass,
            "formats/blockquote": s.default,
            "formats/code-block": k.default,
            "formats/header": u.default,
            "formats/list": f.default,
            "formats/bold": m.default,
            "formats/code": O.Code,
            "formats/italic": v.default,
            "formats/link": g.default,
            "formats/script": b.default,
            "formats/strike": _.default,
            "formats/underline": w.default,
            "formats/image": x.default,
            "formats/video": E.default,
            "formats/list/item": c.ListItem,
            "modules/formula": T.default,
            "modules/syntax": S.default,
            "modules/toolbar": A.default,
            "themes/bubble": P.default,
            "themes/snow": D.default,
            "ui/icons": N.default,
            "ui/picker": C.default,
            "ui/icon-picker": q.default,
            "ui/color-picker": j.default,
            "ui/tooltip": L.default
        }, !0), e.default = o.default
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(n(0)),
            i = r(n(6)),
            a = n(3),
            l = r(a),
            s = r(n(14)),
            u = r(n(23)),
            c = r(n(31)),
            f = r(n(33)),
            d = r(n(5)),
            h = r(n(59)),
            p = r(n(8)),
            y = r(n(60)),
            m = r(n(61)),
            v = r(n(25));
        i.default.register({
            "blots/block": l.default,
            "blots/block/embed": a.BlockEmbed,
            "blots/break": s.default,
            "blots/container": u.default,
            "blots/cursor": c.default,
            "blots/embed": f.default,
            "blots/inline": d.default,
            "blots/scroll": h.default,
            "blots/text": p.default,
            "modules/clipboard": y.default,
            "modules/history": m.default,
            "modules/keyboard": v.default
        }), o.default.register(l.default, s.default, c.default, d.default, h.default, p.default), e.default = i.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {
                this.head = this.tail = null, this.length = 0
            }
            return t.prototype.append = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
            }, t.prototype.contains = function(t) {
                for (var e, n = this.iterator(); e = n();)
                    if (e === t) return !0;
                return !1
            }, t.prototype.insertBefore = function(t, e) {
                t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
            }, t.prototype.offset = function(t) {
                for (var e = 0, n = this.head; null != n;) {
                    if (n === t) return e;
                    e += n.length(), n = n.next
                }
                return -1
            }, t.prototype.remove = function(t) {
                this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
            }, t.prototype.iterator = function(t) {
                return void 0 === t && (t = this.head),
                    function() {
                        var e = t;
                        return null != t && (t = t.next), e
                    }
            }, t.prototype.find = function(t, e) {
                void 0 === e && (e = !1);
                for (var n, r = this.iterator(); n = r();) {
                    var o = n.length();
                    if (t < o || e && t === o && (null == n.next || 0 !== n.next.length())) return [n, t];
                    t -= o
                }
                return [null, 0]
            }, t.prototype.forEach = function(t) {
                for (var e, n = this.iterator(); e = n();) t(e)
            }, t.prototype.forEachAt = function(t, e, n) {
                if (!(e <= 0))
                    for (var r, o = this.find(t), i = o[0], a = t - o[1], l = this.iterator(i);
                        (r = l()) && a < t + e;) {
                        var s = r.length();
                        t > a ? n(r, t - a, Math.min(e, a + s - t)) : n(r, 0, Math.min(s, t + e - a)), a += s
                    }
            }, t.prototype.map = function(t) {
                return this.reduce((function(e, n) {
                    return e.push(t(n)), e
                }), [])
            }, t.prototype.reduce = function(t, e) {
                for (var n, r = this.iterator(); n = r();) e = t(e, n);
                return e
            }, t
        }();
        e.default = r
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(17),
            i = n(1),
            a = {
                attributes: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            },
            l = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.scroll = n, n.observer = new MutationObserver((function(t) {
                        n.update(t)
                    })), n.observer.observe(n.domNode, a), n.attach(), n
                }
                return r(e, t), e.prototype.detach = function() {
                    t.prototype.detach.call(this), this.observer.disconnect()
                }, e.prototype.deleteAt = function(e, n) {
                    this.update(), 0 === e && n === this.length() ? this.children.forEach((function(t) {
                        t.remove()
                    })) : t.prototype.deleteAt.call(this, e, n)
                }, e.prototype.formatAt = function(e, n, r, o) {
                    this.update(), t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.insertAt = function(e, n, r) {
                    this.update(), t.prototype.insertAt.call(this, e, n, r)
                }, e.prototype.optimize = function(e, n) {
                    var r = this;
                    void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
                    for (var a = [].slice.call(this.observer.takeRecords()); a.length > 0;) e.push(a.pop());
                    for (var l = function(t, e) {
                            void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && l(t.parent))
                        }, s = function(t) {
                            null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default && t.children.forEach(s), t.optimize(n))
                        }, u = e, c = 0; u.length > 0; c += 1) {
                        if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                        for (u.forEach((function(t) {
                                var e = i.find(t.target, !0);
                                null != e && (e.domNode === t.target && ("childList" === t.type ? (l(i.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, (function(t) {
                                    var e = i.find(t, !1);
                                    l(e, !1), e instanceof o.default && e.children.forEach((function(t) {
                                        l(t, !1)
                                    }))
                                }))) : "attributes" === t.type && l(e.prev)), l(e))
                            })), this.children.forEach(s), a = (u = [].slice.call(this.observer.takeRecords())).slice(); a.length > 0;) e.push(a.pop())
                    }
                }, e.prototype.update = function(e, n) {
                    var r = this;
                    void 0 === n && (n = {}), (e = e || this.observer.takeRecords()).map((function(t) {
                        var e = i.find(t.target, !0);
                        return null == e ? null : null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [t], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null)
                    })).forEach((function(t) {
                        null != t && t !== r && null != t.domNode[i.DATA_KEY] && t.update(t.domNode[i.DATA_KEY].mutations || [], n)
                    })), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations, n), this.optimize(e, n)
                }, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e
            }(o.default);
        e.default = l
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(18),
            i = n(1),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.formats = function(n) {
                    if (n.tagName !== e.tagName) return t.formats.call(this, n)
                }, e.prototype.format = function(n, r) {
                    var i = this;
                    n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach((function(t) {
                        t instanceof o.default || (t = t.wrap(e.blotName, !0)), i.attributes.copy(t)
                    })), this.unwrap())
                }, e.prototype.formatAt = function(e, n, r, o) {
                    null != this.formats()[r] || i.query(r, i.Scope.ATTRIBUTE) ? this.isolate(e, n).format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.optimize = function(n) {
                    t.prototype.optimize.call(this, n);
                    var r = this.formats();
                    if (0 === Object.keys(r).length) return this.unwrap();
                    var o = this.next;
                    o instanceof e && o.prev === this && function(t, e) {
                        if (Object.keys(t).length !== Object.keys(e).length) return !1;
                        for (var n in t)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }(r, o.formats()) && (o.moveChildren(this), o.remove())
                }, e.blotName = "inline", e.scope = i.Scope.INLINE_BLOT, e.tagName = "SPAN", e
            }(o.default);
        e.default = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(18),
            i = n(1),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(e, t), e.formats = function(n) {
                    var r = i.query(e.blotName).tagName;
                    if (n.tagName !== r) return t.formats.call(this, n)
                }, e.prototype.format = function(n, r) {
                    null != i.query(n, i.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName))
                }, e.prototype.formatAt = function(e, n, r, o) {
                    null != i.query(r, i.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
                }, e.prototype.insertAt = function(e, n, r) {
                    if (null == r || null != i.query(n, i.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, r);
                    else {
                        var o = this.split(e),
                            a = i.create(n, r);
                        o.parent.insertBefore(a, o)
                    }
                }, e.prototype.update = function(e, n) {
                    navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n)
                }, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e
            }(o.default);
        e.default = a
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return r(e, t), e.formats = function(t) {}, e.prototype.format = function(e, n) {
                t.prototype.formatAt.call(this, 0, this.length(), e, n)
            }, e.prototype.formatAt = function(e, n, r, o) {
                0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o)
            }, e.prototype.formats = function() {
                return this.statics.formats(this.domNode)
            }, e
        }(n(19).default);
        e.default = o
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(19),
            i = n(1),
            a = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.text = n.statics.value(n.domNode), n
                }
                return r(e, t), e.create = function(t) {
                    return document.createTextNode(t)
                }, e.value = function(t) {
                    var e = t.data;
                    return e.normalize && (e = e.normalize()), e
                }, e.prototype.deleteAt = function(t, e) {
                    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                }, e.prototype.index = function(t, e) {
                    return this.domNode === t ? e : -1
                }, e.prototype.insertAt = function(e, n, r) {
                    null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r)
                }, e.prototype.length = function() {
                    return this.text.length
                }, e.prototype.optimize = function(n) {
                    t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
                }, e.prototype.position = function(t, e) {
                    return void 0 === e && (e = !1), [this.domNode, t]
                }, e.prototype.split = function(t, e) {
                    if (void 0 === e && (e = !1), !e) {
                        if (0 === t) return this;
                        if (t === this.length()) return this.next
                    }
                    var n = i.create(this.domNode.splitText(t));
                    return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n
                }, e.prototype.update = function(t, e) {
                    var n = this;
                    t.some((function(t) {
                        return "characterData" === t.type && t.target === n.domNode
                    })) && (this.text = this.statics.value(this.domNode))
                }, e.prototype.value = function() {
                    return this.text
                }, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e
            }(o.default);
        e.default = a
    }, function(t, e, n) {
        "use strict";
        var r = document.createElement("div");
        if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
            var o = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, e) {
                return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t)
            }
        }
        String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
            return e = e || 0, this.substr(e, t.length) === t
        }), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
            var n = this.toString();
            ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
            var r = n.indexOf(t, e);
            return -1 !== r && r === e
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(t) {
                if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
                    if (e = n[i], t.call(o, e, i, n)) return e
            }
        }), document.addEventListener("DOMContentLoaded", (function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1)
        }))
    }, function(t, e) {
        function n(t, e, n) {
            if (t == e) return t ? [
                [p, t]
            ] : [];
            (n < 0 || t.length < n) && (n = null);
            var o = a(t, e),
                i = t.substring(0, o);
            o = l(t = t.substring(o), e = e.substring(o));
            var s = t.substring(t.length - o),
                f = r(t = t.substring(0, t.length - o), e = e.substring(0, e.length - o));
            return i && f.unshift([p, i]), s && f.push([p, s]), u(f), null != n && (f = c(f, n)),
                function(t) {
                    for (var e = !1, n = function(t) {
                            return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                        }, r = 2; r < t.length; r += 1) t[r - 2][0] === p && function(t) {
                        return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319
                    }(t[r - 2][1]) && t[r - 1][0] === d && n(t[r - 1][1]) && t[r][0] === h && n(t[r][1]) && (e = !0, t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] = t[r - 2][1].slice(0, -1));
                    if (!e) return t;
                    var o = [];
                    for (r = 0; r < t.length; r += 1) t[r][1].length > 0 && o.push(t[r]);
                    return o
                }(f)
        }

        function r(t, e) {
            var r;
            if (!t) return [
                [h, e]
            ];
            if (!e) return [
                [d, t]
            ];
            var i = t.length > e.length ? t : e,
                a = t.length > e.length ? e : t,
                l = i.indexOf(a);
            if (-1 != l) return r = [
                [h, i.substring(0, l)],
                [p, a],
                [h, i.substring(l + a.length)]
            ], t.length > e.length && (r[0][0] = r[2][0] = d), r;
            if (1 == a.length) return [
                [d, t],
                [h, e]
            ];
            var u = s(t, e);
            if (u) {
                var c = u[0],
                    f = u[1],
                    y = u[2],
                    m = u[3],
                    v = u[4],
                    g = n(c, y),
                    b = n(f, m);
                return g.concat([
                    [p, v]
                ], b)
            }
            return o(t, e)
        }

        function o(t, e) {
            for (var n = t.length, r = e.length, o = Math.ceil((n + r) / 2), a = o, l = 2 * o, s = new Array(l), u = new Array(l), c = 0; c < l; c++) s[c] = -1, u[c] = -1;
            s[a + 1] = 0, u[a + 1] = 0;
            for (var f = n - r, p = f % 2 != 0, y = 0, m = 0, v = 0, g = 0, b = 0; b < o; b++) {
                for (var _ = -b + y; _ <= b - m; _ += 2) {
                    for (var w = a + _, x = (S = _ == -b || _ != b && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1) - _; S < n && x < r && t.charAt(S) == e.charAt(x);) S++, x++;
                    if (s[w] = S, S > n) m += 2;
                    else if (x > r) y += 2;
                    else if (p) {
                        if ((k = a + f - _) >= 0 && k < l && -1 != u[k])
                            if (S >= (O = n - u[k])) return i(t, e, S, x)
                    }
                }
                for (var E = -b + v; E <= b - g; E += 2) {
                    for (var O, k = a + E, T = (O = E == -b || E != b && u[k - 1] < u[k + 1] ? u[k + 1] : u[k - 1] + 1) - E; O < n && T < r && t.charAt(n - O - 1) == e.charAt(r - T - 1);) O++, T++;
                    if (u[k] = O, O > n) g += 2;
                    else if (T > r) v += 2;
                    else if (!p) {
                        if ((w = a + f - E) >= 0 && w < l && -1 != s[w]) {
                            var S;
                            x = a + (S = s[w]) - w;
                            if (S >= (O = n - O)) return i(t, e, S, x)
                        }
                    }
                }
            }
            return [
                [d, t],
                [h, e]
            ]
        }

        function i(t, e, r, o) {
            var i = t.substring(0, r),
                a = e.substring(0, o),
                l = t.substring(r),
                s = e.substring(o),
                u = n(i, a),
                c = n(l, s);
            return u.concat(c)
        }

        function a(t, e) {
            if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
            for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
            return o
        }

        function l(t, e) {
            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
            for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
            return o
        }

        function s(t, e) {
            function n(t, e, n) {
                for (var r, o, i, s, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 != (c = e.indexOf(u, c + 1));) {
                    var d = a(t.substring(n), e.substring(c)),
                        h = l(t.substring(0, n), e.substring(0, c));
                    f.length < h + d && (f = e.substring(c - h, c) + e.substring(c, c + d), r = t.substring(0, n - h), o = t.substring(n + d), i = e.substring(0, c - h), s = e.substring(c + d))
                }
                return 2 * f.length >= t.length ? [r, o, i, s, f] : null
            }
            var r = t.length > e.length ? t : e,
                o = t.length > e.length ? e : t;
            if (r.length < 4 || 2 * o.length < r.length) return null;
            var i, s, u, c, f, d = n(r, o, Math.ceil(r.length / 4)),
                h = n(r, o, Math.ceil(r.length / 2));
            return d || h ? (i = h ? d && d[4].length > h[4].length ? d : h : d, t.length > e.length ? (s = i[0], u = i[1], c = i[2], f = i[3]) : (c = i[0], f = i[1], s = i[2], u = i[3]), [s, u, c, f, i[4]]) : null
        }

        function u(t) {
            t.push([p, ""]);
            for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t.length;) switch (t[n][0]) {
                case h:
                    o++, s += t[n][1], n++;
                    break;
                case d:
                    r++, i += t[n][1], n++;
                    break;
                case p:
                    r + o > 1 ? (0 !== r && 0 !== o && (0 !== (e = a(s, i)) && (n - r - o > 0 && t[n - r - o - 1][0] == p ? t[n - r - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [p, s.substring(0, e)]), n++), s = s.substring(e), i = i.substring(e)), 0 !== (e = l(s, i)) && (t[n][1] = s.substring(s.length - e) + t[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === r ? t.splice(n - o, r + o, [h, s]) : 0 === o ? t.splice(n - r, r + o, [d, i]) : t.splice(n - r - o, r + o, [d, i], [h, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == p ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = ""
            }
            "" === t[t.length - 1][1] && t.pop();
            var c = !1;
            for (n = 1; n < t.length - 1;) t[n - 1][0] == p && t[n + 1][0] == p && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), c = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), c = !0)), n++;
            c && u(t)
        }

        function c(t, e) {
            var n = function(t, e) {
                    if (0 === e) return [p, t];
                    for (var n = 0, r = 0; r < t.length; r++) {
                        var o = t[r];
                        if (o[0] === d || o[0] === p) {
                            var i = n + o[1].length;
                            if (e === i) return [r + 1, t];
                            if (e < i) {
                                t = t.slice();
                                var a = e - n,
                                    l = [o[0], o[1].slice(0, a)],
                                    s = [o[0], o[1].slice(a)];
                                return t.splice(r, 1, l, s), [r + 1, t]
                            }
                            n = i
                        }
                    }
                    throw new Error("cursor_pos is out of bounds!")
                }(t, e),
                r = n[1],
                o = n[0],
                i = r[o],
                a = r[o + 1];
            if (null == i) return t;
            if (i[0] !== p) return t;
            if (null != a && i[1] + a[1] === a[1] + i[1]) return r.splice(o, 2, a, i), f(r, o, 2);
            if (null != a && 0 === a[1].indexOf(i[1])) {
                r.splice(o, 2, [a[0], i[1]], [0, i[1]]);
                var l = a[1].slice(i[1].length);
                return l.length > 0 && r.splice(o + 2, 0, [a[0], l]), f(r, o, 3)
            }
            return t
        }

        function f(t, e, n) {
            for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
                if (r + 1 < t.length) {
                    var o = t[r],
                        i = t[r + 1];
                    o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]])
                }
            return t
        }
        var d = -1,
            h = 1,
            p = 0,
            y = n;
        y.INSERT = h, y.DELETE = d, y.EQUAL = p, t.exports = y
    }, function(t, e) {
        function n(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        }(t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
    }, function(t, e) {
        function n(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }

        function r(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
        }
        var o = "[object Arguments]" == function() {
            return Object.prototype.toString.call(arguments)
        }();
        (e = t.exports = o ? n : r).supported = n, e.unsupported = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            return Object.keys(e).reduce((function(n, r) {
                return null == t[r] || (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]]), n
            }), {})
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            a = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = r(n(4)),
            u = r(n(20)),
            c = r(n(0)),
            f = r(n(13)),
            d = r(n(31)),
            h = n(3),
            p = r(h),
            y = r(n(14)),
            m = r(n(21)),
            v = r(n(12)),
            g = r(n(2)),
            b = /^[ -~]*$/,
            _ = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.scroll = e, this.delta = this.getDelta()
                }
                return l(t, [{
                    key: "applyDelta",
                    value: function(t) {
                        var e = this,
                            n = !1;
                        this.scroll.update();
                        var r = this.scroll.length();
                        return this.scroll.batchStart(), t = function(t) {
                            return t.reduce((function(t, e) {
                                if (1 === e.insert) {
                                    var n = (0, m.default)(e.attributes);
                                    return delete n.image, t.insert({
                                        image: e.attributes.image
                                    }, n)
                                }
                                if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || ((e = (0, m.default)(e)).attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
                                    var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                    return t.insert(r, e.attributes)
                                }
                                return t.push(e)
                            }), new s.default)
                        }(t), t.reduce((function(t, o) {
                            var l = o.retain || o.delete || o.insert.length || 1,
                                s = o.attributes || {};
                            if (null != o.insert) {
                                if ("string" == typeof o.insert) {
                                    var f = o.insert;
                                    f.endsWith("\n") && n && (n = !1, f = f.slice(0, -1)), t >= r && !f.endsWith("\n") && (n = !0), e.scroll.insertAt(t, f);
                                    var d = e.scroll.line(t),
                                        y = a(d, 2),
                                        m = y[0],
                                        v = y[1],
                                        b = (0, g.default)({}, (0, h.bubbleFormats)(m));
                                    if (m instanceof p.default) {
                                        var _ = m.descendant(c.default.Leaf, v),
                                            w = a(_, 1)[0];
                                        b = (0, g.default)(b, (0, h.bubbleFormats)(w))
                                    }
                                    s = u.default.attributes.diff(b, s) || {}
                                } else if ("object" === i(o.insert)) {
                                    var x = Object.keys(o.insert)[0];
                                    if (null == x) return t;
                                    e.scroll.insertAt(t, x, o.insert[x])
                                }
                                r += l
                            }
                            return Object.keys(s).forEach((function(n) {
                                e.scroll.formatAt(t, l, n, s[n])
                            })), t + l
                        }), 0), t.reduce((function(t, n) {
                            return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1)
                        }), 0), this.scroll.batchEnd(), this.update(t)
                    }
                }, {
                    key: "deleteText",
                    value: function(t, e) {
                        return this.scroll.deleteAt(t, e), this.update((new s.default).retain(t).delete(e))
                    }
                }, {
                    key: "formatLine",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.scroll.update(), Object.keys(r).forEach((function(o) {
                            if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
                                var i = n.scroll.lines(t, Math.max(e, 1)),
                                    a = e;
                                i.forEach((function(e) {
                                    var i = e.length();
                                    if (e instanceof f.default) {
                                        var l = t - e.offset(n.scroll),
                                            s = e.newlineIndex(l + a) - l + 1;
                                        e.formatAt(l, s, o, r[o])
                                    } else e.format(o, r[o]);
                                    a -= i
                                }))
                            }
                        })), this.scroll.optimize(), this.update((new s.default).retain(t).retain(e, (0, m.default)(r)))
                    }
                }, {
                    key: "formatText",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return Object.keys(r).forEach((function(o) {
                            n.scroll.formatAt(t, e, o, r[o])
                        })), this.update((new s.default).retain(t).retain(e, (0, m.default)(r)))
                    }
                }, {
                    key: "getContents",
                    value: function(t, e) {
                        return this.delta.slice(t, t + e)
                    }
                }, {
                    key: "getDelta",
                    value: function() {
                        return this.scroll.lines().reduce((function(t, e) {
                            return t.concat(e.delta())
                        }), new s.default)
                    }
                }, {
                    key: "getFormat",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = [],
                            r = [];
                        0 === e ? this.scroll.path(t).forEach((function(t) {
                            var e = a(t, 1)[0];
                            e instanceof p.default ? n.push(e) : e instanceof c.default.Leaf && r.push(e)
                        })) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(c.default.Leaf, t, e));
                        var i = [n, r].map((function(t) {
                            if (0 === t.length) return {};
                            for (var e = (0, h.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
                                var n = t.shift();
                                if (null == n) return e;
                                e = o((0, h.bubbleFormats)(n), e)
                            }
                            return e
                        }));
                        return g.default.apply(g.default, i)
                    }
                }, {
                    key: "getText",
                    value: function(t, e) {
                        return this.getContents(t, e).filter((function(t) {
                            return "string" == typeof t.insert
                        })).map((function(t) {
                            return t.insert
                        })).join("")
                    }
                }, {
                    key: "insertEmbed",
                    value: function(t, e, n) {
                        return this.scroll.insertAt(t, e, n), this.update((new s.default).retain(t).insert(function(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n, t
                        }({}, e, n)))
                    }
                }, {
                    key: "insertText",
                    value: function(t, e) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach((function(o) {
                            n.scroll.formatAt(t, e.length, o, r[o])
                        })), this.update((new s.default).retain(t).insert(e, (0, m.default)(r)))
                    }
                }, {
                    key: "isBlank",
                    value: function() {
                        if (0 == this.scroll.children.length) return !0;
                        if (this.scroll.children.length > 1) return !1;
                        var t = this.scroll.children.head;
                        return t.statics.blotName === p.default.blotName && !(t.children.length > 1) && t.children.head instanceof y.default
                    }
                }, {
                    key: "removeFormat",
                    value: function(t, e) {
                        var n = this.getText(t, e),
                            r = this.scroll.line(t + e),
                            o = a(r, 2),
                            i = o[0],
                            l = o[1],
                            u = 0,
                            c = new s.default;
                        null != i && (u = i instanceof f.default ? i.newlineIndex(l) - l + 1 : i.length() - l, c = i.delta().slice(l, l + u - 1).insert("\n"));
                        var d = this.getContents(t, e + u).diff((new s.default).insert(n).concat(c)),
                            h = (new s.default).retain(t).concat(d);
                        return this.applyDelta(h)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            r = this.delta;
                        if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(b) && c.default.find(e[0].target)) {
                            var o = c.default.find(e[0].target),
                                i = (0, h.bubbleFormats)(o),
                                a = o.offset(this.scroll),
                                l = e[0].oldValue.replace(d.default.CONTENTS, ""),
                                u = (new s.default).insert(l),
                                f = (new s.default).insert(o.value());
                            t = (new s.default).retain(a).concat(u.diff(f, n)).reduce((function(t, e) {
                                return e.insert ? t.insert(e.insert, i) : t.push(e)
                            }), new s.default), this.delta = r.compose(t)
                        } else this.delta = this.getDelta(), t && (0, v.default)(r.compose(t), this.delta) || (t = r.diff(this.delta, n));
                        return t
                    }
                }]), t
            }();
        e.default = _
    }, function(t, e) {
        "use strict";

        function n() {}

        function r(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1
        }

        function o() {
            this._events = new n, this._eventsCount = 0
        }
        var i = Object.prototype.hasOwnProperty,
            a = "~";
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)), o.prototype.eventNames = function() {
            var t, e, n = [];
            if (0 === this._eventsCount) return n;
            for (e in t = this._events) i.call(t, e) && n.push(a ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
        }, o.prototype.listeners = function(t, e) {
            var n = a ? a + t : t,
                r = this._events[n];
            if (e) return !!r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var o = 0, i = r.length, l = new Array(i); o < i; o++) l[o] = r[o].fn;
            return l
        }, o.prototype.emit = function(t, e, n, r, o, i) {
            var l = a ? a + t : t;
            if (!this._events[l]) return !1;
            var s, u, c = this._events[l],
                f = arguments.length;
            if (c.fn) {
                switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                    case 1:
                        return c.fn.call(c.context), !0;
                    case 2:
                        return c.fn.call(c.context, e), !0;
                    case 3:
                        return c.fn.call(c.context, e, n), !0;
                    case 4:
                        return c.fn.call(c.context, e, n, r), !0;
                    case 5:
                        return c.fn.call(c.context, e, n, r, o), !0;
                    case 6:
                        return c.fn.call(c.context, e, n, r, o, i), !0
                }
                for (u = 1, s = new Array(f - 1); u < f; u++) s[u - 1] = arguments[u];
                c.fn.apply(c.context, s)
            } else {
                var d, h = c.length;
                for (u = 0; u < h; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, e);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, e, n);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, e, n, r);
                        break;
                    default:
                        if (!s)
                            for (d = 1, s = new Array(f - 1); d < f; d++) s[d - 1] = arguments[d];
                        c[u].fn.apply(c[u].context, s)
                }
            }
            return !0
        }, o.prototype.on = function(t, e, n) {
            var o = new r(e, n || this),
                i = a ? a + t : t;
            return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
        }, o.prototype.once = function(t, e, n) {
            var o = new r(e, n || this, !0),
                i = a ? a + t : t;
            return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
        }, o.prototype.removeListener = function(t, e, r, o) {
            var i = a ? a + t : t;
            if (!this._events[i]) return this;
            if (!e) return 0 == --this._eventsCount ? this._events = new n : delete this._events[i], this;
            var l = this._events[i];
            if (l.fn) l.fn !== e || o && !l.once || r && l.context !== r || (0 == --this._eventsCount ? this._events = new n : delete this._events[i]);
            else {
                for (var s = 0, u = [], c = l.length; s < c; s++)(l[s].fn !== e || o && !l[s].once || r && l[s].context !== r) && u.push(l[s]);
                u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new n : delete this._events[i]
            }
            return this
        }, o.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new n : delete this._events[e])) : (this._events = new n, this._eventsCount = 0), this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
            return this
        }, o.prefixed = a, o.EventEmitter = o, void 0 !== t && (t.exports = o)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            return t instanceof f.default || t instanceof c.BlockEmbed
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            l = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            s = r(n(0)),
            u = r(n(9)),
            c = n(3),
            f = r(c),
            d = r(n(14)),
            h = r(n(13)),
            p = r(n(23)),
            y = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce((function(t, e) {
                        return t[e] = !0, t
                    }), {})), r.domNode.addEventListener("DOMNodeInserted", (function() {})), r.optimize(), r.enable(), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), a(e, [{
                    key: "batchStart",
                    value: function() {
                        this.batch = !0
                    }
                }, {
                    key: "batchEnd",
                    value: function() {
                        this.batch = !1, this.optimize()
                    }
                }, {
                    key: "deleteAt",
                    value: function(t, n) {
                        var r = this.line(t),
                            o = i(r, 2),
                            a = o[0],
                            s = o[1],
                            u = this.line(t + n),
                            f = i(u, 1)[0];
                        if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != f && a !== f && s > 0) {
                            if (a instanceof c.BlockEmbed || f instanceof c.BlockEmbed) return void this.optimize();
                            if (a instanceof h.default) {
                                var p = a.newlineIndex(a.length(), !0);
                                if (p > -1 && (a = a.split(p + 1)) === f) return void this.optimize()
                            } else if (f instanceof h.default) {
                                var y = f.newlineIndex(0);
                                y > -1 && f.split(y + 1)
                            }
                            var m = f.children.head instanceof d.default ? null : f.children.head;
                            a.moveChildren(f, m), a.remove()
                        }
                        this.optimize()
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.domNode.setAttribute("contenteditable", t)
                    }
                }, {
                    key: "formatAt",
                    value: function(t, n, r, o) {
                        (null == this.whitelist || this.whitelist[r]) && (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize())
                    }
                }, {
                    key: "insertAt",
                    value: function(t, n, r) {
                        if (null == r || null == this.whitelist || this.whitelist[n]) {
                            if (t >= this.length())
                                if (null == r || null == s.default.query(n, s.default.Scope.BLOCK)) {
                                    var o = s.default.create(this.statics.defaultChild);
                                    this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r)
                                } else {
                                    var i = s.default.create(n, r);
                                    this.appendChild(i)
                                }
                            else l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                            this.optimize()
                        }
                    }
                }, {
                    key: "insertBefore",
                    value: function(t, n) {
                        if (t.statics.scope === s.default.Scope.INLINE_BLOT) {
                            var r = s.default.create(this.statics.defaultChild);
                            r.appendChild(t), t = r
                        }
                        l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n)
                    }
                }, {
                    key: "leaf",
                    value: function(t) {
                        return this.path(t).pop() || [null, -1]
                    }
                }, {
                    key: "line",
                    value: function(t) {
                        return t === this.length() ? this.line(t - 1) : this.descendant(o, t)
                    }
                }, {
                    key: "lines",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                        return function t(e, n, r) {
                            var i = [],
                                a = r;
                            return e.children.forEachAt(n, r, (function(e, n, r) {
                                o(e) ? i.push(e) : e instanceof s.default.Container && (i = i.concat(t(e, n, a))), a -= r
                            })), i
                        }(this, t, e)
                    }
                }, {
                    key: "optimize",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        !0 !== this.batch && (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n), t.length > 0 && this.emitter.emit(u.default.events.SCROLL_OPTIMIZE, t, n))
                    }
                }, {
                    key: "path",
                    value: function(t) {
                        return l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1)
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        if (!0 !== this.batch) {
                            var n = u.default.sources.USER;
                            "string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(u.default.events.SCROLL_BEFORE_UPDATE, n, t), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(u.default.events.SCROLL_UPDATE, n, t)
                        }
                    }
                }]), e
            }(s.default.Scroll);
        y.blotName = "scroll", y.className = "ql-editor", y.tagName = "DIV", y.defaultChild = "block", y.allowedChildren = [f.default, c.BlockEmbed, p.default], e.default = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e, n) {
            return "object" === (void 0 === e ? "undefined" : m(e)) ? Object.keys(e).reduce((function(t, n) {
                return i(t, n, e[n])
            }), t) : t.reduce((function(t, r) {
                return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0, b.default)({}, o({}, e, n), r.attributes))
            }), new _.default)
        }

        function a(t) {
            return t.nodeType !== Node.ELEMENT_NODE ? {} : t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
        }

        function l(t, e) {
            for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
                var o = t.ops[r];
                if ("string" != typeof o.insert) break;
                n = o.insert + n
            }
            return n.slice(-1 * e.length) === e
        }

        function s(t) {
            return 0 !== t.childNodes.length && ["block", "list-item"].indexOf(a(t).display) > -1
        }

        function u(t, e, n) {
            return t.nodeType === t.TEXT_NODE ? n.reduce((function(e, n) {
                return n(t, e)
            }), new _.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], (function(r, o) {
                var i = u(o, e, n);
                return o.nodeType === t.ELEMENT_NODE && (i = e.reduce((function(t, e) {
                    return e(o, t)
                }), i), i = (o[L] || []).reduce((function(t, e) {
                    return e(o, t)
                }), i)), r.concat(i)
            }), new _.default) : new _.default
        }

        function c(t, e, n) {
            return i(n, t, !0)
        }

        function f(t, e) {
            var n = w.default.Attributor.Attribute.keys(t),
                r = w.default.Attributor.Class.keys(t),
                o = w.default.Attributor.Style.keys(t),
                a = {};
            return n.concat(r).concat(o).forEach((function(e) {
                var n = w.default.query(e, w.default.Scope.ATTRIBUTE);
                null != n && (a[n.attrName] = n.value(t), a[n.attrName]) || (null == (n = D[e]) || n.attrName !== e && n.keyName !== e || (a[n.attrName] = n.value(t) || void 0), null == (n = I[e]) || n.attrName !== e && n.keyName !== e || (n = I[e], a[n.attrName] = n.value(t) || void 0))
            })), Object.keys(a).length > 0 && (e = i(e, a)), e
        }

        function d(t, e) {
            var n = w.default.query(t);
            if (null == n) return e;
            if (n.prototype instanceof w.default.Embed) {
                var r = {},
                    o = n.value(t);
                null != o && (r[n.blotName] = o, e = (new _.default).insert(r, n.formats(t)))
            } else "function" == typeof n.formats && (e = i(e, n.blotName, n.formats(t)));
            return e
        }

        function h(t, e) {
            return l(e, "\n") || (s(t) || e.length() > 0 && t.nextSibling && s(t.nextSibling)) && e.insert("\n"), e
        }

        function p(t, e) {
            if (s(t) && null != t.nextElementSibling && !l(e, "\n\n")) {
                var n = t.offsetHeight + parseFloat(a(t).marginTop) + parseFloat(a(t).marginBottom);
                t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
            }
            return e
        }

        function y(t, e) {
            var n = t.data;
            if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
            if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;
            if (!a(t.parentNode).whiteSpace.startsWith("pre")) {
                var r = function(t, e) {
                    return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t ? " " : e
                };
                n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && s(t.parentNode) || null != t.previousSibling && s(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && s(t.parentNode) || null != t.nextSibling && s(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
            }
            return e.insert(n)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
        var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            v = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            g = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            b = r(n(2)),
            _ = r(n(4)),
            w = r(n(0)),
            x = r(n(6)),
            E = r(n(10)),
            O = r(n(7)),
            k = n(34),
            T = n(35),
            S = r(n(13)),
            A = n(24),
            N = n(36),
            C = n(37),
            j = n(38),
            q = (0, E.default)("quill:clipboard"),
            L = "__ql-matcher",
            P = [
                [Node.TEXT_NODE, y],
                [Node.TEXT_NODE, h],
                ["br", function(t, e) {
                    return l(e, "\n") || e.insert("\n"), e
                }],
                [Node.ELEMENT_NODE, h],
                [Node.ELEMENT_NODE, d],
                [Node.ELEMENT_NODE, p],
                [Node.ELEMENT_NODE, f],
                [Node.ELEMENT_NODE, function(t, e) {
                    var n = {},
                        r = t.style || {};
                    return r.fontStyle && "italic" === a(t).fontStyle && (n.italic = !0), r.fontWeight && (a(t).fontWeight.startsWith("bold") || parseInt(a(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = i(e, n)), parseFloat(r.textIndent || 0) > 0 && (e = (new _.default).insert("\t").concat(e)), e
                }],
                ["li", function(t, e) {
                    var n = w.default.query(t);
                    if (null == n || "list-item" !== n.blotName || !l(e, "\n")) return e;
                    for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) "list" === (w.default.query(o) || {}).blotName && (r += 1), o = o.parentNode;
                    return r <= 0 ? e : e.compose((new _.default).retain(e.length() - 1).retain(1, {
                        indent: r
                    }))
                }],
                ["b", c.bind(c, "bold")],
                ["i", c.bind(c, "italic")],
                ["style", function() {
                    return new _.default
                }]
            ],
            D = [k.AlignAttribute, N.DirectionAttribute].reduce((function(t, e) {
                return t[e.keyName] = e, t
            }), {}),
            I = [k.AlignStyle, T.BackgroundStyle, A.ColorStyle, N.DirectionStyle, C.FontStyle, j.SizeStyle].reduce((function(t, e) {
                return t[e.keyName] = e, t
            }), {}),
            R = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], P.concat(r.options.matchers).forEach((function(t) {
                        var e = v(t, 2),
                            o = e[0],
                            i = e[1];
                        (n.matchVisual || i !== p) && r.addMatcher(o, i)
                    })), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), g(e, [{
                    key: "addMatcher",
                    value: function(t, e) {
                        this.matchers.push([t, e])
                    }
                }, {
                    key: "convert",
                    value: function(t) {
                        if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();
                        var e = this.quill.getFormat(this.quill.selection.savedRange.index);
                        if (e[S.default.blotName]) {
                            var n = this.container.innerText;
                            return this.container.innerHTML = "", (new _.default).insert(n, o({}, S.default.blotName, e[S.default.blotName]))
                        }
                        var r = this.prepareMatching(),
                            i = v(r, 2),
                            a = i[0],
                            s = i[1],
                            c = u(this.container, a, s);
                        return l(c, "\n") && null == c.ops[c.ops.length - 1].attributes && (c = c.compose((new _.default).retain(c.length() - 1).delete(1))), q.log("convert", this.container.innerHTML, c), this.container.innerHTML = "", c
                    }
                }, {
                    key: "dangerouslyPasteHTML",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.default.sources.API;
                        if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, x.default.sources.SILENT);
                        else {
                            var r = this.convert(e);
                            this.quill.updateContents((new _.default).retain(t).concat(r), n), this.quill.setSelection(t + r.length(), x.default.sources.SILENT)
                        }
                    }
                }, {
                    key: "onPaste",
                    value: function(t) {
                        var e = this;
                        if (!t.defaultPrevented && this.quill.isEnabled()) {
                            var n = this.quill.getSelection(),
                                r = (new _.default).retain(n.index),
                                o = this.quill.scrollingContainer.scrollTop;
                            this.container.focus(), this.quill.selection.update(x.default.sources.SILENT), setTimeout((function() {
                                r = r.concat(e.convert()).delete(n.length), e.quill.updateContents(r, x.default.sources.USER), e.quill.setSelection(r.length() - n.length, x.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = o, e.quill.focus()
                            }), 1)
                        }
                    }
                }, {
                    key: "prepareMatching",
                    value: function() {
                        var t = this,
                            e = [],
                            n = [];
                        return this.matchers.forEach((function(r) {
                            var o = v(r, 2),
                                i = o[0],
                                a = o[1];
                            switch (i) {
                                case Node.TEXT_NODE:
                                    n.push(a);
                                    break;
                                case Node.ELEMENT_NODE:
                                    e.push(a);
                                    break;
                                default:
                                    [].forEach.call(t.container.querySelectorAll(i), (function(t) {
                                        t[L] = t[L] || [], t[L].push(a)
                                    }))
                            }
                        })), [e, n]
                    }
                }]), e
            }(O.default);
        R.DEFAULTS = {
            matchers: [],
            matchVisual: !0
        }, e.default = R, e.matchAttributor = f, e.matchBlot = d, e.matchNewline = h, e.matchSpacing = p, e.matchText = y
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            var e = t.reduce((function(t, e) {
                    return t + (e.delete || 0)
                }), 0),
                n = t.length() - e;
            return function(t) {
                var e = t.ops[t.ops.length - 1];
                return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some((function(t) {
                    return null != a.default.query(t, a.default.Scope.BLOCK)
                })))
            }(t) && (n -= 1), n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getLastChangeIndex = e.default = void 0;
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = r(n(0)),
            l = r(n(6)),
            s = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(l.default.events.EDITOR_CHANGE, (function(t, e, n, o) {
                        t !== l.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== l.default.sources.USER ? r.transform(e) : r.record(e, n))
                    })), r.quill.keyboard.addBinding({
                        key: "Z",
                        shortKey: !0
                    }, r.undo.bind(r)), r.quill.keyboard.addBinding({
                        key: "Z",
                        shortKey: !0,
                        shiftKey: !0
                    }, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
                        key: "Y",
                        shortKey: !0
                    }, r.redo.bind(r)), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "change",
                    value: function(t, e) {
                        if (0 !== this.stack[t].length) {
                            var n = this.stack[t].pop();
                            this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], l.default.sources.USER), this.ignoreChange = !1;
                            var r = o(n[t]);
                            this.quill.setSelection(r)
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.stack = {
                            undo: [],
                            redo: []
                        }
                    }
                }, {
                    key: "cutoff",
                    value: function() {
                        this.lastRecorded = 0
                    }
                }, {
                    key: "record",
                    value: function(t, e) {
                        if (0 !== t.ops.length) {
                            this.stack.redo = [];
                            var n = this.quill.getContents().diff(e),
                                r = Date.now();
                            if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                                var o = this.stack.undo.pop();
                                n = n.compose(o.undo), t = o.redo.compose(t)
                            } else this.lastRecorded = r;
                            this.stack.undo.push({
                                redo: t,
                                undo: n
                            }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
                        }
                    }
                }, {
                    key: "redo",
                    value: function() {
                        this.change("redo", "undo")
                    }
                }, {
                    key: "transform",
                    value: function(t) {
                        this.stack.undo.forEach((function(e) {
                            e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                        })), this.stack.redo.forEach((function(e) {
                            e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                        }))
                    }
                }, {
                    key: "undo",
                    value: function() {
                        this.change("undo", "redo")
                    }
                }]), e
            }(r(n(7)).default);
        s.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
        }, e.default = s, e.getLastChangeIndex = o
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.IndentClass = void 0;
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "add",
                    value: function(t, n) {
                        if ("+1" === n || "-1" === n) {
                            var r = this.value(t) || 0;
                            n = "+1" === n ? r + 1 : r - 1
                        }
                        return 0 === n ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n)
                    }
                }, {
                    key: "canAdd",
                    value: function(t, n) {
                        return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n))
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0
                    }
                }]), e
            }(l.default.Attributor.Class),
            u = new s("indent", "ql-indent", {
                scope: l.default.Scope.BLOCK,
                whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
            });
        e.IndentClass = u
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            a = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(i.default);
        a.blotName = "blockquote", a.tagName = "blockquote", e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(3)),
            l = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, null, [{
                    key: "formats",
                    value: function(t) {
                        return this.tagName.indexOf(t.tagName) + 1
                    }
                }]), e
            }(a.default);
        l.blotName = "header", l.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = l
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.ListItem = void 0;
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            u = r(n(0)),
            c = r(n(3)),
            f = r(n(23)),
            d = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, t), l(e, [{
                    key: "format",
                    value: function(t, n) {
                        t !== h.blotName || n ? s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(u.default.create(this.statics.scope))
                    }
                }, {
                    key: "remove",
                    value: function() {
                        null == this.prev && null == this.next ? this.parent.remove() : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this)
                    }
                }, {
                    key: "replaceWith",
                    value: function(t, n) {
                        return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n))
                    }
                }], [{
                    key: "formats",
                    value: function(t) {
                        return t.tagName === this.tagName ? void 0 : s(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t)
                    }
                }]), e
            }(c.default);
        d.blotName = "list-item", d.tagName = "LI";
        var h = function(t) {
            function e(t) {
                o(this, e);
                var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                    r = function(e) {
                        if (e.target.parentNode === t) {
                            var r = n.statics.formats(t),
                                o = u.default.find(e.target);
                            "checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked")
                        }
                    };
                return t.addEventListener("touchstart", r), t.addEventListener("mousedown", r), n
            }
            return a(e, t), l(e, null, [{
                key: "create",
                value: function(t) {
                    var n = "ordered" === t ? "OL" : "UL",
                        r = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
                    return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t), r
                }
            }, {
                key: "formats",
                value: function(t) {
                    return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
                }
            }]), l(e, [{
                key: "format",
                value: function(t, e) {
                    this.children.length > 0 && this.children.tail.format(t, e)
                }
            }, {
                key: "formats",
                value: function() {
                    return function(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }({}, this.statics.blotName, this.statics.formats(this.domNode))
                }
            }, {
                key: "insertBefore",
                value: function(t, n) {
                    if (t instanceof d) s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
                    else {
                        var r = null == n ? this.length() : n.offset(this),
                            o = this.split(r);
                        o.parent.insertBefore(t, o)
                    }
                }
            }, {
                key: "optimize",
                value: function(t) {
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                    var n = this.next;
                    null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove())
                }
            }, {
                key: "replace",
                value: function(t) {
                    if (t.statics.blotName !== this.statics.blotName) {
                        var n = u.default.create(this.statics.defaultChild);
                        t.moveChildren(n), this.appendChild(n)
                    }
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
                }
            }]), e
        }(f.default);
        h.blotName = "list", h.scope = u.default.Scope.BLOCK_BLOT, h.tagName = ["OL", "UL"], h.defaultChild = "list-item", h.allowedChildren = [d], e.ListItem = d, e.default = h
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(39)),
            a = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(i.default);
        a.blotName = "italic", a.tagName = ["EM", "I"], e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(5)),
            s = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, null, [{
                    key: "create",
                    value: function(t) {
                        return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
                    }
                }]), e
            }(l.default);
        s.blotName = "script", s.tagName = ["SUB", "SUP"], e.default = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(5)),
            a = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(i.default);
        a.blotName = "strike", a.tagName = "S", e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(5)),
            a = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(i.default);
        a.blotName = "underline", a.tagName = "U", e.default = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(0)),
            s = n(15),
            u = ["alt", "height", "width"],
            c = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "format",
                    value: function(t, n) {
                        u.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return u.reduce((function(e, n) {
                            return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
                        }), {})
                    }
                }, {
                    key: "match",
                    value: function(t) {
                        return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
                    }
                }, {
                    key: "sanitize",
                    value: function(t) {
                        return (0, s.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return t.getAttribute("src")
                    }
                }]), e
            }(l.default.Embed);
        c.blotName = "image", c.tagName = "IMG", e.default = c
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            l = n(3),
            s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(15)),
            u = ["height", "width"],
            c = function(t) {
                function e() {
                    return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "format",
                    value: function(t, n) {
                        u.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                    }
                }], [{
                    key: "create",
                    value: function(t) {
                        var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n
                    }
                }, {
                    key: "formats",
                    value: function(t) {
                        return u.reduce((function(e, n) {
                            return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
                        }), {})
                    }
                }, {
                    key: "sanitize",
                    value: function(t) {
                        return s.default.sanitize(t)
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return t.getAttribute("src")
                    }
                }]), e
            }(l.BlockEmbed);
        c.blotName = "video", c.className = "ql-video", c.tagName = "IFRAME", e.default = c
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.FormulaBlot = void 0;
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            u = r(n(33)),
            c = r(n(6)),
            f = r(n(7)),
            d = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, t), l(e, null, [{
                    key: "create",
                    value: function(t) {
                        var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                        return "string" == typeof t && (window.katex.render(t, n, {
                            throwOnError: !1,
                            errorColor: "#f00"
                        }), n.setAttribute("data-value", t)), n
                    }
                }, {
                    key: "value",
                    value: function(t) {
                        return t.getAttribute("data-value")
                    }
                }]), e
            }(u.default);
        d.blotName = "formula", d.className = "ql-formula", d.tagName = "SPAN";
        var h = function(t) {
            function e() {
                o(this, e);
                var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                if (null == window.katex) throw new Error("Formula module requires KaTeX.");
                return t
            }
            return a(e, t), l(e, null, [{
                key: "register",
                value: function() {
                    c.default.register(d, !0)
                }
            }]), e
        }(f.default);
        e.FormulaBlot = d, e.default = h
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.CodeToken = e.CodeBlock = void 0;
        var l = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            u = r(n(0)),
            c = r(n(6)),
            f = r(n(7)),
            d = function(t) {
                function e() {
                    return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return a(e, t), l(e, [{
                    key: "replaceWith",
                    value: function(t) {
                        this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
                    }
                }, {
                    key: "highlight",
                    value: function(t) {
                        var e = this.domNode.textContent;
                        this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e)
                    }
                }]), e
            }(r(n(13)).default);
        d.className = "ql-syntax";
        var h = new u.default.Attributor.Class("token", "hljs", {
                scope: u.default.Scope.INLINE
            }),
            p = function(t) {
                function e(t, n) {
                    o(this, e);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                    var a = null;
                    return r.quill.on(c.default.events.SCROLL_OPTIMIZE, (function() {
                        clearTimeout(a), a = setTimeout((function() {
                            r.highlight(), a = null
                        }), r.options.interval)
                    })), r.highlight(), r
                }
                return a(e, t), l(e, null, [{
                    key: "register",
                    value: function() {
                        c.default.register(h, !0), c.default.register(d, !0)
                    }
                }]), l(e, [{
                    key: "highlight",
                    value: function() {
                        var t = this;
                        if (!this.quill.selection.composing) {
                            this.quill.update(c.default.sources.USER);
                            var e = this.quill.getSelection();
                            this.quill.scroll.descendants(d).forEach((function(e) {
                                e.highlight(t.options.highlight)
                            })), this.quill.update(c.default.sources.SILENT), null != e && this.quill.setSelection(e, c.default.sources.SILENT)
                        }
                    }
                }]), e
            }(f.default);
        p.DEFAULTS = {
            highlight: null == window.hljs ? null : function(t) {
                return window.hljs.highlightAuto(t).value
            },
            interval: 1e3
        }, e.CodeBlock = d, e.CodeToken = h, e.default = p
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function i(t, e, n) {
            var r = document.createElement("button");
            r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(r)
        }

        function a(t, e) {
            Array.isArray(e[0]) || (e = [e]), e.forEach((function(e) {
                var n = document.createElement("span");
                n.classList.add("ql-formats"), e.forEach((function(t) {
                    if ("string" == typeof t) i(n, t);
                    else {
                        var e = Object.keys(t)[0],
                            r = t[e];
                        Array.isArray(r) ? function(t, e, n) {
                            var r = document.createElement("select");
                            r.classList.add("ql-" + e), n.forEach((function(t) {
                                var e = document.createElement("option");
                                !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e)
                            })), t.appendChild(r)
                        }(n, e, r) : i(n, e, r)
                    }
                })), t.appendChild(n)
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.addControls = e.default = void 0;
        var l = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = r(n(4)),
            c = r(n(0)),
            f = r(n(6)),
            d = r(n(10)),
            h = r(n(7)),
            p = (0, d.default)("quill:toolbar"),
            y = function(t) {
                function e(t, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r, i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    if (Array.isArray(i.options.container)) {
                        var s = document.createElement("div");
                        a(s, i.options.container), t.container.parentNode.insertBefore(s, t.container), i.container = s
                    } else "string" == typeof i.options.container ? i.container = document.querySelector(i.options.container) : i.container = i.options.container;
                    return i.container instanceof HTMLElement ? (i.container.classList.add("ql-toolbar"), i.controls = [], i.handlers = {}, Object.keys(i.options.handlers).forEach((function(t) {
                        i.addHandler(t, i.options.handlers[t])
                    })), [].forEach.call(i.container.querySelectorAll("button, select"), (function(t) {
                        i.attach(t)
                    })), i.quill.on(f.default.events.EDITOR_CHANGE, (function(t, e) {
                        t === f.default.events.SELECTION_CHANGE && i.update(e)
                    })), i.quill.on(f.default.events.SCROLL_OPTIMIZE, (function() {
                        var t = i.quill.selection.getRange(),
                            e = l(t, 1)[0];
                        i.update(e)
                    })), i) : (r = p.error("Container required for toolbar", i.options), o(i, r))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), s(e, [{
                    key: "addHandler",
                    value: function(t, e) {
                        this.handlers[t] = e
                    }
                }, {
                    key: "attach",
                    value: function(t) {
                        var e = this,
                            n = [].find.call(t.classList, (function(t) {
                                return 0 === t.indexOf("ql-")
                            }));
                        if (n) {
                            if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) {
                                if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void p.warn("ignoring attaching to disabled format", n, t);
                                if (null == c.default.query(n)) return void p.warn("ignoring attaching to nonexistent format", n, t)
                            }
                            var r = "SELECT" === t.tagName ? "change" : "click";
                            t.addEventListener(r, (function(r) {
                                var o = void 0;
                                if ("SELECT" === t.tagName) {
                                    if (t.selectedIndex < 0) return;
                                    var i = t.options[t.selectedIndex];
                                    o = !i.hasAttribute("selected") && (i.value || !1)
                                } else o = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), r.preventDefault();
                                e.quill.focus();
                                var a = e.quill.selection.getRange(),
                                    s = l(a, 1)[0];
                                if (null != e.handlers[n]) e.handlers[n].call(e, o);
                                else if (c.default.query(n).prototype instanceof c.default.Embed) {
                                    if (!(o = prompt("Enter " + n))) return;
                                    e.quill.updateContents((new u.default).retain(s.index).delete(s.length).insert(function(t, e, n) {
                                        return e in t ? Object.defineProperty(t, e, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[e] = n, t
                                    }({}, n, o)), f.default.sources.USER)
                                } else e.quill.format(n, o, f.default.sources.USER);
                                e.update(s)
                            })), this.controls.push([n, t])
                        }
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = null == t ? {} : this.quill.getFormat(t);
                        this.controls.forEach((function(n) {
                            var r = l(n, 2),
                                o = r[0],
                                i = r[1];
                            if ("SELECT" === i.tagName) {
                                var a = void 0;
                                if (null == t) a = null;
                                else if (null == e[o]) a = i.querySelector("option[selected]");
                                else if (!Array.isArray(e[o])) {
                                    var s = e[o];
                                    "string" == typeof s && (s = s.replace(/\"/g, '\\"')), a = i.querySelector('option[value="' + s + '"]')
                                }
                                null == a ? (i.value = "", i.selectedIndex = -1) : a.selected = !0
                            } else if (null == t) i.classList.remove("ql-active");
                            else if (i.hasAttribute("value")) {
                                var u = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute("value") || null == e[o] && !i.getAttribute("value");
                                i.classList.toggle("ql-active", u)
                            } else i.classList.toggle("ql-active", null != e[o])
                        }))
                    }
                }]), e
            }(h.default);
        y.DEFAULTS = {}, y.DEFAULTS = {
            container: null,
            handlers: {
                clean: function() {
                    var t = this,
                        e = this.quill.getSelection();
                    if (null != e)
                        if (0 == e.length) {
                            var n = this.quill.getFormat();
                            Object.keys(n).forEach((function(e) {
                                null != c.default.query(e, c.default.Scope.INLINE) && t.quill.format(e, !1)
                            }))
                        } else this.quill.removeFormat(e, f.default.sources.USER)
                },
                direction: function(t) {
                    var e = this.quill.getFormat().align;
                    "rtl" === t && null == e ? this.quill.format("align", "right", f.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, f.default.sources.USER), this.quill.format("direction", t, f.default.sources.USER)
                },
                indent: function(t) {
                    var e = this.quill.getSelection(),
                        n = this.quill.getFormat(e),
                        r = parseInt(n.indent || 0);
                    if ("+1" === t || "-1" === t) {
                        var o = "+1" === t ? 1 : -1;
                        "rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, f.default.sources.USER)
                    }
                },
                link: function(t) {
                    !0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, f.default.sources.USER)
                },
                list: function(t) {
                    var e = this.quill.getSelection(),
                        n = this.quill.getFormat(e);
                    "check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, f.default.sources.USER) : this.quill.format("list", "unchecked", f.default.sources.USER) : this.quill.format("list", t, f.default.sources.USER)
                }
            }
        }, e.default = y, e.addControls = a
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
    }, function(t, e) {
        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
    }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.BubbleTooltip = void 0;
        var l = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = r(n(2)),
            c = r(n(9)),
            f = n(44),
            d = r(f),
            h = n(22),
            p = r(n(26)),
            y = [
                ["bold", "italic", "link"],
                [{
                    header: 1
                }, {
                    header: 2
                }, "blockquote"]
            ],
            m = function(t) {
                function e(t, n) {
                    o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = y);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.quill.container.classList.add("ql-bubble"), r
                }
                return a(e, t), s(e, [{
                    key: "extendToolbar",
                    value: function(t) {
                        this.tooltip = new v(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), p.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), p.default)
                    }
                }]), e
            }(d.default);
        m.DEFAULTS = (0, u.default)(!0, {}, d.default.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link: function(t) {
                            t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
                        }
                    }
                }
            }
        });
        var v = function(t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                return r.quill.on(c.default.events.EDITOR_CHANGE, (function(t, e, n, o) {
                    if (t === c.default.events.SELECTION_CHANGE)
                        if (null != e && e.length > 0 && o === c.default.sources.USER) {
                            r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
                            var i = r.quill.getLines(e.index, e.length);
                            if (1 === i.length) r.position(r.quill.getBounds(e));
                            else {
                                var a = i[i.length - 1],
                                    l = r.quill.getIndex(a),
                                    s = Math.min(a.length() - 1, e.index + e.length - l),
                                    u = r.quill.getBounds(new h.Range(l, s));
                                r.position(u)
                            }
                        } else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
                })), r
            }
            return a(e, t), s(e, [{
                key: "listen",
                value: function() {
                    var t = this;
                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", (function() {
                        t.root.classList.remove("ql-editing")
                    })), this.quill.on(c.default.events.SCROLL_OPTIMIZE, (function() {
                        setTimeout((function() {
                            if (!t.root.classList.contains("ql-hidden")) {
                                var e = t.quill.getSelection();
                                null != e && t.position(t.quill.getBounds(e))
                            }
                        }), 1)
                    }))
                }
            }, {
                key: "cancel",
                value: function() {
                    this.show()
                }
            }, {
                key: "position",
                value: function(t) {
                    var n = l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
                        r = this.root.querySelector(".ql-tooltip-arrow");
                    if (r.style.marginLeft = "", 0 === n) return n;
                    r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
                }
            }]), e
        }(f.BaseTooltip);
        v.TOOL = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = v, e.default = m
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : t(i, n, r)
                }
                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0
            },
            u = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            c = r(n(2)),
            f = r(n(9)),
            d = n(44),
            h = r(d),
            p = r(n(15)),
            y = n(22),
            m = r(n(26)),
            v = [
                [{
                    header: ["1", "2", "3", !1]
                }],
                ["bold", "italic", "underline", "link"],
                [{
                    list: "ordered"
                }, {
                    list: "bullet"
                }],
                ["clean"]
            ],
            g = function(t) {
                function e(t, n) {
                    o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = v);
                    var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                    return r.quill.container.classList.add("ql-snow"), r
                }
                return a(e, t), u(e, [{
                    key: "extendToolbar",
                    value: function(t) {
                        t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), m.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), m.default), this.tooltip = new b(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                            key: "K",
                            shortKey: !0
                        }, (function(e, n) {
                            t.handlers.link.call(t, !n.format.link)
                        }))
                    }
                }]), e
            }(h.default);
        g.DEFAULTS = (0, c.default)(!0, {}, h.default.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link: function(t) {
                            if (t) {
                                var e = this.quill.getSelection();
                                if (null == e || 0 == e.length) return;
                                var n = this.quill.getText(e);
                                /^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n), this.quill.theme.tooltip.edit("link", n)
                            } else this.quill.format("link", !1)
                        }
                    }
                }
            }
        });
        var b = function(t) {
            function e(t, n) {
                o(this, e);
                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                return r.preview = r.root.querySelector("a.ql-preview"), r
            }
            return a(e, t), u(e, [{
                key: "listen",
                value: function() {
                    var t = this;
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", (function(e) {
                        t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault()
                    })), this.root.querySelector("a.ql-remove").addEventListener("click", (function(e) {
                        if (null != t.linkRange) {
                            var n = t.linkRange;
                            t.restoreFocus(), t.quill.formatText(n, "link", !1, f.default.sources.USER), delete t.linkRange
                        }
                        e.preventDefault(), t.hide()
                    })), this.quill.on(f.default.events.SELECTION_CHANGE, (function(e, n, r) {
                        if (null != e) {
                            if (0 === e.length && r === f.default.sources.USER) {
                                var o = t.quill.scroll.descendant(p.default, e.index),
                                    i = l(o, 2),
                                    a = i[0],
                                    s = i[1];
                                if (null != a) {
                                    t.linkRange = new y.Range(e.index - s, a.length());
                                    var u = p.default.formats(a.domNode);
                                    return t.preview.textContent = u, t.preview.setAttribute("href", u), t.show(), void t.position(t.quill.getBounds(t.linkRange))
                                }
                            } else delete t.linkRange;
                            t.hide()
                        }
                    }))
                }
            }, {
                key: "show",
                value: function() {
                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
                }
            }]), e
        }(d.BaseTooltip);
        b.TOOL = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = g
    }]).default
})), document.querySelector("#cookie-banner-dismiss") && document.querySelector("#cookie-banner-dismiss").addEventListener("click", (function() {
    setCookie("cookie_law", 1, (new Date).getTime() + 31536e7, "/"), document.querySelector("#cookie-banner").classList.add("d-none")
})), document.querySelector("#dark-mode") && document.querySelector("#dark-mode").addEventListener("click", (function(t) {
    t.preventDefault(), document.querySelectorAll("[data-theme-target]").forEach((function(t) {
        t.setAttribute(t.dataset.themeTarget, document.querySelector("html").classList.contains("dark") ? t.dataset.themeLight : t.dataset.themeDark)
    })), this.querySelector("span").textContent = document.querySelector("html").classList.contains("dark") ? this.querySelector("span").dataset.textLight : this.querySelector("span").dataset.textDark, setCookie("dark_mode", document.querySelector("html").classList.contains("dark") ? 0 : 1, (new Date).getTime() + 31536e7, "/"), document.querySelector("html").classList.contains("dark") ? document.querySelector("html").classList.remove("dark") : document.querySelector("html").classList.add("dark")
})), document.querySelector("#plan-month") && document.querySelector("#plan-month").addEventListener("click", (function() {
    document.querySelectorAll(".plan-month").forEach((t => t.classList.add("d-block"))), document.querySelectorAll(".plan-year").forEach((t => t.classList.remove("d-block")))
})), document.querySelector("#plan-year") && document.querySelector("#plan-year").addEventListener("click", (function() {
    document.querySelectorAll(".plan-year").forEach((t => t.classList.add("d-block"))), document.querySelectorAll(".plan-month").forEach((t => t.classList.remove("d-block", "plan-preload")))
}));
let updateSummary = t => {
        "month" == t ? (document.querySelectorAll(".checkout-month").forEach((function(t) {
            t.classList.add("d-inline-block")
        })), document.querySelectorAll(".checkout-year").forEach((function(t) {
            t.classList.remove("d-inline-block")
        }))) : (document.querySelectorAll(".checkout-month").forEach((function(t) {
            t.classList.remove("d-inline-block")
        })), document.querySelectorAll(".checkout-year").forEach((function(t) {
            t.classList.add("d-inline-block")
        })))
    },
    updateBillingType = t => {
        "bank" == t ? (document.querySelector("#bank-instructions").classList.remove("d-none"), document.querySelector("#bank-instructions").classList.add("d-block")) : document.querySelector("#bank-instructions") && (document.querySelector("#bank-instructions").classList.add("d-none"), document.querySelector("#bank-instructions").classList.remove("d-block")), "cryptocom" == t || "coinbase" == t || "bank" == t ? (document.querySelectorAll(".checkout-subscription").forEach((function(t) {
            t.classList.remove("d-block")
        })), document.querySelectorAll(".checkout-subscription").forEach((function(t) {
            t.classList.add("d-none")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(t) {
            t.classList.add("d-block")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(t) {
            t.classList.remove("d-none")
        }))) : (document.querySelectorAll(".checkout-subscription").forEach((function(t) {
            t.classList.remove("d-none")
        })), document.querySelectorAll(".checkout-subscription").forEach((function(t) {
            t.classList.add("d-block")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(t) {
            t.classList.add("d-none")
        })), document.querySelectorAll(".checkout-one-time").forEach((function(t) {
            t.classList.remove("d-block")
        })))
    };
if (document.querySelector("#form-payment")) {
    let t = new URL(window.location.href);
    document.querySelectorAll('[name="interval"]').forEach((function(e) {
        e.checked && updateSummary(e.value), e.addEventListener("change", (function() {
            t.searchParams.set("interval", e.value), history.pushState(null, null, t.href), updateSummary(e.value)
        }))
    })), document.querySelectorAll('[name="payment_processor"]').forEach((function(e) {
        e.checked && updateBillingType(e.value), e.addEventListener("change", (function() {
            t.searchParams.set("payment", e.value), history.pushState(null, null, t.href), updateBillingType(e.value)
        }))
    })), document.querySelector("#coupon") && document.querySelector("#coupon").addEventListener("click", (function(t) {
        t.preventDefault(), this.classList.add("d-none"), document.querySelector("#coupon-input").classList.remove("d-none"), document.querySelector('input[name="coupon"]').removeAttribute("disabled")
    })), document.querySelector("#coupon-cancel") && document.querySelector("#coupon-cancel").addEventListener("click", (function(t) {
        t.preventDefault(), document.querySelector("#coupon").classList.remove("d-none"), document.querySelector("#coupon-input").classList.add("d-none"), document.querySelector('input[name="coupon"]').setAttribute("disabled", "disabled")
    })), document.querySelector("#i-country").addEventListener("change", (function() {
        document.querySelector("#form-payment").submit.remove(), document.querySelector("#form-payment").submit()
    }))
}
document.querySelector("#form-coupon") && document.querySelector("#i-type").addEventListener("change", (function() {
    1 == document.querySelector("#i-type").value ? (document.querySelector("#form-group-redeemable").classList.remove("d-none"), document.querySelector("#form-group-discount").classList.add("d-none"), document.querySelector("#i-percentage").setAttribute("disabled", "disabled")) : (document.querySelector("#form-group-redeemable").classList.add("d-none"), document.querySelector("#form-group-discount").classList.remove("d-none"), document.querySelector("#i-percentage").removeAttribute("disabled"))
})), document.querySelector("#search-filters") && document.querySelector("#search-filters").addEventListener("click", (function(t) {
    t.stopPropagation()
})), new ClipboardJS('[data-clipboard="true"]'), document.querySelectorAll("[data-clipboard-copy]").forEach((function(t) {
    t.addEventListener("click", (function(t) {
        t.preventDefault();
        try {
            let t = this.dataset.clipboardCopy,
                e = document.createElement("input");
            document.body.append(e), e.value = t, e.select(), document.execCommand("copy"), e.remove()
        } catch (t) {}
    }))
})), jQuery('[data-tooltip="true"]').tooltip({
    animation: !0,
    trigger: "hover",
    boundary: "window"
}), jQuery('[data-tooltip-copy="true"]').tooltip({
    animation: !0
}), document.querySelectorAll('[data-tooltip-copy="true"]').forEach((function(t) {
    t.addEventListener("click", (function(t) {
        jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.textCopied).tooltip("show")
    })), t.addEventListener("mouseleave", (function() {
        this.setAttribute("data-original-title", this.dataset.textCopy)
    }))
})), document.querySelectorAll(".slide-menu-toggle").forEach((function(t) {
    t.addEventListener("click", (function() {
        document.querySelector("#slide-menu").classList.toggle("active")
    }))
})), document.querySelectorAll("[data-password]").forEach((function(t) {
    t.addEventListener("click", (function(t) {
        let e = document.querySelector("#" + this.dataset.password);
        "password" === e.type ? (e.type = "text", jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.passwordHide).tooltip("show")) : (e.type = "password", jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.passwordShow).tooltip("show"))
    }))
}));
let confirmationModalEvent = t => {
    t.addEventListener("click", (function() {
        document.querySelector("#modal-button").removeAttribute("name"), document.querySelector("#modal-button").removeAttribute("value"), this.dataset.buttonName && document.querySelector("#modal-button").setAttribute("name", this.dataset.buttonName), this.dataset.buttonValue && document.querySelector("#modal-button").setAttribute("value", this.dataset.buttonValue), document.querySelector("#modal-label").textContent = this.dataset.title, document.querySelector("#modal-button").textContent = this.dataset.title, document.querySelector("#modal-button").setAttribute("class", this.dataset.button), document.querySelector("#modal-text").textContent = this.dataset.text, document.querySelector("#modal-sub-text").textContent = this.dataset.subText, document.querySelector("#modal form").setAttribute("action", this.dataset.action)
    }))
};
document.querySelectorAll('[data-target="#modal"]').forEach((function(t) {
    confirmationModalEvent(t)
})), document.querySelectorAll("[data-button-loader]").forEach((function(t) {
    t.addEventListener("click", (function(t) {
        this.classList.contains("disabled") && t.preventDefault(), this.classList.add("disabled"), this.querySelector(".spinner-border").classList.remove("d-none"), this.querySelector(".spinner-text").classList.add("invisible")
    }))
}));
let restoreDisabledButton = t => {
    t.classList.remove("disabled"), t.querySelector(".spinner-border").classList.add("d-none"), t.querySelector(".spinner-text").classList.remove("invisible")
};
if (document.querySelector("#ai-form") && (document.querySelector("#ai-form-show-button") && document.querySelector("#ai-form-show-button").addEventListener("click", (function() {
        document.querySelector("#ai-form-show-button").classList.add("d-none"), document.querySelector("#ai-form") && document.querySelector("#ai-form").classList.remove("d-none")
    })), document.querySelectorAll("[data-button-loader]").forEach((function(t) {
        t.addEventListener("click", (function() {
            document.querySelector("#ai-results") && document.querySelector("#ai-results").classList.add("d-none"), document.querySelector("#ai-placeholder-results").classList.remove("d-none"), document.querySelector("#ai-placeholder-results").classList.add("d-flex"), document.querySelector("#ai-placeholder-text-start").classList.add("d-none"), document.querySelector("#ai-placeholder-text-progress").classList.remove("d-none"), document.querySelector("#ai-placeholder-text-progress").classList.add("d-flex")
        }))
    }))), document.querySelector("#tool-filters")) {
    let t = (t, e) => {
        let n = t => {
                document.querySelector('[data-category-label="' + t + '"]').classList.remove("d-none")
            },
            r = t => {
                document.querySelector('[data-tool="' + t + '"]').classList.remove("d-none")
            },
            o = e ? document.querySelectorAll('[data-tool-category="' + e + '"]') : document.querySelectorAll("[data-tool]");
        t || e ? (document.querySelectorAll("[data-category-label]").forEach((function(t) {
            t.classList.add("d-none")
        })), document.querySelectorAll("[data-tool]").forEach((function(t) {
            t.classList.add("d-none")
        })), o.forEach((function(e) {
            t ? e.dataset.tool.toLowerCase().includes(t.toLowerCase()) && (r(e.dataset.tool), n(e.dataset.toolCategory)) : (r(e.dataset.tool), n(e.dataset.toolCategory))
        }))) : (document.querySelectorAll("[data-category-label]").forEach((function(t) {
            t.classList.remove("d-none")
        })), document.querySelectorAll("[data-tool]").forEach((function(t) {
            t.classList.remove("d-none")
        })))
    };
    document.querySelectorAll("[data-filter-category]").forEach((function(e) {
        e.addEventListener("click", (function(e) {
            e.preventDefault(), document.querySelectorAll("[data-filter-category]").forEach((function(t) {
                t.classList.remove(t.dataset.textColorActive, t.dataset.textColorInactive), t.classList.add(t.dataset.textColorInactive), t.removeAttribute("data-filter-category-active"), t.setAttribute("href", "#")
            })), this.classList.remove(this.dataset.textColorInactive), this.classList.add(this.dataset.textColorActive), this.setAttribute("data-filter-category-active", this.dataset.filterCategory), this.removeAttribute("href"), t(document.querySelector("#i-search").value, document.querySelector("[data-filter-category-active]").dataset.filterCategoryActive)
        }))
    })), document.querySelector("#form-tools-search") && (document.querySelector("#i-search").addEventListener("keyup", (function() {
        document.querySelector("#i-search").value.length > 0 ? (t(document.querySelector("#i-search").value, document.querySelector("[data-filter-category-active]").dataset.filterCategoryActive), document.querySelector("#clear-button-container").classList.remove("d-none"), document.querySelector("#i-search").after(document.querySelector("#clear-button-container"))) : (t("", document.querySelector("[data-filter-category-active]").dataset.filterCategoryActive), document.querySelector("#form-tools-search").append(document.querySelector("#clear-button-container")), document.querySelector("#clear-button-container").classList.add("d-none"))
    })), document.querySelector("#b-clear").addEventListener("click", (function() {
        document.querySelector("#i-search").value = "", document.querySelector("#i-search").focus(), document.querySelector("#form-tools-search").append(document.querySelector("#clear-button-container")), document.querySelector("#clear-button-container").classList.add("d-none"), t("", document.querySelector("[data-filter-category-active]").dataset.filterCategoryActive)
    })))
}
let autoResizeTextarea = () => {
    document.querySelectorAll("[data-auto-resize-textarea]").forEach((function(t) {
        t.style.boxSizing = "border-box";
        let e = t.offsetHeight - t.clientHeight;
        t.addEventListener("input", (function(t) {
            t.target.style.height = "auto", t.target.style.height = t.target.scrollHeight + e + "px"
        })), t.style.height = t.scrollHeight + e + "px", t.removeAttribute("data-autoresize")
    }))
};
autoResizeTextarea();
let loadEditor = () => {
    document.querySelectorAll("[data-text-editor]").forEach((function(t) {
        let e = t.dataset.textEditor,
            n = "true" === t.dataset.textEditorReadonly,
            r = document.getElementById("result-" + e),
            o = new Quill(r, {
                modules: {
                    toolbar: "#toolbar-" + e
                },
                theme: "snow",
                readOnly: n
            });
        o.on("text-change", (function() {
            document.querySelector("#i-result-" + e) && (document.querySelector("#i-result-" + e).value = o.root.innerHTML.trim())
        }))
    }))
};
if (loadEditor(), document.querySelector("#form-chat")) {
    let t = () => {
            document.querySelector("#chat-container").scrollTop = document.querySelector("#chat-container").scrollHeight
        },
        e = () => {
            document.querySelector("#i-message").focus()
        },
        n = () => {
            document.querySelector("#i-message").value = ""
        },
        r = () => {
            document.querySelector("#i-message").setAttribute("disabled", "disabled")
        },
        o = () => {
            document.querySelector("#i-message").removeAttribute("disabled")
        },
        i = t => {
            document.querySelector("#i-message").classList.add("is-invalid"), document.querySelector(".invalid-feedback strong").innerText = t
        },
        a = () => {
            document.querySelector("#i-message").classList.remove("is-invalid")
        },
        l = t => {
            t.classList.remove("disabled"), t.querySelector(".spinner-border").classList.add("d-none"), t.querySelector(".spinner-text").classList.remove("invisible")
        };
    setTimeout((function() {
        t()
    }), 100), e(), document.querySelector("#form-chat").addEventListener("submit", (function(t) {
        t.preventDefault(), s()
    }));
    let s = () => {
        if (a(), !document.querySelector("#i-message").value) return e(), void l(document.querySelector('#form-chat button[type="submit"]'));
        const s = new FormData(document.querySelector("#form-chat"));
        r(), s.set("role", "user");
        fetch(document.querySelector("#form-chat").getAttribute("action"), {
            method: "post",
            headers: {
                Accept: "application/json, text/javascript; charset=utf-8",
                "Content-Type": "application/json, text/javascript; charset=utf-8"
            },
            body: JSON.stringify(Object.fromEntries(s))
        }).then((t => t.json())).then((r => {
            if (r.errors) return i(r.errors.message[0]), o(), l(document.querySelector('#form-chat button[type="submit"]')), !1;
            document.querySelector("#chat-messages").innerHTML += r.message, loadEditor(), t(), document.querySelectorAll('#chat-messages a[data-toggle="modal"]').forEach((function(t) {
                confirmationModalEvent(t)
            })), jQuery('#chat-messages [data-tooltip="true"]').tooltip({
                animation: !0,
                trigger: "hover",
                boundary: "window"
            }), s.set("role", "assistant");
            fetch(document.querySelector("#form-chat").getAttribute("action"), {
                method: "post",
                headers: {
                    Accept: "application/json, text/javascript; charset=utf-8",
                    "Content-Type": "application/json, text/javascript; charset=utf-8"
                },
                body: JSON.stringify(Object.fromEntries(s))
            }).then((t => t.json())).then((r => {
                if (r.errors) return i(r.errors.message[0]), o(), l(document.querySelector('#form-chat button[type="submit"]')), !1;
                document.querySelector("#chat-messages").innerHTML += r.message, loadEditor(), t(), e(), n(), o(), l(document.querySelector('#form-chat button[type="submit"]')), document.querySelectorAll('#chat-messages a[data-toggle="modal"]').forEach((function(t) {
                    confirmationModalEvent(t)
                })), jQuery('#chat-messages [data-tooltip="true"]').tooltip({
                    animation: !0,
                    trigger: "hover",
                    boundary: "window"
                })
            })).catch((t => {
                console.log(t), e(), n(), o(), l(document.querySelector('#form-chat button[type="submit"]'))
            }))
        })).catch((t => {
            console.log(t), e(), n(), o(), l(document.querySelector('#form-chat button[type="submit"]'))
        }))
    }
}
let getCookie = t => {
        t += "=";
        for (var e = decodeURIComponent(document.cookie).split(";"), n = 0; n < e.length; n++) {
            for (var r = e[n];
                " " == r.charAt(0);) r = r.substring(1);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
        }
        return ""
    },
    setCookie = (t, e, n, r) => {
        document.cookie = t + "=" + e + ";expires=" + new Date(n).toUTCString() + ";path=" + r
    };