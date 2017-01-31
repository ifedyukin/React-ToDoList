export function Search(items, search) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].value.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            result.push(items[i]);
        }
    }

    return result;
}