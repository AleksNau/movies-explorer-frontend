class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }

    getCards() {
        return fetch(this._baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._checkResponse);
    }
}

// Создаём экземпляр класса Api
const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default moviesApi;