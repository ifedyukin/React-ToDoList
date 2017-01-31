export function Filter(items, type) {
    let result = [];
    if (type === "active") {
        for (let i = 0; i < items.length; i++) {
            if (!items[i].checked) {
                result.push(items[i]);
            }
        }
    } else if (type === "completed") {
        for (let i = 0; i < items.length; i++) {
            if (items[i].checked) {
                result.push(items[i]);
            }
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            result.push(items[i]);
        }
    }

    return result;
}