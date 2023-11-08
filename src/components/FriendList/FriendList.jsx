import List from "./List"
const FriendList = ({friends}) => {
    return (<List className="friend-list">
        {friends.map(el => {
            return (<li className="item" key={el.id}>
                <span className={el.isOnline ? 'green' : 'red'}></span>
  <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
                <p className="name">{el.name}</p>
</li>)
        })}
    </List>)
}
export default FriendList