(function () {
   'use strict';

   angular
      .module('app')
      .factory('galeriaService', galeriaService);

   galeriaService.$inject = [];

   function galeriaService() {
      var service = {
         getFotos: getFotos
      }

      return service;

      function getFotos() {
         return [{
               img: 'img/29-08/img1.jpg',
            },
            {
               img: 'img/29-08/img2.jpg',
            },
            {
               img: 'img/29-08/img18.jpg',
            },
            {
               img: 'img/29-08/img19.jpg',
            },
            {
               img: 'img/29-08/img5.jpg',
            },
            {
               img: 'img/29-08/img6.jpg',
            },
            {
               img: 'img/29-08/img7.jpg',
            },
            {
               img: 'img/29-08/img8.jpg',
            },
            {
               img: 'img/29-08/img9.jpg',
            },
            {
               img: 'img/29-08/img10.jpg',
            },
            {
               img: 'img/29-08/img11.jpg',
            },
            {
               img: 'img/29-08/img12.jpg',
            },
            {
               img: 'img/29-08/img13.jpg',
            },
            {
               img: 'img/29-08/img14.jpg',
            },
            {
               img: 'img/29-08/img15.jpg',
            },
            {
               img: 'img/29-08/img16.jpg',
            },
            {
               img: 'img/29-08/img17.jpg',
            },
            {
               img: 'img/29-08/img4.jpg',
            },
            {
               img: 'img/29-08/img3.jpg',
            }
         ]
      }
   }
})();