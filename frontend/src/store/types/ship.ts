import { ShipClass } from "../../classes/ShipClass"

export interface IInitialFlot {
  flot: ShipClass[]
  selectedShip: number | null
  isReady: boolean
  rerender: boolean
  isCtrlPressed: boolean
  beginX: number
  beginY: number
  isMouseLeftPress: boolean
  dx: number
  dy: number
  rememberX: number | null
  rememberY: number | null
}

