const inputData = document.querySelector("[input-data]");
const addData = document.querySelector(".container");
const todoScreen = document.querySelector(".todos");


addData.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = inputData.value;
    if (data !== "") {
        let key = window.localStorage.length;
        window.localStorage.setItem(key, data);
        inputData.value = "";
        renderDataOnScreen(data,key);
        checkForVissibelClearDataButton();
    }
});

function renderDataOnScreen(data,key) {

    let len = window.localStorage.length;
    var addContent = ` <div class="task" data-key="${key}"> 
                            <p class="text">${data}</p>
                            <button class="btn">Remove</button>
                        </div>`
    todoScreen.insertAdjacentHTML('beforeend', addContent);
}

function visibleAllData(){
    const keys = Object.keys(localStorage);
    keys.sort();
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
        renderDataOnScreen(window.localStorage.getItem(keys[i]),keys[i]);
    }
    checkForVissibelClearDataButton();
}

window.onload = function () {
    visibleAllData();
};

//for clear data
const clearData = document.querySelector("[clear-Data]");

function checkForVissibelClearDataButton() {
    const keys = Object.keys(localStorage);
    if (keys.length >= 2) {
        clearData.classList.add("active");
    }
}

clearData.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

//for remove a todo
todoScreen.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){

        let pElement = e.target.parentElement;
        let key = pElement.getAttribute('data-key');
        // console.log(key);

        localStorage.removeItem(key);

        e.target.parentElement.remove();

        checkForHideClearDataButton();

    }
})

function checkForHideClearDataButton(){
    const keys = Object.keys(localStorage);
    if (keys.length <= 1) {
        clearData.classList.remove("active");
    }
}
