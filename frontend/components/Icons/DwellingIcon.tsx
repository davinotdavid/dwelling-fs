type DwellingIconType = {
  width?: number;
  height?: number;
  fill?: string;
}

export default function DwellingIcon({ width = 85, height = 78, fill = 'none' }: DwellingIconType) {
  return (
    <svg width={width} height={height} viewBox="0 0 85 78" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M0.855286 35.5344V75.9693C0.855286 76.9608 1.65907 77.7646 2.65058 77.7646H82.364C83.3555 77.7646 84.1593 76.9608 84.1593 75.9693V36.525C84.1593 35.8545 83.9715 35.1973 83.6173 34.628L62.1699 0.159378L43.0654 31.1325C41.2927 33.9796 38.1763 35.5344 34.8225 35.5344H0.855286Z" fill="#141414"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M62.1699 0.159378L43.0654 31.1323C41.2926 33.9793 38.1762 35.5294 34.8224 35.5294H0.855988L15.7784 10.0309C16.3051 9.13096 17.1969 8.50442 18.2221 8.31415L62.1699 0.159378Z" fill="#141414"/>
    </svg>
  )
}