function exclude(source, exclusionKeys) {
  const keys = Object.keys(source);
  return keys.filter(key => exclusionKeys.findIndex(k => k === key) === -1).reduce((result, key) => Object.assign({}, result, {
    [key]: source[key]
  }), {});
}
function only(source, selectionKeys) {
  return selectionKeys.filter(key => source[key] !== undefined).reduce((result, key) => Object.assign({}, result, {
    [key]: source[key]
  }), {});
}

export { exclude, only };
