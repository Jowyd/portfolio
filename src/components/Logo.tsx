interface LogoIconProps {
  width: number;
  height: number;
}

const LogoIcon = ({ width, height }: LogoIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M122.363 90.3495C117.674 95.9288 117.674 104.071 122.363 109.65L160.767 155.349C168.968 165.108 162.031 180 149.284 180H51.0288C38.2821 180 31.3446 165.108 39.5454 155.349L77.9499 109.65C82.6386 104.071 82.6386 95.9288 77.9498 90.3495L39.5453 44.6504C31.3446 34.8921 38.2821 20 51.0288 20L149.284 20C162.03 20 168.968 34.8921 160.767 44.6504L122.363 90.3495Z"
        fill="url(#paint0_linear_105_736)"
      />{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_105_736"
          x1="149.557"
          y1="20"
          x2="39.7213"
          y2="117.692"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stop-color="#5f5863" /> <stop offset="1" stop-color="#E7E9FF" />{" "}
        </linearGradient>{" "}
      </defs>{" "}
    </svg>
  );
};

export default LogoIcon;
