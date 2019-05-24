window.onload = function() {
  const navBar = document.getElementsByTagName("nav")[0];

  if (window.sessionStorage.getItem("navAnimationCount") === null) {
    navBar.classList.add("slide-down");
    window.sessionStorage.setItem("navAnimationCount", 1);
  } else if (window.sessionStorage.getItem("navAnimationCount") == 1) {
    navBar.classList.add("nav-is-active");
  }
};

const links = document.querySelectorAll("a");

links.forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
  });
});
