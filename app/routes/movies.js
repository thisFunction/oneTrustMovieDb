import Route from '@ember/routing/route';

export default class MoviesRoute extends Route {
  model() {
    return this.store.findAll('movie');
  }
}
