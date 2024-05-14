const login = document.querySelector('.login');
const loginForm = document.querySelector('.login__form');
const loginInput = document.querySelector('.login__input');

const chat = document.querySelector('.chat');
const chatForm = document.querySelector('.chat__form');
const chatInput = document.querySelector('.chat__input');

const user = { 
    id: '', 
    name: '', 
    color: '' 
};

let ws;

const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;

const processMessage = (e) => {
    console.log(e.data);
}

const handleLogin = (e) => {
    e.preventDefault();

    user.id = crypto.randomUUID();
    user.name = loginInput.value;
    user.color = getRandomColor();

    login.style.display = 'none';
    chat.style.display = 'flex';

    ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = processMessage;
    // ws.onopen = () => ws.send(`Usuário: "${user.name}" entrou no chat!`);
    
    console.log(user);
};

const sendMessage = (e) => {
    e.preventDefault();

    ws.send(chatInput.value);
};

loginForm.addEventListener('submit', handleLogin);
chatForm.addEventListener('submit', sendMessage);