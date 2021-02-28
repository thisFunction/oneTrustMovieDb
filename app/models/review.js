import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReviewModel extends Model {
  @attr('string') author;
  @attr('string') content;
  @belongsTo('movie') movie;
}
