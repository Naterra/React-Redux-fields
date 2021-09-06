"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Select = function Select(_ref) {
  var input = _ref.input,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? 1 : _ref$id,
      label = _ref.label,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      disabled = _ref.disabled,
      _ref$extraClass = _ref.extraClass,
      extraClass = _ref$extraClass === void 0 ? '' : _ref$extraClass,
      onChangeCallback = _ref.onChangeCallback,
      children = _ref.children;

  var _useState = (0, _react.useState)(defaultValue || ''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var elRef = (0, _react.useRef)();

  var _options = options ? options : {
    dropdownOptions: {
      coverTrigger: false
    }
  };

  (0, _react.useEffect)(function () {
    var instance = M.FormSelect.init(elRef.current, _options);
    return function () {
      instance && instance.destroy();
    };
  });

  var onChangeEvent = function onChangeEvent(val) {
    if (onChangeCallback) onChangeCallback(val, id);
    setValue(val);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-field select-block ".concat(extraClass)
  }, /*#__PURE__*/_react["default"].createElement("select", {
    id: id,
    ref: elRef,
    disabled: disabled,
    onChange: function onChange(e) {
      return onChangeEvent(e.target.value);
    },
    value: value
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "---"), options && options.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: item.value
    }, item.name);
  }), !options && children && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, children)), /*#__PURE__*/_react["default"].createElement("label", null, label));
};

Select.defaultProps = {
  id: 1,
  label: '',
  defaultValue: '',
  options: {},
  disabled: false,
  onChange: false
};
var _default = Select;
exports["default"] = _default;