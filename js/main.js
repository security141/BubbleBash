const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(link => {
  if(link.getAttribute('href').length > 1){
     link.addEventListener('click', event => {
      event.preventDefault();

      const blockID = link.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
     })
  }
});