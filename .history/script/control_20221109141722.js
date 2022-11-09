/*
 * @Author: jp
 * @Date: 2022-11-08 16:56:05
 * @LastEditors: jp
 * @LastEditTime: 2022-11-09 14:16:42
 * @Descripttion: 
 * @version: 
 */
setTimeout(()=>{
  // const dom = document.getElementById('starsCanvas')
  // dom?.style.opacity=0
  const dom = document.createElement('canvas')
  dom.id='canvas'
  const sDom = document.createElement('script')
  sDom.src='./script/petals.js'
  document.body.append(dom)
  document.body.append(sDom)
},2000)

function goNext(){
  const dom = document.createElement('canvas')
  dom.id='low'
  dom.className='goTop'
  const sDom = document.createElement('script')
  sDom.src='./script/low.js'
  document.body.append(dom)
  document.body.append(sDom)
}