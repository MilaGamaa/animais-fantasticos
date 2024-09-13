export default function initDropdownMenu() {
  const menusDropdown = document.querySelectorAll("[data-dropdown]");

  menusDropdown.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
  }
}
