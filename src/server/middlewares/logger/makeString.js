import 'colors';
import { inspect } from 'util';
import compactNonSerializables from './makeString/compactNonSerializables';
import dropProperty from './makeString/dropProperty';

Object.prototype[inspect.custom] = compactNonSerializables;

const braces = /[{}]/g;
const arrayOpeningBrackets = /(\n\s*)(\[)(\s)/g;
const arrayClosingBrackets = /(\s)(])(,?\s)/g;
const styleBrackets = (_, p1, p2, p3) => `${p1}${p2.gray}${p3}`;

const inspectOptions = {
  breakLength: 1,
  colors: true,
  compact: false,
  depth: null
};

const makeString = action => {
  const actionCopy = dropProperty(action, 'type');
  return (
    `${action.type}:\n`.blue.bold +
    inspect(actionCopy, inspectOptions)
      .replace(braces, ' ')
      .replace(arrayOpeningBrackets, styleBrackets)
      .replace(arrayClosingBrackets, styleBrackets) +
    '\n'
  );
};

export default makeString;
