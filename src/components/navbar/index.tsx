import Button from "../button";
import "./navbar.scss";

export const Navbar = () => {

    const handleOnClick = () => {
        console.log('click early access')
    }
    return (
        <nav className="w-full ">
            <div className="links flex justify-between">
                <a href="/"><img src="logotipo_dark.svg"></img></a>
                <Button text="Get Early Access" size="lg" onClick={()=>handleOnClick()} />
            </div>
        </nav>
    )
}

export default Navbar;