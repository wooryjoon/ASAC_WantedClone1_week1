function loginModal() {
  const $loginBtn = document.querySelector(".option_wrap1 .login")
  const $modal = document.querySelector(".loginModal-background")
  const $section = document.querySelector("section")
  let isShow = false
  $loginBtn.addEventListener("click", modalController)
  function modalController() {
    if (isShow) {
      $modal.classList.remove("show")
      isShow = false
      return
    } else {
      $modal.classList.add("show")
      isShow = true
    }
  }
}

loginModal()
