;(function () {
  document.addEventListener('DOMContentLoaded', () => getProgressBar())
})()

/**
 * It sets the width of the progress bar to the value of the data-done attribute, and then sets the
 * opacity to 1
 */
const getProgressBar = () => {
  // Set Progress done
  document.querySelectorAll('.progress-done').forEach((progress) => {
    // @ts-ignore
    progress.style.width = progress.getAttribute('data-done') + '%'
    // @ts-ignore
    progress.style.opacity = 1
  })
}
