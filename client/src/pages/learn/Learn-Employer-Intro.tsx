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
                        <h3>Build an Employer-Matched Retirement Account</h3>
                        <p>If your employer does NOT offer a {' '}
                        <Term 
                        term="retirement account"
                        definition={Terms.retirement_account}
                        />{' '} WITH a{' '}
                        <Term 
                        term="match"
                        definition="Some employer retirement accounts will match your contributions up to a certain dollar amount anually."
                        />
                        , you can skip this step. Alright! You should have your bills under control at this point.</p>
                        <article>
                            <ul>
                                <h3>Prerequisites</h3>
                                <li>Optimized budget</li>
                                <li>1 month emergency fund</li>
                                <li>All non-essential bills paid in full every month</li>
                            </ul>
                        </article>
                        <article>
                            <ol>
                                <li>
                                    <h4>Enroll in Employer-Matched Retirement Account</h4>
                                    <p>After you've asked your employer about what kind of retirement accounts
                                    they offer, it's time to choose one and start contributing a part of your income towards it. This could be a pension or a 401(k). The most common one is probably a 401(k) retirement account and it comes in either a{' '}
                                    <Term 
                                    term="Traditional"
                                    definition="Retirement account that allows you to contribute with money from your paycheck before any deductions. This will lower your income and possibly affect your placement in the tax bracket. Because of this, you will be taxed when you withdraw any profits from the account. The amount withdrawn will be added to your income and taxed accordingly to your tax bracket of that year."
                                    />
                                    {' '}or a{' '}
                                    <Term 
                                    term="Roth"
                                    definition="Retirement account that allows you to contribute with after-tax money. This means with the money left after taxes have been deducted from your paycheck. This allows you to withdraw any profits free of taxes."
                                    />
                                    {' '}version. Sign up for your preferred employer-matched retirement account and ONLY contribute up to the amount needed to get the full employer match.</p>
                                    <p>Example: Your employer matches 100% of your contributions/dollar-for-dollar. They match up to a maximum of 3% of you annual income. You make $30,000 annually. Your employer will contribute up to $900 a year if you also contribute $900. This is a free $900 that your employer is giving you to invest with. Anything more than $900 will not be matched. To make things simple, you just need to contribute 3% of your paycheck to get maximum matching benefits. Work up to this amount every paycheck.<a href="https://www.investopedia.com/articles/personal-finance/112315/how-401k-matching-works.asp" target="blank">?</a></p>
                                    <p>After sucessfully enrolling in your desired employer-matched retirement account, you will be offered plans to invest in the stock market. If you don't know anything about the stock market and want to safely invest, look into low cost <a href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-4">index funds</a> like: total market index fund or S&P 500. If you would like to play the stock market, feel free to do your research and invest as you like.
                                    <Term 
                                    term="?"
                                    definition="Employer retirement accounts may have limited stock options depending on which brokerage firm they are under."
                                    />
                                    </p>
                                </li>
                            </ol>
                        </article>
                        <p>Good job on investing in your future. Remember to invest the money you contributed in your retirement account; don't let it sit idle.</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#47586A"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-savings-ef')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#47586A"
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
