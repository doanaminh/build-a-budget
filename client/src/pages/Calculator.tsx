import {useState} from 'react';
import BudgetCalculator from './BudgetCalculator';
import CompoundCalculator from './CompoundCalculator';

export default function () {
    const [isOn, setIsOn] = useState([true, false]);

    return (
        <>
            <section className='Calculator'>
                {/* Toggle Slider to switch between calculators */}
                <section className='slider'>
                    <button 
                        className={`sliderButton1 ${isOn[0] ? 'on' : ''}`}
                        onClick={() => setIsOn([true, false])}
                    >Budget</button>
                    <button 
                        className={`sliderButton2 ${isOn[1] ? 'on' : ''}`}
                        onClick={() => setIsOn([false, true])}
                    >Compound</button>
                </section>
                {isOn[0] && 
                <BudgetCalculator />
                }
                {isOn[1] && 
                <CompoundCalculator />
                }
            </section>
        </>
    )
}