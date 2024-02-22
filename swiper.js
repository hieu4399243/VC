document.addEventListener('DOMContentLoaded', function() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;
  
    function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;
      swiperWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
    }
  
    prevButton.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
    });
  });
  