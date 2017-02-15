export function removeSpaces(string) {
        return string.replace(/\s{2,}/g, ' ');
}

export function isBlank(string) {
        string = removeSpaces(string);

        return string !== ' ' && string !== '';
    }