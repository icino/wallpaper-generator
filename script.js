alert('js working')
const btn = document.querySelector("button")
const wallpaper = document.querySelector(".wallpaper")
const loader = document.querySelector(".loader")
const url = "https://source.unsplash.com/random"

function giveNewImageUrl() {
    return url + "/" + Math.floor(Math.random() * 100)
}

wallpaper.addEventListener('load', function() {
    loader.style.setProperty('display', 'none')
    wallpaper.style.setProperty('display', 'block')

})

btn.addEventListener('click', function() {
    loader.style.setProperty('display', 'block')
    wallpaper.style.setProperty('display', 'none')
    wallpaper.src = giveNewImageUrl()
})