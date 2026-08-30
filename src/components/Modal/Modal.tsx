import React, { useEffect, useRef, useId } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import type { UniversalProps } from '../../types';
import styles from './Modal.module.css';

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  opened: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  size?: ModalSize;
  centered?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  withCloseButton?: boolean;
}

const sizeClasses: Record<ModalSize, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl, full: styles.sizeFull,
};

export const Modal: React.FC<ModalProps> = ({
  opened, onClose, title, size = 'md', centered = true, closeOnClickOutside = true, closeOnEscape = true, withCloseButton = true, children, className, style, ...restProps
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!opened || !closeOnEscape) return;
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [opened, closeOnEscape, onClose]);

  useEffect(() => {
    if (!opened) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalOverflow; };
  }, [opened]);

  if (!opened || typeof document === 'undefined') return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnClickOutside && dialogRef.current && !dialogRef.current.contains(e.target as Node)) onClose();
  };

  const modalNode = (
    <div className={clsx(styles.root, centered ? styles.centered : styles.notCentered)} onClick={handleBackdropClick} role="presentation">
      <div className={styles.backdrop} aria-hidden="true" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} className={clsx(styles.dialog, sizeClasses[size], className)} style={style} onClick={(e) => e.stopPropagation()} {...restProps}>
        {(title || withCloseButton) && (
          <div className={styles.header}>
            {title && <h2 id={titleId} className={styles.title}>{title}</h2>}
            {withCloseButton && (
              <button type="button" aria-label="Close modal" className={styles.closeButton} onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalNode, document.body);
};
Modal.displayName = 'Modal';
