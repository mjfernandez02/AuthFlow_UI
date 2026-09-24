import mapleSrc from "../assets/maple.svg";
import coinSrc from "../assets/coin.svg";
import zapSrc from "../assets/zap.svg";

export const Maple = ({ alt = "Maple the fox", ...props }) => (
  <img src={mapleSrc} alt={alt} {...props} />
);

export const Coin = ({ alt = "coin", ...props }) => (
  <img src={coinSrc} alt={alt} {...props} />
);

export const Zap = ({ alt = "zap", ...props }) => (
  <img src={zapSrc} alt={alt} {...props} />
);
