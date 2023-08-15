import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function () {

    const navigate = useNavigate();

    return (
        <>
            <section className="Learn Page EmployerIntro">
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section className="body">
                    <article>
                        <h3>IRA & Higher Education</h3>
                        <p>You should be have no debt or are paying the minimum amounts on all debts monthly with more money to allocate. This page will cover the basics of IRAs (individual retirement accounts).</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Traditional vs Roth</h4>
                                    <p>There are mulitple types of IRAs, but we will be covering only two: traditional or Roth IRA. Read between the two and decide which is better for your position. Open an account with a brokerage firm with low trading fees like Fidelity or Vanguard if you're in the United States.</p>
                                </li>
                            </ol>
                        </article>
                        <p>outro</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-debt')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-max-retirement')}
                        >Next</Button>
                    </article>

                </section>
            </section>

        </>
    )
}
