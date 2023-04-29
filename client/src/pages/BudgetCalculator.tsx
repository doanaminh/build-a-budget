import Button from "../components/Button"

export default function() {
    return (
        <>
            <section className='BudgetCalculator'>
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
                            $<input type="number" placeholder="0" min='0' />
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
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Utilities</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Groceries</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Transportation</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Childcare</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Healthcare</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Student Loans</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Other Debt</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                            </ul>
                        </article>

                        {/* WANTS */}
                        <article className="wants">
                            <h4>Wants</h4>
                            <ul>
                                <li>
                                    <label htmlFor="">Entertainment</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Dining Out</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Hobbies</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Splurges</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                            </ul>
                        </article>

                        {/* SAVINGS */}
                        <article className="savings">
                            <h4>Savings</h4>
                            <ul>
                                <li>
                                    <label htmlFor="">Emergency Fund</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Retirement</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Vaction/Travel</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                                <li>
                                    <label htmlFor="">Splurges</label>
                                    $<input type="number" placeholder="0" min='0' />
                                </li>
                            </ul>
                        </article>
                    </section>
                    <Button
                        backgroundColor="gold"
                        color="white"
                        fontSize="1rem"
                        height="1.5rem"
                        width="3rem"
                        onClick={() => console.log('click')}
                    >Hello</Button>
                </form>
            </section>
        </>
    )
}