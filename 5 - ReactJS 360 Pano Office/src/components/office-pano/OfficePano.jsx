import { useCallback, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import * as Marzipano from "marzipano";

import { ArrowIcon, ZoomInIcon, ZoomOutIcon } from "../icons/Icons";
import { getSource, getView, getViewerOptions } from "./OfficePanoUtilities";
import { InfoHotspot } from "./info-hotspot/InfoHotspot";
import { LinkHotspot } from "./link-hotspot/LinkHotspot";
import { OfficePanoData as data } from "./../../../public/OfficePanoData";

import styles from "./OfficePano.module.scss";

export const OfficePano = () => {
  const panoElement = useRef(null);

  // Controls
  const controlup = useRef(null);
  const controlDown = useRef(null);
  const controlLeft = useRef(null);
  const controlRigth = useRef(null);
  const controlZoomIn = useRef(null);
  const controlZoomOut = useRef(null);

  const switchScene = useCallback((id, scenes) => {
    const scene = scenes?.find((scene) => scene.data.id === id);

    scene?.view?.setParameters(scene.data.initialViewParameters);
    scene?.scene?.switchTo();
  }, []);

  const createInfoHotspotElement = useCallback((hotspot) => {
    const infoHotspotContainer = document.createElement("div");
    const root = createRoot(infoHotspotContainer);

    root.render(<InfoHotspot title={hotspot.title} text={hotspot.text} />);

    return infoHotspotContainer;
  }, []);

  const createLinkHotspotElement = useCallback(
    (hotspot, scenes) => {
      const hotspotContainer = document.createElement("div");
      const root = createRoot(hotspotContainer);

      root.render(
        <LinkHotspot switchScene={() => switchScene(hotspot.target, scenes)} />
      );

      return hotspotContainer;
    },
    [switchScene]
  );

  const generateHotspots = useCallback(
    (scenes) => {
      scenes.forEach((scene) => {
        const { scene: currentScene, data } = scene;

        // Create link hotspots.
        data.linkHotspots.forEach((hotspot) => {
          currentScene
            .hotspotContainer()
            .createHotspot(createLinkHotspotElement(hotspot, scenes), {
              yaw: hotspot.yaw,
              pitch: hotspot.pitch,
            });
        });

        // Create info hotspots.
        data.infoHotspots.forEach((hotspot) => {
          currentScene
            .hotspotContainer()
            .createHotspot(createInfoHotspotElement(hotspot), {
              yaw: hotspot.yaw,
              pitch: hotspot.pitch,
            });
        });
      });
    },
    [createLinkHotspotElement, createInfoHotspotElement]
  );

  const generateControls = useCallback((viewer) => {
    const controls = viewer.controls();
    const velocity = 0.4;
    const friction = 3;

    controls.registerMethod(
      "upElement",
      new Marzipano.ElementPressControlMethod(
        controlup.current,
        "y",
        -velocity,
        friction
      ),
      true
    );

    controls.registerMethod(
      "downElement",
      new Marzipano.ElementPressControlMethod(
        controlDown.current,
        "y",
        velocity,
        friction
      ),
      true
    );

    controls.registerMethod(
      "leftElement",
      new Marzipano.ElementPressControlMethod(
        controlLeft.current,
        "x",
        -velocity,
        friction
      ),
      true
    );

    controls.registerMethod(
      "rightElement",
      new Marzipano.ElementPressControlMethod(
        controlRigth.current,
        "x",
        velocity,
        friction
      ),
      true
    );

    controls.registerMethod(
      "inElement",
      new Marzipano.ElementPressControlMethod(
        controlZoomIn.current,
        "zoom",
        -velocity,
        friction
      ),
      true
    );

    controls.registerMethod(
      "outElement",
      new Marzipano.ElementPressControlMethod(
        controlZoomOut.current,
        "zoom",
        velocity,
        friction
      ),
      true
    );
  }, []);

  useEffect(() => {
    // Initialize viewer.
    const viewer = new Marzipano.Viewer(
      panoElement.current,
      getViewerOptions(data)
    );

    // Create scenes.
    const scenes = data.scenes.map((data) => {
      const view = getView(data, Marzipano);

      const scene = viewer.createScene({
        geometry: new Marzipano.CubeGeometry(data.levels),
        pinFirstLevel: true,
        source: getSource(data, Marzipano),
        view,
      });

      return {
        data,
        scene,
        view,
      };
    });

    // Create info and link hotspots.
    generateHotspots(scenes);
    generateControls(viewer);

    // Display the initial scene.
    switchScene(scenes[0]?.data?.id, scenes);
  }, [switchScene, generateHotspots, generateControls]);

  return (
    <section className={styles.panoContainer}>
      <div className={styles.pano} ref={panoElement}></div>

      <section className={styles.controlsContainer}>
        <div className={styles.arrowsContainer}>
          <button ref={controlup} className={styles.controlButton}>
            <ArrowIcon />
          </button>

          <button ref={controlDown} className={styles.controlButton}>
            <ArrowIcon rotation={180} />
          </button>

          <button ref={controlLeft} className={styles.controlButton}>
            <ArrowIcon rotation={-90} />
          </button>

          <button ref={controlRigth} className={styles.controlButton}>
            <ArrowIcon rotation={90} />
          </button>
        </div>
      </section>

      <section className={styles.zoomContainer}>
        <button ref={controlZoomIn} className={styles.controlButton}>
          <ZoomInIcon />
        </button>

        <button ref={controlZoomOut} className={styles.controlButton}>
          <ZoomOutIcon />
        </button>
      </section>
    </section>
  );
};
