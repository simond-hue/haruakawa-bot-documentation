$(document).ready(function(){
    var dropdown = $(".dropdown-btn");

    var activeDropdowns = [];
    var activeDropdownContainers = [];

    for (var i = 0; i < dropdown.length; i++) {
        $(dropdown[i]).click(function() {
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                activeDropdowns.push($(this));
                $($(this).find('.fa')[0]).removeClass('fa-caret-right').addClass('fa-caret-down').addClass('animate');
            } 
            else{
                activeDropdowns.pop();
                $($(this).find('.fa')[0]).removeClass('fa-caret-down').addClass('fa-caret-right').removeClass('animate');
            }

            $(this).next('.dropdown-container').toggleClass("display");
            if($(this).next('.dropdown-container').hasClass("display")) activeDropdownContainers.push($(this).next('.dropdown-container'));
            else activeDropdownContainer.pop();
        })
    }

    var sidebarButtons = $(".sidebar-button");

    for(var i = 0; i < sidebarButtons.length; i++){
        $(sidebarButtons[i]).click(function(){
            if(activeDropdowns.length > 0 && activeDropdownContainers.length > 0){
                removeActive(activeDropdowns,activeDropdownContainers);
            }
        })
    }
})

function removeActive(dropdowns, containers){
    dropdowns.forEach(dropdown => {
        dropdown.removeClass("active");
        $(dropdown.find('.fa')[0]).removeClass('fa-caret-down').addClass('fa-caret-right').removeClass('animate');
    });
    containers.forEach(container => {
        container.removeClass("display");
    });
}