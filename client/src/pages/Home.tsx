import Button from "../components/Button";
import home from '/svg/home.svg';
import freedom from '/svg/freedom.svg';
import travel from '/svg/travel.svg';
import emergency from '/svg/emergency.svg';
import education from '/svg/education.svg';
import creditCard from '/svg/creditCard.svg';
import mortgage from '/svg/mortgage.svg';

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
                        fontSize="1.6rem"
                        height='80px'
                        width='200px'
                        onClick={() => console.log('hello')}
                    />
                </main>

                {/* STATISTICS PANEL SECTION */}
                <section className='homePanel'>
                    <h3>Why do I need a budget?</h3>

                    {/* GOALS */}
                    <section className="goals">
                        <section>
                            <article>
                                <img src={freedom} alt="" />
                                <h4>Financial Freedom</h4>
                            </article>
                            <article>
                                <img src={home} alt="" />
                                <h4>Dream Home</h4>
                            </article>
                            <article>
                                <img src={travel} alt="" />
                                <h4>Traveling</h4>
                            </article>
                        </section>
                    </section>

                    {/* EMERGENCY */}
                    <section className="emergency">
                        <img src={emergency} alt="" />
                        <h4>EMERGENCIES</h4>
                        <p>Emergencies happen when we least expect it. Automotive, medical, natural; no matter how small or large the expense, would you have an emergency fund ready? A reported 22% of U.S. adults claim to have no emergency savings. <a href="https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" target='_blank'>source</a></p>
                        
                    </section>

                    {/* DEBT INFOGRAPHICS */}
                    <section className="debt">
                        <section>
                            <article>
                            <img src={education} alt="" />
                                <p>The average undergraduate student loan debt by the end of 2022 was around <b>$37,787</b>.  <a href="https://www.bankrate.com/loans/student-loans/student-loan-debt-statistics/#key-statistics" target='_blank'>source</a></p>
                               
                            </article>
                            <article>
                                <img src={mortgage} alt="" />
                                <p>The average mortgage debt in America in 2022 was <b>$236,443</b>. <a href="https://www.fool.com/the-ascent/research/average-household-debt/" target='_blank'>source</a></p>
                                
                            </article>
                            <article>
                                <img src={creditCard} alt="" />
                                <p>The average american in Q1 of 2023 has <b>$5,733</b> in credit card debt. <a href="https://www.cnbc.com/2023/06/09/how-much-credit-card-debt-americans-hold-by-age.html" target='_blank'>source</a></p>
                                
                            </article>
                        </section>
                    </section>

                    {/* EDUCATION INFOGRAPHICS */}
                    <section className="education">
                        <img src="assets\pexels-monstera-5849556.jpg" alt="" />
                        <h4>EDUCATION</h4>
                        <p>To manage money better requires an understanding of how it actually works. The average American was only able to correctly answer about <b>48%</b> of the 2023 P-Fin Index financial literacy survey. This survey measures knowledge relating to financial situations encountered in the normal course of life. <a href="https://gflec.org/wp-content/uploads/2023/04/2023-P-Fin-Index-report-TIAA-Inst-and-GFLEC-Apr-2023.pdf" target='_blank'>source</a></p>
                    </section>
                    
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