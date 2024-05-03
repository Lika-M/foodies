import Link from "next/link";
import Image from "next/image";

import logoImage from '@/assets/logo.png';
import NavLink from "../nav-link/nav-link.js";
import styles from './main-header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image src={logoImage} alt="Plate with food" priority />
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}