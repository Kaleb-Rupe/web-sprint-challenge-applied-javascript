import axios from "axios";

const Tabs = (topics) => {
  const tabTopics = document.createElement("div");

  tabTopics.classList.add("topics");

  topics.forEach((element) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tabTopics.appendChild(tab);
    tab.textContent = element;
  });

  return tabTopics;
};

const tabsAppender = (selector) => {
  axios
    .get(`http://localhost:5001/api/topics`)
    .then((resp) => {
      document.querySelector(selector).appendChild(Tabs(resp.data.topics));
    })
    .catch((err) => {
      console.error(err);
    });
};

export { Tabs, tabsAppender };
