const listEl = document.querySelector(".js_list");
const btnEl = document.querySelector(".js_btn");
const formEl = document.querySelector(".box_form");

let page = 1;
let searchValue = "";

function getApi() {
  return fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&from=2025-10-19&sortBy=publishedAt&apiKey=09de3f48ee0a4331be44f900830e74be&pageSize=3&page=${page}`
  ).then((res) => res.json());
}

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  listEl.innerHTML = "";
  page = 1;
  searchValue = evt.currentTarget.name.value;
  getApi().then((res) => render(res.articles));
});

function render(array) {
  const item = array
    .map(({ author, title, url, urlToImage }) => {
      return `
      <li class="js_item">
        <img src="${urlToImage}" alt="${title}" class="js_img">
        <h2 class="js_desc">${title}</h2>
        <h3 class="js_title">${author}</h3>
        <a href="${url}" class="js_link">Follow the link</a>
      </li>`;
    })
    .join("");

  listEl.insertAdjacentHTML("beforeend", item);
}

btnEl.addEventListener("click", () => {
  page += 1;
  getApi().then((res) => render(res.articles));
});