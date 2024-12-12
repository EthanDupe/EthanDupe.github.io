fetch('responses.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch responses.json: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const responses = data;

    function sendMessage() {
      const message = document.getElementById('user-message').value;
      const chatHistory = document.querySelector('.chat-history');

      // Display user message
      const userMessage = document.createElement('div');
      userMessage.classList.add('user-message', 'message');
      userMessage.textContent = `You: ${message}`;
      chatHistory.appendChild(userMessage);

      // Display typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.classList.add('typing-indicator');
      chatHistory.appendChild(typingIndicator);

      // Simulate processing time and display bot response
      setTimeout(() => {
        typingIndicator.remove();

        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message', 'message');

        // Check if the user's message matches a key in the responses object
        const response = responses[message.toLowerCase()] || "I didn't understand. Please try asking something else.";

        // Simulate typing effect
        let i = 0;
        const interval = setInterval(() => {
          botMessage.textContent += response[i];
          i++;
          if (i === response.length) {
            clearInterval(interval);
          }
        }, 50); // Adjust delay as needed

        chatHistory.appendChild(botMessage);
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // Clear the input field
        document.getElementById('user-message').value = '';
      }, 1000); // Adjust delay time as needed
    }
  })
  .catch(error => {
    console.error('Error fetching responses:', error);
    alert('An error occurred while fetching responses. Please check your network connection or the JSON file and try again.');
  });
