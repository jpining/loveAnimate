/*
 * @Author: jp
 * @Date: 2022-11-08 16:56:05
 * @LastEditors: jp
 * @LastEditTime: 2022-11-09 14:43:08
 * @Descripttion: 
 * @version: 
 */
const dom = document.createElement('canvas')
dom.id='starsCanvas'
const sDom = document.createElement('script')
sDom.src='./script/stars.js'
document.body.append(dom)
document.body.append(sDom)

setTimeout(()=>{
  // const dom = document.getElementById('starsCanvas')
  // dom?.style.opacity=0
  // const canvasDom = document.getElementById('starsCanvas')
  // const scriptDom = document.getElementById('starsCanvasScript')
  // document.body.removeChild(scriptDom)
  // document.body.removeChild(canvasDom)
  const dom = document.createElement('canvas')
  dom.id='canvas'
  const sDom = document.createElement('script')
  sDom.src='./script/petals.js'
  document.body.append(dom)
  document.body.append(sDom)
  goNext()
},2000)

function goNext(){
  setTimeout(()=>{
    // const canvasDom = document.getElementById('starsCanvas')
    // const scriptDom = document.getElementsByTagName('script')[0]
    // document.body.removeChild(scriptDom)
    const dom = document.createElement('canvas')
    dom.id='low'
    dom.className='goTop'
    const sDom = document.createElement('script')
    sDom.src='./script/low.js'
    document.body.append(dom)
    document.body.append(sDom)
  },2000)
}