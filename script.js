
// ENVELOPE INTERACTION

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("open-envelope");

if (envelope && openButton) {

    openButton.addEventListener("click", function() {

        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {
            openButton.textContent = "Close Your Letter";
        } else {
            openButton.textContent = "Open Your Letter";
        }

    });

}


// BIRTHDAY CANDLE INTERACTION

const blowButton = document.getElementById("blow-candle");
const flame = document.getElementById("flame");
const wishMessage = document.getElementById("wish-message");

if (blowButton && flame && wishMessage) {

    blowButton.addEventListener("click", function() {

        flame.classList.add("blown-out");

        wishMessage.textContent =
            "May all your wishes come true, my love! ❤️";

        blowButton.disabled = true;
        blowButton.textContent = "Wish Made ❤️";

        setTimeout(function() {
            window.location.href = "memories.html";
        }, 3000);

    });

}

// REVEAL LOVE LETTER AFTER MEMORIES

const showLetterButton = document.getElementById("show-letter");
const loveLetter = document.getElementById("love-letter");

if (showLetterButton && loveLetter) {

    showLetterButton.addEventListener("click", function() {

        loveLetter.hidden = false;

        loveLetter.classList.add("reveal");

        showLetterButton.style.display = "none";

        loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


// FINAL VIDEO REVEAL

const finishLetterButton = document.getElementById("finish-letter");
const finalVideoSection = document.getElementById("final-video");

if (finishLetterButton && finalVideoSection && loveLetter) {

    finishLetterButton.addEventListener("click", function() {

        loveLetter.hidden = true;

        finalVideoSection.hidden = false;

        finalVideoSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}
// FINAL VIDEO ENDING

const birthdayVideo = document.getElementById("birthday-video");
const videoClosing = document.getElementById("video-closing");

if (birthdayVideo && videoClosing) {

    birthdayVideo.addEventListener("ended", function() {

        videoClosing.hidden = false;

        videoClosing.classList.add("reveal");

        videoClosing.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}