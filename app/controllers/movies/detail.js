import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class MoviesDetailController extends Controller {
  @service store;

  @tracked addingReview = false;
  @tracked viewAllReviews = false;
  @tracked reviewAdded = false;
  @tracked content = null;
  @tracked author = null;

  get displayReviews() {
    const sortedArray = this.model.reviews
      .toArray()
      .sort((a, b) => b.id - a.id);

    if (this.viewAllReviews) {
      return sortedArray;
    }

    return sortedArray.slice(0, 2);
  }

  @action toggleAddReview() {
    this.addingReview = !this.addingReview;
  }

  @action
  toggleReviews() {
    this.viewAllReviews = !this.viewAllReviews;
  }

  @task
  *submitReview() {
    const movie = this.model;

    const record = this.store.createRecord('review', {
      author: this.author ? this.author : 'anonymous',
      content: this.content ? this.content : 'no comment',
      movie,
    });

    yield record.save();
    this.content = '';
    this.author = '';
    this.reviewAdded = true;
    this.addingReview = false;

    yield timeout(5000);
    this.reviewAdded = false;
  }
}
