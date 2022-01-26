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
})({"data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChartData = getChartData;

function getChartData() {
  return [{
    columns: [['x', 1542412800000, 1542499200000, 1542585600000, 1542672000000, 1542758400000, 1542844800000, 1542931200000, 1543017600000, 1543104000000, 1543190400000, 1543276800000, 1543363200000, 1543449600000, 1543536000000, 1543622400000, 1543708800000, 1543795200000, 1543881600000, 1543968000000, 1544054400000, 1544140800000, 1544227200000, 1544313600000, 1544400000000, 1544486400000, 1544572800000, 1544659200000, 1544745600000, 1544832000000, 1544918400000, 1545004800000, 1545091200000, 1545177600000, 1545264000000, 1545350400000, 1545436800000, 1545523200000, 1545609600000, 1545696000000, 1545782400000, 1545868800000, 1545955200000, 1546041600000, 1546128000000, 1546214400000, 1546300800000, 1546387200000, 1546473600000, 1546560000000, 1546646400000, 1546732800000, 1546819200000, 1546905600000, 1546992000000, 1547078400000, 1547164800000, 1547251200000, 1547337600000, 1547424000000, 1547510400000, 1547596800000, 1547683200000, 1547769600000, 1547856000000, 1547942400000, 1548028800000, 1548115200000, 1548201600000, 1548288000000, 1548374400000, 1548460800000, 1548547200000, 1548633600000, 1548720000000, 1548806400000, 1548892800000, 1548979200000, 1549065600000, 1549152000000, 1549238400000, 1549324800000, 1549411200000, 1549497600000, 1549584000000, 1549670400000, 1549756800000, 1549843200000, 1549929600000, 1550016000000, 1550102400000, 1550188800000, 1550275200000, 1550361600000, 1550448000000, 1550534400000, 1550620800000, 1550707200000, 1550793600000, 1550880000000, 1550966400000, 1551052800000, 1551139200000, 1551225600000, 1551312000000, 1551398400000, 1551484800000, 1551571200000, 1551657600000, 1551744000000, 1551830400000, 1551916800000, 1552003200000], ['y0', 37, 20, 32, 39, 32, 35, 19, 65, 36, 62, 113, 69, 120, 60, 51, 49, 71, 122, 149, 69, 57, 21, 33, 55, 92, 62, 47, 50, 56, 116, 63, 60, 55, 65, 76, 33, 45, 64, 54, 81, 180, 123, 106, 37, 60, 70, 46, 68, 46, 51, 33, 57, 75, 70, 95, 70, 50, 68, 63, 66, 53, 38, 52, 109, 121, 53, 36, 71, 96, 55, 58, 29, 31, 55, 52, 44, 126, 191, 73, 87, 255, 278, 219, 170, 129, 125, 126, 84, 65, 53, 154, 57, 71, 64, 75, 72, 39, 47, 52, 73, 89, 156, 86, 105, 88, 45, 33, 56, 142, 124, 114, 64], ['y1', 22, 12, 30, 40, 33, 23, 18, 41, 45, 69, 57, 61, 70, 47, 31, 34, 40, 55, 27, 57, 48, 32, 40, 49, 54, 49, 34, 51, 51, 51, 66, 51, 94, 60, 64, 28, 44, 96, 49, 73, 30, 88, 63, 42, 56, 67, 52, 67, 35, 61, 40, 55, 63, 61, 105, 59, 51, 76, 63, 57, 47, 56, 51, 98, 103, 62, 54, 104, 48, 41, 41, 37, 30, 28, 26, 37, 65, 86, 70, 81, 54, 74, 70, 50, 74, 79, 85, 62, 36, 46, 68, 43, 66, 50, 28, 66, 39, 23, 63, 74, 83, 66, 40, 60, 29, 36, 27, 54, 89, 50, 73, 52]],
    types: {
      y0: 'line',
      y1: 'line',
      x: 'x'
    },
    names: {
      y0: '#0',
      y1: '#1'
    },
    colors: {
      y0: '#3dc23f',
      y1: '#F34C44'
    }
  }][0];
}
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDate = toDate;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function computeYRatio(height, max, min) {
  return (max - min) / height;
}

function computeXRatio(width, length) {
  return width / (length - 2);
}

function toDate(timestamp, withDay) {
  var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var shortDays = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat'];
  var date = new Date(timestamp);

  if (withDay) {
    return "".concat(shortDays[date.getDay()], ", \n        ").concat(shortMonths[date.getMonth()], " ").concat(date.getDate());
  }

  return "".concat(shortMonths[date.getMonth()], " ").concat(date.getDate());
}

function isOver(mouse, x, length, dWidth) {
  if (!mouse) return false;
  var width = dWidth / length;
  console.log('isOver');
  return Math.abs(x - mouse.x) < width / 3;
}

function line(ctx, coords, _ref) {
  var color = _ref.color;
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;

  var _iterator = _createForOfIteratorHelper(coords),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          x = _step$value[0],
          y = _step$value[1];

      ctx.lineTo(x, y);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ctx.stroke();
  ctx.closePath();
}

function circle(ctx, _ref2, radius, color) {
  var _ref3 = _slicedToArray(_ref2, 2),
      x = _ref3[0],
      y = _ref3[1];

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = '#fff';
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function boundaries(_ref4) {
  var columns = _ref4.columns,
      types = _ref4.types;
  var min, max;
  columns.forEach(function (col) {
    if (types[col[0]] !== 'line') return;
    if (typeof min !== 'number') min = col[1];
    if (typeof max !== 'number') max = col[1];

    for (var i = 1; i < col.length; i++) {
      if (min > col[i]) min = col[i];
      if (max < col[i]) max = col[i];
    }
  });
  return [min, max];
}

function toCoords(xRatio, yRatio, DPI_HEIGHT, PADDING, yMin) {
  return function (col) {
    return col.map(function (y, i) {
      return [Math.floor((i - 1) * xRatio), Math.floor(DPI_HEIGHT - PADDING - (y - yMin) / yRatio)];
    }).filter(function (_, i) {
      return i !== 0;
    });
  };
}

function css(el) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.assign(el.style, styles);
}

module.exports = {
  computeXRatio: computeXRatio,
  computeYRatio: computeYRatio,
  toDate: toDate,
  isOver: isOver,
  line: line,
  circle: circle,
  boundaries: boundaries,
  toCoords: toCoords,
  css: css
};
},{}],"tooltip.js":[function(require,module,exports) {
"use strict";

var _utils = require("./utils");

var template = function template(data) {
  return "\n    <div class = \"tooltip-title\">".concat(data.title, "</div>\n    <ul class=\"tooltip-list\">\n    ").concat(data.items.map(function (item) {
    return "\n        <li class = \"tooltip-list-item\">\n            <div class=\"value\" style=\"color: ".concat(item.color, "\">").concat(item.value, "</div>\n            <div class=\"name\" style=\"color: ").concat(item.color, "\">").concat(item.name, "</div>\n        </li>   \n     ");
  }).join('\n'), "\n    </ul>\n");
};

function tooltip(el) {
  var clear = function clear() {
    return el.innerHTML = '';
  };

  return {
    show: function show(_ref, data) {
      var left = _ref.left,
          top = _ref.top;
      clear();

      var _el$getBoundingClient = el.getBoundingClientRect(),
          height = _el$getBoundingClient.height,
          width = _el$getBoundingClient.width;

      (0, _utils.css)(el, {
        display: 'block',
        top: top - height + 'px',
        left: left + width / 2 + 'px'
      });
      el.insertAdjacentHTML('afterbegin', template(data));
    },
    hide: function hide() {
      (0, _utils.css)(el, {
        display: 'none'
      });
    }
  };
}

module.exports = {
  tooltip: tooltip
};
},{"./utils":"utils.js"}],"slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderChart = sliderChart;

