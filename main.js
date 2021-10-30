// Height

$("header").resize(function () {
  console.log($("header").height());
});

//Click Wrap
const nodes = Array.from($(".mobile-menu").find(".parent"));
const classNames = ["nav-in", "nav-out"];
class Item {
  constructor(element) {
    this.element = element;
    $("a").click((e) => {
      e.preventDefault();
    });
    this.element.addEventListener("click", (ev) => this.update(ev, "nav-in"));
  }

  update(ev, prefix) {
    const html = $($(this.element).find("script").html());
    const parent = $(this.element).closest(".swipe-menu-wrapper");
    $(html)
      .find(".dropdown-back")
      .click(() => {
        $(html).removeClass("dropdown-active");
        setTimeout(() => {
          $(html).remove();
        }, 300);
      });

    parent.append(html);
    console.log(html);

    setTimeout(() => {
      $(html).addClass("dropdown-active");
    }, 0);
  }
}

nodes.forEach((node) => new Item(node));

//Click Nav Humberger
$(document).click((e) => {
  console.log(e.target);
  let data = $(e.target).data();

  if (data?.click === "open-menu") {
    $("body").addClass("active-menu");
    $(".wrapper").addClass("opened-menu");
  }

  if (data?.click === "close-menu") {
    $("body").removeClass("active-menu");
    $(".wrapper").removeClass("opened-menu");
  }
});

//Handle Navbar Scroll Events
var lastScrollTop = 0;
const classNamesHeader = ["scroll-up", "scroll-down"];
window.addEventListener("scroll", function (e) {
  let st = $(this).scrollTop();
  if (st > lastScrollTop) {
    console.log(1);
    $("header").removeClass("scroll-up");
    $("header").addClass("scroll-down");
  } else {
    console.log(-1);
    $("header").removeClass("scroll-down");
    $("header").addClass("scroll-up");
  }
  lastScrollTop = st;
});
