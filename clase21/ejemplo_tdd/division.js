function division(a,b) {
  if (b===0) return null;
  return a / b;
}

// a > b -> a/b > 1
// a < b -> a/b < 1
// b = 0 -> a/b no esta definida


// a=6 y b=2 a/b=3

module.exports = {
  division
}