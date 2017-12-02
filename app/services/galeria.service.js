(function() {
    'use strict';

    angular.module('app').factory('galeriaService', galeriaService);

    galeriaService.$inject = [];

    function galeriaService() {
        var service = {
            getFotos: getFotos
        };

        return service;

        function getFotos() {
            return [
                {
                    img: 'img/29-08/img1.png'
                },
                {
                    img: 'img/29-08/img2.png'
                },
                {
                    img: 'img/29-08/img18.png'
                },
                {
                    img: 'img/29-08/img19.png'
                },
                {
                    img: 'img/29-08/img5.png'
                },
                {
                    img: 'img/29-08/img6.png'
                },
                {
                    img: 'img/29-08/img7.png'
                },
                {
                    img: 'img/29-08/img8.png'
                },
                {
                    img: 'img/29-08/img9.png'
                },
                {
                    img: 'img/29-08/img10.png'
                },
                {
                    img: 'img/29-08/img11.png'
                },
                {
                    img: 'img/29-08/img12.png'
                },
                {
                    img: 'img/29-08/img13.png'
                },
                {
                    img: 'img/29-08/img14.png'
                },
                {
                    img: 'img/29-08/img15.png'
                },
                {
                    img: 'img/29-08/img16.png'
                },
                {
                    img: 'img/29-08/img17.png'
                },
                {
                    img: 'img/29-08/img4.png'
                },
                {
                    img: 'img/29-08/img3.png'
                },
                {
                    img: 'img/01-12/img7.jpeg'
                },
                {
                    img: 'img/01-12/img2.jpeg'
                },
                {
                    img: 'img/01-12/img3.jpeg'
                },
                {
                    img: 'img/01-12/img4.jpeg'
                },
                {
                    img: 'img/01-12/img5.jpeg'
                },
                {
                    img: 'img/01-12/img6.jpeg'
                },
                {
                    img: 'img/01-12/img1.jpeg'
                },
                {
                    img: 'img/01-12/img8.jpeg'
                }
            ];
        }
    }
})();
