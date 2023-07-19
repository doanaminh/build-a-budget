import { useState } from 'react';
import "./Modal.css"
import Button from './Button';

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

    const [open, setOpen] = useState(false);
    const preventRefresh = e => {
        e.preventDefault();
    }

    return (
        <>
                <Button
                backgroundColor="#43718b"
                color="white"
                fontSize="1rem"
                height="3rem"
                width="10rem"
                onClick={() => {
                    setOpen(true);
                }}
                >Calculate</Button>
                <div className={`${open ? '' : 'none'}`}>
                <div className="modalBackdrop"></div>
                <section className='budgetBody'>
                    <div>
                        <button 
                        className="modalButton"
                        onClick={(e) => {
                            setOpen(false);
                            preventRefresh(e);
                        }}
                        >X</button>
                    </div>
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
            </div>
        </>
    )
}

export default Modal;