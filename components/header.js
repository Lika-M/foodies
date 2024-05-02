import Link from "next/link.js";

import logoImage from '@/assets/logo.png';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <img src={logoImage.src} alt="Plate with food" />
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}