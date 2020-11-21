const stringify = (() => {
  const replacer = (key, val) => {
    if(typeof val === 'symbol') {
      return val.toString();
    }

    if(val instanceof Set) {
      return Array.from(val);
    }

    if(val instanceof Map) {
      return Array.from(val.entries());
    }

    if(typeof val === 'function') {
      return val.toString();
    }

    return val;
  }
  
  return (obj, spaces = 0) => JSON.stringify(obj, replacer, spaces)
})();
