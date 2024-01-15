/* Nav */
document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        toggleNav();
    });

    function toggleNav() {
        var navStyle = window.getComputedStyle(nav);

        if (navStyle.display === 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
    function createNavList() {
        var navList = document.getElementById('navList');
        var navItems = [
            { text: 'Home', href: '#' },
            { text: 'About', href: '#about' },
            { text: 'Work', href: '#work' },
        ];

        navItems.forEach(function (item) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            navList.appendChild(li);
        });
    }
    createNavList();
});

document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('mainImage');
    const buttons = document.querySelectorAll('.button');

    function updateButtonsPosition() {
        buttons.forEach(button => {
            const rect = mainImage.getBoundingClientRect();
            const offsetX = rect.width / 100;
            const offsetY = rect.height / 100;

            const transformX = parseInt(button.dataset.x, 10) * offsetX;
            const transformY = parseInt(button.dataset.y, 10) * offsetY;

            button.style.transform = `translate(${transformX}px, ${transformY}px)`;
        });
    }

    window.addEventListener('resize', updateButtonsPosition);
    updateButtonsPosition();
});


/* project */
const projects = [
    {
        title: "Project1",
        img: "./asset/pexels-eunhyuk-ahn-2894292.jpg",
        descriptif: "Lorem 30"
    },
    {
        title: "Lorem",
        img: "./asset/pexels-eunhyuk-ahn-2907021.jpg",
        descriptif: "Lorem 10"
    },
    {
        title: "Project3",
        img: "./asset/pexels-eunhyuk-ahn-2907034.jpg",
        descriptif: "Lorem 100"
    }
];

function showProject(projectNumber) {
    const allProjects = document.querySelectorAll('.r-g_row_g_o, .r-g_row_g_e, .r-g_r_row_g_o, .r-g_r_row_g_e');
    allProjects.forEach(project => {
        project.classList.remove('selected-project');
    });

    const descriptionElement = document.querySelector('.left-column .row_g_e p');
    descriptionElement.innerText = projects[projectNumber].descriptif;

    const rightColumnImageElement = document.querySelector('.r-g_row_g_e h3');
    rightColumnImageElement.innerHTML = `<img src="${projects[projectNumber].img}" alt="image">`;
}
