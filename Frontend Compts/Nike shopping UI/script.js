const pickTab = document.querySelector(".picking");
const cart = document.querySelector(".cart");

const shoes = [
  {
    bgColor: "grayish",
    shoeImg:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
    shoeName: "Nike Air Zoom Pegasus 36",
    shoeText: `The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
  that targets breathability across high-heat areas. A slimmer
  heel collar and tongue reduce bulk, while exposed cables give
  you a snug fit at higher speeds.`,
    shoePrice: "108.97",
  },
  {
    bgColor: "purpleish",
    shoeImg:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
    shoeName: "Nike Air Zoom Pegasus 36 Shield",
    shoeText: `The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.`,
    shoePrice: "89.97",
  },
  {
    bgColor: "yellowish",
    shoeImg:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
    shoeName: "Nike Cruz One",
    shoeText: `Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.`,
    shoePrice: "100.97",
  },
];

const createShoes = function (shoes) {
  shoes.forEach((shoe, i) => {
    const item = `<div class="shoe">
    <div class="shoe__img-wrapper ${shoe.bgColor}">
      <img
        src=${shoe.shoeImg}
        alt="Air Zoom"
        class="shoe__img"
      />
    </div>
    <div class="shoe__content">
      <p class="shoe__name">${shoe.shoeName}</p>
      <p class="shoe__text">
      ${shoe.shoeText}
      </p>
    </div>
    <div class="shoe__activity">
      <span class="shoe__price">$${shoe.shoePrice}</span>
      <div class="shoe__add-to-cart btn-cart" data-item="${i}">add to cart</div>
    </div>
    </div>
    `;

    pickTab.insertAdjacentHTML("beforeend", item);
  });
};

const addToCart = function (items, incr = 1) {
  const btnsCart = document.querySelectorAll(".btn-cart");

  btnsCart.forEach((btnCart, i) => {
    btnCart.addEventListener("click", function (e) {
      const item = items[e.target.dataset.item];
      let incr = 1;

      const cartShoe = `
      <div class="card-item">
      <div class="card-item__left">
        <div class="img-wrapper">
          <img
            src=${item.shoeImg}
            alt="Air Zoom"
          />
        </div>
      </div>
      <div class="card-item__right">
        <p class="title">${item.shoeName}</p>
        <p class="price">${item.shoePrice}</p>
        <div class="incr-tab">
          <span class="icon-wrapper icon-back"
            ><ion-icon class="icon" name="chevron-back-outline"></ion-icon
          ></span>
          <p class="incr-text" data-item-num="${i}">${incr}</p>
          <span class="icon-wrapper icon-forward"
            ><ion-icon
              class="icon"
              name="chevron-forward-outline"
            ></ion-icon
          ></span>
        </div>
      </div>
    </div>`;

      cart.insertAdjacentHTML("beforeend", cartShoe);

      const children = [...cart.children];
      children.forEach((child) => {});

      const tabForward = document.querySelector(".icon-forward");
      const tabBack = document.querySelector(".icon-back");
      const incrText = document.querySelector(".incr-text");

      incrTab(tabForward, tabBack, incrText, incr, children);

      removeCartTitle(cart);
    });
  });
};

createShoes(shoes);
addToCart(shoes);

const removeCartTitle = function (cartParent) {
  if (cartParent.children.length > 2) {
    document.querySelector(".subtitle-cart").style.display = "none";
  }
};

const incrTab = function (btnForward, btnBack, textTab, incr, children) {
  btnForward.addEventListener("click", function () {
    incr++;
    textTab.textContent = incr;
  });
  btnBack.addEventListener("click", function () {
    incr--;
    textTab.textContent = incr;
    // if (incr === 0) {
    // }
  });
};
