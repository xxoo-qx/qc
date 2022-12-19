var Zepto = function() {
    function L(t) {
        return null == t ? String(t) : S[j.call(t)] || "object"
    }

    function k(t) {
        return "function" == L(t)
    }

    function D(t) {
        return null != t && t == t.window
    }

    function Z(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function $(t) {
        return "object" == L(t)
    }

    function _(t) {
        return $(t) && !D(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function R(t) {
        return "number" == typeof t.length
    }

    function F(t) {
        return a.call(t, function(t) {
            return null != t
        })
    }

    function z(t) {
        return t.length > 0 ? n.fn.concat.apply([], t) : t
    }

    function I(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function B(t) {
        return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function q(t, e) {
        return "number" != typeof e || l[I(t)] ? e : e + "px"
    }

    function H(t) {
        var e, n;
        return f[t] || (e = u.createElement(t), u.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t]
    }

    function U(t) {
        return "children" in t ? s.call(t.children) : n.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function V(t, e) {
        var n, i = t ? t.length : 0;
        for (n = 0; i > n; n++) this[n] = t[n];
        this.length = i, this.selector = e || ""
    }

    function X(n, i, r) {
        for (e in i) r && (_(i[e]) || A(i[e])) ? (_(i[e]) && !_(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), X(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
    }

    function W(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }

    function Y(t, e, n, i) {
        return k(e) ? e.call(t, n, i) : e
    }

    function J(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function G(e, n) {
        var i = e.className || "",
            r = i && i.baseVal !== t;
        return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
    }

    function K(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function Q(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++) Q(t.childNodes[n], e)
    }
    var t, e, n, i, C, O, r = [],
        o = r.concat,
        a = r.filter,
        s = r.slice,
        u = window.document,
        f = {},
        c = {},
        l = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        h = /^\s*<(\w+|!)[^>]*>/,
        p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        m = /^(?:body|html)$/i,
        g = /([A-Z])/g,
        v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        y = ["after", "prepend", "before", "append"],
        b = u.createElement("table"),
        w = u.createElement("tr"),
        x = {
            tr: u.createElement("tbody"),
            tbody: b,
            thead: b,
            tfoot: b,
            td: w,
            th: w,
            "*": u.createElement("div")
        },
        E = /complete|loaded|interactive/,
        T = /^[\w-]*$/,
        S = {},
        j = S.toString,
        P = {},
        N = u.createElement("div"),
        M = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        A = Array.isArray || function(t) {
            return t instanceof Array
        };
    return P.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var i, r = t.parentNode,
            o = !r;
        return o && (r = N).appendChild(t), i = ~P.qsa(r, e).indexOf(t), o && N.removeChild(t), i
    }, C = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, O = function(t) {
        return a.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }, P.fragment = function(e, i, r) {
        var o, a, f;
        return p.test(e) && (o = n(u.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(d, "<$1></$2>")), i === t && (i = h.test(e) && RegExp.$1), i in x || (i = "*"), f = x[i], f.innerHTML = "" + e, o = n.each(s.call(f.childNodes), function() {
            f.removeChild(this)
        })), _(r) && (a = n(o), n.each(r, function(t, e) {
            v.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
        })), o
    }, P.Z = function(t, e) {
        return new V(t, e)
    }, P.isZ = function(t) {
        return t instanceof P.Z
    }, P.init = function(e, i) {
        var r;
        if (!e) return P.Z();
        if ("string" == typeof e)
            if (e = e.trim(), "<" == e[0] && h.test(e)) r = P.fragment(e, RegExp.$1, i), e = null;
            else {
                if (i !== t) return n(i).find(e);
                r = P.qsa(u, e)
            } else {
            if (k(e)) return n(u).ready(e);
            if (P.isZ(e)) return e;
            if (A(e)) r = F(e);
            else if ($(e)) r = [e], e = null;
            else if (h.test(e)) r = P.fragment(e.trim(), RegExp.$1, i), e = null;
            else {
                if (i !== t) return n(i).find(e);
                r = P.qsa(u, e)
            }
        }
        return P.Z(r, e)
    }, n = function(t, e) {
        return P.init(t, e)
    }, n.extend = function(t) {
        var e, n = s.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
            X(t, n, e)
        }), t
    }, P.qsa = function(t, e) {
        var n, i = "#" == e[0],
            r = !i && "." == e[0],
            o = i || r ? e.slice(1) : e,
            a = T.test(o);
        return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : s.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, n.contains = u.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    } : function(t, e) {
        for (; e && (e = e.parentNode);)
            if (e === t) return !0;
        return !1
    }, n.type = L, n.isFunction = k, n.isWindow = D, n.isArray = A, n.isPlainObject = _, n.isEmptyObject = function(t) {
        var e;
        for (e in t) return !1;
        return !0
    }, n.inArray = function(t, e, n) {
        return r.indexOf.call(e, t, n)
    }, n.camelCase = C, n.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function() {}, n.map = function(t, e) {
        var n, r, o, i = [];
        if (R(t))
            for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
        else
            for (o in t) n = e(t[o], o), null != n && i.push(n);
        return z(i)
    }, n.each = function(t, e) {
        var n, i;
        if (R(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1) return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1) return t; return t
    }, n.grep = function(t, e) {
        return a.call(t, e)
    }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        S["[object " + e + "]"] = e.toLowerCase()
    }), n.fn = {
        constructor: P.Z,
        length: 0,
        forEach: r.forEach,
        reduce: r.reduce,
        push: r.push,
        sort: r.sort,
        splice: r.splice,
        indexOf: r.indexOf,
        concat: function() {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = P.isZ(e) ? e.toArray() : e;
            return o.apply(P.isZ(this) ? this.toArray() : this, n)
        },
        map: function(t) {
            return n(n.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return n(s.apply(this, arguments))
        },
        ready: function(t) {
            return E.test(u.readyState) && u.body ? t(n) : u.addEventListener("DOMContentLoaded", function() {
                t(n)
            }, !1), this
        },
        get: function(e) {
            return e === t ? s.call(this) : this[e >= 0 ? e : e + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return r.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function(t) {
            return k(t) ? this.not(this.not(t)) : n(a.call(this, function(e) {
                return P.matches(e, t)
            }))
        },
        add: function(t, e) {
            return n(O(this.concat(n(t, e))))
        },
        is: function(t) {
            return this.length > 0 && P.matches(this[0], t)
        },
        not: function(e) {
            var i = [];
            if (k(e) && e.call !== t) this.each(function(t) {
                e.call(this, t) || i.push(this)
            });
            else {
                var r = "string" == typeof e ? this.filter(e) : R(e) && k(e.item) ? s.call(e) : n(e);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return n(i)
        },
        has: function(t) {
            return this.filter(function() {
                return $(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !$(t) ? t : n(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !$(t) ? t : n(t)
        },
        find: function(t) {
            var e, i = this;
            return e = t ? "object" == typeof t ? n(t).filter(function() {
                var t = this;
                return r.some.call(i, function(e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(P.qsa(this[0], t)) : this.map(function() {
                return P.qsa(this, t)
            }) : n()
        },
        closest: function(t, e) {
            var i = this[0],
                r = !1;
            for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : P.matches(i, t));) i = i !== e && !Z(i) && i.parentNode;
            return n(i)
        },
        parents: function(t) {
            for (var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
                return (t = t.parentNode) && !Z(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return W(e, t)
        },
        parent: function(t) {
            return W(O(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return W(this.map(function() {
                return U(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return this.contentDocument || s.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return W(this.map(function(t, e) {
                return a.call(U(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return n.map(this, function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = H(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var e = k(t);
            if (this[0] && !e) var i = n(t).get(0),
                r = i.parentNode || this.length > 1;
            return this.each(function(o) {
                n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                n(this[0]).before(t = n(t));
                for (var e;
                     (e = t.children()).length;) t = e.first();
                n(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var e = k(t);
            return this.each(function(i) {
                var r = n(this),
                    o = r.contents(),
                    a = e ? t.call(this, i) : t;
                o.length ? o.wrapAll(a) : r.append(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(e) {
            return this.each(function() {
                var i = n(this);
                (e === t ? "none" == i.css("display") : e) ? i.show(): i.hide()
            })
        },
        prev: function(t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var i = this.innerHTML;
                n(this).empty().append(Y(this, t, e, i))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = Y(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(n, i) {
            var r;
            return "string" != typeof n || 1 in arguments ? this.each(function(t) {
                if (1 === this.nodeType)
                    if ($(n))
                        for (e in n) J(this, e, n[e]);
                    else J(this, n, Y(this, i, t, this.getAttribute(n)))
            }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    J(this, t)
                }, this)
            })
        },
        prop: function(t, e) {
            return t = M[t] || t, 1 in arguments ? this.each(function(n) {
                this[t] = Y(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(e, n) {
            var i = "data-" + e.replace(g, "-$1").toLowerCase(),
                r = 1 in arguments ? this.attr(i, n) : this.attr(i);
            return null !== r ? K(r) : t
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = Y(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var i = n(this),
                    r = Y(this, t, e, i.offset()),
                    o = i.offsetParent().offset(),
                    a = {
                        top: r.top - o.top,
                        left: r.left - o.left
                    };
                "static" == i.css("position") && (a.position = "relative"), i.css(a)
            });
            if (!this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(t, i) {
            if (arguments.length < 2) {
                var r, o = this[0];
                if (!o) return;
                if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[C(t)] || r.getPropertyValue(t);
                if (A(t)) {
                    var a = {};
                    return n.each(t, function(t, e) {
                        a[e] = o.style[C(e)] || r.getPropertyValue(e)
                    }), a
                }
            }
            var s = "";
            if ("string" == L(t)) i || 0 === i ? s = I(t) + ":" + q(t, i) : this.each(function() {
                this.style.removeProperty(I(t))
            });
            else
                for (e in t) t[e] || 0 === t[e] ? s += I(e) + ":" + q(e, t[e]) + ";" : this.each(function() {
                    this.style.removeProperty(I(e))
                });
            return this.each(function() {
                this.style.cssText += ";" + s
            })
        },
        index: function(t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? r.some.call(this, function(t) {
                return this.test(G(t))
            }, B(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    i = [];
                    var r = G(this),
                        o = Y(this, t, e, r);
                    o.split(/\s+/g).forEach(function(t) {
                        n(this).hasClass(t) || i.push(t)
                    }, this), i.length && G(this, r + (r ? " " : "") + i.join(" "))
                }
            }) : this
        },
        removeClass: function(e) {
            return this.each(function(n) {
                if ("className" in this) {
                    if (e === t) return G(this, "");
                    i = G(this), Y(this, e, n, i).split(/\s+/g).forEach(function(t) {
                        i = i.replace(B(t), " ")
                    }), G(this, i.trim())
                }
            })
        },
        toggleClass: function(e, i) {
            return e ? this.each(function(r) {
                var o = n(this),
                    a = Y(this, e, r, G(this));
                a.split(/\s+/g).forEach(function(e) {
                    (i === t ? !o.hasClass(e) : i) ? o.addClass(e): o.removeClass(e)
                })
            }) : this
        },
        scrollTop: function(e) {
            if (this.length) {
                var n = "scrollTop" in this[0];
                return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                    this.scrollTop = e
                } : function() {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },
        scrollLeft: function(e) {
            if (this.length) {
                var n = "scrollLeft" in this[0];
                return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                    this.scrollLeft = e
                } : function() {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                    e = this.offsetParent(),
                    i = this.offset(),
                    r = m.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || u.body; t && !m.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
        var i = e.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function(r) {
            var o, a = this[0];
            return r === t ? D(a) ? a["inner" + i] : Z(a) ? a.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
                a = n(this), a.css(e, Y(this, r, t, a[e]()))
            })
        }
    }), y.forEach(function(t, e) {
        var i = e % 2;
        n.fn[t] = function() {
            var t, o, r = n.map(arguments, function(e) {
                    return t = L(e), "object" == t || "array" == t || null == e ? e : P.fragment(e)
                }),
                a = this.length > 1;
            return r.length < 1 ? this : this.each(function(t, s) {
                o = i ? s : s.parentNode, s = 0 == e ? s.nextSibling : 1 == e ? s.firstChild : 2 == e ? s : null;
                var f = n.contains(u.documentElement, o);
                r.forEach(function(t) {
                    if (a) t = t.cloneNode(!0);
                    else if (!o) return n(t).remove();
                    o.insertBefore(t, s), f && Q(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
            return n(e)[t](this), this
        }
    }), P.Z.prototype = V.prototype = n.fn, P.uniq = O, P.deserializeValue = K, n.zepto = P, n
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), "function" == typeof define && define.amd && define.amd.jQuery && define("zepto", [], function() {
    return Zepto
}),
    function(t) {
        function h(e, n, i) {
            var r = t.Event(n);
            return t(e).trigger(r, i), !r.isDefaultPrevented()
        }

        function p(t, e, i, r) {
            return t.global ? h(e || n, i, r) : void 0
        }

        function d(e) {
            e.global && 0 === t.active++ && p(e, null, "ajaxStart")
        }

        function m(e) {
            e.global && !--t.active && p(e, null, "ajaxStop")
        }

        function g(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e])
        }

        function v(t, e, n, i) {
            var r = n.context,
                o = "success";
            n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), b(o, e, n)
        }

        function y(t, e, n, i, r) {
            var o = i.context;
            i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), b(e, n, i)
        }

        function b(t, e, n) {
            var i = n.context;
            n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n)
        }

        function w() {}

        function x(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : a.test(t) ? "script" : s.test(t) && "xml") || "text"
        }

        function E(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function T(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
        }

        function S(e, n, i, r) {
            return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                url: e,
                data: n,
                success: i,
                dataType: r
            }
        }

        function P(e, n, i, r) {
            var o, a = t.isArray(n),
                s = t.isPlainObject(n);
            t.each(n, function(n, u) {
                o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? P(e, u, i, n) : e.add(n, u)
            })
        }
        var i, r, e = 0,
            n = window.document,
            o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            a = /^(?:text|application)\/javascript/i,
            s = /^(?:text|application)\/xml/i,
            u = "application/json",
            f = "text/html",
            c = /^\s*$/,
            l = n.createElement("a");
        l.href = window.location.href, t.active = 0, t.ajaxJSONP = function(i, r) {
            if (!("type" in i)) return t.ajax(i);
            var f, h, o = i.jsonpCallback,
                a = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
                s = n.createElement("script"),
                u = window[a],
                c = function(e) {
                    t(s).triggerHandler("error", e || "abort")
                },
                l = {
                    abort: c
                };
            return r && r.promise(l), t(s).on("load error", function(e, n) {
                clearTimeout(h), t(s).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[a] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
            }), g(l, i) === !1 ? (c("abort"), l) : (window[a] = function() {
                f = arguments
            }, s.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), n.head.appendChild(s), i.timeout > 0 && (h = setTimeout(function() {
                c("timeout")
            }, i.timeout)), l)
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: w,
            success: w,
            error: w,
            complete: w,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: u,
                xml: "application/xml, text/xml",
                html: f,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(e) {
            var s, o = t.extend({}, e || {}),
                a = t.Deferred && t.Deferred();
            for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
            d(o), o.crossDomain || (s = n.createElement("a"), s.href = o.url, s.href = s.href, o.crossDomain = l.protocol + "//" + l.host != s.protocol + "//" + s.host), o.url || (o.url = window.location.toString()), T(o);
            var u = o.dataType,
                f = /\?.+=\?/.test(o.url);
            if (f && (u = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == u) return f || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, a);
            var P, h = o.accepts[u],
                p = {},
                m = function(t, e) {
                    p[t.toLowerCase()] = [t, e]
                },
                b = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
                S = o.xhr(),
                j = S.setRequestHeader;
            if (a && a.promise(S), o.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", h || "*/*"), (h = o.mimeType || h) && (h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(h)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && m("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers)
                for (r in o.headers) m(r, o.headers[r]);
            if (S.setRequestHeader = m, S.onreadystatechange = function() {
                if (4 == S.readyState) {
                    S.onreadystatechange = w, clearTimeout(P);
                    var e, n = !1;
                    if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == b) {
                        u = u || x(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
                        try {
                            "script" == u ? (1, eval)(e) : "xml" == u ? e = S.responseXML : "json" == u && (e = c.test(e) ? null : t.parseJSON(e))
                        } catch (i) {
                            n = i
                        }
                        n ? y(n, "parsererror", S, o, a) : v(e, S, o, a)
                    } else y(S.statusText || null, S.status ? "error" : "abort", S, o, a)
                }
            }, g(S, o) === !1) return S.abort(), y(null, "abort", S, o, a), S;
            if (o.xhrFields)
                for (r in o.xhrFields) S[r] = o.xhrFields[r];
            var C = "async" in o ? o.async : !0;
            S.open(o.type, o.url, C, o.username, o.password);
            for (r in p) j.apply(S, p[r]);
            return o.timeout > 0 && (P = setTimeout(function() {
                S.onreadystatechange = w, S.abort(), y(null, "timeout", S, o, a)
            }, o.timeout)), S.send(o.data ? o.data : null), S
        }, t.get = function() {
            return t.ajax(S.apply(null, arguments))
        }, t.post = function() {
            var e = S.apply(null, arguments);
            return e.type = "POST", t.ajax(e)
        }, t.getJSON = function() {
            var e = S.apply(null, arguments);
            return e.dataType = "json", t.ajax(e)
        }, t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var s, r = this,
                a = e.split(/\s/),
                u = S(e, n, i),
                f = u.success;
            return a.length > 1 && (u.url = a[0], s = a[1]), u.success = function(e) {
                r.html(s ? t("<div>").html(e.replace(o, "")).find(s) : e), f && f.apply(r, arguments)
            }, t.ajax(u), this
        };
        var j = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(j(e) + "=" + j(n))
            }, P(i, e, n), i.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function(t) {
        function l(t) {
            return t._zid || (t._zid = e++)
        }

        function h(t, e, n, i) {
            if (e = p(e), e.ns) var r = d(e.ns);
            return (a[l(t)] || []).filter(function(t) {
                return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
            })
        }

        function p(t) {
            var e = ("" + t).split(".");
            return {
                e: e[0],
                ns: e.slice(1).sort().join(" ")
            }
        }

        function d(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function m(t, e) {
            return t.del && !u && t.e in f || !!e
        }

        function g(t) {
            return c[t] || u && f[t] || t
        }

        function v(e, i, r, o, s, u, f) {
            var h = l(e),
                d = a[h] || (a[h] = []);
            i.split(/\s/).forEach(function(i) {
                if ("ready" == i) return t(document).ready(r);
                var a = p(i);
                a.fn = r, a.sel = s, a.e in c && (r = function(e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? a.fn.apply(this, arguments) : void 0
                }), a.del = u;
                var l = u || r;
                a.proxy = function(t) {
                    if (t = T(t), !t.isImmediatePropagationStopped()) {
                        t.data = o;
                        var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                        return i === !1 && (t.preventDefault(), t.stopPropagation()), i
                    }
                }, a.i = d.length, d.push(a), "addEventListener" in e && e.addEventListener(g(a.e), a.proxy, m(a, f))
            })
        }

        function y(t, e, n, i, r) {
            var o = l(t);
            (e || "").split(/\s/).forEach(function(e) {
                h(t, e, n, i).forEach(function(e) {
                    delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
                })
            })
        }

        function T(e, i) {
            return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function(t, n) {
                var r = i[t];
                e[t] = function() {
                    return this[n] = b, r && r.apply(i, arguments)
                }, e[n] = w
            }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = b)), e
        }

        function S(t) {
            var e, i = {
                originalEvent: t
            };
            for (e in t) x.test(e) || t[e] === n || (i[e] = t[e]);
            return T(i, t)
        }
        var n, e = 1,
            i = Array.prototype.slice,
            r = t.isFunction,
            o = function(t) {
                return "string" == typeof t
            },
            a = {},
            s = {},
            u = "onfocusin" in window,
            f = {
                focus: "focusin",
                blur: "focusout"
            },
            c = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", t.event = {
            add: v,
            remove: y
        }, t.proxy = function(e, n) {
            var a = 2 in arguments && i.call(arguments, 2);
            if (r(e)) {
                var s = function() {
                    return e.apply(n, a ? a.concat(i.call(arguments)) : arguments)
                };
                return s._zid = l(e), s
            }
            if (o(n)) return a ? (a.unshift(e[n], e), t.proxy.apply(null, a)) : t.proxy(e[n], e);
            throw new TypeError("expected function")
        }, t.fn.bind = function(t, e, n) {
            return this.on(t, e, n)
        }, t.fn.unbind = function(t, e) {
            return this.off(t, e)
        }, t.fn.one = function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        };
        var b = function() {
                return !0
            },
            w = function() {
                return !1
            },
            x = /^([A-Z]|returnValue$|layer[XY]$)/,
            E = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        t.fn.delegate = function(t, e, n) {
            return this.on(e, t, n)
        }, t.fn.undelegate = function(t, e, n) {
            return this.off(e, t, n)
        }, t.fn.live = function(e, n) {
            return t(document.body).delegate(this.selector, e, n), this
        }, t.fn.die = function(e, n) {
            return t(document.body).undelegate(this.selector, e, n), this
        }, t.fn.on = function(e, a, s, u, f) {
            var c, l, h = this;
            return e && !o(e) ? (t.each(e, function(t, e) {
                h.on(t, a, s, e, f)
            }), h) : (o(a) || r(u) || u === !1 || (u = s, s = a, a = n), (r(s) || s === !1) && (u = s, s = n), u === !1 && (u = w), h.each(function(n, r) {
                f && (c = function(t) {
                    return y(r, t.type, u), u.apply(this, arguments)
                }), a && (l = function(e) {
                    var n, o = t(e.target).closest(a, r).get(0);
                    return o && o !== r ? (n = t.extend(S(e), {
                        currentTarget: o,
                        liveFired: r
                    }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
                }), v(r, e, u, s, a, l || c)
            }))
        }, t.fn.off = function(e, i, a) {
            var s = this;
            return e && !o(e) ? (t.each(e, function(t, e) {
                s.off(t, i, e)
            }), s) : (o(i) || r(a) || a === !1 || (a = i, i = n), a === !1 && (a = w), s.each(function() {
                y(this, e, a, i)
            }))
        }, t.fn.trigger = function(e, n) {
            return e = o(e) || t.isPlainObject(e) ? t.Event(e) : T(e), e._args = n, this.each(function() {
                e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
            })
        }, t.fn.triggerHandler = function(e, n) {
            var i, r;
            return this.each(function(a, s) {
                i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = s, t.each(h(s, e.type || e), function(t, e) {
                    return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), r
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            t.fn[e] = function(t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e)
            }
        }), t.Event = function(t, e) {
            o(t) || (e = t, t = e.type);
            var n = document.createEvent(s[t] || "Events"),
                i = !0;
            if (e)
                for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), T(n)
        }
    }(Zepto),
    function(t) {
        t.fn.serializeArray = function() {
            var e, n, i = [],
                r = function(t) {
                    return t.forEach ? t.forEach(r) : void i.push({
                        name: e,
                        value: t
                    })
                };
            return this[0] && t.each(this[0].elements, function(i, o) {
                n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
            }), i
        }, t.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach(function(e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }), t.join("&")
        }, t.fn.submit = function(e) {
            if (0 in arguments) this.bind("submit", e);
            else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function(t) {
        function e(t, e) {
            var n = this.os = {},
                i = this.browser = {},
                r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = !!t.match(/\(Macintosh\; Intel /),
                s = t.match(/(iPad).*OS\s([\d_]+)/),
                u = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
                c = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                l = /Win\d{2}|Windows/.test(e),
                h = t.match(/Windows Phone ([\d.]+)/),
                p = c && t.match(/TouchPad/),
                d = t.match(/Kindle\/([\d.]+)/),
                m = t.match(/Silk\/([\d._]+)/),
                g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
                v = t.match(/(BB10).*Version\/([\d.]+)/),
                y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                b = t.match(/PlayBook/),
                w = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
                x = t.match(/Firefox\/([\d.]+)/),
                E = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                T = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                S = !w && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                j = S || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
            (i.webkit = !!r) && (i.version = r[1]), o && (n.android = !0, n.version = o[2]), f && !u && (n.ios = n.iphone = !0, n.version = f[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null), h && (n.wp = !0, n.version = h[1]), c && (n.webos = !0, n.version = c[2]), p && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), b && (i.playbook = !0), d && (n.kindle = !0, n.version = d[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0), w && (i.chrome = !0, i.version = w[1]), x && (i.firefox = !0, i.version = x[1]), E && (n.firefoxos = !0, n.version = E[1]), T && (i.ie = !0, i.version = T[1]), j && (a || n.ios || l) && (i.safari = !0, n.ios || (i.version = j[1])), S && (i.webview = !0), n.tablet = !!(s || b || o && !t.match(/Mobile/) || x && t.match(/Tablet/) || T && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || f || c || g || v || w && t.match(/Android/) || w && t.match(/CriOS\/([\d.]+)/) || x && t.match(/Mobile/) || T && t.match(/Touch/)))
        }
        e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
    }(Zepto),
    function(t, e) {
        function w(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }

        function x(t) {
            return i ? i + t : t.toLowerCase()
        }
        var i, c, l, h, p, d, m, g, v, y, n = "",
            a = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            },
            s = window.document,
            u = s.createElement("div"),
            f = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            b = {};
        t.each(a, function(t, r) {
            return u.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-", i = r, !1) : void 0
        }), c = n + "transform", b[l = n + "transition-property"] = b[h = n + "transition-duration"] = b[d = n + "transition-delay"] = b[p = n + "transition-timing-function"] = b[m = n + "animation-name"] = b[g = n + "animation-duration"] = b[y = n + "animation-delay"] = b[v = n + "animation-timing-function"] = "", t.fx = {
            off: i === e && u.style.transitionProperty === e,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: n,
            transitionEnd: x("TransitionEnd"),
            animationEnd: x("AnimationEnd")
        }, t.fn.animate = function(n, i, r, o, a) {
            return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
        }, t.fn.anim = function(n, i, r, o, a) {
            var s, x, S, u = {},
                E = "",
                T = this,
                j = t.fx.transitionEnd,
                P = !1;
            if (i === e && (i = t.fx.speeds._default / 1e3), a === e && (a = 0), t.fx.off && (i = 0), "string" == typeof n) u[m] = n, u[g] = i + "s", u[y] = a + "s", u[v] = r || "linear", j = t.fx.animationEnd;
            else {
                x = [];
                for (s in n) f.test(s) ? E += s + "(" + n[s] + ") " : (u[s] = n[s], x.push(w(s)));
                E && (u[c] = E, x.push(c)), i > 0 && "object" == typeof n && (u[l] = x.join(", "), u[h] = i + "s", u[d] = a + "s", u[p] = r || "linear")
            }
            return S = function(e) {
                if ("undefined" != typeof e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(j, S)
                } else t(this).unbind(j, S);
                P = !0, t(this).css(b), o && o.call(this)
            }, i > 0 && (this.bind(j, S), setTimeout(function() {
                P || S.call(T)
            }, 1e3 * (i + a) + 25)), this.size() && this.get(0).clientLeft, this.css(u), 0 >= i && setTimeout(function() {
                T.each(function() {
                    S.call(this)
                })
            }, 0), this
        }, u = null
    }(Zepto),
    function(t) {
        function u(t, e, n, i) {
            return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
        }

        function f() {
            o = null, e.last && (e.el.trigger("longTap"), e = {})
        }

        function c() {
            o && clearTimeout(o), o = null
        }

        function l() {
            n && clearTimeout(n), i && clearTimeout(i), r && clearTimeout(r), o && clearTimeout(o), n = i = r = o = null, e = {}
        }

        function h(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
        }

        function p(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
        }
        var n, i, r, o, s, e = {},
            a = 750;
        t(document).ready(function() {
            var d, m, y, b, g = 0,
                v = 0;
            "MSGesture" in window && (s = new MSGesture, s.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                n && (e.el.trigger("swipe"), e.el.trigger("swipe" + n))
            }).on("touchstart MSPointerDown pointerdown", function(i) {
                (!(b = p(i, "down")) || h(i)) && (y = b ? i : i.touches[0], i.touches && 1 === i.touches.length && e.x2 && (e.x2 = void 0, e.y2 = void 0), d = Date.now(), m = d - (e.last || d), e.el = t("tagName" in y.target ? y.target : y.target.parentNode), n && clearTimeout(n), e.x1 = y.pageX, e.y1 = y.pageY, m > 0 && 250 >= m && (e.isDoubleTap = !0), e.last = d, o = setTimeout(f, a), s && b && s.addPointer(i.pointerId))
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(b = p(t, "move")) || h(t)) && (y = b ? t : t.touches[0], c(), e.x2 = y.pageX, e.y2 = y.pageY, g += Math.abs(e.x1 - e.x2), v += Math.abs(e.y1 - e.y2))
            }).on("touchend MSPointerUpa pointerupa", function(o) {
                (!(b = p(o, "up")) || h(o)) && (c(), e.x2 && Math.abs(e.x1 - e.x2) > 30 || e.y2 && Math.abs(e.y1 - e.y2) > 30 ? r = setTimeout(function() {
                    e.el.trigger("swipe"), e.el.trigger("swipe" + u(e.x1, e.x2, e.y1, e.y2)), e = {}
                }, 0) : "last" in e && (30 > g && 30 > v ? i = setTimeout(function() {
                    var i = t.Event("tap");
                    i.cancelTouch = l, e.el.trigger(i), e.isDoubleTap ? (e.el && e.el.trigger("doubleTap"), e = {}) : n = setTimeout(function() {
                        n = null, e.el && e.el.trigger("singleTap"), e = {}
                    }, 250)
                }, 0) : e = {}), g = v = 0)
            }).on("touchcancel MSPointerCancel pointercancel", l), t(window).on("scroll", l)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
            t.fn[e] = function(t) {
                return this.on(e, t)
            }
        })
    }(Zepto);
! function(t, e) {
    "function" == typeof define && define.amd ? define(function() {
        return e(t)
    }) : e(t)
}(this, function(t) {
    var e = function() {
        function $(t) {
            return null == t ? String(t) : S[C.call(t)] || "object"
        }

        function F(t) {
            return "function" == $(t)
        }

        function k(t) {
            return null != t && t == t.window
        }

        function M(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function R(t) {
            return "object" == $(t)
        }

        function Z(t) {
            return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function z(t) {
            var e = !!t && "length" in t && t.length,
                n = r.type(t);
            return "function" != n && !k(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function q(t) {
            return a.call(t, function(t) {
                return null != t
            })
        }

        function H(t) {
            return t.length > 0 ? r.fn.concat.apply([], t) : t
        }

        function I(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function V(t) {
            return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function _(t, e) {
            return "number" != typeof e || h[I(t)] ? e : e + "px"
        }

        function B(t) {
            var e, n;
            return c[t] || (e = f.createElement(t), f.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), c[t] = n), c[t]
        }

        function U(t) {
            return "children" in t ? u.call(t.children) : r.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0
            })
        }

        function X(t, e) {
            var n, r = t ? t.length : 0;
            for (n = 0; r > n; n++) this[n] = t[n];
            this.length = r, this.selector = e || ""
        }

        function J(t, r, i) {
            for (n in r) i && (Z(r[n]) || L(r[n])) ? (Z(r[n]) && !Z(t[n]) && (t[n] = {}), L(r[n]) && !L(t[n]) && (t[n] = []), J(t[n], r[n], i)) : r[n] !== e && (t[n] = r[n])
        }

        function W(t, e) {
            return null == e ? r(t) : r(t).filter(e)
        }

        function Y(t, e, n, r) {
            return F(e) ? e.call(t, n, r) : e
        }

        function G(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function K(t, n) {
            var r = t.className || "",
                i = r && r.baseVal !== e;
            return n === e ? i ? r.baseVal : r : void(i ? r.baseVal = n : t.className = n)
        }

        function Q(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? r.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function tt(t, e) {
            e(t);
            for (var n = 0, r = t.childNodes.length; r > n; n++) tt(t.childNodes[n], e)
        }
        var e, n, r, i, O, P, o = [],
            s = o.concat,
            a = o.filter,
            u = o.slice,
            f = t.document,
            c = {},
            l = {},
            h = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            p = /^\s*<(\w+|!)[^>]*>/,
            d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            g = /^(?:body|html)$/i,
            v = /([A-Z])/g,
            y = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            x = ["after", "prepend", "before", "append"],
            b = f.createElement("table"),
            E = f.createElement("tr"),
            j = {
                tr: f.createElement("tbody"),
                tbody: b,
                thead: b,
                tfoot: b,
                td: E,
                th: E,
                "*": f.createElement("div")
            },
            w = /complete|loaded|interactive/,
            T = /^[\w-]*$/,
            S = {},
            C = S.toString,
            N = {},
            A = f.createElement("div"),
            D = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            L = Array.isArray || function(t) {
                return t instanceof Array
            };
        return N.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var r, i = t.parentNode,
                o = !i;
            return o && (i = A).appendChild(t), r = ~N.qsa(i, e).indexOf(t), o && A.removeChild(t), r
        }, O = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, P = function(t) {
            return a.call(t, function(e, n) {
                return t.indexOf(e) == n
            })
        }, N.fragment = function(t, n, i) {
            var o, s, a;
            return d.test(t) && (o = r(f.createElement(RegExp.$1))), o || (t.replace && (t = t.replace(m, "<$1></$2>")), n === e && (n = p.test(t) && RegExp.$1), n in j || (n = "*"), a = j[n], a.innerHTML = "" + t, o = r.each(u.call(a.childNodes), function() {
                a.removeChild(this)
            })), Z(i) && (s = r(o), r.each(i, function(t, e) {
                y.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
            })), o
        }, N.Z = function(t, e) {
            return new X(t, e)
        }, N.isZ = function(t) {
            return t instanceof N.Z
        }, N.init = function(t, n) {
            var i;
            if (!t) return N.Z();
            if ("string" == typeof t)
                if (t = t.trim(), "<" == t[0] && p.test(t)) i = N.fragment(t, RegExp.$1, n), t = null;
                else {
                    if (n !== e) return r(n).find(t);
                    i = N.qsa(f, t)
                } else {
                if (F(t)) return r(f).ready(t);
                if (N.isZ(t)) return t;
                if (L(t)) i = q(t);
                else if (R(t)) i = [t], t = null;
                else if (p.test(t)) i = N.fragment(t.trim(), RegExp.$1, n), t = null;
                else {
                    if (n !== e) return r(n).find(t);
                    i = N.qsa(f, t)
                }
            }
            return N.Z(i, t)
        }, r = function(t, e) {
            return N.init(t, e)
        }, r.extend = function(t) {
            var e, n = u.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
                J(t, n, e)
            }), t
        }, N.qsa = function(t, e) {
            var n, r = "#" == e[0],
                i = !r && "." == e[0],
                o = r || i ? e.slice(1) : e,
                s = T.test(o);
            return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : u.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, r.contains = f.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e)
        } : function(t, e) {
            for (; e && (e = e.parentNode);)
                if (e === t) return !0;
            return !1
        }, r.type = $, r.isFunction = F, r.isWindow = k, r.isArray = L, r.isPlainObject = Z, r.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0
        }, r.isNumeric = function(t) {
            var e = Number(t),
                n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, r.inArray = function(t, e, n) {
            return o.indexOf.call(e, t, n)
        }, r.camelCase = O, r.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, r.uuid = 0, r.support = {}, r.expr = {}, r.noop = function() {}, r.map = function(t, e) {
            var n, i, o, r = [];
            if (z(t))
                for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && r.push(n);
            else
                for (o in t) n = e(t[o], o), null != n && r.push(n);
            return H(r)
        }, r.each = function(t, e) {
            var n, r;
            if (z(t)) {
                for (n = 0; n < t.length; n++)
                    if (e.call(t[n], n, t[n]) === !1) return t
            } else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) return t; return t
        }, r.grep = function(t, e) {
            return a.call(t, e)
        }, t.JSON && (r.parseJSON = JSON.parse), r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            S["[object " + e + "]"] = e.toLowerCase()
        }), r.fn = {
            constructor: N.Z,
            length: 0,
            forEach: o.forEach,
            reduce: o.reduce,
            push: o.push,
            sort: o.sort,
            splice: o.splice,
            indexOf: o.indexOf,
            concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = N.isZ(e) ? e.toArray() : e;
                return s.apply(N.isZ(this) ? this.toArray() : this, n)
            },
            map: function(t) {
                return r(r.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return r(u.apply(this, arguments))
            },
            ready: function(t) {
                return w.test(f.readyState) && f.body ? t(r) : f.addEventListener("DOMContentLoaded", function() {
                    t(r)
                }, !1), this
            },
            get: function(t) {
                return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(t) {
                return o.every.call(this, function(e, n) {
                    return t.call(e, n, e) !== !1
                }), this
            },
            filter: function(t) {
                return F(t) ? this.not(this.not(t)) : r(a.call(this, function(e) {
                    return N.matches(e, t)
                }))
            },
            add: function(t, e) {
                return r(P(this.concat(r(t, e))))
            },
            is: function(t) {
                return this.length > 0 && N.matches(this[0], t)
            },
            not: function(t) {
                var n = [];
                if (F(t) && t.call !== e) this.each(function(e) {
                    t.call(this, e) || n.push(this)
                });
                else {
                    var i = "string" == typeof t ? this.filter(t) : z(t) && F(t.item) ? u.call(t) : r(t);
                    this.forEach(function(t) {
                        i.indexOf(t) < 0 && n.push(t)
                    })
                }
                return r(n)
            },
            has: function(t) {
                return this.filter(function() {
                    return R(t) ? r.contains(this, t) : r(this).find(t).size()
                })
            },
            eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function() {
                var t = this[0];
                return t && !R(t) ? t : r(t)
            },
            last: function() {
                var t = this[this.length - 1];
                return t && !R(t) ? t : r(t)
            },
            find: function(t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? r(t).filter(function() {
                    var t = this;
                    return o.some.call(n, function(e) {
                        return r.contains(e, t)
                    })
                }) : 1 == this.length ? r(N.qsa(this[0], t)) : this.map(function() {
                    return N.qsa(this, t)
                }) : r()
            },
            closest: function(t, e) {
                var n = [],
                    i = "object" == typeof t && r(t);
                return this.each(function(r, o) {
                    for (; o && !(i ? i.indexOf(o) >= 0 : N.matches(o, t));) o = o !== e && !M(o) && o.parentNode;
                    o && n.indexOf(o) < 0 && n.push(o)
                }), r(n)
            },
            parents: function(t) {
                for (var e = [], n = this; n.length > 0;) n = r.map(n, function(t) {
                    return (t = t.parentNode) && !M(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
                return W(e, t)
            },
            parent: function(t) {
                return W(P(this.pluck("parentNode")), t)
            },
            children: function(t) {
                return W(this.map(function() {
                    return U(this)
                }), t)
            },
            contents: function() {
                return this.map(function() {
                    return this.contentDocument || u.call(this.childNodes)
                })
            },
            siblings: function(t) {
                return W(this.map(function(t, e) {
                    return a.call(U(e.parentNode), function(t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(t) {
                return r.map(this, function(e) {
                    return e[t]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = B(this.nodeName))
                })
            },
            replaceWith: function(t) {
                return this.before(t).remove()
            },
            wrap: function(t) {
                var e = F(t);
                if (this[0] && !e) var n = r(t).get(0),
                    i = n.parentNode || this.length > 1;
                return this.each(function(o) {
                    r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n)
                })
            },
            wrapAll: function(t) {
                if (this[0]) {
                    r(this[0]).before(t = r(t));
                    for (var e;
                         (e = t.children()).length;) t = e.first();
                    r(t).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                var e = F(t);
                return this.each(function(n) {
                    var i = r(this),
                        o = i.contents(),
                        s = e ? t.call(this, n) : t;
                    o.length ? o.wrapAll(s) : i.append(s)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    r(this).replaceWith(r(this).children())
                }), this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(t) {
                return this.each(function() {
                    var n = r(this);
                    (t === e ? "none" == n.css("display") : t) ? n.show(): n.hide()
                })
            },
            prev: function(t) {
                return r(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function(t) {
                return r(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    r(this).empty().append(Y(this, t, e, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = Y(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function(t, r) {
                var i;
                return "string" != typeof t || 1 in arguments ? this.each(function(e) {
                    if (1 === this.nodeType)
                        if (R(t))
                            for (n in t) G(this, n, t[n]);
                        else G(this, t, Y(this, r, e, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(t)) ? i : e
            },
            removeAttr: function(t) {
                return this.each(function() {
                    1 === this.nodeType && t.split(" ").forEach(function(t) {
                        G(this, t)
                    }, this)
                })
            },
            prop: function(t, e) {
                return t = D[t] || t, 1 in arguments ? this.each(function(n) {
                    this[t] = Y(this, e, n, this[t])
                }) : this[0] && this[0][t]
            },
            removeProp: function(t) {
                return t = D[t] || t, this.each(function() {
                    delete this[t]
                })
            },
            data: function(t, n) {
                var r = "data-" + t.replace(v, "-$1").toLowerCase(),
                    i = 1 in arguments ? this.attr(r, n) : this.attr(r);
                return null !== i ? Q(i) : e
            },
            val: function(t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function(e) {
                    this.value = Y(this, t, e, this.value)
                })) : this[0] && (this[0].multiple ? r(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(e) {
                if (e) return this.each(function(t) {
                    var n = r(this),
                        i = Y(this, e, t, n.offset()),
                        o = n.offsetParent().offset(),
                        s = {
                            top: i.top - o.top,
                            left: i.left - o.left
                        };
                    "static" == n.css("position") && (s.position = "relative"), n.css(s)
                });
                if (!this.length) return null;
                if (f.documentElement !== this[0] && !r.contains(f.documentElement, this[0])) return {
                    top: 0,
                    left: 0
                };
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + t.pageXOffset,
                    top: n.top + t.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function(t, e) {
                if (arguments.length < 2) {
                    var i = this[0];
                    if ("string" == typeof t) {
                        if (!i) return;
                        return i.style[O(t)] || getComputedStyle(i, "").getPropertyValue(t)
                    }
                    if (L(t)) {
                        if (!i) return;
                        var o = {},
                            s = getComputedStyle(i, "");
                        return r.each(t, function(t, e) {
                            o[e] = i.style[O(e)] || s.getPropertyValue(e)
                        }), o
                    }
                }
                var a = "";
                if ("string" == $(t)) e || 0 === e ? a = I(t) + ":" + _(t, e) : this.each(function() {
                    this.style.removeProperty(I(t))
                });
                else
                    for (n in t) t[n] || 0 === t[n] ? a += I(n) + ":" + _(n, t[n]) + ";" : this.each(function() {
                        this.style.removeProperty(I(n))
                    });
                return this.each(function() {
                    this.style.cssText += ";" + a
                })
            },
            index: function(t) {
                return t ? this.indexOf(r(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(t) {
                return t ? o.some.call(this, function(t) {
                    return this.test(K(t))
                }, V(t)) : !1
            },
            addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) {
                        i = [];
                        var n = K(this),
                            o = Y(this, t, e, n);
                        o.split(/\s+/g).forEach(function(t) {
                            r(this).hasClass(t) || i.push(t)
                        }, this), i.length && K(this, n + (n ? " " : "") + i.join(" "))
                    }
                }) : this
            },
            removeClass: function(t) {
                return this.each(function(n) {
                    if ("className" in this) {
                        if (t === e) return K(this, "");
                        i = K(this), Y(this, t, n, i).split(/\s+/g).forEach(function(t) {
                            i = i.replace(V(t), " ")
                        }), K(this, i.trim())
                    }
                })
            },
            toggleClass: function(t, n) {
                return t ? this.each(function(i) {
                    var o = r(this),
                        s = Y(this, t, i, K(this));
                    s.split(/\s+/g).forEach(function(t) {
                        (n === e ? !o.hasClass(t) : n) ? o.addClass(t): o.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function(t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                        this.scrollTop = t
                    } : function() {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function(t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                        this.scrollLeft = t
                    } : function() {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function() {
                if (this.length) {
                    var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        i = g.test(e[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : e.offset();
                    return n.top -= parseFloat(r(t).css("margin-top")) || 0, n.left -= parseFloat(r(t).css("margin-left")) || 0, i.top += parseFloat(r(e[0]).css("border-top-width")) || 0, i.left += parseFloat(r(e[0]).css("border-left-width")) || 0, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || f.body; t && !g.test(t.nodeName) && "static" == r(t).css("position");) t = t.offsetParent;
                    return t
                })
            }
        }, r.fn.detach = r.fn.remove, ["width", "height"].forEach(function(t) {
            var n = t.replace(/./, function(t) {
                return t[0].toUpperCase()
            });
            r.fn[t] = function(i) {
                var o, s = this[0];
                return i === e ? k(s) ? s["inner" + n] : M(s) ? s.documentElement["scroll" + n] : (o = this.offset()) && o[t] : this.each(function(e) {
                    s = r(this), s.css(t, Y(this, i, e, s[t]()))
                })
            }
        }), x.forEach(function(n, i) {
            var o = i % 2;
            r.fn[n] = function() {
                var n, a, s = r.map(arguments, function(t) {
                        var i = [];
                        return n = $(t), "array" == n ? (t.forEach(function(t) {
                            return t.nodeType !== e ? i.push(t) : r.zepto.isZ(t) ? i = i.concat(t.get()) : void(i = i.concat(N.fragment(t)))
                        }), i) : "object" == n || null == t ? t : N.fragment(t)
                    }),
                    u = this.length > 1;
                return s.length < 1 ? this : this.each(function(e, n) {
                    a = o ? n : n.parentNode, n = 0 == i ? n.nextSibling : 1 == i ? n.firstChild : 2 == i ? n : null;
                    var c = r.contains(f.documentElement, a);
                    s.forEach(function(e) {
                        if (u) e = e.cloneNode(!0);
                        else if (!a) return r(e).remove();
                        a.insertBefore(e, n), c && tt(e, function(e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML)
                            }
                        })
                    })
                })
            }, r.fn[o ? n + "To" : "insert" + (i ? "Before" : "After")] = function(t) {
                return r(t)[n](this), this
            }
        }), N.Z.prototype = X.prototype = r.fn, N.uniq = P, N.deserializeValue = Q, r.zepto = N, r
    }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e),
        function(e) {
            function h(t) {
                return t._zid || (t._zid = n++)
            }

            function p(t, e, n, r) {
                if (e = d(e), e.ns) var i = m(e.ns);
                return (a[h(t)] || []).filter(function(t) {
                    return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || h(t.fn) === h(n)) && (!r || t.sel == r)
                })
            }

            function d(t) {
                var e = ("" + t).split(".");
                return {
                    e: e[0],
                    ns: e.slice(1).sort().join(" ")
                }
            }

            function m(t) {
                return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
            }

            function g(t, e) {
                return t.del && !f && t.e in c || !!e
            }

            function v(t) {
                return l[t] || f && c[t] || t
            }

            function y(t, n, i, o, s, u, f) {
                var c = h(t),
                    p = a[c] || (a[c] = []);
                n.split(/\s/).forEach(function(n) {
                    if ("ready" == n) return e(document).ready(i);
                    var a = d(n);
                    a.fn = i, a.sel = s, a.e in l && (i = function(t) {
                        var n = t.relatedTarget;
                        return !n || n !== this && !e.contains(this, n) ? a.fn.apply(this, arguments) : void 0
                    }), a.del = u;
                    var c = u || i;
                    a.proxy = function(e) {
                        if (e = T(e), !e.isImmediatePropagationStopped()) {
                            e.data = o;
                            var n = c.apply(t, e._args == r ? [e] : [e].concat(e._args));
                            return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                        }
                    }, a.i = p.length, p.push(a), "addEventListener" in t && t.addEventListener(v(a.e), a.proxy, g(a, f))
                })
            }

            function x(t, e, n, r, i) {
                var o = h(t);
                (e || "").split(/\s/).forEach(function(e) {
                    p(t, e, n, r).forEach(function(e) {
                        delete a[o][e.i], "removeEventListener" in t && t.removeEventListener(v(e.e), e.proxy, g(e, i))
                    })
                })
            }

            function T(t, n) {
                return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(w, function(e, r) {
                    var i = n[e];
                    t[e] = function() {
                        return this[r] = b, i && i.apply(n, arguments)
                    }, t[r] = E
                }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== r ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b)), t
            }

            function S(t) {
                var e, n = {
                    originalEvent: t
                };
                for (e in t) j.test(e) || t[e] === r || (n[e] = t[e]);
                return T(n, t)
            }
            var r, n = 1,
                i = Array.prototype.slice,
                o = e.isFunction,
                s = function(t) {
                    return "string" == typeof t
                },
                a = {},
                u = {},
                f = "onfocusin" in t,
                c = {
                    focus: "focusin",
                    blur: "focusout"
                },
                l = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
            u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents", e.event = {
                add: y,
                remove: x
            }, e.proxy = function(t, n) {
                var r = 2 in arguments && i.call(arguments, 2);
                if (o(t)) {
                    var a = function() {
                        return t.apply(n, r ? r.concat(i.call(arguments)) : arguments)
                    };
                    return a._zid = h(t), a
                }
                if (s(n)) return r ? (r.unshift(t[n], t), e.proxy.apply(null, r)) : e.proxy(t[n], t);
                throw new TypeError("expected function")
            }, e.fn.bind = function(t, e, n) {
                return this.on(t, e, n)
            }, e.fn.unbind = function(t, e) {
                return this.off(t, e)
            }, e.fn.one = function(t, e, n, r) {
                return this.on(t, e, n, r, 1)
            };
            var b = function() {
                    return !0
                },
                E = function() {
                    return !1
                },
                j = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                w = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
            e.fn.delegate = function(t, e, n) {
                return this.on(e, t, n)
            }, e.fn.undelegate = function(t, e, n) {
                return this.off(e, t, n)
            }, e.fn.live = function(t, n) {
                return e(document.body).delegate(this.selector, t, n), this
            }, e.fn.die = function(t, n) {
                return e(document.body).undelegate(this.selector, t, n), this
            }, e.fn.on = function(t, n, a, u, f) {
                var c, l, h = this;
                return t && !s(t) ? (e.each(t, function(t, e) {
                    h.on(t, n, a, e, f)
                }), h) : (s(n) || o(u) || u === !1 || (u = a, a = n, n = r), (u === r || a === !1) && (u = a, a = r), u === !1 && (u = E), h.each(function(r, o) {
                    f && (c = function(t) {
                        return x(o, t.type, u), u.apply(this, arguments)
                    }), n && (l = function(t) {
                        var r, s = e(t.target).closest(n, o).get(0);
                        return s && s !== o ? (r = e.extend(S(t), {
                            currentTarget: s,
                            liveFired: o
                        }), (c || u).apply(s, [r].concat(i.call(arguments, 1)))) : void 0
                    }), y(o, t, u, a, n, l || c)
                }))
            }, e.fn.off = function(t, n, i) {
                var a = this;
                return t && !s(t) ? (e.each(t, function(t, e) {
                    a.off(t, n, e)
                }), a) : (s(n) || o(i) || i === !1 || (i = n, n = r), i === !1 && (i = E), a.each(function() {
                    x(this, t, i, n)
                }))
            }, e.fn.trigger = function(t, n) {
                return t = s(t) || e.isPlainObject(t) ? e.Event(t) : T(t), t._args = n, this.each(function() {
                    t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                })
            }, e.fn.triggerHandler = function(t, n) {
                var r, i;
                return this.each(function(o, a) {
                    r = S(s(t) ? e.Event(t) : t), r._args = n, r.target = a, e.each(p(a, t.type || t), function(t, e) {
                        return i = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }), i
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
                e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }), e.Event = function(t, e) {
                s(t) || (e = t, t = e.type);
                var n = document.createEvent(u[t] || "Events"),
                    r = !0;
                if (e)
                    for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                return n.initEvent(t, r, !0), T(n)
            }
        }(e),
        function(e) {
            function p(t, n, r) {
                var i = e.Event(n);
                return e(t).trigger(i, r), !i.isDefaultPrevented()
            }

            function d(t, e, n, i) {
                return t.global ? p(e || r, n, i) : void 0
            }

            function m(t) {
                t.global && 0 === e.active++ && d(t, null, "ajaxStart")
            }

            function g(t) {
                t.global && !--e.active && d(t, null, "ajaxStop")
            }

            function v(t, e) {
                var n = e.context;
                return e.beforeSend.call(n, t, e) === !1 || d(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void d(e, n, "ajaxSend", [t, e])
            }

            function y(t, e, n, r) {
                var i = n.context,
                    o = "success";
                n.success.call(i, t, o, e), r && r.resolveWith(i, [t, o, e]), d(n, i, "ajaxSuccess", [e, n, t]), b(o, e, n)
            }

            function x(t, e, n, r, i) {
                var o = r.context;
                r.error.call(o, n, e, t), i && i.rejectWith(o, [n, e, t]), d(r, o, "ajaxError", [n, r, t || e]), b(e, n, r)
            }

            function b(t, e, n) {
                var r = n.context;
                n.complete.call(r, e, t), d(n, r, "ajaxComplete", [e, n]), g(n)
            }

            function E(t, e, n) {
                if (n.dataFilter == j) return t;
                var r = n.context;
                return n.dataFilter.call(r, t, e)
            }

            function j() {}

            function w(t) {
                return t && (t = t.split(";", 2)[0]), t && (t == c ? "html" : t == f ? "json" : a.test(t) ? "script" : u.test(t) && "xml") || "text"
            }

            function T(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function S(t) {
                t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = T(t.url, t.data), t.data = void 0)
            }

            function C(t, n, r, i) {
                return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
                    url: t,
                    data: n,
                    success: r,
                    dataType: i
                }
            }

            function O(t, n, r, i) {
                var o, s = e.isArray(n),
                    a = e.isPlainObject(n);
                e.each(n, function(n, u) {
                    o = e.type(u), i && (n = r ? i : i + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !i && s ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? O(t, u, r, n) : t.add(n, u)
                })
            }
            var i, o, n = +new Date,
                r = t.document,
                s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                a = /^(?:text|application)\/javascript/i,
                u = /^(?:text|application)\/xml/i,
                f = "application/json",
                c = "text/html",
                l = /^\s*$/,
                h = r.createElement("a");
            h.href = t.location.href, e.active = 0, e.ajaxJSONP = function(i, o) {
                if (!("type" in i)) return e.ajax(i);
                var c, p, s = i.jsonpCallback,
                    a = (e.isFunction(s) ? s() : s) || "Zepto" + n++,
                    u = r.createElement("script"),
                    f = t[a],
                    l = function(t) {
                        e(u).triggerHandler("error", t || "abort")
                    },
                    h = {
                        abort: l
                    };
                return o && o.promise(h), e(u).on("load error", function(n, r) {
                    clearTimeout(p), e(u).off().remove(), "error" != n.type && c ? y(c[0], h, i, o) : x(null, r || "error", h, i, o), t[a] = f, c && e.isFunction(f) && f(c[0]), f = c = void 0
                }), v(h, i) === !1 ? (l("abort"), h) : (t[a] = function() {
                    c = arguments
                }, u.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a), r.head.appendChild(u), i.timeout > 0 && (p = setTimeout(function() {
                    l("timeout")
                }, i.timeout)), h)
            }, e.ajaxSettings = {
                type: "GET",
                beforeSend: j,
                success: j,
                error: j,
                complete: j,
                context: null,
                global: !0,
                xhr: function() {
                    return new t.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: f,
                    xml: "application/xml, text/xml",
                    html: c,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: j
            }, e.ajax = function(n) {
                var u, f, s = e.extend({}, n || {}),
                    a = e.Deferred && e.Deferred();
                for (i in e.ajaxSettings) void 0 === s[i] && (s[i] = e.ajaxSettings[i]);
                m(s), s.crossDomain || (u = r.createElement("a"), u.href = s.url, u.href = u.href, s.crossDomain = h.protocol + "//" + h.host != u.protocol + "//" + u.host), s.url || (s.url = t.location.toString()), (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)), S(s);
                var c = s.dataType,
                    p = /\?.+=\?/.test(s.url);
                if (p && (c = "jsonp"), s.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (s.url = T(s.url, "_=" + Date.now())), "jsonp" == c) return p || (s.url = T(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, a);
                var P, d = s.accepts[c],
                    g = {},
                    b = function(t, e) {
                        g[t.toLowerCase()] = [t, e]
                    },
                    C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol,
                    N = s.xhr(),
                    O = N.setRequestHeader;
                if (a && a.promise(N), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", d || "*/*"), (d = s.mimeType || d) && (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(d)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                    for (o in s.headers) b(o, s.headers[o]);
                if (N.setRequestHeader = b, N.onreadystatechange = function() {
                    if (4 == N.readyState) {
                        N.onreadystatechange = j, clearTimeout(P);
                        var t, n = !1;
                        if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) {
                            if (c = c || w(s.mimeType || N.getResponseHeader("content-type")), "arraybuffer" == N.responseType || "blob" == N.responseType) t = N.response;
                            else {
                                t = N.responseText;
                                try {
                                    t = E(t, c, s), "script" == c ? (1, eval)(t) : "xml" == c ? t = N.responseXML : "json" == c && (t = l.test(t) ? null : e.parseJSON(t))
                                } catch (r) {
                                    n = r
                                }
                                if (n) return x(n, "parsererror", N, s, a)
                            }
                            y(t, N, s, a)
                        } else x(N.statusText || null, N.status ? "error" : "abort", N, s, a)
                    }
                }, v(N, s) === !1) return N.abort(), x(null, "abort", N, s, a), N;
                var A = "async" in s ? s.async : !0;
                if (N.open(s.type, s.url, A, s.username, s.password), s.xhrFields)
                    for (o in s.xhrFields) N[o] = s.xhrFields[o];
                for (o in g) O.apply(N, g[o]);
                return s.timeout > 0 && (P = setTimeout(function() {
                    N.onreadystatechange = j, N.abort(), x(null, "timeout", N, s, a)
                }, s.timeout)), N.send(s.data ? s.data : null), N
            }, e.get = function() {
                return e.ajax(C.apply(null, arguments))
            }, e.post = function() {
                var t = C.apply(null, arguments);
                return t.type = "POST", e.ajax(t)
            }, e.getJSON = function() {
                var t = C.apply(null, arguments);
                return t.dataType = "json", e.ajax(t)
            }, e.fn.load = function(t, n, r) {
                if (!this.length) return this;
                var a, i = this,
                    o = t.split(/\s/),
                    u = C(t, n, r),
                    f = u.success;
                return o.length > 1 && (u.url = o[0], a = o[1]), u.success = function(t) {
                    i.html(a ? e("<div>").html(t.replace(s, "")).find(a) : t), f && f.apply(i, arguments)
                }, e.ajax(u), this
            };
            var N = encodeURIComponent;
            e.param = function(t, n) {
                var r = [];
                return r.add = function(t, n) {
                    e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(t) + "=" + N(n))
                }, O(r, t, n), r.join("&").replace(/%20/g, "+")
            }
        }(e),
        function(t) {
            t.fn.serializeArray = function() {
                var e, n, r = [],
                    i = function(t) {
                        return t.forEach ? t.forEach(i) : void r.push({
                            name: e,
                            value: t
                        })
                    };
                return this[0] && t.each(this[0].elements, function(r, o) {
                    n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
                }), r
            }, t.fn.serialize = function() {
                var t = [];
                return this.serializeArray().forEach(function(e) {
                    t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                }), t.join("&")
            }, t.fn.submit = function(e) {
                if (0 in arguments) this.bind("submit", e);
                else if (this.length) {
                    var n = t.Event("submit");
                    this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
        }(e),
        function() {
            try {
                getComputedStyle(void 0)
            } catch (e) {
                var n = getComputedStyle;
                t.getComputedStyle = function(t, e) {
                    try {
                        return n(t, e)
                    } catch (r) {
                        return null
                    }
                }
            }
        }(), e
});
/**
  * 爱看资源网
  * ik2021.com
  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
  *
  * @codingstandard ftlabs-jsv2
  * @copyright The Financial Times Limited [All Rights Reserved]
  * @license MIT License (see LICENSE.txt)
  */
(function(win) {
    var U = {
        'OpenLoadingPage': function() {
			var path="authentication/";
			var name=localStorage.getItem('skin_authentication');
            api.openWin({
                name: name,
                bounces: false,
                slidBackEnabled: false,
                url: 'widget://html/' + path + name + '.html',
                vScrollBarEnabled: false,
                hScrollBarEnabled: false,
                animation: {
                    type: "fade",
                    subType: "from_right"
                },
                progress: {
                    type: "page",
                    title: "xxxx",
                    text: "ccccc",
                    color: ""
                }
            });			
            //U.openwin('authentication', localStorage.getItem('skin_authentication'));
            U.RemoveLaunchView()
        },
        'EventFailedListener': function() {
            api.addEventListener({
                name: 'HelloApp'
            }, function(ret, err) {
                if (ret.value['status'] == 'silentfail') {
                    console.log('静默获取 基础信息 HelloApp 网络超时 5分钟后再次请求');
                    setTimeout(function() {
                        U.HelloApp(0)
                    }, 300000)
                } else if (ret.value['status'] == 'silentkeyError') {
                    console.log('静默获取 基础信息 HelloApp KEY验证错误 5秒后再次请求');
                    console.log('获取 基础信息 HelloApp KEY验证失败 再次请求时间戳更新 ');
                    U.GetServerTime();
                    setTimeout(function() {
                        U.HelloApp(0)
                    }, 5000)
                }
            });
            api.addEventListener({
                name: 'RyanIndex'
            }, function(ret, err) {
                if (ret.value['status'] == 'silentfail') {
                    console.log('静默获取 广告信息 RyanIndex 网络超时 5分钟后再次请求');
                    setTimeout(function() {
                        U.GetIndexDataStorage(0)
                    }, 300000)
                } else if (ret.value['status'] == 'silentkeyError') {
                    console.log('静默获取 广告信息 RyanIndex KEY验证错误 5秒后再次请求');
                    console.log('获取 广告信息 RyanIndex KEY验证失败 再次请求时间戳更新 ');
                    U.GetServerTime();
                    setTimeout(function() {
                        U.GetIndexDataStorage(0)
                    }, 5000)
                }
            })
        },
        'SetKeepScreenOn': function() {
            api.setKeepScreenOn({
                keepOn: true
            })
        },
        'RemoveLaunchView': function() {
            api.removeLaunchView({
                animation: {
                    type: 'fade',
                    duration: 500
                }
            })
        },
        'FirstInstallCheck': function() {
            var appVersion = api.appVersion;
            var LocalAppVersion = localStorage.getItem('LocalAppVersion');
            if (!LocalAppVersion || LocalAppVersion && LocalAppVersion != appVersion) {
                var Status = 0
            } else {
                var Status = 1
            }
            setTimeout(function() {
                U.setStorage('LocalAppVersion', appVersion)
            }, 5000);
            return Status
        },
        'openFrame': function(path, name, pageParam, type, subType, allowEdit, is_closeWin) {
            var DpageParam = pageParam ? pageParam : {};
            var dAllowEdit = allowEdit ? allowEdit : false;
            var dType = type ? type : 'fade';
            var dSubType = subType ? subType : 'from_right';
            api.openFrame({
                name: name,
                url: 'widget://html/' + path + '/' + name + '.html',
                pageParam: DpageParam,
                bounces: false,
                scrollEnabled: true,
                vScrollBarEnabled: false,
                hScrollBarEnabled: false,
                scaleEnabled: false,
                allowEdit: dAllowEdit,
                reload: false,
                overScrollMode: 'scrolls',
                rect: {
                    x: 0,
                    y: 0,
                    w: 'auto',
                    h: 'auto'
                },
                animation: {
                    type: dType,
                    subType: dSubType,
                    duration: 300
                }
            });
            if (is_closeWin == 'close') {
                api.addEventListener({
                    name: 'viewdisappear'
                }, function() {
                    api.closeFrame()
                })
            }
        },
        'QuitAPP': function() {
            var backSecond = 0;
            api.addEventListener({
                name: 'keyback'
            }, function(ret, err) {
                var curSecond = (new Date().getTime()) / 1000;
                if (Math.abs(curSecond - backSecond) > 2) {
                    backSecond = curSecond;
                    api.toast({
                        msg: '再按一次退出',
                        duration: 2000,
                        location: 'middle'
                    })
                } else {
                    api.closeWidget({
                        id: localStorage.getItem('apicloud_app_id'),
                        retData: {
                            name: 'closeWidget'
                        },
                        silent: true
                    })
                }
            })
        },
        'SendEvent': function(name, key) {
            var Dkey = key ? key : {};
            api.sendEvent({
                name: name,
                extra: Dkey
            })
        },
        'GetRyanTime': function() {
            var GetTime = Date.parse(new Date()) / 1000;
            if (localStorage.getItem('TimeDifference')) {
                if (localStorage.getItem('TimeDifference') < 0) {
                    var CorrectionTime = parseInt(GetTime) - parseInt(localStorage.getItem('TimeDifference'))
                } else {
                    var CorrectionTime = parseInt(GetTime) + parseInt(localStorage.getItem('TimeDifference'))
                }
            } else {
                var CorrectionTime = GetTime
            }
            return CorrectionTime
        },
        'GetServerTime': function(callback) {
            var GetTime = Date.parse(new Date()) / 1000;
            var UserId = localStorage.getItem('UserId');
            api.ajax({
                url: localStorage.getItem('api_url') + '/app/api/GetServerTime',
                method: 'get',
                timeout: 5,
                data: {
                    values: {
                        uid: UserId,
                        time: GetTime
                    }
                }
            }, function(ret, err) {
                callback(ret, err);
                if (ret) {
                    if (ret.status == 1) {
                        U.setStorage('TimeDifference', ret.data);
                        U.SendEvent('GetServerTime', {
                            status: 'ok',
                            code: '1'
                        })
                    } else if (ret.status == 718) {
                        U.SendEvent('GetServerTime', {
                            status: 'keyError',
                            code: '718'
                        })
                    }
                } else {
                    U.SendEvent('GetServerTime', {
                        status: 'fail',
                        code: err.statusCode
                    })
                }
            })
        },
        'SystemDefault': function(name, value) {
            if (!localStorage.getItem(name) || localStorage.getItem(name) == null || localStorage.getItem(name) == '' || localStorage.getItem(name) == "" || localStorage.getItem(name) == 'default' || localStorage.getItem(name) == 'undefined') {
                U.setStorage(name, value)
            }
        },
        'SkinDefault': function(name, value) {
            if (name == 'skin_index') {
                var ExistingValue = new Array("index_a", "index_x")
            } else if (name == 'skin_recommend') {
                var ExistingValue = new Array("recommend_a")
            }else if (name == 'skin_recommen') {
                var ExistingValue = new Array("recommend_b")
            } else if (name == 'skin_user') {
                var ExistingValue = new Array("user_a", "user_x")
            } else if (name == 'skin_authentication') {
                var ExistingValue = new Array("one", "two")
            } else if (name == 'web_module') {
                var ExistingValue = new Array("webBrowser", "webBrowser2018")
            } else if (name == 'jx_play_module') {
                var ExistingValue = new Array("x5", "native")
            }
            if (ExistingValue.indexOf(localStorage.getItem(name)) > -1) {} else {
                U.setStorage(name, value);
				U.setStorage("tinyplayers", "1")
            }
        },
        'Announcement': function() {
            setTimeout(function() {
                if (localStorage.getItem('artical_eject') != 'null') {
                    if (localStorage.getItem('artical_popup_rate') == '1') {
                        U.NoticePopup(localStorage.getItem('artical_id'), localStorage.getItem('artical_content'))
                    } else {
                        var artical_eject_close_time = Date.parse(new Date()) / 1000 - localStorage.getItem('artical_eject_id_' + localStorage.getItem('artical_id'));
                        if (localStorage.getItem('artical_eject_id_' + localStorage.getItem('artical_id')) == null) {
                            U.NoticePopup(localStorage.getItem('artical_id'), localStorage.getItem('artical_content'))
                        } else if (artical_eject_close_time >= 0) {
                            U.NoticePopup(localStorage.getItem('artical_id'), localStorage.getItem('artical_content'))
                        }
                    }
                }
            }, 300)
        },
        'DatabaseCreateTable': function() {
            var db = api.require('db');
            db.openDatabase({
                name: 'ryanvideo',
                path: 'fs://res/ryanvideo.db'
            }, function(ret, err) {
                if (ret.status) {
                    U.SendEvent('DatabaseCreateTable', {
                        status: 'ok',
                        action: 'open',
                        msg: '数据库打开成功'
                    });
                    db.executeSql({
                        name: 'ryanvideo',
                        sql: 'CREATE TABLE advertisement' + localStorage.getItem('RyanAppVersion') + ' (id int,name varchar(255),linkurl varchar(255),picurl varchar(255),cid int,audit int,sort int,del int,uid int,PRIMARY KEY (id))'
                    }, function(ret, err) {
                        if (ret.status) {
                            console.log('表 advertisement' + localStorage.getItem('RyanAppVersion') + ' 创建成功');
                            U.SendEvent('DatabaseCreateTable', {
                                status: 'ok',
                                action: 'create',
                                msg: '表 advertisement' + localStorage.getItem('RyanAppVersion') + ' 创建成功'
                            })
                        } else {
                            console.log('表 advertisement' + localStorage.getItem('RyanAppVersion') + ' 已存在');
                            U.SendEvent('DatabaseCreateTable', {
                                status: 'exists',
                                action: 'create',
                                msg: '表 advertisement' + localStorage.getItem('RyanAppVersion') + ' 已存在'
                            })
                        }
                    });
                    db.executeSql({
                        name: 'ryanvideo',
                        sql: 'CREATE TABLE privilege' + localStorage.getItem('RyanAppVersion') + '(id int,name varchar(255),linkurl varchar(255),picurl varchar(255),sort int,audit int,del int,PRIMARY KEY (id))'
                    }, function(ret, err) {
                        if (ret.status) {
                            console.log('表 privilege' + localStorage.getItem('RyanAppVersion') + ' 创建成功');
                            U.SendEvent('DatabaseCreateTable', {
                                status: 'ok',
                                action: 'create',
                                msg: '表 privilege' + localStorage.getItem('RyanAppVersion') + ' 创建成功'
                            })
                        } else {
                            console.log('表 privilege' + localStorage.getItem('RyanAppVersion') + ' 已存在');
                            U.SendEvent('DatabaseCreateTable', {
                                status: 'exists',
                                action: 'create',
                                msg: '表 privilege' + localStorage.getItem('RyanAppVersion') + ' 已存在'
                            })
                        }
                    });
                    db.executeSql({
                        name: 'ryanvideo',
                        sql: 'CREATE TABLE RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' (id int,title varchar(255),img varchar(255),url varchar(255),content varchar(255),type varchar(255),region varchar(255),del int,PRIMARY KEY (id))'
                    }, function(ret, err) {
                        if (ret.status) {
                            console.log('表 RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' 创建成功');
                            U.SendEvent('DatabaseCreateTable', {
                                status: 'ok',
                                action: 'create',
                                msg: '表 RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' 创建成功'
                            })
                        } else {
                            console.log('表 RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' 已存在');
                            U.SendEvent('DatabaseCreateTable', {
                                status: 'exists',
                                action: 'create',
                                msg: '表 RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' 已存在'
                            })
                        }
                    })
                } else {
                    console.log(' 数据库打开失败');
                    U.SendEvent('DatabaseCreateTable', {
                        status: 'fail',
                        action: 'open',
                        msg: '数据库打开失败'
                    })
                }
            })
        },
        'GetIndexDataStorage': function(type) {
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime();
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            api.ajax({
                url: localStorage.getItem('api_url') + '/app/api/RyanIndex',
                method: 'get',
                data: {
                    values: {
                        uid: UserId,
                        time: GetTime,
                        key: RyanKey
                    }
                }
            }, function(ret, err) {
                if (ret) {
                    if (ret.status == 1) {
                        if (type == 0) {
                            U.SendEvent('RyanIndex', {
                                status: 'silentok',
                                code: '1'
                            });
                            console.log('静默获取 首页广告信息 RyanIndex 成功');
                            U.toast('数据已更新', 1000, 'bottom')
                        } else {
                            U.SendEvent('RyanIndex', {
                                status: 'ok',
                                code: '1'
                            });
                            console.log('获取 首页广告信息 RyanIndex 成功 ')
                        }
                        var banner_data = ret.data['banner_ico'];
                        for (var i = 0; i < banner_data.length; i++) {
                            var isBannerPic = banner_data[i].picurl;
                            if (isBannerPic.indexOf("http://") > -1) {
                                var banner_pic = banner_data[i].picurl
                            } else if (isBannerPic.indexOf("https://") > -1) {
                                var banner_pic = banner_data[i].picurl
                            } else {
                                var banner_pic = localStorage.getItem('api_url') + banner_data[i].picurl
                            }
                            var insert_sq = 'INSERT INTO advertisement' + localStorage.getItem('RyanAppVersion') + '(id,name,linkurl,picurl,cid,audit,sort,del,uid) values("' + banner_data[i].id + '","' + banner_data[i].name + '","' + banner_data[i].linkurl + '","' + banner_pic + '","' + banner_data[i].cid + '","' + banner_data[i].audit + '","' + banner_data[i].sort + '","' + banner_data[i].del + '","' + banner_data[i].user_id + '")';
                            var update_sq = 'UPDATE advertisement' + localStorage.getItem('RyanAppVersion') + ' set name="' + banner_data[i].name + '",linkurl="' + banner_data[i].linkurl + '",picurl="' + banner_pic + '",cid="' + banner_data[i].cid + '",audit="' + banner_data[i].audit + '",sort="' + banner_data[i].sort + '",del="' + banner_data[i].del + '",uid="' + banner_data[i].user_id + '" where id="' + banner_data[i].id + '"';
                            U.DbStorageWrite('advertisement' + localStorage.getItem('RyanAppVersion') + '', insert_sq, update_sq)
                        }
                        var privilegeMovies_data = ret.data['privilegeMovies'];
                        for (var i = 0; i < privilegeMovies_data.length; i++) {
                            var isprivilegeMoviesPic = privilegeMovies_data[i].picurl;
                            if (isprivilegeMoviesPic.indexOf("http://") > -1) {
                                var privilegeMovies_pic = privilegeMovies_data[i].picurl
                            } else if (isprivilegeMoviesPic.indexOf("https://") > -1) {
                                var privilegeMovies_pic = privilegeMovies_data[i].picurl
                            } else {
                                var privilegeMovies_pic = localStorage.getItem('api_url') + privilegeMovies_data[i].picurl
                            }
                            var insert_sq = 'INSERT INTO privilege' + localStorage.getItem('RyanAppVersion') + ' (id,name,linkurl,picurl,sort,audit,del) values("' + privilegeMovies_data[i].id + '","' + privilegeMovies_data[i].name + '","' + privilegeMovies_data[i].linkurl + '","' + privilegeMovies_pic + '","' + privilegeMovies_data[i].sort + '","' + privilegeMovies_data[i].audit + '","' + privilegeMovies_data[i].del + '")';
                            var update_sq = 'UPDATE privilege' + localStorage.getItem('RyanAppVersion') + ' set name="' + privilegeMovies_data[i].name + '",linkurl="' + privilegeMovies_data[i].linkurl + '",picurl="' + privilegeMovies_pic + '",sort="' + privilegeMovies_data[i].sort + '",audit="' + privilegeMovies_data[i].audit + '",del="' + privilegeMovies_data[i].del + '" where id="' + privilegeMovies_data[i].id + '"';
                            U.DbStorageWrite('privilege' + localStorage.getItem('RyanAppVersion') + '', insert_sq, update_sq)
                        }
                        U.setStorage('getArtListTitle', ret.data['getArtListTitle'][0].title);
                        var RecommendedVideo_data = ret.data['RecommendedVideo'];
                        for (var i = 0; i < RecommendedVideo_data.length; i++) {
                            var isRecommendedVideoPic = RecommendedVideo_data[i].img;
                            if (isRecommendedVideoPic.indexOf("http://") > -1) {
                                var RecommendedVideo_pic = RecommendedVideo_data[i].img
                            } else if (isRecommendedVideoPic.indexOf("https://") > -1) {
                                var RecommendedVideo_pic = RecommendedVideo_data[i].img
                            } else {
                                var RecommendedVideo_pic = localStorage.getItem('api_url') + RecommendedVideo_data[i].img
                            }
                            var play_url = RecommendedVideo_data[i].url.replace(/[\r\n]/g, "");
                            var insert_sq = 'INSERT INTO RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' (id,title,img,url,content,type,region,del) values("' + RecommendedVideo_data[i].id + '","' + RecommendedVideo_data[i].title + '","' + RecommendedVideo_pic + '","' + RecommendedVideo_data[i].url + '","' + RecommendedVideo_data[i].content + '","' + RecommendedVideo_data[i].type + '","' + RecommendedVideo_data[i].region + '","' + RecommendedVideo_data[i].del + '")';
                            var update_sq = 'UPDATE RecommendedVideo' + localStorage.getItem('RyanAppVersion') + ' set title="' + RecommendedVideo_data[i].title + '",img="' + RecommendedVideo_pic + '",url="' + RecommendedVideo_data[i].url + '",content="' + RecommendedVideo_data[i].content + '",type="' + RecommendedVideo_data[i].type + '",region="' + RecommendedVideo_data[i].region + '",del="' + RecommendedVideo_data[i].del + '" where id="' + RecommendedVideo_data[i].id + '"';
                            U.DbStorageWrite('RecommendedVideo' + localStorage.getItem('RyanAppVersion') + '', insert_sq, update_sq)
                        }
                    } else if (ret.status == '718') {
                        if (type == 0) {
                            U.SendEvent('RyanIndex', {
                                status: 'silentkeyError',
                                code: '718'
                            });
                            console.log('静默获取 首页广告信息 RyanIndex KEY验证失败 ')
                        } else {
                            U.SendEvent('RyanIndex', {
                                status: 'keyError',
                                code: '718'
                            });
                            console.log('获取 首页广告信息 RyanIndex KEY验证失败 ')
                        }
                    } else if (ret.status == '829') {
                        U.GetIndexDataStorage(0)
                    }
                } else {
                    if (type == 0) {
                        U.SendEvent('RyanIndex', {
                            status: 'silentfail',
                            code: err.statusCode
                        });
                        console.log('静默获取 首页广告信息 RyanIndex 网络超时 网络状态： ' + err.statusCode)
                    } else {
                        U.SendEvent('RyanIndex', {
                            status: 'fail',
                            code: err.statusCode
                        });
                        console.log('获取 首页广告信息 RyanIndex 网络超时 网络状态： ' + err.statusCode)
                    }
                }
            })
        },
        'StartCacheImages': function() {
            setTimeout(function() {
                U.Cache_Images('launchImage', localStorage.getItem('launchImage'));
                U.Cache_Images('launchImageAd', localStorage.getItem('launchImageAd'));
                U.Cache_Images('live_left_upper_img', localStorage.getItem('live_left_upper_img'));
                U.Cache_Images('live_right_upper_img', localStorage.getItem('live_right_upper_img'));
                U.Cache_Images('live_right_lower_img', localStorage.getItem('live_right_lower_img'));
                U.Cache_Images('live_benner_img', localStorage.getItem('live_benner_img'));
                U.Cache_Images('agentIntroductionPicture', localStorage.getItem('agentIntroductionPicture'))
            }, 500)
        },
        'OpenLaunchImage': function(type) {
            dType = type ? type : 'push';
            var fs = api.require('fs');
            fs.open({
                path: localStorage.getItem('launchImage_Cache'),
                flags: 'read_write'
            }, function(ret, err) {
                if (ret.status == true) {
            api.openWin({
                name: 'launchimagead',
                bounces: false,
                slidBackEnabled: false,
                url: 'widget://html/home/launchimagead.html',
                vScrollBarEnabled: false,
                hScrollBarEnabled: false,
                animation: {
                    type: "fade",
                    subType: "from_left",
					duration: 500
                },
                progress: {
                    type: "page",
                    title: "xxxx",
                    text: "ccccc",
                    color: ""
                }
            });						
/*                     api.openFrame({
                        name: 'launchimagead',
                        url: 'widget://html/home/launchimagead.html',
                        bounces: false,
                        rect: {
                            x: 0,
                            y: 0,
                            w: 'auto',
                            h: 'auto'
                        },
                        animation: {
                            type: dType,
                            subType: 'from_left',
                            duration: 500
                        }
                    }) */
                } else {
                    U.SendEvent('Announcement', {
                        status: 'index'
                    })
                }
            });
            setTimeout(function() {
                api.closeWin({
                    name: 'authentication'
                });
                api.closeFrame({
                    name: 'connection_failed'
                })
            }, 1000)
        },
        'NetworkStatusCheck': function() {
            api.addEventListener({
                name: 'offline'
            }, function(ret, err) {
                U.toast('您的手机网络不太顺畅喔', 5000)
            });
            api.addEventListener({
                name: 'online'
            }, function(ret, err) {
                U.toast('网络已恢复')
            })
        },
        'toast': function(msg, time, lo) {
            api.toast({
                msg: msg,
                duration: time || 3000,
                location: lo || 'middle'
            })
        },
        'setStorage': function(key, value) {
            localStorage.setItem(key, value)
        },
        'showProgress': function(title, text, modal) {
            api.showProgress({
                title: title,
                text: text || '',
                modal: modal || false
            })
        },
        'hideProgress': function() {
            api.hideProgress()
        },
        'SingleSignOn': function() {
            if (localStorage.getItem('SingleSignOn') == 1 && localStorage.getItem('UserId') > 0) {
                var SingleSignOnRate = '';
                var UserId = localStorage.getItem('UserId');
                if (localStorage.getItem('SingleSignOnRate') < 60000) {
                    SingleSignOnRate = 60000
                } else {
                    SingleSignOnRate = localStorage.getItem('SingleSignOnRate')
                }
                var interval_SingleSignOn = setInterval(function() {
                    api.ajax({
                        url: localStorage.getItem('api_url') + '/app/api/SingleSignOn',
                        method: 'get',
                        data: {
                            values: {
                                uid: UserId,
                                deviceId: api.deviceId
                            }
                        }
                    }, function(ret, err) {
                        if (ret.status == 1) {
                            U.RyanUp(2, ' 该账户已在其他设备登录!');
                            U.exitLogin('0')
                        }
                    })
                }, SingleSignOnRate)
            }
        },
        'AccountViolationDetection': function() {
            if (localStorage.getItem('UserId') > 0) {
                var SealNumberDetectionFrequency = '';
                var UserId = localStorage.getItem('UserId');
                if (localStorage.getItem('SingleSignOnRate') < 600000) {
                    SealNumberDetectionFrequency = 600000
                } else {
                    SealNumberDetectionFrequency = localStorage.getItem('SingleSignOnRate') * 10
                }
                var interval_AccountViolationDetection = setInterval(function() {
                    api.ajax({
                        url: localStorage.getItem('api_url') + '/app/api/AccountViolationDetection',
                        method: 'get',
                        data: {
                            values: {
                                uid: UserId
                            }
                        }
                    }, function(ret, err) {
                        if (ret.status == 1) {
                            if (ret.data == 0) {
                                U.exitLogin('1');
                                clearInterval(interval_AccountViolationDetection)
                            }
                        }
                    })
                }, 10000)
            }
        },
        'openWin': function(path, name, pageParam, type, subType, opt, delay, is_closeWin, is_login) {
            var oData = pageParam ? pageParam : {},
                dType = type ? type : 'fade',
                dSubType = subType ? subType : 'from_right',
                bgColor = '#000';
            bgColor = opt && opt.bgColor ? opt.bgColor : bgColor;
            if (is_login == 1) {
                if (localStorage.getItem('UserId') < 1) {
                    U.openWin('my/', 'login');
                    return
                }
            }
            api.openWin({
                name: name,
                bounces: false,
                pageParam: oData,
                bgColor: bgColor,
                slidBackEnabled: false,
                url: 'widget://html/' + path + name + '.html',
                vScrollBarEnabled: false,
                hScrollBarEnabled: false,
                delay: delay,
                animation: {
                    type: dType,
                    subType: dSubType
                },
                progress: {
                    type: "page",
                    title: "xxxx",
                    text: "ccccc",
                    color: ""
                }
            });
            if (is_closeWin == 'close') {
                api.addEventListener({
                    name: 'viewdisappear'
                }, function() {
                    api.closeWin()
                })
            }
        },
        'closeWin': function(name) {
            if (name == 'x5') {
                browser.loadScript({
                    script: 'location.reload();'
                });
                setTimeout(function() {
                    browser.loadScript({
                        script: 'location.reload();'
                    });
                    api.closeWin({
                        name: name
                    })
                }, 100)
            } else {
                api.closeWin({
                    name: name
                })
            }
        },
        'closeFrame': function(name) {
            api.closeFrame({
                name: name
            })
        },
        'UpdateApp': function() {
            api.openFrame({
                name: 'application_upgrade',
                url: 'widget://html/mask/application_upgrade.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                }
            })
        },
        'RyanUp': function(identifier, msg) {
            Didentifier = identifier ? identifier : 0, Dmsg = msg ? msg : '没有信息', setTimeout(function() {
                api.openFrame({
                    name: 'ryanup',
                    url: 'widget://html/mask/ryanup.html',
                    bounces: false,
                    bgColor: 'rgba(0,0,0,0.8)',
                    rect: {
                        x: 0,
                        y: 0,
                        w: api.winWidth,
                        h: api.winHeight
                    },
                    animation: {
                        type: 'fade',
                        subType: 'from_bottom'
                    },
                    pageParam: {
                        identifier: Didentifier,
                        msg: Dmsg
                    }
                })
            }, 300)
        },
        'CDKEYTips': function(cdkey) {
            api.openFrame({
                name: 'CDKEYTips',
                url: 'widget://html/mask/cdkey_tips.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_bottom'
                },
                pageParam: {
                    CDKEY: cdkey
                }
            })
        },
        'NoticePopup': function(notice_id, content) {
            api.openFrame({
                name: 'NoticePopup',
                url: 'widget://html/mask/notice_popup.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    notice_id: notice_id,
                    content: content,
                }
            })
        },
        'PlayTips': function(identifier, title, geturl) {
            Didentifier = identifier ? identifier : 0, Dtitle = title ? title : '****', Dgeturl = geturl ? geturl : 0, api.openFrame({
                name: 'play_tips',
                url: 'widget://html/mask/play_tips.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    identifier: Didentifier,
                    title: Dtitle,
                    geturl: Dgeturl
                }
            })
        },
        'createCDKEYPopup': function(type) {
            api.openFrame({
                name: 'create_cdkey_popup',
                url: 'widget://html/mask/create_cdkey_popup.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    type: type
                }
            })
        },
        'GetInfoAgo': function(url, title) {
            if (url.indexOf("pptv.com") != -1) {
                var spTitle = title.split("_");
                slTitle = spTitle.slice(0, 1)
            } else if (url.indexOf("iqiyi.com") != -1) {
                if (title.indexOf("第") != -1) {
                    var spTitle = title.split("第");
                    slTitle = spTitle.slice(0, 1)
                } else {
                    var spTitle = title.split("-");
                    slTitle = spTitle.slice(0, 1)
                }
            } else if (url.indexOf("youku.com") != -1) {
                slTitle = title
            } else if (url.indexOf("fun.tv") != -1) {
                var spTitle = title.split("-");
                slTitle = spTitle.slice(0, 1)
            } else if (url.indexOf("vip.1905.com") != -1) {
                var spTitle = title.split("_");
                slTitle = spTitle.slice(0, 1)
            } else if (url.indexOf("miguvideo.com") != -1) {
                slTitle = title
            } else if (url.indexOf("qq.com") != -1) {
                var spTitle = title.split("-");
                slTitle = spTitle.slice(0, 1)
            } else if (url.indexOf("sohu.com") != -1) {
                if (title.indexOf("第") != -1) {
                    var spTitle = title.split("第");
                    slTitle = spTitle.slice(0, 1)
                } else {
                    var spTitle = title.split("_");
                    slTitle = spTitle.slice(0, 1)
                }
            } else if (url.indexOf("m.le.com") != -1) {
                var spTitle = title.split("_");
                slTitle = spTitle.slice(0, 1)
            } else if (url.indexOf("m.mgtv.com") != -1) {
                var spTitle = title.split("-");
                slTitle = spTitle.slice(0, 1)
            }
            var data = new Array(slTitle, url);
            return data
        },
        'GetRyanKey': function(uid, time) {
            var KeyOperation = parseInt(uid) + parseInt(time);
            var signature = api.require('signature');
            var SecurityVerificationKey = signature.md5Sync({
                data: KeyOperation,
                uppercase: false
            });
            return SecurityVerificationKey
        },
        'GetFomateTime': function(time) {
            var date = new Date();
            date.setTime(time * 1000);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute
        },
        'GetUserInfo': function(uid, is_sendEvent) {
            console.log('接收到ID:' + uid + ' 准备获取用户信息');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(uid, GetTime);
            api.ajax({
                url: localStorage.getItem('api_url') + '/app/api/MembershipInformation',
                method: 'get',
                data: {
                    values: {
                        key: RyanKey,
                        uid: uid,
                        time: GetTime
                    }
                }
            }, function(ret, err) {
                if (ret.status == 1) {
                    U.setStorage('UserId', ret.data['id']);
                    U.setStorage('UserName', ret.data['username']);
                    U.setStorage('UserNameT', ret.data['username_t']);
                    U.setStorage('UserPass', ret.data['password']);
                    U.setStorage('UserVipTime', ret.data['vip_time']);
                    U.setStorage('UserPower', ret.data['power']);
                    U.setStorage('UserSign', ret.data['sign']);
                    U.setStorage('UserAlipayAccount', ret.data['zfb']);
                    U.setStorage('UserAlipayName', ret.data['zfb_name']);
                    U.setStorage('UserSource', ret.data['Source']);
                    U.setStorage('UserMoney', ret.data['money']);
                    U.setStorage('UserStatus', ret.data['status']);
                    U.setStorage('UserWeichat', ret.data['weichat']);
                    U.setStorage('UserEmail', ret.data['email']);
                    U.setStorage('UserInvitationCode', ret.data['share_ma']);
                    U.setStorage('UserCashNum', ret.data['txje']);
                    U.setStorage('UserParentId', ret.data['parentid']);
                    U.setStorage('UserParentWeichat', ret.data['parent_weichat']);
                    U.setStorage('AdminWeichat', ret.data['admin_weichat']);
                    U.setStorage('UserTeamNum', ret.data['team_num']);
                    U.setStorage('UserSafetyCode', ret.data['safetycode']);
                    U.setStorage('UserRebateMoney', ret.data['rebate_money']);
                    U.setStorage('UserIsFaKa', ret.data['isfaka']);
                    api.sendEvent({
                        name: 'UpdateUserData',
                        extra: {}
                    });
                    api.sendEvent({
                        name: 'CloseLogin',
                        extra: {}
                    });
                    api.sendEvent({
                        name: 'UpdateToken',
                        extra: {}
                    })
                } else if (ret.status == 0) {
                    api.sendEvent({
                        name: 'UpdateUserData',
                        extra: {}
                    })
                } else if (ret.status == 718) {} else if (ret.status == '829') {
                    U.GetUserInfo(localStorage.getItem('UserId'))
                }
            })
        },
        'CreateCDKEY': function(type, number) {
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            $.get(localStorage.getItem('api_url') + '/app/api/AppCdkeyCreate', {
                key: RyanKey,
                uid: UserId,
                time: GetTime,
                type: type,
                number: number
            }, function(ret, err) {
                if (ret.status == 1) {
                    api.sendEvent({
                        name: 'UpdateUserData',
                        extra: {}
                    })
                } else if (ret.status == 718) {} else if (ret.status == '829') {
                    U.CreateCDKEY(type, number)
                }
            })
        },
        'AdvertisingOperationPopup': function(id, type) {
            api.openFrame({
                name: 'advertisement_edit_popup',
                url: 'widget://html/agent/advertisement_edit_popup.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                allowEdit: true,
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    Adid: id,
                    type: type
                }
            })
        },
        'ImgNoFind': function(type) {
            var img = event.srcElement;
            if (type == 'banner') {
                img.src = "../../images/defaultbanner.png"
            } else if (type == 'ico') {
                img.src = "../../images/default_icon.png"
            } else if (type == 'video') {
                img.src = "../../images/defaultvideoimg.png"
            }
            img.οnerrοr = null
        },
        'AdvertisingAddPopup': function(type) {
            api.openFrame({
                name: 'advertisement_add_popup',
                url: 'widget://html/agent/advertisement_add_popup.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                allowEdit: true,
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    type: type
                }
            })
        },
        'exitLogin': function(type, is_go_login) {
            U.setStorage('UserId', 0);
            U.setStorage('UserName', '');
            U.setStorage('UserNameT', '');
            U.setStorage('UserPass', '');
            U.setStorage('UserVipTime', '');
            U.setStorage('UserPower', '');
            U.setStorage('UserSign', '');
            U.setStorage('UserAlipayAccount', '');
            U.setStorage('UserSource', '');
            U.setStorage('UserMoney', '');
            U.setStorage('UserStatus', '');
            U.setStorage('UserInvitationCode', '');
            U.setStorage('UserCashNum', '');
            U.setStorage('UserParentId', '');
            U.setStorage('UserParentWeichat', '');
            U.setStorage('UserTeamNum', '');
            U.setStorage('UserWeichat', '');
            U.setStorage('UserEmail', '');
            U.setStorage('UserIsFaKa', '');
            U.setStorage('UserIsAlipay', '');
            U.setStorage('UserAlipayName', '');
            U.setStorage('experience_name', '');
            U.setStorage('experience_cost_price', '');
            U.setStorage('experience_content', '');
            U.setStorage('experience_gokaurl', '');
            U.setStorage('one_month_name', '');
            U.setStorage('one_month_cost_price', '');
            U.setStorage('one_month_content', '');
            U.setStorage('one_month_gokaurl', '');
            U.setStorage('half_a_year_name', '');
            U.setStorage('half_a_year_cost_price', '');
            U.setStorage('half_a_year_content', '');
            U.setStorage('half_a_year_gokaurl', '');
            U.setStorage('one_year_name', '');
            U.setStorage('one_year_cost_price', '');
            U.setStorage('one_year_content', '');
            U.setStorage('one_year_gokaurl', '');
            U.setStorage('permanent_name', '');
            U.setStorage('permanent_cost_price', '');
            U.setStorage('permanent_content', '');
            U.setStorage('permanent_gokaurl', '');
            if (type == 0) {} else if (type == 1) {
                U.RyanUp(2, '登录状态已失效 请重新登录!')
            }
            if (is_go_login == 1) {
                setTimeout(function() {
                    U.openWin('my/', 'login')
                }, 1000)
            }
            api.sendEvent({
                name: 'UpdateUserData',
                extra: {}
            })
        },
        'AgentOpenSetupPopup': function(type) {
            api.openFrame({
                name: 'agent_setup_popup',
                url: 'widget://html/agent/agent_setup_popup.html',
                bounces: false,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    type: type
                }
            })
        },
        'AgentCdkeyUrlSetPopup': function(type) {
            api.openFrame({
                name: 'agent_cdkey_setup_popup',
                url: 'widget://html/agent/agent_cdkey_setup_popup.html',
                bounces: false,
                allowEdit: true,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    type: type
                }
            })
        },
        'AgentCashOutPopup': function() {
            api.openFrame({
                name: 'agent_cash_out_popup',
                url: 'widget://html/agent/agent_cash_out_popup.html',
                bounces: false,
                allowEdit: true,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                }
            })
        },
        'PermissionCheck': function(type) {
            var TimeStampNow = Date.parse(new Date()) / 1000;
            var state = 0;
            if (type == 'login') {
                if (localStorage.getItem('UserId') > 0) {
                    state = 1
                }
            }
            if (type == 'vip') {
                if (localStorage.getItem('UserVipTime') == "-1") {
                    state = 1
                } else if (localStorage.getItem('UserVipTime') > TimeStampNow) {
                    state = 1
                }
            }
            if (type == 'agent') {
                if (localStorage.getItem('UserPower') == 1) {
                    state = 1
                }
            }
            return state
        },
        'OpenVideoJxPopup': function(url, type, api_jx_url, title) {
            api.openFrame({
                name: 'video_jx_play_ios_popup',
                url: 'widget://html/mask/video_jx_play_ios_popup.html',
                bounces: false,
                allowEdit: true,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    url: url,
                    type: type,
                    api_jx_url: api_jx_url,
                    video_name: title
                }
            })
        },
        'OpenVideoJxAndroidPopup': function(url, title, type) {
            api.openFrame({
                name: 'video_jx_play_android_popup',
                url: 'widget://html/mask/video_jx_play_android_popup.html',
                bounces: false,
                allowEdit: true,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    url: url,
                    video_name: title,
                    type: type
                }
            })
        },
        'OpenTouPingPopup': function(url, title) {
            api.openFrame({
                name: 'touping_popup',
                url: 'widget://html/mask/touping_popup.html',
                bounces: false,
                allowEdit: true,
                bgColor: 'rgba(0,0,0,0.8)',
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: api.winHeight
                },
                animation: {
                    type: 'fade',
                    subType: 'from_top'
                },
                pageParam: {
                    JieXiOkUrl: url,
                    video_name: title
                }
            })
        },
        'signature': function(key) {
            var signature = api.require('signature');
            signature.base64Decode({
                data: key
            }, function(ret, err) {
                if (ret.status) {
                    U.setStorage('play_decide_key', ret.value)
                }
            });
            return localStorage.getItem('play_decide_key')
        },
        'DbStorageWrite': function(table, insert_sq, update_sq) {
            var db = api.require('db');
            db.openDatabase({
                name: 'ryanvideo',
                path: 'fs://res/ryanvideo.db'
            }, function(ret, err) {
                if (ret.status) {
                    db.executeSql({
                        name: 'ryanvideo',
                        sql: insert_sq
                    }, function(ret, err) {
                        if (ret.status) {} else {
                            console.log(table + ' -  数据写入失败 可能已经存在  执行更新' + update_sq);
                            db.executeSql({
                                name: 'ryanvideo',
                                sql: update_sq
                            }, function(ret, err) {
                                if (ret.status) {
                                    console.log(table + ' -  数据已存在 并更新成功')
                                } else {}
                            })
                        }
                    })
                } else {}
            })
        },
        'DbStorageResetData': function() {
            var db = api.require('db');
            db.openDatabase({
                name: 'ryanvideo',
                path: 'fs://res/ryanvideo.db'
            }, function(ret, err) {
                if (ret.status) {
                    var table_list = new Array();
                    table_list[0] = "advertisement";
                    table_list[1] = "privilege";
                    table_list[2] = "RecommendedVideo";
                    table_list[3] = "ADinformation";
                    for (var i = 0; i < table_list.length; i++) {
                        var table_name = table_list[i];
                        var reset_sq = 'UPDATE ' + table_name + ' set audit = 0';
                        db.executeSql({
                            name: 'ryanvideo',
                            sql: reset_sq
                        }, function(ret, err) {
                            if (ret.status) {} else {}
                        })
                    }
                } else {}
            })
        },
        'DbStorageDel': function() {
            var db = api.require('db');
            db.openDatabase({
                name: 'ryanvideo',
                path: 'fs://res/ryanvideo.db'
            }, function(ret, err) {
                if (ret.status) {
                    var table_list = new Array();
                    table_list[0] = "advertisement";
                    for (var i = 0; i < table_list.length; i++) {
                        var table_name = table_list[i];
                        var del_sq = 'DELETE FROM ' + table_name + ' WHERE audit = 0';
                        db.executeSql({
                            name: 'ryanvideo',
                            sql: del_sq
                        }, function(ret, err) {
                            if (ret.status) {} else {}
                        })
                    }
                } else {}
            })
        },
        'Jx_androidBrowser': function(url, type) {
            video_url = null;
            U.setStorage('androidBrowserPlayUrl', null);
            uzmoduledemo = api.require('androidBrowser');
            var param = {
                rect: {
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1,
                },
                fixedOn: "",
                fixed: true,
                url: url,
                browserBg: "#F0F0F0",
                timeout: 7,
            };
            uzmoduledemo.openView(param, function(ret, err) {
                if (ret.result == '1') {
                    video_url = ret.VideoUrl;
                    api.sendEvent({
                        name: 'androidBrowser_play_url_ok',
                        extra: {
                            url: video_url,
                            type: 1
                        }
                    });
                    uzmoduledemo.closeView()
                } else {
                    api.sendEvent({
                        name: 'androidBrowser_play_url_fail',
                        extra: {
                            url: null,
                            type: 0
                        }
                    });
                    uzmoduledemo.closeView()
                }
            })
        },
        'Up_Play_Record': function(url, title) {
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            api.ajax({
                url: localStorage.getItem('api_url') + '/app/api/AddVideoHistory',
                method: 'get',
                data: {
                    values: {
                        url: url,
                        title: title,
                        key: RyanKey,
                        uid: UserId,
                        time: GetTime
                    }
                }
            }, function(ret, err) {
                if (ret.status == 1) {} else if (ret.status == 718) {} else if (ret.status == '829') {
                    U.Up_Play_Record(url, title)
                }
            })
        },
        'UserAttendance': function(source) {
            if (localStorage.getItem('UserId') < 1) {
                U.openWin('my/', 'login');
                return
            }
            if (source == 'user_a') {
                Attendance_tips.innerHTML = '正在签到中'
            }
            if (source == 'user_x') {
                Attendance_tips.innerHTML = '正在签到'
            }
            var UserId = localStorage.getItem('UserId');
            var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
            var RyanKey = U.GetRyanKey(UserId, GetTime);
            api.ajax({
                url: localStorage.getItem('api_url') + '/app/api/UserAttendance.html',
                method: 'get',
                data: {
                    values: {
                        key: RyanKey,
                        uid: UserId,
                        time: GetTime
                    }
                }
            }, function(ret, err) {
                if (source == 'user_a') {
                    setTimeout(function() {
                        Attendance_tips.innerHTML = '签到领积分'
                    }, 2000)
                }
                if (source == 'user_x') {
                    setTimeout(function() {
                        Attendance_tips.innerHTML = '明天再来哦~'
                    }, 2000)
                }
                if (ret.status == 1) {
                    U.GetUserInfo(UserId);
                    U.RyanUp(1, ret.data)
                } else if (ret.status == 0) {
                    U.RyanUp(2, ret.data)
                } else if (ret.status == 718) {
                    U.RyanUp(2, '签到失败 请稍后再试！')
                } else if (ret.status == '829') {
                    U.toast('请求频繁 请稍后再试')
                }
            })
        },
        'Cache_Images': function(name, url) {
            if (localStorage.getItem(name) != null || localStorage.getItem(name) != '' || localStorage.getItem(name) != 'default' || localStorage.getItem(name) != 'undefined') {
                api.imageCache({
                    url: url,
                    thumbnail: false,
                }, function(ret, err) {
                    if (ret) {
                        var path = ret.url;
                        U.setStorage(name + '_Cache', path)
                    }
                })
            }
        },
        'Check_Cache_Images': function(url) {
            var fs = api.require('fs');
            var ret = fs.openSync({
                path: url,
                flags: 'read_write'
            });
            if (ret.status) {
                var Cache_State = 1
            } else {
                var Cache_State = 0
            }
            return Cache_State
        },
        'Check_ButtonSubmissionTime': function() {
            var timestamp = Date.parse(new Date());
            var ButtonSubmissionTimedifference = timestamp - localStorage.getItem('ButtonSubmissionTime');
            U.setStorage('ButtonSubmissionTime', timestamp);
            if (ButtonSubmissionTimedifference < 5000) {
                return 1
            } else {
                return 0
            }
        },
        'OpenAd': function(url) {
            if (localStorage.getItem('web_module') == 'webBrowser') {
                if (api.systemType == 'ios') {
                    var browser = api.require('webBrowser');
                    browser.open({
                        url: url
                    })
                } else {
                    var browser = api.require('webBrowser');
                    browser.open({
                        "url": url
                    }, function(ret) {})
                }
            } else {
                var browser = api.require('webBrowser');
                browser.open({
                    url: url
                })
            }
        },
        'GetSkin': function() {
            api.ajax({
                url: localStorage.getItem('api_url') + '/app/api/GetSkin',
                method: 'get'
            }, function(ret, err) {
                if (ret.status == 1) {
                    if (ret.skin['index'] != '0') {
                        U.setStorage('skin_index', ret.skin['index'])
                    }
                    if (ret.skin['recommend'] != '0') {
                        U.setStorage('skin_recommend', ret.skin['recommend'])
                    }
                    if (ret.skin['user'] != '0') {
                        U.setStorage('skin_user', ret.skin['user'])
                    }
                    if (ret.module['web'] != '0') {
                        U.setStorage('web_module', ret.module['web'])
                    }
                    if (ret.module['jx_play'] != '0') {
                        U.setStorage('jx_play_module', ret.module['jx_play'])
                    }
                }
            })
        },
        'Hitokoto': function() {
            api.ajax({
                url: 'https://api.ooopn.com/yan/api.php?type=json',
                method: 'get'
            }, function(ret, err) {
                U.setStorage('Hitokoto', ret.hitokoto)
            })
        },
        'OpenLocalBrowser': function(url) {
            if (api.systemType != 'ios') {
                api.openApp({
                    androidPkg: 'android.intent.action.VIEW',
                    uri: url
                }, function(ret, err) {
                    if (ret) {} else {
                        U.OpenAd(url)
                    }
                })
            } else {
                api.openApp({
                    iosUrl: url
                })
            }
        },
        'OpenLoadPage': function() {
            if (localStorage.getItem('IsOpenLoadPage') == 1) {
				var path="authentication";
				var name="/one";
            api.openWin({
                name: path,
                bounces: false,
                slidBackEnabled: false,
                url: 'widget://html/' + path + name + '.html',
                vScrollBarEnabled: false,
                hScrollBarEnabled: false,
                animation: {
                    type: "fade",
                    subType: "from_top"
                },
                progress: {
                    type: "page",
                    title: "xxxx",
                    text: "ccccc",
                    color: ""
                }
            });					
/*                 api.openFrame({
                    name: 'authentication',
                    url: 'widget://html/authentication/one.html',
                    bounces: false,
                    rect: {
                        x: 0,
                        y: 0,
                        w: 'auto',
                        h: 'auto'
                    },
                    animation: {
                        type: 'fade',
                        subType: 'from_top'
                    }
                }); */
                api.removeLaunchView()
            } else {
                U.GetServerTime()
            }
        },
        'OpenConnectionFailed': function(type) {
            if (localStorage.getItem('IsOpenConnectionFailedPage') == 1) {
                api.openFrame({
                    name: 'connection_failed',
                    url: 'widget://html/connectionfailed/connection_failed' + localStorage.getItem('skin_connection_failed') + '.html',
                    bounces: false,
                    rect: {
                        x: 0,
                        y: 0,
                        w: 'auto',
                        h: 'auto'
                    },
                    animation: {
                        type: 'push',
                        subType: 'from_top'
                    }
                });
                setTimeout(function() {
                    api.closeWin({
                        name: 'authentication'
                    })
                }, 1000);
                if (type == '1') {} else {
                    setTimeout(function() {
                        U.toast('正在为您再次尝试');
                        U.GetServerTime('connection_failed')
                    }, 10000)
                }
            }
        },
        'doCache': function(folder, id, url, callback) {
            U.readFile('/' + folder + '/' + localStorage.getItem('UserId') + '.json', function(ret, err) {
                if (ret.status) {
                    var cacheData = ret.data;
                    callback(JSON.parse(cacheData));
                    U.iCache($('.cache'));
                    var UserId = localStorage.getItem('UserId');
                    var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
                    var RyanKey = U.GetRyanKey(UserId, GetTime);
                    U.ajaxRequest(url, 'GET', {
                        uid: UserId,
                        time: GetTime,
                        key: RyanKey
                    }, function(ret, err) {
                        if (ret) {
                            if (ret.status == 1) {
                                if (cacheData != JSON.stringify(ret)) {
                                    U.writeFile(ret, id, folder);
                                    U.iCache($('.cache'))
                                }
                            }
                        } else {
                            U.toast('数据获取失败！')
                        }
                    })
                } else {
                    var UserId = localStorage.getItem('UserId');
                    var GetTime = U.GetRyanTime(Date.parse(new Date()) / 1000);
                    var RyanKey = U.GetRyanKey(UserId, GetTime);
                    U.ajaxRequest(url, 'GET', {
                        uid: UserId,
                        time: GetTime,
                        key: RyanKey
                    }, function(ret, err) {
                        if (ret) {
                            if (ret.status == 1) {
                                callback(ret);
                                U.writeFile(ret, id, folder);
                                U.iCache($('.cache'))
                            }
                        } else {
                            U.toast('数据获取失败！')
                        }
                    })
                }
            })
        },
        'ajaxRequest': function(url, method, datas, callBack) {
            var serverUrl = localStorage.getItem('ApiInterfaceUrl');
            api.ajax({
                url: serverUrl + url,
                method: method,
                cache: false,
                timeout: 30,
                dataType: 'json',
                data: {
                    values: datas
                }
            }, function(ret, err) {
                if (ret) {
                    callBack(ret, err)
                } else {
                    callBack(err.statusCode)
                }
            })
        },
        'readFile': function(path, callBack) {
            var cacheDir = api.cacheDir;
            api.readFile({
                path: cacheDir + path
            }, function(ret, err) {
                callBack(ret, err)
            })
        },
        'writeFile': function(json, id, path) {
            var cacheDir = api.cacheDir;
            api.writeFile({
                path: cacheDir + '/' + path + '/' + id + '.json',
                data: JSON.stringify(json)
            }, function(ret, err) {})
        },
        'iCache': function(selector) {
            selector.each(function(data) {
                ! function(data) {
                    var url = selector.eq(data).attr("src");
                    var img = this;
                    var pos = url.lastIndexOf("/");
                    var filename = url.substring(pos + 1);
                    var path = api.cacheDir + "/pic/" + filename;
                    var obj = api.require('fs');
                    obj.exist({
                        path: path
                    }, function(ret, err) {
                        if (ret.exist) {
                            if (ret.directory) {} else {
                                selector.eq(data).attr('src', null);
                                path = api.cacheDir + "/pic/" + filename;
                                selector.eq(data).attr('src', path)
                            }
                        } else {
                            api.download({
                                url: url,
                                savePath: path,
                                report: false,
                                cache: true,
                                allowResume: true
                            }, function(ret, err) {
                                if (ret) {
                                    var value = ('文件大小：' + ret.fileSize + '；下载进度：' + ret.percent + '；下载状态' + ret.state + '存储路径: ' + ret.savePath)
                                } else {
                                    var value = err.msg
                                }
                            })
                        }
                    })
                }(data)
            })
        },
        'localStorageCoreSettings': function() {
            U.readFile('/Hello_app/' + localStorage.getItem('UserId') + '.json', function(ret, err) {
                if (ret.status) {
                    var cacheData = JSON.parse(ret.data);
                    U.setStorage('apicloud_app_id', cacheData.data['apicloud_app_id']);
                    U.setStorage('app_name', cacheData.data['app_name']);
                    U.setStorage('index_video_num', cacheData.data['index_video_num']);
                    U.setStorage('SingleSignOn', cacheData.data['SingleSignOn']);
                    U.setStorage('ActivationCodeDetection', cacheData.data['ActivationCodeDetection']);
                    U.setStorage('offlineState', cacheData.data['offlineState']);
                    U.setStorage('DefaultLogo', cacheData.data['DefaultLogo']);
                    U.setStorage('RyanAppVersion', cacheData.data['localDB']);
                    U.setStorage('RePassPriority', cacheData.data['RePassPriority']);
                    U.setStorage('agentIntroductionPicture', cacheData.data['agent_introduction_picture']);
                    U.setStorage('User_AgentIntroductionBanner', cacheData.data['User_AgentIntroductionBanner']);
                    U.setStorage('agent_bulletin', cacheData.data['agent_bulletin']);
                    U.setStorage('Proxy_login', cacheData.data['Proxy_login']);
                    U.setStorage('ranking_agent_ad', cacheData.data['ranking_agent_ad']);
                    U.setStorage('mainFooter', cacheData.data['mainFooter']);
                    U.setStorage('Vip_Voice_cues', cacheData.data['Vip_Voice_cues']);
                    U.setStorage('integral_consumption_proportion', cacheData.data['integral_consumption_proportion']);
                    U.setStorage('CDKEY_length', cacheData.data['CDKEY_length']);
                    U.setStorage('CDKEY_prefix', cacheData.data['CDKEY_prefix']);
                    U.setStorage('experience_price', cacheData.data['experience_price']);
                    U.setStorage('onemonth_price', cacheData.data['onemonth_price']);
                    U.setStorage('halfayear_price', cacheData.data['halfayear_price']);
                    U.setStorage('oneyear_price', cacheData.data['oneyear_price']);
                    U.setStorage('permanent_price', cacheData.data['permanent_price']);
                    U.setStorage('agent_gokarul', cacheData.data['agent_gokarul']);
                    U.setStorage('Ios_alone_interface_switch', cacheData.data['Ios_alone_interface_switch']);
                    if (api.systemType == 'ios' && cacheData.data['Ios_alone_interface_switch'] == 1) {
                        U.setStorage('jx_Interface_one', cacheData.data['jx_ios_Interface_one']);
                        U.setStorage('jx_Interface_two', cacheData.data['jx_ios_Interface_two']);
                        U.setStorage('jx_Interface_three', cacheData.data['jx_ios_Interface_three']);
                        U.setStorage('jx_Interface_four', cacheData.data['jx_ios_Interface_four']);
                        U.setStorage('jx_Interface_five', cacheData.data['jx_ios_Interface_five'])
                    } else {
                        U.setStorage('jx_Interface_one', cacheData.data['jx_Interface_one']);
                        U.setStorage('jx_Interface_two', cacheData.data['jx_Interface_two']);
                        U.setStorage('jx_Interface_three', cacheData.data['jx_Interface_three']);
                        U.setStorage('jx_Interface_four', cacheData.data['jx_Interface_four']);
                        U.setStorage('jx_Interface_five', cacheData.data['jx_Interface_five'])
                    }
                    U.setStorage('interface_json_one_id', cacheData.data['interface_json_one_id']);
                    U.setStorage('interface_json_one_token', cacheData.data['interface_json_one_token']);
                    U.setStorage('interface_json_two_id', cacheData.data['interface_json_two_id']);
                    U.setStorage('interface_json_two_token', cacheData.data['interface_json_two_tokeonload="loadImg(this);" n']);
                    if (cacheData.data['interface_json_opt'] !== '1') {
                        U.setStorage('interface_json_opt', 2)
                    } else {
                        U.setStorage('interface_json_opt', 1)
                    }
                    U.setStorage('interface_json_opt', cacheData.data['interface_json_opt']);
                    if (cacheData.data['interface_type_opt'] !== '1') {
                        U.setStorage('interface_type_opt', 0)
                    } else {
                        U.setStorage('interface_type_opt', 1)
                    }
                    U.setStorage('interface_type_opt', cacheData.data['interface_type_opt']);
                    U.setStorage('app_down_host', cacheData.data['domain_name']);
                    U.setStorage('advertising_slogan', cacheData.data['advertising_slogan']);
                    U.setStorage('admin_token', cacheData.data['admin_token']);
                    U.setStorage('SingleSignOnRate', cacheData.data['SingleSignOnRate']);
                    U.setStorage('mod_open_live', cacheData.data['mod_open_live']);
                    U.setStorage('mod_open_notice', cacheData.data['mod_open_notice']);
                    U.setStorage('mod_open_search', cacheData.data['mod_open_search']);
                    U.setStorage('Sm_Authorization', cacheData.data['Sm_Authorization']);
                    U.setStorage('Live_text', cacheData.data['Live_text']);
                    U.setStorage('Live_button', cacheData.data['Live_button']);
                    U.setStorage('live_left_upper_img', cacheData.data['live_left_upper_img']);
                    U.setStorage('live_left_upper_url', cacheData.data['live_left_upper_url']);
                    U.setStorage('live_right_upper_img', cacheData.data['live_right_upper_img']);
                    U.setStorage('live_right_upper_url', cacheData.data['live_right_upper_url']);
                    U.setStorage('live_right_lower_img', cacheData.data['live_right_lower_img']);
                    U.setStorage('live_right_lower_url', cacheData.data['live_right_lower_url']);
                    U.setStorage('live_benner_img', cacheData.data['live_benner_img']);
                    U.setStorage('live_benner_url', cacheData.data['live_benner_url']);
                    if (api.systemType == 'ios') {
                        U.setStorage('app_ios_new_Version', cacheData.data['Ios_Updated_version']);
                        U.setStorage('app_ios_new_Version_switch', cacheData.data['Ios_Updated_switch']);
                        U.setStorage('app_ios_down', cacheData.data['app_ios_down']);
                        U.setStorage('app_ios_content', cacheData.data['Ios_Updated_content'])
                    } else {
                        U.setStorage('app_android_new_Version', cacheData.data['Android_Updated_version']);
                        U.setStorage('app_android_new_Version_switch', cacheData.data['Android_Updated_switch']);
                        U.setStorage('app_android_apk_down', cacheData.data['app_android_apk_down']);
                        U.setStorage('app_android_content', cacheData.data['Android_Updated_content'])
                    } if (cacheData.data['artical_eject'] != '0') {
                        var artical_eject = cacheData.data['artical_eject'];
                        U.setStorage('artical_id', artical_eject['id']);
                        U.setStorage('artical_eject', artical_eject['eject']);
                        U.setStorage('artical_content', artical_eject['content']);
                        U.setStorage('artical_popup_rate', artical_eject['popup_rate'])
                    } else {
                        U.setStorage('artical_id', null);
                        U.setStorage('artical_eject', null);
                        U.setStorage('artical_content', null);
                        U.setStorage('artical_popup_rate', null)
                    }
                    U.setStorage('admin_nick_name', cacheData.data['admin_name']);
                    U.setStorage('admin_headimgurl', "https://i.loli.net/2019/10/06/gscrnq9Ydehj8pZ.png");
                    U.setStorage('exemption_from_declaration', cacheData.data['exemption_from_declaration']);
                    U.setStorage('alipay_up_agent_switch', cacheData.data['alipay_up_agent_switch']);
                    U.setStorage('search_api_url', cacheData.data['search_api_url']);
                    U.setStorage('iqy_play_decide', cacheData.data['iqy_play_decide']);
                    U.setStorage('tx_play_decide', cacheData.data['tx_play_decide']);
                    U.setStorage('yk_play_decide', cacheData.data['yk_play_decide']);
                    U.setStorage('sohu_play_decide', cacheData.data['sohu_play_decide']);
                    U.setStorage('leshi_play_decide', cacheData.data['leshi_play_decide']);
                    U.setStorage('m1905_play_decide', cacheData.data['m1905_play_decide']);
                    U.setStorage('mg_play_decide', cacheData.data['mg_play_decide']);
                    U.setStorage('migu_play_decide', cacheData.data['migu_play_decide']);
                    U.setStorage('pptv_play_decide', cacheData.data['pptv_play_decide']);
                    U.setStorage('fx_play_decide', cacheData.data['fx_play_decide']);
                    U.setStorage('launchImage', cacheData.data['launchImageAd_bottom']);
                    U.setStorage('launchImageAd', cacheData.data['launchImageAd']);
                    U.setStorage('launchImageAd_url', cacheData.data['launchImageAd_url']);
                    U.setStorage('launchImageAd_time', cacheData.data['launchImageAd_time']);
                    U.setStorage('launchImageAd_skip', cacheData.data['launchImageAd_skip']);
                    U.StartCacheImages()
                }
            })
        }
    };
    window.U = U
})(window);