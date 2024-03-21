document.addEventListener("DOMContentLoaded", (e) => {
  const jsSearchOpen = document.querySelector(".js-search-open");
  const jsFormWrap = document.querySelector(".js-search-form-wrap");
  const jsSearchClose = document.querySelector(".js-search-close")

  jsSearchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    jsFormWrap.classList.add("active");
  });

  jsSearchClose.addEventListener("click", (e) => {
    e.preventDefault();
    jsFormWrap.classList.remove("active");
  });

  // Menu hamburguer

  const mobileNavToogleButton = document.querySelector(".menu-hamburguer");
  console.log(mobileNavToogleButton);
  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener("click", (e) => {
      e.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    const icone = document.querySelector(".menu-hamburguer .mobile-nav-toggle")
    document.querySelector('body').classList.toggle('mobile-nav-active');
    icone.classList.toggle('fa-bars');
    icone.classList.toggle('fa-xmark');
  }

  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    console.log(!navbarlink.hash);
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    console.log(section);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  const navDropdowns = document.querySelectorAll('.navbar-bottom .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    })
  });

});