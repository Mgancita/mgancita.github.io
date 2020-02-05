function scrollToElement(element_id) {
    var element_to_scroll_to = document.getElementById(element_id);
    element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

var today = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
document.getElementById('time').innerHTML=today;

