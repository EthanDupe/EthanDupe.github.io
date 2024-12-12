// Load JSON File
let botResponses;
fetch('responses.json')
  .then(response => response.json())
  .then(data => botResponses = data.responses);

// DOM Elements
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event Listeners
sendBtn.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserMessage();
});

// Handle User Message
function handleUserMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  addMessage(message, 'user');
  userInput.value = '';

  // Bot Typing Indicator
  addLoadingIndicator();

  setTimeout(() => {
    removeLoadingIndicator();
    const response = botResponses[message.toLowerCase()] || botResponses['default'];
    addMessage(response, 'bot');
  }, 1000);
}

// Add Message to Chat
function addMessage(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${type}-message`);
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Add Loading Indicator
function addLoadingIndicator() {
  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('message', 'bot-message', 'loading');
  loadingDiv.id = 'loading';
  loadingDiv.innerHTML = `
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
  `;
  messagesDiv.appendChild(loadingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Remove Loading Indicator
function removeLoadingIndicator() {
  const loadingDiv = document.getElementById('loading');
  if (loadingDiv) messagesDiv.removeChild(loadingDiv);
}
