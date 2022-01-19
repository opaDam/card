const audioPlayer = document.querySelector('#audioPlayer')
const btn = document.querySelectorAll('.btn')

let x
let song = "off"
let dump
let e

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        e.target.classList.toggle("active")
        dump = e.target
        console.log(e, "-", e);
    })
}

function play_music(x) {
    if (dump) dump.classList.remove("active"), song = "off"
    console.log(x)
    song = `https://opadam.github.io/map/map/${x}`
    audioPlayer.src = song
    audioPlayer.play()
    song = "on"
}

function stop() {
    if (dump) dump.classList.remove("active"), song = "off"
    audioPlayer.pause()
    audioPlayer.src = ""
}

