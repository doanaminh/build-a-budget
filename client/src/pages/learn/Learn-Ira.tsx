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
                <section>
                    <article>
                        <h3>IRA & Higher Education</h3>
                        <p>This page will cover the basics of IRAs (individual retirement accounts).</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Traditional vs Roth</h4>
                                    <p>You will likely be facing the decision to either open a traditional or Roth IRA. Similarly to the 401k types from last chapter, taditional and Roth are different types of retirement accounts with unique contribution and withdrawal rules. As a quick reminder: Traditional accounts allow you to contribute money after it has been taxed and withdraw any profits tax-free. & Roth accounts allow you to contribute with money before taxes are deducted, but withdrawing profits will be taxed.</p>
                                </li>
                            </ol>
                        </article>
                        <p>outro</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-debt')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-max-retirement')}
                        >Next</Button>
                    </article>

                </section>
            </section>

        </>
    )
}
