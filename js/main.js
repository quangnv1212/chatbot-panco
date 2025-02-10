document.addEventListener('DOMContentLoaded', function() {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatbotButton = document.getElementById('close-chatbot');

    chatbotButton.addEventListener('click', function() {
        chatbotContainer.classList.toggle('hidden');
    });

    closeChatbotButton.addEventListener('click', function() {
        chatbotContainer.classList.add('hidden');
    });

    // Add more functionality for sending messages, etc.
});

