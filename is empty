function isEmpty(x) {
  if(Array.isArray(x)
    || typeof x === 'string'
    || x instanceof String
   ) {
    return x.length === 0;
  }
  
  if(x instanceof Map || x instanceof Set) {
    return x.size === 0;
  }
  
  if(({}).toString.call(x) === '[object Object]') {
    return Object.keys(x).length === 0;
  }
  
  return false;
}
