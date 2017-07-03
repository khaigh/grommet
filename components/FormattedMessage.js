'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { FormattedMessage } from 'react-intl';

var GrommetFormattedMessage = function GrommetFormattedMessage(props, context) {
  return context.intl ? context.intl.renderFormattedMessage(props) : _react2.default.createElement(
    'span',
    null,
    props.defaultMessage || props.id
  );
};
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

// NOTE: This component is a temporary wrapper of react-intl FormattedMessage
// to avoid errors being thrown if the context hasn't been wrapped by
// IntlProvider. The hope is that react-intl will change to obviate the
// need for this component.

GrommetFormattedMessage.contextTypes = {
  intl: _propTypes2.default.object
};

GrommetFormattedMessage.propTypes = {
  id: _propTypes2.default.string.isRequired,
  defaultMessage: _propTypes2.default.string
};

GrommetFormattedMessage.displayName = 'GrommetFormattedMessage';

exports.default = GrommetFormattedMessage;
module.exports = exports['default'];