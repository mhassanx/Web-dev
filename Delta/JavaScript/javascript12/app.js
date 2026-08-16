let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    console.log(data.fact);
  })

  .then((res) => {
    return fetch(url);
  })

  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log(data2.fact);
    return fetch(url);
  })

  .then((res) => {
    return res.json();
  })

  .then((data3) => {
    console.log(data3.fact);
  })
  .catch((err) => {
    console.log("ERR = ", err);
  });
