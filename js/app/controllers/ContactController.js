function ContactController() {
  this.name = 'Will';
  this.email = "will@will.com";
  this.phone = "999-333-1292";
  var vm = this;

  this.changeName = function () {
    vm.name = 'New name'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
