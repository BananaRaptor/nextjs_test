_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    "/0+H": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(i.default.useContext(c.AmpStateContext));
        });
      var r,
        i = (r = n("q1tI")) && r.__esModule ? r : { default: r },
        c = n("lwAK");
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          i = void 0 !== r && r,
          c = e.hasQuery,
          a = void 0 !== c && c;
        return n || (i && a);
      }
    },
    "8Kt/": function (e, t, n) {
      "use strict";
      n("lSNA");
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var r,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var c = r ? Object.getOwnPropertyDescriptor(e, i) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(n, i, c)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        c = (r = n("Xuae")) && r.__esModule ? r : { default: r },
        a = n("lwAK"),
        s = n("FYa8"),
        o = n("/0+H");
      function l() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var f = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var n = i.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (i) {
                var c = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var s = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(s) ? (c = !1) : e.add(s);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (c = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (var o = 0, l = f.length; o < l; o++) {
                      var u = f[o];
                      if (i.props.hasOwnProperty(u))
                        if ("charSet" === u) n.has(u) ? (c = !1) : n.add(u);
                        else {
                          var d = i.props[u],
                            h = r[u] || new Set();
                          ("name" === u && a) || !h.has(d)
                            ? (h.add(d), (r[u] = h))
                            : (c = !1);
                        }
                    }
                }
                return c;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return i.default.cloneElement(e, { key: n });
          });
      }
      function j(e) {
        var t = e.children,
          n = (0, i.useContext)(a.AmpStateContext),
          r = (0, i.useContext)(s.HeadManagerContext);
        return i.default.createElement(
          c.default,
          {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: (0, o.isInAmpMode)(n),
          },
          t
        );
      }
      j.rewind = function () {};
      var b = j;
      t.default = b;
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    Ijbi: function (e, t, n) {
      var r = n("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    RIqP: function (e, t, n) {
      var r = n("Ijbi"),
        i = n("EbDI"),
        c = n("ZhPi"),
        a = n("Bnag");
      e.exports = function (e) {
        return r(e) || i(e) || c(e) || a();
      };
    },
    RNiq: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("nKUr"),
        i = n("g4pe"),
        c = n.n(i),
        a =
          (n("YFqc"),
          function (e) {
            var t = e.children;
            return Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(c.a, {
                  children: Object(r.jsx)("title", {
                    children: "Admin - Free Bulma template",
                  }),
                }),
                Object(r.jsxs)("nav", {
                  className: "navbar is-primary",
                  children: [
                    Object(r.jsxs)("div", {
                      className: "navbar-brand",
                      children: [
                        Object(r.jsx)("a", {
                          className: "navbar-item brand-text",
                          href: "../index.html",
                          children: "Test",
                        }),
                        Object(r.jsxs)("div", {
                          className: "navbar-burger burger",
                          "data-target": "navMenu",
                          children: [
                            Object(r.jsx)("span", {}),
                            Object(r.jsx)("span", {}),
                            Object(r.jsx)("span", {}),
                          ],
                        }),
                      ],
                    }),
                    Object(r.jsx)("div", {
                      id: "navMenu",
                      className: "navbar-menu",
                      children: Object(r.jsxs)("div", {
                        className: "navbar-start",
                        children: [
                          Object(r.jsx)("a", {
                            className: "navbar-item",
                            href: "admin.html",
                            children: "Home",
                          }),
                          Object(r.jsx)("a", {
                            className: "navbar-item",
                            href: "admin.html",
                            children: "Orders",
                          }),
                          Object(r.jsx)("a", {
                            className: "navbar-item",
                            href: "admin.\u02dahtml",
                            children: "Payments",
                          }),
                          Object(r.jsx)("a", {
                            className: "navbar-item",
                            href: "admin.html",
                            children: "Exceptions",
                          }),
                          Object(r.jsx)("a", {
                            className: "navbar-item",
                            href: "admin.html",
                            children: "Reports",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(r.jsxs)("div", {
                  className: "columns",
                  children: [
                    Object(r.jsx)("div", {
                      className: "column is-2 is-sidebar-menu is-hidden-mobile",
                      children: Object(r.jsxs)("aside", {
                        className: "menu",
                        children: [
                          Object(r.jsx)("p", {
                            className: "menu-label",
                            children: "General",
                          }),
                          Object(r.jsxs)("ul", {
                            className: "menu-list",
                            children: [
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Dashboard",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Customers",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Other",
                                }),
                              }),
                            ],
                          }),
                          Object(r.jsx)("p", {
                            className: "menu-label",
                            children: "Administration",
                          }),
                          Object(r.jsxs)("ul", {
                            className: "menu-list",
                            children: [
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Team Settings",
                                }),
                              }),
                              Object(r.jsxs)("li", {
                                children: [
                                  Object(r.jsx)("a", {
                                    children: "Manage Your Team",
                                  }),
                                  Object(r.jsxs)("ul", {
                                    children: [
                                      Object(r.jsx)("li", {
                                        children: Object(r.jsx)("a", {
                                          children: "Members",
                                        }),
                                      }),
                                      Object(r.jsx)("li", {
                                        children: Object(r.jsx)("a", {
                                          children: "Plugins",
                                        }),
                                      }),
                                      Object(r.jsx)("li", {
                                        children: Object(r.jsx)("a", {
                                          children: "Add a member",
                                        }),
                                      }),
                                      Object(r.jsx)("li", {
                                        children: Object(r.jsx)("a", {
                                          children: "Remove a member",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Invitations",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children:
                                    "Cloud Storage Environment Settings",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Authentication",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Payments",
                                }),
                              }),
                            ],
                          }),
                          Object(r.jsx)("p", {
                            className: "menu-label",
                            children: "Transactions",
                          }),
                          Object(r.jsxs)("ul", {
                            className: "menu-list",
                            children: [
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Payments",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Transfers",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Balance",
                                }),
                              }),
                              Object(r.jsx)("li", {
                                children: Object(r.jsx)("a", {
                                  children: "Reports",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(r.jsx)("div", {
                      className: "column is-10",
                      children: t,
                    }),
                  ],
                }),
              ],
            });
          }),
        s = n("q1tI"),
        o = Object.prototype.hasOwnProperty;
      var l = new WeakMap(),
        u = 0;
      var d = (function () {
          function e(e) {
            void 0 === e && (e = {}),
              (this.cache = new Map(Object.entries(e))),
              (this.subs = []);
          }
          return (
            (e.prototype.get = function (e) {
              var t = this.serializeKey(e)[0];
              return this.cache.get(t);
            }),
            (e.prototype.set = function (e, t) {
              var n = this.serializeKey(e)[0];
              this.cache.set(n, t), this.notify();
            }),
            (e.prototype.keys = function () {
              return Array.from(this.cache.keys());
            }),
            (e.prototype.has = function (e) {
              var t = this.serializeKey(e)[0];
              return this.cache.has(t);
            }),
            (e.prototype.clear = function () {
              this.cache.clear(), this.notify();
            }),
            (e.prototype.delete = function (e) {
              var t = this.serializeKey(e)[0];
              this.cache.delete(t), this.notify();
            }),
            (e.prototype.serializeKey = function (e) {
              var t = null;
              if ("function" === typeof e)
                try {
                  e = e();
                } catch (n) {
                  e = "";
                }
              return (
                Array.isArray(e)
                  ? ((t = e),
                    (e = (function (e) {
                      if (!e.length) return "";
                      for (var t = "arg", n = 0; n < e.length; ++n)
                        if (null !== e[n]) {
                          var r = void 0;
                          "object" !== typeof e[n] && "function" !== typeof e[n]
                            ? (r =
                                "string" === typeof e[n]
                                  ? '"' + e[n] + '"'
                                  : String(e[n]))
                            : l.has(e[n])
                            ? (r = l.get(e[n]))
                            : ((r = u), l.set(e[n], u++)),
                            (t += "@" + r);
                        } else t += "@null";
                      return t;
                    })(e)))
                  : (e = String(e || "")),
                [e, t, e ? "err@" + e : "", e ? "validating@" + e : ""]
              );
            }),
            (e.prototype.subscribe = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new Error("Expected the listener to be a function.");
              var n = !0;
              return (
                this.subs.push(e),
                function () {
                  if (n) {
                    n = !1;
                    var r = t.subs.indexOf(e);
                    r > -1 &&
                      ((t.subs[r] = t.subs[t.subs.length - 1]),
                      t.subs.length--);
                  }
                }
              );
            }),
            (e.prototype.notify = function () {
              for (var e = 0, t = this.subs; e < t.length; e++) {
                (0, t[e])();
              }
            }),
            e
          );
        })(),
        f = !0,
        h = {
          isOnline: function () {
            return f;
          },
          isDocumentVisible: function () {
            return (
              "undefined" === typeof document ||
              void 0 === document.visibilityState ||
              "hidden" !== document.visibilityState
            );
          },
          fetcher: function (e) {
            return fetch(e).then(function (e) {
              return e.json();
            });
          },
          registerOnFocus: function (e) {
            "undefined" !== typeof window &&
              void 0 !== window.addEventListener &&
              "undefined" !== typeof document &&
              void 0 !== document.addEventListener &&
              (document.addEventListener(
                "visibilitychange",
                function () {
                  return e();
                },
                !1
              ),
              window.addEventListener(
                "focus",
                function () {
                  return e();
                },
                !1
              ));
          },
          registerOnReconnect: function (e) {
            "undefined" !== typeof window &&
              void 0 !== window.addEventListener &&
              (window.addEventListener(
                "online",
                function () {
                  (f = !0), e();
                },
                !1
              ),
              window.addEventListener(
                "offline",
                function () {
                  return (f = !1);
                },
                !1
              ));
          },
        },
        j = function () {
          return (j =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        b = new d();
      var p =
          "undefined" !== typeof window &&
          navigator.connection &&
          -1 !== ["slow-2g", "2g"].indexOf(navigator.connection.effectiveType),
        v = j(
          {
            onLoadingSlow: function () {},
            onSuccess: function () {},
            onError: function () {},
            onErrorRetry: function (e, t, n, r, i) {
              if (
                n.isDocumentVisible() &&
                !(
                  "number" === typeof n.errorRetryCount &&
                  i.retryCount > n.errorRetryCount
                )
              ) {
                var c = Math.min(i.retryCount, 8),
                  a =
                    ~~((Math.random() + 0.5) * (1 << c)) * n.errorRetryInterval;
                setTimeout(r, a, i);
              }
            },
            errorRetryInterval: 1e3 * (p ? 10 : 5),
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: 1e3 * (p ? 5 : 3),
            refreshInterval: 0,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            refreshWhenHidden: !1,
            refreshWhenOffline: !1,
            shouldRetryOnError: !0,
            suspense: !1,
            compare: function e(t, n) {
              var r, i;
              if (t === n) return !0;
              if (t && n && (r = t.constructor) === n.constructor) {
                if (r === Date) return t.getTime() === n.getTime();
                if (r === RegExp) return t.toString() === n.toString();
                if (r === Array) {
                  if ((i = t.length) === n.length)
                    for (; i-- && e(t[i], n[i]); );
                  return -1 === i;
                }
                if (!r || "object" === typeof t) {
                  for (r in ((i = 0), t)) {
                    if (o.call(t, r) && ++i && !o.call(n, r)) return !1;
                    if (!(r in n) || !e(t[r], n[r])) return !1;
                  }
                  return Object.keys(n).length === i;
                }
              }
              return t !== t && n !== n;
            },
            isPaused: function () {
              return !1;
            },
          },
          h
        ),
        O =
          "undefined" === typeof window ||
          !!(
            "undefined" !== typeof Deno &&
            Deno &&
            Deno.version &&
            Deno.version.deno
          ),
        m = O
          ? null
          : window.requestAnimationFrame
          ? function (e) {
              return window.requestAnimationFrame(e);
            }
          : function (e) {
              return setTimeout(e, 1);
            },
        x = O ? s.useEffect : s.useLayoutEffect,
        y = Object(s.createContext)({});
      y.displayName = "SWRConfigContext";
      var g = y,
        w = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, c) {
            function a(e) {
              try {
                o(r.next(e));
              } catch (t) {
                c(t);
              }
            }
            function s(e) {
              try {
                o(r.throw(e));
              } catch (t) {
                c(t);
              }
            }
            function o(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            o((r = r.apply(e, t || [])).next());
          });
        },
        M = function (e, t) {
          var n,
            r,
            i,
            c,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (c = { next: s(0), throw: s(1), return: s(2) }),
            "function" === typeof Symbol &&
              (c[Symbol.iterator] = function () {
                return this;
              }),
            c
          );
          function s(c) {
            return function (s) {
              return (function (c) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & c[0]
                            ? r.return
                            : c[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, c[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                      case 0:
                      case 1:
                        i = c;
                        break;
                      case 4:
                        return a.label++, { value: c[1], done: !1 };
                      case 5:
                        a.label++, (r = c[1]), (c = [0]);
                        continue;
                      case 7:
                        (c = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === c[0] || 2 === c[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === c[0] &&
                          (!i || (c[1] > i[0] && c[1] < i[3]))
                        ) {
                          a.label = c[1];
                          break;
                        }
                        if (6 === c[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = c);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(c);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    c = t.call(e, a);
                  } catch (s) {
                    (c = [6, s]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & c[0]) throw c[1];
                return { value: c[0] ? c[1] : void 0, done: !0 };
              })([c, s]);
            };
          }
        },
        E = {},
        k = {},
        I = {},
        C = {},
        N = {},
        R = {},
        S = {},
        P = (function () {
          var e = 0;
          return function () {
            return ++e;
          };
        })();
      if (!O) {
        var _ = function (e) {
          if (v.isDocumentVisible() && v.isOnline())
            for (var t in e) e[t][0] && e[t][0]();
        };
        "function" === typeof v.registerOnFocus &&
          v.registerOnFocus(function () {
            return _(I);
          }),
          "function" === typeof v.registerOnReconnect &&
            v.registerOnReconnect(function () {
              return _(C);
            });
      }
      var A = function (e, t) {
          void 0 === t && (t = !0);
          var n = b.serializeKey(e),
            r = n[0],
            i = n[2],
            c = n[3];
          if (!r) return Promise.resolve();
          var a = N[r];
          if (r && a) {
            for (
              var s = b.get(r), o = b.get(i), l = b.get(c), u = [], d = 0;
              d < a.length;
              ++d
            )
              u.push(a[d](t, s, o, l, d > 0));
            return Promise.all(u).then(function () {
              return b.get(r);
            });
          }
          return Promise.resolve(b.get(r));
        },
        T = function (e, t, n, r) {
          var i = N[e];
          if (e && i) for (var c = 0; c < i.length; ++c) i[c](!1, t, n, r);
        },
        D = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            w(void 0, void 0, void 0, function () {
              var r, i, c, a, s, o, l, u, d, f, h, j, p;
              return M(this, function (v) {
                switch (v.label) {
                  case 0:
                    if (((r = b.serializeKey(e)), (i = r[0]), (c = r[2]), !i))
                      return [2];
                    if ("undefined" === typeof t) return [2, A(e, n)];
                    if (
                      ((R[i] = P() - 1),
                      (S[i] = 0),
                      (a = R[i]),
                      (s = k[i]),
                      (u = !1),
                      t && "function" === typeof t)
                    )
                      try {
                        t = t(b.get(i));
                      } catch (O) {
                        (t = void 0), (l = O);
                      }
                    if (!t || "function" !== typeof t.then) return [3, 5];
                    (u = !0), (v.label = 1);
                  case 1:
                    return v.trys.push([1, 3, , 4]), [4, t];
                  case 2:
                    return (o = v.sent()), [3, 4];
                  case 3:
                    return (d = v.sent()), (l = d), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    (o = t), (v.label = 6);
                  case 6:
                    if (
                      (f = function () {
                        if (a !== R[i] || s !== k[i]) {
                          if (l) throw l;
                          return !0;
                        }
                      })()
                    )
                      return [2, o];
                    if (
                      ("undefined" !== typeof o && b.set(i, o),
                      b.set(c, l),
                      (S[i] = P() - 1),
                      !u && f())
                    )
                      return [2, o];
                    if ((h = N[i])) {
                      for (j = [], p = 0; p < h.length; ++p)
                        j.push(h[p](!!n, o, l, void 0, p > 0));
                      return [
                        2,
                        Promise.all(j).then(function () {
                          if (l) throw l;
                          return b.get(i);
                        }),
                      ];
                    }
                    if (l) throw l;
                    return [2, o];
                }
              });
            })
          );
        };
      Object.defineProperty(g.Provider, "default", { value: v });
      g.Provider;
      var L = function () {
        for (var e = this, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        var r = t[0],
          i = Object.assign(
            {},
            v,
            Object(s.useContext)(g),
            t.length > 2
              ? t[2]
              : 2 === t.length && "object" === typeof t[1]
              ? t[1]
              : {}
          ),
          c =
            t.length > 2 ||
            (2 === t.length && "function" === typeof t[1]) ||
            null === t[1]
              ? t[1]
              : i.fetcher,
          a = b.serializeKey(r),
          o = a[0],
          l = a[1],
          u = a[2],
          d = a[3],
          f = Object(s.useRef)(i);
        x(function () {
          f.current = i;
        });
        var h = function () {
            return (
              i.revalidateOnMount ||
              (!i.initialData && void 0 === i.revalidateOnMount)
            );
          },
          j = function () {
            var e = b.get(o);
            return "undefined" === typeof e ? i.initialData : e;
          },
          p = function () {
            return !!b.get(d) || (o && h());
          },
          y = j(),
          _ = b.get(u),
          A = p(),
          L = Object(s.useRef)({ data: !1, error: !1, isValidating: !1 }),
          V = Object(s.useRef)({ data: y, error: _, isValidating: A });
        Object(s.useDebugValue)(V.current.data);
        var q,
          H,
          K = Object(s.useState)({})[1],
          F = Object(s.useCallback)(function (e) {
            var t = !1;
            for (var n in e)
              V.current[n] !== e[n] &&
                ((V.current[n] = e[n]), L.current[n] && (t = !0));
            if (t) {
              if (W.current || !U.current) return;
              K({});
            }
          }, []),
          W = Object(s.useRef)(!1),
          z = Object(s.useRef)(o),
          U = Object(s.useRef)(!1),
          J = Object(s.useCallback)(
            function (e) {
              for (var t, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
              W.current ||
                (U.current &&
                  o === z.current &&
                  (t = f.current)[e].apply(t, n));
            },
            [o]
          ),
          B = Object(s.useCallback)(function (e, t) {
            return D(z.current, e, t);
          }, []),
          Y = function (e, t) {
            return (
              e[o] ? e[o].push(t) : (e[o] = [t]),
              function () {
                var n = e[o],
                  r = n.indexOf(t);
                r >= 0 && ((n[r] = n[n.length - 1]), n.pop());
              }
            );
          },
          X = Object(s.useCallback)(
            function (t) {
              return (
                void 0 === t && (t = {}),
                w(e, void 0, void 0, function () {
                  var e, n, r, a, s, h, j, p, v, O;
                  return M(this, function (m) {
                    switch (m.label) {
                      case 0:
                        if (!o || !c) return [2, !1];
                        if (W.current) return [2, !1];
                        if (f.current.isPaused()) return [2, !1];
                        (e = t.retryCount),
                          (n = void 0 === e ? 0 : e),
                          (r = t.dedupe),
                          (a = void 0 !== r && r),
                          (s = !0),
                          (h = "undefined" !== typeof E[o] && a),
                          (m.label = 1);
                      case 1:
                        return (
                          m.trys.push([1, 6, , 7]),
                          F({ isValidating: !0 }),
                          b.set(d, !0),
                          h || T(o, V.current.data, V.current.error, !0),
                          (j = void 0),
                          (p = void 0),
                          h ? ((p = k[o]), [4, E[o]]) : [3, 3]
                        );
                      case 2:
                        return (j = m.sent()), [3, 5];
                      case 3:
                        return (
                          i.loadingTimeout &&
                            !b.get(o) &&
                            setTimeout(function () {
                              s && J("onLoadingSlow", o, i);
                            }, i.loadingTimeout),
                          (E[o] = null !== l ? c.apply(void 0, l) : c(o)),
                          (k[o] = p = P()),
                          [4, E[o]]
                        );
                      case 4:
                        (j = m.sent()),
                          setTimeout(function () {
                            delete E[o], delete k[o];
                          }, i.dedupingInterval),
                          J("onSuccess", j, o, i),
                          (m.label = 5);
                      case 5:
                        return k[o] > p
                          ? [2, !1]
                          : R[o] && (p <= R[o] || p <= S[o] || 0 === S[o])
                          ? (F({ isValidating: !1 }), [2, !1])
                          : (b.set(u, void 0),
                            b.set(d, !1),
                            (v = { isValidating: !1 }),
                            "undefined" !== typeof V.current.error &&
                              (v.error = void 0),
                            i.compare(V.current.data, j) ||
                              ((v.data = j), b.set(o, j)),
                            F(v),
                            h || T(o, j, v.error, !1),
                            [3, 7]);
                      case 6:
                        return (
                          (O = m.sent()),
                          delete E[o],
                          delete k[o],
                          f.current.isPaused()
                            ? (F({ isValidating: !1 }), [2, !1])
                            : (b.set(u, O),
                              V.current.error !== O &&
                                (F({ isValidating: !1, error: O }),
                                h || T(o, void 0, O, !1)),
                              J("onError", O, o, i),
                              i.shouldRetryOnError &&
                                J("onErrorRetry", O, o, i, X, {
                                  retryCount: n + 1,
                                  dedupe: !0,
                                }),
                              [3, 7])
                        );
                      case 7:
                        return (s = !1), [2, !0];
                    }
                  });
                })
              );
            },
            [o]
          );
        if (
          (x(
            function () {
              if (o) {
                W.current = !1;
                var e = U.current;
                U.current = !0;
                var t = V.current.data,
                  n = j();
                (z.current = o), i.compare(t, n) || F({ data: n });
                var r = function () {
                  return X({ dedupe: !0 });
                };
                (e || h()) && ("undefined" === typeof n || O ? r() : m(r));
                var c = !1,
                  a = Y(I, function () {
                    !c &&
                      f.current.revalidateOnFocus &&
                      ((c = !0),
                      r(),
                      setTimeout(function () {
                        return (c = !1);
                      }, f.current.focusThrottleInterval));
                  }),
                  s = Y(C, function () {
                    f.current.revalidateOnReconnect && r();
                  }),
                  l = Y(N, function (e, t, n, c, a) {
                    void 0 === e && (e = !0), void 0 === a && (a = !0);
                    var s = {},
                      o = !1;
                    return (
                      "undefined" === typeof t ||
                        i.compare(V.current.data, t) ||
                        ((s.data = t), (o = !0)),
                      V.current.error !== n && ((s.error = n), (o = !0)),
                      "undefined" !== typeof c &&
                        V.current.isValidating !== c &&
                        ((s.isValidating = c), (o = !0)),
                      o && F(s),
                      !!e && (a ? r() : X())
                    );
                  });
                return function () {
                  (F = function () {
                    return null;
                  }),
                    (W.current = !0),
                    a(),
                    s(),
                    l();
                };
              }
            },
            [o, X]
          ),
          x(
            function () {
              var t = null,
                n = function () {
                  return w(e, void 0, void 0, function () {
                    return M(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return V.current.error ||
                            (!f.current.refreshWhenHidden &&
                              !f.current.isDocumentVisible()) ||
                            (!f.current.refreshWhenOffline &&
                              !f.current.isOnline())
                            ? [3, 2]
                            : [4, X({ dedupe: !0 })];
                        case 1:
                          e.sent(), (e.label = 2);
                        case 2:
                          return (
                            f.current.refreshInterval &&
                              t &&
                              (t = setTimeout(n, f.current.refreshInterval)),
                            [2]
                          );
                      }
                    });
                  });
                };
              return (
                f.current.refreshInterval &&
                  (t = setTimeout(n, f.current.refreshInterval)),
                function () {
                  t && (clearTimeout(t), (t = null));
                }
              );
            },
            [i.refreshInterval, i.refreshWhenHidden, i.refreshWhenOffline, X]
          ),
          i.suspense)
        ) {
          if (
            ((q = b.get(o)),
            (H = b.get(u)),
            "undefined" === typeof q && (q = y),
            "undefined" === typeof H && (H = _),
            "undefined" === typeof q && "undefined" === typeof H)
          ) {
            if ((E[o] || X(), E[o] && "function" === typeof E[o].then))
              throw E[o];
            q = E[o];
          }
          if ("undefined" === typeof q && H) throw H;
        }
        var G = Object(s.useMemo)(
          function () {
            var e = { revalidate: X, mutate: B };
            return (
              Object.defineProperties(e, {
                error: {
                  get: function () {
                    return (
                      (L.current.error = !0),
                      i.suspense ? H : z.current === o ? V.current.error : _
                    );
                  },
                  enumerable: !0,
                },
                data: {
                  get: function () {
                    return (
                      (L.current.data = !0),
                      i.suspense ? q : z.current === o ? V.current.data : y
                    );
                  },
                  enumerable: !0,
                },
                isValidating: {
                  get: function () {
                    return (
                      (L.current.isValidating = !0),
                      !!o && V.current.isValidating
                    );
                  },
                  enumerable: !0,
                },
              }),
              e
            );
          },
          [X, y, _, B, o, i.suspense, H, q]
        );
        return G;
      };
      var V = L,
        q = function (e) {
          var t = e.text;
          return Object(r.jsxs)("tr", {
            children: [
              Object(r.jsx)("td", {
                width: "5%",
                children: Object(r.jsx)("i", { className: "fa fa-bell-o" }),
              }),
              Object(r.jsx)("td", { children: t }),
              Object(r.jsx)("td", {
                className: "level-right",
                children: Object(r.jsx)("a", {
                  className: "button is-small is-primary",
                  href: "#",
                  children: "Action",
                }),
              }),
            ],
          });
        },
        H = function () {
          return fetch.apply(void 0, arguments).then(function (e) {
            return e.json();
          });
        },
        K = function (e) {
          e.children;
          var t = V("http://ron-swanson-quotes.herokuapp.com/v2/quotes/12", H),
            n = t.data;
          return t.error
            ? Object(r.jsx)("div", { children: "failed to load" })
            : n
            ? (console.log(n),
              Object(r.jsx)("table", {
                className: "table is-fullwidth is-striped",
                children: Object(r.jsx)("tbody", {
                  children: n.map(function (e) {
                    return Object(r.jsx)(q, { text: e });
                  }),
                }),
              }))
            : Object(r.jsx)("div", { children: "loading..." });
        },
        F = function () {
          return fetch.apply(void 0, arguments).then(function (e) {
            return e.json();
          });
        },
        W = function (e) {
          e.children;
          var t = V("https://jsonplaceholder.typicode.com/users/1", F),
            n = t.data;
          return t.error
            ? Object(r.jsx)("div", { children: "failed to load" })
            : n
            ? (console.log(n),
              Object(r.jsxs)("div", {
                children: [
                  Object(r.jsx)("section", {
                    class: "hero is-info welcome is-small",
                    children: Object(r.jsx)("div", {
                      class: "hero-body",
                      children: Object(r.jsxs)("div", {
                        class: "container",
                        children: [
                          Object(r.jsxs)("h1", {
                            class: "title",
                            children: ["Hello, ", n.name, "."],
                          }),
                          Object(r.jsx)("h2", {
                            class: "subtitle",
                            children: "I hope you are having a great day!",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(r.jsx)("section", {
                    class: "info-tiles",
                    children: Object(r.jsxs)("div", {
                      class: "tile is-ancestor has-text-centered",
                      children: [
                        Object(r.jsx)("div", {
                          class: "tile is-parent",
                          children: Object(r.jsxs)("article", {
                            class: "tile is-child box",
                            children: [
                              Object(r.jsx)("p", {
                                class: "title",
                                children: "439k",
                              }),
                              Object(r.jsx)("p", {
                                class: "subtitle",
                                children: "Users",
                              }),
                            ],
                          }),
                        }),
                        Object(r.jsx)("div", {
                          class: "tile is-parent",
                          children: Object(r.jsxs)("article", {
                            class: "tile is-child box",
                            children: [
                              Object(r.jsx)("p", {
                                class: "title",
                                children: "59k",
                              }),
                              Object(r.jsx)("p", {
                                class: "subtitle",
                                children: "Products",
                              }),
                            ],
                          }),
                        }),
                        Object(r.jsx)("div", {
                          class: "tile is-parent",
                          children: Object(r.jsxs)("article", {
                            class: "tile is-child box",
                            children: [
                              Object(r.jsx)("p", {
                                class: "title",
                                children: "3.4k",
                              }),
                              Object(r.jsx)("p", {
                                class: "subtitle",
                                children: "Open Orders",
                              }),
                            ],
                          }),
                        }),
                        Object(r.jsx)("div", {
                          class: "tile is-parent",
                          children: Object(r.jsxs)("article", {
                            class: "tile is-child box",
                            children: [
                              Object(r.jsx)("p", {
                                class: "title",
                                children: "19",
                              }),
                              Object(r.jsx)("p", {
                                class: "subtitle",
                                children: "Exceptions",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsxs)("div", {
                    class: "columns",
                    children: [
                      Object(r.jsx)("div", {
                        class: "column is-6",
                        children: Object(r.jsxs)("div", {
                          class: "card events-card",
                          children: [
                            Object(r.jsxs)("header", {
                              class: "card-header",
                              children: [
                                Object(r.jsx)("p", {
                                  class: "card-header-title",
                                  children: "Post",
                                }),
                                Object(r.jsx)("a", {
                                  href: "#",
                                  class: "card-header-icon",
                                  "aria-label": "more options",
                                  children: Object(r.jsx)("span", {
                                    class: "icon",
                                    children: Object(r.jsx)("i", {
                                      class: "fa fa-angle-down",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(r.jsx)("div", {
                              class: "card-table",
                              children: Object(r.jsx)("div", {
                                class: "content",
                                children: Object(r.jsx)(K, {}),
                              }),
                            }),
                            Object(r.jsx)("footer", {
                              class: "card-footer",
                              children: Object(r.jsx)("a", {
                                href: "#",
                                class: "card-footer-item",
                                children: "View All",
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(r.jsx)("div", {
                        class: "column is-6",
                        children: Object(r.jsxs)("div", {
                          class: "card",
                          children: [
                            Object(r.jsxs)("header", {
                              class: "card-header",
                              children: [
                                Object(r.jsx)("p", {
                                  class: "card-header-title",
                                  children: "Inventory Search",
                                }),
                                Object(r.jsx)("a", {
                                  href: "#",
                                  class: "card-header-icon",
                                  "aria-label": "more options",
                                  children: Object(r.jsx)("span", {
                                    class: "icon",
                                    children: Object(r.jsx)("i", {
                                      class: "fa fa-angle-down",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(r.jsx)("div", {
                              class: "card-content",
                              children: Object(r.jsx)("div", {
                                class: "content",
                                children: Object(r.jsxs)("div", {
                                  class:
                                    "control has-icons-left has-icons-right",
                                  children: [
                                    Object(r.jsx)("input", {
                                      class: "input is-large",
                                      type: "text",
                                      placeholder: "",
                                    }),
                                    Object(r.jsx)("span", {
                                      class: "icon is-medium is-left",
                                      children: Object(r.jsx)("i", {
                                        class: "fa fa-search",
                                      }),
                                    }),
                                    Object(r.jsx)("span", {
                                      class: "icon is-medium is-right",
                                      children: Object(r.jsx)("i", {
                                        class: "fa fa-check",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(r.jsxs)("div", {
                              class: "card",
                              children: [
                                Object(r.jsxs)("header", {
                                  class: "card-header",
                                  children: [
                                    Object(r.jsx)("p", {
                                      class: "card-header-title",
                                      children: "User Search",
                                    }),
                                    Object(r.jsx)("a", {
                                      href: "#",
                                      class: "card-header-icon",
                                      "aria-label": "more options",
                                      children: Object(r.jsx)("span", {
                                        class: "icon",
                                        children: Object(r.jsx)("i", {
                                          class: "fa fa-angle-down",
                                          "aria-hidden": "true",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                Object(r.jsx)("div", {
                                  class: "card-content",
                                  children: Object(r.jsx)("div", {
                                    class: "content",
                                    children: Object(r.jsxs)("div", {
                                      class:
                                        "control has-icons-left has-icons-right",
                                      children: [
                                        Object(r.jsx)("input", {
                                          class: "input is-large",
                                          type: "text",
                                          placeholder: "",
                                        }),
                                        Object(r.jsx)("span", {
                                          class: "icon is-medium is-left",
                                          children: Object(r.jsx)("i", {
                                            class: "fa fa-search",
                                          }),
                                        }),
                                        Object(r.jsx)("span", {
                                          class: "icon is-medium is-right",
                                          children: Object(r.jsx)("i", {
                                            class: "fa fa-check",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }))
            : Object(r.jsx)("div", { children: "loading..." });
        };
      t.default = function () {
        return Object(r.jsx)(a, {
          children: Object(r.jsx)("section", {
            className: "section",
            children: Object(r.jsxs)("div", {
              className: "container",
              children: [Object(r.jsx)(W, {}), Object(r.jsx)("random", {})],
            }),
          }),
        });
      };
    },
    Xuae: function (e, t, n) {
      "use strict";
      var r = n("RIqP"),
        i = n("lwsE"),
        c = n("W8MJ"),
        a = (n("PJYZ"), n("7W2i")),
        s = n("a1gu"),
        o = n("Nsbk");
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = o(e);
          if (t) {
            var i = o(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = n("q1tI"),
        d = (function (e) {
          a(n, e);
          var t = l(n);
          function n(e) {
            var c;
            return (
              i(this, n),
              ((c = t.call(this, e))._hasHeadManager = void 0),
              (c.emitChange = function () {
                c._hasHeadManager &&
                  c.props.headManager.updateHead(
                    c.props.reduceComponentsToState(
                      r(c.props.headManager.mountedInstances),
                      c.props
                    )
                  );
              }),
              (c._hasHeadManager =
                c.props.headManager && c.props.headManager.mountedInstances),
              c
            );
          }
          return (
            c(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(u.Component);
      t.default = d;
    },
    YFqc: function (e, t, n) {
      e.exports = n("cTJO");
    },
    cTJO: function (e, t, n) {
      "use strict";
      var r = n("J4zp"),
        i = n("284h");
      (t.__esModule = !0), (t.default = void 0);
      var c = i(n("q1tI")),
        a = n("elyg"),
        s = n("nOHt"),
        o = n("vNVm"),
        l = {};
      function u(e, t, n, r) {
        if (e && (0, a.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var i =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          l[t + "%" + n + (i ? "%" + i : "")] = !0;
        }
      }
      var d = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          i = (n && n.pathname) || "/",
          d = c.default.useMemo(
            function () {
              var t = (0, a.resolveHref)(i, e.href, !0),
                n = r(t, 2),
                c = n[0],
                s = n[1];
              return {
                href: c,
                as: e.as ? (0, a.resolveHref)(i, e.as) : s || c,
              };
            },
            [i, e.href, e.as]
          ),
          f = d.href,
          h = d.as,
          j = e.children,
          b = e.replace,
          p = e.shallow,
          v = e.scroll,
          O = e.locale;
        "string" === typeof j && (j = c.default.createElement("a", null, j));
        var m = c.Children.only(j),
          x = m && "object" === typeof m && m.ref,
          y = (0, o.useIntersection)({ rootMargin: "200px" }),
          g = r(y, 2),
          w = g[0],
          M = g[1],
          E = c.default.useCallback(
            function (e) {
              w(e),
                x &&
                  ("function" === typeof x
                    ? x(e)
                    : "object" === typeof x && (x.current = e));
            },
            [x, w]
          );
        (0, c.useEffect)(
          function () {
            var e = M && t && (0, a.isLocalURL)(f),
              r = "undefined" !== typeof O ? O : n && n.locale,
              i = l[f + "%" + h + (r ? "%" + r : "")];
            e && !i && u(n, f, h, { locale: r });
          },
          [h, f, M, O, t, n]
        );
        var k = {
          ref: E,
          onClick: function (e) {
            m.props &&
              "function" === typeof m.props.onClick &&
              m.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, i, c, s, o) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, a.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    t[i ? "replace" : "push"](n, r, {
                      shallow: c,
                      locale: o,
                      scroll: s,
                    }).then(function (e) {
                      e && s && document.body.focus();
                    }));
                })(e, n, f, h, b, p, v, O);
          },
          onMouseEnter: function (e) {
            (0, a.isLocalURL)(f) &&
              (m.props &&
                "function" === typeof m.props.onMouseEnter &&
                m.props.onMouseEnter(e),
              u(n, f, h, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === m.type && !("href" in m.props))) {
          var I = "undefined" !== typeof O ? O : n && n.locale,
            C =
              n &&
              n.isLocaleDomain &&
              (0, a.getDomainLocale)(
                h,
                I,
                n && n.locales,
                n && n.domainLocales
              );
          k.href =
            C ||
            (0, a.addBasePath)((0, a.addLocale)(h, I, n && n.defaultLocale));
        }
        return c.default.cloneElement(m, k);
      };
      t.default = d;
    },
    g4pe: function (e, t, n) {
      e.exports = n("8Kt/");
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    lwAK: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var i = ((r = n("q1tI")) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = i;
    },
    vNVm: function (e, t, n) {
      "use strict";
      var r = n("J4zp");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !a,
            o = (0, i.useRef)(),
            l = (0, i.useState)(!1),
            u = r(l, 2),
            d = u[0],
            f = u[1],
            h = (0, i.useCallback)(
              function (e) {
                o.current && (o.current(), (o.current = void 0)),
                  n ||
                    d ||
                    (e &&
                      e.tagName &&
                      (o.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || "",
                              n = s.get(t);
                            if (n) return n;
                            var r = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              s.set(
                                t,
                                (n = { id: t, observer: i, elements: r })
                              ),
                              n
                            );
                          })(n),
                          i = r.id,
                          c = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, t),
                          c.observe(e),
                          function () {
                            a.delete(e),
                              c.unobserve(e),
                              0 === a.size && (c.disconnect(), s.delete(i));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && f(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, d]
            );
          return (
            (0, i.useEffect)(
              function () {
                if (!a && !d) {
                  var e = (0, c.requestIdleCallback)(function () {
                    return f(!0);
                  });
                  return function () {
                    return (0, c.cancelIdleCallback)(e);
                  };
                }
              },
              [d]
            ),
            [h, d]
          );
        });
      var i = n("q1tI"),
        c = n("0G5g"),
        a = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    vlRD: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 0, 2, 1]],
]);
