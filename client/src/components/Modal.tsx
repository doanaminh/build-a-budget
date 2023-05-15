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
            <section>
                <button
                onClick={() => {
                    setOpenModal(false);
                }}
                >X</button>
                <section>
                    <main>
                        <h4>{title}</h4>
                    </main>
                    <article>
                        <p>{a1Msg}</p>
                    </article>
                    <article>
                        <p>{a2Msg}</p>
                    </article>
                    <article>
                        <p>{a3Msg}</p>
                    </article>
                    <section>
                        <p>{conclusion}</p>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Modal;