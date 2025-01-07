import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const categories = [
    {
      categoryName: "Social Media",
      links: [
        { name: "Facebook", link: "", logo: facebookLogo },
        { name: "Instagram", link: "", logo: instagramLogo },
        { name: "Youtube", link: "", logo: youtubeLogo },
      ],
    },
    {
      categoryName: "Partnerzy",
      links: [
        { name: "Partner 1", link: "", logo: facebookLogo },
        { name: "Partner 2", link: "", logo: facebookLogo },
        { name: "Partner 3", link: "", logo: facebookLogo },
        { name: "Zostań partnerem", link: "", logo: "" },
      ],
    },
    {
      categoryName: "Oferta",
      links: [
        { name: "Warsztaty DJ-skie", link: "", logo: "" },
        { name: "Lekcje indywidualne", link: "", logo: "" },
        { name: "Wynajem przestrzeni", link: "", logo: "" },
        { name: "Wydarzenia", link: "", logo: "" },
        { name: "Kontakt", link: "", logo: "" },
      ],
    },
    {
      categoryName: "O nas",
      links: [
        { name: "Jak dojechać", link: "./contact/#localization", logo: "" },
        { name: "Dane", link: "", logo: "" },
        { name: "Manifest", link: "", logo: "" },
        { name: "Nauczyciele", link: "", logo: "" },
        { name: "Blog", link: "", logo: "" },
        { name: "Wolontariat", link: "", logo: "" },
      ],
    },
    {
      categoryName: "",
      links: [
        { name: "Partnerzy", link: "", logo: "" },
        { name: "Kontakt", link: "./contact/#info", logo: "" },
      ],
    },
  ];

  return (
    <footer>
      <ul className={styles.footer}>
        {categories.map(({ categoryName, links }) => (
          <li key={categoryName} className={styles.section}>
            <h3 className={styles.categoryName}>{categoryName}</h3>
            <ul>
              {links.map(({ name, link, logo }) => (
                <li key={name} className={styles.link}>
                  {Boolean(logo) && <span className={styles.logo}>{logo}</span>}
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
};

const facebookLogo = (
  <svg width="25" height="25" viewBox="0 0 32 32" fill="none">
    <path
      d="M16.0014 2.66895C8.63877 2.66895 2.66943 8.63828 2.66943 16.0009C2.66943 22.6543 7.5441 28.1689 13.9188 29.1729V19.8556H10.5321V16.0009H13.9188V13.0636C13.9188 9.71961 15.9094 7.87561 18.9534 7.87561C20.4121 7.87561 21.9401 8.13561 21.9401 8.13561V11.4143H20.2548C18.6014 11.4143 18.0841 12.4436 18.0841 13.4983V15.9983H21.7788L21.1881 19.8529H18.0841V29.1703C24.4588 28.1716 29.3334 22.6556 29.3334 16.0009C29.3334 8.63828 23.3641 2.66895 16.0014 2.66895Z"
      fill="#ffffff"
    ></path>
  </svg>
);

const instagramLogo = (
  <svg width="25" height="25" viewBox="0 0 33 32" fill="none">
    <path
      d="M28.4294 11.0733C28.4148 10.0639 28.2281 9.06261 27.8708 8.11861C27.2454 6.50661 25.9721 5.23194 24.3601 4.60794C23.4281 4.25728 22.4428 4.06928 21.4454 4.04794C20.1628 3.99061 19.7561 3.97461 16.5001 3.97461C13.2441 3.97461 12.8268 3.97461 11.5534 4.04794C10.5574 4.06928 9.57209 4.25728 8.64009 4.60794C7.02809 5.23194 5.75343 6.50661 5.12943 8.11861C4.77876 9.05061 4.58943 10.0359 4.57076 11.0319C4.51343 12.3159 4.49609 12.7226 4.49609 15.9786C4.49609 19.2346 4.49609 19.6506 4.57076 20.9253C4.59076 21.9226 4.77876 22.9066 5.12943 23.8413C5.75476 25.4519 7.02809 26.7266 8.64143 27.3506C9.56943 27.7133 10.5548 27.9186 11.5548 27.9506C12.8388 28.0079 13.2454 28.0253 16.5014 28.0253C19.7574 28.0253 20.1748 28.0253 21.4481 27.9506C22.4441 27.9306 23.4294 27.7426 24.3628 27.3919C25.9748 26.7666 27.2481 25.4919 27.8734 23.8813C28.2241 22.9479 28.4121 21.9639 28.4321 20.9653C28.4894 19.6826 28.5068 19.2759 28.5068 16.0186C28.5041 12.7626 28.5041 12.3493 28.4294 11.0733ZM16.4921 22.1359C13.0868 22.1359 10.3281 19.3773 10.3281 15.9719C10.3281 12.5666 13.0868 9.80794 16.4921 9.80794C19.8948 9.80794 22.6561 12.5666 22.6561 15.9719C22.6561 19.3773 19.8948 22.1359 16.4921 22.1359ZM22.9014 11.0173C22.1054 11.0173 21.4641 10.3746 21.4641 9.57994C21.4641 8.78528 22.1054 8.14261 22.9014 8.14261C23.6948 8.14261 24.3374 8.78528 24.3374 9.57994C24.3374 10.3746 23.6948 11.0173 22.9014 11.0173Z"
      fill="#fefefe"
    ></path>
    <path
      d="M16.4918 19.9758C18.7031 19.9758 20.4958 18.1831 20.4958 15.9718C20.4958 13.7604 18.7031 11.9678 16.4918 11.9678C14.2804 11.9678 12.4878 13.7604 12.4878 15.9718C12.4878 18.1831 14.2804 19.9758 16.4918 19.9758Z"
      fill="#fefefe"
    ></path>
  </svg>
);

const youtubeLogo = (
  <svg width="25" height="30" viewBox="0 0 32 32" fill="none">
    <path
      d="M31.2578 9.56688C30.9846 8.53819 30.2312 7.75562 29.2247 7.48254C27.0851 6.92373 16.0014 6.92373 16.0014 6.92373C16.0014 6.92373 4.91773 6.92373 2.77814 7.48254C1.77162 7.75562 1.01822 8.53819 0.745087 9.56688C0.186267 11.7065 0.186267 16.0014 0.186267 16.0014C0.186267 16.0014 0.186267 20.2963 0.745087 22.4359C1.01822 23.4646 1.77162 24.2472 2.77814 24.5203C4.91773 25.0791 16.0014 25.0791 16.0014 25.0791C16.0014 25.0791 27.0851 25.0791 29.2247 24.5203C30.2312 24.2472 30.9846 23.4646 31.2578 22.4359C31.8166 20.2963 31.8166 16.0014 31.8166 16.0014C31.8166 16.0014 31.8166 11.7065 31.2578 9.56688ZM12.9166 20.2861V11.7147L21.0771 16.0014L12.9166 20.2861Z"
      fill="#ffffff"
    ></path>
  </svg>
);
