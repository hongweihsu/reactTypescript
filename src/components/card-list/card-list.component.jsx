import {Component} from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component {
    render(){
        console.log('render');
        const {monsters} = this.props;
        return(
            <div className='card-list'>
                {monsters.map((monster) => {
                    // here can declare, but need to use '{}' + 'return'
                    return (
                    <div key={monster.id} className='card-container'>
                        <Card monster={monster}></Card>
                    </div>
                    )})}
            </div>
        );
    }
}

export default CardList;