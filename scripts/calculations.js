let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesTotals = [];
  for (let i = 0; i < categories.length; i++) {
    categoriesTotals.push([
      categories[i],
      calculateCategoryExpenses(categories[i]),
    ]);
  }
  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];
  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }
  return largestCategory;
}
function addExpenseEntry(value) {
  expenseEntries.push(value);
  totalExpensesValue += value[1];
}
