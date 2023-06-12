// checks the pathName of the file that is loaded and stores it in a variable
// called activePage
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('header a').forEach(link => {
    if (link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})