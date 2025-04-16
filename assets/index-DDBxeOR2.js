(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) o(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === 'childList')
        for (const g of d.addedNodes) g.tagName === 'LINK' && g.rel === 'modulepreload' && o(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (d.credentials = 'omit')
          : (d.credentials = 'same-origin'),
      d
    );
  }
  function o(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = c(f);
    fetch(f.href, d);
  }
})();
var $o = { exports: {} },
  Xu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hm;
function Wg() {
  if (hm) return Xu;
  hm = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function c(o, f, d) {
    var g = null;
    if ((d !== void 0 && (g = '' + d), f.key !== void 0 && (g = '' + f.key), 'key' in f)) {
      d = {};
      for (var p in f) p !== 'key' && (d[p] = f[p]);
    } else d = f;
    return (f = d.ref), { $$typeof: n, type: o, key: g, ref: f !== void 0 ? f : null, props: d };
  }
  return (Xu.Fragment = r), (Xu.jsx = c), (Xu.jsxs = c), Xu;
}
var mm;
function Fg() {
  return mm || ((mm = 1), ($o.exports = Wg())), $o.exports;
}
var y = Fg(),
  ko = { exports: {} },
  pe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vm;
function Pg() {
  if (vm) return pe;
  vm = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    c = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    f = Symbol.for('react.profiler'),
    d = Symbol.for('react.consumer'),
    g = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    M = Symbol.iterator;
  function R(_) {
    return _ === null || typeof _ != 'object'
      ? null
      : ((_ = (M && _[M]) || _['@@iterator']), typeof _ == 'function' ? _ : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    K = {};
  function H(_, Q, F) {
    (this.props = _), (this.context = Q), (this.refs = K), (this.updater = F || O);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (_, Q) {
      if (typeof _ != 'object' && typeof _ != 'function' && _ != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, _, Q, 'setState');
    }),
    (H.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, 'forceUpdate');
    });
  function G() {}
  G.prototype = H.prototype;
  function J(_, Q, F) {
    (this.props = _), (this.context = Q), (this.refs = K), (this.updater = F || O);
  }
  var V = (J.prototype = new G());
  (V.constructor = J), z(V, H.prototype), (V.isPureReactComponent = !0);
  var W = Array.isArray,
    x = { H: null, A: null, T: null, S: null, V: null },
    I = Object.prototype.hasOwnProperty;
  function se(_, Q, F, k, ce, be) {
    return (F = be.ref), { $$typeof: n, type: _, key: Q, ref: F !== void 0 ? F : null, props: be };
  }
  function ee(_, Q) {
    return se(_.type, Q, void 0, void 0, void 0, _.props);
  }
  function ge(_) {
    return typeof _ == 'object' && _ !== null && _.$$typeof === n;
  }
  function Ne(_) {
    var Q = { '=': '=0', ':': '=2' };
    return (
      '$' +
      _.replace(/[=:]/g, function (F) {
        return Q[F];
      })
    );
  }
  var Je = /\/+/g;
  function We(_, Q) {
    return typeof _ == 'object' && _ !== null && _.key != null ? Ne('' + _.key) : Q.toString(36);
  }
  function _t() {}
  function Qt(_) {
    switch (_.status) {
      case 'fulfilled':
        return _.value;
      case 'rejected':
        throw _.reason;
      default:
        switch (
          (typeof _.status == 'string'
            ? _.then(_t, _t)
            : ((_.status = 'pending'),
              _.then(
                function (Q) {
                  _.status === 'pending' && ((_.status = 'fulfilled'), (_.value = Q));
                },
                function (Q) {
                  _.status === 'pending' && ((_.status = 'rejected'), (_.reason = Q));
                },
              )),
          _.status)
        ) {
          case 'fulfilled':
            return _.value;
          case 'rejected':
            throw _.reason;
        }
    }
    throw _;
  }
  function Ae(_, Q, F, k, ce) {
    var be = typeof _;
    (be === 'undefined' || be === 'boolean') && (_ = null);
    var ye = !1;
    if (_ === null) ye = !0;
    else
      switch (be) {
        case 'bigint':
        case 'string':
        case 'number':
          ye = !0;
          break;
        case 'object':
          switch (_.$$typeof) {
            case n:
            case r:
              ye = !0;
              break;
            case b:
              return (ye = _._init), Ae(ye(_._payload), Q, F, k, ce);
          }
      }
    if (ye)
      return (
        (ce = ce(_)),
        (ye = k === '' ? '.' + We(_, 0) : k),
        W(ce)
          ? ((F = ''),
            ye != null && (F = ye.replace(Je, '$&/') + '/'),
            Ae(ce, Q, F, '', function ($e) {
              return $e;
            }))
          : ce != null &&
            (ge(ce) &&
              (ce = ee(
                ce,
                F +
                  (ce.key == null || (_ && _.key === ce.key)
                    ? ''
                    : ('' + ce.key).replace(Je, '$&/') + '/') +
                  ye,
              )),
            Q.push(ce)),
        1
      );
    ye = 0;
    var Et = k === '' ? '.' : k + ':';
    if (W(_))
      for (var Qe = 0; Qe < _.length; Qe++)
        (k = _[Qe]), (be = Et + We(k, Qe)), (ye += Ae(k, Q, F, be, ce));
    else if (((Qe = R(_)), typeof Qe == 'function'))
      for (_ = Qe.call(_), Qe = 0; !(k = _.next()).done; )
        (k = k.value), (be = Et + We(k, Qe++)), (ye += Ae(k, Q, F, be, ce));
    else if (be === 'object') {
      if (typeof _.then == 'function') return Ae(Qt(_), Q, F, k, ce);
      throw (
        ((Q = String(_)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Q === '[object Object]' ? 'object with keys {' + Object.keys(_).join(', ') + '}' : Q) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return ye;
  }
  function B(_, Q, F) {
    if (_ == null) return _;
    var k = [],
      ce = 0;
    return (
      Ae(_, k, '', '', function (be) {
        return Q.call(F, be, ce++);
      }),
      k
    );
  }
  function P(_) {
    if (_._status === -1) {
      var Q = _._result;
      (Q = Q()),
        Q.then(
          function (F) {
            (_._status === 0 || _._status === -1) && ((_._status = 1), (_._result = F));
          },
          function (F) {
            (_._status === 0 || _._status === -1) && ((_._status = 2), (_._result = F));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = Q));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var re =
    typeof reportError == 'function'
      ? reportError
      : function (_) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var Q = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof _ == 'object' && _ !== null && typeof _.message == 'string'
                  ? String(_.message)
                  : String(_),
              error: _,
            });
            if (!window.dispatchEvent(Q)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', _);
            return;
          }
          console.error(_);
        };
  function xe() {}
  return (
    (pe.Children = {
      map: B,
      forEach: function (_, Q, F) {
        B(
          _,
          function () {
            Q.apply(this, arguments);
          },
          F,
        );
      },
      count: function (_) {
        var Q = 0;
        return (
          B(_, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (_) {
        return (
          B(_, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (_) {
        if (!ge(_))
          throw Error('React.Children.only expected to receive a single React element child.');
        return _;
      },
    }),
    (pe.Component = H),
    (pe.Fragment = c),
    (pe.Profiler = f),
    (pe.PureComponent = J),
    (pe.StrictMode = o),
    (pe.Suspense = m),
    (pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (pe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (_) {
        return x.H.useMemoCache(_);
      },
    }),
    (pe.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (pe.cloneElement = function (_, Q, F) {
      if (_ == null) throw Error('The argument must be a React element, but you passed ' + _ + '.');
      var k = z({}, _.props),
        ce = _.key,
        be = void 0;
      if (Q != null)
        for (ye in (Q.ref !== void 0 && (be = void 0), Q.key !== void 0 && (ce = '' + Q.key), Q))
          !I.call(Q, ye) ||
            ye === 'key' ||
            ye === '__self' ||
            ye === '__source' ||
            (ye === 'ref' && Q.ref === void 0) ||
            (k[ye] = Q[ye]);
      var ye = arguments.length - 2;
      if (ye === 1) k.children = F;
      else if (1 < ye) {
        for (var Et = Array(ye), Qe = 0; Qe < ye; Qe++) Et[Qe] = arguments[Qe + 2];
        k.children = Et;
      }
      return se(_.type, ce, void 0, void 0, be, k);
    }),
    (pe.createContext = function (_) {
      return (
        (_ = {
          $$typeof: g,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: d, _context: _ }),
        _
      );
    }),
    (pe.createElement = function (_, Q, F) {
      var k,
        ce = {},
        be = null;
      if (Q != null)
        for (k in (Q.key !== void 0 && (be = '' + Q.key), Q))
          I.call(Q, k) && k !== 'key' && k !== '__self' && k !== '__source' && (ce[k] = Q[k]);
      var ye = arguments.length - 2;
      if (ye === 1) ce.children = F;
      else if (1 < ye) {
        for (var Et = Array(ye), Qe = 0; Qe < ye; Qe++) Et[Qe] = arguments[Qe + 2];
        ce.children = Et;
      }
      if (_ && _.defaultProps)
        for (k in ((ye = _.defaultProps), ye)) ce[k] === void 0 && (ce[k] = ye[k]);
      return se(_, be, void 0, void 0, null, ce);
    }),
    (pe.createRef = function () {
      return { current: null };
    }),
    (pe.forwardRef = function (_) {
      return { $$typeof: p, render: _ };
    }),
    (pe.isValidElement = ge),
    (pe.lazy = function (_) {
      return { $$typeof: b, _payload: { _status: -1, _result: _ }, _init: P };
    }),
    (pe.memo = function (_, Q) {
      return { $$typeof: v, type: _, compare: Q === void 0 ? null : Q };
    }),
    (pe.startTransition = function (_) {
      var Q = x.T,
        F = {};
      x.T = F;
      try {
        var k = _(),
          ce = x.S;
        ce !== null && ce(F, k),
          typeof k == 'object' && k !== null && typeof k.then == 'function' && k.then(xe, re);
      } catch (be) {
        re(be);
      } finally {
        x.T = Q;
      }
    }),
    (pe.unstable_useCacheRefresh = function () {
      return x.H.useCacheRefresh();
    }),
    (pe.use = function (_) {
      return x.H.use(_);
    }),
    (pe.useActionState = function (_, Q, F) {
      return x.H.useActionState(_, Q, F);
    }),
    (pe.useCallback = function (_, Q) {
      return x.H.useCallback(_, Q);
    }),
    (pe.useContext = function (_) {
      return x.H.useContext(_);
    }),
    (pe.useDebugValue = function () {}),
    (pe.useDeferredValue = function (_, Q) {
      return x.H.useDeferredValue(_, Q);
    }),
    (pe.useEffect = function (_, Q, F) {
      var k = x.H;
      if (typeof F == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.');
      return k.useEffect(_, Q);
    }),
    (pe.useId = function () {
      return x.H.useId();
    }),
    (pe.useImperativeHandle = function (_, Q, F) {
      return x.H.useImperativeHandle(_, Q, F);
    }),
    (pe.useInsertionEffect = function (_, Q) {
      return x.H.useInsertionEffect(_, Q);
    }),
    (pe.useLayoutEffect = function (_, Q) {
      return x.H.useLayoutEffect(_, Q);
    }),
    (pe.useMemo = function (_, Q) {
      return x.H.useMemo(_, Q);
    }),
    (pe.useOptimistic = function (_, Q) {
      return x.H.useOptimistic(_, Q);
    }),
    (pe.useReducer = function (_, Q, F) {
      return x.H.useReducer(_, Q, F);
    }),
    (pe.useRef = function (_) {
      return x.H.useRef(_);
    }),
    (pe.useState = function (_) {
      return x.H.useState(_);
    }),
    (pe.useSyncExternalStore = function (_, Q, F) {
      return x.H.useSyncExternalStore(_, Q, F);
    }),
    (pe.useTransition = function () {
      return x.H.useTransition();
    }),
    (pe.version = '19.1.0'),
    pe
  );
}
var ym;
function wr() {
  return ym || ((ym = 1), (ko.exports = Pg())), ko.exports;
}
var w = wr(),
  Wo = { exports: {} },
  Qu = {},
  Fo = { exports: {} },
  Po = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm;
function Ig() {
  return (
    gm ||
      ((gm = 1),
      (function (n) {
        function r(B, P) {
          var re = B.length;
          B.push(P);
          e: for (; 0 < re; ) {
            var xe = (re - 1) >>> 1,
              _ = B[xe];
            if (0 < f(_, P)) (B[xe] = P), (B[re] = _), (re = xe);
            else break e;
          }
        }
        function c(B) {
          return B.length === 0 ? null : B[0];
        }
        function o(B) {
          if (B.length === 0) return null;
          var P = B[0],
            re = B.pop();
          if (re !== P) {
            B[0] = re;
            e: for (var xe = 0, _ = B.length, Q = _ >>> 1; xe < Q; ) {
              var F = 2 * (xe + 1) - 1,
                k = B[F],
                ce = F + 1,
                be = B[ce];
              if (0 > f(k, re))
                ce < _ && 0 > f(be, k)
                  ? ((B[xe] = be), (B[ce] = re), (xe = ce))
                  : ((B[xe] = k), (B[F] = re), (xe = F));
              else if (ce < _ && 0 > f(be, re)) (B[xe] = be), (B[ce] = re), (xe = ce);
              else break e;
            }
          }
          return P;
        }
        function f(B, P) {
          var re = B.sortIndex - P.sortIndex;
          return re !== 0 ? re : B.id - P.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var g = Date,
            p = g.now();
          n.unstable_now = function () {
            return g.now() - p;
          };
        }
        var m = [],
          v = [],
          b = 1,
          M = null,
          R = 3,
          O = !1,
          z = !1,
          K = !1,
          H = !1,
          G = typeof setTimeout == 'function' ? setTimeout : null,
          J = typeof clearTimeout == 'function' ? clearTimeout : null,
          V = typeof setImmediate < 'u' ? setImmediate : null;
        function W(B) {
          for (var P = c(v); P !== null; ) {
            if (P.callback === null) o(v);
            else if (P.startTime <= B) o(v), (P.sortIndex = P.expirationTime), r(m, P);
            else break;
            P = c(v);
          }
        }
        function x(B) {
          if (((K = !1), W(B), !z))
            if (c(m) !== null) (z = !0), I || ((I = !0), We());
            else {
              var P = c(v);
              P !== null && Ae(x, P.startTime - B);
            }
        }
        var I = !1,
          se = -1,
          ee = 5,
          ge = -1;
        function Ne() {
          return H ? !0 : !(n.unstable_now() - ge < ee);
        }
        function Je() {
          if (((H = !1), I)) {
            var B = n.unstable_now();
            ge = B;
            var P = !0;
            try {
              e: {
                (z = !1), K && ((K = !1), J(se), (se = -1)), (O = !0);
                var re = R;
                try {
                  t: {
                    for (W(B), M = c(m); M !== null && !(M.expirationTime > B && Ne()); ) {
                      var xe = M.callback;
                      if (typeof xe == 'function') {
                        (M.callback = null), (R = M.priorityLevel);
                        var _ = xe(M.expirationTime <= B);
                        if (((B = n.unstable_now()), typeof _ == 'function')) {
                          (M.callback = _), W(B), (P = !0);
                          break t;
                        }
                        M === c(m) && o(m), W(B);
                      } else o(m);
                      M = c(m);
                    }
                    if (M !== null) P = !0;
                    else {
                      var Q = c(v);
                      Q !== null && Ae(x, Q.startTime - B), (P = !1);
                    }
                  }
                  break e;
                } finally {
                  (M = null), (R = re), (O = !1);
                }
                P = void 0;
              }
            } finally {
              P ? We() : (I = !1);
            }
          }
        }
        var We;
        if (typeof V == 'function')
          We = function () {
            V(Je);
          };
        else if (typeof MessageChannel < 'u') {
          var _t = new MessageChannel(),
            Qt = _t.port2;
          (_t.port1.onmessage = Je),
            (We = function () {
              Qt.postMessage(null);
            });
        } else
          We = function () {
            G(Je, 0);
          };
        function Ae(B, P) {
          se = G(function () {
            B(n.unstable_now());
          }, P);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (n.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (ee = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (n.unstable_next = function (B) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = R;
            }
            var re = R;
            R = P;
            try {
              return B();
            } finally {
              R = re;
            }
          }),
          (n.unstable_requestPaint = function () {
            H = !0;
          }),
          (n.unstable_runWithPriority = function (B, P) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var re = R;
            R = B;
            try {
              return P();
            } finally {
              R = re;
            }
          }),
          (n.unstable_scheduleCallback = function (B, P, re) {
            var xe = n.unstable_now();
            switch (
              (typeof re == 'object' && re !== null
                ? ((re = re.delay), (re = typeof re == 'number' && 0 < re ? xe + re : xe))
                : (re = xe),
              B)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = re + _),
              (B = {
                id: b++,
                callback: P,
                priorityLevel: B,
                startTime: re,
                expirationTime: _,
                sortIndex: -1,
              }),
              re > xe
                ? ((B.sortIndex = re),
                  r(v, B),
                  c(m) === null &&
                    B === c(v) &&
                    (K ? (J(se), (se = -1)) : (K = !0), Ae(x, re - xe)))
                : ((B.sortIndex = _), r(m, B), z || O || ((z = !0), I || ((I = !0), We()))),
              B
            );
          }),
          (n.unstable_shouldYield = Ne),
          (n.unstable_wrapCallback = function (B) {
            var P = R;
            return function () {
              var re = R;
              R = P;
              try {
                return B.apply(this, arguments);
              } finally {
                R = re;
              }
            };
          });
      })(Po)),
    Po
  );
}
var pm;
function e0() {
  return pm || ((pm = 1), (Fo.exports = Ig())), Fo.exports;
}
var Io = { exports: {} },
  St = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bm;
function t0() {
  if (bm) return St;
  bm = 1;
  var n = wr();
  function r(m) {
    var v = 'https://react.dev/errors/' + m;
    if (1 < arguments.length) {
      v += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) v += '&args[]=' + encodeURIComponent(arguments[b]);
    }
    return (
      'Minified React error #' +
      m +
      '; visit ' +
      v +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function c() {}
  var o = {
      d: {
        f: c,
        r: function () {
          throw Error(r(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for('react.portal');
  function d(m, v, b) {
    var M = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: M == null ? null : '' + M,
      children: m,
      containerInfo: v,
      implementation: b,
    };
  }
  var g = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, v) {
    if (m === 'font') return '';
    if (typeof v == 'string') return v === 'use-credentials' ? v : '';
  }
  return (
    (St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (St.createPortal = function (m, v) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)) throw Error(r(299));
      return d(m, v, null, b);
    }),
    (St.flushSync = function (m) {
      var v = g.T,
        b = o.p;
      try {
        if (((g.T = null), (o.p = 2), m)) return m();
      } finally {
        (g.T = v), (o.p = b), o.d.f();
      }
    }),
    (St.preconnect = function (m, v) {
      typeof m == 'string' &&
        (v
          ? ((v = v.crossOrigin),
            (v = typeof v == 'string' ? (v === 'use-credentials' ? v : '') : void 0))
          : (v = null),
        o.d.C(m, v));
    }),
    (St.prefetchDNS = function (m) {
      typeof m == 'string' && o.d.D(m);
    }),
    (St.preinit = function (m, v) {
      if (typeof m == 'string' && v && typeof v.as == 'string') {
        var b = v.as,
          M = p(b, v.crossOrigin),
          R = typeof v.integrity == 'string' ? v.integrity : void 0,
          O = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0;
        b === 'style'
          ? o.d.S(m, typeof v.precedence == 'string' ? v.precedence : void 0, {
              crossOrigin: M,
              integrity: R,
              fetchPriority: O,
            })
          : b === 'script' &&
            o.d.X(m, {
              crossOrigin: M,
              integrity: R,
              fetchPriority: O,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
      }
    }),
    (St.preinitModule = function (m, v) {
      if (typeof m == 'string')
        if (typeof v == 'object' && v !== null) {
          if (v.as == null || v.as === 'script') {
            var b = p(v.as, v.crossOrigin);
            o.d.M(m, {
              crossOrigin: b,
              integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
          }
        } else v == null && o.d.M(m);
    }),
    (St.preload = function (m, v) {
      if (typeof m == 'string' && typeof v == 'object' && v !== null && typeof v.as == 'string') {
        var b = v.as,
          M = p(b, v.crossOrigin);
        o.d.L(m, b, {
          crossOrigin: M,
          integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
          type: typeof v.type == 'string' ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == 'string' ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == 'string' ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == 'string' ? v.imageSizes : void 0,
          media: typeof v.media == 'string' ? v.media : void 0,
        });
      }
    }),
    (St.preloadModule = function (m, v) {
      if (typeof m == 'string')
        if (v) {
          var b = p(v.as, v.crossOrigin);
          o.d.m(m, {
            as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
            crossOrigin: b,
            integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          });
        } else o.d.m(m);
    }),
    (St.requestFormReset = function (m) {
      o.d.r(m);
    }),
    (St.unstable_batchedUpdates = function (m, v) {
      return m(v);
    }),
    (St.useFormState = function (m, v, b) {
      return g.H.useFormState(m, v, b);
    }),
    (St.useFormStatus = function () {
      return g.H.useHostTransitionStatus();
    }),
    (St.version = '19.1.0'),
    St
  );
}
var Sm;
function rv() {
  if (Sm) return Io.exports;
  Sm = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (Io.exports = t0()), Io.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m;
function l0() {
  if (_m) return Qu;
  _m = 1;
  var n = e0(),
    r = wr(),
    c = rv();
  function o(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (d(e) !== e) throw Error(o(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var u = l.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === l) return p(u), e;
          if (i === a) return p(u), t;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) (l = u), (a = i);
      else {
        for (var s = !1, h = u.child; h; ) {
          if (h === l) {
            (s = !0), (l = u), (a = i);
            break;
          }
          if (h === a) {
            (s = !0), (a = u), (l = i);
            break;
          }
          h = h.sibling;
        }
        if (!s) {
          for (h = i.child; h; ) {
            if (h === l) {
              (s = !0), (l = i), (a = u);
              break;
            }
            if (h === a) {
              (s = !0), (a = i), (l = u);
              break;
            }
            h = h.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = v(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    M = Symbol.for('react.element'),
    R = Symbol.for('react.transitional.element'),
    O = Symbol.for('react.portal'),
    z = Symbol.for('react.fragment'),
    K = Symbol.for('react.strict_mode'),
    H = Symbol.for('react.profiler'),
    G = Symbol.for('react.provider'),
    J = Symbol.for('react.consumer'),
    V = Symbol.for('react.context'),
    W = Symbol.for('react.forward_ref'),
    x = Symbol.for('react.suspense'),
    I = Symbol.for('react.suspense_list'),
    se = Symbol.for('react.memo'),
    ee = Symbol.for('react.lazy'),
    ge = Symbol.for('react.activity'),
    Ne = Symbol.for('react.memo_cache_sentinel'),
    Je = Symbol.iterator;
  function We(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Je && e[Je]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var _t = Symbol.for('react.client.reference');
  function Qt(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === _t ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case z:
        return 'Fragment';
      case H:
        return 'Profiler';
      case K:
        return 'StrictMode';
      case x:
        return 'Suspense';
      case I:
        return 'SuspenseList';
      case ge:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case O:
          return 'Portal';
        case V:
          return (e.displayName || 'Context') + '.Provider';
        case J:
          return (e._context.displayName || 'Context') + '.Consumer';
        case W:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case se:
          return (t = e.displayName || null), t !== null ? t : Qt(e.type) || 'Memo';
        case ee:
          (t = e._payload), (e = e._init);
          try {
            return Qt(e(t));
          } catch {}
      }
    return null;
  }
  var Ae = Array.isArray,
    B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    re = { pending: !1, data: null, method: null, action: null },
    xe = [],
    _ = -1;
  function Q(e) {
    return { current: e };
  }
  function F(e) {
    0 > _ || ((e.current = xe[_]), (xe[_] = null), _--);
  }
  function k(e, t) {
    _++, (xe[_] = e.current), (e.current = t);
  }
  var ce = Q(null),
    be = Q(null),
    ye = Q(null),
    Et = Q(null);
  function Qe(e, t) {
    switch ((k(ye, t), k(be, e), k(ce, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Gh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = Gh(t)), (e = Xh(t, e));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    F(ce), k(ce, e);
  }
  function $e() {
    F(ce), F(be), F(ye);
  }
  function dl(e) {
    e.memoizedState !== null && k(Et, e);
    var t = ce.current,
      l = Xh(t, e.type);
    t !== l && (k(be, e), k(ce, l));
  }
  function Ra(e) {
    be.current === e && (F(ce), F(be)), Et.current === e && (F(Et), (Hu._currentValue = re));
  }
  var Gn = Object.prototype.hasOwnProperty,
    il = n.unstable_scheduleCallback,
    Xn = n.unstable_cancelCallback,
    Gr = n.unstable_shouldYield,
    ni = n.unstable_requestPaint,
    Vt = n.unstable_now,
    Xr = n.unstable_getCurrentPriorityLevel,
    ui = n.unstable_ImmediatePriority,
    ii = n.unstable_UserBlockingPriority,
    Zt = n.unstable_NormalPriority,
    Ma = n.unstable_LowPriority,
    Qn = n.unstable_IdlePriority,
    Vn = n.log,
    hl = n.unstable_setDisableYieldValue,
    xt = null,
    pt = null;
  function Kt(e) {
    if ((typeof Vn == 'function' && hl(e), pt && typeof pt.setStrictMode == 'function'))
      try {
        pt.setStrictMode(xt, e);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : ci,
    ml = Math.log,
    ri = Math.LN2;
  function ci(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ml(e) / ri) | 0)) | 0;
  }
  var Da = 256,
    Pa = 4194304;
  function vl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ml(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes;
    e = e.warmLanes;
    var h = a & 134217727;
    return (
      h !== 0
        ? ((a = h & ~i),
          a !== 0
            ? (u = vl(a))
            : ((s &= h), s !== 0 ? (u = vl(s)) : l || ((l = h & ~e), l !== 0 && (u = vl(l)))))
        : ((h = a & ~i),
          h !== 0
            ? (u = vl(h))
            : s !== 0
              ? (u = vl(s))
              : l || ((l = a & ~e), l !== 0 && (u = vl(l)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & i) === 0 &&
            ((i = u & -u), (l = t & -t), i >= l || (i === 32 && (l & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Kl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Zn(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function oi() {
    var e = Da;
    return (Da <<= 1), (Da & 4194048) === 0 && (Da = 256), e;
  }
  function Kn() {
    var e = Pa;
    return (Pa <<= 1), (Pa & 62914560) === 0 && (Pa = 4194304), e;
  }
  function Jn(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Jl(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ia(e, t, l, a, u, i) {
    var s = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var h = e.entanglements,
      S = e.expirationTimes,
      j = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var q = 31 - Tt(l),
        X = 1 << q;
      (h[q] = 0), (S[q] = -1);
      var N = j[q];
      if (N !== null)
        for (j[q] = null, q = 0; q < N.length; q++) {
          var U = N[q];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~X;
    }
    a !== 0 && Aa(e, a, 0),
      i !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function Aa(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - Tt(t);
    (e.entangledLanes |= t), (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function fi(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - Tt(l),
        u = 1 << a;
      (u & t) | (e[a] & t) && (e[a] |= t), (l &= ~u);
    }
  }
  function $n(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function E(e) {
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function A() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : rm(e.type));
  }
  function L(e, t) {
    var l = P.p;
    try {
      return (P.p = e), t();
    } finally {
      P.p = l;
    }
  }
  var Z = Math.random().toString(36).slice(2),
    $ = '__reactFiber$' + Z,
    ae = '__reactProps$' + Z,
    oe = '__reactContainer$' + Z,
    ne = '__reactEvents$' + Z,
    fe = '__reactListeners$' + Z,
    te = '__reactHandles$' + Z,
    ue = '__reactResources$' + Z,
    de = '__reactMarker$' + Z;
  function De(e) {
    delete e[$], delete e[ae], delete e[ne], delete e[fe], delete e[te];
  }
  function we(e) {
    var t = e[$];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[oe] || l[$])) {
        if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
          for (e = Kh(e); e !== null; ) {
            if ((l = e[$])) return l;
            e = Kh(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Fe(e) {
    if ((e = e[$] || e[oe])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ve(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ue(e) {
    var t = e[ue];
    return t || (t = e[ue] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function _e(e) {
    e[de] = !0;
  }
  var Dl = new Set(),
    $l = {};
  function st(e, t) {
    dt(e, t), dt(e + 'Capture', t);
  }
  function dt(e, t) {
    for ($l[e] = t, e = 0; e < t.length; e++) Dl.add(t[e]);
  }
  var kn = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    kl = {},
    yl = {};
  function en(e) {
    return Gn.call(yl, e)
      ? !0
      : Gn.call(kl, e)
        ? !1
        : kn.test(e)
          ? (yl[e] = !0)
          : ((kl[e] = !0), !1);
  }
  function Al(e, t, l) {
    if (en(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function Oe(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function Ze(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + a);
    }
  }
  var Wl, Fl;
  function Ge(e) {
    if (Wl === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Wl = (t && t[1]) || ''),
          (Fl =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Wl +
      e +
      Fl
    );
  }
  var gl = !1;
  function tn(e, t) {
    if (!e || gl) return '';
    gl = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var N = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  N = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                N = U;
              }
              (X = e()) && typeof X.catch == 'function' && X.catch(function () {});
            }
          } catch (U) {
            if (U && N && typeof U.stack == 'string') return [U.stack, N.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var i = a.DetermineComponentFrameRoot(),
        s = i[0],
        h = i[1];
      if (s && h) {
        var S = s.split(`
`),
          j = h.split(`
`);
        for (u = a = 0; a < S.length && !S[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; u < j.length && !j[u].includes('DetermineComponentFrameRoot'); ) u++;
        if (a === S.length || u === j.length)
          for (a = S.length - 1, u = j.length - 1; 1 <= a && 0 <= u && S[a] !== j[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (S[a] !== j[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || S[a] !== j[u])) {
                  var q =
                    `
` + S[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      q.includes('<anonymous>') &&
                      (q = q.replace('<anonymous>', e.displayName)),
                    q
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (gl = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : '') ? Ge(l) : '';
  }
  function Qr(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ge(e.type);
      case 16:
        return Ge('Lazy');
      case 13:
        return Ge('Suspense');
      case 19:
        return Ge('SuspenseList');
      case 0:
      case 15:
        return tn(e.type, !1);
      case 11:
        return tn(e.type.render, !1);
      case 1:
        return tn(e.type, !0);
      case 31:
        return Ge('Activity');
      default:
        return '';
    }
  }
  function Uf(e) {
    try {
      var t = '';
      do (t += Qr(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Jt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Lf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Zv(e) {
    var t = Lf(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var u = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (s) {
            (a = '' + s), i.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (s) {
            a = '' + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function si(e) {
    e._valueTracker || (e._valueTracker = Zv(e));
  }
  function Hf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e && (a = Lf(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function di(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Kv = /[\n"\\]/g;
  function $t(e) {
    return e.replace(Kv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Vr(e, t, l, a, u, i, s, h) {
    (e.name = ''),
      s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean'
        ? (e.type = s)
        : e.removeAttribute('type'),
      t != null
        ? s === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Jt(t))
          : e.value !== '' + Jt(t) && (e.value = '' + Jt(t))
        : (s !== 'submit' && s !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Zr(e, s, Jt(t))
        : l != null
          ? Zr(e, s, Jt(l))
          : a != null && e.removeAttribute('value'),
      u == null && i != null && (e.defaultChecked = !!i),
      u != null && (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      h != null && typeof h != 'function' && typeof h != 'symbol' && typeof h != 'boolean'
        ? (e.name = '' + Jt(h))
        : e.removeAttribute('name');
  }
  function Bf(e, t, l, a, u, i, s, h) {
    if (
      (i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== 'submit' && i !== 'reset') || t != null)) return;
      (l = l != null ? '' + Jt(l) : ''),
        (t = t != null ? '' + Jt(t) : l),
        h || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? u),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = h ? e.checked : !!a),
      (e.defaultChecked = !!a),
      s != null &&
        typeof s != 'function' &&
        typeof s != 'symbol' &&
        typeof s != 'boolean' &&
        (e.name = s);
  }
  function Zr(e, t, l) {
    (t === 'number' && di(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function ln(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < l.length; u++) t['$' + l[u]] = !0;
      for (l = 0; l < e.length; l++)
        (u = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== u && (e[l].selected = u),
          u && a && (e[l].defaultSelected = !0);
    } else {
      for (l = '' + Jt(l), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === l) {
          (e[u].selected = !0), a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qf(e, t, l) {
    if (t != null && ((t = '' + Jt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + Jt(l) : '';
  }
  function Yf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Ae(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ''), (t = l);
    }
    (l = Jt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a);
  }
  function an(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Gf(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || Jv.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px');
  }
  function Xf(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(o(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var u in t) (a = t[u]), t.hasOwnProperty(u) && l[u] !== a && Gf(e, u, a);
    } else for (var i in t) t.hasOwnProperty(i) && Gf(e, i, t[i]);
  }
  function Kr(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var $v = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    kv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hi(e) {
    return kv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Jr = null;
  function $r(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var nn = null,
    un = null;
  function Qf(e) {
    var t = Fe(e);
    if (t && (e = t.stateNode)) {
      var l = e[ae] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Vr(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll('input[name="' + $t('' + t) + '"][type="radio"]'), t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var u = a[ae] || null;
                if (!u) throw Error(o(90));
                Vr(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < l.length; t++) (a = l[t]), a.form === e.form && Hf(a);
          }
          break e;
        case 'textarea':
          qf(e, l.value, l.defaultValue);
          break e;
        case 'select':
          (t = l.value), t != null && ln(e, !!l.multiple, t, !1);
      }
    }
  }
  var kr = !1;
  function Vf(e, t, l) {
    if (kr) return e(t, l);
    kr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((kr = !1),
        (nn !== null || un !== null) &&
          (Pi(), nn && ((t = nn), (e = un), (un = nn = null), Qf(t), e)))
      )
        for (t = 0; t < e.length; t++) Qf(e[t]);
    }
  }
  function Wn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[ae] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(o(231, t, typeof l));
    return l;
  }
  var Cl = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Wr = !1;
  if (Cl)
    try {
      var Fn = {};
      Object.defineProperty(Fn, 'passive', {
        get: function () {
          Wr = !0;
        },
      }),
        window.addEventListener('test', Fn, Fn),
        window.removeEventListener('test', Fn, Fn);
    } catch {
      Wr = !1;
    }
  var Pl = null,
    Fr = null,
    mi = null;
  function Zf() {
    if (mi) return mi;
    var e,
      t = Fr,
      l = t.length,
      a,
      u = 'value' in Pl ? Pl.value : Pl.textContent,
      i = u.length;
    for (e = 0; e < l && t[e] === u[e]; e++);
    var s = l - e;
    for (a = 1; a <= s && t[l - a] === u[i - a]; a++);
    return (mi = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function vi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function yi() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function Dt(e) {
    function t(l, a, u, i, s) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var h in e) e.hasOwnProperty(h) && ((l = e[h]), (this[h] = l ? l(i) : i[h]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? yi
          : Kf),
        (this.isPropagationStopped = Kf),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = yi));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = yi));
        },
        persist: function () {},
        isPersistent: yi,
      }),
      t
    );
  }
  var Ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    gi = Dt(Ca),
    Pn = b({}, Ca, { view: 0, detail: 0 }),
    Wv = Dt(Pn),
    Pr,
    Ir,
    In,
    pi = b({}, Pn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== In &&
              (In && e.type === 'mousemove'
                ? ((Pr = e.screenX - In.screenX), (Ir = e.screenY - In.screenY))
                : (Ir = Pr = 0),
              (In = e)),
            Pr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ir;
      },
    }),
    Jf = Dt(pi),
    Fv = b({}, pi, { dataTransfer: 0 }),
    Pv = Dt(Fv),
    Iv = b({}, Pn, { relatedTarget: 0 }),
    ec = Dt(Iv),
    ey = b({}, Ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ty = Dt(ey),
    ly = b({}, Ca, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ay = Dt(ly),
    ny = b({}, Ca, { data: 0 }),
    $f = Dt(ny),
    uy = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    iy = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    ry = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function cy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1;
  }
  function tc() {
    return cy;
  }
  var oy = b({}, Pn, {
      key: function (e) {
        if (e.key) {
          var t = uy[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = vi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? iy[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tc,
      charCode: function (e) {
        return e.type === 'keypress' ? vi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? vi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    fy = Dt(oy),
    sy = b({}, pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kf = Dt(sy),
    dy = b({}, Pn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tc,
    }),
    hy = Dt(dy),
    my = b({}, Ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vy = Dt(my),
    yy = b({}, pi, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gy = Dt(yy),
    py = b({}, Ca, { newState: 0, oldState: 0 }),
    by = Dt(py),
    Sy = [9, 13, 27, 32],
    lc = Cl && 'CompositionEvent' in window,
    eu = null;
  Cl && 'documentMode' in document && (eu = document.documentMode);
  var _y = Cl && 'TextEvent' in window && !eu,
    Wf = Cl && (!lc || (eu && 8 < eu && 11 >= eu)),
    Ff = ' ',
    Pf = !1;
  function If(e, t) {
    switch (e) {
      case 'keyup':
        return Sy.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function es(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var rn = !1;
  function Ey(e, t) {
    switch (e) {
      case 'compositionend':
        return es(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Pf = !0), Ff);
      case 'textInput':
        return (e = t.data), e === Ff && Pf ? null : e;
      default:
        return null;
    }
  }
  function xy(e, t) {
    if (rn)
      return e === 'compositionend' || (!lc && If(e, t))
        ? ((e = Zf()), (mi = Fr = Pl = null), (rn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Wf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Ty = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Ty[e.type] : t === 'textarea';
  }
  function ls(e, t, l, a) {
    nn ? (un ? un.push(a) : (un = [a])) : (nn = a),
      (t = nr(t, 'onChange')),
      0 < t.length &&
        ((l = new gi('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t }));
  }
  var tu = null,
    lu = null;
  function Ry(e) {
    Lh(e, 0);
  }
  function bi(e) {
    var t = Ve(e);
    if (Hf(t)) return e;
  }
  function as(e, t) {
    if (e === 'change') return t;
  }
  var ns = !1;
  if (Cl) {
    var ac;
    if (Cl) {
      var nc = 'oninput' in document;
      if (!nc) {
        var us = document.createElement('div');
        us.setAttribute('oninput', 'return;'), (nc = typeof us.oninput == 'function');
      }
      ac = nc;
    } else ac = !1;
    ns = ac && (!document.documentMode || 9 < document.documentMode);
  }
  function is() {
    tu && (tu.detachEvent('onpropertychange', rs), (lu = tu = null));
  }
  function rs(e) {
    if (e.propertyName === 'value' && bi(lu)) {
      var t = [];
      ls(t, lu, e, $r(e)), Vf(Ry, t);
    }
  }
  function My(e, t, l) {
    e === 'focusin'
      ? (is(), (tu = t), (lu = l), tu.attachEvent('onpropertychange', rs))
      : e === 'focusout' && is();
  }
  function Dy(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bi(lu);
  }
  function Ay(e, t) {
    if (e === 'click') return bi(t);
  }
  function Cy(e, t) {
    if (e === 'input' || e === 'change') return bi(t);
  }
  function jy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var zt = typeof Object.is == 'function' ? Object.is : jy;
  function au(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!Gn.call(t, u) || !zt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function cs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function os(e, t) {
    var l = cs(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t)) return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = cs(l);
    }
  }
  function fs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fs(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ss(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = di(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = di(e.document);
    }
    return t;
  }
  function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Oy = Cl && 'documentMode' in document && 11 >= document.documentMode,
    cn = null,
    ic = null,
    nu = null,
    rc = !1;
  function ds(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    rc ||
      cn == null ||
      cn !== di(a) ||
      ((a = cn),
      'selectionStart' in a && uc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (nu && au(nu, a)) ||
        ((nu = a),
        (a = nr(ic, 'onSelect')),
        0 < a.length &&
          ((t = new gi('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = cn))));
  }
  function ja(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var on = {
      animationend: ja('Animation', 'AnimationEnd'),
      animationiteration: ja('Animation', 'AnimationIteration'),
      animationstart: ja('Animation', 'AnimationStart'),
      transitionrun: ja('Transition', 'TransitionRun'),
      transitionstart: ja('Transition', 'TransitionStart'),
      transitioncancel: ja('Transition', 'TransitionCancel'),
      transitionend: ja('Transition', 'TransitionEnd'),
    },
    cc = {},
    hs = {};
  Cl &&
    ((hs = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete on.animationend.animation,
      delete on.animationiteration.animation,
      delete on.animationstart.animation),
    'TransitionEvent' in window || delete on.transitionend.transition);
  function Oa(e) {
    if (cc[e]) return cc[e];
    if (!on[e]) return e;
    var t = on[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in hs) return (cc[e] = t[l]);
    return e;
  }
  var ms = Oa('animationend'),
    vs = Oa('animationiteration'),
    ys = Oa('animationstart'),
    zy = Oa('transitionrun'),
    Ny = Oa('transitionstart'),
    wy = Oa('transitioncancel'),
    gs = Oa('transitionend'),
    ps = new Map(),
    oc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  oc.push('scrollEnd');
  function rl(e, t) {
    ps.set(e, t), st(t, [e]);
  }
  var bs = new WeakMap();
  function kt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = bs.get(e);
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: Uf(t) }), bs.set(e, t), t);
    }
    return { value: e, source: t, stack: Uf(t) };
  }
  var Wt = [],
    fn = 0,
    fc = 0;
  function Si() {
    for (var e = fn, t = (fc = fn = 0); t < e; ) {
      var l = Wt[t];
      Wt[t++] = null;
      var a = Wt[t];
      Wt[t++] = null;
      var u = Wt[t];
      Wt[t++] = null;
      var i = Wt[t];
      if (((Wt[t++] = null), a !== null && u !== null)) {
        var s = a.pending;
        s === null ? (u.next = u) : ((u.next = s.next), (s.next = u)), (a.pending = u);
      }
      i !== 0 && Ss(l, u, i);
    }
  }
  function _i(e, t, l, a) {
    (Wt[fn++] = e),
      (Wt[fn++] = t),
      (Wt[fn++] = l),
      (Wt[fn++] = a),
      (fc |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function sc(e, t, l, a) {
    return _i(e, t, l, a), Ei(e);
  }
  function sn(e, t) {
    return _i(e, null, null, t), Ei(e);
  }
  function Ss(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, i = e.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 && ((e = i.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = i),
        (i = i.return);
    return e.tag === 3
      ? ((i = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Tt(l)),
          (e = i.hiddenUpdates),
          (a = e[u]),
          a === null ? (e[u] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function Ei(e) {
    if (50 < Cu) throw ((Cu = 0), (po = null), Error(o(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var dn = {};
  function Uy(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Nt(e, t, l, a) {
    return new Uy(e, t, l, a);
  }
  function dc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function jl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Nt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function _s(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function xi(e, t, l, a, u, i) {
    var s = 0;
    if (((a = e), typeof e == 'function')) dc(e) && (s = 1);
    else if (typeof e == 'string')
      s = Hg(e, l, ce.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case ge:
          return (e = Nt(31, l, t, u)), (e.elementType = ge), (e.lanes = i), e;
        case z:
          return za(l.children, u, i, t);
        case K:
          (s = 8), (u |= 24);
          break;
        case H:
          return (e = Nt(12, l, t, u | 2)), (e.elementType = H), (e.lanes = i), e;
        case x:
          return (e = Nt(13, l, t, u)), (e.elementType = x), (e.lanes = i), e;
        case I:
          return (e = Nt(19, l, t, u)), (e.elementType = I), (e.lanes = i), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case G:
              case V:
                s = 10;
                break e;
              case J:
                s = 9;
                break e;
              case W:
                s = 11;
                break e;
              case se:
                s = 14;
                break e;
              case ee:
                (s = 16), (a = null);
                break e;
            }
          (s = 29), (l = Error(o(130, e === null ? 'null' : typeof e, ''))), (a = null);
      }
    return (t = Nt(s, l, t, u)), (t.elementType = e), (t.type = a), (t.lanes = i), t;
  }
  function za(e, t, l, a) {
    return (e = Nt(7, e, a, t)), (e.lanes = l), e;
  }
  function hc(e, t, l) {
    return (e = Nt(6, e, null, t)), (e.lanes = l), e;
  }
  function mc(e, t, l) {
    return (
      (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var hn = [],
    mn = 0,
    Ti = null,
    Ri = 0,
    Ft = [],
    Pt = 0,
    Na = null,
    Ol = 1,
    zl = '';
  function wa(e, t) {
    (hn[mn++] = Ri), (hn[mn++] = Ti), (Ti = e), (Ri = t);
  }
  function Es(e, t, l) {
    (Ft[Pt++] = Ol), (Ft[Pt++] = zl), (Ft[Pt++] = Na), (Na = e);
    var a = Ol;
    e = zl;
    var u = 32 - Tt(a) - 1;
    (a &= ~(1 << u)), (l += 1);
    var i = 32 - Tt(t) + u;
    if (30 < i) {
      var s = u - (u % 5);
      (i = (a & ((1 << s) - 1)).toString(32)),
        (a >>= s),
        (u -= s),
        (Ol = (1 << (32 - Tt(t) + u)) | (l << u) | a),
        (zl = i + e);
    } else (Ol = (1 << i) | (l << u) | a), (zl = e);
  }
  function vc(e) {
    e.return !== null && (wa(e, 1), Es(e, 1, 0));
  }
  function yc(e) {
    for (; e === Ti; ) (Ti = hn[--mn]), (hn[mn] = null), (Ri = hn[--mn]), (hn[mn] = null);
    for (; e === Na; )
      (Na = Ft[--Pt]),
        (Ft[Pt] = null),
        (zl = Ft[--Pt]),
        (Ft[Pt] = null),
        (Ol = Ft[--Pt]),
        (Ft[Pt] = null);
  }
  var Rt = null,
    Ie = null,
    ze = !1,
    Ua = null,
    pl = !1,
    gc = Error(o(519));
  function La(e) {
    var t = Error(o(418, ''));
    throw (ru(kt(t, e)), gc);
  }
  function xs(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[$] = e), (t[ae] = a), l)) {
      case 'dialog':
        Re('cancel', t), Re('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Re('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Ou.length; l++) Re(Ou[l], t);
        break;
      case 'source':
        Re('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        Re('error', t), Re('load', t);
        break;
      case 'details':
        Re('toggle', t);
        break;
      case 'input':
        Re('invalid', t),
          Bf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          si(t);
        break;
      case 'select':
        Re('invalid', t);
        break;
      case 'textarea':
        Re('invalid', t), Yf(t, a.value, a.defaultValue, a.children), si(t);
    }
    (l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Yh(t.textContent, l)
        ? (a.popover != null && (Re('beforetoggle', t), Re('toggle', t)),
          a.onScroll != null && Re('scroll', t),
          a.onScrollEnd != null && Re('scrollend', t),
          a.onClick != null && (t.onclick = ur),
          (t = !0))
        : (t = !1),
      t || La(e);
  }
  function Ts(e) {
    for (Rt = e.return; Rt; )
      switch (Rt.tag) {
        case 5:
        case 13:
          pl = !1;
          return;
        case 27:
        case 3:
          pl = !0;
          return;
        default:
          Rt = Rt.return;
      }
  }
  function uu(e) {
    if (e !== Rt) return !1;
    if (!ze) return Ts(e), (ze = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || wo(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ie && La(e),
      Ts(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === '/$')) {
              if (t === 0) {
                Ie = ol(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++;
          e = e.nextSibling;
        }
        Ie = null;
      }
    } else
      t === 27
        ? ((t = Ie), ma(e.type) ? ((e = Bo), (Bo = null), (Ie = e)) : (Ie = t))
        : (Ie = Rt ? ol(e.stateNode.nextSibling) : null);
    return !0;
  }
  function iu() {
    (Ie = Rt = null), (ze = !1);
  }
  function Rs() {
    var e = Ua;
    return e !== null && (jt === null ? (jt = e) : jt.push.apply(jt, e), (Ua = null)), e;
  }
  function ru(e) {
    Ua === null ? (Ua = [e]) : Ua.push(e);
  }
  var pc = Q(null),
    Ha = null,
    Nl = null;
  function Il(e, t, l) {
    k(pc, t._currentValue), (t._currentValue = l);
  }
  function wl(e) {
    (e._currentValue = pc.current), F(pc);
  }
  function bc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Sc(e, t, l, a) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var s = u.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var h = i;
          i = u;
          for (var S = 0; S < t.length; S++)
            if (h.context === t[S]) {
              (i.lanes |= l),
                (h = i.alternate),
                h !== null && (h.lanes |= l),
                bc(i.return, l, e),
                a || (s = null);
              break e;
            }
          i = h.next;
        }
      } else if (u.tag === 18) {
        if (((s = u.return), s === null)) throw Error(o(341));
        (s.lanes |= l), (i = s.alternate), i !== null && (i.lanes |= l), bc(s, l, e), (s = null);
      } else s = u.child;
      if (s !== null) s.return = u;
      else
        for (s = u; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (((u = s.sibling), u !== null)) {
            (u.return = s.return), (s = u);
            break;
          }
          s = s.return;
        }
      u = s;
    }
  }
  function cu(e, t, l, a) {
    e = null;
    for (var u = t, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var s = u.alternate;
        if (s === null) throw Error(o(387));
        if (((s = s.memoizedProps), s !== null)) {
          var h = u.type;
          zt(u.pendingProps.value, s.value) || (e !== null ? e.push(h) : (e = [h]));
        }
      } else if (u === Et.current) {
        if (((s = u.alternate), s === null)) throw Error(o(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Hu) : (e = [Hu]));
      }
      u = u.return;
    }
    e !== null && Sc(t, e, l, a), (t.flags |= 262144);
  }
  function Mi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!zt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ba(e) {
    (Ha = e), (Nl = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function bt(e) {
    return Ms(Ha, e);
  }
  function Di(e, t) {
    return Ha === null && Ba(e), Ms(e, t);
  }
  function Ms(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Nl === null)) {
      if (e === null) throw Error(o(308));
      (Nl = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else Nl = Nl.next = t;
    return l;
  }
  var Ly =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    Hy = n.unstable_scheduleCallback,
    By = n.unstable_NormalPriority,
    it = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _c() {
    return { controller: new Ly(), data: new Map(), refCount: 0 };
  }
  function ou(e) {
    e.refCount--,
      e.refCount === 0 &&
        Hy(By, function () {
          e.controller.abort();
        });
  }
  var fu = null,
    Ec = 0,
    vn = 0,
    yn = null;
  function qy(e, t) {
    if (fu === null) {
      var l = (fu = []);
      (Ec = 0),
        (vn = Ro()),
        (yn = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Ec++, t.then(Ds, Ds), t;
  }
  function Ds() {
    if (--Ec === 0 && fu !== null) {
      yn !== null && (yn.status = 'fulfilled');
      var e = fu;
      (fu = null), (vn = 0), (yn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Yy(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      e.then(
        function () {
          (a.status = 'fulfilled'), (a.value = t);
          for (var u = 0; u < l.length; u++) (0, l[u])(t);
        },
        function (u) {
          for (a.status = 'rejected', a.reason = u, u = 0; u < l.length; u++) (0, l[u])(void 0);
        },
      ),
      a
    );
  }
  var As = B.S;
  B.S = function (e, t) {
    typeof t == 'object' && t !== null && typeof t.then == 'function' && qy(e, t),
      As !== null && As(e, t);
  };
  var qa = Q(null);
  function xc() {
    var e = qa.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function Ai(e, t) {
    t === null ? k(qa, qa.current) : k(qa, t.pool);
  }
  function Cs() {
    var e = xc();
    return e === null ? null : { parent: it._currentValue, pool: e };
  }
  var su = Error(o(460)),
    js = Error(o(474)),
    Ci = Error(o(542)),
    Tc = { then: function () {} };
  function Os(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function ji() {}
  function zs(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(ji, ji), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), ws(e), e);
      default:
        if (typeof t.status == 'string') t.then(ji, ji);
        else {
          if (((e = Ke), e !== null && 100 < e.shellSuspendCounter)) throw Error(o(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'fulfilled'), (u.value = a);
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'rejected'), (u.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), ws(e), e);
        }
        throw ((du = t), su);
    }
  }
  var du = null;
  function Ns() {
    if (du === null) throw Error(o(459));
    var e = du;
    return (du = null), e;
  }
  function ws(e) {
    if (e === su || e === Ci) throw Error(o(483));
  }
  var ea = !1;
  function Rc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ta(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function la(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Le & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Ei(e)),
        Ss(e, null, l),
        t
      );
    }
    return _i(e, a, t, l), Ei(e);
  }
  function hu(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), fi(e, l);
    }
  }
  function Dc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var s = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          i === null ? (u = i = s) : (i = i.next = s), (l = l.next);
        } while (l !== null);
        i === null ? (u = i = t) : (i = i.next = t);
      } else u = i = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var Ac = !1;
  function mu() {
    if (Ac) {
      var e = yn;
      if (e !== null) throw e;
    }
  }
  function vu(e, t, l, a) {
    Ac = !1;
    var u = e.updateQueue;
    ea = !1;
    var i = u.firstBaseUpdate,
      s = u.lastBaseUpdate,
      h = u.shared.pending;
    if (h !== null) {
      u.shared.pending = null;
      var S = h,
        j = S.next;
      (S.next = null), s === null ? (i = j) : (s.next = j), (s = S);
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (h = q.lastBaseUpdate),
        h !== s && (h === null ? (q.firstBaseUpdate = j) : (h.next = j), (q.lastBaseUpdate = S)));
    }
    if (i !== null) {
      var X = u.baseState;
      (s = 0), (q = j = S = null), (h = i);
      do {
        var N = h.lane & -536870913,
          U = N !== h.lane;
        if (U ? (Ce & N) === N : (a & N) === N) {
          N !== 0 && N === vn && (Ac = !0),
            q !== null &&
              (q = q.next =
                { lane: 0, tag: h.tag, payload: h.payload, callback: null, next: null });
          e: {
            var ve = e,
              he = h;
            N = t;
            var Ye = l;
            switch (he.tag) {
              case 1:
                if (((ve = he.payload), typeof ve == 'function')) {
                  X = ve.call(Ye, X, N);
                  break e;
                }
                X = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = he.payload),
                  (N = typeof ve == 'function' ? ve.call(Ye, X, N) : ve),
                  N == null)
                )
                  break e;
                X = b({}, X, N);
                break e;
              case 2:
                ea = !0;
            }
          }
          (N = h.callback),
            N !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = u.callbacks),
              U === null ? (u.callbacks = [N]) : U.push(N));
        } else
          (U = { lane: N, tag: h.tag, payload: h.payload, callback: h.callback, next: null }),
            q === null ? ((j = q = U), (S = X)) : (q = q.next = U),
            (s |= N);
        if (((h = h.next), h === null)) {
          if (((h = u.shared.pending), h === null)) break;
          (U = h), (h = U.next), (U.next = null), (u.lastBaseUpdate = U), (u.shared.pending = null);
        }
      } while (!0);
      q === null && (S = X),
        (u.baseState = S),
        (u.firstBaseUpdate = j),
        (u.lastBaseUpdate = q),
        i === null && (u.shared.lanes = 0),
        (fa |= s),
        (e.lanes = s),
        (e.memoizedState = X);
    }
  }
  function Us(e, t) {
    if (typeof e != 'function') throw Error(o(191, e));
    e.call(t);
  }
  function Ls(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) Us(l[e], t);
  }
  var gn = Q(null),
    Oi = Q(0);
  function Hs(e, t) {
    (e = Gl), k(Oi, e), k(gn, t), (Gl = e | t.baseLanes);
  }
  function Cc() {
    k(Oi, Gl), k(gn, gn.current);
  }
  function jc() {
    (Gl = Oi.current), F(gn), F(Oi);
  }
  var aa = 0,
    Se = null,
    Be = null,
    at = null,
    zi = !1,
    pn = !1,
    Ya = !1,
    Ni = 0,
    yu = 0,
    bn = null,
    Gy = 0;
  function tt() {
    throw Error(o(321));
  }
  function Oc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!zt(e[l], t[l])) return !1;
    return !0;
  }
  function zc(e, t, l, a, u, i) {
    return (
      (aa = i),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (B.H = e === null || e.memoizedState === null ? Sd : _d),
      (Ya = !1),
      (i = l(a, u)),
      (Ya = !1),
      pn && (i = qs(t, l, a, u)),
      Bs(e),
      i
    );
  }
  function Bs(e) {
    B.H = qi;
    var t = Be !== null && Be.next !== null;
    if (((aa = 0), (at = Be = Se = null), (zi = !1), (yu = 0), (bn = null), t)) throw Error(o(300));
    e === null || ct || ((e = e.dependencies), e !== null && Mi(e) && (ct = !0));
  }
  function qs(e, t, l, a) {
    Se = e;
    var u = 0;
    do {
      if ((pn && (bn = null), (yu = 0), (pn = !1), 25 <= u)) throw Error(o(301));
      if (((u += 1), (at = Be = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (B.H = $y), (i = t(l, a));
    } while (pn);
    return i;
  }
  function Xy() {
    var e = B.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? gu(t) : t),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (Se.flags |= 1024),
      t
    );
  }
  function Nc() {
    var e = Ni !== 0;
    return (Ni = 0), e;
  }
  function wc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function Uc(e) {
    if (zi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      zi = !1;
    }
    (aa = 0), (at = Be = Se = null), (pn = !1), (yu = Ni = 0), (bn = null);
  }
  function At() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return at === null ? (Se.memoizedState = at = e) : (at = at.next = e), at;
  }
  function nt() {
    if (Be === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = at === null ? Se.memoizedState : at.next;
    if (t !== null) (at = t), (Be = e);
    else {
      if (e === null) throw Se.alternate === null ? Error(o(467)) : Error(o(310));
      (Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        at === null ? (Se.memoizedState = at = e) : (at = at.next = e);
    }
    return at;
  }
  function Lc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gu(e) {
    var t = yu;
    return (
      (yu += 1),
      bn === null && (bn = []),
      (e = zs(bn, e, t)),
      (t = Se),
      (at === null ? t.memoizedState : at.next) === null &&
        ((t = t.alternate), (B.H = t === null || t.memoizedState === null ? Sd : _d)),
      e
    );
  }
  function wi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return gu(e);
      if (e.$$typeof === V) return bt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Hc(e) {
    var t = null,
      l = Se.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = Se.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Lc()), (Se.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ne;
    return t.index++, l;
  }
  function Ul(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Ui(e) {
    var t = nt();
    return Bc(t, Be, e);
  }
  function Bc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (u !== null) {
        var s = u.next;
        (u.next = i.next), (i.next = s);
      }
      (t.baseQueue = u = i), (a.pending = null);
    }
    if (((i = e.baseState), u === null)) e.memoizedState = i;
    else {
      t = u.next;
      var h = (s = null),
        S = null,
        j = t,
        q = !1;
      do {
        var X = j.lane & -536870913;
        if (X !== j.lane ? (Ce & X) === X : (aa & X) === X) {
          var N = j.revertLane;
          if (N === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              X === vn && (q = !0);
          else if ((aa & N) === N) {
            (j = j.next), N === vn && (q = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              S === null ? ((h = S = X), (s = i)) : (S = S.next = X),
              (Se.lanes |= N),
              (fa |= N);
          (X = j.action), Ya && l(i, X), (i = j.hasEagerState ? j.eagerState : l(i, X));
        } else
          (N = {
            lane: X,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            S === null ? ((h = S = N), (s = i)) : (S = S.next = N),
            (Se.lanes |= X),
            (fa |= X);
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (S === null ? (s = i) : (S.next = h),
        !zt(i, e.memoizedState) && ((ct = !0), q && ((l = yn), l !== null)))
      )
        throw l;
      (e.memoizedState = i), (e.baseState = s), (e.baseQueue = S), (a.lastRenderedState = i);
    }
    return u === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function qc(e) {
    var t = nt(),
      l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      u = l.pending,
      i = t.memoizedState;
    if (u !== null) {
      l.pending = null;
      var s = (u = u.next);
      do (i = e(i, s.action)), (s = s.next);
      while (s !== u);
      zt(i, t.memoizedState) || (ct = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function Ys(e, t, l) {
    var a = Se,
      u = nt(),
      i = ze;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var s = !zt((Be || u).memoizedState, l);
    s && ((u.memoizedState = l), (ct = !0)), (u = u.queue);
    var h = Qs.bind(null, a, u, e);
    if (
      (pu(2048, 8, h, [e]), u.getSnapshot !== t || s || (at !== null && at.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), Sn(9, Li(), Xs.bind(null, a, u, l, t), null), Ke === null))
        throw Error(o(349));
      i || (aa & 124) !== 0 || Gs(a, t, l);
    }
    return l;
  }
  function Gs(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = Se.updateQueue),
      t === null
        ? ((t = Lc()), (Se.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function Xs(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), Vs(t) && Zs(e);
  }
  function Qs(e, t, l) {
    return l(function () {
      Vs(t) && Zs(e);
    });
  }
  function Vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !zt(e, l);
    } catch {
      return !0;
    }
  }
  function Zs(e) {
    var t = sn(e, 2);
    t !== null && Bt(t, e, 2);
  }
  function Yc(e) {
    var t = At();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Ya)) {
        Kt(!0);
        try {
          l();
        } finally {
          Kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ul,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Ks(e, t, l, a) {
    return (e.baseState = l), Bc(e, Be, typeof a == 'function' ? a : Ul);
  }
  function Qy(e, t, l, a, u) {
    if (Bi(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (s) {
          i.listeners.push(s);
        },
      };
      B.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), Js(t, i))
          : ((i.next = l.next), (t.pending = l.next = i));
    }
  }
  function Js(e, t) {
    var l = t.action,
      a = t.payload,
      u = e.state;
    if (t.isTransition) {
      var i = B.T,
        s = {};
      B.T = s;
      try {
        var h = l(u, a),
          S = B.S;
        S !== null && S(s, h), $s(e, t, h);
      } catch (j) {
        Gc(e, t, j);
      } finally {
        B.T = i;
      }
    } else
      try {
        (i = l(u, a)), $s(e, t, i);
      } catch (j) {
        Gc(e, t, j);
      }
  }
  function $s(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            ks(e, t, a);
          },
          function (a) {
            return Gc(e, t, a);
          },
        )
      : ks(e, t, l);
  }
  function ks(e, t, l) {
    (t.status = 'fulfilled'),
      (t.value = l),
      Ws(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Js(e, l)));
  }
  function Gc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = 'rejected'), (t.reason = l), Ws(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Ws(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Fs(e, t) {
    return t;
  }
  function Ps(e, t) {
    if (ze) {
      var l = Ke.formState;
      if (l !== null) {
        e: {
          var a = Se;
          if (ze) {
            if (Ie) {
              t: {
                for (var u = Ie, i = pl; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break t;
                  }
                  if (((u = ol(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (i = u.data), (u = i === 'F!' || i === 'F' ? u : null);
              }
              if (u) {
                (Ie = ol(u.nextSibling)), (a = u.data === 'F!');
                break e;
              }
            }
            La(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = At()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fs,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = gd.bind(null, Se, a)),
      (a.dispatch = l),
      (a = Yc(!1)),
      (i = Kc.bind(null, Se, !1, a.queue)),
      (a = At()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = u),
      (l = Qy.bind(null, Se, u, i, l)),
      (u.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Is(e) {
    var t = nt();
    return ed(t, Be, e);
  }
  function ed(e, t, l) {
    if (
      ((t = Bc(e, t, Fs)[0]),
      (e = Ui(Ul)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = gu(t);
      } catch (s) {
        throw s === su ? Ci : s;
      }
    else a = t;
    t = nt();
    var u = t.queue,
      i = u.dispatch;
    return (
      l !== t.memoizedState && ((Se.flags |= 2048), Sn(9, Li(), Vy.bind(null, u, l), null)),
      [a, i, e]
    );
  }
  function Vy(e, t) {
    e.action = t;
  }
  function td(e) {
    var t = nt(),
      l = Be;
    if (l !== null) return ed(t, l, e);
    nt(), (t = t.memoizedState), (l = nt());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function Sn(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = Se.updateQueue),
      t === null && ((t = Lc()), (Se.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Li() {
    return { destroy: void 0, resource: void 0 };
  }
  function ld() {
    return nt().memoizedState;
  }
  function Hi(e, t, l, a) {
    var u = At();
    (a = a === void 0 ? null : a), (Se.flags |= e), (u.memoizedState = Sn(1 | t, Li(), l, a));
  }
  function pu(e, t, l, a) {
    var u = nt();
    a = a === void 0 ? null : a;
    var i = u.memoizedState.inst;
    Be !== null && a !== null && Oc(a, Be.memoizedState.deps)
      ? (u.memoizedState = Sn(t, i, l, a))
      : ((Se.flags |= e), (u.memoizedState = Sn(1 | t, i, l, a)));
  }
  function ad(e, t) {
    Hi(8390656, 8, e, t);
  }
  function nd(e, t) {
    pu(2048, 8, e, t);
  }
  function ud(e, t) {
    return pu(4, 2, e, t);
  }
  function id(e, t) {
    return pu(4, 4, e, t);
  }
  function rd(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function cd(e, t, l) {
    (l = l != null ? l.concat([e]) : null), pu(4, 4, rd.bind(null, t, e), l);
  }
  function Xc() {}
  function od(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Oc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function fd(e, t) {
    var l = nt();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Oc(t, a[1])) return a[0];
    if (((a = e()), Ya)) {
      Kt(!0);
      try {
        e();
      } finally {
        Kt(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function Qc(e, t, l) {
    return l === void 0 || (aa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = hh()), (Se.lanes |= e), (fa |= e), l);
  }
  function sd(e, t, l, a) {
    return zt(l, t)
      ? l
      : gn.current !== null
        ? ((e = Qc(e, l, a)), zt(e, t) || (ct = !0), e)
        : (aa & 42) === 0
          ? ((ct = !0), (e.memoizedState = l))
          : ((e = hh()), (Se.lanes |= e), (fa |= e), t);
  }
  function dd(e, t, l, a, u) {
    var i = P.p;
    P.p = i !== 0 && 8 > i ? i : 8;
    var s = B.T,
      h = {};
    (B.T = h), Kc(e, !1, t, l);
    try {
      var S = u(),
        j = B.S;
      if (
        (j !== null && j(h, S), S !== null && typeof S == 'object' && typeof S.then == 'function')
      ) {
        var q = Yy(S, a);
        bu(e, t, q, Ht(e));
      } else bu(e, t, a, Ht(e));
    } catch (X) {
      bu(e, t, { then: function () {}, status: 'rejected', reason: X }, Ht());
    } finally {
      (P.p = i), (B.T = s);
    }
  }
  function Zy() {}
  function Vc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var u = hd(e).queue;
    dd(
      e,
      u,
      t,
      re,
      l === null
        ? Zy
        : function () {
            return md(e), l(a);
          },
    );
  }
  function hd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ul,
        lastRenderedState: re,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ul,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function md(e) {
    var t = hd(e).next.queue;
    bu(e, t, {}, Ht());
  }
  function Zc() {
    return bt(Hu);
  }
  function vd() {
    return nt().memoizedState;
  }
  function yd() {
    return nt().memoizedState;
  }
  function Ky(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ht();
          e = ta(l);
          var a = la(t, e, l);
          a !== null && (Bt(a, t, l), hu(a, t, l)), (t = { cache: _c() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Jy(e, t, l) {
    var a = Ht();
    (l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }),
      Bi(e) ? pd(t, l) : ((l = sc(e, t, l, a)), l !== null && (Bt(l, e, a), bd(l, t, a)));
  }
  function gd(e, t, l) {
    var a = Ht();
    bu(e, t, l, a);
  }
  function bu(e, t, l, a) {
    var u = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Bi(e)) pd(t, u);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var s = t.lastRenderedState,
            h = i(s, l);
          if (((u.hasEagerState = !0), (u.eagerState = h), zt(h, s)))
            return _i(e, t, u, 0), Ke === null && Si(), !1;
        } catch {
        } finally {
        }
      if (((l = sc(e, t, u, a)), l !== null)) return Bt(l, e, a), bd(l, t, a), !0;
    }
    return !1;
  }
  function Kc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ro(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Bi(e))
    ) {
      if (t) throw Error(o(479));
    } else (t = sc(e, l, a, 2)), t !== null && Bt(t, e, 2);
  }
  function Bi(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function pd(e, t) {
    pn = zi = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t);
  }
  function bd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), fi(e, l);
    }
  }
  var qi = {
      readContext: bt,
      use: wi,
      useCallback: tt,
      useContext: tt,
      useEffect: tt,
      useImperativeHandle: tt,
      useLayoutEffect: tt,
      useInsertionEffect: tt,
      useMemo: tt,
      useReducer: tt,
      useRef: tt,
      useState: tt,
      useDebugValue: tt,
      useDeferredValue: tt,
      useTransition: tt,
      useSyncExternalStore: tt,
      useId: tt,
      useHostTransitionStatus: tt,
      useFormState: tt,
      useActionState: tt,
      useOptimistic: tt,
      useMemoCache: tt,
      useCacheRefresh: tt,
    },
    Sd = {
      readContext: bt,
      use: wi,
      useCallback: function (e, t) {
        return (At().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: bt,
      useEffect: ad,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null), Hi(4194308, 4, rd.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return Hi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Hi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = At();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ya) {
          Kt(!0);
          try {
            e();
          } finally {
            Kt(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = At();
        if (l !== void 0) {
          var u = l(t);
          if (Ya) {
            Kt(!0);
            try {
              l(t);
            } finally {
              Kt(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (a.queue = e),
          (e = e.dispatch = Jy.bind(null, Se, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = At();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Yc(e);
        var t = e.queue,
          l = gd.bind(null, Se, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: Xc,
      useDeferredValue: function (e, t) {
        var l = At();
        return Qc(l, e, t);
      },
      useTransition: function () {
        var e = Yc(!1);
        return (e = dd.bind(null, Se, e.queue, !0, !1)), (At().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, t, l) {
        var a = Se,
          u = At();
        if (ze) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = t()), Ke === null)) throw Error(o(349));
          (Ce & 124) !== 0 || Gs(a, t, l);
        }
        u.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (u.queue = i),
          ad(Qs.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          Sn(9, Li(), Xs.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = At(),
          t = Ke.identifierPrefix;
        if (ze) {
          var l = zl,
            a = Ol;
          (l = (a & ~(1 << (32 - Tt(a) - 1))).toString(32) + l),
            (t = '«' + t + 'R' + l),
            (l = Ni++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '»');
        } else (l = Gy++), (t = '«' + t + 'r' + l.toString(32) + '»');
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Zc,
      useFormState: Ps,
      useActionState: Ps,
      useOptimistic: function (e) {
        var t = At();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (t.queue = l), (t = Kc.bind(null, Se, !0, l)), (l.dispatch = t), [e, t];
      },
      useMemoCache: Hc,
      useCacheRefresh: function () {
        return (At().memoizedState = Ky.bind(null, Se));
      },
    },
    _d = {
      readContext: bt,
      use: wi,
      useCallback: od,
      useContext: bt,
      useEffect: nd,
      useImperativeHandle: cd,
      useInsertionEffect: ud,
      useLayoutEffect: id,
      useMemo: fd,
      useReducer: Ui,
      useRef: ld,
      useState: function () {
        return Ui(Ul);
      },
      useDebugValue: Xc,
      useDeferredValue: function (e, t) {
        var l = nt();
        return sd(l, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ui(Ul)[0],
          t = nt().memoizedState;
        return [typeof e == 'boolean' ? e : gu(e), t];
      },
      useSyncExternalStore: Ys,
      useId: vd,
      useHostTransitionStatus: Zc,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (e, t) {
        var l = nt();
        return Ks(l, Be, e, t);
      },
      useMemoCache: Hc,
      useCacheRefresh: yd,
    },
    $y = {
      readContext: bt,
      use: wi,
      useCallback: od,
      useContext: bt,
      useEffect: nd,
      useImperativeHandle: cd,
      useInsertionEffect: ud,
      useLayoutEffect: id,
      useMemo: fd,
      useReducer: qc,
      useRef: ld,
      useState: function () {
        return qc(Ul);
      },
      useDebugValue: Xc,
      useDeferredValue: function (e, t) {
        var l = nt();
        return Be === null ? Qc(l, e, t) : sd(l, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = qc(Ul)[0],
          t = nt().memoizedState;
        return [typeof e == 'boolean' ? e : gu(e), t];
      },
      useSyncExternalStore: Ys,
      useId: vd,
      useHostTransitionStatus: Zc,
      useFormState: td,
      useActionState: td,
      useOptimistic: function (e, t) {
        var l = nt();
        return Be !== null ? Ks(l, Be, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: Hc,
      useCacheRefresh: yd,
    },
    _n = null,
    Su = 0;
  function Yi(e) {
    var t = Su;
    return (Su += 1), _n === null && (_n = []), zs(_n, e, t);
  }
  function _u(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Gi(e, t) {
    throw t.$$typeof === M
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e,
          ),
        ));
  }
  function Ed(e) {
    var t = e._init;
    return t(e._payload);
  }
  function xd(e) {
    function t(D, T) {
      if (e) {
        var C = D.deletions;
        C === null ? ((D.deletions = [T]), (D.flags |= 16)) : C.push(T);
      }
    }
    function l(D, T) {
      if (!e) return null;
      for (; T !== null; ) t(D, T), (T = T.sibling);
      return null;
    }
    function a(D) {
      for (var T = new Map(); D !== null; )
        D.key !== null ? T.set(D.key, D) : T.set(D.index, D), (D = D.sibling);
      return T;
    }
    function u(D, T) {
      return (D = jl(D, T)), (D.index = 0), (D.sibling = null), D;
    }
    function i(D, T, C) {
      return (
        (D.index = C),
        e
          ? ((C = D.alternate),
            C !== null
              ? ((C = C.index), C < T ? ((D.flags |= 67108866), T) : C)
              : ((D.flags |= 67108866), T))
          : ((D.flags |= 1048576), T)
      );
    }
    function s(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function h(D, T, C, Y) {
      return T === null || T.tag !== 6
        ? ((T = hc(C, D.mode, Y)), (T.return = D), T)
        : ((T = u(T, C)), (T.return = D), T);
    }
    function S(D, T, C, Y) {
      var le = C.type;
      return le === z
        ? q(D, T, C.props.children, Y, C.key)
        : T !== null &&
            (T.elementType === le ||
              (typeof le == 'object' && le !== null && le.$$typeof === ee && Ed(le) === T.type))
          ? ((T = u(T, C.props)), _u(T, C), (T.return = D), T)
          : ((T = xi(C.type, C.key, C.props, null, D.mode, Y)), _u(T, C), (T.return = D), T);
    }
    function j(D, T, C, Y) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== C.containerInfo ||
        T.stateNode.implementation !== C.implementation
        ? ((T = mc(C, D.mode, Y)), (T.return = D), T)
        : ((T = u(T, C.children || [])), (T.return = D), T);
    }
    function q(D, T, C, Y, le) {
      return T === null || T.tag !== 7
        ? ((T = za(C, D.mode, Y, le)), (T.return = D), T)
        : ((T = u(T, C)), (T.return = D), T);
    }
    function X(D, T, C) {
      if ((typeof T == 'string' && T !== '') || typeof T == 'number' || typeof T == 'bigint')
        return (T = hc('' + T, D.mode, C)), (T.return = D), T;
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case R:
            return (C = xi(T.type, T.key, T.props, null, D.mode, C)), _u(C, T), (C.return = D), C;
          case O:
            return (T = mc(T, D.mode, C)), (T.return = D), T;
          case ee:
            var Y = T._init;
            return (T = Y(T._payload)), X(D, T, C);
        }
        if (Ae(T) || We(T)) return (T = za(T, D.mode, C, null)), (T.return = D), T;
        if (typeof T.then == 'function') return X(D, Yi(T), C);
        if (T.$$typeof === V) return X(D, Di(D, T), C);
        Gi(D, T);
      }
      return null;
    }
    function N(D, T, C, Y) {
      var le = T !== null ? T.key : null;
      if ((typeof C == 'string' && C !== '') || typeof C == 'number' || typeof C == 'bigint')
        return le !== null ? null : h(D, T, '' + C, Y);
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case R:
            return C.key === le ? S(D, T, C, Y) : null;
          case O:
            return C.key === le ? j(D, T, C, Y) : null;
          case ee:
            return (le = C._init), (C = le(C._payload)), N(D, T, C, Y);
        }
        if (Ae(C) || We(C)) return le !== null ? null : q(D, T, C, Y, null);
        if (typeof C.then == 'function') return N(D, T, Yi(C), Y);
        if (C.$$typeof === V) return N(D, T, Di(D, C), Y);
        Gi(D, C);
      }
      return null;
    }
    function U(D, T, C, Y, le) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return (D = D.get(C) || null), h(T, D, '' + Y, le);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case R:
            return (D = D.get(Y.key === null ? C : Y.key) || null), S(T, D, Y, le);
          case O:
            return (D = D.get(Y.key === null ? C : Y.key) || null), j(T, D, Y, le);
          case ee:
            var Ee = Y._init;
            return (Y = Ee(Y._payload)), U(D, T, C, Y, le);
        }
        if (Ae(Y) || We(Y)) return (D = D.get(C) || null), q(T, D, Y, le, null);
        if (typeof Y.then == 'function') return U(D, T, C, Yi(Y), le);
        if (Y.$$typeof === V) return U(D, T, C, Di(T, Y), le);
        Gi(T, Y);
      }
      return null;
    }
    function ve(D, T, C, Y) {
      for (
        var le = null, Ee = null, ie = T, me = (T = 0), ft = null;
        ie !== null && me < C.length;
        me++
      ) {
        ie.index > me ? ((ft = ie), (ie = null)) : (ft = ie.sibling);
        var je = N(D, ie, C[me], Y);
        if (je === null) {
          ie === null && (ie = ft);
          break;
        }
        e && ie && je.alternate === null && t(D, ie),
          (T = i(je, T, me)),
          Ee === null ? (le = je) : (Ee.sibling = je),
          (Ee = je),
          (ie = ft);
      }
      if (me === C.length) return l(D, ie), ze && wa(D, me), le;
      if (ie === null) {
        for (; me < C.length; me++)
          (ie = X(D, C[me], Y)),
            ie !== null &&
              ((T = i(ie, T, me)), Ee === null ? (le = ie) : (Ee.sibling = ie), (Ee = ie));
        return ze && wa(D, me), le;
      }
      for (ie = a(ie); me < C.length; me++)
        (ft = U(ie, D, me, C[me], Y)),
          ft !== null &&
            (e && ft.alternate !== null && ie.delete(ft.key === null ? me : ft.key),
            (T = i(ft, T, me)),
            Ee === null ? (le = ft) : (Ee.sibling = ft),
            (Ee = ft));
      return (
        e &&
          ie.forEach(function (ba) {
            return t(D, ba);
          }),
        ze && wa(D, me),
        le
      );
    }
    function he(D, T, C, Y) {
      if (C == null) throw Error(o(151));
      for (
        var le = null, Ee = null, ie = T, me = (T = 0), ft = null, je = C.next();
        ie !== null && !je.done;
        me++, je = C.next()
      ) {
        ie.index > me ? ((ft = ie), (ie = null)) : (ft = ie.sibling);
        var ba = N(D, ie, je.value, Y);
        if (ba === null) {
          ie === null && (ie = ft);
          break;
        }
        e && ie && ba.alternate === null && t(D, ie),
          (T = i(ba, T, me)),
          Ee === null ? (le = ba) : (Ee.sibling = ba),
          (Ee = ba),
          (ie = ft);
      }
      if (je.done) return l(D, ie), ze && wa(D, me), le;
      if (ie === null) {
        for (; !je.done; me++, je = C.next())
          (je = X(D, je.value, Y)),
            je !== null &&
              ((T = i(je, T, me)), Ee === null ? (le = je) : (Ee.sibling = je), (Ee = je));
        return ze && wa(D, me), le;
      }
      for (ie = a(ie); !je.done; me++, je = C.next())
        (je = U(ie, D, me, je.value, Y)),
          je !== null &&
            (e && je.alternate !== null && ie.delete(je.key === null ? me : je.key),
            (T = i(je, T, me)),
            Ee === null ? (le = je) : (Ee.sibling = je),
            (Ee = je));
      return (
        e &&
          ie.forEach(function (kg) {
            return t(D, kg);
          }),
        ze && wa(D, me),
        le
      );
    }
    function Ye(D, T, C, Y) {
      if (
        (typeof C == 'object' &&
          C !== null &&
          C.type === z &&
          C.key === null &&
          (C = C.props.children),
        typeof C == 'object' && C !== null)
      ) {
        switch (C.$$typeof) {
          case R:
            e: {
              for (var le = C.key; T !== null; ) {
                if (T.key === le) {
                  if (((le = C.type), le === z)) {
                    if (T.tag === 7) {
                      l(D, T.sibling), (Y = u(T, C.props.children)), (Y.return = D), (D = Y);
                      break e;
                    }
                  } else if (
                    T.elementType === le ||
                    (typeof le == 'object' &&
                      le !== null &&
                      le.$$typeof === ee &&
                      Ed(le) === T.type)
                  ) {
                    l(D, T.sibling), (Y = u(T, C.props)), _u(Y, C), (Y.return = D), (D = Y);
                    break e;
                  }
                  l(D, T);
                  break;
                } else t(D, T);
                T = T.sibling;
              }
              C.type === z
                ? ((Y = za(C.props.children, D.mode, Y, C.key)), (Y.return = D), (D = Y))
                : ((Y = xi(C.type, C.key, C.props, null, D.mode, Y)),
                  _u(Y, C),
                  (Y.return = D),
                  (D = Y));
            }
            return s(D);
          case O:
            e: {
              for (le = C.key; T !== null; ) {
                if (T.key === le)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === C.containerInfo &&
                    T.stateNode.implementation === C.implementation
                  ) {
                    l(D, T.sibling), (Y = u(T, C.children || [])), (Y.return = D), (D = Y);
                    break e;
                  } else {
                    l(D, T);
                    break;
                  }
                else t(D, T);
                T = T.sibling;
              }
              (Y = mc(C, D.mode, Y)), (Y.return = D), (D = Y);
            }
            return s(D);
          case ee:
            return (le = C._init), (C = le(C._payload)), Ye(D, T, C, Y);
        }
        if (Ae(C)) return ve(D, T, C, Y);
        if (We(C)) {
          if (((le = We(C)), typeof le != 'function')) throw Error(o(150));
          return (C = le.call(C)), he(D, T, C, Y);
        }
        if (typeof C.then == 'function') return Ye(D, T, Yi(C), Y);
        if (C.$$typeof === V) return Ye(D, T, Di(D, C), Y);
        Gi(D, C);
      }
      return (typeof C == 'string' && C !== '') || typeof C == 'number' || typeof C == 'bigint'
        ? ((C = '' + C),
          T !== null && T.tag === 6
            ? (l(D, T.sibling), (Y = u(T, C)), (Y.return = D), (D = Y))
            : (l(D, T), (Y = hc(C, D.mode, Y)), (Y.return = D), (D = Y)),
          s(D))
        : l(D, T);
    }
    return function (D, T, C, Y) {
      try {
        Su = 0;
        var le = Ye(D, T, C, Y);
        return (_n = null), le;
      } catch (ie) {
        if (ie === su || ie === Ci) throw ie;
        var Ee = Nt(29, ie, null, D.mode);
        return (Ee.lanes = Y), (Ee.return = D), Ee;
      } finally {
      }
    };
  }
  var En = xd(!0),
    Td = xd(!1),
    It = Q(null),
    bl = null;
  function na(e) {
    var t = e.alternate;
    k(rt, rt.current & 1),
      k(It, e),
      bl === null && (t === null || gn.current !== null || t.memoizedState !== null) && (bl = e);
  }
  function Rd(e) {
    if (e.tag === 22) {
      if ((k(rt, rt.current), k(It, e), bl === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (bl = e);
      }
    } else ua();
  }
  function ua() {
    k(rt, rt.current), k(It, It.current);
  }
  function Ll(e) {
    F(It), bl === e && (bl = null), F(rt);
  }
  var rt = Q(0);
  function Xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || Ho(l))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Jc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : b({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var $c = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Ht(),
        u = ta(a);
      (u.payload = t),
        l != null && (u.callback = l),
        (t = la(e, u, a)),
        t !== null && (Bt(t, e, a), hu(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Ht(),
        u = ta(a);
      (u.tag = 1),
        (u.payload = t),
        l != null && (u.callback = l),
        (t = la(e, u, a)),
        t !== null && (Bt(t, e, a), hu(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Ht(),
        a = ta(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = la(e, a, l)),
        t !== null && (Bt(t, e, l), hu(t, e, l));
    },
  };
  function Md(e, t, l, a, u, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, i, s)
        : t.prototype && t.prototype.isPureReactComponent
          ? !au(l, a) || !au(u, i)
          : !0
    );
  }
  function Dd(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && $c.enqueueReplaceState(t, t.state, null);
  }
  function Ga(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = b({}, l));
      for (var u in e) l[u] === void 0 && (l[u] = e[u]);
    }
    return l;
  }
  var Qi =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function Ad(e) {
    Qi(e);
  }
  function Cd(e) {
    console.error(e);
  }
  function jd(e) {
    Qi(e);
  }
  function Vi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Od(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function kc(e, t, l) {
    return (
      (l = ta(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Vi(e, t);
      }),
      l
    );
  }
  function zd(e) {
    return (e = ta(e)), (e.tag = 3), e;
  }
  function Nd(e, t, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var i = a.value;
      (e.payload = function () {
        return u(i);
      }),
        (e.callback = function () {
          Od(t, l, a);
        });
    }
    var s = l.stateNode;
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (e.callback = function () {
        Od(t, l, a),
          typeof u != 'function' && (sa === null ? (sa = new Set([this])) : sa.add(this));
        var h = a.stack;
        this.componentDidCatch(a.value, { componentStack: h !== null ? h : '' });
      });
  }
  function ky(e, t, l, a, u) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = l.alternate), t !== null && cu(t, l, u, !0), (l = It.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return (
              bl === null ? So() : l.alternate === null && et === 0 && (et = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === Tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Eo(e, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Eo(e, a, u)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return Eo(e, a, u), So(), !1;
    }
    if (ze)
      return (
        (t = It.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== gc && ((e = Error(o(422), { cause: a })), ru(kt(e, l))))
          : (a !== gc && ((t = Error(o(423), { cause: a })), ru(kt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (a = kt(a, l)),
            (u = kc(e.stateNode, a, u)),
            Dc(e, u),
            et !== 4 && (et = 2)),
        !1
      );
    var i = Error(o(520), { cause: a });
    if (((i = kt(i, l)), Au === null ? (Au = [i]) : Au.push(i), et !== 4 && (et = 2), t === null))
      return !0;
    (a = kt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = u & -u),
            (l.lanes |= e),
            (e = kc(l.stateNode, a, e)),
            Dc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (i !== null &&
                  typeof i.componentDidCatch == 'function' &&
                  (sa === null || !sa.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = zd(u)),
              Nd(u, e, l, a),
              Dc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var wd = Error(o(461)),
    ct = !1;
  function ht(e, t, l, a) {
    t.child = e === null ? Td(t, null, l, a) : En(t, e.child, l, a);
  }
  function Ud(e, t, l, a, u) {
    l = l.render;
    var i = t.ref;
    if ('ref' in a) {
      var s = {};
      for (var h in a) h !== 'ref' && (s[h] = a[h]);
    } else s = a;
    return (
      Ba(t),
      (a = zc(e, t, l, s, i, u)),
      (h = Nc()),
      e !== null && !ct
        ? (wc(e, t, u), Hl(e, t, u))
        : (ze && h && vc(t), (t.flags |= 1), ht(e, t, a, u), t.child)
    );
  }
  function Ld(e, t, l, a, u) {
    if (e === null) {
      var i = l.type;
      return typeof i == 'function' && !dc(i) && i.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = i), Hd(e, t, i, a, u))
        : ((e = xi(l.type, null, a, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !ao(e, u))) {
      var s = i.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : au), l(s, a) && e.ref === t.ref))
        return Hl(e, t, u);
    }
    return (t.flags |= 1), (e = jl(i, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function Hd(e, t, l, a, u) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (au(i, a) && e.ref === t.ref)
        if (((ct = !1), (t.pendingProps = a = i), ao(e, u))) (e.flags & 131072) !== 0 && (ct = !0);
        else return (t.lanes = e.lanes), Hl(e, t, u);
    }
    return Wc(e, t, l, a, u);
  }
  function Bd(e, t, l) {
    var a = t.pendingProps,
      u = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (u = t.child = e.child, i = 0; u !== null; )
            (i = i | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = i & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return qd(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ai(t, i !== null ? i.cachePool : null),
          i !== null ? Hs(t, i) : Cc(),
          Rd(t);
      else
        return (t.lanes = t.childLanes = 536870912), qd(e, t, i !== null ? i.baseLanes | l : l, l);
    } else
      i !== null
        ? (Ai(t, i.cachePool), Hs(t, i), ua(), (t.memoizedState = null))
        : (e !== null && Ai(t, null), Cc(), ua());
    return ht(e, t, u, l), t.child;
  }
  function qd(e, t, l, a) {
    var u = xc();
    return (
      (u = u === null ? null : { parent: it._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Ai(t, null),
      Cc(),
      Rd(t),
      e !== null && cu(e, t, a, !0),
      null
    );
  }
  function Zi(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, l, a, u) {
    return (
      Ba(t),
      (l = zc(e, t, l, a, void 0, u)),
      (a = Nc()),
      e !== null && !ct
        ? (wc(e, t, u), Hl(e, t, u))
        : (ze && a && vc(t), (t.flags |= 1), ht(e, t, l, u), t.child)
    );
  }
  function Yd(e, t, l, a, u, i) {
    return (
      Ba(t),
      (t.updateQueue = null),
      (l = qs(t, a, l, u)),
      Bs(e),
      (a = Nc()),
      e !== null && !ct
        ? (wc(e, t, i), Hl(e, t, i))
        : (ze && a && vc(t), (t.flags |= 1), ht(e, t, l, i), t.child)
    );
  }
  function Gd(e, t, l, a, u) {
    if ((Ba(t), t.stateNode === null)) {
      var i = dn,
        s = l.contextType;
      typeof s == 'object' && s !== null && (i = bt(s)),
        (i = new l(a, i)),
        (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = $c),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Rc(t),
        (s = l.contextType),
        (i.context = typeof s == 'object' && s !== null ? bt(s) : dn),
        (i.state = t.memoizedState),
        (s = l.getDerivedStateFromProps),
        typeof s == 'function' && (Jc(t, l, s, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' &&
            typeof i.componentWillMount != 'function') ||
          ((s = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
          s !== i.state && $c.enqueueReplaceState(i, i.state, null),
          vu(t, a, i, u),
          mu(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      i = t.stateNode;
      var h = t.memoizedProps,
        S = Ga(l, h);
      i.props = S;
      var j = i.context,
        q = l.contextType;
      (s = dn), typeof q == 'object' && q !== null && (s = bt(q));
      var X = l.getDerivedStateFromProps;
      (q = typeof X == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
        (h = t.pendingProps !== h),
        q ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((h || j !== s) && Dd(t, i, a, s)),
        (ea = !1);
      var N = t.memoizedState;
      (i.state = N),
        vu(t, a, i, u),
        mu(),
        (j = t.memoizedState),
        h || N !== j || ea
          ? (typeof X == 'function' && (Jc(t, l, X, a), (j = t.memoizedState)),
            (S = ea || Md(t, l, S, a, N, j, s))
              ? (q ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = j)),
            (i.props = a),
            (i.state = j),
            (i.context = s),
            (a = S))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1));
    } else {
      (i = t.stateNode),
        Mc(e, t),
        (s = t.memoizedProps),
        (q = Ga(l, s)),
        (i.props = q),
        (X = t.pendingProps),
        (N = i.context),
        (j = l.contextType),
        (S = dn),
        typeof j == 'object' && j !== null && (S = bt(j)),
        (h = l.getDerivedStateFromProps),
        (j = typeof h == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((s !== X || N !== S) && Dd(t, i, a, S)),
        (ea = !1),
        (N = t.memoizedState),
        (i.state = N),
        vu(t, a, i, u),
        mu();
      var U = t.memoizedState;
      s !== X || N !== U || ea || (e !== null && e.dependencies !== null && Mi(e.dependencies))
        ? (typeof h == 'function' && (Jc(t, l, h, a), (U = t.memoizedState)),
          (q =
            ea ||
            Md(t, l, q, a, N, U, S) ||
            (e !== null && e.dependencies !== null && Mi(e.dependencies)))
            ? (j ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(a, U, S),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(a, U, S)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (s === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (s === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = U)),
          (i.props = a),
          (i.state = U),
          (i.context = S),
          (a = q))
        : (typeof i.componentDidUpdate != 'function' ||
            (s === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (s === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Zi(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l = a && typeof l.getDerivedStateFromError != 'function' ? null : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = En(t, e.child, null, u)), (t.child = En(t, null, l, u)))
            : ht(e, t, l, u),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Hl(e, t, u)),
      e
    );
  }
  function Xd(e, t, l, a) {
    return iu(), (t.flags |= 256), ht(e, t, l, a), t.child;
  }
  var Fc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Pc(e) {
    return { baseLanes: e, cachePool: Cs() };
  }
  function Ic(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= el), e;
  }
  function Qd(e, t, l) {
    var a = t.pendingProps,
      u = !1,
      i = (t.flags & 128) !== 0,
      s;
    if (
      ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0),
      s && ((u = !0), (t.flags &= -129)),
      (s = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ze) {
        if ((u ? na(t) : ua(), ze)) {
          var h = Ie,
            S;
          if ((S = h)) {
            e: {
              for (S = h, h = pl; S.nodeType !== 8; ) {
                if (!h) {
                  h = null;
                  break e;
                }
                if (((S = ol(S.nextSibling)), S === null)) {
                  h = null;
                  break e;
                }
              }
              h = S;
            }
            h !== null
              ? ((t.memoizedState = {
                  dehydrated: h,
                  treeContext: Na !== null ? { id: Ol, overflow: zl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = Nt(18, null, null, 0)),
                (S.stateNode = h),
                (S.return = t),
                (t.child = S),
                (Rt = t),
                (Ie = null),
                (S = !0))
              : (S = !1);
          }
          S || La(t);
        }
        if (((h = t.memoizedState), h !== null && ((h = h.dehydrated), h !== null)))
          return Ho(h) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Ll(t);
      }
      return (
        (h = a.children),
        (a = a.fallback),
        u
          ? (ua(),
            (u = t.mode),
            (h = Ki({ mode: 'hidden', children: h }, u)),
            (a = za(a, u, l, null)),
            (h.return = t),
            (a.return = t),
            (h.sibling = a),
            (t.child = h),
            (u = t.child),
            (u.memoizedState = Pc(l)),
            (u.childLanes = Ic(e, s, l)),
            (t.memoizedState = Fc),
            a)
          : (na(t), eo(t, h))
      );
    }
    if (((S = e.memoizedState), S !== null && ((h = S.dehydrated), h !== null))) {
      if (i)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = to(e, t, l)))
          : t.memoizedState !== null
            ? (ua(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ua(),
              (u = a.fallback),
              (h = t.mode),
              (a = Ki({ mode: 'visible', children: a.children }, h)),
              (u = za(u, h, l, null)),
              (u.flags |= 2),
              (a.return = t),
              (u.return = t),
              (a.sibling = u),
              (t.child = a),
              En(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Pc(l)),
              (a.childLanes = Ic(e, s, l)),
              (t.memoizedState = Fc),
              (t = u));
      else if ((na(t), Ho(h))) {
        if (((s = h.nextSibling && h.nextSibling.dataset), s)) var j = s.dgst;
        (s = j),
          (a = Error(o(419))),
          (a.stack = ''),
          (a.digest = s),
          ru({ value: a, source: null, stack: null }),
          (t = to(e, t, l));
      } else if ((ct || cu(e, t, l, !1), (s = (l & e.childLanes) !== 0), ct || s)) {
        if (
          ((s = Ke),
          s !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : $n(a)),
            (a = (a & (s.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), sn(e, a), Bt(s, e, a), wd);
        h.data === '$?' || So(), (t = to(e, t, l));
      } else
        h.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Ie = ol(h.nextSibling)),
            (Rt = t),
            (ze = !0),
            (Ua = null),
            (pl = !1),
            e !== null &&
              ((Ft[Pt++] = Ol),
              (Ft[Pt++] = zl),
              (Ft[Pt++] = Na),
              (Ol = e.id),
              (zl = e.overflow),
              (Na = t)),
            (t = eo(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ua(),
        (u = a.fallback),
        (h = t.mode),
        (S = e.child),
        (j = S.sibling),
        (a = jl(S, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        j !== null ? (u = jl(j, u)) : ((u = za(u, h, l, null)), (u.flags |= 2)),
        (u.return = t),
        (a.return = t),
        (a.sibling = u),
        (t.child = a),
        (a = u),
        (u = t.child),
        (h = e.child.memoizedState),
        h === null
          ? (h = Pc(l))
          : ((S = h.cachePool),
            S !== null
              ? ((j = it._currentValue), (S = S.parent !== j ? { parent: j, pool: j } : S))
              : (S = Cs()),
            (h = { baseLanes: h.baseLanes | l, cachePool: S })),
        (u.memoizedState = h),
        (u.childLanes = Ic(e, s, l)),
        (t.memoizedState = Fc),
        a)
      : (na(t),
        (l = e.child),
        (e = l.sibling),
        (l = jl(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function eo(e, t) {
    return (t = Ki({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function Ki(e, t) {
    return (
      (e = Nt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function to(e, t, l) {
    return (
      En(t, e.child, null, l),
      (e = eo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), bc(e.return, t, l);
  }
  function lo(e, t, l, a, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = u));
  }
  function Zd(e, t, l) {
    var a = t.pendingProps,
      u = a.revealOrder,
      i = a.tail;
    if ((ht(e, t, a.children, l), (a = rt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Vd(e, l, t);
          else if (e.tag === 19) Vd(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((k(rt, a), u)) {
      case 'forwards':
        for (l = t.child, u = null; l !== null; )
          (e = l.alternate), e !== null && Xi(e) === null && (u = l), (l = l.sibling);
        (l = u),
          l === null ? ((u = t.child), (t.child = null)) : ((u = l.sibling), (l.sibling = null)),
          lo(t, !1, u, l, i);
        break;
      case 'backwards':
        for (l = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Xi(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = l), (l = u), (u = e);
        }
        lo(t, !0, l, null, i);
        break;
      case 'together':
        lo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (fa |= t.lanes), (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((cu(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = jl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        (e = e.sibling), (l = l.sibling = jl(e, e.pendingProps)), (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function ao(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Mi(e)));
  }
  function Wy(e, t, l) {
    switch (t.tag) {
      case 3:
        Qe(t, t.stateNode.containerInfo), Il(t, it, e.memoizedState.cache), iu();
        break;
      case 27:
      case 5:
        dl(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Il(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Qd(e, t, l)
              : (na(t), (e = Hl(e, t, l)), e !== null ? e.sibling : null);
        na(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (cu(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return Zd(e, t, l);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          k(rt, rt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Bd(e, t, l);
      case 24:
        Il(t, it, e.memoizedState.cache);
    }
    return Hl(e, t, l);
  }
  function Kd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ct = !0;
      else {
        if (!ao(e, l) && (t.flags & 128) === 0) return (ct = !1), Wy(e, t, l);
        ct = (e.flags & 131072) !== 0;
      }
    else (ct = !1), ze && (t.flags & 1048576) !== 0 && Es(t, Ri, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            u = a._init;
          if (((a = u(a._payload)), (t.type = a), typeof a == 'function'))
            dc(a)
              ? ((e = Ga(a, e)), (t.tag = 1), (t = Gd(null, t, a, e, l)))
              : ((t.tag = 0), (t = Wc(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === W)) {
                (t.tag = 11), (t = Ud(null, t, a, e, l));
                break e;
              } else if (u === se) {
                (t.tag = 14), (t = Ld(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = Qt(a) || a), Error(o(306, t, '')));
          }
        }
        return t;
      case 0:
        return Wc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (u = Ga(a, t.pendingProps)), Gd(e, t, a, u, l);
      case 3:
        e: {
          if ((Qe(t, t.stateNode.containerInfo), e === null)) throw Error(o(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          (u = i.element), Mc(e, t), vu(t, a, null, l);
          var s = t.memoizedState;
          if (
            ((a = s.cache),
            Il(t, it, a),
            a !== i.cache && Sc(t, [it], l, !0),
            mu(),
            (a = s.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: s.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = Xd(e, t, a, l);
              break e;
            } else if (a !== u) {
              (u = kt(Error(o(424)), t)), ru(u), (t = Xd(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Ie = ol(e.firstChild),
                  Rt = t,
                  ze = !0,
                  Ua = null,
                  pl = !0,
                  l = Td(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((iu(), a === u)) {
              t = Hl(e, t, l);
              break e;
            }
            ht(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Zi(e, t),
          e === null
            ? (l = Wh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ze ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = ir(ye.current).createElement(l)),
                (a[$] = t),
                (a[ae] = e),
                vt(a, l, e),
                _e(a),
                (t.stateNode = a))
            : (t.memoizedState = Wh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          dl(t),
          e === null &&
            ze &&
            ((a = t.stateNode = Jh(t.type, t.pendingProps, ye.current)),
            (Rt = t),
            (pl = !0),
            (u = Ie),
            ma(t.type) ? ((Bo = u), (Ie = ol(a.firstChild))) : (Ie = u)),
          ht(e, t, t.pendingProps.children, l),
          Zi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ze &&
            ((u = a = Ie) &&
              ((a = Tg(a, t.type, t.pendingProps, pl)),
              a !== null
                ? ((t.stateNode = a), (Rt = t), (Ie = ol(a.firstChild)), (pl = !1), (u = !0))
                : (u = !1)),
            u || La(t)),
          dl(t),
          (u = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (a = i.children),
          wo(u, i) ? (a = null) : s !== null && wo(u, s) && (t.flags |= 32),
          t.memoizedState !== null && ((u = zc(e, t, Xy, null, null, l)), (Hu._currentValue = u)),
          Zi(e, t),
          ht(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ze &&
            ((e = l = Ie) &&
              ((l = Rg(l, t.pendingProps, pl)),
              l !== null ? ((t.stateNode = l), (Rt = t), (Ie = null), (e = !0)) : (e = !1)),
            e || La(t)),
          null
        );
      case 13:
        return Qd(e, t, l);
      case 4:
        return (
          Qe(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = En(t, null, a, l)) : ht(e, t, a, l),
          t.child
        );
      case 11:
        return Ud(e, t, t.type, t.pendingProps, l);
      case 7:
        return ht(e, t, t.pendingProps, l), t.child;
      case 8:
        return ht(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return ht(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (a = t.pendingProps), Il(t, t.type, a.value), ht(e, t, a.children, l), t.child;
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          Ba(t),
          (u = bt(u)),
          (a = a(u)),
          (t.flags |= 1),
          ht(e, t, a, l),
          t.child
        );
      case 14:
        return Ld(e, t, t.type, t.pendingProps, l);
      case 15:
        return Hd(e, t, t.type, t.pendingProps, l);
      case 19:
        return Zd(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Ki(a, l)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l))
            : ((l = jl(e.child, a)), (l.ref = t.ref), (t.child = l), (l.return = t), (t = l)),
          t
        );
      case 22:
        return Bd(e, t, l);
      case 24:
        return (
          Ba(t),
          (a = bt(it)),
          e === null
            ? ((u = xc()),
              u === null &&
                ((u = Ke),
                (i = _c()),
                (u.pooledCache = i),
                i.refCount++,
                i !== null && (u.pooledCacheLanes |= l),
                (u = i)),
              (t.memoizedState = { parent: a, cache: u }),
              Rc(t),
              Il(t, it, u))
            : ((e.lanes & l) !== 0 && (Mc(e, t), vu(t, null, null, l), mu()),
              (u = e.memoizedState),
              (i = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  Il(t, it, a))
                : ((a = i.cache), Il(t, it, a), a !== u.cache && Sc(t, [it], l, !0))),
          ht(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Bl(e) {
    e.flags |= 4;
  }
  function Jd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !tm(t))) {
      if (
        ((t = It.current),
        t !== null &&
          ((Ce & 4194048) === Ce
            ? bl !== null
            : ((Ce & 62914560) !== Ce && (Ce & 536870912) === 0) || t !== bl))
      )
        throw ((du = Tc), js);
      e.flags |= 8192;
    }
  }
  function Ji(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Kn() : 536870912), (e.lanes |= t), (Mn |= t));
  }
  function Eu(e, t) {
    if (!ze)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Fy(e, t, l) {
    var a = t.pendingProps;
    switch ((yc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pe(t), null;
      case 1:
        return Pe(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          wl(it),
          $e(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (uu(t)
              ? Bl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Rs())),
          Pe(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (Bl(t), l !== null ? (Pe(t), Jd(t, l)) : (Pe(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (Bl(t), Pe(t), Jd(t, l))
                : (Pe(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && Bl(t), Pe(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Ra(t), (l = ye.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Bl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Pe(t), null;
          }
          (e = ce.current), uu(t) ? xs(t) : ((e = Jh(u, a, l)), (t.stateNode = e), Bl(t));
        }
        return Pe(t), null;
      case 5:
        if ((Ra(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Bl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return Pe(t), null;
          }
          if (((e = ce.current), uu(t))) xs(t);
          else {
            switch (((u = ir(ye.current)), e)) {
              case 1:
                e = u.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                e = u.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    e = u.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    e = u.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                    break;
                  case 'script':
                    (e = u.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof a.is == 'string'
                        ? u.createElement('select', { is: a.is })
                        : u.createElement('select')),
                      a.multiple ? (e.multiple = !0) : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == 'string'
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            (e[$] = t), (e[ae] = a);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((vt(e, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Bl(t);
          }
        }
        return Pe(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Bl(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(o(166));
          if (((e = ye.current), uu(t))) {
            if (((e = t.stateNode), (l = t.memoizedProps), (a = null), (u = Rt), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (e[$] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Yh(e.nodeValue, l)
              )),
              e || La(t);
          } else (e = ir(e).createTextNode(a)), (e[$] = t), (t.stateNode = e);
        }
        return Pe(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = uu(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(o(317));
              u[$] = t;
            } else iu(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Pe(t), (u = !1);
          } else
            (u = Rs()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (Ll(t), t) : (Ll(t), null);
        }
        if ((Ll(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (((l = a !== null), (e = e !== null && e.memoizedState !== null), l)) {
          (a = t.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== u && (a.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), Ji(t, t.updateQueue), Pe(t), null;
      case 4:
        return $e(), e === null && Co(t.stateNode.containerInfo), Pe(t), null;
      case 10:
        return wl(t.type), Pe(t), null;
      case 19:
        if ((F(rt), (u = t.memoizedState), u === null)) return Pe(t), null;
        if (((a = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (a) Eu(u, !1);
          else {
            if (et !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Xi(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Eu(u, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Ji(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    _s(l, e), (l = l.sibling);
                  return k(rt, (rt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Vt() > Wi &&
              ((t.flags |= 128), (a = !0), Eu(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Xi(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ji(t, e),
                Eu(u, !0),
                u.tail === null && u.tailMode === 'hidden' && !i.alternate && !ze)
              )
                return Pe(t), null;
            } else
              2 * Vt() - u.renderingStartTime > Wi &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), Eu(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = u.last), e !== null ? (e.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Vt()),
            (t.sibling = null),
            (e = rt.current),
            k(rt, a ? (e & 1) | 2 : e & 1),
            t)
          : (Pe(t), null);
      case 22:
      case 23:
        return (
          Ll(t),
          jc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Pe(t),
          (l = t.updateQueue),
          l !== null && Ji(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && F(qa),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          wl(it),
          Pe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Py(e, t) {
    switch ((yc(t), t.tag)) {
      case 1:
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          wl(it),
          $e(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return Ra(t), null;
      case 13:
        if ((Ll(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(o(340));
          iu();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return F(rt), null;
      case 4:
        return $e(), null;
      case 10:
        return wl(t.type), null;
      case 22:
      case 23:
        return (
          Ll(t),
          jc(),
          e !== null && F(qa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return wl(it), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $d(e, t) {
    switch ((yc(t), t.tag)) {
      case 3:
        wl(it), $e();
        break;
      case 26:
      case 27:
      case 5:
        Ra(t);
        break;
      case 4:
        $e();
        break;
      case 13:
        Ll(t);
        break;
      case 19:
        F(rt);
        break;
      case 10:
        wl(t.type);
        break;
      case 22:
      case 23:
        Ll(t), jc(), e !== null && F(qa);
        break;
      case 24:
        wl(it);
    }
  }
  function xu(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              s = l.inst;
            (a = i()), (s.destroy = a);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (h) {
      Xe(t, t.return, h);
    }
  }
  function ia(e, t, l) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst,
              h = s.destroy;
            if (h !== void 0) {
              (s.destroy = void 0), (u = t);
              var S = l,
                j = h;
              try {
                j();
              } catch (q) {
                Xe(u, S, q);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (q) {
      Xe(t, t.return, q);
    }
  }
  function kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Ls(t, l);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
  }
  function Wd(e, t, l) {
    (l.props = Ga(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      Xe(e, t, a);
    }
  }
  function Tu(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (u) {
      Xe(e, t, u);
    }
  }
  function Sl(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (u) {
          Xe(e, t, u);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (u) {
          Xe(e, t, u);
        }
      else l.current = null;
  }
  function Fd(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break e;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      Xe(e, e.return, u);
    }
  }
  function no(e, t, l) {
    try {
      var a = e.stateNode;
      bg(a, e.type, l, t), (a[ae] = t);
    } catch (u) {
      Xe(e, e.return, u);
    }
  }
  function Pd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ma(e.type)) || e.tag === 4
    );
  }
  function uo(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if ((e.tag === 27 && ma(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ur));
    else if (
      a !== 4 &&
      (a === 27 && ma(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (io(e, t, l), e = e.sibling; e !== null; ) io(e, t, l), (e = e.sibling);
  }
  function $i(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && ma(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for ($i(e, t, l), e = e.sibling; e !== null; ) $i(e, t, l), (e = e.sibling);
  }
  function Id(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      vt(t, a, l), (t[$] = e), (t[ae] = l);
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  var ql = !1,
    lt = !1,
    ro = !1,
    eh = typeof WeakSet == 'function' ? WeakSet : Set,
    ot = null;
  function Iy(e, t) {
    if (((e = e.containerInfo), (zo = dr), (e = ss(e)), uc(e))) {
      if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var s = 0,
              h = -1,
              S = -1,
              j = 0,
              q = 0,
              X = e,
              N = null;
            t: for (;;) {
              for (
                var U;
                X !== l || (u !== 0 && X.nodeType !== 3) || (h = s + u),
                  X !== i || (a !== 0 && X.nodeType !== 3) || (S = s + a),
                  X.nodeType === 3 && (s += X.nodeValue.length),
                  (U = X.firstChild) !== null;

              )
                (N = X), (X = U);
              for (;;) {
                if (X === e) break t;
                if (
                  (N === l && ++j === u && (h = s),
                  N === i && ++q === a && (S = s),
                  (U = X.nextSibling) !== null)
                )
                  break;
                (X = N), (N = X.parentNode);
              }
              X = U;
            }
            l = h === -1 || S === -1 ? null : { start: h, end: S };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (No = { focusedElem: e, selectionRange: l }, dr = !1, ot = t; ot !== null; )
      if (((t = ot), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        (e.return = t), (ot = e);
      else
        for (; ot !== null; ) {
          switch (((t = ot), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0),
                  (l = t),
                  (u = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var ve = Ga(l.type, u, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(ve, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (he) {
                  Xe(l, l.return, he);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) Lo(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Lo(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ot = e);
            break;
          }
          ot = t.return;
        }
  }
  function th(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ra(e, l), a & 4 && xu(5, l);
        break;
      case 1:
        if ((ra(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (s) {
              Xe(l, l.return, s);
            }
          else {
            var u = Ga(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              Xe(l, l.return, s);
            }
          }
        a & 64 && kd(l), a & 512 && Tu(l, l.return);
        break;
      case 3:
        if ((ra(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Ls(e, t);
          } catch (s) {
            Xe(l, l.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Id(l);
      case 26:
      case 5:
        ra(e, l), t === null && a & 4 && Fd(l), a & 512 && Tu(l, l.return);
        break;
      case 12:
        ra(e, l);
        break;
      case 13:
        ra(e, l),
          a & 4 && nh(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = cg.bind(null, l)), Mg(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || ql), !a)) {
          (t = (t !== null && t.memoizedState !== null) || lt), (u = ql);
          var i = lt;
          (ql = a),
            (lt = t) && !i ? ca(e, l, (l.subtreeFlags & 8772) !== 0) : ra(e, l),
            (ql = u),
            (lt = i);
        }
        break;
      case 30:
        break;
      default:
        ra(e, l);
    }
  }
  function lh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), lh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && De(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ke = null,
    Ct = !1;
  function Yl(e, t, l) {
    for (l = l.child; l !== null; ) ah(e, t, l), (l = l.sibling);
  }
  function ah(e, t, l) {
    if (pt && typeof pt.onCommitFiberUnmount == 'function')
      try {
        pt.onCommitFiberUnmount(xt, l);
      } catch {}
    switch (l.tag) {
      case 26:
        lt || Sl(l, t),
          Yl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        lt || Sl(l, t);
        var a = ke,
          u = Ct;
        ma(l.type) && ((ke = l.stateNode), (Ct = !1)),
          Yl(e, t, l),
          Nu(l.stateNode),
          (ke = a),
          (Ct = u);
        break;
      case 5:
        lt || Sl(l, t);
      case 6:
        if (((a = ke), (u = Ct), (ke = null), Yl(e, t, l), (ke = a), (Ct = u), ke !== null))
          if (Ct)
            try {
              (ke.nodeType === 9
                ? ke.body
                : ke.nodeName === 'HTML'
                  ? ke.ownerDocument.body
                  : ke
              ).removeChild(l.stateNode);
            } catch (i) {
              Xe(l, t, i);
            }
          else
            try {
              ke.removeChild(l.stateNode);
            } catch (i) {
              Xe(l, t, i);
            }
        break;
      case 18:
        ke !== null &&
          (Ct
            ? ((e = ke),
              Zh(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                l.stateNode,
              ),
              Gu(e))
            : Zh(ke, l.stateNode));
        break;
      case 4:
        (a = ke),
          (u = Ct),
          (ke = l.stateNode.containerInfo),
          (Ct = !0),
          Yl(e, t, l),
          (ke = a),
          (Ct = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        lt || ia(2, l, t), lt || ia(4, l, t), Yl(e, t, l);
        break;
      case 1:
        lt ||
          (Sl(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && Wd(l, t, a)),
          Yl(e, t, l);
        break;
      case 21:
        Yl(e, t, l);
        break;
      case 22:
        (lt = (a = lt) || l.memoizedState !== null), Yl(e, t, l), (lt = a);
        break;
      default:
        Yl(e, t, l);
    }
  }
  function nh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Gu(e);
      } catch (l) {
        Xe(t, t.return, l);
      }
  }
  function eg(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new eh()), t;
      case 22:
        return (
          (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new eh()), t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function co(e, t) {
    var l = eg(e);
    t.forEach(function (a) {
      var u = og.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(u, u));
    });
  }
  function wt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          i = e,
          s = t,
          h = s;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (ma(h.type)) {
                (ke = h.stateNode), (Ct = !1);
                break e;
              }
              break;
            case 5:
              (ke = h.stateNode), (Ct = !1);
              break e;
            case 3:
            case 4:
              (ke = h.stateNode.containerInfo), (Ct = !0);
              break e;
          }
          h = h.return;
        }
        if (ke === null) throw Error(o(160));
        ah(i, s, u),
          (ke = null),
          (Ct = !1),
          (i = u.alternate),
          i !== null && (i.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) uh(t, e), (t = t.sibling);
  }
  var cl = null;
  function uh(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wt(t, e), Ut(e), a & 4 && (ia(3, e, e.return), xu(3, e), ia(5, e, e.return));
        break;
      case 1:
        wt(t, e),
          Ut(e),
          a & 512 && (lt || l === null || Sl(l, l.return)),
          a & 64 &&
            ql &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var u = cl;
        if ((wt(t, e), Ut(e), a & 512 && (lt || l === null || Sl(l, l.return)), a & 4)) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type), (l = e.memoizedProps), (u = u.ownerDocument || u);
                  t: switch (a) {
                    case 'title':
                      (i = u.getElementsByTagName('title')[0]),
                        (!i ||
                          i[de] ||
                          i[$] ||
                          i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          i.hasAttribute('itemprop')) &&
                          ((i = u.createElement(a)),
                          u.head.insertBefore(i, u.querySelector('head > title'))),
                        vt(i, a, l),
                        (i[$] = e),
                        _e(i),
                        (a = i);
                      break e;
                    case 'link':
                      var s = Ih('link', 'href', u).get(a + (l.href || ''));
                      if (s) {
                        for (var h = 0; h < s.length; h++)
                          if (
                            ((i = s[h]),
                            i.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              i.getAttribute('title') === (l.title == null ? null : l.title) &&
                              i.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            s.splice(h, 1);
                            break t;
                          }
                      }
                      (i = u.createElement(a)), vt(i, a, l), u.head.appendChild(i);
                      break;
                    case 'meta':
                      if ((s = Ih('meta', 'content', u).get(a + (l.content || '')))) {
                        for (h = 0; h < s.length; h++)
                          if (
                            ((i = s[h]),
                            i.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              i.getAttribute('name') === (l.name == null ? null : l.name) &&
                              i.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            s.splice(h, 1);
                            break t;
                          }
                      }
                      (i = u.createElement(a)), vt(i, a, l), u.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (i[$] = e), _e(i), (a = i);
                }
                e.stateNode = a;
              } else em(u, e.type, e.stateNode);
            else e.stateNode = Ph(u, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null ? em(u, e.type, e.stateNode) : Ph(u, a, e.memoizedProps))
              : a === null && e.stateNode !== null && no(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        wt(t, e),
          Ut(e),
          a & 512 && (lt || l === null || Sl(l, l.return)),
          l !== null && a & 4 && no(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if ((wt(t, e), Ut(e), a & 512 && (lt || l === null || Sl(l, l.return)), e.flags & 32)) {
          u = e.stateNode;
          try {
            an(u, '');
          } catch (U) {
            Xe(e, e.return, U);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), no(e, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (ro = !0);
        break;
      case 6:
        if ((wt(t, e), Ut(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (U) {
            Xe(e, e.return, U);
          }
        }
        break;
      case 3:
        if (
          ((or = null),
          (u = cl),
          (cl = rr(t.containerInfo)),
          wt(t, e),
          (cl = u),
          Ut(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Gu(t.containerInfo);
          } catch (U) {
            Xe(e, e.return, U);
          }
        ro && ((ro = !1), ih(e));
        break;
      case 4:
        (a = cl), (cl = rr(e.stateNode.containerInfo)), wt(t, e), Ut(e), (cl = a);
        break;
      case 12:
        wt(t, e), Ut(e);
        break;
      case 13:
        wt(t, e),
          Ut(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (vo = Vt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), co(e, a)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var S = l !== null && l.memoizedState !== null,
          j = ql,
          q = lt;
        if (((ql = j || u), (lt = q || S), wt(t, e), (lt = q), (ql = j), Ut(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (l === null || S || ql || lt || Xa(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                S = l = t;
                try {
                  if (((i = S.stateNode), u))
                    (s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none');
                  else {
                    h = S.stateNode;
                    var X = S.memoizedProps.style,
                      N = X != null && X.hasOwnProperty('display') ? X.display : null;
                    h.style.display = N == null || typeof N == 'boolean' ? '' : ('' + N).trim();
                  }
                } catch (U) {
                  Xe(S, S.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = u ? '' : S.memoizedProps;
                } catch (U) {
                  Xe(S, S.return, U);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), co(e, l))));
        break;
      case 19:
        wt(t, e),
          Ut(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), co(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wt(t, e), Ut(e);
    }
  }
  function Ut(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Pd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              i = uo(e);
            $i(e, i, u);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (an(s, ''), (l.flags &= -33));
            var h = uo(e);
            $i(e, h, s);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo,
              j = uo(e);
            io(e, j, S);
            break;
          default:
            throw Error(o(161));
        }
      } catch (q) {
        Xe(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ih(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ih(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function ra(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) th(e, t.alternate, t), (t = t.sibling);
  }
  function Xa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), Xa(t);
          break;
        case 1:
          Sl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == 'function' && Wd(t, t.return, l), Xa(t);
          break;
        case 27:
          Nu(t.stateNode);
        case 26:
        case 5:
          Sl(t, t.return), Xa(t);
          break;
        case 22:
          t.memoizedState === null && Xa(t);
          break;
        case 30:
          Xa(t);
          break;
        default:
          Xa(t);
      }
      e = e.sibling;
    }
  }
  function ca(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = e,
        i = t,
        s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ca(u, i, l), xu(4, i);
          break;
        case 1:
          if ((ca(u, i, l), (a = i), (u = a.stateNode), typeof u.componentDidMount == 'function'))
            try {
              u.componentDidMount();
            } catch (j) {
              Xe(a, a.return, j);
            }
          if (((a = i), (u = a.updateQueue), u !== null)) {
            var h = a.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++) Us(S[u], h);
            } catch (j) {
              Xe(a, a.return, j);
            }
          }
          l && s & 64 && kd(i), Tu(i, i.return);
          break;
        case 27:
          Id(i);
        case 26:
        case 5:
          ca(u, i, l), l && a === null && s & 4 && Fd(i), Tu(i, i.return);
          break;
        case 12:
          ca(u, i, l);
          break;
        case 13:
          ca(u, i, l), l && s & 4 && nh(u, i);
          break;
        case 22:
          i.memoizedState === null && ca(u, i, l), Tu(i, i.return);
          break;
        case 30:
          break;
        default:
          ca(u, i, l);
      }
      t = t.sibling;
    }
  }
  function oo(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && ou(l));
  }
  function fo(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ou(e));
  }
  function _l(e, t, l, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) rh(e, t, l, a), (t = t.sibling);
  }
  function rh(e, t, l, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _l(e, t, l, a), u & 2048 && xu(9, t);
        break;
      case 1:
        _l(e, t, l, a);
        break;
      case 3:
        _l(e, t, l, a),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ou(e)));
        break;
      case 12:
        if (u & 2048) {
          _l(e, t, l, a), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              s = i.id,
              h = i.onPostCommit;
            typeof h == 'function' &&
              h(s, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (S) {
            Xe(t, t.return, S);
          }
        } else _l(e, t, l, a);
        break;
      case 13:
        _l(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          (s = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? _l(e, t, l, a)
              : Ru(e, t)
            : i._visibility & 2
              ? _l(e, t, l, a)
              : ((i._visibility |= 2), xn(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && oo(s, t);
        break;
      case 24:
        _l(e, t, l, a), u & 2048 && fo(t.alternate, t);
        break;
      default:
        _l(e, t, l, a);
    }
  }
  function xn(e, t, l, a, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        s = t,
        h = l,
        S = a,
        j = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          xn(i, s, h, S, u), xu(8, s);
          break;
        case 23:
          break;
        case 22:
          var q = s.stateNode;
          s.memoizedState !== null
            ? q._visibility & 2
              ? xn(i, s, h, S, u)
              : Ru(i, s)
            : ((q._visibility |= 2), xn(i, s, h, S, u)),
            u && j & 2048 && oo(s.alternate, s);
          break;
        case 24:
          xn(i, s, h, S, u), u && j & 2048 && fo(s.alternate, s);
          break;
        default:
          xn(i, s, h, S, u);
      }
      t = t.sibling;
    }
  }
  function Ru(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            Ru(l, a), u & 2048 && oo(a.alternate, a);
            break;
          case 24:
            Ru(l, a), u & 2048 && fo(a.alternate, a);
            break;
          default:
            Ru(l, a);
        }
        t = t.sibling;
      }
  }
  var Mu = 8192;
  function Tn(e) {
    if (e.subtreeFlags & Mu) for (e = e.child; e !== null; ) ch(e), (e = e.sibling);
  }
  function ch(e) {
    switch (e.tag) {
      case 26:
        Tn(e), e.flags & Mu && e.memoizedState !== null && qg(cl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Tn(e);
        break;
      case 3:
      case 4:
        var t = cl;
        (cl = rr(e.stateNode.containerInfo)), Tn(e), (cl = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Mu), (Mu = 16777216), Tn(e), (Mu = t))
            : Tn(e));
        break;
      default:
        Tn(e);
    }
  }
  function oh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Du(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (ot = a), sh(a, e);
        }
      oh(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) fh(e), (e = e.sibling);
  }
  function fh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Du(e), e.flags & 2048 && ia(9, e, e.return);
        break;
      case 3:
        Du(e);
        break;
      case 12:
        Du(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ki(e))
          : Du(e);
        break;
      default:
        Du(e);
    }
  }
  function ki(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (ot = a), sh(a, e);
        }
      oh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), ki(t);
          break;
        case 22:
          (l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), ki(t));
          break;
        default:
          ki(t);
      }
      e = e.sibling;
    }
  }
  function sh(e, t) {
    for (; ot !== null; ) {
      var l = ot;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ou(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (ot = a);
      else
        e: for (l = e; ot !== null; ) {
          a = ot;
          var u = a.sibling,
            i = a.return;
          if ((lh(a), a === l)) {
            ot = null;
            break e;
          }
          if (u !== null) {
            (u.return = i), (ot = u);
            break e;
          }
          ot = i;
        }
    }
  }
  var tg = {
      getCacheForType: function (e) {
        var t = bt(it),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    lg = typeof WeakMap == 'function' ? WeakMap : Map,
    Le = 0,
    Ke = null,
    Te = null,
    Ce = 0,
    He = 0,
    Lt = null,
    oa = !1,
    Rn = !1,
    so = !1,
    Gl = 0,
    et = 0,
    fa = 0,
    Qa = 0,
    ho = 0,
    el = 0,
    Mn = 0,
    Au = null,
    jt = null,
    mo = !1,
    vo = 0,
    Wi = 1 / 0,
    Fi = null,
    sa = null,
    mt = 0,
    da = null,
    Dn = null,
    An = 0,
    yo = 0,
    go = null,
    dh = null,
    Cu = 0,
    po = null;
  function Ht() {
    if ((Le & 2) !== 0 && Ce !== 0) return Ce & -Ce;
    if (B.T !== null) {
      var e = vn;
      return e !== 0 ? e : Ro();
    }
    return A();
  }
  function hh() {
    el === 0 && (el = (Ce & 536870912) === 0 || ze ? oi() : 536870912);
    var e = It.current;
    return e !== null && (e.flags |= 32), el;
  }
  function Bt(e, t, l) {
    ((e === Ke && (He === 2 || He === 9)) || e.cancelPendingCommit !== null) &&
      (Cn(e, 0), ha(e, Ce, el, !1)),
      Jl(e, l),
      ((Le & 2) === 0 || e !== Ke) &&
        (e === Ke && ((Le & 2) === 0 && (Qa |= l), et === 4 && ha(e, Ce, el, !1)), El(e));
  }
  function mh(e, t, l) {
    if ((Le & 6) !== 0) throw Error(o(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Kl(e, t),
      u = a ? ug(e, t) : _o(e, t, !0),
      i = a;
    do {
      if (u === 0) {
        Rn && !a && ha(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !ag(l))) {
          (u = _o(e, t, !1)), (i = !1);
          continue;
        }
        if (u === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
          else (s = e.pendingLanes & -536870913), (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            t = s;
            e: {
              var h = e;
              u = Au;
              var S = h.current.memoizedState.isDehydrated;
              if ((S && (Cn(h, s).flags |= 256), (s = _o(h, s, !1)), s !== 2)) {
                if (so && !S) {
                  (h.errorRecoveryDisabledLanes |= i), (Qa |= i), (u = 4);
                  break e;
                }
                (i = jt), (jt = u), i !== null && (jt === null ? (jt = i) : jt.push.apply(jt, i));
              }
              u = s;
            }
            if (((i = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Cn(e, 0), ha(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (i = u), i)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ha(a, t, el, !oa);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((u = vo + 300 - Vt()), 10 < u)) {
            if ((ha(a, t, el, !oa), Ml(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = Qh(
              vh.bind(null, a, l, jt, Fi, mo, t, el, Qa, Mn, oa, i, 2, -0, 0),
              u,
            );
            break e;
          }
          vh(a, l, jt, Fi, mo, t, el, Qa, Mn, oa, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    El(e);
  }
  function vh(e, t, l, a, u, i, s, h, S, j, q, X, N, U) {
    if (
      ((e.timeoutHandle = -1),
      (X = t.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((Lu = { stylesheets: null, count: 0, unsuspend: Bg }), ch(t), (X = Yg()), X !== null))
    ) {
      (e.cancelPendingCommit = X(Eh.bind(null, e, t, i, l, a, u, s, h, S, q, 1, N, U))),
        ha(e, i, s, !j);
      return;
    }
    Eh(e, t, i, l, a, u, s, h, S);
  }
  function ag(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            i = u.getSnapshot;
          u = u.value;
          try {
            if (!zt(i(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ha(e, t, l, a) {
    (t &= ~ho),
      (t &= ~Qa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var i = 31 - Tt(u),
        s = 1 << i;
      (a[i] = -1), (u &= ~s);
    }
    l !== 0 && Aa(e, l, t);
  }
  function Pi() {
    return (Le & 6) === 0 ? (ju(0), !1) : !0;
  }
  function bo() {
    if (Te !== null) {
      if (He === 0) var e = Te.return;
      else (e = Te), (Nl = Ha = null), Uc(e), (_n = null), (Su = 0), (e = Te);
      for (; e !== null; ) $d(e.alternate, e), (e = e.return);
      Te = null;
    }
  }
  function Cn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), _g(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      bo(),
      (Ke = e),
      (Te = l = jl(e.current, null)),
      (Ce = t),
      (He = 0),
      (Lt = null),
      (oa = !1),
      (Rn = Kl(e, t)),
      (so = !1),
      (Mn = el = ho = Qa = fa = et = 0),
      (jt = Au = null),
      (mo = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var u = 31 - Tt(a),
          i = 1 << u;
        (t |= e[u]), (a &= ~i);
      }
    return (Gl = t), Si(), l;
  }
  function yh(e, t) {
    (Se = null),
      (B.H = qi),
      t === su || t === Ci
        ? ((t = Ns()), (He = 3))
        : t === js
          ? ((t = Ns()), (He = 4))
          : (He =
              t === wd
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Lt = t),
      Te === null && ((et = 1), Vi(e, kt(t, e.current)));
  }
  function gh() {
    var e = B.H;
    return (B.H = qi), e === null ? qi : e;
  }
  function ph() {
    var e = B.A;
    return (B.A = tg), e;
  }
  function So() {
    (et = 4),
      oa || ((Ce & 4194048) !== Ce && It.current !== null) || (Rn = !0),
      ((fa & 134217727) === 0 && (Qa & 134217727) === 0) || Ke === null || ha(Ke, Ce, el, !1);
  }
  function _o(e, t, l) {
    var a = Le;
    Le |= 2;
    var u = gh(),
      i = ph();
    (Ke !== e || Ce !== t) && ((Fi = null), Cn(e, t)), (t = !1);
    var s = et;
    e: do
      try {
        if (He !== 0 && Te !== null) {
          var h = Te,
            S = Lt;
          switch (He) {
            case 8:
              bo(), (s = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              It.current === null && (t = !0);
              var j = He;
              if (((He = 0), (Lt = null), jn(e, h, S, j), l && Rn)) {
                s = 0;
                break e;
              }
              break;
            default:
              (j = He), (He = 0), (Lt = null), jn(e, h, S, j);
          }
        }
        ng(), (s = et);
        break;
      } catch (q) {
        yh(e, q);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Nl = Ha = null),
      (Le = a),
      (B.H = u),
      (B.A = i),
      Te === null && ((Ke = null), (Ce = 0), Si()),
      s
    );
  }
  function ng() {
    for (; Te !== null; ) bh(Te);
  }
  function ug(e, t) {
    var l = Le;
    Le |= 2;
    var a = gh(),
      u = ph();
    Ke !== e || Ce !== t ? ((Fi = null), (Wi = Vt() + 500), Cn(e, t)) : (Rn = Kl(e, t));
    e: do
      try {
        if (He !== 0 && Te !== null) {
          t = Te;
          var i = Lt;
          t: switch (He) {
            case 1:
              (He = 0), (Lt = null), jn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Os(i)) {
                (He = 0), (Lt = null), Sh(t);
                break;
              }
              (t = function () {
                (He !== 2 && He !== 9) || Ke !== e || (He = 7), El(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              Os(i) ? ((He = 0), (Lt = null), Sh(t)) : ((He = 0), (Lt = null), jn(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (Te.tag) {
                case 26:
                  s = Te.memoizedState;
                case 5:
                case 27:
                  var h = Te;
                  if (!s || tm(s)) {
                    (He = 0), (Lt = null);
                    var S = h.sibling;
                    if (S !== null) Te = S;
                    else {
                      var j = h.return;
                      j !== null ? ((Te = j), Ii(j)) : (Te = null);
                    }
                    break t;
                  }
              }
              (He = 0), (Lt = null), jn(e, t, i, 5);
              break;
            case 6:
              (He = 0), (Lt = null), jn(e, t, i, 6);
              break;
            case 8:
              bo(), (et = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        ig();
        break;
      } catch (q) {
        yh(e, q);
      }
    while (!0);
    return (
      (Nl = Ha = null),
      (B.H = a),
      (B.A = u),
      (Le = l),
      Te !== null ? 0 : ((Ke = null), (Ce = 0), Si(), et)
    );
  }
  function ig() {
    for (; Te !== null && !Gr(); ) bh(Te);
  }
  function bh(e) {
    var t = Kd(e.alternate, e, Gl);
    (e.memoizedProps = e.pendingProps), t === null ? Ii(e) : (Te = t);
  }
  function Sh(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Yd(l, t, t.pendingProps, t.type, void 0, Ce);
        break;
      case 11:
        t = Yd(l, t, t.pendingProps, t.type.render, t.ref, Ce);
        break;
      case 5:
        Uc(t);
      default:
        $d(l, t), (t = Te = _s(t, Gl)), (t = Kd(l, t, Gl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Ii(e) : (Te = t);
  }
  function jn(e, t, l, a) {
    (Nl = Ha = null), Uc(t), (_n = null), (Su = 0);
    var u = t.return;
    try {
      if (ky(e, u, t, l, Ce)) {
        (et = 1), Vi(e, kt(l, e.current)), (Te = null);
        return;
      }
    } catch (i) {
      if (u !== null) throw ((Te = u), i);
      (et = 1), Vi(e, kt(l, e.current)), (Te = null);
      return;
    }
    t.flags & 32768
      ? (ze || a === 1
          ? (e = !0)
          : Rn || (Ce & 536870912) !== 0
            ? (e = !1)
            : ((oa = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = It.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        _h(t, e))
      : Ii(t);
  }
  function Ii(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _h(t, oa);
        return;
      }
      e = t.return;
      var l = Fy(t.alternate, t, Gl);
      if (l !== null) {
        Te = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function _h(e, t) {
    do {
      var l = Py(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (Te = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Te = e;
        return;
      }
      Te = e = l;
    } while (e !== null);
    (et = 6), (Te = null);
  }
  function Eh(e, t, l, a, u, i, s, h, S) {
    e.cancelPendingCommit = null;
    do er();
    while (mt !== 0);
    if ((Le & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= fc),
        Ia(e, l, i, s, h, S),
        e === Ke && ((Te = Ke = null), (Ce = 0)),
        (Dn = t),
        (da = e),
        (An = l),
        (yo = i),
        (go = u),
        (dh = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            fg(Zt, function () {
              return Dh(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = B.T), (B.T = null), (u = P.p), (P.p = 2), (s = Le), (Le |= 4);
        try {
          Iy(e, t, l);
        } finally {
          (Le = s), (P.p = u), (B.T = a);
        }
      }
      (mt = 1), xh(), Th(), Rh();
    }
  }
  function xh() {
    if (mt === 1) {
      mt = 0;
      var e = da,
        t = Dn,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = B.T), (B.T = null);
        var a = P.p;
        P.p = 2;
        var u = Le;
        Le |= 4;
        try {
          uh(t, e);
          var i = No,
            s = ss(e.containerInfo),
            h = i.focusedElem,
            S = i.selectionRange;
          if (s !== h && h && h.ownerDocument && fs(h.ownerDocument.documentElement, h)) {
            if (S !== null && uc(h)) {
              var j = S.start,
                q = S.end;
              if ((q === void 0 && (q = j), 'selectionStart' in h))
                (h.selectionStart = j), (h.selectionEnd = Math.min(q, h.value.length));
              else {
                var X = h.ownerDocument || document,
                  N = (X && X.defaultView) || window;
                if (N.getSelection) {
                  var U = N.getSelection(),
                    ve = h.textContent.length,
                    he = Math.min(S.start, ve),
                    Ye = S.end === void 0 ? he : Math.min(S.end, ve);
                  !U.extend && he > Ye && ((s = Ye), (Ye = he), (he = s));
                  var D = os(h, he),
                    T = os(h, Ye);
                  if (
                    D &&
                    T &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== D.node ||
                      U.anchorOffset !== D.offset ||
                      U.focusNode !== T.node ||
                      U.focusOffset !== T.offset)
                  ) {
                    var C = X.createRange();
                    C.setStart(D.node, D.offset),
                      U.removeAllRanges(),
                      he > Ye
                        ? (U.addRange(C), U.extend(T.node, T.offset))
                        : (C.setEnd(T.node, T.offset), U.addRange(C));
                  }
                }
              }
            }
            for (X = [], U = h; (U = U.parentNode); )
              U.nodeType === 1 && X.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (typeof h.focus == 'function' && h.focus(), h = 0; h < X.length; h++) {
              var Y = X[h];
              (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
            }
          }
          (dr = !!zo), (No = zo = null);
        } finally {
          (Le = u), (P.p = a), (B.T = l);
        }
      }
      (e.current = t), (mt = 2);
    }
  }
  function Th() {
    if (mt === 2) {
      mt = 0;
      var e = da,
        t = Dn,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = B.T), (B.T = null);
        var a = P.p;
        P.p = 2;
        var u = Le;
        Le |= 4;
        try {
          th(e, t.alternate, t);
        } finally {
          (Le = u), (P.p = a), (B.T = l);
        }
      }
      mt = 3;
    }
  }
  function Rh() {
    if (mt === 4 || mt === 3) {
      (mt = 0), ni();
      var e = da,
        t = Dn,
        l = An,
        a = dh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (mt = 5)
        : ((mt = 0), (Dn = da = null), Mh(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (sa = null),
        E(l),
        (t = t.stateNode),
        pt && typeof pt.onCommitFiberRoot == 'function')
      )
        try {
          pt.onCommitFiberRoot(xt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = B.T), (u = P.p), (P.p = 2), (B.T = null);
        try {
          for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
            var h = a[s];
            i(h.value, { componentStack: h.stack });
          }
        } finally {
          (B.T = t), (P.p = u);
        }
      }
      (An & 3) !== 0 && er(),
        El(e),
        (u = e.pendingLanes),
        (l & 4194090) !== 0 && (u & 42) !== 0 ? (e === po ? Cu++ : ((Cu = 0), (po = e))) : (Cu = 0),
        ju(0);
    }
  }
  function Mh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ou(t)));
  }
  function er(e) {
    return xh(), Th(), Rh(), Dh();
  }
  function Dh() {
    if (mt !== 5) return !1;
    var e = da,
      t = yo;
    yo = 0;
    var l = E(An),
      a = B.T,
      u = P.p;
    try {
      (P.p = 32 > l ? 32 : l), (B.T = null), (l = go), (go = null);
      var i = da,
        s = An;
      if (((mt = 0), (Dn = da = null), (An = 0), (Le & 6) !== 0)) throw Error(o(331));
      var h = Le;
      if (
        ((Le |= 4),
        fh(i.current),
        rh(i, i.current, s, l),
        (Le = h),
        ju(0, !1),
        pt && typeof pt.onPostCommitFiberRoot == 'function')
      )
        try {
          pt.onPostCommitFiberRoot(xt, i);
        } catch {}
      return !0;
    } finally {
      (P.p = u), (B.T = a), Mh(e, t);
    }
  }
  function Ah(e, t, l) {
    (t = kt(l, t)), (t = kc(e.stateNode, t, 2)), (e = la(e, t, 2)), e !== null && (Jl(e, 2), El(e));
  }
  function Xe(e, t, l) {
    if (e.tag === 3) Ah(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ah(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (sa === null || !sa.has(a)))
          ) {
            (e = kt(l, e)),
              (l = zd(2)),
              (a = la(t, l, 2)),
              a !== null && (Nd(l, a, t, e), Jl(a, 2), El(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Eo(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new lg();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(l) || ((so = !0), u.add(l), (e = rg.bind(null, e, t, l)), t.then(e, e));
  }
  function rg(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ke === e &&
        (Ce & l) === l &&
        (et === 4 || (et === 3 && (Ce & 62914560) === Ce && 300 > Vt() - vo)
          ? (Le & 2) === 0 && Cn(e, 0)
          : (ho |= l),
        Mn === Ce && (Mn = 0)),
      El(e);
  }
  function Ch(e, t) {
    t === 0 && (t = Kn()), (e = sn(e, t)), e !== null && (Jl(e, t), El(e));
  }
  function cg(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Ch(e, l);
  }
  function og(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Ch(e, l);
  }
  function fg(e, t) {
    return il(e, t);
  }
  var tr = null,
    On = null,
    xo = !1,
    lr = !1,
    To = !1,
    Va = 0;
  function El(e) {
    e !== On && e.next === null && (On === null ? (tr = On = e) : (On = On.next = e)),
      (lr = !0),
      xo || ((xo = !0), dg());
  }
  function ju(e, t) {
    if (!To && lr) {
      To = !0;
      do
        for (var l = !1, a = tr; a !== null; ) {
          if (e !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var s = a.suspendedLanes,
                h = a.pingedLanes;
              (i = (1 << (31 - Tt(42 | e) + 1)) - 1),
                (i &= u & ~(s & ~h)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), Nh(a, i));
          } else
            (i = Ce),
              (i = Ml(
                a,
                a === Ke ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (i & 3) === 0 || Kl(a, i) || ((l = !0), Nh(a, i));
          a = a.next;
        }
      while (l);
      To = !1;
    }
  }
  function sg() {
    jh();
  }
  function jh() {
    lr = xo = !1;
    var e = 0;
    Va !== 0 && (Sg() && (e = Va), (Va = 0));
    for (var t = Vt(), l = null, a = tr; a !== null; ) {
      var u = a.next,
        i = Oh(a, t);
      i === 0
        ? ((a.next = null), l === null ? (tr = u) : (l.next = u), u === null && (On = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (lr = !0)),
        (a = u);
    }
    ju(e);
  }
  function Oh(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        u = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var s = 31 - Tt(i),
        h = 1 << s,
        S = u[s];
      S === -1
        ? ((h & l) === 0 || (h & a) !== 0) && (u[s] = Zn(h, t))
        : S <= t && (e.expiredLanes |= h),
        (i &= ~h);
    }
    if (
      ((t = Ke),
      (l = Ce),
      (l = Ml(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      l === 0 || (e === t && (He === 2 || He === 9)) || e.cancelPendingCommit !== null)
    )
      return a !== null && a !== null && Xn(a), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((l & 3) === 0 || Kl(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Xn(a), E(l))) {
        case 2:
        case 8:
          l = ii;
          break;
        case 32:
          l = Zt;
          break;
        case 268435456:
          l = Qn;
          break;
        default:
          l = Zt;
      }
      return (
        (a = zh.bind(null, e)), (l = il(l, a)), (e.callbackPriority = t), (e.callbackNode = l), t
      );
    }
    return a !== null && a !== null && Xn(a), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function zh(e, t) {
    if (mt !== 0 && mt !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (er() && e.callbackNode !== l) return null;
    var a = Ce;
    return (
      (a = Ml(e, e === Ke ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (mh(e, a, t),
          Oh(e, Vt()),
          e.callbackNode != null && e.callbackNode === l ? zh.bind(null, e) : null)
    );
  }
  function Nh(e, t) {
    if (er()) return null;
    mh(e, t, !0);
  }
  function dg() {
    Eg(function () {
      (Le & 6) !== 0 ? il(ui, sg) : jh();
    });
  }
  function Ro() {
    return Va === 0 && (Va = oi()), Va;
  }
  function wh(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : hi('' + e);
  }
  function Uh(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function hg(e, t, l, a, u) {
    if (t === 'submit' && l && l.stateNode === u) {
      var i = wh((u[ae] || null).action),
        s = a.submitter;
      s &&
        ((t = (t = s[ae] || null) ? wh(t.formAction) : s.getAttribute('formAction')),
        t !== null && ((i = t), (s = null)));
      var h = new gi('action', 'action', null, a, u);
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Va !== 0) {
                  var S = s ? Uh(u, s) : new FormData(u);
                  Vc(l, { pending: !0, data: S, method: u.method, action: i }, null, S);
                }
              } else
                typeof i == 'function' &&
                  (h.preventDefault(),
                  (S = s ? Uh(u, s) : new FormData(u)),
                  Vc(l, { pending: !0, data: S, method: u.method, action: i }, i, S));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Mo = 0; Mo < oc.length; Mo++) {
    var Do = oc[Mo],
      mg = Do.toLowerCase(),
      vg = Do[0].toUpperCase() + Do.slice(1);
    rl(mg, 'on' + vg);
  }
  rl(ms, 'onAnimationEnd'),
    rl(vs, 'onAnimationIteration'),
    rl(ys, 'onAnimationStart'),
    rl('dblclick', 'onDoubleClick'),
    rl('focusin', 'onFocus'),
    rl('focusout', 'onBlur'),
    rl(zy, 'onTransitionRun'),
    rl(Ny, 'onTransitionStart'),
    rl(wy, 'onTransitionCancel'),
    rl(gs, 'onTransitionEnd'),
    dt('onMouseEnter', ['mouseout', 'mouseover']),
    dt('onMouseLeave', ['mouseout', 'mouseover']),
    dt('onPointerEnter', ['pointerout', 'pointerover']),
    dt('onPointerLeave', ['pointerout', 'pointerover']),
    st('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    st(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    st('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    st('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    st(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    st(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var Ou =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    yg = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ou),
    );
  function Lh(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        u = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var h = a[s],
              S = h.instance,
              j = h.currentTarget;
            if (((h = h.listener), S !== i && u.isPropagationStopped())) break e;
            (i = h), (u.currentTarget = j);
            try {
              i(u);
            } catch (q) {
              Qi(q);
            }
            (u.currentTarget = null), (i = S);
          }
        else
          for (s = 0; s < a.length; s++) {
            if (
              ((h = a[s]),
              (S = h.instance),
              (j = h.currentTarget),
              (h = h.listener),
              S !== i && u.isPropagationStopped())
            )
              break e;
            (i = h), (u.currentTarget = j);
            try {
              i(u);
            } catch (q) {
              Qi(q);
            }
            (u.currentTarget = null), (i = S);
          }
      }
    }
  }
  function Re(e, t) {
    var l = t[ne];
    l === void 0 && (l = t[ne] = new Set());
    var a = e + '__bubble';
    l.has(a) || (Hh(t, e, 2, !1), l.add(a));
  }
  function Ao(e, t, l) {
    var a = 0;
    t && (a |= 4), Hh(l, e, a, t);
  }
  var ar = '_reactListening' + Math.random().toString(36).slice(2);
  function Co(e) {
    if (!e[ar]) {
      (e[ar] = !0),
        Dl.forEach(function (l) {
          l !== 'selectionchange' && (yg.has(l) || Ao(l, !1, e), Ao(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ar] || ((t[ar] = !0), Ao('selectionchange', !1, t));
    }
  }
  function Hh(e, t, l, a) {
    switch (rm(t)) {
      case 2:
        var u = Qg;
        break;
      case 8:
        u = Vg;
        break;
      default:
        u = Qo;
    }
    (l = u.bind(null, t, l, e)),
      (u = void 0),
      !Wr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: u })
          : e.addEventListener(t, l, !0)
        : u !== void 0
          ? e.addEventListener(t, l, { passive: u })
          : e.addEventListener(t, l, !1);
  }
  function jo(e, t, l, a, u) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var h = a.stateNode.containerInfo;
          if (h === u) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var S = s.tag;
              if ((S === 3 || S === 4) && s.stateNode.containerInfo === u) return;
              s = s.return;
            }
          for (; h !== null; ) {
            if (((s = we(h)), s === null)) return;
            if (((S = s.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = i = s;
              continue e;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    Vf(function () {
      var j = i,
        q = $r(l),
        X = [];
      e: {
        var N = ps.get(e);
        if (N !== void 0) {
          var U = gi,
            ve = e;
          switch (e) {
            case 'keypress':
              if (vi(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              U = fy;
              break;
            case 'focusin':
              (ve = 'focus'), (U = ec);
              break;
            case 'focusout':
              (ve = 'blur'), (U = ec);
              break;
            case 'beforeblur':
            case 'afterblur':
              U = ec;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              U = Jf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              U = Pv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              U = hy;
              break;
            case ms:
            case vs:
            case ys:
              U = ty;
              break;
            case gs:
              U = vy;
              break;
            case 'scroll':
            case 'scrollend':
              U = Wv;
              break;
            case 'wheel':
              U = gy;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              U = ay;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              U = kf;
              break;
            case 'toggle':
            case 'beforetoggle':
              U = by;
          }
          var he = (t & 4) !== 0,
            Ye = !he && (e === 'scroll' || e === 'scrollend'),
            D = he ? (N !== null ? N + 'Capture' : null) : N;
          he = [];
          for (var T = j, C; T !== null; ) {
            var Y = T;
            if (
              ((C = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                C === null ||
                D === null ||
                ((Y = Wn(T, D)), Y != null && he.push(zu(T, Y, C))),
              Ye)
            )
              break;
            T = T.return;
          }
          0 < he.length && ((N = new U(N, ve, null, l, q)), X.push({ event: N, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((N = e === 'mouseover' || e === 'pointerover'),
            (U = e === 'mouseout' || e === 'pointerout'),
            N && l !== Jr && (ve = l.relatedTarget || l.fromElement) && (we(ve) || ve[oe]))
          )
            break e;
          if (
            (U || N) &&
            ((N =
              q.window === q
                ? q
                : (N = q.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            U
              ? ((ve = l.relatedTarget || l.toElement),
                (U = j),
                (ve = ve ? we(ve) : null),
                ve !== null &&
                  ((Ye = d(ve)), (he = ve.tag), ve !== Ye || (he !== 5 && he !== 27 && he !== 6)) &&
                  (ve = null))
              : ((U = null), (ve = j)),
            U !== ve)
          ) {
            if (
              ((he = Jf),
              (Y = 'onMouseLeave'),
              (D = 'onMouseEnter'),
              (T = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((he = kf), (Y = 'onPointerLeave'), (D = 'onPointerEnter'), (T = 'pointer')),
              (Ye = U == null ? N : Ve(U)),
              (C = ve == null ? N : Ve(ve)),
              (N = new he(Y, T + 'leave', U, l, q)),
              (N.target = Ye),
              (N.relatedTarget = C),
              (Y = null),
              we(q) === j &&
                ((he = new he(D, T + 'enter', ve, l, q)),
                (he.target = C),
                (he.relatedTarget = Ye),
                (Y = he)),
              (Ye = Y),
              U && ve)
            )
              t: {
                for (he = U, D = ve, T = 0, C = he; C; C = zn(C)) T++;
                for (C = 0, Y = D; Y; Y = zn(Y)) C++;
                for (; 0 < T - C; ) (he = zn(he)), T--;
                for (; 0 < C - T; ) (D = zn(D)), C--;
                for (; T--; ) {
                  if (he === D || (D !== null && he === D.alternate)) break t;
                  (he = zn(he)), (D = zn(D));
                }
                he = null;
              }
            else he = null;
            U !== null && Bh(X, N, U, he, !1), ve !== null && Ye !== null && Bh(X, Ye, ve, he, !0);
          }
        }
        e: {
          if (
            ((N = j ? Ve(j) : window),
            (U = N.nodeName && N.nodeName.toLowerCase()),
            U === 'select' || (U === 'input' && N.type === 'file'))
          )
            var le = as;
          else if (ts(N))
            if (ns) le = Cy;
            else {
              le = Dy;
              var Ee = My;
            }
          else
            (U = N.nodeName),
              !U || U.toLowerCase() !== 'input' || (N.type !== 'checkbox' && N.type !== 'radio')
                ? j && Kr(j.elementType) && (le = as)
                : (le = Ay);
          if (le && (le = le(e, j))) {
            ls(X, le, l, q);
            break e;
          }
          Ee && Ee(e, N, j),
            e === 'focusout' &&
              j &&
              N.type === 'number' &&
              j.memoizedProps.value != null &&
              Zr(N, 'number', N.value);
        }
        switch (((Ee = j ? Ve(j) : window), e)) {
          case 'focusin':
            (ts(Ee) || Ee.contentEditable === 'true') && ((cn = Ee), (ic = j), (nu = null));
            break;
          case 'focusout':
            nu = ic = cn = null;
            break;
          case 'mousedown':
            rc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (rc = !1), ds(X, l, q);
            break;
          case 'selectionchange':
            if (Oy) break;
          case 'keydown':
          case 'keyup':
            ds(X, l, q);
        }
        var ie;
        if (lc)
          e: {
            switch (e) {
              case 'compositionstart':
                var me = 'onCompositionStart';
                break e;
              case 'compositionend':
                me = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                me = 'onCompositionUpdate';
                break e;
            }
            me = void 0;
          }
        else
          rn
            ? If(e, l) && (me = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (me = 'onCompositionStart');
        me &&
          (Wf &&
            l.locale !== 'ko' &&
            (rn || me !== 'onCompositionStart'
              ? me === 'onCompositionEnd' && rn && (ie = Zf())
              : ((Pl = q), (Fr = 'value' in Pl ? Pl.value : Pl.textContent), (rn = !0))),
          (Ee = nr(j, me)),
          0 < Ee.length &&
            ((me = new $f(me, e, null, l, q)),
            X.push({ event: me, listeners: Ee }),
            ie ? (me.data = ie) : ((ie = es(l)), ie !== null && (me.data = ie)))),
          (ie = _y ? Ey(e, l) : xy(e, l)) &&
            ((me = nr(j, 'onBeforeInput')),
            0 < me.length &&
              ((Ee = new $f('onBeforeInput', 'beforeinput', null, l, q)),
              X.push({ event: Ee, listeners: me }),
              (Ee.data = ie))),
          hg(X, e, j, l, q);
      }
      Lh(X, t);
    });
  }
  function zu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function nr(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var u = e,
        i = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          i === null ||
          ((u = Wn(e, l)),
          u != null && a.unshift(zu(e, u, i)),
          (u = Wn(e, t)),
          u != null && a.push(zu(e, u, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function zn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Bh(e, t, l, a, u) {
    for (var i = t._reactName, s = []; l !== null && l !== a; ) {
      var h = l,
        S = h.alternate,
        j = h.stateNode;
      if (((h = h.tag), S !== null && S === a)) break;
      (h !== 5 && h !== 26 && h !== 27) ||
        j === null ||
        ((S = j),
        u
          ? ((j = Wn(l, i)), j != null && s.unshift(zu(l, j, S)))
          : u || ((j = Wn(l, i)), j != null && s.push(zu(l, j, S)))),
        (l = l.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var gg = /\r\n?/g,
    pg = /\u0000|\uFFFD/g;
  function qh(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        gg,
        `
`,
      )
      .replace(pg, '');
  }
  function Yh(e, t) {
    return (t = qh(t)), qh(e) === t;
  }
  function ur() {}
  function qe(e, t, l, a, u, i) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || an(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && an(e, '' + a);
        break;
      case 'className':
        Oe(e, 'class', a);
        break;
      case 'tabIndex':
        Oe(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Oe(e, l, a);
        break;
      case 'style':
        Xf(e, a, i);
        break;
      case 'data':
        if (t !== 'object') {
          Oe(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        (a = hi('' + a)), e.setAttribute(l, a);
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && qe(e, t, 'name', u.name, u, null),
                qe(e, t, 'formEncType', u.formEncType, u, null),
                qe(e, t, 'formMethod', u.formMethod, u, null),
                qe(e, t, 'formTarget', u.formTarget, u, null))
              : (qe(e, t, 'encType', u.encType, u, null),
                qe(e, t, 'method', u.method, u, null),
                qe(e, t, 'target', u.target, u, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        (a = hi('' + a)), e.setAttribute(l, a);
        break;
      case 'onClick':
        a != null && (e.onclick = ur);
        break;
      case 'onScroll':
        a != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Re('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (l = hi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '' + a)
          : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(l, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case 'popover':
        Re('beforetoggle', e), Re('toggle', e), Al(e, 'popover', a);
        break;
      case 'xlinkActuate':
        Ze(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Ze(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Ze(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Ze(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Ze(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Ze(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Ze(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Ze(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Ze(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Al(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = $v.get(l) || l), Al(e, l, a));
    }
  }
  function Oo(e, t, l, a, u, i) {
    switch (l) {
      case 'style':
        Xf(e, a, i);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? an(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && an(e, '' + a);
        break;
      case 'onScroll':
        a != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Re('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = ur);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!$l.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((u = l.endsWith('Capture')),
              (t = l.slice(2, u ? l.length - 7 : void 0)),
              (i = e[ae] || null),
              (i = i != null ? i[l] : null),
              typeof i == 'function' && e.removeEventListener(t, i, u),
              typeof a == 'function')
            ) {
              typeof i != 'function' &&
                i !== null &&
                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, u);
              break e;
            }
            l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : Al(e, l, a);
          }
    }
  }
  function vt(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        Re('error', e), Re('load', e);
        var a = !1,
          u = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(o(137, t));
                default:
                  qe(e, t, i, s, l, null);
              }
          }
        u && qe(e, t, 'srcSet', l.srcSet, l, null), a && qe(e, t, 'src', l.src, l, null);
        return;
      case 'input':
        Re('invalid', e);
        var h = (i = s = u = null),
          S = null,
          j = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var q = l[a];
            if (q != null)
              switch (a) {
                case 'name':
                  u = q;
                  break;
                case 'type':
                  s = q;
                  break;
                case 'checked':
                  S = q;
                  break;
                case 'defaultChecked':
                  j = q;
                  break;
                case 'value':
                  i = q;
                  break;
                case 'defaultValue':
                  h = q;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (q != null) throw Error(o(137, t));
                  break;
                default:
                  qe(e, t, a, q, l, null);
              }
          }
        Bf(e, i, h, S, j, s, u, !1), si(e);
        return;
      case 'select':
        Re('invalid', e), (a = s = i = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((h = l[u]), h != null))
            switch (u) {
              case 'value':
                i = h;
                break;
              case 'defaultValue':
                s = h;
                break;
              case 'multiple':
                a = h;
              default:
                qe(e, t, u, h, l, null);
            }
        (t = i),
          (l = s),
          (e.multiple = !!a),
          t != null ? ln(e, !!a, t, !1) : l != null && ln(e, !!a, l, !0);
        return;
      case 'textarea':
        Re('invalid', e), (i = u = a = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((h = l[s]), h != null))
            switch (s) {
              case 'value':
                a = h;
                break;
              case 'defaultValue':
                u = h;
                break;
              case 'children':
                i = h;
                break;
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(o(91));
                break;
              default:
                qe(e, t, s, h, l, null);
            }
        Yf(e, a, u, i), si(e);
        return;
      case 'option':
        for (S in l)
          if (l.hasOwnProperty(S) && ((a = l[S]), a != null))
            switch (S) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                qe(e, t, S, a, l, null);
            }
        return;
      case 'dialog':
        Re('beforetoggle', e), Re('toggle', e), Re('cancel', e), Re('close', e);
        break;
      case 'iframe':
      case 'object':
        Re('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Ou.length; a++) Re(Ou[a], e);
        break;
      case 'image':
        Re('error', e), Re('load', e);
        break;
      case 'details':
        Re('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Re('error', e), Re('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (j in l)
          if (l.hasOwnProperty(j) && ((a = l[j]), a != null))
            switch (j) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, t));
              default:
                qe(e, t, j, a, l, null);
            }
        return;
      default:
        if (Kr(t)) {
          for (q in l)
            l.hasOwnProperty(q) && ((a = l[q]), a !== void 0 && Oo(e, t, q, a, l, void 0));
          return;
        }
    }
    for (h in l) l.hasOwnProperty(h) && ((a = l[h]), a != null && qe(e, t, h, a, l, null));
  }
  function bg(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var u = null,
          i = null,
          s = null,
          h = null,
          S = null,
          j = null,
          q = null;
        for (U in l) {
          var X = l[U];
          if (l.hasOwnProperty(U) && X != null)
            switch (U) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                S = X;
              default:
                a.hasOwnProperty(U) || qe(e, t, U, null, a, X);
            }
        }
        for (var N in a) {
          var U = a[N];
          if (((X = l[N]), a.hasOwnProperty(N) && (U != null || X != null)))
            switch (N) {
              case 'type':
                i = U;
                break;
              case 'name':
                u = U;
                break;
              case 'checked':
                j = U;
                break;
              case 'defaultChecked':
                q = U;
                break;
              case 'value':
                s = U;
                break;
              case 'defaultValue':
                h = U;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(o(137, t));
                break;
              default:
                U !== X && qe(e, t, N, U, a, X);
            }
        }
        Vr(e, s, h, S, j, q, i, u);
        return;
      case 'select':
        U = s = h = N = null;
        for (i in l)
          if (((S = l[i]), l.hasOwnProperty(i) && S != null))
            switch (i) {
              case 'value':
                break;
              case 'multiple':
                U = S;
              default:
                a.hasOwnProperty(i) || qe(e, t, i, null, a, S);
            }
        for (u in a)
          if (((i = a[u]), (S = l[u]), a.hasOwnProperty(u) && (i != null || S != null)))
            switch (u) {
              case 'value':
                N = i;
                break;
              case 'defaultValue':
                h = i;
                break;
              case 'multiple':
                s = i;
              default:
                i !== S && qe(e, t, u, i, a, S);
            }
        (t = h),
          (l = s),
          (a = U),
          N != null
            ? ln(e, !!l, N, !1)
            : !!a != !!l && (t != null ? ln(e, !!l, t, !0) : ln(e, !!l, l ? [] : '', !1));
        return;
      case 'textarea':
        U = N = null;
        for (h in l)
          if (((u = l[h]), l.hasOwnProperty(h) && u != null && !a.hasOwnProperty(h)))
            switch (h) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                qe(e, t, h, null, a, u);
            }
        for (s in a)
          if (((u = a[s]), (i = l[s]), a.hasOwnProperty(s) && (u != null || i != null)))
            switch (s) {
              case 'value':
                N = u;
                break;
              case 'defaultValue':
                U = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== i && qe(e, t, s, u, a, i);
            }
        qf(e, N, U);
        return;
      case 'option':
        for (var ve in l)
          if (((N = l[ve]), l.hasOwnProperty(ve) && N != null && !a.hasOwnProperty(ve)))
            switch (ve) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                qe(e, t, ve, null, a, N);
            }
        for (S in a)
          if (((N = a[S]), (U = l[S]), a.hasOwnProperty(S) && N !== U && (N != null || U != null)))
            switch (S) {
              case 'selected':
                e.selected = N && typeof N != 'function' && typeof N != 'symbol';
                break;
              default:
                qe(e, t, S, N, a, U);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var he in l)
          (N = l[he]),
            l.hasOwnProperty(he) && N != null && !a.hasOwnProperty(he) && qe(e, t, he, null, a, N);
        for (j in a)
          if (((N = a[j]), (U = l[j]), a.hasOwnProperty(j) && N !== U && (N != null || U != null)))
            switch (j) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (N != null) throw Error(o(137, t));
                break;
              default:
                qe(e, t, j, N, a, U);
            }
        return;
      default:
        if (Kr(t)) {
          for (var Ye in l)
            (N = l[Ye]),
              l.hasOwnProperty(Ye) &&
                N !== void 0 &&
                !a.hasOwnProperty(Ye) &&
                Oo(e, t, Ye, void 0, a, N);
          for (q in a)
            (N = a[q]),
              (U = l[q]),
              !a.hasOwnProperty(q) ||
                N === U ||
                (N === void 0 && U === void 0) ||
                Oo(e, t, q, N, a, U);
          return;
        }
    }
    for (var D in l)
      (N = l[D]),
        l.hasOwnProperty(D) && N != null && !a.hasOwnProperty(D) && qe(e, t, D, null, a, N);
    for (X in a)
      (N = a[X]),
        (U = l[X]),
        !a.hasOwnProperty(X) || N === U || (N == null && U == null) || qe(e, t, X, N, a, U);
  }
  var zo = null,
    No = null;
  function ir(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Gh(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Xh(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function wo(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Uo = null;
  function Sg() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Uo ? !1 : ((Uo = e), !0)) : ((Uo = null), !1);
  }
  var Qh = typeof setTimeout == 'function' ? setTimeout : void 0,
    _g = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Vh = typeof Promise == 'function' ? Promise : void 0,
    Eg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Vh < 'u'
          ? function (e) {
              return Vh.resolve(null).then(e).catch(xg);
            }
          : Qh;
  function xg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ma(e) {
    return e === 'head';
  }
  function Zh(e, t) {
    var l = t,
      a = 0,
      u = 0;
    do {
      var i = l.nextSibling;
      if ((e.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === '/$')) {
          if (0 < a && 8 > a) {
            l = a;
            var s = e.ownerDocument;
            if ((l & 1 && Nu(s.documentElement), l & 2 && Nu(s.body), l & 4))
              for (l = s.head, Nu(l), s = l.firstChild; s; ) {
                var h = s.nextSibling,
                  S = s.nodeName;
                s[de] ||
                  S === 'SCRIPT' ||
                  S === 'STYLE' ||
                  (S === 'LINK' && s.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(s),
                  (s = h);
              }
          }
          if (u === 0) {
            e.removeChild(i), Gu(t);
            return;
          }
          u--;
        } else l === '$' || l === '$?' || l === '$!' ? u++ : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    Gu(t);
  }
  function Lo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Lo(l), De(l);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function Tg(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var u = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[de])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((i = e.getAttribute('rel')),
                i === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                i !== u.rel ||
                e.getAttribute('href') !== (u.href == null || u.href === '' ? null : u.href) ||
                e.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((i = e.getAttribute('src')),
                (i !== (u.src == null ? null : u.src) ||
                  e.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  e.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  i &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var i = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && e.getAttribute('name') === i) return e;
      } else return e;
      if (((e = ol(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Rg(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = ol(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ho(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState === 'complete');
  }
  function Mg(e, t) {
    var l = e.ownerDocument;
    if (e.data !== '$?' || l.readyState === 'complete') t();
    else {
      var a = function () {
        t(), l.removeEventListener('DOMContentLoaded', a);
      };
      l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a);
    }
  }
  function ol(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var Bo = null;
  function Kh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e;
          t--;
        } else l === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Jh(e, t, l) {
    switch (((t = ir(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Nu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    De(e);
  }
  var tl = new Map(),
    $h = new Set();
  function rr(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Xl = P.d;
  P.d = { f: Dg, r: Ag, D: Cg, C: jg, L: Og, m: zg, X: wg, S: Ng, M: Ug };
  function Dg() {
    var e = Xl.f(),
      t = Pi();
    return e || t;
  }
  function Ag(e) {
    var t = Fe(e);
    t !== null && t.tag === 5 && t.type === 'form' ? md(t) : Xl.r(e);
  }
  var Nn = typeof document > 'u' ? null : document;
  function kh(e, t, l) {
    var a = Nn;
    if (a && typeof t == 'string' && t) {
      var u = $t(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof l == 'string' && (u += '[crossorigin="' + l + '"]'),
        $h.has(u) ||
          ($h.add(u),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement('link')), vt(t, 'link', e), _e(t), a.head.appendChild(t)));
    }
  }
  function Cg(e) {
    Xl.D(e), kh('dns-prefetch', e, null);
  }
  function jg(e, t) {
    Xl.C(e, t), kh('preconnect', e, t);
  }
  function Og(e, t, l) {
    Xl.L(e, t, l);
    var a = Nn;
    if (a && e && t) {
      var u = 'link[rel="preload"][as="' + $t(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + $t(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (u += '[imagesizes="' + $t(l.imageSizes) + '"]'))
        : (u += '[href="' + $t(e) + '"]');
      var i = u;
      switch (t) {
        case 'style':
          i = wn(e);
          break;
        case 'script':
          i = Un(e);
      }
      tl.has(i) ||
        ((e = b(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l,
        )),
        tl.set(i, e),
        a.querySelector(u) !== null ||
          (t === 'style' && a.querySelector(wu(i))) ||
          (t === 'script' && a.querySelector(Uu(i))) ||
          ((t = a.createElement('link')), vt(t, 'link', e), _e(t), a.head.appendChild(t)));
    }
  }
  function zg(e, t) {
    Xl.m(e, t);
    var l = Nn;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        u = 'link[rel="modulepreload"][as="' + $t(a) + '"][href="' + $t(e) + '"]',
        i = u;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          i = Un(e);
      }
      if (
        !tl.has(i) &&
        ((e = b({ rel: 'modulepreload', href: e }, t)), tl.set(i, e), l.querySelector(u) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Uu(i))) return;
        }
        (a = l.createElement('link')), vt(a, 'link', e), _e(a), l.head.appendChild(a);
      }
    }
  }
  function Ng(e, t, l) {
    Xl.S(e, t, l);
    var a = Nn;
    if (a && e) {
      var u = Ue(a).hoistableStyles,
        i = wn(e);
      t = t || 'default';
      var s = u.get(i);
      if (!s) {
        var h = { loading: 0, preload: null };
        if ((s = a.querySelector(wu(i)))) h.loading = 5;
        else {
          (e = b({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = tl.get(i)) && qo(e, l);
          var S = (s = a.createElement('link'));
          _e(S),
            vt(S, 'link', e),
            (S._p = new Promise(function (j, q) {
              (S.onload = j), (S.onerror = q);
            })),
            S.addEventListener('load', function () {
              h.loading |= 1;
            }),
            S.addEventListener('error', function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            cr(s, t, a);
        }
        (s = { type: 'stylesheet', instance: s, count: 1, state: h }), u.set(i, s);
      }
    }
  }
  function wg(e, t) {
    Xl.X(e, t);
    var l = Nn;
    if (l && e) {
      var a = Ue(l).hoistableScripts,
        u = Un(e),
        i = a.get(u);
      i ||
        ((i = l.querySelector(Uu(u))),
        i ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = tl.get(u)) && Yo(e, t),
          (i = l.createElement('script')),
          _e(i),
          vt(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        a.set(u, i));
    }
  }
  function Ug(e, t) {
    Xl.M(e, t);
    var l = Nn;
    if (l && e) {
      var a = Ue(l).hoistableScripts,
        u = Un(e),
        i = a.get(u);
      i ||
        ((i = l.querySelector(Uu(u))),
        i ||
          ((e = b({ src: e, async: !0, type: 'module' }, t)),
          (t = tl.get(u)) && Yo(e, t),
          (i = l.createElement('script')),
          _e(i),
          vt(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        a.set(u, i));
    }
  }
  function Wh(e, t, l, a) {
    var u = (u = ye.current) ? rr(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = wn(l.href)),
            (l = Ue(u).hoistableStyles),
            (a = l.get(t)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = wn(l.href);
          var i = Ue(u).hoistableStyles,
            s = i.get(e);
          if (
            (s ||
              ((u = u.ownerDocument || u),
              (s = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, s),
              (i = u.querySelector(wu(e))) && !i._p && ((s.instance = i), (s.state.loading = 5)),
              tl.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                tl.set(e, l),
                i || Lg(u, e, l, s.state))),
            t && a === null)
          )
            throw Error(o(528, ''));
          return s;
        }
        if (t && a !== null) throw Error(o(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Un(l)),
              (l = Ue(u).hoistableScripts),
              (a = l.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function wn(e) {
    return 'href="' + $t(e) + '"';
  }
  function wu(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Fh(e) {
    return b({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Lg(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        vt(t, 'link', l),
        _e(t),
        e.head.appendChild(t));
  }
  function Un(e) {
    return '[src="' + $t(e) + '"]';
  }
  function Uu(e) {
    return 'script[async]' + e;
  }
  function Ph(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + $t(l.href) + '"]');
          if (a) return (t.instance = a), _e(a), a;
          var u = b({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            _e(a),
            vt(a, 'style', u),
            cr(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          u = wn(l.href);
          var i = e.querySelector(wu(u));
          if (i) return (t.state.loading |= 4), (t.instance = i), _e(i), i;
          (a = Fh(l)),
            (u = tl.get(u)) && qo(a, u),
            (i = (e.ownerDocument || e).createElement('link')),
            _e(i);
          var s = i;
          return (
            (s._p = new Promise(function (h, S) {
              (s.onload = h), (s.onerror = S);
            })),
            vt(i, 'link', a),
            (t.state.loading |= 4),
            cr(i, l.precedence, e),
            (t.instance = i)
          );
        case 'script':
          return (
            (i = Un(l.src)),
            (u = e.querySelector(Uu(i)))
              ? ((t.instance = u), _e(u), u)
              : ((a = l),
                (u = tl.get(i)) && ((a = b({}, l)), Yo(a, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement('script')),
                _e(u),
                vt(u, 'link', a),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), cr(a, l.precedence, e));
    return t.instance;
  }
  function cr(e, t, l) {
    for (
      var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = a.length ? a[a.length - 1] : null,
        i = u,
        s = 0;
      s < a.length;
      s++
    ) {
      var h = a[s];
      if (h.dataset.precedence === t) i = h;
      else if (i !== u) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function qo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Yo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var or = null;
  function Ih(e, t, l) {
    if (or === null) {
      var a = new Map(),
        u = (or = new Map());
      u.set(l, a);
    } else (u = or), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), u = 0; u < l.length; u++) {
      var i = l[u];
      if (
        !(i[de] || i[$] || (e === 'link' && i.getAttribute('rel') === 'stylesheet')) &&
        i.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var s = i.getAttribute(t) || '';
        s = e + s;
        var h = a.get(s);
        h ? h.push(i) : a.set(s, [i]);
      }
    }
    return a;
  }
  function em(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null);
  }
  function Hg(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (e = t.disabled), typeof t.precedence == 'string' && e == null;
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function tm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Lu = null;
  function Bg() {}
  function qg(e, t, l) {
    if (Lu === null) throw Error(o(475));
    var a = Lu;
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = wn(l.href),
          i = e.querySelector(wu(u));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (a.count++, (a = fr.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = i),
            _e(i);
          return;
        }
        (i = e.ownerDocument || e),
          (l = Fh(l)),
          (u = tl.get(u)) && qo(l, u),
          (i = i.createElement('link')),
          _e(i);
        var s = i;
        (s._p = new Promise(function (h, S) {
          (s.onload = h), (s.onerror = S);
        })),
          vt(i, 'link', l),
          (t.instance = i);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = fr.bind(a)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function Yg() {
    if (Lu === null) throw Error(o(475));
    var e = Lu;
    return (
      e.stylesheets && e.count === 0 && Go(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Go(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function fr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Go(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var sr = null;
  function Go(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (sr = new Map()), t.forEach(Gg, e), (sr = null), fr.call(e));
  }
  function Gg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = sr.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), sr.set(e, l);
        for (
          var u = e.querySelectorAll('link[data-precedence],style[data-precedence]'), i = 0;
          i < u.length;
          i++
        ) {
          var s = u[i];
          (s.nodeName === 'LINK' || s.getAttribute('media') !== 'not all') &&
            (l.set(s.dataset.precedence, s), (a = s));
        }
        a && l.set(null, a);
      }
      (u = t.instance),
        (s = u.getAttribute('data-precedence')),
        (i = l.get(s) || a),
        i === a && l.set(null, u),
        l.set(s, u),
        this.count++,
        (a = fr.bind(this)),
        u.addEventListener('load', a),
        u.addEventListener('error', a),
        i
          ? i.parentNode.insertBefore(u, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Hu = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0,
  };
  function Xg(e, t, l, a, u, i, s, h) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Jn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Jn(0)),
      (this.hiddenUpdates = Jn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = i),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function lm(e, t, l, a, u, i, s, h, S, j, q, X) {
    return (
      (e = new Xg(e, t, l, s, h, S, j, X)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = Nt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = _c()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Rc(i),
      e
    );
  }
  function am(e) {
    return e ? ((e = dn), e) : dn;
  }
  function nm(e, t, l, a, u, i) {
    (u = am(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ta(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = la(e, a, t)),
      l !== null && (Bt(l, e, t), hu(l, e, t));
  }
  function um(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Xo(e, t) {
    um(e, t), (e = e.alternate) && um(e, t);
  }
  function im(e) {
    if (e.tag === 13) {
      var t = sn(e, 67108864);
      t !== null && Bt(t, e, 67108864), Xo(e, 67108864);
    }
  }
  var dr = !0;
  function Qg(e, t, l, a) {
    var u = B.T;
    B.T = null;
    var i = P.p;
    try {
      (P.p = 2), Qo(e, t, l, a);
    } finally {
      (P.p = i), (B.T = u);
    }
  }
  function Vg(e, t, l, a) {
    var u = B.T;
    B.T = null;
    var i = P.p;
    try {
      (P.p = 8), Qo(e, t, l, a);
    } finally {
      (P.p = i), (B.T = u);
    }
  }
  function Qo(e, t, l, a) {
    if (dr) {
      var u = Vo(a);
      if (u === null) jo(e, t, a, hr, l), cm(e, a);
      else if (Kg(u, e, t, l, a)) a.stopPropagation();
      else if ((cm(e, a), t & 4 && -1 < Zg.indexOf(e))) {
        for (; u !== null; ) {
          var i = Fe(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var s = vl(i.pendingLanes);
                  if (s !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; s; ) {
                      var S = 1 << (31 - Tt(s));
                      (h.entanglements[1] |= S), (s &= ~S);
                    }
                    El(i), (Le & 6) === 0 && ((Wi = Vt() + 500), ju(0));
                  }
                }
                break;
              case 13:
                (h = sn(i, 2)), h !== null && Bt(h, i, 2), Pi(), Xo(i, 2);
            }
          if (((i = Vo(a)), i === null && jo(e, t, a, hr, l), i === u)) break;
          u = i;
        }
        u !== null && a.stopPropagation();
      } else jo(e, t, a, null, l);
    }
  }
  function Vo(e) {
    return (e = $r(e)), Zo(e);
  }
  var hr = null;
  function Zo(e) {
    if (((hr = null), (e = we(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (hr = e), null;
  }
  function rm(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Xr()) {
          case ui:
            return 2;
          case ii:
            return 8;
          case Zt:
          case Ma:
            return 32;
          case Qn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ko = !1,
    va = null,
    ya = null,
    ga = null,
    Bu = new Map(),
    qu = new Map(),
    pa = [],
    Zg =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function cm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        va = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ya = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ga = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Bu.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        qu.delete(t.pointerId);
    }
  }
  function Yu(e, t, l, a, u, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [u],
        }),
        t !== null && ((t = Fe(t)), t !== null && im(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Kg(e, t, l, a, u) {
    switch (t) {
      case 'focusin':
        return (va = Yu(va, e, t, l, a, u)), !0;
      case 'dragenter':
        return (ya = Yu(ya, e, t, l, a, u)), !0;
      case 'mouseover':
        return (ga = Yu(ga, e, t, l, a, u)), !0;
      case 'pointerover':
        var i = u.pointerId;
        return Bu.set(i, Yu(Bu.get(i) || null, e, t, l, a, u)), !0;
      case 'gotpointercapture':
        return (i = u.pointerId), qu.set(i, Yu(qu.get(i) || null, e, t, l, a, u)), !0;
    }
    return !1;
  }
  function om(e) {
    var t = we(e.target);
    if (t !== null) {
      var l = d(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = g(l)), t !== null)) {
            (e.blockedOn = t),
              L(e.priority, function () {
                if (l.tag === 13) {
                  var a = Ht();
                  a = $n(a);
                  var u = sn(l, a);
                  u !== null && Bt(u, l, a), Xo(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Vo(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Jr = a), l.target.dispatchEvent(a), (Jr = null);
      } else return (t = Fe(l)), t !== null && im(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function fm(e, t, l) {
    mr(e) && l.delete(t);
  }
  function Jg() {
    (Ko = !1),
      va !== null && mr(va) && (va = null),
      ya !== null && mr(ya) && (ya = null),
      ga !== null && mr(ga) && (ga = null),
      Bu.forEach(fm),
      qu.forEach(fm);
  }
  function vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ko || ((Ko = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, Jg)));
  }
  var yr = null;
  function sm(e) {
    yr !== e &&
      ((yr = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        yr === e && (yr = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            u = e[t + 2];
          if (typeof a != 'function') {
            if (Zo(a || l) === null) continue;
            break;
          }
          var i = Fe(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Vc(i, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function Gu(e) {
    function t(S) {
      return vr(S, e);
    }
    va !== null && vr(va, e),
      ya !== null && vr(ya, e),
      ga !== null && vr(ga, e),
      Bu.forEach(t),
      qu.forEach(t);
    for (var l = 0; l < pa.length; l++) {
      var a = pa[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < pa.length && ((l = pa[0]), l.blockedOn === null); )
      om(l), l.blockedOn === null && pa.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          i = l[a + 1],
          s = u[ae] || null;
        if (typeof i == 'function') s || sm(l);
        else if (s) {
          var h = null;
          if (i && i.hasAttribute('formAction')) {
            if (((u = i), (s = i[ae] || null))) h = s.formAction;
            else if (Zo(u) !== null) continue;
          } else h = s.action;
          typeof h == 'function' ? (l[a + 1] = h) : (l.splice(a, 3), (a -= 3)), sm(l);
        }
      }
  }
  function Jo(e) {
    this._internalRoot = e;
  }
  (gr.prototype.render = Jo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var l = t.current,
        a = Ht();
      nm(l, a, e, t, null, null);
    }),
    (gr.prototype.unmount = Jo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          nm(e.current, 2, null, e, null, null), Pi(), (t[oe] = null);
        }
      });
  function gr(e) {
    this._internalRoot = e;
  }
  gr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = A();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < pa.length && t !== 0 && t < pa[l].priority; l++);
      pa.splice(l, 0, e), l === 0 && om(e);
    }
  };
  var dm = r.version;
  if (dm !== '19.1.0') throw Error(o(527, dm, '19.1.0'));
  P.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(o(188))
        : ((e = Object.keys(e).join(',')), Error(o(268, e)));
    return (e = m(t)), (e = e !== null ? v(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var $g = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: B,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pr.isDisabled && pr.supportsFiber)
      try {
        (xt = pr.inject($g)), (pt = pr);
      } catch {}
  }
  return (
    (Qu.createRoot = function (e, t) {
      if (!f(e)) throw Error(o(299));
      var l = !1,
        a = '',
        u = Ad,
        i = Cd,
        s = jd,
        h = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)),
        (t = lm(e, 1, !1, null, null, l, a, u, i, s, h, null)),
        (e[oe] = t.current),
        Co(e),
        new Jo(t)
      );
    }),
    (Qu.hydrateRoot = function (e, t, l) {
      if (!f(e)) throw Error(o(299));
      var a = !1,
        u = '',
        i = Ad,
        s = Cd,
        h = jd,
        S = null,
        j = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (s = l.onCaughtError),
          l.onRecoverableError !== void 0 && (h = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (S = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (j = l.formState)),
        (t = lm(e, 1, !0, t, l ?? null, a, u, i, s, h, S, j)),
        (t.context = am(null)),
        (l = t.current),
        (a = Ht()),
        (a = $n(a)),
        (u = ta(a)),
        (u.callback = null),
        la(l, u, a),
        (l = a),
        (t.current.lanes = l),
        Jl(t, l),
        El(t),
        (e[oe] = t.current),
        Co(e),
        new gr(t)
      );
    }),
    (Qu.version = '19.1.0'),
    Qu
  );
}
var Em;
function a0() {
  if (Em) return Wo.exports;
  Em = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (Wo.exports = l0()), Wo.exports;
}
var n0 = a0(),
  Vu = {},
  xm;
function u0() {
  if (xm) return Vu;
  (xm = 1),
    Object.defineProperty(Vu, '__esModule', { value: !0 }),
    (Vu.parse = g),
    (Vu.serialize = v);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    d = (() => {
      const R = function () {};
      return (R.prototype = Object.create(null)), R;
    })();
  function g(R, O) {
    const z = new d(),
      K = R.length;
    if (K < 2) return z;
    const H = (O == null ? void 0 : O.decode) || b;
    let G = 0;
    do {
      const J = R.indexOf('=', G);
      if (J === -1) break;
      const V = R.indexOf(';', G),
        W = V === -1 ? K : V;
      if (J > W) {
        G = R.lastIndexOf(';', J - 1) + 1;
        continue;
      }
      const x = p(R, G, J),
        I = m(R, J, x),
        se = R.slice(x, I);
      if (z[se] === void 0) {
        let ee = p(R, J + 1, W),
          ge = m(R, W, ee);
        const Ne = H(R.slice(ee, ge));
        z[se] = Ne;
      }
      G = W + 1;
    } while (G < K);
    return z;
  }
  function p(R, O, z) {
    do {
      const K = R.charCodeAt(O);
      if (K !== 32 && K !== 9) return O;
    } while (++O < z);
    return z;
  }
  function m(R, O, z) {
    for (; O > z; ) {
      const K = R.charCodeAt(--O);
      if (K !== 32 && K !== 9) return O + 1;
    }
    return z;
  }
  function v(R, O, z) {
    const K = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!n.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
    const H = K(O);
    if (!r.test(H)) throw new TypeError(`argument val is invalid: ${O}`);
    let G = R + '=' + H;
    if (!z) return G;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge)) throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      G += '; Max-Age=' + z.maxAge;
    }
    if (z.domain) {
      if (!c.test(z.domain)) throw new TypeError(`option domain is invalid: ${z.domain}`);
      G += '; Domain=' + z.domain;
    }
    if (z.path) {
      if (!o.test(z.path)) throw new TypeError(`option path is invalid: ${z.path}`);
      G += '; Path=' + z.path;
    }
    if (z.expires) {
      if (!M(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      G += '; Expires=' + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (G += '; HttpOnly'),
      z.secure && (G += '; Secure'),
      z.partitioned && (G += '; Partitioned'),
      z.priority)
    )
      switch (typeof z.priority == 'string' ? z.priority.toLowerCase() : void 0) {
        case 'low':
          G += '; Priority=Low';
          break;
        case 'medium':
          G += '; Priority=Medium';
          break;
        case 'high':
          G += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (typeof z.sameSite == 'string' ? z.sameSite.toLowerCase() : z.sameSite) {
        case !0:
        case 'strict':
          G += '; SameSite=Strict';
          break;
        case 'lax':
          G += '; SameSite=Lax';
          break;
        case 'none':
          G += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return G;
  }
  function b(R) {
    if (R.indexOf('%') === -1) return R;
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }
  function M(R) {
    return f.call(R) === '[object Date]';
  }
  return Vu;
}
u0();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var cv = (n) => {
    throw TypeError(n);
  },
  i0 = (n, r, c) => r.has(n) || cv('Cannot ' + c),
  ef = (n, r, c) => (i0(n, r, 'read from private field'), c ? c.call(n) : r.get(n)),
  r0 = (n, r, c) =>
    r.has(n)
      ? cv('Cannot add the same private member more than once')
      : r instanceof WeakSet
        ? r.add(n)
        : r.set(n, c),
  Tm = 'popstate';
function c0(n = {}) {
  function r(o, f) {
    let { pathname: d, search: g, hash: p } = o.location;
    return Fu(
      '',
      { pathname: d, search: g, hash: p },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || 'default',
    );
  }
  function c(o, f) {
    return typeof f == 'string' ? f : xa(f);
  }
  return f0(r, c, null, n);
}
function Me(n, r) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(r);
}
function ut(n, r) {
  if (!n) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function o0() {
  return Math.random().toString(36).substring(2, 10);
}
function Rm(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function Fu(n, r, c = null, o) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Ta(r) : r),
    state: c,
    key: (r && r.key) || o || o0(),
  };
}
function xa({ pathname: n = '/', search: r = '', hash: c = '' }) {
  return (
    r && r !== '?' && (n += r.charAt(0) === '?' ? r : '?' + r),
    c && c !== '#' && (n += c.charAt(0) === '#' ? c : '#' + c),
    n
  );
}
function Ta(n) {
  let r = {};
  if (n) {
    let c = n.indexOf('#');
    c >= 0 && ((r.hash = n.substring(c)), (n = n.substring(0, c)));
    let o = n.indexOf('?');
    o >= 0 && ((r.search = n.substring(o)), (n = n.substring(0, o))), n && (r.pathname = n);
  }
  return r;
}
function f0(n, r, c, o = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = o,
    g = f.history,
    p = 'POP',
    m = null,
    v = b();
  v == null && ((v = 0), g.replaceState({ ...g.state, idx: v }, ''));
  function b() {
    return (g.state || { idx: null }).idx;
  }
  function M() {
    p = 'POP';
    let H = b(),
      G = H == null ? null : H - v;
    (v = H), m && m({ action: p, location: K.location, delta: G });
  }
  function R(H, G) {
    p = 'PUSH';
    let J = Fu(K.location, H, G);
    v = b() + 1;
    let V = Rm(J, v),
      W = K.createHref(J);
    try {
      g.pushState(V, '', W);
    } catch (x) {
      if (x instanceof DOMException && x.name === 'DataCloneError') throw x;
      f.location.assign(W);
    }
    d && m && m({ action: p, location: K.location, delta: 1 });
  }
  function O(H, G) {
    p = 'REPLACE';
    let J = Fu(K.location, H, G);
    v = b();
    let V = Rm(J, v),
      W = K.createHref(J);
    g.replaceState(V, '', W), d && m && m({ action: p, location: K.location, delta: 0 });
  }
  function z(H) {
    let G = f.location.origin !== 'null' ? f.location.origin : f.location.href,
      J = typeof H == 'string' ? H : xa(H);
    return (
      (J = J.replace(/ $/, '%20')),
      Me(G, `No window.location.(origin|href) available to create URL for href: ${J}`),
      new URL(J, G)
    );
  }
  let K = {
    get action() {
      return p;
    },
    get location() {
      return n(f, g);
    },
    listen(H) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        f.addEventListener(Tm, M),
        (m = H),
        () => {
          f.removeEventListener(Tm, M), (m = null);
        }
      );
    },
    createHref(H) {
      return r(f, H);
    },
    createURL: z,
    encodeLocation(H) {
      let G = z(H);
      return { pathname: G.pathname, search: G.search, hash: G.hash };
    },
    push: R,
    replace: O,
    go(H) {
      return g.go(H);
    },
  };
  return K;
}
var $u,
  Mm = class {
    constructor(n) {
      if ((r0(this, $u, new Map()), n)) for (let [r, c] of n) this.set(r, c);
    }
    get(n) {
      if (ef(this, $u).has(n)) return ef(this, $u).get(n);
      if (n.defaultValue !== void 0) return n.defaultValue;
      throw new Error('No value found for context');
    }
    set(n, r) {
      ef(this, $u).set(n, r);
    }
  };
$u = new WeakMap();
var s0 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function d0(n) {
  return s0.has(n);
}
var h0 = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'unstable_middleware',
  'children',
]);
function m0(n) {
  return h0.has(n);
}
function v0(n) {
  return n.index === !0;
}
function Mr(n, r, c = [], o = {}) {
  return n.map((f, d) => {
    let g = [...c, String(d)],
      p = typeof f.id == 'string' ? f.id : g.join('-');
    if (
      (Me(f.index !== !0 || !f.children, 'Cannot specify children on an index route'),
      Me(
        !o[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`,
      ),
      v0(f))
    ) {
      let m = { ...f, ...r(f), id: p };
      return (o[p] = m), m;
    } else {
      let m = { ...f, ...r(f), id: p, children: void 0 };
      return (o[p] = m), f.children && (m.children = Mr(f.children, r, g, o)), m;
    }
  });
}
function Ea(n, r, c = '/') {
  return xr(n, r, c, !1);
}
function xr(n, r, c, o) {
  let f = typeof r == 'string' ? Ta(r) : r,
    d = ul(f.pathname || '/', c);
  if (d == null) return null;
  let g = ov(n);
  g0(g);
  let p = null;
  for (let m = 0; p == null && m < g.length; ++m) {
    let v = A0(d);
    p = M0(g[m], v, o);
  }
  return p;
}
function y0(n, r) {
  let { route: c, pathname: o, params: f } = n;
  return { id: c.id, pathname: o, params: f, data: r[c.id], handle: c.handle };
}
function ov(n, r = [], c = [], o = '') {
  let f = (d, g, p) => {
    let m = {
      relativePath: p === void 0 ? d.path || '' : p,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: g,
      route: d,
    };
    m.relativePath.startsWith('/') &&
      (Me(
        m.relativePath.startsWith(o),
        `Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (m.relativePath = m.relativePath.slice(o.length)));
    let v = xl([o, m.relativePath]),
      b = c.concat(m);
    d.children &&
      d.children.length > 0 &&
      (Me(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`,
      ),
      ov(d.children, r, b, v)),
      !(d.path == null && !d.index) && r.push({ path: v, score: T0(v, d.index), routesMeta: b });
  };
  return (
    n.forEach((d, g) => {
      var p;
      if (d.path === '' || !((p = d.path) != null && p.includes('?'))) f(d, g);
      else for (let m of fv(d.path)) f(d, g, m);
    }),
    r
  );
}
function fv(n) {
  let r = n.split('/');
  if (r.length === 0) return [];
  let [c, ...o] = r,
    f = c.endsWith('?'),
    d = c.replace(/\?$/, '');
  if (o.length === 0) return f ? [d, ''] : [d];
  let g = fv(o.join('/')),
    p = [];
  return (
    p.push(...g.map((m) => (m === '' ? d : [d, m].join('/')))),
    f && p.push(...g),
    p.map((m) => (n.startsWith('/') && m === '' ? '/' : m))
  );
}
function g0(n) {
  n.sort((r, c) =>
    r.score !== c.score
      ? c.score - r.score
      : R0(
          r.routesMeta.map((o) => o.childrenIndex),
          c.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var p0 = /^:[\w-]+$/,
  b0 = 3,
  S0 = 2,
  _0 = 1,
  E0 = 10,
  x0 = -2,
  Dm = (n) => n === '*';
function T0(n, r) {
  let c = n.split('/'),
    o = c.length;
  return (
    c.some(Dm) && (o += x0),
    r && (o += S0),
    c.filter((f) => !Dm(f)).reduce((f, d) => f + (p0.test(d) ? b0 : d === '' ? _0 : E0), o)
  );
}
function R0(n, r) {
  return n.length === r.length && n.slice(0, -1).every((o, f) => o === r[f])
    ? n[n.length - 1] - r[r.length - 1]
    : 0;
}
function M0(n, r, c = !1) {
  let { routesMeta: o } = n,
    f = {},
    d = '/',
    g = [];
  for (let p = 0; p < o.length; ++p) {
    let m = o[p],
      v = p === o.length - 1,
      b = d === '/' ? r : r.slice(d.length) || '/',
      M = Dr({ path: m.relativePath, caseSensitive: m.caseSensitive, end: v }, b),
      R = m.route;
    if (
      (!M &&
        v &&
        c &&
        !o[o.length - 1].route.index &&
        (M = Dr({ path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 }, b)),
      !M)
    )
      return null;
    Object.assign(f, M.params),
      g.push({
        params: f,
        pathname: xl([d, M.pathname]),
        pathnameBase: O0(xl([d, M.pathnameBase])),
        route: R,
      }),
      M.pathnameBase !== '/' && (d = xl([d, M.pathnameBase]));
  }
  return g;
}
function Dr(n, r) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [c, o] = D0(n.path, n.caseSensitive, n.end),
    f = r.match(c);
  if (!f) return null;
  let d = f[0],
    g = d.replace(/(.)\/+$/, '$1'),
    p = f.slice(1);
  return {
    params: o.reduce((v, { paramName: b, isOptional: M }, R) => {
      if (b === '*') {
        let z = p[R] || '';
        g = d.slice(0, d.length - z.length).replace(/(.)\/+$/, '$1');
      }
      const O = p[R];
      return M && !O ? (v[b] = void 0) : (v[b] = (O || '').replace(/%2F/g, '/')), v;
    }, {}),
    pathname: d,
    pathnameBase: g,
    pattern: n,
  };
}
function D0(n, r = !1, c = !0) {
  ut(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`,
  );
  let o = [],
    f =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (g, p, m) => (
            o.push({ paramName: p, isOptional: m != null }), m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    n.endsWith('*')
      ? (o.push({ paramName: '*' }), (f += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : c
        ? (f += '\\/*$')
        : n !== '' && n !== '/' && (f += '(?:(?=\\/|$))'),
    [new RegExp(f, r ? void 0 : 'i'), o]
  );
}
function A0(n) {
  try {
    return n
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      ut(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      n
    );
  }
}
function ul(n, r) {
  if (r === '/') return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let c = r.endsWith('/') ? r.length - 1 : r.length,
    o = n.charAt(c);
  return o && o !== '/' ? null : n.slice(c) || '/';
}
function C0(n, r = '/') {
  let { pathname: c, search: o = '', hash: f = '' } = typeof n == 'string' ? Ta(n) : n;
  return { pathname: c ? (c.startsWith('/') ? c : j0(c, r)) : r, search: z0(o), hash: N0(f) };
}
function j0(n, r) {
  let c = r.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((f) => {
      f === '..' ? c.length > 1 && c.pop() : f !== '.' && c.push(f);
    }),
    c.length > 1 ? c.join('/') : '/'
  );
}
function tf(n, r, c, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function sv(n) {
  return n.filter((r, c) => c === 0 || (r.route.path && r.route.path.length > 0));
}
function Ef(n) {
  let r = sv(n);
  return r.map((c, o) => (o === r.length - 1 ? c.pathname : c.pathnameBase));
}
function xf(n, r, c, o = !1) {
  let f;
  typeof n == 'string'
    ? (f = Ta(n))
    : ((f = { ...n }),
      Me(!f.pathname || !f.pathname.includes('?'), tf('?', 'pathname', 'search', f)),
      Me(!f.pathname || !f.pathname.includes('#'), tf('#', 'pathname', 'hash', f)),
      Me(!f.search || !f.search.includes('#'), tf('#', 'search', 'hash', f)));
  let d = n === '' || f.pathname === '',
    g = d ? '/' : f.pathname,
    p;
  if (g == null) p = c;
  else {
    let M = r.length - 1;
    if (!o && g.startsWith('..')) {
      let R = g.split('/');
      for (; R[0] === '..'; ) R.shift(), (M -= 1);
      f.pathname = R.join('/');
    }
    p = M >= 0 ? r[M] : '/';
  }
  let m = C0(f, p),
    v = g && g !== '/' && g.endsWith('/'),
    b = (d || g === '.') && c.endsWith('/');
  return !m.pathname.endsWith('/') && (v || b) && (m.pathname += '/'), m;
}
var xl = (n) => n.join('/').replace(/\/\/+/g, '/'),
  O0 = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  z0 = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  N0 = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n),
  Ar = class {
    constructor(n, r, c, o = !1) {
      (this.status = n),
        (this.statusText = r || ''),
        (this.internal = o),
        c instanceof Error ? ((this.data = c.toString()), (this.error = c)) : (this.data = c);
    }
  };
function Pu(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var dv = ['POST', 'PUT', 'PATCH', 'DELETE'],
  w0 = new Set(dv),
  U0 = ['GET', ...dv],
  L0 = new Set(U0),
  H0 = new Set([301, 302, 303, 307, 308]),
  B0 = new Set([307, 308]),
  lf = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  q0 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Zu = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Tf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Y0 = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  hv = 'remix-router-transitions',
  mv = Symbol('ResetLoaderData');
function G0(n) {
  const r = n.window ? n.window : typeof window < 'u' ? window : void 0,
    c = typeof r < 'u' && typeof r.document < 'u' && typeof r.document.createElement < 'u';
  Me(n.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let o = n.mapRouteProperties || Y0,
    f = {},
    d = Mr(n.routes, o, void 0, f),
    g,
    p = n.basename || '/',
    m = n.dataStrategy || J0,
    v = { unstable_middleware: !1, ...n.future },
    b = null,
    M = new Set(),
    R = null,
    O = null,
    z = null,
    K = n.hydrationData != null,
    H = Ea(d, n.history.location, p),
    G = !1,
    J = null;
  if (H == null && !n.patchRoutesOnNavigation) {
    let E = nl(404, { pathname: n.history.location.pathname }),
      { matches: A, route: L } = Gm(d);
    (H = A), (J = { [L.id]: E });
  }
  H && !n.hydrationData && Ia(H, d, n.history.location.pathname).active && (H = null);
  let V;
  if (H)
    if (H.some((E) => E.route.lazy)) V = !1;
    else if (!H.some((E) => E.route.loader)) V = !0;
    else {
      let E = n.hydrationData ? n.hydrationData.loaderData : null,
        A = n.hydrationData ? n.hydrationData.errors : null;
      if (A) {
        let L = H.findIndex((Z) => A[Z.route.id] !== void 0);
        V = H.slice(0, L + 1).every((Z) => !mf(Z.route, E, A));
      } else V = H.every((L) => !mf(L.route, E, A));
    }
  else {
    (V = !1), (H = []);
    let E = Ia(null, d, n.history.location.pathname);
    E.active && E.matches && ((G = !0), (H = E.matches));
  }
  let W,
    x = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: H,
      initialized: V,
      navigation: lf,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || J,
      fetchers: new Map(),
      blockers: new Map(),
    },
    I = 'POP',
    se = !1,
    ee,
    ge = !1,
    Ne = new Map(),
    Je = null,
    We = !1,
    _t = !1,
    Qt = new Set(),
    Ae = new Map(),
    B = 0,
    P = -1,
    re = new Map(),
    xe = new Set(),
    _ = new Map(),
    Q = new Map(),
    F = new Set(),
    k = new Map(),
    ce,
    be = null;
  function ye() {
    if (
      ((b = n.history.listen(({ action: E, location: A, delta: L }) => {
        if (ce) {
          ce(), (ce = void 0);
          return;
        }
        ut(
          k.size === 0 || L != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let Z = Kl({ currentLocation: x.location, nextLocation: A, historyAction: E });
        if (Z && L != null) {
          let $ = new Promise((ae) => {
            ce = ae;
          });
          n.history.go(L * -1),
            Ml(Z, {
              state: 'blocked',
              location: A,
              proceed() {
                Ml(Z, { state: 'proceeding', proceed: void 0, reset: void 0, location: A }),
                  $.then(() => n.history.go(L));
              },
              reset() {
                let ae = new Map(x.blockers);
                ae.set(Z, Zu), $e({ blockers: ae });
              },
            });
          return;
        }
        return il(E, A);
      })),
      c)
    ) {
      up(r, Ne);
      let E = () => ip(r, Ne);
      r.addEventListener('pagehide', E), (Je = () => r.removeEventListener('pagehide', E));
    }
    return x.initialized || il('POP', x.location, { initialHydration: !0 }), W;
  }
  function Et() {
    b && b(),
      Je && Je(),
      M.clear(),
      ee && ee.abort(),
      x.fetchers.forEach((E, A) => Kt(A)),
      x.blockers.forEach((E, A) => vl(A));
  }
  function Qe(E) {
    return M.add(E), () => M.delete(E);
  }
  function $e(E, A = {}) {
    x = { ...x, ...E };
    let L = [],
      Z = [];
    x.fetchers.forEach(($, ae) => {
      $.state === 'idle' && (F.has(ae) ? L.push(ae) : Z.push(ae));
    }),
      F.forEach(($) => {
        !x.fetchers.has($) && !Ae.has($) && L.push($);
      }),
      [...M].forEach(($) =>
        $(x, {
          deletedFetchers: L,
          viewTransitionOpts: A.viewTransitionOpts,
          flushSync: A.flushSync === !0,
        }),
      ),
      L.forEach(($) => Kt($)),
      Z.forEach(($) => x.fetchers.delete($));
  }
  function dl(E, A, { flushSync: L } = {}) {
    var te, ue;
    let Z =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        fl(x.navigation.formMethod) &&
        x.navigation.state === 'loading' &&
        ((te = E.state) == null ? void 0 : te._isRedirect) !== !0,
      $;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? ($ = A.actionData)
        : ($ = null)
      : Z
        ? ($ = x.actionData)
        : ($ = null);
    let ae = A.loaderData
        ? qm(x.loaderData, A.loaderData, A.matches || [], A.errors)
        : x.loaderData,
      oe = x.blockers;
    oe.size > 0 && ((oe = new Map(oe)), oe.forEach((de, De) => oe.set(De, Zu)));
    let ne =
      se === !0 ||
      (x.navigation.formMethod != null &&
        fl(x.navigation.formMethod) &&
        ((ue = E.state) == null ? void 0 : ue._isRedirect) !== !0);
    g && ((d = g), (g = void 0)),
      We ||
        I === 'POP' ||
        (I === 'PUSH'
          ? n.history.push(E, E.state)
          : I === 'REPLACE' && n.history.replace(E, E.state));
    let fe;
    if (I === 'POP') {
      let de = Ne.get(x.location.pathname);
      de && de.has(E.pathname)
        ? (fe = { currentLocation: x.location, nextLocation: E })
        : Ne.has(E.pathname) && (fe = { currentLocation: E, nextLocation: x.location });
    } else if (ge) {
      let de = Ne.get(x.location.pathname);
      de ? de.add(E.pathname) : ((de = new Set([E.pathname])), Ne.set(x.location.pathname, de)),
        (fe = { currentLocation: x.location, nextLocation: E });
    }
    $e(
      {
        ...A,
        actionData: $,
        loaderData: ae,
        historyAction: I,
        location: E,
        initialized: !0,
        navigation: lf,
        revalidation: 'idle',
        restoreScrollPosition: Jl(E, A.matches || x.matches),
        preventScrollReset: ne,
        blockers: oe,
      },
      { viewTransitionOpts: fe, flushSync: L === !0 },
    ),
      (I = 'POP'),
      (se = !1),
      (ge = !1),
      (We = !1),
      (_t = !1),
      be == null || be.resolve(),
      (be = null);
  }
  async function Ra(E, A) {
    if (typeof E == 'number') {
      n.history.go(E);
      return;
    }
    let L = hf(
        x.location,
        x.matches,
        p,
        E,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative,
      ),
      { path: Z, submission: $, error: ae } = Am(!1, L, A),
      oe = x.location,
      ne = Fu(x.location, Z, A && A.state);
    ne = { ...ne, ...n.history.encodeLocation(ne) };
    let fe = A && A.replace != null ? A.replace : void 0,
      te = 'PUSH';
    fe === !0
      ? (te = 'REPLACE')
      : fe === !1 ||
        ($ != null &&
          fl($.formMethod) &&
          $.formAction === x.location.pathname + x.location.search &&
          (te = 'REPLACE'));
    let ue = A && 'preventScrollReset' in A ? A.preventScrollReset === !0 : void 0,
      de = (A && A.flushSync) === !0,
      De = Kl({ currentLocation: oe, nextLocation: ne, historyAction: te });
    if (De) {
      Ml(De, {
        state: 'blocked',
        location: ne,
        proceed() {
          Ml(De, { state: 'proceeding', proceed: void 0, reset: void 0, location: ne }), Ra(E, A);
        },
        reset() {
          let we = new Map(x.blockers);
          we.set(De, Zu), $e({ blockers: we });
        },
      });
      return;
    }
    await il(te, ne, {
      submission: $,
      pendingError: ae,
      preventScrollReset: ue,
      replace: A && A.replace,
      enableViewTransition: A && A.viewTransition,
      flushSync: de,
    });
  }
  function Gn() {
    be || (be = rp()), Vn(), $e({ revalidation: 'loading' });
    let E = be.promise;
    return x.navigation.state === 'submitting'
      ? E
      : x.navigation.state === 'idle'
        ? (il(x.historyAction, x.location, { startUninterruptedRevalidation: !0 }), E)
        : (il(I || x.historyAction, x.navigation.location, {
            overrideNavigation: x.navigation,
            enableViewTransition: ge === !0,
          }),
          E);
  }
  async function il(E, A, L) {
    ee && ee.abort(),
      (ee = null),
      (I = E),
      (We = (L && L.startUninterruptedRevalidation) === !0),
      Jn(x.location, x.matches),
      (se = (L && L.preventScrollReset) === !0),
      (ge = (L && L.enableViewTransition) === !0);
    let Z = g || d,
      $ = L && L.overrideNavigation,
      ae =
        L != null && L.initialHydration && x.matches && x.matches.length > 0 && !G
          ? x.matches
          : Ea(Z, A, p),
      oe = (L && L.flushSync) === !0;
    if (
      ae &&
      x.initialized &&
      !_t &&
      ep(x.location, A) &&
      !(L && L.submission && fl(L.submission.formMethod))
    ) {
      dl(A, { matches: ae }, { flushSync: oe });
      return;
    }
    let ne = Ia(ae, Z, A.pathname);
    if ((ne.active && ne.matches && (ae = ne.matches), !ae)) {
      let { error: Ve, notFoundMatches: Ue, route: _e } = Zn(A.pathname);
      dl(A, { matches: Ue, loaderData: {}, errors: { [_e.id]: Ve } }, { flushSync: oe });
      return;
    }
    ee = new AbortController();
    let fe = Ln(n.history, A, ee.signal, L && L.submission),
      te = new Mm(n.unstable_getContext ? await n.unstable_getContext() : void 0),
      ue;
    if (L && L.pendingError) ue = [Ka(ae).route.id, { type: 'error', error: L.pendingError }];
    else if (L && L.submission && fl(L.submission.formMethod)) {
      let Ve = await Xn(fe, A, L.submission, ae, te, ne.active, {
        replace: L.replace,
        flushSync: oe,
      });
      if (Ve.shortCircuited) return;
      if (Ve.pendingActionResult) {
        let [Ue, _e] = Ve.pendingActionResult;
        if (Yt(_e) && Pu(_e.error) && _e.error.status === 404) {
          (ee = null), dl(A, { matches: Ve.matches, loaderData: {}, errors: { [Ue]: _e.error } });
          return;
        }
      }
      (ae = Ve.matches || ae),
        (ue = Ve.pendingActionResult),
        ($ = af(A, L.submission)),
        (oe = !1),
        (ne.active = !1),
        (fe = Ln(n.history, fe.url, fe.signal));
    }
    let {
      shortCircuited: de,
      matches: De,
      loaderData: we,
      errors: Fe,
    } = await Gr(
      fe,
      A,
      ae,
      te,
      ne.active,
      $,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      L && L.initialHydration === !0,
      oe,
      ue,
    );
    de || ((ee = null), dl(A, { matches: De || ae, ...Ym(ue), loaderData: we, errors: Fe }));
  }
  async function Xn(E, A, L, Z, $, ae, oe = {}) {
    Vn();
    let ne = ap(A, L);
    if (($e({ navigation: ne }, { flushSync: oe.flushSync === !0 }), ae)) {
      let ue = await Aa(Z, A.pathname, E.signal);
      if (ue.type === 'aborted') return { shortCircuited: !0 };
      if (ue.type === 'error') {
        let de = Ka(ue.partialMatches).route.id;
        return {
          matches: ue.partialMatches,
          pendingActionResult: [de, { type: 'error', error: ue.error }],
        };
      } else if (ue.matches) Z = ue.matches;
      else {
        let { notFoundMatches: de, error: De, route: we } = Zn(A.pathname);
        return { matches: de, pendingActionResult: [we.id, { type: 'error', error: De }] };
      }
    }
    let fe,
      te = ku(Z, A);
    if (!te.route.action && !te.route.lazy)
      fe = {
        type: 'error',
        error: nl(405, { method: E.method, pathname: A.pathname, routeId: te.route.id }),
      };
    else {
      let ue = await Ma('action', E, [te], Z, $, null);
      if (((fe = ue[te.route.id]), !fe)) {
        for (let de of Z)
          if (ue[de.route.id]) {
            fe = ue[de.route.id];
            break;
          }
      }
      if (E.signal.aborted) return { shortCircuited: !0 };
    }
    if (Ja(fe)) {
      let ue;
      return (
        oe && oe.replace != null
          ? (ue = oe.replace)
          : (ue =
              Lm(fe.response.headers.get('Location'), new URL(E.url), p) ===
              x.location.pathname + x.location.search),
        await Zt(E, fe, !0, { submission: L, replace: ue }),
        { shortCircuited: !0 }
      );
    }
    if (Yt(fe)) {
      let ue = Ka(Z, te.route.id);
      return (
        (oe && oe.replace) !== !0 && (I = 'PUSH'),
        { matches: Z, pendingActionResult: [ue.route.id, fe] }
      );
    }
    return { matches: Z, pendingActionResult: [te.route.id, fe] };
  }
  async function Gr(E, A, L, Z, $, ae, oe, ne, fe, te, ue, de) {
    let De = ae || af(A, oe),
      we = oe || ne || Qm(De),
      Fe = !We && !te;
    if ($) {
      if (Fe) {
        let Ze = ni(de);
        $e({ navigation: De, ...(Ze !== void 0 ? { actionData: Ze } : {}) }, { flushSync: ue });
      }
      let Oe = await Aa(L, A.pathname, E.signal);
      if (Oe.type === 'aborted') return { shortCircuited: !0 };
      if (Oe.type === 'error') {
        let Ze = Ka(Oe.partialMatches).route.id;
        return { matches: Oe.partialMatches, loaderData: {}, errors: { [Ze]: Oe.error } };
      } else if (Oe.matches) L = Oe.matches;
      else {
        let { error: Ze, notFoundMatches: Wl, route: Fl } = Zn(A.pathname);
        return { matches: Wl, loaderData: {}, errors: { [Fl.id]: Ze } };
      }
    }
    let Ve = g || d,
      [Ue, _e] = jm(n.history, x, L, we, A, te === !0, _t, Qt, F, _, xe, Ve, p, de);
    if (((P = ++B), Ue.length === 0 && _e.length === 0)) {
      let Oe = ci();
      return (
        dl(
          A,
          {
            matches: L,
            loaderData: {},
            errors: de && Yt(de[1]) ? { [de[0]]: de[1].error } : null,
            ...Ym(de),
            ...(Oe ? { fetchers: new Map(x.fetchers) } : {}),
          },
          { flushSync: ue },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Fe) {
      let Oe = {};
      if (!$) {
        Oe.navigation = De;
        let Ze = ni(de);
        Ze !== void 0 && (Oe.actionData = Ze);
      }
      _e.length > 0 && (Oe.fetchers = Vt(_e)), $e(Oe, { flushSync: ue });
    }
    _e.forEach((Oe) => {
      ml(Oe.key), Oe.controller && Ae.set(Oe.key, Oe.controller);
    });
    let Dl = () => _e.forEach((Oe) => ml(Oe.key));
    ee && ee.signal.addEventListener('abort', Dl);
    let { loaderResults: $l, fetcherResults: st } = await Qn(L, Ue, _e, E, Z);
    if (E.signal.aborted) return { shortCircuited: !0 };
    ee && ee.signal.removeEventListener('abort', Dl), _e.forEach((Oe) => Ae.delete(Oe.key));
    let dt = br($l);
    if (dt) return await Zt(E, dt.result, !0, { replace: fe }), { shortCircuited: !0 };
    if (((dt = br(st)), dt))
      return xe.add(dt.key), await Zt(E, dt.result, !0, { replace: fe }), { shortCircuited: !0 };
    let { loaderData: kn, errors: kl } = Bm(x, L, $l, de, _e, st);
    te && x.errors && (kl = { ...x.errors, ...kl });
    let yl = ci(),
      en = Da(P),
      Al = yl || en || _e.length > 0;
    return {
      matches: L,
      loaderData: kn,
      errors: kl,
      ...(Al ? { fetchers: new Map(x.fetchers) } : {}),
    };
  }
  function ni(E) {
    if (E && !Yt(E[1])) return { [E[0]]: E[1].data };
    if (x.actionData) return Object.keys(x.actionData).length === 0 ? null : x.actionData;
  }
  function Vt(E) {
    return (
      E.forEach((A) => {
        let L = x.fetchers.get(A.key),
          Z = Ku(void 0, L ? L.data : void 0);
        x.fetchers.set(A.key, Z);
      }),
      new Map(x.fetchers)
    );
  }
  async function Xr(E, A, L, Z) {
    ml(E);
    let $ = (Z && Z.flushSync) === !0,
      ae = g || d,
      oe = hf(x.location, x.matches, p, L, A, Z == null ? void 0 : Z.relative),
      ne = Ea(ae, oe, p),
      fe = Ia(ne, ae, oe);
    if ((fe.active && fe.matches && (ne = fe.matches), !ne)) {
      xt(E, A, nl(404, { pathname: oe }), { flushSync: $ });
      return;
    }
    let { path: te, submission: ue, error: de } = Am(!0, oe, Z);
    if (de) {
      xt(E, A, de, { flushSync: $ });
      return;
    }
    let De = ku(ne, te),
      we = new Mm(n.unstable_getContext ? await n.unstable_getContext() : void 0),
      Fe = (Z && Z.preventScrollReset) === !0;
    if (ue && fl(ue.formMethod)) {
      await ui(E, A, te, De, ne, we, fe.active, $, Fe, ue);
      return;
    }
    _.set(E, { routeId: A, path: te }), await ii(E, A, te, De, ne, we, fe.active, $, Fe, ue);
  }
  async function ui(E, A, L, Z, $, ae, oe, ne, fe, te) {
    Vn(), _.delete(E);
    function ue(Ge) {
      if (!Ge.route.action && !Ge.route.lazy) {
        let gl = nl(405, { method: te.formMethod, pathname: L, routeId: A });
        return xt(E, A, gl, { flushSync: ne }), !0;
      }
      return !1;
    }
    if (!oe && ue(Z)) return;
    let de = x.fetchers.get(E);
    hl(E, np(te, de), { flushSync: ne });
    let De = new AbortController(),
      we = Ln(n.history, L, De.signal, te);
    if (oe) {
      let Ge = await Aa($, L, we.signal, E);
      if (Ge.type === 'aborted') return;
      if (Ge.type === 'error') {
        xt(E, A, Ge.error, { flushSync: ne });
        return;
      } else if (Ge.matches) {
        if ((($ = Ge.matches), (Z = ku($, L)), ue(Z))) return;
      } else {
        xt(E, A, nl(404, { pathname: L }), { flushSync: ne });
        return;
      }
    }
    Ae.set(E, De);
    let Fe = B,
      Ue = (await Ma('action', we, [Z], $, ae, E))[Z.route.id];
    if (we.signal.aborted) {
      Ae.get(E) === De && Ae.delete(E);
      return;
    }
    if (F.has(E)) {
      if (Ja(Ue) || Yt(Ue)) {
        hl(E, _a(void 0));
        return;
      }
    } else {
      if (Ja(Ue))
        if ((Ae.delete(E), P > Fe)) {
          hl(E, _a(void 0));
          return;
        } else
          return (
            xe.add(E),
            hl(E, Ku(te)),
            Zt(we, Ue, !1, { fetcherSubmission: te, preventScrollReset: fe })
          );
      if (Yt(Ue)) {
        xt(E, A, Ue.error);
        return;
      }
    }
    let _e = x.navigation.location || x.location,
      Dl = Ln(n.history, _e, De.signal),
      $l = g || d,
      st = x.navigation.state !== 'idle' ? Ea($l, x.navigation.location, p) : x.matches;
    Me(st, "Didn't find any matches after fetcher action");
    let dt = ++B;
    re.set(E, dt);
    let kn = Ku(te, Ue.data);
    x.fetchers.set(E, kn);
    let [kl, yl] = jm(n.history, x, st, te, _e, !1, _t, Qt, F, _, xe, $l, p, [Z.route.id, Ue]);
    yl
      .filter((Ge) => Ge.key !== E)
      .forEach((Ge) => {
        let gl = Ge.key,
          tn = x.fetchers.get(gl),
          Qr = Ku(void 0, tn ? tn.data : void 0);
        x.fetchers.set(gl, Qr), ml(gl), Ge.controller && Ae.set(gl, Ge.controller);
      }),
      $e({ fetchers: new Map(x.fetchers) });
    let en = () => yl.forEach((Ge) => ml(Ge.key));
    De.signal.addEventListener('abort', en);
    let { loaderResults: Al, fetcherResults: Oe } = await Qn(st, kl, yl, Dl, ae);
    if (De.signal.aborted) return;
    De.signal.removeEventListener('abort', en),
      re.delete(E),
      Ae.delete(E),
      yl.forEach((Ge) => Ae.delete(Ge.key));
    let Ze = br(Al);
    if (Ze) return Zt(Dl, Ze.result, !1, { preventScrollReset: fe });
    if (((Ze = br(Oe)), Ze))
      return xe.add(Ze.key), Zt(Dl, Ze.result, !1, { preventScrollReset: fe });
    let { loaderData: Wl, errors: Fl } = Bm(x, st, Al, void 0, yl, Oe);
    if (x.fetchers.has(E)) {
      let Ge = _a(Ue.data);
      x.fetchers.set(E, Ge);
    }
    Da(dt),
      x.navigation.state === 'loading' && dt > P
        ? (Me(I, 'Expected pending action'),
          ee && ee.abort(),
          dl(x.navigation.location, {
            matches: st,
            loaderData: Wl,
            errors: Fl,
            fetchers: new Map(x.fetchers),
          }))
        : ($e({
            errors: Fl,
            loaderData: qm(x.loaderData, Wl, st, Fl),
            fetchers: new Map(x.fetchers),
          }),
          (_t = !1));
  }
  async function ii(E, A, L, Z, $, ae, oe, ne, fe, te) {
    let ue = x.fetchers.get(E);
    hl(E, Ku(te, ue ? ue.data : void 0), { flushSync: ne });
    let de = new AbortController(),
      De = Ln(n.history, L, de.signal);
    if (oe) {
      let Ue = await Aa($, L, De.signal, E);
      if (Ue.type === 'aborted') return;
      if (Ue.type === 'error') {
        xt(E, A, Ue.error, { flushSync: ne });
        return;
      } else if (Ue.matches) ($ = Ue.matches), (Z = ku($, L));
      else {
        xt(E, A, nl(404, { pathname: L }), { flushSync: ne });
        return;
      }
    }
    Ae.set(E, de);
    let we = B,
      Ve = (await Ma('loader', De, [Z], $, ae, E))[Z.route.id];
    if ((Ae.get(E) === de && Ae.delete(E), !De.signal.aborted)) {
      if (F.has(E)) {
        hl(E, _a(void 0));
        return;
      }
      if (Ja(Ve))
        if (P > we) {
          hl(E, _a(void 0));
          return;
        } else {
          xe.add(E), await Zt(De, Ve, !1, { preventScrollReset: fe });
          return;
        }
      if (Yt(Ve)) {
        xt(E, A, Ve.error);
        return;
      }
      hl(E, _a(Ve.data));
    }
  }
  async function Zt(
    E,
    A,
    L,
    { submission: Z, fetcherSubmission: $, preventScrollReset: ae, replace: oe } = {},
  ) {
    A.response.headers.has('X-Remix-Revalidate') && (_t = !0);
    let ne = A.response.headers.get('Location');
    Me(ne, 'Expected a Location header on the redirect Response'), (ne = Lm(ne, new URL(E.url), p));
    let fe = Fu(x.location, ne, { _isRedirect: !0 });
    if (c) {
      let Fe = !1;
      if (A.response.headers.has('X-Remix-Reload-Document')) Fe = !0;
      else if (Tf.test(ne)) {
        const Ve = n.history.createURL(ne);
        Fe = Ve.origin !== r.location.origin || ul(Ve.pathname, p) == null;
      }
      if (Fe) {
        oe ? r.location.replace(ne) : r.location.assign(ne);
        return;
      }
    }
    ee = null;
    let te = oe === !0 || A.response.headers.has('X-Remix-Replace') ? 'REPLACE' : 'PUSH',
      { formMethod: ue, formAction: de, formEncType: De } = x.navigation;
    !Z && !$ && ue && de && De && (Z = Qm(x.navigation));
    let we = Z || $;
    if (B0.has(A.response.status) && we && fl(we.formMethod))
      await il(te, fe, {
        submission: { ...we, formAction: ne },
        preventScrollReset: ae || se,
        enableViewTransition: L ? ge : void 0,
      });
    else {
      let Fe = af(fe, Z);
      await il(te, fe, {
        overrideNavigation: Fe,
        fetcherSubmission: $,
        preventScrollReset: ae || se,
        enableViewTransition: L ? ge : void 0,
      });
    }
  }
  async function Ma(E, A, L, Z, $, ae) {
    let oe,
      ne = {};
    try {
      oe = await k0(m, E, A, L, Z, ae, f, o, $);
    } catch (fe) {
      return (
        L.forEach((te) => {
          ne[te.route.id] = { type: 'error', error: fe };
        }),
        ne
      );
    }
    for (let [fe, te] of Object.entries(oe))
      if (tp(te)) {
        let ue = te.result;
        ne[fe] = { type: 'redirect', response: P0(ue, A, fe, Z, p) };
      } else ne[fe] = await F0(te);
    return ne;
  }
  async function Qn(E, A, L, Z, $) {
    let ae = Ma('loader', Z, A, E, $, null),
      oe = Promise.all(
        L.map(async (te) => {
          if (te.matches && te.match && te.controller) {
            let de = (
              await Ma(
                'loader',
                Ln(n.history, te.path, te.controller.signal),
                [te.match],
                te.matches,
                $,
                te.key,
              )
            )[te.match.route.id];
            return { [te.key]: de };
          } else
            return Promise.resolve({
              [te.key]: { type: 'error', error: nl(404, { pathname: te.path }) },
            });
        }),
      ),
      ne = await ae,
      fe = (await oe).reduce((te, ue) => Object.assign(te, ue), {});
    return { loaderResults: ne, fetcherResults: fe };
  }
  function Vn() {
    (_t = !0),
      _.forEach((E, A) => {
        Ae.has(A) && Qt.add(A), ml(A);
      });
  }
  function hl(E, A, L = {}) {
    x.fetchers.set(E, A),
      $e({ fetchers: new Map(x.fetchers) }, { flushSync: (L && L.flushSync) === !0 });
  }
  function xt(E, A, L, Z = {}) {
    let $ = Ka(x.matches, A);
    Kt(E),
      $e(
        { errors: { [$.route.id]: L }, fetchers: new Map(x.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 },
      );
  }
  function pt(E) {
    return Q.set(E, (Q.get(E) || 0) + 1), F.has(E) && F.delete(E), x.fetchers.get(E) || q0;
  }
  function Kt(E) {
    let A = x.fetchers.get(E);
    Ae.has(E) && !(A && A.state === 'loading' && re.has(E)) && ml(E),
      _.delete(E),
      re.delete(E),
      xe.delete(E),
      F.delete(E),
      Qt.delete(E),
      x.fetchers.delete(E);
  }
  function Tt(E) {
    let A = (Q.get(E) || 0) - 1;
    A <= 0 ? (Q.delete(E), F.add(E)) : Q.set(E, A), $e({ fetchers: new Map(x.fetchers) });
  }
  function ml(E) {
    let A = Ae.get(E);
    A && (A.abort(), Ae.delete(E));
  }
  function ri(E) {
    for (let A of E) {
      let L = pt(A),
        Z = _a(L.data);
      x.fetchers.set(A, Z);
    }
  }
  function ci() {
    let E = [],
      A = !1;
    for (let L of xe) {
      let Z = x.fetchers.get(L);
      Me(Z, `Expected fetcher: ${L}`), Z.state === 'loading' && (xe.delete(L), E.push(L), (A = !0));
    }
    return ri(E), A;
  }
  function Da(E) {
    let A = [];
    for (let [L, Z] of re)
      if (Z < E) {
        let $ = x.fetchers.get(L);
        Me($, `Expected fetcher: ${L}`), $.state === 'loading' && (ml(L), re.delete(L), A.push(L));
      }
    return ri(A), A.length > 0;
  }
  function Pa(E, A) {
    let L = x.blockers.get(E) || Zu;
    return k.get(E) !== A && k.set(E, A), L;
  }
  function vl(E) {
    x.blockers.delete(E), k.delete(E);
  }
  function Ml(E, A) {
    let L = x.blockers.get(E) || Zu;
    Me(
      (L.state === 'unblocked' && A.state === 'blocked') ||
        (L.state === 'blocked' && A.state === 'blocked') ||
        (L.state === 'blocked' && A.state === 'proceeding') ||
        (L.state === 'blocked' && A.state === 'unblocked') ||
        (L.state === 'proceeding' && A.state === 'unblocked'),
      `Invalid blocker state transition: ${L.state} -> ${A.state}`,
    );
    let Z = new Map(x.blockers);
    Z.set(E, A), $e({ blockers: Z });
  }
  function Kl({ currentLocation: E, nextLocation: A, historyAction: L }) {
    if (k.size === 0) return;
    k.size > 1 && ut(!1, 'A router only supports one blocker at a time');
    let Z = Array.from(k.entries()),
      [$, ae] = Z[Z.length - 1],
      oe = x.blockers.get($);
    if (
      !(oe && oe.state === 'proceeding') &&
      ae({ currentLocation: E, nextLocation: A, historyAction: L })
    )
      return $;
  }
  function Zn(E) {
    let A = nl(404, { pathname: E }),
      L = g || d,
      { matches: Z, route: $ } = Gm(L);
    return { notFoundMatches: Z, route: $, error: A };
  }
  function oi(E, A, L) {
    if (((R = E), (z = A), (O = L || null), !K && x.navigation === lf)) {
      K = !0;
      let Z = Jl(x.location, x.matches);
      Z != null && $e({ restoreScrollPosition: Z });
    }
    return () => {
      (R = null), (z = null), (O = null);
    };
  }
  function Kn(E, A) {
    return (
      (O &&
        O(
          E,
          A.map((Z) => y0(Z, x.loaderData)),
        )) ||
      E.key
    );
  }
  function Jn(E, A) {
    if (R && z) {
      let L = Kn(E, A);
      R[L] = z();
    }
  }
  function Jl(E, A) {
    if (R) {
      let L = Kn(E, A),
        Z = R[L];
      if (typeof Z == 'number') return Z;
    }
    return null;
  }
  function Ia(E, A, L) {
    if (n.patchRoutesOnNavigation)
      if (E) {
        if (Object.keys(E[0].params).length > 0) return { active: !0, matches: xr(A, L, p, !0) };
      } else return { active: !0, matches: xr(A, L, p, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Aa(E, A, L, Z) {
    if (!n.patchRoutesOnNavigation) return { type: 'success', matches: E };
    let $ = E;
    for (;;) {
      let ae = g == null,
        oe = g || d,
        ne = f;
      try {
        await n.patchRoutesOnNavigation({
          signal: L,
          path: A,
          matches: $,
          fetcherKey: Z,
          patch: (ue, de) => {
            L.aborted || zm(ue, de, oe, ne, o);
          },
        });
      } catch (ue) {
        return { type: 'error', error: ue, partialMatches: $ };
      } finally {
        ae && !L.aborted && (d = [...d]);
      }
      if (L.aborted) return { type: 'aborted' };
      let fe = Ea(oe, A, p);
      if (fe) return { type: 'success', matches: fe };
      let te = xr(oe, A, p, !0);
      if (!te || ($.length === te.length && $.every((ue, de) => ue.route.id === te[de].route.id)))
        return { type: 'success', matches: null };
      $ = te;
    }
  }
  function fi(E) {
    (f = {}), (g = Mr(E, o, void 0, f));
  }
  function $n(E, A) {
    let L = g == null;
    zm(E, A, g || d, f, o), L && ((d = [...d]), $e({}));
  }
  return (
    (W = {
      get basename() {
        return p;
      },
      get future() {
        return v;
      },
      get state() {
        return x;
      },
      get routes() {
        return d;
      },
      get window() {
        return r;
      },
      initialize: ye,
      subscribe: Qe,
      enableScrollRestoration: oi,
      navigate: Ra,
      fetch: Xr,
      revalidate: Gn,
      createHref: (E) => n.history.createHref(E),
      encodeLocation: (E) => n.history.encodeLocation(E),
      getFetcher: pt,
      deleteFetcher: Tt,
      dispose: Et,
      getBlocker: Pa,
      deleteBlocker: vl,
      patchRoutes: $n,
      _internalFetchControllers: Ae,
      _internalSetRoutes: fi,
    }),
    W
  );
}
function X0(n) {
  return (
    n != null && (('formData' in n && n.formData != null) || ('body' in n && n.body !== void 0))
  );
}
function hf(n, r, c, o, f, d) {
  let g, p;
  if (f) {
    g = [];
    for (let v of r)
      if ((g.push(v), v.route.id === f)) {
        p = v;
        break;
      }
  } else (g = r), (p = r[r.length - 1]);
  let m = xf(o || '.', Ef(g), ul(n.pathname, c) || n.pathname, d === 'path');
  if (
    (o == null && ((m.search = n.search), (m.hash = n.hash)),
    (o == null || o === '' || o === '.') && p)
  ) {
    let v = Rf(m.search);
    if (p.route.index && !v) m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index';
    else if (!p.route.index && v) {
      let b = new URLSearchParams(m.search),
        M = b.getAll('index');
      b.delete('index'), M.filter((O) => O).forEach((O) => b.append('index', O));
      let R = b.toString();
      m.search = R ? `?${R}` : '';
    }
  }
  return c !== '/' && (m.pathname = m.pathname === '/' ? c : xl([c, m.pathname])), xa(m);
}
function Am(n, r, c) {
  if (!c || !X0(c)) return { path: r };
  if (c.formMethod && !lp(c.formMethod))
    return { path: r, error: nl(405, { method: c.formMethod }) };
  let o = () => ({ path: r, error: nl(400, { type: 'invalid-body' }) }),
    d = (c.formMethod || 'get').toUpperCase(),
    g = bv(r);
  if (c.body !== void 0) {
    if (c.formEncType === 'text/plain') {
      if (!fl(d)) return o();
      let M =
        typeof c.body == 'string'
          ? c.body
          : c.body instanceof FormData || c.body instanceof URLSearchParams
            ? Array.from(c.body.entries()).reduce(
                (R, [O, z]) => `${R}${O}=${z}
`,
                '',
              )
            : String(c.body);
      return {
        path: r,
        submission: {
          formMethod: d,
          formAction: g,
          formEncType: c.formEncType,
          formData: void 0,
          json: void 0,
          text: M,
        },
      };
    } else if (c.formEncType === 'application/json') {
      if (!fl(d)) return o();
      try {
        let M = typeof c.body == 'string' ? JSON.parse(c.body) : c.body;
        return {
          path: r,
          submission: {
            formMethod: d,
            formAction: g,
            formEncType: c.formEncType,
            formData: void 0,
            json: M,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  Me(typeof FormData == 'function', 'FormData is not available in this environment');
  let p, m;
  if (c.formData) (p = vf(c.formData)), (m = c.formData);
  else if (c.body instanceof FormData) (p = vf(c.body)), (m = c.body);
  else if (c.body instanceof URLSearchParams) (p = c.body), (m = Hm(p));
  else if (c.body == null) (p = new URLSearchParams()), (m = new FormData());
  else
    try {
      (p = new URLSearchParams(c.body)), (m = Hm(p));
    } catch {
      return o();
    }
  let v = {
    formMethod: d,
    formAction: g,
    formEncType: (c && c.formEncType) || 'application/x-www-form-urlencoded',
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (fl(v.formMethod)) return { path: r, submission: v };
  let b = Ta(r);
  return (
    n && b.search && Rf(b.search) && p.append('index', ''),
    (b.search = `?${p}`),
    { path: xa(b), submission: v }
  );
}
function Cm(n, r, c = !1) {
  let o = n.findIndex((f) => f.route.id === r);
  return o >= 0 ? n.slice(0, c ? o + 1 : o) : n;
}
function jm(n, r, c, o, f, d, g, p, m, v, b, M, R, O) {
  let z = O ? (Yt(O[1]) ? O[1].error : O[1].data) : void 0,
    K = n.createURL(r.location),
    H = n.createURL(f),
    G = c;
  d && r.errors ? (G = Cm(c, Object.keys(r.errors)[0], !0)) : O && Yt(O[1]) && (G = Cm(c, O[0]));
  let J = O ? O[1].statusCode : void 0,
    V = J && J >= 400,
    W = G.filter((I, se) => {
      let { route: ee } = I;
      if (ee.lazy) return !0;
      if (ee.loader == null) return !1;
      if (d) return mf(ee, r.loaderData, r.errors);
      if (Q0(r.loaderData, r.matches[se], I)) return !0;
      let ge = r.matches[se],
        Ne = I;
      return Om(I, {
        currentUrl: K,
        currentParams: ge.params,
        nextUrl: H,
        nextParams: Ne.params,
        ...o,
        actionResult: z,
        actionStatus: J,
        defaultShouldRevalidate: V
          ? !1
          : g ||
            K.pathname + K.search === H.pathname + H.search ||
            K.search !== H.search ||
            V0(ge, Ne),
      });
    }),
    x = [];
  return (
    v.forEach((I, se) => {
      if (d || !c.some((We) => We.route.id === I.routeId) || m.has(se)) return;
      let ee = Ea(M, I.path, R);
      if (!ee) {
        x.push({
          key: se,
          routeId: I.routeId,
          path: I.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ge = r.fetchers.get(se),
        Ne = ku(ee, I.path),
        Je = !1;
      b.has(se)
        ? (Je = !1)
        : p.has(se)
          ? (p.delete(se), (Je = !0))
          : ge && ge.state !== 'idle' && ge.data === void 0
            ? (Je = g)
            : (Je = Om(Ne, {
                currentUrl: K,
                currentParams: r.matches[r.matches.length - 1].params,
                nextUrl: H,
                nextParams: c[c.length - 1].params,
                ...o,
                actionResult: z,
                actionStatus: J,
                defaultShouldRevalidate: V ? !1 : g,
              })),
        Je &&
          x.push({
            key: se,
            routeId: I.routeId,
            path: I.path,
            matches: ee,
            match: Ne,
            controller: new AbortController(),
          });
    }),
    [W, x]
  );
}
function mf(n, r, c) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let o = r != null && r[n.id] !== void 0,
    f = c != null && c[n.id] !== void 0;
  return !o && f ? !1 : typeof n.loader == 'function' && n.loader.hydrate === !0 ? !0 : !o && !f;
}
function Q0(n, r, c) {
  let o = !r || c.route.id !== r.route.id,
    f = !n.hasOwnProperty(c.route.id);
  return o || f;
}
function V0(n, r) {
  let c = n.route.path;
  return (
    n.pathname !== r.pathname || (c != null && c.endsWith('*') && n.params['*'] !== r.params['*'])
  );
}
function Om(n, r) {
  if (n.route.shouldRevalidate) {
    let c = n.route.shouldRevalidate(r);
    if (typeof c == 'boolean') return c;
  }
  return r.defaultShouldRevalidate;
}
function zm(n, r, c, o, f) {
  let d;
  if (n) {
    let m = o[n];
    Me(m, `No route found to patch children into: routeId = ${n}`),
      m.children || (m.children = []),
      (d = m.children);
  } else d = c;
  let g = r.filter((m) => !d.some((v) => vv(m, v))),
    p = Mr(g, f, [n || '_', 'patch', String((d == null ? void 0 : d.length) || '0')], o);
  d.push(...p);
}
function vv(n, r) {
  return 'id' in n && 'id' in r && n.id === r.id
    ? !0
    : n.index === r.index && n.path === r.path && n.caseSensitive === r.caseSensitive
      ? (!n.children || n.children.length === 0) && (!r.children || r.children.length === 0)
        ? !0
        : n.children.every((c, o) => {
            var f;
            return (f = r.children) == null ? void 0 : f.some((d) => vv(c, d));
          })
      : !1;
}
var Nm = new WeakMap(),
  yv = ({ key: n, route: r, manifest: c, mapRouteProperties: o }) => {
    let f = c[r.id];
    if ((Me(f, 'No route found in manifest'), !f.lazy || typeof f.lazy != 'object')) return;
    let d = f.lazy[n];
    if (!d) return;
    let g = Nm.get(f);
    g || ((g = {}), Nm.set(f, g));
    let p = g[n];
    if (p) return p;
    let m = (async () => {
      let v = d0(n),
        M = f[n] !== void 0 && n !== 'hasErrorBoundary';
      if (v)
        ut(
          !v,
          'Route property ' +
            n +
            ' is not a supported lazy route property. This property will be ignored.',
        ),
          (g[n] = Promise.resolve());
      else if (M)
        ut(
          !1,
          `Route "${f.id}" has a static property "${n}" defined. The lazy property will be ignored.`,
        );
      else {
        let R = await d();
        R != null && (Object.assign(f, { [n]: R }), Object.assign(f, o(f)));
      }
      typeof f.lazy == 'object' &&
        ((f.lazy[n] = void 0),
        Object.values(f.lazy).every((R) => R === void 0) && (f.lazy = void 0));
    })();
    return (g[n] = m), m;
  },
  wm = new WeakMap();
function Z0(n, r, c, o) {
  let f = c[n.id];
  if ((Me(f, 'No route found in manifest'), !n.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof n.lazy == 'function') {
    let v = wm.get(f);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let b = (async () => {
      Me(typeof n.lazy == 'function', 'No lazy route function found');
      let M = await n.lazy(),
        R = {};
      for (let O in M) {
        let z = M[O];
        if (z === void 0) continue;
        let K = m0(O),
          G = f[O] !== void 0 && O !== 'hasErrorBoundary';
        K
          ? ut(
              !K,
              'Route property ' +
                O +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.',
            )
          : G
            ? ut(
                !G,
                `Route "${f.id}" has a static property "${O}" defined but its lazy function is also returning a value for this property. The lazy route property "${O}" will be ignored.`,
              )
            : (R[O] = z);
      }
      Object.assign(f, R), Object.assign(f, { ...o(f), lazy: void 0 });
    })();
    return wm.set(f, b), { lazyRoutePromise: b, lazyHandlerPromise: b };
  }
  let d = Object.keys(n.lazy),
    g = [],
    p;
  for (let v of d) {
    let b = yv({ key: v, route: n, manifest: c, mapRouteProperties: o });
    b && (g.push(b), v === r && (p = b));
  }
  return { lazyRoutePromise: Promise.all(g).then(() => {}), lazyHandlerPromise: p };
}
function gv(n) {
  return n !== void 0;
}
function K0(n, r, c) {
  let o = n
    .map(({ route: f }) => {
      if (!(typeof f.lazy != 'object' || !f.lazy.unstable_middleware))
        return yv({ key: 'unstable_middleware', route: f, manifest: r, mapRouteProperties: c });
    })
    .filter(gv);
  return o.length > 0 ? Promise.all(o) : void 0;
}
async function Um(n) {
  let r = n.matches.filter((f) => f.shouldLoad),
    c = {};
  return (
    (await Promise.all(r.map((f) => f.resolve()))).forEach((f, d) => {
      c[r[d].route.id] = f;
    }),
    c
  );
}
async function J0(n) {
  return n.matches.some((r) => r.route.unstable_middleware)
    ? $0(
        n,
        !1,
        () => Um(n),
        (r, c) => ({ [c]: { type: 'error', result: r } }),
      )
    : Um(n);
}
async function $0(n, r, c, o) {
  let { matches: f, request: d, params: g, context: p } = n,
    m = { handlerResult: void 0 };
  try {
    let v = f.flatMap((M) =>
        M.route.unstable_middleware ? M.route.unstable_middleware.map((R) => [M.route.id, R]) : [],
      ),
      b = await pv({ request: d, params: g, context: p }, v, r, m, c);
    return r ? b : m.handlerResult;
  } catch (v) {
    if (!m.middlewareError) throw v;
    let b = await o(m.middlewareError.error, m.middlewareError.routeId);
    return m.handlerResult ? Object.assign(m.handlerResult, b) : b;
  }
}
async function pv(n, r, c, o, f, d = 0) {
  let { request: g } = n;
  if (g.signal.aborted)
    throw g.signal.reason
      ? g.signal.reason
      : new Error(`Request aborted without an \`AbortSignal.reason\`: ${g.method} ${g.url}`);
  let p = r[d];
  if (!p) return (o.handlerResult = await f()), o.handlerResult;
  let [m, v] = p,
    b = !1,
    M,
    R = async () => {
      if (b) throw new Error('You may only call `next()` once per middleware');
      (b = !0), await pv(n, r, c, o, f, d + 1);
    };
  try {
    let O = await v({ request: n.request, params: n.params, context: n.context }, R);
    return b ? (O === void 0 ? M : O) : R();
  } catch (O) {
    throw (
      (o.middlewareError
        ? o.middlewareError.error !== O && (o.middlewareError = { routeId: m, error: O })
        : (o.middlewareError = { routeId: m, error: O }),
      O)
    );
  }
}
async function k0(n, r, c, o, f, d, g, p, m) {
  let v = K0(f, g, p),
    b = f.map((z) => Z0(z.route, r, g, p));
  v && (await v);
  let M = f.map((z, K) => {
      let { lazyRoutePromise: H, lazyHandlerPromise: G } = b[K],
        J = o.some((W) => W.route.id === z.route.id);
      return {
        ...z,
        shouldLoad: J,
        resolve: async (W) => (
          W && c.method === 'GET' && (z.route.lazy || z.route.loader) && (J = !0),
          J
            ? W0({
                type: r,
                request: c,
                match: z,
                lazyHandlerPromise: G,
                lazyRoutePromise: H,
                handlerOverride: W,
                scopedContext: m,
              })
            : Promise.resolve({ type: 'data', result: void 0 })
        ),
      };
    }),
    R = await n({ matches: M, request: c, params: f[0].params, fetcherKey: d, context: m }),
    O = b.flatMap((z) => Object.values(z).filter(gv));
  try {
    await Promise.all(O);
  } catch {}
  return R;
}
async function W0({
  type: n,
  request: r,
  match: c,
  lazyHandlerPromise: o,
  lazyRoutePromise: f,
  handlerOverride: d,
  scopedContext: g,
}) {
  let p,
    m,
    v = (b) => {
      let M,
        R = new Promise((K, H) => (M = H));
      (m = () => M()), r.signal.addEventListener('abort', m);
      let O = (K) =>
          typeof b != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${n}" [routeId: ${c.route.id}]`,
                ),
              )
            : b({ request: r, params: c.params, context: g }, ...(K !== void 0 ? [K] : [])),
        z = (async () => {
          try {
            return { type: 'data', result: await (d ? d((H) => O(H)) : O()) };
          } catch (K) {
            return { type: 'error', result: K };
          }
        })();
      return Promise.race([z, R]);
    };
  try {
    let b = c.route[n];
    if (o || f)
      if (b) {
        let M,
          [R] = await Promise.all([
            v(b).catch((O) => {
              M = O;
            }),
            o,
            f,
          ]);
        if (M !== void 0) throw M;
        p = R;
      } else if ((await o, (b = c.route[n]), b)) [p] = await Promise.all([v(b), f]);
      else if (n === 'action') {
        let M = new URL(r.url),
          R = M.pathname + M.search;
        throw nl(405, { method: r.method, pathname: R, routeId: c.route.id });
      } else return { type: 'data', result: void 0 };
    else if (b) p = await v(b);
    else {
      let M = new URL(r.url),
        R = M.pathname + M.search;
      throw nl(404, { pathname: R });
    }
  } catch (b) {
    return { type: 'error', result: b };
  } finally {
    m && r.signal.removeEventListener('abort', m);
  }
  return p;
}
async function F0(n) {
  var o, f, d, g, p, m;
  let { result: r, type: c } = n;
  if (Sv(r)) {
    let v;
    try {
      let b = r.headers.get('Content-Type');
      b && /\bapplication\/json\b/.test(b)
        ? r.body == null
          ? (v = null)
          : (v = await r.json())
        : (v = await r.text());
    } catch (b) {
      return { type: 'error', error: b };
    }
    return c === 'error'
      ? {
          type: 'error',
          error: new Ar(r.status, r.statusText, v),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: 'data', data: v, statusCode: r.status, headers: r.headers };
  }
  return c === 'error'
    ? Xm(r)
      ? r.data instanceof Error
        ? {
            type: 'error',
            error: r.data,
            statusCode: (o = r.init) == null ? void 0 : o.status,
            headers: (f = r.init) != null && f.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: new Ar(((d = r.init) == null ? void 0 : d.status) || 500, void 0, r.data),
            statusCode: Pu(r) ? r.status : void 0,
            headers: (g = r.init) != null && g.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: 'error', error: r, statusCode: Pu(r) ? r.status : void 0 }
    : Xm(r)
      ? {
          type: 'data',
          data: r.data,
          statusCode: (p = r.init) == null ? void 0 : p.status,
          headers: (m = r.init) != null && m.headers ? new Headers(r.init.headers) : void 0,
        }
      : { type: 'data', data: r };
}
function P0(n, r, c, o, f) {
  let d = n.headers.get('Location');
  if (
    (Me(d, 'Redirects returned/thrown from loaders/actions must have a Location header'),
    !Tf.test(d))
  ) {
    let g = o.slice(0, o.findIndex((p) => p.route.id === c) + 1);
    (d = hf(new URL(r.url), g, f, d)), n.headers.set('Location', d);
  }
  return n;
}
function Lm(n, r, c) {
  if (Tf.test(n)) {
    let o = n,
      f = o.startsWith('//') ? new URL(r.protocol + o) : new URL(o),
      d = ul(f.pathname, c) != null;
    if (f.origin === r.origin && d) return f.pathname + f.search + f.hash;
  }
  return n;
}
function Ln(n, r, c, o) {
  let f = n.createURL(bv(r)).toString(),
    d = { signal: c };
  if (o && fl(o.formMethod)) {
    let { formMethod: g, formEncType: p } = o;
    (d.method = g.toUpperCase()),
      p === 'application/json'
        ? ((d.headers = new Headers({ 'Content-Type': p })), (d.body = JSON.stringify(o.json)))
        : p === 'text/plain'
          ? (d.body = o.text)
          : p === 'application/x-www-form-urlencoded' && o.formData
            ? (d.body = vf(o.formData))
            : (d.body = o.formData);
  }
  return new Request(f, d);
}
function vf(n) {
  let r = new URLSearchParams();
  for (let [c, o] of n.entries()) r.append(c, typeof o == 'string' ? o : o.name);
  return r;
}
function Hm(n) {
  let r = new FormData();
  for (let [c, o] of n.entries()) r.append(c, o);
  return r;
}
function I0(n, r, c, o = !1, f = !1) {
  let d = {},
    g = null,
    p,
    m = !1,
    v = {},
    b = c && Yt(c[1]) ? c[1].error : void 0;
  return (
    n.forEach((M) => {
      if (!(M.route.id in r)) return;
      let R = M.route.id,
        O = r[R];
      if ((Me(!Ja(O), 'Cannot handle redirect results in processLoaderData'), Yt(O))) {
        let z = O.error;
        if ((b !== void 0 && ((z = b), (b = void 0)), (g = g || {}), f)) g[R] = z;
        else {
          let K = Ka(n, R);
          g[K.route.id] == null && (g[K.route.id] = z);
        }
        o || (d[R] = mv),
          m || ((m = !0), (p = Pu(O.error) ? O.error.status : 500)),
          O.headers && (v[R] = O.headers);
      } else
        (d[R] = O.data),
          O.statusCode && O.statusCode !== 200 && !m && (p = O.statusCode),
          O.headers && (v[R] = O.headers);
    }),
    b !== void 0 && c && ((g = { [c[0]]: b }), (d[c[0]] = void 0)),
    { loaderData: d, errors: g, statusCode: p || 200, loaderHeaders: v }
  );
}
function Bm(n, r, c, o, f, d) {
  let { loaderData: g, errors: p } = I0(r, c, o);
  return (
    f.forEach((m) => {
      let { key: v, match: b, controller: M } = m,
        R = d[v];
      if ((Me(R, 'Did not find corresponding fetcher result'), !(M && M.signal.aborted)))
        if (Yt(R)) {
          let O = Ka(n.matches, b == null ? void 0 : b.route.id);
          (p && p[O.route.id]) || (p = { ...p, [O.route.id]: R.error }), n.fetchers.delete(v);
        } else if (Ja(R)) Me(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let O = _a(R.data);
          n.fetchers.set(v, O);
        }
    }),
    { loaderData: g, errors: p }
  );
}
function qm(n, r, c, o) {
  let f = Object.entries(r)
    .filter(([, d]) => d !== mv)
    .reduce((d, [g, p]) => ((d[g] = p), d), {});
  for (let d of c) {
    let g = d.route.id;
    if (
      (!r.hasOwnProperty(g) && n.hasOwnProperty(g) && d.route.loader && (f[g] = n[g]),
      o && o.hasOwnProperty(g))
    )
      break;
  }
  return f;
}
function Ym(n) {
  return n ? (Yt(n[1]) ? { actionData: {} } : { actionData: { [n[0]]: n[1].data } }) : {};
}
function Ka(n, r) {
  return (
    (r ? n.slice(0, n.findIndex((o) => o.route.id === r) + 1) : [...n])
      .reverse()
      .find((o) => o.route.hasErrorBoundary === !0) || n[0]
  );
}
function Gm(n) {
  let r =
    n.length === 1
      ? n[0]
      : n.find((c) => c.index || !c.path || c.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: r }], route: r };
}
function nl(n, { pathname: r, routeId: c, method: o, type: f, message: d } = {}) {
  let g = 'Unknown Server Error',
    p = 'Unknown @remix-run/router error';
  return (
    n === 400
      ? ((g = 'Bad Request'),
        o && r && c
          ? (p = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${c}", so there is no way to handle the request.`)
          : f === 'invalid-body' && (p = 'Unable to encode submission body'))
      : n === 403
        ? ((g = 'Forbidden'), (p = `Route "${c}" does not match URL "${r}"`))
        : n === 404
          ? ((g = 'Not Found'), (p = `No route matches URL "${r}"`))
          : n === 405 &&
            ((g = 'Method Not Allowed'),
            o && r && c
              ? (p = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${c}", so there is no way to handle the request.`)
              : o && (p = `Invalid request method "${o.toUpperCase()}"`)),
    new Ar(n || 500, g, new Error(p), !0)
  );
}
function br(n) {
  let r = Object.entries(n);
  for (let c = r.length - 1; c >= 0; c--) {
    let [o, f] = r[c];
    if (Ja(f)) return { key: o, result: f };
  }
}
function bv(n) {
  let r = typeof n == 'string' ? Ta(n) : n;
  return xa({ ...r, hash: '' });
}
function ep(n, r) {
  return n.pathname !== r.pathname || n.search !== r.search
    ? !1
    : n.hash === ''
      ? r.hash !== ''
      : n.hash === r.hash
        ? !0
        : r.hash !== '';
}
function tp(n) {
  return Sv(n.result) && H0.has(n.result.status);
}
function Yt(n) {
  return n.type === 'error';
}
function Ja(n) {
  return (n && n.type) === 'redirect';
}
function Xm(n) {
  return (
    typeof n == 'object' &&
    n != null &&
    'type' in n &&
    'data' in n &&
    'init' in n &&
    n.type === 'DataWithResponseInit'
  );
}
function Sv(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.headers == 'object' &&
    typeof n.body < 'u'
  );
}
function lp(n) {
  return L0.has(n.toUpperCase());
}
function fl(n) {
  return w0.has(n.toUpperCase());
}
function Rf(n) {
  return new URLSearchParams(n).getAll('index').some((r) => r === '');
}
function ku(n, r) {
  let c = typeof r == 'string' ? Ta(r).search : r.search;
  if (n[n.length - 1].route.index && Rf(c || '')) return n[n.length - 1];
  let o = sv(n);
  return o[o.length - 1];
}
function Qm(n) {
  let { formMethod: r, formAction: c, formEncType: o, text: f, formData: d, json: g } = n;
  if (!(!r || !c || !o)) {
    if (f != null)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: f,
      };
    if (d != null)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: d,
        json: void 0,
        text: void 0,
      };
    if (g !== void 0)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: void 0,
        json: g,
        text: void 0,
      };
  }
}
function af(n, r) {
  return r
    ? {
        state: 'loading',
        location: n,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: 'loading',
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function ap(n, r) {
  return {
    state: 'submitting',
    location: n,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function Ku(n, r) {
  return n
    ? {
        state: 'loading',
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: r,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function np(n, r) {
  return {
    state: 'submitting',
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: r ? r.data : void 0,
  };
}
function _a(n) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function up(n, r) {
  try {
    let c = n.sessionStorage.getItem(hv);
    if (c) {
      let o = JSON.parse(c);
      for (let [f, d] of Object.entries(o || {}))
        d && Array.isArray(d) && r.set(f, new Set(d || []));
    }
  } catch {}
}
function ip(n, r) {
  if (r.size > 0) {
    let c = {};
    for (let [o, f] of r) c[o] = [...f];
    try {
      n.sessionStorage.setItem(hv, JSON.stringify(c));
    } catch (o) {
      ut(!1, `Failed to save applied view transitions in sessionStorage (${o}).`);
    }
  }
}
function rp() {
  let n,
    r,
    c = new Promise((o, f) => {
      (n = async (d) => {
        o(d);
        try {
          await c;
        } catch {}
      }),
        (r = async (d) => {
          f(d);
          try {
            await c;
          } catch {}
        });
    });
  return { promise: c, resolve: n, reject: r };
}
var Wa = w.createContext(null);
Wa.displayName = 'DataRouter';
var ti = w.createContext(null);
ti.displayName = 'DataRouterState';
var Mf = w.createContext({ isTransitioning: !1 });
Mf.displayName = 'ViewTransition';
var _v = w.createContext(new Map());
_v.displayName = 'Fetchers';
var cp = w.createContext(null);
cp.displayName = 'Await';
var Tl = w.createContext(null);
Tl.displayName = 'Navigation';
var Ur = w.createContext(null);
Ur.displayName = 'Location';
var Rl = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Rl.displayName = 'Route';
var Df = w.createContext(null);
Df.displayName = 'RouteError';
function op(n, { relative: r } = {}) {
  Me(li(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: c, navigator: o } = w.useContext(Tl),
    { hash: f, pathname: d, search: g } = ai(n, { relative: r }),
    p = d;
  return (
    c !== '/' && (p = d === '/' ? c : xl([c, d])), o.createHref({ pathname: p, search: g, hash: f })
  );
}
function li() {
  return w.useContext(Ur) != null;
}
function Fa() {
  return (
    Me(li(), 'useLocation() may be used only in the context of a <Router> component.'),
    w.useContext(Ur).location
  );
}
var Ev =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function xv(n) {
  w.useContext(Tl).static || w.useLayoutEffect(n);
}
function fp() {
  let { isDataRoute: n } = w.useContext(Rl);
  return n ? Rp() : sp();
}
function sp() {
  Me(li(), 'useNavigate() may be used only in the context of a <Router> component.');
  let n = w.useContext(Wa),
    { basename: r, navigator: c } = w.useContext(Tl),
    { matches: o } = w.useContext(Rl),
    { pathname: f } = Fa(),
    d = JSON.stringify(Ef(o)),
    g = w.useRef(!1);
  return (
    xv(() => {
      g.current = !0;
    }),
    w.useCallback(
      (m, v = {}) => {
        if ((ut(g.current, Ev), !g.current)) return;
        if (typeof m == 'number') {
          c.go(m);
          return;
        }
        let b = xf(m, JSON.parse(d), f, v.relative === 'path');
        n == null && r !== '/' && (b.pathname = b.pathname === '/' ? r : xl([r, b.pathname])),
          (v.replace ? c.replace : c.push)(b, v.state, v);
      },
      [r, c, d, f, n],
    )
  );
}
var dp = w.createContext(null);
function hp(n) {
  let r = w.useContext(Rl).outlet;
  return r && w.createElement(dp.Provider, { value: n }, r);
}
function ai(n, { relative: r } = {}) {
  let { matches: c } = w.useContext(Rl),
    { pathname: o } = Fa(),
    f = JSON.stringify(Ef(c));
  return w.useMemo(() => xf(n, JSON.parse(f), o, r === 'path'), [n, f, o, r]);
}
function mp(n, r, c, o) {
  Me(li(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: f, static: d } = w.useContext(Tl),
    { matches: g } = w.useContext(Rl),
    p = g[g.length - 1],
    m = p ? p.params : {},
    v = p ? p.pathname : '/',
    b = p ? p.pathnameBase : '/',
    M = p && p.route;
  {
    let J = (M && M.path) || '';
    Tv(
      v,
      !M || J.endsWith('*') || J.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J === '/' ? '*' : `${J}/*`}">.`,
    );
  }
  let R = Fa(),
    O;
  O = R;
  let z = O.pathname || '/',
    K = z;
  if (b !== '/') {
    let J = b.replace(/^\//, '').split('/');
    K = '/' + z.replace(/^\//, '').split('/').slice(J.length).join('/');
  }
  let H = !d && c && c.matches && c.matches.length > 0 ? c.matches : Ea(n, { pathname: K });
  return (
    ut(M || H != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `),
    ut(
      H == null ||
        H[H.length - 1].route.element !== void 0 ||
        H[H.length - 1].route.Component !== void 0 ||
        H[H.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    bp(
      H &&
        H.map((J) =>
          Object.assign({}, J, {
            params: Object.assign({}, m, J.params),
            pathname: xl([
              b,
              f.encodeLocation ? f.encodeLocation(J.pathname).pathname : J.pathname,
            ]),
            pathnameBase:
              J.pathnameBase === '/'
                ? b
                : xl([
                    b,
                    f.encodeLocation ? f.encodeLocation(J.pathnameBase).pathname : J.pathnameBase,
                  ]),
          }),
        ),
      g,
      c,
      o,
    )
  );
}
function vp() {
  let n = Tp(),
    r = Pu(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n),
    c = n instanceof Error ? n.stack : null,
    o = 'rgba(200,200,200, 0.5)',
    f = { padding: '0.5rem', backgroundColor: o },
    d = { padding: '2px 4px', backgroundColor: o },
    g = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (g = w.createElement(
      w.Fragment,
      null,
      w.createElement('p', null, '💿 Hey developer 👋'),
      w.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        w.createElement('code', { style: d }, 'ErrorBoundary'),
        ' or',
        ' ',
        w.createElement('code', { style: d }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement('h2', null, 'Unexpected Application Error!'),
      w.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      c ? w.createElement('pre', { style: f }, c) : null,
      g,
    )
  );
}
var yp = w.createElement(vp, null),
  gp = class extends w.Component {
    constructor(n) {
      super(n),
        (this.state = { location: n.location, revalidation: n.revalidation, error: n.error });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, r) {
      return r.location !== n.location || (r.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : r.error,
            location: r.location,
            revalidation: n.revalidation || r.revalidation,
          };
    }
    componentDidCatch(n, r) {
      console.error('React Router caught the following error during render', n, r);
    }
    render() {
      return this.state.error !== void 0
        ? w.createElement(
            Rl.Provider,
            { value: this.props.routeContext },
            w.createElement(Df.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function pp({ routeContext: n, match: r, children: c }) {
  let o = w.useContext(Wa);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(Rl.Provider, { value: n }, c)
  );
}
function bp(n, r = [], c = null, o = null) {
  if (n == null) {
    if (!c) return null;
    if (c.errors) n = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0) n = c.matches;
    else return null;
  }
  let f = n,
    d = c == null ? void 0 : c.errors;
  if (d != null) {
    let m = f.findIndex((v) => v.route.id && (d == null ? void 0 : d[v.route.id]) !== void 0);
    Me(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(',')}`,
    ),
      (f = f.slice(0, Math.min(f.length, m + 1)));
  }
  let g = !1,
    p = -1;
  if (c)
    for (let m = 0; m < f.length; m++) {
      let v = f[m];
      if (((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = m), v.route.id)) {
        let { loaderData: b, errors: M } = c,
          R = v.route.loader && !b.hasOwnProperty(v.route.id) && (!M || M[v.route.id] === void 0);
        if (v.route.lazy || R) {
          (g = !0), p >= 0 ? (f = f.slice(0, p + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((m, v, b) => {
    let M,
      R = !1,
      O = null,
      z = null;
    c &&
      ((M = d && v.route.id ? d[v.route.id] : void 0),
      (O = v.route.errorElement || yp),
      g &&
        (p < 0 && b === 0
          ? (Tv(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (R = !0),
            (z = null))
          : p === b && ((R = !0), (z = v.route.hydrateFallbackElement || null))));
    let K = r.concat(f.slice(0, b + 1)),
      H = () => {
        let G;
        return (
          M
            ? (G = O)
            : R
              ? (G = z)
              : v.route.Component
                ? (G = w.createElement(v.route.Component, null))
                : v.route.element
                  ? (G = v.route.element)
                  : (G = m),
          w.createElement(pp, {
            match: v,
            routeContext: { outlet: m, matches: K, isDataRoute: c != null },
            children: G,
          })
        );
      };
    return c && (v.route.ErrorBoundary || v.route.errorElement || b === 0)
      ? w.createElement(gp, {
          location: c.location,
          revalidation: c.revalidation,
          component: O,
          error: M,
          children: H(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
        })
      : H();
  }, null);
}
function Af(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Sp(n) {
  let r = w.useContext(Wa);
  return Me(r, Af(n)), r;
}
function _p(n) {
  let r = w.useContext(ti);
  return Me(r, Af(n)), r;
}
function Ep(n) {
  let r = w.useContext(Rl);
  return Me(r, Af(n)), r;
}
function Cf(n) {
  let r = Ep(n),
    c = r.matches[r.matches.length - 1];
  return Me(c.route.id, `${n} can only be used on routes that contain a unique "id"`), c.route.id;
}
function xp() {
  return Cf('useRouteId');
}
function Tp() {
  var o;
  let n = w.useContext(Df),
    r = _p('useRouteError'),
    c = Cf('useRouteError');
  return n !== void 0 ? n : (o = r.errors) == null ? void 0 : o[c];
}
function Rp() {
  let { router: n } = Sp('useNavigate'),
    r = Cf('useNavigate'),
    c = w.useRef(!1);
  return (
    xv(() => {
      c.current = !0;
    }),
    w.useCallback(
      async (f, d = {}) => {
        ut(c.current, Ev),
          c.current &&
            (typeof f == 'number' ? n.navigate(f) : await n.navigate(f, { fromRouteId: r, ...d }));
      },
      [n, r],
    )
  );
}
var Vm = {};
function Tv(n, r, c) {
  !r && !Vm[n] && ((Vm[n] = !0), ut(!1, c));
}
var Zm = {};
function Km(n, r) {
  !n && !Zm[r] && ((Zm[r] = !0), console.warn(r));
}
function Mp(n) {
  let r = {
    hasErrorBoundary: n.hasErrorBoundary || n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      (n.element &&
        ut(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.',
        ),
      Object.assign(r, { element: w.createElement(n.Component), Component: void 0 })),
    n.HydrateFallback &&
      (n.hydrateFallbackElement &&
        ut(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
        ),
      Object.assign(r, {
        hydrateFallbackElement: w.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      })),
    n.ErrorBoundary &&
      (n.errorElement &&
        ut(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
        ),
      Object.assign(r, { errorElement: w.createElement(n.ErrorBoundary), ErrorBoundary: void 0 })),
    r
  );
}
var Dp = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((n, r) => {
        (this.resolve = (c) => {
          this.status === 'pending' && ((this.status = 'resolved'), n(c));
        }),
          (this.reject = (c) => {
            this.status === 'pending' && ((this.status = 'rejected'), r(c));
          });
      }));
  }
};
function Ap({ router: n, flushSync: r }) {
  let [c, o] = w.useState(n.state),
    [f, d] = w.useState(),
    [g, p] = w.useState({ isTransitioning: !1 }),
    [m, v] = w.useState(),
    [b, M] = w.useState(),
    [R, O] = w.useState(),
    z = w.useRef(new Map()),
    K = w.useCallback(
      (V, { deletedFetchers: W, flushSync: x, viewTransitionOpts: I }) => {
        V.fetchers.forEach((ee, ge) => {
          ee.data !== void 0 && z.current.set(ge, ee.data);
        }),
          W.forEach((ee) => z.current.delete(ee)),
          Km(
            x === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          );
        let se =
          n.window != null &&
          n.window.document != null &&
          typeof n.window.document.startViewTransition == 'function';
        if (
          (Km(
            I == null || se,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.',
          ),
          !I || !se)
        ) {
          r && x ? r(() => o(V)) : w.startTransition(() => o(V));
          return;
        }
        if (r && x) {
          r(() => {
            b && (m && m.resolve(), b.skipTransition()),
              p({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: I.currentLocation,
                nextLocation: I.nextLocation,
              });
          });
          let ee = n.window.document.startViewTransition(() => {
            r(() => o(V));
          });
          ee.finished.finally(() => {
            r(() => {
              v(void 0), M(void 0), d(void 0), p({ isTransitioning: !1 });
            });
          }),
            r(() => M(ee));
          return;
        }
        b
          ? (m && m.resolve(),
            b.skipTransition(),
            O({ state: V, currentLocation: I.currentLocation, nextLocation: I.nextLocation }))
          : (d(V),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: I.currentLocation,
              nextLocation: I.nextLocation,
            }));
      },
      [n.window, r, b, m],
    );
  w.useLayoutEffect(() => n.subscribe(K), [n, K]),
    w.useEffect(() => {
      g.isTransitioning && !g.flushSync && v(new Dp());
    }, [g]),
    w.useEffect(() => {
      if (m && f && n.window) {
        let V = f,
          W = m.promise,
          x = n.window.document.startViewTransition(async () => {
            w.startTransition(() => o(V)), await W;
          });
        x.finished.finally(() => {
          v(void 0), M(void 0), d(void 0), p({ isTransitioning: !1 });
        }),
          M(x);
      }
    }, [f, m, n.window]),
    w.useEffect(() => {
      m && f && c.location.key === f.location.key && m.resolve();
    }, [m, b, c.location, f]),
    w.useEffect(() => {
      !g.isTransitioning &&
        R &&
        (d(R.state),
        p({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: R.currentLocation,
          nextLocation: R.nextLocation,
        }),
        O(void 0));
    }, [g.isTransitioning, R]);
  let H = w.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (V) => n.navigate(V),
        push: (V, W, x) =>
          n.navigate(V, {
            state: W,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
        replace: (V, W, x) =>
          n.navigate(V, {
            replace: !0,
            state: W,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
      }),
      [n],
    ),
    G = n.basename || '/',
    J = w.useMemo(() => ({ router: n, navigator: H, static: !1, basename: G }), [n, H, G]);
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      Wa.Provider,
      { value: J },
      w.createElement(
        ti.Provider,
        { value: c },
        w.createElement(
          _v.Provider,
          { value: z.current },
          w.createElement(
            Mf.Provider,
            { value: g },
            w.createElement(
              zp,
              { basename: G, location: c.location, navigationType: c.historyAction, navigator: H },
              w.createElement(Cp, { routes: n.routes, future: n.future, state: c }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var Cp = w.memo(jp);
function jp({ routes: n, future: r, state: c }) {
  return mp(n, void 0, c, r);
}
function Op(n) {
  return hp(n.context);
}
function zp({
  basename: n = '/',
  children: r = null,
  location: c,
  navigationType: o = 'POP',
  navigator: f,
  static: d = !1,
}) {
  Me(
    !li(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let g = n.replace(/^\/*/, '/'),
    p = w.useMemo(() => ({ basename: g, navigator: f, static: d, future: {} }), [g, f, d]);
  typeof c == 'string' && (c = Ta(c));
  let { pathname: m = '/', search: v = '', hash: b = '', state: M = null, key: R = 'default' } = c,
    O = w.useMemo(() => {
      let z = ul(m, g);
      return z == null
        ? null
        : { location: { pathname: z, search: v, hash: b, state: M, key: R }, navigationType: o };
    }, [g, m, v, b, M, R, o]);
  return (
    ut(
      O != null,
      `<Router basename="${g}"> is not able to match the URL "${m}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    O == null
      ? null
      : w.createElement(
          Tl.Provider,
          { value: p },
          w.createElement(Ur.Provider, { children: r, value: O }),
        )
  );
}
var Tr = 'get',
  Rr = 'application/x-www-form-urlencoded';
function Lr(n) {
  return n != null && typeof n.tagName == 'string';
}
function Np(n) {
  return Lr(n) && n.tagName.toLowerCase() === 'button';
}
function wp(n) {
  return Lr(n) && n.tagName.toLowerCase() === 'form';
}
function Up(n) {
  return Lr(n) && n.tagName.toLowerCase() === 'input';
}
function Lp(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Hp(n, r) {
  return n.button === 0 && (!r || r === '_self') && !Lp(n);
}
var Sr = null;
function Bp() {
  if (Sr === null)
    try {
      new FormData(document.createElement('form'), 0), (Sr = !1);
    } catch {
      Sr = !0;
    }
  return Sr;
}
var qp = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function nf(n) {
  return n != null && !qp.has(n)
    ? (ut(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rr}"`,
      ),
      null)
    : n;
}
function Yp(n, r) {
  let c, o, f, d, g;
  if (wp(n)) {
    let p = n.getAttribute('action');
    (o = p ? ul(p, r) : null),
      (c = n.getAttribute('method') || Tr),
      (f = nf(n.getAttribute('enctype')) || Rr),
      (d = new FormData(n));
  } else if (Np(n) || (Up(n) && (n.type === 'submit' || n.type === 'image'))) {
    let p = n.form;
    if (p == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let m = n.getAttribute('formaction') || p.getAttribute('action');
    if (
      ((o = m ? ul(m, r) : null),
      (c = n.getAttribute('formmethod') || p.getAttribute('method') || Tr),
      (f = nf(n.getAttribute('formenctype')) || nf(p.getAttribute('enctype')) || Rr),
      (d = new FormData(p, n)),
      !Bp())
    ) {
      let { name: v, type: b, value: M } = n;
      if (b === 'image') {
        let R = v ? `${v}.` : '';
        d.append(`${R}x`, '0'), d.append(`${R}y`, '0');
      } else v && d.append(v, M);
    }
  } else {
    if (Lr(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (c = Tr), (o = null), (f = Rr), (g = n);
  }
  return (
    d && f === 'text/plain' && ((g = d), (d = void 0)),
    { action: o, method: c.toLowerCase(), encType: f, formData: d, body: g }
  );
}
function jf(n, r) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(r);
}
async function Gp(n, r) {
  if (n.id in r) return r[n.id];
  try {
    let c = await import(n.module);
    return (r[n.id] = c), c;
  } catch (c) {
    return (
      console.error(`Error loading route module \`${n.module}\`, reloading page...`),
      console.error(c),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Xp(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' && typeof n.imageSrcSet == 'string' && typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function Qp(n, r, c) {
  let o = await Promise.all(
    n.map(async (f) => {
      let d = r.routes[f.route.id];
      if (d) {
        let g = await Gp(d, c);
        return g.links ? g.links() : [];
      }
      return [];
    }),
  );
  return Jp(
    o
      .flat(1)
      .filter(Xp)
      .filter((f) => f.rel === 'stylesheet' || f.rel === 'preload')
      .map((f) =>
        f.rel === 'stylesheet' ? { ...f, rel: 'prefetch', as: 'style' } : { ...f, rel: 'prefetch' },
      ),
  );
}
function Jm(n, r, c, o, f, d) {
  let g = (m, v) => (c[v] ? m.route.id !== c[v].route.id : !0),
    p = (m, v) => {
      var b;
      return (
        c[v].pathname !== m.pathname ||
        (((b = c[v].route.path) == null ? void 0 : b.endsWith('*')) &&
          c[v].params['*'] !== m.params['*'])
      );
    };
  return d === 'assets'
    ? r.filter((m, v) => g(m, v) || p(m, v))
    : d === 'data'
      ? r.filter((m, v) => {
          var M;
          let b = o.routes[m.route.id];
          if (!b || !b.hasLoader) return !1;
          if (g(m, v) || p(m, v)) return !0;
          if (m.route.shouldRevalidate) {
            let R = m.route.shouldRevalidate({
              currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
              currentParams: ((M = c[0]) == null ? void 0 : M.params) || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof R == 'boolean') return R;
          }
          return !0;
        })
      : [];
}
function Vp(n, r, { includeHydrateFallback: c } = {}) {
  return Zp(
    n
      .map((o) => {
        let f = r.routes[o.route.id];
        if (!f) return [];
        let d = [f.module];
        return (
          f.clientActionModule && (d = d.concat(f.clientActionModule)),
          f.clientLoaderModule && (d = d.concat(f.clientLoaderModule)),
          c && f.hydrateFallbackModule && (d = d.concat(f.hydrateFallbackModule)),
          f.imports && (d = d.concat(f.imports)),
          d
        );
      })
      .flat(1),
  );
}
function Zp(n) {
  return [...new Set(n)];
}
function Kp(n) {
  let r = {},
    c = Object.keys(n).sort();
  for (let o of c) r[o] = n[o];
  return r;
}
function Jp(n, r) {
  let c = new Set();
  return (
    new Set(r),
    n.reduce((o, f) => {
      let d = JSON.stringify(Kp(f));
      return c.has(d) || (c.add(d), o.push({ key: d, link: f })), o;
    }, [])
  );
}
function $p(n, r) {
  let c =
    typeof n == 'string'
      ? new URL(n, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : n;
  return (
    c.pathname === '/'
      ? (c.pathname = '_root.data')
      : r && ul(c.pathname, r) === '/'
        ? (c.pathname = `${r.replace(/\/$/, '')}/_root.data`)
        : (c.pathname = `${c.pathname.replace(/\/$/, '')}.data`),
    c
  );
}
function Rv() {
  let n = w.useContext(Wa);
  return jf(n, 'You must render this element inside a <DataRouterContext.Provider> element'), n;
}
function kp() {
  let n = w.useContext(ti);
  return (
    jf(n, 'You must render this element inside a <DataRouterStateContext.Provider> element'), n
  );
}
var Of = w.createContext(void 0);
Of.displayName = 'FrameworkContext';
function Mv() {
  let n = w.useContext(Of);
  return jf(n, 'You must render this element inside a <HydratedRouter> element'), n;
}
function Wp(n, r) {
  let c = w.useContext(Of),
    [o, f] = w.useState(!1),
    [d, g] = w.useState(!1),
    { onFocus: p, onBlur: m, onMouseEnter: v, onMouseLeave: b, onTouchStart: M } = r,
    R = w.useRef(null);
  w.useEffect(() => {
    if ((n === 'render' && g(!0), n === 'viewport')) {
      let K = (G) => {
          G.forEach((J) => {
            g(J.isIntersecting);
          });
        },
        H = new IntersectionObserver(K, { threshold: 0.5 });
      return (
        R.current && H.observe(R.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [n]),
    w.useEffect(() => {
      if (o) {
        let K = setTimeout(() => {
          g(!0);
        }, 100);
        return () => {
          clearTimeout(K);
        };
      }
    }, [o]);
  let O = () => {
      f(!0);
    },
    z = () => {
      f(!1), g(!1);
    };
  return c
    ? n !== 'intent'
      ? [d, R, {}]
      : [
          d,
          R,
          {
            onFocus: Ju(p, O),
            onBlur: Ju(m, z),
            onMouseEnter: Ju(v, O),
            onMouseLeave: Ju(b, z),
            onTouchStart: Ju(M, O),
          },
        ]
    : [!1, R, {}];
}
function Ju(n, r) {
  return (c) => {
    n && n(c), c.defaultPrevented || r(c);
  };
}
function Fp({ page: n, ...r }) {
  let { router: c } = Rv(),
    o = w.useMemo(() => Ea(c.routes, n, c.basename), [c.routes, n, c.basename]);
  return o ? w.createElement(Ip, { page: n, matches: o, ...r }) : null;
}
function Pp(n) {
  let { manifest: r, routeModules: c } = Mv(),
    [o, f] = w.useState([]);
  return (
    w.useEffect(() => {
      let d = !1;
      return (
        Qp(n, r, c).then((g) => {
          d || f(g);
        }),
        () => {
          d = !0;
        }
      );
    }, [n, r, c]),
    o
  );
}
function Ip({ page: n, matches: r, ...c }) {
  let o = Fa(),
    { manifest: f, routeModules: d } = Mv(),
    { basename: g } = Rv(),
    { loaderData: p, matches: m } = kp(),
    v = w.useMemo(() => Jm(n, r, m, f, o, 'data'), [n, r, m, f, o]),
    b = w.useMemo(() => Jm(n, r, m, f, o, 'assets'), [n, r, m, f, o]),
    M = w.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let z = new Set(),
        K = !1;
      if (
        (r.forEach((G) => {
          var V;
          let J = f.routes[G.route.id];
          !J ||
            !J.hasLoader ||
            ((!v.some((W) => W.route.id === G.route.id) &&
              G.route.id in p &&
              (V = d[G.route.id]) != null &&
              V.shouldRevalidate) ||
            J.hasClientLoader
              ? (K = !0)
              : z.add(G.route.id));
        }),
        z.size === 0)
      )
        return [];
      let H = $p(n, g);
      return (
        K &&
          z.size > 0 &&
          H.searchParams.set(
            '_routes',
            r
              .filter((G) => z.has(G.route.id))
              .map((G) => G.route.id)
              .join(','),
          ),
        [H.pathname + H.search]
      );
    }, [g, p, o, f, v, r, n, d]),
    R = w.useMemo(() => Vp(b, f), [b, f]),
    O = Pp(b);
  return w.createElement(
    w.Fragment,
    null,
    M.map((z) => w.createElement('link', { key: z, rel: 'prefetch', as: 'fetch', href: z, ...c })),
    R.map((z) => w.createElement('link', { key: z, rel: 'modulepreload', href: z, ...c })),
    O.map(({ key: z, link: K }) => w.createElement('link', { key: z, ...K })),
  );
}
function eb(...n) {
  return (r) => {
    n.forEach((c) => {
      typeof c == 'function' ? c(r) : c != null && (c.current = r);
    });
  };
}
var Dv =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Dv && (window.__reactRouterVersion = '7.5.0');
} catch {}
function tb(n, r) {
  return G0({
    basename: r == null ? void 0 : r.basename,
    unstable_getContext: r == null ? void 0 : r.unstable_getContext,
    future: r == null ? void 0 : r.future,
    history: c0({ window: r == null ? void 0 : r.window }),
    hydrationData: lb(),
    routes: n,
    mapRouteProperties: Mp,
    dataStrategy: r == null ? void 0 : r.dataStrategy,
    patchRoutesOnNavigation: r == null ? void 0 : r.patchRoutesOnNavigation,
    window: r == null ? void 0 : r.window,
  }).initialize();
}
function lb() {
  let n = window == null ? void 0 : window.__staticRouterHydrationData;
  return n && n.errors && (n = { ...n, errors: ab(n.errors) }), n;
}
function ab(n) {
  if (!n) return null;
  let r = Object.entries(n),
    c = {};
  for (let [o, f] of r)
    if (f && f.__type === 'RouteErrorResponse')
      c[o] = new Ar(f.status, f.statusText, f.data, f.internal === !0);
    else if (f && f.__type === 'Error') {
      if (f.__subType) {
        let d = window[f.__subType];
        if (typeof d == 'function')
          try {
            let g = new d(f.message);
            (g.stack = ''), (c[o] = g);
          } catch {}
      }
      if (c[o] == null) {
        let d = new Error(f.message);
        (d.stack = ''), (c[o] = d);
      }
    } else c[o] = f;
  return c;
}
var Av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cv = w.forwardRef(function (
    {
      onClick: r,
      discover: c = 'render',
      prefetch: o = 'none',
      relative: f,
      reloadDocument: d,
      replace: g,
      state: p,
      target: m,
      to: v,
      preventScrollReset: b,
      viewTransition: M,
      ...R
    },
    O,
  ) {
    let { basename: z } = w.useContext(Tl),
      K = typeof v == 'string' && Av.test(v),
      H,
      G = !1;
    if (typeof v == 'string' && K && ((H = v), Dv))
      try {
        let ge = new URL(window.location.href),
          Ne = v.startsWith('//') ? new URL(ge.protocol + v) : new URL(v),
          Je = ul(Ne.pathname, z);
        Ne.origin === ge.origin && Je != null ? (v = Je + Ne.search + Ne.hash) : (G = !0);
      } catch {
        ut(
          !1,
          `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let J = op(v, { relative: f }),
      [V, W, x] = Wp(o, R),
      I = rb(v, {
        replace: g,
        state: p,
        target: m,
        preventScrollReset: b,
        relative: f,
        viewTransition: M,
      });
    function se(ge) {
      r && r(ge), ge.defaultPrevented || I(ge);
    }
    let ee = w.createElement('a', {
      ...R,
      ...x,
      href: H || J,
      onClick: G || d ? r : se,
      ref: eb(O, W),
      target: m,
      'data-discover': !K && c === 'render' ? 'true' : void 0,
    });
    return V && !K ? w.createElement(w.Fragment, null, ee, w.createElement(Fp, { page: J })) : ee;
  });
Cv.displayName = 'Link';
var nb = w.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: c = !1,
    className: o = '',
    end: f = !1,
    style: d,
    to: g,
    viewTransition: p,
    children: m,
    ...v
  },
  b,
) {
  let M = ai(g, { relative: v.relative }),
    R = Fa(),
    O = w.useContext(ti),
    { navigator: z, basename: K } = w.useContext(Tl),
    H = O != null && db(M) && p === !0,
    G = z.encodeLocation ? z.encodeLocation(M).pathname : M.pathname,
    J = R.pathname,
    V = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
  c || ((J = J.toLowerCase()), (V = V ? V.toLowerCase() : null), (G = G.toLowerCase())),
    V && K && (V = ul(V, K) || V);
  const W = G !== '/' && G.endsWith('/') ? G.length - 1 : G.length;
  let x = J === G || (!f && J.startsWith(G) && J.charAt(W) === '/'),
    I = V != null && (V === G || (!f && V.startsWith(G) && V.charAt(G.length) === '/')),
    se = { isActive: x, isPending: I, isTransitioning: H },
    ee = x ? r : void 0,
    ge;
  typeof o == 'function'
    ? (ge = o(se))
    : (ge = [o, x ? 'active' : null, I ? 'pending' : null, H ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let Ne = typeof d == 'function' ? d(se) : d;
  return w.createElement(
    Cv,
    { ...v, 'aria-current': ee, className: ge, ref: b, style: Ne, to: g, viewTransition: p },
    typeof m == 'function' ? m(se) : m,
  );
});
nb.displayName = 'NavLink';
var ub = w.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: r,
      navigate: c,
      reloadDocument: o,
      replace: f,
      state: d,
      method: g = Tr,
      action: p,
      onSubmit: m,
      relative: v,
      preventScrollReset: b,
      viewTransition: M,
      ...R
    },
    O,
  ) => {
    let z = fb(),
      K = sb(p, { relative: v }),
      H = g.toLowerCase() === 'get' ? 'get' : 'post',
      G = typeof p == 'string' && Av.test(p),
      J = (V) => {
        if ((m && m(V), V.defaultPrevented)) return;
        V.preventDefault();
        let W = V.nativeEvent.submitter,
          x = (W == null ? void 0 : W.getAttribute('formmethod')) || g;
        z(W || V.currentTarget, {
          fetcherKey: r,
          method: x,
          navigate: c,
          replace: f,
          state: d,
          relative: v,
          preventScrollReset: b,
          viewTransition: M,
        });
      };
    return w.createElement('form', {
      ref: O,
      method: H,
      action: K,
      onSubmit: o ? m : J,
      ...R,
      'data-discover': !G && n === 'render' ? 'true' : void 0,
    });
  },
);
ub.displayName = 'Form';
function ib(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jv(n) {
  let r = w.useContext(Wa);
  return Me(r, ib(n)), r;
}
function rb(
  n,
  { target: r, replace: c, state: o, preventScrollReset: f, relative: d, viewTransition: g } = {},
) {
  let p = fp(),
    m = Fa(),
    v = ai(n, { relative: d });
  return w.useCallback(
    (b) => {
      if (Hp(b, r)) {
        b.preventDefault();
        let M = c !== void 0 ? c : xa(m) === xa(v);
        p(n, { replace: M, state: o, preventScrollReset: f, relative: d, viewTransition: g });
      }
    },
    [m, p, v, c, o, r, n, f, d, g],
  );
}
var cb = 0,
  ob = () => `__${String(++cb)}__`;
function fb() {
  let { router: n } = jv('useSubmit'),
    { basename: r } = w.useContext(Tl),
    c = xp();
  return w.useCallback(
    async (o, f = {}) => {
      let { action: d, method: g, encType: p, formData: m, body: v } = Yp(o, r);
      if (f.navigate === !1) {
        let b = f.fetcherKey || ob();
        await n.fetch(b, c, f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: m,
          body: v,
          formMethod: f.method || g,
          formEncType: f.encType || p,
          flushSync: f.flushSync,
        });
      } else
        await n.navigate(f.action || d, {
          preventScrollReset: f.preventScrollReset,
          formData: m,
          body: v,
          formMethod: f.method || g,
          formEncType: f.encType || p,
          replace: f.replace,
          state: f.state,
          fromRouteId: c,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [n, r, c],
  );
}
function sb(n, { relative: r } = {}) {
  let { basename: c } = w.useContext(Tl),
    o = w.useContext(Rl);
  Me(o, 'useFormAction must be used inside a RouteContext');
  let [f] = o.matches.slice(-1),
    d = { ...ai(n || '.', { relative: r }) },
    g = Fa();
  if (n == null) {
    d.search = g.search;
    let p = new URLSearchParams(d.search),
      m = p.getAll('index');
    if (m.some((b) => b === '')) {
      p.delete('index'), m.filter((M) => M).forEach((M) => p.append('index', M));
      let b = p.toString();
      d.search = b ? `?${b}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      f.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    c !== '/' && (d.pathname = d.pathname === '/' ? c : xl([c, d.pathname])),
    xa(d)
  );
}
function db(n, r = {}) {
  let c = w.useContext(Mf);
  Me(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = jv('useViewTransitionState'),
    f = ai(n, { relative: r.relative });
  if (!c.isTransitioning) return !1;
  let d = ul(c.currentLocation.pathname, o) || c.currentLocation.pathname,
    g = ul(c.nextLocation.pathname, o) || c.nextLocation.pathname;
  return Dr(f.pathname, g) != null || Dr(f.pathname, d) != null;
}
new TextEncoder();
var hb = rv();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mb(n) {
  return w.createElement(Ap, { flushSync: hb.flushSync, ...n });
}
const vb = '_header_k6b5g_1',
  yb = '_pcMenu_k6b5g_11',
  gb = '_logo_k6b5g_15',
  pb = '_navMenu_k6b5g_20',
  bb = '_navMenuItem_k6b5g_28',
  Sb = '_dropdownMenu_k6b5g_49',
  _b = '_download_k6b5g_78',
  Eb = '_lanToggle_k6b5g_101',
  Ot = {
    header: vb,
    pcMenu: yb,
    logo: gb,
    navMenu: pb,
    navMenuItem: bb,
    dropdownMenu: Sb,
    download: _b,
    lanToggle: Eb,
  };
function gt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var xb = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  $m = xb,
  uf = () => Math.random().toString(36).substring(7).split('').join('.'),
  Tb = {
    INIT: `@@redux/INIT${uf()}`,
    REPLACE: `@@redux/REPLACE${uf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${uf()}`,
  },
  Cr = Tb;
function zf(n) {
  if (typeof n != 'object' || n === null) return !1;
  let r = n;
  for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(n) === r || Object.getPrototypeOf(n) === null;
}
function Ov(n, r, c) {
  if (typeof n != 'function') throw new Error(gt(2));
  if (
    (typeof r == 'function' && typeof c == 'function') ||
    (typeof c == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(gt(0));
  if ((typeof r == 'function' && typeof c > 'u' && ((c = r), (r = void 0)), typeof c < 'u')) {
    if (typeof c != 'function') throw new Error(gt(1));
    return c(Ov)(n, r);
  }
  let o = n,
    f = r,
    d = new Map(),
    g = d,
    p = 0,
    m = !1;
  function v() {
    g === d &&
      ((g = new Map()),
      d.forEach((H, G) => {
        g.set(G, H);
      }));
  }
  function b() {
    if (m) throw new Error(gt(3));
    return f;
  }
  function M(H) {
    if (typeof H != 'function') throw new Error(gt(4));
    if (m) throw new Error(gt(5));
    let G = !0;
    v();
    const J = p++;
    return (
      g.set(J, H),
      function () {
        if (G) {
          if (m) throw new Error(gt(6));
          (G = !1), v(), g.delete(J), (d = null);
        }
      }
    );
  }
  function R(H) {
    if (!zf(H)) throw new Error(gt(7));
    if (typeof H.type > 'u') throw new Error(gt(8));
    if (typeof H.type != 'string') throw new Error(gt(17));
    if (m) throw new Error(gt(9));
    try {
      (m = !0), (f = o(f, H));
    } finally {
      m = !1;
    }
    return (
      (d = g).forEach((J) => {
        J();
      }),
      H
    );
  }
  function O(H) {
    if (typeof H != 'function') throw new Error(gt(10));
    (o = H), R({ type: Cr.REPLACE });
  }
  function z() {
    const H = M;
    return {
      subscribe(G) {
        if (typeof G != 'object' || G === null) throw new Error(gt(11));
        function J() {
          const W = G;
          W.next && W.next(b());
        }
        return J(), { unsubscribe: H(J) };
      },
      [$m]() {
        return this;
      },
    };
  }
  return (
    R({ type: Cr.INIT }), { dispatch: R, subscribe: M, getState: b, replaceReducer: O, [$m]: z }
  );
}
function Rb(n) {
  Object.keys(n).forEach((r) => {
    const c = n[r];
    if (typeof c(void 0, { type: Cr.INIT }) > 'u') throw new Error(gt(12));
    if (typeof c(void 0, { type: Cr.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(gt(13));
  });
}
function Mb(n) {
  const r = Object.keys(n),
    c = {};
  for (let d = 0; d < r.length; d++) {
    const g = r[d];
    typeof n[g] == 'function' && (c[g] = n[g]);
  }
  const o = Object.keys(c);
  let f;
  try {
    Rb(c);
  } catch (d) {
    f = d;
  }
  return function (g = {}, p) {
    if (f) throw f;
    let m = !1;
    const v = {};
    for (let b = 0; b < o.length; b++) {
      const M = o[b],
        R = c[M],
        O = g[M],
        z = R(O, p);
      if (typeof z > 'u') throw (p && p.type, new Error(gt(14)));
      (v[M] = z), (m = m || z !== O);
    }
    return (m = m || o.length !== Object.keys(g).length), m ? v : g;
  };
}
function jr(...n) {
  return n.length === 0
    ? (r) => r
    : n.length === 1
      ? n[0]
      : n.reduce(
          (r, c) =>
            (...o) =>
              r(c(...o)),
        );
}
function Db(...n) {
  return (r) => (c, o) => {
    const f = r(c, o);
    let d = () => {
      throw new Error(gt(15));
    };
    const g = { getState: f.getState, dispatch: (m, ...v) => d(m, ...v) },
      p = n.map((m) => m(g));
    return (d = jr(...p)(f.dispatch)), { ...f, dispatch: d };
  };
}
function Ab(n) {
  return zf(n) && 'type' in n && typeof n.type == 'string';
}
var zv = Symbol.for('immer-nothing'),
  km = Symbol.for('immer-draftable'),
  Gt = Symbol.for('immer-state');
function sl(n, ...r) {
  throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`);
}
var qn = Object.getPrototypeOf;
function $a(n) {
  return !!n && !!n[Gt];
}
function Zl(n) {
  var r;
  return n
    ? Nv(n) ||
        Array.isArray(n) ||
        !!n[km] ||
        !!((r = n.constructor) != null && r[km]) ||
        Br(n) ||
        qr(n)
    : !1;
}
var Cb = Object.prototype.constructor.toString();
function Nv(n) {
  if (!n || typeof n != 'object') return !1;
  const r = qn(n);
  if (r === null) return !0;
  const c = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
  return c === Object ? !0 : typeof c == 'function' && Function.toString.call(c) === Cb;
}
function Or(n, r) {
  Hr(n) === 0
    ? Reflect.ownKeys(n).forEach((c) => {
        r(c, n[c], n);
      })
    : n.forEach((c, o) => r(o, c, n));
}
function Hr(n) {
  const r = n[Gt];
  return r ? r.type_ : Array.isArray(n) ? 1 : Br(n) ? 2 : qr(n) ? 3 : 0;
}
function yf(n, r) {
  return Hr(n) === 2 ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function wv(n, r, c) {
  const o = Hr(n);
  o === 2 ? n.set(r, c) : o === 3 ? n.add(c) : (n[r] = c);
}
function jb(n, r) {
  return n === r ? n !== 0 || 1 / n === 1 / r : n !== n && r !== r;
}
function Br(n) {
  return n instanceof Map;
}
function qr(n) {
  return n instanceof Set;
}
function Za(n) {
  return n.copy_ || n.base_;
}
function gf(n, r) {
  if (Br(n)) return new Map(n);
  if (qr(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const c = Nv(n);
  if (r === !0 || (r === 'class_only' && !c)) {
    const o = Object.getOwnPropertyDescriptors(n);
    delete o[Gt];
    let f = Reflect.ownKeys(o);
    for (let d = 0; d < f.length; d++) {
      const g = f[d],
        p = o[g];
      p.writable === !1 && ((p.writable = !0), (p.configurable = !0)),
        (p.get || p.set) &&
          (o[g] = { configurable: !0, writable: !0, enumerable: p.enumerable, value: n[g] });
    }
    return Object.create(qn(n), o);
  } else {
    const o = qn(n);
    if (o !== null && c) return { ...n };
    const f = Object.create(o);
    return Object.assign(f, n);
  }
}
function Nf(n, r = !1) {
  return (
    Yr(n) ||
      $a(n) ||
      !Zl(n) ||
      (Hr(n) > 1 && (n.set = n.add = n.clear = n.delete = Ob),
      Object.freeze(n),
      r && Object.entries(n).forEach(([c, o]) => Nf(o, !0))),
    n
  );
}
function Ob() {
  sl(2);
}
function Yr(n) {
  return Object.isFrozen(n);
}
var zb = {};
function ka(n) {
  const r = zb[n];
  return r || sl(0, n), r;
}
var Iu;
function Uv() {
  return Iu;
}
function Nb(n, r) {
  return { drafts_: [], parent_: n, immer_: r, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Wm(n, r) {
  r && (ka('Patches'), (n.patches_ = []), (n.inversePatches_ = []), (n.patchListener_ = r));
}
function pf(n) {
  bf(n), n.drafts_.forEach(wb), (n.drafts_ = null);
}
function bf(n) {
  n === Iu && (Iu = n.parent_);
}
function Fm(n) {
  return (Iu = Nb(Iu, n));
}
function wb(n) {
  const r = n[Gt];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function Pm(n, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const c = r.drafts_[0];
  return (
    n !== void 0 && n !== c
      ? (c[Gt].modified_ && (pf(r), sl(4)),
        Zl(n) && ((n = zr(r, n)), r.parent_ || Nr(r, n)),
        r.patches_ &&
          ka('Patches').generateReplacementPatches_(c[Gt].base_, n, r.patches_, r.inversePatches_))
      : (n = zr(r, c, [])),
    pf(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    n !== zv ? n : void 0
  );
}
function zr(n, r, c) {
  if (Yr(r)) return r;
  const o = r[Gt];
  if (!o) return Or(r, (f, d) => Im(n, o, r, f, d, c)), r;
  if (o.scope_ !== n) return r;
  if (!o.modified_) return Nr(n, o.base_, !0), o.base_;
  if (!o.finalized_) {
    (o.finalized_ = !0), o.scope_.unfinalizedDrafts_--;
    const f = o.copy_;
    let d = f,
      g = !1;
    o.type_ === 3 && ((d = new Set(f)), f.clear(), (g = !0)),
      Or(d, (p, m) => Im(n, o, f, p, m, c, g)),
      Nr(n, f, !1),
      c && n.patches_ && ka('Patches').generatePatches_(o, c, n.patches_, n.inversePatches_);
  }
  return o.copy_;
}
function Im(n, r, c, o, f, d, g) {
  if ($a(f)) {
    const p = d && r && r.type_ !== 3 && !yf(r.assigned_, o) ? d.concat(o) : void 0,
      m = zr(n, f, p);
    if ((wv(c, o, m), $a(m))) n.canAutoFreeze_ = !1;
    else return;
  } else g && c.add(f);
  if (Zl(f) && !Yr(f)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    zr(n, f),
      (!r || !r.scope_.parent_) &&
        typeof o != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(c, o) &&
        Nr(n, f);
  }
}
function Nr(n, r, c = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Nf(r, c);
}
function Ub(n, r) {
  const c = Array.isArray(n),
    o = {
      type_: c ? 1 : 0,
      scope_: r ? r.scope_ : Uv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let f = o,
    d = wf;
  c && ((f = [o]), (d = ei));
  const { revoke: g, proxy: p } = Proxy.revocable(f, d);
  return (o.draft_ = p), (o.revoke_ = g), p;
}
var wf = {
    get(n, r) {
      if (r === Gt) return n;
      const c = Za(n);
      if (!yf(c, r)) return Lb(n, c, r);
      const o = c[r];
      return n.finalized_ || !Zl(o)
        ? o
        : o === rf(n.base_, r)
          ? (cf(n), (n.copy_[r] = _f(o, n)))
          : o;
    },
    has(n, r) {
      return r in Za(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(Za(n));
    },
    set(n, r, c) {
      const o = Lv(Za(n), r);
      if (o != null && o.set) return o.set.call(n.draft_, c), !0;
      if (!n.modified_) {
        const f = rf(Za(n), r),
          d = f == null ? void 0 : f[Gt];
        if (d && d.base_ === c) return (n.copy_[r] = c), (n.assigned_[r] = !1), !0;
        if (jb(c, f) && (c !== void 0 || yf(n.base_, r))) return !0;
        cf(n), Sf(n);
      }
      return (
        (n.copy_[r] === c && (c !== void 0 || r in n.copy_)) ||
          (Number.isNaN(c) && Number.isNaN(n.copy_[r])) ||
          ((n.copy_[r] = c), (n.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(n, r) {
      return (
        rf(n.base_, r) !== void 0 || r in n.base_
          ? ((n.assigned_[r] = !1), cf(n), Sf(n))
          : delete n.assigned_[r],
        n.copy_ && delete n.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(n, r) {
      const c = Za(n),
        o = Reflect.getOwnPropertyDescriptor(c, r);
      return (
        o && {
          writable: !0,
          configurable: n.type_ !== 1 || r !== 'length',
          enumerable: o.enumerable,
          value: c[r],
        }
      );
    },
    defineProperty() {
      sl(11);
    },
    getPrototypeOf(n) {
      return qn(n.base_);
    },
    setPrototypeOf() {
      sl(12);
    },
  },
  ei = {};
Or(wf, (n, r) => {
  ei[n] = function () {
    return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
  };
});
ei.deleteProperty = function (n, r) {
  return ei.set.call(this, n, r, void 0);
};
ei.set = function (n, r, c) {
  return wf.set.call(this, n[0], r, c, n[0]);
};
function rf(n, r) {
  const c = n[Gt];
  return (c ? Za(c) : n)[r];
}
function Lb(n, r, c) {
  var f;
  const o = Lv(r, c);
  return o ? ('value' in o ? o.value : (f = o.get) == null ? void 0 : f.call(n.draft_)) : void 0;
}
function Lv(n, r) {
  if (!(r in n)) return;
  let c = qn(n);
  for (; c; ) {
    const o = Object.getOwnPropertyDescriptor(c, r);
    if (o) return o;
    c = qn(c);
  }
}
function Sf(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && Sf(n.parent_));
}
function cf(n) {
  n.copy_ || (n.copy_ = gf(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var Hb = class {
  constructor(n) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (r, c, o) => {
        if (typeof r == 'function' && typeof c != 'function') {
          const d = c;
          c = r;
          const g = this;
          return function (m = d, ...v) {
            return g.produce(m, (b) => c.call(this, b, ...v));
          };
        }
        typeof c != 'function' && sl(6), o !== void 0 && typeof o != 'function' && sl(7);
        let f;
        if (Zl(r)) {
          const d = Fm(this),
            g = _f(r, void 0);
          let p = !0;
          try {
            (f = c(g)), (p = !1);
          } finally {
            p ? pf(d) : bf(d);
          }
          return Wm(d, o), Pm(f, d);
        } else if (!r || typeof r != 'object') {
          if (
            ((f = c(r)),
            f === void 0 && (f = r),
            f === zv && (f = void 0),
            this.autoFreeze_ && Nf(f, !0),
            o)
          ) {
            const d = [],
              g = [];
            ka('Patches').generateReplacementPatches_(r, f, d, g), o(d, g);
          }
          return f;
        } else sl(1, r);
      }),
      (this.produceWithPatches = (r, c) => {
        if (typeof r == 'function')
          return (g, ...p) => this.produceWithPatches(g, (m) => r(m, ...p));
        let o, f;
        return [
          this.produce(r, c, (g, p) => {
            (o = g), (f = p);
          }),
          o,
          f,
        ];
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' && this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Zl(n) || sl(8), $a(n) && (n = Bb(n));
    const r = Fm(this),
      c = _f(n, void 0);
    return (c[Gt].isManual_ = !0), bf(r), c;
  }
  finishDraft(n, r) {
    const c = n && n[Gt];
    (!c || !c.isManual_) && sl(9);
    const { scope_: o } = c;
    return Wm(o, r), Pm(void 0, o);
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, r) {
    let c;
    for (c = r.length - 1; c >= 0; c--) {
      const f = r[c];
      if (f.path.length === 0 && f.op === 'replace') {
        n = f.value;
        break;
      }
    }
    c > -1 && (r = r.slice(c + 1));
    const o = ka('Patches').applyPatches_;
    return $a(n) ? o(n, r) : this.produce(n, (f) => o(f, r));
  }
};
function _f(n, r) {
  const c = Br(n) ? ka('MapSet').proxyMap_(n, r) : qr(n) ? ka('MapSet').proxySet_(n, r) : Ub(n, r);
  return (r ? r.scope_ : Uv()).drafts_.push(c), c;
}
function Bb(n) {
  return $a(n) || sl(10, n), Hv(n);
}
function Hv(n) {
  if (!Zl(n) || Yr(n)) return n;
  const r = n[Gt];
  let c;
  if (r) {
    if (!r.modified_) return r.base_;
    (r.finalized_ = !0), (c = gf(n, r.scope_.immer_.useStrictShallowCopy_));
  } else c = gf(n, !0);
  return (
    Or(c, (o, f) => {
      wv(c, o, Hv(f));
    }),
    r && (r.finalized_ = !1),
    c
  );
}
var Xt = new Hb(),
  Bv = Xt.produce;
Xt.produceWithPatches.bind(Xt);
Xt.setAutoFreeze.bind(Xt);
Xt.setUseStrictShallowCopy.bind(Xt);
Xt.applyPatches.bind(Xt);
Xt.createDraft.bind(Xt);
Xt.finishDraft.bind(Xt);
function qv(n) {
  return ({ dispatch: c, getState: o }) =>
    (f) =>
    (d) =>
      typeof d == 'function' ? d(c, o, n) : f(d);
}
var qb = qv(),
  Yb = qv,
  Gb =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? jr : jr.apply(null, arguments);
        };
function ev(n, r) {
  function c(...o) {
    if (r) {
      let f = r(...o);
      if (!f) throw new Error(Vl(0));
      return {
        type: n,
        payload: f.payload,
        ...('meta' in f && { meta: f.meta }),
        ...('error' in f && { error: f.error }),
      };
    }
    return { type: n, payload: o[0] };
  }
  return (c.toString = () => `${n}`), (c.type = n), (c.match = (o) => Ab(o) && o.type === n), c;
}
var Yv = class Wu extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, Wu.prototype);
  }
  static get [Symbol.species]() {
    return Wu;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0])
      ? new Wu(...r[0].concat(this))
      : new Wu(...r.concat(this));
  }
};
function tv(n) {
  return Zl(n) ? Bv(n, () => {}) : n;
}
function lv(n, r, c) {
  return n.has(r) ? n.get(r) : n.set(r, c(r)).get(r);
}
function Xb(n) {
  return typeof n == 'boolean';
}
var Qb = () =>
    function (r) {
      const {
        thunk: c = !0,
        immutableCheck: o = !0,
        serializableCheck: f = !0,
        actionCreatorCheck: d = !0,
      } = r ?? {};
      let g = new Yv();
      return c && (Xb(c) ? g.push(qb) : g.push(Yb(c.extraArgument))), g;
    },
  Vb = 'RTK_autoBatch',
  av = (n) => (r) => {
    setTimeout(r, n);
  },
  Zb =
    (n = { type: 'raf' }) =>
    (r) =>
    (...c) => {
      const o = r(...c);
      let f = !0,
        d = !1,
        g = !1;
      const p = new Set(),
        m =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : av(10)
              : n.type === 'callback'
                ? n.queueNotification
                : av(n.timeout),
        v = () => {
          (g = !1), d && ((d = !1), p.forEach((b) => b()));
        };
      return Object.assign({}, o, {
        subscribe(b) {
          const M = () => f && b(),
            R = o.subscribe(M);
          return (
            p.add(b),
            () => {
              R(), p.delete(b);
            }
          );
        },
        dispatch(b) {
          var M;
          try {
            return (
              (f = !((M = b == null ? void 0 : b.meta) != null && M[Vb])),
              (d = !f),
              d && (g || ((g = !0), m(v))),
              o.dispatch(b)
            );
          } finally {
            f = !0;
          }
        },
      });
    },
  Kb = (n) =>
    function (c) {
      const { autoBatch: o = !0 } = c ?? {};
      let f = new Yv(n);
      return o && f.push(Zb(typeof o == 'object' ? o : void 0)), f;
    };
function Jb(n) {
  const r = Qb(),
    {
      reducer: c = void 0,
      middleware: o,
      devTools: f = !0,
      preloadedState: d = void 0,
      enhancers: g = void 0,
    } = n || {};
  let p;
  if (typeof c == 'function') p = c;
  else if (zf(c)) p = Mb(c);
  else throw new Error(Vl(1));
  let m;
  typeof o == 'function' ? (m = o(r)) : (m = r());
  let v = jr;
  f && (v = Gb({ trace: !1, ...(typeof f == 'object' && f) }));
  const b = Db(...m),
    M = Kb(b);
  let R = typeof g == 'function' ? g(M) : M();
  const O = v(...R);
  return Ov(p, d, O);
}
function Gv(n) {
  const r = {},
    c = [];
  let o;
  const f = {
    addCase(d, g) {
      const p = typeof d == 'string' ? d : d.type;
      if (!p) throw new Error(Vl(28));
      if (p in r) throw new Error(Vl(29));
      return (r[p] = g), f;
    },
    addMatcher(d, g) {
      return c.push({ matcher: d, reducer: g }), f;
    },
    addDefaultCase(d) {
      return (o = d), f;
    },
  };
  return n(f), [r, c, o];
}
function $b(n) {
  return typeof n == 'function';
}
function kb(n, r) {
  let [c, o, f] = Gv(r),
    d;
  if ($b(n)) d = () => tv(n());
  else {
    const p = tv(n);
    d = () => p;
  }
  function g(p = d(), m) {
    let v = [c[m.type], ...o.filter(({ matcher: b }) => b(m)).map(({ reducer: b }) => b)];
    return (
      v.filter((b) => !!b).length === 0 && (v = [f]),
      v.reduce((b, M) => {
        if (M)
          if ($a(b)) {
            const O = M(b, m);
            return O === void 0 ? b : O;
          } else {
            if (Zl(b)) return Bv(b, (R) => M(R, m));
            {
              const R = M(b, m);
              if (R === void 0) {
                if (b === null) return b;
                throw Error('A case reducer on a non-draftable value must not return undefined');
              }
              return R;
            }
          }
        return b;
      }, p)
    );
  }
  return (g.getInitialState = d), g;
}
var Wb = Symbol.for('rtk-slice-createasyncthunk');
function Fb(n, r) {
  return `${n}/${r}`;
}
function Pb({ creators: n } = {}) {
  var c;
  const r = (c = n == null ? void 0 : n.asyncThunk) == null ? void 0 : c[Wb];
  return function (f) {
    const { name: d, reducerPath: g = d } = f;
    if (!d) throw new Error(Vl(11));
    const p = (typeof f.reducers == 'function' ? f.reducers(t1()) : f.reducers) || {},
      m = Object.keys(p),
      v = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      b = {
        addCase(V, W) {
          const x = typeof V == 'string' ? V : V.type;
          if (!x) throw new Error(Vl(12));
          if (x in v.sliceCaseReducersByType) throw new Error(Vl(13));
          return (v.sliceCaseReducersByType[x] = W), b;
        },
        addMatcher(V, W) {
          return v.sliceMatchers.push({ matcher: V, reducer: W }), b;
        },
        exposeAction(V, W) {
          return (v.actionCreators[V] = W), b;
        },
        exposeCaseReducer(V, W) {
          return (v.sliceCaseReducersByName[V] = W), b;
        },
      };
    m.forEach((V) => {
      const W = p[V],
        x = { reducerName: V, type: Fb(d, V), createNotation: typeof f.reducers == 'function' };
      a1(W) ? u1(x, W, b, r) : l1(x, W, b);
    });
    function M() {
      const [V = {}, W = [], x = void 0] =
          typeof f.extraReducers == 'function' ? Gv(f.extraReducers) : [f.extraReducers],
        I = { ...V, ...v.sliceCaseReducersByType };
      return kb(f.initialState, (se) => {
        for (let ee in I) se.addCase(ee, I[ee]);
        for (let ee of v.sliceMatchers) se.addMatcher(ee.matcher, ee.reducer);
        for (let ee of W) se.addMatcher(ee.matcher, ee.reducer);
        x && se.addDefaultCase(x);
      });
    }
    const R = (V) => V,
      O = new Map();
    let z;
    function K(V, W) {
      return z || (z = M()), z(V, W);
    }
    function H() {
      return z || (z = M()), z.getInitialState();
    }
    function G(V, W = !1) {
      function x(se) {
        let ee = se[V];
        return typeof ee > 'u' && W && (ee = H()), ee;
      }
      function I(se = R) {
        const ee = lv(O, W, () => new WeakMap());
        return lv(ee, se, () => {
          const ge = {};
          for (const [Ne, Je] of Object.entries(f.selectors ?? {})) ge[Ne] = Ib(Je, se, H, W);
          return ge;
        });
      }
      return {
        reducerPath: V,
        getSelectors: I,
        get selectors() {
          return I(x);
        },
        selectSlice: x,
      };
    }
    const J = {
      name: d,
      reducer: K,
      actions: v.actionCreators,
      caseReducers: v.sliceCaseReducersByName,
      getInitialState: H,
      ...G(g),
      injectInto(V, { reducerPath: W, ...x } = {}) {
        const I = W ?? g;
        return V.inject({ reducerPath: I, reducer: K }, x), { ...J, ...G(I, !0) };
      },
    };
    return J;
  };
}
function Ib(n, r, c, o) {
  function f(d, ...g) {
    let p = r(d);
    return typeof p > 'u' && o && (p = c()), n(p, ...g);
  }
  return (f.unwrapped = n), f;
}
var e1 = Pb();
function t1() {
  function n(r, c) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: r, ...c };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(r) {
        return Object.assign(
          {
            [r.name](...c) {
              return r(...c);
            },
          }[r.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(r, c) {
        return { _reducerDefinitionType: 'reducerWithPrepare', prepare: r, reducer: c };
      },
      asyncThunk: n,
    }
  );
}
function l1({ type: n, reducerName: r, createNotation: c }, o, f) {
  let d, g;
  if ('reducer' in o) {
    if (c && !n1(o)) throw new Error(Vl(17));
    (d = o.reducer), (g = o.prepare);
  } else d = o;
  f.addCase(n, d)
    .exposeCaseReducer(r, d)
    .exposeAction(r, g ? ev(n, g) : ev(n));
}
function a1(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function n1(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function u1({ type: n, reducerName: r }, c, o, f) {
  if (!f) throw new Error(Vl(18));
  const { payloadCreator: d, fulfilled: g, pending: p, rejected: m, settled: v, options: b } = c,
    M = f(n, d, b);
  o.exposeAction(r, M),
    g && o.addCase(M.fulfilled, g),
    p && o.addCase(M.pending, p),
    m && o.addCase(M.rejected, m),
    v && o.addMatcher(M.settled, v),
    o.exposeCaseReducer(r, {
      fulfilled: g || _r,
      pending: p || _r,
      rejected: m || _r,
      settled: v || _r,
    });
}
function _r() {}
function Vl(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const i1 = { ver: 'KOR' },
  Xv = e1({
    name: 'lan',
    initialState: i1,
    reducers: {
      updateLan: (n, r) => {
        n.ver = r.payload;
      },
    },
  }),
  { updateLan: r1 } = Xv.actions,
  c1 = Xv.reducer;
var of = { exports: {} },
  ff = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nv;
function o1() {
  if (nv) return ff;
  nv = 1;
  var n = wr();
  function r(m, v) {
    return (m === v && (m !== 0 || 1 / m === 1 / v)) || (m !== m && v !== v);
  }
  var c = typeof Object.is == 'function' ? Object.is : r,
    o = n.useSyncExternalStore,
    f = n.useRef,
    d = n.useEffect,
    g = n.useMemo,
    p = n.useDebugValue;
  return (
    (ff.useSyncExternalStoreWithSelector = function (m, v, b, M, R) {
      var O = f(null);
      if (O.current === null) {
        var z = { hasValue: !1, value: null };
        O.current = z;
      } else z = O.current;
      O = g(
        function () {
          function H(x) {
            if (!G) {
              if (((G = !0), (J = x), (x = M(x)), R !== void 0 && z.hasValue)) {
                var I = z.value;
                if (R(I, x)) return (V = I);
              }
              return (V = x);
            }
            if (((I = V), c(J, x))) return I;
            var se = M(x);
            return R !== void 0 && R(I, se) ? ((J = x), I) : ((J = x), (V = se));
          }
          var G = !1,
            J,
            V,
            W = b === void 0 ? null : b;
          return [
            function () {
              return H(v());
            },
            W === null
              ? void 0
              : function () {
                  return H(W());
                },
          ];
        },
        [v, b, M, R],
      );
      var K = o(m, O[0], O[1]);
      return (
        d(
          function () {
            (z.hasValue = !0), (z.value = K);
          },
          [K],
        ),
        p(K),
        K
      );
    }),
    ff
  );
}
var uv;
function f1() {
  return uv || ((uv = 1), (of.exports = o1())), of.exports;
}
f1();
function s1(n) {
  n();
}
function d1() {
  let n = null,
    r = null;
  return {
    clear() {
      (n = null), (r = null);
    },
    notify() {
      s1(() => {
        let c = n;
        for (; c; ) c.callback(), (c = c.next);
      });
    },
    get() {
      const c = [];
      let o = n;
      for (; o; ) c.push(o), (o = o.next);
      return c;
    },
    subscribe(c) {
      let o = !0;
      const f = (r = { callback: c, next: null, prev: r });
      return (
        f.prev ? (f.prev.next = f) : (n = f),
        function () {
          !o ||
            n === null ||
            ((o = !1),
            f.next ? (f.next.prev = f.prev) : (r = f.prev),
            f.prev ? (f.prev.next = f.next) : (n = f.next));
        }
      );
    },
  };
}
var iv = { notify() {}, get: () => [] };
function h1(n, r) {
  let c,
    o = iv,
    f = 0,
    d = !1;
  function g(K) {
    b();
    const H = o.subscribe(K);
    let G = !1;
    return () => {
      G || ((G = !0), H(), M());
    };
  }
  function p() {
    o.notify();
  }
  function m() {
    z.onStateChange && z.onStateChange();
  }
  function v() {
    return d;
  }
  function b() {
    f++, c || ((c = n.subscribe(m)), (o = d1()));
  }
  function M() {
    f--, c && f === 0 && (c(), (c = void 0), o.clear(), (o = iv));
  }
  function R() {
    d || ((d = !0), b());
  }
  function O() {
    d && ((d = !1), M());
  }
  const z = {
    addNestedSub: g,
    notifyNestedSubs: p,
    handleChangeWrapper: m,
    isSubscribed: v,
    trySubscribe: R,
    tryUnsubscribe: O,
    getListeners: () => o,
  };
  return z;
}
var m1 = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  v1 = m1(),
  y1 = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  g1 = y1(),
  p1 = () => (v1 || g1 ? w.useLayoutEffect : w.useEffect),
  b1 = p1(),
  sf = Symbol.for('react-redux-context'),
  df = typeof globalThis < 'u' ? globalThis : {};
function S1() {
  if (!w.createContext) return {};
  const n = df[sf] ?? (df[sf] = new Map());
  let r = n.get(w.createContext);
  return r || ((r = w.createContext(null)), n.set(w.createContext, r)), r;
}
var Yn = S1();
function _1(n) {
  const { children: r, context: c, serverState: o, store: f } = n,
    d = w.useMemo(() => {
      const m = h1(f);
      return { store: f, subscription: m, getServerState: o ? () => o : void 0 };
    }, [f, o]),
    g = w.useMemo(() => f.getState(), [f]);
  b1(() => {
    const { subscription: m } = d;
    return (
      (m.onStateChange = m.notifyNestedSubs),
      m.trySubscribe(),
      g !== f.getState() && m.notifyNestedSubs(),
      () => {
        m.tryUnsubscribe(), (m.onStateChange = void 0);
      }
    );
  }, [d, g]);
  const p = c || Yn;
  return w.createElement(p.Provider, { value: d }, r);
}
var E1 = _1;
function Qv(n = Yn) {
  return function () {
    return w.useContext(n);
  };
}
var x1 = Qv();
function Vv(n = Yn) {
  const r = n === Yn ? x1 : Qv(n),
    c = () => {
      const { store: o } = r();
      return o;
    };
  return Object.assign(c, { withTypes: () => c }), c;
}
var T1 = Vv();
function R1(n = Yn) {
  const r = n === Yn ? T1 : Vv(n),
    c = () => r().dispatch;
  return Object.assign(c, { withTypes: () => c }), c;
}
var M1 = R1();
function D1() {
  const n = M1(),
    r = (c) => {
      n(r1(c.target.innerHTML));
    };
  return y.jsx('header', {
    className: Ot.header,
    children: y.jsxs('div', {
      className: `container ${Ot.pcMenu}`,
      children: [
        y.jsx('a', {
          href: '/',
          children: y.jsx('img', {
            className: Ot.logo,
            src: '/assets/nav/idblock_logo.png',
            alt: 'logo',
          }),
        }),
        y.jsxs('ul', {
          className: Ot.navMenu,
          children: [
            y.jsxs('li', {
              className: Ot.navMenuItem,
              children: [
                y.jsx('a', { href: '/', children: '서비스 소개' }),
                y.jsxs('ul', {
                  className: Ot.dropdownMenu,
                  children: [
                    y.jsx('li', { children: y.jsx('a', { href: '/', children: 'IDBlock' }) }),
                    y.jsx('li', { children: y.jsx('a', { href: '/', children: 'Block Pay' }) }),
                  ],
                }),
              ],
            }),
            y.jsxs('li', {
              className: Ot.navMenuItem,
              children: [
                y.jsx('a', { href: '/about', children: '회사 소개' }),
                y.jsxs('ul', {
                  className: Ot.dropdownMenu,
                  children: [
                    y.jsx('li', { children: y.jsx('a', { href: '/about', children: '개요' }) }),
                    y.jsx('li', { children: y.jsx('a', { href: '/about', children: '연혁' }) }),
                    y.jsx('li', { children: y.jsx('a', { href: '/about', children: '보도자료' }) }),
                    y.jsx('li', { children: y.jsx('a', { href: '/about', children: '문의' }) }),
                  ],
                }),
              ],
            }),
            y.jsxs('li', {
              className: `${Ot.navMenuItem} ${Ot.download}`,
              children: [
                y.jsx('a', { href: '/', children: '다운로드' }),
                y.jsxs('ul', {
                  className: Ot.dropdownMenu,
                  children: [
                    y.jsx('li', {
                      children: y.jsxs('a', {
                        href: 'https://apps.apple.com/kr/app/아이디블록-idblock/id6738164649?l=en-GB',
                        children: [
                          y.jsx('img', {
                            src: '/assets/nav/apple_download.png',
                            alt: 'ios-download',
                          }),
                          y.jsx('p', { children: 'App Store' }),
                        ],
                      }),
                    }),
                    y.jsx('li', {
                      children: y.jsxs('a', {
                        href: 'https://play.google.com/store/apps/details?id=com.crosshub.idblock&pli=1',
                        children: [
                          y.jsx('img', {
                            src: '/assets/nav/android_download.png',
                            alt: 'android-download',
                          }),
                          y.jsx('p', { children: 'Google Play' }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs('li', {
              className: Ot.navMenuItem,
              id: 'navbar_lang_dropdown',
              children: [
                y.jsx('button', {
                  className: Ot.lanToggle,
                  'aria-label': 'Change language',
                  type: 'button',
                  children: y.jsx('img', {
                    src: '/assets/nav/nav_lang.png',
                    alt: 'Language selection icon',
                  }),
                }),
                y.jsxs('ul', {
                  className: Ot.dropdownMenu,
                  children: [
                    y.jsx('li', { children: y.jsx('a', { onClick: r, children: 'KOR' }) }),
                    y.jsx('li', { children: y.jsx('a', { onClick: r, children: 'ENG' }) }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const A1 = '_footer_vz2iv_1',
  C1 = '_inner_vz2iv_7',
  j1 = '_footerTop_vz2iv_14',
  O1 = '_footerBottom_vz2iv_15',
  z1 = '_footerLinks_vz2iv_35',
  N1 = '_socialIcons_vz2iv_36',
  w1 = '_socialIcon_vz2iv_36',
  U1 = '_companyInfo_vz2iv_91',
  L1 = '_contact_vz2iv_103',
  H1 = '_companyLogo_vz2iv_118',
  ll = {
    footer: A1,
    inner: C1,
    footerTop: j1,
    footerBottom: O1,
    footerLinks: z1,
    socialIcons: N1,
    socialIcon: w1,
    companyInfo: U1,
    contact: L1,
    companyLogo: H1,
  };
function B1() {
  return y.jsx('footer', {
    className: ll.footer,
    children: y.jsxs('div', {
      className: `container ${ll.inner}`,
      children: [
        y.jsxs('div', {
          className: ll.footerTop,
          children: [
            y.jsxs('nav', {
              className: ll.footerLinks,
              'aria-label': 'Footer navigation',
              children: [
                y.jsx('a', {
                  href: 'static/아이디블록 서비스 이용약관(kor).pdf',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: '서비스이용약관',
                }),
                y.jsx('a', {
                  href: 'static/아이디블록 개인정보처리방침(kor).pdf',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: '개인정보 처리방침',
                }),
              ],
            }),
            y.jsxs('div', {
              className: ll.socialIcons,
              children: [
                y.jsx('a', {
                  href: 'https://youtube.com/@idblock_official?si=z70GRlyOS5S4b2zb',
                  className: ll.socialIcon,
                  'aria-label': 'Visit our Youtube',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: y.jsx('img', {
                    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/861d637e81f7223a2d07d0cccbb92f2d309f863127d6cefe861093464fd7a212?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d',
                    alt: 'YouTube',
                  }),
                }),
                y.jsx('a', {
                  href: 'https://www.linkedin.com/company/crosshubkr/?viewAsMember=true',
                  className: ll.socialIcon,
                  'aria-label': 'Visit our LinkedIn',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: y.jsx('img', {
                    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/081f4f0742b54af2239f31b6c4ecb526b691f9f14c279c72db2883824f943909?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d',
                    alt: 'LinkedIn',
                  }),
                }),
              ],
            }),
          ],
        }),
        y.jsxs('div', {
          className: ll.footerBottom,
          children: [
            y.jsxs('div', {
              className: ll.companyInfo,
              children: [
                y.jsx('p', { children: '(주)크로스허브' }),
                y.jsxs('ul', {
                  className: ll.contact,
                  children: [
                    y.jsx('li', { children: 'TEL : +82 2-6975-9999' }),
                    y.jsx('li', { children: 'FAX : +82 2-6008-5040' }),
                    y.jsxs('li', {
                      children: [
                        'E-mail :',
                        y.jsx('a', {
                          href: 'mailto:crosshub@crosshub.kr',
                          children: 'crosshub@crosshub.kr',
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsxs('ul', {
                  className: ll.address,
                  children: [
                    y.jsx('li', {
                      children: '서울 핀테크 Lab : 서울특별시 영등포구 의사당대로 83(오투타워), 5F',
                    }),
                    y.jsx('li', {
                      children:
                        '부산 글로벌 센터 : 부산광역시 남구 문현금융로 40, BIFC 부산국제금융센터, 9F',
                    }),
                    y.jsx('li', { children: '대구 유니콘 Lab : 대구광역시 북구 옥산로 111, 5F' }),
                    y.jsx('li', {
                      children: '광주 AI 허브 :   광주광역시 동구 금남로 193-22 광주AI창업캠프, 3F',
                    }),
                    y.jsx('li', {
                      children: '전북 R&D 센터 : 전북특별자치도 전주시 완산구 전주객사5길 47',
                    }),
                    y.jsx('li', {
                      children: '제주 스마트 관광 센터 : 제주특별자치도 서귀포시 서호남로 25, 3F',
                    }),
                    y.jsx('li', {
                      children: '일본 도쿄 지사 : 5 Chome-27-5 Sendagaya, Shibuya City, Tokyo',
                    }),
                  ],
                }),
                y.jsx('p', { children: '© 2025 Crosshub. All rights reserved.' }),
              ],
            }),
            y.jsx('img', {
              src: '/assets/footer/venture-certification.png',
              alt: 'CrossHub Logo',
              className: ll.companyLogo,
              width: '128',
              height: '108',
            }),
          ],
        }),
      ],
    }),
  });
}
function q1() {
  return y.jsxs(y.Fragment, { children: [y.jsx(D1, {}), y.jsx(Op, {}), y.jsx(B1, {})] });
}
const Y1 = '_heroContainer_12nsx_1',
  G1 = '_heroContent_12nsx_10',
  X1 = '_heroImage_12nsx_11',
  Q1 = '_heroTitle_12nsx_24',
  V1 = '_heroDescription_12nsx_30',
  Z1 = '_downloadButtons_12nsx_42',
  K1 = '_downloadButton_12nsx_42',
  Sa = {
    heroContainer: Y1,
    heroContent: G1,
    heroImage: X1,
    heroTitle: Q1,
    heroDescription: V1,
    downloadButtons: Z1,
    downloadButton: K1,
  };
function J1() {
  return y.jsx('section', {
    className: 'subSection',
    children: y.jsxs('div', {
      className: `container ${Sa.heroContainer}`,
      children: [
        y.jsxs('div', {
          className: Sa.heroContent,
          children: [
            y.jsxs('div', {
              className: Sa.heroTitle,
              children: [
                y.jsx('h1', { children: '인증으로' }),
                y.jsx('h1', { children: '세계를 연결하다' }),
              ],
            }),
            y.jsxs('div', {
              className: Sa.heroDescription,
              children: [
                y.jsx('p', { children: '아이디블록은 한국 휴대폰 번호가 없어' }),
                y.jsx('p', { children: '앱 서비스를 이용할 수 없는 모든 외국인 관광객들에게' }),
                y.jsx('p', { children: '안전하고 편리한 한국 방문 경험을 제공합니다' }),
              ],
            }),
            y.jsxs('div', {
              className: Sa.downloadButtons,
              children: [
                y.jsxs('a', {
                  className: Sa.downloadButton,
                  href: 'https://play.google.com/store/apps/details?id=com.crosshub.idblock&pli=1',
                  role: 'button',
                  target: '_blank',
                  children: [
                    y.jsx('img', {
                      loading: 'lazy',
                      src: '/assets/home/android_image.png',
                      alt: 'Google Play Store Icon',
                    }),
                    y.jsx('p', { children: 'Google Play' }),
                  ],
                }),
                y.jsxs('a', {
                  className: Sa.downloadButton,
                  href: 'https://apps.apple.com/kr/app/%EC%95%84%EC%9D%B4%EB%94%94%EB%B8%94%EB%A1%9D-idblock/id6738164649?l=en-GB',
                  role: 'button',
                  target: '_blank',
                  children: [
                    y.jsx('img', {
                      loading: 'lazy',
                      src: '/assets/home/ios_image.png',
                      alt: 'Apple App Store Icon',
                    }),
                    y.jsx('p', { children: 'App Store' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        y.jsx('div', {
          className: Sa.heroImage,
          children: y.jsx('img', {
            src: '/assets/home/first_idblock_demo.gif',
            alt: 'App Interface Preview',
          }),
        }),
      ],
    }),
  });
}
const $1 = '_serviceSection_6hjhs_1',
  k1 = '_serviceContainer_6hjhs_6',
  W1 = '_question_6hjhs_15',
  F1 = '_questionTitle_6hjhs_24',
  P1 = '_questionContent_6hjhs_40',
  I1 = '_problem_6hjhs_69',
  eS = '_divided_6hjhs_94',
  tS = '_answer_6hjhs_121',
  lS = '_answerTitle_6hjhs_129',
  aS = '_answerContent_6hjhs_145',
  nS = '_answerIcon_6hjhs_180',
  Mt = {
    serviceSection: $1,
    serviceContainer: k1,
    question: W1,
    questionTitle: F1,
    questionContent: P1,
    problem: I1,
    divided: eS,
    answer: tS,
    answerTitle: lS,
    answerContent: aS,
    answerIcon: nS,
  };
function uS() {
  return y.jsx('section', {
    className: `subSection ${Mt.serviceSection}`,
    children: y.jsxs('div', {
      className: `container ${Mt.serviceContainer}`,
      children: [
        y.jsxs('div', {
          className: Mt.question,
          children: [
            y.jsxs('div', {
              className: Mt.questionTitle,
              children: [
                y.jsx('h2', { children: '외국인이 한국 앱 서비스를' }),
                y.jsx('h2', { children: '이용하지 못한다는 사실, 알고 계셨나요?' }),
                y.jsx('p', {
                  children:
                    '한국 휴대폰 번호와 국내 발행 신용카드가 없다면, 한국 앱 서비스 이용이 어려워요',
                }),
              ],
            }),
            y.jsx('div', {
              className: Mt.questionContent,
              children: y.jsxs('ul', {
                children: [
                  y.jsxs('li', {
                    children: [
                      y.jsx('img', { src: '/assets/home/foreigner_1.png', alt: 'foreigner image' }),
                      y.jsxs('div', {
                        className: Mt.problem,
                        children: [
                          y.jsx('p', { children: '외국인 관광객' }),
                          y.jsxs('p', {
                            children: [
                              '"',
                              y.jsx('span', { children: '드라마처럼' }),
                              ' 한강에서 ',
                              y.jsx('span', { children: '배달로 치킨을 주문' }),
                              '하고 싶어요"',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs('li', {
                    children: [
                      y.jsx('img', { src: '/assets/home/foreigner_2.png', alt: 'foreigner image' }),
                      y.jsxs('div', {
                        className: Mt.problem,
                        children: [
                          y.jsx('p', { children: '단기체류자' }),
                          y.jsxs('p', {
                            children: [
                              '“',
                              y.jsx('span', { children: '기존에 쓰던 카드를 해외에서도 사용' }),
                              '하고 싶어요”',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs('li', {
                    children: [
                      y.jsx('img', { src: '/assets/home/foreigner_3.png', alt: 'foreigner image' }),
                      y.jsxs('div', {
                        className: Mt.problem,
                        children: [
                          y.jsx('p', { children: '재외동포' }),
                          y.jsxs('p', {
                            children: [
                              '“한국에 방문할 때 마다, ',
                              y.jsx('span', { children: '전화번호를 개통하는 것이 불편해요' }),
                              '”',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        y.jsx('div', { className: Mt.divided }),
        y.jsxs('div', {
          className: Mt.answer,
          children: [
            y.jsx('div', {
              className: Mt.answerTitle,
              children: y.jsx('h3', {
                children: '이제 아이디블록 하나로 가능하니까 걱정하지 마세요!',
              }),
            }),
            y.jsx('div', {
              className: Mt.answerContent,
              children: y.jsxs('ul', {
                children: [
                  y.jsxs('li', {
                    children: [
                      y.jsxs('div', {
                        children: [
                          y.jsx('h4', { children: '안전한 신원 인증' }),
                          y.jsx('p', { children: '영지식증명 적용, 최소한의' }),
                          y.jsx('p', { children: '정보만으로 선택적 증명이 가능' }),
                        ],
                      }),
                      y.jsx('div', {
                        className: Mt.answerIcon,
                        children: y.jsx('img', {
                          src: '/assets/home/security-icon.png',
                          alt: 'security icon',
                        }),
                      }),
                    ],
                  }),
                  y.jsxs('li', {
                    children: [
                      y.jsxs('div', {
                        children: [
                          y.jsx('h4', { children: '다양한 앱 이용' }),
                          y.jsx('p', { children: '전 세계 모든 앱을 간편하게' }),
                          y.jsx('p', { children: '회원가잊하고, 이용 가능' }),
                        ],
                      }),
                      y.jsx('div', {
                        className: Mt.answerIcon,
                        children: y.jsx('img', {
                          src: '/assets/home/app-icon.png',
                          alt: 'app icon',
                        }),
                      }),
                    ],
                  }),
                  y.jsxs('li', {
                    children: [
                      y.jsxs('div', {
                        children: [
                          y.jsx('h4', { children: '편리한 B-Pay' }),
                          y.jsx('p', { children: '기존 사용 중인 카드 그대로' }),
                          y.jsx('p', { children: '플랫폼 등록 및 온라인 결제 가능' }),
                        ],
                      }),
                      y.jsx('div', {
                        className: Mt.answerIcon,
                        children: y.jsx('img', {
                          src: '/assets/home/payment-icon.png',
                          alt: 'payment icon',
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
    }),
  });
}
const iS = '_featureSection_1mbyu_1',
  rS = '_featureContainer_1mbyu_6',
  cS = '_featureContentWrapper_1mbyu_12',
  oS = '_featureImageWrapper_1mbyu_13',
  fS = '_featureContent_1mbyu_12',
  sS = '_active_1mbyu_49',
  dS = '_progress_1mbyu_55',
  hS = '_activeProgress_1mbyu_74',
  mS = '_featureImage_1mbyu_13',
  Ql = {
    featureSection: iS,
    featureContainer: rS,
    featureContentWrapper: cS,
    featureImageWrapper: oS,
    featureContent: fS,
    active: sS,
    progress: dS,
    activeProgress: hS,
    featureImage: mS,
  };
function vS() {
  const n = w.useRef([]),
    [r, c] = w.useState(0);
  w.useEffect(() => {
    const p = new IntersectionObserver(
      (m) => {
        m.forEach((v) => {
          if (v.isIntersecting) {
            const b = n.current.findIndex((M) => M === v.target);
            c(b);
          }
        });
      },
      { threshold: 0.6 },
    );
    return (
      n.current.forEach((m) => {
        m && p.observe(m);
      }),
      () => {
        p.disconnect();
      }
    );
  }, []);
  const o = [
      {
        title: '신원 인증',
        fstDes: '단 한 번의 신원 인증으로,',
        secDes: '모바일 신분증을 발급할 수 있어요',
      },
      {
        title: '강력한 보안',
        fstDes: '영지식증명 기술을 통해',
        secDes: '최소한의 신원 정보만 선택적 제공이 가능해요',
      },
      {
        title: '앱 서비스 연동',
        fstDes: '아이디블록의 신원 인증으로',
        secDes: '앱 서비스의 회원 가입과 이용이 자유로워져요',
      },
      {
        title: '결제 관리',
        fstDes: '국내에서 사용하던 결제수단 그대로,',
        secDes: '플랫폼에 등록 및 온라인 결제가 가능해요',
      },
      {
        title: '명예 시민증',
        fstDes: '여행지를 선택하고 명예 시민이 되어',
        secDes: '다양한 할인 혜택을 받을 수 있어요',
      },
    ],
    f = [
      '/assets/home/feature_image1.png',
      '/assets/home/feature_image2.png',
      '/assets/home/feature_image3.png',
      '/assets/home/feature_image4.png',
      '/assets/home/feature_image5.png',
    ],
    d = o.map((p, m) =>
      y.jsxs(
        'div',
        {
          className: `${Ql.featureContent} ${r === m ? Ql.active : ''}`,
          children: [
            y.jsx('ul', {
              className: Ql.progress,
              children: Array.from({ length: 5 }).map((v, b) =>
                y.jsx('li', { className: `${b === r ? Ql.activeProgress : ''}` }, b),
              ),
            }),
            y.jsx('h2', { children: p.title }),
            y.jsx('p', { children: p.fstDes }),
            y.jsx('p', { children: p.secDes }),
          ],
        },
        m,
      ),
    ),
    g = f.map((p, m) =>
      y.jsx(
        'div',
        {
          ref: (v) => {
            v && (n.current[m] = v);
          },
          className: Ql.featureImage,
          children: y.jsx('img', { src: p, alt: 'feature image' }),
        },
        m,
      ),
    );
  return y.jsx('div', {
    children: y.jsx('section', {
      className: `subSection ${Ql.featureSection}`,
      children: y.jsxs('div', {
        className: `container ${Ql.featureContainer}`,
        children: [
          y.jsx('div', { className: Ql.featureContentWrapper, children: d }),
          y.jsx('div', { className: Ql.featureImageWrapper, children: g }),
        ],
      }),
    }),
  });
}
const yS = '_stepContainer_up5pv_1',
  gS = '_stepContent_up5pv_10',
  pS = '_stepImage_up5pv_27',
  bS = '_imageBox_up5pv_36',
  SS = '_progress_up5pv_37',
  _S = '_activeP_up5pv_78',
  ES = '_activeLi_up5pv_83',
  xS = '_stepBox_up5pv_88',
  TS = '_step_up5pv_1',
  al = {
    stepContainer: yS,
    stepContent: gS,
    stepImage: pS,
    imageBox: bS,
    progress: SS,
    activeP: _S,
    activeLi: ES,
    stepBox: xS,
    step: TS,
  };
function RS() {
  const [n, r] = w.useState(0),
    [c, o] = w.useState(-1);
  return (
    w.useEffect(() => {
      const f = setInterval(() => {
        r((d) => (d + 1) % 3);
      }, 2e3);
      return () => clearInterval(f);
    }, []),
    w.useEffect(() => {
      if (n >= 0) {
        const f = setTimeout(() => {
          o(n);
        }, 1e3);
        return () => clearTimeout(f);
      }
    }, [n]),
    y.jsx('section', {
      className: `subSection ${al.stepSection}`,
      children: y.jsxs('div', {
        className: `container ${al.stepContainer}`,
        children: [
          y.jsxs('div', {
            className: al.stepContent,
            children: [
              y.jsx('h2', { children: '단 한 번의 신원 인증으로' }),
              y.jsx('h2', { children: '모든 앱을 간편하게 사용해보세요' }),
            ],
          }),
          y.jsxs('div', {
            className: al.stepImage,
            children: [
              y.jsxs('div', {
                className: al.imageBox,
                children: [
                  y.jsx('img', { src: '/assets/home/step_image1.png', alt: 'step image' }),
                  y.jsx('img', { src: '/assets/home/step_image2.png', alt: 'step image' }),
                  y.jsx('img', { src: '/assets/home/step_image3.png', alt: 'step image' }),
                ],
              }),
              y.jsx('ul', {
                className: al.progress,
                children: [0, 1, 2].map((f) =>
                  y.jsx(
                    'li',
                    {
                      className: n > f && c > f ? al.activeLi : '',
                      children: y.jsx('p', { className: n >= f ? al.activeP : '' }),
                    },
                    f,
                  ),
                ),
              }),
              y.jsxs('div', {
                className: al.stepBox,
                children: [
                  y.jsxs('div', {
                    className: al.step,
                    children: [
                      y.jsx('p', { children: 'STEP 1' }),
                      y.jsx('p', { children: '여권을 통한' }),
                      y.jsx('p', { children: '신원 인증' }),
                    ],
                  }),
                  y.jsxs('div', {
                    className: al.step,
                    children: [
                      y.jsx('p', { children: 'STEP 2' }),
                      y.jsx('p', { children: '아이디블록을 통한' }),
                      y.jsx('p', { children: '앱 간편가입' }),
                    ],
                  }),
                  y.jsxs('div', {
                    className: al.step,
                    children: [
                      y.jsx('p', { children: 'STEP 3' }),
                      y.jsx('p', { children: '블록페이를 통한' }),
                      y.jsx('p', { children: '간편 결제' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const MS = '_patentContainer_vlgyt_1',
  DS = '_patentContent_vlgyt_9',
  AS = '_patentImages_vlgyt_33',
  Er = { patentContainer: MS, patentContent: DS, patentImages: AS };
function CS() {
  return y.jsx('section', {
    className: `subSection ${Er.patentSection}`,
    children: y.jsxs('div', {
      className: `container ${Er.patentContainer}`,
      children: [
        y.jsxs('div', {
          className: Er.patentContent,
          children: [
            y.jsx('p', { children: '연계 특허, 벤처기업 인증, 기업부설 연구소 등' }),
            y.jsx('h2', { children: '저희 아이디블록은' }),
            y.jsx('h2', { children: '블록체인 기반 인증서를 보유하고 있어요' }),
          ],
        }),
        y.jsxs('div', {
          className: Er.patentImages,
          children: [
            y.jsx('img', { src: '/assets/home/patent_cover1.png', alt: 'patent cover image' }),
            y.jsx('img', { src: '/assets/home/patent_cover2.png', alt: 'patent cover image' }),
            y.jsx('img', { src: '/assets/home/patent_cover3.png', alt: 'patent cover image' }),
            y.jsx('img', { src: '/assets/home/patent_cover4.png', alt: 'patent cover image' }),
          ],
        }),
      ],
    }),
  });
}
const jS = '_partnerSection_ein2u_1',
  OS = '_partnerContainer_ein2u_5',
  zS = '_partnerContent_ein2u_12',
  NS = '_partnerImages_ein2u_30',
  wS = '_partnerImageTop_ein2u_46',
  US = '_partnerImageBottom_ein2u_47',
  Hn = {
    partnerSection: jS,
    partnerContainer: OS,
    partnerContent: zS,
    partnerImages: NS,
    partnerImageTop: wS,
    partnerImageBottom: US,
  };
function LS() {
  return y.jsx('section', {
    className: `subSection ${Hn.partnerSection}`,
    children: y.jsxs('div', {
      className: `container ${Hn.partnerContainer}`,
      children: [
        y.jsxs('div', {
          className: Hn.partnerContent,
          children: [
            y.jsx('h2', { children: '크로스허브는' }),
            y.jsx('h2', { children: '국내 및 해외 다양한 기관들과 함께해요' }),
          ],
        }),
        y.jsxs('div', {
          className: Hn.partnerImages,
          children: [
            y.jsxs('div', {
              className: Hn.partnerImageTop,
              children: [
                y.jsx('img', { src: '/assets/home/partner_image1.png', alt: 'partner image' }),
                y.jsx('img', { src: '/assets/home/partner_image1.png', alt: 'partner image' }),
              ],
            }),
            y.jsxs('div', {
              className: Hn.partnerImageBottom,
              children: [
                y.jsx('img', { src: '/assets/home/partner_image2.png', alt: 'partner image' }),
                y.jsx('img', { src: '/assets/home/partner_image2.png', alt: 'partner image' }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function HS() {
  return y.jsxs('main', {
    children: [
      y.jsx(J1, {}),
      y.jsx(uS, {}),
      y.jsx(vS, {}),
      y.jsx(RS, {}),
      y.jsx(CS, {}),
      y.jsx(LS, {}),
    ],
  });
}
const BS = '_aboutSection_ie8xr_1',
  qS = '_aboutContainer_ie8xr_8',
  YS = '_aboutContent_ie8xr_19',
  GS = '_aboutTitle_ie8xr_28',
  XS = '_aboutDescription_ie8xr_33',
  QS = '_aboutImages_ie8xr_38',
  Bn = {
    aboutSection: BS,
    aboutContainer: qS,
    aboutContent: YS,
    aboutTitle: GS,
    aboutDescription: XS,
    aboutImages: QS,
  };
function VS() {
  return y.jsx('section', {
    className: `subSection ${Bn.aboutSection}`,
    children: y.jsxs('div', {
      className: `container ${Bn.aboutContainer}`,
      children: [
        y.jsxs('div', {
          className: Bn.aboutContent,
          children: [
            y.jsxs('div', {
              className: Bn.aboutTitle,
              children: [
                y.jsx('h1', { children: '일상생활과 기술의' }),
                y.jsx('h1', { children: '가치를 실현하다' }),
              ],
            }),
            y.jsxs('div', {
              className: Bn.aboutDescription,
              children: [
                y.jsx('p', { children: '블록체인과 AI 기술을 기반으로 핀테크 분야에서' }),
                y.jsx('p', { children: '디지털 전환(DX)을 선도하고 일상의 모든 측면을' }),
                y.jsx('p', { children: '연결해 새로운 경험과 기술의 가치를 실현합니다' }),
              ],
            }),
          ],
        }),
        y.jsx('div', {
          className: Bn.aboutImages,
          children: y.jsx('img', { src: '/assets/about/about_main.png', alt: 'about main image' }),
        }),
      ],
    }),
  });
}
const ZS = '_goalSection_1ibiy_1',
  KS = '_goalContainer_1ibiy_6',
  JS = '_goal_1ibiy_1',
  $S = '_value_1ibiy_12',
  kS = '_goalTitle_1ibiy_25',
  WS = '_valueTitle_1ibiy_26',
  FS = '_goalContent_1ibiy_58',
  PS = '_goalCard_1ibiy_68',
  IS = '_valueContent_1ibiy_100',
  e_ = '_valueCard_1ibiy_108',
  yt = {
    goalSection: ZS,
    goalContainer: KS,
    goal: JS,
    value: $S,
    goalTitle: kS,
    valueTitle: WS,
    goalContent: FS,
    goalCard: PS,
    valueContent: IS,
    valueCard: e_,
  };
function t_() {
  return y.jsx('section', {
    className: `subSection ${yt.goalSection}`,
    children: y.jsxs('div', {
      className: `container ${yt.goalContainer}`,
      children: [
        y.jsxs('div', {
          className: yt.goal,
          children: [
            y.jsxs('div', {
              className: yt.goalTitle,
              children: [
                y.jsx('h3', { children: 'GOAL' }),
                y.jsx('h2', { children: '크로스허브의 세계를 향한 목표' }),
              ],
            }),
            y.jsxs('div', {
              className: yt.goalContent,
              children: [
                y.jsxs('div', {
                  className: yt.goalCard,
                  children: [
                    y.jsx('h4', { children: 'SLOGAN' }),
                    y.jsx('p', { children: '인증과 결제를 통해' }),
                    y.jsx('p', { children: '세계를 하나로 연결합니다' }),
                  ],
                }),
                y.jsxs('div', {
                  className: yt.goalCard,
                  children: [
                    y.jsx('h4', { children: 'VISION' }),
                    y.jsx('p', { children: '전 세계 최초 단일화 신원 인증을' }),
                    y.jsx('p', { children: '구축하여 이에 기반한 모든 기회의' }),
                    y.jsx('p', { children: '장을 제공할 수 있는 기업으로' }),
                    y.jsx('p', { children: '성공할 것입니다' }),
                  ],
                }),
                y.jsxs('div', {
                  className: yt.goalCard,
                  children: [
                    y.jsx('h4', { children: 'MISSION' }),
                    y.jsx('p', { children: '개인과 기업 모두가' }),
                    y.jsx('p', { children: '글로벌 디지털 환경에서' }),
                    y.jsx('p', { children: '안전하고 자유롭게' }),
                    y.jsx('p', { children: '연결될 수 있도록 돕습니다' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        y.jsxs('div', {
          className: yt.value,
          children: [
            y.jsxs('div', {
              className: yt.valueTitle,
              children: [
                y.jsx('h3', { children: 'VALUE' }),
                y.jsx('h2', { children: '목표를 위한' }),
                y.jsx('h2', { children: '우리의 핵심 가치' }),
              ],
            }),
            y.jsxs('div', {
              className: yt.valueContent,
              children: [
                y.jsxs('div', {
                  className: yt.valueCard,
                  children: [
                    y.jsxs('div', {
                      className: yt.description,
                      children: [
                        y.jsx('h4', { children: 'CHALLENGE' }),
                        y.jsx('p', {
                          children: '글로벌 신원 인증의 한계를 극복하는 것에서 출발합니다',
                        }),
                      ],
                    }),
                    y.jsx('img', {
                      src: '/assets/about/challenge_icon.png',
                      alt: 'challenge icon',
                    }),
                  ],
                }),
                y.jsxs('div', {
                  className: yt.valueCard,
                  children: [
                    y.jsxs('div', {
                      className: yt.description,
                      children: [
                        y.jsx('h4', { children: 'INNOVATION' }),
                        y.jsx('p', {
                          children: '블록체인 기술 기반 안정성과 편리성을 갖춘 솔루션을 제공합니다',
                        }),
                      ],
                    }),
                    y.jsx('img', {
                      src: '/assets/about/innovation_icon.png',
                      alt: 'innovation icon',
                    }),
                  ],
                }),
                y.jsxs('div', {
                  className: yt.valueCard,
                  children: [
                    y.jsxs('div', {
                      className: yt.description,
                      children: [
                        y.jsx('h4', { children: 'CONTINUE' }),
                        y.jsx('p', {
                          children:
                            '글로벌 서비스를 연결하고 지속 가능한 디지털 생태계를 구축합니다',
                        }),
                      ],
                    }),
                    y.jsx('img', { src: '/assets/about/continue_icon.png', alt: 'continue icon' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const l_ = '_historySection_17vtr_1',
  a_ = '_title_17vtr_6',
  n_ = '_historyContainer_17vtr_13',
  u_ = '_historyImageWrapper_17vtr_19',
  i_ = '_historyContentWrapper_17vtr_20',
  r_ = '_historyImageBox_17vtr_37',
  c_ = '_images_17vtr_44',
  o_ = '_historyContent_17vtr_20',
  qt = {
    historySection: l_,
    title: a_,
    historyContainer: n_,
    historyImageWrapper: u_,
    historyContentWrapper: i_,
    historyImageBox: r_,
    images: c_,
    historyContent: o_,
  };
function f_() {
  const n = w.useRef([]),
    [r, c] = w.useState(0);
  w.useEffect(() => {
    const p = new IntersectionObserver(
      (m) => {
        m.forEach((v) => {
          if (v.isIntersecting) {
            const b = n.current.findIndex((M) => M === v.target);
            c(b);
          }
        });
      },
      { threshold: 0.6 },
    );
    return (
      n.current.forEach((m) => {
        m && p.observe(m);
      }),
      () => {
        p.disconnect();
      }
    );
  }, []);
  const o = [
      {
        year: '2025',
        images: ['/assets/about/history_2025_1.png', '/assets/about/history_2025_2.png'],
      },
      {
        year: '2024',
        images: [
          '/assets/about/history_2024_1.png',
          '/assets/about/history_2024_2.png',
          '/assets/about/history_2024_3.png',
          '/assets/about/history_2024_4.png',
          '/assets/about/history_2024_5.png',
        ],
      },
      { year: '2023', images: ['/assets/about/history_2023_1.png'] },
    ],
    f = [
      {
        year: '2025',
        quarter: [
          {
            name: '1Q',
            contents: [
              'Climbers Startup JAPAN EXPO 참여기업 선정',
              'Synergy Core 1기 스타트업 지원사업 선정',
              'J-curve 배치프로그램 3기 참여기업 선정',
              "신용보증기금 '리틀펭귄' 기업 선정",
              '부산 제23차 세계한인비즈니스대회 미국 아틀란타 참가기업 선정',
              '카자흐스탄 알마티 「K-Wave Fest」 참가기관 선정',
              '한국관광공사 오사카엑스포 연계 관광 벤처기업 쇼케이스 참여기업 선정',
              'KOTRA 서비스 BM 지원사업 선정',
              '영국, 중국 북경대 연합 글로벌창업경진대회 대상 수상',
              '우리금융 디노랩 부산 1기 선정',
              '인공지능산업융합사업단 주관 광주 AI 창업캠프 입주기업 선정',
              '경기도경제과학진흥원 주관 창업혁신공간 입주기업 선정',
            ],
          },
        ],
      },
      {
        year: '2024',
        quarter: [
          {
            name: '4Q',
            contents: [
              '예비창업패키지 최우수기업 선정 및 우수기업표창장 수여',
              "성균관대학교 KINGO-GA 창업 경진대회 '금상' 수상",
              "기보벤쳐캠프 15기 운영사 데모데이 '최우수상' 수상",
              '한국관광공사 도쿄 관광기업지원센터(KTSC) 신규 입주 기업 선정',
              "베트남 솔루션 공급기업 'AMOEBA' 수출 공급 계약 체결 (20,000USD)",
              '베트남 TechFest 현지진출기업 지원 사업 선정',
              'KISA(한국인터넷진흥원) 블록체인 기업성장 지원사업 선정',
              'NIPA(정보통신산업진흥원) 현지화랩 지원사업 선정',
              '부산광역시 블록체인 역외기업 육성센터 기업 선정',
            ],
          },
          {
            name: '3Q',
            contents: [
              '서울핀테크랩 X IBK 기업은행 1st LAB 사업 선정',
              '서울핀테크랩 입주기업 선정',
              '벤처기업(Certificate of Venture Business) 획득',
              '기술보증기금(KIBO) 주관 제 15기 기고벤처캠프 기업 선정',
              '글로벌 일본 PoC+리빙랩 사업 선정',
            ],
          },
          {
            name: '2Q',
            contents: [
              '국내 전문투자자(AC) 그룹 시드 투자 유치(2억원)',
              '중소벤쳐기업부 주관 예비창업패키지 선정',
            ],
          },
        ],
      },
      {
        year: '2023',
        quarter: [
          {
            name: '4Q',
            contents: ["충북과학기술혁신원 주관 BIC 블록체인 컨퍼런스 경진대회 ‘최우수상' 수상"],
          },
        ],
      },
    ],
    d = o.map((p, m) => {
      const v = p.images.map((b, M) => y.jsx('img', { src: b, alt: 'timeline image' }, M));
      return y.jsxs(
        'div',
        {
          ref: (b) => {
            b && (n.current[m] = b);
          },
          className: qt.historyImageBox,
          children: [
            y.jsx('h2', { children: p.year }),
            y.jsx('div', { className: qt.images, children: v }),
          ],
        },
        m,
      );
    }),
    g = f.map((p, m) => {
      const v = p.quarter.map((b, M) => {
        const R = b.contents.map((O, z) => y.jsx('li', { children: O }, z));
        return y.jsxs(
          'div',
          {
            className: qt.quarter,
            children: [
              y.jsx('h3', { children: b.name }),
              y.jsx('ul', { className: qt.timeline, children: R }),
            ],
          },
          M,
        );
      });
      return y.jsxs(
        'div',
        {
          className: `${qt.historyContent} ${r === m ? qt.active : ''}`,
          children: [y.jsx('h2', { children: p.year }), v],
        },
        m,
      );
    });
  return y.jsxs('section', {
    className: `subSection ${qt.historySection}`,
    children: [
      y.jsx('h2', { className: qt.title, children: '수상 및 연혁' }),
      y.jsxs('div', {
        className: `container ${qt.historyContainer}`,
        children: [
          y.jsx('div', { className: qt.historyImageWrapper, children: d }),
          y.jsx('div', { className: qt.historyContentWrapper, children: g }),
          y.jsx('ul', {
            className: qt.progress,
            children: Array.from({ length: 3 }).map((p, m) =>
              y.jsx('li', { className: `${m === r ? qt.activeProgress : ''}` }, m),
            ),
          }),
        ],
      }),
    ],
  });
}
function s_() {
  return y.jsxs('main', { children: [y.jsx(VS, {}), y.jsx(t_, {}), y.jsx(f_, {})] });
}
const d_ = tb([
    {
      path: '/',
      element: y.jsx(q1, {}),
      children: [
        { index: !0, element: y.jsx(HS, {}) },
        { path: '/about', element: y.jsx(s_, {}) },
      ],
    },
  ]),
  h_ = Jb({ reducer: { lan: c1 } });
function m_() {
  return y.jsx(y.Fragment, {
    children: y.jsx(E1, { store: h_, children: y.jsx(mb, { router: d_ }) }),
  });
}
n0.createRoot(document.getElementById('root')).render(
  y.jsx(w.StrictMode, { children: y.jsx(m_, {}) }),
);
