import { useState } from "react";
import "./Term.css"

export const Terms = {
    budget: 'A financial plan. A visual representation of where your money is coming in and going out.',
    
}


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