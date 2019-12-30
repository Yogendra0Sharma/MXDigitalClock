function flattenStyles(defaultStyle, overrideStyles) {
  const styles = [defaultStyle, ...overrideStyles.filter(object => object !== undefined)];
  return Object.keys(defaultStyle).reduce((flattened, currentKey) => {
    const styleItems = styles.map(object => object[currentKey]);
    return Object.assign({}, flattened, {
      [currentKey]: flattenObjects(styleItems)
    });
  }, {});
}

function flattenObjects(objects) {
  return objects.reduce((merged, object) => Object.assign({}, merged, object), {});
}

export { flattenStyles };
