import './App.css'


const TopResult = ()=> {
    return (
        <>
        <header>
         <div className='top-result'>
            <p className='paragraph-result'>Your Result</p>
            <button className='score-cr'><div className='percent-result'>76</div>of 100</button>
            <h1>Great</h1>
            <p className='paragraph-score'>You scored higher than 65% of the people who have taken these tests.</p>
         </div>
        </header>
        </>
    )
}

export default TopResult