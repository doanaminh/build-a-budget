import { useState } from 'react';
import Button from "../components/Button";
import Modal from '../components/Modal';


export default function() {

    const [modalOpen, setModalOpen] = useState(false);

    const [investments, setInvestments] = useState({
        initialInvestment: 1000,
        monthlyContribution: 100,
        yearsInvesting: 5,
        interestRate: 1,
        compoundFrequency: 12,
    });

    // remove leading 0s in input field
    const trimZero = (n:string) => {
        return parseInt(n);
    }
    const handleChange = (e:any) => {
        console.log(e.target.value, typeof(e.target.value), investments);



        setInvestments({
            ...investments,
            [e.target.name]: trimZero(e.target.value),
        });
    }

    // Using the formula A = P(1 + r/n)**(nt)
    // investments.A = investments.initialInvestment * ((1 + (investments.interestRate / investments.compoundFrequency)) ** (investments.compoundFrequency * investments.yearsInvesting))
   
    // investments.A = (investments.initialInvestment + investments.monthlyContribution * investments.compoundFrequency) * ((1 + (investments.interestRate / investments.compoundFrequency)) ** (investments.compoundFrequency * investments.yearsInvesting))
    
    // (initial + monthly * 12) * (1 + interest/12) ** (12t)
    const calculateCompound = () => {
        let init = investments.initialInvestment;
        for (let i = 0; i < investments.yearsInvesting; i++) {
            init = init * (1 + (investments.interestRate/100));
            init = init + (investments.monthlyContribution * 12);
        }
        return Math.round((init + Number.EPSILON) * 100) / 100;
    }



    return (
        <>
            <section className='CompoundCalculator'>
                {/*  */}
                <h1>Compound Interest Calculator</h1>
                <p>To make this process easier, it would help to collect recent bills that you pay monthly to have at hand.</p>
                {/* FORM THAT WILL SUBMIT WITH ALL THE NUMBERS FOR A BUDGET */}
                <form action="">
                    {/* INCOME */}
                    <section>                        
                        <ul>
                            <li>
                                <label htmlFor="">Initial Investment</label>
                                <div>
                                    <span>$</span>
                                    <input 
                                    name='initialInvestment' 
                                    type="number" 
                                    placeholder="0" 
                                    min='0' 
                                    onInput={handleChange}
                                    value={trimZero(investments.initialInvestment.toString())}
                                    />
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">Monthly Contribution</label>
                                <div>
                                    <span>$</span>
                                    <input 
                                    name='monthlyContribution' 
                                    type="number" 
                                    placeholder="0" 
                                    min='0' 
                                    onInput={handleChange}
                                    defaultValue={100}
                                    />
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">Years of Investment</label>
                                <div>
                                    <input 
                                    name='yearsInvesting' 
                                    type="number" 
                                    placeholder="0" 
                                    min='0' 
                                    onInput={handleChange}
                                    defaultValue={5}
                                    />
                                    <span>Years</span>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">Estimated Interest Rate</label>
                                <div>
                                    <input 
                                    name='interestRate' 
                                    type="number" 
                                    placeholder="1" 
                                    min='0' 
                                    onInput={handleChange}
                                    defaultValue={1}
                                    />
                                    <span>%</span>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="">Compound Frequency</label>
                                <select 
                                    defaultValue={1}
                                    name="compoundFrequency" id=""
                                    onInput={handleChange}    
                                >
                                    <option value={1}>Annually</option>
                                    <option value={12}>Monthly</option>
                                    <option value={365}>Daily</option>
                                </select>
                            </li>
                        </ul>
                        
                    </section>

                    <div>
                        <div></div>
                        <Button
                            backgroundColor="#43718b"
                            color="white"
                            fontSize="1rem"
                            height="3rem"
                            width="10rem"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >Calculate</Button>
                        <Button
                            backgroundColor="#FF6961"
                            color="white"
                            fontSize="1rem"
                            height="3rem"
                            width="10rem"
                            onClick={() => {
                                setModalOpen(false);
                                location.reload();
                            }}
                        >Clear</Button>
                        <div></div>
                    </div>
                </form>
                {modalOpen && 
                    <Modal
                        title="Ending Balance"
                        a1Msg={''}
                        a2Msg=''
                        a3Msg=''
                        setOpenModal={modalOpen}
                        conclusion={`$${calculateCompound()}`}
                    />
                }
            </section>
        </>
    )
}