import { useState, useEffect, createElement } from 'react';
import Button from "../components/Button";
import Modal from '../components/Modal';


export default function() {

    const [modalOpen, setModalOpen] = useState(false);
    
    // CREATING AN OBJECT FROM LOCALSTORAGE IF USER HAS USED SITE BEFORE
    let userBudget = JSON.parse(localStorage.getItem('userBudget')) || {
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

    // CREATING A STATE VARIABLE TO HOLD ALL VALUES OF INPUT FIELDS
    const [budget, setBudget] = useState(userBudget);

    // EVENT LISTENER FOR ANY CHANGES FOR INPUT FIELDS
    const handleChange = (e:any) => {
        setBudget({
            ...budget,
            [e.target.name]: Number(e.target.value),
        });
    }
    // EVENT LISTENER FOR ANY CHANGES TO BUDGET OBJECT
    useEffect(() => {
        localStorage.setItem('userBudget', JSON.stringify(budget));
    }, [budget])
    

    // VARIABLES AND FORMULAS FOR CALCULATOR (LOGIC)
    let monthlyIncome = budget.checkFrequency * budget.checkAmount;
    let totalNeeds = budget.livingExpense + budget.bills + budget.groceries + budget.transportation + budget.childcare + budget.insurance + budget.studentLoans + budget.otherDebt;
    let totalWants = budget.entertainment + budget.diningOut + budget.hobbies;
    let totalSavings = budget.emergencyFund + budget.retirementFund + budget.vacation;
    let remainder = monthlyIncome - totalNeeds - totalWants - totalSavings;
    
    return (
        <>
            <section className='BudgetCalculator'>
                {/*  */}
                <h1>Calculate your budget!</h1>
                <p>To make this process easier, it would help to collect recent bills that you pay monthly to have at hand.</p>
                {/* FORM THAT WILL SUBMIT WITH ALL THE NUMBERS FOR A BUDGET */}
                <form action="">
                    {/* INCOME */}
                    <section>                        
                        <ul>
                            <li>
                                <label htmlFor="">How often do you get paid?</label>

                                <select 
                                    value={userBudget.checkFrequency}
                                    name="checkFrequency" id=""
                                    onInput={handleChange}    
                                >
                                    <option value={4}>Weekly</option>
                                    <option value={2}>Every Two Weeks</option>
                                    <option value={1}>Monthly</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="">How much is each paycheck? (Amount after taxes are taken)</label>
                                <div>
                                    <span>$</span>
                                    <input 
                                    name='checkAmount' 
                                    type="number" 
                                    placeholder="0" 
                                    min='0' 
                                    onInput={handleChange}
                                    defaultValue={userBudget.checkAmount}
                                    />
                                </div>
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
                                    <label htmlFor="">Rent/Mortgage</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='livingExpense' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.livingExpense}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Utilities</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='bills' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.bills}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Groceries</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='groceries' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.groceries}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Transportation</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='transportation' type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.transportation}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Childcare</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='childcare' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.childcare}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Healthcare</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='insurance' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.insurance}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Student Loans</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='studentLoans' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.studentLoans}
                                        />
                                    </div>                                   
                                </li>
                                <li>
                                    <label htmlFor="">Other Debt</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='otherDebt' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.otherDebt}
                                        />
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
                                        <input 
                                        name='entertainment' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.entertainment}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Dining Out</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='diningOut' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.diningOut}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Hobbies</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='hobbies' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.hobbies}
                                        />
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
                                        <input 
                                        name='emergencyFund' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.emergencyFund}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Retirement</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='retirementFund' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.retirementFund}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <label htmlFor="">Vacation/Travel</label>
                                    <div>
                                        <span>$</span>
                                        <input 
                                        name='vacation' 
                                        type="number" 
                                        placeholder="0" 
                                        min='0' 
                                        onInput={handleChange} 
                                        defaultValue={userBudget.vacation}
                                        />
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
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >Calculate</Button>
                        <Button
                            backgroundColor="#FF6961"
                            color="white"
                            fontSize="1rem"
                            height="3rem"
                            width="10rem"
                            onClick={() => {
                                setModalOpen(false);
                                localStorage.clear();
                            }}
                        >Clear</Button>
                        <div></div>
                    </div>
                </form>
                {modalOpen && 
                <Modal 
                    setOpenModal={setModalOpen}
                    title={`you have ${remainder}`}
                    a1Msg='wow'
                    a2Msg='nice'
                    a3Msg='awesome'
                    conclusion='great job'
                />}
            </section>
        </>
    )
}