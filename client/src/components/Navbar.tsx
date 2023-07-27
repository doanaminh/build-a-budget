import "./Navbar.css";

export default function () {
    return (
        <>
            <div className='Navbar'>
                <h2><a href="/">BaB</a></h2>
                <ul>
                    <li><a href="/calculator">Calculator</a></li>
                    <li><a href="/learn">Learn</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </>
    )
}