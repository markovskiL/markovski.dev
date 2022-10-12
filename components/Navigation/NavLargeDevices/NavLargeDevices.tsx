import React, { useEffect, useRef, useState } from "react";
import styles from "./NavLargeDevices.module.scss";
import { Link as ScrollLink } from "react-scroll/modules";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
const NavLargeDevices = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(
    window.pageYOffset
  );
  const [oldScrollPosition, setOldScrollPosition] = useState<number>(0);
  const [newScrollPosition, setNewScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    setCurrentScrollPosition(window.pageYOffset);
    setOldScrollPosition(newScrollPosition);
    setNewScrollPosition(currentScrollPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScrollPosition]);

  return (
    <div
      className={`${styles.NavigationLargeDevices} ${
        newScrollPosition >= oldScrollPosition && newScrollPosition > 55
          ? styles.scrollDown
          : ""
      }`}
    >
      <ScrollLink
        to="home"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        About
      </ScrollLink>

      <ScrollLink
        to="projects"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        Projects
      </ScrollLink>

      <ScrollLink
        to="contact"
        activeClass={styles.active}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        delay={100}
        className={styles.navLink}
      >
        Contact
      </ScrollLink>
      <div className={styles.contactIcons}>
        <Link
          href={"https://www.linkedin.com/in/leonardo-markovski-97293a162/"}
        >
          <a target={"_blank"}>
            <BsLinkedin className={styles.linkedIn} />
          </a>
        </Link>
        <Link href={"https://github.com/markoskyL/markovski.dev"}>
          <a target={"_blank"}>
            <BsGithub className={styles.gitHub} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavLargeDevices;
