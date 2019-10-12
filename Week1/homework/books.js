'use strict';

const books = [
  {
    title: "Anna Karenina",
    alreadyRead: true,
    author: "Leo Tolstoy",
    url: "https://images-eu.ssl-images-amazon.com/images/I/512qha4%2BkCL.jpg"
  },
  {
    title: "Madame Bovary",
    alreadyRead: false,
    author: "Gustave Flaubert",
    url:
      "https://almabooks.com/wp-content/uploads/2016/10/9781847493224-600x926.jpg"
  },
  {
    title: "War and Peace",
    alreadyRead: true,
    author: "Leo Tolstoy",
    url: "https://images1.penguinrandomhouse.com/cover/9781101003831"
  },
  {
    title: "The Great Gatsby",
    alreadyRead: false,
    author: "F. Scott Fitzgerald",
    url:
      "https://i.etsystatic.com/9414719/r/il/2232e6/693529905/il_794xN.693529905_38fw.jpg"
  },
  {
    title: "Lolita",
    alreadyRead: false,
    author: "Vladimir Nabokov",
    url:
      "https://i.pinimg.com/474x/58/9c/6e/589c6e1d22905e1b35822c38ba8f8927--lolita-book-vladimir-nabokov.jpg"
  }
];

const root = document.getElementById("root");

for (let index = 0; index < books.length; index++) {
  const ul = document.createElement("ul");

  const element = books[index];
  if (element.alreadyRead === true) {
    ul.setAttribute("class", "read");
  } else {
    ul.setAttribute("class", "unread");
  }

  const li_1 = document.createElement("li");
  li_1.textContent = element.title;
  ul.appendChild(li_1);

  const li_2 = document.createElement("li");
  li_2.textContent = element.author;
  ul.appendChild(li_2);

  const li_3 = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", element.url);
  img.setAttribute("alt", element.title + "book");
  li_3.appendChild(img);
  ul.appendChild(li_3);
  root.appendChild(ul);
}

function changeBGColor() {
  const read = document.getElementsByClassName("read");
  for (i = 0; i < read.length; i++) {
    read[i].style.backgroundColor = "green";
  }
  const unread = document.getElementsByClassName("unread");
  for (i = 0; i < unread.length; i++) {
    unread[i].style.backgroundColor = "red";
  }
}

changeBGColor();
