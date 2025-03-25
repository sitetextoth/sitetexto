// Determinar qual função executar com base no `id` do <body>
document.addEventListener('DOMContentLoaded', () => {
    const bodyId = document.body.id;

    if (bodyId === 'text-4') {
        startRain();
    } else if (bodyId === 'text-5') {
        createSnowflakes();
    }
});

function showPicture(number) {
    const sexBox = document.getElementById("sex-" + number);
    if (sexBox.classList.contains('sex-show')) {
        sexBox.classList.remove('sex-show');
    } else {
        sexBox.classList.add('sex-show');
    }
}

