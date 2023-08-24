import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term, { Terms } from "../../components/Term";

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
                        <p>You should have no debt at this point. This page will cover the basics of IRAs (individual{' '}
                        <Term 
                        term="retirement accounts"
                        definition={Terms.retirement_account}
                        />
                        ).</p>
                        <article>
                            <ul>
                                <h3>Prerequisites</h3>
                                <li>Monthly contributions to employer-matched 401(k) account up to matched amount with the contributions invested</li>
                            </ul>
                        </article>
                        <article>
                            <ol>
                                <li>
                                    <h4>Traditional vs Roth</h4>
                                    <p>There are mulitple types of IRAs, but we will be covering only two: traditional or Roth IRA. Read between the two and decide which is better for your position. Open an account with a brokerage firm with low trading fees like <a href="https://www.fidelity.com/retirement-ira/overview" target='blank'>Fidelity</a> or <a href="https://investor.vanguard.com/accounts-plans/iras">Vanguard</a> if you're in the United States.</p>
                                </li>
                            </ol>
                        </article>
                        <p>This will be the second retirement account that you'll be investing in.</p>
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
