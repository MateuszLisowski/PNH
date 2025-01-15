import { SubpageLayout } from "../components/SubpageLayout";
import warsztaty from "../assets/warsztaty-program.jpg";
import styles from "./BeginnerClassProgram.module.css";
import reusableStyles from "../Reusable.module.css";
import { cx } from "../utils/classnames";
import { useScrollToSection } from "../utils/useScrollToSection";

const lessons = [
  {
    title: "Lekcja 1",
    content:
      "Wprowadzenie do DJ-ingu - poznasz historię DJ-ingu i jego ewolucję i rolę w kulturze muzycznej. Odkryjesz różnice między DJ-ami a producentami muzycznymi oraz poznasz różne style DJ-ów. Dzięki temu zrozumiesz, dlaczego mixowanie jest kluczowe i jak wpływa na tworzenie wyjątkowych występów. Poznasz także podstawy obsługi sprzętu DJ-skiego, abyś mógł zacząć swoją praktyczną przygodę.",
  },
  {
    title: "Lekcja 2",
    content:
      "Podstawy tempa i BPM - rozszyfrujesz tajemnicę tempa i Beats Per Minute (BPM). Dowiesz się, jak tempo wpływa na energię utworu i nastrój publiczności. Będziesz umiał dostosowywać tempo na odtwarzaczach CDJ oraz na gramofonach, dzięki czemu stworzysz płynne przejścia między utworami.",
  },
  {
    title: "Lekcja 3",
    content:
      "Podstawy beatmatchingu - opanujesz sztukę beatmatchingu, czyli dopasowywania tempa między utworami. Zrozumiesz, jak słuchać i dopasowywać takt, co pozwoli Ci tworzyć płynne i harmoniczne połączenia utworów. Dzięki ćwiczeniom na odtwarzaczach CDJ i gramofonach, stworzysz solidne fundamenty w mixowaniu.",
  },
  {
    title: "Lekcja 4",
    content:
      "Teoria muzyki i struktura utworu - rozwiniesz swoje umiejętności miksowania, wykorzystując teorię muzyki. Zrozumiesz, jak analizować strukturę utworu i tworzyć harmoniczne mixy. Dzięki temu, Twoje występy nabiorą głębi i spójności, zachwycając publiczność.",
  },
  {
    title: "Lekcja 5",
    content:
      "Praktyczne wykorzystanie rekordbox i CDJ - opanujesz obsługę Rekordboxa - narzędzia niezbędnego dla każdego DJ-a. Dowiesz się, jak importować i analizować muzykę oraz tworzyć spójne playlisty. Będziesz potrafił skonfigurować punkty cue na odtwarzaczach CDJ, co usprawni Twoje występy.",
  },
  {
    title: "Lekcja 6",
    content:
      "Efekty - Eksplorujesz świat efektów, które podniosą Twoje mixy na wyższy poziom. Nauczysz się wykorzystywać EQ, filtry i efekty w różnych mikserach, dodając teksturę i atmosferę do utworów. Opanujesz techniki tworzenia efektownych i innowacyjnych przejść.",
  },
  {
    title: "Lekcja 7",
    content:
      "Tworzenie przejść - odkryjesz zaawansowane techniki tworzenia płynnych i efektownych przejść między gatunkami muzycznymi. Nauczysz się wykorzystywać loop'y i różnice w BPM, tworząc dynamiczne mixy. Dzięki technikom 'tone play' i 'wordplay', Twoje występy nabiorą nowego wymiaru.",
  },
  {
    title: "Lekcja 8",
    content:
      "Nagranie własnego setu - przygotujesz się do nagrania własnego setu, który będzie podsumowaniem Twojej nauki. Nauczysz się budować narrację i kontrolować energię podczas występu. Dowiesz się, jak radzić sobie z trudnościami podczas występów na żywo.",
  },
  {
    title: "Lekcja 9 (bonus)",
    content:
      "Rozwijanie kariery - dowiedz się, jak promować siebie jako DJ-a, budować swoją markę i zdobywać swoją publiczność. Poznasz strategie budowania obecności w mediach społecznościowych oraz dowiesz się, jak negocjować umowy i rozwijać swoją karierę w przemyśle muzycznym.",
  },
];

export const BeginnerClassProgram = () => {
  useScrollToSection();

  return (
    <main className={reusableStyles.sectionText}>
      <SubpageLayout>
        <section className={styles.top}>
          <div className={styles.textWrapper}>
            <p className={reusableStyles.text}>
              Zapraszamy Cię na fascynującą podróż w głąb świata DJ-ingu, gdzie
              nie tylko zgłębisz tajniki miksowania, ale też w pełni zrozumiesz
              pracę, jaką wykonuje DJ - nasz kurs to brama do fascynujących
              dźwiękowych doznań. Opanujesz technikalia użytego sprzętu, proces
              tworzenia autorskiej biblioteki muzycznej i beatmaching, który
              połączy Twoje pomysły w całość.
            </p>
            <p>
              W trakcie kursu nauczysz się grać na zestawie cyfrowym i
              analogowym z użyciem płyt winylowych, które stoją u podstaw sztuki
              DJ-ingu. Nasze warsztaty prowadzimy od wielu lat, a ponad 100
              uczniów dotychczas ukończyła nasze kursy. Jesteśmy uznaną marką i
              unikalną inicjatywą na skalę kraju.
            </p>
          </div>
          <img src={warsztaty} alt="Warsztaty" className={styles.image} />
        </section>
        <section className={styles.bottom}>
          <h1 className={cx([reusableStyles.title, styles.title])}>
            Jak wygląda program warsztatów?
          </h1>
          <div className={styles.lessons}>
            {lessons.map(({ title, content }) => (
              <div className={styles.lessonWrapper} key={title}>
                <p className={styles.lesson}>{title}</p>
                <p className={styles.content}>{content}</p>
              </div>
            ))}
          </div>
        </section>
        <article className={reusableStyles.sectionText}>
          <p className={cx([reusableStyles.text, styles.info])}>
            Po ukończeniu warsztatów podstawowych proponujemy kontynuację w
            grupie średniozaawansowanej lub udział w indywidualnych lekcjach,
            dostosowanych do Twoich potrzeb i poziomu zaawansowania.
          </p>
        </article>
      </SubpageLayout>
    </main>
  );
};
