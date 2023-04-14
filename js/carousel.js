function carousel() {
  const $slides = document.querySelector(".slides")
  let $slide = document.querySelectorAll(".slide")
  const $slideWrapper = document.querySelector(".slide-wrapper")
  const $slideCardNodes = [...document.querySelectorAll(".slide_card")]
  let currIdx = 0
  let slideCount = $slide.length
  let slideWidth = 1080
  let slideMargin = 30
  let initialLeft = 222
  let $prevBtn = document.querySelector(".carousel_prevBtn")
  let $nextBtn = document.querySelector(".carousel_nextBtn")
  let timer = undefined

  isCenter()
  makeClone()

  autoSlide()

  /***************************EventListeners *********************/
  $slideWrapper.addEventListener("mouseover", () => {
    stopSlide()
  })
  $slideWrapper.addEventListener("mouseout", () => {
    autoSlide()
  })
  $nextBtn.addEventListener("click", () => {
    moveSlide(currIdx + 1)
  })
  $prevBtn.addEventListener("click", () => {
    moveSlide(currIdx - 1)
  })

  // ******************************functions ******************************************************************

  function makeClone() {
    // 무한루프를 만들기 위해 복사본을 생성하는 함수
    for (let i = 0; i < slideCount; i++) {
      let cloneSlide = $slide[i].cloneNode(true)
      cloneSlide.classList.add("clone")
      cloneSlide.childNodes[3].style.opacity = "0"
      $slideCardNodes.push(cloneSlide.childNodes[3])
      $slides.appendChild(cloneSlide)
    }

    for (let i = slideCount - 1; i >= 0; i--) {
      let cloneSlide = $slide[i].cloneNode(true)
      cloneSlide.classList.add("clone")
      cloneSlide.childNodes[3].style.opacity = "0"
      $slideCardNodes.push(cloneSlide.childNodes[3])
      $slides.prepend(cloneSlide)
    }
    updateWidth() // 컨테이너의 width 크기 업데이트.
    setInitialPosition() // 최초 랜딩 시에 초기 지점을 중간정도 위치로 미리 이동시켜놓기.
    setTimeout(() => {
      // 랜딩이 되고 나서 animated 클래스 추가 (자연스럽게 넘어가는 효과 주려고)
      $slides.classList.add("animated")
    }, 100)
  }

  function updateWidth() {
    // 컨테이너의 width를 재조정하는 함수
    let currSlides = document.querySelectorAll(".slide")
    let newSlideCount = currSlides.length
    let newWidth =
      (slideWidth + slideMargin) * newSlideCount - slideMargin + "px"
    $slides.style.width = newWidth
  }

  function setInitialPosition() {
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount
    $slides.style.transform = "translateX(" + initialTranslateValue + "px)"
  }

  function moveSlide(num) {
    $slides.style.left = -num * (slideWidth + slideMargin) + initialLeft + "px"
    currIdx = num

    if (currIdx === slideCount || currIdx === -slideCount) {
      setTimeout(() => {
        $slides.classList.remove("animated")
        currIdx = 0
        $slides.style.left = initialLeft + "px"
      }, 500)
      setTimeout(() => {
        $slides.classList.add("animated")
      }, 600)
    }
    isCenter()
  }

  function autoSlide() {
    if (timer == undefined) {
      timer = setInterval(() => {
        moveSlide(currIdx + 1)
      }, 3000)
    }
  }
  function stopSlide() {
    clearInterval(timer)
    timer = undefined
  }

  // function dragging(e) {
  //   // 오른쪽으로 마우스 움직이면, left값이 커져야한다.
  // }
  function isCenter() {
    // 모든 슬라이드 노드에 대해 현재 위치가 화면상의 특정한 점인지 파악.
    $slideCardNodes.forEach((e, i) => {
      if (
        e.getBoundingClientRect().left >= 1000 &&
        e.getBoundingClientRect().left <= 1800
      ) {
        e.style.opacity = "1"
      } else e.style.opacity = "0"
    })
  }
}
carousel()
