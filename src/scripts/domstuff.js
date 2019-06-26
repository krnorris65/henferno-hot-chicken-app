
function makeMenuItemComponent(menuItem){
    return `
        <li><img><label for="menu-item--${menuItem.id}"><input id="menu-item--${menuItem.id}"type="radio" name="menu-item" value="${menuItem.id}"><h3>${menuItem.name}: ${menuItem.price}</h3></label></li>
    `
}

function listMenuItems(menuComponents){
    let menuListEl = document.querySelector("#menu-list")
    menuComponents.forEach(item => {
        menuListEl.innerHTML += makeMenuItemComponent(item)
    })
}

function makeHeatLevelComponent(heatLevel){
    return `
        <li><label for="heat-level--${heatLevel.id}"><input id="heat-level--${heatLevel.id}"type="radio" name="heat" value="${heatLevel.id}"><h3>${heatLevel.name}</h3></label></li>
    `
}

function listHeatItems(heatComponents){
    let menuListEl = document.querySelector("#heat-list")
    heatComponents.forEach(level => {
        menuListEl.innerHTML += makeHeatLevelComponent(level)
    })
}

export {listMenuItems, listHeatItems}