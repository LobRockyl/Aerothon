import { Prop } from '../types';
import { textStyleProps } from './textStyleProps';
import { layoutProps } from './layoutProps';

export const iconProps: Record<string, Prop> = {
  color: textStyleProps.color,
  containerStyle: {
    name: 'Container style',
    subprops: {
      margin: layoutProps.margin,
      marginBottom: layoutProps.marginBottom,
      marginLeft: layoutProps.marginLeft,
      marginRight: layoutProps.marginRight,
      marginTop: layoutProps.marginTop,
    },
  },
  name: {
    name: 'Name',
    optional: false,
    value: 'home',
    shownValue: 'home',
    oldValue: 'home',
    oldShownValue: 'home',
    renderType: 'string',
    selectorType: 'input',
    selectorProps: {},
  },
  raised: {
    name: 'Raised',
    optional: true,
    value: undefined,
    shownValue: false,
    oldValue: false,
    oldShownValue: false,
    renderType: 'boolean',
    selectorType: 'checkBox',
    selectorProps: {},
  },
  reverse: {
    name: 'Reverse',
    optional: true,
    value: undefined,
    shownValue: false,
    oldValue: false,
    oldShownValue: false,
    renderType: 'boolean',
    selectorType: 'checkBox',
    selectorProps: {},
  },
  reverseColor: {
    name: 'Reverse  color',
    optional: true,
    value: undefined,
    shownValue: '#ffffff',
    oldValue: '#ffffff',
    oldShownValue: '#ffffff',
    renderType: 'string',
    selectorType: 'colorPicker',
    selectorProps: {},
  },
  size: {
    name: 'Size',
    optional: true,
    value: undefined,
    shownValue: 14,
    oldValue: 14,
    oldShownValue: 14,
    renderType: 'number',
    selectorType: 'slider',
    selectorProps: {
      step: 1,
      minimumValue: 2,
      maximumValue: 50,
    },
  },
  type: {
    name: 'Type',
    optional: true,
    value: undefined,
    shownValue: 'material',
    oldValue: 'material',
    oldShownValue: 'material',
    renderType: 'string',
    selectorType: 'dropDown',
    selectorProps: {
      options: [
        { value: 'antdesign', label: 'Ant Design' },
        { value: 'entypo', label: 'Entypo' },
        { value: 'evilicon', label: 'Evil Icon' },
        { value: 'feather', label: 'Feather' },
        { value: 'font-awesome', label: 'Font Awesome' },
        { value: 'font-awesome-5', label: 'Font Awesome 5' },
        { value: 'fontisto', label: 'Fontisto' },
        { value: 'foundation', label: 'Foundation' },
        { value: 'ionicon', label: 'Ionicon' },
        { value: 'material', label: 'Material' },
        { value: 'material-community', label: 'Material Community' },
        { value: 'octicon', label: 'Octicon' },
        { value: 'simple-line-icon', label: 'Simple Line Icon' },
        { value: 'zocial', label: 'Zocial' },
      ],
    },
  },
};
