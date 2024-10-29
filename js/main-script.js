$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2, // Показываем два элемента (столбца) одновременно
    margin: 20, // Отступ между столбцами
    
    nav: true, // Включаем навигационные стрелки
    
    /* navText: ["<img src="assets/images/arrow1.svg"/>", <img src="assets/images/arrow.svg"/>" ], */ 
    dots: true, // Включаем индикаторы
    loop: true,
    slideBy: 2,
    responsive: {
      0: {
        items: 1, // На маленьких экранах один столбец
        slideBy: 1,
      },
      767: {
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



