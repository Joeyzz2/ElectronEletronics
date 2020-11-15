let time = 6000,
  currentImageIndex = 0,
  images = document.querySelectorAll('.banner_slide img')
  max = images.length;

function nextImage() {

  images[currentImageIndex].classList.remove('banner_selected')
  
  currentImageIndex++

  if(currentImageIndex >= max)
    currentImageIndex = 0

  images[currentImageIndex].classList.add('banner_selected')
}

function start() {
  setInterval(() => {
    nextImage()
  }, time)
}

window.addEventListener('load', start)