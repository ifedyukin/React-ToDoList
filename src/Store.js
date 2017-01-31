export function storeGet() {
    return JSON.parse(localStorage.getItem("Items"));
}

export function storeSave(items) {
    localStorage.setItem("Items", JSON.stringify(items));
}