var siteHeader = document.querySelector('.site-header');
if (!siteHeader) {
  return 0;
}
var navSite = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');

navToggle.addEventListener('click', function () {
  if (navSite.classList.contains('site-nav--closed')) {
    navSite.classList.remove('site-nav--closed');
    siteHeader.classList.remove('site-header--closed');
    navSite.classList.add('site-nav--opened');
  } else {
    navSite.classList.add('site-nav--closed');
    navSite.classList.remove('site-nav--opened');
    siteHeader.classList.add('site-header--closed');
  }
});
