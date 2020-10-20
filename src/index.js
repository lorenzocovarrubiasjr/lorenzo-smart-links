import "./styles.scss";

var vid = document.getElementById("videoBackground");
vid.playbackRate = 0.5;

const links = [
  { text: "Pure Fire Ent.", link: "https://www.purefire.world" },
  { text: "Pure Fire Merch", link: "https://www.spotify.com/witeout777" },
  { text: "1stRdKo Clothing", link: "https://www.1strdko.com" },
  { text: "Kounter Clothing", link: "https://www.kounterclothing.com" },
  { text: "Red Caves Real Estate", link: "https://www.kounterclothing.com" }
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
