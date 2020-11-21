function range(maxOrStart, end = null, step = null) { 
  if(!end) {
    return Array.from({length: maxOrStart}, (_, i) => i)
  }
  
  if(end <= maxOrStart) {
    return [];
  }
  
  if(step !== null) {
    return Array.from(
      {length: Math.ceil(((end - maxOrStart) / step))}, 
      (_, i) => (i * step) + maxOrStart
    );
  }
  
  return Array.from(
    {length: Math.ceil((end - maxOrStart))}, 
    (_, i) => i + maxOrStart
  );
}
