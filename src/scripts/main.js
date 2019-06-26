import {getMenuItems, getHeatLevels} from "./api.js"
import {listMenuItems, listHeatItems} from "./domstuff.js"

getMenuItems()
.then(listMenuItems)

getHeatLevels()
.then(listHeatItems)
