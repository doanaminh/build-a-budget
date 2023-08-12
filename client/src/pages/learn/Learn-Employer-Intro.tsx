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
                        <h3>Build an Employer-Matched Retirement Account</h3>
                        <p>If your employer does NOT offer a retirement account WITH a match, you can skip this step. Alright! You should have your debt under control or paid off. This will leave you with remainder money to reallocate.</p>
                        <article>
                            <ol>
                                <li>
                                    <h4>Enroll in Employer-Matched Retirement Account</h4>
                                    <p>After you've asked your employer about what kind of retirement plans they offer, it's time to choose one and start contributing a part of your income towards it. The most common one is probably the 401(k) and it comes in either a Traditional or a Roth version. In plain terms, a Traditional 401(k) can be contributed to with money that HAS NOT been taxed, but will be taxed when you withdraw the profits in the future. This effectively does two things simultaneously: lowers your overall income which will potentially lower how much you will be taxed and allows you to potentially invest more per paycheck. This is a great option if you think you will have a lower income in the future. A Roth 401(k) could be considered the opposite. You contribute money that is already taxed, but you will not have to pay taxes on the profits when you withdraw it at a later date. This a good option if you plan to make MORE income in the future.</p>
                                </li>
                            </ol>
                        </article>
                        <p>Good job on taking your first step into investing in yourself and creating a future where you potentially don't have to work every single day just to survive. This section was the first step into a very complicated topic. It's okay to not remember everything. There are free resources in every corner of the internet that you can check when you have doubts about anything. Take a deep breath and push forward when you're ready.</p>
                    </article>
                    <article className="buttons">
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-savings-ef')}
                        >Previous</Button>
                        <Button 
                            backgroundColor="#535337"
                            color="beige"
                            fontSize="1rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-debt')}
                        >Next</Button>
                    </article>

                </section>
            </section>

        </>
    )
}
