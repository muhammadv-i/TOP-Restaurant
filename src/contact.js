import { createContent, contentDiv } from "./content.js";

let content = createContent(
    ['h1', 'Contact us'], 
    ['p', 'Phone: 18004538135'], 
    ['p', 'Email: email@example.com'], 
    ['p', 'Address: 124142 Maine Rd., Maine Island']
    );

export default function add() {
    content.forEach( element => contentDiv.appendChild(element));
}
