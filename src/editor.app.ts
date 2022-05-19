import type { WidgetInstallationType } from '@wix/platform-editor-sdk';
import { EditorReadyFn } from '@wix/yoshi-flow-editor';
import { AppManifest } from '@wix/app-manifest-builder';
import { fetchWidgetsStageData } from '@wix/bob-widget-services';

const presets = { desktop: 'variants-l2q7990q' };

export const getAppManifest = async (options): Promise<AppManifest> => {
  const { appManifestBuilder } = options;
  const baseManifest = await fetchWidgetsStageData(options);
  return appManifestBuilder.withJsonManifest(baseManifest).build();
};

export const editorReady: EditorReadyFn = async (
  editorSDK,
  appDefId,
  options,
  flowAPI,
) => {
  if (options.firstInstall) {
    await editorSDK.application.appStudioWidgets.addWidget('', {
      widgetId: '7c035ce9-bcb4-4aa7-8921-ae9fc75fad29',
      installationType: 'closed' as WidgetInstallationType,

      scopedPresets: {
        desktop: {
          layout: presets.desktop,
          style: presets.desktop,
        },
      },

      layout: {
        height: 100,
        width: 100,
        x: 0,
        y: 100,
      },
    });
  }
};
