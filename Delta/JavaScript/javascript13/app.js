let url = "https://random.dog/woof.json";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImages();

  let img = document.querySelector("#dog-images");
  img.setAttribute("src", link);
});

async function getImages() {
  try {
    let res = await axios.get(url);
    return res.data.url;
  } catch (err) {
    console.log("err-", e);
    return "NO images found";
  }
}
