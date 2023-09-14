import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Break from "../../components/Break";
import Term, { Terms } from "../../components/Term";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <section className="Learn Page LearnLongTermGoals">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="body">
          <article>
            <h3>Preparing for the Future</h3>
            <p>
              If you are at this step in your personal finance journey, I just
              want to say congratulations! This section will be covering ways to
              maximize your income and plan for the far future.
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
                <li>IRA</li>
                <li>Savings account for near-future purchases</li>
                <li>
                  Atleast 15% of total income invested in retirement accounts
                </li>
              </ul>
            </article>

            <Break />

            <article>
              <h4>Tax-Advantaged Accounts</h4>
              <ol>
                <li>
                  <h5>Health Savings Account</h5>
                  <p>
                    If you have a high-deductible health plan, you may be able
                    to contribute to an HSA. What is an HSA? A Health Savings
                    Account is another{" "}
                    <Term
                      term="tax-advantaged"
                      definition={Terms.tax_advantaged_account}
                    />{" "}
                    savings account. The primary benefit lies within the ability
                    to contribute to this account with{" "}
                    <Term term="pre-tax" definition={Terms.pre_tax} /> income
                    and withdraw it tax-free for qualified medical expenses such
                    as: deductibles, copayments, and coinsurance. You can check
                    to see if you qualify{" "}
                    <a
                      href="https://www.irs.gov/publications/p969#en_US_2022_publink1000204025"
                      target="blank"
                    >
                      here
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <h5>Higher Education</h5>
                  <p>
                    If you have children or you yourself are looking to save for
                    college expenses, look into opening a 529 plan. This plan is
                    similar to the HSA, but instead of medical expenses, it is
                    for higher educational expenses. This includes cost for
                    enrollment or attendance at a college, university or other
                    eligible post-secondary eduacational institution. Contribute
                    as needed to reach total tuition amount. You can learn more
                    about 529 plans{" "}
                    <a
                      href="https://www.sec.gov/about/reports-publications/investor-publications/introduction-529-plans"
                      target="blank"
                    >
                      here
                    </a>
                    .
                  </p>
                </li>
              </ol>
            </article>
            <article>
              <h4>Future Goals</h4>
              <p>
                Whether you want to start a family and settle down or become a
                digital nomad, having a general idea of how you want to live in
                the future will dictate how you should continue.
              </p>
              <ol>
                <li>
                  <h5>Short-Term Goals</h5>
                  <p>
                    Do you have more immediate goals that will take less than
                    3-5 years, like: down payment on a house/car or a big
                    vacation coming up? Contribute to a savings account.
                  </p>
                </li>
                <li>
                  <h5>Long-Term Goals</h5>
                  <p>
                    Do you have long-term goals that will take longer than 3-5
                    years, like: paying off a mortgage or a wedding? Look into
                    contributing to a brokerage account with a conservative mix
                    of stocks and bonds. A brokerage account is an account
                    without tax benefits that is able to trade in the stock
                    market.
                  </p>
                </li>
                <li>
                  <h5>Retiring Early</h5>
                  <p>
                    If you would like to retire early, look to max out all
                    tax-advantaged retirement accounts, such as: 401(k), 403(b),
                    or other empolyer-sponsored account. You should also read
                    and consider using the{" "}
                    <a
                      href="https://www.fidelity.com/learning-center/personal-finance/mega-backdoor-roth"
                      target="blank"
                    >
                      mega backdoor Roth IRA strategy
                    </a>
                    .
                  </p>
                </li>
              </ol>
            </article>
          </article>
          <article className="buttons">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-max-retirement")}
            >
              Previous
            </Button>
            <div></div>
          </article>
        </section>
      </section>
    </>
  );
}
