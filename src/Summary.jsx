import './App.css'
import reactionIcon from './assets/icon-reaction.svg'
import memoryIcon from './assets/icon-memory.svg'
import verbalIcon from './assets/icon-verbal.svg'
import visualIcon from './assets/icon-visual.svg'



const Summary = ()=> {
    return (
        <>
        <main>
            <p className='summrary-paragraph'>Summary</p>
            <ul className='summary-list'>
                <li className='summary-card-reaction'>
                    <div className='label'>
                        <img src={reactionIcon} alt='Reaction icon' /><span className='reaction'>Reaction</span>
                    </div>
                    <div className='score'>
                        <span className='real-score'>80</span> / 100
                    </div>
                </li>
                <li className='summary-card-memory'>
                    <div className='label'>
                        <img src={memoryIcon} alt=' Memory icon' /><span className='memory'>Memory</span>
                    </div>
                    <div className='score'>
                        <span className='real-score'>92</span> / 100
                    </div>
                </li>
                  <li className='summary-card-verbal'>
                    <div className='label'>
                        <img src={verbalIcon} alt='Verbal icon' /><span className='verbal'>Verbal</span>
                    </div>
                    <div className='score'>
                        <span className='real-score'>61</span> / 100
                    </div>
                </li>
                  <li className='summary-card-visual'>
                    <div className='label'>
                        <img src={visualIcon} alt='Visual icon' /><span className='visual'>Visual</span>
                    </div>
                    <div className='score'>
                        <span className='real-score'>73</span> / 100
                    </div>
                </li>
            </ul>
            <button className='btn' aria-label='Continue to the result page' type='button'>Continue</button>
        </main>
        </>
    )
}

export default Summary