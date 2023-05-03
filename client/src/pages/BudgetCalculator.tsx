import { useState } from 'react';
import Button from "../components/Button";


export default function() {

    // VARIABLES AND FORMULAS FOR CALCULATOR (LOGIC)


    const [state, setState] = useState({
        
        // NEEDS 
        checkFrequency: 1,
        checkAmount: 0,
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
            [e.target.name]: value,
        })
    }
    // const [freq, setFreq] = useState('1');
    // const handleFreq = (e:any) => {
    //     setFreq(e.target.value);
    // }

    // const [val, setVal] = useState(0);
    // const handleVal = e => {
    //     setVal(e.target.value);
    // }

    let monthlyIncome = Number(state.checkFrequency) * Number(state.checkAmount);
    

    return (
        <>
            <button onClick={() => console.log(monthlyIncome, state.checkFrequency)}></button>
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
                                onChange={handleChange}    
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
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Utilities</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Groceries</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Transportation</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Childcare</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Healthcare</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Student Loans</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>                                   
                                </li>
                                <li>
                                    <label htmlFor="">Other Debt</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
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
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Dining Out</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Hobbies</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Splurges</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
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
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Retirement</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Vacation/Travel</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Splurges</label>
                                    <div>
                                        <span>$</span>
                                        <input type="number" placeholder="0" min='0' />
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