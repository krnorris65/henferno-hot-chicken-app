import {getMenuItems, getHeatLevels} from "./api.js"
import {listMenuItems, listHeatItems} from "./domstuff.js"
import "./form.js"

getMenuItems()
.then(listMenuItems)

getHeatLevels()
.then(listHeatItems)
