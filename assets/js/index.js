const searchForm = document.getElementById("search-form");
const restaurantsSection = document.getElementById("restaurants-section");

const removeRestaurants = () => {
  const restaurantsContainer = document.getElementById("restaurants-container");

  if (restaurantsContainer) {
    restaurantsContainer.remove();
  }
};

const renderRestaurants = (restaurants) => {
  // remove restaurants
  removeRestaurants();

  // create parent div
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "restaurants-container");
  parentDiv.setAttribute(
    "class",
    "d-flex flex-row flex-wrap justify-content-evenly"
  );

  const renderRestaurantCard = (restaurant) => {
    const name = restaurant.name;
    const imageUrl = restaurant.logo;
    const cuisine = restaurant.type;
    const openingHours = restaurant.hours;

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card restaurant-card my-2");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", imageUrl);
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("alt", name);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.textContent = name;

    const p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.textContent = cuisine;

    const cardBtnDiv = document.createElement("div");
    cardBtnDiv.setAttribute("class", "d-grid gap-2 mt-3");

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.textContent = "Add to Favourites";

    cardBtnDiv.append(button);
    cardBody.append(h5, p, cardBtnDiv);
    cardDiv.append(cardImg, cardBody);

    // create opening hours

    parentDiv.appendChild(cardDiv);
  };

  restaurants.forEach(renderRestaurantCard);

  restaurantsSection.append(parentDiv);
};

const handleSearchRestaurants = (event) => {
  event.preventDefault();

  // get the category
  const categorySelect = document.getElementById("category-select");

  const category = categorySelect.value;

  if (category === "all") {
    // render all restaurants
    renderRestaurants(restaurants);
  } else {
    // filter restaurants by category
    const filterRestaurant = (restaurant) => {
      // if (restaurant.type === category) {
      //   return true;
      // } else {
      //   return false;
      // }
      return restaurant.type === category;
    };

    const filteredRestaurants = restaurants.filter(filterRestaurant);

    // render all restaurants for the selected category
    renderRestaurants(filteredRestaurants);
  }
};

const handleOnLoad = () => {
  // render all restaurants
  renderRestaurants(restaurants);
};

searchForm.addEventListener("submit", handleSearchRestaurants);
window.addEventListener("load", handleOnLoad);
