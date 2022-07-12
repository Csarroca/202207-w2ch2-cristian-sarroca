/*const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else if (Object.is(a, b)) {
    return true;
  }
};*/

const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else if (Object.is(a, b)) {
    return true;
  } else {
    return false;
  }
};

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));
