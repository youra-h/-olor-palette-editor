import Css from "./css";

export default class Item {
    constructor(cssFile, text) {
        this.file = cssFile;
        this.fileName = cssFile.name;
        this.text = text.split('\n').map(line => {
            return {
                text: line,
                remove: false
            }
        });
        this.css = new Css(text);

        for (let selector of this.css.selectors) {
            for (let style of selector.styles) {
                style.addObserver(this);
            }
            selector.addObserver(this);
        }
    }

    update(style) {
        const newValue = `var(${style.color.newValue})`;

        this.text[style.line - 1].newText = this.text[style.line - 1].text.replace(style.color.value, newValue);
    }

    remove(selector) {
        console.log(selector);
        for (let i = selector.line - 1; i < this.text.length; i++) {
            this.text[i].remove = selector.remove;

            if (this.text[i].text.includes('}')) {
                break;
            }
        }
    }

    getText() {
        // return this.text.map(line => {
        //     const text = line.newText ? line.newText : line.text;
        //     return line.remove ? '' : text;
        // }).join('\n').trim();

        let result = '';
        let wasRemoved = false;
        for (let line of this.text) {
            const text = line.newText ? line.newText : line.text;
            if (line.remove) {
                wasRemoved = true;
            } else if (wasRemoved && text.trim() === '') {
                wasRemoved = false;
            } else {
                result += text + '\n';
                wasRemoved = false;
            }
        }

        return result.trim();
    }
}