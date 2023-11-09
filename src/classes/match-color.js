export default class MatchColor {
    constructor() {
        // При инициализации класса загружаем элементы из localStorage
        this.items = JSON.parse(localStorage.getItem('match-color')) || {};
    }

    indexOf(style, hex) {
        return this.items[style] ? this.items[style].findIndex(i => i.color.hex === hex) : -1;
    }

    has(style, hex) {
        return this.items[style] && this.items[style].some(i => i.color.hex === hex);
    }

    findMatchVarAndColor(style, hex, variableName) {
        const index = this.indexOf(style, hex);

        if (index === -1) {
            return true;
        }

        return this.items[style][index].color.newValue === variableName;
    }

    getValue(style, hex) {
        const index = this.indexOf(style, hex);
        return index !== -1 ? this.items[style][index].color.newValue : false;
    }

    add(style, item) {
        const find = this.has(style, item.color.hex);
        if (!find) {            
            const itemToStore = { value: item.value, color: item.color, line: item.line, newValue: item.newValue };

            if (this.items[style] === undefined) {
                this.items[style] = [];
            }

            this.items[style].push(itemToStore);

            // Сохраняем элементы в localStorage при каждом добавлении
            localStorage.setItem('match-color', JSON.stringify(this.items));
        } else {
            console.log(`Такой цвет уже есть! ${item.value}`);
        }
    }

    remove(style, item) {
        const index = this.indexOf(style, item);
        if (index !== -1) {
            this.items[style].splice(index, 1);
            // Обновляем localStorage после удаления элемента
            localStorage.setItem('match-color', JSON.stringify(this.items));
        }
    }
}