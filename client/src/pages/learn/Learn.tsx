import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";

export default function () {
    const navigate = useNavigate();
    
    return (
        <>
            <section className="Learn Page">
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section className="body">
                    <article>
                        <h3>Personal Finance Basics Overview</h3>
                        <section>
                            <h4>Preface</h4>
                            <p>
                                This is NOT professional advice! This is a quick overview guide of this <a href="https://imgur.com/u0ocDRI" target="blank">personal finance flowchart</a>. Take action at your own risk. With that out of the way: with financial knowledge, you will be able to custom-tailor a financial plan.
                            </p>
                        </section>

                        <section>
                            <h4>Tips</h4>
                            <ul>
                                <li>
                                    Remember you can Google any and everything!
                                </li>
                                <li>
                                    Numbers and statistics vary depending on location
                                </li>
                                <li>
                                    You can click/hover on green terms to view the definition
                                </li>
                                <li>
                                    Not everything can be changed in a day; take your time
                                </li>
                            </ul>
                        </section>
                    </article>


                    <article className="buttons">
                        <Button
                            backgroundColor="#535337"
                            color="beige"
                            fontSize=".9rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/glossary')}
                        >
                            Glossary
                        </Button>
                        <Button
                            backgroundColor="#535337"
                            color="beige"
                            fontSize=".9rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/learn-budget')}
                        >
                            Start
                        </Button>
                    </article>
                </section>
            </section>
        </>
    )
}