import { useState } from "react";
import PropTypes from "prop-types";

export default function useToggle({ open = false }) {
  const [isOpen, setIsOpen] = useState(open);
  const [payload, setPayload] = useState(null);

  const onOpen = (pyl, cb) => {
    setIsOpen(true);
    pyl && setPayload(pyl);
    cb && cb(pyl);
  };

  const onClose = (pyl, cb) => {
    setIsOpen(false);
    pyl && setPayload(pyl);
    cb && cb(pyl);
  };

  return {
    onOpen,
    onClose,
    isOpen,
    payload,
  };
}

useToggle.defaultProps = {
  open: false,
};

useToggle.propTypes = {
  open: PropTypes.bool,
};
