getElementById : By the getElementById we can easily any part id of the connected html file.
getElementsByClassName : By the getElementsByClassName we can reached a few part of the connected html file which are named by the same class name.
querySelector : querySelector is used to select the first element within a document that matches a specified CSS selector or a group of selectors.
for create : const newDiv = document.createElement("div");
for insart : parentElement.appendChild(newDiv) 
Event Bubble : Event bubbling is a way that DOM events move through the document. When an event happens on a target element, it moves up through the DOM structure to its parent elements, triggering any event listeners that are attached as it goes.

Event Delegation : Event delegation is a useful pattern in JavaScript. It improves the performance and maintainability of your code, especially when working with dynamic content or many elements. By using event bubbling, you can cut down on the number of event listeners and simplify your code.

preventDefault():  preventDefault() controls the default behavior of the event.
stopPropagation():  stopPropagation() controls the flow of the event through the DOM.