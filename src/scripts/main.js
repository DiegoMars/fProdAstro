// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  //                                  //
  // Logic for the footer flash thing //
  //                                  //
  const footerLink = document.querySelector('a[href="#footerEverything"]');

  // getElementsByTagName() returns an array but not array of elements with the
  // footer tag. The next line just grabs the first one because there should
  // only be one of them to use
  const footerCollection = document.getElementsByTagName("footer");
  const footer = footerCollection[0];
  if (footerLink && footer) {
    footerLink.addEventListener("click", function () {
      setTimeout(() => {
        footer.classList.add("flash");

        setTimeout(() => {
          footer.classList.remove("flash");
        }, 1000); // duration longer than animation
      }, 500); // delay to match scroll duration
    });
  }

  //                                    //
  //  Logic for research card flashers  //
  //                                    //
  const hash = window.location.hash;
  if (hash) {
    requestAnimationFrame(() => {
      const safeId = hash.replace(/[^a-zA-Z0-9_-]/g, "-");
      const target = document.getElementById(safeId.slice(1));
      if (target) {
        // Trigger flash slightly later
        setTimeout(() => {
          target.classList.add("flash");
          setTimeout(() => target.classList.remove("flash"), 1000);
        }, 600); // match scroll timing
      }
    });
  }
});
