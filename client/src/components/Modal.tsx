import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Modal.css"
import Button from './Button';

interface Props {
    children?:React.ReactNode;
    title: string;
    a1Msg: string;
    a2Msg: string;
    a3Msg: string;
    conclusion: string;
    buttonText?: string;
    route?: any;
}

const Modal: React.FC<Props> = ({
    title,
    a1Msg,
    a2Msg,
    a3Msg,
    conclusion,
    buttonText,
    route,
}) => {

    const [open, setOpen] = useState(false);
    const preventRefresh = (e:any) => {
        e.preventDefault();
    }

    const navigate = useNavigate();

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
                        {route && <button className='modalButton2' onClick={() => {
                            navigate(route);
                            window.scrollTo(0, 0);
                        }}>{buttonText}</button>}
                    </section>
                </section>
            </div>
        </>
    )
}

export default Modal;