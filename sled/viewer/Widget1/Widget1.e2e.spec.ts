/// <reference types="@wix/sled-test-runner" />

import { withViewer } from '@wix/yoshi-flow-editor/sled';
import { flowModel } from '../../flowModel';

describe('Widget1 widget', () => {
  it(
    'should render a widget with content',
    withViewer(
      { component: flowModel.components['Widget1'], ssrOnly: false },
      async ({ getDriverByNickname, initDriversOnPage }) => {
        // Here, you can use `getDriverByNickname` to access app's elements via velo nickname:
        // const [widgetDriver] = await initDriversOnPage('AppWidgetTestkit');
        // const { testkit: textInputDriver } = await getDriverByNickname(widgetDriver.id, 'TextInputTestkit', 'input1');
        // textInputDriver.enterValue('hey');
        // ...
        // expect(textInputDriver.value).toBe('hey');
      },
    ),
  );
});
