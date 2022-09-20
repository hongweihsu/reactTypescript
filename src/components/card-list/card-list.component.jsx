import {Component} from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component {
    render(){
        const {monsters} = this.props;
        return(
            <div className='card-list'>
                {monsters.map((monster, i) => {
                    // here can declare, but need to use '{}' + 'return'
                    return (
                    // <div key={i} className='card-container'>
                        <Card key={i} monster={monster}></Card>
                    // </div>
                    )})}
            </div>
        );
    }
}

export default CardList;