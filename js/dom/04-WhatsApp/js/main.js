/*
Postear mensaje con boton #LISTO
Postear mensaje con enter # LISTO
Poner hora exacta # LISTO
Scroll # LISTO
*/

function addMessage(){
  var message = document.getElementById("mensajes");
  var chat = document.getElementById("chat");
  if(mensajes.value == ""){
    return
  }

  /* Creamos los elementos que se generaran */
  var message_out = document.createElement("div");
  message_out.className = 'w-message-out w-message';

  var message_text = document.createElement("div");
  message_text.className = 'w-message-text';

  var text_chat = document.createElement("p");
  text_chat.innerHTML = message.value;
  
  /* configuramos la hora */
  var time = document.createElement("div");
  var d = new Date();
  time.className = 'time';
  time.innerHTML = d.getHours() + ":" + d.getMinutes();

  
  /* Añadir valores al mensaje de salida y al chat */
  message_text.appendChild(text_chat);
  message_text.appendChild(time);
  message_out.appendChild(message_text);
  chat.appendChild(message_out);
  chat.scrollTop = chat.scrollHeight;
  message.value = "";
}

var boton = document.getElementsByClassName('icon-mic')[0]
boton.addEventListener('click', addMessage)
mensajes.addEventListener('keyup', (ev) =>{
  if(ev.keyCode != 13) {
    return;
}
  else{
    addMessage()
  }
});
