/** This module uses DOM elements to allow us to change what is sent in the form before it is sent. */
const allLikeBtns = document.querySelectorAll(".btn.btn-dark");

// Use .value to pass information in the form, not .innerHTML or .innerText
for (let eachLikeBtn of allLikeBtns) {
  eachLikeBtn.addEventListener("click", function (event) {
    document.querySelector(`#like-display${eachLikeBtn.id.slice(-1)}`).value =
      parseInt(
        document.querySelector(`#like-display${eachLikeBtn.id.slice(-1)}`).value
      ) + 1;
    console.log(
      document.querySelector(`#like-display${eachLikeBtn.id.slice(-1)}`).value
    );
  });
}
