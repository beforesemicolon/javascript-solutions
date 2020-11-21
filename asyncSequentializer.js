const asyncSequentializer = (() => {
  const toPromise = (x) => {
    if(x instanceof Promise) { // if promise just return it
      return x;
    }
    
    if(typeof x === 'function') {
      // if function is not async this will turn its result into a promise
      // if it is async this will await for the result
      return (async () => await x())();
    }
    
    return Promise.resolve(x)
  }
  
  return (list) => {
    const results = [];
    
    return list
      .reduce((lastPromise, currentPromise) => {
        return lastPromise.then(res => {
          results.push(res); // collect the results
          return toPromise(currentPromise);
        });
      }, toPromise(list.shift()))
      // collect the final result and return the array of results as resolved promise
      .then(res => Promise.resolve([...results, res]));
  }
})();
