function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 10) + 1;
    if (random > 4) {
      resolve("Data saved successfully");
    } else {
      reject("Failed to save data");
    }
  });
}

savetoDB("hassan Tariq")
  .then((result) => {
    console.log("Data1 saved");
    console.log("Promised was returned: ", result);

    return savetoDB("muhammad hassan");
  })

  .then((result) => {
    console.log("Data2 saved");
    console.log("Promised was returned: ", result);

    return savetoDB("muhammad hassan tariq");
  })

  .then((result) => {
    console.log("Data3 saved");
    console.log("Promised was returned: ", result);

    // return savetoDB("muhammad hassan tariq");
  })

  .catch((error) => {
    console.log("Rejected");
    console.log("error was returned: ", error);
  });
