!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('react'), require('react-dom')))
    : 'function' == typeof define && define.amd
    ? define('Jeri', ['react', 'react-dom'], e)
    : 'object' == typeof exports
    ? (exports.Jeri = e(require('react'), require('react-dom')))
    : (t.Jeri = e(t.React, t.ReactDOM));
})(window, function (t, e) {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = '/'),
      n((n.s = 16))
    );
  })([
    function (e, n) {
      e.exports = t;
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      for (var r = new Float32Array(16), i = 0; i < 4; ++i) r[i + 4 * i] = 1;
      var o = (function () {
        function t(t) {
          void 0 === t && (t = r), (this.data = new Float32Array(t));
        }
        return (
          (t.create = function () {
            return new t();
          }),
          (t.fromScaling = function (t, e) {
            if (3 !== e.length)
              throw new Error(
                'Matrix4x4.fromScaling requires a 3-dimentional vector as input'
              );
            e.forEach(function (e, n) {
              t.data[n + 4 * n] = e;
            });
          }),
          (t.multiply = function (t, e, n) {
            for (
              var r = new Float32Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ]),
                i = 0;
              i < 4;
              ++i
            )
              for (var o = 0; o < 4; ++o)
                for (var a = 0; a < 4; ++a)
                  r[4 * o + i] += e.data[4 * a + i] * n.data[4 * o + a];
            t.data = r;
          }),
          (t.scale = function (t, e, n) {
            if (3 !== n.length)
              throw new Error(
                'Matrix4x4.scale expects the third argument to have 3 numbers'
              );
            for (var r = new Float32Array(e.data), i = 0; i < 3; ++i)
              for (var o = 0; o < 4; ++o) r[4 * i + o] *= n[i];
            t.data = r;
          }),
          (t.translate = function (t, e, n) {
            if (3 !== n.length)
              throw new Error(
                'Matrix4x4.translate expects the third argument to have 3 numbers'
              );
            for (var r = new Float32Array(e.data), i = 0; i < 4; ++i)
              for (var o = 0; o < 3; ++o) r[12 + i] += e.data[4 * o + i] * n[o];
            t.data = r;
          }),
          (t.clone = function (e) {
            return new t(e.data);
          }),
          (t.invert = function (t, e) {
            var n = e.data,
              r = t.data;
            (r[0] =
              -n[7] * n[10] * n[13] +
              n[6] * n[11] * n[13] +
              n[7] * n[9] * n[14] -
              n[5] * n[11] * n[14] -
              n[6] * n[9] * n[15] +
              n[5] * n[10] * n[15]),
              (r[1] =
                n[3] * n[10] * n[13] -
                n[2] * n[11] * n[13] -
                n[3] * n[9] * n[14] +
                n[1] * n[11] * n[14] +
                n[2] * n[9] * n[15] -
                n[1] * n[10] * n[15]),
              (r[2] =
                -n[3] * n[6] * n[13] +
                n[2] * n[7] * n[13] +
                n[3] * n[5] * n[14] -
                n[1] * n[7] * n[14] -
                n[2] * n[5] * n[15] +
                n[1] * n[6] * n[15]),
              (r[3] =
                n[3] * n[6] * n[9] -
                n[2] * n[7] * n[9] -
                n[3] * n[5] * n[10] +
                n[1] * n[7] * n[10] +
                n[2] * n[5] * n[11] -
                n[1] * n[6] * n[11]),
              (r[4] =
                n[7] * n[10] * n[12] -
                n[6] * n[11] * n[12] -
                n[7] * n[8] * n[14] +
                n[4] * n[11] * n[14] +
                n[6] * n[8] * n[15] -
                n[4] * n[10] * n[15]),
              (r[5] =
                -n[3] * n[10] * n[12] +
                n[2] * n[11] * n[12] +
                n[3] * n[8] * n[14] -
                n[0] * n[11] * n[14] -
                n[2] * n[8] * n[15] +
                n[0] * n[10] * n[15]),
              (r[6] =
                n[3] * n[6] * n[12] -
                n[2] * n[7] * n[12] -
                n[3] * n[4] * n[14] +
                n[0] * n[7] * n[14] +
                n[2] * n[4] * n[15] -
                n[0] * n[6] * n[15]),
              (r[7] =
                -n[3] * n[6] * n[8] +
                n[2] * n[7] * n[8] +
                n[3] * n[4] * n[10] -
                n[0] * n[7] * n[10] -
                n[2] * n[4] * n[11] +
                n[0] * n[6] * n[11]),
              (r[8] =
                -n[7] * n[9] * n[12] +
                n[5] * n[11] * n[12] +
                n[7] * n[8] * n[13] -
                n[4] * n[11] * n[13] -
                n[5] * n[8] * n[15] +
                n[4] * n[9] * n[15]),
              (r[9] =
                n[3] * n[9] * n[12] -
                n[1] * n[11] * n[12] -
                n[3] * n[8] * n[13] +
                n[0] * n[11] * n[13] +
                n[1] * n[8] * n[15] -
                n[0] * n[9] * n[15]),
              (r[10] =
                -n[3] * n[5] * n[12] +
                n[1] * n[7] * n[12] +
                n[3] * n[4] * n[13] -
                n[0] * n[7] * n[13] -
                n[1] * n[4] * n[15] +
                n[0] * n[5] * n[15]),
              (r[11] =
                n[3] * n[5] * n[8] -
                n[1] * n[7] * n[8] -
                n[3] * n[4] * n[9] +
                n[0] * n[7] * n[9] +
                n[1] * n[4] * n[11] -
                n[0] * n[5] * n[11]),
              (r[12] =
                n[6] * n[9] * n[12] -
                n[5] * n[10] * n[12] -
                n[6] * n[8] * n[13] +
                n[4] * n[10] * n[13] +
                n[5] * n[8] * n[14] -
                n[4] * n[9] * n[14]),
              (r[13] =
                -n[2] * n[9] * n[12] +
                n[1] * n[10] * n[12] +
                n[2] * n[8] * n[13] -
                n[0] * n[10] * n[13] -
                n[1] * n[8] * n[14] +
                n[0] * n[9] * n[14]),
              (r[14] =
                n[2] * n[5] * n[12] -
                n[1] * n[6] * n[12] -
                n[2] * n[4] * n[13] +
                n[0] * n[6] * n[13] +
                n[1] * n[4] * n[14] -
                n[0] * n[5] * n[14]),
              (r[15] =
                -n[2] * n[5] * n[8] +
                n[1] * n[6] * n[8] +
                n[2] * n[4] * n[9] -
                n[0] * n[6] * n[9] -
                n[1] * n[4] * n[10] +
                n[0] * n[5] * n[10]);
            var i = n[0] * r[0] + n[1] * r[4] + n[2] * r[8] + n[3] * r[12];
            if (0 === i) throw new Error('Matrix is not invertible.');
            for (var o = 1 / i, a = 0; a < 16; ++a) r[a] *= o;
          }),
          t
        );
      })();
      e.Matrix4x4 = o;
      var a = (function () {
        function t() {
          this.data = new Float32Array([0, 0, 0, 0]);
        }
        return (
          (t.create = function () {
            return new t();
          }),
          (t.set = function (t, e, n, r, i) {
            (t.data[0] = e), (t.data[1] = n), (t.data[2] = r), (t.data[3] = i);
          }),
          (t.fromValues = function (e, n, r, i) {
            var o = new t();
            return t.set(o, e, n, r, i), o;
          }),
          (t.transformMat4 = function (t, e, n) {
            for (
              var r = e.data,
                i = n.data,
                o = new Float32Array([0, 0, 0, 0]),
                a = 0;
              a < 4;
              ++a
            )
              for (var u = 0; u < 4; ++u) o[a] += r[u] * i[4 * u + a];
            t.data = o;
          }),
          t
        );
      })();
      e.Vector4 = a;
    },
    function (t, e, n) {
      'use strict';
      n.r(e),
        function (t) {
          n.d(e, 'createGlobalStyle', function () {
            return ne;
          }),
            n.d(e, 'css', function () {
              return vt;
            }),
            n.d(e, 'isStyledComponent', function () {
              return A;
            }),
            n.d(e, 'keyframes', function () {
              return ie;
            }),
            n.d(e, 'ServerStyleSheet', function () {
              return qt;
            }),
            n.d(e, 'StyleSheetConsumer', function () {
              return Yt;
            }),
            n.d(e, 'StyleSheetContext', function () {
              return Xt;
            }),
            n.d(e, 'StyleSheetManager', function () {
              return Kt;
            }),
            n.d(e, 'ThemeConsumer', function () {
              return Ht;
            }),
            n.d(e, 'ThemeContext', function () {
              return Gt;
            }),
            n.d(e, 'ThemeProvider', function () {
              return Vt;
            }),
            n.d(e, 'withTheme', function () {
              return oe;
            }),
            n.d(
              e,
              '__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS',
              function () {
                return ae;
              }
            );
          var r = n(7),
            i = n.n(r),
            o = n(13),
            a = n.n(o),
            u = n(0),
            s = n.n(u),
            c = n(14),
            l = n(8),
            f = n(4),
            h = (n(26), n(6), n(15)),
            p = function (t, e) {
              for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
                n.push(e[r], t[r + 1]);
              return n;
            },
            d =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  },
            g = function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            },
            m = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            v =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              },
            y = function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            },
            b = function (t, e) {
              var n = {};
              for (var r in t)
                e.indexOf(r) >= 0 ||
                  (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
              return n;
            },
            _ = function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ('object' != typeof e && 'function' != typeof e)
                ? t
                : e;
            },
            w = function (t) {
              return (
                'object' === (void 0 === t ? 'undefined' : d(t)) &&
                t.constructor === Object
              );
            },
            x = Object.freeze([]),
            S = Object.freeze({});
          function E(t) {
            return 'function' == typeof t;
          }
          function T(t) {
            return t.displayName || t.name || 'Component';
          }
          function A(t) {
            return t && 'string' == typeof t.styledComponentId;
          }
          var C = (void 0 !== t && t.env.SC_ATTR) || 'data-styled',
            k = 'undefined' != typeof window && 'HTMLElement' in window,
            M =
              ('boolean' == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY) ||
              !1,
            R = {};
          var O = (function (t) {
              function e(n) {
                g(this, e);
                for (
                  var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1;
                  o < r;
                  o++
                )
                  i[o - 1] = arguments[o];
                var a = _(
                  this,
                  t.call(
                    this,
                    'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' +
                      n +
                      ' for more information. ' +
                      (i ? 'Additional arguments: ' + i.join(', ') : '')
                  )
                );
                return _(a);
              }
              return y(e, t), e;
            })(Error),
            I = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,
            j = function (t) {
              var e = '' + (t || ''),
                n = [];
              return (
                e.replace(I, function (t, e, r) {
                  return n.push({ componentId: e, matchIndex: r }), t;
                }),
                n.map(function (t, r) {
                  var i = t.componentId,
                    o = t.matchIndex,
                    a = n[r + 1];
                  return {
                    componentId: i,
                    cssFromDOM: a ? e.slice(o, a.matchIndex) : e.slice(o),
                  };
                })
              );
            },
            P = /^\s*\/\/.*$/gm,
            L = new i.a({
              global: !1,
              cascade: !0,
              keyframe: !1,
              prefix: !1,
              compress: !1,
              semicolon: !0,
            }),
            F = new i.a({
              global: !1,
              cascade: !0,
              keyframe: !1,
              prefix: !0,
              compress: !1,
              semicolon: !1,
            }),
            D = [],
            U = function (t) {
              if (-2 === t) {
                var e = D;
                return (D = []), e;
              }
            },
            N = a()(function (t) {
              D.push(t);
            }),
            B = void 0,
            z = void 0,
            W = void 0,
            $ = function (t, e, n) {
              return e > 0 &&
                -1 !== n.slice(0, e).indexOf(z) &&
                n.slice(e - z.length, e) !== z
                ? '.' + B
                : t;
            };
          F.use([
            function (t, e, n) {
              2 === t &&
                n.length &&
                n[0].lastIndexOf(z) > 0 &&
                (n[0] = n[0].replace(W, $));
            },
            N,
            U,
          ]),
            L.use([N, U]);
          function G(t, e, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : '&',
              i = t.join('').replace(P, ''),
              o = e && n ? n + ' ' + e + ' { ' + i + ' }' : i;
            return (
              (B = r),
              (z = e),
              (W = new RegExp('\\' + z + '\\b', 'g')),
              F(n || !e ? '' : e, o)
            );
          }
          var H = function () {
              return n.nc;
            },
            V = function (t, e, n) {
              n && ((t[e] || (t[e] = Object.create(null)))[n] = !0);
            },
            q = function (t, e) {
              t[e] = Object.create(null);
            },
            X = function (t) {
              return function (e, n) {
                return void 0 !== t[e] && t[e][n];
              };
            },
            Y = function (t) {
              var e = '';
              for (var n in t) e += Object.keys(t[n]).join(' ') + ' ';
              return e.trim();
            },
            K = function (t) {
              if (t.sheet) return t.sheet;
              for (var e = document.styleSheets.length, n = 0; n < e; n += 1) {
                var r = document.styleSheets[n];
                if (r.ownerNode === t) return r;
              }
              throw new O(10);
            },
            Z = function (t, e, n) {
              if (!e) return !1;
              var r = t.cssRules.length;
              try {
                t.insertRule(e, n <= r ? n : r);
              } catch (t) {
                return !1;
              }
              return !0;
            },
            J = function (t) {
              return '\n/* sc-component-id: ' + t + ' */\n';
            },
            Q = function (t, e) {
              for (var n = 0, r = 0; r <= e; r += 1) n += t[r];
              return n;
            },
            tt = function (t, e) {
              return function (n) {
                var r = H();
                return (
                  '<style ' +
                  [
                    r && 'nonce="' + r + '"',
                    C + '="' + Y(e) + '"',
                    'data-styled-version="4.2.0"',
                    n,
                  ]
                    .filter(Boolean)
                    .join(' ') +
                  '>' +
                  t() +
                  '</style>'
                );
              };
            },
            et = function (t, e) {
              return function () {
                var n,
                  r =
                    (((n = {})[C] = Y(e)),
                    (n['data-styled-version'] = '4.2.0'),
                    n),
                  i = H();
                return (
                  i && (r.nonce = i),
                  s.a.createElement(
                    'style',
                    v({}, r, { dangerouslySetInnerHTML: { __html: t() } })
                  )
                );
              };
            },
            nt = function (t) {
              return function () {
                return Object.keys(t);
              };
            },
            rt = function (t) {
              return document.createTextNode(J(t));
            },
            it = function t(e, n) {
              var r = void 0 === e ? Object.create(null) : e,
                i = void 0 === n ? Object.create(null) : n,
                o = function (t) {
                  var e = i[t];
                  return void 0 !== e ? e : (i[t] = ['']);
                },
                a = function () {
                  var t = '';
                  for (var e in i) {
                    var n = i[e][0];
                    n && (t += J(e) + n);
                  }
                  return t;
                };
              return {
                clone: function () {
                  var e = (function (t) {
                      var e = Object.create(null);
                      for (var n in t) e[n] = v({}, t[n]);
                      return e;
                    })(r),
                    n = Object.create(null);
                  for (var o in i) n[o] = [i[o][0]];
                  return t(e, n);
                },
                css: a,
                getIds: nt(i),
                hasNameForId: X(r),
                insertMarker: o,
                insertRules: function (t, e, n) {
                  (o(t)[0] += e.join(' ')), V(r, t, n);
                },
                removeRules: function (t) {
                  var e = i[t];
                  void 0 !== e && ((e[0] = ''), q(r, t));
                },
                sealed: !1,
                styleTag: null,
                toElement: et(a, r),
                toHTML: tt(a, r),
              };
            },
            ot = function (t, e, n, r, i) {
              if (k && !n) {
                var o = (function (t, e, n) {
                  var r = document.createElement('style');
                  r.setAttribute(C, ''),
                    r.setAttribute('data-styled-version', '4.2.0');
                  var i = H();
                  if (
                    (i && r.setAttribute('nonce', i),
                    r.appendChild(document.createTextNode('')),
                    t && !e)
                  )
                    t.appendChild(r);
                  else {
                    if (!e || !t || !e.parentNode) throw new O(6);
                    e.parentNode.insertBefore(r, n ? e : e.nextSibling);
                  }
                  return r;
                })(t, e, r);
                return M
                  ? (function (t, e) {
                      var n = Object.create(null),
                        r = Object.create(null),
                        i = void 0 !== e,
                        o = !1,
                        a = function (e) {
                          var i = r[e];
                          return void 0 !== i
                            ? i
                            : ((r[e] = rt(e)),
                              t.appendChild(r[e]),
                              (n[e] = Object.create(null)),
                              r[e]);
                        },
                        u = function () {
                          var t = '';
                          for (var e in r) t += r[e].data;
                          return t;
                        };
                      return {
                        clone: function () {
                          throw new O(5);
                        },
                        css: u,
                        getIds: nt(r),
                        hasNameForId: X(n),
                        insertMarker: a,
                        insertRules: function (t, r, u) {
                          for (
                            var s = a(t), c = [], l = r.length, f = 0;
                            f < l;
                            f += 1
                          ) {
                            var h = r[f],
                              p = i;
                            if (p && -1 !== h.indexOf('@import')) c.push(h);
                            else {
                              p = !1;
                              var d = f === l - 1 ? '' : ' ';
                              s.appendData('' + h + d);
                            }
                          }
                          V(n, t, u),
                            i &&
                              c.length > 0 &&
                              ((o = !0), e().insertRules(t + '-import', c));
                        },
                        removeRules: function (a) {
                          var u = r[a];
                          if (void 0 !== u) {
                            var s = rt(a);
                            t.replaceChild(s, u),
                              (r[a] = s),
                              q(n, a),
                              i && o && e().removeRules(a + '-import');
                          }
                        },
                        sealed: !1,
                        styleTag: t,
                        toElement: et(u, n),
                        toHTML: tt(u, n),
                      };
                    })(o, i)
                  : (function (t, e) {
                      var n = Object.create(null),
                        r = Object.create(null),
                        i = [],
                        o = void 0 !== e,
                        a = !1,
                        u = function (t) {
                          var e = r[t];
                          return void 0 !== e
                            ? e
                            : ((r[t] = i.length), i.push(0), q(n, t), r[t]);
                        },
                        s = function () {
                          var e = K(t).cssRules,
                            n = '';
                          for (var o in r) {
                            n += J(o);
                            for (
                              var a = r[o], u = Q(i, a), s = u - i[a];
                              s < u;
                              s += 1
                            ) {
                              var c = e[s];
                              void 0 !== c && (n += c.cssText);
                            }
                          }
                          return n;
                        };
                      return {
                        clone: function () {
                          throw new O(5);
                        },
                        css: s,
                        getIds: nt(r),
                        hasNameForId: X(n),
                        insertMarker: u,
                        insertRules: function (r, s, c) {
                          for (
                            var l = u(r),
                              f = K(t),
                              h = Q(i, l),
                              p = 0,
                              d = [],
                              g = s.length,
                              m = 0;
                            m < g;
                            m += 1
                          ) {
                            var v = s[m],
                              y = o;
                            y && -1 !== v.indexOf('@import')
                              ? d.push(v)
                              : Z(f, v, h + p) && ((y = !1), (p += 1));
                          }
                          o &&
                            d.length > 0 &&
                            ((a = !0), e().insertRules(r + '-import', d)),
                            (i[l] += p),
                            V(n, r, c);
                        },
                        removeRules: function (u) {
                          var s = r[u];
                          if (void 0 !== s) {
                            var c = i[s];
                            !(function (t, e, n) {
                              for (var r = e - n, i = e; i > r; i -= 1)
                                t.deleteRule(i);
                            })(K(t), Q(i, s) - 1, c),
                              (i[s] = 0),
                              q(n, u),
                              o && a && e().removeRules(u + '-import');
                          }
                        },
                        sealed: !1,
                        styleTag: t,
                        toElement: et(s, n),
                        toHTML: tt(s, n),
                      };
                    })(o, i);
              }
              return it();
            },
            at = /\s+/,
            ut = void 0;
          ut = k ? (M ? 40 : 1e3) : -1;
          var st = 0,
            ct = void 0,
            lt = (function () {
              function t() {
                var e = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : k
                      ? document.head
                      : null,
                  r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                g(this, t),
                  (this.getImportRuleTag = function () {
                    var t = e.importRuleTag;
                    if (void 0 !== t) return t;
                    var n = e.tags[0];
                    return (e.importRuleTag = ot(
                      e.target,
                      n ? n.styleTag : null,
                      e.forceServer,
                      !0
                    ));
                  }),
                  (st += 1),
                  (this.id = st),
                  (this.forceServer = r),
                  (this.target = r ? null : n),
                  (this.tagMap = {}),
                  (this.deferred = {}),
                  (this.rehydratedNames = {}),
                  (this.ignoreRehydratedNames = {}),
                  (this.tags = []),
                  (this.capacity = 1),
                  (this.clones = []);
              }
              return (
                (t.prototype.rehydrate = function () {
                  if (!k || this.forceServer) return this;
                  var t = [],
                    e = [],
                    n = !1,
                    r = document.querySelectorAll(
                      'style[' + C + '][data-styled-version="4.2.0"]'
                    ),
                    i = r.length;
                  if (!i) return this;
                  for (var o = 0; o < i; o += 1) {
                    var a = r[o];
                    n || (n = !!a.getAttribute('data-styled-streamed'));
                    for (
                      var u,
                        s = (a.getAttribute(C) || '').trim().split(at),
                        c = s.length,
                        l = 0;
                      l < c;
                      l += 1
                    )
                      (u = s[l]), (this.rehydratedNames[u] = !0);
                    e.push.apply(e, j(a.textContent)), t.push(a);
                  }
                  var f = e.length;
                  if (!f) return this;
                  var h = this.makeTag(null);
                  !(function (t, e, n) {
                    for (var r = 0, i = n.length; r < i; r += 1) {
                      var o = n[r],
                        a = o.componentId,
                        u = o.cssFromDOM,
                        s = L('', u);
                      t.insertRules(a, s);
                    }
                    for (var c = 0, l = e.length; c < l; c += 1) {
                      var f = e[c];
                      f.parentNode && f.parentNode.removeChild(f);
                    }
                  })(h, t, e),
                    (this.capacity = Math.max(1, ut - f)),
                    this.tags.push(h);
                  for (var p = 0; p < f; p += 1)
                    this.tagMap[e[p].componentId] = h;
                  return this;
                }),
                (t.reset = function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  ct = new t(void 0, e).rehydrate();
                }),
                (t.prototype.clone = function () {
                  var e = new t(this.target, this.forceServer);
                  return (
                    this.clones.push(e),
                    (e.tags = this.tags.map(function (t) {
                      for (
                        var n = t.getIds(), r = t.clone(), i = 0;
                        i < n.length;
                        i += 1
                      )
                        e.tagMap[n[i]] = r;
                      return r;
                    })),
                    (e.rehydratedNames = v({}, this.rehydratedNames)),
                    (e.deferred = v({}, this.deferred)),
                    e
                  );
                }),
                (t.prototype.sealAllTags = function () {
                  (this.capacity = 1),
                    this.tags.forEach(function (t) {
                      t.sealed = !0;
                    });
                }),
                (t.prototype.makeTag = function (t) {
                  var e = t ? t.styleTag : null;
                  return ot(
                    this.target,
                    e,
                    this.forceServer,
                    !1,
                    this.getImportRuleTag
                  );
                }),
                (t.prototype.getTagForId = function (t) {
                  var e = this.tagMap[t];
                  if (void 0 !== e && !e.sealed) return e;
                  var n = this.tags[this.tags.length - 1];
                  return (
                    (this.capacity -= 1),
                    0 === this.capacity &&
                      ((this.capacity = ut),
                      (n = this.makeTag(n)),
                      this.tags.push(n)),
                    (this.tagMap[t] = n)
                  );
                }),
                (t.prototype.hasId = function (t) {
                  return void 0 !== this.tagMap[t];
                }),
                (t.prototype.hasNameForId = function (t, e) {
                  if (
                    void 0 === this.ignoreRehydratedNames[t] &&
                    this.rehydratedNames[e]
                  )
                    return !0;
                  var n = this.tagMap[t];
                  return void 0 !== n && n.hasNameForId(t, e);
                }),
                (t.prototype.deferredInject = function (t, e) {
                  if (void 0 === this.tagMap[t]) {
                    for (var n = this.clones, r = 0; r < n.length; r += 1)
                      n[r].deferredInject(t, e);
                    this.getTagForId(t).insertMarker(t), (this.deferred[t] = e);
                  }
                }),
                (t.prototype.inject = function (t, e, n) {
                  for (var r = this.clones, i = 0; i < r.length; i += 1)
                    r[i].inject(t, e, n);
                  var o = this.getTagForId(t);
                  if (void 0 !== this.deferred[t]) {
                    var a = this.deferred[t].concat(e);
                    o.insertRules(t, a, n), (this.deferred[t] = void 0);
                  } else o.insertRules(t, e, n);
                }),
                (t.prototype.remove = function (t) {
                  var e = this.tagMap[t];
                  if (void 0 !== e) {
                    for (var n = this.clones, r = 0; r < n.length; r += 1)
                      n[r].remove(t);
                    e.removeRules(t),
                      (this.ignoreRehydratedNames[t] = !0),
                      (this.deferred[t] = void 0);
                  }
                }),
                (t.prototype.toHTML = function () {
                  return this.tags
                    .map(function (t) {
                      return t.toHTML();
                    })
                    .join('');
                }),
                (t.prototype.toReactElements = function () {
                  var t = this.id;
                  return this.tags.map(function (e, n) {
                    var r = 'sc-' + t + '-' + n;
                    return Object(u.cloneElement)(e.toElement(), { key: r });
                  });
                }),
                m(t, null, [
                  {
                    key: 'master',
                    get: function () {
                      return ct || (ct = new t().rehydrate());
                    },
                  },
                  {
                    key: 'instance',
                    get: function () {
                      return t.master;
                    },
                  },
                ]),
                t
              );
            })(),
            ft = (function () {
              function t(e, n) {
                var r = this;
                g(this, t),
                  (this.inject = function (t) {
                    t.hasNameForId(r.id, r.name) ||
                      t.inject(r.id, r.rules, r.name);
                  }),
                  (this.toString = function () {
                    throw new O(12, String(r.name));
                  }),
                  (this.name = e),
                  (this.rules = n),
                  (this.id = 'sc-keyframes-' + e);
              }
              return (
                (t.prototype.getName = function () {
                  return this.name;
                }),
                t
              );
            })(),
            ht = /([A-Z])/g,
            pt = /^ms-/;
          var dt = function (t) {
              return null == t || !1 === t || '' === t;
            },
            gt = function t(e, n) {
              var r = Object.keys(e)
                .filter(function (t) {
                  return !dt(e[t]);
                })
                .map(function (n) {
                  return w(e[n])
                    ? t(e[n], n)
                    : n.replace(ht, '-$1').toLowerCase().replace(pt, '-ms-') +
                        ': ' +
                        ((r = n),
                        null == (i = e[n]) || 'boolean' == typeof i || '' === i
                          ? ''
                          : 'number' != typeof i || 0 === i || r in c.a
                          ? String(i).trim()
                          : i + 'px') +
                        ';';
                })
                .join(' ');
              return n ? n + ' {\n  ' + r + '\n}' : r;
            };
          function mt(t, e, n) {
            if (Array.isArray(t)) {
              for (var r, i = [], o = 0, a = t.length; o < a; o += 1)
                null !== (r = mt(t[o], e, n)) &&
                  (Array.isArray(r) ? i.push.apply(i, r) : i.push(r));
              return i;
            }
            return dt(t)
              ? null
              : A(t)
              ? '.' + t.styledComponentId
              : E(t)
              ? 'function' != typeof (u = t) ||
                (u.prototype && u.prototype.isReactComponent) ||
                !e
                ? t
                : mt(t(e), e, n)
              : t instanceof ft
              ? n
                ? (t.inject(n), t.getName())
                : t
              : w(t)
              ? gt(t)
              : t.toString();
          }
          function vt(t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            return E(t) || w(t) ? mt(p(x, [t].concat(n))) : mt(p(t, n));
          }
          function yt(t) {
            for (var e, n = 0 | t.length, r = 0 | n, i = 0; n >= 4; )
              (e =
                1540483477 *
                  (65535 &
                    (e =
                      (255 & t.charCodeAt(i)) |
                      ((255 & t.charCodeAt(++i)) << 8) |
                      ((255 & t.charCodeAt(++i)) << 16) |
                      ((255 & t.charCodeAt(++i)) << 24))) +
                (((1540483477 * (e >>> 16)) & 65535) << 16)),
                (r =
                  (1540483477 * (65535 & r) +
                    (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
                  (e =
                    1540483477 * (65535 & (e ^= e >>> 24)) +
                    (((1540483477 * (e >>> 16)) & 65535) << 16))),
                (n -= 4),
                ++i;
            switch (n) {
              case 3:
                r ^= (255 & t.charCodeAt(i + 2)) << 16;
              case 2:
                r ^= (255 & t.charCodeAt(i + 1)) << 8;
              case 1:
                r =
                  1540483477 * (65535 & (r ^= 255 & t.charCodeAt(i))) +
                  (((1540483477 * (r >>> 16)) & 65535) << 16);
            }
            return (
              ((r =
                1540483477 * (65535 & (r ^= r >>> 13)) +
                (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
                (r >>> 15)) >>>
              0
            );
          }
          var bt = 52,
            _t = function (t) {
              return String.fromCharCode(t + (t > 25 ? 39 : 97));
            };
          function wt(t) {
            var e = '',
              n = void 0;
            for (n = t; n > bt; n = Math.floor(n / bt)) e = _t(n % bt) + e;
            return _t(n % bt) + e;
          }
          function xt(t, e) {
            for (var n = 0; n < t.length; n += 1) {
              var r = t[n];
              if (Array.isArray(r) && !xt(r, e)) return !1;
              if (E(r) && !A(r)) return !1;
            }
            return !e.some(function (t) {
              return (
                E(t) ||
                (function (t) {
                  for (var e in t) if (E(t[e])) return !0;
                  return !1;
                })(t)
              );
            });
          }
          var St,
            Et = !1,
            Tt = function (t) {
              return wt(yt(t));
            },
            At = (function () {
              function t(e, n, r) {
                g(this, t),
                  (this.rules = e),
                  (this.isStatic = !Et && xt(e, n)),
                  (this.componentId = r),
                  lt.master.hasId(r) || lt.master.deferredInject(r, []);
              }
              return (
                (t.prototype.generateAndInjectStyles = function (t, e) {
                  var n = this.isStatic,
                    r = this.componentId,
                    i = this.lastClassName;
                  if (k && n && 'string' == typeof i && e.hasNameForId(r, i))
                    return i;
                  var o = mt(this.rules, t, e),
                    a = Tt(this.componentId + o.join(''));
                  return (
                    e.hasNameForId(r, a) ||
                      e.inject(this.componentId, G(o, '.' + a, void 0, r), a),
                    (this.lastClassName = a),
                    a
                  );
                }),
                (t.generateName = function (t) {
                  return Tt(t);
                }),
                t
              );
            })(),
            Ct = function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : S,
                r = !!n && t.theme === n.theme;
              return t.theme && !r ? t.theme : e || n.theme;
            },
            kt = /[[\].#*$><+~=|^:(),"'`-]+/g,
            Mt = /(^-|-$)/g;
          function Rt(t) {
            return t.replace(kt, '-').replace(Mt, '');
          }
          function Ot(t) {
            return 'string' == typeof t && !0;
          }
          var It = {
              childContextTypes: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDerivedStateFromProps: !0,
              propTypes: !0,
              type: !0,
            },
            jt = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            Pt = (((St = {})[l.ForwardRef] = { $$typeof: !0, render: !0 }), St),
            Lt = Object.defineProperty,
            Ft = Object.getOwnPropertyNames,
            Dt = Object.getOwnPropertySymbols,
            Ut =
              void 0 === Dt
                ? function () {
                    return [];
                  }
                : Dt,
            Nt = Object.getOwnPropertyDescriptor,
            Bt = Object.getPrototypeOf,
            zt = Object.prototype,
            Wt = Array.prototype;
          function $t(t, e, n) {
            if ('string' != typeof e) {
              var r = Bt(e);
              r && r !== zt && $t(t, r, n);
              for (
                var i = Wt.concat(Ft(e), Ut(e)),
                  o = Pt[t.$$typeof] || It,
                  a = Pt[e.$$typeof] || It,
                  u = i.length,
                  s = void 0,
                  c = void 0;
                u--;

              )
                if (
                  ((c = i[u]),
                  !(jt[c] || (n && n[c]) || (a && a[c]) || (o && o[c])) &&
                    (s = Nt(e, c)))
                )
                  try {
                    Lt(t, c, s);
                  } catch (t) {}
              return t;
            }
            return t;
          }
          var Gt = Object(u.createContext)(),
            Ht = Gt.Consumer,
            Vt = (function (t) {
              function e(n) {
                g(this, e);
                var r = _(this, t.call(this, n));
                return (
                  (r.getContext = Object(f.default)(r.getContext.bind(r))),
                  (r.renderInner = r.renderInner.bind(r)),
                  r
                );
              }
              return (
                y(e, t),
                (e.prototype.render = function () {
                  return this.props.children
                    ? s.a.createElement(Gt.Consumer, null, this.renderInner)
                    : null;
                }),
                (e.prototype.renderInner = function (t) {
                  var e = this.getContext(this.props.theme, t);
                  return s.a.createElement(
                    Gt.Provider,
                    { value: e },
                    s.a.Children.only(this.props.children)
                  );
                }),
                (e.prototype.getTheme = function (t, e) {
                  if (E(t)) return t(e);
                  if (
                    null === t ||
                    Array.isArray(t) ||
                    'object' !== (void 0 === t ? 'undefined' : d(t))
                  )
                    throw new O(8);
                  return v({}, e, t);
                }),
                (e.prototype.getContext = function (t, e) {
                  return this.getTheme(t, e);
                }),
                e
              );
            })(u.Component),
            qt = (function () {
              function t() {
                g(this, t),
                  (this.masterSheet = lt.master),
                  (this.instance = this.masterSheet.clone()),
                  (this.sealed = !1);
              }
              return (
                (t.prototype.seal = function () {
                  if (!this.sealed) {
                    var t = this.masterSheet.clones.indexOf(this.instance);
                    this.masterSheet.clones.splice(t, 1), (this.sealed = !0);
                  }
                }),
                (t.prototype.collectStyles = function (t) {
                  if (this.sealed) throw new O(2);
                  return s.a.createElement(Kt, { sheet: this.instance }, t);
                }),
                (t.prototype.getStyleTags = function () {
                  return this.seal(), this.instance.toHTML();
                }),
                (t.prototype.getStyleElement = function () {
                  return this.seal(), this.instance.toReactElements();
                }),
                (t.prototype.interleaveWithNodeStream = function (t) {
                  throw new O(3);
                }),
                t
              );
            })(),
            Xt = Object(u.createContext)(),
            Yt = Xt.Consumer,
            Kt = (function (t) {
              function e(n) {
                g(this, e);
                var r = _(this, t.call(this, n));
                return (r.getContext = Object(f.default)(r.getContext)), r;
              }
              return (
                y(e, t),
                (e.prototype.getContext = function (t, e) {
                  if (t) return t;
                  if (e) return new lt(e);
                  throw new O(4);
                }),
                (e.prototype.render = function () {
                  var t = this.props,
                    e = t.children,
                    n = t.sheet,
                    r = t.target;
                  return s.a.createElement(
                    Xt.Provider,
                    { value: this.getContext(n, r) },
                    e
                  );
                }),
                e
              );
            })(u.Component),
            Zt = (new Set(), {});
          var Jt = (function (t) {
            function e() {
              g(this, e);
              var n = _(this, t.call(this));
              return (
                (n.attrs = {}),
                (n.renderOuter = n.renderOuter.bind(n)),
                (n.renderInner = n.renderInner.bind(n)),
                n
              );
            }
            return (
              y(e, t),
              (e.prototype.render = function () {
                return s.a.createElement(Yt, null, this.renderOuter);
              }),
              (e.prototype.renderOuter = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : lt.master;
                return (
                  (this.styleSheet = t),
                  this.props.forwardedComponent.componentStyle.isStatic
                    ? this.renderInner()
                    : s.a.createElement(Ht, null, this.renderInner)
                );
              }),
              (e.prototype.renderInner = function (t) {
                var e = this.props.forwardedComponent,
                  n = e.componentStyle,
                  r = e.defaultProps,
                  i = (e.displayName, e.foldedComponentIds),
                  o = e.styledComponentId,
                  a = e.target,
                  s = void 0;
                s = n.isStatic
                  ? this.generateAndInjectStyles(S, this.props)
                  : void 0 !== t
                  ? this.generateAndInjectStyles(
                      Ct(this.props, t, r),
                      this.props
                    )
                  : this.generateAndInjectStyles(
                      this.props.theme || S,
                      this.props
                    );
                var c = this.props.as || this.attrs.as || a,
                  l = Ot(c),
                  f = {},
                  p = v({}, this.attrs, this.props),
                  d = void 0;
                for (d in p)
                  'forwardedComponent' !== d &&
                    'as' !== d &&
                    'suppressClassNameWarning' !== d &&
                    ('forwardedRef' === d
                      ? (f.ref = p[d])
                      : (l && !Object(h.a)(d)) || (f[d] = p[d]));
                return (
                  this.props.style &&
                    this.attrs.style &&
                    (f.style = v({}, this.attrs.style, this.props.style)),
                  (f.className = Array.prototype
                    .concat(i, this.props.className, o, this.attrs.className, s)
                    .filter(Boolean)
                    .join(' ')),
                  Object(u.createElement)(c, f)
                );
              }),
              (e.prototype.buildExecutionContext = function (t, e, n) {
                var r = this,
                  i = v({}, e, { theme: t });
                return n.length
                  ? ((this.attrs = {}),
                    n.forEach(function (t) {
                      var e,
                        n = t,
                        o = !1,
                        a = void 0,
                        u = void 0;
                      for (u in (E(n) && ((n = n(i)), (o = !0)), n))
                        (a = n[u]),
                          o ||
                            !E(a) ||
                            ((e = a) &&
                              e.prototype &&
                              e.prototype.isReactComponent) ||
                            A(a) ||
                            (a = a(i)),
                          (r.attrs[u] = a),
                          (i[u] = a);
                    }),
                    i)
                  : i;
              }),
              (e.prototype.generateAndInjectStyles = function (t, e) {
                var n = e.forwardedComponent,
                  r = n.attrs,
                  i = n.componentStyle;
                n.warnTooManyClasses;
                return i.isStatic && !r.length
                  ? i.generateAndInjectStyles(S, this.styleSheet)
                  : i.generateAndInjectStyles(
                      this.buildExecutionContext(t, e, r),
                      this.styleSheet
                    );
              }),
              e
            );
          })(u.Component);
          function Qt(t, e, n) {
            var r = A(t),
              i = !Ot(t),
              o = e.displayName,
              a =
                void 0 === o
                  ? (function (t) {
                      return Ot(t) ? 'styled.' + t : 'Styled(' + T(t) + ')';
                    })(t)
                  : o,
              u = e.componentId,
              c =
                void 0 === u
                  ? (function (t, e, n) {
                      var r = 'string' != typeof e ? 'sc' : Rt(e),
                        i = (Zt[r] || 0) + 1;
                      Zt[r] = i;
                      var o = r + '-' + t.generateName(r + i);
                      return n ? n + '-' + o : o;
                    })(At, e.displayName, e.parentComponentId)
                  : u,
              l = e.ParentComponent,
              f = void 0 === l ? Jt : l,
              h = e.attrs,
              p = void 0 === h ? x : h,
              d =
                e.displayName && e.componentId
                  ? Rt(e.displayName) + '-' + e.componentId
                  : e.componentId || c,
              g =
                r && t.attrs
                  ? Array.prototype.concat(t.attrs, p).filter(Boolean)
                  : p,
              m = new At(r ? t.componentStyle.rules.concat(n) : n, g, d),
              y = s.a.forwardRef(function (t, e) {
                return s.a.createElement(
                  f,
                  v({}, t, { forwardedComponent: y, forwardedRef: e })
                );
              });
            return (
              (y.attrs = g),
              (y.componentStyle = m),
              (y.displayName = a),
              (y.foldedComponentIds = r
                ? Array.prototype.concat(
                    t.foldedComponentIds,
                    t.styledComponentId
                  )
                : x),
              (y.styledComponentId = d),
              (y.target = r ? t.target : t),
              (y.withComponent = function (t) {
                var r = e.componentId,
                  i = b(e, ['componentId']),
                  o = r && r + '-' + (Ot(t) ? t : Rt(T(t)));
                return Qt(
                  t,
                  v({}, i, { attrs: g, componentId: o, ParentComponent: f }),
                  n
                );
              }),
              (y.toString = function () {
                return '.' + y.styledComponentId;
              }),
              i &&
                $t(y, t, {
                  attrs: !0,
                  componentStyle: !0,
                  displayName: !0,
                  foldedComponentIds: !0,
                  styledComponentId: !0,
                  target: !0,
                  withComponent: !0,
                }),
              y
            );
          }
          var te = function (t) {
            return (function t(e, n) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : S;
              if (!Object(l.isValidElementType)(n)) throw new O(1, String(n));
              var i = function () {
                return e(n, r, vt.apply(void 0, arguments));
              };
              return (
                (i.withConfig = function (i) {
                  return t(e, n, v({}, r, i));
                }),
                (i.attrs = function (i) {
                  return t(
                    e,
                    n,
                    v({}, r, {
                      attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
                    })
                  );
                }),
                i
              );
            })(Qt, t);
          };
          [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'marker',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan',
          ].forEach(function (t) {
            te[t] = te(t);
          });
          var ee = (function () {
            function t(e, n) {
              g(this, t),
                (this.rules = e),
                (this.componentId = n),
                (this.isStatic = xt(e, x)),
                lt.master.hasId(n) || lt.master.deferredInject(n, []);
            }
            return (
              (t.prototype.createStyles = function (t, e) {
                var n = G(mt(this.rules, t, e), '');
                e.inject(this.componentId, n);
              }),
              (t.prototype.removeStyles = function (t) {
                var e = this.componentId;
                t.hasId(e) && t.remove(e);
              }),
              (t.prototype.renderStyles = function (t, e) {
                this.removeStyles(e), this.createStyles(t, e);
              }),
              t
            );
          })();
          function ne(t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            var i = vt.apply(void 0, [t].concat(n)),
              o = 'sc-global-' + yt(JSON.stringify(i)),
              a = new ee(i, o),
              u = (function (t) {
                function e(n) {
                  g(this, e);
                  var r = _(this, t.call(this, n)),
                    i = r.constructor,
                    o = i.globalStyle,
                    a = i.styledComponentId;
                  return (
                    k &&
                      (window.scCGSHMRCache[a] =
                        (window.scCGSHMRCache[a] || 0) + 1),
                    (r.state = { globalStyle: o, styledComponentId: a }),
                    r
                  );
                }
                return (
                  y(e, t),
                  (e.prototype.componentWillUnmount = function () {
                    window.scCGSHMRCache[this.state.styledComponentId] &&
                      (window.scCGSHMRCache[this.state.styledComponentId] -= 1),
                      0 ===
                        window.scCGSHMRCache[this.state.styledComponentId] &&
                        this.state.globalStyle.removeStyles(this.styleSheet);
                  }),
                  (e.prototype.render = function () {
                    var t = this;
                    return s.a.createElement(Yt, null, function (e) {
                      t.styleSheet = e || lt.master;
                      var n = t.state.globalStyle;
                      return n.isStatic
                        ? (n.renderStyles(R, t.styleSheet), null)
                        : s.a.createElement(Ht, null, function (e) {
                            var r = t.constructor.defaultProps,
                              i = v({}, t.props);
                            return (
                              void 0 !== e && (i.theme = Ct(t.props, e, r)),
                              n.renderStyles(i, t.styleSheet),
                              null
                            );
                          });
                    });
                  }),
                  e
                );
              })(s.a.Component);
            return (u.globalStyle = a), (u.styledComponentId = o), u;
          }
          k && (window.scCGSHMRCache = {});
          var re = function (t) {
            return t.replace(/\s|\\n/g, '');
          };
          function ie(t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            var i = vt.apply(void 0, [t].concat(n)),
              o = wt(yt(re(JSON.stringify(i))));
            return new ft(o, G(i, o, '@keyframes'));
          }
          var oe = function (t) {
              var e = s.a.forwardRef(function (e, n) {
                return s.a.createElement(Ht, null, function (r) {
                  var i = t.defaultProps,
                    o = Ct(e, r, i);
                  return s.a.createElement(t, v({}, e, { theme: o, ref: n }));
                });
              });
              return $t(e, t), (e.displayName = 'WithTheme(' + T(t) + ')'), e;
            },
            ae = { StyleSheet: lt };
          e.default = te;
        }.call(this, n(24));
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = n(1),
        o = (function () {
          function t(t, e) {
            (this.canvas = t),
              (this.image = e),
              (this.transformation = i.Matrix4x4.create()),
              (this.aspectMatrixBuffer = i.Matrix4x4.create()),
              (this.viewMatrixBuffer = i.Matrix4x4.create()),
              (this.image = e),
              this.resize();
          }
          return (
            (t.prototype.resize = function () {
              var t = Math.floor(
                  this.canvas.clientWidth * window.devicePixelRatio
                ),
                e = Math.floor(
                  this.canvas.clientHeight * window.devicePixelRatio
                );
              return (
                (this.canvas.width !== t || this.canvas.height !== e) &&
                ((this.canvas.width = t), (this.canvas.height = e), !0)
              );
            }),
            (t.prototype.getAspect = function () {
              var t = this.canvas.clientWidth / this.canvas.clientHeight,
                e = this.image.width / this.image.height;
              return t > e ? { x: e / t, y: 1 } : { x: 1, y: t / e };
            }),
            (t.prototype.getViewMatrix = function () {
              var t = this.getAspect();
              return (
                i.Matrix4x4.fromScaling(this.aspectMatrixBuffer, [t.x, t.y, 1]),
                i.Matrix4x4.multiply(
                  this.viewMatrixBuffer,
                  this.aspectMatrixBuffer,
                  this.transformation
                ),
                this.viewMatrixBuffer
              );
            }),
            t
          );
        })();
      (e.default = o),
        (function (t) {
          (t[(t.L1 = 1)] = 'L1'),
            (t[(t.L2 = 2)] = 'L2'),
            (t[(t.MAPE = 3)] = 'MAPE'),
            (t[(t.MRSE = 4)] = 'MRSE'),
            (t[(t.SMAPE = 5)] = 'SMAPE'),
            (t[(t.SSIM = 6)] = 'SSIM');
        })((r = e.LossFunction || (e.LossFunction = {})));
      var a = {
        L1: r.L1,
        L2: r.L2,
        MAPE: r.MAPE,
        MRSE: r.MRSE,
        SMAPE: r.SMAPE,
        SSIM: r.SSIM,
      };
      e.lossFunctionFromString = function (t) {
        if (a.hasOwnProperty(t)) return a[t];
        throw Error(
          'Loss function ' +
            t +
            ' is invalid. Available options: ' +
            Object.keys(a)
        );
      };
    },
    function (t, e, n) {
      'use strict';
      function r(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      n.r(e),
        (e.default = function (t, e) {
          var n;
          void 0 === e && (e = r);
          var i,
            o = [],
            a = !1;
          return function () {
            for (var r = [], u = 0; u < arguments.length; u++)
              r[u] = arguments[u];
            return a && n === this && e(r, o)
              ? i
              : ((i = t.apply(this, r)), (a = !0), (n = this), (o = r), i);
          };
        });
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n(18),
        o = new ((function () {
          function t(t) {
            (this.nWorkers = t),
              (this.nextWorkerId = 0),
              (this.jobId = 0),
              (this.returnHandlers = {}),
              (this.workers = []);
            for (var e = 0; e < t; ++e) {
              var n = new i();
              this.workers.push(n),
                (n.onmessage = this.handleResult.bind(this));
            }
          }
          return (
            (t.prototype.parse = function (t, e) {
              var n = this;
              return new Promise(function (i, o) {
                var a = n.nextWorker(),
                  u = n.jobId++;
                (n.returnHandlers[u] = function (e) {
                  e.data.success
                    ? i(r({ url: t }, e.data.image))
                    : o(new Error(e.data.message));
                }),
                  a.postMessage({ jobId: u, data: e }, [e]);
              });
            }),
            (t.prototype.handleResult = function (t) {
              if (null == t.data.jobId)
                throw new Error(
                  'Got a message from the webworker without job id.'
                );
              var e = this.returnHandlers[t.data.jobId];
              delete this.returnHandlers[t.data.jobId], e(t);
            }),
            (t.prototype.nextWorker = function () {
              var t = this.workers[this.nextWorkerId];
              return (
                (this.nextWorkerId = (this.nextWorkerId + 1) % this.nWorkers), t
              );
            }),
            t
          );
        })())(2);
      function a(t) {
        var e = t.split('.').pop();
        return e && 'exr' === e.toLocaleLowerCase() ? u(t) : s(t);
      }
      function u(t) {
        return (
          console.time("Downloading '" + t + "'"),
          fetch(t)
            .then(function (e) {
              return console.timeEnd("Downloading '" + t + "'"), e;
            })
            .then(function (t) {
              return t.arrayBuffer();
            })
            .then(function (e) {
              return (function (t, e) {
                return o.parse(t, e);
              })(t, e);
            })
        );
      }
      function s(t) {
        return (
          console.time("Downloading '" + t + "'"),
          new Promise(function (e, n) {
            var r = new Image();
            (r.onerror = function (e) {
              return n(new Error("Failed to load '" + t + "'."));
            }),
              (r.onload = function () {
                console.timeEnd("Downloading '" + t + "'");
                try {
                  var i = document.createElement('canvas');
                  (i.width = r.width), (i.height = r.height);
                  var o = i.getContext('2d');
                  if (!o)
                    return void n(
                      new Error('Failed to get 2d canvas context.')
                    );
                  o.drawImage(r, 0, 0),
                    e({
                      url: t,
                      width: r.width,
                      height: r.height,
                      nChannels: 4,
                      data: r,
                      type: 'LdrImage',
                    });
                } catch (e) {
                  n(new Error("Failed to load image '" + t + "': " + e));
                }
              }),
              (r.src = t);
          })
        );
      }
      (e.loadImage = a), (e.loadExr = u), (e.loadLdr = s);
      var c = new Map();
      e.getPixelColor = function (t, e, n, r) {
        if ('HdrImage' === t.type)
          return t.data[(e + n * t.width) * t.nChannels + r];
        var i = c.get(t);
        if (null == i) {
          var o = document.createElement('canvas');
          (o.width = t.width), (o.height = t.height);
          var a = o.getContext('2d');
          if (!a)
            throw new Error(
              'Failed to create 2d context to retrieve LDR image data'
            );
          a.drawImage(t.data, 0, 0, t.width, t.height),
            (i = function (t, e, n) {
              return a.getImageData(t, e, 1, 1).data[n] / 256;
            }),
            c.set(t, i);
        }
        return i(e, n, r);
      };
      var l = (function () {
        function t() {
          (this.images = {}), (this.downloading = {});
        }
        return (
          (t.prototype.contains = function (t) {
            return this.images.hasOwnProperty(t);
          }),
          (t.prototype.currentlyDownloading = function (t) {
            return this.downloading.hasOwnProperty(t);
          }),
          (t.prototype.size = function () {
            return Object.keys(this.images).length;
          }),
          (t.prototype.get = function (t) {
            return this.contains(t)
              ? Promise.resolve(this.images[t])
              : this.currentlyDownloading(t)
              ? this.downloading[t]
              : this.load(t);
          }),
          (t.prototype.store = function (t, e) {
            return (
              this.currentlyDownloading(t) &&
                delete this.currentlyDownloading[t],
              (this.images[t] = e),
              e
            );
          }),
          (t.prototype.load = function (t) {
            var e = this,
              n = a(t);
            return (
              (this.downloading[t] = n),
              n.then(function (n) {
                return e.store(t, n);
              })
            );
          }),
          t
        );
      })();
      e.ImageCache = l;
    },
    function (t, n) {
      t.exports = e;
    },
    function (t, e, n) {
      t.exports = (function t(e) {
        'use strict';
        var n = /^\0+/g,
          r = /[\0\r\f]/g,
          i = /: */g,
          o = /zoo|gra/,
          a = /([,: ])(transform)/g,
          u = /,+\s*(?![^(]*[)])/g,
          s = / +\s*(?![^(]*[)])/g,
          c = / *[\0] */g,
          l = /,\r+?/g,
          f = /([\t\r\n ])*\f?&/g,
          h = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
          p = /\W+/g,
          d = /@(k\w+)\s*(\S*)\s*/,
          g = /::(place)/g,
          m = /:(read-only)/g,
          v = /\s+(?=[{\];=:>])/g,
          y = /([[}=:>])\s+/g,
          b = /(\{[^{]+?);(?=\})/g,
          _ = /\s{2,}/g,
          w = /([^\(])(:+) */g,
          x = /[svh]\w+-[tblr]{2}/,
          S = /\(\s*(.*)\s*\)/g,
          E = /([\s\S]*?);/g,
          T = /-self|flex-/g,
          A = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          C = /stretch|:\s*\w+\-(?:conte|avail)/,
          k = /([^-])(image-set\()/,
          M = '-webkit-',
          R = '-moz-',
          O = '-ms-',
          I = 59,
          j = 125,
          P = 123,
          L = 40,
          F = 41,
          D = 91,
          U = 93,
          N = 10,
          B = 13,
          z = 9,
          W = 64,
          $ = 32,
          G = 38,
          H = 45,
          V = 95,
          q = 42,
          X = 44,
          Y = 58,
          K = 39,
          Z = 34,
          J = 47,
          Q = 62,
          tt = 43,
          et = 126,
          nt = 0,
          rt = 12,
          it = 11,
          ot = 107,
          at = 109,
          ut = 115,
          st = 112,
          ct = 111,
          lt = 105,
          ft = 99,
          ht = 100,
          pt = 112,
          dt = 1,
          gt = 1,
          mt = 0,
          vt = 1,
          yt = 1,
          bt = 1,
          _t = 0,
          wt = 0,
          xt = 0,
          St = [],
          Et = [],
          Tt = 0,
          At = null,
          Ct = -2,
          kt = -1,
          Mt = 0,
          Rt = 1,
          Ot = 2,
          It = 3,
          jt = 0,
          Pt = 1,
          Lt = '',
          Ft = '',
          Dt = '';
        function Ut(t, e, i, o, a) {
          for (
            var u,
              s,
              l = 0,
              f = 0,
              h = 0,
              p = 0,
              v = 0,
              y = 0,
              b = 0,
              _ = 0,
              x = 0,
              E = 0,
              T = 0,
              A = 0,
              C = 0,
              k = 0,
              V = 0,
              _t = 0,
              Et = 0,
              At = 0,
              Ct = 0,
              kt = i.length,
              Bt = kt - 1,
              Vt = '',
              qt = '',
              Xt = '',
              Yt = '',
              Kt = '',
              Zt = '';
            V < kt;

          ) {
            if (
              ((b = i.charCodeAt(V)),
              V === Bt &&
                f + p + h + l !== 0 &&
                (0 !== f && (b = f === J ? N : J), (p = h = l = 0), kt++, Bt++),
              f + p + h + l === 0)
            ) {
              if (
                V === Bt &&
                (_t > 0 && (qt = qt.replace(r, '')), qt.trim().length > 0)
              ) {
                switch (b) {
                  case $:
                  case z:
                  case I:
                  case B:
                  case N:
                    break;
                  default:
                    qt += i.charAt(V);
                }
                b = I;
              }
              if (1 === Et)
                switch (b) {
                  case P:
                  case j:
                  case I:
                  case Z:
                  case K:
                  case L:
                  case F:
                  case X:
                    Et = 0;
                  case z:
                  case B:
                  case N:
                  case $:
                    break;
                  default:
                    for (Et = 0, Ct = V, v = b, V--, b = I; Ct < kt; )
                      switch (i.charCodeAt(Ct++)) {
                        case N:
                        case B:
                        case I:
                          ++V, (b = v), (Ct = kt);
                          break;
                        case Y:
                          _t > 0 && (++V, (b = v));
                        case P:
                          Ct = kt;
                      }
                }
              switch (b) {
                case P:
                  for (
                    v = (qt = qt.trim()).charCodeAt(0), T = 1, Ct = ++V;
                    V < kt;

                  ) {
                    switch ((b = i.charCodeAt(V))) {
                      case P:
                        T++;
                        break;
                      case j:
                        T--;
                        break;
                      case J:
                        switch ((y = i.charCodeAt(V + 1))) {
                          case q:
                          case J:
                            V = Ht(y, V, Bt, i);
                        }
                        break;
                      case D:
                        b++;
                      case L:
                        b++;
                      case Z:
                      case K:
                        for (; V++ < Bt && i.charCodeAt(V) !== b; );
                    }
                    if (0 === T) break;
                    V++;
                  }
                  switch (
                    ((Xt = i.substring(Ct, V)),
                    v === nt &&
                      (v = (qt = qt.replace(n, '').trim()).charCodeAt(0)),
                    v)
                  ) {
                    case W:
                      switch (
                        (_t > 0 && (qt = qt.replace(r, '')),
                        (y = qt.charCodeAt(1)))
                      ) {
                        case ht:
                        case at:
                        case ut:
                        case H:
                          u = e;
                          break;
                        default:
                          u = St;
                      }
                      if (
                        ((Ct = (Xt = Ut(e, u, Xt, y, a + 1)).length),
                        xt > 0 && 0 === Ct && (Ct = qt.length),
                        Tt > 0 &&
                          ((u = Nt(St, qt, At)),
                          (s = Gt(It, Xt, u, e, gt, dt, Ct, y, a, o)),
                          (qt = u.join('')),
                          void 0 !== s &&
                            0 === (Ct = (Xt = s.trim()).length) &&
                            ((y = 0), (Xt = ''))),
                        Ct > 0)
                      )
                        switch (y) {
                          case ut:
                            qt = qt.replace(S, $t);
                          case ht:
                          case at:
                          case H:
                            Xt = qt + '{' + Xt + '}';
                            break;
                          case ot:
                            (Xt =
                              (qt = qt.replace(
                                d,
                                '$1 $2' + (Pt > 0 ? Lt : '')
                              )) +
                              '{' +
                              Xt +
                              '}'),
                              (Xt =
                                1 === yt || (2 === yt && Wt('@' + Xt, 3))
                                  ? '@' + M + Xt + '@' + Xt
                                  : '@' + Xt);
                            break;
                          default:
                            (Xt = qt + Xt), o === pt && ((Yt += Xt), (Xt = ''));
                        }
                      else Xt = '';
                      break;
                    default:
                      Xt = Ut(e, Nt(e, qt, At), Xt, o, a + 1);
                  }
                  (Kt += Xt),
                    (A = 0),
                    (Et = 0),
                    (k = 0),
                    (_t = 0),
                    (At = 0),
                    (C = 0),
                    (qt = ''),
                    (Xt = ''),
                    (b = i.charCodeAt(++V));
                  break;
                case j:
                case I:
                  if (
                    (Ct = (qt = (_t > 0 ? qt.replace(r, '') : qt).trim())
                      .length) > 1
                  )
                    switch (
                      (0 === k &&
                        ((v = qt.charCodeAt(0)) === H || (v > 96 && v < 123)) &&
                        (Ct = (qt = qt.replace(' ', ':')).length),
                      Tt > 0 &&
                        void 0 !==
                          (s = Gt(Rt, qt, e, t, gt, dt, Yt.length, o, a, o)) &&
                        0 === (Ct = (qt = s.trim()).length) &&
                        (qt = '\0\0'),
                      (v = qt.charCodeAt(0)),
                      (y = qt.charCodeAt(1)),
                      v)
                    ) {
                      case nt:
                        break;
                      case W:
                        if (y === lt || y === ft) {
                          Zt += qt + i.charAt(V);
                          break;
                        }
                      default:
                        if (qt.charCodeAt(Ct - 1) === Y) break;
                        Yt += zt(qt, v, y, qt.charCodeAt(2));
                    }
                  (A = 0),
                    (Et = 0),
                    (k = 0),
                    (_t = 0),
                    (At = 0),
                    (qt = ''),
                    (b = i.charCodeAt(++V));
              }
            }
            switch (b) {
              case B:
              case N:
                if (f + p + h + l + wt === 0)
                  switch (E) {
                    case F:
                    case K:
                    case Z:
                    case W:
                    case et:
                    case Q:
                    case q:
                    case tt:
                    case J:
                    case H:
                    case Y:
                    case X:
                    case I:
                    case P:
                    case j:
                      break;
                    default:
                      k > 0 && (Et = 1);
                  }
                f === J
                  ? (f = 0)
                  : vt + A === 0 &&
                    o !== ot &&
                    qt.length > 0 &&
                    ((_t = 1), (qt += '\0')),
                  Tt * jt > 0 && Gt(Mt, qt, e, t, gt, dt, Yt.length, o, a, o),
                  (dt = 1),
                  gt++;
                break;
              case I:
              case j:
                if (f + p + h + l === 0) {
                  dt++;
                  break;
                }
              default:
                switch ((dt++, (Vt = i.charAt(V)), b)) {
                  case z:
                  case $:
                    if (p + l + f === 0)
                      switch (_) {
                        case X:
                        case Y:
                        case z:
                        case $:
                          Vt = '';
                          break;
                        default:
                          b !== $ && (Vt = ' ');
                      }
                    break;
                  case nt:
                    Vt = '\\0';
                    break;
                  case rt:
                    Vt = '\\f';
                    break;
                  case it:
                    Vt = '\\v';
                    break;
                  case G:
                    p + f + l === 0 &&
                      vt > 0 &&
                      ((At = 1), (_t = 1), (Vt = '\f' + Vt));
                    break;
                  case 108:
                    if (p + f + l + mt === 0 && k > 0)
                      switch (V - k) {
                        case 2:
                          _ === st && i.charCodeAt(V - 3) === Y && (mt = _);
                        case 8:
                          x === ct && (mt = x);
                      }
                    break;
                  case Y:
                    p + f + l === 0 && (k = V);
                    break;
                  case X:
                    f + h + p + l === 0 && ((_t = 1), (Vt += '\r'));
                    break;
                  case Z:
                  case K:
                    0 === f && (p = p === b ? 0 : 0 === p ? b : p);
                    break;
                  case D:
                    p + f + h === 0 && l++;
                    break;
                  case U:
                    p + f + h === 0 && l--;
                    break;
                  case F:
                    p + f + l === 0 && h--;
                    break;
                  case L:
                    if (p + f + l === 0) {
                      if (0 === A)
                        switch (2 * _ + 3 * x) {
                          case 533:
                            break;
                          default:
                            (T = 0), (A = 1);
                        }
                      h++;
                    }
                    break;
                  case W:
                    f + h + p + l + k + C === 0 && (C = 1);
                    break;
                  case q:
                  case J:
                    if (p + l + h > 0) break;
                    switch (f) {
                      case 0:
                        switch (2 * b + 3 * i.charCodeAt(V + 1)) {
                          case 235:
                            f = J;
                            break;
                          case 220:
                            (Ct = V), (f = q);
                        }
                        break;
                      case q:
                        b === J &&
                          _ === q &&
                          Ct + 2 !== V &&
                          (33 === i.charCodeAt(Ct + 2) &&
                            (Yt += i.substring(Ct, V + 1)),
                          (Vt = ''),
                          (f = 0));
                    }
                }
                if (0 === f) {
                  if (vt + p + l + C === 0 && o !== ot && b !== I)
                    switch (b) {
                      case X:
                      case et:
                      case Q:
                      case tt:
                      case F:
                      case L:
                        if (0 === A) {
                          switch (_) {
                            case z:
                            case $:
                            case N:
                            case B:
                              Vt += '\0';
                              break;
                            default:
                              Vt = '\0' + Vt + (b === X ? '' : '\0');
                          }
                          _t = 1;
                        } else
                          switch (b) {
                            case L:
                              k + 7 === V && 108 === _ && (k = 0), (A = ++T);
                              break;
                            case F:
                              0 == (A = --T) && ((_t = 1), (Vt += '\0'));
                          }
                        break;
                      case z:
                      case $:
                        switch (_) {
                          case nt:
                          case P:
                          case j:
                          case I:
                          case X:
                          case rt:
                          case z:
                          case $:
                          case N:
                          case B:
                            break;
                          default:
                            0 === A && ((_t = 1), (Vt += '\0'));
                        }
                    }
                  (qt += Vt), b !== $ && b !== z && (E = b);
                }
            }
            (x = _), (_ = b), V++;
          }
          if (
            ((Ct = Yt.length),
            xt > 0 &&
              0 === Ct &&
              0 === Kt.length &&
              (0 === e[0].length) == 0 &&
              (o !== at || (1 === e.length && (vt > 0 ? Ft : Dt) === e[0])) &&
              (Ct = e.join(',').length + 2),
            Ct > 0)
          ) {
            if (
              ((u =
                0 === vt && o !== ot
                  ? (function (t) {
                      for (
                        var e, n, i = 0, o = t.length, a = Array(o);
                        i < o;
                        ++i
                      ) {
                        for (
                          var u = t[i].split(c),
                            s = '',
                            l = 0,
                            f = 0,
                            h = 0,
                            p = 0,
                            d = u.length;
                          l < d;
                          ++l
                        )
                          if (!(0 === (f = (n = u[l]).length) && d > 1)) {
                            if (
                              ((h = s.charCodeAt(s.length - 1)),
                              (p = n.charCodeAt(0)),
                              (e = ''),
                              0 !== l)
                            )
                              switch (h) {
                                case q:
                                case et:
                                case Q:
                                case tt:
                                case $:
                                case L:
                                  break;
                                default:
                                  e = ' ';
                              }
                            switch (p) {
                              case G:
                                n = e + Ft;
                              case et:
                              case Q:
                              case tt:
                              case $:
                              case F:
                              case L:
                                break;
                              case D:
                                n = e + n + Ft;
                                break;
                              case Y:
                                switch (
                                  2 * n.charCodeAt(1) +
                                  3 * n.charCodeAt(2)
                                ) {
                                  case 530:
                                    if (bt > 0) {
                                      n = e + n.substring(8, f - 1);
                                      break;
                                    }
                                  default:
                                    (l < 1 || u[l - 1].length < 1) &&
                                      (n = e + Ft + n);
                                }
                                break;
                              case X:
                                e = '';
                              default:
                                n =
                                  f > 1 && n.indexOf(':') > 0
                                    ? e + n.replace(w, '$1' + Ft + '$2')
                                    : e + n + Ft;
                            }
                            s += n;
                          }
                        a[i] = s.replace(r, '').trim();
                      }
                      return a;
                    })(e)
                  : e),
              Tt > 0 &&
                void 0 !== (s = Gt(Ot, Yt, u, t, gt, dt, Ct, o, a, o)) &&
                0 === (Yt = s).length)
            )
              return Zt + Yt + Kt;
            if (((Yt = u.join(',') + '{' + Yt + '}'), yt * mt != 0)) {
              switch ((2 !== yt || Wt(Yt, 2) || (mt = 0), mt)) {
                case ct:
                  Yt = Yt.replace(m, ':' + R + '$1') + Yt;
                  break;
                case st:
                  Yt =
                    Yt.replace(g, '::' + M + 'input-$1') +
                    Yt.replace(g, '::' + R + '$1') +
                    Yt.replace(g, ':' + O + 'input-$1') +
                    Yt;
              }
              mt = 0;
            }
          }
          return Zt + Yt + Kt;
        }
        function Nt(t, e, n) {
          var r = e.trim().split(l),
            i = r,
            o = r.length,
            a = t.length;
          switch (a) {
            case 0:
            case 1:
              for (var u = 0, s = 0 === a ? '' : t[0] + ' '; u < o; ++u)
                i[u] = Bt(s, i[u], n, a).trim();
              break;
            default:
              u = 0;
              var c = 0;
              for (i = []; u < o; ++u)
                for (var f = 0; f < a; ++f)
                  i[c++] = Bt(t[f] + ' ', r[u], n, a).trim();
          }
          return i;
        }
        function Bt(t, e, n, r) {
          var i = e,
            o = i.charCodeAt(0);
          switch ((o < 33 && (o = (i = i.trim()).charCodeAt(0)), o)) {
            case G:
              switch (vt + r) {
                case 0:
                case 1:
                  if (0 === t.trim().length) break;
                default:
                  return i.replace(f, '$1' + t.trim());
              }
              break;
            case Y:
              switch (i.charCodeAt(1)) {
                case 103:
                  if (bt > 0 && vt > 0)
                    return i.replace(h, '$1').replace(f, '$1' + Dt);
                  break;
                default:
                  return t.trim() + i.replace(f, '$1' + t.trim());
              }
            default:
              if (n * vt > 0 && i.indexOf('\f') > 0)
                return i.replace(
                  f,
                  (t.charCodeAt(0) === Y ? '' : '$1') + t.trim()
                );
          }
          return t + i;
        }
        function zt(t, e, n, r) {
          var c,
            l = 0,
            f = t + ';',
            h = 2 * e + 3 * n + 4 * r;
          if (944 === h)
            return (function (t) {
              var e = t.length,
                n = t.indexOf(':', 9) + 1,
                r = t.substring(0, n).trim(),
                i = t.substring(n, e - 1).trim();
              switch (t.charCodeAt(9) * Pt) {
                case 0:
                  break;
                case H:
                  if (110 !== t.charCodeAt(10)) break;
                default:
                  for (
                    var o = i.split(((i = ''), u)), a = 0, n = 0, e = o.length;
                    a < e;
                    n = 0, ++a
                  ) {
                    for (var c = o[a], l = c.split(s); (c = l[n]); ) {
                      var f = c.charCodeAt(0);
                      if (
                        1 === Pt &&
                        ((f > W && f < 90) ||
                          (f > 96 && f < 123) ||
                          f === V ||
                          (f === H && c.charCodeAt(1) !== H))
                      )
                        switch (
                          isNaN(parseFloat(c)) +
                          (-1 !== c.indexOf('('))
                        ) {
                          case 1:
                            switch (c) {
                              case 'infinite':
                              case 'alternate':
                              case 'backwards':
                              case 'running':
                              case 'normal':
                              case 'forwards':
                              case 'both':
                              case 'none':
                              case 'linear':
                              case 'ease':
                              case 'ease-in':
                              case 'ease-out':
                              case 'ease-in-out':
                              case 'paused':
                              case 'reverse':
                              case 'alternate-reverse':
                              case 'inherit':
                              case 'initial':
                              case 'unset':
                              case 'step-start':
                              case 'step-end':
                                break;
                              default:
                                c += Lt;
                            }
                        }
                      l[n++] = c;
                    }
                    i += (0 === a ? '' : ',') + l.join(' ');
                  }
              }
              return (
                (i = r + i + ';'),
                1 === yt || (2 === yt && Wt(i, 1)) ? M + i + i : i
              );
            })(f);
          if (0 === yt || (2 === yt && !Wt(f, 1))) return f;
          switch (h) {
            case 1015:
              return 97 === f.charCodeAt(10) ? M + f + f : f;
            case 951:
              return 116 === f.charCodeAt(3) ? M + f + f : f;
            case 963:
              return 110 === f.charCodeAt(5) ? M + f + f : f;
            case 1009:
              if (100 !== f.charCodeAt(4)) break;
            case 969:
            case 942:
              return M + f + f;
            case 978:
              return M + f + R + f + f;
            case 1019:
            case 983:
              return M + f + R + f + O + f + f;
            case 883:
              return f.charCodeAt(8) === H
                ? M + f + f
                : f.indexOf('image-set(', 11) > 0
                ? f.replace(k, '$1' + M + '$2') + f
                : f;
            case 932:
              if (f.charCodeAt(4) === H)
                switch (f.charCodeAt(5)) {
                  case 103:
                    return (
                      M +
                      'box-' +
                      f.replace('-grow', '') +
                      M +
                      f +
                      O +
                      f.replace('grow', 'positive') +
                      f
                    );
                  case 115:
                    return M + f + O + f.replace('shrink', 'negative') + f;
                  case 98:
                    return M + f + O + f.replace('basis', 'preferred-size') + f;
                }
              return M + f + O + f + f;
            case 964:
              return M + f + O + 'flex-' + f + f;
            case 1023:
              if (99 !== f.charCodeAt(8)) break;
              return (
                (c = f
                  .substring(f.indexOf(':', 15))
                  .replace('flex-', '')
                  .replace('space-between', 'justify')),
                M + 'box-pack' + c + M + f + O + 'flex-pack' + c + f
              );
            case 1005:
              return o.test(f)
                ? f.replace(i, ':' + M) + f.replace(i, ':' + R) + f
                : f;
            case 1e3:
              switch (
                ((l = (c = f.substring(13).trim()).indexOf('-') + 1),
                c.charCodeAt(0) + c.charCodeAt(l))
              ) {
                case 226:
                  c = f.replace(x, 'tb');
                  break;
                case 232:
                  c = f.replace(x, 'tb-rl');
                  break;
                case 220:
                  c = f.replace(x, 'lr');
                  break;
                default:
                  return f;
              }
              return M + f + O + c + f;
            case 1017:
              if (-1 === f.indexOf('sticky', 9)) return f;
            case 975:
              switch (
                ((l = (f = t).length - 10),
                (h =
                  (c = (33 === f.charCodeAt(l) ? f.substring(0, l) : f)
                    .substring(t.indexOf(':', 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | c.charCodeAt(7))))
              ) {
                case 203:
                  if (c.charCodeAt(8) < 111) break;
                case 115:
                  f = f.replace(c, M + c) + ';' + f;
                  break;
                case 207:
                case 102:
                  f =
                    f.replace(c, M + (h > 102 ? 'inline-' : '') + 'box') +
                    ';' +
                    f.replace(c, M + c) +
                    ';' +
                    f.replace(c, O + c + 'box') +
                    ';' +
                    f;
              }
              return f + ';';
            case 938:
              if (f.charCodeAt(5) === H)
                switch (f.charCodeAt(6)) {
                  case 105:
                    return (
                      (c = f.replace('-items', '')),
                      M + f + M + 'box-' + c + O + 'flex-' + c + f
                    );
                  case 115:
                    return M + f + O + 'flex-item-' + f.replace(T, '') + f;
                  default:
                    return (
                      M +
                      f +
                      O +
                      'flex-line-pack' +
                      f.replace('align-content', '').replace(T, '') +
                      f
                    );
                }
              break;
            case 973:
            case 989:
              if (f.charCodeAt(3) !== H || 122 === f.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === C.test(t))
                return 115 ===
                  (c = t.substring(t.indexOf(':') + 1)).charCodeAt(0)
                  ? zt(t.replace('stretch', 'fill-available'), e, n, r).replace(
                      ':fill-available',
                      ':stretch'
                    )
                  : f.replace(c, M + c) +
                      f.replace(c, R + c.replace('fill-', '')) +
                      f;
              break;
            case 962:
              if (
                ((f = M + f + (102 === f.charCodeAt(5) ? O + f : '') + f),
                n + r === 211 &&
                  105 === f.charCodeAt(13) &&
                  f.indexOf('transform', 10) > 0)
              )
                return (
                  f
                    .substring(0, f.indexOf(';', 27) + 1)
                    .replace(a, '$1' + M + '$2') + f
                );
          }
          return f;
        }
        function Wt(t, e) {
          var n = t.indexOf(1 === e ? ':' : '{'),
            r = t.substring(0, 3 !== e ? n : 10),
            i = t.substring(n + 1, t.length - 1);
          return At(2 !== e ? r : r.replace(A, '$1'), i, e);
        }
        function $t(t, e) {
          var n = zt(e, e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2));
          return n !== e + ';'
            ? n.replace(E, ' or ($1)').substring(4)
            : '(' + e + ')';
        }
        function Gt(t, e, n, r, i, o, a, u, s, c) {
          for (var l, f = 0, h = e; f < Tt; ++f)
            switch ((l = Et[f].call(qt, t, h, n, r, i, o, a, u, s, c))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                h = l;
            }
          if (h !== e) return h;
        }
        function Ht(t, e, n, r) {
          for (var i = e + 1; i < n; ++i)
            switch (r.charCodeAt(i)) {
              case J:
                if (t === q && r.charCodeAt(i - 1) === q && e + 2 !== i)
                  return i + 1;
                break;
              case N:
                if (t === J) return i + 1;
            }
          return i;
        }
        function Vt(t) {
          for (var e in t) {
            var n = t[e];
            switch (e) {
              case 'keyframe':
                Pt = 0 | n;
                break;
              case 'global':
                bt = 0 | n;
                break;
              case 'cascade':
                vt = 0 | n;
                break;
              case 'compress':
                _t = 0 | n;
                break;
              case 'semicolon':
                wt = 0 | n;
                break;
              case 'preserve':
                xt = 0 | n;
                break;
              case 'prefix':
                (At = null),
                  n
                    ? 'function' != typeof n
                      ? (yt = 1)
                      : ((yt = 2), (At = n))
                    : (yt = 0);
            }
          }
          return Vt;
        }
        function qt(e, n) {
          if (void 0 !== this && this.constructor === qt) return t(e);
          var i = e,
            o = i.charCodeAt(0);
          o < 33 && (o = (i = i.trim()).charCodeAt(0)),
            Pt > 0 && (Lt = i.replace(p, o === D ? '' : '-')),
            (o = 1),
            1 === vt ? (Dt = i) : (Ft = i);
          var a,
            u = [Dt];
          Tt > 0 &&
            void 0 !== (a = Gt(kt, n, u, u, gt, dt, 0, 0, 0, 0)) &&
            'string' == typeof a &&
            (n = a);
          var s = Ut(St, u, n, 0, 0);
          return (
            Tt > 0 &&
              void 0 !== (a = Gt(Ct, s, u, u, gt, dt, s.length, 0, 0, 0)) &&
              'string' != typeof (s = a) &&
              (o = 0),
            (Lt = ''),
            (Dt = ''),
            (Ft = ''),
            (mt = 0),
            (gt = 1),
            (dt = 1),
            _t * o == 0
              ? s
              : s
                  .replace(r, '')
                  .replace(v, '')
                  .replace(y, '$1')
                  .replace(b, '$1')
                  .replace(_, ' ')
          );
        }
        return (
          (qt.use = function t(e) {
            switch (e) {
              case void 0:
              case null:
                Tt = Et.length = 0;
                break;
              default:
                if ('function' == typeof e) Et[Tt++] = e;
                else if ('object' == typeof e)
                  for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
                else jt = 0 | !!e;
            }
            return t;
          }),
          (qt.set = Vt),
          void 0 !== e && Vt(e),
          qt
        );
      })(null);
    },
    function (t, e, n) {
      'use strict';
      t.exports = n(25);
    },
    function (t, e, n) {
      'use strict';
      var r,
        i =
          (this && this.__makeTemplateObject) ||
          function (t, e) {
            return (
              Object.defineProperty
                ? Object.defineProperty(t, 'raw', { value: e })
                : (t.raw = e),
              t
            );
          },
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a,
        u,
        s = n(0),
        c = n(1),
        l = n(10),
        f = n(11),
        h = n(12),
        p = n(2),
        d = p.default.canvas(
          a ||
            (a = i(
              [
                '\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  width: 100%; height: 100%;\n',
              ],
              [
                '\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  width: 100%; height: 100%;\n',
              ]
            ))
        ),
        g = p.default.div(
          u ||
            (u = i(
              [
                '\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  width: 100%; height: 100%;\n',
              ],
              [
                '\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  width: 100%; height: 100%;\n',
              ]
            ))
        ),
        m = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.transformation = c.Matrix4x4.create()),
              (n.defaultTransformation = c.Matrix4x4.create()),
              (n.handleTransformationChange =
                n.handleTransformationChange.bind(n)),
              n
            );
          }
          return (
            o(e, t),
            (e.prototype.componentDidMount = function () {
              (this.imageLayer = new l.default(
                this.imageLayerElement,
                this.props.image
              )),
                (this.textLayer = new f.default(
                  this.textLayerElement,
                  this.props.image
                )),
                (this.mouseLayer = new h.default(
                  this.mouseLayerElement,
                  this.props.image,
                  this.props.enableMouseEvents
                )),
                this.mouseLayer.onTransformationChange(
                  this.handleTransformationChange
                ),
                this.updateCanvasProps(),
                this.handleTransformationChange(this.transformation);
            }),
            (e.prototype.componentDidUpdate = function (t) {
              this.updateCanvasProps(t),
                this.mouseLayer.setEnableMouseEvents(
                  this.props.enableMouseEvents
                );
            }),
            (e.prototype.componentWillUnmount = function () {
              this.mouseLayer.onPointAt(void 0),
                this.mouseLayer.onTransformationChange(void 0),
                this.mouseLayer.destruct();
            }),
            (e.prototype.setDefaultTransformation = function (t) {
              this.defaultTransformation = t;
            }),
            (e.prototype.reset = function () {
              this.handleTransformationChange(this.defaultTransformation);
            }),
            (e.prototype.setTransformation = function (t) {
              this.handleTransformationChange(t);
            }),
            (e.prototype.getTransformation = function () {
              return this.transformation;
            }),
            (e.prototype.render = function () {
              var t = this;
              return s.createElement(
                g,
                null,
                s.createElement(d, {
                  ref: function (e) {
                    e && (t.imageLayerElement = e);
                  },
                }),
                s.createElement(d, {
                  ref: function (e) {
                    e && (t.textLayerElement = e);
                  },
                }),
                s.createElement(d, {
                  ref: function (e) {
                    e && (t.mouseLayerElement = e);
                  },
                })
              );
            }),
            (e.prototype.handleTransformationChange = function (t) {
              this.props.allowMovement &&
                ((this.transformation = t),
                this.imageLayer.setTransformation(t),
                this.textLayer.setTransformation(t),
                this.mouseLayer.setTransformation(t),
                null != this.props.onTransform && this.props.onTransform(t));
            }),
            (e.prototype.updateCanvasProps = function (t) {
              void 0 === t && (t = null),
                (t &&
                  t.viewTransform === this.props.viewTransform &&
                  t.exposure === this.props.exposure &&
                  t.gamma === this.props.gamma &&
                  t.offset === this.props.offset) ||
                  this.imageLayer.setTonemapping({
                    viewTransform: this.props.viewTransform,
                    exposure: this.props.exposure,
                    offset: this.props.offset,
                    gamma: this.props.gamma,
                  }),
                (t && t.image === this.props.image) ||
                  (this.imageLayer.setImage(this.props.image),
                  this.textLayer.setImage(this.props.image),
                  this.mouseLayer.setImage(this.props.image)),
                this.mouseLayer.onPointAt(this.props.onPoint);
            }),
            e
          );
        })(s.Component);
      e.default = m;
    },
    function (t, e, n) {
      'use strict';
      var r,
        i =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o,
        a,
        u = n(17),
        s = n(3);
      !(function (t) {
        (t[(t.LDR = 0)] = 'LDR'),
          (t[(t.HDR = 1)] = 'HDR'),
          (t[(t.ColorMap = 2)] = 'ColorMap');
      })(o || (o = {})),
        (function (t) {
          (t[(t.None = -1)] = 'None'),
            (t[(t.Gamma22 = 0)] = 'Gamma22'),
            (t[(t.K1S1 = 1)] = 'K1S1');
        })(a || (a = {}));
      var c =
          "\nprecision mediump float;\nuniform int viewTransform;\nuniform float exposure;\nuniform float offset;\nuniform float gamma;\nuniform int mode;\nuniform int nChannels;\nuniform int lossFunction;\nuniform int imageHeight; // Height and width are used to access neighboring pixels\nuniform int imageWidth;\nvarying vec2 vTextureCoord;\nuniform sampler2D imASampler;\nuniform sampler2D imBSampler;\nuniform sampler2D cmapSampler;\n\nvec3 lookupOffset(sampler2D sampler, vec2 position, vec2 offset) {\n    // Read neighbouring pixels from an image texture\n    // Takes 'position' (range 0 - 1) and an integer pixel offset 'offset'\n    vec2 imageSize = vec2(imageWidth, imageHeight);\n    return texture2D(sampler, position + offset / imageSize).rgb;\n}\n\nfloat log10(float a) {\n  const float logBase10 = 1.0 / log2( 10.0 );\n\n  return log2(a) * logBase10;\n}\n\nfloat luminance(vec3 rgb) {\n  return dot(vec3(0.2126, 0.7152, 0.0722), rgb);\n}\n\nvec3 GOG(vec3 rgb, float gain, float offset, float gamma) {\n  return pow(gain * rgb + offset, vec3(1.0 / gamma));\n}\n\nfloat logEncodingLogC(float a) {\n  float LogC = a >= 0.01059106816664 ? 0.385537 + 0.2471896 * log10(a * 5.555556 + 0.052272) : a * 5.367655 + 0.092809;\n\n  return LogC;\n}\n\nfloat sigmoidK1S1(float a) {\n  float sigmoid = 1.0 / (1.0 + pow(2.718281828459045, -8.9 * (a - 0.435)));\n\n  return sigmoid;\n}\n\nvec3 viewTransformNone(vec3 rgb) {\n  return rgb;\n}\n\nvec3 viewTransformGamma22(vec3 rgb) {\n  const float exponent = 1.0 / 2.2;\n\n  return pow(max(rgb, 0.0), vec3(exponent, exponent, exponent));\n}\n\nvec3 viewTransformK1S1(vec3 rgb) {\n  vec3 LogC = vec3(logEncodingLogC(rgb.x), logEncodingLogC(rgb.y), logEncodingLogC(rgb.z));\n\n  return vec3(sigmoidK1S1(LogC.x), sigmoidK1S1(LogC.y), sigmoidK1S1(LogC.z));\n}\n\nvec3 applyViewTransform(vec3 rgb, int which) {\n  if (which == " +
          a.None +
          ') {\n    return viewTransformNone(rgb);\n  } else if (which == ' +
          a.Gamma22 +
          ') {\n    return viewTransformGamma22(rgb);\n  } else if (which == ' +
          a.K1S1 +
          ') {\n    return viewTransformK1S1(rgb);\n  }\n}\n\nvoid main(void) {\n    vec3 col;\n    vec2 position = vec2(vTextureCoord.s, vTextureCoord.t);\n    if (lossFunction == ' +
          s.LossFunction.L1 +
          ') {\n        col = texture2D(imASampler, position).rgb;\n        col = col - texture2D(imBSampler, position).rgb;\n        col = abs(col);\n    } else if (lossFunction == ' +
          s.LossFunction.MAPE +
          ') {\n        vec3 img = texture2D(imASampler, position).rgb;\n        vec3 ref = texture2D(imBSampler, position).rgb;\n        vec3 diff = img - ref;\n        col = abs(diff) / (abs(ref) + 1e-2);\n    } else if (lossFunction == ' +
          s.LossFunction.SMAPE +
          ') {\n        vec3 img = texture2D(imASampler, position).rgb;\n        vec3 ref = texture2D(imBSampler, position).rgb;\n        vec3 diff = img - ref;\n        col = 2.0 * abs(diff) / (abs(ref) + abs(img) + 2e-2);\n    } else if (lossFunction == ' +
          s.LossFunction.MRSE +
          ') {\n        vec3 img = texture2D(imASampler, position).rgb;\n        vec3 ref = texture2D(imBSampler, position).rgb;\n        vec3 diff = img - ref;\n        col = diff * diff / (ref * ref + 1e-4);\n    } else if (lossFunction == ' +
          s.LossFunction.L2 +
          ') {\n        vec3 img = texture2D(imASampler, position).rgb;\n        vec3 ref = texture2D(imBSampler, position).rgb;\n        vec3 diff = img - ref;\n        col = diff * diff;\n    } else if (lossFunction == ' +
          s.LossFunction.SSIM +
          ') {\n        const int windowRadius = 2; // We use a symmetric 5x5 window as opposed to the customary 8x8 (wiki)\n        const float L = 1.; // The dynamic range\n        const float k1 = 0.01, k2 = 0.03; // Default constants\n        const float c1 = (k1*L)*(k1*L), c2 = (k2*L)*(k2*L);\n        const float n = float((2 * windowRadius + 1) * (2 * windowRadius + 1));\n\n        // Compute means and standard deviations of both images\n        float aSum, aaSum, bSum, bbSum, abSum;\n        for (int x = 0; x <= 2 * windowRadius; ++x) {\n            for (int y = 0; y <= 2 * windowRadius; ++y) {\n                vec2 offset = vec2(float(x - windowRadius), float(y - windowRadius));\n                float a = luminance(applyViewTransform(lookupOffset(imASampler, position, offset), viewTransform));\n                float b = luminance(applyViewTransform(lookupOffset(imBSampler, position, offset), viewTransform));\n                aSum += a; bSum += b;\n                aaSum += a * a; bbSum += b * b;\n                abSum += a * b;\n            }\n        }\n        float aMean = aSum / n, bMean = bSum / n;\n        float aVar = (aaSum - n * aMean * aMean) / (n + 1.);\n        float bVar = (bbSum - n * bMean * bMean) / (n + 1.);\n        float abCovar = (abSum - n * aMean * bMean) / (n + 1.);\n\n        float numerator = (2. * aMean * bMean + c1) * (2. * abCovar + c2);\n        float denominator = (aMean * aMean + bMean * bMean + c1) * (aVar + bVar + c2);\n        float ssim = numerator / denominator;\n        col = vec3(1. - ssim, 1. - ssim, 1. - ssim);\n    } else {\n        col = texture2D(imASampler, position).rgb;\n        if (nChannels == 1) {\n            col = vec3(col.r, col.r, col.r);\n        }\n    }\n\n    if (mode == ' +
          o.LDR +
          ') {\n        col = pow(col, vec3(2.2));\n        col = GOG(col, exposure, offset, gamma);\n        col = applyViewTransform(col, viewTransform);\n    } else if (mode == ' +
          o.HDR +
          ') {\n        col = GOG(col, exposure, offset, gamma);\n        col = applyViewTransform(col, viewTransform);\n    } else {\n        float avg = (col.r + col.g + col.b) * 0.3333333333 * exposure;\n        col = texture2D(cmapSampler, vec2(avg, 0.0)).rgb;\n    }\n\n    gl_FragColor = vec4(col, 1.0);\n}',
        l = new Float32Array([
          -1, -1, 0, 0, 1, -1, 1, 0, 0, 0, 1, -1, 0, 1, 1, 1, 1, 0, 1, 0,
        ]),
        f = new Uint8Array([
          0, 0, 3, 255, 23, 15, 60, 255, 67, 15, 117, 255, 113, 31, 129, 255,
          158, 46, 126, 255, 205, 63, 112, 255, 240, 96, 93, 255, 253, 149, 103,
          255, 254, 201, 141, 255, 251, 252, 191, 255,
        ]);
      function h(t, e, n) {
        var r = n.createShader(e);
        if (!r) throw new Error('Creating shader failed with error.');
        if (
          (n.shaderSource(r, t),
          n.compileShader(r),
          !n.getShaderParameter(r, n.COMPILE_STATUS))
        )
          throw new Error(
            "Compiling shader failed with error '" +
              n.getShaderInfoLog(r) +
              "'."
          );
        return r;
      }
      var p = { viewTransform: 0, exposure: 1, gamma: 1, offset: 0 },
        d = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (
              (r.tonemappingSettings = p),
              (r.needsRerender = !0),
              (r.checkRender = r.checkRender.bind(r)),
              (r.invalidate = r.invalidate.bind(r)),
              r.initWebGl(e),
              (r.getTexture = u.default(r.createTexture.bind(r))),
              (r.needsRerender = !0),
              requestAnimationFrame(r.checkRender),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype.setTransformation = function (t) {
              (this.transformation = t), this.invalidate();
            }),
            (e.prototype.setTonemapping = function (t) {
              (this.tonemappingSettings = t), this.invalidate();
            }),
            (e.prototype.setImage = function (t) {
              (this.image = t), this.invalidate();
            }),
            (e.prototype.invalidate = function () {
              this.needsRerender = !0;
            }),
            (e.prototype.checkRender = function () {
              (this.resize() || this.needsRerender) &&
                ((this.needsRerender = !1), this.draw()),
                requestAnimationFrame(this.checkRender);
            }),
            (e.prototype.draw = function () {
              if (!this.cmapTexture)
                throw new Error(
                  'Textures need to be initialized before calling draw()'
                );
              this.gl.viewport(
                0,
                0,
                this.gl.drawingBufferWidth,
                this.gl.drawingBufferHeight
              ),
                this.gl.uniform1i(
                  this.glUniforms.viewTransform,
                  this.tonemappingSettings.viewTransform
                ),
                this.gl.uniform1f(
                  this.glUniforms.exposure,
                  this.tonemappingSettings.exposure
                ),
                this.gl.uniform1f(
                  this.glUniforms.offset,
                  this.tonemappingSettings.offset
                ),
                this.gl.uniform1f(
                  this.glUniforms.gamma,
                  this.tonemappingSettings.gamma
                ),
                this.gl.clear(
                  this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT
                ),
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadVertexBuffer),
                this.gl.vertexAttribPointer(
                  this.glAttributes.vertexPosition,
                  3,
                  this.gl.FLOAT,
                  !1,
                  5 * l.BYTES_PER_ELEMENT,
                  0
                ),
                this.gl.vertexAttribPointer(
                  this.glAttributes.vertexTextureCoordinate,
                  2,
                  this.gl.FLOAT,
                  !1,
                  5 * l.BYTES_PER_ELEMENT,
                  3 * l.BYTES_PER_ELEMENT
                ),
                this.gl.uniform1i(
                  this.glUniforms.imageHeight,
                  this.image.height
                ),
                this.gl.uniform1i(this.glUniforms.imageWidth, this.image.width),
                'Difference' === this.image.type
                  ? (this.gl.uniform1i(this.glUniforms.drawMode, o.ColorMap),
                    this.gl.uniform1i(
                      this.glUniforms.lossFunction,
                      this.image.lossFunction
                    ),
                    this.gl.activeTexture(this.gl.TEXTURE0),
                    this.gl.bindTexture(
                      this.gl.TEXTURE_2D,
                      this.getTexture(this.image.imageA)
                    ),
                    this.gl.uniform1i(this.glUniforms.imASampler, 0),
                    this.gl.activeTexture(this.gl.TEXTURE1),
                    this.gl.bindTexture(
                      this.gl.TEXTURE_2D,
                      this.getTexture(this.image.imageB)
                    ),
                    this.gl.uniform1i(this.glUniforms.imBSampler, 1))
                  : (1 === this.image.nChannels
                      ? this.gl.uniform1i(this.glUniforms.drawMode, o.ColorMap)
                      : 'HdrImage' === this.image.type
                      ? this.gl.uniform1i(this.glUniforms.drawMode, o.HDR)
                      : this.gl.uniform1i(this.glUniforms.drawMode, o.LDR),
                    this.gl.uniform1i(this.glUniforms.lossFunction, 0),
                    this.gl.activeTexture(this.gl.TEXTURE0),
                    this.gl.bindTexture(
                      this.gl.TEXTURE_2D,
                      this.getTexture(this.image)
                    ),
                    this.gl.uniform1i(this.glUniforms.imASampler, 0),
                    this.gl.activeTexture(this.gl.TEXTURE1),
                    this.gl.bindTexture(
                      this.gl.TEXTURE_2D,
                      this.getTexture(this.image)
                    ),
                    this.gl.uniform1i(this.glUniforms.imBSampler, 1)),
                this.gl.activeTexture(this.gl.TEXTURE2),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.cmapTexture),
                this.gl.uniform1i(this.glUniforms.cmapSampler, 2),
                this.gl.uniform1i(
                  this.glUniforms.nChannels,
                  this.image.nChannels
                );
              var t = this.getViewMatrix();
              this.gl.uniformMatrix4fv(this.glUniforms.viewMatrix, !1, t.data),
                this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
            }),
            (e.prototype.initWebGl = function (t) {
              if (((this.gl = t.getContext('webgl')), !this.gl))
                throw new Error(
                  'Please upgrade your browser to one that supports WebGL.'
                );
              if (!this.gl.getExtension('OES_texture_float'))
                throw new Error(
                  'Your browser does not supports WebGL FLoating Point Textures.'
                );
              this.gl.clearColor(0.25, 0.25, 0.25, 1),
                this.gl.enable(this.gl.DEPTH_TEST);
              var e = this.initShaders();
              (this.quadVertexBuffer = this.initQuadVertexBuffer()),
                (this.glAttributes = this.initAttributes(e)),
                (this.glUniforms = this.initUniforms(e)),
                (this.cmapTexture = this.initCmapTexture());
            }),
            (e.prototype.initShaders = function () {
              var t = h(
                  '\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nvarying vec2 vTextureCoord;\nuniform mat4 viewMatrix;\nvoid main(void) {\n    gl_Position = viewMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}',
                  this.gl.VERTEX_SHADER,
                  this.gl
                ),
                e = h(c, this.gl.FRAGMENT_SHADER, this.gl),
                n = this.gl.createProgram();
              if (
                (t &&
                  e &&
                  n &&
                  (this.gl.attachShader(n, t),
                  this.gl.attachShader(n, e),
                  this.gl.linkProgram(n)),
                !n || !this.gl.getProgramParameter(n, this.gl.LINK_STATUS))
              )
                throw new Error('Failed to link the program.');
              return this.gl.useProgram(n), n;
            }),
            (e.prototype.initCmapTexture = function () {
              var t = this.gl.createTexture();
              if (
                (this.gl.bindTexture(this.gl.TEXTURE_2D, t),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  this.gl.RGBA,
                  f.length / 4,
                  1,
                  0,
                  this.gl.RGBA,
                  this.gl.UNSIGNED_BYTE,
                  f
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_MIN_FILTER,
                  this.gl.LINEAR
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_MAG_FILTER,
                  this.gl.LINEAR
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_WRAP_S,
                  this.gl.CLAMP_TO_EDGE
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_WRAP_T,
                  this.gl.CLAMP_TO_EDGE
                ),
                !t)
              )
                throw new Error('Failed to initialize color map texture.');
              return t;
            }),
            (e.prototype.initQuadVertexBuffer = function () {
              var t = this.gl.createBuffer();
              if (
                (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t),
                this.gl.bufferData(
                  this.gl.ARRAY_BUFFER,
                  l,
                  this.gl.STATIC_DRAW
                ),
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null),
                !t)
              )
                throw new Error('Failed to initialize quad vertex buffer.');
              return t;
            }),
            (e.prototype.initAttributes = function (t) {
              var e = {
                vertexPosition: this.gl.getAttribLocation(t, 'aVertexPosition'),
                vertexTextureCoordinate: this.gl.getAttribLocation(
                  t,
                  'aTextureCoord'
                ),
              };
              return (
                this.gl.enableVertexAttribArray(e.vertexPosition),
                this.gl.enableVertexAttribArray(e.vertexTextureCoordinate),
                e
              );
            }),
            (e.prototype.initUniforms = function (t) {
              var e = this,
                n = function (n) {
                  var r = e.gl.getUniformLocation(t, n);
                  if (!r)
                    throw new Error(
                      "Failed to get uniform location for '" + n + "'."
                    );
                  return r;
                };
              return {
                drawMode: n('mode'),
                lossFunction: n('lossFunction'),
                nChannels: n('nChannels'),
                viewMatrix: n('viewMatrix'),
                imASampler: n('imASampler'),
                imBSampler: n('imBSampler'),
                cmapSampler: n('cmapSampler'),
                viewTransform: n('viewTransform'),
                exposure: n('exposure'),
                offset: n('offset'),
                gamma: n('gamma'),
                imageWidth: n('imageWidth'),
                imageHeight: n('imageHeight'),
              };
            }),
            (e.prototype.createTexture = function (t) {
              var e = this.gl.createTexture();
              if (!e) throw new Error('Failed to initialize image texture');
              if (
                (this.gl.bindTexture(this.gl.TEXTURE_2D, e),
                'HdrImage' === t.type)
              )
                if (1 === t.nChannels)
                  this.gl.texImage2D(
                    this.gl.TEXTURE_2D,
                    0,
                    this.gl.LUMINANCE,
                    t.width,
                    t.height,
                    0,
                    this.gl.LUMINANCE,
                    this.gl.FLOAT,
                    t.data
                  );
                else {
                  if (3 !== t.nChannels)
                    throw new Error(
                      "Don't know what to do with " +
                        t.nChannels +
                        ' image channels.'
                    );
                  this.gl.texImage2D(
                    this.gl.TEXTURE_2D,
                    0,
                    this.gl.RGB,
                    t.width,
                    t.height,
                    0,
                    this.gl.RGB,
                    this.gl.FLOAT,
                    t.data
                  );
                }
              else
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  this.gl.RGBA,
                  this.gl.RGBA,
                  this.gl.UNSIGNED_BYTE,
                  t.data
                );
              return (
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_WRAP_S,
                  this.gl.CLAMP_TO_EDGE
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_WRAP_T,
                  this.gl.CLAMP_TO_EDGE
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_MAG_FILTER,
                  this.gl.NEAREST
                ),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_MIN_FILTER,
                  this.gl.NEAREST
                ),
                this.gl.bindTexture(this.gl.TEXTURE_2D, null),
                e
              );
            }),
            e
          );
        })(s.default);
      e.default = d;
    },
    function (t, e, n) {
      'use strict';
      var r,
        i =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n(1),
        a = n(3),
        u = n(5),
        s = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            r.needsRerender = !0;
            var i = e.getContext('2d');
            if (null == i)
              throw new Error('Failed to create 2D context for TextOverlay');
            return (
              (r.context = i),
              (r.checkRender = r.checkRender.bind(r)),
              (r.invalidate = r.invalidate.bind(r)),
              (r.needsRerender = !0),
              requestAnimationFrame(r.checkRender),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype.setTransformation = function (t) {
              (this.transformation = t), this.invalidate();
            }),
            (e.prototype.setImage = function (t) {
              (this.image = t), this.invalidate();
            }),
            (e.prototype.invalidate = function () {
              this.needsRerender = !0;
            }),
            (e.prototype.checkRender = function () {
              (this.resize() || this.needsRerender) &&
                ((this.needsRerender = !1), this.draw()),
                requestAnimationFrame(this.checkRender);
            }),
            (e.prototype.draw = function () {
              var t = this.context.canvas,
                e = o.Vector4.fromValues(-1, 1, 0, 1),
                n = o.Vector4.fromValues(1, -1, 0, 1),
                r = this.getViewMatrix(),
                i = o.Matrix4x4.create();
              o.Matrix4x4.invert(i, r);
              var a = this.image;
              o.Vector4.transformMat4(e, e, i),
                o.Vector4.transformMat4(n, n, i),
                this.convertClipToRaster(e, e, a.width, a.height),
                this.convertClipToRaster(n, n, a.width, a.height);
              var s = Math.floor(e.data[0]),
                c = Math.floor(e.data[1]),
                l = Math.floor(n.data[0]),
                f = Math.floor(n.data[1]),
                h = Math.floor(20 * window.devicePixelRatio),
                p = Math.floor(16 * window.devicePixelRatio),
                d = t.width / (3 * h + 2),
                g = t.height / (3 * h + 2);
              if (
                (this.context.clearRect(0, 0, t.width, t.height),
                'Difference' !== a.type) &&
                n.data[0] - e.data[0] < d &&
                n.data[1] - e.data[1] < g
              ) {
                this.context.font = p + 'px sans-serif';
                for (
                  var m = Math.max(0, c);
                  m <= Math.min(a.height - 1, f);
                  m++
                )
                  for (
                    var v = Math.max(0, s);
                    v <= Math.min(a.width - 1, l);
                    v++
                  ) {
                    o.Vector4.set(e, v, m, 0, 1),
                      this.convertRasterToClip(e, e, a.width, a.height),
                      o.Vector4.transformMat4(e, e, r),
                      this.convertClipToRaster(e, e, t.width, t.height);
                    var y = void 0,
                      b = void 0,
                      _ = void 0;
                    1 === a.nChannels
                      ? ((y = u.getPixelColor(a, v, m, 0)),
                        (this.context.fillStyle = '#888888'),
                        this.context.fillText(
                          y.toFixed(4),
                          e.data[0],
                          e.data[1] + p
                        ))
                      : ((y = u.getPixelColor(a, v, m, 0)),
                        (b = u.getPixelColor(a, v, m, 1)),
                        (_ = u.getPixelColor(a, v, m, 2)),
                        (this.context.fillStyle = '#990000'),
                        this.context.fillText(
                          y.toFixed(4),
                          e.data[0],
                          e.data[1] + p
                        ),
                        (this.context.fillStyle = '#009900'),
                        this.context.fillText(
                          b.toFixed(4),
                          e.data[0],
                          e.data[1] + p + h
                        ),
                        (this.context.fillStyle = '#0000FF'),
                        this.context.fillText(
                          _.toFixed(4),
                          e.data[0],
                          e.data[1] + p + 2 * h
                        ));
                  }
              }
            }),
            (e.prototype.convertClipToRaster = function (t, e, n, r) {
              return (
                (t.data[0] = 0.5 * (e.data[0] + 1) * n),
                (t.data[1] = 0.5 * (1 - e.data[1]) * r),
                t
              );
            }),
            (e.prototype.convertRasterToClip = function (t, e, n, r) {
              return (
                (t.data[0] = (2 * e.data[0]) / n - 1),
                (t.data[1] = 1 - (2 * e.data[1]) / r),
                t
              );
            }),
            e
          );
        })(a.default);
      e.default = s;
    },
    function (t, e, n) {
      'use strict';
      var r,
        i =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n(1),
        a = n(3),
        u = n(19),
        s = (function (t) {
          function e(e, n, r) {
            var i,
              o = t.call(this, e, n) || this;
            return (
              (o.panningState = null),
              (o.unsubscribeFunctions = []),
              (o.handleMouseMove = o.handleMouseMove.bind(o)),
              (o.handleMouseDown = o.handleMouseDown.bind(o)),
              (o.handleMouseUp = o.handleMouseUp.bind(o)),
              (o.handleScroll = o.handleScroll.bind(o)),
              (o.handlePointReporting = o.handlePointReporting.bind(o)),
              (o.enableMouseEvents = r),
              document.addEventListener('mouseup', o.handleMouseUp),
              (i = document.removeEventListener.bind(
                document,
                'mouseup',
                o.handleMouseUp
              )),
              o.unsubscribeFunctions.push(i),
              document.addEventListener('mousemove', o.handleMouseMove),
              (i = document.removeEventListener.bind(
                document,
                'mousemove',
                o.handleMouseMove
              )),
              o.unsubscribeFunctions.push(i),
              e.addEventListener('wheel', o.handleScroll),
              (i = e.removeEventListener.bind(e, 'wheel', o.handleScroll)),
              o.unsubscribeFunctions.push(i),
              e.addEventListener('mousedown', o.handleMouseDown),
              (i = e.removeEventListener.bind(
                e,
                'mousedown',
                o.handleMouseDown
              )),
              o.unsubscribeFunctions.push(i),
              e.addEventListener('mousemove', o.handlePointReporting),
              (i = e.removeEventListener.bind(
                e,
                'mousemove',
                o.handlePointReporting
              )),
              o.unsubscribeFunctions.push(i),
              o
            );
          }
          return (
            i(e, t),
            (e.prototype.setTransformation = function (t, e) {
              void 0 === e && (e = !1),
                (this.transformation = t),
                e &&
                  null != this.transformationCallback &&
                  this.transformationCallback(t);
            }),
            (e.prototype.setEnableMouseEvents = function (t) {
              this.enableMouseEvents = t;
            }),
            (e.prototype.onTransformationChange = function (t) {
              this.transformationCallback = t;
            }),
            (e.prototype.setImage = function (t) {
              this.image = t;
            }),
            (e.prototype.onPointAt = function (t) {
              this.pointCallback = t;
            }),
            (e.prototype.destruct = function () {
              this.unsubscribeFunctions.forEach(function (t) {
                return t();
              });
            }),
            (e.prototype.handleMouseMove = function (t) {
              if (this.enableMouseEvents && this.panningState) {
                var e = this.relativeMousePosition(t.clientX, t.clientY),
                  n = e.x,
                  r = e.y,
                  i = n - this.panningState.previousMouse.x,
                  a = r - this.panningState.previousMouse.y,
                  u = o.Matrix4x4.create(),
                  s = this.getAspect();
                o.Matrix4x4.translate(u, u, [i / s.x, a / s.y, 0]),
                  o.Matrix4x4.multiply(u, u, this.transformation),
                  this.setTransformation(u, !0),
                  (this.panningState.previousMouse = { x: n, y: r });
              }
            }),
            (e.prototype.handleMouseUp = function (t) {
              this.panningState && (this.panningState = null);
            }),
            (e.prototype.handleMouseDown = function (t) {
              var e = this.relativeMousePosition(t.clientX, t.clientY);
              this.panningState = {
                transformationAtStart: o.Matrix4x4.clone(this.transformation),
                previousMouse: e,
              };
            }),
            (e.prototype.handleScroll = function (t) {
              if (this.enableMouseEvents) {
                t.preventDefault();
                var e = u(t).pixelY,
                  n = this.relativeMousePosition(t.clientX, t.clientY),
                  r = o.Matrix4x4.create(),
                  i = o.Matrix4x4.create(),
                  a = this.getAspect();
                o.Matrix4x4.translate(i, i, [n.x / a.x, n.y / a.y, 0]);
                var s = Math.pow(1.001, e);
                o.Matrix4x4.scale(i, i, [s, s, 1]),
                  o.Matrix4x4.translate(i, i, [-n.x / a.x, -n.y / a.y, 0]),
                  o.Matrix4x4.multiply(r, i, this.transformation),
                  this.setTransformation(r, !0);
              }
            }),
            (e.prototype.handlePointReporting = function (t) {
              if (this.pointCallback && !this.panningState) {
                var e = this.relativeMousePosition(t.clientX, t.clientY),
                  n = e.x,
                  r = e.y,
                  i = this.canvasToImage(n, r);
                this.pointCallback(i.x, i.y);
              }
            }),
            (e.prototype.relativeMousePosition = function (t, e) {
              var n = this.canvas,
                r = n.clientWidth,
                i = n.clientHeight,
                o = this.canvas.getBoundingClientRect();
              return {
                x: (2 * (t - o.left)) / r - 1,
                y: 1 - (2 * (e - o.top)) / i,
              };
            }),
            (e.prototype.canvasToImage = function (t, e) {
              var n = o.Vector4.create();
              o.Vector4.set(n, t, e, 1, 1);
              var r = o.Matrix4x4.create(),
                i = this.getViewMatrix();
              return (
                o.Matrix4x4.invert(r, i),
                o.Vector4.transformMat4(n, n, r),
                { x: n.data[0], y: n.data[1] }
              );
            }),
            e
          );
        })(a.default);
      e.default = s;
    },
    function (t, e, n) {
      t.exports = (function () {
        'use strict';
        return function (t) {
          function e(e) {
            if (e)
              try {
                t(e + '}');
              } catch (t) {}
          }
          return function (n, r, i, o, a, u, s, c, l, f) {
            switch (n) {
              case 1:
                if (0 === l && 64 === r.charCodeAt(0)) return t(r + ';'), '';
                break;
              case 2:
                if (0 === c) return r + '/*|*/';
                break;
              case 3:
                switch (c) {
                  case 102:
                  case 112:
                    return t(i[0] + r), '';
                  default:
                    return r + (0 === f ? '/*|*/' : '');
                }
              case -2:
                r.split('/*|*/}').forEach(e);
            }
          };
        };
      })();
    },
    function (t, e, n) {
      'use strict';
      e.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    function (t, e, n) {
      'use strict';
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            r.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        });
      e.a = i;
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(0),
        i = n(6),
        o = n(9);
      e.ImageFrame = o.default;
      var a = n(29);
      e.ImageViewer = a.default;
      var u = n(10);
      e.ImageLayer = u.default;
      var s = n(11);
      e.TextLayer = s.default;
      var c = n(12);
      e.MouseLayer = c.default;
      var l = n(5);
      (e.loadImage = l.loadImage), (e.ImageCache = l.ImageCache);
      var f = n(1);
      (e.Matrix4x4 = f.Matrix4x4),
        (e.Vector4 = f.Vector4),
        (e.renderViewer = function (t, e, n) {
          void 0 === n && (n = '');
          var o = r.createElement(a.default, {
            data: e,
            baseUrl: n,
            sortMenu: !1,
            removeCommonPrefix: !1,
          });
          return i.render(o, t);
        }),
        (e.default = a.default);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          var e = new Map();
          return function (n) {
            var r = e.get(n);
            if (r) return r;
            var i = t(n);
            return e.set(n, i), i;
          };
        });
    },
    function (t, e, n) {
      t.exports = function () {
        return new Worker('./exr.worker.js');
      };
    },
    function (t, e, n) {
      t.exports = n(20);
    },
    function (t, e, n) {
      'use strict';
      var r = n(21),
        i = n(22),
        o = 10,
        a = 40,
        u = 800;
      function s(t) {
        var e = 0,
          n = 0,
          r = 0,
          i = 0;
        return (
          'detail' in t && (n = t.detail),
          'wheelDelta' in t && (n = -t.wheelDelta / 120),
          'wheelDeltaY' in t && (n = -t.wheelDeltaY / 120),
          'wheelDeltaX' in t && (e = -t.wheelDeltaX / 120),
          'axis' in t && t.axis === t.HORIZONTAL_AXIS && ((e = n), (n = 0)),
          (r = e * o),
          (i = n * o),
          'deltaY' in t && (i = t.deltaY),
          'deltaX' in t && (r = t.deltaX),
          (r || i) &&
            t.deltaMode &&
            (1 == t.deltaMode ? ((r *= a), (i *= a)) : ((r *= u), (i *= u))),
          r && !e && (e = r < 1 ? -1 : 1),
          i && !n && (n = i < 1 ? -1 : 1),
          { spinX: e, spinY: n, pixelX: r, pixelY: i }
        );
      }
      (s.getEventType = function () {
        return r.firefox()
          ? 'DOMMouseScroll'
          : i('wheel')
          ? 'wheel'
          : 'mousewheel';
      }),
        (t.exports = s);
    },
    function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        u,
        s,
        c,
        l,
        f,
        h,
        p,
        d,
        g,
        m,
        v = !1;
      function y() {
        if (!v) {
          v = !0;
          var t = navigator.userAgent,
            e =
              /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                t
              ),
            y = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
          if (
            ((p = /\b(iPhone|iP[ao]d)/.exec(t)),
            (d = /\b(iP[ao]d)/.exec(t)),
            (f = /Android/i.exec(t)),
            (g = /FBAN\/\w+;/i.exec(t)),
            (m = /Mobile/i.exec(t)),
            (h = !!/Win64/.exec(t)),
            e)
          ) {
            (n = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) &&
              document &&
              document.documentMode &&
              (n = document.documentMode);
            var b = /(?:Trident\/(\d+.\d+))/.exec(t);
            (u = b ? parseFloat(b[1]) + 4 : n),
              (r = e[2] ? parseFloat(e[2]) : NaN),
              (i = e[3] ? parseFloat(e[3]) : NaN),
              (o = e[4] ? parseFloat(e[4]) : NaN)
                ? ((e = /(?:Chrome\/(\d+\.\d+))/.exec(t)),
                  (a = e && e[1] ? parseFloat(e[1]) : NaN))
                : (a = NaN);
          } else n = r = i = a = o = NaN;
          if (y) {
            if (y[1]) {
              var _ = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
              s = !_ || parseFloat(_[1].replace('_', '.'));
            } else s = !1;
            (c = !!y[2]), (l = !!y[3]);
          } else s = c = l = !1;
        }
      }
      var b = {
        ie: function () {
          return y() || n;
        },
        ieCompatibilityMode: function () {
          return y() || u > n;
        },
        ie64: function () {
          return b.ie() && h;
        },
        firefox: function () {
          return y() || r;
        },
        opera: function () {
          return y() || i;
        },
        webkit: function () {
          return y() || o;
        },
        safari: function () {
          return b.webkit();
        },
        chrome: function () {
          return y() || a;
        },
        windows: function () {
          return y() || c;
        },
        osx: function () {
          return y() || s;
        },
        linux: function () {
          return y() || l;
        },
        iphone: function () {
          return y() || p;
        },
        mobile: function () {
          return y() || p || d || f || m;
        },
        nativeApp: function () {
          return y() || g;
        },
        android: function () {
          return y() || f;
        },
        ipad: function () {
          return y() || d;
        },
      };
      t.exports = b;
    },
    function (t, e, n) {
      'use strict';
      var r,
        i = n(23);
      i.canUseDOM &&
        (r =
          document.implementation &&
          document.implementation.hasFeature &&
          !0 !== document.implementation.hasFeature('', '')),
        /**
         * Checks if an event is supported in the current execution environment.
         *
         * NOTE: This will not work correctly for non-generic events such as `change`,
         * `reset`, `load`, `error`, and `select`.
         *
         * Borrows from Modernizr.
         *
         * @param {string} eventNameSuffix Event name, e.g. "click".
         * @param {?boolean} capture Check if the capture phase is supported.
         * @return {boolean} True if the event is supported.
         * @internal
         * @license Modernizr 3.0.0pre (Custom Build) | MIT
         */ (t.exports = function (t, e) {
          if (!i.canUseDOM || (e && !('addEventListener' in document)))
            return !1;
          var n = 'on' + t,
            o = n in document;
          if (!o) {
            var a = document.createElement('div');
            a.setAttribute(n, 'return;'), (o = 'function' == typeof a[n]);
          }
          return (
            !o &&
              r &&
              'wheel' === t &&
              (o = document.implementation.hasFeature('Events.wheel', '3.0')),
            o
          );
        });
    },
    function (t, e, n) {
      'use strict';
      var r = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        i = {
          canUseDOM: r,
          canUseWorkers: 'undefined' != typeof Worker,
          canUseEventListeners:
            r && !(!window.addEventListener && !window.attachEvent),
          canUseViewport: r && !!window.screen,
          isInWorker: !r,
        };
      t.exports = i;
    },
    function (t, e) {
      var n,
        r,
        i = (t.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function u(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var s,
        c = [],
        l = !1,
        f = -1;
      function h() {
        l &&
          s &&
          ((l = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && p());
      }
      function p() {
        if (!l) {
          var t = u(h);
          l = !0;
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++f < e; ) s && s[f].run();
            (f = -1), (e = c.length);
          }
          (s = null),
            (l = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new d(t, e)), 1 !== c.length || l || u(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function () {
          return '/';
        }),
        (i.chdir = function (t) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      'use strict';
      /** @license React v16.8.6
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ Object.defineProperty(e, '__esModule', { value: !0 });
      var r = 'function' == typeof Symbol && Symbol.for,
        i = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        a = r ? Symbol.for('react.fragment') : 60107,
        u = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        h = r ? Symbol.for('react.concurrent_mode') : 60111,
        p = r ? Symbol.for('react.forward_ref') : 60112,
        d = r ? Symbol.for('react.suspense') : 60113,
        g = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116;
      function v(t) {
        if ('object' == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case i:
              switch ((t = t.type)) {
                case f:
                case h:
                case a:
                case s:
                case u:
                case d:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case p:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case m:
            case g:
            case o:
              return e;
          }
        }
      }
      function y(t) {
        return v(t) === h;
      }
      (e.typeOf = v),
        (e.AsyncMode = f),
        (e.ConcurrentMode = h),
        (e.ContextConsumer = l),
        (e.ContextProvider = c),
        (e.Element = i),
        (e.ForwardRef = p),
        (e.Fragment = a),
        (e.Lazy = m),
        (e.Memo = g),
        (e.Portal = o),
        (e.Profiler = s),
        (e.StrictMode = u),
        (e.Suspense = d),
        (e.isValidElementType = function (t) {
          return (
            'string' == typeof t ||
            'function' == typeof t ||
            t === a ||
            t === h ||
            t === s ||
            t === u ||
            t === d ||
            ('object' == typeof t &&
              null !== t &&
              (t.$$typeof === m ||
                t.$$typeof === g ||
                t.$$typeof === c ||
                t.$$typeof === l ||
                t.$$typeof === p))
          );
        }),
        (e.isAsyncMode = function (t) {
          return y(t) || v(t) === f;
        }),
        (e.isConcurrentMode = y),
        (e.isContextConsumer = function (t) {
          return v(t) === l;
        }),
        (e.isContextProvider = function (t) {
          return v(t) === c;
        }),
        (e.isElement = function (t) {
          return 'object' == typeof t && null !== t && t.$$typeof === i;
        }),
        (e.isForwardRef = function (t) {
          return v(t) === p;
        }),
        (e.isFragment = function (t) {
          return v(t) === a;
        }),
        (e.isLazy = function (t) {
          return v(t) === m;
        }),
        (e.isMemo = function (t) {
          return v(t) === g;
        }),
        (e.isPortal = function (t) {
          return v(t) === o;
        }),
        (e.isProfiler = function (t) {
          return v(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return v(t) === u;
        }),
        (e.isSuspense = function (t) {
          return v(t) === d;
        });
    },
    function (t, e, n) {
      t.exports = n(27)();
    },
    function (t, e, n) {
      'use strict';
      var r = n(28);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (t.exports = function () {
          function t(t, e, n, i, o, a) {
            if (a !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((u.name = 'Invariant Violation'), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (t, e, n) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (t, e, n) {
      'use strict';
      var r,
        i =
          (this && this.__makeTemplateObject) ||
          function (t, e) {
            return (
              Object.defineProperty
                ? Object.defineProperty(t, 'raw', { value: e })
                : (t.raw = e),
              t
            );
          },
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          }),
        a =
          (this && this.__assign) ||
          function () {
            return (a =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var u = n(0),
        s = n(4),
        c = n(30),
        l = n(2),
        f = n(1),
        h = n(33),
        p = n(34),
        d = n(35),
        g = n(3),
        m = n(36),
        v = n(37),
        y = l.default.div(
          E ||
            (E = i(
              [
                '\n  background-color: #333;\n  font-size: .9em;\n  position: absolute;\n  top: 0; bottom: 0; left: 0; right: 0;\n  display: flex;\n  flex-direction: column;\n  color: #AAA;\n',
              ],
              [
                '\n  background-color: #333;\n  font-size: .9em;\n  position: absolute;\n  top: 0; bottom: 0; left: 0; right: 0;\n  display: flex;\n  flex-direction: column;\n  color: #AAA;\n',
              ]
            ))
        ),
        b = l.default.div(
          T ||
            (T = i(
              ['\n  flex-grow: 1;\n  position: relative;\n'],
              ['\n  flex-grow: 1;\n  position: relative;\n']
            ))
        ),
        _ = l.default.div(
          A ||
            (A = i(
              [
                '\n  background-color: #333;\n  color: #AAA;\n  padding: 0;\n  font-size: x-small;\n',
              ],
              [
                '\n  background-color: #333;\n  color: #AAA;\n  padding: 0;\n  font-size: x-small;\n',
              ]
            ))
        ),
        w = l.default.span(
          C ||
            (C = i(
              [
                '\n  display: inline-block;\n  margin: 0px 1px;\n  padding: .4em .6em;\n  text-decoration: none;\n  color: #AAA;\n',
              ],
              [
                '\n  display: inline-block;\n  margin: 0px 1px;\n  padding: .4em .6em;\n  text-decoration: none;\n  color: #AAA;\n',
              ]
            ))
        ),
        x = l.default.a(
          k ||
            (k = i(
              [
                '\n  display: inline-block\n  background-color: #666;\n  color: #AAA;\n  margin: 0px 1px;\n  padding: .4em .6em;\n  text-decoration: none;\n  user-select: none;\n  -moz-user-select: none;\n',
              ],
              [
                '\n  display: inline-block\n  background-color: #666;\n  color: #AAA;\n  margin: 0px 1px;\n  padding: .4em .6em;\n  text-decoration: none;\n  user-select: none;\n  -moz-user-select: none;\n',
              ]
            ))
        ),
        S = !1;
      document.addEventListener('keydown', function (t) {
        'Shift' === t.key && (S = !0);
      }),
        document.addEventListener('keyup', function (t) {
          'Shift' === t.key && (S = !1);
        });
      var E,
        T,
        A,
        C,
        k,
        M = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            if (
              Boolean(n.props.selection) != Boolean(n.props.onSelectionChange)
            )
              throw new Error(
                'ImageViewer properties selection and onSelectionChange must both be set or both be unset.'
              );
            return (
              (n.state = {
                activeRow: 0,
                selection: n.getDefaultSelection(n.getMenu()).slice(1),
                viewTransform: { default: 0 },
                exposure: { default: 1 },
                helpIsOpen: !1,
                defaultTransformation: f.Matrix4x4.create(),
                transformationNeedsUpdate: !0,
                hasFocus: !1,
              }),
              (n.keyboardHandler = n.keyboardHandler.bind(n)),
              (n.setFocus = n.setFocus.bind(n)),
              (n.unsetFocus = n.unsetFocus.bind(n)),
              (n.validateSelection = s.default(n.validateSelection, c.isEqual)),
              (n.sortMenuRows = s.default(n.sortMenuRows, c.isEqual)),
              n
            );
          }
          return (
            o(e, t),
            (e.prototype.getSelection = function () {
              var t = this.props.selection
                ? this.props.selection
                : this.state.selection;
              return this.validateSelection(t, this.getMenu());
            }),
            (e.prototype.getMenu = function () {
              return this.props.sortMenu
                ? this.sortMenuRows(this.props.data)
                : this.props.data;
            }),
            (e.prototype.componentDidMount = function () {
              this.props.onSelectionChange &&
                this.props.onSelectionChange(this.getSelection()),
                this.mainContainer.setAttribute('tabindex', '1'),
                this.mainContainer.addEventListener(
                  'keydown',
                  this.keyboardHandler
                ),
                this.mainContainer.addEventListener('focus', this.setFocus),
                this.mainContainer.addEventListener(
                  'focusout',
                  this.unsetFocus
                );
            }),
            (e.prototype.componentDidUpdate = function (t) {
              if (
                (this.imageFrame &&
                  this.state.transformationNeedsUpdate &&
                  (this.imageFrame.setTransformation(
                    this.state.defaultTransformation
                  ),
                  this.setState({ transformationNeedsUpdate: !1 })),
                Boolean(this.props.selection) !=
                  Boolean(this.props.onSelectionChange))
              )
                throw new Error(
                  'ImageViewer properties selection and onSelectionChange must both be set or both be unset.'
                );
              if (
                this.props.selection &&
                !c.isEqual(this.props.selection, t.selection)
              ) {
                var e = this.getSelection();
                c.isEqual(e, this.props.selection) ||
                  this.updateSelectionState(e);
              }
            }),
            (e.prototype.componentWillUnmount = function () {
              this.mainContainer.removeEventListener(
                'keydown',
                this.keyboardHandler
              );
            }),
            (e.prototype.setTransformation = function (t) {
              null != this.imageFrame && this.imageFrame.setTransformation(t),
                this.setState({ defaultTransformation: t });
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.getMenu(),
                n = this.getSelection(),
                r = this.activeRows(e, n),
                i = this.imageSpec(n, e);
              return u.createElement(
                y,
                {
                  ref: function (e) {
                    return (t.mainContainer = e);
                  },
                },
                u.createElement(
                  'div',
                  null,
                  r.map(function (e, i) {
                    return u.createElement(v.NavRow, {
                      key: e.title,
                      row: e,
                      selection: n[i],
                      handleClick: t.navigateTo.bind(t, r, i),
                      removeCommonPrefix: t.props.removeCommonPrefix,
                      active: t.state.activeRow === i,
                    });
                  })
                ),
                u.createElement(
                  b,
                  null,
                  u.createElement(m.default, {
                    viewTransform: this.state.viewTransform[i.tonemapGroup],
                    exposure: this.state.exposure[i.tonemapGroup] || 1,
                    gamma: 1,
                    offset: 0,
                    imageSpec: i,
                    ref: function (e) {
                      return (t.imageFrame = null != e ? e.imageFrame : null);
                    },
                    allowMovement: !0,
                    enableMouseEvents: this.state.hasFocus,
                  }),
                  this.state.helpIsOpen
                    ? u.createElement(d.default, null)
                    : null
                ),
                this.renderImageSpec(i)
              );
            }),
            (e.prototype.renderImageSpec = function (t) {
              return this.props.showInfo
                ? 'Difference' === t.type
                  ? ((t = t),
                    u.createElement(
                      _,
                      null,
                      u.createElement(
                        x,
                        { href: t.urlA },
                        t.urlA.split('/').pop()
                      ),
                      u.createElement(
                        x,
                        { href: t.urlB },
                        t.urlB.split('/').pop()
                      ),
                      u.createElement(
                        w,
                        null,
                        'Loss: ',
                        g.LossFunction[t.lossFunction]
                      ),
                      u.createElement(
                        w,
                        null,
                        'Exposure: ',
                        (this.state.exposure[t.tonemapGroup] || 1).toPrecision(
                          3
                        )
                      )
                    ))
                  : 'Url' === t.type
                  ? ((t = t),
                    u.createElement(
                      _,
                      null,
                      u.createElement(
                        x,
                        { href: t.url },
                        t.url.split('/').pop()
                      ),
                      u.createElement(
                        w,
                        null,
                        'Exposure: ',
                        this.state.exposure[t.tonemapGroup].toPrecision(3) || 1
                      )
                    ))
                  : u.createElement(u.Fragment, null)
                : u.createElement(u.Fragment, null);
            }),
            (e.prototype.activeRows = function (t, e) {
              if (0 === e.length) return [];
              if (!t.hasOwnProperty('children'))
                throw new Error("Can't find match for " + e);
              var n = t,
                r = n.children.find(function (t) {
                  return t.title === e[0];
                });
              return null == r
                ? []
                : [n].concat(this.activeRows(r, e.slice(1)));
            }),
            (e.prototype.sortMenuRows = function (t) {
              var e = this;
              if (t.hasOwnProperty('children')) {
                var n = t,
                  r = n.children.map(function (t) {
                    return e.sortMenuRows(t);
                  });
                return (
                  r.sort(function (t, e) {
                    return t.title === e.title
                      ? 0
                      : 'Color' === t.title
                      ? -1
                      : 'Color' === e.title
                      ? 1
                      : h.default(t.title, e.title);
                  }),
                  { title: n.title, children: r }
                );
              }
              return t;
            }),
            (e.prototype.currentImage = function (t, e) {
              for (
                var n = t.slice(),
                  r = e,
                  i = function () {
                    var t = n.shift();
                    r = r.children.find(function (e) {
                      return e.title === t;
                    });
                  };
                n.length > 0;

              )
                i();
              return r;
            }),
            (e.prototype.imageSpec = function (t, e) {
              var n = this.currentImage(t, e);
              if (n.hasOwnProperty('lossMap')) {
                var r = n;
                return {
                  type: 'Difference',
                  lossFunction: g.lossFunctionFromString(r.lossMap.function),
                  urlA: this.props.baseUrl + r.lossMap.imageA,
                  urlB: this.props.baseUrl + r.lossMap.imageB,
                  tonemapGroup: r.tonemapGroup || 'default',
                };
              }
              return {
                type: 'Url',
                url: this.props.baseUrl + n.image,
                tonemapGroup: n.tonemapGroup || 'default',
              };
            }),
            (e.prototype.navigateTo = function (t, e, n) {
              var r = this.getSelection().slice();
              r[e] = n;
              var i = this.state.activeRow;
              S && (i = e),
                this.state.activeRow !== i &&
                  this.setState({ activeRow: Math.min(i, r.length - 1) }),
                this.updateSelectionState(r);
            }),
            (e.prototype.validateSelection = function (t, e) {
              for (
                var n = [],
                  r = 0,
                  i = function () {
                    var i = e.children.find(function (e) {
                      return e.title === t[r];
                    });
                    if (i) e = i;
                    else if (r < t.length && t[r]) {
                      var o = t[r],
                        a = e.children
                          .map(function (t) {
                            return (function (t, e) {
                              for (
                                var n = Math.min(t.length, e.length),
                                  r = Math.max(t.length, e.length) - n,
                                  i = 0;
                                i < n;
                                ++i
                              )
                                t[i] !== e[i] && ++r;
                              return r;
                            })(t.title, o);
                          })
                          .reduce(
                            function (t, e, n) {
                              return e < t.val ? { val: e, idx: n } : t;
                            },
                            { val: Number.MAX_SAFE_INTEGER, idx: 0 }
                          );
                      e = e.children[a.idx];
                    } else e = e.children[0];
                    n.push(e.title), r++;
                  };
                e.hasOwnProperty('children');

              )
                i();
              return n;
            }),
            (e.prototype.updateSelectionState = function (t) {
              this.props.selection
                ? c.isEqual(t, this.props.selection) ||
                  (this.props.onSelectionChange &&
                    this.props.onSelectionChange(t))
                : c.isEqual(t, this.state.selection) ||
                  this.setState({ selection: t });
            }),
            (e.prototype.getDefaultSelection = function (t) {
              if (t.hasOwnProperty('children')) {
                var e = t;
                return e.children.length > 0
                  ? [e.title].concat(this.getDefaultSelection(e.children[0]))
                  : [e.title];
              }
              return [t.title];
            }),
            (e.prototype.dumpTransformation = function () {
              if (null != this.imageFrame) {
                var t = this.imageFrame.getTransformation();
                console.log(t.data);
              }
            }),
            (e.prototype.keyboardHandler = function (t) {
              var e = this,
                n = t.key,
                r = {},
                i = {},
                o = function (t) {
                  return function () {
                    var n = e.activeRows(e.getMenu(), e.getSelection()),
                      r = e.state.activeRow,
                      i = n[r].children[t];
                    null != i && e.navigateTo(n, r, i.title);
                  };
                };
              r[0] = o(9);
              for (var u = 1; u <= 9; ++u) r[u.toString()] = o(u - 1);
              var s = function (t) {
                return function () {
                  var n = e.getSelection(),
                    r = e.activeRows(e.getMenu(), n),
                    i = e.state.activeRow,
                    o = n[i],
                    a =
                      (r[i].children.findIndex(function (t) {
                        return t.title === o;
                      }) +
                        t +
                        r[i].children.length) %
                      r[i].children.length,
                    u = r[i].children[a];
                  e.navigateTo(r, i, u.title);
                };
              };
              (i.ArrowLeft = s(-1)),
                (i.ArrowRight = s(1)),
                (r['-'] = s(-1)),
                (r['='] = s(1));
              var c = function (t) {
                return function () {
                  var n = e.getSelection(),
                    r = e.state.activeRow + t;
                  r < 0 && (r = 0),
                    r >= n.length - 1 && (r = n.length - 1),
                    e.setState({ activeRow: r });
                };
              };
              (i.ArrowUp = c(-1)),
                (i.ArrowDown = c(1)),
                (r['['] = c(-1)),
                (r[']'] = c(1));
              r.t = function () {
                var t,
                  n = e.getSelection(),
                  r = e.imageSpec(n, e.getMenu()).tonemapGroup,
                  i = a(
                    {},
                    e.state.viewTransform,
                    (((t = {})[r] = Math.abs(e.state.viewTransform[r] - 1)), t)
                  );
                e.setState({ viewTransform: i });
              };
              var l = function (t) {
                return function () {
                  var n,
                    r = e.getSelection(),
                    i = e.imageSpec(r, e.getMenu()).tonemapGroup,
                    o = a(
                      {},
                      e.state.exposure,
                      (((n = {})[i] = t * (e.state.exposure[i] || 1)), n)
                    );
                  e.setState({ exposure: o });
                };
              };
              return (
                (r.e = l(1.1)),
                (r.E = l(1 / 1.1)),
                (r.r = function () {
                  e.setState({ viewTransform: { default: 0 } }),
                    e.setState({ exposure: { default: 1 } }),
                    e.imageFrame && e.imageFrame.reset();
                }),
                (r['/'] = r['?'] =
                  function () {
                    e.setState({ helpIsOpen: !e.state.helpIsOpen });
                  }),
                (r.Escape = function () {
                  e.setState({ helpIsOpen: !1 });
                }),
                (r.f = function () {
                  return p.default(e.mainContainer);
                }),
                (r.d = function () {
                  return e.dumpTransformation();
                }),
                !r.hasOwnProperty(n) || t.metaKey || t.altKey || t.ctrlKey
                  ? i.hasOwnProperty(n) && t.shiftKey
                    ? (t.preventDefault(), void i[n]())
                    : void 0
                  : (t.preventDefault(), void r[n]())
              );
            }),
            (e.prototype.setFocus = function () {
              this.setState({ hasFocus: !0 });
            }),
            (e.prototype.unsetFocus = function () {
              this.setState({ hasFocus: !1 });
            }),
            (e.defaultProps = {
              baseUrl: '',
              sortMenu: !1,
              removeCommonPrefix: !1,
              showInfo: !0,
            }),
            e
          );
        })(u.Component);
      e.default = M;
    },
    function (t, e, n) {
      (function (t, r) {
        var i;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */ (function () {
          var o,
            a = 200,
            u =
              'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
            s = 'Expected a function',
            c = '__lodash_hash_undefined__',
            l = 500,
            f = '__lodash_placeholder__',
            h = 1,
            p = 2,
            d = 4,
            g = 1,
            m = 2,
            v = 1,
            y = 2,
            b = 4,
            _ = 8,
            w = 16,
            x = 32,
            S = 64,
            E = 128,
            T = 256,
            A = 512,
            C = 30,
            k = '...',
            M = 800,
            R = 16,
            O = 1,
            I = 2,
            j = 1 / 0,
            P = 9007199254740991,
            L = 1.7976931348623157e308,
            F = NaN,
            D = 4294967295,
            U = D - 1,
            N = D >>> 1,
            B = [
              ['ary', E],
              ['bind', v],
              ['bindKey', y],
              ['curry', _],
              ['curryRight', w],
              ['flip', A],
              ['partial', x],
              ['partialRight', S],
              ['rearg', T],
            ],
            z = '[object Arguments]',
            W = '[object Array]',
            $ = '[object AsyncFunction]',
            G = '[object Boolean]',
            H = '[object Date]',
            V = '[object DOMException]',
            q = '[object Error]',
            X = '[object Function]',
            Y = '[object GeneratorFunction]',
            K = '[object Map]',
            Z = '[object Number]',
            J = '[object Null]',
            Q = '[object Object]',
            tt = '[object Proxy]',
            et = '[object RegExp]',
            nt = '[object Set]',
            rt = '[object String]',
            it = '[object Symbol]',
            ot = '[object Undefined]',
            at = '[object WeakMap]',
            ut = '[object WeakSet]',
            st = '[object ArrayBuffer]',
            ct = '[object DataView]',
            lt = '[object Float32Array]',
            ft = '[object Float64Array]',
            ht = '[object Int8Array]',
            pt = '[object Int16Array]',
            dt = '[object Int32Array]',
            gt = '[object Uint8Array]',
            mt = '[object Uint8ClampedArray]',
            vt = '[object Uint16Array]',
            yt = '[object Uint32Array]',
            bt = /\b__p \+= '';/g,
            _t = /\b(__p \+=) '' \+/g,
            wt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            xt = /&(?:amp|lt|gt|quot|#39);/g,
            St = /[&<>"']/g,
            Et = RegExp(xt.source),
            Tt = RegExp(St.source),
            At = /<%-([\s\S]+?)%>/g,
            Ct = /<%([\s\S]+?)%>/g,
            kt = /<%=([\s\S]+?)%>/g,
            Mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Rt = /^\w*$/,
            Ot =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            It = /[\\^$.*+?()[\]{}|]/g,
            jt = RegExp(It.source),
            Pt = /^\s+|\s+$/g,
            Lt = /^\s+/,
            Ft = /\s+$/,
            Dt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            Ut = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Nt = /,? & /,
            Bt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            zt = /\\(\\)?/g,
            Wt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            $t = /\w*$/,
            Gt = /^[-+]0x[0-9a-f]+$/i,
            Ht = /^0b[01]+$/i,
            Vt = /^\[object .+?Constructor\]$/,
            qt = /^0o[0-7]+$/i,
            Xt = /^(?:0|[1-9]\d*)$/,
            Yt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Kt = /($^)/,
            Zt = /['\n\r\u2028\u2029\\]/g,
            Jt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
            Qt =
              '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
            te = '[\\ud800-\\udfff]',
            ee = '[' + Qt + ']',
            ne = '[' + Jt + ']',
            re = '\\d+',
            ie = '[\\u2700-\\u27bf]',
            oe = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
            ae =
              '[^\\ud800-\\udfff' +
              Qt +
              re +
              '\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
            ue = '\\ud83c[\\udffb-\\udfff]',
            se = '[^\\ud800-\\udfff]',
            ce = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            le = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            fe = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
            he = '(?:' + oe + '|' + ae + ')',
            pe = '(?:' + fe + '|' + ae + ')',
            de = '(?:' + ne + '|' + ue + ')' + '?',
            ge =
              '[\\ufe0e\\ufe0f]?' +
              de +
              ('(?:\\u200d(?:' +
                [se, ce, le].join('|') +
                ')[\\ufe0e\\ufe0f]?' +
                de +
                ')*'),
            me = '(?:' + [ie, ce, le].join('|') + ')' + ge,
            ve = '(?:' + [se + ne + '?', ne, ce, le, te].join('|') + ')',
            ye = RegExp("['’]", 'g'),
            be = RegExp(ne, 'g'),
            _e = RegExp(ue + '(?=' + ue + ')|' + ve + ge, 'g'),
            we = RegExp(
              [
                fe +
                  '?' +
                  oe +
                  "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                  [ee, fe, '$'].join('|') +
                  ')',
                pe +
                  "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                  [ee, fe + he, '$'].join('|') +
                  ')',
                fe + '?' + he + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
                fe + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                re,
                me,
              ].join('|'),
              'g'
            ),
            xe = RegExp('[\\u200d\\ud800-\\udfff' + Jt + '\\ufe0e\\ufe0f]'),
            Se =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Ee = [
              'Array',
              'Buffer',
              'DataView',
              'Date',
              'Error',
              'Float32Array',
              'Float64Array',
              'Function',
              'Int8Array',
              'Int16Array',
              'Int32Array',
              'Map',
              'Math',
              'Object',
              'Promise',
              'RegExp',
              'Set',
              'String',
              'Symbol',
              'TypeError',
              'Uint8Array',
              'Uint8ClampedArray',
              'Uint16Array',
              'Uint32Array',
              'WeakMap',
              '_',
              'clearTimeout',
              'isFinite',
              'parseInt',
              'setTimeout',
            ],
            Te = -1,
            Ae = {};
          (Ae[lt] =
            Ae[ft] =
            Ae[ht] =
            Ae[pt] =
            Ae[dt] =
            Ae[gt] =
            Ae[mt] =
            Ae[vt] =
            Ae[yt] =
              !0),
            (Ae[z] =
              Ae[W] =
              Ae[st] =
              Ae[G] =
              Ae[ct] =
              Ae[H] =
              Ae[q] =
              Ae[X] =
              Ae[K] =
              Ae[Z] =
              Ae[Q] =
              Ae[et] =
              Ae[nt] =
              Ae[rt] =
              Ae[at] =
                !1);
          var Ce = {};
          (Ce[z] =
            Ce[W] =
            Ce[st] =
            Ce[ct] =
            Ce[G] =
            Ce[H] =
            Ce[lt] =
            Ce[ft] =
            Ce[ht] =
            Ce[pt] =
            Ce[dt] =
            Ce[K] =
            Ce[Z] =
            Ce[Q] =
            Ce[et] =
            Ce[nt] =
            Ce[rt] =
            Ce[it] =
            Ce[gt] =
            Ce[mt] =
            Ce[vt] =
            Ce[yt] =
              !0),
            (Ce[q] = Ce[X] = Ce[at] = !1);
          var ke = {
              '\\': '\\',
              "'": "'",
              '\n': 'n',
              '\r': 'r',
              '\u2028': 'u2028',
              '\u2029': 'u2029',
            },
            Me = parseFloat,
            Re = parseInt,
            Oe = 'object' == typeof t && t && t.Object === Object && t,
            Ie =
              'object' == typeof self && self && self.Object === Object && self,
            je = Oe || Ie || Function('return this')(),
            Pe = e && !e.nodeType && e,
            Le = Pe && 'object' == typeof r && r && !r.nodeType && r,
            Fe = Le && Le.exports === Pe,
            De = Fe && Oe.process,
            Ue = (function () {
              try {
                var t = Le && Le.require && Le.require('util').types;
                return t || (De && De.binding && De.binding('util'));
              } catch (t) {}
            })(),
            Ne = Ue && Ue.isArrayBuffer,
            Be = Ue && Ue.isDate,
            ze = Ue && Ue.isMap,
            We = Ue && Ue.isRegExp,
            $e = Ue && Ue.isSet,
            Ge = Ue && Ue.isTypedArray;
          function He(t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, n[0]);
              case 2:
                return t.call(e, n[0], n[1]);
              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
          }
          function Ve(t, e, n, r) {
            for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
              var a = t[i];
              e(r, a, n(a), t);
            }
            return r;
          }
          function qe(t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length;
              ++n < r && !1 !== e(t[n], n, t);

            );
            return t;
          }
          function Xe(t, e) {
            for (
              var n = null == t ? 0 : t.length;
              n-- && !1 !== e(t[n], n, t);

            );
            return t;
          }
          function Ye(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (!e(t[n], n, t)) return !1;
            return !0;
          }
          function Ke(t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
              ++n < r;

            ) {
              var a = t[n];
              e(a, n, t) && (o[i++] = a);
            }
            return o;
          }
          function Ze(t, e) {
            return !!(null == t ? 0 : t.length) && sn(t, e, 0) > -1;
          }
          function Je(t, e, n) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
              if (n(e, t[r])) return !0;
            return !1;
          }
          function Qe(t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length, i = Array(r);
              ++n < r;

            )
              i[n] = e(t[n], n, t);
            return i;
          }
          function tn(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; )
              t[i + n] = e[n];
            return t;
          }
          function en(t, e, n, r) {
            var i = -1,
              o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
            return n;
          }
          function nn(t, e, n, r) {
            var i = null == t ? 0 : t.length;
            for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t);
            return n;
          }
          function rn(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (e(t[n], n, t)) return !0;
            return !1;
          }
          var on = hn('length');
          function an(t, e, n) {
            var r;
            return (
              n(t, function (t, n, i) {
                if (e(t, n, i)) return (r = n), !1;
              }),
              r
            );
          }
          function un(t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
              if (e(t[o], o, t)) return o;
            return -1;
          }
          function sn(t, e, n) {
            return e == e
              ? (function (t, e, n) {
                  var r = n - 1,
                    i = t.length;
                  for (; ++r < i; ) if (t[r] === e) return r;
                  return -1;
                })(t, e, n)
              : un(t, ln, n);
          }
          function cn(t, e, n, r) {
            for (var i = n - 1, o = t.length; ++i < o; )
              if (r(t[i], e)) return i;
            return -1;
          }
          function ln(t) {
            return t != t;
          }
          function fn(t, e) {
            var n = null == t ? 0 : t.length;
            return n ? gn(t, e) / n : F;
          }
          function hn(t) {
            return function (e) {
              return null == e ? o : e[t];
            };
          }
          function pn(t) {
            return function (e) {
              return null == t ? o : t[e];
            };
          }
          function dn(t, e, n, r, i) {
            return (
              i(t, function (t, i, o) {
                n = r ? ((r = !1), t) : e(n, t, i, o);
              }),
              n
            );
          }
          function gn(t, e) {
            for (var n, r = -1, i = t.length; ++r < i; ) {
              var a = e(t[r]);
              a !== o && (n = n === o ? a : n + a);
            }
            return n;
          }
          function mn(t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
          }
          function vn(t) {
            return function (e) {
              return t(e);
            };
          }
          function yn(t, e) {
            return Qe(e, function (e) {
              return t[e];
            });
          }
          function bn(t, e) {
            return t.has(e);
          }
          function _n(t, e) {
            for (var n = -1, r = t.length; ++n < r && sn(e, t[n], 0) > -1; );
            return n;
          }
          function wn(t, e) {
            for (var n = t.length; n-- && sn(e, t[n], 0) > -1; );
            return n;
          }
          var xn = pn({
              À: 'A',
              Á: 'A',
              Â: 'A',
              Ã: 'A',
              Ä: 'A',
              Å: 'A',
              à: 'a',
              á: 'a',
              â: 'a',
              ã: 'a',
              ä: 'a',
              å: 'a',
              Ç: 'C',
              ç: 'c',
              Ð: 'D',
              ð: 'd',
              È: 'E',
              É: 'E',
              Ê: 'E',
              Ë: 'E',
              è: 'e',
              é: 'e',
              ê: 'e',
              ë: 'e',
              Ì: 'I',
              Í: 'I',
              Î: 'I',
              Ï: 'I',
              ì: 'i',
              í: 'i',
              î: 'i',
              ï: 'i',
              Ñ: 'N',
              ñ: 'n',
              Ò: 'O',
              Ó: 'O',
              Ô: 'O',
              Õ: 'O',
              Ö: 'O',
              Ø: 'O',
              ò: 'o',
              ó: 'o',
              ô: 'o',
              õ: 'o',
              ö: 'o',
              ø: 'o',
              Ù: 'U',
              Ú: 'U',
              Û: 'U',
              Ü: 'U',
              ù: 'u',
              ú: 'u',
              û: 'u',
              ü: 'u',
              Ý: 'Y',
              ý: 'y',
              ÿ: 'y',
              Æ: 'Ae',
              æ: 'ae',
              Þ: 'Th',
              þ: 'th',
              ß: 'ss',
              Ā: 'A',
              Ă: 'A',
              Ą: 'A',
              ā: 'a',
              ă: 'a',
              ą: 'a',
              Ć: 'C',
              Ĉ: 'C',
              Ċ: 'C',
              Č: 'C',
              ć: 'c',
              ĉ: 'c',
              ċ: 'c',
              č: 'c',
              Ď: 'D',
              Đ: 'D',
              ď: 'd',
              đ: 'd',
              Ē: 'E',
              Ĕ: 'E',
              Ė: 'E',
              Ę: 'E',
              Ě: 'E',
              ē: 'e',
              ĕ: 'e',
              ė: 'e',
              ę: 'e',
              ě: 'e',
              Ĝ: 'G',
              Ğ: 'G',
              Ġ: 'G',
              Ģ: 'G',
              ĝ: 'g',
              ğ: 'g',
              ġ: 'g',
              ģ: 'g',
              Ĥ: 'H',
              Ħ: 'H',
              ĥ: 'h',
              ħ: 'h',
              Ĩ: 'I',
              Ī: 'I',
              Ĭ: 'I',
              Į: 'I',
              İ: 'I',
              ĩ: 'i',
              ī: 'i',
              ĭ: 'i',
              į: 'i',
              ı: 'i',
              Ĵ: 'J',
              ĵ: 'j',
              Ķ: 'K',
              ķ: 'k',
              ĸ: 'k',
              Ĺ: 'L',
              Ļ: 'L',
              Ľ: 'L',
              Ŀ: 'L',
              Ł: 'L',
              ĺ: 'l',
              ļ: 'l',
              ľ: 'l',
              ŀ: 'l',
              ł: 'l',
              Ń: 'N',
              Ņ: 'N',
              Ň: 'N',
              Ŋ: 'N',
              ń: 'n',
              ņ: 'n',
              ň: 'n',
              ŋ: 'n',
              Ō: 'O',
              Ŏ: 'O',
              Ő: 'O',
              ō: 'o',
              ŏ: 'o',
              ő: 'o',
              Ŕ: 'R',
              Ŗ: 'R',
              Ř: 'R',
              ŕ: 'r',
              ŗ: 'r',
              ř: 'r',
              Ś: 'S',
              Ŝ: 'S',
              Ş: 'S',
              Š: 'S',
              ś: 's',
              ŝ: 's',
              ş: 's',
              š: 's',
              Ţ: 'T',
              Ť: 'T',
              Ŧ: 'T',
              ţ: 't',
              ť: 't',
              ŧ: 't',
              Ũ: 'U',
              Ū: 'U',
              Ŭ: 'U',
              Ů: 'U',
              Ű: 'U',
              Ų: 'U',
              ũ: 'u',
              ū: 'u',
              ŭ: 'u',
              ů: 'u',
              ű: 'u',
              ų: 'u',
              Ŵ: 'W',
              ŵ: 'w',
              Ŷ: 'Y',
              ŷ: 'y',
              Ÿ: 'Y',
              Ź: 'Z',
              Ż: 'Z',
              Ž: 'Z',
              ź: 'z',
              ż: 'z',
              ž: 'z',
              Ĳ: 'IJ',
              ĳ: 'ij',
              Œ: 'Oe',
              œ: 'oe',
              ŉ: "'n",
              ſ: 's',
            }),
            Sn = pn({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            });
          function En(t) {
            return '\\' + ke[t];
          }
          function Tn(t) {
            return xe.test(t);
          }
          function An(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function Cn(t, e) {
            return function (n) {
              return t(e(n));
            };
          }
          function kn(t, e) {
            for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
              var a = t[n];
              (a !== e && a !== f) || ((t[n] = f), (o[i++] = n));
            }
            return o;
          }
          function Mn(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          function Rn(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = [t, t];
              }),
              n
            );
          }
          function On(t) {
            return Tn(t)
              ? (function (t) {
                  var e = (_e.lastIndex = 0);
                  for (; _e.test(t); ) ++e;
                  return e;
                })(t)
              : on(t);
          }
          function In(t) {
            return Tn(t)
              ? (function (t) {
                  return t.match(_e) || [];
                })(t)
              : (function (t) {
                  return t.split('');
                })(t);
          }
          var jn = pn({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
          });
          var Pn = (function t(e) {
            var n,
              r = (e =
                null == e ? je : Pn.defaults(je.Object(), e, Pn.pick(je, Ee)))
                .Array,
              i = e.Date,
              Jt = e.Error,
              Qt = e.Function,
              te = e.Math,
              ee = e.Object,
              ne = e.RegExp,
              re = e.String,
              ie = e.TypeError,
              oe = r.prototype,
              ae = Qt.prototype,
              ue = ee.prototype,
              se = e['__core-js_shared__'],
              ce = ae.toString,
              le = ue.hasOwnProperty,
              fe = 0,
              he = (n = /[^.]+$/.exec(
                (se && se.keys && se.keys.IE_PROTO) || ''
              ))
                ? 'Symbol(src)_1.' + n
                : '',
              pe = ue.toString,
              de = ce.call(ee),
              ge = je._,
              me = ne(
                '^' +
                  ce
                    .call(le)
                    .replace(It, '\\$&')
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      '$1.*?'
                    ) +
                  '$'
              ),
              ve = Fe ? e.Buffer : o,
              _e = e.Symbol,
              xe = e.Uint8Array,
              ke = ve ? ve.allocUnsafe : o,
              Oe = Cn(ee.getPrototypeOf, ee),
              Ie = ee.create,
              Pe = ue.propertyIsEnumerable,
              Le = oe.splice,
              De = _e ? _e.isConcatSpreadable : o,
              Ue = _e ? _e.iterator : o,
              on = _e ? _e.toStringTag : o,
              pn = (function () {
                try {
                  var t = No(ee, 'defineProperty');
                  return t({}, '', {}), t;
                } catch (t) {}
              })(),
              Ln = e.clearTimeout !== je.clearTimeout && e.clearTimeout,
              Fn = i && i.now !== je.Date.now && i.now,
              Dn = e.setTimeout !== je.setTimeout && e.setTimeout,
              Un = te.ceil,
              Nn = te.floor,
              Bn = ee.getOwnPropertySymbols,
              zn = ve ? ve.isBuffer : o,
              Wn = e.isFinite,
              $n = oe.join,
              Gn = Cn(ee.keys, ee),
              Hn = te.max,
              Vn = te.min,
              qn = i.now,
              Xn = e.parseInt,
              Yn = te.random,
              Kn = oe.reverse,
              Zn = No(e, 'DataView'),
              Jn = No(e, 'Map'),
              Qn = No(e, 'Promise'),
              tr = No(e, 'Set'),
              er = No(e, 'WeakMap'),
              nr = No(ee, 'create'),
              rr = er && new er(),
              ir = {},
              or = fa(Zn),
              ar = fa(Jn),
              ur = fa(Qn),
              sr = fa(tr),
              cr = fa(er),
              lr = _e ? _e.prototype : o,
              fr = lr ? lr.valueOf : o,
              hr = lr ? lr.toString : o;
            function pr(t) {
              if (ku(t) && !vu(t) && !(t instanceof vr)) {
                if (t instanceof mr) return t;
                if (le.call(t, '__wrapped__')) return ha(t);
              }
              return new mr(t);
            }
            var dr = (function () {
              function t() {}
              return function (e) {
                if (!Cu(e)) return {};
                if (Ie) return Ie(e);
                t.prototype = e;
                var n = new t();
                return (t.prototype = o), n;
              };
            })();
            function gr() {}
            function mr(t, e) {
              (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__chain__ = !!e),
                (this.__index__ = 0),
                (this.__values__ = o);
            }
            function vr(t) {
              (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = D),
                (this.__views__ = []);
            }
            function yr(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function br(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function _r(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
              }
            }
            function wr(t) {
              var e = -1,
                n = null == t ? 0 : t.length;
              for (this.__data__ = new _r(); ++e < n; ) this.add(t[e]);
            }
            function xr(t) {
              var e = (this.__data__ = new br(t));
              this.size = e.size;
            }
            function Sr(t, e) {
              var n = vu(t),
                r = !n && mu(t),
                i = !n && !r && wu(t),
                o = !n && !r && !i && Fu(t),
                a = n || r || i || o,
                u = a ? mn(t.length, re) : [],
                s = u.length;
              for (var c in t)
                (!e && !le.call(t, c)) ||
                  (a &&
                    ('length' == c ||
                      (i && ('offset' == c || 'parent' == c)) ||
                      (o &&
                        ('buffer' == c ||
                          'byteLength' == c ||
                          'byteOffset' == c)) ||
                      Vo(c, s))) ||
                  u.push(c);
              return u;
            }
            function Er(t) {
              var e = t.length;
              return e ? t[wi(0, e - 1)] : o;
            }
            function Tr(t, e) {
              return sa(no(t), Pr(e, 0, t.length));
            }
            function Ar(t) {
              return sa(no(t));
            }
            function Cr(t, e, n) {
              ((n === o || pu(t[e], n)) && (n !== o || e in t)) || Ir(t, e, n);
            }
            function kr(t, e, n) {
              var r = t[e];
              (le.call(t, e) && pu(r, n) && (n !== o || e in t)) || Ir(t, e, n);
            }
            function Mr(t, e) {
              for (var n = t.length; n--; ) if (pu(t[n][0], e)) return n;
              return -1;
            }
            function Rr(t, e, n, r) {
              return (
                Nr(t, function (t, i, o) {
                  e(r, t, n(t), o);
                }),
                r
              );
            }
            function Or(t, e) {
              return t && ro(e, is(e), t);
            }
            function Ir(t, e, n) {
              '__proto__' == e && pn
                ? pn(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0,
                  })
                : (t[e] = n);
            }
            function jr(t, e) {
              for (var n = -1, i = e.length, a = r(i), u = null == t; ++n < i; )
                a[n] = u ? o : Qu(t, e[n]);
              return a;
            }
            function Pr(t, e, n) {
              return (
                t == t &&
                  (n !== o && (t = t <= n ? t : n),
                  e !== o && (t = t >= e ? t : e)),
                t
              );
            }
            function Lr(t, e, n, r, i, a) {
              var u,
                s = e & h,
                c = e & p,
                l = e & d;
              if ((n && (u = i ? n(t, r, i, a) : n(t)), u !== o)) return u;
              if (!Cu(t)) return t;
              var f = vu(t);
              if (f) {
                if (
                  ((u = (function (t) {
                    var e = t.length,
                      n = new t.constructor(e);
                    return (
                      e &&
                        'string' == typeof t[0] &&
                        le.call(t, 'index') &&
                        ((n.index = t.index), (n.input = t.input)),
                      n
                    );
                  })(t)),
                  !s)
                )
                  return no(t, u);
              } else {
                var g = Wo(t),
                  m = g == X || g == Y;
                if (wu(t)) return Ki(t, s);
                if (g == Q || g == z || (m && !i)) {
                  if (((u = c || m ? {} : Go(t)), !s))
                    return c
                      ? (function (t, e) {
                          return ro(t, zo(t), e);
                        })(
                          t,
                          (function (t, e) {
                            return t && ro(e, os(e), t);
                          })(u, t)
                        )
                      : (function (t, e) {
                          return ro(t, Bo(t), e);
                        })(t, Or(u, t));
                } else {
                  if (!Ce[g]) return i ? t : {};
                  u = (function (t, e, n) {
                    var r,
                      i,
                      o,
                      a = t.constructor;
                    switch (e) {
                      case st:
                        return Zi(t);
                      case G:
                      case H:
                        return new a(+t);
                      case ct:
                        return (function (t, e) {
                          var n = e ? Zi(t.buffer) : t.buffer;
                          return new t.constructor(
                            n,
                            t.byteOffset,
                            t.byteLength
                          );
                        })(t, n);
                      case lt:
                      case ft:
                      case ht:
                      case pt:
                      case dt:
                      case gt:
                      case mt:
                      case vt:
                      case yt:
                        return Ji(t, n);
                      case K:
                        return new a();
                      case Z:
                      case rt:
                        return new a(t);
                      case et:
                        return (
                          ((o = new (i = t).constructor(
                            i.source,
                            $t.exec(i)
                          )).lastIndex = i.lastIndex),
                          o
                        );
                      case nt:
                        return new a();
                      case it:
                        return (r = t), fr ? ee(fr.call(r)) : {};
                    }
                  })(t, g, s);
                }
              }
              a || (a = new xr());
              var v = a.get(t);
              if (v) return v;
              a.set(t, u),
                ju(t)
                  ? t.forEach(function (r) {
                      u.add(Lr(r, e, n, r, t, a));
                    })
                  : Mu(t) &&
                    t.forEach(function (r, i) {
                      u.set(i, Lr(r, e, n, i, t, a));
                    });
              var y = f ? o : (l ? (c ? Io : Oo) : c ? os : is)(t);
              return (
                qe(y || t, function (r, i) {
                  y && (r = t[(i = r)]), kr(u, i, Lr(r, e, n, i, t, a));
                }),
                u
              );
            }
            function Fr(t, e, n) {
              var r = n.length;
              if (null == t) return !r;
              for (t = ee(t); r--; ) {
                var i = n[r],
                  a = e[i],
                  u = t[i];
                if ((u === o && !(i in t)) || !a(u)) return !1;
              }
              return !0;
            }
            function Dr(t, e, n) {
              if ('function' != typeof t) throw new ie(s);
              return ia(function () {
                t.apply(o, n);
              }, e);
            }
            function Ur(t, e, n, r) {
              var i = -1,
                o = Ze,
                u = !0,
                s = t.length,
                c = [],
                l = e.length;
              if (!s) return c;
              n && (e = Qe(e, vn(n))),
                r
                  ? ((o = Je), (u = !1))
                  : e.length >= a && ((o = bn), (u = !1), (e = new wr(e)));
              t: for (; ++i < s; ) {
                var f = t[i],
                  h = null == n ? f : n(f);
                if (((f = r || 0 !== f ? f : 0), u && h == h)) {
                  for (var p = l; p--; ) if (e[p] === h) continue t;
                  c.push(f);
                } else o(e, h, r) || c.push(f);
              }
              return c;
            }
            (pr.templateSettings = {
              escape: At,
              evaluate: Ct,
              interpolate: kt,
              variable: '',
              imports: { _: pr },
            }),
              (pr.prototype = gr.prototype),
              (pr.prototype.constructor = pr),
              (mr.prototype = dr(gr.prototype)),
              (mr.prototype.constructor = mr),
              (vr.prototype = dr(gr.prototype)),
              (vr.prototype.constructor = vr),
              (yr.prototype.clear = function () {
                (this.__data__ = nr ? nr(null) : {}), (this.size = 0);
              }),
              (yr.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (yr.prototype.get = function (t) {
                var e = this.__data__;
                if (nr) {
                  var n = e[t];
                  return n === c ? o : n;
                }
                return le.call(e, t) ? e[t] : o;
              }),
              (yr.prototype.has = function (t) {
                var e = this.__data__;
                return nr ? e[t] !== o : le.call(e, t);
              }),
              (yr.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = nr && e === o ? c : e),
                  this
                );
              }),
              (br.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (br.prototype.delete = function (t) {
                var e = this.__data__,
                  n = Mr(e, t);
                return !(
                  n < 0 ||
                  (n == e.length - 1 ? e.pop() : Le.call(e, n, 1),
                  --this.size,
                  0)
                );
              }),
              (br.prototype.get = function (t) {
                var e = this.__data__,
                  n = Mr(e, t);
                return n < 0 ? o : e[n][1];
              }),
              (br.prototype.has = function (t) {
                return Mr(this.__data__, t) > -1;
              }),
              (br.prototype.set = function (t, e) {
                var n = this.__data__,
                  r = Mr(n, t);
                return (
                  r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                );
              }),
              (_r.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new yr(),
                    map: new (Jn || br)(),
                    string: new yr(),
                  });
              }),
              (_r.prototype.delete = function (t) {
                var e = Do(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (_r.prototype.get = function (t) {
                return Do(this, t).get(t);
              }),
              (_r.prototype.has = function (t) {
                return Do(this, t).has(t);
              }),
              (_r.prototype.set = function (t, e) {
                var n = Do(this, t),
                  r = n.size;
                return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
              }),
              (wr.prototype.add = wr.prototype.push =
                function (t) {
                  return this.__data__.set(t, c), this;
                }),
              (wr.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (xr.prototype.clear = function () {
                (this.__data__ = new br()), (this.size = 0);
              }),
              (xr.prototype.delete = function (t) {
                var e = this.__data__,
                  n = e.delete(t);
                return (this.size = e.size), n;
              }),
              (xr.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (xr.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (xr.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof br) {
                  var r = n.__data__;
                  if (!Jn || r.length < a - 1)
                    return r.push([t, e]), (this.size = ++n.size), this;
                  n = this.__data__ = new _r(r);
                }
                return n.set(t, e), (this.size = n.size), this;
              });
            var Nr = ao(qr),
              Br = ao(Xr, !0);
            function zr(t, e) {
              var n = !0;
              return (
                Nr(t, function (t, r, i) {
                  return (n = !!e(t, r, i));
                }),
                n
              );
            }
            function Wr(t, e, n) {
              for (var r = -1, i = t.length; ++r < i; ) {
                var a = t[r],
                  u = e(a);
                if (null != u && (s === o ? u == u && !Lu(u) : n(u, s)))
                  var s = u,
                    c = a;
              }
              return c;
            }
            function $r(t, e) {
              var n = [];
              return (
                Nr(t, function (t, r, i) {
                  e(t, r, i) && n.push(t);
                }),
                n
              );
            }
            function Gr(t, e, n, r, i) {
              var o = -1,
                a = t.length;
              for (n || (n = Ho), i || (i = []); ++o < a; ) {
                var u = t[o];
                e > 0 && n(u)
                  ? e > 1
                    ? Gr(u, e - 1, n, r, i)
                    : tn(i, u)
                  : r || (i[i.length] = u);
              }
              return i;
            }
            var Hr = uo(),
              Vr = uo(!0);
            function qr(t, e) {
              return t && Hr(t, e, is);
            }
            function Xr(t, e) {
              return t && Vr(t, e, is);
            }
            function Yr(t, e) {
              return Ke(e, function (e) {
                return Eu(t[e]);
              });
            }
            function Kr(t, e) {
              for (var n = 0, r = (e = Vi(e, t)).length; null != t && n < r; )
                t = t[la(e[n++])];
              return n && n == r ? t : o;
            }
            function Zr(t, e, n) {
              var r = e(t);
              return vu(t) ? r : tn(r, n(t));
            }
            function Jr(t) {
              return null == t
                ? t === o
                  ? ot
                  : J
                : on && on in ee(t)
                ? (function (t) {
                    var e = le.call(t, on),
                      n = t[on];
                    try {
                      t[on] = o;
                      var r = !0;
                    } catch (t) {}
                    var i = pe.call(t);
                    return r && (e ? (t[on] = n) : delete t[on]), i;
                  })(t)
                : (function (t) {
                    return pe.call(t);
                  })(t);
            }
            function Qr(t, e) {
              return t > e;
            }
            function ti(t, e) {
              return null != t && le.call(t, e);
            }
            function ei(t, e) {
              return null != t && e in ee(t);
            }
            function ni(t, e, n) {
              for (
                var i = n ? Je : Ze,
                  a = t[0].length,
                  u = t.length,
                  s = u,
                  c = r(u),
                  l = 1 / 0,
                  f = [];
                s--;

              ) {
                var h = t[s];
                s && e && (h = Qe(h, vn(e))),
                  (l = Vn(h.length, l)),
                  (c[s] =
                    !n && (e || (a >= 120 && h.length >= 120))
                      ? new wr(s && h)
                      : o);
              }
              h = t[0];
              var p = -1,
                d = c[0];
              t: for (; ++p < a && f.length < l; ) {
                var g = h[p],
                  m = e ? e(g) : g;
                if (
                  ((g = n || 0 !== g ? g : 0), !(d ? bn(d, m) : i(f, m, n)))
                ) {
                  for (s = u; --s; ) {
                    var v = c[s];
                    if (!(v ? bn(v, m) : i(t[s], m, n))) continue t;
                  }
                  d && d.push(m), f.push(g);
                }
              }
              return f;
            }
            function ri(t, e, n) {
              var r = null == (t = ea(t, (e = Vi(e, t)))) ? t : t[la(Sa(e))];
              return null == r ? o : He(r, t, n);
            }
            function ii(t) {
              return ku(t) && Jr(t) == z;
            }
            function oi(t, e, n, r, i) {
              return (
                t === e ||
                (null == t || null == e || (!ku(t) && !ku(e))
                  ? t != t && e != e
                  : (function (t, e, n, r, i, a) {
                      var u = vu(t),
                        s = vu(e),
                        c = u ? W : Wo(t),
                        l = s ? W : Wo(e),
                        f = (c = c == z ? Q : c) == Q,
                        h = (l = l == z ? Q : l) == Q,
                        p = c == l;
                      if (p && wu(t)) {
                        if (!wu(e)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (p && !f)
                        return (
                          a || (a = new xr()),
                          u || Fu(t)
                            ? Mo(t, e, n, r, i, a)
                            : (function (t, e, n, r, i, o, a) {
                                switch (n) {
                                  case ct:
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case st:
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !o(new xe(t), new xe(e))
                                    );
                                  case G:
                                  case H:
                                  case Z:
                                    return pu(+t, +e);
                                  case q:
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case et:
                                  case rt:
                                    return t == e + '';
                                  case K:
                                    var u = An;
                                  case nt:
                                    var s = r & g;
                                    if ((u || (u = Mn), t.size != e.size && !s))
                                      return !1;
                                    var c = a.get(t);
                                    if (c) return c == e;
                                    (r |= m), a.set(t, e);
                                    var l = Mo(u(t), u(e), r, i, o, a);
                                    return a.delete(t), l;
                                  case it:
                                    if (fr) return fr.call(t) == fr.call(e);
                                }
                                return !1;
                              })(t, e, c, n, r, i, a)
                        );
                      if (!(n & g)) {
                        var d = f && le.call(t, '__wrapped__'),
                          v = h && le.call(e, '__wrapped__');
                        if (d || v) {
                          var y = d ? t.value() : t,
                            b = v ? e.value() : e;
                          return a || (a = new xr()), i(y, b, n, r, a);
                        }
                      }
                      return (
                        !!p &&
                        (a || (a = new xr()),
                        (function (t, e, n, r, i, a) {
                          var u = n & g,
                            s = Oo(t),
                            c = s.length,
                            l = Oo(e).length;
                          if (c != l && !u) return !1;
                          for (var f = c; f--; ) {
                            var h = s[f];
                            if (!(u ? h in e : le.call(e, h))) return !1;
                          }
                          var p = a.get(t);
                          if (p && a.get(e)) return p == e;
                          var d = !0;
                          a.set(t, e), a.set(e, t);
                          for (var m = u; ++f < c; ) {
                            h = s[f];
                            var v = t[h],
                              y = e[h];
                            if (r)
                              var b = u
                                ? r(y, v, h, e, t, a)
                                : r(v, y, h, t, e, a);
                            if (!(b === o ? v === y || i(v, y, n, r, a) : b)) {
                              d = !1;
                              break;
                            }
                            m || (m = 'constructor' == h);
                          }
                          if (d && !m) {
                            var _ = t.constructor,
                              w = e.constructor;
                            _ != w &&
                              'constructor' in t &&
                              'constructor' in e &&
                              !(
                                'function' == typeof _ &&
                                _ instanceof _ &&
                                'function' == typeof w &&
                                w instanceof w
                              ) &&
                              (d = !1);
                          }
                          return a.delete(t), a.delete(e), d;
                        })(t, e, n, r, i, a))
                      );
                    })(t, e, n, r, oi, i))
              );
            }
            function ai(t, e, n, r) {
              var i = n.length,
                a = i,
                u = !r;
              if (null == t) return !a;
              for (t = ee(t); i--; ) {
                var s = n[i];
                if (u && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
              }
              for (; ++i < a; ) {
                var c = (s = n[i])[0],
                  l = t[c],
                  f = s[1];
                if (u && s[2]) {
                  if (l === o && !(c in t)) return !1;
                } else {
                  var h = new xr();
                  if (r) var p = r(l, f, c, t, e, h);
                  if (!(p === o ? oi(f, l, g | m, r, h) : p)) return !1;
                }
              }
              return !0;
            }
            function ui(t) {
              return (
                !(!Cu(t) || ((e = t), he && he in e)) &&
                (Eu(t) ? me : Vt).test(fa(t))
              );
            }
            function si(t) {
              return 'function' == typeof t
                ? t
                : null == t
                ? Rs
                : 'object' == typeof t
                ? vu(t)
                  ? di(t[0], t[1])
                  : pi(t)
                : Ns(t);
            }
            function ci(t) {
              if (!Zo(t)) return Gn(t);
              var e = [];
              for (var n in ee(t))
                le.call(t, n) && 'constructor' != n && e.push(n);
              return e;
            }
            function li(t) {
              if (!Cu(t))
                return (function (t) {
                  var e = [];
                  if (null != t) for (var n in ee(t)) e.push(n);
                  return e;
                })(t);
              var e = Zo(t),
                n = [];
              for (var r in t)
                ('constructor' != r || (!e && le.call(t, r))) && n.push(r);
              return n;
            }
            function fi(t, e) {
              return t < e;
            }
            function hi(t, e) {
              var n = -1,
                i = bu(t) ? r(t.length) : [];
              return (
                Nr(t, function (t, r, o) {
                  i[++n] = e(t, r, o);
                }),
                i
              );
            }
            function pi(t) {
              var e = Uo(t);
              return 1 == e.length && e[0][2]
                ? Qo(e[0][0], e[0][1])
                : function (n) {
                    return n === t || ai(n, t, e);
                  };
            }
            function di(t, e) {
              return Xo(t) && Jo(e)
                ? Qo(la(t), e)
                : function (n) {
                    var r = Qu(n, t);
                    return r === o && r === e ? ts(n, t) : oi(e, r, g | m);
                  };
            }
            function gi(t, e, n, r, i) {
              t !== e &&
                Hr(
                  e,
                  function (a, u) {
                    if ((i || (i = new xr()), Cu(a)))
                      !(function (t, e, n, r, i, a, u) {
                        var s = na(t, n),
                          c = na(e, n),
                          l = u.get(c);
                        if (l) Cr(t, n, l);
                        else {
                          var f = a ? a(s, c, n + '', t, e, u) : o,
                            h = f === o;
                          if (h) {
                            var p = vu(c),
                              d = !p && wu(c),
                              g = !p && !d && Fu(c);
                            (f = c),
                              p || d || g
                                ? vu(s)
                                  ? (f = s)
                                  : _u(s)
                                  ? (f = no(s))
                                  : d
                                  ? ((h = !1), (f = Ki(c, !0)))
                                  : g
                                  ? ((h = !1), (f = Ji(c, !0)))
                                  : (f = [])
                                : Ou(c) || mu(c)
                                ? ((f = s),
                                  mu(s)
                                    ? (f = Gu(s))
                                    : (Cu(s) && !Eu(s)) || (f = Go(c)))
                                : (h = !1);
                          }
                          h && (u.set(c, f), i(f, c, r, a, u), u.delete(c)),
                            Cr(t, n, f);
                        }
                      })(t, e, u, n, gi, r, i);
                    else {
                      var s = r ? r(na(t, u), a, u + '', t, e, i) : o;
                      s === o && (s = a), Cr(t, u, s);
                    }
                  },
                  os
                );
            }
            function mi(t, e) {
              var n = t.length;
              if (n) return Vo((e += e < 0 ? n : 0), n) ? t[e] : o;
            }
            function vi(t, e, n) {
              var r = -1;
              return (
                (e = Qe(e.length ? e : [Rs], vn(Fo()))),
                (function (t, e) {
                  var n = t.length;
                  for (t.sort(e); n--; ) t[n] = t[n].value;
                  return t;
                })(
                  hi(t, function (t, n, i) {
                    return {
                      criteria: Qe(e, function (e) {
                        return e(t);
                      }),
                      index: ++r,
                      value: t,
                    };
                  }),
                  function (t, e) {
                    return (function (t, e, n) {
                      for (
                        var r = -1,
                          i = t.criteria,
                          o = e.criteria,
                          a = i.length,
                          u = n.length;
                        ++r < a;

                      ) {
                        var s = Qi(i[r], o[r]);
                        if (s) {
                          if (r >= u) return s;
                          var c = n[r];
                          return s * ('desc' == c ? -1 : 1);
                        }
                      }
                      return t.index - e.index;
                    })(t, e, n);
                  }
                )
              );
            }
            function yi(t, e, n) {
              for (var r = -1, i = e.length, o = {}; ++r < i; ) {
                var a = e[r],
                  u = Kr(t, a);
                n(u, a) && Ai(o, Vi(a, t), u);
              }
              return o;
            }
            function bi(t, e, n, r) {
              var i = r ? cn : sn,
                o = -1,
                a = e.length,
                u = t;
              for (t === e && (e = no(e)), n && (u = Qe(t, vn(n))); ++o < a; )
                for (
                  var s = 0, c = e[o], l = n ? n(c) : c;
                  (s = i(u, l, s, r)) > -1;

                )
                  u !== t && Le.call(u, s, 1), Le.call(t, s, 1);
              return t;
            }
            function _i(t, e) {
              for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                var i = e[n];
                if (n == r || i !== o) {
                  var o = i;
                  Vo(i) ? Le.call(t, i, 1) : Ui(t, i);
                }
              }
              return t;
            }
            function wi(t, e) {
              return t + Nn(Yn() * (e - t + 1));
            }
            function xi(t, e) {
              var n = '';
              if (!t || e < 1 || e > P) return n;
              do {
                e % 2 && (n += t), (e = Nn(e / 2)) && (t += t);
              } while (e);
              return n;
            }
            function Si(t, e) {
              return oa(ta(t, e, Rs), t + '');
            }
            function Ei(t) {
              return Er(ps(t));
            }
            function Ti(t, e) {
              var n = ps(t);
              return sa(n, Pr(e, 0, n.length));
            }
            function Ai(t, e, n, r) {
              if (!Cu(t)) return t;
              for (
                var i = -1, a = (e = Vi(e, t)).length, u = a - 1, s = t;
                null != s && ++i < a;

              ) {
                var c = la(e[i]),
                  l = n;
                if (i != u) {
                  var f = s[c];
                  (l = r ? r(f, c, s) : o) === o &&
                    (l = Cu(f) ? f : Vo(e[i + 1]) ? [] : {});
                }
                kr(s, c, l), (s = s[c]);
              }
              return t;
            }
            var Ci = rr
                ? function (t, e) {
                    return rr.set(t, e), t;
                  }
                : Rs,
              ki = pn
                ? function (t, e) {
                    return pn(t, 'toString', {
                      configurable: !0,
                      enumerable: !1,
                      value: Cs(e),
                      writable: !0,
                    });
                  }
                : Rs;
            function Mi(t) {
              return sa(ps(t));
            }
            function Ri(t, e, n) {
              var i = -1,
                o = t.length;
              e < 0 && (e = -e > o ? 0 : o + e),
                (n = n > o ? o : n) < 0 && (n += o),
                (o = e > n ? 0 : (n - e) >>> 0),
                (e >>>= 0);
              for (var a = r(o); ++i < o; ) a[i] = t[i + e];
              return a;
            }
            function Oi(t, e) {
              var n;
              return (
                Nr(t, function (t, r, i) {
                  return !(n = e(t, r, i));
                }),
                !!n
              );
            }
            function Ii(t, e, n) {
              var r = 0,
                i = null == t ? r : t.length;
              if ('number' == typeof e && e == e && i <= N) {
                for (; r < i; ) {
                  var o = (r + i) >>> 1,
                    a = t[o];
                  null !== a && !Lu(a) && (n ? a <= e : a < e)
                    ? (r = o + 1)
                    : (i = o);
                }
                return i;
              }
              return ji(t, e, Rs, n);
            }
            function ji(t, e, n, r) {
              e = n(e);
              for (
                var i = 0,
                  a = null == t ? 0 : t.length,
                  u = e != e,
                  s = null === e,
                  c = Lu(e),
                  l = e === o;
                i < a;

              ) {
                var f = Nn((i + a) / 2),
                  h = n(t[f]),
                  p = h !== o,
                  d = null === h,
                  g = h == h,
                  m = Lu(h);
                if (u) var v = r || g;
                else
                  v = l
                    ? g && (r || p)
                    : s
                    ? g && p && (r || !d)
                    : c
                    ? g && p && !d && (r || !m)
                    : !d && !m && (r ? h <= e : h < e);
                v ? (i = f + 1) : (a = f);
              }
              return Vn(a, U);
            }
            function Pi(t, e) {
              for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n],
                  u = e ? e(a) : a;
                if (!n || !pu(u, s)) {
                  var s = u;
                  o[i++] = 0 === a ? 0 : a;
                }
              }
              return o;
            }
            function Li(t) {
              return 'number' == typeof t ? t : Lu(t) ? F : +t;
            }
            function Fi(t) {
              if ('string' == typeof t) return t;
              if (vu(t)) return Qe(t, Fi) + '';
              if (Lu(t)) return hr ? hr.call(t) : '';
              var e = t + '';
              return '0' == e && 1 / t == -j ? '-0' : e;
            }
            function Di(t, e, n) {
              var r = -1,
                i = Ze,
                o = t.length,
                u = !0,
                s = [],
                c = s;
              if (n) (u = !1), (i = Je);
              else if (o >= a) {
                var l = e ? null : So(t);
                if (l) return Mn(l);
                (u = !1), (i = bn), (c = new wr());
              } else c = e ? [] : s;
              t: for (; ++r < o; ) {
                var f = t[r],
                  h = e ? e(f) : f;
                if (((f = n || 0 !== f ? f : 0), u && h == h)) {
                  for (var p = c.length; p--; ) if (c[p] === h) continue t;
                  e && c.push(h), s.push(f);
                } else i(c, h, n) || (c !== s && c.push(h), s.push(f));
              }
              return s;
            }
            function Ui(t, e) {
              return null == (t = ea(t, (e = Vi(e, t)))) || delete t[la(Sa(e))];
            }
            function Ni(t, e, n, r) {
              return Ai(t, e, n(Kr(t, e)), r);
            }
            function Bi(t, e, n, r) {
              for (
                var i = t.length, o = r ? i : -1;
                (r ? o-- : ++o < i) && e(t[o], o, t);

              );
              return n
                ? Ri(t, r ? 0 : o, r ? o + 1 : i)
                : Ri(t, r ? o + 1 : 0, r ? i : o);
            }
            function zi(t, e) {
              var n = t;
              return (
                n instanceof vr && (n = n.value()),
                en(
                  e,
                  function (t, e) {
                    return e.func.apply(e.thisArg, tn([t], e.args));
                  },
                  n
                )
              );
            }
            function Wi(t, e, n) {
              var i = t.length;
              if (i < 2) return i ? Di(t[0]) : [];
              for (var o = -1, a = r(i); ++o < i; )
                for (var u = t[o], s = -1; ++s < i; )
                  s != o && (a[o] = Ur(a[o] || u, t[s], e, n));
              return Di(Gr(a, 1), e, n);
            }
            function $i(t, e, n) {
              for (var r = -1, i = t.length, a = e.length, u = {}; ++r < i; ) {
                var s = r < a ? e[r] : o;
                n(u, t[r], s);
              }
              return u;
            }
            function Gi(t) {
              return _u(t) ? t : [];
            }
            function Hi(t) {
              return 'function' == typeof t ? t : Rs;
            }
            function Vi(t, e) {
              return vu(t) ? t : Xo(t, e) ? [t] : ca(Hu(t));
            }
            var qi = Si;
            function Xi(t, e, n) {
              var r = t.length;
              return (n = n === o ? r : n), !e && n >= r ? t : Ri(t, e, n);
            }
            var Yi =
              Ln ||
              function (t) {
                return je.clearTimeout(t);
              };
            function Ki(t, e) {
              if (e) return t.slice();
              var n = t.length,
                r = ke ? ke(n) : new t.constructor(n);
              return t.copy(r), r;
            }
            function Zi(t) {
              var e = new t.constructor(t.byteLength);
              return new xe(e).set(new xe(t)), e;
            }
            function Ji(t, e) {
              var n = e ? Zi(t.buffer) : t.buffer;
              return new t.constructor(n, t.byteOffset, t.length);
            }
            function Qi(t, e) {
              if (t !== e) {
                var n = t !== o,
                  r = null === t,
                  i = t == t,
                  a = Lu(t),
                  u = e !== o,
                  s = null === e,
                  c = e == e,
                  l = Lu(e);
                if (
                  (!s && !l && !a && t > e) ||
                  (a && u && c && !s && !l) ||
                  (r && u && c) ||
                  (!n && c) ||
                  !i
                )
                  return 1;
                if (
                  (!r && !a && !l && t < e) ||
                  (l && n && i && !r && !a) ||
                  (s && n && i) ||
                  (!u && i) ||
                  !c
                )
                  return -1;
              }
              return 0;
            }
            function to(t, e, n, i) {
              for (
                var o = -1,
                  a = t.length,
                  u = n.length,
                  s = -1,
                  c = e.length,
                  l = Hn(a - u, 0),
                  f = r(c + l),
                  h = !i;
                ++s < c;

              )
                f[s] = e[s];
              for (; ++o < u; ) (h || o < a) && (f[n[o]] = t[o]);
              for (; l--; ) f[s++] = t[o++];
              return f;
            }
            function eo(t, e, n, i) {
              for (
                var o = -1,
                  a = t.length,
                  u = -1,
                  s = n.length,
                  c = -1,
                  l = e.length,
                  f = Hn(a - s, 0),
                  h = r(f + l),
                  p = !i;
                ++o < f;

              )
                h[o] = t[o];
              for (var d = o; ++c < l; ) h[d + c] = e[c];
              for (; ++u < s; ) (p || o < a) && (h[d + n[u]] = t[o++]);
              return h;
            }
            function no(t, e) {
              var n = -1,
                i = t.length;
              for (e || (e = r(i)); ++n < i; ) e[n] = t[n];
              return e;
            }
            function ro(t, e, n, r) {
              var i = !n;
              n || (n = {});
              for (var a = -1, u = e.length; ++a < u; ) {
                var s = e[a],
                  c = r ? r(n[s], t[s], s, n, t) : o;
                c === o && (c = t[s]), i ? Ir(n, s, c) : kr(n, s, c);
              }
              return n;
            }
            function io(t, e) {
              return function (n, r) {
                var i = vu(n) ? Ve : Rr,
                  o = e ? e() : {};
                return i(n, t, Fo(r, 2), o);
              };
            }
            function oo(t) {
              return Si(function (e, n) {
                var r = -1,
                  i = n.length,
                  a = i > 1 ? n[i - 1] : o,
                  u = i > 2 ? n[2] : o;
                for (
                  a = t.length > 3 && 'function' == typeof a ? (i--, a) : o,
                    u && qo(n[0], n[1], u) && ((a = i < 3 ? o : a), (i = 1)),
                    e = ee(e);
                  ++r < i;

                ) {
                  var s = n[r];
                  s && t(e, s, r, a);
                }
                return e;
              });
            }
            function ao(t, e) {
              return function (n, r) {
                if (null == n) return n;
                if (!bu(n)) return t(n, r);
                for (
                  var i = n.length, o = e ? i : -1, a = ee(n);
                  (e ? o-- : ++o < i) && !1 !== r(a[o], o, a);

                );
                return n;
              };
            }
            function uo(t) {
              return function (e, n, r) {
                for (var i = -1, o = ee(e), a = r(e), u = a.length; u--; ) {
                  var s = a[t ? u : ++i];
                  if (!1 === n(o[s], s, o)) break;
                }
                return e;
              };
            }
            function so(t) {
              return function (e) {
                var n = Tn((e = Hu(e))) ? In(e) : o,
                  r = n ? n[0] : e.charAt(0),
                  i = n ? Xi(n, 1).join('') : e.slice(1);
                return r[t]() + i;
              };
            }
            function co(t) {
              return function (e) {
                return en(Es(ms(e).replace(ye, '')), t, '');
              };
            }
            function lo(t) {
              return function () {
                var e = arguments;
                switch (e.length) {
                  case 0:
                    return new t();
                  case 1:
                    return new t(e[0]);
                  case 2:
                    return new t(e[0], e[1]);
                  case 3:
                    return new t(e[0], e[1], e[2]);
                  case 4:
                    return new t(e[0], e[1], e[2], e[3]);
                  case 5:
                    return new t(e[0], e[1], e[2], e[3], e[4]);
                  case 6:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                  case 7:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                }
                var n = dr(t.prototype),
                  r = t.apply(n, e);
                return Cu(r) ? r : n;
              };
            }
            function fo(t) {
              return function (e, n, r) {
                var i = ee(e);
                if (!bu(e)) {
                  var a = Fo(n, 3);
                  (e = is(e)),
                    (n = function (t) {
                      return a(i[t], t, i);
                    });
                }
                var u = t(e, n, r);
                return u > -1 ? i[a ? e[u] : u] : o;
              };
            }
            function ho(t) {
              return Ro(function (e) {
                var n = e.length,
                  r = n,
                  i = mr.prototype.thru;
                for (t && e.reverse(); r--; ) {
                  var a = e[r];
                  if ('function' != typeof a) throw new ie(s);
                  if (i && !u && 'wrapper' == Po(a)) var u = new mr([], !0);
                }
                for (r = u ? r : n; ++r < n; ) {
                  var c = Po((a = e[r])),
                    l = 'wrapper' == c ? jo(a) : o;
                  u =
                    l &&
                    Yo(l[0]) &&
                    l[1] == (E | _ | x | T) &&
                    !l[4].length &&
                    1 == l[9]
                      ? u[Po(l[0])].apply(u, l[3])
                      : 1 == a.length && Yo(a)
                      ? u[c]()
                      : u.thru(a);
                }
                return function () {
                  var t = arguments,
                    r = t[0];
                  if (u && 1 == t.length && vu(r)) return u.plant(r).value();
                  for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                    o = e[i].call(this, o);
                  return o;
                };
              });
            }
            function po(t, e, n, i, a, u, s, c, l, f) {
              var h = e & E,
                p = e & v,
                d = e & y,
                g = e & (_ | w),
                m = e & A,
                b = d ? o : lo(t);
              return function v() {
                for (var y = arguments.length, _ = r(y), w = y; w--; )
                  _[w] = arguments[w];
                if (g)
                  var x = Lo(v),
                    S = (function (t, e) {
                      for (var n = t.length, r = 0; n--; ) t[n] === e && ++r;
                      return r;
                    })(_, x);
                if (
                  (i && (_ = to(_, i, a, g)),
                  u && (_ = eo(_, u, s, g)),
                  (y -= S),
                  g && y < f)
                ) {
                  var E = kn(_, x);
                  return wo(t, e, po, v.placeholder, n, _, E, c, l, f - y);
                }
                var T = p ? n : this,
                  A = d ? T[t] : t;
                return (
                  (y = _.length),
                  c
                    ? (_ = (function (t, e) {
                        for (
                          var n = t.length, r = Vn(e.length, n), i = no(t);
                          r--;

                        ) {
                          var a = e[r];
                          t[r] = Vo(a, n) ? i[a] : o;
                        }
                        return t;
                      })(_, c))
                    : m && y > 1 && _.reverse(),
                  h && l < y && (_.length = l),
                  this && this !== je && this instanceof v && (A = b || lo(A)),
                  A.apply(T, _)
                );
              };
            }
            function go(t, e) {
              return function (n, r) {
                return (function (t, e, n, r) {
                  return (
                    qr(t, function (t, i, o) {
                      e(r, n(t), i, o);
                    }),
                    r
                  );
                })(n, t, e(r), {});
              };
            }
            function mo(t, e) {
              return function (n, r) {
                var i;
                if (n === o && r === o) return e;
                if ((n !== o && (i = n), r !== o)) {
                  if (i === o) return r;
                  'string' == typeof n || 'string' == typeof r
                    ? ((n = Fi(n)), (r = Fi(r)))
                    : ((n = Li(n)), (r = Li(r))),
                    (i = t(n, r));
                }
                return i;
              };
            }
            function vo(t) {
              return Ro(function (e) {
                return (
                  (e = Qe(e, vn(Fo()))),
                  Si(function (n) {
                    var r = this;
                    return t(e, function (t) {
                      return He(t, r, n);
                    });
                  })
                );
              });
            }
            function yo(t, e) {
              var n = (e = e === o ? ' ' : Fi(e)).length;
              if (n < 2) return n ? xi(e, t) : e;
              var r = xi(e, Un(t / On(e)));
              return Tn(e) ? Xi(In(r), 0, t).join('') : r.slice(0, t);
            }
            function bo(t) {
              return function (e, n, i) {
                return (
                  i && 'number' != typeof i && qo(e, n, i) && (n = i = o),
                  (e = Bu(e)),
                  n === o ? ((n = e), (e = 0)) : (n = Bu(n)),
                  (function (t, e, n, i) {
                    for (
                      var o = -1, a = Hn(Un((e - t) / (n || 1)), 0), u = r(a);
                      a--;

                    )
                      (u[i ? a : ++o] = t), (t += n);
                    return u;
                  })(e, n, (i = i === o ? (e < n ? 1 : -1) : Bu(i)), t)
                );
              };
            }
            function _o(t) {
              return function (e, n) {
                return (
                  ('string' == typeof e && 'string' == typeof n) ||
                    ((e = $u(e)), (n = $u(n))),
                  t(e, n)
                );
              };
            }
            function wo(t, e, n, r, i, a, u, s, c, l) {
              var f = e & _;
              (e |= f ? x : S), (e &= ~(f ? S : x)) & b || (e &= ~(v | y));
              var h = [
                  t,
                  e,
                  i,
                  f ? a : o,
                  f ? u : o,
                  f ? o : a,
                  f ? o : u,
                  s,
                  c,
                  l,
                ],
                p = n.apply(o, h);
              return Yo(t) && ra(p, h), (p.placeholder = r), aa(p, t, e);
            }
            function xo(t) {
              var e = te[t];
              return function (t, n) {
                if (
                  ((t = $u(t)), (n = null == n ? 0 : Vn(zu(n), 292)) && Wn(t))
                ) {
                  var r = (Hu(t) + 'e').split('e');
                  return +(
                    (r = (Hu(e(r[0] + 'e' + (+r[1] + n))) + 'e').split(
                      'e'
                    ))[0] +
                    'e' +
                    (+r[1] - n)
                  );
                }
                return e(t);
              };
            }
            var So =
              tr && 1 / Mn(new tr([, -0]))[1] == j
                ? function (t) {
                    return new tr(t);
                  }
                : Ls;
            function Eo(t) {
              return function (e) {
                var n = Wo(e);
                return n == K
                  ? An(e)
                  : n == nt
                  ? Rn(e)
                  : (function (t, e) {
                      return Qe(e, function (e) {
                        return [e, t[e]];
                      });
                    })(e, t(e));
              };
            }
            function To(t, e, n, i, a, u, c, l) {
              var h = e & y;
              if (!h && 'function' != typeof t) throw new ie(s);
              var p = i ? i.length : 0;
              if (
                (p || ((e &= ~(x | S)), (i = a = o)),
                (c = c === o ? c : Hn(zu(c), 0)),
                (l = l === o ? l : zu(l)),
                (p -= a ? a.length : 0),
                e & S)
              ) {
                var d = i,
                  g = a;
                i = a = o;
              }
              var m = h ? o : jo(t),
                A = [t, e, n, i, a, d, g, u, c, l];
              if (
                (m &&
                  (function (t, e) {
                    var n = t[1],
                      r = e[1],
                      i = n | r,
                      o = i < (v | y | E),
                      a =
                        (r == E && n == _) ||
                        (r == E && n == T && t[7].length <= e[8]) ||
                        (r == (E | T) && e[7].length <= e[8] && n == _);
                    if (!o && !a) return t;
                    r & v && ((t[2] = e[2]), (i |= n & v ? 0 : b));
                    var u = e[3];
                    if (u) {
                      var s = t[3];
                      (t[3] = s ? to(s, u, e[4]) : u),
                        (t[4] = s ? kn(t[3], f) : e[4]);
                    }
                    (u = e[5]) &&
                      ((s = t[5]),
                      (t[5] = s ? eo(s, u, e[6]) : u),
                      (t[6] = s ? kn(t[5], f) : e[6])),
                      (u = e[7]) && (t[7] = u),
                      r & E && (t[8] = null == t[8] ? e[8] : Vn(t[8], e[8])),
                      null == t[9] && (t[9] = e[9]),
                      (t[0] = e[0]),
                      (t[1] = i);
                  })(A, m),
                (t = A[0]),
                (e = A[1]),
                (n = A[2]),
                (i = A[3]),
                (a = A[4]),
                !(l = A[9] =
                  A[9] === o ? (h ? 0 : t.length) : Hn(A[9] - p, 0)) &&
                  e & (_ | w) &&
                  (e &= ~(_ | w)),
                e && e != v)
              )
                C =
                  e == _ || e == w
                    ? (function (t, e, n) {
                        var i = lo(t);
                        return function a() {
                          for (
                            var u = arguments.length,
                              s = r(u),
                              c = u,
                              l = Lo(a);
                            c--;

                          )
                            s[c] = arguments[c];
                          var f =
                            u < 3 && s[0] !== l && s[u - 1] !== l
                              ? []
                              : kn(s, l);
                          return (u -= f.length) < n
                            ? wo(t, e, po, a.placeholder, o, s, f, o, o, n - u)
                            : He(
                                this && this !== je && this instanceof a
                                  ? i
                                  : t,
                                this,
                                s
                              );
                        };
                      })(t, e, l)
                    : (e != x && e != (v | x)) || a.length
                    ? po.apply(o, A)
                    : (function (t, e, n, i) {
                        var o = e & v,
                          a = lo(t);
                        return function e() {
                          for (
                            var u = -1,
                              s = arguments.length,
                              c = -1,
                              l = i.length,
                              f = r(l + s),
                              h =
                                this && this !== je && this instanceof e
                                  ? a
                                  : t;
                            ++c < l;

                          )
                            f[c] = i[c];
                          for (; s--; ) f[c++] = arguments[++u];
                          return He(h, o ? n : this, f);
                        };
                      })(t, e, n, i);
              else
                var C = (function (t, e, n) {
                  var r = e & v,
                    i = lo(t);
                  return function e() {
                    return (
                      this && this !== je && this instanceof e ? i : t
                    ).apply(r ? n : this, arguments);
                  };
                })(t, e, n);
              return aa((m ? Ci : ra)(C, A), t, e);
            }
            function Ao(t, e, n, r) {
              return t === o || (pu(t, ue[n]) && !le.call(r, n)) ? e : t;
            }
            function Co(t, e, n, r, i, a) {
              return (
                Cu(t) &&
                  Cu(e) &&
                  (a.set(e, t), gi(t, e, o, Co, a), a.delete(e)),
                t
              );
            }
            function ko(t) {
              return Ou(t) ? o : t;
            }
            function Mo(t, e, n, r, i, a) {
              var u = n & g,
                s = t.length,
                c = e.length;
              if (s != c && !(u && c > s)) return !1;
              var l = a.get(t);
              if (l && a.get(e)) return l == e;
              var f = -1,
                h = !0,
                p = n & m ? new wr() : o;
              for (a.set(t, e), a.set(e, t); ++f < s; ) {
                var d = t[f],
                  v = e[f];
                if (r) var y = u ? r(v, d, f, e, t, a) : r(d, v, f, t, e, a);
                if (y !== o) {
                  if (y) continue;
                  h = !1;
                  break;
                }
                if (p) {
                  if (
                    !rn(e, function (t, e) {
                      if (!bn(p, e) && (d === t || i(d, t, n, r, a)))
                        return p.push(e);
                    })
                  ) {
                    h = !1;
                    break;
                  }
                } else if (d !== v && !i(d, v, n, r, a)) {
                  h = !1;
                  break;
                }
              }
              return a.delete(t), a.delete(e), h;
            }
            function Ro(t) {
              return oa(ta(t, o, ya), t + '');
            }
            function Oo(t) {
              return Zr(t, is, Bo);
            }
            function Io(t) {
              return Zr(t, os, zo);
            }
            var jo = rr
              ? function (t) {
                  return rr.get(t);
                }
              : Ls;
            function Po(t) {
              for (
                var e = t.name + '',
                  n = ir[e],
                  r = le.call(ir, e) ? n.length : 0;
                r--;

              ) {
                var i = n[r],
                  o = i.func;
                if (null == o || o == t) return i.name;
              }
              return e;
            }
            function Lo(t) {
              return (le.call(pr, 'placeholder') ? pr : t).placeholder;
            }
            function Fo() {
              var t = pr.iteratee || Os;
              return (
                (t = t === Os ? si : t),
                arguments.length ? t(arguments[0], arguments[1]) : t
              );
            }
            function Do(t, e) {
              var n,
                r,
                i = t.__data__;
              return (
                'string' == (r = typeof (n = e)) ||
                'number' == r ||
                'symbol' == r ||
                'boolean' == r
                  ? '__proto__' !== n
                  : null === n
              )
                ? i['string' == typeof e ? 'string' : 'hash']
                : i.map;
            }
            function Uo(t) {
              for (var e = is(t), n = e.length; n--; ) {
                var r = e[n],
                  i = t[r];
                e[n] = [r, i, Jo(i)];
              }
              return e;
            }
            function No(t, e) {
              var n = (function (t, e) {
                return null == t ? o : t[e];
              })(t, e);
              return ui(n) ? n : o;
            }
            var Bo = Bn
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = ee(t)),
                        Ke(Bn(t), function (e) {
                          return Pe.call(t, e);
                        }));
                  }
                : Ws,
              zo = Bn
                ? function (t) {
                    for (var e = []; t; ) tn(e, Bo(t)), (t = Oe(t));
                    return e;
                  }
                : Ws,
              Wo = Jr;
            function $o(t, e, n) {
              for (var r = -1, i = (e = Vi(e, t)).length, o = !1; ++r < i; ) {
                var a = la(e[r]);
                if (!(o = null != t && n(t, a))) break;
                t = t[a];
              }
              return o || ++r != i
                ? o
                : !!(i = null == t ? 0 : t.length) &&
                    Au(i) &&
                    Vo(a, i) &&
                    (vu(t) || mu(t));
            }
            function Go(t) {
              return 'function' != typeof t.constructor || Zo(t)
                ? {}
                : dr(Oe(t));
            }
            function Ho(t) {
              return vu(t) || mu(t) || !!(De && t && t[De]);
            }
            function Vo(t, e) {
              var n = typeof t;
              return (
                !!(e = null == e ? P : e) &&
                ('number' == n || ('symbol' != n && Xt.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function qo(t, e, n) {
              if (!Cu(n)) return !1;
              var r = typeof e;
              return (
                !!('number' == r
                  ? bu(n) && Vo(e, n.length)
                  : 'string' == r && e in n) && pu(n[e], t)
              );
            }
            function Xo(t, e) {
              if (vu(t)) return !1;
              var n = typeof t;
              return (
                !(
                  'number' != n &&
                  'symbol' != n &&
                  'boolean' != n &&
                  null != t &&
                  !Lu(t)
                ) ||
                Rt.test(t) ||
                !Mt.test(t) ||
                (null != e && t in ee(e))
              );
            }
            function Yo(t) {
              var e = Po(t),
                n = pr[e];
              if ('function' != typeof n || !(e in vr.prototype)) return !1;
              if (t === n) return !0;
              var r = jo(n);
              return !!r && t === r[0];
            }
            ((Zn && Wo(new Zn(new ArrayBuffer(1))) != ct) ||
              (Jn && Wo(new Jn()) != K) ||
              (Qn && '[object Promise]' != Wo(Qn.resolve())) ||
              (tr && Wo(new tr()) != nt) ||
              (er && Wo(new er()) != at)) &&
              (Wo = function (t) {
                var e = Jr(t),
                  n = e == Q ? t.constructor : o,
                  r = n ? fa(n) : '';
                if (r)
                  switch (r) {
                    case or:
                      return ct;
                    case ar:
                      return K;
                    case ur:
                      return '[object Promise]';
                    case sr:
                      return nt;
                    case cr:
                      return at;
                  }
                return e;
              });
            var Ko = se ? Eu : $s;
            function Zo(t) {
              var e = t && t.constructor;
              return t === (('function' == typeof e && e.prototype) || ue);
            }
            function Jo(t) {
              return t == t && !Cu(t);
            }
            function Qo(t, e) {
              return function (n) {
                return null != n && n[t] === e && (e !== o || t in ee(n));
              };
            }
            function ta(t, e, n) {
              return (
                (e = Hn(e === o ? t.length - 1 : e, 0)),
                function () {
                  for (
                    var i = arguments,
                      o = -1,
                      a = Hn(i.length - e, 0),
                      u = r(a);
                    ++o < a;

                  )
                    u[o] = i[e + o];
                  o = -1;
                  for (var s = r(e + 1); ++o < e; ) s[o] = i[o];
                  return (s[e] = n(u)), He(t, this, s);
                }
              );
            }
            function ea(t, e) {
              return e.length < 2 ? t : Kr(t, Ri(e, 0, -1));
            }
            function na(t, e) {
              if (
                ('constructor' !== e || 'function' != typeof t[e]) &&
                '__proto__' != e
              )
                return t[e];
            }
            var ra = ua(Ci),
              ia =
                Dn ||
                function (t, e) {
                  return je.setTimeout(t, e);
                },
              oa = ua(ki);
            function aa(t, e, n) {
              var r = e + '';
              return oa(
                t,
                (function (t, e) {
                  var n = e.length;
                  if (!n) return t;
                  var r = n - 1;
                  return (
                    (e[r] = (n > 1 ? '& ' : '') + e[r]),
                    (e = e.join(n > 2 ? ', ' : ' ')),
                    t.replace(Dt, '{\n/* [wrapped with ' + e + '] */\n')
                  );
                })(
                  r,
                  (function (t, e) {
                    return (
                      qe(B, function (n) {
                        var r = '_.' + n[0];
                        e & n[1] && !Ze(t, r) && t.push(r);
                      }),
                      t.sort()
                    );
                  })(
                    (function (t) {
                      var e = t.match(Ut);
                      return e ? e[1].split(Nt) : [];
                    })(r),
                    n
                  )
                )
              );
            }
            function ua(t) {
              var e = 0,
                n = 0;
              return function () {
                var r = qn(),
                  i = R - (r - n);
                if (((n = r), i > 0)) {
                  if (++e >= M) return arguments[0];
                } else e = 0;
                return t.apply(o, arguments);
              };
            }
            function sa(t, e) {
              var n = -1,
                r = t.length,
                i = r - 1;
              for (e = e === o ? r : e; ++n < e; ) {
                var a = wi(n, i),
                  u = t[a];
                (t[a] = t[n]), (t[n] = u);
              }
              return (t.length = e), t;
            }
            var ca = (function (t) {
              var e = uu(t, function (t) {
                  return n.size === l && n.clear(), t;
                }),
                n = e.cache;
              return e;
            })(function (t) {
              var e = [];
              return (
                46 === t.charCodeAt(0) && e.push(''),
                t.replace(Ot, function (t, n, r, i) {
                  e.push(r ? i.replace(zt, '$1') : n || t);
                }),
                e
              );
            });
            function la(t) {
              if ('string' == typeof t || Lu(t)) return t;
              var e = t + '';
              return '0' == e && 1 / t == -j ? '-0' : e;
            }
            function fa(t) {
              if (null != t) {
                try {
                  return ce.call(t);
                } catch (t) {}
                try {
                  return t + '';
                } catch (t) {}
              }
              return '';
            }
            function ha(t) {
              if (t instanceof vr) return t.clone();
              var e = new mr(t.__wrapped__, t.__chain__);
              return (
                (e.__actions__ = no(t.__actions__)),
                (e.__index__ = t.__index__),
                (e.__values__ = t.__values__),
                e
              );
            }
            var pa = Si(function (t, e) {
                return _u(t) ? Ur(t, Gr(e, 1, _u, !0)) : [];
              }),
              da = Si(function (t, e) {
                var n = Sa(e);
                return (
                  _u(n) && (n = o),
                  _u(t) ? Ur(t, Gr(e, 1, _u, !0), Fo(n, 2)) : []
                );
              }),
              ga = Si(function (t, e) {
                var n = Sa(e);
                return (
                  _u(n) && (n = o), _u(t) ? Ur(t, Gr(e, 1, _u, !0), o, n) : []
                );
              });
            function ma(t, e, n) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = null == n ? 0 : zu(n);
              return i < 0 && (i = Hn(r + i, 0)), un(t, Fo(e, 3), i);
            }
            function va(t, e, n) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = r - 1;
              return (
                n !== o &&
                  ((i = zu(n)), (i = n < 0 ? Hn(r + i, 0) : Vn(i, r - 1))),
                un(t, Fo(e, 3), i, !0)
              );
            }
            function ya(t) {
              return null != t && t.length ? Gr(t, 1) : [];
            }
            function ba(t) {
              return t && t.length ? t[0] : o;
            }
            var _a = Si(function (t) {
                var e = Qe(t, Gi);
                return e.length && e[0] === t[0] ? ni(e) : [];
              }),
              wa = Si(function (t) {
                var e = Sa(t),
                  n = Qe(t, Gi);
                return (
                  e === Sa(n) ? (e = o) : n.pop(),
                  n.length && n[0] === t[0] ? ni(n, Fo(e, 2)) : []
                );
              }),
              xa = Si(function (t) {
                var e = Sa(t),
                  n = Qe(t, Gi);
                return (
                  (e = 'function' == typeof e ? e : o) && n.pop(),
                  n.length && n[0] === t[0] ? ni(n, o, e) : []
                );
              });
            function Sa(t) {
              var e = null == t ? 0 : t.length;
              return e ? t[e - 1] : o;
            }
            var Ea = Si(Ta);
            function Ta(t, e) {
              return t && t.length && e && e.length ? bi(t, e) : t;
            }
            var Aa = Ro(function (t, e) {
              var n = null == t ? 0 : t.length,
                r = jr(t, e);
              return (
                _i(
                  t,
                  Qe(e, function (t) {
                    return Vo(t, n) ? +t : t;
                  }).sort(Qi)
                ),
                r
              );
            });
            function Ca(t) {
              return null == t ? t : Kn.call(t);
            }
            var ka = Si(function (t) {
                return Di(Gr(t, 1, _u, !0));
              }),
              Ma = Si(function (t) {
                var e = Sa(t);
                return _u(e) && (e = o), Di(Gr(t, 1, _u, !0), Fo(e, 2));
              }),
              Ra = Si(function (t) {
                var e = Sa(t);
                return (
                  (e = 'function' == typeof e ? e : o),
                  Di(Gr(t, 1, _u, !0), o, e)
                );
              });
            function Oa(t) {
              if (!t || !t.length) return [];
              var e = 0;
              return (
                (t = Ke(t, function (t) {
                  if (_u(t)) return (e = Hn(t.length, e)), !0;
                })),
                mn(e, function (e) {
                  return Qe(t, hn(e));
                })
              );
            }
            function Ia(t, e) {
              if (!t || !t.length) return [];
              var n = Oa(t);
              return null == e
                ? n
                : Qe(n, function (t) {
                    return He(e, o, t);
                  });
            }
            var ja = Si(function (t, e) {
                return _u(t) ? Ur(t, e) : [];
              }),
              Pa = Si(function (t) {
                return Wi(Ke(t, _u));
              }),
              La = Si(function (t) {
                var e = Sa(t);
                return _u(e) && (e = o), Wi(Ke(t, _u), Fo(e, 2));
              }),
              Fa = Si(function (t) {
                var e = Sa(t);
                return (
                  (e = 'function' == typeof e ? e : o), Wi(Ke(t, _u), o, e)
                );
              }),
              Da = Si(Oa);
            var Ua = Si(function (t) {
              var e = t.length,
                n = e > 1 ? t[e - 1] : o;
              return (n = 'function' == typeof n ? (t.pop(), n) : o), Ia(t, n);
            });
            function Na(t) {
              var e = pr(t);
              return (e.__chain__ = !0), e;
            }
            function Ba(t, e) {
              return e(t);
            }
            var za = Ro(function (t) {
              var e = t.length,
                n = e ? t[0] : 0,
                r = this.__wrapped__,
                i = function (e) {
                  return jr(e, t);
                };
              return !(e > 1 || this.__actions__.length) &&
                r instanceof vr &&
                Vo(n)
                ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                    func: Ba,
                    args: [i],
                    thisArg: o,
                  }),
                  new mr(r, this.__chain__).thru(function (t) {
                    return e && !t.length && t.push(o), t;
                  }))
                : this.thru(i);
            });
            var Wa = io(function (t, e, n) {
              le.call(t, n) ? ++t[n] : Ir(t, n, 1);
            });
            var $a = fo(ma),
              Ga = fo(va);
            function Ha(t, e) {
              return (vu(t) ? qe : Nr)(t, Fo(e, 3));
            }
            function Va(t, e) {
              return (vu(t) ? Xe : Br)(t, Fo(e, 3));
            }
            var qa = io(function (t, e, n) {
              le.call(t, n) ? t[n].push(e) : Ir(t, n, [e]);
            });
            var Xa = Si(function (t, e, n) {
                var i = -1,
                  o = 'function' == typeof e,
                  a = bu(t) ? r(t.length) : [];
                return (
                  Nr(t, function (t) {
                    a[++i] = o ? He(e, t, n) : ri(t, e, n);
                  }),
                  a
                );
              }),
              Ya = io(function (t, e, n) {
                Ir(t, n, e);
              });
            function Ka(t, e) {
              return (vu(t) ? Qe : hi)(t, Fo(e, 3));
            }
            var Za = io(
              function (t, e, n) {
                t[n ? 0 : 1].push(e);
              },
              function () {
                return [[], []];
              }
            );
            var Ja = Si(function (t, e) {
                if (null == t) return [];
                var n = e.length;
                return (
                  n > 1 && qo(t, e[0], e[1])
                    ? (e = [])
                    : n > 2 && qo(e[0], e[1], e[2]) && (e = [e[0]]),
                  vi(t, Gr(e, 1), [])
                );
              }),
              Qa =
                Fn ||
                function () {
                  return je.Date.now();
                };
            function tu(t, e, n) {
              return (
                (e = n ? o : e),
                (e = t && null == e ? t.length : e),
                To(t, E, o, o, o, o, e)
              );
            }
            function eu(t, e) {
              var n;
              if ('function' != typeof e) throw new ie(s);
              return (
                (t = zu(t)),
                function () {
                  return (
                    --t > 0 && (n = e.apply(this, arguments)),
                    t <= 1 && (e = o),
                    n
                  );
                }
              );
            }
            var nu = Si(function (t, e, n) {
                var r = v;
                if (n.length) {
                  var i = kn(n, Lo(nu));
                  r |= x;
                }
                return To(t, r, e, n, i);
              }),
              ru = Si(function (t, e, n) {
                var r = v | y;
                if (n.length) {
                  var i = kn(n, Lo(ru));
                  r |= x;
                }
                return To(e, r, t, n, i);
              });
            function iu(t, e, n) {
              var r,
                i,
                a,
                u,
                c,
                l,
                f = 0,
                h = !1,
                p = !1,
                d = !0;
              if ('function' != typeof t) throw new ie(s);
              function g(e) {
                var n = r,
                  a = i;
                return (r = i = o), (f = e), (u = t.apply(a, n));
              }
              function m(t) {
                var n = t - l;
                return l === o || n >= e || n < 0 || (p && t - f >= a);
              }
              function v() {
                var t = Qa();
                if (m(t)) return y(t);
                c = ia(
                  v,
                  (function (t) {
                    var n = e - (t - l);
                    return p ? Vn(n, a - (t - f)) : n;
                  })(t)
                );
              }
              function y(t) {
                return (c = o), d && r ? g(t) : ((r = i = o), u);
              }
              function b() {
                var t = Qa(),
                  n = m(t);
                if (((r = arguments), (i = this), (l = t), n)) {
                  if (c === o)
                    return (function (t) {
                      return (f = t), (c = ia(v, e)), h ? g(t) : u;
                    })(l);
                  if (p) return Yi(c), (c = ia(v, e)), g(l);
                }
                return c === o && (c = ia(v, e)), u;
              }
              return (
                (e = $u(e) || 0),
                Cu(n) &&
                  ((h = !!n.leading),
                  (a = (p = 'maxWait' in n) ? Hn($u(n.maxWait) || 0, e) : a),
                  (d = 'trailing' in n ? !!n.trailing : d)),
                (b.cancel = function () {
                  c !== o && Yi(c), (f = 0), (r = l = i = c = o);
                }),
                (b.flush = function () {
                  return c === o ? u : y(Qa());
                }),
                b
              );
            }
            var ou = Si(function (t, e) {
                return Dr(t, 1, e);
              }),
              au = Si(function (t, e, n) {
                return Dr(t, $u(e) || 0, n);
              });
            function uu(t, e) {
              if (
                'function' != typeof t ||
                (null != e && 'function' != typeof e)
              )
                throw new ie(s);
              var n = function () {
                var r = arguments,
                  i = e ? e.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
              };
              return (n.cache = new (uu.Cache || _r)()), n;
            }
            function su(t) {
              if ('function' != typeof t) throw new ie(s);
              return function () {
                var e = arguments;
                switch (e.length) {
                  case 0:
                    return !t.call(this);
                  case 1:
                    return !t.call(this, e[0]);
                  case 2:
                    return !t.call(this, e[0], e[1]);
                  case 3:
                    return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
              };
            }
            uu.Cache = _r;
            var cu = qi(function (t, e) {
                var n = (e =
                  1 == e.length && vu(e[0])
                    ? Qe(e[0], vn(Fo()))
                    : Qe(Gr(e, 1), vn(Fo()))).length;
                return Si(function (r) {
                  for (var i = -1, o = Vn(r.length, n); ++i < o; )
                    r[i] = e[i].call(this, r[i]);
                  return He(t, this, r);
                });
              }),
              lu = Si(function (t, e) {
                var n = kn(e, Lo(lu));
                return To(t, x, o, e, n);
              }),
              fu = Si(function (t, e) {
                var n = kn(e, Lo(fu));
                return To(t, S, o, e, n);
              }),
              hu = Ro(function (t, e) {
                return To(t, T, o, o, o, e);
              });
            function pu(t, e) {
              return t === e || (t != t && e != e);
            }
            var du = _o(Qr),
              gu = _o(function (t, e) {
                return t >= e;
              }),
              mu = ii(
                (function () {
                  return arguments;
                })()
              )
                ? ii
                : function (t) {
                    return (
                      ku(t) && le.call(t, 'callee') && !Pe.call(t, 'callee')
                    );
                  },
              vu = r.isArray,
              yu = Ne
                ? vn(Ne)
                : function (t) {
                    return ku(t) && Jr(t) == st;
                  };
            function bu(t) {
              return null != t && Au(t.length) && !Eu(t);
            }
            function _u(t) {
              return ku(t) && bu(t);
            }
            var wu = zn || $s,
              xu = Be
                ? vn(Be)
                : function (t) {
                    return ku(t) && Jr(t) == H;
                  };
            function Su(t) {
              if (!ku(t)) return !1;
              var e = Jr(t);
              return (
                e == q ||
                e == V ||
                ('string' == typeof t.message &&
                  'string' == typeof t.name &&
                  !Ou(t))
              );
            }
            function Eu(t) {
              if (!Cu(t)) return !1;
              var e = Jr(t);
              return e == X || e == Y || e == $ || e == tt;
            }
            function Tu(t) {
              return 'number' == typeof t && t == zu(t);
            }
            function Au(t) {
              return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= P;
            }
            function Cu(t) {
              var e = typeof t;
              return null != t && ('object' == e || 'function' == e);
            }
            function ku(t) {
              return null != t && 'object' == typeof t;
            }
            var Mu = ze
              ? vn(ze)
              : function (t) {
                  return ku(t) && Wo(t) == K;
                };
            function Ru(t) {
              return 'number' == typeof t || (ku(t) && Jr(t) == Z);
            }
            function Ou(t) {
              if (!ku(t) || Jr(t) != Q) return !1;
              var e = Oe(t);
              if (null === e) return !0;
              var n = le.call(e, 'constructor') && e.constructor;
              return (
                'function' == typeof n && n instanceof n && ce.call(n) == de
              );
            }
            var Iu = We
              ? vn(We)
              : function (t) {
                  return ku(t) && Jr(t) == et;
                };
            var ju = $e
              ? vn($e)
              : function (t) {
                  return ku(t) && Wo(t) == nt;
                };
            function Pu(t) {
              return 'string' == typeof t || (!vu(t) && ku(t) && Jr(t) == rt);
            }
            function Lu(t) {
              return 'symbol' == typeof t || (ku(t) && Jr(t) == it);
            }
            var Fu = Ge
              ? vn(Ge)
              : function (t) {
                  return ku(t) && Au(t.length) && !!Ae[Jr(t)];
                };
            var Du = _o(fi),
              Uu = _o(function (t, e) {
                return t <= e;
              });
            function Nu(t) {
              if (!t) return [];
              if (bu(t)) return Pu(t) ? In(t) : no(t);
              if (Ue && t[Ue])
                return (function (t) {
                  for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
                  return n;
                })(t[Ue]());
              var e = Wo(t);
              return (e == K ? An : e == nt ? Mn : ps)(t);
            }
            function Bu(t) {
              return t
                ? (t = $u(t)) === j || t === -j
                  ? (t < 0 ? -1 : 1) * L
                  : t == t
                  ? t
                  : 0
                : 0 === t
                ? t
                : 0;
            }
            function zu(t) {
              var e = Bu(t),
                n = e % 1;
              return e == e ? (n ? e - n : e) : 0;
            }
            function Wu(t) {
              return t ? Pr(zu(t), 0, D) : 0;
            }
            function $u(t) {
              if ('number' == typeof t) return t;
              if (Lu(t)) return F;
              if (Cu(t)) {
                var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
                t = Cu(e) ? e + '' : e;
              }
              if ('string' != typeof t) return 0 === t ? t : +t;
              t = t.replace(Pt, '');
              var n = Ht.test(t);
              return n || qt.test(t)
                ? Re(t.slice(2), n ? 2 : 8)
                : Gt.test(t)
                ? F
                : +t;
            }
            function Gu(t) {
              return ro(t, os(t));
            }
            function Hu(t) {
              return null == t ? '' : Fi(t);
            }
            var Vu = oo(function (t, e) {
                if (Zo(e) || bu(e)) ro(e, is(e), t);
                else for (var n in e) le.call(e, n) && kr(t, n, e[n]);
              }),
              qu = oo(function (t, e) {
                ro(e, os(e), t);
              }),
              Xu = oo(function (t, e, n, r) {
                ro(e, os(e), t, r);
              }),
              Yu = oo(function (t, e, n, r) {
                ro(e, is(e), t, r);
              }),
              Ku = Ro(jr);
            var Zu = Si(function (t, e) {
                t = ee(t);
                var n = -1,
                  r = e.length,
                  i = r > 2 ? e[2] : o;
                for (i && qo(e[0], e[1], i) && (r = 1); ++n < r; )
                  for (
                    var a = e[n], u = os(a), s = -1, c = u.length;
                    ++s < c;

                  ) {
                    var l = u[s],
                      f = t[l];
                    (f === o || (pu(f, ue[l]) && !le.call(t, l))) &&
                      (t[l] = a[l]);
                  }
                return t;
              }),
              Ju = Si(function (t) {
                return t.push(o, Co), He(us, o, t);
              });
            function Qu(t, e, n) {
              var r = null == t ? o : Kr(t, e);
              return r === o ? n : r;
            }
            function ts(t, e) {
              return null != t && $o(t, e, ei);
            }
            var es = go(function (t, e, n) {
                null != e &&
                  'function' != typeof e.toString &&
                  (e = pe.call(e)),
                  (t[e] = n);
              }, Cs(Rs)),
              ns = go(function (t, e, n) {
                null != e &&
                  'function' != typeof e.toString &&
                  (e = pe.call(e)),
                  le.call(t, e) ? t[e].push(n) : (t[e] = [n]);
              }, Fo),
              rs = Si(ri);
            function is(t) {
              return bu(t) ? Sr(t) : ci(t);
            }
            function os(t) {
              return bu(t) ? Sr(t, !0) : li(t);
            }
            var as = oo(function (t, e, n) {
                gi(t, e, n);
              }),
              us = oo(function (t, e, n, r) {
                gi(t, e, n, r);
              }),
              ss = Ro(function (t, e) {
                var n = {};
                if (null == t) return n;
                var r = !1;
                (e = Qe(e, function (e) {
                  return (e = Vi(e, t)), r || (r = e.length > 1), e;
                })),
                  ro(t, Io(t), n),
                  r && (n = Lr(n, h | p | d, ko));
                for (var i = e.length; i--; ) Ui(n, e[i]);
                return n;
              });
            var cs = Ro(function (t, e) {
              return null == t
                ? {}
                : (function (t, e) {
                    return yi(t, e, function (e, n) {
                      return ts(t, n);
                    });
                  })(t, e);
            });
            function ls(t, e) {
              if (null == t) return {};
              var n = Qe(Io(t), function (t) {
                return [t];
              });
              return (
                (e = Fo(e)),
                yi(t, n, function (t, n) {
                  return e(t, n[0]);
                })
              );
            }
            var fs = Eo(is),
              hs = Eo(os);
            function ps(t) {
              return null == t ? [] : yn(t, is(t));
            }
            var ds = co(function (t, e, n) {
              return (e = e.toLowerCase()), t + (n ? gs(e) : e);
            });
            function gs(t) {
              return Ss(Hu(t).toLowerCase());
            }
            function ms(t) {
              return (t = Hu(t)) && t.replace(Yt, xn).replace(be, '');
            }
            var vs = co(function (t, e, n) {
                return t + (n ? '-' : '') + e.toLowerCase();
              }),
              ys = co(function (t, e, n) {
                return t + (n ? ' ' : '') + e.toLowerCase();
              }),
              bs = so('toLowerCase');
            var _s = co(function (t, e, n) {
              return t + (n ? '_' : '') + e.toLowerCase();
            });
            var ws = co(function (t, e, n) {
              return t + (n ? ' ' : '') + Ss(e);
            });
            var xs = co(function (t, e, n) {
                return t + (n ? ' ' : '') + e.toUpperCase();
              }),
              Ss = so('toUpperCase');
            function Es(t, e, n) {
              return (
                (t = Hu(t)),
                (e = n ? o : e) === o
                  ? (function (t) {
                      return Se.test(t);
                    })(t)
                    ? (function (t) {
                        return t.match(we) || [];
                      })(t)
                    : (function (t) {
                        return t.match(Bt) || [];
                      })(t)
                  : t.match(e) || []
              );
            }
            var Ts = Si(function (t, e) {
                try {
                  return He(t, o, e);
                } catch (t) {
                  return Su(t) ? t : new Jt(t);
                }
              }),
              As = Ro(function (t, e) {
                return (
                  qe(e, function (e) {
                    (e = la(e)), Ir(t, e, nu(t[e], t));
                  }),
                  t
                );
              });
            function Cs(t) {
              return function () {
                return t;
              };
            }
            var ks = ho(),
              Ms = ho(!0);
            function Rs(t) {
              return t;
            }
            function Os(t) {
              return si('function' == typeof t ? t : Lr(t, h));
            }
            var Is = Si(function (t, e) {
                return function (n) {
                  return ri(n, t, e);
                };
              }),
              js = Si(function (t, e) {
                return function (n) {
                  return ri(t, n, e);
                };
              });
            function Ps(t, e, n) {
              var r = is(e),
                i = Yr(e, r);
              null != n ||
                (Cu(e) && (i.length || !r.length)) ||
                ((n = e), (e = t), (t = this), (i = Yr(e, is(e))));
              var o = !(Cu(n) && 'chain' in n && !n.chain),
                a = Eu(t);
              return (
                qe(i, function (n) {
                  var r = e[n];
                  (t[n] = r),
                    a &&
                      (t.prototype[n] = function () {
                        var e = this.__chain__;
                        if (o || e) {
                          var n = t(this.__wrapped__);
                          return (
                            (n.__actions__ = no(this.__actions__)).push({
                              func: r,
                              args: arguments,
                              thisArg: t,
                            }),
                            (n.__chain__ = e),
                            n
                          );
                        }
                        return r.apply(t, tn([this.value()], arguments));
                      });
                }),
                t
              );
            }
            function Ls() {}
            var Fs = vo(Qe),
              Ds = vo(Ye),
              Us = vo(rn);
            function Ns(t) {
              return Xo(t)
                ? hn(la(t))
                : (function (t) {
                    return function (e) {
                      return Kr(e, t);
                    };
                  })(t);
            }
            var Bs = bo(),
              zs = bo(!0);
            function Ws() {
              return [];
            }
            function $s() {
              return !1;
            }
            var Gs = mo(function (t, e) {
                return t + e;
              }, 0),
              Hs = xo('ceil'),
              Vs = mo(function (t, e) {
                return t / e;
              }, 1),
              qs = xo('floor');
            var Xs,
              Ys = mo(function (t, e) {
                return t * e;
              }, 1),
              Ks = xo('round'),
              Zs = mo(function (t, e) {
                return t - e;
              }, 0);
            return (
              (pr.after = function (t, e) {
                if ('function' != typeof e) throw new ie(s);
                return (
                  (t = zu(t)),
                  function () {
                    if (--t < 1) return e.apply(this, arguments);
                  }
                );
              }),
              (pr.ary = tu),
              (pr.assign = Vu),
              (pr.assignIn = qu),
              (pr.assignInWith = Xu),
              (pr.assignWith = Yu),
              (pr.at = Ku),
              (pr.before = eu),
              (pr.bind = nu),
              (pr.bindAll = As),
              (pr.bindKey = ru),
              (pr.castArray = function () {
                if (!arguments.length) return [];
                var t = arguments[0];
                return vu(t) ? t : [t];
              }),
              (pr.chain = Na),
              (pr.chunk = function (t, e, n) {
                e = (n ? qo(t, e, n) : e === o) ? 1 : Hn(zu(e), 0);
                var i = null == t ? 0 : t.length;
                if (!i || e < 1) return [];
                for (var a = 0, u = 0, s = r(Un(i / e)); a < i; )
                  s[u++] = Ri(t, a, (a += e));
                return s;
              }),
              (pr.compact = function (t) {
                for (
                  var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
                  ++e < n;

                ) {
                  var o = t[e];
                  o && (i[r++] = o);
                }
                return i;
              }),
              (pr.concat = function () {
                var t = arguments.length;
                if (!t) return [];
                for (var e = r(t - 1), n = arguments[0], i = t; i--; )
                  e[i - 1] = arguments[i];
                return tn(vu(n) ? no(n) : [n], Gr(e, 1));
              }),
              (pr.cond = function (t) {
                var e = null == t ? 0 : t.length,
                  n = Fo();
                return (
                  (t = e
                    ? Qe(t, function (t) {
                        if ('function' != typeof t[1]) throw new ie(s);
                        return [n(t[0]), t[1]];
                      })
                    : []),
                  Si(function (n) {
                    for (var r = -1; ++r < e; ) {
                      var i = t[r];
                      if (He(i[0], this, n)) return He(i[1], this, n);
                    }
                  })
                );
              }),
              (pr.conforms = function (t) {
                return (function (t) {
                  var e = is(t);
                  return function (n) {
                    return Fr(n, t, e);
                  };
                })(Lr(t, h));
              }),
              (pr.constant = Cs),
              (pr.countBy = Wa),
              (pr.create = function (t, e) {
                var n = dr(t);
                return null == e ? n : Or(n, e);
              }),
              (pr.curry = function t(e, n, r) {
                var i = To(e, _, o, o, o, o, o, (n = r ? o : n));
                return (i.placeholder = t.placeholder), i;
              }),
              (pr.curryRight = function t(e, n, r) {
                var i = To(e, w, o, o, o, o, o, (n = r ? o : n));
                return (i.placeholder = t.placeholder), i;
              }),
              (pr.debounce = iu),
              (pr.defaults = Zu),
              (pr.defaultsDeep = Ju),
              (pr.defer = ou),
              (pr.delay = au),
              (pr.difference = pa),
              (pr.differenceBy = da),
              (pr.differenceWith = ga),
              (pr.drop = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? Ri(t, (e = n || e === o ? 1 : zu(e)) < 0 ? 0 : e, r)
                  : [];
              }),
              (pr.dropRight = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? Ri(
                      t,
                      0,
                      (e = r - (e = n || e === o ? 1 : zu(e))) < 0 ? 0 : e
                    )
                  : [];
              }),
              (pr.dropRightWhile = function (t, e) {
                return t && t.length ? Bi(t, Fo(e, 3), !0, !0) : [];
              }),
              (pr.dropWhile = function (t, e) {
                return t && t.length ? Bi(t, Fo(e, 3), !0) : [];
              }),
              (pr.fill = function (t, e, n, r) {
                var i = null == t ? 0 : t.length;
                return i
                  ? (n &&
                      'number' != typeof n &&
                      qo(t, e, n) &&
                      ((n = 0), (r = i)),
                    (function (t, e, n, r) {
                      var i = t.length;
                      for (
                        (n = zu(n)) < 0 && (n = -n > i ? 0 : i + n),
                          (r = r === o || r > i ? i : zu(r)) < 0 && (r += i),
                          r = n > r ? 0 : Wu(r);
                        n < r;

                      )
                        t[n++] = e;
                      return t;
                    })(t, e, n, r))
                  : [];
              }),
              (pr.filter = function (t, e) {
                return (vu(t) ? Ke : $r)(t, Fo(e, 3));
              }),
              (pr.flatMap = function (t, e) {
                return Gr(Ka(t, e), 1);
              }),
              (pr.flatMapDeep = function (t, e) {
                return Gr(Ka(t, e), j);
              }),
              (pr.flatMapDepth = function (t, e, n) {
                return (n = n === o ? 1 : zu(n)), Gr(Ka(t, e), n);
              }),
              (pr.flatten = ya),
              (pr.flattenDeep = function (t) {
                return null != t && t.length ? Gr(t, j) : [];
              }),
              (pr.flattenDepth = function (t, e) {
                return null != t && t.length
                  ? Gr(t, (e = e === o ? 1 : zu(e)))
                  : [];
              }),
              (pr.flip = function (t) {
                return To(t, A);
              }),
              (pr.flow = ks),
              (pr.flowRight = Ms),
              (pr.fromPairs = function (t) {
                for (
                  var e = -1, n = null == t ? 0 : t.length, r = {};
                  ++e < n;

                ) {
                  var i = t[e];
                  r[i[0]] = i[1];
                }
                return r;
              }),
              (pr.functions = function (t) {
                return null == t ? [] : Yr(t, is(t));
              }),
              (pr.functionsIn = function (t) {
                return null == t ? [] : Yr(t, os(t));
              }),
              (pr.groupBy = qa),
              (pr.initial = function (t) {
                return null != t && t.length ? Ri(t, 0, -1) : [];
              }),
              (pr.intersection = _a),
              (pr.intersectionBy = wa),
              (pr.intersectionWith = xa),
              (pr.invert = es),
              (pr.invertBy = ns),
              (pr.invokeMap = Xa),
              (pr.iteratee = Os),
              (pr.keyBy = Ya),
              (pr.keys = is),
              (pr.keysIn = os),
              (pr.map = Ka),
              (pr.mapKeys = function (t, e) {
                var n = {};
                return (
                  (e = Fo(e, 3)),
                  qr(t, function (t, r, i) {
                    Ir(n, e(t, r, i), t);
                  }),
                  n
                );
              }),
              (pr.mapValues = function (t, e) {
                var n = {};
                return (
                  (e = Fo(e, 3)),
                  qr(t, function (t, r, i) {
                    Ir(n, r, e(t, r, i));
                  }),
                  n
                );
              }),
              (pr.matches = function (t) {
                return pi(Lr(t, h));
              }),
              (pr.matchesProperty = function (t, e) {
                return di(t, Lr(e, h));
              }),
              (pr.memoize = uu),
              (pr.merge = as),
              (pr.mergeWith = us),
              (pr.method = Is),
              (pr.methodOf = js),
              (pr.mixin = Ps),
              (pr.negate = su),
              (pr.nthArg = function (t) {
                return (
                  (t = zu(t)),
                  Si(function (e) {
                    return mi(e, t);
                  })
                );
              }),
              (pr.omit = ss),
              (pr.omitBy = function (t, e) {
                return ls(t, su(Fo(e)));
              }),
              (pr.once = function (t) {
                return eu(2, t);
              }),
              (pr.orderBy = function (t, e, n, r) {
                return null == t
                  ? []
                  : (vu(e) || (e = null == e ? [] : [e]),
                    vu((n = r ? o : n)) || (n = null == n ? [] : [n]),
                    vi(t, e, n));
              }),
              (pr.over = Fs),
              (pr.overArgs = cu),
              (pr.overEvery = Ds),
              (pr.overSome = Us),
              (pr.partial = lu),
              (pr.partialRight = fu),
              (pr.partition = Za),
              (pr.pick = cs),
              (pr.pickBy = ls),
              (pr.property = Ns),
              (pr.propertyOf = function (t) {
                return function (e) {
                  return null == t ? o : Kr(t, e);
                };
              }),
              (pr.pull = Ea),
              (pr.pullAll = Ta),
              (pr.pullAllBy = function (t, e, n) {
                return t && t.length && e && e.length ? bi(t, e, Fo(n, 2)) : t;
              }),
              (pr.pullAllWith = function (t, e, n) {
                return t && t.length && e && e.length ? bi(t, e, o, n) : t;
              }),
              (pr.pullAt = Aa),
              (pr.range = Bs),
              (pr.rangeRight = zs),
              (pr.rearg = hu),
              (pr.reject = function (t, e) {
                return (vu(t) ? Ke : $r)(t, su(Fo(e, 3)));
              }),
              (pr.remove = function (t, e) {
                var n = [];
                if (!t || !t.length) return n;
                var r = -1,
                  i = [],
                  o = t.length;
                for (e = Fo(e, 3); ++r < o; ) {
                  var a = t[r];
                  e(a, r, t) && (n.push(a), i.push(r));
                }
                return _i(t, i), n;
              }),
              (pr.rest = function (t, e) {
                if ('function' != typeof t) throw new ie(s);
                return Si(t, (e = e === o ? e : zu(e)));
              }),
              (pr.reverse = Ca),
              (pr.sampleSize = function (t, e, n) {
                return (
                  (e = (n ? qo(t, e, n) : e === o) ? 1 : zu(e)),
                  (vu(t) ? Tr : Ti)(t, e)
                );
              }),
              (pr.set = function (t, e, n) {
                return null == t ? t : Ai(t, e, n);
              }),
              (pr.setWith = function (t, e, n, r) {
                return (
                  (r = 'function' == typeof r ? r : o),
                  null == t ? t : Ai(t, e, n, r)
                );
              }),
              (pr.shuffle = function (t) {
                return (vu(t) ? Ar : Mi)(t);
              }),
              (pr.slice = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? (n && 'number' != typeof n && qo(t, e, n)
                      ? ((e = 0), (n = r))
                      : ((e = null == e ? 0 : zu(e)),
                        (n = n === o ? r : zu(n))),
                    Ri(t, e, n))
                  : [];
              }),
              (pr.sortBy = Ja),
              (pr.sortedUniq = function (t) {
                return t && t.length ? Pi(t) : [];
              }),
              (pr.sortedUniqBy = function (t, e) {
                return t && t.length ? Pi(t, Fo(e, 2)) : [];
              }),
              (pr.split = function (t, e, n) {
                return (
                  n && 'number' != typeof n && qo(t, e, n) && (e = n = o),
                  (n = n === o ? D : n >>> 0)
                    ? (t = Hu(t)) &&
                      ('string' == typeof e || (null != e && !Iu(e))) &&
                      !(e = Fi(e)) &&
                      Tn(t)
                      ? Xi(In(t), 0, n)
                      : t.split(e, n)
                    : []
                );
              }),
              (pr.spread = function (t, e) {
                if ('function' != typeof t) throw new ie(s);
                return (
                  (e = null == e ? 0 : Hn(zu(e), 0)),
                  Si(function (n) {
                    var r = n[e],
                      i = Xi(n, 0, e);
                    return r && tn(i, r), He(t, this, i);
                  })
                );
              }),
              (pr.tail = function (t) {
                var e = null == t ? 0 : t.length;
                return e ? Ri(t, 1, e) : [];
              }),
              (pr.take = function (t, e, n) {
                return t && t.length
                  ? Ri(t, 0, (e = n || e === o ? 1 : zu(e)) < 0 ? 0 : e)
                  : [];
              }),
              (pr.takeRight = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                return r
                  ? Ri(
                      t,
                      (e = r - (e = n || e === o ? 1 : zu(e))) < 0 ? 0 : e,
                      r
                    )
                  : [];
              }),
              (pr.takeRightWhile = function (t, e) {
                return t && t.length ? Bi(t, Fo(e, 3), !1, !0) : [];
              }),
              (pr.takeWhile = function (t, e) {
                return t && t.length ? Bi(t, Fo(e, 3)) : [];
              }),
              (pr.tap = function (t, e) {
                return e(t), t;
              }),
              (pr.throttle = function (t, e, n) {
                var r = !0,
                  i = !0;
                if ('function' != typeof t) throw new ie(s);
                return (
                  Cu(n) &&
                    ((r = 'leading' in n ? !!n.leading : r),
                    (i = 'trailing' in n ? !!n.trailing : i)),
                  iu(t, e, { leading: r, maxWait: e, trailing: i })
                );
              }),
              (pr.thru = Ba),
              (pr.toArray = Nu),
              (pr.toPairs = fs),
              (pr.toPairsIn = hs),
              (pr.toPath = function (t) {
                return vu(t) ? Qe(t, la) : Lu(t) ? [t] : no(ca(Hu(t)));
              }),
              (pr.toPlainObject = Gu),
              (pr.transform = function (t, e, n) {
                var r = vu(t),
                  i = r || wu(t) || Fu(t);
                if (((e = Fo(e, 4)), null == n)) {
                  var o = t && t.constructor;
                  n = i ? (r ? new o() : []) : Cu(t) && Eu(o) ? dr(Oe(t)) : {};
                }
                return (
                  (i ? qe : qr)(t, function (t, r, i) {
                    return e(n, t, r, i);
                  }),
                  n
                );
              }),
              (pr.unary = function (t) {
                return tu(t, 1);
              }),
              (pr.union = ka),
              (pr.unionBy = Ma),
              (pr.unionWith = Ra),
              (pr.uniq = function (t) {
                return t && t.length ? Di(t) : [];
              }),
              (pr.uniqBy = function (t, e) {
                return t && t.length ? Di(t, Fo(e, 2)) : [];
              }),
              (pr.uniqWith = function (t, e) {
                return (
                  (e = 'function' == typeof e ? e : o),
                  t && t.length ? Di(t, o, e) : []
                );
              }),
              (pr.unset = function (t, e) {
                return null == t || Ui(t, e);
              }),
              (pr.unzip = Oa),
              (pr.unzipWith = Ia),
              (pr.update = function (t, e, n) {
                return null == t ? t : Ni(t, e, Hi(n));
              }),
              (pr.updateWith = function (t, e, n, r) {
                return (
                  (r = 'function' == typeof r ? r : o),
                  null == t ? t : Ni(t, e, Hi(n), r)
                );
              }),
              (pr.values = ps),
              (pr.valuesIn = function (t) {
                return null == t ? [] : yn(t, os(t));
              }),
              (pr.without = ja),
              (pr.words = Es),
              (pr.wrap = function (t, e) {
                return lu(Hi(e), t);
              }),
              (pr.xor = Pa),
              (pr.xorBy = La),
              (pr.xorWith = Fa),
              (pr.zip = Da),
              (pr.zipObject = function (t, e) {
                return $i(t || [], e || [], kr);
              }),
              (pr.zipObjectDeep = function (t, e) {
                return $i(t || [], e || [], Ai);
              }),
              (pr.zipWith = Ua),
              (pr.entries = fs),
              (pr.entriesIn = hs),
              (pr.extend = qu),
              (pr.extendWith = Xu),
              Ps(pr, pr),
              (pr.add = Gs),
              (pr.attempt = Ts),
              (pr.camelCase = ds),
              (pr.capitalize = gs),
              (pr.ceil = Hs),
              (pr.clamp = function (t, e, n) {
                return (
                  n === o && ((n = e), (e = o)),
                  n !== o && (n = (n = $u(n)) == n ? n : 0),
                  e !== o && (e = (e = $u(e)) == e ? e : 0),
                  Pr($u(t), e, n)
                );
              }),
              (pr.clone = function (t) {
                return Lr(t, d);
              }),
              (pr.cloneDeep = function (t) {
                return Lr(t, h | d);
              }),
              (pr.cloneDeepWith = function (t, e) {
                return Lr(t, h | d, (e = 'function' == typeof e ? e : o));
              }),
              (pr.cloneWith = function (t, e) {
                return Lr(t, d, (e = 'function' == typeof e ? e : o));
              }),
              (pr.conformsTo = function (t, e) {
                return null == e || Fr(t, e, is(e));
              }),
              (pr.deburr = ms),
              (pr.defaultTo = function (t, e) {
                return null == t || t != t ? e : t;
              }),
              (pr.divide = Vs),
              (pr.endsWith = function (t, e, n) {
                (t = Hu(t)), (e = Fi(e));
                var r = t.length,
                  i = (n = n === o ? r : Pr(zu(n), 0, r));
                return (n -= e.length) >= 0 && t.slice(n, i) == e;
              }),
              (pr.eq = pu),
              (pr.escape = function (t) {
                return (t = Hu(t)) && Tt.test(t) ? t.replace(St, Sn) : t;
              }),
              (pr.escapeRegExp = function (t) {
                return (t = Hu(t)) && jt.test(t) ? t.replace(It, '\\$&') : t;
              }),
              (pr.every = function (t, e, n) {
                var r = vu(t) ? Ye : zr;
                return n && qo(t, e, n) && (e = o), r(t, Fo(e, 3));
              }),
              (pr.find = $a),
              (pr.findIndex = ma),
              (pr.findKey = function (t, e) {
                return an(t, Fo(e, 3), qr);
              }),
              (pr.findLast = Ga),
              (pr.findLastIndex = va),
              (pr.findLastKey = function (t, e) {
                return an(t, Fo(e, 3), Xr);
              }),
              (pr.floor = qs),
              (pr.forEach = Ha),
              (pr.forEachRight = Va),
              (pr.forIn = function (t, e) {
                return null == t ? t : Hr(t, Fo(e, 3), os);
              }),
              (pr.forInRight = function (t, e) {
                return null == t ? t : Vr(t, Fo(e, 3), os);
              }),
              (pr.forOwn = function (t, e) {
                return t && qr(t, Fo(e, 3));
              }),
              (pr.forOwnRight = function (t, e) {
                return t && Xr(t, Fo(e, 3));
              }),
              (pr.get = Qu),
              (pr.gt = du),
              (pr.gte = gu),
              (pr.has = function (t, e) {
                return null != t && $o(t, e, ti);
              }),
              (pr.hasIn = ts),
              (pr.head = ba),
              (pr.identity = Rs),
              (pr.includes = function (t, e, n, r) {
                (t = bu(t) ? t : ps(t)), (n = n && !r ? zu(n) : 0);
                var i = t.length;
                return (
                  n < 0 && (n = Hn(i + n, 0)),
                  Pu(t)
                    ? n <= i && t.indexOf(e, n) > -1
                    : !!i && sn(t, e, n) > -1
                );
              }),
              (pr.indexOf = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = null == n ? 0 : zu(n);
                return i < 0 && (i = Hn(r + i, 0)), sn(t, e, i);
              }),
              (pr.inRange = function (t, e, n) {
                return (
                  (e = Bu(e)),
                  n === o ? ((n = e), (e = 0)) : (n = Bu(n)),
                  (function (t, e, n) {
                    return t >= Vn(e, n) && t < Hn(e, n);
                  })((t = $u(t)), e, n)
                );
              }),
              (pr.invoke = rs),
              (pr.isArguments = mu),
              (pr.isArray = vu),
              (pr.isArrayBuffer = yu),
              (pr.isArrayLike = bu),
              (pr.isArrayLikeObject = _u),
              (pr.isBoolean = function (t) {
                return !0 === t || !1 === t || (ku(t) && Jr(t) == G);
              }),
              (pr.isBuffer = wu),
              (pr.isDate = xu),
              (pr.isElement = function (t) {
                return ku(t) && 1 === t.nodeType && !Ou(t);
              }),
              (pr.isEmpty = function (t) {
                if (null == t) return !0;
                if (
                  bu(t) &&
                  (vu(t) ||
                    'string' == typeof t ||
                    'function' == typeof t.splice ||
                    wu(t) ||
                    Fu(t) ||
                    mu(t))
                )
                  return !t.length;
                var e = Wo(t);
                if (e == K || e == nt) return !t.size;
                if (Zo(t)) return !ci(t).length;
                for (var n in t) if (le.call(t, n)) return !1;
                return !0;
              }),
              (pr.isEqual = function (t, e) {
                return oi(t, e);
              }),
              (pr.isEqualWith = function (t, e, n) {
                var r = (n = 'function' == typeof n ? n : o) ? n(t, e) : o;
                return r === o ? oi(t, e, o, n) : !!r;
              }),
              (pr.isError = Su),
              (pr.isFinite = function (t) {
                return 'number' == typeof t && Wn(t);
              }),
              (pr.isFunction = Eu),
              (pr.isInteger = Tu),
              (pr.isLength = Au),
              (pr.isMap = Mu),
              (pr.isMatch = function (t, e) {
                return t === e || ai(t, e, Uo(e));
              }),
              (pr.isMatchWith = function (t, e, n) {
                return (n = 'function' == typeof n ? n : o), ai(t, e, Uo(e), n);
              }),
              (pr.isNaN = function (t) {
                return Ru(t) && t != +t;
              }),
              (pr.isNative = function (t) {
                if (Ko(t)) throw new Jt(u);
                return ui(t);
              }),
              (pr.isNil = function (t) {
                return null == t;
              }),
              (pr.isNull = function (t) {
                return null === t;
              }),
              (pr.isNumber = Ru),
              (pr.isObject = Cu),
              (pr.isObjectLike = ku),
              (pr.isPlainObject = Ou),
              (pr.isRegExp = Iu),
              (pr.isSafeInteger = function (t) {
                return Tu(t) && t >= -P && t <= P;
              }),
              (pr.isSet = ju),
              (pr.isString = Pu),
              (pr.isSymbol = Lu),
              (pr.isTypedArray = Fu),
              (pr.isUndefined = function (t) {
                return t === o;
              }),
              (pr.isWeakMap = function (t) {
                return ku(t) && Wo(t) == at;
              }),
              (pr.isWeakSet = function (t) {
                return ku(t) && Jr(t) == ut;
              }),
              (pr.join = function (t, e) {
                return null == t ? '' : $n.call(t, e);
              }),
              (pr.kebabCase = vs),
              (pr.last = Sa),
              (pr.lastIndexOf = function (t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = r;
                return (
                  n !== o &&
                    (i = (i = zu(n)) < 0 ? Hn(r + i, 0) : Vn(i, r - 1)),
                  e == e
                    ? (function (t, e, n) {
                        for (var r = n + 1; r--; ) if (t[r] === e) return r;
                        return r;
                      })(t, e, i)
                    : un(t, ln, i, !0)
                );
              }),
              (pr.lowerCase = ys),
              (pr.lowerFirst = bs),
              (pr.lt = Du),
              (pr.lte = Uu),
              (pr.max = function (t) {
                return t && t.length ? Wr(t, Rs, Qr) : o;
              }),
              (pr.maxBy = function (t, e) {
                return t && t.length ? Wr(t, Fo(e, 2), Qr) : o;
              }),
              (pr.mean = function (t) {
                return fn(t, Rs);
              }),
              (pr.meanBy = function (t, e) {
                return fn(t, Fo(e, 2));
              }),
              (pr.min = function (t) {
                return t && t.length ? Wr(t, Rs, fi) : o;
              }),
              (pr.minBy = function (t, e) {
                return t && t.length ? Wr(t, Fo(e, 2), fi) : o;
              }),
              (pr.stubArray = Ws),
              (pr.stubFalse = $s),
              (pr.stubObject = function () {
                return {};
              }),
              (pr.stubString = function () {
                return '';
              }),
              (pr.stubTrue = function () {
                return !0;
              }),
              (pr.multiply = Ys),
              (pr.nth = function (t, e) {
                return t && t.length ? mi(t, zu(e)) : o;
              }),
              (pr.noConflict = function () {
                return je._ === this && (je._ = ge), this;
              }),
              (pr.noop = Ls),
              (pr.now = Qa),
              (pr.pad = function (t, e, n) {
                t = Hu(t);
                var r = (e = zu(e)) ? On(t) : 0;
                if (!e || r >= e) return t;
                var i = (e - r) / 2;
                return yo(Nn(i), n) + t + yo(Un(i), n);
              }),
              (pr.padEnd = function (t, e, n) {
                t = Hu(t);
                var r = (e = zu(e)) ? On(t) : 0;
                return e && r < e ? t + yo(e - r, n) : t;
              }),
              (pr.padStart = function (t, e, n) {
                t = Hu(t);
                var r = (e = zu(e)) ? On(t) : 0;
                return e && r < e ? yo(e - r, n) + t : t;
              }),
              (pr.parseInt = function (t, e, n) {
                return (
                  n || null == e ? (e = 0) : e && (e = +e),
                  Xn(Hu(t).replace(Lt, ''), e || 0)
                );
              }),
              (pr.random = function (t, e, n) {
                if (
                  (n && 'boolean' != typeof n && qo(t, e, n) && (e = n = o),
                  n === o &&
                    ('boolean' == typeof e
                      ? ((n = e), (e = o))
                      : 'boolean' == typeof t && ((n = t), (t = o))),
                  t === o && e === o
                    ? ((t = 0), (e = 1))
                    : ((t = Bu(t)), e === o ? ((e = t), (t = 0)) : (e = Bu(e))),
                  t > e)
                ) {
                  var r = t;
                  (t = e), (e = r);
                }
                if (n || t % 1 || e % 1) {
                  var i = Yn();
                  return Vn(
                    t + i * (e - t + Me('1e-' + ((i + '').length - 1))),
                    e
                  );
                }
                return wi(t, e);
              }),
              (pr.reduce = function (t, e, n) {
                var r = vu(t) ? en : dn,
                  i = arguments.length < 3;
                return r(t, Fo(e, 4), n, i, Nr);
              }),
              (pr.reduceRight = function (t, e, n) {
                var r = vu(t) ? nn : dn,
                  i = arguments.length < 3;
                return r(t, Fo(e, 4), n, i, Br);
              }),
              (pr.repeat = function (t, e, n) {
                return (
                  (e = (n ? qo(t, e, n) : e === o) ? 1 : zu(e)), xi(Hu(t), e)
                );
              }),
              (pr.replace = function () {
                var t = arguments,
                  e = Hu(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2]);
              }),
              (pr.result = function (t, e, n) {
                var r = -1,
                  i = (e = Vi(e, t)).length;
                for (i || ((i = 1), (t = o)); ++r < i; ) {
                  var a = null == t ? o : t[la(e[r])];
                  a === o && ((r = i), (a = n)), (t = Eu(a) ? a.call(t) : a);
                }
                return t;
              }),
              (pr.round = Ks),
              (pr.runInContext = t),
              (pr.sample = function (t) {
                return (vu(t) ? Er : Ei)(t);
              }),
              (pr.size = function (t) {
                if (null == t) return 0;
                if (bu(t)) return Pu(t) ? On(t) : t.length;
                var e = Wo(t);
                return e == K || e == nt ? t.size : ci(t).length;
              }),
              (pr.snakeCase = _s),
              (pr.some = function (t, e, n) {
                var r = vu(t) ? rn : Oi;
                return n && qo(t, e, n) && (e = o), r(t, Fo(e, 3));
              }),
              (pr.sortedIndex = function (t, e) {
                return Ii(t, e);
              }),
              (pr.sortedIndexBy = function (t, e, n) {
                return ji(t, e, Fo(n, 2));
              }),
              (pr.sortedIndexOf = function (t, e) {
                var n = null == t ? 0 : t.length;
                if (n) {
                  var r = Ii(t, e);
                  if (r < n && pu(t[r], e)) return r;
                }
                return -1;
              }),
              (pr.sortedLastIndex = function (t, e) {
                return Ii(t, e, !0);
              }),
              (pr.sortedLastIndexBy = function (t, e, n) {
                return ji(t, e, Fo(n, 2), !0);
              }),
              (pr.sortedLastIndexOf = function (t, e) {
                if (null != t && t.length) {
                  var n = Ii(t, e, !0) - 1;
                  if (pu(t[n], e)) return n;
                }
                return -1;
              }),
              (pr.startCase = ws),
              (pr.startsWith = function (t, e, n) {
                return (
                  (t = Hu(t)),
                  (n = null == n ? 0 : Pr(zu(n), 0, t.length)),
                  (e = Fi(e)),
                  t.slice(n, n + e.length) == e
                );
              }),
              (pr.subtract = Zs),
              (pr.sum = function (t) {
                return t && t.length ? gn(t, Rs) : 0;
              }),
              (pr.sumBy = function (t, e) {
                return t && t.length ? gn(t, Fo(e, 2)) : 0;
              }),
              (pr.template = function (t, e, n) {
                var r = pr.templateSettings;
                n && qo(t, e, n) && (e = o),
                  (t = Hu(t)),
                  (e = Xu({}, e, r, Ao));
                var i,
                  a,
                  u = Xu({}, e.imports, r.imports, Ao),
                  s = is(u),
                  c = yn(u, s),
                  l = 0,
                  f = e.interpolate || Kt,
                  h = "__p += '",
                  p = ne(
                    (e.escape || Kt).source +
                      '|' +
                      f.source +
                      '|' +
                      (f === kt ? Wt : Kt).source +
                      '|' +
                      (e.evaluate || Kt).source +
                      '|$',
                    'g'
                  ),
                  d =
                    '//# sourceURL=' +
                    (le.call(e, 'sourceURL')
                      ? (e.sourceURL + '').replace(/[\r\n]/g, ' ')
                      : 'lodash.templateSources[' + ++Te + ']') +
                    '\n';
                t.replace(p, function (e, n, r, o, u, s) {
                  return (
                    r || (r = o),
                    (h += t.slice(l, s).replace(Zt, En)),
                    n && ((i = !0), (h += "' +\n__e(" + n + ") +\n'")),
                    u && ((a = !0), (h += "';\n" + u + ";\n__p += '")),
                    r &&
                      (h +=
                        "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    (l = s + e.length),
                    e
                  );
                }),
                  (h += "';\n");
                var g = le.call(e, 'variable') && e.variable;
                g || (h = 'with (obj) {\n' + h + '\n}\n'),
                  (h = (a ? h.replace(bt, '') : h)
                    .replace(_t, '$1')
                    .replace(wt, '$1;')),
                  (h =
                    'function(' +
                    (g || 'obj') +
                    ') {\n' +
                    (g ? '' : 'obj || (obj = {});\n') +
                    "var __t, __p = ''" +
                    (i ? ', __e = _.escape' : '') +
                    (a
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ';\n') +
                    h +
                    'return __p\n}');
                var m = Ts(function () {
                  return Qt(s, d + 'return ' + h).apply(o, c);
                });
                if (((m.source = h), Su(m))) throw m;
                return m;
              }),
              (pr.times = function (t, e) {
                if ((t = zu(t)) < 1 || t > P) return [];
                var n = D,
                  r = Vn(t, D);
                (e = Fo(e)), (t -= D);
                for (var i = mn(r, e); ++n < t; ) e(n);
                return i;
              }),
              (pr.toFinite = Bu),
              (pr.toInteger = zu),
              (pr.toLength = Wu),
              (pr.toLower = function (t) {
                return Hu(t).toLowerCase();
              }),
              (pr.toNumber = $u),
              (pr.toSafeInteger = function (t) {
                return t ? Pr(zu(t), -P, P) : 0 === t ? t : 0;
              }),
              (pr.toString = Hu),
              (pr.toUpper = function (t) {
                return Hu(t).toUpperCase();
              }),
              (pr.trim = function (t, e, n) {
                if ((t = Hu(t)) && (n || e === o)) return t.replace(Pt, '');
                if (!t || !(e = Fi(e))) return t;
                var r = In(t),
                  i = In(e);
                return Xi(r, _n(r, i), wn(r, i) + 1).join('');
              }),
              (pr.trimEnd = function (t, e, n) {
                if ((t = Hu(t)) && (n || e === o)) return t.replace(Ft, '');
                if (!t || !(e = Fi(e))) return t;
                var r = In(t);
                return Xi(r, 0, wn(r, In(e)) + 1).join('');
              }),
              (pr.trimStart = function (t, e, n) {
                if ((t = Hu(t)) && (n || e === o)) return t.replace(Lt, '');
                if (!t || !(e = Fi(e))) return t;
                var r = In(t);
                return Xi(r, _n(r, In(e))).join('');
              }),
              (pr.truncate = function (t, e) {
                var n = C,
                  r = k;
                if (Cu(e)) {
                  var i = 'separator' in e ? e.separator : i;
                  (n = 'length' in e ? zu(e.length) : n),
                    (r = 'omission' in e ? Fi(e.omission) : r);
                }
                var a = (t = Hu(t)).length;
                if (Tn(t)) {
                  var u = In(t);
                  a = u.length;
                }
                if (n >= a) return t;
                var s = n - On(r);
                if (s < 1) return r;
                var c = u ? Xi(u, 0, s).join('') : t.slice(0, s);
                if (i === o) return c + r;
                if ((u && (s += c.length - s), Iu(i))) {
                  if (t.slice(s).search(i)) {
                    var l,
                      f = c;
                    for (
                      i.global || (i = ne(i.source, Hu($t.exec(i)) + 'g')),
                        i.lastIndex = 0;
                      (l = i.exec(f));

                    )
                      var h = l.index;
                    c = c.slice(0, h === o ? s : h);
                  }
                } else if (t.indexOf(Fi(i), s) != s) {
                  var p = c.lastIndexOf(i);
                  p > -1 && (c = c.slice(0, p));
                }
                return c + r;
              }),
              (pr.unescape = function (t) {
                return (t = Hu(t)) && Et.test(t) ? t.replace(xt, jn) : t;
              }),
              (pr.uniqueId = function (t) {
                var e = ++fe;
                return Hu(t) + e;
              }),
              (pr.upperCase = xs),
              (pr.upperFirst = Ss),
              (pr.each = Ha),
              (pr.eachRight = Va),
              (pr.first = ba),
              Ps(
                pr,
                ((Xs = {}),
                qr(pr, function (t, e) {
                  le.call(pr.prototype, e) || (Xs[e] = t);
                }),
                Xs),
                { chain: !1 }
              ),
              (pr.VERSION = '4.17.15'),
              qe(
                [
                  'bind',
                  'bindKey',
                  'curry',
                  'curryRight',
                  'partial',
                  'partialRight',
                ],
                function (t) {
                  pr[t].placeholder = pr;
                }
              ),
              qe(['drop', 'take'], function (t, e) {
                (vr.prototype[t] = function (n) {
                  n = n === o ? 1 : Hn(zu(n), 0);
                  var r = this.__filtered__ && !e ? new vr(this) : this.clone();
                  return (
                    r.__filtered__
                      ? (r.__takeCount__ = Vn(n, r.__takeCount__))
                      : r.__views__.push({
                          size: Vn(n, D),
                          type: t + (r.__dir__ < 0 ? 'Right' : ''),
                        }),
                    r
                  );
                }),
                  (vr.prototype[t + 'Right'] = function (e) {
                    return this.reverse()[t](e).reverse();
                  });
              }),
              qe(['filter', 'map', 'takeWhile'], function (t, e) {
                var n = e + 1,
                  r = n == O || 3 == n;
                vr.prototype[t] = function (t) {
                  var e = this.clone();
                  return (
                    e.__iteratees__.push({ iteratee: Fo(t, 3), type: n }),
                    (e.__filtered__ = e.__filtered__ || r),
                    e
                  );
                };
              }),
              qe(['head', 'last'], function (t, e) {
                var n = 'take' + (e ? 'Right' : '');
                vr.prototype[t] = function () {
                  return this[n](1).value()[0];
                };
              }),
              qe(['initial', 'tail'], function (t, e) {
                var n = 'drop' + (e ? '' : 'Right');
                vr.prototype[t] = function () {
                  return this.__filtered__ ? new vr(this) : this[n](1);
                };
              }),
              (vr.prototype.compact = function () {
                return this.filter(Rs);
              }),
              (vr.prototype.find = function (t) {
                return this.filter(t).head();
              }),
              (vr.prototype.findLast = function (t) {
                return this.reverse().find(t);
              }),
              (vr.prototype.invokeMap = Si(function (t, e) {
                return 'function' == typeof t
                  ? new vr(this)
                  : this.map(function (n) {
                      return ri(n, t, e);
                    });
              })),
              (vr.prototype.reject = function (t) {
                return this.filter(su(Fo(t)));
              }),
              (vr.prototype.slice = function (t, e) {
                t = zu(t);
                var n = this;
                return n.__filtered__ && (t > 0 || e < 0)
                  ? new vr(n)
                  : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                    e !== o &&
                      (n = (e = zu(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                    n);
              }),
              (vr.prototype.takeRightWhile = function (t) {
                return this.reverse().takeWhile(t).reverse();
              }),
              (vr.prototype.toArray = function () {
                return this.take(D);
              }),
              qr(vr.prototype, function (t, e) {
                var n = /^(?:filter|find|map|reject)|While$/.test(e),
                  r = /^(?:head|last)$/.test(e),
                  i = pr[r ? 'take' + ('last' == e ? 'Right' : '') : e],
                  a = r || /^find/.test(e);
                i &&
                  (pr.prototype[e] = function () {
                    var e = this.__wrapped__,
                      u = r ? [1] : arguments,
                      s = e instanceof vr,
                      c = u[0],
                      l = s || vu(e),
                      f = function (t) {
                        var e = i.apply(pr, tn([t], u));
                        return r && h ? e[0] : e;
                      };
                    l &&
                      n &&
                      'function' == typeof c &&
                      1 != c.length &&
                      (s = l = !1);
                    var h = this.__chain__,
                      p = !!this.__actions__.length,
                      d = a && !h,
                      g = s && !p;
                    if (!a && l) {
                      e = g ? e : new vr(this);
                      var m = t.apply(e, u);
                      return (
                        m.__actions__.push({ func: Ba, args: [f], thisArg: o }),
                        new mr(m, h)
                      );
                    }
                    return d && g
                      ? t.apply(this, u)
                      : ((m = this.thru(f)),
                        d ? (r ? m.value()[0] : m.value()) : m);
                  });
              }),
              qe(
                ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
                function (t) {
                  var e = oe[t],
                    n = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                    r = /^(?:pop|shift)$/.test(t);
                  pr.prototype[t] = function () {
                    var t = arguments;
                    if (r && !this.__chain__) {
                      var i = this.value();
                      return e.apply(vu(i) ? i : [], t);
                    }
                    return this[n](function (n) {
                      return e.apply(vu(n) ? n : [], t);
                    });
                  };
                }
              ),
              qr(vr.prototype, function (t, e) {
                var n = pr[e];
                if (n) {
                  var r = n.name + '';
                  le.call(ir, r) || (ir[r] = []),
                    ir[r].push({ name: e, func: n });
                }
              }),
              (ir[po(o, y).name] = [{ name: 'wrapper', func: o }]),
              (vr.prototype.clone = function () {
                var t = new vr(this.__wrapped__);
                return (
                  (t.__actions__ = no(this.__actions__)),
                  (t.__dir__ = this.__dir__),
                  (t.__filtered__ = this.__filtered__),
                  (t.__iteratees__ = no(this.__iteratees__)),
                  (t.__takeCount__ = this.__takeCount__),
                  (t.__views__ = no(this.__views__)),
                  t
                );
              }),
              (vr.prototype.reverse = function () {
                if (this.__filtered__) {
                  var t = new vr(this);
                  (t.__dir__ = -1), (t.__filtered__ = !0);
                } else (t = this.clone()).__dir__ *= -1;
                return t;
              }),
              (vr.prototype.value = function () {
                var t = this.__wrapped__.value(),
                  e = this.__dir__,
                  n = vu(t),
                  r = e < 0,
                  i = n ? t.length : 0,
                  o = (function (t, e, n) {
                    for (var r = -1, i = n.length; ++r < i; ) {
                      var o = n[r],
                        a = o.size;
                      switch (o.type) {
                        case 'drop':
                          t += a;
                          break;
                        case 'dropRight':
                          e -= a;
                          break;
                        case 'take':
                          e = Vn(e, t + a);
                          break;
                        case 'takeRight':
                          t = Hn(t, e - a);
                      }
                    }
                    return { start: t, end: e };
                  })(0, i, this.__views__),
                  a = o.start,
                  u = o.end,
                  s = u - a,
                  c = r ? u : a - 1,
                  l = this.__iteratees__,
                  f = l.length,
                  h = 0,
                  p = Vn(s, this.__takeCount__);
                if (!n || (!r && i == s && p == s))
                  return zi(t, this.__actions__);
                var d = [];
                t: for (; s-- && h < p; ) {
                  for (var g = -1, m = t[(c += e)]; ++g < f; ) {
                    var v = l[g],
                      y = v.iteratee,
                      b = v.type,
                      _ = y(m);
                    if (b == I) m = _;
                    else if (!_) {
                      if (b == O) continue t;
                      break t;
                    }
                  }
                  d[h++] = m;
                }
                return d;
              }),
              (pr.prototype.at = za),
              (pr.prototype.chain = function () {
                return Na(this);
              }),
              (pr.prototype.commit = function () {
                return new mr(this.value(), this.__chain__);
              }),
              (pr.prototype.next = function () {
                this.__values__ === o && (this.__values__ = Nu(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return {
                  done: t,
                  value: t ? o : this.__values__[this.__index__++],
                };
              }),
              (pr.prototype.plant = function (t) {
                for (var e, n = this; n instanceof gr; ) {
                  var r = ha(n);
                  (r.__index__ = 0),
                    (r.__values__ = o),
                    e ? (i.__wrapped__ = r) : (e = r);
                  var i = r;
                  n = n.__wrapped__;
                }
                return (i.__wrapped__ = t), e;
              }),
              (pr.prototype.reverse = function () {
                var t = this.__wrapped__;
                if (t instanceof vr) {
                  var e = t;
                  return (
                    this.__actions__.length && (e = new vr(this)),
                    (e = e.reverse()).__actions__.push({
                      func: Ba,
                      args: [Ca],
                      thisArg: o,
                    }),
                    new mr(e, this.__chain__)
                  );
                }
                return this.thru(Ca);
              }),
              (pr.prototype.toJSON =
                pr.prototype.valueOf =
                pr.prototype.value =
                  function () {
                    return zi(this.__wrapped__, this.__actions__);
                  }),
              (pr.prototype.first = pr.prototype.head),
              Ue &&
                (pr.prototype[Ue] = function () {
                  return this;
                }),
              pr
            );
          })();
          (je._ = Pn),
            (i = function () {
              return Pn;
            }.call(e, n, e, r)) === o || (r.exports = i);
        }).call(this);
      }).call(this, n(31), n(32)(t));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = /\d+|\D+/g;
      e.default = function (t, e) {
        for (
          var n = t.match(r) || [], i = e.match(r) || [];
          n.length > 0 && i.length > 0;

        ) {
          var o = n.shift(),
            a = i.shift(),
            u = parseInt(o, 10),
            s = parseInt(a, 10);
          if (isNaN(u) || isNaN(s)) {
            if (!isNaN(u) || !isNaN(s)) return isNaN(s) ? -1 : 1;
            if (o < a) return -1;
            if (o > a) return 1;
          } else {
            if (u < s) return -1;
            if (u > s) return 1;
          }
        }
        return 0 === n.length && 0 === i.length ? 0 : 0 === n.length ? -1 : 1;
      };
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          t.requestFullscreen
            ? t.requestFullscreen()
            : t.mozRequestFullScreen
            ? t.mozRequestFullScreen()
            : t.webkitRequestFullScreen &&
              t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        });
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__makeTemplateObject) ||
        function (t, e) {
          return (
            Object.defineProperty
              ? Object.defineProperty(t, 'raw', { value: e })
              : (t.raw = e),
            t
          );
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i,
        o = n(0),
        a = n(2).default.div(
          i ||
            (i = r(
              [
                '\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2em 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  line-height: 1.4em;\n  color: white;\n  table {\n    width: 40em;\n    margin: 0 auto;\n  }\n  h1 {\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n    line-height: 2em;\n    text-align: center;\n    padding-bottom: .5em;\n  }\n  th, td {\n    text-align: left;\n    padding: .4em 1em;\n    vertical-align: top;\n  }\n  th {\n    width: 10em;\n  }\n',
              ],
              [
                '\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2em 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  line-height: 1.4em;\n  color: white;\n  table {\n    width: 40em;\n    margin: 0 auto;\n  }\n  h1 {\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n    line-height: 2em;\n    text-align: center;\n    padding-bottom: .5em;\n  }\n  th, td {\n    text-align: left;\n    padding: .4em 1em;\n    vertical-align: top;\n  }\n  th {\n    width: 10em;\n  }\n',
              ]
            ))
        );
      e.default = function () {
        return o.createElement(
          a,
          null,
          o.createElement('h1', null, 'Shortcuts'),
          o.createElement(
            'table',
            null,
            o.createElement(
              'tbody',
              null,
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, '0-9'),
                o.createElement('td', null, 'Switch images')
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 'Shift + 0-9'),
                o.createElement(
                  'td',
                  null,
                  'Switch comparison (to for example reference or input)'
                )
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 'Shift + Arrows'),
                o.createElement('td', null, 'Navigate through the menu')
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 'Shift + click'),
                o.createElement(
                  'td',
                  null,
                  'Open a tab, and activate keyboard shortcuts for the row clicked'
                )
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 'e / E'),
                o.createElement(
                  'td',
                  null,
                  'Increase / decrease ',
                  o.createElement('strong', null, 'e'),
                  'xposure'
                )
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 'r'),
                o.createElement(
                  'td',
                  null,
                  'Reset exposure, view transform, positioning and zooming'
                )
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 't'),
                o.createElement(
                  'td',
                  null,
                  'Toggle between the Gamma 2.2 and the Pseudo ARRI K1S1 view transforms'
                )
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, 'f'),
                o.createElement(
                  'td',
                  null,
                  'Enter ',
                  o.createElement('strong', null, 'f'),
                  'ullscreen mode'
                )
              ),
              o.createElement(
                'tr',
                null,
                o.createElement('th', null, '?'),
                o.createElement('td', null, 'Toggle this help screen')
              )
            )
          )
        );
      };
    },
    function (t, e, n) {
      'use strict';
      var r,
        i =
          (this && this.__makeTemplateObject) ||
          function (t, e) {
            return (
              Object.defineProperty
                ? Object.defineProperty(t, 'raw', { value: e })
                : (t.raw = e),
              t
            );
          },
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', { value: !0 });
      var a,
        u,
        s = n(0),
        c = n(2),
        l = n(9),
        f = n(5),
        h = c.default.div(
          a ||
            (a = i(
              [
                '\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  width: 100%; height: 100%;\n',
              ],
              [
                '\n  position: absolute;\n  top: 0; bottom: 0;\n  left: 0; right: 0;\n  width: 100%; height: 100%;\n',
              ]
            ))
        ),
        p = c.default.div(
          u ||
            (u = i(
              [
                '\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: left;\n  padding: .6em;\n  background-color: rgb(64, 64, 64);\n',
              ],
              [
                '\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: left;\n  padding: .6em;\n  background-color: rgb(64, 64, 64);\n',
              ]
            ))
        ),
        d = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.cache = new f.ImageCache()),
              (n.requestId = 0),
              (n.currentRequest = 0),
              (n.state = { isLoading: !1, errorMsg: null, image: null }),
              n.handleImageChange(e, !1),
              n
            );
          }
          return (
            o(e, t),
            (e.prototype.componentWillReceiveProps = function (t) {
              t.imageSpec !== this.props.imageSpec && this.handleImageChange(t);
            }),
            (e.prototype.componentWillUnmount = function () {
              this.requestId = -1;
            }),
            (e.prototype.render = function () {
              var t = this;
              return s.createElement(
                h,
                null,
                null != this.state.image
                  ? s.createElement(l.default, {
                      viewTransform: this.props.viewTransform,
                      exposure: this.props.exposure,
                      gamma: this.props.gamma,
                      offset: this.props.offset,
                      image: this.state.image,
                      ref: function (e) {
                        return (t.imageFrame = e);
                      },
                      allowMovement: this.props.allowMovement,
                      enableMouseEvents: this.props.enableMouseEvents,
                    })
                  : null,
                this.state.isLoading
                  ? s.createElement(p, null, 'Downloading ...')
                  : null,
                this.state.errorMsg
                  ? s.createElement(p, null, this.state.errorMsg)
                  : null
              );
            }),
            (e.prototype.handleImageChange = function (t, e) {
              var n = this;
              void 0 === e && (e = !0), this.currentRequest++;
              var r = this.currentRequest;
              e && this.setState({ isLoading: !0, errorMsg: null }),
                this.downloadImage(t.imageSpec)
                  .then(function (t) {
                    r === n.currentRequest &&
                      n.setState({ errorMsg: null, isLoading: !1, image: t });
                  })
                  .catch(function (t) {
                    r === n.requestId &&
                      n.setState({ errorMsg: t.message, isLoading: !1 });
                  });
            }),
            (e.prototype.downloadImage = function (t) {
              var e = this;
              if ('Url' === t.type) return this.cache.get(t.url);
              if ('Difference' === t.type)
                return Promise.all(
                  [t.urlA, t.urlB].map(function (t) {
                    return e.cache.get(t);
                  })
                ).then(function (e) {
                  var n = e[0],
                    r = e[1],
                    i = n.height,
                    o = n.width,
                    a = n.nChannels;
                  if (i !== r.height)
                    throw Error(
                      t.urlA +
                        ' & ' +
                        t.urlB +
                        ' with heights ' +
                        i +
                        ' & ' +
                        r.height +
                        ' cannot be compared.'
                    );
                  if (o !== r.width)
                    throw Error(
                      t.urlA +
                        ' & ' +
                        t.urlB +
                        ' with widths ' +
                        o +
                        ' & ' +
                        r.width +
                        ' cannot be compared.'
                    );
                  if (a !== r.nChannels)
                    throw Error(
                      t.urlA +
                        ' & ' +
                        t.urlB +
                        ' with unequal nChannels ' +
                        a +
                        ' & ' +
                        r.nChannels +
                        '.'
                    );
                  return {
                    type: t.type,
                    imageA: n,
                    imageB: r,
                    width: o,
                    height: i,
                    nChannels: a,
                    lossFunction: t.lossFunction,
                  };
                });
              throw Error('Unkonwn imageSpec type for ' + t + '.');
            }),
            e
          );
        })(s.Component);
      e.default = d;
    },
    function (t, e, n) {
      'use strict';
      var r =
        (this && this.__makeTemplateObject) ||
        function (t, e) {
          return (
            Object.defineProperty
              ? Object.defineProperty(t, 'raw', { value: e })
              : (t.raw = e),
            t
          );
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i,
        o,
        a,
        u = n(0),
        s = n(2),
        c = n(38),
        l = function (t) {
          return t.split('').reverse().join('');
        },
        f = s.default.a(
          i ||
            (i = r(
              [
                '\n  cursor: pointer;\n  display: inline-block;\n  margin: 0;\n  flex-grow: 0;\n  flex-shrink: ',
                ';\n  padding: .4em .7em;\n  overflow: hidden;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  background-color: ',
                ';\n  color: ',
                ';\n  &:active {\n    background-color: ',
                ';\n  }\n  &:hover {\n    flex-shrink: 0;\n  }\n  user-select: none;\n  -moz-user-select: none;\n',
              ],
              [
                '\n  cursor: pointer;\n  display: inline-block;\n  margin: 0;\n  flex-grow: 0;\n  flex-shrink: ',
                ';\n  padding: .4em .7em;\n  overflow: hidden;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  background-color: ',
                ';\n  color: ',
                ';\n  &:active {\n    background-color: ',
                ';\n  }\n  &:hover {\n    flex-shrink: 0;\n  }\n  user-select: none;\n  -moz-user-select: none;\n',
              ]
            )),
          function (t) {
            return t.active ? '0' : '1';
          },
          function (t) {
            return t.active ? '#7DC6C6' : 'inherit';
          },
          function (t) {
            return t.active ? '#FFFFFF !important' : '#AAA !important';
          },
          function (t) {
            return t.active ? '#6DB6B6' : '#222';
          }
        ),
        h = s.default.div(
          o ||
            (o = r(
              [
                '\n  display: block;\n  padding: 0;\n  border-bottom: 1px solid #333;\n  background: #333;\n  color: #ccc;\n  display: flex;\n  &:first-child {\n    border-top: 1px solid #333;\n  }\n  &:hover ',
                ' {\n    flex-shrink: 1;\n  }\n  &:hover ',
                ':hover {\n    flex-shrink: 0;\n  }\n',
              ],
              [
                '\n  display: block;\n  padding: 0;\n  border-bottom: 1px solid #333;\n  background: #333;\n  color: #ccc;\n  display: flex;\n  &:first-child {\n    border-top: 1px solid #333;\n  }\n  &:hover ',
                ' {\n    flex-shrink: 1;\n  }\n  &:hover ',
                ':hover {\n    flex-shrink: 0;\n  }\n',
              ]
            )),
          f,
          f
        ),
        p = s.default.span(
          a ||
            (a = r(
              [
                '\n  color: white;\n  font-size: .6em;\n  position: absolute;\n  top: .3em;\n  right: .4em;\n',
              ],
              [
                '\n  color: white;\n  font-size: .6em;\n  position: absolute;\n  top: .3em;\n  right: .4em;\n',
              ]
            ))
        );
      e.NavRow = function (t) {
        var e,
          n = t.row,
          r = t.active,
          i = t.selection,
          o = t.handleClick,
          a = t.removeCommonPrefix,
          s = n.children.map(function (t) {
            return t.title;
          });
        if (a) {
          var d = c(s),
            g = l(c(s.map(l)));
          e = s.map(function (t) {
            return t.slice(d.lastIndexOf('/') + 1, t.length - g.length);
          });
        } else e = s;
        return u.createElement(
          h,
          null,
          n.children.map(function (t, n) {
            return u.createElement(
              f,
              {
                onClick: function () {
                  return o(t.title);
                },
                key: t.title,
                active: t.title === i,
                title: s[n],
              },
              0 === n ? s[n] : e[n],
              r && n < 10 ? u.createElement(p, null, (n + 1) % 10) : null
            );
          })
        );
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if (!Array.isArray(t))
          throw new Error('common-prefix expects an array of strings');
        for (var e = t[0] || '', n = e.length, r = 1; r < t.length; ++r)
          for (var i = 0; i < n; ++i)
            if (t[r].charAt(i) !== e.charAt(i)) {
              n = i;
              break;
            }
        return e.slice(0, n);
      };
    },
  ]);
});
//# sourceMappingURL=jeri.js.map
