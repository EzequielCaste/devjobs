import React from 'react';
import styles from '../styles/components/Navbar.module.scss';

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <h1>DevJobs</h1>
      <h3>Find Remote Developer Jobs</h3>
    </header>
  );
};
