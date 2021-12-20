function Letter() {
  return (
    <h1 className="font-bold">
      Block-<span>Stars</span>
    </h1>
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
