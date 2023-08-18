import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";
import { Terms } from "../../components/Term";

export default function () {

    const navigate = useNavigate();

    return (
        <>
            <section className="Learn Page Budgeting">
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section className="body">
                    <section>
                        <article>
                            <h3>Build a budget!</h3>
                            <p>The most important, and basic, thing you can do is create a monthly{' '}
                            <Term 
                            term='budget'
                            definition={Terms.budget}
                            />
                            . Knowing where your money is coming in and going out is fundamental to being financially successful.</p>
                        </article>


                        <article className="action">
                            <span>If you haven't made one yet; let's make one now. After you've created one, come on back to this page.</span>
                            <div>
                                <Button 
                                    backgroundColor="#43718B"
                                    color="white"
                                    fontSize="1rem"
                                    height="4rem"
                                    width="10rem"
                                    onClick={() => navigate("/calculator")}
                                >Create a budget</Button>
                            </div>

                        </article>
                        
                        <article>
                            <p>Great! So now that you have your budget, let's prioritize where your money should be going (from most immediate first):</p>
                            <ol>
                                <li>
                                    <h4>Rent/Mortgage</h4>
                                    <p>This includes any renter's or homeowner's insurance if required. It is essential to have good health and sleep if you are to succeed.</p>
                                </li>
                                <li>
                                    <h4>Food/Groceries</h4>
                                    <p>Every single human being on this earth needs to eat. Eating gives you energy and will impact your health greatly. **In extreme cases, bills and utilities may need to be prioritized over food. Sadly, snacks are not included in this category.</p>
                                </li>
                                <li>
                                    <h4>Essential Items</h4>
                                    <p>This includes: power, water, heat, toiletries/hygiene, etc. These are basic human needs that you cannot live without.</p>
                                </li>
                                <li>
                                    <h4>Income Earning Expenses</h4>
                                    <p>Necessary transportation expenses (gas, public transit fare), possibly internet/phone. Anything that is required for you to continue earning income.</p>
                                </li>
                                <li>
                                    <h4>Health Care</h4>
                                    <p>Health insurance and any healthcare expenses (NOT INCLUDING HEALTH CARE DEBT). Your health, both physically and mentally, is so important for you to succeed.</p>
                                </li>
                                <li>
                                    <h4>Minimum Payments on All Debts & Loans</h4>
                                    <p>This includes: student loans, credit cards, etc. The only time you should strive to pay off a debt faster is: when you can decrease the interest rate through refinancing. This is a complicated topic with complicated calculations and you should ask your lendor about options about this topic. Most of the time you want to pay the absolute minimum so you can put the remainder to necessities or generate more income.</p>
                                </li>
                            </ol>
                        </article>
                        <article>
                            <p>If you have completed all the steps listed above, you are officially ready to start planning your savings! Let's keep moving.</p>
                        </article>
                        <article className="buttons">
                            <Button 
                                backgroundColor="#535337"
                                color="beige"
                                fontSize="1rem"
                                height="3rem"
                                width="8rem"
                                onClick={() => navigate('/learn')}
                            >Overview</Button>
                            <Button 
                                backgroundColor="#535337"
                                color="beige"
                                fontSize="1rem"
                                height="3rem"
                                width="8rem"
                                onClick={() => navigate('/learn-savings-ef')}
                            >Next</Button>
                        </article>
                    </section>

                </section>
            </section>

        </>
    )
}