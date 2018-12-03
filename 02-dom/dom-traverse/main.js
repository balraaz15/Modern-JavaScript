// TRAVERSING THE DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

/* 
  Node Types
    1 - Element
    2 - Attribute (deprecated)
    3 - TextNode
    8 - Comment
    9 - Document itself
    10 - Doctype
*/

// Get the child nodes
val = list.childNodes; // returns a nodelist (includes linebreaks as nodes) (gives all types of nodes)
val = list.childNodes[1];
val = list.childNodes[1].nodeName; // LI - list
val = list.childNodes[1].nodeType; // 1 - element
val = list.childNodes[0].nodeValue; // empty

// Get children element nodes
val = list.children; // returns HTMLCollection (gives only children)

// Children of children
val = list.children[3].children;

// firstChild, firstElementChild, lastChild, lastElementChild
val = list.firstChild; // gives first node (any node)
val = list.firstElementChild; // only gives first ELEMENT

val = list.lastChild; // gives last node (any node)
val = list.lastElementChild; // only gives last ELEMENT

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

// Get parents of parents
val = listItem.parentNode.parentNode;

// Get next sibling
val = listItem.nextSibling; // gives text node
val = listItem.nextElementSibling; // gives element sibling

// Get previous sibling
val = listItem.previousSibling; // gives text node
val = listItem.previousElementSibling; // gives element sibling

console.log(val);
