import { animated, useSpring } from "react-spring";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
  }) as any;

  return (
    <>
      <animated.div
        style={{
          ...animation,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClose}
      >
        <animated.div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "4px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
          }}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </animated.div>
      </animated.div>
    </>
  );
};

export default Modal;
