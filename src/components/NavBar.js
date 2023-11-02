import paul from '../resources/paul_bitmoji.PNG';
import '../styles/App.scss';

export const NavBar = () => {
    return (
        <nav class="navBar">
            <img src={paul} alt="Paul Bitmoji"/>
            <a href="/" className="paulTitle">Paul Spadaccini</a>
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}