$("#submit").on("click",function(){
    event.preventDefault()
    var username = $("#username").val().trim();
    
    jQuery.get("/scrap/"+username).done(()=>{location.reload();});
})


$(".save").on("click",function(){
var id=$(this).data("id");
jQuery.post("/saved/"+id).done(function(){console.log("POSTED")});
})