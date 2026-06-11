var topBar = document.querySelector(".top-bar");

function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);


dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {

    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {

    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome")

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

var notesScreen = document.querySelector("#notes");
var notesScreenClose = document.querySelector("#notesclose");

notesScreenClose.addEventListener("click", function() {
  closeWindow(notesScreen);
});

dragElement(notesScreen);

var contactScreen = document.querySelector("#contact");
var contactScreenClose = document.querySelector("#contactclose");

contactScreenClose.addEventListener("click", function() {
  closeWindow(contactScreen);
});
dragElement(contactScreen);

var projectScreen = document.querySelector("#project");
var projectScreenClose = document.querySelector("#projectclose");

projectScreenClose.addEventListener("click", function() {
  closeWindow(projectScreen);
});
dragElement(projectScreen);

function handleIconTap(element, windowId) {
  var targetWindow = document.querySelector("#" + windowId);

  if (element.classList.contains("selected")) {
    deselectIcon(element);
    openWindow(targetWindow);
  } else {
    if (selectedIcon) deselectIcon(selectedIcon);
    selectIcon(element);
  }
}

var biggestIndex = 1;

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

const calcDisplay = document.getElementById("calcDisplay");

function appendToDisplay(input) {
    calcDisplay.value += input;
}

function clearDisplay() {
    calcDisplay.value = "";
}

function calculate() {
    try {
        calcDisplay.value = eval(calcDisplay.value);
    } catch (error) {
        calcDisplay.value = "Error";
    }
}

var calcScreen = document.querySelector("#calculator");
document.querySelector("#calculatorclose").addEventListener("click", () => closeWindow(calcScreen));
dragElement(calcScreen);