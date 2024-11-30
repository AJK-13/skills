function animateNumber(targetElement, targetNumber, duration) {
    let startNumber = 0;
    let stepTime = Math.abs(Math.floor(duration / targetNumber));

    let interval = setInterval(() => {
        startNumber++;
        targetElement.textContent = startNumber;

        if (startNumber === targetNumber) {
            clearInterval(interval);
        }
    }, stepTime);
}

window.onload = function () {
    let eventCountElement = document.getElementById("eventCount");
    animateNumber(eventCountElement, 25, 3000);
};

document.addEventListener("DOMContentLoaded", function() {
    const aboutContent = document.querySelector('.about-content');
    aboutContent.style.opacity = 0;
    setTimeout(() => {
      aboutContent.style.transition = "opacity 1s ease";
      aboutContent.style.opacity = 1;
    }, 100);
  });
  