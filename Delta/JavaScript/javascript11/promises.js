let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 10) + 1;
    if (rand > 5) {
      setTimeout(() => {
        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve("color changed");
      }, delay);
    } else {
      reject("color not changed");
    }
  });
}

// changeColor("red", 1000)
//   .then((result) => {
//     console.log("red done:", result);
//     return changeColor("green", 1000);
//   })
//   .then((result) => {
//     console.log("green done:", result);
//     return changeColor("yellow", 1000);
//   })
//   .then((result) => {
//     console.log("yellow done:", result);
//     return changeColor("blue", 1000);
//   })
//   .then((result) => {
//     console.log("blue done:", result);
//   })
//   .catch((err) => {
//     console.error("Error in color chain:", err);
//   });

async function changeColors() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.error("Error in color chain:", err);
  }

  let a=5;
  console.log(a);
  console.log(a+5);
}

changeColors();
