/*
 * @Author: jp
 * @Date: 2022-11-08 16:56:05
 * @LastEditors: jp
 * @LastEditTime: 2022-11-09 14:07:58
 * @Descripttion: 
 * @version: 
 */
setTimeout(()=>{
  // const dom = document.getElementById('starsCanvas')
  // dom?.style.opacity=0
  const dom = document.createElement('canvas')
  dom.id='canvas'
  document.body.append(dom)
},2000)