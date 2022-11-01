type DeleteIconType = {
  width?: number;
  height?: number;
  fill?: string;
}

export default function DeleteIcon({ width = 25, height = 25, fill = 'none' }: DeleteIconType) {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0715 5.82001L10.3572 6.53427H6.78589V7.96281H18.2142V6.53427H14.6428L13.9286 5.82001H11.0715ZM7.50016 9.39134V18.6768C7.50016 19.4625 8.143 20.1054 8.92869 20.1054H16.0714C16.8571 20.1054 17.4999 19.4625 17.4999 18.6768V9.39134H7.50016ZM9.64296 10.8199H11.0715V18.6768H9.64296V10.8199ZM13.9286 10.8199H15.3571V18.6768H13.9286V10.8199Z" fill="black"/>
    </svg>
  )
}