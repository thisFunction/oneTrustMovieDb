export default function () {
  this.get('/movies');
  this.get('/movies/:id');

  this.get('reviews');
  this.post('reviews', { timing: 1000 });
}
