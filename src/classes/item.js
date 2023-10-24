import Css from "./css";

export default class Item {
    constructor(cssFile, text) {
        this.file = cssFile;
        this.fileName = cssFile.name;
        this.text = text.split('\n');
        this.css = new Css(text);

        for (let selector of this.css.selectors) {
            for (let style of selector.styles) {
                style.addObserver(this);
            }
        }
    }

    update(style) {        
        const newValue = `var(${style.color.newValue})`;

        this.text[style.line - 1] = this.text[style.line - 1].replace(style.color.value, newValue);
    }
}