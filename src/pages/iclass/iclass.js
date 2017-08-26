import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-iclass iheader': {
    'display': 'flex !important',
    'justifyContent': 'flex-start',
    'alignItems': 'center'
  },
  'page-iclass iheader ion-icon': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -4 }]
  },
  'page-iclass iheader userimg': {
    'height': [{ 'unit': 'px', 'value': 38 }],
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '9999px',
    'verticalAlign': 'bottom'
  },
  'page-iclass iheader h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'bottom'
  },
  'page-iclass iheader nav': {
    'display': 'flex !important',
    'flex': '1',
    'justifyContent': 'flex-end'
  },
  'page-iclass iheader nav ion-icon': {
    'marginRight': [{ 'unit': 'px', 'value': 22 }],
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'page-iclass iclass_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'page-iclass iclass_wrap ion-list-header': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'page-iclass iclass_wrap ic': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.04 }],
    'marginBottom': [{ 'unit': '%V', 'value': 0.04 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'float': 'left',
    'position': 'relative'
  },
  'page-iclass iclass_wrap ic img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'page-iclass iclass_wrap ic p': {
    'position': 'absolute',
    'color': '#fff',
    'bottom': [{ 'unit': 'px', 'value': 6 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '!important' }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontWeight': '600',
    'textAlign': 'center'
  }
});
