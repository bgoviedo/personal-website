//Toggles the visibility of the menu
function toggleMenu(){

    var nav = $('#titlebar');

    if(!nav.hasClass("open")){
        nav.addClass("open");
    } else {
        nav.removeClass("open");
    }
}
