import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Logo = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 470 334"
    fill="none"
    className={styles.logo}
  >
    <path
      opacity="0.3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M435.364 145.483C465.564 103.229 475.09 64.1683 459.592 37.3242C444.095 10.4802 405.506 -0.799791 353.815 4.22878C302.427 9.22794 239.359 30.2902 176.896 66.3551C114.433 102.42 64.6596 146.511 34.6363 188.517C4.43627 230.771 -5.08985 269.832 10.4077 296.676C25.9052 323.52 64.4939 334.8 116.185 329.771C167.573 324.772 230.641 303.71 293.104 267.645C355.567 231.58 405.34 187.489 435.364 145.483ZM294.637 270.3C420.142 197.836 495.184 92.8423 462.247 35.7912C429.311 -21.2599 300.868 -8.76474 175.363 63.6999C49.8577 136.164 -25.184 241.158 7.75257 298.209C40.6892 355.26 169.132 342.765 294.637 270.3Z"
      fill="white"
    ></path>
    <path
      d="M107.219 82.6552H126.718V91.4854H127.699C130.07 87.9697 133.258 85.2716 137.264 83.3911C141.352 81.5106 146.421 80.5703 152.471 80.5703C161.873 80.5703 168.659 83.0231 172.828 87.9288C177.079 92.7527 179.205 100.356 179.205 110.74V144.834H159.706V111.721C159.706 106.897 158.521 103.3 156.15 100.929C153.779 98.5577 149.773 97.3722 144.132 97.3722C138.654 97.3722 134.362 98.5986 131.255 101.051C128.23 103.504 126.718 107.265 126.718 112.334V144.834H107.219V82.6552Z"
      fill="white"
    ></path>
    <path
      d="M231.171 146.919C218.254 146.919 208.648 143.976 202.352 138.089C196.057 132.202 192.909 124.149 192.909 113.929C192.909 103.627 196.016 95.5326 202.23 89.6458C208.443 83.6772 218.009 80.693 230.926 80.693C255.289 80.693 267.471 91.6898 267.471 113.683V119.08H212.531C213.349 123.331 215.311 126.438 218.417 128.4C221.606 130.281 226.225 131.221 232.275 131.221C240.941 131.221 246.337 129.014 248.463 124.599H266.858C265.55 131.712 261.912 137.231 255.943 141.155C249.975 144.998 241.718 146.919 231.171 146.919ZM248.218 106.693C247.4 103.014 245.56 100.356 242.699 98.7212C239.919 97.086 235.954 96.2684 230.803 96.2684C220.747 96.2684 214.779 99.7432 212.899 106.693H248.218Z"
      fill="white"
    ></path>
    <path
      d="M271.115 82.6552H290.736L303.735 123.985H304.839L321.272 82.6552H339.79L356.1 123.985H357.081L370.081 82.6552H389.825L368.241 144.834H346.903L330.96 104.608H329.979L314.037 144.834H292.698L271.115 82.6552Z"
      fill="white"
    ></path>
    <path
      d="M66.0938 150.792H85.5926V186.113H86.5737C88.7811 182.679 91.9696 179.94 96.1392 177.896C100.309 175.852 105.582 174.83 111.959 174.83C120.87 174.83 127.452 176.915 131.703 181.084C135.954 185.172 138.08 191.059 138.08 198.745V239.094H118.581V205.245C118.581 200.666 117.396 197.273 115.025 195.065C112.736 192.776 108.607 191.632 102.639 191.632C97.0793 191.632 92.828 192.817 89.8848 195.188C87.0233 197.477 85.5926 201.034 85.5926 205.858V239.094H66.0938V150.792Z"
      fill="white"
    ></path>
    <path
      d="M189.801 241.179C184.16 241.179 178.968 240.524 174.227 239.216C169.566 237.908 165.56 235.905 162.208 233.207C158.938 230.509 156.363 227.075 154.482 222.905C152.684 218.735 151.784 213.789 151.784 208.065C151.784 202.342 152.684 197.396 154.482 193.226C156.363 188.974 158.938 185.499 162.208 182.801C165.56 180.103 169.566 178.1 174.227 176.792C178.968 175.484 184.16 174.83 189.801 174.83C195.524 174.83 200.716 175.484 205.376 176.792C210.118 178.1 214.164 180.103 217.516 182.801C220.868 185.499 223.444 188.974 225.242 193.226C227.123 197.396 228.063 202.342 228.063 208.065C228.063 213.789 227.123 218.735 225.242 222.905C223.444 227.075 220.868 230.509 217.516 233.207C214.164 235.905 210.118 237.908 205.376 239.216C200.716 240.524 195.524 241.179 189.801 241.179ZM171.529 207.943C171.529 213.666 173.164 217.836 176.434 220.452C179.704 222.987 184.16 224.254 189.801 224.254C195.606 224.254 200.143 222.987 203.414 220.452C206.684 217.836 208.319 213.666 208.319 207.943C208.319 202.138 206.643 197.968 203.291 195.433C200.021 192.899 195.524 191.632 189.801 191.632C184.16 191.632 179.704 192.899 176.434 195.433C173.164 197.968 171.529 202.138 171.529 207.943Z"
      fill="white"
    ></path>
    <path
      d="M242.381 176.915H261.879V185.132H262.86C264.986 182.27 268.011 179.858 271.935 177.896C275.86 175.852 280.888 174.83 287.019 174.83C291.598 174.83 295.808 175.525 299.651 176.915C303.493 178.305 306.804 180.389 309.584 183.169C312.446 185.867 314.653 189.301 316.206 193.471C317.842 197.559 318.659 202.301 318.659 207.698C318.659 213.175 317.842 217.999 316.206 222.169C314.571 226.339 312.323 229.855 309.462 232.716C306.6 235.496 303.166 237.622 299.16 239.094C295.236 240.484 290.903 241.179 286.161 241.179C282.891 241.179 279.988 240.852 277.454 240.197C274.919 239.625 272.712 238.848 270.832 237.867C268.951 236.886 267.357 235.782 266.049 234.556C264.741 233.33 263.678 232.103 262.86 230.877H261.879V263.622H242.381V176.915ZM261.634 207.943C261.634 218.899 267.807 224.377 280.152 224.377C286.774 224.377 291.516 222.946 294.377 220.084C297.239 217.141 298.67 213.094 298.67 207.943C298.67 202.792 297.198 198.786 294.255 195.924C291.312 192.981 286.652 191.509 280.275 191.509C274.143 191.509 269.483 192.899 266.294 195.679C263.187 198.459 261.634 202.547 261.634 207.943Z"
      fill="white"
    ></path>
    <path
      d="M368.848 241.179C355.931 241.179 346.324 238.235 340.029 232.348C333.734 226.462 330.586 218.408 330.586 208.188C330.586 197.886 333.693 189.792 339.906 183.905C346.12 177.937 355.685 174.952 368.603 174.952C392.966 174.952 405.148 185.949 405.148 207.943V213.339H350.208C351.025 217.591 352.987 220.697 356.094 222.66C359.283 224.54 363.902 225.48 369.952 225.48C378.618 225.48 384.014 223.273 386.14 218.858H404.535C403.227 225.971 399.588 231.49 393.62 235.414C387.652 239.257 379.395 241.179 368.848 241.179ZM385.894 200.952C385.077 197.273 383.237 194.616 380.376 192.981C377.596 191.345 373.631 190.528 368.48 190.528C358.424 190.528 352.456 194.003 350.576 200.952H385.894Z"
      fill="white"
    ></path>
  </svg>
);

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <Link to="/about">O nas</Link>
        <Link to="/offer">Oferta</Link>
        {/* <Link to="/shop">Sklep</Link> */}
        <Link to="/events">Wydarzenia</Link>
        <Link to="/news">Aktualności</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </nav>
  );
};
