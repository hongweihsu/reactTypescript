import {ChangeEventHandler, Component} from "react";
import './search-box.styles.css';


type SearchBoxProps = {
    className: string
    onChange:  ChangeEventHandler<HTMLInputElement>
}

class SearchBox extends Component<SearchBoxProps>{
    render() {
        const onSearchChange = this.props.onChange
        return (
            <div>
                <input className={`search-box ${this.props.className}`}
                       type='search'
                       placeholder={this.props.className === 'name-search-box'?'search by name':'search by email'}
                       onChange={onSearchChange}>
                </input>
            </div>
        )
    }
}

export default SearchBox;