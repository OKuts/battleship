import {useEffect, useState} from "react";

export const useCtrlPressed = () => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false)

  const downHandler = (e: KeyboardEvent) => {
    return e.ctrlKey ? setIsCtrlPressed(true) : setIsCtrlPressed(false)
  }

  const upHandler = () => {
    setIsCtrlPressed(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return
  }, [])

  return isCtrlPressed
}
