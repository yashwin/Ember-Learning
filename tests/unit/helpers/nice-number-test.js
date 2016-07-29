import { niceNumber } from 'github-ui/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(niceNumber([]),'','Empty');
  assert.equal(niceNumber([42]),'42','A number < 1000');
  assert.equal(niceNumber([4299]),'4.3K','A number > 1000');
});
