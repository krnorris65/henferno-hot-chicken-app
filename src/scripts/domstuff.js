
function makeMenuItemComponent(menuItem){
    return `
        <li><img><h3>${menuItem.name}: ${menuItem.price}</h3><button>order</button></li>
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
        <li><input type="radio" name="heatLevel"><h3>${heatLevel.name}</h3></li>
    `
}

function listHeatItems(heatComponents){
    let menuListEl = document.querySelector("#heat-list")
    heatComponents.forEach(level => {
        menuListEl.innerHTML += makeHeatLevelComponent(level)
    })
}

export {listMenuItems, listHeatItems}