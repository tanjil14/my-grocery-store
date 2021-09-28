// use getElement function for reduce code repeat
const getElement = (name) => {
  return document.querySelector(name);
};
// select all element
const searchForm = getElement(".search-form");
const shoppingCart = getElement(".shopping-cart");
const loginForm = getElement(".login-form");
const menubar = getElement(".navbar");
// for search button
getElement("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  menubar.classList.remove("active");
};
// for shopping cart
getElement("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  menubar.classList.remove("active");
};
// for login form
getElement("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  menubar.classList.remove("active");
};
// for menubar
getElement("#menu-btn").onclick = () => {
  menubar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};
// clear all active class
window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  menubar.classList.remove("active");
};

// make it functional for repeating task
function Slider(name) {
  // swiper for slider
  new Swiper(name, {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });
}
// for 1st products
Slider(".product-slider");
// for 2nd review
Slider(".review-slider");
