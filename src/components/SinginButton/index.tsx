import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from "./styles.module.scss"

export function SigninButton() {
  const isUserLoggerIn = true;


  return isUserLoggerIn ? (
    <button
      type="button"
      className={styles.signinButton}
    >
      <FaGithub color="#04d361" />
      Bhunos
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signinButton}
    >
      <FaGithub color="#eba417" />
      Sing in with Github
    </button>
  )


}