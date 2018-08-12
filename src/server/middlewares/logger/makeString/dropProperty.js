const dropProperty = (obj, key) => {
  const objCopy = Object.assign({}, obj);
  delete objCopy[key];
  return objCopy;
};

export default dropProperty;
