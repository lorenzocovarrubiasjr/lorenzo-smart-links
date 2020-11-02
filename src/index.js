import "./styles.scss";

var vid = document.getElementById("videoBackground");
vid.playbackRate = 0.5;

const links = [
  { text: "Amazon Clone", link: "https://www.purefire.world" },
  { text: "Oil & Gas Dashboard", link: "https://www.spotify.com/witeout777" }
];

let linksDiv = document.createElement("div");

for (let i = 0; i < links.length; i++) {
  let listItemLink = document.createElement("a");
  listItemLink.href = links[i].link;

  let listItem = document.createElement("div");

  listItemLink.appendChild(listItem);

  listItem.innerHTML = links[i].text;
  listItem.className = "linkBox";

  linksDiv.appendChild(listItemLink);
}

document.getElementById("listContainer").appendChild(linksDiv);
