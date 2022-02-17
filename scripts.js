(function() {

  // document.getElementById("aboutBtn").addEventListener("click", () => {
  //   document.getElementById("aboutContent").classList.toggle("hidden");
  // });

  const footnoteNums = document.getElementsByClassName("footnote-num");
  for (let fn of footnoteNums) {
    fn.addEventListener("click", () => {
      // console.log(fn.parentNode.parentNode.querySelector(".project-description"));
      fn.parentNode.parentNode.querySelector(".project-description").classList.toggle("hidden", false);
    });
  }

})();