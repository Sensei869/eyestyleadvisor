// let menu = document.querySelector('#menuicon');
// let navlist = document.querySelector('.navlist');
// let login = document.querySelector('.login');

// menu.onclick = () => {
//     menu.classList.toggle('by-y');
//     navlist.classList.toggle('open');
// }


// const menu = document.querySelector('.menuicon');
// const menuiconIcon = document.querySelector('#menuicon i');
// const dropdownMenu = document.querySelector('.dropdownMenu');

// menui.onclick = () => {
//     dropdownMenu.classList.toggle('open')

//     menuicon.classList = isOpen
//     ?''
//     :''
// }

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menuicon');
    const links = document.querySelector('.links');
    const login = document.querySelector('.login');

    menuIcon.addEventListener('click', function() {
        links.classList.toggle('show');
        login.classList.toggle('show');
    });
});

