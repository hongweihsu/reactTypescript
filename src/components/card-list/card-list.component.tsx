import {Component} from "react";
import './card-list.styles.css'
import Card from "../card/card.component";
import {Friend} from "../../App";

type CardListProps = {
    friends: Friend[];
}

class CardList extends Component<CardListProps> {
    render(){
        const {friends} = this.props;
        return(
            <div className='card-list'>
                {friends.map((friend, i) => {
                    return (
                        <Card key={i} friend={friend}></Card>
                    )})}
            </div>
        );
    }
}

export default CardList;