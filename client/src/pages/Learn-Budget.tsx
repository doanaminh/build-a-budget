import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function () {

    const navigate = useNavigate();

    return (
        <>
            <section className="Learn Budgeting">
                <h3>Build a budget!</h3>
                <p>The most important and basic thing you can do is create a monthly budget. Knowing where your money is coming in and going out is fundamental to being financially stable. No matter how stressful it is to look at these numbers, it is always better to know about the problem rather than ignoring it. That is the first step of devising a plan to fix the problem.</p>
                <Button 
                    backgroundColor="black"
                    color="white"
                    fontSize="1rem"
                    height="4rem"
                    width="10rem"
                    onClick={() => navigate("/budget-calculator")}
                >Create a budget here</Button>
                <section>
                    <p>Good job! So now that you have your budget, let's move on to the next steps. The most immediate thing you can do next, is start moving around the numbers in your budget. The priority of where your money is going every month should be as follows (from most important first):</p>
                    <ol>
                        <li>
                            <h4>Rent/Mortgage</h4>
                            <p>This includes any renter's or homeowner's insurance if required. It is essential to have good health and sleep if you are to succeed.</p>
                        </li>
                        <li>
                            <h4>Food/Groceries</h4>
                            <p>Every single human being on this earth needs to eat. Eating gives you energy and will impact your health greatly. **In extreme cases, bills and utilities may need to be prioritized over food.</p>
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
                            <p>Health insurance and any healthcare expenses (NOT INCLUDING HEALTH CARE DEBT)Your health, both physically and mentally, is so important for you to succeed. I cannot stress this enough. Breaking down these expenses may start to seem inhumane and stressful but remember that you should do what you can and at your own pace. It's not about how fast you can finish the race, but finishing it period.</p>
                        </li>
                        <li>
                            <h4>Minimum Payments on All Debts & Loans</h4>
                            <p>This includes: student loans, credit cards, etc. The only time you should strive to pay off a debt faster is: when you can decrease the interest rate through refinancing. This is a complicated topic with complicated calculations and you should ask your lendor about options about this topic. Most of the time you want to pay the absolute minimum so you can put the rest of your income towards something else if needed.</p>
                        </li>
                    </ol>
                </section>
                <article>
                    <p>If you have completed all the steps listed above, you are officially ready to start planning your savings! Awesome job! Let's keep moving.</p>
                </article>
                <article style={{display: 'flex', justifyContent: 'end'}}>
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
        </>
    )
}