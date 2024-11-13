// what is the DOM:
/**
 * Document object model
 * 
 * it is the data representation of the objects that make up the structure + content of an HTML page.
 * Is is a programming interface for web documents.
 * The DOM represents the page so programs can change document structue, style, and content. 
 * 
 * The DOM represents a program as nodes and objects, so programming langaues can interact with the page.
 */

// ex 1: DOM specifies that the querySelectorAll method must return all the p elements in the document
const paragraphs = document.querySelectorAll('p');
alert(paragraphs[0].nodeName);

//
// interfaces and objects
//
/**
 * many objects can implement differeny interfaces
 * ex) the table object implements the HTMLTableElement interface, and the Element interface
 */
// ex) use the HTMLTableElement, Elment, and Node interfaces on a table:
const table = document.getElementById('table');
const tableAttrs = table.attributes; // Node /element interface
for (let i = 0; i < tableAttrs.length; i++) {
     // HTMLTableElement interface
    if (tableAttrs[i].nodeName.toLowerCase() === "border") {
        table.border = "1";
    }
}
// Table interface
table.summary = "Note: increased border by 1.";

// ex: setting text content:
const story = document.body.querySelector('.story');

const setText = document.body.querySelector('#set-text');
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
})

// ex: add a child element
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
