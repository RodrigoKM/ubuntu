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
               img: 'img/29-08/img1.jpeg',
            },
            {
               img: 'img/29-08/img2.jpeg',
            },
            {
               img: 'img/29-08/img18.jpeg',
            },
            {
               img: 'img/29-08/img19.jpeg',
            },
            {
               img: 'img/29-08/img5.jpeg',
            },
            {
               img: 'img/29-08/img6.jpeg',
            },
            {
               img: 'img/29-08/img7.jpeg',
            },
            {
               img: 'img/29-08/img8.jpeg',
            },
            {
               img: 'img/29-08/img9.jpeg',
            },
            {
               img: 'img/29-08/img10.jpeg',
            },
            {
               img: 'img/29-08/img11.jpeg',
            },
            {
               img: 'img/29-08/img12.jpeg',
            },
            {
               img: 'img/29-08/img13.jpeg',
            },
            {
               img: 'img/29-08/img14.jpeg',
            },
            {
               img: 'img/29-08/img15.jpeg',
            },
            {
               img: 'img/29-08/img16.jpeg',
            },
            {
               img: 'img/29-08/img17.jpeg',
            },
            {
               img: 'img/29-08/img4.jpeg',
            },
            {
               img: 'img/29-08/img3.jpeg',
            }
         ]
      }
   }
})();