const ham_menu = document.getElementById("ham_menu");
const menu_link = document.getElementById("menu_link");
console.log(menu_link.style.display);
ham_menu.addEventListener("click", () => {
  console.log("test");
  console.log(menu_link.style.display);
  if (menu_link.style.display == "none" || menu_link.style.display == "") {
    menu_link.style.display = "block";
  } else {
    menu_link.style.display = "none";
  }
});

menu_link.addEventListener("click", () => {
  menu_link.style.display = "none";
});
