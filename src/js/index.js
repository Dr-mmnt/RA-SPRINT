class TabItem {
  constructor(link, content) {
    this.link = link;
    this.content = content;
  }

  onClick(callback) {
    this.link.addEventListener("click", () => callback());
  }

  activate() {
    this._toggle(true);
  }

  deactivate() {
    this._toggle(false);
  }

  _toggle(activate) {
    this.link.classList.toggle("active", activate);
    this.content.classList.toggle("active", activate);
  }
}

class TabsManager {
  constructor(tabsElem) {
    this.tabs = [];
    this.activeTab = null;

    this.init(tabsElem);
    this.activateTab(this.tabs[0]);
  }

  init(tabsElem) {
    const links = tabsElem.querySelectorAll(".tabs__links li");
    const contents = tabsElem.querySelectorAll(".tabs__item");

    for (let i = 0; i < links.length; i++) {
      const tab = new TabItem(links[i], contents[i]);
      this.tabs.push(tab);

      tab.onClick(() => this.activateTab(tab));
    }
  }

  activateTab(tab) {
    if (this.activeTab) {
      this.activeTab.deactivate();
    }
    this.activeTab = tab;
    this.activeTab.activate();
  }
}

window.onload = () => {
  btn.addEventListener("click", () => {
    mobileMenu.classList.add("visible");
  });

  mobileCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("visible");
  });

  const header = document.querySelector(".mobileNavigation__list");

  document.addEventListener("scroll", (event) => {
    console.log(event.target.scrollTop);
  });

  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  for (let link of smoothScrollLinks) {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const target = event.target;
      const elementToScroll = document.querySelector(
        target.getAttribute("href")
      );
      elementToScroll.scrollIntoView({ behavior: "smooth", block: "end" });
      mobileMenu.classList.remove("visible");
    });
  }

  const tabsElem = document.getElementById("myTabs");
  new TabsManager(tabsElem);

  $(".slider:not(.slick-cloned)").slick({
    prevArrow: $(".paginator__button_left"),
    nextArrow: $(".paginator__button_right"),
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // infinite:false
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  
  
};
