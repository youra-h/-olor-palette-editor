import CssParser from './css-parser.js';

export default class Css {
    constructor(text) {
        this.selectors = new CssParser(text).parse();

        this.groupColors = this.getGroupColors();

        this.sortHexColors();
    }
    
    /**
     * Group colors through selectors.
     * @returns {array}
     */
    getGroupColors() {
        const result = [];
        const colors = [];
        const selectors = this.selectors;

        selectors.forEach(item => {
            item.styles.forEach(style => {
                if (style.color) {
                    const color = style.color.hex;
                    if (!colors.includes(color)) {
                        colors.push(color);
                    }
                }
            });
        });

        colors.forEach(color => {
            const link = [];
            selectors.forEach(selector => {
                selector.styles.forEach(style => {
                    if (style.color) {
                        if (style.color.hex === color && !link.includes(selector)) {
                            link.push(selector);
                        }
                    }
                });
            });
            result.push({ color, link });
        });

        return result;
    }

    /**
     * Sort group colors by color.
     */
    sortGroupColors() {
        this.groupColors.sort((a, b) => {
            const colorA = a.color;
            const colorB = b.color;
            return colorA.localeCompare(colorB);
        });
    }

    hexToHsv(hex) {
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
    
    sortHexColors() {
        // Sort the array of HEX colors by their hue value
        return this.groupColors.sort((a, b) => {
            const colorA = a.color;
            const colorB = b.color;
            return this.hexToHsv(colorA)[0] - this.hexToHsv(colorB)[0]
        });
    }
    

}

