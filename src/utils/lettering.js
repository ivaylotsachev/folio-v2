const lettering = (node, text) => {
    console.log(node);
    [...text].forEach((ch, index) => {
        const mask = document.createElement('div');
        const char = document.createElement('p');
        const random = Math.floor(Math.random() * text.length);
        const isColor = random === index || random === index + 1 || random === index - 1;

        mask.classList.add('mask');
        char.textContent = ch;

        isColor && char.classList.add('js-color');
        ch === ' ' && mask.classList.add('spacer');

        mask.appendChild(char);
        node.appendChild(mask);
    });
};

export default lettering;