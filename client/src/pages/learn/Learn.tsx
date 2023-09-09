import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";

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
                                This is NOT professional advice! This is a more in-depth guide of this <a href="https://imgur.com/u0ocDRI" target="blank">personal finance flowchart</a>. This guide will mainly focus in the "safest" method to invest, but with any type of investment, success isn't 100% guaranteed. Take action at your own risk. With that out of the way: with financial knowledge, you will be able to custom-tailor a financial plan that will help you succeed!
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
                                    You can click/hover <Term term="gold terms" definition="Just like this one!" /> to view the definition
                                </li>
                                <li>
                                    Not everything can be changed in a day; take your time
                                </li>
                                <li>
                                    Prerequisites Checklist shows what you should have completed before continuing and Goals Checklist shows what should be accomplished before moving on to the next step.
                                </li>
                            </ul>
                        </section>
                    </article>


                    <article className="buttons">
                        <Button
                            backgroundColor="#47586A"
                            color="beige"
                            fontSize=".9rem"
                            height="3rem"
                            width="8rem"
                            onClick={() => navigate('/glossary')}
                        >
                            Glossary
                        </Button>
                        <Button
                            backgroundColor="#47586A"
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