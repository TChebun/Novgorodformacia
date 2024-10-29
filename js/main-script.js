$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2, // Показываем два элемента (столбца) одновременно
    margin: 20, // Отступ между столбцами
    
    nav: true, // Включаем навигационные стрелки
    navText: [
      `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_14_252)">
<path d="M11.5853 25.3172L33.7867 47.4572C34.5141 48.1822 35.6918 48.1809 36.4179 47.4534C37.1436 46.726 37.1417 45.5477 36.4142 44.8222L15.5343 23.9999L36.4149 3.17775C37.1424 2.45213 37.1442 1.27454 36.4187 0.547043C36.246 0.373444 36.0406 0.235733 35.8144 0.141849C35.5883 0.0479621 35.3457 -0.000240467 35.1009 1.50961e-05C34.8569 -0.000290101 34.6152 0.0475386 34.3897 0.140762C34.1642 0.233986 33.9593 0.370773 33.7868 0.543293L11.5853 22.6827C11.2349 23.0313 11.0383 23.5057 11.0383 23.9999C11.0383 24.4942 11.2355 24.968 11.5853 25.3172Z" fill="#F47F19"/>
</g>
<defs>
<clipPath id="clip0_14_252">
<rect width="48" height="48" fill="white" transform="translate(48 48) rotate(-180)"/>
</clipPath>
</defs>
</svg>
`,
      `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.4147 22.6828L14.2133 0.5428C13.4859 -0.182166 12.3082 -0.180947 11.5821 0.54655C10.8564 1.27395 10.8583 2.45229 11.5858 3.17782L32.4657 24.0001L11.5851 44.8222C10.8577 45.5479 10.8558 46.7255 11.5813 47.453C11.754 47.6266 11.9594 47.7643 12.1856 47.8582C12.4117 47.952 12.6543 48.0002 12.8991 48C13.1431 48.0003 13.3848 47.9525 13.6103 47.8592C13.8358 47.766 14.0407 47.6292 14.2132 47.4567L36.4147 25.3173C36.7651 24.9687 36.9617 24.4943 36.9617 24.0001C36.9617 23.5058 36.7645 23.032 36.4147 22.6828Z" fill="#F47F19"/>
</svg>
`,
    ],
    dots: true, // Включаем индикаторы
    loop: true,
    slideBy: 2,
    responsive: {
      0: {
        items: 1, // На маленьких экранах один столбец
        slideBy: 1,
      },
      575: {
        items: 2, // На экранах от 730px два столбца
        margin: 10,
      },
    },
    
  });
  // Вызов refresh после инициализации
  $('.owl-carousel').trigger('refresh.owl.carousel');
  
})



document.querySelectorAll('.addresses__buttons button').forEach(button => {
  button.addEventListener('click', () => {
      const region = button.getAttribute('data-region');

      // Удаляем активный класс у всех кнопок, чтобы все стали зелеными
      document.querySelectorAll('.addresses__buttons button').forEach(btn => {
          btn.classList.remove('active');
      });

      // Добавляем активный класс на нажатую кнопку, чтобы она стала оранжевой
      button.classList.add('active');

      // Скрываем все контейнеры, удаляя класс active
      document.querySelectorAll('.addresses__maps').forEach(map => {
          map.classList.remove('active');

          // Перезапуск Owl Carousel в каждом скрываемом контейнере, если он инициализирован
          if ($(map).hasClass('owl-carousel')) {
              $(map).trigger('destroy.owl.carousel');
              $(map).removeClass('owl-loaded');
          }
      });

      // Показываем выбранный контейнер, добавляя класс active
      const selectedMap = document.getElementById(region);
      if (selectedMap) {
          selectedMap.classList.add('active');

          // Инициализируем Owl Carousel снова для нового активного контейнера
          if ($(selectedMap).hasClass('owl-carousel')) {
              $(selectedMap).owlCarousel({
                  loop: true,
                  margin: 10,
                  nav: true,
                  items: 3 // Настройки карусели - можете изменить по необходимости
              });
          }
      }
  });
});



