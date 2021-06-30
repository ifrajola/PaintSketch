document.addEventListener('DOMContentLoaded', () => {  


const screen = document.querySelector('#screen');
const context = screen.getContext('2d')


screen.width = 700;
screen.height = 500;



const paintBrush = {
    active : false,
    moving : false,
    pos: {x: 0, y: 0},
    posAnterior: null

}

const desenharLinha = (linha) => {


    context.beginPath();
    context.moveTo(linha.posAnterior.x, linha.posAnterior.y);
    context.lineTo(linha.pos.x, linha.pos.y);
    context.stroke();

};



screen.onmousedown = (event) => {paintBrush.active = true};
screen.onmouseup = (event) => {paintBrush.active = false};

screen.onmousemove = (event) => {

    paintBrush.pos.x = event.clientX
    paintBrush.pos.y = event.clientY
    paintBrush.moving = true;

};

const cycle= () => {
    if (paintBrush.active && paintBrush.moving && paintBrush.posAnterior) {
        desenharLinha({pos:paintBrush.pos, posAnterior:paintBrush.posAnterior})
        paintBrush.moving = false;

    }

    paintBrush.posAnterior = { x: paintBrush.pos.x, y: paintBrush.pos.y }

    setTimeout(cycle, 1);
};


cycle()


} )

