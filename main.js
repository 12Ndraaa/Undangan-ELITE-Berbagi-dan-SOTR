window.addEventListener('load', function() {
    let audioElement = document.getElementById('background-audio');
    let muteIcon = document.getElementById('mute-icon');

    // Coba autoplay musik saat halaman dimuat
    audioElement.play().then(() => {
        muteIcon.classList.add('bi-volume-up-fill'); // Awalnya nyala
    }).catch(error => console.log("Autoplay gagal: ", error));
});

function toggleAudio() {
    let audioElement = document.getElementById('background-audio');
    let muteIcon = document.getElementById('mute-icon');

    if (!audioElement.paused) {
        audioElement.pause(); // Musik dihentikan
        muteIcon.classList.remove('bi-volume-up-fill');
        muteIcon.classList.add('bi-volume-mute-fill');
    } else {
        audioElement.play(); // Musik dimainkan lagi
        muteIcon.classList.remove('bi-volume-mute-fill');
        muteIcon.classList.add('bi-volume-up-fill');
    }
}


// Set the dates we're counting down to
let countDownDate1 = new Date("March 22, 2025 00:00:00").getTime();
let countDownDate2 = new Date("March 23, 2025 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down dates
    let distance1 = countDownDate1 - now;
    let distance2 = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    let days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    let hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    
    let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown1" and id="countdown2"
    document.getElementById("eliteberbagi").innerHTML = days1 + "d " + hours1 + "h "
    + minutes1 + "m " + seconds1 + "s ";
    
    document.getElementById("sotr").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";

    // If the count down is finished, write some text
    if (distance1 < 0) {
        clearInterval(x);
        document.getElementById("countdown1").innerHTML = "EXPIRED";
    }
    
    if (distance2 < 0) {
        clearInterval(x);
        document.getElementById("countdown2").innerHTML = "EXPIRED";
    }
}, 1000);
