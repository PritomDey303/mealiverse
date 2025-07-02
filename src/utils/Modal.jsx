const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="bg-black/50 shadow-xl z-50 fixed inset-0 flex items-center justify-center backdrop-blur-xs ">
      <div
        className="bg-white rounded-2xl shadow-xl px-6 py-3 w-[90%] max-w-md relative animate-fade-in  min-h-[40vh]
"
      >
        <div className="flex">
          <span
            onClick={onClose}
            className="ml-auto text-4xl font-bold text-red-500 cursor-pointer hover:text-red-700 transition"
          >
            &times;
          </span>
        </div>
        {/* modal-content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
