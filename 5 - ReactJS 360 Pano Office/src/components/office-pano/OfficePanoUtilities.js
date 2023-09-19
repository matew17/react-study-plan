const getViewerOptions = (data) => ({
  controls: {
    mouseViewMode: data.settings.mouseViewMode,
  },
});

const getSource = (data, Marzipano) => {
  const urlPrefix = "./tiles";

  const source = Marzipano.ImageUrlSource.fromString(
    urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
    { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" }
  );

  return source;
};

const getView = (data, Marzipano) => {
  const limiter = Marzipano.RectilinearView.limit.traditional(
    data.faceSize,
    (100 * Math.PI) / 180,
    (120 * Math.PI) / 180
  );

  const view = new Marzipano.RectilinearView(
    data.initialViewParameters,
    limiter
  );

  return view;
};

export { getSource, getView, getViewerOptions };
