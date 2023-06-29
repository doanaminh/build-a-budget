import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function () {

    const navigate = useNavigate();

    return (
        <>
            <section className="Learn Page SavingsEF">
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section>
                    <article>
                        <h3>Build an Emergency Fund</h3>
                        <p>Good job on moving your money around your budget! At this point you should have extra money monthly and are looking to distribute it into a savings account of some sort.</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Build a Small Emergency Fund</h4>
                                    <p>A good starting point should be the bigger amount between $1,000 or 1 month's worth of expenses. (Refer to your budget for this amount; this should be the total amount in your needs category plus the total of your wants category). Using a high-yield savings account can earn you a tiny amount of extra money over time. The alternative is a checking account with a trusted bank. This is something you may have to slowly build up. The goal is to have 1 month of expenses saved up in case of an emergency. You could suddenly lose your way of generating income and this will give you 1 month to find another source of income.</p>
                                </li>
                                <li>
                                    <h4>Pay Any Non-Essential Bills in Full</h4>
                                    <p>This is AFTER you have built up your 1-month emergency fund. This includes: cable, internet, phone, etc. Pay it all off at your own pace.</p>
                                </li>
                            </ol>
                        </article>
                        <p>
                            If you have completed the steps above, most people will now consider you financially stable. You may still have debt, but you are able to pay it off in a timely manner along with all of your other bills. Hopefully you now understand where your money is coming in and where it's going out. The next step will be to plan for retirement.
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
