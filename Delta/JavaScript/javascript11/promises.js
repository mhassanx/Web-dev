let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then((result) => {
    console.log("red done:", result);
    return changeColor("green", 1000);
  })
  .then((result) => {
    console.log("green done:", result);
    return changeColor("yellow", 1000);
  })
  .then((result) => {
    console.log("yellow done:", result);
    return changeColor("blue", 1000);
  })
  .then((result) => {
    console.log("blue done:", result);
  })
  .catch((err) => {
    console.error("Error in color chain:", err);
  });
