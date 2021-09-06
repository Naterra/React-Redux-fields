"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Input = function Input(_ref) {
  var input = _ref.input,
      value = _ref.value,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      disabled = _ref.disabled,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-field"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({}, input, {
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    autoComplete: "off"
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "active",
    htmlFor: input.name
  }, label), touched && (error || warning) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-field-error"
  }, error && /*#__PURE__*/_react["default"].createElement("span", {
    className: "field-error"
  }, error), warning && /*#__PURE__*/_react["default"].createElement("span", {
    className: "field-warn"
  }, warning)));
};

Input.defaultProps = {
  type: 'text',
  value: 'New York',
  placeholder: 'City',
  className: 'validate'
};
var _default = Input;
exports["default"] = _default;