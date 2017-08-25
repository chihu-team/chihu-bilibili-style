import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-open-article article': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-open-article article header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-open-article article header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-open-article article header p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#7A7A7A'
  },
  'page-open-article article header time': {
    'float': 'right'
  },
  'page-open-article article header btn': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#7A7A7A' }],
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }]
  },
  'page-open-article article buttom': {
    'color': '#7A7A7A'
  },
  'page-open-article article content_wrap': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-open-article article content_wrap img': {
    'display': 'inline-block !important',
    'maxWidth': [{ 'unit': '%H', 'value': 0.98 }, { 'unit': 'string', 'value': '!important' }]
  }
});
