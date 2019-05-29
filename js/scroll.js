let scroller;
window.addEventListener("DOMContentLoaded",() => {
    scroller = document.querySelector("#pages-wrapper");
})


function smoothScroll(to) {
    let height = document.querySelector(`#${to}`).offsetTop;
    if(scroller==undefined) {
        console.error("Element to scroll is undefined. Please, wait until the pages finishes loading");
        return;
    }
    scroller.scroll({
        top: height,
        behavior: "smooth"
    })
}