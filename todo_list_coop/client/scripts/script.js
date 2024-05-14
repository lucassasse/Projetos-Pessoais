

/*
const login = document.querySelector('.login');
const loginForm = document.querySelector('.login__form');
const loginInput = document.querySelector('.login__input');

const chat = document.querySelector('.chat');
const chatForm = document.querySelector('.chat__form');
const chatInput = document.querySelector('.chat__input');
const chatMessages = document.querySelector('.chat__messages');

let ws;

const user = { 
    id: '', 
    name: '', 
    color: '' 
};

const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;

const scrollScreen = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

const createMessageSelfElement = (content) => {
    const div = document.createElement('div');

    div.classList.add('message--self');
    div.innerHTML = content;

    return div;
}

const createMessageOtherElement = (content, sender, senderColor) => {
    const div = document.createElement('div');
    const span = document.createElement('span');

    div.classList.add('message--other');
    div.classList.add('message--self');
    span.classList.add('message--sender');

    span.style.color = senderColor;

    div.appendChild(span);

    span.innerHTML = sender;
    div.innerHTML += content;

    return div;
}

const processMessage = ({ data }) => {
    const { userId, userName, userColor, content } = JSON.parse(data);

    const element = userId === user.id ? createMessageSelfElement(content) : createMessageOtherElement(content, userName, userColor);

    chatMessages.appendChild(element);

    scrollScreen();
}

const handleLogin = (e) => {
    e.preventDefault();

    user.id = crypto.randomUUID();
    user.name = loginInput.value;
    user.color = getRandomColor();

    login.style.display = 'none';
    chat.style.display = 'flex';

    ws = new WebSocket('wss://socket-chat-ytst.onrender.com');
    ws.onmessage = processMessage;
};

const sendMessage = (e) => {
    e.preventDefault();

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    };

    ws.send(JSON.stringify(message));

    chatInput.value = '';
};

loginForm.addEventListener('submit', handleLogin);
chatForm.addEventListener('submit', sendMessage);
*/