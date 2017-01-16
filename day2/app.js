document.onload = function() {

    const handSecond = document.querySelector('.second');

    const setDate = (date) => {
        const now = new Date();
        const seconds = now.getSeconds();

        const deg = seconds * 6;

        handSecond.style.transform = 'rotate(' + deg + 'deg)';

        console.log(deg);
    };

    handSecond.style.transform = 'rotate(' + 354 + 'deg)';

    // setInterval(setDate, 1000);
}();