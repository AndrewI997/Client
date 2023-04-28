import s from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={s.root}>
            <div className={s.logo}>Logo</div>
            <ul className={s.navlinks}>
                <li><a className={s.link} href="">Home</a></li>
                <li><a className={s.link} href="">Shop</a></li>
                <li><a className={s.link} href="">About</a></li>
            </ul>
            <div className={s.contacts}>
                Contacts
            </div>
        </nav>
    )
}