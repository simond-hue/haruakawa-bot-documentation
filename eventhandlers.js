$(document).ready(function(){
    var dropdown = $(".dropdown-btn");

    for (var i = 0; i < dropdown.length; i++) {
        $(dropdown[i]).click(function() {
            $(this).toggleClass("active");
            $(this).next('.dropdown-container').toggleClass("display");
        })
    }
})
