import { SubpageLayout } from "../components/SubpageLayout";
import reusableStyles from "../reusable.module.css";
import styles from "./WorkshopsChildren.module.css";
import { cx } from "../utils/classnames";
import { useScrollToSection } from "../utils/useScrollToSection";
import { Workshops } from "../components/Workshops";
import homeStyles from "./Home.module.css";
import wokshopsChildrenPoster from "../assets/workshops-children-poster.jpg";
import wokshopsChildrenPhoto from "../assets/children-workshops-photo.jpg";
import wokshopsChildrenVinyl from "../assets/children-workshops-vinyl.jpg";
import { Link } from "react-router-dom";

export const WorkshopsChildren = () => {
  useScrollToSection();

  return (
    <main className={reusableStyles.sectionText}>
      <SubpageLayout>
        <h1 className={cx([reusableStyles.sectionTitle, styles.title])}>
          Warsztaty dla <div>dzieci i młodzieży</div>
        </h1>
        <p className={styles.description}>
          Warsztaty DJ-skie dla dzieci i młodzieży w wieku 7-10 ,11-14, 15-19
          lat. To świetna okazja, by wkroczyć w świat muzyki, miksowania utworów
          i tworzenia własnych dźwięków. To podróż do przeszłości, aby zobaczyć
          jak nasi rodzice i dziadkowie słuchali swoich ulubionych utworów z
          płyt winylowych czy kaset magnetofonowych. To muzyczna przygoda, która
          może stać się początkiem nowej pasji!
        </p>
        <section className={styles.content}>
          <div className={styles.topText}>
            <Workshops
              services={[
                {
                  title: "Co czeka uczestników?",
                  offer: [
                    {
                      detail: "Nauka podstaw rytmiki",
                    },
                    {
                      detail:
                        "Miksowanie utworów i eksperymentowanie z efektami oraz samplami",
                    },
                    {
                      detail: "Poznanie sztuki scratchowania",
                    },
                    {
                      detail:
                        "Samplowanie i stworzenie własnego pierwszego beatu",
                    },
                  ],
                },
              ]}
            />
            <Workshops
              services={[
                {
                  title: "Cele warsztatów:",
                  offer: [
                    {
                      detail: "Rozwój słuchu muzycznego i wyczucia rytmu",
                    },
                    {
                      detail: "Nauka obsługi sprzętu i podstaw DJ-ingu",
                    },
                    {
                      detail:
                        "Rozwój kreatywności i wyrażania siebie przez muzykę",
                    },
                  ],
                },
              ]}
            />
          </div>
          <img
            src={wokshopsChildrenPhoto}
            alt="warsztaty dla dzieci i młodzieży"
            className={styles.image}
          />
        </section>
        <section>
          <h2 className={reusableStyles.sectionTitle}>Organizator:</h2>
          <p className={reusableStyles.text}>
            Stowarzyszenie Projekt New Hope – białostocka szkoła DJ-ska oraz
            przestrzeń działań kreatywnych, gdzie rozwijane są muzyczne talenty
            i pielęgnowana jest pasja do muzyki. To miejsce spotkań, wydarzeń
            kulturalnych oraz wymiany doświadczeń i inspiracji.
          </p>
          <h3 className={reusableStyles.sectionTitle}>Kiedy?</h3>
          <p className={reusableStyles.text}>Do wyboru są 3 terminy:</p>
          <p className={reusableStyles.text}>● piątek godz. 17:00– 20:00</p>
          <p className={reusableStyles.text}>● sobota godz. 11:00–14:00</p>
          <p className={reusableStyles.text}>● niedziela godz. 11:00–14:00</p>
          <p className={reusableStyles.text}>
            Pracujemy w kameralnych grupach.
          </p>
          <h3 className={reusableStyles.sectionTitle}>Gdzie?</h3>
          <p className={reusableStyles.text}>Szkoła Projektu New Hope</p>
          <p className={reusableStyles.text}>
            ul. Kardynała Stefana Wyszyńskiego 6a, lok. 07, Białystok
          </p>
          <p>
            Zobacz jak dojechać &rarr;{" "}
            <Link className={reusableStyles.link} to="/kontakt#lokalizacja">
              link
            </Link>
          </p>
          <h3 className={reusableStyles.sectionTitle}>Koszt:</h3>
          <p className={reusableStyles.text}>250 zł za warsztat (3h)</p>
          <h3 className={reusableStyles.sectionTitle}>Zapisy:</h3>
          <p className={reusableStyles.contact}>projektnewhope@gmail.com</p>
          <p className={cx([reusableStyles.contact, reusableStyles.text])}>
            +48 530 546 016
          </p>
          <div style={{ margin: "50px 0 40px 0" }}>
            <Link
              to="https://docs.google.com/forms/d/1_H8WGeKP34j5NfmLXdaqLgsfujUKh7-5Zq_AkDT0dXY/viewform?edit_requested=true"
              target="_blank"
              className={homeStyles.linkButton}
            >
              Wypełnij formularz zgłoszeniowy
            </Link>
          </div>
        </section>
        <section className={styles.bottomImages}>
          <img
            src={wokshopsChildrenVinyl}
            alt="warsztaty dla dzieci i młodzieży - winyl"
            className={styles.image}
          />
          <img
            src={wokshopsChildrenPoster}
            alt="plakat warsztatów dla dzieci i młodzieży"
            className={styles.image}
          />
        </section>
      </SubpageLayout>
    </main>
  );
};
