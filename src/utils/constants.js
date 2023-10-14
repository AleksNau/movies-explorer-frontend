const BIG_STEP = 4;
const MEDIUM_STEP = 4;
const SMALL_STEP = 2;

const BASE_URL = "https://api.nomoreparties.co";

const DISABLED_BUTTON = `profile__button profile__button_submit profile__submit_not-valid`;
const ENABLED_BUTTON = `profile__button profile__button_submit`;

const durationConverter = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
}

module.exports = {
    BIG_STEP,
    MEDIUM_STEP,
    SMALL_STEP,
    BASE_URL,
    DISABLED_BUTTON,
    ENABLED_BUTTON,
    durationConverter
}