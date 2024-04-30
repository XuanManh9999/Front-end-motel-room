import React from "react";

function Button({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) {
  return (
    <button
      type="button"
      className={`p-2 block ${textColor} ${bgColor} outline-none border-none rounded-md cursor-pointer hover:underline flex items-center gap-1 ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={onClick}
    >
      <span className="w-full">{text}</span>
      {IcAfter && <IcAfter />}
    </button>
  );
}

export default React.memo(Button);
