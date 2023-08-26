import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";

export default function () {

    const navigate = useNavigate();

    return (
        <>
            <section className="Learn Page SavingsEF">
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section className="body">
                    <article>
                        <h3>Building an Emergency Fund</h3>
                        <p>At this point you should have money left over monthly after all necessities are paid.</p>
                        <article>
                            <ul>
                                <h3>Prerequisites</h3>
                                <li>optimized budget</li>
                            </ul>
                        </article>
                        <article>
                            <ol>
                                <li>
                                    <h4>Build a Small Emergency Fund</h4>
                                    <p>A good starting point should be 1 month's worth of expenses. (Refer to your budget for this amount; this should be the total amount in your needs category plus the total of your wants category). Using a high-yield savings account, like <a href="https://www.ally.com/bank/online-savings-account/" target="blank">ally</a>, can earn you a tiny amount of extra money over time. Research some high-yield savings accounts available for your area and decide on a trustworthy one. This is something you have to slowly build up. The goal is to have 1 month of expenses set aside in case of an emergency. You could suddenly lose your way of generating income and this will give you 1 month to find another source of income.
                                    <Term 
                                    term="?"
                                    definition="It's important to note that this is money that shouldn't be touched and is exclusively for emergencies like: being laid off or car issues. This money should be spent to help you continue making money and should be replenished if spent."
                                    />
                                    </p>
                                </li>
                                <li>
                                    <h4>Pay Any Non-Essential Bills in Full</h4>
                                    <p>AFTER you have built up your 1-month emergency fund. Pay non-essential bills fully like: cable, internet, phone, etc. Pay it all off in a timely manner to avoid fees.</p>
                                </li>
                            </ol>
                        </article>
                        <p>
                            Hopefully you now understand where your money is coming in and where it's going out. Before moving on, make sure you have built your emergency fund and are paying off your bills fully every month. The next step will be planning for the future.
                        </p>        
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-budget')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-employer-intro')}
                        >Next</Button>
                    </article>
                </section>
            </section>

        </>
    )
}
