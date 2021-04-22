// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* \u6211\u6765\u753B\u4E00\u4E2A\u5361\u901A\u7248\u7684\u94A2\u94C1\u4FA0\u5427\uFF01*/\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  body {\n    min-width: 100vw;\n    min-height: 100vh;\n  }\n  \n  .ironman {\n    width: 150px;\n    height: 200px;\n    position: relative;\n    left: 50%;\n    top: 25px;\n    margin-left: -75px;\n  }\n /* \u6211\u6765\u753B\u4ED6\u7684\u5934\u90E8*/ \n  .head {\n    border: 8px solid #630102;\n    border-radius: 45px;\n    width: 105px;\n    height: 115px;\n    background: #c70305;\n    position: relative;\n    left: 50%;\n    margin-left: -56.5px;\n  }\n  \n  .face {\n    width: 83px;\n    height: 88px;\n    background: #fedb10;\n    border: 3px solid #630102;\n    border-radius: 30px;\n    position: relative;\n    left: 3px;\n    top: 8px;\n    overflow: hidden;\n  }\n  \n  .face-top {\n    width: 20px;\n    height: 12px;\n    border-bottom: 3px solid #630102;\n    left: 50%;\n    margin-left: -10px;\n    top: 8px;\n    position: absolute;\n    background: #c70305;\n    z-index: 1;\n  }\n  \n  .face-top .left-line {\n    height: 12px;\n    width: 4px;\n    background: #fedb10;\n    border-top: 3px solid #630102;\n    border-right: 3px solid #630102;\n    border-radius: 0px px 0px 0px;\n    position: absolute;\n    left: -4px;\n  }\n  \n  .face-top .right-line {\n    height: 12px;\n    width: 4px;\n    background: #fedb10;\n    border-top: 3px solid #630102;\n    border-left: 3px solid #630102;\n    border-radius: 0px px 0px 0px;\n    position: absolute;\n    left: 20px;\n  }\n  \n  .left-eye {\n    background: #fff;\n    width: 20px;\n    height: 7px;\n    border: 2.95px solid  rgba(0, 0, 0, 1);\n    position: absolute;\n    left: 50%;\n    margin-left: -30px;\n    top: 30px;\n    transform: rotate(10deg);\n  }\n  \n  .right-eye {\n    background: #fff;\n    width: 20px;\n    height: 7px;\n    border: 2.95px solid  rgba(0, 0, 0, 1);\n    position: absolute;\n    left: 50%;\n    margin-left: 10px;\n    top: 30px;\n    transform: rotate(-10deg);\n  }\n  \n  .mouth {\n    width: 25px;\n    height: 4px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    margin-left: -12.5px;\n    bottom: 15px;\n  }\n  \n  .mouth::before {\n    content: \"\";\n    width: 17px;\n    height: 4px;\n    background: black;\n    position: absolute;\n    top: 3.5px;\n    right: 22px;\n    transform: rotate(-25deg);\n  }\n\n  .mouth::after {\n    content: \"\";\n    width: 17px;\n    height: 4px;\n    background: black;\n    position: absolute;\n    top: 3.5px;\n    left: 22px;\n    transform: rotate(25deg);\n  }\n  \n  .fix-face {\n    width: 83px;\n    height: 88px;\n    border-radius: 30px;\n    position: absolute;\n    left: 3px;\n    top: 8px;\n    overflow: hidden;\n  }\n  \n  .fix-face-left {\n    width: 35px;\n    height: 40px;\n    border-radius: 30px;\n    border: 3px solid #630102;\n    background: #c70305;\n    position: absolute;\n    bottom: -10px;\n    left: -17.5px;\n  }\n  \n  .fix-face-right {\n      width: 35px;\n      height: 40px;\n      border-radius: 30px;\n      border: 3px solid #630102;\n      background: #c70305;\n      position: absolute;\n      bottom: -10px;\n      right: -17.5px;\n    }\n  /*  \u94A2\u94C1\u4FA0\u4E4B\u8EAF\uFF01 */  \n  .body{\n    width: 80px;\n    height: 90px;\n    border-radius: 30px;\n    background: #c70305;\n    border: 8px solid #630102;\n    position: relative;\n    left: 50%;\n    margin-left: -44px;\n    top: -30px;\n    z-index: -1;\n  }\n  \n  .body .heart{\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    border-radius: 25px;\n    left: 50%;\n    margin-left: -12.5px;\n    top: 25px;\n    background: #fff;\n    border: 5px solid #630102;\n  }\n  /*  \u80FD\u5C04\u51FA\u6FC0\u5149\u7684\u53CC\u624B */  \n  .left-hand {\n    z-index: -2;\n    width: 50px;\n    height: 18px;\n    border-radius: 12px 0 0 0;\n    border: 5px solid #630102;\n    background: #c70305;\n    position: absolute;\n    top: 102px;\n    left: 10px;\n  }\n  \n  .left-hand::before{\n    content: \"\";\n    border: 5px solid #630102;\n    background: #fedb10;\n    width: 18px;\n    height: 23px;\n    border-top: 0;\n    border-radius: 0 0 10px 10px;\n    position: absolute;\n    top: 13px;\n  }\n  \n  .left-hand::after{\n    content: \"\";\n    border: 5px solid #630102;\n    width: 25px;\n    height: 25px;\n    background: #c70305;\n    border-radius: 20px;\n    position: absolute;\n    top: 28px;\n    left: -3px;\n  }\n  \n  .right-hand {\n    z-index: -2;\n    width: 50px;\n    height: 18px;\n    border-radius: 0 12px 0 0;\n    border: 5px solid #630102;\n    background: #c70305;\n    position: absolute;\n    top: 102px;\n    right: 20px;\n  }\n  \n  .right-hand::before{\n    content: \"\";\n    border: 5px solid #630102;\n    background: #fedb10;\n    width: 18px;\n    height: 23px;\n    border-top: 0;\n    border-radius: 0 0 10px 10px;\n    position: absolute;\n    top: 13px;\n    right: 0px;\n  }\n  \n  .right-hand::after{\n    content: \"\";\n    border: 5px solid #630102;\n    width: 25px;\n    height: 25px;\n    background: #c70305;\n    border-radius: 20px;\n    position: absolute;\n    top: 28px;\n    right: -3px;\n  }\n  /* \u6700\u540E\u662F\u4ED6\u7684\u53CC\u817F */\n  .left-foot {\n    height: 40px;\n    width: 27px;\n    background: #c70305;\n    border: 5px solid #630102;\n    border-radius: 0 0 0 30px;\n    position: absolute;\n    bottom: 0px;\n    right: 50%;\n    z-index: -2;\n  }\n  \n  .right-foot {\n    height: 40px;\n    width: 27px;\n    background: #c70305;\n    border: 5px solid #630102;\n    border-radius: 0 0 30px 0;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin-left: -5px;\n    z-index: -2;\n  }\n  /* \u7ED8\u753B\u5B8C\u6BD5\uFF01 \n  \u5361\u901A\u7248\u94A2\u94C1\u4FA0\u9001\u7ED9\u4F60\uFF0C\n  \u5E0C\u671B\u4F60\u559C\u6B22  */\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  //定义定时器
  step: null,
  //每写一个字符
  n: 1,
  //播放速度
  speed: 50,
  //初始化
  init: function init() {
    player.ui.version.innerText = _style.default.substring(0, player.n);
    player.ui.style.innerHTML = _style.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  ui: {
    version: document.querySelector("#version"),
    style: document.querySelector("#style")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnFast": "fast",
    "#btnNormal": "normal",
    "#btnSlow": "slow"
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key];
      document.querySelector(key).onclick = player[value];
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _style.default.length) {
      window.clearInterval(player.step);
    }

    player.ui.version.innerText = _style.default.substring(0, player.n);
    player.ui.style.innerHTML = _style.default.substring(0, player.n);
    player.ui.version.scrollTop = player.ui.version.scrollHeight;
  },
  play: function play() {
    player.step = setInterval(player.run, player.speed);
  },
  pause: function pause() {
    return window.clearInterval(player.step);
  },
  fast: function fast() {
    player.pause();
    player.speed = 0;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.speed = 50;
    player.play();
  },
  slow: function slow() {
    player.pause();
    player.speed = 300;
    player.play();
  }
};
player.init();
},{"./style.js":"style.js"}],"C:/Users/欧大雄/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55527" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/欧大雄/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map