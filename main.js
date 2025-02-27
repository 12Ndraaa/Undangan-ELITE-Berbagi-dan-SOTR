document.addEventListener("DOMContentLoaded", function () {
    let audioElement = document.getElementById("background-audio");
    let muteIcon = document.getElementById("mute-icon");

    // Memainkan musik otomatis saat halaman dimuat
    audioElement.play().catch(error => console.log("Autoplay failed: ", error));

    function toggleAudio() {
        if (audioElement.paused) {
            audioElement.play();
            muteIcon.classList.remove("bi-volume-mute-fill");
            muteIcon.classList.add("bi-volume-up-fill");
        } else {
            audioElement.pause();
            muteIcon.classList.remove("bi-volume-up-fill");
            muteIcon.classList.add("bi-volume-mute-fill");
        }
    }

    // Pastikan musik mulai saat pertama kali halaman diklik (untuk beberapa browser yang memblokir autoplay)
    document.addEventListener("click", function () {
        if (audioElement.paused) {
            audioElement.play();
        }
    }, { once: true });

    // Tambahkan event listener ke tombol mute
    muteIcon.addEventListener("click", toggleAudio);
});


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
