tagSlide()

function tagSlide() {
  const $prevBtn = document.querySelector(".tagSlide_prevBtn")
  const $nextBtn = document.querySelector(".tagSlide_nextBtn")
  const $wrapper = document.querySelector(".tagSlide-wrapper")
  const $tagSlide_container = document.querySelector(".tagSlide-container")
  const $tagSlide_child = document.querySelectorAll(".tagSlide_child")
  let moveAmount = 250
  let slideWidth = 80
  let slideMargin = 25

  $tagSlide_container.style.left = `${-slideMargin}px`
  updateContainerWidth() // 컨테이너의 마진 크기 계산

  $prevBtn.addEventListener("click", prevBtn)
  $nextBtn.addEventListener("click", nextBtn)

  /****************************functions************************ */
  function prevBtn() {
    if ($nextBtn.style.visibility === "hidden") {
      $nextBtn.style.visibility = "visible"
    }
    let currLeft = Number($tagSlide_container.style.left.split("p")[0])
    $tagSlide_container.style.left = currLeft + moveAmount + "px"
    console.log(currLeft)
    if (currLeft <= 0) {
      $prevBtn.style.visibility = "hidden"
      return
    }
  }
  function nextBtn() {
    if ($prevBtn.style.visibility === "hidden") {
      $prevBtn.style.visibility = "visible"
    }
    let currLeft = $tagSlide_container.style.left.split("p")[0]
    if (currLeft <= -1075) {
      $nextBtn.style.visibility = "hidden"
      return
    }

    $tagSlide_container.style.left = currLeft - moveAmount + "px"
  }

  function updateContainerWidth() {
    // 슬라이드 컨테이너의 width 설정
    let currSlides = document.querySelectorAll(".tagSlide_child")
    $tagSlide_container.style.width =
      (slideWidth + slideMargin) * currSlides.length - slideMargin + "px"
  }
}
