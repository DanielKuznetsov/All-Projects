class UI {
  static readShoes() {
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

    shoes.forEach((shoe) => UI.displayShoes(shoe));
    // shoes.forEach((shoe) => UI.displayCart(shoe));
  }

  static displayShoes(shoe) {
    const cardTitle = document.querySelector(".card-title");

    const el = `<div class="shoe">
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
      <button class="shoe__add-to-cart btn-cart">add to cart</button>
    </div>
    </div>
    `;

    cardTitle.insertAdjacentHTML("afterend", el);
  }

  static displayCart(shoe) {
    const cart = document.querySelector(".cart");

    const cartShoe = `
    <div class="card-item">
    <div class="card-item__left">
      <div class="img-wrapper">
        <img
          src=${shoe.photo}
          alt="Air Zoom"
        />
      </div>
    </div>
    <div class="card-item__right">
      <p class="title">${shoe.name}</p>
      <p class="price">${shoe.price}</p>
      <div class="incr-tab">
        <span class="icon-wrapper icon-back"
          ><ion-icon class="icon icon-i-back" name="chevron-back-outline"></ion-icon
        ></span>
        <p class="incr-text">1</p>
        <span class="icon-wrapper icon-forward"
          ><ion-icon
            class="icon icon-i-forward"
            name="chevron-forward-outline"
          ></ion-icon
        ></span>
      </div>
    </div>
  </div>`;

    cart.insertAdjacentHTML("beforeend", cartShoe);
  }

  static showIncrement(btn) {
    const cart = document.querySelector(".cart");
    cart.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (
        e.target.classList.contains("icon-back") ||
        e.target.classList.contains("icon-i-back")
      ) {
        let incrEl = +e.target.closest(".incr-tab").children[1].textContent;
        const incrElText = e.target.closest(".incr-tab").children[1];

        incrEl--;

        if (incrEl === 0) {
          // btn.removeAttribute("disabled");
          e.target.closest(".card-item").remove();
        }

        incrElText.textContent = incrEl;
        console.log(e.target.closest(".incr-tab").children[1].textContent);
      }

      if (
        e.target.classList.contains("icon-forward") ||
        e.target.classList.contains("icon-i-forward")
      ) {
        let incrEl = +e.target.closest(".incr-tab").children[1].textContent;
        const incrElText = e.target.closest(".incr-tab").children[1];

        incrEl++;

        incrElText.textContent = incrEl;
        console.log(e.target.closest(".incr-tab").children[1].textContent);
      }
    });
  }
}

class Cart {
  constructor(photo, name, price) {
    this.photo = photo;
    this.name = name;
    this.price = price;
  }
}

// Event: Get Shoe
document.querySelector(".picking").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-cart")) {
    const photo =
      e.target.parentElement.parentElement.children[0].children[0].src;
    const name =
      e.target.parentElement.previousElementSibling.children[0].textContent;
    const price = e.target.previousElementSibling.textContent;

    const shoeItem = new Cart(photo, name, price);
    UI.displayCart(shoeItem);

    e.target.setAttribute("disabled", "disabled");

    UI.showIncrement(e.target);
  }
});

// Event: Increment Number of Shoes

// Remove "Cart is empty" text

document.addEventListener("DOMContentLoaded", UI.readShoes);
