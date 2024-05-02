import Link from 'next/link';

export default function Meals() {
    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'white' }}>This is the Meals page!</h1>
            <p><Link href="/meals/something-new">New Page</Link></p>
            <p><Link href="/meals/other-new">Other Page</Link></p>
        </>
    );
}