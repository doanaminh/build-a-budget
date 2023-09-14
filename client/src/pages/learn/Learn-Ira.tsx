import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term, { Terms } from "../../components/Term";
import Break from "../../components/Break";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <section className="Learn Page LearnIra">
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
              ) and near-future purchases.
            </p>

            <Break />

            <article>
              <ul>
                <h3>Prerequisites</h3>
                <li>Optimized budget</li>
                <li>1 month emergency fund</li>
                <li>Bills paid in full</li>
                <li>Employer-matched retirement account</li>
                <li>Moderate-interest or higher debt free</li>
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
                  <h4>Near-Future Purchases</h4>
                  <p>
                    Are you expecting any large, required purchases or personal
                    investments in the near future? This includes: college
                    tuition, professional certificates, a car to get to work,
                    etc. If yes, save the amount needed within the same
                    high-yield savings account you created in the previous
                    chapter or with a checking account. If not, you can continue
                    on to the next chapter.
                  </p>
                </li>
              </ol>
            </article>

            <Break />

            <p>
              Start thinking about each account as "buckets" for your expenses.
              Whenever there is a new expense you should automatically think of
              creating a new a bucket. It's important to note that you can have
              multiple "buckets" in the same account. The important thing is to
              be able to separate the total inside the account and label it
              accordingly.{" "}
              <a href="" target="blank">
                Ally
              </a>{" "}
              has a feature on their app to separate your money into "buckets"
              within the same account, but not all banks will, so you may have
              to keep track of the math yourself.
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
