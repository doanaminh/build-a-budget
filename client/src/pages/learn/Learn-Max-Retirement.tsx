import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";

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
                        <h3>Maximizing for Retirement</h3>
                        <p>Let's take a minute to check how much you are invested into your own retirement.</p>
                        <article>
                            <ul>
                                <h3>Prerequisites</h3>
                                <li>Optimized budget</li>
                                <li>1 month emergency fund</li>
                                <li>Bills paid in full</li>
                                <li>Employer-matched retirement account</li>
                                <li>Debt free</li>
                                <li>IRA</li>
                                <li>Savings account for future purchases</li>
                            </ul>
                        </article>
                        <article>
                            <ol>
                                <li>
                                    <h4>Are you currently at saving least 15% of your pre-tax income for retirement?</h4>
                                    <p>This value is the total contributions to all retirement accounts. **If you are behind on retirement savings, you may want to consider increasing this amount. Increase your contributions until it reaches 15% of your pre-tax income.</p>
                                </li>
                                <li>
                                    <h4>Employer-Matched Retirement Account</h4>
                                    <p>
                                        If you are self-employed, move on to the next step. If you do not have a 401(k), or any employer retirement plan, then you should start one. You should be contributing 15% of your pre-tax income.
                                    </p>
                                </li>
                                <li>
                                    <h4>Self-Employed Retirement Acount</h4>
                                    <p>If you are self-employed, then look into an Individual 401(k), SEP-IRA, or SIMPLE IRA. Open your account of choice and strive to contribute 15% of your pre-tax income.</p>
                                </li>
                            </ol>
                        </article>
                        <p>These accounts will help you maintain a stable income when you decide to retire later down the line.</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-ira')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-long-term-goals')}
                        >Next</Button>
                    </article>
                </section>
            </section>

        </>
    )
}
