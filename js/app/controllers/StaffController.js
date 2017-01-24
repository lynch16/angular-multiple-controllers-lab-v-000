function StaffController() {
  this.name = 'Staff';
  this.email = 'info@staff.com';
  this.phone = '111-333-2223';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
