import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-home iheader': {
    'display': 'flex !important',
    'justifyContent': 'flex-start',
    'alignItems': 'center'
  },
  'page-home iheader userimg': {
    'height': [{ 'unit': 'px', 'value': 38 }],
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'borderRadius': '9999px',
    'verticalAlign': 'bottom'
  },
  'page-home iheader h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'verticalAlign': 'bottom'
  },
  'page-home iheader nav': {
    'display': 'flex !important',
    'flex': '1',
    'justifyContent': 'flex-end'
  },
  'page-home iheader nav ion-icon': {
    'marginRight': [{ 'unit': 'px', 'value': 22 }],
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  }
});
