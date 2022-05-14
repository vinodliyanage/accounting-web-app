const createBlank = document.getElementById("create-blank");
const createTemplate = document.getElementById("create-template");

const template = [
  "Purchase price",
  "Less-Trade discounts",
  "Less-Subsidies",
  "Carriage inwards",
  "Direct taxes",
  "Non refundable taxes",
  "Installation charges",
  "Expense for test run",
  "Other direct cost",
];

let previousEditedElement = null;

Field.removeAll();
Field.create();

createBlank.addEventListener("click", () => {
  Field.removeAll();
  Field.create();
});

createTemplate.addEventListener("click", () => {
  Field.removeAll();
  Field.createFromTemplate(template);
});

tableBody.addEventListener("click", (e) => {
  const parentRowId = e.target.dataset.parentRowId;
  const element = document.querySelector(`[data-id="${parentRowId}"]`);
  Field.clearFormat(element);

  if (previousEditedElement?.dataset.id !== parentRowId) {
    Field.format(previousEditedElement);
  }
  previousEditedElement = element;
});

tableBody.addEventListener("input", (e) => {
  const value = e.target.value?.trim();
  if (value === null) return;

  const parentRowElementId = e.target.dataset.parentRowId;
  const parentRowElement = document.querySelector(
    `[data-id="${parentRowElementId}"]`
  );

  if (!(parentRowElement instanceof HTMLTableRowElement)) return;

  let newRowElement = null;

  if (value.length) {
    if (!parentRowElement.nextElementSibling) {
      newRowElement = Field.create(parentRowElement);
    }
  } else {
    Field.remove(newRowElement);
    newRowElement = null;
  }

  if (e.target.name === "amount") {
    Field.setAmount(parentRowElementId, value);
  }
});