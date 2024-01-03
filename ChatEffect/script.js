document.addEventListener("DOMContentLoaded", function () {
    const chatSection = document.getElementById("chat-section");

    function getRandomAvatar() {
        return `https://i.pravatar.cc/50?img=${Math.floor(Math.random() * 100)}`;
    }

    function animateIn(personContainer) {
        let delay = 35;
        let container = personContainer;
        let childElements = Array.from(personContainer.children);

        setTimeout(() => {
            container.style.transition = 'opacity 0.5s ease-out, max-height 0.5s ease-out, transform 0.5s ease-out';
            container.style.opacity = 1;
            container.style.transform = 'translateX(0px) scale(1)';
        }, delay);

        delay += 40;

        childElements.forEach((element, i) => {
            requestAnimationFrame(() => {
                element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                element.style.opacity = 1;
                element.style.transform = 'translateY(0px)';
            });
            delay += 50;
        });

        personContainer.querySelectorAll(".message-para").forEach((n, i) => {
            requestAnimationFrame(() => {
                n.style.transition = 'opacity 0.5s ease-out';
                n.style.opacity = 1;
            });
            setTimeout(() => {
                n.style.transition = 'none';
            }, 70 * (i + 3) + delay);
        });
    }

    function addPersonToChat(person) {
        const personContainer = document.createElement("div");
        personContainer.classList.add("person-container");
        personContainer.style.transition = 'background-color 0.5s ease-out';

        const leftContainer = document.createElement("div");
        leftContainer.classList.add("left-container");
        const avatarImg = document.createElement("img");
        avatarImg.classList.add("avatar-img");
        avatarImg.src = person.avatar || getRandomAvatar();
        avatarImg.addEventListener('error', function() {
            avatarImg.src = 'assets/img/default-avatar.png';
        });

        leftContainer.appendChild(avatarImg);




        const centerContainer = document.createElement("div");
        centerContainer.classList.add("center-container");
        const pseudoHeader = document.createElement("h2");
        pseudoHeader.classList.add("pseudo-header");
        pseudoHeader.textContent = person.name;
        const messagePara = document.createElement("p");
        messagePara.classList.add("message-para");
        messagePara.textContent = person.message;
        centerContainer.appendChild(pseudoHeader);
        centerContainer.appendChild(messagePara);

        personContainer.appendChild(leftContainer);
        personContainer.appendChild(centerContainer);

        chatSection.appendChild(personContainer);

        chatSection.scrollTop = chatSection.scrollHeight;

        animateIn(personContainer);
        setTimeout(displayPeople, 2000);
    }

    const personnes = [
        { name: "John", message: "Lorem 🥳🥳🥳", avatar:'assets/img/image_test.png'  },
        { name: "Alice", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis." },
        { name: "Bob", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis." },
        { name: "Eva", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae dolor eaque recusandae alias voluptas, provident optio error voluptates voluptatem?" },
        { name: "Charlie", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, autem error architecto nesciunt natus similique." },
        { name: "Grace", message: "Lorem ipsum dolor sit amet" },
        { name: "Daniel", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae dolor eaque recusandae alias voluptas, provident optio error voluptates voluptatem?" },
        { name: "Sophie", message: "Lorem ipsum" },
        { name: "Alex", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut, quas quod molestias dolore doloremque est facilis non optio blanditiis mollitia accusamus. Deserunt aliquid optio suscipit ipsa, dolor non beatae et sapiente dolores dolorem dicta architecto eveniet dolore eum fuga." },
        { name: "Olivia", message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quisquam ducimus provident non incidunt eaque, esse sapiente unde possimus reiciendis nesciunt soluta iure porro sint cumque repellat, libero cupiditate illum."},
    ];

    let index = 0;

    function displayPeople() {
        addPersonToChat(personnes[index]);
        index = (index + 1) % personnes.length;
    }

    setTimeout(displayPeople, 0);

    chatSection.style.overflowY = "auto";
});
