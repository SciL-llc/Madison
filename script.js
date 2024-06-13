let photoSwiper = new Swiper(".swiper.is-photos", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    keyboard: true,
    allowSlideNext: false,
  });
  let contentSwiper = new Swiper(".swiper.is-content", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    grabCursor: true,
    loop: true,
    allowSlideNext: false,
  });
  
  
  photoSwiper.controller.control = contentSwiper;
  contentSwiper.controller.control = photoSwiper;
  
  console.log("hello world");
  