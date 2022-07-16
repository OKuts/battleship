import { ShipClass } from "../../classes/ShipClass"

export enum Direction {
  ROW,
  COLUMN,
}

export interface ISelectedShip extends Omit <ShipClass, 'wounds'>{}

export interface IInitialFlot {
  flot: ShipClass[],
  selectedShip: ISelectedShip | null
  isReady: boolean
}

