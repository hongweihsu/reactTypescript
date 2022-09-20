import {Component} from "react";
import './card.styles.css'

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        };
    }

    onShowDetailClick = () => {
        let showDetail
        this.state.showDetail === false? showDetail = true : showDetail =false
        console.log('sd',showDetail)
        this.setState(()=>{
            return {showDetail};
        });
    }

    render() {
        const {id, name, email, phone, address, company} = this.props.monster;

        if (this.state.showDetail === false){
        return (
            <div className='card-container'>
                <div className='card-content' onClick={this.onShowDetailClick}>
                    <img
                        alt={`monster ${name}`}
                        src={`https://robohash.org/${id}&size=100*100`}
                    />
                    <div className='text-info'>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            )
        }else {
            return (
                <div className='detail-container' onClick={this.onShowDetailClick}>
                    <div className='round-border'>
                    <div className='detail-card-content'>
                        <img
                            alt={`monster ${name}`}
                            src={`https://robohash.org/${id}&size=100*100`}
                        />
                        <div className='detail-text-info'>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    </div>
                    <div className='detail-additional-content'>
                        <p>Phone :</p>
                        <p>{phone}</p>
                        <p>Location :</p>
                        <p>{address.city + ' ' + address.street}</p>
                        <p>Company :</p>
                        <p>{company.name}</p>
                    </div>
                    </div>
                </div>
            )
        }
    }
}

export default Card;