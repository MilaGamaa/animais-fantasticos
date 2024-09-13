export default function ativarMenu() {
  const tab = document.querySelectorAll('[data-tab="menu"] li');
  const content = document.querySelectorAll('[data-tab="content"] section');

  if (tab.length && content.length) {
    function activeTab(index) {
      content.forEach((item) => {
        item.classList.remove("ativo");
      });
      const direcao = content[index].dataset.anime;
      content[index].classList.add("ativo", direcao);
    }

    tab.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
