import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const MasterCard = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={25}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12.477} r={12} fill="#fff" fillOpacity={0.5} />
    <Circle cx={28} cy={12.477} r={12} fill="#fff" fillOpacity={0.75} />
  </Svg>
);

const MasterCardColor = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={25}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12.477} r={12} fill="#eb001b" fillOpacity={0.75} />
    <Circle cx={28} cy={12.477} r={12} fill="#f79e1b" fillOpacity={0.75} />
  </Svg>
);
export default MasterCard;
export { MasterCardColor };
