const contentDiv = document.querySelector("#content");

function createTab(name) {
    const tab = document.createElement('div');
    tab.tagName = name;
    contentDiv.appendChild(tab);

    return tab;
}

const bg = document.createElement('img');
bg.src = '../assets/grill.jpg';

const heading = document.createElement('h1');
heading.textContent = `Our grills taste like chef Slowik's masterpiece. But without all the deaths.`;

const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos maxime qui aliquid natus impedit vero laborum, incidunt, amet, cumque ut illum officiis pariatur velit rerum dolore architecto. Dolorum, facere rerum.`;
p2.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque veniam quam labore corporis itaque expedita, autem est asperiores voluptates. Eos aperiam consequatur sed numquam tempora corrupti id molestiae, est nisi?`;

contentDiv.appendChild(bg);
contentDiv.appendChild(heading);
contentDiv.appendChild(p1);
contentDiv.appendChild(p2);

const hh = document.createElement('h1');
hh.innerText = `Welcome to chef Slowik's Masterpiece!`;

createTab('Menu').append(hh, document.createElement('p'));