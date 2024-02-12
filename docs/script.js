function showResponse(answer) {
    document.getElementById("answer-buttons").style.display = "none";
    const responseContainer = document.createElement('div');
    responseContainer.classList.add('text-center', 'response-message');
    responseContainer.textContent = (answer === 'yes') ? "My baby! You're mine forever!" : "Bruh fym no? I have bugatti :(";
    document.getElementById("response-container").appendChild(responseContainer);

    const screenshotText = document.createElement('p');
    screenshotText.textContent = "Screenshot your response.";
    responseContainer.appendChild(screenshotText);
}

function createHearts() {
    const heartBackground = document.querySelector('.heart-background');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('img');
        heart.src = 'img/heart2.png';
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.width = `${Math.random() * 20 + 10}px`;
        heart.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        heartBackground.appendChild(heart);
    }
}

createHearts();