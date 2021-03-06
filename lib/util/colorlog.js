"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chalk = require("chalk");

var Color = (function () {
    function Color() {
        _classCallCheck(this, Color);
    }

    _createClass(Color, null, [{
        key: "ify",
        value: function ify() {
            var str = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _str = _step.value;

                    if (_str === "\n") {
                        str += _str;
                    } else {
                        if (typeof _str === "string") {
                            str += this.style.bold(_str);
                        } else {
                            str += this.style.underline.bgBlack(_str);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return str;
        }
    }, {
        key: "info",
        value: function info() {
            this.style("green");

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return this.ify(args);
        }
    }, {
        key: "warn",
        value: function warn() {
            this.style("magenta");

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return this.ify(args);
        }
    }, {
        key: "error",
        value: function error() {
            this.style("red");

            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            return this.ify(args);
        }
    }, {
        key: "style",
        get: function get() {
            "use strict";
            return chalk[this._style || "green"];
        },
        set: function set(c) {
            this._style = c;
        }
    }]);

    return Color;
})();

module.exports = Color;
