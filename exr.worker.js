!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/'),
    n((n.s = 0));
})([
  function (e, t, n) {
    let r,
      o = !1,
      l = [];
    self.addEventListener('message', (e) => {
      o ? a(e.data) : l.push(e.data);
    });
    const s = n(1);
    n(2);
    function a(e) {
      const t = e.jobId;
      try {
        const n = (function (e) {
          console.time('Decoding EXR');
          let t = null;
          try {
            const n = (t = r.loadEXRStr(e)).channels(),
              { width: o, height: l } = t;
            let s,
              a = n.length;
            if (1 === a) {
              const e = t.plane(t.channels()[0]);
              s = new Float32Array(o * l);
              for (let t = 0; t < o * l; t++) s[t] = e[t];
            } else {
              if (
                !(
                  t.channels().includes('R') &&
                  t.channels().includes('G') &&
                  t.channels().includes('B')
                )
              )
                throw new Error('EXR image not supported');
              {
                const e = t.plane('R'),
                  n = t.plane('G'),
                  r = t.plane('B');
                s = new Float32Array(o * l * 3);
                for (let t = 0; t < o * l; t++)
                  (s[3 * t] = e[t]),
                    (s[3 * t + 1] = n[t]),
                    (s[3 * t + 2] = r[t]);
                a = 3;
              }
            }
            return {
              height: l,
              width: o,
              nChannels: a,
              data: s,
              type: 'HdrImage',
            };
          } finally {
            t && t.delete(), console.timeEnd('Decoding EXR');
          }
        })(e.data);
        self.postMessage({ jobId: t, success: !0, image: n }, [n.data.buffer]);
      } catch (e) {
        console.log('Error: ', e),
          self.postMessage({ jobId: t, success: !1, message: e.toString() });
      }
    }
    importScripts(s),
      EXR().then(function (e) {
        for (r = e, o = !0; l.length > 0; ) {
          const e = l.shift();
          e && a(e);
        }
      });
  },
  function (e, t, n) {
    e.exports = n.p + 'becky-hu-82.github.io/path-graph-result/exr-wrap.js';
  },
  function (e, t, n) {
    e.exports = n.p + 'becky-hu-82.github.io/path-graph-result/exr-wrap.wasm';
  },
]);
//# sourceMappingURL=exr.worker.js.map
