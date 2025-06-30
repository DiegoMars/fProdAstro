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

  // Add other scripts here, for example:
  // nav toggle, animation triggers, etc.
});
