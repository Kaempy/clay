const Luna = () => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_16_412)">
        <circle cx="19.5" cy="18.5" r="3.5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_16_412"
          x="0.5"
          y="0.5"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_16_412"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="5.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_16_412"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_16_412"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Luna;
