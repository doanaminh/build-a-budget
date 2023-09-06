import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";
import { Terms } from "../../components/Term";

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
                        <h3>Paying Off Debts</h3>
                        <p>If you don't have debt, you can skip this section. You should have a lofty emergency fund at this point. This section deals with handling and eliminating debt.</p>
                        <article>
                            <ul>
                                <h3>Prerequisites</h3>
                                <li>Optimized budget</li>
                                <li>1 month emergency fund</li>
                                <li>Bills paid in full</li>
                                <li>Employer-matched retirement account</li>
                            </ul>
                        </article>
                        <article>
                            <ol>
                                <li>
                                    <h4>High Interest Debt</h4>
                                    <p>Debt is a difficult matter to handle. It's mentally draining, but very simple to manage. It will take time, but with a consistent payment plan, you will be able to eliminate it.</p>
                                    <p>If you have debt with an interest rate of 10% or higher, consider using the{' '}
                                    <Term 
                                    term="Avalanche"
                                    definition={Terms.debt_avalanche}
                                    />{' '} or {' '}
                                    <Term 
                                    term="Snowball"
                                    definition={Terms.debt_snowball}
                                    />{' '} methods. 
                                    The avalanche method focuses on paying off the higher interest debt first while the snowball method priotizes the smallest amount debt first.
                                    </p>
                                    <p>After selecting your preferred method, use it to pay back all your debt.</p>
                                </li>
                            </ol>
                        </article>
                        <article>
                            <p>Good job on tackling your debt!</p>
                        </article>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#47586A"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-employer-intro')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#47586A"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-ira')}
                        >Next</Button>
                    </article>

                </section>
            </section>

        </>
    )
}
