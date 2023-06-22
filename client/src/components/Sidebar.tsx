import { useState } from "react";
import "./Sidebar.css"

interface Props {
    children?:React.ReactNode;
}

const Sidebar: React.FC<Props> = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section
                className="Sidebar"
                onMouseEnter={() => setModalOpen(true)}
                onMouseLeave={() => setModalOpen(false)}
            >
                {modalOpen && 
                    <section>
                        <h4>Table of Contents</h4>
                        <ol>
                            <li>
                                <a href="/learn-budget">Budget & reduce monthly expenses; set realistic goals</a>
                            </li>
                            <li>
                                <a href="/learn-savings-ef">Build an emergency fund</a>
                            </li>
                            <li>
                                <a href="/learn-employer-intro">Employer-sponsored matching funds</a>
                            </li>
                            <li>
                                <a href="">Focus on paying high/moderate debts off</a>
                            </li>
                            <li>
                                <a href="">Save for retirement in an IRA & other higher education expenses</a>
                            </li>
                            <li>
                                <a href="">Max out retirement savings where possible</a>
                            </li>
                            <li>
                                <a href="">Save for other goals & advanced methods</a>
                            </li>
                        </ol>
                    </section>
                }


                <article>
                    <span>{'>'}</span>
                </article>
            </section>


        </>
    )
}

export default Sidebar;