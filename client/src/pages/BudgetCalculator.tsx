import Button from "../components/Button"

export default function() {
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
                        <div>
                            <label htmlFor="">How often do you get paid?</label>
                            <select name="" id="">
                                <option value="">Weekly</option>
                                <option value="">Every Two Weeks</option>
                                <option value="">Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">How much is each paycheck? (Amount after taxes are taken)</label>
                            <div>
                                <span>$</span>
                                <input type="number" placeholder="0" min='0' />
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
                                    <label htmlFor="">Vaction/Travel</label>
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