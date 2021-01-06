function onDragStart(event) {
   event
      .dataTransfer
      .setData('text/plain', event.target.id);

   event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
}

function onDragOver(event) {
   event.preventDefault();
}

function onDrop(event, element) {
   const id = event
      .dataTransfer
      .getData('text');

   const draggableElement = document.getElementById(id);

   //https://stackoverflow.com/questions/28203585/prevent-drop-inside-a-child-element-when-drag-dropping-with-js

   element.appendChild(draggableElement);

   event
      .dataTransfer
      .clearData();
}


