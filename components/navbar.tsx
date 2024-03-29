import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Navbar() {  
    return (
        <>
            <div className="nav_wrapper">
                <span className="logo_space"><Link href="/"><Image src="/images/mtgaiden_logo2.png" width="256" height="56" alt="MTGaiden"/></Link></span>
                <span className="flex_stretch"></span>
                <nav id="nav">
                    <ul>
                        <li className="current"><a href="index.html"><Button variant="contained" color="secondary" fullWidth>Home</Button></a></li>
                        <li>
                            <a href="#"><Button color="primary" fullWidth>Deck Builder</Button></a>
                            <ul>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Magna phasellus</a></li>
                                <li><a href="#">Etiam dolore nisl</a></li>
                                <li>
                                    <a href="#">Phasellus consequat</a>
                                    <ul>
                                        <li><a href="#">Magna phasellus</a></li>
                                        <li><a href="#">Etiam dolore nisl</a></li>
                                        <li><a href="#">Veroeros feugiat</a></li>
                                        <li><a href="#">Nisl sed aliquam</a></li>
                                        <li><a href="#">Dolore adipiscing</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Veroeros feugiat</a></li>
                            </ul>
                        </li>
                        <li><a href="left-sidebar.html"><Button color="primary" fullWidth>Deck Tester</Button></a></li>
                        <li><a href="right-sidebar.html"><Button color="primary" fullWidth>Account</Button></a></li>
                        <li><a href="no-sidebar.html"><Button color="primary" fullWidth>Help</Button></a></li>
                    </ul>
                </nav>
            </div>
            <div className="nav_shadow"></div>
        </>
    )
}