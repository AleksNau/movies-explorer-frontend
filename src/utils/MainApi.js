class mainApi {
    constructor(url) {
        this._url = url;
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }

    registration(data) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email, password:data.password, name: data.name }),
        }).then(this._checkResponse);
    }



    signin(data) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email, password:data.password }),
        }).then(this._checkResponse);
    }

//не уверен что нужно
    getContent(token) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then(this._checkResponse);
    }

    getProfileInfo(token) {
        return fetch(this._url + "/users/me", {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }

    //функция обновления данных профиля
    setProfileInfo(profile,token) {
        return fetch(this._url + "/users/me", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                name: profile.name,
                email: profile.email,
            }),
        }).then(this._checkResponse);
    }

    deleteCard(id,token) {
        return fetch(this._url + `/cards/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }
}

const authMain = new mainApi("http://localhost:3000");
export default authMain;
