export const OfficePanoData = {
  scenes: [
    {
      id: "0-panorama",
      name: "panorama",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        yaw: -0.5430103030936984,
        pitch: 0.010836162902734259,
        fov: 1.2986681795556048,
      },
      linkHotspots: [
        {
          yaw: 1.990228145651841,
          pitch: 0.07433005719219565,
          rotation: 0,
          target: "1-panorama-1",
        },
        {
          yaw: -1.912201394753625,
          pitch: 0.004387197449583269,
          rotation: 0,
          target: "2-panorama-2",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.7161956526873361,
          pitch: 0.07953111884023656,
          title: "Desk",
          text: "A regular dev desk",
        },
      ],
    },
    {
      id: "1-panorama-1",
      name: "panorama (1)",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.099971777717542,
          pitch: -0.026024514516819863,
          rotation: 0,
          target: "0-panorama",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-panorama-2",
      name: "panorama (2)",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.452109746800261,
          pitch: 0.0002744643706851235,
          rotation: 0,
          target: "0-panorama",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "MyOffice",
  settings: {
    mouseViewMode: "drag",
  },
};
