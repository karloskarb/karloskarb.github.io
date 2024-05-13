document.querySelector('.hamburger').addEventListener('click', function() {
    const sidebar = document.querySelector('aside');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px'; // Hide sidebar
        document.querySelector('.content-area').style.marginLeft = '20px'; // Reduce margin
    } else {
        sidebar.style.left = '0px'; // Show sidebar
        document.querySelector('.content-area').style.marginLeft = '220px'; // Increase margin
    }
});
