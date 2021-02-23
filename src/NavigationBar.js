import { Link } from 'react-router-dom'
const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>

                <li>
                    <Link to='/About'>About</Link>
                </li>

                <li>
                    <Link to='/Content'>Content</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;