import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-private-share ion-content': {
    'background': '#F4F4F4 !important'
  },
  'page-private-share share_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'page-private-share share_wrap share': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'display': 'flex',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F4F4F4' }]
  },
  'page-private-share share_wrap share userimg': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-private-share share_wrap share dec': {
    'flex': '1'
  },
  'page-private-share share_wrap share dec name': {
    'color': '#7A7A7A',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'page-private-share share_wrap share dec imgs_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-private-share share_wrap share dec imgs_wrap imgs': {
    'width': [{ 'unit': '%H', 'value': 0.322 }],
    'background': 'yellow',
    'marginRight': [{ 'unit': '%H', 'value': 0.01 }],
    'float': 'left',
    'marginBottom': [{ 'unit': '%V', 'value': 0.01 }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important'
  },
  'page-private-share share_wrap share dec imgs_wrap imgs:before': {
    'content': '""',
    'display': 'inline-block',
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }]
  },
  'page-private-share share_wrap share dec bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'color': '#7A7A7A'
  },
  'page-private-share share_wrap share dec bottom time': {
    'float': 'left'
  },
  'page-private-share share_wrap share dec bottom comment': {
    'float': 'right',
    'marginRight': [{ 'unit': '%H', 'value': 0.001 }]
  }
});
