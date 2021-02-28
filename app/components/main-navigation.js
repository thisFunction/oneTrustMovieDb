import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export const GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Science Fiction',
  'Thriller',
];

export default class MainNavigationComponent extends Component {
  @service router;

  @tracked selectedGenre = this.router.currentRoute.queryParams.genre;
  @tracked filter = this.router.currentRoute.queryParams.filter;

  genres = GENRES;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', (transition) => {
      this.selectedGenre = transition.to.queryParams.genre;
      this.filter = transition.to.queryParams.filter
        ? transition.to.queryParams.filter
        : null;
    });
  }

  @action
  setSelectedGenre(genre) {
    this.selectedGenre = genre;

    this.router.transitionTo('movies', {
      queryParams: { genre, filter: this.filter },
    });
  }

  @action
  searchMovies() {
    const filter = this.filter ? this.filter : null;
    this.router.transitionTo('movies', {
      queryParams: { genre: this.selectedGenre, filter },
    });
  }

  @action
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
