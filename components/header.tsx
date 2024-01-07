import Navbar from "./navbar";
import Banner from "./banner";
import Intro from "./intro";


export default function Header() {
    return (
        <section id="header">
            <Navbar />
            <Banner />
            <Intro />
        </section>
    )
  };