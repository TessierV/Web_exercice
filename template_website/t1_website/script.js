/* Nav */
document.addEventListener('DOMContentLoaded', function () {
    // Selecting DOM elements
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('nav');

    // Handling click on the hamburger menu
    hamburgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        toggleNav();
    });

    // Function to toggle the visibility of the navigation
    function toggleNav() {
        var navStyle = window.getComputedStyle(nav);

        if (navStyle.display === 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }

    // Function to create the navigation list
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
    // Selecting DOM elements
    const mainImage = document.getElementById('mainImage');
    const buttons = document.querySelectorAll('.button');

    // Function to update buttons' positions relative to the main image
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

    // Updating buttons' positions on window resize
    window.addEventListener('resize', updateButtonsPosition);
    updateButtonsPosition();
});


/* project */
const projects = [
    {
        title: "Title Project 1",
        img: "./asset/pexels-eunhyuk-ahn-2894292.jpg",
        descriptif: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, pariatur?"
    },
    {
        title: "Title Project 2",
        img: "./asset/pexels-eunhyuk-ahn-2907031.jpg",
        descriptif: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati vitae dicta quos, tempore voluptatibus excepturi odit aliquam soluta est et harum? Perspiciatis dolorem quas eaque quod omnis minus laudantium voluptatibus unde consequuntur quis? Laboriosam mollitia facere cupiditate molestias? Voluptas natus dicta dignissimos illum officiis error tempora tenetur. Dolor sequi praesentium atque nihil eveniet, debitis ratione. Exercitationem quia asperiores doloremque voluptatibus praesentium voluptate sunt reprehenderit expedita, iste tenetur harum quibusdam eos. Eius neque quaerat iste voluptate, eligendi fugiat amet nostrum natus blanditiis consequuntur voluptatem, nulla reiciendis voluptates."
    },
    {
        title: "Title Project 3",
        img: "./asset/pexels-eunhyuk-ahn-2907034.jpg",
        descriptif: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero velit cum maxime asperiores nostrum dignissimos eius, qui dolores! Voluptate obcaecati sunt nesciunt et facilis quos quis aspernatur dignissimos fugiat."
    }
];

// Function to show the details of a selected project
function showProject(projectNumber) {
    const allProjects = document.querySelectorAll('.r-g_row_g_o, .r-g_row_g_e, .r-g_r_row_g_o, .r-g_r_row_g_e');
    allProjects.forEach(project => {
        project.classList.remove('selected-project');
    });

    const descriptionElement = document.querySelector('.left-column .row_g_e p');
    descriptionElement.innerText = projects[projectNumber].descriptif;

    const rightColumnImageElement = document.querySelector('.r-g_row_g_e h3');
    rightColumnImageElement.innerHTML = `<img src="${projects[projectNumber].img}" alt="image">`;

    const titleElement0 = document.querySelector('.r-g_row_g_o h3');
    titleElement0.innerText = projects[0].title;

    const titleElement1 = document.querySelector('.r-g_r_row_g_o h3');
    titleElement1.innerText = projects[1].title;

    const titleElement2 = document.querySelector('.r-g_r_row_g_e h3');
    titleElement2.innerText = projects[2].title;
}
