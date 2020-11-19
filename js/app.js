(function () {
  //Main Elements
  const nav = document.querySelector("#navBar");
  const sections = document.querySelectorAll("section");
  //New created element
  const navList = document.createElement("ul");
  const navListItems = []; //Array to be filled with Nav links
  //Interval to hide Navbar
  let hideTimer = setTimeout(hideNavBar, 5000);

  nav.appendChild(navList);

  //Nav Links creation
  for (const section of sections) {
    //Creation of Nav link (li element)
    const li = document.createElement("li");

    //Get data attribute
    li.textContent = section.getAttribute("data-nav");
    //Add Click event to scroll
    li.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    });

    //Add to NavListItems Array
    navListItems.push(li);
    //Append Nav Link to Navbar
    navList.appendChild(li);
  };

  //Events
  //Add event to scroll
  document.addEventListener("scroll", onScroll);

  //Functions
  /**
  * @description Activates the section with the specified parameter and deactives the rest
  * @param {number} sectionNumber
  * @returns none
  */
  function activateSection(sectionNumber) {
    sections.forEach((section, index) => {
      if (index === sectionNumber) {
        section.classList.add("active");
        navListItems[index].classList.add("active");
      } else {
        section.classList.remove("active");
        navListItems[index].classList.remove("active");
      }
    });
  }
  /**
  * @description Checks on what section is in display, Shows Navbar, and resets Navbar hiding timer 
  * @returns none
  */
  function onScroll() {
    nav.classList.remove("hidden");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideNavBar, 5000);
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop - document.body.clientHeight * 0.075 <= window.pageYOffset) {
        activateSection(i);
        return;
      }
    }
  }
  /**
  * @description Hides navbar
  * @returns none
  */
  function hideNavBar() {
    nav.classList.add("hidden");
  }
})();