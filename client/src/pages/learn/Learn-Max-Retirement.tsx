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
            <h3>Maximizing for Retirement</h3>
            <p>
              Let's take a minute to check how much you are invested into your
              retirement. Below we will be mainly using the pre-tax retirement
              accounts as examples. If you choose a{" "}
              <Term
                term="traditional retirement account"
                definition={Terms.traditional_retirement_account}
              />{" "}
              then contribute 15% of your{" "}
              <Term term="pre-tax" definition={Terms.pre_tax} /> income. If you
              choose a{" "}
              <Term
                term="Roth retirement account"
                definition={Terms.roth_retirement_account}
              />{" "}
              then contribute 15% of your{" "}
              <Term term="post-tax" definition={Terms.post_tax} /> income.
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
              </ul>
            </article>

            <Break />

            <article>
              <ol>
                <li>
                  <h4>
                    Are you currently at saving least 15% of your pre-tax income
                    for retirement?
                  </h4>
                  <p>
                    This value is the total contributions to all retirement
                    accounts. If you are already contributing 15% of your{" "}
                    <Term term="pre-tax" definition={Terms.pre_tax} /> income,
                    then feel free to continue to the next chapter. If not, then
                    increase your contributions until it reaches 15% of your
                    pre-tax income **If you are behind on retirement savings,
                    you may want to consider increasing this amount.
                  </p>
                </li>
                <li>
                  <h4>Employer Retirement Account</h4>
                  <p>
                    If you are self-employed, move on to step 3 below. If you do
                    not have an employer retirement account, start one and work
                    up to contributing 15% of your{" "}
                    <Term term="pre-tax" definition={Terms.pre_tax} /> income.
                    We previously discussed employer-matched retirement accounts
                    in <a href="/learn-employer-intro">chapter 3</a>. Your
                    employer may or may not offer a matched contribution
                    account. Either way, you should open one now.
                  </p>
                </li>
                <li>
                  <h4>Self-Employed Retirement Acount</h4>
                  <p>
                    If you are self-employed, then look into an Individual
                    401(k), SEP-IRA, or SIMPLE IRA. Unfortunately, I have never
                    used any of these accounts, so do your research and select
                    the best one for your situation. You can read more{" "}
                    <a href="https://www.irs.gov/retirement-plans/retirement-plans-for-self-employed-people">
                      here
                    </a>
                    . Open your preferred account and strive to contribute 15%
                    of your <Term term="pre-tax" definition={Terms.pre_tax} />{" "}
                    income.
                  </p>
                </li>
              </ol>
            </article>

            <Break />

            <p>
              Strive to invest atleast 15% of your{" "}
              <Term term="pre-tax" definition={Terms.pre_tax} /> to some sort of
              retirement account. Remember that these are stock accounts, so
              invest the money on index funds or your preferred plan. Do not let
              your money sit!
            </p>
          </article>
          <article className="buttons">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-ira")}
            >
              Previous
            </Button>
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-long-term-goals")}
            >
              Next
            </Button>
          </article>
        </section>
      </section>
    </>
  );
}
