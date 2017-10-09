$(function(){
 $(".change-watched").on("click", function(event){
    var id = $(this).data("id");
    var newMovie = $(this).data("watched")

    var watchedChange = {

        watched: newMovie
    };


    $.ajax("/newmovie/" + id, {
        type : PUT,
        data : newMovie
    }).then(
        function(){
            console.log("changed sleep to " + newMovie);

            location.reload();
        }
    )

 });

 $(".create-form").on("submit", function(event){

event.preventDefault();

var newMovieMade = {

    movie_name : $("mo").val().trim(),
    watched : $("[name=watched]:checked").val().trim()
}


$.ajax("/newmovie", {
    type:POST,
    data: newMovieMade
}).then(function(){
    console.log('made new movie');
    location.reload();
   }
  )
 })
})