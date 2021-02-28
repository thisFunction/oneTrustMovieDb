import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | thumbnail-card', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.model = server.create('movie', { title: 'Test Movie' });
  });

  test('it renders correct movie title', async function (assert) {
    await render(hbs`<ThumbnailCard @movie={{this.model}}/>`);

    assert.ok(this.element.querySelector('span').innerText, this.model.title);
  });
});
