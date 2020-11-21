function lastItem(list) {
  if(Array.isArray(list)) {
    return list.slice(-1)[0];
  }
  
  if(list instanceof Set) {
    return Array.from(list).slice(-1)[0];
  }
  
  if(list instanceof Map) {
    return Array.from(list.values()).slice(-1)[0];
  }
}
