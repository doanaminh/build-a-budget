import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function () {

    const navigate = useNavigate();

    return (
        <>
            <section>
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

                </section>
            </section>
        </>
    )
}