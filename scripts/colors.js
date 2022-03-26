(function() {

    const elem = document.querySelector('.item__tshirts');
    const iso = new Isotope(elem, {
    itemSelector: ".item__tshirt",
    filter: '.black'
});

    const controls = document.querySelectorAll(".item__color_href");
    const activeClass = "item__color__selection--active";

    controls.forEach(function(control) {

        control.addEventListener("click", function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controls.forEach(function(link) {
            link.closest(".item__color__selection").classList.remove(activeClass);
            
        })
                
            control.closest(".item__color__selection").classList.add(activeClass);
            iso.arrange({
                filter: `.${filterName}`
            })
        })
    })
})();