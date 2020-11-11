const deepFreeze = obj => {
  if (obj && typeof obj === "object") {
    if(!Object.isFrozen(obj)) {
      Object.freeze(obj);
    }
    
    Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
  }

  return obj;
};
