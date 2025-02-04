const config = { 
  baseUrl: 'https://nomoreparties.co/v1/pwff-cohort-1', 
  headers: { 
    authorization: '4dcca27c-ad6b-4c7a-8946-3b53d9b05383', // Твой токен 
    'Content-Type': 'application/json' 
  } 
}; 

// Функция обработки response
const handleResponse = (res) => res.ok 
  ? res.json() 
  : res.json().then(err => Promise.reject(`Ошибка ${res.status}: ${err.message || err}`));

// Получение информации о пользователе
export const getUserInfo = () => fetch(`${config.baseUrl}/users/me`, { headers: config.headers }).then(handleResponse);

// Получение карточек
export const getInitialCards = () => fetch(`${config.baseUrl}/cards`, { headers: config.headers }).then(handleResponse);

// Редактирование профиля
export const editUserInfo = (name, about) => fetch(`${config.baseUrl}/users/me`, { 
  method: 'PATCH', 
  headers: config.headers, 
  body: JSON.stringify({ name, about }) 
}).then(handleResponse);

// Добавление новой карточки
export const addNewCard = (cardData) => fetch(`${config.baseUrl}/cards`, { 
  method: 'POST', 
  headers: config.headers, 
  body: JSON.stringify({ 
    name: cardData.name.trim(), 
    link: cardData.link.trim() 
  }) 
}).then(handleResponse);

// Удаление карточки
export const removeCard = (cardId) => fetch(`${config.baseUrl}/cards/${cardId}`, { 
  method: 'DELETE', 
  headers: config.headers 
}).then(handleResponse);

// Лайк на карточку
export const addLike = (cardId) => fetch(`${config.baseUrl}/cards/likes/${cardId}`, { 
  method: 'PUT', 
  headers: config.headers 
}).then(handleResponse);

// Удаление лайка
export const deleteLike = (cardId) => fetch(`${config.baseUrl}/cards/likes/${cardId}`, { 
  method: 'DELETE', 
  headers: config.headers 
}).then(handleResponse);

// Смена аватара
export const addNewAvatar = (imglink) => fetch(`${config.baseUrl}/users/me/avatar`, { 
  method: 'PATCH', 
  headers: config.headers, 
  body: JSON.stringify({ avatar: imglink.trim() }) 
}).then(handleResponse);
