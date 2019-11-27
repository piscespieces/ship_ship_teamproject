// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener('turbolinks:load', function(){
  const  handleDropdown = () => {
    document.getElementById("devise-myDropdown").classList.toggle("show")
  }
  window.onclick = (event) =>{
    if (!event.target.matches('.devise-dropbtn')) {
      const dropdowns = document.getElementsByClassName("devise-dropdown-content")
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

  const drop = document.querySelector('#devise-drop')
  if (drop) drop.addEventListener('click', handleDropdown)
})




// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
