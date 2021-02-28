import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
import { GENRES } from 'take-home-test/components/main-navigation';

export default Factory.extend({
  actors() {
    const numberOfActors = faker.random.number({ min: 1, max: 3 });
    const names = [];

    for (let i = 0; i <= numberOfActors; i++) {
      names.push(faker.name.findName());
    }
    return names;
  },

  director() {
    return faker.name.findName();
  },

  genres() {
    let listOfGenres = GENRES;

    const numberOfGenres = faker.random.number({ min: 1, max: 2 });
    const genres = [];

    for (let i = 0; i < numberOfGenres; i++) {
      const newGenre = faker.random.arrayElement(listOfGenres);
      genres.push(newGenre);
      listOfGenres = listOfGenres.filter((genre) => genre !== newGenre);
    }
    return genres;
  },

  posterUrl(i) {
    return `https://picsum.photos/200/300?random=${i}`;
  },

  year() {
    return faker.random.number({
      min: 1963,
      max: new Date().getFullYear(),
    });
  },

  title(i) {
    let title = faker.company.companyName();

    title = title.replace('-', '');

    if (title.includes('Inc') || title.includes('LLC')) {
      title = title.replace('Inc', '');
      title = title.replace('LLC', '');
    }

    if (i % 3 === 0) {
      title = `The ${title} Movie`;
    }

    if (i !== 0 && i % 7 === 0) {
      title = `${title}: Part 2`;
    }

    return title;
  },

  imdbLink() {
    return 'https://www.imdb.com/title/tt0114814/';
  },

  summary() {
    return faker.lorem.paragraph();
  },

  afterCreate(movie, server) {
    for (let i = 0; i < 5; i++) {
      server.create('review', {
        content: faker.lorem.paragraph(),
        author: faker.name.findName(),
        movie,
      });
    }
  },
});
