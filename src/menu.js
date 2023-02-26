function dish(name, parent) {
    const dish = document.createElement('div');
    const dname = document.createElement('h3');
    dname.textContent = name;
    const desc = document.createElement('p');
    desc.textContent = 'The signature dish. Handmade and cooked to perfection by chef Slowik himself.';

    dish.append(dname, desc);

    parent.appendChild(dish);
}

export default function add() {
    const div = document.createElement('div');
    div.id = 'menu';
    
    dish('Lazaro Fettucini', div);
    dish('Shrimp Regalia', div);
    dish('Epic Fortnite Gamer Girl', div);

    document.querySelector('#content').appendChild(div);
}