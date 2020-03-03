//Select the section with an id of container without using querySelector.
var elemOne = document.getElementById("container");
console.dir(elemOne);

//Select the section with an id of container using querySelector.
var elemTwo = document.querySelector("#container");
console.dir(elemTwo);
//Select all of the list items with a class of "second".
var arrElemOne = document.querySelectorAll(".second");
console.dir(arrElemOne);

//Select a list item with a class of third, but only the list item inside of the ol tag.
var elemThree = document.body.querySelector(".third", "ol>li");
console.dir(elemThree);

var elemThree = document.body.querySelector("ol>li.third");
console.dir(elemThree);

//Give the section with an id of container the text "Hello!".

//elemOne.textContent = "Hello!"; //If we do this all content wipes out and no more elements in ul and ol

//Add the class main to the div with a class of footer.
var elemFooter = document.body.querySelector('.footer');
elemFooter.classList.add('main');



//Remove the class main on the div with a class of footer.
elemFooter.classList.remove('main');

//Create a new li element.
var newLi = document.createElement('li');


//Give the li the text "four".
newLi.textContent = "four";


//Append the li to the ul element.
var oldUl = document.querySelector('ul');
oldUl.append(newLi);


//Loop over all of the list inside the ol tag and give them a background color of "green".

var olElemArr = document.querySelectorAll( 'ol>li');

olElemArr.forEach(elem => {
    elem.style.backgroundColor = 'green';
});

//Remove the div with a class of footer.    

//elemFooter.style.display = 'none';
elemFooter.remove();