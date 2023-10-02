import {faker} from '@faker-js/faker';

const createObject = () => ({
    country: faker.location.country(),
    director: faker.person.lastName(),
    duration: faker.number.int(10),
    year: faker.number.int({min: 1900, max: 2000}),
    description: faker.commerce.productName(),
    image: faker.image.urlLoremFlickr(),
    trailer: faker.image.urlPicsumPhotos(),
    nameRU: faker.person.firstName(),
    nameEN: faker.person.firstName(),
    thumbnail: faker.image.url(),
    movieId: faker.string.uuid(),
    trailerLink: faker.image.urlLoremFlickr(),
    isSaved: faker.datatype.boolean({probability: 0.5})
});

const data = Array.from({length: 9}, createObject);


export default data;