// about-section links toggle
const tabLinks = document.querySelector(".tab-links");

tabLinks.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.classList.add("tab-link-active");

    if (e.target.innerText === "Skills") {
      e.target.nextElementSibling.classList.remove("tab-link-active");
      e.target.nextElementSibling.nextElementSibling.classList.remove(
        "tab-link-active"
      );
    } else if (e.target.innerText === "Experiences") {
      e.target.previousElementSibling.classList.remove("tab-link-active");
      e.target.nextElementSibling.classList.remove("tab-link-active");
    } else {
      e.target.previousElementSibling.classList.remove("tab-link-active");
      e.target.previousElementSibling.previousElementSibling.classList.remove(
        "tab-link-active"
      );
    }
  }
});

// about section tab content toggle
const tabContent = document.querySelector(".tab-content");

tabLinks.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    if (e.target.innerText === "Skills") {
      tabContent.querySelector(".skills-content").style.display = "block";
      tabContent.querySelector(".educations-content").style.display = "none";
      tabContent.querySelector(".experiences-content").style.display = "none";
    } else if (e.target.innerText === "Experiences") {
      tabContent.querySelector(".experiences-content").style.display = "block";
      tabContent.querySelector(".skills-content").style.display = "none";
      tabContent.querySelector(".educations-content").style.display = "none";
    } else {
      tabContent.querySelector(".educations-content").style.display = "block";
      tabContent.querySelector(".experiences-content").style.display = "none";
      tabContent.querySelector(".skills-content").style.display = "none";
    }
  }
});

// services cart
const services = [
  {
    logoClass: "fa-solid fa-code",
    title: "Frontend Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima voluptatum consectetur natus molestiae!",
  },
  {
    logoClass: "fa-solid fa-palette",
    title: "UI/UX Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima voluptatum consectetur natus molestiae!",
  },
  {
    logoClass: "fa-solid fa-pen",
    title: "Editing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima voluptatum consectetur natus molestiae!",
  },
];

const servicesContainer = document.querySelector(".services-container");

services.forEach(service => {
  const singleService = document.createElement("div");
  singleService.setAttribute("data-tilt", "");

  const i = document.createElement("i");
  for (cls of service.logoClass.split(" ")) {
    i.classList.add(cls);
  }
  singleService.appendChild(i);

  const h2 = document.createElement("h2");
  h2.innerText = service.title;
  singleService.appendChild(h2);

  const p = document.createElement("p");
  p.innerText = service.description;
  singleService.appendChild(p);

  servicesContainer.appendChild(singleService);
});

// projects carts
const projects = [
  {
    img: "./images/landing-page.png",
    title: "Landing Page",
    description: "It is Landing Page",
    logoClass: "fa-solid fa-up-right-from-square",
  },

  {
    img: "./images/sticky-notes.png",
    title: "Draggable Sticky Notes",
    description: "It is best Sticky Notes app",
    logoClass: "fa-solid fa-up-right-from-square",
  },
  {
    img: "./images/live-chat-app.png",
    title: "Live Chat App",
    description: "It is best live chat app",
    logoClass: "fa-solid fa-up-right-from-square",
  },
];

const projectsContainer = document.querySelector(".projects-container");
projects.forEach(project => {
  const singleProject = document.createElement("div");
  singleProject.classList.add("single-project");

  const img = document.createElement("img");
  img.setAttribute("src", project.img);
  singleProject.appendChild(img);

  const singleProjectContent = document.createElement("div");
  singleProjectContent.classList.add("single-project-content");

  const title = document.createElement("h2");
  title.innerText = project.title;
  singleProjectContent.appendChild(title);

  const description = document.createElement("p");
  description.innerText = project.description;
  singleProjectContent.appendChild(description);

  const i = document.createElement("i");
  for (cls of project.logoClass.split(" ")) {
    i.classList.add(cls);
  }
  singleProjectContent.appendChild(i);

  singleProject.appendChild(singleProjectContent);

  projectsContainer.appendChild(singleProject);
});
