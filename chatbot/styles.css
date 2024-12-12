// Load Responses from JSON
let botResponses;
fetch('responses.json')
  .then((response) => response.json())
  .then((data) => (botResponses = data.responses));

// DOM Elements
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Add Event Listeners
sendBtn.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') handleUserMessage();
});

// Handle User Input
function handleUserMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Display User Message
  addMessage(userMessage, 'user');
  userInput.value = '';

  // Display Typing Indicator
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();

    // Fetch Bot Response
    const botMessage =
      botResponses[userMessage.toLowerCase()] || botResponses['default'];
    addMessage(botMessage, 'bot');
  }, 1000);
}

// Add Message
function addMessage(message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${type}-message`);
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Show Typing Indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('message', 'bot-message', 'typing-indicator');
  typingDiv.innerHTML = `
    <div></div><div></div><div></div>
  `;
  typingDiv.id = 'typing';
  messagesDiv.appendChild(typingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Remove Typing Indicator
function removeTypingIndicator() {
  const typingDiv = document.getElementById('typing');
  if (typingDiv) typingDiv.remove();
}
