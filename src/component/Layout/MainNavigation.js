import { Link } from "react-router-dom";



function MainNavigation(){
return(
    <header>
        <div>React meetups</div>
        <nav>
            <ul>
            <li>
                <Link to='/AllMeetup'>AllMeetupsPage</Link>
            </li>           
            <li>
                <Link to='/Favourites'>My favourite</Link>
            </li>
            <li>
                <Link to='/NewMeetup'>NewMeetup</Link>
            </li>
            </ul>
            
        </nav>
    </header>
)
}

export default MainNavigation;