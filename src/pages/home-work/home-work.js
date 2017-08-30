import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-home-work ion-content': {
    'background': '#F4F4F4 !important'
  },
  'page-home-work card_wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 12 }],
    'overflow': 'hidden'
  },
  'page-home-work card_wrap card': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'boxShadow': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#eaeaea' }],
    'marginLeft': [{ 'unit': 'px', 'value': 16 }],
    'background': '#fff',
    'borderRadius': '8px',
    'float': 'left',
    'overflow': 'hidden',
    'marginBottom': [{ 'unit': 'px', 'value': 18 }]
  },
  'page-home-work card_wrap card ban': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'backgroundSize': 'cover !important'
  },
  'page-home-work card_wrap card dec': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 42 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.03 }]
  },
  'page-home-work card_wrap card dec p': {
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-home-work card_wrap card bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.03 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'overflow': 'hidden',
    'color': '#8A8A8A'
  },
  'page-home-work card_wrap card bottom name': {
    'float': 'left'
  },
  'page-home-work card_wrap card bottom time': {
    'float': 'right'
  }
});
