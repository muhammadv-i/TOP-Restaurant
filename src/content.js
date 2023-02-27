import welcome from './welcome.js';

export const contentDiv = document.querySelector("#content");

export default function loadPage() {
    welcome();
}

export function createContent(...elements) {
    let content = elements.map( element => {
        let el = document.createElement(`${element[0]}`);
        el.innerText = element[1];

        return el;
    })

    return content;
}