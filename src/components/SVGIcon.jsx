import PropTypes from "prop-types";

export default function SVGIcon({ src, alt }) {
  return (
    <>
      <img {...{ src, alt }} />
    </>
  );
}

SVGIcon.defautPropTypes = {
  src: "https://via.placeholder.com/16",
  alt: "Image placeholder",
};

SVGIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
