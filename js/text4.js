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