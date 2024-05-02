import Link from "next/link";
import Image from "next/image";

import logoImage from '@/assets/logo.png';
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