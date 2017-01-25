document.onload = function () {
    const endpoint = 'https://gist.githubusercontent.com/EvgeniyGor/2ef11b2d37db1f201cfec94cf5ac1a7e/raw/9fdcdbbc1a9196f048a8c932e85fd61d0f3d27c6/data.json';

    let titles = [];

    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => {
            console.log(data);
            titles.push(data)
        });

    console.log(titles);
}();