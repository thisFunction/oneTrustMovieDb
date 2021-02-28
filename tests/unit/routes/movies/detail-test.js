import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movies/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:movies/detail');
    assert.ok(route);
  });
});
