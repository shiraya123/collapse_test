import model from './model';

export default model.createController(({ $w, $widget, flowAPI }) => {
  return {
    pageReady: async () => {
      $w('#text9').collapse();
      if ($w('#text10').text) {
        console.log($w('#text10').text);
        $w('#text10').expand();
      }
    },
    exports: {},
  };
});
