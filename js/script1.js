document.addEventListener("click", e =>{
  const isDropdownlinkTravel = e.target.matches("[data-dropdown-link-travel]")
  // console.log(e)
  if (!isDropdownlinkTravel && e.target.closest("[data-dropdown-travel]") !=null) return
  // console.log("Hello")
  
  let currentDropdownTravel 
  if (isDropdownlinkTravel ) {  
    currentDropdownTravel = e.target.closest("[data-dropdown-travel]")
    currentDropdownTravel.classList.toggle("active")
  } 

  document.querySelectorAll("[data-dropdown-travel].active").forEach(dropdownTravel => {
    if (dropdownTravel === currentDropdownTravel) return;
    dropdownTravel.classList.remove("active")
    console.log("Stop")
   })
})