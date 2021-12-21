import PropTypes from "prop-types";

export default function SVGIcon({ src, alt, sx }) {
  return (
    <>
      <img {...{ src, alt }} style={sx} />
    </>
  );
}

SVGIcon.defaultProps = {
  src: "https://via.placeholder.com/20",
  alt: "Image placeholder",
  sx: { width: 12, height: 12 },
};

SVGIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  sx: PropTypes.any,
};
