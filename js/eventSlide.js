function eventSlide() {
  const $prevBtn = document.querySelector(".banner_prevBtn")
  const $nextBtn = document.querySelector(".banner_nextBtn")
  const $container = document.querySelector(".eventSlide-container")
  const $slides = document.querySelector(".eventSlide")
  const $slides_child = document.querySelectorAll(".eventSlide_child")
  const $lastCard = $slides_child[$slides_child.length - 1]
  const $lastMark = document.createElement("div")
  let moveAmount = 1120 // 움직일 거리

  $slides.style.left = 0 // 초기값 설정

  $lastCard.classList.add("last")
  $lastMark.classList.add("lastMark")
  $lastMark.innerHTML = /*html*/ `
<a href=""><i class="fa-solid fa-plus"></i></a>
<span>더보기</span>
`
  $lastCard.append($lastMark)

  $prevBtn.addEventListener("click", moveLeft)
  $nextBtn.addEventListener("click", moveRight)

  /*******************************functions*/

  function moveLeft() {
    let currLeft = Number($slides.style.left.split("p")[0])

    $nextBtn.disabled = false
    $nextBtn.style.cursor = "pointer"

    if (currLeft == -560) {
      $slides.style.left = currLeft + parseInt(moveAmount / 2) + "px"
      return
    }
    if (currLeft >= 0) {
      $prevBtn.disabled = true
      $prevBtn.style.cursor = "no-drop"
      return
    }
    $slides.style.left = currLeft + moveAmount + "px"
    console.log($slides.style.left)
  }

  function moveRight() {
    let currLeft = Number($slides.style.left.split("p")[0])

    $prevBtn.disabled = false
    $prevBtn.style.cursor = "pointer"
    if (currLeft == -3360) {
      $slides.style.left = currLeft - parseInt(moveAmount / 2) + "px"
      return
    }
    if (currLeft == -3920) {
      $nextBtn.style.cursor = "no-drop"
      $nextBtn.disabled = true
      return
    }
    $slides.style.left = currLeft - moveAmount + "px"

    console.log($slides.style.left)
  }
}
eventSlide()
