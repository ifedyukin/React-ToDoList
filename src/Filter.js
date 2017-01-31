export function Filter(items, type) {
    let result = [];
    if (type === "active") {
        for (let i = items.length - 1; i >= 0; i--) {
            if (!items[i].checked) {
                result.push(items[i]);
            }
        }
    } else if (type === "completed") {
        for (let i = items.length - 1; i >= 0; i--) {
            if (items[i].checked) {
                result.push(items[i]);
            }
        }
    } else {
        for (let i = items.length - 1; i >= 0; i--) {
            result.push(items[i]);
        }
    }

    return result;
}