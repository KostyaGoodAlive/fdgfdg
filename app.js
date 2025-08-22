gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// создаём плавный скролл
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true
});

// исчезновение hero при скролле
gsap.fromTo(".hero-section",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "+=1500",   // исчезает после 500px
      scrub: true,
 // включи для отладки
    }
  }
);

// анимация галереи слева
gsap.utils.toArray(".gallery__left .gallery__item").forEach((item) => {
  gsap.fromTo(item,
    { x: -100, opacity: 0 },
    {
      x: 0, opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",   // появляется, когда элемент почти внизу экрана
        end: "top 60%",
        scrub: true,
     // включи для проверки
      }
    }
  );
});

// анимация галереи справа
gsap.utils.toArray(".gallery__right .gallery__item").forEach((item) => {
  gsap.fromTo(item,
    { x: 100, opacity: 0 },
    {
      x: 0, opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "top 60%",
        scrub: true,

      }
    }
  );
});
