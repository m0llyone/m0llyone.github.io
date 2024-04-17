import styles from './Button.module.css';

export const Button = ({
  id,
  onClick,
  addStyles,
  children,
  params,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      params={params}
      className={
        addStyles ? [addStyles, styles.button].join(' ') : styles.button
      }
    >
      {children}
    </button>
  );
};
