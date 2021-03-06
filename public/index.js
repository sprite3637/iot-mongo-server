angular.module('app', [])
  .controller('AppController', function($http) {
    var todoList = this;
    
   //todoList.name = "aaaa";
 getIot()

  todoList.login = function(log){
    $http.post('/login' , { username : log.username , password : log.password})
       .then(function success (response) {
             console.log(response.data[0].username)
             if((log.username== response.data[0].username)&&(log.password == response.data[0].password)){
               console.log("have user ");
              
               window.location= "report.html"
             }else{
               window.location="login.html"
             }

            app.d = response.data
          }, function error (response) {
            alert(response.data.message)
        })

  }

  todoList.regis = function(input){
    
  $http.post('/api/member', input) .then(function success(response){
    alert('Success')
    window.location= "index.html"
    });

   } 

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
  todoList.regist = function(){
    window.location='register.html'

  }
  todoList.graph = function(){
             
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.1)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.1)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("iot").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,response.data[i].timestamp);
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }

    todoList.toThaiDateTime = function(date){
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  todoList.delete = function (id, index) {
      console.log(id)
      $http.delete('/api/iot/' + id)
        .success(function (data) {
          alert('delete')
          todoList.d.splice(index, 1)
        })
        .error(function (data) {
          alert('error')
          console.log('Error: ' + data)
        })
    }
    

});