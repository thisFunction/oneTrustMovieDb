import Route from '@ember/routing/route';

export default class MoviesDetailRoute extends Route {
  model(params) {
    return this.store.findRecord('movie', params.id, { include: 'reviews' });
  }

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.viewAllReviews = false;
    }
  }
}
