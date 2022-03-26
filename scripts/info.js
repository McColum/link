(function() {

    const elem = document.querySelector('.choice__general');
    const iso = new Isotope(elem, {
    itemSelector: ".choice",
    filter: '.description'
});

    const controls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__item--active';

    controls.forEach(function(control) {

        control.addEventListener('click', function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("data-filter");

            controls.forEach(function(link){
                link.closest('.filter__item').classList.remove(activeClass);
            })

            control.closest('.filter__item').classList.add(activeClass);
            iso.arrange({
                filter: `.${filterName}`
            })
        });

    });

}())