/*
Postear mensaje con boton #LISTO
Postear mensaje con enter 
Poner hora exacta # LISTO
Scroll # QUE ?
Cambiar los chats
*/

function addMessage(){
  if(mensajes.value == ""){
    return
  }
  var message = document.getElementById("mensajes");
  var chat = document.getElementById("chat");

  var message_out = document.createElement("div");
  message_out.className = 'w-message-out w-message';

  var message_text = document.createElement("div");
  message_text.className = 'w-message-text';

  var text_chat = document.createElement("p");
  text_chat.innerHTML = message.value;

  var time = document.createElement("div");
  var d = new Date();
  time.className = 'time';
  time.innerHTML = d.getHours() + ":" + d.getMinutes();



  message_text.appendChild(text_chat);
  message_text.appendChild(time);
  message_out.appendChild(message_text);
  chat.appendChild(message_out);

  chat.scrollTop = chat.scrollHeight;

  message.value = "";
}

var boton = document.getElementsByClassName('icon-mic')[0]
boton.addEventListener('click', addMessage)