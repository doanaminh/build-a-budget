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
                        <h3>Build an Employer-Matched Retirement Account</h3>
                        <p>If your employer does NOT offer a retirement account WITH a match, you can skip this step. Alright! You should have your debt under control or paid off. This will leave you with remainder money to reallocate.</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Enroll in Employer-Matched Retirement Account</h4>
                                    <p>After you've asked your employer about what kind of retirement plans they offer, it's time to choose one and start contributing a part of your income towards it. This could be a pension or a 401(k). The most common one is probably a 401(k) retirement account and it comes in either a{' '}
                                    <Term 
                                    term="Traditional"
                                    definition="Retirement account that allows you to contribute with money from your paycheck before any deductions. This will lower your income and possibly affect your placement in the tax bracket. Because of this, you will be taxed when you withdraw any profits from the account. The amount withdrawn will be added to your income and taxed accordingly to your tax bracket of that year."
                                    />
                                    {' '}or a{' '}
                                    <Term 
                                    term="Roth"
                                    definition="Retirement account that allows you to contribute with after-tax money. This means with the money left after taxes have been deducted from your paycheck. This allows you to withdraw any profits free of taxes."
                                    />
                                    {' '}version.</p>
                                </li>
                            </ol>
                        </article>
                        <p>Good job on investing in your future. Remember to invest the money you contributed in your retirement account and not just let it sit there.</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-savings-ef')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-debt')}
                        >Next</Button>
                    </article>

                </section>
            </section>

        </>
    )
}
