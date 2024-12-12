// Select elements
const chatHistory = document.getElementById('chat-history');
const userMessageInput = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');

// AI Response Logic
function getAIResponse(userMessage) {
    // Simulate a delay for AI response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`You said: "${userMessage}". How can I assist you further?`);
        }, 1000); // Delay for 1 second
    });
}

// Add message to chat history
function addMessage(message, isUser) {
    const messageBubble = document.createElement('div');
    messageBubble.className = `chat-message ${isUser ? 'user-message' : 'ai-message'}`;
    messageBubble.textContent = message;
    chatHistory.appendChild(messageBubble);

    // Scroll to the bottom of chat
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Handle Send Button Click
async function sendMessage() {
    const userMessage = userMessageInput.value.trim();
    if (!userMessage) return;

    // Add user message to chat
    addMessage(userMessage, true);

    // Clear the input field
    userMessageInput.value = '';

    // Get and display AI response
    const aiResponse = await getAIResponse(userMessage);
    addMessage(aiResponse, false);
}

// Event Listeners
sendButton.addEventListener('click', sendMessage);
userMessageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
