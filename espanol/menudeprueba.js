document.addEventListener('DOMContentLoaded', (event) => {
  const dropdown = document.getElementById('dropdownMenu');
  const button = document.getElementById('dropdown1');
  const menu = dropdown.querySelector('.dropdown-menu');

  button.addEventListener('mouseover', () => {
    menu.classList.add('show');
  });

  dropdown.addEventListener('mouseleave', () => {
    menu.classList.remove('show');
  });
});
  