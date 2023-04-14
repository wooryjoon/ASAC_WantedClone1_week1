
function showLoginModal() {

  const $loginBtn = document.querySelector(".option_wrap1 .login")
  const $modal = document.querySelector(".loginModal-background")
  const $signUpModal = document.querySelector(".loginModal-background2")
  const $submit = document.querySelector(".email-button")
  const $input = document.querySelector(".email-input")
  const $loginCancel = document.querySelector(".cancelBtn")
  const $signUpCancel = document.querySelector(".cancel")
  let isShow1 = false
  let isShow2 = false
  //   EventListeners
  $loginBtn.addEventListener("click", modalController1)
  $loginCancel.addEventListener("click", modalController1)
  $signUpCancel.addEventListener("click", modalController2)
  $submit.addEventListener("click", showNextStep)
  //   Functions
  function modalController1() {
    if (isShow1) {
      $modal.classList.remove("show")
      isShow1 = false
      return
    } else {
      $modal.classList.add("show")
      isShow1 = true
    }
  }
  function modalController2() {
    if (isShow2) {
      $signUpModal.classList.remove("show")
      isShow2 = false
      isShow1 = false
    }
  }
  function showNextStep() {
    if (!$input.value) {
      alert("올바른 이메일을 입력해주세요")
    } else {
      isShow2 = true
      // 현재 모달창을 display:none처리
      $modal.classList.remove("show")
      // signUpModal창을 띄운다.
      $signUpModal.classList.add("show")
    }
  }
}

showLoginModal()
