/**
 * A class for parsing CSS text and extracting color variables.
 */
export default class ParseTheme {
    lines = []
    tolerance = 0.05
    colors = {}
    groups = {}

    /**
     * Gets the color comparison tolerance value.
     * @return {number} The color comparison tolerance value.
     */
    get tolerance() {
        return this.tolerance;
    }

    /**
     * Sets the color comparison tolerance value.
     * @param {number} value - The new color comparison tolerance value.
     */
    set tolerance(value) {
        this.tolerance = value;
    }

    /**
     * Parses the CSS text and extracts color variables.
     * @param {string} cssText - The CSS text to parse.
     */
    parse(cssText) {
        this.lines = cssText.split('\n');

        this.colors = {}
        this.groups = {}

        let variableRegex = /--[\w-]+:\s*[^;]+;/g;

        for (let i = 0; i < this.lines.length; i++) {
            let match = this.lines[i].match(variableRegex);

            if (match) {
                for (let j = 0; j < match.length; j++) {
                    const parts = match[j].split(':');
                    const name = parts[0].trim();
                    const value = parts[1].slice(0, -1).trim();

                    // Разбиваем ключ на группу и тип
                    const keyParts = name.match(/--theme-(\w+--\w+)-(\w+)/);
                    if (keyParts) {
                        const group = keyParts[1];
                        const type = keyParts[2];

                        // Добавляем в 'all'
                        if (!this.colors['all']) this.colors['all'] = [];
                        this.colors['all'].push({ name, value });

                        // Добавляем в 'bg', 'on', 'border' и т.д.
                        if (!this.colors[type]) this.colors[type] = [];
                        this.colors[type].push({ name, value });

                        // Добавляем в 'primary', 'secondary' и т.д.
                        if (!this.groups[group]) this.groups[group] = {};
                        if (!this.groups[group][type]) this.groups[group][type] = [];
                        this.groups[group][type].push({ name, value });
                    }
                }
            }
        }
    }

    /**
     * Choose a list of colors corresponding to the name of the style
     * @param {String} styleName 
     * @returns {Array}
     */
    getColors(styleName) {
        if (!this.colors.all) {
            return [];
        }

        switch (styleName) {
            case 'common':
                return this.colors.all;
            case 'background':
                return this.colors.bg;
            case 'color':
                return this.colors.on;
            case 'border':
                return this.colors.border;
            default:
                return this.colors.all;
        }
    }

    /**
     * Finds a color variable that matches the specified color.
     * @param {String} styleName 
     * @param {string} color - The color to match.
     * @return {object} The color variable that matches the specified color, or undefined if no match is found.
     */
    findColor(styleName, color) {
        const colors = this.getColors(styleName);
        return colors.find(item => this.compareColors(color, item.value));
    }

    findColorByName(styleName, name) {
        const colors = this.getColors(styleName);
        return colors.find(item => item.name === name);
    }

    /**
     * Compares two colors and returns true if they are within the color comparison tolerance.
     * @param {string} color1 - The first color to compare.
     * @param {string} color2 - The second color to compare.
     * @return {boolean} True if the colors are within the color comparison tolerance, false otherwise.
     */
    compareColors(color1, color2) {
        const parseColor = (color) => {
            if (color.startsWith('#')) {
                color = color.slice(1);
                if (color.length === 3) {
                    color = color.split('').map(c => c + c).join('');
                }
                return color.match(/.{2}/g).map(c => parseInt(c, 16));
            } else if (color.startsWith('rgb')) {
                return color.match(/\d+/g).map(Number);
            }
        }

        let c1 = parseColor(color1);
        let c2 = parseColor(color2);

        let diff = c1.reduce((acc, cur, i) => acc + Math.abs(cur - c2[i]) / 255, 0) / 3;

        // if (diff <= this.tolerance) {
        //     debugger;
        // }

        return diff <= this.tolerance;
    }
}