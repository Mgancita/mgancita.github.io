function scrollToElement(element_id) {
    var element_to_scroll_to = document.getElementById(element_id);
    element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}