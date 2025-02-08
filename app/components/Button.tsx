// Button.tsx
interface ButtonProps {
  styles: string;
  onClick?: () => void; // Make onClick optional
}

const Button = ({ styles, onClick }: ButtonProps) => {
  return (
    <button
      className={`btn ${styles} text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 ease-in-out bg-gray-600 hover:bg-gray-700 active:scale-95`}
      onClick={onClick}
    >
      Contact
    </button>
  );
};

export default Button;
