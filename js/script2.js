function img() {
  var imgs = document.querySelectorAll("img");

  for (var i = 0; i < imgs.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = imgs[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      imgs[i].classList.add("active");
    } else {
      imgs[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", img);