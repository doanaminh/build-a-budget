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
                                    onClick={() => {
                                        navigate("/calculator");
                                        window.scrollTo(0, 0);
                                    }}
                                >Create a budget</Button>
                            </div>

                        </article>
                        
                        <article className="budgetList">
                            <p>Great! So now that you have your budget, let's prioritize where your money should be going (from most immediate first). Set aside a certain amount each paycheck to be able to fund these categories fully.</p>
                            <ol>
                                <li>
                                    <h4>Rent/Mortgage</h4>
                                    <p>This includes any renter's or homeowner's insurance if required.</p>
                                </li>
                                <li>
                                    <h4>Food/Groceries</h4>
                                    <p>Everybody needs to eat. Eating gives you energy and will impact your health greatly. Sadly, snacks are not included in this category.  **In extreme cases, bills and utilities may need to be prioritized over food.{' '}
                                    <Term 
                                    term="?"
                                    definition="Multiply the amount of times you go grocery shopping in a month with the average cost of each trip. Example: If you buy groceries every week and pay $100 each time, your monthly groceries budget should be $400. To help reduce this category, look for deals and cut back on snacks."
                                    />
                                    </p>
                                </li>
                                <li>
                                    <h4>Essential Items</h4>
                                    <p>This includes: power, water, heat, toiletries/hygiene, etc. These are basic human needs that you cannot live without.
                                    {' '}
                                    <Term 
                                    term="?"
                                    definition="To help save in this category, you could consider things like: taking less baths and more showers, turning off lights when not in the room."
                                    />
                                    </p>
                                </li>
                                <li>
                                    <h4>Income Earning Expenses</h4>
                                    <p>Necessary transportation expenses (gas, public transit fare), possibly internet/phone. Anything that is required for you to continue earning income.
                                    {' '}
                                    <Term 
                                    term="?"
                                    definition="Multiply the amount of times you pay for gas/fares per month and multiply with the average to get the total transportation budget. Example: filling gas every week and costing $80 will equal to $320 a month."
                                    />
                                    </p>
                                </li>
                                <li>
                                    <h4>Health Care</h4>
                                    <p>Health insurance and any healthcare expenses (NOT INCLUDING HEALTH CARE DEBT). Your health, both physically and mentally, is important for you to succeed.</p>
                                </li>
                                <li>
                                    <h4>Minimum Payments on All Debts & Loans</h4>
                                    <p>This includes: student loans, credit cards, etc. The only time you should strive to pay off a debt faster is: when you can decrease the interest rate through{' '}
                                    <Term 
                                    term="refinancing"
                                    definition={Terms.refinance}
                                    /> 
                                    . This is a complicated topic which will be discussed in a later chapter. For now, just worry about being able to make minimum payments on all debt.</p>
                                </li>
                            </ol>
                        </article>
                        <article>
                            <p>Before continuing, you should have all the categories paid consistently every month in full. Moving forward, you can either make more income to open more options or optimize your budget further to decrease unnecessary costs.</p>
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