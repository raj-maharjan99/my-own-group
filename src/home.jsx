import styles from "./home.module.css";

function Home() {
  return (
    <>
      <nav className={styles.navy}>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SAURAHA</a>
          </li>
          <li>
            <a href="#">NARAYANGHAT</a>
          </li>
          <li>
            <a href="#">BHARATPUR</a>
          </li>
          <li>
            <a href="#">TANDI</a>
          </li>
          <li>
            <a href="#">MADI</a>
          </li>
          <li>
            <a href="#">MEGHAULI</a>
          </li>
          <li>
            <a href="#">MUGLIN</a>
          </li>
          <li>
            <a href="#">BHANDARA</a>
          </li>
          <li>
            <a href="#">BHANDARA</a>
          </li>
          <li>
            <a href="#">GALLERY</a>
          </li>

          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>

      <div className={styles.main}>
        {/* <img
          className={styles.buddha}
          src="https://gallerist.in/cdn/shop/products/lord-buddha-painting-9_3357x.jpg?v=1664435768https://risingnepaldaily.com/storage/media/12080/rhino.jpg"
          alt="buddha"
        /> */}
      </div>
    </>
  );
}

export default Home;
