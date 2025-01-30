function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined case
  } else if (typeof x === 'string' || Array.isArray(x)){
    return x.length; // Access length only if x is string or array
  } else {
    return NaN; // Handle other cases
  }
}