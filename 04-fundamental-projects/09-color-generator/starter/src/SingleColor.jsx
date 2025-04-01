import INCREMENTS from './utils';
import { toast } from 'react-toastify';
const SingleColor = ({ index, color }) => {
  // color: {
  //   hex, type, weight, rgb, hexString;
  // }
  const { hex, type, weight, rgb } = color;
  const [r, g, b] = rgb;

  const saveToClipboard = async (hex) => {
    if (navigator.clipboard) {
      try {
        // await navigator.clipboard.writeText(`#${hex}`);
        await navigator.clipboard.writeText(color.hexString());
        const msg = `${color.hexString()} copied to clipboard!`;
        toast.success(msg);
      } catch (error) {}
    } else {
      toast.error('Clipboard not available');
    }
  };
  return (
    <article
      onClick={() => saveToClipboard(hex)}
      className={index > 100 / INCREMENTS ? 'color color-light' : 'color'}
      style={{ background: color.hexString() }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{color.hexString()}</p>
      {/* <h6>RGB: {`${r},${g},${b} `}</h6>
      <h6>Hex: `#${hex}`</h6>
      <h6>Weight: {weight}</h6> */}
    </article>
  );
};
export default SingleColor;
