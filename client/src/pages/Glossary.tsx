import Term from "../components/Term";

export default function () {

    return (
        <>
            <section className="Glossary">
                <article>
                    <h3>Glossary</h3>
                </article>
                <article>
                    <ul>
                        <li>
                            <h6>budget</h6>
                            <p>
                                A financial plan. A visual representation of where your money is coming in and going out.
                            </p>
                        </li>
                        <li>
                            <h6>debt</h6>
                            <p>
                                An amount that is owed. Usually with an{' '}
                                <Term
                                    term="interest rate"
                                    definition="A percentage of the total amount borrowed that is owed on top the the borrowed sum. This is usually an annual rate, but could be monthly, weekly, or daily depending on the type of loan."
                                />.
                            </p>
                        </li>
                        <li>
                            <h6>debt avalanche</h6>
                            <p>
                                Debt-paying strategy that prioritizes paying off the high-interest debt first after making minimum payments on all other debts.
                            </p>
                        </li>
                        <li>
                            <h6>debt snowball</h6>
                            <p>
                                Debt-paying strategy that prioritizes paying off the smallest amount debt first after making minimum payments on all other debts.
                            </p>
                        </li>
                        <li>
                            <h6>income</h6>
                            <p>
                                The amount of money you generate by time.
                            </p>
                        </li>
                        <li>
                            <h6>interest rate</h6>
                            <p>
                                A percentage of the total amount borrowed that is owed on top the the borrowed sum. This is usually an annual rate, but could be monthly, weekly, or daily depending on the type of {' '}
                                <Term 
                                    term="loan"
                                    definition="A borrowed amount of money."
                                />
                                .
                            </p>
                        </li>
                        <li>
                            <h6>loan</h6>
                            <p>
                                A borrowed amount of money.
                            </p>
                        </li>
                        <li>
                            <h6>retirement account</h6>
                            <p>
                                A money account that allows you to invest in stocks, index funds, etc. These accounts usually have benefits that could help generate more money. With such powerful benefits, they almost always come with restrictions. The most common restriction being that you cannot withdraw profits from the account, until a certain age, without being penalized. This age is dependent on when you were born. All of these details are dependent on your exact account. It is strongly recommended that you read over the terms of the ones available to you.
                            </p>
                        </li>
                        <li>
                            <h6>Roth retirement account</h6>
                            <p>
                                Retirement account that allows you to contribute with after-tax money. This means with the money left after taxes have been deducted from your paycheck. This allows you to withdraw any profits free of taxes.
                            </p>
                        </li>
                        <li>
                            <h6>tax</h6>
                            <p>
                                A mandatory contribution of funds to government revenue.
                            </p>
                        </li>
                        <li>
                            <h6>tax bracket</h6>
                            <p>
                                A range of income amounts which a certain percentage of income tax is applied. The brackets change yearly to adjust for inflation.
                            </p>
                        </li>
                        <li>
                            <h6>traditional retirement account</h6>
                            <p>
                                Retirement account that allows you to contribute with money from your paycheck before any deductions. This will lower your income and possibly affect your placement in the tax bracket. Because of this, you will be taxed when you withdraw any profits from the account. The amount withdrawn will be added to your income and taxed accordingly to your tax bracket of that year.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )
}