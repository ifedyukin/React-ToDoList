export function Search(items, search) {
    let result = [];
    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].value.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            result.push(items[i]);
        }
    }

    return result;
}