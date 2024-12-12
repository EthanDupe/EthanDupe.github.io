// Select elements
const chatHistory = document.getElementById('chat-history');
const userMessageInput = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');

// Load preprogrammed responses
let responses = {};

// Fetch responses from the JSON file
async function loadResponses() {
    try {
        const response = await fetch('responses.json');
        responses = await response.json();
    } catch (error) {
        console.error("Failed to load responses:", error);
    }
}

// AI Response Logic
function getAIResponse(userMessage) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Find a response or use the default
            const messageKey = userMessage.toLowerCase();
            const aiResponse = responses[messageKey] || responses["default"];
            resolve(aiResponse);
        }, 1000); // Simulate AI processing delay
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

// Initialize chatbot
loadResponses();
