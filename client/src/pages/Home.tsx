import Button from "../components/Button"

export default function () {
    return(
        <>
            <section className="Home">
                <main>
                    <h1>Build-a-Budget</h1>
                    <p>
                        Create your budget and achieve your goals!
                    </p>
                    <Button
                        backgroundColor="blanchedalmond"
                        children='Start Here'
                        color='#ad8e60'
                        fontSize="1.8rem"
                        height='80px'
                        width='200px'
                        onClick={() => console.log('hello')}
                    />
                </main>
                <section className='homePanel'>
                    <article>
                        <img src="/assets/concept-of-to-do-list.png" alt="" />
                        <p>The total U.S. student debt by the end of 2022 is $1.76 trillion and the average undergraduate student loan debt is around $37,787.</p>
                        <a href="https://www.bankrate.com/loans/student-loans/student-loan-debt-statistics/#key-statistics">source</a>
                    </article>
                    <article>
                        <img src="/assets/concept-of-to-do-list.png" alt="" />
                        <p>The total mortgage debt in the U.S. as of Q1 of 2023 is $12.04 trillion and the average mortgage debt in 2022 is $236,443.</p>
                        <a href="https://www.fool.com/the-ascent/research/average-household-debt/">source</a>
                    </article>
                    <article>
                        <img src="/assets/concept-of-to-do-list.png" alt="" />
                        <p>Total credit card debt in the U.S. by Q1 of 2023 is nearly $988 billion and for the average american is $5,733.</p>
                        <a href="https://www.cnbc.com/2023/06/09/how-much-credit-card-debt-americans-hold-by-age.html">source</a>
                    </article>
                </section>
            </section>
            <ul>
                <li><a href="https://i.imgur.com/u0ocDRI.png" target='_blank'>REDDIT REFERENCE</a></li>
                <li><a href="/credits">credits</a></li>
            </ul>
        </>
    )
}