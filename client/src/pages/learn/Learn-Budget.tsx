import Button from "../../components/Button";
import Break from "../../components/Break";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";
import { Terms } from "../../components/Term";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <section className="Learn Page Budgeting">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="body">
          <section>
            <article>
              <h3>Build a budget!</h3>
              <p>
                The most important thing you can do is create a monthly{" "}
                <Term term="budget" definition={Terms.budget} />. Knowing where
                your money is coming in and going out is fundamental to being
                financially successful.
              </p>
            </article>

            <article className="action">
              <span>
                If you haven't made a budget yet, let's make one now. After
                you've created one, come on back to this page.
              </span>
              <div>
                <Button
                  backgroundColor="#47586A"
                  color="white"
                  fontSize="1rem"
                  height="4rem"
                  width="10rem"
                  onClick={() => {
                    navigate("/calculator");
                    window.scrollTo(0, 0);
                  }}
                >
                  Create a budget
                </Button>
              </div>
            </article>

            <article className="budgetList">
              <p>
                Great! So now that you have your budget, let's optimize where
                your money is going (from most immediate first). Set aside the
                necessary amount from each paycheck to satisfy requirements of
                each category. We will be calculating everything by month, so
                each category will require the amount that is needed for 1 month
                of expense.
              </p>
              <p>
                For example: if you buy groceries every week and spend $100 each
                time, then your grocery budget will be $400 for the month.
              </p>

              <Break />

              <ol>
                <li>
                  <h4>Rent/Mortgage</h4>
                  <p>
                    The money you pay to have a place to live. This includes any
                    renter's or homeowner's insurance if required.
                  </p>
                </li>
                <li>
                  <h4>Food/Groceries</h4>
                  <p>
                    Everybody needs to eat. Eating gives you energy and will
                    impact your health greatly. Sadly, snacks are not included
                    in this category. **In extreme cases, bills and utilities
                    may need to be prioritized over food.{" "}
                    <Term
                      term="?"
                      definition="To help reduce costs: look for deals, buy in bulk, and limit amount of snacks."
                    />
                  </p>
                </li>
                <li>
                  <h4>Essential Items</h4>
                  <p>
                    This includes: power, water, heat, toiletries/hygiene, etc.
                    These are basic human needs that you cannot live without.{" "}
                    <Term
                      term="?"
                      definition="To help reduce costs: take less baths and more showers, turning off lights when not in the room."
                    />
                  </p>
                </li>
                <li>
                  <h4>Income Earning Expenses</h4>
                  <p>
                    Necessary transportation expenses (gas, public transit
                    fare), possibly internet/phone. Anything that is required
                    for you to continue earning income.{" "}
                    <Term
                      term="?"
                      definition="To help reduce costs: plan trips ahead, don't accelerate too fast"
                    />
                  </p>
                </li>
                <li>
                  <h4>Health Care</h4>
                  <p>
                    Health insurance and any healthcare expenses (NOT INCLUDING
                    HEALTH CARE DEBT). Debt will be handles in the next
                    category. Your health, both physically and mentally, is
                    important for you to succeed.{" "}
                    <Term
                      term="?"
                      definition="Eating properly and exercising will keep you healthy. Take care of your body because all of the money in the world won't be enough to replace it."
                    />
                  </p>
                </li>
                <li>
                  <h4>Minimum Payments on All Debts & Loans</h4>
                  <p>
                    This includes: student loans, credit cards, etc. The only
                    time you should strive to pay off a debt faster is: when you
                    can decrease the interest rate through{" "}
                    <Term term="refinancing" definition={Terms.refinance} />.
                    This is a complicated topic which will be discussed in a
                    later chapter. For now, just worry about being able to make
                    minimum payments on all debt.
                  </p>
                </li>
              </ol>

              <Break />
            </article>
            <article>
              <p>
                I highly encourage you to cut out expenses that are not
                necessary. The takeaway of this chapter is to start thinking of
                your expenses as seperate categories or "buckets" of money. You
                will then use your income to fill these buckets in the order of
                your priorities. Any leftover income will be directed to newer
                buckets as we continue. It's important to note that an account
                can have multiple "buckets".
              </p>
              <p>
                For example: the expenses for the categories of this chapter may
                all exist within the same checking account. The total amount
                that is inside your checking account could be $1,000, but $400
                will go to groceries, $200 will go to transportation, and etc.
              </p>
              <p>
                It is very important to avoid using{" "}
                <Term term="funds" definition={Terms.fund} /> from a bucket for
                anything other than its purpose. If funds are insufficient for
                an expense, look to increase your budget or reduce costs where
                possible.
              </p>
            </article>
            <article className="buttons">
              <Button
                backgroundColor="#47586A"
                color="beige"
                fontSize="1rem"
                height="3rem"
                width="8rem"
                onClick={() => navigate("/learn")}
              >
                Overview
              </Button>
              <Button
                backgroundColor="#47586A"
                color="beige"
                fontSize="1rem"
                height="3rem"
                width="8rem"
                onClick={() => navigate("/learn-savings-ef")}
              >
                Next
              </Button>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}
