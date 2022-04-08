const idCounter = {};
export const makeRandomID = (prefix = '') => {
  if (!idCounter[prefix]) idCounter[prefix] = 0;
  const id = ++idCounter[prefix];
  return `${prefix}${id}`;
};

export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const isAsyncFunction = (functionToCheck) =>
  functionToCheck &&
  {}.toString.call(functionToCheck) === '[object AsyncFunction]';
export const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
export const isObject = (obj) =>
  obj && {}.toString.call(obj) === '[object Object]';
export const isArray = (arr) =>
  arr && {}.toString.call(arr) === '[object Array]';
export const isString = (str) =>
  str && {}.toString.call(str) === '[object String]';
export const isNumber = (value) => /^-?\d+\.?\d*$/.test(value);

export const resolveChildren = (children, defaultArgs, elseReturn) => {
  if (isFunction(children)) return children(defaultArgs);
  if (elseReturn) return elseReturn();
  return children;
};

export const copyToClipboard = (text) => {
  if (window.clipboardData && window.clipboardData.setData)
    return clipboardData.setData('Text', text); // Useful for IE
  let textArea = document.createElement('textarea');
  //Stops textarea from appearing
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let successful = false;
  // TODO: Change to toast
  try {
    successful = document.execCommand('copy');
    if (!successful) console.warn(`Cannot copy to clipboard ${text}`); // eslint-disable-line no-console
  } catch (err) {
    console.warn(`Cannot copy to clipboard ${text}`); // eslint-disable-line no-console
  }
  document.body.removeChild(textArea);
  return successful;
};
