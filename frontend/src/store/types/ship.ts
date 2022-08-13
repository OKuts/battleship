import { ShipClass } from "../../classes/ShipClass"

interface ICoordinates {
  x: number
  y: number
}

export interface IField {
  [key: string]: null | boolean
}

export interface IInitialFlot {
  flot: ShipClass[]
  shotMyField: IField
  enemyField: IField
  myField: IField
  shotEnemyField: IField
  selectedShip: number | null
  isReady: boolean
  gameText: string
  rerender: boolean
  isCtrlPressed: boolean
  begin: ICoordinates[]
  isMouseLeftPress: boolean
  dx: number
  dy: number
  rememberX: number
  rememberY: number
  rememberDirection: boolean
}

