class Color {
    static styles = [
        "color",
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
        {
            "color": "AliceBlue",
            "hex": "#f0f8ff"
        },
        {
            "color": "AntiqueWhite",
            "hex": "#faebd7"
        },
        {
            "color": "Aqua",
            "hex": "#00ffff"
        },
        {
            "color": "Aquamarine",
            "hex": "#7fffd4"
        },
        {
            "color": "Azure",
            "hex": "#f0ffff"
        },
        {
            "color": "Beige",
            "hex": "#f5f5dc"
        },
        {
            "color": "Bisque",
            "hex": "#ffe4c4"
        },
        {
            "color": "Black",
            "hex": "#000000"
        },
        {
            "color": "BlanchedAlmond",
            "hex": "#ffebcd"
        },
        {
            "color": "Blue",
            "hex": "#0000ff"
        },
        {
            "color": "BlueViolet",
            "hex": "#8a2be2"
        },
        {
            "color": "Brown",
            "hex": "#a52a2a"
        },
        {
            "color": "BurlyWood",
            "hex": "#deb887"
        },
        {
            "color": "CadetBlue",
            "hex": "#5f9ea0"
        },
        {
            "color": "Chartreuse",
            "hex": "#7fff00"
        },
        {
            "color": "Chocolate",
            "hex": "#d2691e"
        },
        {
            "color": "Coral",
            "hex": "#ff7f50"
        },
        {
            "color": "CornflowerBlue",
            "hex": "#6495ed"
        },
        {
            "color": "Cornsilk",
            "hex": "#fff8dc"
        },
        {
            "color": "Crimson",
            "hex": "#dc143c"
        },
        {
            "color": "Cyan",
            "hex": "#00ffff"
        },
        {
            "color": "DarkBlue",
            "hex": "#00008b"
        },
        {
            "color": "DarkCyan",
            "hex": "#008b8b"
        },
        {
            "color": "DarkGoldenRod",
            "hex": "#b8860b"
        },
        {
            "color": "DarkGray",
            "hex": "#a9a9a9"
        },
        {
            "color": "DarkGrey",
            "hex": "#a9a9a9"
        },
        {
            "color": "DarkGreen",
            "hex": "#006400"
        },
        {
            "color": "DarkKhaki",
            "hex": "#bdb76b"
        },
        {
            "color": "DarkMagenta",
            "hex": "#8b008b"
        },
        {
            "color": "DarkOliveGreen",
            "hex": "#556b2f"
        },
        {
            "color": "DarkOrange",
            "hex": "#ff8c00"
        },
        {
            "color": "DarkOrchid",
            "hex": "#9932cc"
        },
        {
            "color": "DarkRed",
            "hex": "#8b0000"
        },
        {
            "color": "DarkSalmon",
            "hex": "#e9967a"
        },
        {
            "color": "DarkSeaGreen",
            "hex": "#8fbc8f"
        },
        {
            "color": "DarkSlateBlue",
            "hex": "#483d8b"
        },
        {
            "color": "DarkSlateGray",
            "hex": "#2f4f4f"
        },
        {
            "color": "DarkSlateGrey",
            "hex": "#2f4f4f"
        },
        {
            "color": "DarkTurquoise",
            "hex": "#00ced1"
        },
        {
            "color": "DarkViolet",
            "hex": "#9400d3"
        },
        {
            "color": "DeepPink",
            "hex": "#ff1493"
        },
        {
            "color": "DeepSkyBlue",
            "hex": "#00bfff"
        },
        {
            "color": "DimGray",
            "hex": "#696969"
        },
        {
            "color": "DimGrey",
            "hex": "#696969"
        },
        {
            "color": "DodgerBlue",
            "hex": "#1e90ff"
        },
        {
            "color": "FireBrick",
            "hex": "#b22222"
        },
        {
            "color": "FloralWhite",
            "hex": "#fffaf0"
        },
        {
            "color": "ForestGreen",
            "hex": "#228b22"
        },
        {
            "color": "Fuchsia",
            "hex": "#ff00ff"
        },
        {
            "color": "Gainsboro",
            "hex": "#dcdcdc"
        },
        {
            "color": "GhostWhite",
            "hex": "#f8f8ff"
        },
        {
            "color": "Gold",
            "hex": "#ffd700"
        },
        {
            "color": "GoldenRod",
            "hex": "#daa520"
        },
        {
            "color": "Gray",
            "hex": "#808080"
        },
        {
            "color": "Grey",
            "hex": "#808080"
        },
        {
            "color": "Green",
            "hex": "#008000"
        },
        {
            "color": "GreenYellow",
            "hex": "#adff2f"
        },
        {
            "color": "HoneyDew",
            "hex": "#f0fff0"
        },
        {
            "color": "HotPink",
            "hex": "#ff69b4"
        },
        {
            "color": "IndianRed",
            "hex": "#cd5c5c"
        },
        {
            "color": "Indigo",
            "hex": "#4b0082"
        },
        {
            "color": "Ivory",
            "hex": "#fffff0"
        },
        {
            "color": "Khaki",
            "hex": "#f0e68c"
        },
        {
            "color": "Lavender",
            "hex": "#e6e6fa"
        },
        {
            "color": "LavenderBlush",
            "hex": "#fff0f5"
        },
        {
            "color": "LawnGreen",
            "hex": "#7cfc00"
        },
        {
            "color": "LemonChiffon",
            "hex": "#fffacd"
        },
        {
            "color": "LightBlue",
            "hex": "#add8e6"
        },
        {
            "color": "LightCoral",
            "hex": "#f08080"
        },
        {
            "color": "LightCyan",
            "hex": "#e0ffff"
        },
        {
            "color": "LightGoldenRodYellow",
            "hex": "#fafad2"
        },
        {
            "color": "LightGray",
            "hex": "#d3d3d3"
        },
        {
            "color": "LightGrey",
            "hex": "#d3d3d3"
        },
        {
            "color": "LightGreen",
            "hex": "#90ee90"
        },
        {
            "color": "LightPink",
            "hex": "#ffb6c1"
        },
        {
            "color": "LightSalmon",
            "hex": "#ffa07a"
        },
        {
            "color": "LightSeaGreen",
            "hex": "#20b2aa"
        },
        {
            "color": "LightSkyBlue",
            "hex": "#87cefa"
        },
        {
            "color": "LightSlateGray",
            "hex": "#778899"
        },
        {
            "color": "LightSlateGrey",
            "hex": "#778899"
        },
        {
            "color": "LightSteelBlue",
            "hex": "#b0c4de"
        },
        {
            "color": "LightYellow",
            "hex": "#ffffe0"
        },
        {
            "color": "Lime",
            "hex": "#00ff00"
        },
        {
            "color": "LimeGreen",
            "hex": "#32cd32"
        },
        {
            "color": "Linen",
            "hex": "#faf0e6"
        },
        {
            "color": "Magenta",
            "hex": "#ff00ff"
        },
        {
            "color": "Maroon",
            "hex": "#800000"
        },
        {
            "color": "MediumAquaMarine",
            "hex": "#66cdaa"
        },
        {
            "color": "MediumBlue",
            "hex": "#0000cd"
        },
        {
            "color": "MediumOrchid",
            "hex": "#ba55d3"
        },
        {
            "color": "MediumPurple",
            "hex": "#9370db"
        },
        {
            "color": "MediumSeaGreen",
            "hex": "#3cb371"
        },
        {
            "color": "MediumSlateBlue",
            "hex": "#7b68ee"
        },
        {
            "color": "MediumSpringGreen",
            "hex": "#00fa9a"
        },
        {
            "color": "MediumTurquoise",
            "hex": "#48d1cc"
        },
        {
            "color": "MediumVioletRed",
            "hex": "#c71585"
        },
        {
            "color": "MidnightBlue",
            "hex": "#191970"
        },
        {
            "color": "MintCream",
            "hex": "#f5fffa"
        },
        {
            "color": "MistyRose",
            "hex": "#ffe4e1"
        },
        {
            "color": "Moccasin",
            "hex": "#ffe4b5"
        },
        {
            "color": "NavajoWhite",
            "hex": "#ffdead"
        },
        {
            "color": "Navy",
            "hex": "#000080"
        },
        {
            "color": "OldLace",
            "hex": "#fdf5e6"
        },
        {
            "color": "Olive",
            "hex": "#808000"
        },
        {
            "color": "OliveDrab",
            "hex": "#6b8e23"
        },
        {
            "color": "Orange",
            "hex": "#ffa500"
        },
        {
            "color": "OrangeRed",
            "hex": "#ff4500"
        },
        {
            "color": "Orchid",
            "hex": "#da70d6"
        },
        {
            "color": "PaleGoldenRod",
            "hex": "#eee8aa"
        },
        {
            "color": "PaleGreen",
            "hex": "#98fb98"
        },
        {
            "color": "PaleTurquoise",
            "hex": "#afeeee"
        },
        {
            "color": "PaleVioletRed",
            "hex": "#db7093"
        },
        {
            "color": "PapayaWhip",
            "hex": "#ffefd5"
        },
        {
            "color": "PeachPuff",
            "hex": "#ffdab9"
        },
        {
            "color": "Peru",
            "hex": "#cd853f"
        },
        {
            "color": "Pink",
            "hex": "#ffc0cb"
        },
        {
            "color": "Plum",
            "hex": "#dda0dd"
        },
        {
            "color": "PowderBlue",
            "hex": "#b0e0e6"
        },
        {
            "color": "Purple",
            "hex": "#800080"
        },
        {
            "color": "RebeccaPurple",
            "hex": "#663399"
        },
        {
            "color": "Red",
            "hex": "#ff0000"
        },
        {
            "color": "RosyBrown",
            "hex": "#bc8f8f"
        },
        {
            "color": "RoyalBlue",
            "hex": "#4169e1"
        },
        {
            "color": "SaddleBrown",
            "hex": "#8b4513"
        },
        {
            "color": "Salmon",
            "hex": "#fa8072"
        },
        {
            "color": "SandyBrown",
            "hex": "#f4a460"
        },
        {
            "color": "SeaGreen",
            "hex": "#2e8b57"
        },
        {
            "color": "SeaShell",
            "hex": "#fff5ee"
        },
        {
            "color": "Sienna",
            "hex": "#a0522d"
        },
        {
            "color": "Silver",
            "hex": "#c0c0c0"
        },
        {
            "color": "SkyBlue",
            "hex": "#87ceeb"
        },
        {
            "color": "SlateBlue",
            "hex": "#6a5acd"
        },
        {
            "color": "SlateGray",
            "hex": "#708090"
        },
        {
            "color": "SlateGrey",
            "hex": "#708090"
        },
        {
            "color": "Snow",
            "hex": "#fffafa"
        },
        {
            "color": "SpringGreen",
            "hex": "#00ff7f"
        },
        {
            "color": "SteelBlue",
            "hex": "#4682b4"
        },
        {
            "color": "Tan",
            "hex": "#d2b48c"
        },
        {
            "color": "Teal",
            "hex": "#008080"
        },
        {
            "color": "Thistle",
            "hex": "#d8bfd8"
        },
        {
            "color": "Tomato",
            "hex": "#ff6347"
        },
        {
            "color": "Turquoise",
            "hex": "#40e0d0"
        },
        {
            "color": "Violet",
            "hex": "#ee82ee"
        },
        {
            "color": "Wheat",
            "hex": "#f5deb3"
        },
        {
            "color": "White",
            "hex": "#ffffff"
        },
        {
            "color": "WhiteSmoke",
            "hex": "#f5f5f5"
        },
        {
            "color": "Yellow",
            "hex": "#ffff00"
        },
        {
            "color": "YellowGreen",
            "hex": "#9acd32"
        }
    ]

