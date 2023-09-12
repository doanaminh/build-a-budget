import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import InputField from "../components/InputField";

export default function () {
  // Template budget object for new users
  const defaultBudget = {
    // INCOME
    checkFrequency: 1,
    checkAmount: 0,

    // NEEDS
    livingExpense: 0,
    bills: 0,
    groceries: 0,
    transportation: 0,
    childcare: 0,
    insurance: 0,
    studentLoans: 0,
    otherDebt: 0,

    //  WANTS
    entertainment: 0,
    diningOut: 0,
    hobbies: 0,

    // SAVINGS
    emergencyFund: 0,
    retirementFund: 0,
    vacation: 0,

    // TAGS
    hasNeeds: false,
    hasWants: false,
    hasSavings: false,

    // FORMULAS

    // LOCALSTORAGE CANNOT STORE FUNCTIONS ONLY KEY VALUE PAIRS
    // getIncome() {
    //     return (this.checkFrequency * this.checkAmount);
    // },
    // getNeeds() {
    //     return (this.livingExpense + this.bills + this.groceries + this.transportation + this.childcare + this.insurance + this.studentLoans + this.otherDebt);
    // },
    // getWants() {
    //     return (this.entertainment + this.diningOut + this.hobbies);
    // },
    // getSavings() {
    //     return (this.emergencyFund + this.retirementFund + this.vacation);
    // },
    // getRemainder() {
    //     return (this.getIncome() - (this.getNeeds() + this.getWants() + this.getSavings()));
    // },
  };

  // CREATING AN OBJECT FROM LOCALSTORAGE IF USER HAS USED SITE BEFORE
  let userBudget =
    JSON.parse(localStorage.getItem("userBudget")) || defaultBudget;

  // CREATING A STATE VARIABLE TO HOLD ALL VALUES OF INPUT FIELDS
  const [budget, setBudget] = useState(userBudget);

  // EVENT LISTENER FOR ANY CHANGES FOR INPUT FIELDS
  const handleChange = (e: any) => {
    setBudget({
      ...budget,
      [e.target.name]: Number(e.target.value),
    });
  };
  // EVENT LISTENER FOR ANY CHANGES TO BUDGET OBJECT
  useEffect(() => {
    localStorage.setItem("userBudget", JSON.stringify(budget));
  }, [budget]);

  // VARIABLES AND FORMULAS FOR CALCULATOR (LOGIC)
  budget.monthlyIncome = budget.checkFrequency * budget.checkAmount;
  budget.totalNeeds =
    budget.livingExpense +
    budget.bills +
    budget.groceries +
    budget.transportation +
    budget.childcare +
    budget.insurance +
    budget.studentLoans +
    budget.otherDebt;
  budget.totalWants = budget.entertainment + budget.diningOut + budget.hobbies;
  budget.totalSavings =
    budget.emergencyFund + budget.retirementFund + budget.vacation;
  budget.remainder =
    budget.monthlyIncome -
    budget.totalNeeds -
    budget.totalWants -
    budget.totalSavings;

  // const conclusionPool = {
  //     under: {

  //     },
  //     even: {

  //     },
  //     over: {

  //     },
  // }

  // Navigate hook from react router
  const navigate = () => useNavigate();

  return (
    <>
      <section className="Budget">
        <h1>Budget Calculator</h1>
        <p>
          To make this process easier, it would help to collect recent bills
          that you pay monthly to have at hand.
        </p>
        {/* FORM THAT WILL SUBMIT WITH ALL THE NUMBERS FOR A BUDGET */}
        <form action="">
          {/* INCOME */}
          <section>
            <h4>Income</h4>
            <ul>
              <li>
                <label htmlFor="">How often do you get paid?</label>

                <select
                  defaultValue={userBudget.checkFrequency}
                  name="checkFrequency"
                  id=""
                  onInput={handleChange}
                >
                  <option value={4}>Weekly</option>
                  <option value={2}>Every Two Weeks</option>
                  <option value={1}>Monthly</option>
                </select>
              </li>
              <li>
                <InputField
                  title="How much is each paycheck?"
                  symbol="$"
                  inputName="checkAmount"
                  nameClass="input"
                  minimum="0"
                  maximum="1000000"
                  handleValue={handleChange}
                  loadedValue={userBudget.checkAmount}
                />
              </li>
            </ul>
          </section>

          {/* MONTHLY EXPENSES */}
          <section>
            {/* NEEDS */}
            <article className="needs">
              <h4>Needs</h4>
              <ul>
                <li>
                  <InputField
                    title="Rent/Mortgage"
                    symbol="$"
                    inputName="livingExpense"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.livingExpense}
                  />
                </li>
                <li>
                  <InputField
                    title="Utilities"
                    symbol="$"
                    inputName="bills"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.bills}
                  />
                </li>
                <li>
                  <InputField
                    title="Groceries"
                    symbol="$"
                    inputName="groceries"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.groceries}
                  />
                </li>
                <li>
                  <InputField
                    title="Transportation"
                    symbol="$"
                    inputName="transportation"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.transportation}
                  />
                </li>
                <li>
                  <InputField
                    title="Childcare"
                    symbol="$"
                    inputName="childcare"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.childcare}
                  />
                </li>
                <li>
                  <InputField
                    title="Healthcare"
                    symbol="$"
                    inputName="insurance"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.insurance}
                  />
                </li>
                <li>
                  <InputField
                    title="Student Loans"
                    symbol="$"
                    inputName="studentLoans"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.studentLoans}
                  />
                </li>
                <li>
                  <InputField
                    title="Other Debt"
                    symbol="$"
                    inputName="otherDebt"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.otherDebt}
                  />
                </li>
              </ul>
            </article>

            {/* WANTS */}
            <article className="wants">
              <h4>Wants</h4>
              <ul>
                <li>
                  <InputField
                    title="Entertainment"
                    symbol="$"
                    inputName="entertainment"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.entertainment}
                  />
                </li>
                <li>
                  <InputField
                    title="Dining Out"
                    symbol="$"
                    inputName="diningOut"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.diningOut}
                  />
                </li>
                <li>
                  <InputField
                    title="Hobbies"
                    symbol="$"
                    inputName="hobbies"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.hobbies}
                  />
                </li>
              </ul>
            </article>

            {/* SAVINGS */}
            <article className="savings">
              <h4>Savings</h4>
              <ul>
                <li>
                  <InputField
                    title="Emergency Fund"
                    symbol="$"
                    inputName="emergencyFund"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.emergencyFund}
                  />
                </li>
                <li>
                  <InputField
                    title="Retirement"
                    symbol="$"
                    inputName="retirementFund"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.retirementFund}
                  />
                </li>
                <li>
                  <InputField
                    title="Vacation/Travel"
                    symbol="$"
                    inputName="vacation"
                    nameClass="input"
                    minimum="0"
                    maximum="1000000"
                    handleValue={handleChange}
                    loadedValue={userBudget.vacation}
                  />
                </li>
              </ul>
            </article>
          </section>
          <div>
            <div></div>
            <div>
              <Modal
                title={`Your monthly remainder: $${budget.remainder}`}
                a1Msg={`You are spending a total of $${budget.totalNeeds} for necessities.`}
                a2Msg={`You are spending a total of $${budget.totalWants} for things you want.`}
                a3Msg={`You are saving a total of $${budget.totalSavings} monthly.`}
                conclusion={`Save your results above and use the button below to see what you can do next!`}
                buttonText="Optimize Budget"
                route={"/learn-budget"}
              />
            </div>
            <div></div>
          </div>
        </form>
      </section>
    </>
  );
}
