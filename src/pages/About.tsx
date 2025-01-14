import { SubpageLayout } from "../components/SubpageLayout";
import { cx } from "../utils/classnames";
import styles from "../Reusable.module.css";
import aboutStyles from "./About.module.css";
import { Card } from "../components/Card";
import { useScrollToSection } from "../utils/useScrollToSection";
import hubertFoto from "../assets/hubert.jpg";
import frankeeFoto from "../assets/frankee.jpg";
import homeStyles from "./Home.module.css";
import { Link } from "react-router-dom";

export const About = () => {
  useScrollToSection();

  const teachers = [
    {
      nick: "MIFI77 / Hubert O. Marcinkiewicz",
      description:
        "DJ, animator kultury, twórca Projektu New Hope, jak i założyciel pierwszej szkoły DJ-skiej na Podlasiu. Przez ostatnią dekadę skupiony przede wszystkim na rozwoju podlaskiej sceny kulturalnej i klubowej. Jako menedżer współtworzył kultowe miejsca — kluby muzyczne FOMO i METRO przy ulicy Białówny 9/1.Mifi od najmłodszych lat dzieli się swoją fascynacją do sztuki DJ'ingu i płyt winylowych. Jego selekcja jest mocno za fundamentowana w Electro-Techno z Detroit i IDM. Eksperymentuje z muzyką Braindance i Acid żonglując różnorodnymi sekwencjami perkusyjnymi.",
      foto: hubertFoto,
      tags: ["#lekcjeindwidualne", "#lekcjegrupowe"],
    },
    {
      nick: "Frankee / Karol Daniłowicz",
      description:
        "Kolekcjoner płyt winylowych i od 1999 roku aktywny dj. Z muzyką elektroniczną pierwszy raz zetknął się w 1991 roku, kiedy od ojca dostał kasetę z koncertem Jean Michela Jarre’a. Kilka lat później, zafascynowany audycją Technikum Mechnizacji Muzyki w popularnej ogólnopolskiej stacji radiowej, kupił pierwsze profesjonalne odtwarzacze i mikser didżejski, potem gramofony i zaczął ćwiczyć miksowanie. Organizator undergroundowych imprez w Poznaniu, Toruniu i Bydgoszczy. W Białymstoku, znany zarówno z organizowania imprez w lokalnych klubach, cyklicznych wieczorów z muzyką elektroniczną, acid jazzową „Miękka Soffa”, jak również z wieloletniej rezydentury w klubie Metro: Gorączka Czwartkowej Nocy, House Of Metro. Dziś nadal można go spotkać za gramofonami w Białostockich klubach jak i podczas warsztatów / kursów dj.",
      foto: frankeeFoto,
      tags: ["#lekcjegrupowe"],
    },
  ];

  return (
    <main>
      <SubpageLayout>
        <article className={styles.sectionText}>
          <p className={styles.text}>
            Tworzymy kulturę niezależną w Białymstoku
          </p>
          <p className={styles.text}>
            Celem Projektu New Hope jest stworzenie przestrzeni, w której każda
            osoba artystyczna, niezależnie od swojego doświadczenia, będzie
            mogła rozwijać swoje pasje i umiejętności. Jest to unikalna na skalę
            kraju inicjatywa, dzięki której wiele osób miało szansę rozpocząć
            swoją przygodę ze sztuką DJ-ską.
          </p>
        </article>
        <h2 id="teachers" className={styles.sectionTitle}>
          Nauczyciele
        </h2>
        <section className={cx([styles.sectionText, styles.rowFlex])}>
          {teachers.map(({ description, nick, foto, tags }) => (
            <Card
              key={nick}
              description={description}
              nick={nick}
              foto={foto}
              tags={tags}
            />
          ))}
        </section>
        <section id="partnership">
          <h2 className={styles.sectionTitle}>Partnerzy</h2>
          <article className={styles.sectionText}>
            <p className={styles.text}>
              Projekt New Hope posiada sprawdzone kooperacje z uznanymi markami,
              urzędem miasta oraz instytucjami kultury, co świadczy o
              wiarygodności szkoły. Wspólnie z naszymi partnerami tworzymy
              wydarzenia, unikalne warsztaty muzyczne i realizujemy kreatywną
              promocję.
            </p>
            <p className={styles.text}>
              Stowarzyszenie umożliwia potencjalnym partnerom dostęp do
              dynamicznie rozwijającej się społeczności zainteresowanej kulturą
              alternatywną w regionie i poza nim: uczniów szkoły DJ-skiej,
              uczestników wydarzeń Projektu i community promującego działania
              PNH.
            </p>
            <div style={{ margin: "50px 0 100px 0" }}>
              <Link to="../contact#info" className={homeStyles.linkButton}>
                Zostań naszym partnerem!
              </Link>
            </div>
            <div className={aboutStyles.logo}>{technicsLogo}</div>
            <p className={styles.text}>
              Dzięki współpracy z najbardziej uznaną marką w branży muzycznej
              <span style={{ fontWeight: "bold" }}> Technics</span> jesteśmy
              zaopatrzeni w najnowsze gramofony z kultowej serii SL1210.
              Wspólnie realizujemy edukacyjne materiały wideo o tematyce
              muzycznej w ramach serii Technics DJ Academy.
            </p>
            <div className={aboutStyles.logo} style={{ margin: "40px 0" }}>
              {nativeInstrumentsLogo}
            </div>
            <p className={styles.text}>
              Współpraca z firmą, która wyznacza standardy cyfrowego DJ-ingu
              owocuje regularną aktualizacją sprzętową. Urządzenia takie jak
              TRAKTOR są niezbędnym wyposażeniem naszej szkoły. Marka{" "}
              <span style={{ fontWeight: "bold" }}>Native Instruments</span>{" "}
              pomaga nam zwiększać możliwości techniczne wprowadzając stały
              rozwój w trakcie naszych warsztatów muzycznych.
            </p>
          </article>
        </section>
        <h2 id="info" className={styles.sectionTitle}>
          Dane stowarzyszenia
        </h2>
        <article className={styles.sectionText}>
          <p className={styles.smallText}>Stowarzyszenie Projekt New Hope</p>
          <p className={styles.smallText}>Wyszyńskiego 6A/07</p>
          <p className={styles.smallText}>15-888 Białystok</p>
          <br />
          <p className={styles.smallText}>KRS 0001035937</p>
          <p className={styles.smallText}>NIP 5423468546</p>
          <p className={styles.smallText}>REGON 525373163</p>
        </article>
        <h2 className={styles.sectionTitle}>Członkowie stowarzyszenia</h2>
        <article className={styles.sectionText}>
          <p className={styles.smallText}>
            Hubert O. Marcinkiewicz - Prezes Stowarzyszenia
          </p>
          <p className={styles.smallText}>Aneta Lisowska</p>
          <p className={styles.smallText}>Anna Łaskarzewska</p>
          <p className={styles.smallText}>Bartek Matuszek</p>
          <p className={styles.smallText}>Jędrzej Dondziło</p>
          <p className={styles.smallText}>Karol Daniłowicz</p>
          <p className={styles.smallText}>Mateusz Lisowski</p>
          <p className={styles.smallText}>Szymon Klimowicz</p>
        </article>
      </SubpageLayout>
    </main>
  );
};

