Use the below instruction and solve it using `index.html` file. Write JavaScript in the `script` tag.

1. Use createElement() on the document object to create a new `p` element.
  ```js
  let elemP = document.createElement('p');
  document.body.append(elemP);
  ```
2. Use `textContent` property and set the text inside `p` to 'Hello Javascript!'.

  ```js
   elemP.textContent = 'Hello Javascipt!';

    //elemP.setAttribute('text-content', 'Hello Javascript!'); //Both works the same
  ```
3. Now use the  `innerHTML` property to add HTML inside `p` add `I love <strong>Javascript</strong>`.
  ```js
  elemP.innerHTML = `I love <strong>Javascript</strong>`;
  let elemUl = document.createElement('ul');
  ```
4. Create a structure like this using js and push it to the document.
  ```html
    <ul>
      <li>Buy groceries</li>
      <li>Feed the cat</li>
      <li>Do laundry</li>
    </ul>
  ```

  ```js
  let arr = ['Buy Groceries', 'Feed the cat', 'Do laundry'];
  arr.forEach((elem, index, arr) =>{
    let elemLi = document.createElement('li');
    elemLi.innerHTML = arr[index];
    elemUl.appendChild(elemLi);
  });
  document.body.append(elemUl);
  ```
5. Create a new `li` element and push it in the `ul` using `appendChild`.

  ```js
  let newElemLi = document.createElement('li');
  elemUl.appendChild(newElemLi);
  ```
6. Using `removeChild()` or `remove()` remove an element from the ul.
  ```js
  elemUl.removeChild(elemUl.firstElementChild);
  ```