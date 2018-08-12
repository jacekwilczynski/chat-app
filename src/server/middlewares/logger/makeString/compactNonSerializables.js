const isSerializable = obj =>
  [Object.prototype, Array.prototype].includes(Object.getPrototypeOf(obj));

const compactNonSerializables = function() {
  if (isSerializable(this)) {
    return this;
  } else {
    return this.constructor.name.gray;
  }
};

export default compactNonSerializables;
