const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else if (Object.is(a, b)) {
    return true;
  } else if (!a && !b) {
    return true;
  } else {
    return false;
  }
};
