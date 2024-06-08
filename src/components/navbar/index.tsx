import Button from "../button";
import "./navbar.scss";

import { eventClicked, showEventClicked } from '../../redux/slices/event.slices';
import { useAppDispatch } from "../../redux/hooks";

export const Navbar = () => {

    const dispatch = useAppDispatch();

    const handleOnClick = (source:string) => {
        dispatch(eventClicked(`clicker from ${source}`))
        dispatch(showEventClicked());
    }
    return (
        <nav className="w-full ">
            <div className="links flex justify-between">
                <a href="/"><img src="logotipo_dark.svg"></img></a>
                <Button text="Get Early Access" size="lg" onClick={(e)=>handleOnClick('click header')} />
            </div>
        </nav>
    )
}

export default Navbar;