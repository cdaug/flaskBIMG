function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var TODO = (function() {

  var Evt = new EventEmitter2();

  var todolist_el, add_list_button, add_list_input, remove_list, check_list_item, key, source, template, todolist_array, classes, duplicate, content;

  todolist_array = [];
  classes = 0;

  function getUserInput(e) {

    if (e.type === 'keydown') {
      key = e.key;
    }

    if (e.type === 'click' || key === "Enter") {
      console.log("Item has been submitted");
      var context, html;

      content = add_list_input.value;

      duplicate = todolist_array.indexOf(content);

      if (duplicate === -1 && content !== "") {
        duplicate = 0;
        todolist_array.push(content);
      }
      else {
        duplicate = 1;
      }

      Evt.emit('getTodo');
    }
  }

  function addListItem() {

    if (content !== "" && duplicate === 0) {
      console.log("Item has been approved and added to TODO list");
      context = {'todolist-item': todolist_array};
      html = Handlebars.templates.test(context);
      todolist_el.innerHTML = html;
      add_list_input.value = "";
      content = "";
      todolist_el.addEventListener('click', checkListItem);
      todolist_el.addEventListener('click', removeListItem);
    }
    else {
      if (content === "") {
        console.log("FAIL---\nError Encounted- You didn't enter anything");
      }
      else {
        console.log("FAIL---\nError Encounted- You entered a name that already exists.");
      }
      add_list_input.value = "";
    }
  }

  function removeListItem(e) {
    if (e.target.classList.contains('remove_list')) {
      console.log("Item removed");
      remove_from_list = todolist_array.indexOf(e.target.parentNode.textContent);

      if (remove_from_list !== -1) {
        e.target.parentNode.outerHTML = "";
        todolist_array.splice(remove_from_list, 1);
      }

      e.target.parentNode.outerHTML = "";
    }
  }

  function checkListItem(e) {
    if (e.target.classList.contains('check_list_item')) {
      console.log("Item checked off");
      if (e.target.classList.contains('unchecked')) {
        e.target.classList.remove('unchecked');
        e.target.classList.remove('cdi-circle-o');
        e.target.classList.add('cdi-check-circle-o');
        e.target.classList.add('checked');
      }
      else if (e.target.classList.contains('checked')) {
        e.target.classList.remove('checked');
        e.target.classList.remove('cdi-check-circle-o');
        e.target.classList.add('cdi-circle-o');
        e.target.classList.add('unchecked');
      }
      else {
        alert("Failed");
      }
    }
  }

  function init() {
    todolist_el = document.getElementById('todolist');
    add_list_button = document.getElementById('add_list_button');
    add_list_input = document.getElementById('add_list_input');
    // source = document.getElementById('todolisttemplate').innerHTML;
    // template = Handlebars.templates.test(source);

    add_list_button.addEventListener('click', getUserInput);
    add_list_input.addEventListener('keydown', getUserInput);
    Evt.addListener('getTodo', addListItem);
  }

  return {
    init: init,
  };

})();

ready(TODO.init);
