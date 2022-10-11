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
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(parseResponse)
};

export const getContent = (jwtToken) => {
    return fetch (`${BASE_URL}/users/me`, {
            headers: {
                authorization: `Bearer ${jwtToken}`,
                'Content-Type': 'application/json',
            },
        })
        .then(parseResponse)
};
