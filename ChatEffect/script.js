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
            container.style.maxHeight = '200px';
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
        { name: "John", message: "Hello there!" },
        { name: "Alice", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis." },
        { name: "Bob", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id fermentum justo, eu fermentum felis. Nulla facilisi. Proin ut magna vitae purus tincidunt congue non vel elit. Etiam vitae neque id augue vulputate sagittis." },
        { name: "Eva", message: "Hello everyone!" },
        { name: "Charlie", message: "Hey, what's up?" },
        { name: "Grace", message: "Hi, it's Grace!" },
        { name: "Daniel", message: "Hello from Daniel!" },
        { name: "Sophie", message: "Hey there, Sophie here!" },
        { name: "Alex", message: "Hi, Alex in the chat!" },
        { name: "Olivia", message: "Greetings from Olivia!" },
    ];

    let index = 0;

    function displayPeople() {
        addPersonToChat(personnes[index]);
        index = (index + 1) % personnes.length;
    }

    setTimeout(displayPeople, 0);

    chatSection.style.maxHeight = "500px";
    chatSection.style.overflowY = "auto";
});
