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
                                This is a quick overview of the flowchart of personal finance. This learning portion should be nothing more than a basic introduction to personal finance. It is strongly recommended to supplement these readings with other sources to verify the correct numbers and rules for where you live. This reading was written from the perspective of someone living in the United States and should only be taken as an opinion. This site does NOT provide professional advice; take action at your own risk. This portion only serves to help you learn how to think for yourself and educate yourself on basic financial terms and strategies. With that being said, I am confident that no matter what your financial situation is, there should be something helpful for you here. Remember, it is probably not possible to finish any of these steps within a week, let alone a day. These things take time; so, it's all the more important to create a plan. The first step of fixing a problem is identifying it!

                                This is NOT professional advice! This is a quick overview guide of this <a href="https://imgur.com/u0ocDRI" target="blank">personal finance flowchart</a>.
                            </p>
                        </section>

                        <section>
                            <h4>Tips</h4>
                            <ul>
                                <li>
                                    Google is your best friend
                                </li>
                                <li>
                                    Numbers and statistics vary depending on location
                                </li>
                                <li>
                                    Not everything can be changed in a day; take your time
                                </li>
                                <li>
                                    You can click/hover on certain terms to view the definition
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