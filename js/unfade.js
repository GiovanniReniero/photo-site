
// Blurr the entire page

const body = document.body
const containerAll = document.querySelector(".containerAll")
const picsBy = document.querySelector(".picsBy ")



repetitions = 0

const unblur = setInterval(() => {
  repetitions++
  let scaleFilter = scale(repetitions, 0, 100, 25, 0)
  let scalePicsBy = scale(repetitions, 0, 100, 1, 0)
  containerAll.style.filter = `blur(${scaleFilter}px`
  picsBy.style.opacity=`${scalePicsBy}`
  timeGuard()  
}, 12);

function timeGuard(){
  if (repetitions === 100 ){
    clearInterval(unblur)
  }
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// window.onload = unblur
