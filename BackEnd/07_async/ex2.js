function changeColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve(color);
    }, 1000);
  });
}

changeColor("red")
  .then(function (color) {
    return changeColor("orange");
  })
  .then(function (color) {
    return changeColor("yellow");
  })
  .then(function (color) {
    return changeColor("green");
  })
  .then(function (color) {
    return changeColor("blue");
  });


  