for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        tabSelector(this);
    });
} 

var navs = document.querySelectorAll("button");
var tabs = document.querySelectorAll(".tabs");
var selectedIndex = 0;

function tabSelector (e) {
    tabs[selectedIndex].classList.add("hidden");
    tabs[selectedIndex].classList.remove("selected")
    navs[selectedIndex].classList.remove("text-[#EFE1D1]");
    navs[selectedIndex].classList.remove("shadow-[#EFE1D1]");
    navs[selectedIndex].classList.remove("shadow-md");

    selectedIndex = e.id - 1;

    tabs[selectedIndex].classList.remove("hidden");
    tabs[selectedIndex].classList.add("selected");
    navs[selectedIndex].classList.add("text-[#EFE1D1]")
    navs[selectedIndex].classList.add("shadow-[#EFE1D1]");
    navs[selectedIndex].classList.add("shadow-md");
}