    constructor(color, backgroundColorAlphaChannel = "FFFFFF") {
        this.value = color;
        this.hex = Color.find(color, true, backgroundColorAlphaChannel);
    }

    static has(name) {
        return Color.styles.some(style => name.includes(style));
    }

    static isHex(value) {
        return value.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
    }

    static isRGB(value) {
        return value.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[\d.]+\s*)?\)/);
    }

    static isName(value) {
        const regex = new RegExp(`\\b(${Color.names.map(x => x.color).join('|')})\\b`, 'gi');
        return value.match(regex);
    }

    static nameToHex(name) {
        const colorObj = Color.names.find(x => x.color.toLowerCase() === name.toLowerCase());
        return colorObj ? colorObj.hex : null;
    }

    static find(value, convertToHex = false, backgroundColorAlphaChannel = "FFFFFF") {
        // Проверяем, содержит ли строка значение цвета в формате имени цвета
        let match = Color.isName(value);
        if (match) {
            let color = match[0];

            if (convertToHex) {
                color = Color.nameToHex(color);
            }

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

        const names = this._text.split(',').map(part => part.trim());

        this.names = names.map(text => {
            return {
                text,
                'classes': Selector.parseCssClasses(text),
                files: []
            }            
        });
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

    static parseCssClasses(str) {
        let classes = [];
        let regex = /[\.#]([a-zA-Z0-9-]+)/g;
        let match;

        while ((match = regex.exec(str)) !== null) {
            let className = match[1];
            if (className && !classes.includes(className)) {
                classes.push(className);
            }
        }

        return classes;
    }
}

class CssParser {
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

export {
    CssParser,
    Color
}