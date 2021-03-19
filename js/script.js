$(document).ready(function () {
   $('.slider1').slick({
      arrows: true,
      dots: true,
      slidesToShow:1,  //Указывает сколько фото за один раз в экране  
      slidesToScroll:1, //Указывает сколько фото за один скролл
      speed: 6000, //Скорость пролистывания
      easing: 'linear',  //тип анимации
      infinite: true,  //infinite
      initialSlide: 0, //при включении какой слайд будет стоять
      autoplay: true, //Самостоятельно играет
      autoplaySpeed: 5500, // Скорость Self playing
      pauseOnFocus: true, // Pause during Focusing
      pauseOnHover: true, //Pause during hovering
      pauseOnDotsHover: true, //Pause during dot hovering
      swipe: true, //For mobile swipe function with mouse
      waitForAnimate: true,

   });
   $('.slider2').slick({
      arrows: true,
      dots: true,
      slidesToShow:1.4,
      slidesToScroll:1,
      speed: 2000, //Скорость пролистывания
      easing: 'linear',  //тип анимации
      infinite: true,  //infinite
      initialSlide: 0, //при включении какой слайд будет стоять
      autoplay: true, //Самостоятельно играет
      autoplaySpeed: 5500, // Скорость Self playing
      pauseOnFocus: true, // Pause during Focusing
      pauseOnHover: true, //Pause during hovering
      pauseOnDotsHover: true, //Pause during dot hovering
      swipe: true, //For mobile swipe function with mouse
      waitForAnimate: true,
      centerMode: false
   });
   $('.slider3').slick({
      arrows: true,
      dots: true,
      slidesToShow:3,
      slidesToScroll:1,
      speed: 2000, //Скорость пролистывания
      easing: 'linear',  //тип анимации
      infinite: true,  //infinite
      initialSlide: 0, //при включении какой слайд будет стоять
      autoplay: true, //Самостоятельно играет
      autoplaySpeed: 5500, // Скорость Self playing
      pauseOnFocus: true, // Pause during Focusing
      pauseOnHover: true, //Pause during hovering
      pauseOnDotsHover: true, //Pause during dot hovering
      swipe: true, //For mobile swipe function with mouse
      waitForAnimate: true,
      centerMode: false
      
   });
});