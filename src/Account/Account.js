import './Account.css';
import About from './About';
import Button from "./Button";
import StatusBoard from "./StatusBoard";


function Account() {
    return (
        <>
            <div className='page'>
                <div className='header'>
                    <StatusBoard blockHeader={'Добрый день!'} salary={'42 350'} date={'12.04.2095'} />
                    <div className='buttons-block'>
                        <Button text={'Запросить выписку'} />
                        <Button text={'Запросить табель'} />
                    </div>
                </div>
                <About />
            </div>
        </>
    );
}

export default Account;
