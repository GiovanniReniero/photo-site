
document.addEventListener("click", e =>{
  console.log(e)
  const isDropdownlink = e.target.matches("[data-dropdown-link]")

  if (!isDropdownlink && e.target.closest("[data-dropdown]") !=null) return
  
  let currentDropdown 
  if (isDropdownlink ) {  
    currentDropdown = e.target.closest("[data-dropdown]")
    // console.log("Go")
    currentDropdown.classList.toggle("active")
  } 

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active")
    console.log("Stop")

   })
})

