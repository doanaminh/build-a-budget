import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";
import Break from "../../components/Break";
import SEO from "../../components/Seo";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="What is an Emergency Fund and How to Build One"
        description="An emergency fund is like a safety net. When you fall, there will be something to catch you. Build one with some rules in mind and create a financial safety net for yourself."
        name="Build-a-Budget"
        type="document"
      />
      <section className="Learn Page SavingsEF">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="body">
          <article>
            <h3>Building an Emergency Fund</h3>
            <p>
              With an optimized budget, let's look into creating a safety net.
            </p>

            <Break />

            <article>
              <ul>
                <h3>Prerequisites</h3>
                <li>Optimized budget</li>
              </ul>
            </article>

            <Break />

            <article>
              <ol>
                <li>
                  <h4>Build a Small Emergency Fund</h4>
                  <p>
                    A good starting point should be 1 month's worth of expenses.
                    This is how much is needed to live for 1 month without
                    income. (Refer to your budget for this amount; this should
                    be the total amount in your needs category plus the total of
                    your wants category).
                  </p>
                  <p>
                    Try to open a high-yield savings account, like{" "}
                    <a
                      href="https://www.ally.com/bank/online-savings-account/"
                      target="blank"
                    >
                      ally
                    </a>
                    , to maximize your savings. Ally has a feature to separate
                    funds within an account into multiple "buckets" and may help
                    you budget better. High-yield savings account can generate
                    extra income for just having your money inside the account.
                    Research high-yield savings accounts available to you and
                    open the one of your choice. A regular savings account is
                    also fine.{" "}
                  </p>
                  <p>
                    The goal is to have 1 month of expenses set aside in case of
                    an emergency. You could suddenly lose your job and this will
                    give you 1 month grace period to find another source of
                    income.{" "}
                    <Term
                      term="?"
                      definition="It's important to note that this is money that shouldn't be touched and is exclusively for emergencies like: being laid off or car issues. This account should be used to allow you to continue making money and should be replenished when spent."
                    />
                  </p>
                </li>
                <li>
                  <h4>Pay Any Non-Essential Bills in Full</h4>
                  <p>
                    AFTER you have built up your 1-month emergency fund, pay off
                    non-essential bills fully. Example: cable, internet, phone,
                    etc. Pay it all off in a timely manner to avoid fees.
                  </p>
                </li>
              </ol>
            </article>

            <Break />

            <p>
              It may take time to build up your emergency fund. Take your time
              and go at your own pace.
            </p>
          </article>
          <article className="buttons">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-budget")}
            >
              Previous
            </Button>
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize="1rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-employer-intro")}
            >
              Next
            </Button>
          </article>
        </section>
      </section>
    </>
  );
}
