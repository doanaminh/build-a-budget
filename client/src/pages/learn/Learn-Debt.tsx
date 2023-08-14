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
                        <h3>Paying Off Debts</h3>
                        <p>If you don't have debt, you can skip this section. You should have a lofty emergency fund at this point. This section deals with handling and eliminating debt. Although, at times it may seem impossible, there's always a way. It takes time, but with a solid plan, you can accelerate at which you can pay them off.</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Make Minimum Payments on All Debts/Loans</h4>
                                    <p>Make the minimum payments on all amounts that you owe. You should prioritize the ones with the highest interest rates first. The goal is to make the minimum payment for all amounts due.</p>
                                </li>
                            </ol>
                        </article>
                        <p>Great work getting a grasp on your debts!</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-employer-intro')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-ira')}
                        >Next</Button>
                    </article>

                </section>
            </section>

        </>
    )
}
