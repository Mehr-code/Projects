// Constant variable
const addBtns = document.querySelectorAll(".add-btn:not(.solid)");
const saveItemBtns = document.querySelectorAll(".solid");
const addItemContainers = document.querySelectorAll(".add-container");
const addItems = document.querySelectorAll(".add-item");

// Item Lists
const listColumns = document.querySelectorAll(".drag-item-list");
const backlogList = document.getElementById("backlog-list");
const progressList = document.getElementById("progress-list");
const completeList = document.getElementById("complete-list");
const onHoldList = document.getElementById("on-hold-list");

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

// Drag Functionality
let draggedItem;
let currentColumn;

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
  if (localStorage.getItem("backlogItems")) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    backlogListArray = ["Release the course", "Sit back and relax"];
    progressListArray = ["Work on projects", "Listen to music"];
    completeListArray = ["Being cool", "Getting stuff done"];
    onHoldListArray = ["Being uncool"];
  }
}

// Set localStorage Arrays
function updateSavedColumns() {
  listArrays = [
    backlogListArray,
    progressListArray,
    completeListArray,
    onHoldListArray,
  ];
  // console.log(listArrays);

  const arrayNames = ["backlog", "progress", "complete", "onHold"];

  arrayNames.forEach(function (arrayName, i) {
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[i]));
  });
  // localStorage.setItem("backlogItems", JSON.stringify(backlogListArray));
  // localStorage.setItem("progressItems", JSON.stringify(progressListArray));
  // localStorage.setItem("completeItems", JSON.stringify(completeListArray));
  // localStorage.setItem("onHoldItems", JSON.stringify(onHoldListArray));
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  // console.log("columnEl:", columnEl);
  // console.log("column:", column);
  // console.log("item:", item);
  // console.log("index:", index);

  // List Item
  const listEl = document.createElement("li");
  listEl.classList.add("drag-item");
  listEl.textContent = item;
  listEl.draggable = true;
  listEl.setAttribute("ondragstart", "drag(event)");

  // Append
  columnEl.appendChild(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if (!updatedOnLoad) {
    getSavedColumns();
  }

  // Backlog Column
  backlogList.textContent = "";
  backlogListArray.forEach(function (backlogItem, i) {
    createItemEl(backlogList, 0, backlogItem, i);
  });

  // Progress Column
  progressList.textContent = "";
  progressListArray.forEach(function (progressItem, i) {
    createItemEl(progressList, 1, progressItem, i);
  });

  // Complete Column
  completeList.textContent = "";
  completeListArray.forEach(function (completeItem, i) {
    createItemEl(completeList, 2, completeItem, i);
  });

  // On Hold Column
  onHoldList.textContent = "";
  onHoldListArray.forEach(function (onHoldItem, i) {
    createItemEl(onHoldList, 0, onHoldItem, i);
  });

  // Run getSavedColumns only once, Update Local Storage
}

// Drag & Drop Functions
// When Item Starts Dragging
function drag(e) {
  draggedItem = e.target;
  console.log("dragged Item: ", draggedItem);
}

// Column Allows for Item to Drop
function allowDrop(e) {
  e.preventDefault();
}

// When Item Enters Column Area
function dragEnter(column) {
  // console.log(listColumns[column]);
  listColumns[column].classList.add("over");
  currentColumn = column;
}

// Dropping Item in Column
function drop(e) {
  e.preventDefault();

  // Remove Background Color/Padding
  listColumns.forEach(function (column) {
    column.classList.remove("over");
  });

  // Add Item to Column
  const parent = listColumns[currentColumn];
  parent.appendChild(draggedItem);
}

// On Load
updateDOM();
