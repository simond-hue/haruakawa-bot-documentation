$(document).ready(function(){
    var dropdown = $(".dropdown-btn");

    var activeDropdown = null;
    var activeDropdownContainer = null;

    for (var i = 0; i < dropdown.length; i++) {
        $(dropdown[i]).click(function() {
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                activeDropdown = $(this);
                $($(this).find('.fa')[0]).removeClass('fa-caret-right').addClass('fa-caret-down').addClass('animate');
            } 
            else{
                activeDropdown = null;
                $($(this).find('.fa')[0]).removeClass('fa-caret-down').addClass('fa-caret-right').removeClass('animate');
            }

            $(this).next('.dropdown-container').toggleClass("display");
            if($(this).next('.dropdown-container').hasClass("display")) activeDropdownContainer = $(this).next('.dropdown-container');
            else activeDropdownContainer = null;
        })
    }

    var sidebarButtons = $(".sidebar-button");

    for(var i = 0; i < sidebarButtons.length; i++){
        $(sidebarButtons[i]).click(function(){
            if(activeDropdown && activeDropdownContainer){
                activeDropdown.removeClass("active");
                activeDropdownContainer.removeClass("display");
            }
        })
    }
})
