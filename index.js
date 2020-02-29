cerd
window.onload = function () {
 function search (elem, flag = false) {
  return (flag) ? document.querySelectorAll(elem) : document.querySelector(elem);
 }
 function create (elem) {
  return document.createElement(elem);
 }
 function append (parent, elem, flag = false) {
  parent.appendChild(elem);
 }
 function selector (elem, select) {
  elem.classList.add(select);
  return elem;
 }
 function numb (number) {
  return (typeof Number(number) === 'number' && isNaN(Number(number)) != true) ? true : false;
 }
 function remove (elem) {
  if (elem == null) return null;
  elem.parentNode.removeChild(elem);
 }
 doc = document.body;
 append(doc, selector(create('input'), 'inp1'));
 append(doc, selector(create('input'), 'inp2'));
 append(doc, selector(create('button'), 'but'));

 search('.but').innerHTML = 'Calculate';

 search('.but').onclick = function () {
  remove(search('.result'));
  remove(search('.message-error'));
  remove(search('.message-error'));
  let inp1 = search('.inp1'), inp2 = search('.inp2');
  if (numb(inp1.value) !== true) {
   inp1.parentNode.insertBefore(selector(create('span'), 'message-error'), inp1.nextSibling);
   search('.message-error', true)[0].innerHTML = ' Это не число ';
  }

  if (numb(inp2.value) !== true) {
   inp2.parentNode.insertBefore(selector(create('span'), 'message-error'), inp2.nextSibling);
   search('.message-error', true)[search('.message-error', true).length - 1].innerHTML = ' Это не число ';
  }

  if (numb(Number(inp1.value)) !== false && numb(Number(inp2.value)) !== false) {
   append(doc, selector(create('div'), 'result'));
   search('.result').innerHTML = Number(inp1.value) + Number(inp2.value);
  }
 }
}