import { SubpageLayout } from "../components/SubpageLayout";
import { useScrollToSection } from "../utils/useScrollToSection";
import { Link } from "react-router-dom";
import { Services } from "../components/Services";
import { Workshops } from "../components/Workshops";
import styles from "../Reusable.module.css";

export const Offer = () => {
  useScrollToSection();

  return (
    <main>
      <SubpageLayout>
        <section className={styles.sectionText}>
          <p className={styles.text}>
            Prowadzimy kursy i warsztaty DJ-skie stacjonarnie i wyjazdowo. W
            naszej ofercie znajdziesz między innymi warsztaty grupowe i
            indywidualne skierowane do każdej grupy wiekowej. Oferujemy również
            szereg usług (
            {
              <Link to="../oferta#cennik" className={styles.link}>
                cennik
              </Link>
            }
            ).
          </p>
          <p className={styles.text}>
            W razie pytań, spersonalizowanych usług niewymienionych w cenniku
            lub chęci zapisania się na zajęcia prosimy o kontakt telefoniczny
            lub mailowy -{" "}
            {
              <Link to="../kontakt#info" className={styles.link}>
                kontakt
              </Link>
            }
            . Postaramy się spełnić Twoje oczekiwania.
          </p>
        </section>
        <h2 id="warsztaty" className={styles.sectionTitle}>
          Warsztaty DJ-skie
        </h2>
        <section className={styles.sectionText}>
          <Workshops
            sectionName="Kursy na poziomie podstawowym"
            services={[
              {
                title: "Kurs DJ-ski - Grupowy",
                offer: [
                  { detail: "Dedykowany dla osób 16 +" },
                  { detail: "Czas trwanie kursu: 8 tygodni" },
                  { detail: "Czas trwania zajęć: 150 minut" },
                  {
                    detail:
                      "Częstotliwość zajęć: 1 spotkanie na tydzień w dni robocze",
                  },
                  {
                    detail:
                      "Cena: 1000 zł (możliwość płatności w 2 ratach po 500 zł)",
                  },
                  {
                    detail: (
                      <>
                        Program kursu
                        <Link
                          to="../oferta/program-kurs-podstawowy"
                          className={styles.link}
                          style={{ marginLeft: "5px" }}
                        >
                          sprawdź tutaj
                        </Link>
                      </>
                    ),
                  },
                ],
              },
              {
                title: "Kurs DJ-ski - Indywidualny",
                offer: [
                  { detail: "Dedykowany dla osób 10 +" },
                  { detail: "Czas trwanie kursu: 8 tygodni" },
                  { detail: "Czas trwania zajęć: 90 minut" },
                  {
                    detail:
                      "Częstotliwość zajęć: 1 spotkanie na tydzień w dni robocze",
                  },
                  {
                    detail:
                      "Cena: 1500 zł (możliwość płatności w 2 ratach po 750 zł)",
                  },
                  {
                    detail: (
                      <>
                        Program kursu
                        <Link
                          to="../oferta/program-kurs-podstawowy"
                          className={styles.link}
                          style={{ marginLeft: "5px" }}
                        >
                          sprawdź tutaj
                        </Link>
                      </>
                    ),
                  },
                ],
              },
              {
                title:
                  "Kurs DJ-ski - Przyśpieszony - 1 dniowy (indywidualny / dla 2 osób)",
                offer: [
                  { detail: "Dedykowany dla osób 10 +" },
                  { detail: "Czas trwanie kursu: 1 dzień" },
                  { detail: "Czas trwania zajęć: 240 minut" },
                  {
                    detail: "Cena: Indywidualny - 500 zł, dla 2 osób - 800 zł",
                  },
                  {
                    detail: "Program kurs - indywidualny",
                  },
                ],
              },
              {
                title:
                  "Kurs DJ-ski - Przyśpieszony - 2 dniowy (indywidualny / dla 2 osób)",
                offer: [
                  { detail: "Dedykowany dla osób 10 +" },
                  { detail: "Czas trwanie kursu: 2 dni" },
                  { detail: "Czas trwania zajęć: 150 minut" },
                  {
                    detail: "Cena: Indywidulany - 600zł , dla 2 osób - 1000 zł",
                  },
                  {
                    detail: "Program kurs - indywidualny",
                  },
                ],
              },
            ]}
          />
          <Workshops
            sectionName="Kursy na poziomie średniozaawansowanym"
            subtitle="Zajęcia skierowane do osób, które ukończyły kurs podstawowy lub z podstawową / średnio zaawansowaną wiedzą"
            services={[
              {
                title: "Kurs DJ-ski - Grupowy",
                offer: [
                  { detail: "Kontynuacja po zakończeniu kursu podstawowego" },
                  { detail: "Poziom: Średniozaawansowany" },
                  { detail: "Dedykowany dla osób: 16 +" },
                  { detail: "Czas trwania kursu: 8 spotkań" },
                  { detail: "Czas trwania zajęć: 150 min." },
                  {
                    detail:
                      "Częstotliwość zajęć: 1 spotkanie na tydzień w dni robocze",
                  },
                  {
                    detail:
                      "Cena: 800 zł (możliwość płatności w 2 ratach po 400 zł)",
                  },
                ],
              },
              {
                title: "Kurs DJ-ski - Indywidualny",
                offer: [
                  { detail: "Kontynuacja po zakończeniu kursu podstawowego" },
                  { detail: "Poziom: Średniozaawansowany" },
                  { detail: "Dedykowany dla osób: 10 +" },
                  { detail: "Czas trwania kursu: 8 spotkań" },
                  { detail: "Czas trwania zajęć: 90 min." },
                  {
                    detail:
                      "Częstotliwość zajęć: 1 spotkanie na tydzień w dni robocze",
                  },
                  {
                    detail:
                      "Cena: 1200 zł (możliwość płatności w 2 ratach po 600 zł)",
                  },
                ],
              },
            ]}
          />
          <div style={{ marginTop: "100px" }}>
            <Workshops
              sectionName="Warsztaty uzupełniające"
              subtitle=""
              services={[
                {
                  title: "Szczegóły:",
                  offer: [
                    {
                      detail:
                        "Dla osób, które pragną poszerzyć swoją wiedzę i umiejętności w wybranych zagadnieniach związanych z DJ-ingiem",
                    },
                    {
                      detail:
                        "Możliwość zorganizowania warsztatów indywidualnych lub grupowych",
                    },
                    {
                      detail:
                        "Zakres tematyczny: warsztaty mogą obejmować dowolne zagadnienia zaproponowane przez uczestnika",
                    },
                    { detail: "Czas trwania i cena: ustalane indywidualnie" },
                    {
                      detail:
                        "Zgłoszenia: prosimy przesyłać na adres: projektnewhope.warsztaty@gmail.com, z dopiskiem „Warsztaty uzupełniające”",
                    },
                  ],
                },
              ]}
            />
          </div>
        </section>
        <h2 id="lekcje-indywidualne" className={styles.sectionTitle}>
          Lekcje indywidualne
        </h2>
        <section className={styles.sectionText}>
          <p className={styles.text}>
            Lekcje indywidualne DJ-skie to najbardziej spersonalizowana forma
            nauki, skierowana zarówno do początkujących, jak i zaawansowanych
            adeptów sztuki DJ-skiej. Każda sesja jest dostosowana do Twojego
            poziomu umiejętności, zainteresowań oraz celów muzycznych.
          </p>
          <Workshops
            services={[
              {
                title: "Co oferujemy w ramach lekcji indywidualnych?",
                offer: [
                  {
                    detail:
                      "Indywidualny program nauczania – dopasowany do Twojego tempa i potrzeb.",
                  },
                  {
                    detail:
                      "Praca z profesjonalnym sprzętem o standardzie klubowym.",
                  },
                  {
                    detail:
                      "Wsparcie doświadczonych instruktorów – nasi nauczyciele to profesjonalni DJ-e z bogatym doświadczeniem scenicznym.",
                  },
                  {
                    detail:
                      "Elastyczność godzin – umawiasz zajęcia w dogodnym dla siebie czasie.",
                  },
                  {
                    detail:
                      "Skupienie na praktyce – każda lekcja to maksymalne wykorzystanie czasu na ćwiczenia.",
                  },
                ],
              },
              {
                title: "Dla kogo?",
                offer: [
                  {
                    detail:
                      "Dla osób zaczynających swoją przygodę z DJ-ingiem.",
                  },
                  {
                    detail:
                      "Dla średniozaawansowanych, którzy chcą poprawić swoją technikę miksowania",
                  },
                  {
                    detail:
                      "Dla profesjonalistów, którzy pragną zgłębić zaawansowane techniki",
                  },
                ],
              },
              {
                title: "Korzyści z lekcji indywidualnych:",
                offer: [
                  {
                    detail:
                      "Maksymalne skupienie na Twoim rozwoju i potrzebach.",
                  },
                  {
                    detail:
                      "Indywidualna analiza postępów: Regularny feedback pozwoli Ci szybko eliminować błędy i efektywnie rozwijać umiejętności.",
                  },
                  {
                    detail:
                      "Dopasowanie trudności ćwiczeń do Twojego poziomu, aby stale motywować do dalszego rozwoju.",
                  },
                ],
              },
            ]}
          />
          <p className={styles.text}>
            Zapraszamy do rezerwacji lekcji i rozpoczęcia muzycznej przygody! 🎧
          </p>
        </section>
        <section className={styles.sectionText}>
          <h2 id="cennik" className={styles.sectionTitle}>
            Cennik
          </h2>
          <Services
            sectionName="USŁUGI DJ-SKIE"
            services={[
              {
                service:
                  "Podstawowa konfiguracja oprogramowania DJ-skiego z urządzeniem (Serato, Rekordbox, Traktor, Virtual DJ",
                price: "60 zł",
              },
              {
                service:
                  "Zaawansowana konfiguracja oprogramowania DJ-skiego z urządzeniem (Serato, Rekordbox, Traktor, Virtual DJ",
                price: "100 zł",
              },
              {
                service: "Konfiguracja setepu DJ w szkole",
                price: "100 zł",
              },
              {
                service: "Konfiguracja setepu DJ u klienta",
                price: "150-200 zł",
              },
            ]}
          />
          <Services
            sectionName="USŁUGI DODATKOWE"
            services={[
              {
                service:
                  "Czyszczenie i konserwacja gramofonów, kontrolerów, mikserów",
                price: "100 - 150 zł/szt.",
              },
              {
                service: "Naprawa sprzętu DJ",
                price: "cena do ustalenia",
              },
              {
                service: "Kalibracja i ustawienie pitch control w gramofonach",
                price: "80 zł / gramofon",
              },
              {
                service:
                  "Inne problemy techniczne, konsultacja do ustalenia indywidualnie",
                price: "100 zł / h",
              },
              {
                service: "Konsultacje techniczne / sprzętowe",
                price: "cena do ustalenia",
              },
              {
                service:
                  "Porady dotyczące zakupu sprzętu (np. wybór słuchawek lub gramofonów)",
                price: "50 zł / sesja",
              },
              {
                service:
                  "Sprawdzenie sprzętu po zakupie i ewentualne drobne naprawy / customizacja",
                price: "cena do ustalenia",
              },
              {
                service:
                  "Pomoc w wyborze oraz zakupie sprzętu używanego + negocjacje + ocena sprzętu po zakupie",
                price: "cena do ustalenia",
              },
              {
                service:
                  "Nagranie setu w szkole Projektu New Hope (minimalny czas 90 minut)",
                price: "100 zł / h",
              },
              {
                service: "Mastering setu (realizacja 24 h)",
                price: "100 zł",
              },
              {
                service:
                  "Mixowanie w szkole Projektu New Hope na wybranym zestawie DJ-skim: Zestaw cyfrowy z CDJ, Kontroler, Zestaw analogowy z gramofonami",
                price: "70 zł / h",
              },
              {
                service:
                  "Wynajem sprzętu DJ-skiego (zapotrzebowanie prosimy wysłać na adres mailowy: projektnewhope@gmail.com z dopiskiem “wynajem sprzętu”)",
                price: "cena do ustalenia",
              },
            ]}
          />
          <Services
            sectionName="LEKCJE INDYWIDUALNE"
            services={[
              { service: "Lekcje indywidualne - 60 minut", price: "120 zł" },
              { service: "Lekcje indywidualne - 120 minut", price: "200 zł" },
            ]}
          />
        </section>
      </SubpageLayout>
    </main>
  );
};
