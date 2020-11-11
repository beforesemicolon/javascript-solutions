const deepClone = obj => {
  let clone = obj;
  if (obj && typeof obj === "object") {
    clone = new obj.constructor();
    
    Object.getOwnPropertyNames(obj).forEach(
      prop => (clone[prop] = deepClone(obj[prop]))
    );
  }

  return clone;
};
