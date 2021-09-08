"use strict";
const spinnerwrapper = document.querySelector(".spinner-wrapper");
document.querySelector(".content").style.display = "none";
window.addEventListener("load", function () {
  spinnerwrapper.parentElement.removeChild(spinnerwrapper);
  document.querySelector(".content").style.display = "";
});

// const memberssection = document.querySelector("#scroll");
// const membersbtn = document.querySelectorAll("#members");

// memberssection.scrollIntoView({ behavior: "smooth" });
const scrolltosection = function () {
  const memberssection = document.querySelector(".members");
  document.querySelectorAll("#members").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      memberssection.scrollIntoView({ behavior: "smooth" });
    });
  });
  const albumssection = document.querySelector(".albums");
  document.querySelectorAll("#albums").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      albumssection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const aboutsection = document.querySelector(".about");
  document.querySelectorAll("#about").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      aboutsection.scrollIntoView({ behavior: "smooth" });
    });
  });
  const home = document.querySelector("header");
  document.querySelector("#home").addEventListener("click", function (e) {
    e.preventDefault();

    home.scrollIntoView({ behavior: "smooth" });
  });
};
scrolltosection();
// const firstSections = document.querySelector(".members");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   console.log(entry);
//   if (document.querySelector(".nav-sticky").classList.contains("hidden")) {
//     document.querySelector(".nav-sticky").classList.remove("hidden");
//   } else {
//     document.querySelector(".nav-sticky").classList.add("hidden");
//     //   observer.unobserve(entry.target);
//   }
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.2,
// });
// sectionObserver.observe(firstSections);
// firstSection.sectionObserver.observe(section);
// $(document).ready(function () {
//   $(".js-members").waypoint(function (direction) {
//     if (direction == "down") {
//       $("h1").css("background-color", "green");
//       $("nav-sticky").removeClass("hidden");
//       $("nav").addClass("hidden");
//     } else if (direction == "up") {
//       $("nav-sticky").addClass("hidden");
//       $("nav").removeClass("hidden");
//     }
//   });
// $("h1").click(function () {
//   $(this).css("background-color", "black");
// });
