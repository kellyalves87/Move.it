import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/kellyalves87.png" alt="Kelly Alves" />
      <div>
        <strong>Kelly Alves</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
