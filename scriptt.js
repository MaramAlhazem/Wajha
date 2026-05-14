const typeFilters = document.querySelectorAll(".type-filter");
const priceFilters = document.querySelectorAll(".price-filter");
const cards = document.querySelectorAll(".exp-card");

function goToPage(pageName) {
  window.location.href = pageName;
}
function applyFilters() {
  const selectedTypes = Array.from(typeFilters)
    .filter(input => input.checked)
    .map(input => input.value);

  const selectedPrices = Array.from(priceFilters)
    .filter(input => input.checked)
    .map(input => input.value);

  cards.forEach(card => {
    const cardType = card.dataset.type;
    const cardPrice = Number(card.dataset.price);

    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(cardType);

    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some(range => {
        const [min, max] = range.split("-").map(Number);
        return cardPrice >= min && cardPrice <= max;
      });

    if (typeMatch && priceMatch) {
      card.classList.remove("hide-card");
    } else {
      card.classList.add("hide-card");
    }
  });
}

typeFilters.forEach(input => input.addEventListener("change", applyFilters));
priceFilters.forEach(input => input.addEventListener("change", applyFilters));


function showNumber(button){

  const input =
  button.parentElement.querySelector(".contact-input");

  if(input.style.display === "block"){
    input.style.display = "none";
  }else{
    input.style.display = "block";
  }

}