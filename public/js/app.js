$("#submit").on("click",function(){
    event.preventDefault()
    var username = $("#username").val().trim();
    
    jQuery.get("/scrap/"+username).done(()=>{location.reload();});
})

