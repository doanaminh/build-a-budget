import "./Sidebar.css"

interface Props {
    children?:React.ReactNode;
}

const Sidebar: React.FC<Props> = () => {

    return (
        <>
            <section className="Sidebar">
                
                <section className="tableContent">
                    <ol>
                        <h4>Table of Contents</h4>
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
                            <a href="/learn-debt">Focus on paying high/moderate debts off</a>
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
                        <li>
                            <a href="/glossary">Glossary</a>
                        </li>
                    </ol>
                </section>

                <section className="sidebarIcon">
                    <span>{'>'}</span>
                </section>
            </section>


        </>
    )
}

export default Sidebar;