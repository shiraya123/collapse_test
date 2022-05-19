/// <reference types="@wix/sled-test-runner" />

import { withViewer } from '@wix/yoshi-flow-editor/sled';
import { flowModel } from '../../flowModel';

describe('Widget1 snapshot', () => {
  it(
    'should make a snapshot',
    withViewer(
      {
        component: flowModel.components['Widget1'],
      },
      async ({ page }) => {
        expect(await page.screenshot()).toMatchImageSnapshot();
      },
    ),
  );
});
