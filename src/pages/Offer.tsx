import { SubpageLayout } from "../components/SubpageLayout";
import { useScrollToSection } from "../utils/useScrollToSection";
import { Link } from "react-router-dom";
import { Services } from "../components/Services";
import { Workshops } from "../components/Workshops";
import styles from "../Reusable.module.css";
import homeStyles from "./Home.module.css";

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
              <Link to="../offer#services" className={styles.link}>
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
              <Link to="../contact#info" className={styles.link}>
                kontakt
              </Link>
            }
            . Postaramy się spełnić Twoje oczekiwania.
          </p>
        </section>
        <h2 id="workshops" className={styles.sectionTitle}>
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
                        Program kursu -&gt;
                        <Link
                          to="../offer/beginner-class-program"
                          className={styles.link}
                          style={{ marginLeft: "5px" }}
                        >
                          SPRAWDŹ TUTAJ
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
                    detail: "Cena: Indywidulany - 600zł, dla 2 osób - 1000 zł",
                  },
                ],
              },
            ]}
          />
          <Workshops
            sectionName="Kursy na poziomie średniozaawansowanym i zaawansowanym"
            subtitle="Zajęcia skierowane do osób, które ukończyły kurs podstawowy oraz osób z podstawową lub średnio zaawansowaną wiedzą"
            services={[
              {
                title: "Kurs DJ-ski - Grupowy",
                offer: [
                  { detail: "Kontynuacja po zakończeniu kursu podstawowego" },
                  { detail: "Pozion: Średniozaawansowany" },
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
                  { detail: "Pozion: Średniozaawansowany" },
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
              {
                title: "Warsztaty DJ-skie - Grupowe",
                offer: [
                  { detail: "Poziom: Zaawansowany" },
                  { detail: "Dedykowany dla osób: 16 +" },
                  { detail: "Czas trwania kursu: bezterminowo" },
                  { detail: "Czas trwania zajęć: 120 min." },
                  { detail: "Częstotliwość zajęć: 1 spotkanie na tydzień" },
                  { detail: "Cena: 250 zł" },
                ],
              },
            ]}
          />
          <Workshops
            sectionName=""
            subtitle=""
            services={[
              {
                title: "Warsztaty uzupełniające",
                offer: [
                  {
                    detail:
                      "Oferujemy warsztaty uzupełniające dla osób, które pragną poszerzyć swoją wiedzę i umiejętności w wybranych zagadnieniach związanych z DJ-ingiem. Istnieje również możliwość zorganizowania warsztatów indywidualnych, dostosowanych do potrzeb i oczekiwań klienta",
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
        </section>
        <h2 id="lessons" className={styles.sectionTitle}>
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
                      "Praca z profesjonalnym sprzętem – uczysz się na najlepszym sprzęcie DJ-skim i muzycznym dostępnym w naszej szkole.",
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
                      "Dla średniozaawansowanych, którzy chcą poprawić swoją technikę miksowania i opanować nowe style.",
                  },
                  {
                    detail:
                      "Dla profesjonalistów, którzy pragną zgłębić zaawansowane techniki, takie jak scratching, harmoniczne miksowanie czy budowa setów tematycznych.",
                  },
                ],
              },
              {
                title: "Tematy, które możesz zgłębiać:",
                offer: [
                  { detail: "Podstawy obsługi sprzętu DJ-skiego." },
                  { detail: "Mixowanie i crossfading." },
                  { detail: "Harmoniczne przejścia między utworami." },
                  {
                    detail:
                      "Tworzenie setów muzycznych pod kątem konkretnej publiczności lub wydarzenia.",
                  },
                  {
                    detail:
                      "Zaawansowane techniki DJ-skie (np. scratching, looping).",
                  },
                  { detail: "Budowanie własnego stylu i marki jako DJ." },
                  {
                    detail:
                      "Tworzenie social media i promocja swojej działalności.",
                  },
                ],
              },
              {
                title: "Korzyści z lekcji indywidualnych:",
                offer: [
                  {
                    detail:
                      "Maksymalne skupienie na Twoim rozwoju i Twoich potrzebach.",
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
            Zapraszamy do rezerwacji lekcji i rozpoczęcia muzycznej przygody,
            która może otworzyć drzwi do kariery DJ-a! 🎧
          </p>
        </section>
        <section className={styles.sectionText}>
          <h2 id="rent" className={styles.sectionTitle}>
            Wynajem przestrzeni
          </h2>
          <p className={styles.text}>Zapraszamy do naszej przestrzeni!</p>
          <p className={styles.text}>
            Wynajmij przestrzeń Projektu New Hope na swoje prywatne, firmowe lub
            publiczne wydarzenie. Oferta jest skierowana również do osób, które
            cyklicznie chcą wynająć salę lub cały lokal na poczet prywatnych
            lekcji czy spotkań. Jest to również atrakcyjna oferta dla
            nauczycieli (na przykład tańca, śpiewu, pianina), którzy szukają
            przestrzeni do przeprowadzania zajęć z uczniami a potrzebują
            przestrzeni.
          </p>
          <p className={styles.text}>
            Lokal, to niespełna 120 metrów kwadratowych z 3 oddzielnymi
            pomieszczeniami, wspólną toaletą i magazynem roboczym. Miejsce jest
            w pełni wyposażone w wygodne umeblowanie, autorskie dekoracje i
            sprzęt audio. Jesteśmy w stanie zaoferować niezbędną obsługę na dany
            wynajem. Możemy zapewnić Państwu: profesjonalną ochronę, dźwiękowca,
            realizatora świateł, catering, bar, fotograf czy biletera.
          </p>
          <p className={styles.text}>
            Cena wynajmu jest ustalana indywidualnie bazująć na zapotrzebowaniu
            klienta. Swoje zapytanie prosimy wysłać przy pomocy formularza lub
            zapraszamy do kontaktu telefonicznego. Na podstawie odpowiedzi
            przygotujemy indywidualną ofertę w ciągu 2 dni roboczych.
          </p>
          <div style={{ margin: "50px 0 40px 0" }}>
            <Link to="../contact#info" className={homeStyles.linkButton}>
              Formularz do wynajmu
            </Link>
          </div>
        </section>
        <section className={styles.sectionText}>
          <h2 id="services" className={styles.sectionTitle}>
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
