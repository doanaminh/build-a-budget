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
                        <h3>IRA & Future Purchases</h3>
                        <p>You should have no debt at this point. This page will cover the basics of IRAs (individual{' '}
                        <Term 
                        term="retirement accounts"
                        definition={Terms.retirement_account}
                        />
                        ) and higher education accounts.</p>
                        <article>
                            <ul>
                                <h3>Prerequisites</h3>
                                <li>Optimized budget</li>
                                <li>1 month emergency fund</li>
                                <li>Bills paid in full</li>
                                <li>Employer-matched retirement account</li>
                                <li>Debt free</li>
                            </ul>
                        </article>
                        <article>
                            <ol>
                                <li>
                                    <h4>Individual Retirement Accounts</h4>
                                    <p>There are mulitple types of IRAs, but we will be covering only two: traditional or Roth IRA. Read between the two and decide which is better for your position. Open an account with a brokerage firm with low trading fees like <a href="https://www.fidelity.com/retirement-ira/overview" target='blank'>Fidelity</a> or <a href="https://investor.vanguard.com/accounts-plans/iras">Vanguard</a> if you're in the United States. Remember to invest in low cost index funds or your stocks of choice.</p>
                                </li>
                                <li>
                                    <h4>Future Purchases</h4>
                                    <p>Are you expecting any large, required purchases or personal investments in the near future? This includes: college tuition, professional certificates, a car to get to work, etc. If yes, save the amount needed with the same high-yield savings account you created in the previous chapter or with a checking account. If not, you can continue on to the next chapter.</p>
                                </li>
                            </ol>
                        </article>
                        <p>You should begin thinking about accounts as mediums for purchases. You are putting money into retirement accounts now, but later down the line they will be the ones paying you.</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#47586A"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-debt')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#47586A"
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
