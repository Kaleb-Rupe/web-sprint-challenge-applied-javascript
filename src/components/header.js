const Header = (title, date, temp) => {
  const header = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  header.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");

  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  return header;
};

const headerAppender = (selector) => {
  document
    .querySelector(selector)
    .appendChild(Header("BloomTech Times", "January 6, 2021", "45°"));
};

export { Header, headerAppender };
