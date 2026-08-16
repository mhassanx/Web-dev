let url = "https://catfact.ninja/fact";

async function getCatFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);

    let res2 = await axios.get(url);
    console.log(res2.data.fact);
  } catch (err) {
    console.log("ERR", err);
  }
}

getCatFacts();