const technicsLogo = (
  <svg
    viewBox="6.553704000000001 76.331376 186.587808 50.887584000000004"
    xmlns="http://www.w3.org/2000/svg"
    width="186.587808"
    height="50.887584000000004"
  >
    <g clip-rule="evenodd" fill-rule="white">
      <path d="M0 0h192.756v192.756H0V0z" fill="black" />
      <path
        fill="white"
        d="M141.723 104.082V91.687h-9.15v2.464h1.094c.783 0 1.955.391 1.955 1.564v8.289c0 1.252-.391 2.113-1.875 2.113h-1.174v2.463h12.199v-2.463h-1.328c-.784 0-1.721-.627-1.721-2.035zM100.07 104.064v-7.469c0-2.424-2.152-5.63-6.922-5.63-4.066 0-6.178 1.486-6.882 2.503v-8.837h-9.15v2.463h1.095c1.447 0 1.955.391 1.955 1.564v15.328c0 1.213-.391 2.111-1.876 2.111h-1.173v2.465h12.2v-2.465h-1.329c-.782 0-1.721-.625-1.721-2.033v-6.529c0-2.66 2.424-3.402 4.458-3.402 2.034 0 3.324 1.603 3.246 2.777v7.076c0 1.408-.391 2.111-1.877 2.111h-1.173v2.465h12.2v-2.465h-1.094c-1.097.001-1.957-.468-1.957-2.033zM127.854 104.08v-7.468c0-2.424-2.033-5.631-6.803-5.631-3.637 0-6.375 1.134-7.586 2.033v-1.33h-8.447v2.464h1.096c.781 0 1.955.508 1.955 1.681v8.172c0 1.174-.391 2.113-1.877 2.113h-1.174v2.463h12.201v-2.463h-1.213c-.977 0-1.838-.354-1.838-2.035V97.55c0-2.659 2.424-3.402 4.459-3.402 2.033 0 3.205 1.603 3.127 2.777v7.076c0 1.135-.391 2.113-1.877 2.113h-1.172v2.463h12.199v-2.463h-1.33c-.781.001-1.72-.626-1.72-2.034zM73.248 102.557a4.425 4.425 0 0 1-4.536 3.559c-3.519 0-4.614-2.541-4.614-6.061 0-3.285.938-5.905 5.24-5.905 4.301 0 4.223 2.385 4.223 3.715h3.05V92.39c-1.33-.704-5.552-1.251-7.273-1.251-7.586 0-11.887 2.894-11.887 8.759 0 6.1 3.519 8.994 11.105 8.994 6.804 0 8.446-5.24 8.446-6.336h-3.754v.001zM56.009 98.568c-.704-6.491-8.681-7.429-10.401-7.429-7.586 0-11.887 2.894-11.887 8.759 0 6.1 4.223 8.994 11.105 8.994 8.29 0 10.088-3.441 10.558-6.336h-4.771c-.078.627-.392 3.559-4.849 3.559-3.663 0-4.973-1.777-5.304-4.418h15.157c.627-1.486.313-2.111.392-3.129zm-15.551-.095c.314-2.515 1.561-4.341 5.151-4.341 3.128 0 4.223 2.621 4.223 4.341h-9.374z"
      />
      <path
        fill="white"
        d="M36.345 84.631H8.504v7.038h3.05c0-3.128 1.251-3.284 2.659-3.363h5.083v15.211c0 1.877-.938 2.58-2.659 2.58h-1.642v2.465h14.703v-2.465h-1.721c-1.486 0-2.581-.664-2.581-2.58v-15.21h5.475c1.251 0 2.424.704 2.424 3.363h3.05v-7.039zM155.918 106.115c-3.52 0-4.615-2.541-4.615-6.061 0-3.285.939-6.022 5.24-6.022s4.223 2.502 4.223 3.833h3.051V92.39c-1.33-.704-5.553-1.251-7.273-1.251-7.586 0-11.887 2.894-11.887 8.759 0 6.1 3.518 8.994 11.104 8.994 6.805 0 8.447-5.24 8.447-6.336h-3.754a4.426 4.426 0 0 1-4.536 3.559zM180.029 99.273c-.99-.33-4.379-1.408-5.709-1.721s-2.346-.861-2.346-1.877c0-1.332 1.602-1.838 4.613-1.838 3.91 0 4.457 1.446 4.457 3.793h2.816v-5.24c-1.33-.704-5.553-1.251-7.273-1.251-2.033 0-6.725-.235-9.541 2.424-1.016.938-2.502 4.458 1.018 6.101 3.518 1.641 6.725 2.111 7.977 2.58 1.25.469 1.955.939 1.955 1.955 0 1.018-1.33 2.033-3.988 2.033-2.66 0-4.811-.469-4.811-2.971v-.705h-2.932v4.928c1.406.469 5.238 1.408 7.82 1.408 2.58 0 10.166-1.174 10.166-5.24.001-2.894-3.048-3.988-4.222-4.379zM138.672 89.836c2.199 0 3.982-1.337 3.982-2.986 0-1.649-1.783-2.986-3.982-2.986s-3.982 1.337-3.982 2.986c-.001 1.649 1.783 2.986 3.982 2.986z"
      />
    </g>
  </svg>
);

