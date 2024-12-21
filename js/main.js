// Função para iniciar a chuva
function startRain() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                document.querySelector('.rain').innerHTML = generateDroplets(20);
            } else {
                entry.target.classList.remove('show');
                document.querySelector('.rain').innerHTML = '';
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}

function generateDroplets(numDroplets) {
    let dropletsHTML = '';
    for (let i = 0; i < numDroplets; i++) {
        const delay = Math.random() * 2;
        dropletsHTML += `<div class="droplet" style="left: ${Math.random() * 100}%; animation-delay: ${delay}s;"></div>`;
    }
    return dropletsHTML;
}

// Função para iniciar a neve
function startSnow() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                document.querySelector('.snowfall').innerHTML = generateSnowflakes(20);
            } else {
                entry.target.classList.remove('show');
                document.querySelector('.snowfall').innerHTML = '';
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}

function generateSnowflakes(numSnowflakes) {
    let snowflakesHTML = '';
    for (let i = 0; i < numSnowflakes; i++) {
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 3;
        const duration = Math.random() * 3 + 2;

        snowflakesHTML += `
            <div class="snowflake" 
                style="
                    left: ${left}%;
                    width: ${size}px; 
                    height: ${size}px; 
                    animation-delay: ${delay}s; 
                    animation-duration: ${duration}s;">
            </div>`;
    }
    return snowflakesHTML;
}

// Determinar qual função executar com base no `id` do <body>
document.addEventListener('DOMContentLoaded', () => {
    const bodyId = document.body.id;

    if (bodyId === 'text-4') {
        startRain();
    } else if (bodyId === 'text-5') {
        startSnow();
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

