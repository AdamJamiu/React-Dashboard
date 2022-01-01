import { Link } from "react-router-dom";

function Letter({ color = undefined, noLink = false, link='/'}) {
  const InnerContent = ({ color }) => (
    <h1 className="font-bold uppercase md:text-[22px]">
      Block-<span style={{ color }}>Stars</span>
    </h1>
  );
  return noLink ? (
    <InnerContent {...{ color }} />
  ) : (
    <Link to={link}>
      <InnerContent {...{ color }} />
    </Link>
  );
}
function SVG() {
  return <>Logo in SVG</>;
}

export default Object.assign(Letter, { SVG });

Letter.propTypes = {};

Letter.defaultProps = {};

SVG.propTypes = {};

SVG.defaultProps = {};
