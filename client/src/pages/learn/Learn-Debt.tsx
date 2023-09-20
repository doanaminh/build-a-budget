import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";
import { Terms } from "../../components/Term";
import Break from "../../components/Break";
import SEO from "../../components/Seo";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="How to Tackle Debt"
        description="Debt is a difficult matter to handle. Luckily, it is a simple matter to solve. Using strategies like the avalanche or snowball methods, with time you could eliminate your debt. Priority should be with the debt that has the highest interest and working down."
        name="Build-a-Budget"
        type="document"
      />
      <section className="Learn Page Debt">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="body">
          <article>
            <h3>Paying Off Debts</h3>
            <p>
              In this chapter we will tackle{" "}
              <Term term="debt" definition={Terms.debt} /> and expanding our
              emergency fund.
            </p>

            <Break />

            <article>
              <ul>
                <h3>Prerequisites</h3>
                <li>Optimized budget</li>
                <li>1 month emergency fund</li>
                <li>Bills paid in full</li>
                <li>Employer-matched retirement account</li>
              </ul>
            </article>

            <Break />

            <article>
              <ol>
                <li>
                  <h4>High-Interest Debt</h4>
                  <p>
                    Debt is a difficult matter to handle. It's mentally
                    draining, but very simple to manage. It will take time, but
                    with a solid plan, you will be able to eliminate it.
                  </p>
                  <p>
                    High-interest debt is defined by any debt with an{" "}
                    <Term
                      term="interest rate"
                      definition={Terms.interest_rate}
                    />{" "}
                    of 10% or higher. The two debt eliminating methods we will
                    cover are the{" "}
                    <Term term="Avalanche" definition={Terms.debt_avalanche} />{" "}
                    and{" "}
                    <Term term="Snowball" definition={Terms.debt_snowball} />{" "}
                    methods.
                  </p>
                  <p>
                    The avalanche method focuses on paying off the higher
                    interest debt first and can help reduce your total debt cost
                    over time. This is similar to finishing the hardest task
                    first then moving on to easier ones.
                  </p>
                  <p>
                    The snowball method prioritizes the smallest amount debt
                    first. This can be mentally supportive since more debt will
                    be paid off more quickly. This is similar to finishing
                    numerous small tasks in a short amount of time before
                    tackling the hardest ones.
                  </p>
                </li>
                <li>
                  <h4>Increasing Emergency Fund</h4>
                  <p>
                    AFTER you have paid off all of your high-interest debt (10%
                    or higher), look to increase your emergency fund to 3 to 6
                    months worth of living expenses. Your monthly living expense
                    is the total cost of the needs category in your budget.
                    Contribute to your emergency fund until you are comfortable
                    with the amount set aside. This should be atleast 3 months,
                    but not exceeding 6 months, worth of living expenses.
                  </p>
                </li>
                <li>
                  <h4>Moderate-Interest Debt</h4>
                  <p>
                    Moderate-interest debt is defined by any debt with an
                    interest rate between 4% and 10%. Repeat the same strategy
                    you used to pay off your high-interest debt to pay off your
                    moderate-interest debt.
                  </p>
                </li>
              </ol>
            </article>

            <Break />

            <article>
              <p>
                Continue to make minimum payments on, but do not worry about
                paying off, low-interest rate debt (under 4%). If you can get a
                4% or greater return on your money than it is more valuable to
                invest your money elsewhere.
              </p>
              <p>You got this. Consistency is key.</p>
            </article>
          </article>
          <article className="buttons">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-employer-intro")}
            >
              Previous
            </Button>
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-ira")}
            >
              Next
            </Button>
          </article>
        </section>
      </section>
    </>
  );
}
