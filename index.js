
    // ANIMATIONS
    $(".scrl").waypoint(function(){
        $(".scrl").addClass("animate__animated animate__fadeInLeft");
    },{offset: "50%"})
    $(".feature").waypoint(function(direction){
        if(direction === 'down'){
            $(".feature").addClass("animate__animated animate__fadeInDownBig");
        }
        else{
            $(".feature").removeClass("animate__animated animate__fadeInDownBig");
        }
    },{offset: "90%"})
    $(".pricing_h1").waypoint(function(direction){
        if(direction === 'down'){
            $(".pricing_h1").addClass("animate__animated animate__fadeInRight");
        }
        else{
            $(".pricing_h1").removeClass("animate__animated animate__fadeInRight");
        }
    },{offset: "80%"})
    $(".pricing_card").waypoint(function(direction){
        if(direction === 'down'){
            $(".pricing_card").addClass("animate__animated animate__fadeInRightBig");
        }
        else{
            $(".pricing_card").removeClass("animate__animated animate__fadeInRightBig");
        }
    },{offset: "90%"})
    $("#Hero").waypoint(function(){
        $("#Hero").addClass("animate__animated animate__fadeInLeft");
    },{offset: "50%"})

    $("#navbar").waypoint(function(){
        $("#navbar").addClass("animate__animated animate__fadeInRight");
    },{offset: "50%"})
    $(".contact_h1").waypoint(function(direction){
        if(direction === 'down'){
            $(".contact_h1").addClass("animate__animated animate__fadeInLeftBig");
        }
        else{
            $(".contact_h1").removeClass("animate__animated animate__fadeInLeftBig");
        }
    },{offset: "90%"})
    $(".contact_card").waypoint(function(direction){
        if(direction === 'down'){
            $(".contact_card").addClass("animate__animated animate__fadeInLeftBig");
        }
        else{
            $(".contact_card").removeClass("animate__animated animate__fadeInLeftBig");
        }
    },{offset: "90%"})
//END OF ANIMTIONS
