// Blurr the entire page

const body = document.body

console.log(body)

repetitions = 0

const unblur = setInterval(() => {
  repetitions++
  let scaleFilter = scale(repetitions, 0, 100, 25, 0)
  console.log(repetitions)
  console.log(scaleFilter)
  body.style.filter = `blur(${scaleFilter}px`
  timeGuard()  
}, 30);

function timeGuard(){
  if (repetitions === 100 ){
    clearInterval(unblur)
  }
}

// function scale(repetitions, aMax, bmin, cMax, dmin){
  // return (repetitions-bmin)*(aMax-bmin)/(cMax-dmin) + dmin
// }

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

window.onload = unblur
