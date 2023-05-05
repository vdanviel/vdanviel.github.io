function menu(b){
    
    let svg_menu = document.querySelector('#svg-mobile');
    let div_links_mobile = document.querySelector('#mobile-links')

    //changing the open icon to close icon
    if(b.name == 'open'){
        //changing...
        svg_menu.setAttribute("d","M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z");

        // mobile menu is displayed
        div_links_mobile.classList.remove('hidden');
    }

    //changing the close icon to open icon
    if(b.name == 'close'){
        //changing
        svg_menu.setAttribute("d","M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z");

        //the mobile links are hidden
        div_links_mobile.classList.add('hidden')
        
    }

    //replace the name open to close or close to open
    b.name == 'open' ? b.name = 'close' : b.name = 'open';
}