const form = document.querySelector("form");
const input = document.querySelector("#search");
const count = document.querySelector("#count");
const output = document.querySelector("#output");

const API = "https://api.giphy.com/v1/gifs/search?";
const key = "api_key=wOAnCvgZUfGwPw9oNH7N54K0qQj93aYW";
const limit = "&limit=";
const query = "&q=";

const searchGiphy = async (e) => {
  e.preventDefault();
  if (!search.value.trim().length) return;

  const url = API + key + limit + count.value +  query + search.value;
  const req = await fetch(url);
  const res = await req.json();
  renderGiphys(res.data);
};

form.addEventListener("submit", searchGiphy);

const renderGiphys = (data) => {
  output.innerHTML = ``
 if ( data.length > 0) {
  
  data.forEach((el) => {
    console.log(el);
    const card = document.createElement("div");
    const giff = document.createElement("img");
    giff.src = el.images.preview_webp.url;
    giff.alt = el.alt_text;

    const giffName = document.createElement("h2");
    giffName.textContent =
      el.title.length > 15 ? el.title.slice(0 > 15) + "..." : el.title;
    giffName.title = el.title;

    card.append(giff, giffName);
    output.append(card);
  })
} else {
    const empty = document.createElement(h1)
    empty.textContent = 'oshibka'
    output.append(empty)
}
  
}
