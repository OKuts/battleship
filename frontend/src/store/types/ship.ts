import { ShipClass } from "../../classes/ShipClass"

export interface IInitialFlot {
  flot: ShipClass[]
  selectedShip: number | null
  isReady: boolean
  rerender: boolean
  isCtrlPressed: boolean
}

