import React from "react";

const LoginModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white rounded-lg p-8 w-96 shadow-md relative h-96">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default LoginModal;
