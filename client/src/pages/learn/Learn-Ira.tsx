import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term, { Terms } from "../../components/Term";
import Break from "../../components/Break";

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
            <h3>IRA & Future Purchases</h3>
            <p>
              You should have no debt at this point. This page will cover the
              basics of IRAs (individual{" "}
              <Term
                term="retirement accounts"
                definition={Terms.retirement_account}
              />
              ) and higher education accounts.
            </p>

            <Break />

            <article>
              <ul>
                <h3>Prerequisites</h3>
                <li>Optimized budget</li>
                <li>1 month emergency fund</li>
                <li>Bills paid in full</li>
                <li>Employer-matched retirement account</li>
                <li>Debt free</li>
              </ul>
            </article>

            <Break />

            <article>
              <ol>
                <li>
                  <h4>Individual Retirement Accounts</h4>
                  <p>
                    The two IRAs that will be discussed are: the{" "}
                    <Term
                      term="traditional IRA"
                      definition={Terms.traditional_retirement_account}
                    />{" "}
                    and the{" "}
                    <Term
                      term="Roth IRA"
                      definition={Terms.roth_retirement_account}
                    />
                    . These IRA accounts are similar to the 401k accounts that
                    were discussed in earlier chapters. The main difference is
                    that IRA will not have a match for your contributions, but
                    they will have similar tax advantages. Choose the one that
                    suits you and open an account with a brokerage firm with low
                    trading fees like{" "}
                    <a
                      href="https://www.fidelity.com/retirement-ira/overview"
                      target="blank"
                    >
                      Fidelity
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://investor.vanguard.com/accounts-plans/iras"
                      target="blank"
                    >
                      Vanguard
                    </a>
                    . Remember to invest in low cost index funds or stocks of
                    your choice.
                  </p>
                </li>
                <li>
                  <h4>Future Purchases</h4>
                  <p>
                    Are you expecting any large, required purchases or personal
                    investments in the near future? This includes: college
                    tuition, professional certificates, a car to get to work,
                    etc. If yes, save the amount needed with the same high-yield
                    savings account you created in the previous chapter or with
                    a checking account. If not, you can continue on to the next
                    chapter.
                  </p>
                </li>
              </ol>
            </article>

            <Break />

            <p>
              You should begin thinking about accounts as mediums for purchases.
              You are putting money into retirement accounts now, but later down
              the line they will be the ones paying you.
            </p>
          </article>
          <article className="buttons">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-debt")}
            >
              Previous
            </Button>
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-max-retirement")}
            >
              Next
            </Button>
          </article>
        </section>
      </section>
    </>
  );
}
