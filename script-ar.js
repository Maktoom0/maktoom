const themesBtn = document.querySelector('header .header-dropdown-menu button');
const themesBtnText = document.querySelector('header .header-dropdown-menu button p');
const upHeader = document.querySelector('header')
const downHeader = document.querySelector('header .header-down-section')

let lightMode = true;

themesBtn.addEventListener(('click'), () => {
    lightMode = !lightMode
    if (lightMode === false){
        themesBtnText.textContent = 'الوضع الصباحي'
        upHeader.style.backgroundColor = '#778DA9'
    }
    
    else if (lightMode === true){
        themesBtnText.textContent = 'الوضع الليلي'
        upHeader.style.backgroundColor = '#0d1b2a'
    }
})