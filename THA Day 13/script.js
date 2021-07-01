let meme_image = document.querySelector(".meme_image");
let meme_text = document.querySelector(".meme_name");
let meme = document.querySelector(".meme");

document.querySelector(".btn").addEventListener("click", async () => {
  let data = await fetch("https://api.imgflip.com/get_memes");
  let y = await data.json();
  let rand_int = Math.floor(Math.random() * 100);
  meme_text.innerText = y.data.memes[rand_int].name;
  let x = document.createElement("img");
  x.src = y.data.memes[rand_int].url;
  meme_image.replaceChild(x, meme_image.children[0]);
  meme.style.visibility = "visible";
});
