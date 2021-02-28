import Model, { attr, hasMany } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr('string') title;
  @attr('string') posterUrl;
  @attr('string') year;
  @attr('string') imdbLink;
  @attr('string') summary;
  @attr('string') director;

  @attr() actors;
  @attr() genres;

  @hasMany('review') reviews;
}
