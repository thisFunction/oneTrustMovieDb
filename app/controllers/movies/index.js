import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class MoviesIndexController extends Controller {
  queryParams = ['genre', 'filter'];

  @tracked genre = null;
  @tracked filter = null;
  @tracked model;

  get filteredMovies() {
    let movies = this.model.toArray();
    const filter = this.filter ? this.filter.toLowerCase() : null;
    const genre = this.genre;

    if (filter) {
      movies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter)
      );
    }

    if (genre) {
      movies = movies.filter((movie) => movie.genres.includes(genre));
    }

    return movies;
  }
}
