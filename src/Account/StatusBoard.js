import './StatusBoard.css';
export default function StatusBoard(props) {
    return(
        <div className='salary-block'>
            <h2 className='your-salary'>{props.blockHeader}</h2>
            <p className='money'>{props.salary} &#8381;</p>
            <p className='current-period'>По состоянию на: {props.date}</p>
        </div>
    )
}