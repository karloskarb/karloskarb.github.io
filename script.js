document.querySelector('.hamburger').addEventListener('click', function() {
    const sidebar = document.querySelector('aside');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px';
        document.querySelector('.content-area').style.marginLeft = '20px';
    } else {
        sidebar.style.left = '0px';
        document.querySelector('.content-area').style.marginLeft = '220px';
    }
});
