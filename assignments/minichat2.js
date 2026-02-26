const input = document.querySelector("input");
const button = document.querySelector("button");
const chatContent = document.querySelector(".chat-content");

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function sendMessage() {
  const messageText = input.value.trim();

  if (!messageText) return;

  const message = document.createElement("article");
  message.classList.add("message", "sender");

  message.innerHTML = `
    <p class="name">You:</p>
    <p class="text">${messageText}</p>
    <p class="time">${getCurrentTime()}</p>
  `;

  chatContent.appendChild(message);

  input.value = "";
  chatContent.scrollTop = chatContent.scrollHeight;
}

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
