import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-login login_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'page-login login_wrap input': {
    'display': 'block',
    'outline': 'none',
    'background': '#fff',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'textIndent': '12px',
    'color': '#666',
    'zIndex': '9999999'
  },
  'page-login login_wrap button': {
    'width': [{ 'unit': '%H', 'value': 0.8 }, { 'unit': 'string', 'value': '!important' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'auto' }],
    'zIndex': '9999999'
  },
  'page-login login_wrap logo': {
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 40 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '9999px'
  },
  'page-login Copyright': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'textAlign': 'center'
  }
});
