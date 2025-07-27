import './App.css'
import TopResult from './TopResult'
import Summary from './Summary'


const ResultComponent = () => {
    return(
    <>
     <div className="result-container">
        <TopResult />
        <Summary />
     </div>
    </>
    )
}

export default ResultComponent