const nativeInstrumentsLogo = (
  <svg
    width="216"
    height="24"
    viewBox="0 0 216 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2132_30313)">
      <path
        d="M28.3769 24L32.2783 19.902L16.4595 5.00242C13.4135 2.12874 11.0619 0 7.32148 0C2.19139 0 0 3.99109 0 8.88665V23.0421H6.03837V8.62105C6.03837 6.86478 6.46607 5.53441 7.85493 5.53441C8.81687 5.53441 9.45842 6.17327 10.6871 7.29068L28.3761 24H28.3769ZM34.5762 23.0421H40.5617V0.744941H34.5762V23.0421Z"
        fill="white"
      />
    </g>
    <g clip-path="url(#clip1_2132_30313)">
      <g clip-path="url(#clip2_2132_30313)">
        <path
          d="M87.166 15.6478H93.2513V22.9708H96.0861V15.6478H102.174V13.2456H87.166V15.6478Z"
          fill="white"
        />
        <mask
          id="mask0_2132_30313"
          maskUnits="userSpaceOnUse"
          x="52"
          y="0"
          width="164"
          height="24"
        >
          <path
            d="M215.711 0.738525H52.3252V23.2616H215.711V0.738525Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2132_30313)">
          <path
            d="M115.229 18.4627C115.705 18.2549 116.079 17.9418 116.354 17.5234C116.628 17.1078 116.764 16.6008 116.764 16.0078C116.764 15.1268 116.473 14.4479 115.894 13.9658C115.314 13.4837 114.544 13.2427 113.58 13.2427H103.213V22.9679H105.979V21.2029L116.736 23.2449V20.9092L105.061 18.7702H113.58C114.2 18.7702 114.749 18.6649 115.226 18.4571L115.229 18.4627ZM105.981 16.8307V15.4703H113.056C113.278 15.4703 113.461 15.5313 113.605 15.6504C113.749 15.7723 113.821 15.9386 113.821 16.1519C113.821 16.3653 113.749 16.5315 113.605 16.6534C113.461 16.7753 113.278 16.8335 113.056 16.8335H105.981V16.8307Z"
            fill="white"
          />
          <path
            d="M52.3252 22.9705H55.16V13.2454H52.3252V22.9705Z"
            fill="white"
          />
        </g>
        <path
          d="M86.2405 18.169C85.6696 17.7395 84.672 17.4264 83.2449 17.2297L77.0737 16.3957C76.8326 16.3597 76.6414 16.3209 76.4973 16.2849C76.3533 16.2489 76.2507 16.2045 76.1925 16.1519C76.1316 16.102 76.1011 16.0383 76.1011 15.9635C76.1011 15.8249 76.2064 15.7003 76.4142 15.5894C76.622 15.4786 76.9629 15.3899 77.4367 15.3262C77.9106 15.2625 78.5202 15.2292 79.2712 15.2292C80.69 15.2292 81.937 15.3512 83.0177 15.5977C84.0956 15.8443 85.1791 16.2267 86.2626 16.7448V14.2013C85.5505 13.8494 84.6693 13.5557 83.6218 13.3202C82.5743 13.0847 81.3578 12.9656 79.9667 12.9656C78.5757 12.9656 77.434 13.0875 76.4308 13.3341C75.4249 13.5807 74.6463 13.9464 74.0948 14.4313C73.5434 14.9189 73.269 15.5091 73.269 16.2018C73.269 16.8944 73.5739 17.4375 74.178 17.8476C74.7848 18.2604 75.7547 18.5541 77.0904 18.7286L82.7738 19.4934C83.1452 19.5405 83.425 19.5848 83.6135 19.6264C83.8019 19.6679 83.9515 19.7206 84.0568 19.7871C84.1621 19.8508 84.2176 19.9394 84.2176 20.0503C84.2176 20.2276 84.0818 20.3828 83.813 20.5241C83.5442 20.6626 83.1452 20.7707 82.6103 20.851C82.0783 20.9286 81.4354 20.9701 80.6844 20.9701C79.4236 20.9701 78.2265 20.8372 77.0931 20.5684C75.957 20.2996 74.8402 19.8286 73.7374 19.1498V21.8318C74.5992 22.2862 75.5496 22.6353 76.586 22.8819C77.6224 23.1285 78.8278 23.2504 80.1995 23.2504C81.7291 23.2504 83.0094 23.1008 84.043 22.7988C85.0766 22.4968 85.8414 22.0867 86.343 21.5686C86.8446 21.0505 87.0939 20.4576 87.0939 19.7898C87.0939 19.1221 86.8085 18.6012 86.2405 18.1717V18.169Z"
          fill="white"
        />
        <path
          d="M69.3201 22.4277L61.9269 13.2456H56.8281V22.9708H59.6629V15.3707H60.0509L66.1805 22.9708H72.155V13.2456H69.3201V22.4277Z"
          fill="white"
        />
        <path
          d="M186.387 15.6478H192.475V22.9708H195.31V15.6478H201.395V13.2456H186.387V15.6478Z"
          fill="white"
        />
        <path
          d="M182.51 22.4277L175.117 13.2456H170.018V22.9708H172.853V15.3707H173.241L179.371 22.9708H185.345V13.2456H182.51V22.4277Z"
          fill="white"
        />
        <path
          d="M155.035 22.9708H168.697V20.6074H157.815V19.0946H167.516V16.8974H157.815V15.6062H168.697V13.2456H155.035V22.9708Z"
          fill="white"
        />
        <path
          d="M214.854 18.169C214.284 17.7395 213.286 17.4264 211.859 17.2297L205.688 16.3957C205.447 16.3597 205.255 16.3209 205.111 16.2849C204.967 16.2489 204.865 16.2045 204.807 16.1519C204.746 16.102 204.715 16.0383 204.715 15.9635C204.715 15.8249 204.82 15.7003 205.028 15.5894C205.236 15.4786 205.577 15.3899 206.051 15.3262C206.522 15.2625 207.134 15.2292 207.885 15.2292C209.301 15.2292 210.551 15.3512 211.632 15.5977C212.71 15.8443 213.793 16.2267 214.877 16.7448V14.2013C214.164 13.8494 213.283 13.5557 212.236 13.3202C211.188 13.0847 209.972 12.9656 208.581 12.9656C207.19 12.9656 206.048 13.0875 205.045 13.3341C204.039 13.5807 203.26 13.9464 202.709 14.4313C202.157 14.9189 201.883 15.5091 201.883 16.2018C201.883 16.8944 202.188 17.4375 202.795 17.8476C203.402 18.2604 204.371 18.5541 205.707 18.7286L211.391 19.4934C211.762 19.5405 212.042 19.5848 212.23 19.6264C212.421 19.6679 212.568 19.7206 212.676 19.7871C212.782 19.8508 212.837 19.9394 212.837 20.0503C212.837 20.2276 212.704 20.3828 212.435 20.5241C212.167 20.6626 211.765 20.7707 211.233 20.851C210.701 20.9286 210.058 20.9701 209.307 20.9701C208.046 20.9701 206.849 20.8372 205.715 20.5684C204.579 20.2996 203.463 19.8286 202.36 19.1498V21.8318C203.221 22.2862 204.172 22.6353 205.208 22.8819C206.245 23.1285 207.45 23.2504 208.822 23.2504C210.351 23.2504 211.632 23.1008 212.665 22.7988C213.699 22.4968 214.464 22.0867 214.965 21.5686C215.467 21.0505 215.716 20.4576 215.716 19.7898C215.716 19.1221 215.431 18.6012 214.863 18.1717L214.854 18.169Z"
          fill="white"
        />
        <path
          d="M143.835 22.4277L139.667 13.2456H134.302V22.9708H137.137V15.3984H137.528L141.041 22.9708H146.628L150.144 15.3984H150.535V22.9708H153.37V13.2456H148.005L143.835 22.4277Z"
          fill="white"
        />
        <path
          d="M129.868 18.0805C129.868 18.5986 129.696 19.0696 129.353 19.4908C129.009 19.9119 128.502 20.2472 127.831 20.491C127.161 20.7376 126.346 20.8595 125.393 20.8595C124.44 20.8595 123.625 20.7376 122.954 20.491C122.284 20.2444 121.777 19.9119 121.433 19.4908C121.089 19.0696 120.918 18.5986 120.918 18.0805V13.2456H118.083V18.1498C118.083 19.2165 118.385 20.1336 118.992 20.9011C119.599 21.6713 120.452 22.2559 121.555 22.6577C122.658 23.0595 123.935 23.2617 125.39 23.2617C126.845 23.2617 128.122 23.0595 129.225 22.6577C130.328 22.2559 131.182 21.6686 131.789 20.9011C132.395 20.1336 132.697 19.2165 132.697 18.1498V13.2456H129.863V18.0805H129.868Z"
          fill="white"
        />
        <path
          d="M88.679 10.4665H91.5138V3.1435H97.6019V0.738525H82.5938V3.1435H88.679V10.4665Z"
          fill="white"
        />
        <path
          d="M73.3049 8.18619H80.6261L82.1086 10.4637H85.445L78.8969 0.738525H75.0341L68.4888 10.4665H71.8251L73.3077 8.18896L73.3049 8.18619ZM76.7632 2.86366H77.165L79.2433 6.05828H74.6877L76.766 2.86366H76.7632Z"
          fill="white"
        />
        <mask
          id="mask1_2132_30313"
          maskUnits="userSpaceOnUse"
          x="52"
          y="0"
          width="164"
          height="24"
        >
          <path
            d="M215.711 0.738525H52.3252V23.2616H215.711V0.738525Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2132_30313)">
          <path
            d="M101.479 0.738525H98.6438V10.4665H101.479V0.738525Z"
            fill="white"
          />
          <path
            d="M67.6548 10.4665V0.738525H64.8172V9.92342L57.424 0.738525H52.3252V10.4665H55.16V2.86366H55.548L61.6776 10.4665H67.6548Z"
            fill="white"
          />
        </g>
        <path
          d="M119.044 10.4665H132.703V8.10306H121.824V6.58749H131.523V4.39309H121.824V3.10194H132.703V0.738525H119.044V10.4665Z"
          fill="white"
        />
        <path
          d="M113.164 10.4665L118.141 0.738525H114.929L110.26 9.92342L105.591 0.738525H102.382L107.356 10.4665H113.164Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2132_30313">
        <rect width="40.5626" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_2132_30313">
        <rect
          width="163.539"
          height="22.5231"
          fill="white"
          transform="translate(52.3252 0.738525)"
        />
      </clipPath>
      <clipPath id="clip2_2132_30313">
        <rect
          width="163.385"
          height="22.5231"
          fill="white"
          transform="translate(52.3252 0.738525)"
        />
      </clipPath>
    </defs>
  </svg>
);
