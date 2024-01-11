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
