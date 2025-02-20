import styles from './Wrapper.module.css';

interface WrapperProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, sidebar }) => {
  return (
    <div className={styles.root}>
      {sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};