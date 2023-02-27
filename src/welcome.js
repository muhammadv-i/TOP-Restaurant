import { createContent, contentDiv } from "./content.js";

const bg = document.createElement('img');
bg.src = '../assets/grill.jpg';

let content = createContent(
    ['h1', `Our grills taste like chef Slowik's masterpiece. But without all the deaths.`],
    ['p', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos maxime qui aliquid natus impedit vero laborum, incidunt, amet, cumque ut illum officiis pariatur velit rerum dolore architecto. Dolorum, facere rerum.`],
    ['p', `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque veniam quam labore corporis itaque expedita, autem est asperiores voluptates. Eos aperiam consequatur sed numquam tempora corrupti id molestiae, est nisi?`]
    );

export default function add() {
    contentDiv.appendChild(bg);
    content.forEach( element => contentDiv.appendChild(element));
}