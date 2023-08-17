function toggleNavbar() {
  var navbar = document.getElementById("myNavbar");
  var icon = document.querySelector(".icon");

  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
    icon.classList.remove("open");
  } else {
    navbar.classList.add("responsive");
    icon.classList.add("open");
  }
}
