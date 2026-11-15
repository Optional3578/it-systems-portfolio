const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const filterStatus = document.querySelector("#filter-status");
const filterLabels = {
  all: "all 14 course collections",
  systems: "systems work",
  networks: "networking work",
  security: "security work",
  information: "information systems work",
  practice: "project practice work",
};

function filterProjects(filter) {
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const categories = card.dataset.categories.split(" ");
    const isVisible = filter === "all" || categories.includes(filter);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  filterStatus.textContent = filter === "all"
    ? `Showing all ${visibleCount} course collections.`
    : `Showing ${visibleCount} course ${visibleCount === 1 ? "collection" : "collections"} for ${filterLabels[filter]}.`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    filterProjects(selectedFilter);
  });
});
