window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')

    canvas.height = 600
    canvas.width = 800


    let penDown = false;

    function draw(e) {
        if (!penDown) return
        context.lineTo(e.clientX, e.clientY)
        context.stroke()

    }


    canvas.addEventListener('mousedown', () => { penDown = true; })
    canvas.addEventListener('mouseup', () => { context.beginPath(); penDown = false; })
    canvas.addEventListener('mousemove', draw)

})

