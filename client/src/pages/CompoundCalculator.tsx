import { useState } from "react";
import Modal from "../components/Modal";
import InputField from "../components/InputField";

export default function () {
  // Default values for investment
  const defaultInvestment = {
    initialInvestment: 1000,
    initialInvestmentInvalid: false,

    monthlyContribution: 100,
    monthlyContributionInvalid: false,

    yearsInvesting: 5,
    yearsInvestingInvalid: false,

    interestRate: 1,
    interestRateInvalid: false,

    compoundFrequency: 12,
    compoundFrequencyInvalid: false,
  };

  const [investments, setInvestments] = useState(defaultInvestment);

  // remove leading 0s in input field
  const trimZero = (n: string) => {
    return parseInt(n);
  };
  const handleChange = (e: any) => {
    let state = e.target.invalidInput;
    const val = Number(e.target.value);
    const min = Number(e.target.min);
    const max = Number(e.target.max);
    if (val < min || val > max) {
      state = true;
    }
    setInvestments({
      ...investments,
      [e.target.name]: trimZero(e.target.value),
      [`${e.target.name}Invalid`]: state,
    });
  };

  // Using the formula A = P(1 + r/n)**(nt)
  // investments.A = investments.initialInvestment * ((1 + (investments.interestRate / investments.compoundFrequency)) ** (investments.compoundFrequency * investments.yearsInvesting))

  // investments.A = (investments.initialInvestment + investments.monthlyContribution * investments.compoundFrequency) * ((1 + (investments.interestRate / investments.compoundFrequency)) ** (investments.compoundFrequency * investments.yearsInvesting))

  // (initial + monthly * 12) * (1 + interest/12) ** (12t)
  const calculateCompound = () => {
    let init = investments.initialInvestment;
    for (let i = 0; i < investments.yearsInvesting; i++) {
      init = init * (1 + investments.interestRate / 100);
      init = init + investments.monthlyContribution * 12;
    }
    return Math.round((init + Number.EPSILON) * 100) / 100;
  };

  return (
    <>
      <section className="Compound">
        {/*  */}
        <h1>Compound Interest Calculator</h1>
        <p>To make this process easier, have your investment budget at hand.</p>
        {/* FORM THAT WILL SUBMIT WITH ALL THE NUMBERS FOR A BUDGET */}
        <form action="">
          {/* INCOME */}
          <section>
            <ul>
              <li>
                <InputField
                  title="Initial Investment"
                  symbol="$"
                  inputName="initialInvestment"
                  nameClass="input"
                  minimum="0"
                  maximum="1000000"
                  handleValue={handleChange}
                  loadedValue={investments.initialInvestment}
                  invalidInput={investments.initialInvestmentInvalid}
                />
              </li>
              <li>
                <InputField
                  title="Monthly Contribution"
                  symbol="$"
                  inputName="monthlyContribution"
                  nameClass="input"
                  minimum="0"
                  maximum="1000000"
                  handleValue={handleChange}
                  loadedValue={100}
                  invalidInput={investments.monthlyContributionInvalid}
                />
              </li>
              <li>
                <InputField
                  title="Years of Investment"
                  symbol="years"
                  inputName="yearsInvesting"
                  nameClass="input years"
                  minimum="1"
                  maximum="50"
                  handleValue={handleChange}
                  loadedValue={5}
                  invalidInput={investments.yearsInvestingInvalid}
                />
              </li>
              <li>
                <InputField
                  title="Estimated Interest Rate"
                  symbol="%"
                  inputName="interestRate"
                  nameClass="input percent"
                  minimum="0"
                  maximum="50"
                  handleValue={handleChange}
                  loadedValue={1}
                  invalidInput={investments.interestRateInvalid}
                />
              </li>
              <li>
                <label htmlFor="">Compound Frequency</label>
                <select
                  disabled={true}
                  defaultValue={1}
                  name="compoundFrequency"
                  id=""
                  onInput={handleChange}
                >
                  <option value={1}>Annually</option>
                  <option value={12}>Monthly</option>
                  <option value={365}>Daily</option>
                </select>
              </li>
            </ul>
          </section>

          <div>
            <div></div>
            <div>
              <Modal
                title={`Total Balance After ${investments.yearsInvesting} Years`}
                a1Msg={""}
                a2Msg=""
                a3Msg=""
                conclusion={`$${calculateCompound()}`}
              />
            </div>
            <div></div>
          </div>
        </form>
      </section>
    </>
  );
}
