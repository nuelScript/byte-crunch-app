import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface CustomModalProps {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  onBackdropClick?: () => void;
}
const CustomModal = (props: CustomModalProps) => {
  const { isOpen, className, children, onBackdropClick } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = event.currentTarget as HTMLDialogElement;
    var rect = dialog.getBoundingClientRect();
    var isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog && onBackdropClick) {
      onBackdropClick();
    }
  };

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);
  return (
    <dialog
      onClick={handleClick}
      ref={dialogRef}
      className={`open:animate-slide-down ${className}`}
    >
      {children}
    </dialog>
  );
};

export default CustomModal;
