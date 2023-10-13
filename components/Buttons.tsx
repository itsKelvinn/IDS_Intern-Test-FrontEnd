import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const PrimaryButton = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const SecondaryButton = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const OutlineButton = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const CustomButton = ({ onClick, text, color }: ButtonProps & { color: string }) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-full`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, OutlineButton, CustomButton };
