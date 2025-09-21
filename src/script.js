// Smart Expense Tracker JavaScript

// Array to store expenses
let expenses = [];

// DOM elements
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    
    // Load expenses from localStorage
    loadExpenses();
    displayExpenses();
});

// Add expense event listener
expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addExpense();
});

// Add new expense
function addExpense() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;
    
    // Validate inputs
    if (!description || !amount || !date) {
        alert('Please fill in all fields');
        return;
    }
    
    if (amount <= 0) {
        alert('Amount must be greater than 0');
        return;
    }
    
    // Create expense object
    const expense = {
        id: Date.now(),
        description: description,
        amount: amount,
        date: date
    };
    
    // Add to expenses array
    expenses.push(expense);
    
    // Save to localStorage
    saveExpenses();
    
    // Display updated expenses
    displayExpenses();
    
    // Clear form
    expenseForm.reset();
    dateInput.value = new Date().toISOString().split('T')[0];
    
    // Focus back on description input
    descriptionInput.focus();
}

// Display expenses
function displayExpenses() {
    expenseList.innerHTML = '';
    
    if (expenses.length === 0) {
        expenseList.innerHTML = '<li style="text-align: center; color: #7f8c8d; padding: 20px;">No expenses added yet</li>';
        return;
    }
    
    // Sort expenses by date (newest first)
    const sortedExpenses = expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.className = 'expense-item';
        
        li.innerHTML = `
            <div>
                <div class="expense-description">${expense.description}</div>
                <div class="expense-date">${formatDate(expense.date)}</div>
            </div>
            <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
        `;
        
        expenseList.appendChild(li);
    });
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Save expenses to localStorage
function saveExpenses() {
    localStorage.setItem('smartExpenseTracker', JSON.stringify(expenses));
}

// Load expenses from localStorage
function loadExpenses() {
    const savedExpenses = localStorage.getItem('smartExpenseTracker');
    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
    }
}

// Utility function to calculate total expenses
function getTotalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Example function for learning - you can modify this
function showTotalExpenses() {
    const total = getTotalExpenses();
    alert(`Total expenses: $${total.toFixed(2)}`);
}

// Console log for learning purposes
console.log('Smart Expense Tracker loaded successfully!');
console.log('Try adding some expenses and check the console for updates.');