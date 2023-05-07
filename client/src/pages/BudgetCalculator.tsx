import { useState } from 'react';
import Button from "../components/Button";


export default function() {

    // VARIABLES AND FORMULAS FOR CALCULATOR (LOGIC)


    const [state, setState] = useState({
        
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
    });

    const handleChange = (e:any) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: Number(value),
        })
    }
    
    let monthlyIncome = state.checkFrequency * state.checkAmount;
    let totalNeeds = state.livingExpense + state.bills + state.groceries + state.transportation + state.childcare + state.insurance + state.studentLoans + state.otherDebt;
    let totalWants = state.entertainment + state.diningOut + state.hobbies;
    let totalSavings = state.emergencyFund + state.retirementFund + state.vacation;
    let remainder = monthlyIncome - totalNeeds - totalWants;
    

    return (
        <>
            <button style={{color:'white'}} onClick={() => console.log(monthlyIncome, totalNeeds, totalSavings, totalWants, remainder)}>debug</button>
            <section className='BudgetCalculator'>
                {/*  */}
                <h1>Calculate your budget!</h1>
                <p>To make this process easier, it would help to collect recent bills that you pay monthly to have at hand.</p>
                {/* FORM THAT WILL SUBMIT WITH ALL THE NUMBERS FOR A BUDGET */}
                <form action="">
                    {/* INCOME */}
                    <section>
                        <div>
                            <label htmlFor="">How often do you get paid?</label>
                            <select 
                                value={state.checkFrequency}
                                name="checkFrequency" id=""
                                onInput={handleChange}    
                            >
                                <option value={4}>Weekly</option>
                                <option value={2}>Every Two Weeks</option>
                                <option value={1}>Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">How much is each paycheck? (Amount after taxes are taken)</label>
                            <div>
                                <span>$</span>
                                <input name='checkAmount' type="number" placeholder="0" min='0' onInput={handleChange}
                                />
                            </div>
                        </div>
                    </section>

                    {/* MONTHLY EXPENSES */}
                    <section>
                        {/* NEEDS */}
                        <article className="needs">
                            <h4>Needs</h4>
                            <ul>
                                <li>
                                    <label htmlFor="">Rent/Mortgage</label>
                                    <div>
                                        <span>$</span>
                                        <input name='livingExpense' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Utilities</label>
                                    <div>
                                        <span>$</span>
                                        <input name='bills' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Groceries</label>
                                    <div>
                                        <span>$</span>
                                        <input name='groceries' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Transportation</label>
                                    <div>
                                        <span>$</span>
                                        <input name='transportation' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Childcare</label>
                                    <div>
                                        <span>$</span>
                                        <input name='childcare' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Healthcare</label>
                                    <div>
                                        <span>$</span>
                                        <input name='insurance' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Student Loans</label>
                                    <div>
                                        <span>$</span>
                                        <input name='studentLoans' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>                                   
                                </li>
                                <li>
                                    <label htmlFor="">Other Debt</label>
                                    <div>
                                        <span>$</span>
                                        <input name='otherDebt' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                            </ul>
                        </article>

                        {/* WANTS */}
                        <article className="wants">
                            <h4>Wants</h4>
                            <ul>
                                <li>
                                    <label htmlFor="">Entertainment</label>
                                    <div>
                                        <span>$</span>
                                        <input name='entertainment' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Dining Out</label>
                                    <div>
                                        <span>$</span>
                                        <input name='diningOut' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Hobbies</label>
                                    <div>
                                        <span>$</span>
                                        <input name='hobbies' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                            </ul>
                        </article>

                        {/* SAVINGS */}
                        <article className="savings">
                            <h4>Savings</h4>
                            <ul>
                                <li>
                                    <label htmlFor="">Emergency Fund</label>
                                    <div>
                                        <span>$</span>
                                        <input name='emergencyFund' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Retirement</label>
                                    <div>
                                        <span>$</span>
                                        <input name='retirementFund' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Vacation/Travel</label>
                                    <div>
                                        <span>$</span>
                                        <input name='vacation' type="number" placeholder="0" min='0' onInput={handleChange} />
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <div>
                        <div></div>
                        <Button
                            backgroundColor="#43718b"
                            color="white"
                            fontSize="1rem"
                            height="3rem"
                            width="10rem"
                            onClick={() => console.log('click')}
                        >Calculate</Button>
                        <div></div>
                    </div>
                </form>
            </section>
        </>
    )
}