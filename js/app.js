const titleInput = document.querySelector("#title");
const createEventBtn = document.querySelector(".add-event-btn");
const leftSide = document.querySelector(".left-side");
const eventTime = document.querySelector("#trip-start-time");
const startDate = document.querySelector("#trip-start-date");
const descriptionInput = document.querySelector("#description");
const titleError = document.querySelector(".title-error");

// Title validation
const validate = () => {
    if (titleInput.value === "") {
        titleError.style.display = 'block';
        titleError.value = "Fill the gaps";

        return true
    } else {
        titleError.style.display = 'none';
    }
}

//Description validation
const validateDescription = () => {
    if (descriptionInput.value === "") {
        titleError.style.display = 'block';
        titleError.value = "Fill the gaps";

        return true
    } else {
        titleError.style.display = 'none';
    }
}

createEventBtn.addEventListener('click', () => {
    if (validate() || validateDescription()) {
        return;
    };
   

    //Create parent div
    const createEventDiv = document.createElement("div");
    createEventDiv.setAttribute("class", "createEvent-div");

    //Create time div
    const addEventTimeEl = document.createElement("div");
    addEventTimeEl.setAttribute("class", "add-event-time");

    addEventTimeEl.textContent = startDate.value;


    //Create title div
    const addEventTitleEl = document.createElement("div");
    addEventTitleEl.setAttribute("class", "add-event-title");

    const eventTitleValue = titleInput.value;
    addEventTitleEl.textContent = eventTitleValue;

    createEventDiv.appendChild(addEventTimeEl);
    createEventDiv.appendChild(addEventTitleEl);

    leftSide.appendChild(createEventDiv);

console.log({ startDate: startDate.value, eventTime: eventTime.value});
})



