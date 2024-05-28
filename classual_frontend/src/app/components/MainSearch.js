"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import searchIcon from "../../../public/searchIcon.png";
import mainLogo from "../../../public/Logo.png";
import Geisel from "../../../public/Geisel.png";
import Boy from "../../../public/Boy.png";
import Girl from "../../../public/Girl.png";

export default function MainSearch({ courses }) {
  const [searchTerm, setSerachTerm] = useState("");
  const allCourses = Object.values(courses).flat();
  const filteredCourse = allCourses
    .filter((course) => course.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 5);

  function searchClicked() {
    console.log("searching for: ", searchTerm);
    setSerachTerm(searchTerm);
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
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSerachTerm(e.target.value)}
            placeholder="Search for your course!"
            className={styles.searchInput}
          />

          {searchTerm && (
            <div className={styles.searchResults}>
              {filteredCourse.map((course, index) => (
                <Link
                  key={index}
                  href={`/${course}`}
                  className={styles.searchResultItem}
                >
                  {course}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => console.log("searching for:", searchTerm)}
          className={styles.searchButton}
        >
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