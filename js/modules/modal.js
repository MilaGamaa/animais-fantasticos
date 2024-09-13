export default function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const modal = document.querySelector('[data-modal="container"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');

  if (abrirModal && modal && fecharModal) {
    function modalToggle(event) {
      event.preventDefault();
      modal.classList.toggle("ativo");
    }

    function clickForaDoModal(event) {
      if (event.target === this) modalFechado(event);
    }

    abrirModal.addEventListener("click", modalToggle);
    fecharModal.addEventListener("click", modalToggle);
    modal.addEventListener("click", clickForaDoModal);
  }
}
