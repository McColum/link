(function() {

    const controls = document.querySelectorAll(".item__size--available");
    const activeClass = "item__size--available--active";

    controls.forEach(function(control) {

        control.addEventListener("click", function(e) {
            e.preventDefault();

            controls.forEach(function(link) {
            link.closest(".item__size--available").classList.remove(activeClass);
            })
            
            control.closest(".item__size--available").classList.add(activeClass);
        })
    })
})();