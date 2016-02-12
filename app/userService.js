userApp.factory('userService', ['$resource', function($resource){
  var data = $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"}, {
    update: {
      method: 'PUT'
    }
  });
  return data;
}]);
