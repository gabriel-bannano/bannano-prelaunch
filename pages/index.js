import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bannano</title>
        <meta name="description" content="Pre-launch program for the Bannano platform" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="Bannano Logo" width={792} height={410} layout="responsive" />
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Participate in our pre-launch program
        </h1>
        <p className={styles.description}>
          Earn your first reward by connecting your LinkedIn account and referring your friends.
        </p>
        <a className={styles.button} href="https://dev-back.bannanoapp.io/auth/linkedin">
          <div className={styles.buttoncontent}>
            <span className={styles.buttonicon}>
              <img src="/images/linkedin_icon.png" alt="LinkedIn icon" />
            </span>
            <span className={styles.buttontext}>
              Connect my LinkedIn account
            </span>
          </div>
        </a>

        <div className={styles.grid}>
          <div className={[styles.card, styles.cardfirst].join(" ")}>
            <p className={styles.cardsubtitle}>
              Hello Early Bird!
            </p>
            <h3 className={styles.cardtitle}>
              WELCOME!
            </h3>
            <hr className={styles.cardseparator}></hr>
            <p className={styles.cardtext}>
              Join our empowering community of top talent. Let&apos;s raise the bar together for better recruitment experiences! :)
            </p>
          </div>
          <div className={[styles.card, styles.cardsecond].join(" ")}>
            <p className={styles.cardsubtitle}>
              Accumulate $SMILES
            </p>
            <h3 className={styles.cardtitle}>
              FOR ELITE ACCESS
            </h3>
            <hr className={styles.cardseparator}></hr>
            <p className={styles.cardtext}>
              Refer your friends & complete your profile to accumulate $SMILES and get elite rewards and life-long discounts.
            </p>
          </div>
          <div className={[styles.card, styles.cardthird].join(" ")}>
            <p className={styles.cardsubtitle}>
              Join our virtual coctail fest!
            </p>
            <h3 className={styles.cardtitle}>
              EXCHANGE $SMILES
            </h3>
            <hr className={styles.cardseparator}></hr>
            <p className={styles.cardtext}>
              Earn enough $SMILES to join our virtual coctail fest and claim your rewards via our unique tropical coctails collection.
            </p>
            <div className={styles.cardbutton}>
              <a href="#">View collection</a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Want to become one of our 50 Bannano Ambassadors? Email us at ambassadors@bannano.io
        </p>
      </footer>
    </div>
  )
}
