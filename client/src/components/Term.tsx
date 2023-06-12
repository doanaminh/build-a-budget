

interface Props {
    setOpenModal: any;
    children?:React.ReactNode;
    term: string;
    definition: string;
}

const Term: React.FC<Props> = ({
    setOpenModal,
    term,
    definition,
}) => {

    return (
        <>
            <section className="budgetBody">
                <section className="budgetBreakdown">
                    <section className="budgetRemainder">
                        <h4>{term}</h4>
                    </section>
                    <section className="budgetSections">
                        <p>{definition}</p>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Term;