import Spotify from '../assets/Spotify.svg'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.logo}>
      <img src={Spotify} alt='Spotify' />
      <h3>Spotify</h3>
    </div>
  )
}
