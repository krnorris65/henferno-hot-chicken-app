import {addOrder} from "./api.js"
let orderBtn = document.querySelector("#order-btn")

orderBtn.addEventListener("click", () => {
    let userName = document.querySelector("#name-input").value

    let selectedMenuItemId = null
    let menuBtns = document.getElementsByName("menu-item")

    let selectedHeatLevelId = null
    let heatBtns = document.getElementsByName("heat")

    menuBtns.forEach(btn => {
        if(btn.checked){
            selectedMenuItemId = parseInt(btn.value)
        }
    })

    heatBtns.forEach(btn => {
        if(btn.checked){
            selectedHeatLevelId = parseInt(btn.value)
        }
    })

    let newOrder = orderFactory(userName, selectedMenuItemId, selectedHeatLevelId)

    addOrder(newOrder)
})

function orderFactory(user, menuId, heatId){
    return {
        user: user,
        menu_itemId: menuId,
        heat_levelId: heatId
    }
}