userApp.controller('mainController', ['userService', function(userService){

  this.users = userService.query();

  this.showUserData = function(userId) {
    this.currentUser = userService.get({user: userId});
  };

  this.editUser = function(user){
    userService.update({user: user.id, name: this.name, email: this.email});
  };

  this.addUser = function(){
    userService.save({name: this.name, email: this.email});
  };



}]);
