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
  },
  'page-open-article share': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'display': 'flex',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F4F4F4' }]
  },
  'page-open-article share userimg': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-open-article share dec': {
    'flex': '1'
  },
  'page-open-article share dec name': {
    'color': '#7A7A7A',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'page-open-article share dec imgs_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-open-article share dec imgs_wrap imgs': {
    'width': [{ 'unit': '%H', 'value': 0.322 }],
    'background': 'yellow',
    'marginRight': [{ 'unit': '%H', 'value': 0.01 }],
    'float': 'left',
    'marginBottom': [{ 'unit': '%V', 'value': 0.01 }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important'
  },
  'page-open-article share dec imgs_wrap imgs:before': {
    'content': '""',
    'display': 'inline-block',
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }]
  },
  'page-open-article share dec bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'color': '#7A7A7A'
  },
  'page-open-article share dec bottom time': {
    'float': 'left'
  },
  'page-open-article share dec bottom comment': {
    'float': 'right',
    'marginRight': [{ 'unit': '%H', 'value': 0.001 }]
  }
});
