let positions = {
    "home": 0
}
let scrollBar;
window.addEventListener("load",()=>{
    scrollBar = document.getElementById("body-wrapper")
    scrollBar.scroll({
        "top": positions.home,
        "behavior": "smooth"
    })
})