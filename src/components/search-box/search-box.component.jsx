import {Component} from "react";
import './search-box.styles.css';

class SearchBox extends Component{
    render() {
        const onSearchChange = this.props.onChange
        return (
            <div>
                <input className={`search-box ${this.props.className}`}
                       type='search'
                       placeholder='search monsters'
                       onChange={onSearchChange}>
                </input>
            </div>
        )
    }
}

export default SearchBox;