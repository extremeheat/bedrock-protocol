import { HotbarWin, CreativeWin, CanvasEventManager } from '../../node_modules/minecraft-inventory-gui/index.mjs'
import { getImage, getImageIcon } from './util.mjs'

window.canvas = document.getElementById('overlay')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.canvasManager = new CanvasEventManager(canvas)
window.scale = 2

window.inventory = new CreativeWin(canvasManager, { getImage, getImageIcon })
window.hotbar = new HotbarWin(canvasManager, { getImage, getImageIcon })

window.updateScale = (scale) => {
  canvasManager.setScale(scale)
  window.inventory.yoff = Math.max(0, ((window.innerHeight / scale) / 2) - (200 / 1.5))
  window.inventory.xoff = ((window.innerWidth / scale) / 2) - (195 / 2)
  window.hotbar.xoff = ((window.innerWidth / scale) / 2) - (183 / 2)
  window.hotbar.yoff = (window.innerHeight / scale) - (70)
}

updateScale(scale)

setTimeout(() => {
  canvasManager.startRendering()
  console.log('Rendering!')
}, 500)

// setTimeout(() => {
//   let reversing
//   setInterval(() => {
//     scale += reversing ? -0.1 : 0.1
//     if (scale > 3) reversing = true
//     if (scale < 1) reversing = false
//     updateScale(scale)
//   }, 40) 
// },9000)

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  updateScale(scale)
  window.inventory.needsUpdate = true
})