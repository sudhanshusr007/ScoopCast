document.addEventListener("DOMContentLoaded", function() {
    const flickerText = document.querySelector('.flicker-text');
    const texts = ["Coming Soon", "ScoopCast"]; // List of texts to loop through
    let index = 0;

    setInterval(function() {
        flickerText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000); // Change text every 2 seconds (2000 milliseconds)

    flickerText.addEventListener("animationiteration", function() {
        flickerText.textContent = texts[index];
        index = (index + 1) % texts.length;
    });
});
