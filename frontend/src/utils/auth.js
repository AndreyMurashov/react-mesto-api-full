export const BASE_URL = 'https://api.murashov.students.nomoredomains.icu';

const parseResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }


export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(parseResponse)
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(parseResponse)
};

export const getContent = (token) => {
    return fetch (`${BASE_URL}/users/me`, {
            credentials: 'include',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(parseResponse)
};