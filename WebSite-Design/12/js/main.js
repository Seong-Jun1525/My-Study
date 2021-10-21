let toggle = document.querySelector('.toggle')
let topbar = document.querySelector('.topbar')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

toggle.onclick = function() {
    toggle.classList.toggle('active')
    topbar.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}