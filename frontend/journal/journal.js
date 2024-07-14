// Updated JavaScript code in journal.js

function timendate() {
    let a = new Date();
    let hr = a.getHours() % 12;
    let time = hr + ":" + a.getMinutes() + ":" + a.getSeconds();
    let date = a.toLocaleDateString();
    if (a.getHours() >= 12) {
        return time + " pm" + "<br>Date : " + date;
    } else {
        return time + " am" + "<br>Date : " + date;
    }
}

function recordtime() {
    let timeContainer = document.getElementById("time-container");

    // Get user input from the text boxes
    let titleInput = document.getElementById("jumbotron-title").value;
    let descriptionInput = document.getElementById("jumbotron-text").value;

    // Check if either of the input boxes is empty
    if (!titleInput || !descriptionInput) {
        alert("Title and Description cannot be empty!");
        return;
    }

    let currentTime = timendate();

    // Create a new entry object
    let entry = {
        title: titleInput,
        userInput: descriptionInput,
        timeAndDate: currentTime
    };

    // Save the entry to local storage
    saveToLocalStorage(entry);

    // Clear the input boxes
    document.getElementById("jumbotron-title").value = "";
    document.getElementById("jumbotron-text").value = "";

    // Display the entry in the history
    displayEntry(entry);
}

function saveToLocalStorage(entry) {
    // Retrieve existing entries from local storage
    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    // Add the new entry
    entries.push(entry);

    // Save the updated entries back to local storage
    localStorage.setItem("entries", JSON.stringify(entries));
}

function deleteEntryFromLocalStorage(title, userInput, timeAndDate) {
    // Retrieve existing entries from local storage
    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    // Find the index of the entry to be deleted
    let indexToDelete = entries.findIndex(
        (entry) => entry.title === title && entry.userInput === userInput && entry.timeAndDate === timeAndDate
    );

    // Remove the entry from the array
    if (indexToDelete !== -1) {
        entries.splice(indexToDelete, 1);
        // Save the updated entries back to local storage
        localStorage.setItem("entries", JSON.stringify(entries));
    }
}

function clearHistory() {
    // Retrieve existing entries from local storage
    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    // Check if there are no entries
    if (entries.length === 0) {
        // Show an alert
        alert("No history to clear!");
        return;
    }

    // Confirm with the user before clearing the history
    if (confirm("Are you sure you want to clear the entire history?")) {
        // Clear all entries from local storage
        localStorage.removeItem("entries");

        // Clear the displayed entries on the page
        document.getElementById("time-container").innerHTML = "";
    }
}

function displayEntry(entry) {
    let timeContainer = document.getElementById("time-container");

    // Create a new entry element
    let entryElement = document.createElement("div");
    entryElement.innerHTML =
        "<b>Title:</b> " + entry.title + "<br><b>Time and Date:</b> " + entry.timeAndDate;

    // Create a dropdown to show title and text on click
    let dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    // Create a button to show title and time in the dropdown
    let dropdownButton = document.createElement("button");
    dropdownButton.className = "btn btn-secondary dropdown-toggle";
    dropdownButton.type = "button";
    dropdownButton.id = "dropdownMenuButton";
    dropdownButton.setAttribute("data-toggle", "dropdown");
    dropdownButton.setAttribute("aria-haspopup", "true");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownButton.innerHTML = "<b>Title:</b> " + entry.title + "<br><b>Time and Date:</b> " + entry.timeAndDate;

    // Create a dropdown menu
    let dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");

    // Create a div to show title, text, and time in the dropdown content
    let dropdownContent = document.createElement("div");
    dropdownContent.innerHTML =
        "<b>Title:</b> " + entry.title + "<br><b>User Input:</b> " + entry.userInput + "<br><b>Time and Date:</b> " +
        entry.timeAndDate;

    // Append dropdown content to the menu
    dropdownMenu.appendChild(dropdownContent);
    dropdown.appendChild(dropdownButton);
    dropdown.appendChild(dropdownMenu);

    // Add a "Delete Entry" button for each entry
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete Entry";
    deleteButton.onclick = function () {
        // Remove the entry from the time container
        timeContainer.removeChild(entryElement);
        // Remove the entry from local storage
        deleteEntryFromLocalStorage(entry.title, entry.userInput, entry.timeAndDate);
    };

    // Append delete button to the entry element
    entryElement.appendChild(dropdown);
    entryElement.appendChild(deleteButton);

    // Append the new entry element to the time container
    timeContainer.appendChild(entryElement);
}

// Load entries from local storage on page load
window.onload = function () {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    entries.forEach(function (entry) {
        // Display each entry in the history
        displayEntry(entry);
    });
};
