$(document).ready(function() {  
 Parse.initialize("WSUgho0OtfVW9qimoeBAKW8qHKLAIs3SQqMs0HW6", "9ZmxN9S1vOOfTaL7lD5vtUYRAwTEComMztpJVuTK");

  $("#addCategory").on('click', function(){
    var bracket = Parse.Object.extend("Brackets");
    var query = new Parse.Query(bracket);
    query.descending('createdAt');
    query.find({
      success: function(objects) {
        objects[0].set('category',$("#category").val());
        objects[0].save();
        window.location.href = "./bracket.html"
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  });
     
});


