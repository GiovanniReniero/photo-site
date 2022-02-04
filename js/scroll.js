const gallery = document.querySelector(".gallery")

const winHeight = window.innerHeight 

let boundary= gallery.getBoundingClientRect()

console.log(gallery.scrollHeight)

console.log(boundary)
let counter = 0


// window.addEventListener("scroll", () =>{
  // counter++
  // console.log(counter)
  // console.log(boundary.bottom)
  // console.log(winHeight)
// })