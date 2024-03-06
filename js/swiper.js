let swiper2 = new Swiper(".howWeWork", {
  slidesPerView: 6,
  spaceBetween: 40,
  loop: false,
  breakpoints: {
    180: {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".custom-pagination-we-work",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
    },
    980: {
      slidesPerView: 6,
    },
  },
});
let swiperGallery = new Swiper(".swiper-gallery", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  autoplay: 3500,
  autoplayDisableOnInteraction: false,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 60,
    depth: 210,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: "#wrapsecond .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  navigation: {
    nextEl: ".swiper-button-next-gallery",
    prevEl: ".swiper-button-prev-gallery",
  },
});
let swiperAppointment = new Swiper(".swiper-appointment", {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-prev-appointment",
    prevEl: ".swiper-button-next-appointment",
  },
});
