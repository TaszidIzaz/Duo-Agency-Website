    import './style.css';

    const Navbar = () => {
    return (
        <div id="nav">
            <img src="https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg"
                alt="Duo Studio Logo"/>
            <div id="nav-part2">
                <h4>Home</h4>
                <h4>Work</h4>
                <h4>Studio</h4>
                <h4>Contact</h4>
            </div>
            <div id="nav-part3">
                <div id="circle"></div>
            </div>
        </div>
    );
    };

    export default Navbar;