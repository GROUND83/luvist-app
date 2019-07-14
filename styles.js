import { Dimensions,Platform } from  'react-native'

let { height, width } = Dimensions.get('window')
const deviceHeight = height
const deviceWidth = width
const deviceType = Platform.OS === 'ios' ? true : false ;

if( width > height ) {
  height = width;
  width = height;
  }
  
// Calculating ratio from iPhone breakpoints
const ratioX = deviceType ? ( width < 550 ? ( width < 430 ? ( width < 375 ? (width < 320 ? 0.75 : 0.875) : 1 ) : 1.125 ) : 1.25 ) : 1;
const ratioY = deviceType ? ( height < 800 ? ( height < 640 ? ( height < 568 ? (height < 480 ? 0.75 : 0.875) : 1 ) : 1.125 ) : 1.25 ) : 1;
// We set our base font size value
const base_unit = 16;
// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
  }

const rem = deviceWidth/380

export default {
  MAIN_LIGHT: '#ffa2c5',
  MAIN_COLOR: '#ff176e',
  MAIN_DARK: '#bf1153',
  GRAY_01: '#f1f5f5',
  GRAY_02: '#eaeeef',
  GRAY_03: '#ced3d6',
  GRAY_04: '#878d91',
  GRAY_05: '#4d5256',
  FONT_SIZE	: em(1),
  FONT_SIZE_SMALLER	: em(0.75),
  FONT_SIZE_SMALL	: em(0.875),
  FONT_SIZE_TITLE	: em(1.25),
  H1: 18,
  FONT_12: 12 * rem,
  FONT_14: 14 * rem,
  FONT_18: 18 * rem,
  FONT_20: 20 * rem,
  FONT_22: 22 * rem,
  deviceHeight,
  deviceWidth,
}

