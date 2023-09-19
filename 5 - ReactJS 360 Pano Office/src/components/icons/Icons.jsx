export const InfoIcon = ({ width = 40, height = 40 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill: "rgba(255, 255, 255, 1)" }}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
    </svg>
  );
};

export const ArrowsUpIcon = ({ width = 40, height = 40 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill: "rgba(255, 255, 255, 1)" }}
    >
      <path d="m12 3.879-7.061 7.06 2.122 2.122L12 8.121l4.939 4.94 2.122-2.122z"></path>
      <path d="m4.939 17.939 2.122 2.122L12 15.121l4.939 4.94 2.122-2.122L12 10.879z"></path>
    </svg>
  );
};

export const ArrowIcon = ({ width = 24, height = 24, rotation = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{
        fill: "rgba(0, 0, 0, 1)",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
    </svg>
  );
};

export const ZoomInIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill: "rgba(0, 0, 0, 1)" }}
    >
      <path d="M11 6H9v3H6v2h3v3h2v-3h3V9h-3z"></path>
      <path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
    </svg>
  );
};

export const ZoomOutIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill: "rgba(0, 0, 0, 1)" }}
    >
      <path d="M6 9h8v2H6z"></path>
      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
    </svg>
  );
};
