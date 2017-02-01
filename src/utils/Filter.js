export function Filter(items, type) {
    let result = [];
    switch (type) {
        case "active":
            for (let i = 0; i < items.length; i++) {
                if (!items[i].checked) {
                    result.push(items[i]);
                }
            }
            break;
        case "completed":
            for (let i = 0; i < items.length; i++) {
                if (items[i].checked) {
                    result.push(items[i]);
                }
            }
            break;
        default:
            for (let i = 0; i < items.length; i++) {
                result.push(items[i]);
            }
            break;
    }

    return result;
}