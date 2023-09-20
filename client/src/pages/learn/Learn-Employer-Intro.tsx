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
        title="Starting an Employer-Matched Retirement Account"
        description="Most commonly known as a 401(k) these days, the employer retirement account is a strong way to increase the value of your money. This is even more true when your employer helps contribute to it. This page discusses the different types of accounts available, like Traditional and Roth, and how to invest in it."
        name="Build-a-Budget"
        type="document"
      />
      <section className="Learn Page EmployerIntro">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="body">
          <article>
            <h3>Build an Employer-Matched Retirement Account</h3>
            <p>
              If your employer does NOT offer a{" "}
              <Term
                term="retirement account"
                definition={Terms.retirement_account}
              />{" "}
              WITH a{" "}
              <Term
                term="match"
                definition="Some employer retirement accounts will match your contributions up to a certain dollar amount anually."
              />
              , you can skip this step. Alright! You should have your bills
              under control at this point.
            </p>

            <Break />

            <article>
              <ul>
                <h3>Prerequisites</h3>
                <li>Optimized budget</li>
                <li>1 month emergency fund</li>
                <li>All non-essential bills paid in full every month</li>
              </ul>
            </article>

            <Break />

            <article>
              <ol>
                <li>
                  <h4>Enroll in Employer-Matched Retirement Account</h4>
                  <p>
                    Ask your employer about the types of retirement accounts are
                    offered and choose one to start contributing to. This could
                    be a pension or a 401(k). The one that will be covered is
                    the 401(k) retirement account and it comes in either a{" "}
                    <Term
                      term="Traditional"
                      definition={Terms.traditional_retirement_account}
                    />{" "}
                    or a{" "}
                    <Term
                      term="Roth"
                      definition={Terms.roth_retirement_account}
                    />{" "}
                    version. A 401(k) retirement account is an account that
                    allows you to contribute and invest money in the stock
                    market. Any money gained through this account is considered
                    profit.
                  </p>
                  <p>
                    Generally, if you think you will be making MORE money in the
                    future, choose a Roth account. You will have to pay taxes on
                    your income now, but any profits will be free from income
                    tax when you are in a higher tax bracket.
                  </p>
                  <p>
                    If you think you will be making LESS money in the future,
                    choose a traditional account. You will avoid paying taxes on
                    your contributions now that you are in a higher tax-bracket,
                    then pay income tax on any profits in the future when you
                    are in a lower tax bracket.
                  </p>
                  <p>
                    Both types of accounts are tax-advantaged accounts and are
                    beneficial regardless of which one you choose. Sign up for
                    your preferred employer-matched retirement account and ONLY
                    contribute up to the amount needed to get the full employer
                    match.
                  </p>
                  <p>
                    Example: Your employer matches 100% of your
                    contributions/dollar-for-dollar. They match up to a maximum
                    of 3% of you annual income. If you make $30,000 annually,
                    your employer will contribute up to $900 a year if you also
                    contribute $900. This is a free $900 that your employer is
                    giving you to invest with. Anything more than $900 will not
                    be matched. To make things simple, you just need to
                    contribute 3% of your paycheck to get maximum matching
                    benefits. Work up to this amount every paycheck.{" "}
                    <a
                      href="https://www.investopedia.com/articles/personal-finance/112315/how-401k-matching-works.asp"
                      target="blank"
                    >
                      ?
                    </a>
                  </p>
                  <p>
                    After sucessfully enrolling in your desired employer-matched
                    retirement account, you will be able to invest in the stock
                    market with your contributions. The value of this account
                    will change depending on the stock market. If you don't know
                    anything about the stock market and want to safely invest,
                    look into low cost{" "}
                    <a
                      href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-4"
                      target="blank"
                    >
                      index funds
                    </a>{" "}
                    like: total market index fund or S&P 500.{" "}
                    <Term
                      term="?"
                      definition="Employer retirement accounts may have limited stock options depending on which brokerage firm they are under."
                    />
                  </p>
                </li>
              </ol>
            </article>

            <Break />

            <p>
              Opening a retirement account is a big decision, so take your time
              and discuss your options with your friends and family before
              deciding on one. We will not be going too in-depth with the stock
              market. There are many ways to invest in the stock market, but
              this guide will only be focusing on the "safest" methods via index
              funds. To make this strategy work we must believe that the market
              will always tend to grow. We do not care about immediate changes,
              but the changes in the long run.
            </p>
          </article>

          <article className="buttons">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-savings-ef")}
            >
              Previous
            </Button>
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-debt")}
            >
              Next
            </Button>
          </article>
        </section>
      </section>
    </>
  );
}
