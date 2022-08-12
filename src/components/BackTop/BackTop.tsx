
import { memo } from 'react'
import styles from './BackTop.module.sass';

export const BackTop = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.backTop} onClick={scrollToTop}>top</div>
  )
})

BackTop.displayName = 'backtop'
