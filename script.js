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

// Content for each step
const stepContents = {
    step1: "Here you can define your research question and specify the objectives.",
    step2: "Set up inclusion and exclusion criteria for the literature to be reviewed.",
    step3: "Additional step details go here...",
    step4: "Perform the search based on the defined criteria.",
    step5: "Filter the articles based on relevance, quality, and other metrics."
};

// Add event listeners for each step
document.querySelectorAll('aside ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('content').textContent = stepContents[this.id];
    });
});
