import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-home-article ion-content': {
    'background': '#F4F4F4 !important'
  },
  'page-home-article article_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'page-home-article article_wrap article': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-home-article article_wrap article header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-home-article article_wrap article header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-home-article article_wrap article header p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#7A7A7A'
  },
  'page-home-article article_wrap article header time': {
    'float': 'right'
  },
  'page-home-article article_wrap article buttom': {
    'color': '#7A7A7A'
  }
});
