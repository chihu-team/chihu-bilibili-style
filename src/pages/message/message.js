import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-message ion-content': {
    'background': '#F4F4F4 !important'
  },
  'page-message iheader': {
    'display': 'flex !important',
    'justifyContent': 'flex-start',
    'alignItems': 'center'
  },
  'page-message iheader ion-icon': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -4 }]
  },
  'page-message iheader userimg': {
    'height': [{ 'unit': 'px', 'value': 38 }],
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '9999px',
    'verticalAlign': 'bottom'
  },
  'page-message iheader h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'bottom'
  },
  'page-message iheader nav': {
    'display': 'flex !important',
    'flex': '1',
    'justifyContent': 'flex-end'
  },
  'page-message iheader nav ion-icon': {
    'marginRight': [{ 'unit': 'px', 'value': 22 }],
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'page-message top_wrap': {
    'display': 'flex',
    'background': '#fff'
  },
  'page-message top_wrap mi': {
    'flex': '1',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 14 }],
    'color': '#666'
  },
  'page-message top_wrap mi svg': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }]
  },
  'page-message mes': {
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#fff',
    'display': 'flex',
    'alignItems': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }]
  },
  'page-message mes svg': {
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  }
});
