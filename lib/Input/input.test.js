"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<Input />', function () {
  test('renders label', function () {
    var component = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "Name"
    }));
    expect(component.find('label').text()).toEqual('Name');
  });
  test('renders placeholder', function () {
    var component = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      placeholder: "Name"
    }));
    expect(component.find('input').prop('placeholder')).toEqual('Name');
  });
});