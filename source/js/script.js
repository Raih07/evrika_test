/*******Карта в подвале*********/

if(document.getElementById('YMapsID')) {
  ymaps.ready(init);
  var myMap, myPlacemar;

  function init() {

    myMap = new ymaps.Map("YMapsID", {
      center: [55.716496, 37.685385],
      zoom: 15,
      controls: [] //убираем все кнопки управления
    });

    myMap.behaviors.disable('scrollZoom'); //отключение зума скролом колесика
    //myMap.behaviors.disable('drag');

    myMap.controls.add('zoomControl', {
      float: 'none'
    });
    myMap.controls.add('fullscreenControl', {
      float: 'right'
    });

    myMap.controls.add('typeSelector', {
      float: 'left',
    });
    myMap.controls.get('typeSelector').options.set('size', 'small');  //принудительно выбран маленькой мконки

    myPlacemark = new ymaps.Placemark([55.716496, 37.685385], {
      hintContent: 'Полиграфия от А до Я',
      balloonContent: 'Москва, 2-я улица Машиностроения'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.png',
      iconImageSize: [97, 107],
      iconImageOffset: [-45, -40] //смещение картинки
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
