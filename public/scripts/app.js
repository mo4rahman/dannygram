const likeBtn = document.querySelector("#likeBtn");
console.log("SCRIPT IS RUNNING");
const likesDisplay = document.querySelector("#likes");
let likesCount = 0;
likeBtn.addEventListener("click", () => {
  console.log("clicked");
  likesCount++;
  likesDisplay.innerHTML = `${likesCount}`;
});
