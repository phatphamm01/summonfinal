//Handle Hover Product Events
console.log("log");
const nodes = Array.from($(".product-item"));
console.log(nodes);
const classNames = ["hidden", "block"];

class Item {
  constructor(element) {
    this.element = element;
    this.options = this.element.querySelector(".options");
    this.image = this.element.querySelector("img");
    this.movewait = null;

    this.image.addEventListener("mousemove", (ev) => this.updatePositon(ev));
    this.image.addEventListener("mouseenter", (ev) =>
      this.updateDisplay(ev, "block")
    );
    this.image.addEventListener("mouseleave", (ev) =>
      this.updateDisplay(ev, "hidden")
    );
  }

  updateDisplay(ev, prev) {
    this.options.classList.remove(...classNames);
    setTimeout(() => {
      this.options.classList.add(prev);
    }, 10);
  }

  updatePositon(ev) {
    var evTarget = ev.target;

    var rect = evTarget.getBoundingClientRect();
    var x = ev.clientX - rect.left; //x position within the element.
    var y = ev.clientY - rect.top; //y position within the element.

    if (typeof this.movewait !== "undefined") {
      console.log("cancel");
      clearTimeout(this.movewait);
    }
    this.movewait = setTimeout(() => {
      console.log("oky");
      this.options.setAttribute("style", `left: ${x + 20}px; top: ${y + 20}px`);
    }, 4);
  }
}

nodes.forEach((node) => new Item(node));

//Handle

const nodeTagA = Array.from($("#narrow-by-list").find("a"));

nodeTagA.forEach((node) =>
  node.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

const nodeTagLi = Array.from($(".all-filters").find("li"));

nodeTagLi.forEach((node) =>
  node.addEventListener("click", (e) => {
    $(node)
      .find("input")
      .prop("checked", function (i, value) {
        return !value;
      });
  })
);
