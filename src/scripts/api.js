function getMenuItems() {
    return fetch("http://localhost:8088/menu_items")
        .then(menuData => menuData.json())
}
function getHeatLevels() {
    return fetch("http://localhost:8088/heat_levels")
        .then(menuData => menuData.json())
}
function addOrder(newOrder) {
    return fetch("http://localhost:8088/orders", {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
    })
}

export { getMenuItems, getHeatLevels, addOrder }
