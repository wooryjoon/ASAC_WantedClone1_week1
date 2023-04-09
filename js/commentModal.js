commentModal()

function commentModal() {
  const $modalToggle = document.querySelector(".commentModalToggle")
  const $modal = document.querySelector(".commentModal")
  $modalToggle.addEventListener("click", showModal)

  function showModal() {
    if (!$modal.style.visibility) $modal.style.visibility = "visible"
    else if ($modal.style.visibility === "hidden")
      $modal.style.visibility = "visible"
    else $modal.style.visibility = "hidden"
  }
}
