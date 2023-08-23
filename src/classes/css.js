import { CssParser, Color } from './css-parser.js';

export default class Css {
    constructor(text) {
        this.selectors = new CssParser(text).parse();

        this.groups = [];
        

        this.groups.push({
            'style': 'common',
            'colors': Css.sortHexColors(this.groupByStyle())
        });

        Color.styles.forEach(style => {
            const strict = style === 'color';

            const temp = this.groupByStyle(style, strict);

            if (temp.length) {
                style = style.replace(/-./g, (match) => match[1].toUpperCase())

                this.groups.push({
                    style,
                    'colors': Css.sortHexColors(temp)
                });
            }            
        });
    }
    
    /**
     * Group colors through selectors.
     * @param {string} style - style name
     * @param {boolean} strict - strict match
     * @returns {array}
     */
    groupByStyle(style, strict = false) {
        let result = [];
        let groups = {};

        this.selectors.forEach(item => {
            item.styles.forEach(s => {
                if (!style || (strict ? s.name === style : s.name.includes(style))) {
                    if (s.color && s.color.hex) {
                        let hex = s.color.hex;

                        if (!groups[hex]) {
                            groups[hex] = {
                                color: hex,
                                items: []
                            };
                        }

                        groups[hex].items.push(item);
                    }
                }
            });
        });

        for (let key in groups) {
            result.push(groups[key]);
        }

        return result;
    }

    /**
     * Sort group colors by color.
     */
    // sortGroupColors() {
    //     this.groupColors.sort((a, b) => {
    //         const colorA = a.color;
    //         const colorB = b.color;
    //         return colorA.localeCompare(colorB);
    //     });
    // }

    static hexToHsv(hex) {
        // Convert HEX to RGB
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
    
        // Convert RGB to HSV
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let d = max - min;
        let h;
        if (d === 0) h = 0;
        else if (max === r) h = (g - b) / d % 6;
        else if (max === g) h = (b - r) / d + 2;
        else if (max === b) h = (r - g) / d + 4;
        let s = max === 0 ? 0 : d / max;
        let v = max;
    
        return [h, s, v];
    }
    
    static sortHexColors(arr) {
        // Sort the array of HEX colors by their hue value
        return arr.sort((a, b) => {
            const colorA = a.color;
            const colorB = b.color;
            return Css.hexToHsv(colorA)[0] - Css.hexToHsv(colorB)[0]
        });
    }    
}

