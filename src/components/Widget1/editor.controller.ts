import { GetWidgetManifestFn } from '@wix/yoshi-flow-editor/blocks';

export const getWidgetManifest: GetWidgetManifestFn = (controllerBuilder) => {
  controllerBuilder.set({
    displayName: 'First Widget',
    nickname: 'firstWidget',
  });
};
