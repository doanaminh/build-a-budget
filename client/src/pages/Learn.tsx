import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function () {
    const navigate = useNavigate();

    return (
        <>
            <section className="Learn">
                <h3>Personal Finance Basics Overview</h3>
                <p>
                    This is a quick overview of the flowchart of personal finance. This learning portion should be nothing more than a basic introduction to personal finance. It is strongly recommended to supplement these readings with other sources to verify the correct numbers and rules for where you live. This whole website was written from the perspective of someone living in the United States and should be taken as only an opinion. This website does NOT provide professional advice; take action at your own risks. This portion only serves to help you learn how to think for yourself and educate you on basic financial terms and strategies. With that being said, I am confident that no matter what your financial situation is, there should be something helpful for you here. Remember, it is probably not possible to finish any of these steps within a week, let alone a day. These things take time; so, it's all the more important to create a plan. The first step of fixing a problem is identifying it!
                </p>
                <h4>Table of Contents</h4>
                <ol>
                    <li>
                        <a href="/learn-budget">Budget & reduce monthly expenses; set realistic goals</a>
                    </li>
                    <li>
                        <a href="/learn-savings-ef">Build an emergency fund</a>
                    </li>
                    <li>
                        <a href="/learn-employer-intro">Employer-sponsored matching funds</a>
                    </li>
                    <li>
                        <a href="">Focus on paying high/moderate debts off</a>
                    </li>
                    <li>
                        <a href="">Save for retirement in an IRA & other higher education expenses</a>
                    </li>
                    <li>
                        <a href="">Max out retirement savings where possible</a>
                    </li>
                    <li>
                        <a href="">Save for other goals & advanced methods</a>
                    </li>
                </ol>
                <article>
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
                        Start Learning!
                    </Button>
                </article>
            </section>
        </>
    )
}