AOS.init();

document.querySelector('.dropdown__button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown__content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    const button = document.querySelector('.dropdown__button');
    if (!dropdown.contains(e.target)) {
        document.querySelector('.dropdown__content').style.display = 'none';
        button.classList.remove('active');
    }
    else{
        button.classList.toggle('active');
    }
});

document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
  
      document.querySelectorAll('.faq-answer').forEach((item) => {
        item.style.maxHeight = null;
      });
  
      document.querySelectorAll('.faq-question').forEach((btn) => {
        btn.setAttribute('aria-expanded', false);
      });
  
      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        button.setAttribute('aria-expanded', true);
      }
    });
  });

  $('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '<button class="slick-prev custom-arrow"><img src="./images/arrow.png"></button>',
    nextArrow: '<button class="slick-next custom-arrow"><img src="./images/arrow.png" style="transform: rotate(180deg);"></button>',
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

document.querySelector('.header__burger').addEventListener('click', function () {
  const dropdownContent = document.querySelector('.header__burger-dropdown');
  const heroSec = document.querySelector('.hero-section');
  heroSec.classList.toggle('blurred');
  dropdownContent.classList.contains('active') ? dropdownContent.classList.remove('active') : dropdownContent.classList.add('active');
});
  