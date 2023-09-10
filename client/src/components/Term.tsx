import { useState } from "react";
import "./Term.css";

export const Terms = {
  budget:
    "A financial plan. A visual representation of where your money is coming in and going out.",
  debt: "An amount that is owed. Usually with an interest rate.",
  debt_avalanche:
    "Debt-paying strategy that prioritizes paying off the high-interest debt first after making minimum payments on all other debts.",
  debt_snowball:
    "Debt-paying strategy that prioritizes paying off the smallest amount debt first after making minimum payments on all other debts.",
  income: "The amount of money you generate by time.",
  interest_rate:
    "A percentage of the total amount borrowed that is owed on top of the the borrowed amount. This is usually an annual rate, but could be monthly, weekly, or daily depending on the type of debt",
  loan: "A borrowed amount of money.",
  refinance:
    "Process of replacing an old loan contract with a new one; preferably with better terms and conditions.",
  retirement_account:
    "A money account that allows you to invest in stocks, index funds, etc. These accounts usually have benefits that could help generate more money. With such powerful benefits, they almost always come with restrictions. The most common restriction being that you cannot withdraw profits from the account, until a certain age, without being penalized. This age is dependent on when you were born. All of these details are dependent on your exact account. It is strongly recommended that you read over the terms of the ones available to you.",
  roth_retirement_account:
    "Retirement account that allows you to contribute with after-tax money. This is the remainder after taxes have been deducted from your paycheck. This allows you to withdraw any future profits free of taxes.",
  tax: "A mandatory contribution of funds to government revenue.",
  tax_bracket:
    "A range of income amounts which a certain percentage of income tax is applied. The brackets change yearly to adjust for inflation.",
  traditional_retirement_account:
    "Retirement account that allows you to contribute with money from your paycheck before any deductions. This will lower your income and possibly affect your placement in the tax bracket. Because of this, you will be taxed when you withdraw any future profits from the account. Future profits, when withdrawn, will be added to your income and be taxed accordingly to your tax bracket for that year.",
};

interface Props {
  children?: React.ReactNode;
  term: string;
  definition: string;
}

const Term: React.FC<Props> = ({ term, definition }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <span
        className="term"
        onMouseEnter={() => setModalOpen(true)}
        onMouseLeave={() => setModalOpen(false)}
      >
        {term}
      </span>
      {modalOpen && (
        <section className="termModal">
          <section className="termDefinition">
            <p>{definition}</p>
          </section>
        </section>
      )}
    </>
  );
};

export default Term;
