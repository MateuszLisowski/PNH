import { SubpageLayout } from "../components/SubpageLayout";
import Warsztaty from "../assets/warsztaty.webp";
import styles from "./BeginnerClassProgram.module.css";
import reusableStyles from "../Reusable.module.css";

export const BeginnerClassProgram = () => {
  return (
    <main className={reusableStyles.sectionText}>
      <SubpageLayout>
        <p className={reusableStyles.text}>
          Zapraszamy Cię na fascynującą podróż w głąb świata DJ-ingu, gdzie nie
          tylko zgłębisz tajniki miksowania, ale też w pełni zrozumiesz muzykę -
          nasz kurs to brama do niedostępnych dźwiękowych doznań. Opanujesz
          sztukę miksowania muzyki, budowania emocji i tworzenia
          niepowtarzalnego klimatu.
        </p>
        <p>
          Wspólnie wkroczymy w świat, gdzie muzyka to język, a DJ jest jego
          niezwykłym interpretatorem. Rozwiniesz umiejętność kreowania
          muzycznych historii i nauczysz się sztuki opowiadania muzycznych
          historii poruszających całym parkietem. Poznasz sekrety obcowania w
          kulturze klubowej i jej trudnych zasad - wszystko to po to, otworzyć
          Ci drzwi do startu kariery, albo super przygody.
        </p>
        <img src-={Warsztaty} alt="Warsztaty" className={styles.image} />
      </SubpageLayout>
    </main>
  );
};
