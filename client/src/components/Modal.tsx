import "./Modal.css"

interface Props {
    setOpenModal: any;
    children?:React.ReactNode;
    title: string;
    a1Msg: string;
    a2Msg: string;
    a3Msg: string;
    conclusion: string;
}

const Modal: React.FC<Props> = ({
    setOpenModal,
    title,
    a1Msg,
    a2Msg,
    a3Msg,
    conclusion,
}) => {

    return (
        <>
            <div className="modalBackdrop"></div>
            <section className="budgetBody">
                <div><button>X</button></div>
                <section className="budgetBreakdown">
                    <section className="budgetRemainder">
                        <h4>{title}</h4>
                    </section>
                    <section className="budgetSections">
                        <article>
                            <p>{a1Msg}</p>
                        </article>
                        <article>
                            <p>{a2Msg}</p>
                        </article>
                        <article>
                            <p>{a3Msg}</p>
                        </article>
                    </section>
                    <section className="budgetConclusion">
                        <p>{conclusion}</p>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Modal;