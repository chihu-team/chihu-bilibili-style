import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'ion-menu top_ban': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }],
    'height': [{ 'unit': 'px', 'value': 190 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  'ion-menu top_ban bilibili': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': -42 }],
    'right': [{ 'unit': 'px', 'value': -30 }],
    'zIndex': '1'
  },
  'ion-menu top_ban bilibili svg': {
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'ion-menu top_ban lv': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': 12 }]
  },
  'ion-menu top_ban lv svg': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'verticalAlign': 'text-bottom',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 6 }]
  },
  'ion-menu top_ban level': {
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }],
    'borderRadius': '8px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'fontWeight': '700'
  },
  'ion-menu top_ban userimg': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '9999px'
  },
  'ion-menu top_ban h4': {
    'marginLeft': [{ 'unit': 'px', 'value': 14 }]
  },
  'ion-menu top_ban p': {
    'position': 'relative',
    'zIndex': '4'
  },
  'ion-menu top_ban h4': {
    'position': 'relative',
    'zIndex': '4'
  },
  'ion-menu list': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ion-menu footer_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'alignContent': 'center'
  },
  'ion-menu footer_wrap its': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'alignContent': 'center',
    'flex': '1'
  },
  'ion-menu footer_wrap its span': {
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'ion-menu footer_wrap its svg': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'ion-menu toolbar': {
    'minHeight': [{ 'unit': 'px', 'value': 42 }]
  }
});
