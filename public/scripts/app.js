const allLikeBtns = document.querySelectorAll(".btn.btn-dark");
console.log(allLikeBtns);
console.log("SCRIPT IS RUNNING");

for (let eachLikeBtn of allLikeBtns) {
  eachLikeBtn.addEventListener("click", function (event) {
    // event.preventDefault();
    console.log("clicked");

    document.querySelector(`#like-display${eachLikeBtn.id.slice(-1)}`).value =
      parseInt(
        document.querySelector(`#like-display${eachLikeBtn.id.slice(-1)}`).value
      ) + 1;
    console.log(
      document.querySelector(`#like-display${eachLikeBtn.id.slice(-1)}`).value
    );
  });
}