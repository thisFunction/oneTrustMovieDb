import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-navigation', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders correct navigation elements', async function (assert) {
    const currentRouteStub = {
      queryParams: {
        filter: null,
        genre: null,
      },
    };

    this.owner.lookup('service:router').reopen({
      currentRoute: currentRouteStub,
    });
    await render(hbs`<MainNavigation />`);
    const powerSelectClass = '.ember-basic-dropdown-trigger';

    assert.equal(this.element.querySelectorAll('a').length, 2);
    assert.equal(this.element.querySelectorAll('input').length, 1);
    assert.equal(this.element.querySelectorAll(powerSelectClass).length, 1);
  });
});
