import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './UserProfile.module.css'

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://randomuser.me/api/')
      const userData = response.data.results[0]
      setUser(userData)
    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className={styles.container}>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        user && (
          <div className={styles.userCard}>
            <img
              className={styles.avatar}
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <h2 className={styles.name}>
              {user.name.first} {user.name.last}
            </h2>
            <p className={styles.email}>{user.email}</p>
            <p className={styles.location}>
              {user.location.city}, {user.location.country}
            </p>
          </div>
        )
      )}
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  )
}

export default UserProfile
