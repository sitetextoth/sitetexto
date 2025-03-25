// Função para iniciar a neve
function createSnowflakes() {
    const numFlakes = 50;
    for (let i = 0; i < numFlakes; i++) {
        let snowflake = document.createElement("div");
        snowflake.innerHTML = "❄";
        snowflake.classList.add("snowflake");
        document.body.appendChild(snowflake);
        
        let size = Math.random() * 20 + 10;
        let leftPosition = Math.random() * window.innerWidth;
        let duration = Math.random() * 5 + 3;
        let delay = Math.random() * 5;
        
        snowflake.style.left = `${leftPosition}px`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `-${delay}s`;
    }
}