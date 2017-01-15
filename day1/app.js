document.onload = function () {

    const keyBinds = [
        {key: 'a', sound: 'bass'},
        {key: 's', sound: 'china'},
        {key: 'd', sound: 'crash'},
        {key: 'f', sound: 'hat'},
        {key: 'g', sound: 'ride'},
        {key: 'h', sound: 'snare'},
        {key: 'j', sound: 'splash'},
        {key: 'k', sound: 'tom high'},
        {key: 'l', sound: 'tom low'}
    ];

    [].slice
        .call(document.querySelectorAll('li.key'))
        .forEach((item, index) => {
            if (index > keyBinds.length) {
                return;
            }

            item.id = keyBinds[index].key;

            item.querySelector('kbd').innerText = keyBinds[index].key;
            item.querySelector('span').innerText = keyBinds[index].sound;
        });

    const audios = [].slice
        .call(document.querySelectorAll('audio'))
        .map((audio, index) => ({
            key: keyBinds[index].key,
            value: audio
        }))
        .reduce((obj, item) => {
            obj[item.key] = item.value;
            return obj;
        }, {});

    window.addEventListener('keydown', (event) => {
        if (!(event.key in audios)) {
            return;
        }

        audios[event.key].currentTime = 0;
        audios[event.key].play();

        document.querySelector('#' + event.key).classList.add('playing');
    });

    const removeTransition = (event) => {
        if (event.propertyName !== 'transform') {
            return;
        }

        event.target.classList.remove('playing');
    };

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}();