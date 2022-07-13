const strictEquals = function (value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return false;
  } else if (Object.is(value1, value2)) {
    return true;
  } else if (!value1 && !value2) {
    return true;
  } else {
    return false;
  }
};

export default strictEquals;

//hacer buen naming tambien parametros no son a o b  sino valor 1 o 2.

//usar el  debugger para comprobar si funciona. dejar de un lado el console log.
