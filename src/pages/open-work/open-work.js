import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-open-work work_banner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 230 }],
    'backgroundPosition': 'center center !important',
    'backgroundSize': 'cover !important'
  },
  'page-open-work header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.025 }, { 'unit': '%H', 'value': 0.025 }, { 'unit': '%V', 'value': 0.025 }, { 'unit': '%H', 'value': 0.025 }],
    'overflow': 'hidden',
    'display': 'flex',
    'alignItems': 'center'
  },
  'page-open-work header userimg': {
    'width': [{ 'unit': 'px', 'value': 42 }],
    'height': [{ 'unit': 'px', 'value': 42 }],
    'borderRadius': '9999px',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-open-work header base h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-open-work header base p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-open-work header other': {
    'display': 'flex',
    'flex': '1',
    'alignItems': 'center',
    'justifyContent': 'flex-end'
  },
  'page-open-work header other btn': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 18 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'page-open-work content_wrap': {
    'padding': [{ 'unit': '%V', 'value': 0.025 }, { 'unit': '%H', 'value': 0.025 }, { 'unit': '%V', 'value': 0.025 }, { 'unit': '%H', 'value': 0.025 }]
  },
  'page-open-work content_wrap dec': {
    'marginBottom': [{ 'unit': 'px', 'value': 45 }]
  },
  'page-open-work content_wrap foods': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'page-open-work content_wrap foods ion-row': {
    'borderBlockEnd': '1px solid #f3f4f5',
    'marginBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'page-open-work content_wrap step': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'page-open-work content_wrap step ion-card': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'transparent' }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-open-work content_wrap tip': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.03 }],
    'background': '#ddd',
    'color': '#3a3a3a'
  },
  'page-open-work content_wrap tip h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  }
});
