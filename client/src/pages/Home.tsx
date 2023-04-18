import Button from "../components/Button"

export default function () {
    return(
        <>

            {/* HERO SECTION */}
            <section className="Home">
                <main>
                    <h1>Build-a-Budget</h1>
                    <p>
                        What is a budget? 
                        <br />
                        In short: a financial plan.
                        <br />
                         Create your own and conquer your future!
                    </p>
                    <Button
                        backgroundColor="blanchedalmond"
                        children='Start Here'
                        color='#ad8e60'
                        fontSize="1.8rem"
                        height='80px'
                        width='200px'
                        onClick={() => console.log('hello')}
                    />
                </main>

                {/* STATISTICS PANEL SECTION */}
                <section className='homePanel'>
                    <h3>Why do I need a budget?</h3>

                    {/* DEBT INFOGRAPHICS */}
                    <section className="debt">
                        <h4>DEBT</h4>
                        <section className='panels'>
                            <article>
                                <img src="/assets/concept-of-to-do-list.png" alt="" />
                                <p>The average undergraduate student loan debt by the end of 2022 was around <b>$37,787</b>.</p>
                                <a href="https://www.bankrate.com/loans/student-loans/student-loan-debt-statistics/#key-statistics">source</a>
                            </article>
                            <article>
                                <img src="/assets/concept-of-to-do-list.png" alt="" />
                                <p>The average mortgage debt in America in 2022 was <b>$236,443</b>.</p>
                                <a href="https://www.fool.com/the-ascent/research/average-household-debt/">source</a>
                            </article>
                            <article>
                                <img src="/assets/concept-of-to-do-list.png" alt="" />
                                <p>The average american in Q1 of 2023 has <b>$5,733</b> in credit card debt.</p>
                                <a href="https://www.cnbc.com/2023/06/09/how-much-credit-card-debt-americans-hold-by-age.html">source</a>
                            </article>
                        </section>
                    </section>

                    {/* EMERGENCY */}
                    <section className="emergency">
                        <h4>EMERGENCY</h4>
                        <p>Emergencies happen when we least expect it. Automotive, medical, natural. No matter how small or large the expense, would you have an emergency fund ready? A reported 22% of U.S. adults claim to have no emergency savings.</p>
                        <a href="https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/">source</a>
                    </section>

                    {/* EDUCATION INFOGRAPHICS */}
                    <section className="education">
                        <h4>EDUCATION</h4>
                        <p>To manage money better requires an understanding of how it actually works. The average American was only able to correctly answer about <b>48%</b> of the 2023 P-Fin Index financial literacy survey. This survey measures knowledge relating to financial situations encountered in the normal course of life.</p>
                        <a href="https://gflec.org/wp-content/uploads/2023/04/2023-P-Fin-Index-report-TIAA-Inst-and-GFLEC-Apr-2023.pdf">source</a>
                    </section>
                    
                </section>

                {/* FURTHER READING */}
                <section className="goals">
                    <h3>What can I achieve with a budget?</h3>
                    <article>
                        <p>
                            Dream home?
                        </p>
                    </article>
                </section>
            </section>

            
            <ul>
                <li><a href="https://i.imgur.com/u0ocDRI.png" target='_blank'>REDDIT REFERENCE</a></li>
                <li><a href="/credits">credits</a></li>
                <li>ADD A SECTION ON EMERGENCY FUND</li>
            </ul>
        </>
    )
}