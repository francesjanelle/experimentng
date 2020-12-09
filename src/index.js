function animate() {
    let element = document.getElementById("move")
    let position = 0
    let id = setInterval(frame, 10)
    function frame() {
        if (position == 350) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = position + 'px';
            element.style.left = position + 'px';
        }
    }
}