document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.img-link').forEach(e => {
   e.addEventListener('click', () => {
     window.open('https://umbracollab.net', '_blank');
   });
  });
});