var _utils = require("./utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function noop() {}

var HEIGHT = 40;
var DPI_HEIGHT = HEIGHT * 2;

function sliderChart(root, data, WIDTH) {
  var canvas = root.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var DPI_WIDTH = WIDTH * 2;
  var MIN_WIDTH = WIDTH * 0.05;
  var nextFn = noop;
  (0, _utils.css)(canvas, {
    width: WIDTH + 'px',
    height: HEIGHT + 'px'
  });
  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;
  var $left = root.querySelector('[data-el="left"]');
  var $window = root.querySelector('[data-el="window"]');
  var $right = root.querySelector('[data-el="right"]');

  function next() {
    nextFn(getPosition());
  }

  function mouseDown(e) {
    var type = e.target.dataset.type;
    var dimensions = {
      left: parseInt($window.style.left),
      right: parseInt($window.style.right),
      width: parseInt($window.style.width)
    };

    if (type === 'window') {
      var startX = e.pageX;

      document.onmousemove = function (e) {
        var delta = startX - e.pageX;
        if (delta === 0) return;
        var left = dimensions.left - delta;
        var right = WIDTH - left - dimensions.width;
        setPosition(left, right);
        next();
      };
    } else if (type === 'left' || type === 'right') {
      var _startX = e.pageX;

      document.onmousemove = function (e) {
        var delta = _startX - e.pageX;
        if (delta === 0) return;

        if (type === 'left') {
          var left = WIDTH - (dimensions.width + delta) - dimensions.right;
          var right = WIDTH - (dimensions.width + delta) - left;
          setPosition(left, right);
        } else {
          var _right = WIDTH - (dimensions.width - delta) - dimensions.left;

          setPosition(dimensions.left, _right);
        }

        next();
      };
    }
  }

  function mouseUp(e) {
    document.onmousemove = null;
  }

  root.addEventListener('mousedown', mouseDown);
  document.addEventListener('mouseup', mouseUp);
  var DEFAULT_WIDTH = WIDTH * 0.3;
  setPosition(0, WIDTH - DEFAULT_WIDTH);

  function setPosition(left, right) {
    var w = WIDTH - right - left;

    if (w < MIN_WIDTH) {
      (0, _utils.css)($window, {
        width: MIN_WIDTH + 'px'
      });
      return;
    }

    if (left < 0) {
      (0, _utils.css)($window, {
        left: '0px'
      });
      (0, _utils.css)($left, {
        width: '0px'
      });
      return;
    }

    if (right < 0) {
      (0, _utils.css)($window, {
        right: '0px'
      });
      (0, _utils.css)($right, {
        width: '0px'
      });
      return;
    }

    (0, _utils.css)($window, {
      width: w + 'px',
      left: left + 'px',
      right: right + 'px'
    });
    (0, _utils.css)($left, {
      width: left + 'px'
    });
    (0, _utils.css)($right, {
      width: right + 'px'
    });
  }

  function getPosition() {
    var left = parseInt($left.style.width);
    var right = WIDTH - parseInt($right.style.width);
    return [left * 100 / WIDTH, right * 100 / WIDTH];
  }

  var _boundaries = (0, _utils.boundaries)(data),
      _boundaries2 = _slicedToArray(_boundaries, 2),
      yMin = _boundaries2[0],
      yMax = _boundaries2[1];

  var yRatio = (0, _utils.computeYRatio)(DPI_HEIGHT, yMax, yMin);
  var xRatio = (0, _utils.computeXRatio)(DPI_WIDTH, data.columns[0].length);
  var yData = data.columns.filter(function (col) {
    return data.types[col[0]] === 'line';
  }); //PAINTING

  yData.map((0, _utils.toCoords)(xRatio, yRatio, DPI_HEIGHT, -5, yMin)).forEach(function (coords, idx) {
    var color = data.colors[yData[idx][0]];
    (0, _utils.line)(ctx, coords, {
      color: color
    });
  });
  return {
    subscribe: function subscribe(fn) {
      nextFn = fn;
      fn(getPosition());
    }
  };
}
},{"./utils":"utils.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"chart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chart = chart;

var _utils = require("./utils");

var _tooltip = require("./tooltip");

var _slider = require("./slider");

require("./styles.scss");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WIDTH = 600;
var HEIGHT = 200;
var PADDING = 40;
var DPI_WIDTH = WIDTH * 2;
var DPI_HEIGHT = HEIGHT * 2;
var VIEW_HEIGHT = DPI_HEIGHT - 2 * PADDING;
var VIEW_WIDTH = DPI_WIDTH;
var ROWS_COUNT = 5;
var CIRCLE_RADIUS = 8;

function chart(root, data) {
  var canvas = root.querySelector('canvas[data-el="main"]');
  var ctx = canvas.getContext('2d');
  var tip = (0, _tooltip.tooltip)(root.querySelector('[data-el="tooltip"]'));
  var slider = (0, _slider.sliderChart)(root.querySelector('[data-el="slider"]'), data, WIDTH);
  var raf;
  console.log(data);
  (0, _utils.css)(canvas, {
    width: WIDTH + 'px',
    height: HEIGHT + 'px'
  });
  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;
  var proxy = new Proxy({}, {
    set: function set() {
      var result = Reflect.set.apply(Reflect, arguments);
      raf = requestAnimationFrame(paint);
      return result;
    }
  });
  slider.subscribe(function (pos) {
    proxy.pos = pos;
  });
  canvas.addEventListener('mousemove', mouseMove);
  canvas.addEventListener('mouseleave', mouseLeave);

  function mouseMove(_ref) {
    var clientX = _ref.clientX,
        clientY = _ref.clientY;

    var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
        left = _canvas$getBoundingCl.left,
        top = _canvas$getBoundingCl.top;

    proxy.mouse = {
      x: (clientX - left) * 2,
      tooltip: {
        left: clientX - left,
        top: clientY - top
      }
    };
  }

  function mouseLeave() {
    proxy.mouse = null;
    tip.hide();
  }

  function clear() {
    ctx.clearRect(0, 0, DPI_WIDTH, DPI_HEIGHT);
  }

  function paint() {
    //COMPUTING
    clear();
    var length = data.columns[0].length;
    var leftIndex = Math.round(length * proxy.pos[0] / 100);
    var rightIndex = Math.round(length * proxy.pos[1] / 100);
    var columns = data.columns.map(function (col) {
      var res = col.slice(leftIndex, rightIndex);

      if (typeof res[0] !== 'string') {
        res.unshift(col[0]);
      }

      return res;
    });
    console.log(columns);

    var _boundaries = (0, _utils.boundaries)({
      columns: columns,
      types: data.types
    }),
        _boundaries2 = _slicedToArray(_boundaries, 2),
        yMin = _boundaries2[0],
        yMax = _boundaries2[1];

    var yRatio = (0, _utils.computeYRatio)(VIEW_HEIGHT, yMax, yMin);
    var xRatio = (0, _utils.computeXRatio)(VIEW_WIDTH, columns[0].length);
    var yData = columns.filter(function (col) {
      return data.types[col[0]] === 'line';
    });
    var xData = columns.filter(function (col) {
      return data.types[col[0]] !== 'line';
    })[0]; //PAINTING

    yAxis(yMin, yMax);
    xAxis(xData, yData, xRatio);
    yData.map((0, _utils.toCoords)(xRatio, yRatio, DPI_HEIGHT, PADDING, yMin)).forEach(function (coords, idx) {
      var color = data.colors[yData[idx][0]];
      (0, _utils.line)(ctx, coords, {
        color: color
      });

      var _iterator = _createForOfIteratorHelper(coords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              x = _step$value[0],
              y = _step$value[1];

          if ((0, _utils.isOver)(proxy.mouse, x, coords.length, DPI_WIDTH)) {
            (0, _utils.circle)(ctx, [x, y], CIRCLE_RADIUS, color);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  function xAxis(xData, yData, xRatio) {
    var colsCount = 6;
    var step = Math.round(xData.length / colsCount);
    ctx.beginPath();

    var _loop = function _loop(i) {
      var x = i * xRatio;

      if ((i - 1) % step === 0) {
        var text = (0, _utils.toDate)(xData[i]);
        ctx.fillText(text, x, DPI_HEIGHT - 10);
      }

      if ((0, _utils.isOver)(proxy.mouse, x, xData.length, DPI_WIDTH)) {
        ctx.save();
        ctx.moveTo(x, PADDING);
        ctx.lineTo(x, DPI_HEIGHT - PADDING);
        ctx.restore();
        tip.show(proxy.mouse.tooltip, {
          title: (0, _utils.toDate)(xData[i]),
          items: yData.map(function (col) {
            return {
              color: data.colors[col[0]],
              name: data.names[col[0]],
              value: col[i + 1]
            };
          })
        });
      }
    };

    for (var i = 1; i < xData.length; i++) {
      _loop(i);
    }

    ctx.stroke();
    ctx.closePath();
  }

  function yAxis(yMin, yMax) {
    var step = VIEW_HEIGHT / ROWS_COUNT;
    var textStep = (yMax - yMin) / ROWS_COUNT;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#bbb';
    ctx.font = 'normal 20px Helvetica,sans-serif';
    ctx.fillStyle = '#96a2aa';

    for (var i = 1; i <= ROWS_COUNT; i++) {
      var y = step * i;
      var text = Math.round(yMax - textStep * i);
      ctx.fillText(text.toString(), 5, y + PADDING - 10);
      ctx.moveTo(0, y + PADDING);
      ctx.lineTo(DPI_WIDTH, y + PADDING);
    }

    ctx.stroke();
    ctx.closePath();
  }

  return {
    init: function init() {
      paint();
    },
    destroy: function destroy() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('mousemove');
      canvas.removeEventListener('mouseleave');
    }
  };
}
},{"./utils":"utils.js","./tooltip":"tooltip.js","./slider":"slider.js","./styles.scss":"styles.scss"}],"app.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");

var _chart = require("./chart");

var chartExample = (0, _chart.chart)(document.getElementById('chart'), (0, _data.getChartData)());
chartExample.init();
},{"./data":"data.js","./chart":"chart.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50403" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map