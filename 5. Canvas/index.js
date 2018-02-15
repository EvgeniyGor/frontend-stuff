document.onload = function () {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
        if (!isDrawing)
            return;

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;

        hue = (hue + 1) % 360;

        if (ctx.lineWidth > 80 || ctx.lineWidth < 5)
            direction = !direction;

        ctx.lineWidth += direction ? 1 : -1;
    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}();
