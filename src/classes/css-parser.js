class Color {
    static styles = [
        "color",
        "background-color",
        "border-color",
        "outline-color",
        "text-decoration-color",
        "text-shadow",
        "box-shadow",
        "caret-color",
        "background",
        "border",
        "outline",
        "text-decoration"
    ]

    static names = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen"
    ]

    constructor(color, backgroundColorAlphaChannel = "FFFFFF") {
        this.value = color;
        this.hex = Color.find(color, true, backgroundColorAlphaChannel);
    }

    static has(name) {
        return Color.styles.includes(name);
    }

    static isHex(value) {
        return value.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
    }

    static isRGB(value) {
        return value.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[\d.]+\s*)?\)/);
    }

    static isName(value) {
        const regex = new RegExp(`\\b(${Color.names.join('|')})\\b`, 'gi');
        return value.match(regex);
    }

    static find(value, convertToHex = false, backgroundColorAlphaChannel = "FFFFFF") {
        // Проверяем, содержит ли строка значение цвета в формате имени цвета
        let match = Color.isName(value);
        if (match) {
            let color = match[0];
            return color;
        }

        // Проверяем, содержит ли строка значение цвета в формате #RRGGBB или #RGB
        match = Color.isHex(value);
        if (match) {
            let color = match[0];

            if (convertToHex) {
                // Если цвет задан в формате #RGB, преобразуем его в формат #RRGGBB
                if (color.length === 4) {
                    color = ("#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]);
                }
                color = color.toLowerCase();
            }

            return color;
        }

        // Проверяем, содержит ли строка значение цвета в формате rgb(R, G, B) или rgba(R, G, B, A)
        match = Color.isRGB(value);
        if (match) {
            let color = match[0];

            if (convertToHex) {
                // Извлекаем значения R, G и B из строки
                let rgba = color.match(/[\d.]+/g).map(Number);
                // Преобразуем значения R, G и B в шестнадцатеричный формат и склеиваем их
                let rgb = rgba.slice(0, 3).map(x => x.toString(16).padStart(2, "0")).join("");
                // Если задано значение прозрачности, смешиваем цвет с цветом фона
                if (rgba.length === 4) {
                    const opacity = rgba[3];
                    const foreground = rgb.match(/.{2}/g).map(x => parseInt(x, 16));
                    const background = backgroundColorAlphaChannel.match(/.{2}/g).map(x => parseInt(x, 16));

                    rgb = foreground
                        .map((c, i) => Math.round(opacity * c + (1 - opacity) * background[i]))
                        .map(x => x.toString(16).padStart(2, "0")).join("");
                }
                color = ("#" + rgb).toLowerCase();
            }

            // Преобразуем цвет в верхний регистр и возвращаем его
            return color;
        }

        // Если ни одно из условий не выполнено, возвращаем null
        return null;
    }
}

class Style {
    constructor(text, line) {
        this._text = text;

        this.line = line;
        this.name = '';
        this.value = '';

        this.parse();
        this.parseColor();
    }

    /**
     * Parsing style
    */
    parse() {
        let parts = this._text.split(':').map(part => part.trim());
        this.name = parts[0];
        if (!parts[1]) {
            // eslint-disable-next-line no-debugger
            debugger;
        }
        this.value = parts[1].split(';')[0].trim();
    }

    /**
     * Parsing color
     */
    parseColor() {
        if (Color.has(this.name)) {
            const color = Color.find(this.value);
            if (color) {
                this.color = new Color(color);
            }
        }
    }
}

class Selector {
    constructor() {
        this._text = '';
        this.names = [];
        this.styles = [];
        this.endBlock = false;
    }

    /**
     * @param {string} value
     */
    set text(value) {
        if (value.endsWith('{')) {
            value = value.slice(0, -1).trim();
        }

        if (value.length === 0) return;

        this._text += value;
        this.names = this._text.split(',').map(part => part.trim());
    }

    get text() {
        return this._text;
    }

    /**
     * @param {string} text
     * @param {number} line
     * @returns {Style}
    */
    addStyle(text, line) {
        const style = new Style(text, line);
        this.styles.push(style);
    }

    end() {
        this.endBlock = true;
    }
}

export default class CssParser {
    constructor(cssText) {
        this.lines = cssText.split('\n');
        this._isSelector = false;
        this._isStyle = false;
    }

    get isSelector() {
        return this._isSelector;
    }

    set isSelector(value) {
        this._isSelector = value;
        if (value) this.isStyle = false;
    }

    get isStyle() {
        return this._isStyle;
    }

    set isStyle(value) {
        this._isStyle = value;
        if (value) this.isSelector = false;
    }

    parse() {
        let blocks = [];
        let currentSelector;

        let isComment = false;
        let isStyle = false;

        let itemIndex = 0;

        for (let i = 0; i <= this.lines.length - 1; i++) {
            let line = this.lines[i].trim();

            if (line.length === 0) continue;

            if (line.startsWith('/*')) {
                isComment = true;
            }

            if (line.endsWith('*/')) {
                isComment = false;
                continue;
            }

            if (isComment) continue;

            if (line.startsWith('@media') || line.startsWith('@keyframes') || line.startsWith('@-webkit-keyframes')) continue;

            if (!currentSelector || currentSelector.endBlock) {
                currentSelector = new Selector();
                currentSelector.itemIndex = itemIndex++;
                blocks.push(currentSelector);
            }

            if (isStyle) {
                if (line.endsWith('}')) {
                    currentSelector.end();
                    isStyle = false;
                } else {
                    currentSelector.addStyle(line, i);
                }
            } else {
                if (line.endsWith('}')) continue;

                currentSelector.text = line;
            }

            if (line.endsWith('{')) {
                isStyle = true;
            }
        }

        return blocks;
    }
}