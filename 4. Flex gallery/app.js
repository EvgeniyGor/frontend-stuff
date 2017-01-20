document.onload = function () {
    const panels = document.querySelectorAll('.panel');

    console.log(panels);

    const toggleOpen = (event) => {
        if (event.target.tagName.toLowerCase() === 'div') {
            event.target.classList.toggle('open');
            return;
        }

        event.target.parentNode.classList.toggle('open');
    };

    const toggleActive = (event) => {
        if (event.propertyName.includes('flex')) {
            event.target.classList.toggle('open-active');
        }
    };

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}();