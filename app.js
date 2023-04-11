
const Question1 = (num) => {
    return function(num2) {
      return num + num2;
    }
  }

  const addFive = Question1(5);

  function displayAnswer() {
    const answer = addFive(10); // add 5 to 10
    document.getElementById("q1").innerHTML = `The answer is ${answer}.`;
  }

  
//------------------Q 2--------------------------------

  function searchArray(arr, value) {
    if (arr.length === 0) {
      return false; 
    } else if (arr[0] === value) {
      return true;
    } else {
      return searchArray(arr.slice(1), value); 
    }
  }

  function Question2(arr, value) {
    return searchArray(arr, value);
  }

  const myArray = [1, 2, 3, 4, 5];

  function displayAnswer2() {
    const result1 = Question2(myArray, 3);
    const result2 = Question2(myArray, 6);
    document.getElementById("q2").innerHTML = `Result 1: ${result1}, Result 2: ${result2}.`;
  }

  //---------------Q 4-----------------------------------
  function addParagraph(text) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    q3.appendChild(newParagraph);
  }


  //---------------Q 5-----------------------------------

  function addListItem(text) {
    
    const myList = document.getElementById("myList" );
    const newListItem = document.createElement("li");
    newListItem.textContent = text;
    myList.appendChild(newListItem);
  }


  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }

   //--------------------------------Question 6------------------------------------  -->
  
  function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
    
  }


   //--------------------------------Question 7------------------------------------  -->
   function retrieveFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }

   //--------------------------------Question 8------------------------------------  -->
  
  function saveAndRetrieveFromLocalStorage(object) {
    // Save each property to localStorage
    for (let key in object) {
      localStorage.setItem(key, JSON.stringify(object[key]));
    }
    
    // Retrieve the object from localStorage
    const newObject = {};
    for (let key in object) {
      const valueString = localStorage.getItem(key);
      newObject[key] = JSON.parse(valueString);
    }
    
    return newObject;}