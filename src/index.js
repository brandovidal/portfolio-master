(function () {
  document.addEventListener("DOMContentLoaded", () => getProgressBar());
})();

function getProgressBar() {
  const listProgress = document.querySelectorAll(".progress-done");
  
  // Set Progress done
  listProgress.length > 0 &&
    listProgress.forEach((progress) => {
      progress.style.width = progress.getAttribute("data-done") + "%";
      progress.style.opacity = 1;
    });
}
