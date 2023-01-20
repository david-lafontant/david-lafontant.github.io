// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

const data = [
  {
    name: "Awesome-Books",
    description: "AWESOME BOOKS is web application project that allows users to add/remove books from a list and display them on the screen",
    image: "https://repository-images.githubusercontent.com/448865710/d514d8d5-981e-42bf-a69e-0a80eac526d5",
    url: "https://github.com/david-lafontant/Awesome-Books",
    tech: "JavaScript / HTML / CSS",
    live: "https://awesomebooklafontant.netlify.app/"
  },
  {
    name: "Recipe-App",
    description: "Recipe-App keep track of all user's recipes, recipe’s ingredients lists, and user’s food inventory. The user can generate a shopping list based on the inventory. Recipe-App allows a user to share recipes.",
    image: "https://repository-images.githubusercontent.com/500589881/756e38fd-2fdd-4644-9564-c3a63582b8da",
    url: "https://github.com/david-lafontant/Recipe-App",
    tech: "Ruby / Ruby on Rails / Tailwind CSS",
    live: ""
  },
  {
    name: "Leaderboard",
    description: "Leaderboard is a web application that displays sorted scores. Leaderboard stores participants' scores in an API. The participants’ scores are retrieved, sorted, and displayed each time the refresh button is pressed",
    image: "https://repository-images.githubusercontent.com/457031042/2a4e4b7f-6b31-49af-9963-5fa23f5eda4f",
    url: "https://github.com/david-lafontant/Leaderboard",
    tech: 'JavaScript / Webpack / HTML / CSS',
    live: "https://davidlafontant.tech/Leaderboard/"
  },
  {
    name: "Zoo-Animals",
    description: "Zoo-Animal is a web application that displays zoo animals' information details. It retrieves data from Zoo Animal API, and displays all the animals retrieved and the data related to each animal.",
    image: "https://repository-images.githubusercontent.com/473316113/8b8f3923-a101-4115-8f83-94fe40980d44",
    url: "https://github.com/david-lafontant/Zoo-Animals",
    tech: "React / Redux / CSS / Bootstrap",
    live: ""
  },
  {
    name: "Budget-App",
    description: "Budget-App is a mobile web application. It allows a registered user to manage an expense budget by categorizing and tracking each expense. Budget-App is built with Ruby on Rails. ",
    image: "https://repository-images.githubusercontent.com/503026039/8910b94e-59e9-41e4-8779-317d4dd83ff5",
    url: "https://github.com/david-lafontant/Budget-App",
    tech: "Ruby on Rails / PostgreSQL / Tailwind CSS",
    live: ""
  },
  {
    name: "W.G.T-Summit-2021",
    description: "Web portal of the World Globalization Trade Summit 2021. W.G.T-Summit-2021 inform about WGT summit (venue, speaker, date, etc..)",
    image: "https://repository-images.githubusercontent.com/444822382/e12a421f-2ee7-4407-b4ec-f0ec4c831db3",
    url: "https://github.com/david-lafontant/W.G.T-Summit-2021",
    tech: "JavaScript / SASS / HTML",
    live: "https://wgtsummit.netlify.app/"
  }
];

const portfolioSection = document.querySelector(".portfolio-section");

data.forEach((element, index) => {
  if (index % 2 === 0) {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add('row', 'g-0', 'mt-5', 'leshadow');
    const content = `<div class="col-md-6">
    <a href=${element.url} target="_blank" rel="noopener noreferrer"
      ><img
        class="img-fluid"
        src=${element.image}
        width="800"
        height="500"
    /></a>
  </div>
  <div
    class="col-md-6 d-flex align-items-center"
  >
    <div class="m-4 mt-md-2">
      <p class="text-teal text-small">
        ${element.tech}
      </p>
      <h3>${element.name}</h3>
      <p class="text-muted">
        ${element.description}
      </p>
      <p class="d-flex justify-content-around"><a class="btn btn-primary" href="${element.url}" target="_blank" rel="noopener noreferrer"  >Github repository</a></p>
    </div>
  </div>`;
    portfolioItem.innerHTML = content;
    portfolioSection.appendChild(portfolioItem);

  }
  else {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add('row', 'g-0', 'portfolio-reverse', 'mt-5', 'leshadow');
    const content = `

                <div
                  class="col-md-6 d-flex align-items-center"
                >
                  <div class="m-4 mt-md-2 text-end">
                    <p class="text-teal text-small">
                      ${element.tech}
                    </p>
                    <h3>${element.name}</h3>
                    <p class="text-muted">
                      ${element.description}
                    </p>
                    <p class="d-flex justify-content-around" ><a class="btn btn-primary" href="${element.url}" target="_blank" rel="noopener noreferrer">Github repository</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <a href=${element.url} target="_blank"
                    ><img
                      class="img-fluid"
                      src=${element.image}
                      width="800"
                      height="500"
                  /></a>
                </div>
              `;
    portfolioItem.innerHTML = content;
    portfolioSection.appendChild(portfolioItem);


  }
});
