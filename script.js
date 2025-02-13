document.addEventListener("DOMContentLoaded", function () {
    let envelope = document.getElementById("envelope");
    let message = document.getElementById("message");

    if (envelope) {
        envelope.addEventListener("click", function () {
            message.classList.remove("hidden");  // Show the message
            envelope.style.transform = "translateY(-20px) rotate(-10deg)"; // Small animation
        });
    }
});

function disableNo() {
    document.getElementById("no-btn").disabled = true;
    document.getElementById("no-message").classList.remove("hidden");
}

function goToPage2() {
    window.location.href = "page2.html";
}

let steps = 0;
function moveCharacters() {
    steps++;
    let char1 = document.getElementById("char1");
    let char2 = document.getElementById("char2");
    let button = document.getElementById("move-btn");

    let leftPos = parseInt(char1.style.left) || 5;
    let rightPos = parseInt(char2.style.right) || 5;

    leftPos += 10;
    rightPos += 10;

    char1.style.left = leftPos + "%";
    char2.style.right = rightPos + "%";

    if (steps >= 5) { 
        button.style.display = "none";
        setTimeout(() => {
            window.location.href = "page3.html";
        }, 1000);
    }
}
document.getElementById("envelope").addEventListener("click", function() {
    let music = document.getElementById("bg-music");
    music.muted = false; // Unmute when the user interacts
    music.play();
});
document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("bg-music");
    let playButton = document.getElementById("play-music");

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.muted = false; // Unmute
            music.volume = 1.0;  // Set full volume
            music.play().then(() => {
                console.log("✅ Music started!");
                playButton.textContent = "Pause Music"; // Change button text
            }).catch(error => console.error("🚨 Error playing:", error));
        } else {
            music.pause();
            console.log("⏸️ Music paused!");
            playButton.textContent = "Play Music";
        }
    });
});
