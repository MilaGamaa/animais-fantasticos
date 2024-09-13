export default function initTooltip() {}

const tooltip = document.querySelectorAll("[data-tooltip]");

tooltip.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const tooltipBox = criarTooltipBox(this);

  this.addEventListener("mouseleave", onMouseLeave);
  this.addEventListener("mousemove", onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  onMouseMove.tooltipBox = tooltipBox;
}

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener("mouseleave", onMouseLeave);
    this.element.removeEventListener("mousemove", onMouseMove);
  },
};

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  },
};

function criarTooltipBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.innerText = text;
  tooltipBox.classList.add("tooltip");
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
