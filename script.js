const audioPlayer = document.querySelector('#audioPlayer')
const btn = document.querySelectorAll('.btn')

let x
let song = "off"
let dump
let e
let test

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        test = e.target.classList[1]
        console.log(test);

        e.target.classList.add("active")
        dump = e.target
        dump.innerText = "Stop Music"
        console.log("eventListener");
    })
}

function play_music(x) {
    if (dump) dump.classList.remove("active")
    dataSong = `https://opadam.github.io/map/map/${x}`
    audioPlayer.src = dataSong
    audioPlayer.play()
    song = "on"
}

function stop() {
    if (dump) dump.classList.remove("active")
    dump.innerText = "Play Music"
    audioPlayer.pause()
    audioPlayer.src = ""
}

