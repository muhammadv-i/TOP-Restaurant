import loadPage from './content.js';
import menu from './menu.js';

loadPage();

const tabs = document.createElement('div');
tabs.id = 'tabs';
let current;

const content = document.querySelector('#content');

document.body.insertBefore(tabs, content);

function createTab(name) {
    name = name.toLowerCase();
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.dataset.tab = name;
    tab.innerText = name;

    tabs.appendChild(tab);

    return tab;
}

current = createTab('Welcome!');
current.classList.add('active');
createTab('Menu');
createTab('Contact');

for (let i = 0; i < tabs.childElementCount; i++) {
    let tab = tabs.children[i];
    tab.addEventListener("click", (e) => {
        console.log(`current: `, current);
        console.log(`target: `, e.target);
        if (e.target !== current) {
            current = e.target;
            e.target.classList.add('active');
            
            content.innerHTML = '';
            switch (e.target.dataset.tab) {
                case 'menu': 
                    menu();
            }
            
            for (tab of tabs.children) {
                if (tab !== current)
                    tab.classList.remove('active')
            }
        }
    });
}