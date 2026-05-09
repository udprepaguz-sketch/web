const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {

    contador.innerText = '0';

    const actualizar = () => {

        const objetivo = +contador.getAttribute('data-target');
        const cantidad = +contador.innerText;

        const incremento = objetivo / 100;

        if(cantidad < objetivo){
            contador.innerText = `${Math.ceil(cantidad + incremento)}`;
            setTimeout(actualizar, 30);
        }else{
            contador.innerText = objetivo;
        }

    }

    actualizar();

});

window.addEventListener('scroll', () => {

    const cards = document.querySelectorAll('.card, .deportista');

    cards.forEach(card => {

        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if(posicion < pantalla - 100){
            card.style.opacity = '1';
            card.style.transform = 'translateY(0px)';
        }

    });

});