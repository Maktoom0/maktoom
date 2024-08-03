const themesBtn = document.querySelector('header .header-dropdown-menu button');
const themesBtnText = document.querySelector('header .header-dropdown-menu button p');

// Themes Elements
const upHeader = document.querySelector('header')
const downHeader = document.querySelector('header .header-down-section')
const home = document.querySelector('.home')
const dropdownMenu = document.querySelector('header .header-dropdown-menu')
const moonIcon = document.querySelector('header .header-dropdown-menu button .fa-moon')
const sunIcon = document.querySelector('header .header-dropdown-menu button .fa-sun')
const allText = document.querySelectorAll('.text')

let lightMode = true;

themesBtn.addEventListener(('click'), () => {
    lightMode = !lightMode
    if (lightMode === false){
        themesBtnText.textContent = 'light mode'
        upHeader.style.backgroundColor = '#778DA9'
        home.style.backgroundColor = '#1B263B'
        dropdownMenu.style.backgroundColor = '#0D1B2A'
        moonIcon.style.display = 'none'
        sunIcon.style.display = 'inline-block'
        allText.forEach(element => {
            element.style.color = 'black';
            element.style.fontWeight = 900;
            }
        )
    }
    
    else if (lightMode === true){
        themesBtnText.textContent = 'dark mode'
        upHeader.style.backgroundColor = '#0d1b2a'
        home.style.backgroundColor = '#778da9'
        dropdownMenu.style.backgroundColor = '#1b263b'
        moonIcon.style.display = 'inline-block'
        sunIcon.style.display = 'none'
        allText.forEach(element => {
            element.style.color = '#e0e1dd'
            element.style.fontWeight = 900
        }
        )
    }
})