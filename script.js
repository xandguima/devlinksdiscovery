function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    //se tiver sem light mode , manter imagem normal
    img.setAttribute("src", "./img/avatar-dark.png")
  }
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem
    img.setAttribute("alt", "imagem romaniac")
  } else {
    //se tiver sem light mode , manter imagem normal
    img.setAttribute("alt", "imagem reality strike")
  }
}
