import { SubpageLayout } from "../components/SubpageLayout";
import reusableStyles from "../reusable.module.css";
import longVoucher from "../assets/voucher-long.png";
import bgVoucher from "../assets/voucher-bg.png";
import vinylVoucher from "../assets/voucher-vinyl.webp";
import styles from "./Voucher.module.css";
import { cx } from "../utils/classnames";
import homeStyles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useScrollToSection } from "../utils/useScrollToSection";
import { Workshops } from "../components/Workshops";
import { TagPrice } from "../components/TagPrice";

export const Voucher = () => {
  useScrollToSection();

  return (
    <main className={styles.text}>
      <SubpageLayout>
        <h1 className={cx([reusableStyles.sectionTitle, styles.title])}>
          Vinyl <div>Voucher</div>
        </h1>
        <div className={styles.content}>
          <section className={styles.content}>
            <div className={styles.textContainer}>
              <p className={reusableStyles.text}>
                Marzysz o spróbowaniu przygody z DJ-ką, ale nie wiesz czy to dla
                Ciebie?
              </p>
              <p className={reusableStyles.text}>
                Spełniamy marzenia i przedstawiamy vouchery na warsztaty dla
                początkujących!
              </p>
              <p className={reusableStyles.text}>
                To super prezent pod choinkę lub na inną okazję, dla znajomych,
                bliskich, a dlaczego nie... dla siebie!
              </p>
              <p className={reusableStyles.text}>
                Nasze warsztaty to świetne wprowadzenie do rozpoczęcia przygody
                z zajawką DJ-ską. Nie wymagamy od Ciebie żadnego doświadczenia,
                ani posiadania sprzętu. Wszystko co potrzebne do nauki
                znajdziesz w naszej szkole.
              </p>

              <p className={reusableStyles.text}>
                Warsztaty prowadzą DJ-e z wieloletnim doświadczeniem.
              </p>
              <p className={reusableStyles.text}>
                W trakcie zajęć w skorzystasz z profesjonalnego sprzętu, jaki
                używany jest przez profesjonalnych DJ-ów i poznasz tajniki
                miksowania i układania setów.
              </p>
              <p className={reusableStyles.littleText}>
                * W warsztatach mogą wziąć udział również dzieci od 12 roku
                życia.
              </p>
            </div>
            <img src={longVoucher} alt="voucher" className={styles.image} />
          </section>
          <section className={styles.content}>
            <img src={bgVoucher} alt="tło voucher" className={styles.image} />
            <div className={styles.textContainer}>
              <p className={reusableStyles.text}>
                Vinyl Voucher możesz kupić przy pomocy poniższego formularza.
              </p>
              <p className={reusableStyles.text}>
                Wybierz rodzaj: podstawowy / rozszerzony (
                <Link
                  to="../vinyl-voucher#szczegoly"
                  className={reusableStyles.link}
                >
                  zobacz szczegóły &darr;)
                </Link>
                , uzupełnij dane osoby kupującej (jeśli to voucher na prezent -
                nie wpisuj tam danych osoby dla której kupujesz). Wpisz kod
                rabatowy jeśli posiadasz i zapłać wygodnie online.
              </p>
              <div style={{ margin: "50px 0 40px 0" }}>
                <Link
                  to="https://forms.gle/9P2ouooeziDgCa777"
                  target="_blank"
                  className={homeStyles.linkButton}
                >
                  Zamawiam voucher
                </Link>
              </div>
              <p className={reusableStyles.text}>
                Vinyl voucher w formie eleganckiej, 12-calowej płyty winylowej z
                naszym nadrukiem i instrukcjami realizacji możesz odebrać w
                siedzibie szkoły DJ-skiej Projektu New Hope:
              </p>
              <p className={reusableStyles.text}>
                Wyszyńskiego 6a/07, Białystok.
              </p>
              <p className={reusableStyles.text}>
                Możliwa jest również wysyłka na adres pocztowy - pamiętaj tylko,
                że warsztaty są przeprowadzane w siedzibie szkoły.
              </p>
            </div>
          </section>
          <section className={styles.content} id="szczegoly">
            <h2 className={reusableStyles.sectionTitle}>Rodzaje voucherów</h2>
            <div className={styles.content}>
              <div className={styles.section}>
                <TagPrice
                  title="Vinyl voucher - warsztat podstawowy"
                  price="200 zł"
                />
                <Workshops
                  services={[
                    {
                      offer: [
                        { detail: "czas trwania: 120 minut" },
                        { detail: "kameralna grupa - max. 4 osób" },
                        {
                          detail:
                            "podstawowa wiedza o profesjonalnym sprzęcie i oprogramowaniu DJskim",
                        },
                        {
                          detail:
                            "nauka rozpoznawania fraz, bitów i struktury utworu",
                        },
                        {
                          detail: "beatmatching i podstawy miksowania utworów ",
                        },
                        { detail: "dyplom ukończenia" },
                      ],
                      title: "Co w środku?",
                    },
                  ]}
                />
                <p>
                  Po warsztacie będziesz mieć podstawową wiedzę niezbędną do
                  rozpoczęcia swojej przygody z zajawką DJską
                </p>
              </div>
              <div className={styles.section}>
                <TagPrice
                  title="Vinyl voucher - warsztat rozszerzony"
                  price="350 zł"
                />
                <Workshops
                  services={[
                    {
                      offer: [
                        { detail: "czas trwania: 240 minut" },
                        { detail: "kameralna grupa - max. 4 osób" },
                        {
                          detail:
                            "idealny na start od zera i głębsze poznanie świata DJskiego",
                        },
                        {
                          detail:
                            "podstawowa wiedza o profesjonalnym sprzęcie DJskim",
                        },
                        {
                          detail:
                            "nauka rozpoznawania fraz, bitów i struktury utworu",
                        },
                        {
                          detail: "beatmatching i techniki miksowania utworów",
                        },
                        { detail: "dyplom ukończenia" },
                      ],
                      title: "Co w środku?",
                    },
                  ]}
                />
                <p>
                  Po warsztacie będziesz mieć podstawową wiedzę niezbędną do
                  nagrania swojego pierwszego seta
                </p>
              </div>
            </div>
          </section>
          <img
            src={vinylVoucher}
            alt="vinyl voucher"
            className={styles.lastImage}
          />
        </div>
      </SubpageLayout>
    </main>
  );
};
