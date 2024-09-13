export default function accordionActive() {
  const accordion = document.querySelectorAll("[data-anime='accordion'] dt");

  if (accordion.length) {
    accordion[0].nextElementSibling.classList.add("ativo");
    accordion[0].classList.add("ativo");

    function mudarAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordion.forEach((item) => {
      item.addEventListener("click", mudarAccordion);
    });
  }
}
