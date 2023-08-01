import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

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
                        <h3>Preparing for the Future</h3>
                        <p>If you are at this step in your personal finance journey, I just want to say: congratulations! This is a huge achievement and you should be very proud of yourself! Finances are probably not an immediate burden anymore in your daily life. This section will be covering ways to maximize your efforts to save for the far future.</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Health Savings Account</h4>
                                    <p>If you have a high-deductible health plan, you will be able to contribute to an HSA. What is an HSA? It is another vehicle to help save more money. The primary benefit lies within the ability to contribute with pre-tax money and withdraw it tax-free for any qualified medical expenses, such as: deductibles, copayments, and coinsurance. Open an HSA and aim to max your yearly contibution limit.</p>
                                </li>
                                <li>
                                    <h4>Higher Education</h4>
                                    <p>
                                        If you have children or you yourself are looking to save for college expenses, look into opening a 529 plan. This plan is similar to the HSA, but instead of medical expenses, it is for higher educational expenses. This includes cost for enrollment or attendance at a college, university or other eligible post-secondary eduacational institution. Contribute as needed to reach total tuition amount.
                                    </p>
                                </li>
                            </ol>
                        </article>
                        <article>
                            <h4>Future Goals</h4>
                            <p>Whether you want to start a family and settle down or become a digital nomad, having a general idea of how you want to live in the future will dictate how you should continue.</p>
                            <ol>
                                <li>
                                    <h4>Short-Term Goals</h4>
                                    <p>
                                       Do you have more immediate goals that will take less than 3-5 years, like: down payment on a house/car or big vacation coming up? Contribute to a savings account.
                                    </p>
                                </li>
                                <li>
                                    <h4>Long-Term Goals</h4>
                                    <p>
                                       Do you have long-term goals that will take longer than 3-5 years, like: paying off a mortgage or a wedding? Look into contributing to a brokerage account with a conservative mix of stocks and bonds.
                                    </p>
                                </li>
                                <li>
                                    <h4>Retiring Early</h4>
                                    <p>
                                        If you want to wake up every day without the stressful burden of needing to work just to stay alive, then early retirement may be for you. This route requires you to max out all tax-advantage retirement accounts, such as: 401(k), 403(b), or other empolyer-sponsored account. You should also read and consider using the mega backdoor Roth IRA strategy. 
                                    </p>
                                </li>
                            </ol>
                        </article>

                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-max-retirement')}
                        >Previous</Button>
                        <div></div>
                    </article>

                </section>
            </section>

        </>
    )
}
