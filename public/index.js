angular.module('app', [])
  .controller('AppController', function($http) {
    var todoList = this;
    
   //todoList.name = "aaaa";
 getIot()
   todoList.submit=function(input){
    postIot(input)
    
   }  
  function getIot(){
    $http.get('/api/iot') .success(function(response){
    todoList.d = response
    });
  }
  function postIot(data){
    $http.post('/api/iot', data) .then(function success(response){
      getIot()
      alert('Success')

      });

  }

});