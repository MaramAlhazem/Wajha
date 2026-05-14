let people = 1;
let days = 1;
let selectedTimePrice = 50;
let selectedTimeText = "صباح";
let selectedBudget = "200 - 300";
let selectedCity = "الرياض";

function goToPage(pageName) {
  window.location.href = pageName;
}

function updateTotal() {
  const total = people * days * (100 + selectedTimePrice);

  document.getElementById("peopleCount").textContent = people;
  document.getElementById("daysCount").textContent = days;

  document.getElementById("summaryPeople").textContent = people;
  document.getElementById("summaryDays").textContent = days;
  document.getElementById("summaryCity").textContent = selectedCity;

  document.getElementById("summaryTotalSmall").textContent = total + " ر.س";
  document.getElementById("totalPrice").textContent = total + " ر.س";
}

function increasePeople() {
  people++;
  updateTotal();
}

function decreasePeople() {
  if (people > 1) {
    people--;
    updateTotal();
  }
}

function increaseDays() {
  days++;
  updateTotal();
}

function decreaseDays() {
  if (days > 1) {
    days--;
    updateTotal();
  }
}

function selectTime(button) {

  document.querySelectorAll(".time-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  selectedTimePrice = Number(button.dataset.value);
  selectedTimeText = button.textContent.trim();

  const breakfast = document.getElementById("breakfast");
  const lunch = document.getElementById("lunch");
  const dinner = document.getElementById("dinner");

  breakfast.disabled = false;
  lunch.disabled = false;
  dinner.disabled = false;

  breakfast.checked = false;
  lunch.checked = false;
  dinner.checked = false;

  if(selectedTimeText === "صباح"){

    lunch.disabled = true;
    dinner.disabled = true;

  }

  else if(selectedTimeText === "عصر"){

    breakfast.disabled = true;
    dinner.disabled = true;

  }

  else if(selectedTimeText === "ليل"){

    breakfast.disabled = true;
    lunch.disabled = true;

  }

  updateTotal();
}

function selectBudget(button) {
  document.querySelectorAll(".budget-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  selectedBudget = button.textContent.trim();
}

function selectCity(button) {
  document.querySelectorAll(".city-select-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  selectedCity = button.textContent.trim();

  updateTotal();
}

function sendRequest() {
  const phoneNumber = "966500000000";

  const checkedTypes = Array.from(document.querySelectorAll(".experience-type:checked"))
    .map(input => input.value)
    .join("، ");

  const total = document.getElementById("totalPrice").textContent;

  const message =
`السلام عليكم، أبغى أخصص تجربة عبر وجهة:

المدينة: ${selectedCity}
عدد الأشخاص: ${people}
عدد الأيام: ${days}
وقت التجربة: ${selectedTimeText}
اختيارات التجربة: ${checkedTypes || "لم يتم التحديد"}
الميزانية للشخص: ${selectedBudget}
الإجمالي التقريبي: ${total}

شكرًا.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}