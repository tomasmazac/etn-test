/**
 * Sečkání na načtení celého dokumentu
 *
 * @param fn
 */
function documentReady(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

/**
 * Inicializace navigace
 */
function initNavigation() {

    var site = document.querySelector('body');
    var topNav = document.querySelector('.navigation__list');
    var toggle = document.querySelector('.navigation__toggle-button');
    var icon = document.querySelector('.header .icon');

    toggle.addEventListener('click', function () {

        site.classList.toggle('body--navigation-active');
        topNav.classList.toggle('navigation__list--active');

        apollo.toggleClass(icon, 'icon--menu');
        apollo.toggleClass(icon, 'icon--close');

    }, false);

}

/**
 * Inicializace slideru
 */
function initSlider() {

    var simple = document.querySelector('.slider');

    lory(simple, {
        infinite: 1,
        enableMouseEvents: true,
        classNameFrame: 'slider__frame',
        classNameSlideContainer: 'slider__slides',
        classNamePrevCtrl: 'slider__button--previous',
        classNameNextCtrl: 'slider__button--next'
    });
}

/**
 * Inicilizace `<abbr>`
 *
 * [1] Odstranění attributu `title`, jelikož zobrazení informace je řešeno za pomocí CSS a dodatečné zobrazení
 *     `title` postrádá smysl.
 */
function initAbbrevivation() {

    var abbrs = document.querySelectorAll('abbr');

    abbrs.forEach(function (abbr) {

        // [1]
        var titleAttribute = abbr.getAttribute('title');
        abbr.removeAttribute('title');
        abbr.setAttribute('data-title', titleAttribute);
    });
}

/**
 * Inicializace diagramů
 */
function initDiagram() {

    var pillars = document.querySelectorAll('.diagram__pillar');

    pillars.forEach(function (pillar) {
        var value = pillar.getAttribute('data-value');

        pillar.style.height = value + 'rem';

        if (value < 3) {
            apollo.addClass(pillar, 'diagram__pillar--level-1');
        } else if (value < 7) {
            apollo.addClass(pillar, 'diagram__pillar--level-2');
        } else {
            apollo.addClass(pillar, 'diagram__pillar--level-3');
        }
    });
}

documentReady(function () {

    initNavigation();
    initSlider();
    initAbbrevivation();
    initDiagram();
});