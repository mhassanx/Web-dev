let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let click = await getCatFacts();
  console.log(click);
  let p = document.querySelector("#cat-fact");

  p.innerText = click;
});

async function getCatFacts() {
  try {
    let res = await axios.get(url);
    // console.log(res.data.fact);

    return res.data.fact;
  } catch (err) {
    console.log("ERR= ", err);
    return "No fact found";
  }
}

// getCatFacts();
