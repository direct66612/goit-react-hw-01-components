import styled from "styled-components"

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color:grey;
  text-align: center;
  width: 400px;
  margin: 40px auto;
  border-radius: 20px;
`
const Image = styled('img')`
  width: 200px;
  margin-bottom: 20px;
`
const NameTitle = styled('p')`
  font-weight: 700;
  font-size: 34px;
`
const List = styled('ul')`
  display: flex;
  justify-content: row;
  gap: 70px;
  list-style: none;
`
const Item = styled('li')`
  display: flex;
  flex-direction: column;
`
const Profile = (props) => {
    return (<Container className="profile">
  <div className="description">
    <Image
      src={props.avatar}
      alt="User avatar"
      className="avatar"
    />
            <NameTitle className="name">{props.username}</NameTitle>
            <p className="tag">@{props.tag}</p>
            <p className="location">{props.location}</p>
  </div>

  <List className="stats">
    <Item>
      <span className="label">Followers:</span>
                <span className="quantity">{props.stats.followers}</span>
    </Item>
    <Item>
      <span className="label">Views:</span>
      <span className="quantity">{props.stats.views}</span>
    </Item>
    <Item>
      <span className="label">Likes:</span>
      <span className="quantity">{props.stats.likes}</span>
    </Item>
  </List>
</Container>)
}

export default Profile