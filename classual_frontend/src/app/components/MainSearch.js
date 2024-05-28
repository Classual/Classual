"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import searchIcon from "../../../public/searchIcon.png";
import mainLogo from "../../../public/Logo.png";
import Geisel from "../../../public/Geisel.png";
import Boy from "../../../public/Boy.png";
import Girl from "../../../public/Girl.png";

function MainSearch() {
  const [searchCourse, setSearchCourse] = useState("");

  // TODOS need to implement search algorithm:
  // pull all the list of courses in a list and list up to 5 that matches

  function searchClicked() {
    console.log("searching for: ", searchCourse);
  }

  return (
    <div className={styles.topContainer}>
      <div className={styles.logo}>
        <Image src={mainLogo} alt="Search Button" width={100} height={100} />
      </div>

      <div className={styles.backgroundImage}>
        <Image src={Geisel} alt="Geisel Library" Width={705} height={310} />
      </div>

      <div className={styles.titleTxt}>UCSD Classual</div>

      <div className={styles.BoyandGirl}>
        <Image src={Boy} alt="Boy Image" width={50} height={50} />

        <div></div>

        <Image src={Girl} alt="Girl Image" width={40} height={50} />
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchCourse}
          onChange={(e) => setSearchCourse(e.target.value)}
          placeholder="Search for your course!"
          className={styles.searchInput}
        />
        <button onClick={searchClicked} className={styles.searchButton}>
          <Image
            src={searchIcon}
            alt="Search Button"
            width={30}
            height={30}
            className={styles.imageStyle}
          />
        </button>
      </div>
    </div>
  );
}

export default MainSearch;
