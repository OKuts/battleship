import { ShipClass } from "../../classes/ShipClass"

export interface IInitialFlot {
  flot: ShipClass[]
  selectedShip: number | null
  isReady: boolean
  rerender: boolean
  isCtrlPressed: boolean
  beginX: number | null
  beginY: number | null
  isMouseLeftPress: boolean
  dx: number | null
  dy: number | null
  rememberX: number | null
  rememberY: number | null
}

