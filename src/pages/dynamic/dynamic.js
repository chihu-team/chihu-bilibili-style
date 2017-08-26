import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-dynamic ion-content': {
    'background': '#F4F4F4 !important'
  },
  'page-dynamic iheader': {
    'display': 'flex !important',
    'justifyContent': 'flex-start',
    'alignItems': 'center'
  },
  'page-dynamic iheader ion-icon': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -4 }]
  },
  'page-dynamic iheader userimg': {
    'height': [{ 'unit': 'px', 'value': 38 }],
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '9999px',
    'verticalAlign': 'bottom'
  },
  'page-dynamic iheader h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'bottom'
  },
  'page-dynamic iheader nav': {
    'display': 'flex !important',
    'flex': '1',
    'justifyContent': 'flex-end'
  },
  'page-dynamic iheader nav ion-icon': {
    'marginRight': [{ 'unit': 'px', 'value': 22 }],
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'page-dynamic share_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'page-dynamic share_wrap share': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'display': 'flex',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F4F4F4' }]
  },
  'page-dynamic share_wrap share userimg': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-dynamic share_wrap share dec': {
    'flex': '1'
  },
  'page-dynamic share_wrap share dec name': {
    'color': '#7A7A7A',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'page-dynamic share_wrap share dec imgs_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-dynamic share_wrap share dec imgs_wrap imgs': {
    'width': [{ 'unit': '%H', 'value': 0.322 }],
    'background': 'yellow',
    'marginRight': [{ 'unit': '%H', 'value': 0.01 }],
    'float': 'left',
    'marginBottom': [{ 'unit': '%V', 'value': 0.01 }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important'
  },
  'page-dynamic share_wrap share dec imgs_wrap imgs:before': {
    'content': '""',
    'display': 'inline-block',
    'paddingBottom': [{ 'unit': '%V', 'value': 1 }]
  },
  'page-dynamic share_wrap share dec bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'color': '#7A7A7A'
  },
  'page-dynamic share_wrap share dec bottom time': {
    'float': 'left'
  },
  'page-dynamic share_wrap share dec bottom comment': {
    'float': 'right',
    'marginRight': [{ 'unit': '%H', 'value': 0.001 }]
  }
});
