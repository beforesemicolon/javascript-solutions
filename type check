const isOfType = (() => {
  // create a plain object with no prototype
  const type = Object.create(null);
  
  // check for null type
  type.null = x => x === null;
  // check for undefined type
  type.undefined = x => x === undefined;
  // check for nil type. Either null or undefined
  type.nil = x => type.null(x) || type.undefined(x);
  // check for strings and string literal type. e.g: 's', "s", `str`, new String()
  type.string = x => !type.nil(x) && (typeof x === 'string' || x instanceof String);
  // check for number or number literal type. e.g: 12, 30.5, new Number()
  type.number = x => !type.nil(x) 
    && (// NaN & Infinity have typeof "number" and this excludes that
      (!isNaN(x) && isFinite(x)
      && typeof x === 'number'
    ) || x instanceof Number);
  // check for boolean or boolean literal type. e.g: true, false, new Boolean()
  type.boolean = x => !type.nil(x) && (typeof x === 'boolean' || x instanceof Boolean);
  // check for array type
  type.array = x => !type.nil(x) && Array.isArray(x);
  // check for object or object literal type. e.g: {}, new Object(), Object.create(null)
  type.object = x => ({}).toString.call(x) === '[object Object]';
  // check for provided type instance
  type.type = (x, X) => !type.nil(x) && x instanceof X;
  // check for set type
  type.set = x => type.type(x, Set);
  // check for map type
  type.map = x => type.type(x, Map);
  // check for date type
  type.date = x => type.type(x, Date);
  
  return type;
})();
