import styled from "styled-components";
const List = styled('ul')`
        list-style: none;
`
let Span = styled('span')`
        background-color: red;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 15px;
`
const FriendList = (props) => {
    return (<List className="friend-list">
        {props.friends.map(el => {
            return (<li className="item" key={el.id}>
                <Span className="status"></Span>
  <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
                <p className="name">{el.name}</p>
</li>)
        })}
    </List>)
}
export default FriendList