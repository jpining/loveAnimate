/*
 * @Author: jp
 * @Date: 2022-11-08 16:56:05
 * @LastEditors: jp
 * @LastEditTime: 2022-11-09 14:46:41
 * @Descripttion: 
 * @version: 
 */
const initDom = document.createElement('canvas')
initDom.id='starsCanvas'
const initSDom = document.createElement('script')
sDom.src='./script/stars.js'
document.body.append(initDom)
document.body.append(initSDom)
let initOpa = 1
let timer = setInterval(() => {
  initDom.style.opacity=initOpa-0.1
  initDom.style.opacity=initOpa-0.1
}, 300);
setTimeout(()=>{
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