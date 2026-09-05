let url = "http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;

  if (country != "") {
    console.log("button is working");
    let stateArr = await getStates(country);
    show(stateArr);
    document.querySelector("input").value = "";
  } else {
    alert("Please enter state name");
  }
});

function show(stateArr) {
  let list = document.querySelector("#list");
  list.innerText = "";

  for (state of stateArr) {
    console.log(state["state-province"]);

    let li = document.createElement("li");
    li.innerText = state["state-province"] || "state not available";
    list.appendChild(li);
  }
}

async function getStates(country) {
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log("ERR", err);
  }
}

console.log("Test again");