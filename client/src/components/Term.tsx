import { useState } from "react";
import "./Term.css"


interface Props {
    children?:React.ReactNode;
    term: string;
    definition: string;
}

const Term: React.FC<Props> = ({
    term,
    definition,
}) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <a
                onMouseEnter={() => setModalOpen(true)}
                onMouseLeave={() => setModalOpen(false)}
            >
                {term}
            </a>
            {modalOpen && 
                <section className="termModal">
                    <section className="termDefinition">
                        <p>{definition}</p>
                    </section>
                </section>
            }
        </>
    )
}

export default Term;