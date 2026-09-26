import mapleSrc from "../assets/maple.svg";
import coinSrc from "../assets/coin.svg";
import coinGreenSrc from "../assets/coin-green.svg";
import cherrySrc from "../assets/cherry.svg";
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

export const Cherry = ({ alt = "cherries", ...props }) => (
  <img src={cherrySrc} alt={alt} {...props} />
);

export const CoinGreen = ({ alt = "coin", ...props }) => (
  <img src={coinGreenSrc} alt={alt} {...props} />
);
