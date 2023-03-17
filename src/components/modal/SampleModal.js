function SampleModal({ text, onClose }) {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-1/2 h-1/2">
          <div className="mb-4">
            <h3 className="text-lg font-medium">{text}</h3>
          </div>
          <div className="flex justify-end">
            <button
              className="text-sm font-medium text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleModal;
