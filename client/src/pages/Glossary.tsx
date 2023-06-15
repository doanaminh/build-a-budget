import { useState } from "react";
import Term from "../components/Term";

export default function () {

    const [modalOpen, setModalOpen] = useState(false);


    return (
        <>
            <section>
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
                                Debt-paying strategy that prioritizes paying off the smallest debt first after making minimum payments on all other debts.
                            </p>
                        </li>
                        <li>
                            <h6>interest rate</h6>
                            <p>
                                A percentage of the total amount borrowed that is owed on top the the borrowed sum. This is usually an annual rate, but could be monthly, weekly, or daily depending on the type of loan.
                            </p>
                        </li>
                        <li>
                            <h6>retirement account</h6>
                            <p>
                                A money account that allows you to invest in stocks, index funds, etc. These accounts usually have benefits that could help generate more money.
                            </p>
                        </li>
                        <li>
                            <h6>Roth retirement account</h6>
                            <p>
                                Retirement account that allows you to contribute with after-tax money. This means with the money that's left after income taxes has been deducted from your paycheck. This allows you to withdraw any profits free of taxes.
                            </p>
                        </li>
                        <li>
                            <h6>tax</h6>
                            <p>
                                A mandatory contribution of funds to government revenue
                            </p>
                        </li>
                        <li>
                            <h6>tax bracket</h6>
                            <p>
                                A range of income amounts which a certain percentage of income tax is applied to
                            </p>
                        </li>
                        <li>
                            <h6>traditional retirement account</h6>
                            <p>
                                Retirement account that allows you to contribute with money before the income tax deduction of your paycheck. This will lower your monthly income and possibly affect your placement in the tax bracket. Because of this, you will be taxed when you withdraw any profits. The amount withdrawn will be added to your income and taxed accordingly to your tax bracket of that year.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )
}