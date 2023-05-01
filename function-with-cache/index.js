const getfnCache = (fnObj, arg) => {
  // no cache on fn so create it
  if (!fnObj.cache) {
    return (fnObj.cache = {});
  }

  // found cache value so return true
  return fnObj.cache && fnObj.cache[arg];
};
