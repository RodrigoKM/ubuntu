(function () {
   'use strict';

   angular
      .module('app')
      .controller('GaleriaController', GaleriaController);

   GaleriaController.$inject = ['galeriaService'];

   function GaleriaController(galeriaService) {
      var vm = this;

      activate();

      ////////////////

      function activate() {
         vm.galeria = galeriaService.getFotos();
      }
   }
})();