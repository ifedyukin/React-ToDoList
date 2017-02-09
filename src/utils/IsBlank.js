export function isBlank(string) {
        string = string.replace(/\s{2,}/g, ' ');

        return string !== ' ' && string !== '';
    }