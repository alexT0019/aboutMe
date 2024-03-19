//Back to top icon

//Display backToTop icon only onscroll
window.onscroll = function() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        $(".fa-circle-arrow-up").show();
    } else {
        $(".fa-circle-arrow-up").hide();
    }
}

//backToTop onclick function
function backToTop() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Other browsers
}