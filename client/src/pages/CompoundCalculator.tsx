import { useState } from 'react';
import Modal from '../components/Modal';
import InputField from '../components/InputField';


export default function() {

    // Default values for investment
    const defaultInvestment = {
        initialInvestment: 1000,
        monthlyContribution: 100,
        yearsInvesting: 5,
        interestRate: 1,
        compoundFrequency: 12,
    }

    const [investments, setInvestments] = useState(defaultInvestment);

    // remove leading 0s in input field
    const trimZero = (n:string) => {
        return parseInt(n);
    }
    const handleChange = (e:any) => {
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
            <section className='Compound'>
                {/*  */}
                <h1>Compound Interest Calculator</h1>
                <p>To make this process easier, have your investment budget at hand.</p>
                {/* FORM THAT WILL SUBMIT WITH ALL THE NUMBERS FOR A BUDGET */}
                <form action="">
                    {/* INCOME */}
                    <section>                        
                        <ul>
                            <li>
                                <InputField
                                    title='Initial Investment'
                                    symbol='$'
                                    inputName='initialInvestment'
                                    nameClass='input'
                                    handleValue={handleChange}
                                    loadedValue={Number(trimZero(investments.initialInvestment.toString()))}
                                />
                            </li>
                            <li>
                                <InputField
                                    title='Monthly Contribution'
                                    symbol='$'
                                    inputName='monthlyContribution'
                                    nameClass='input'
                                    handleValue={handleChange}
                                    loadedValue={100}
                                />
                            </li>
                            <li>
                                <InputField
                                    title='Years of Investment'
                                    symbol='years'
                                    inputName='yearsInvesting'
                                    nameClass='input years'
                                    handleValue={handleChange}
                                    loadedValue={5}
                                />
                            </li>
                            <li>
                                <InputField
                                    title='Estimated Interest Rate'
                                    symbol='$'
                                    inputName='interestRate'
                                    nameClass='input percent'
                                    handleValue={handleChange}
                                    loadedValue={1}
                                />
                            </li>
                            <li>
                                <label htmlFor="">Estimated Interest Rate</label>
                                <div className='input percent'>
                                    <input
                                    className='input'
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
                                    disabled={true}
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
                        <div>
                            <Modal
                            title="Ending Balance"
                            a1Msg={''}
                            a2Msg=''
                            a3Msg=''
                            conclusion={`$${calculateCompound()}`}
                            />                            
                        </div>
                        <div></div>
                    </div>
                </form>
            </section>
        </>
    )
}