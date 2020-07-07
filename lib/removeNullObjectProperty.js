function removeNullObjectProperty(objectWithNull) {
  function removeNullProp(object) {
    if (typeof object === "object") {
      Object.keys(object).map((k) => {
        console.log({ name: k, type: typeof object[k], content: object[k] });
        if (object[k] === null) {
          // eslint-disable-next-line no-param-reassign
          delete object[k];
        } else if (typeof object[k] === "object") {
          removeNullProp(object[k]);
        }
        return k;
      });
    }
  }

  const object = { ...objectWithNull };
  removeNullProp(object);
  return object;
}
