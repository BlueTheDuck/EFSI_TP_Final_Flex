let scroller;
let distances = {
    "home": window.innerHeight
}

window.onload = () => {
    scroller = document.querySelector("#pages-wrapper");

    window.location.hash = "";
}


function smoothScroll(to) {
    let height = 0;
    switch (to) {
        case "home":
            height = 0;
            break;
        case "trailer":
            height = 1;
            break;
        case "cast":
            height = 2;
            break;
        case "galeria":
            height = 3;
            break;
        case "reviews":
            height = 4;
            break;
        default:
            console.error(`Unknown ${to}`);
            return;
    }
    if(scroller==undefined) {
        console.error("Element to scroll is undefined. Please, wait until the pages finishes loading");
        return;
    }
    scroller.scroll({
        top: height * window.innerHeight,
        behavior: "smooth"
    })
}