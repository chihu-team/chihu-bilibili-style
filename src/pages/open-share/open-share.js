import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-open-share share': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'display': 'flex',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F4F4F4' }]
  },
  'page-open-share share userimg': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-open-share share dec': {
    'flex': '1'
  },
  'page-open-share share dec name': {
    'color': '#7A7A7A',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'page-open-share share dec imgs_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-open-share share dec imgs_wrap imgs': {
    'width': [{ 'unit': '%H', 'value': 0.322 }],
    'background': 'yellow',
    'marginRight': [{ 'unit': '%H', 'value': 0.01 }],
    'float': 'left',
    'marginBottom': [{ 'unit': '%V', 'value': 0.01 }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important'
  },
  'page-open-share share dec imgs_wrap imgs:before': {
    'content': '""',
    'display': 'inline-block',
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }]
  },
  'page-open-share share dec bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'color': '#7A7A7A'
  },
  'page-open-share share dec bottom time': {
    'float': 'left'
  },
  'page-open-share share dec bottom comment': {
    'float': 'right',
    'marginRight': [{ 'unit': '%H', 'value': 0.001 }]
  }
});
