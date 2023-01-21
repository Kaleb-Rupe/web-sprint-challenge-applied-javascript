import axios from "axios";

// const entryPoint = document.querySelector(".cards-container");

const Card = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorPhoto = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName);

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  card.addEventListener("click", () => {
    console.log(headline.textContent);
  });

  return card;
};

const cardAppender = (selector) => {
  axios
    .get("http://localhost:5001/api/articles")
    .then((resp) => {
      resp.data.articles.javascript.forEach((cardInfo) => {
        document.querySelector(selector).appendChild(Card(cardInfo));
      });
      resp.data.articles.bootstrap.forEach((cardInfo) => {
        document.querySelector(selector).appendChild(Card(cardInfo));
      });
      resp.data.articles.jquery.forEach((cardInfo) => {
        document.querySelector(selector).appendChild(Card(cardInfo));
      });
      resp.data.articles.technology.forEach((cardInfo) => {
        document.querySelector(selector).appendChild(Card(cardInfo));
      });
      resp.data.articles.node.forEach((cardInfo) => {
        document.querySelector(selector).appendChild(Card(cardInfo));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
