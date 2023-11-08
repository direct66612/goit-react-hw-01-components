import styled from "styled-components";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const Section = styled('section')`
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-align: center;
`
const List = styled('ul')`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    list-style: none;
`
const Item = styled('li')`
background-color: ${getRandomHexColor()};
    padding: 50px;
    display: flex;
    flex-direction: column;
`
const Statistics = (props) => {
    if (props.title !== undefined) {
        return (<Section className="statistics">
    <h2 className="title">{props.title}</h2>        
            <List className="stat-list">
                {props.stats.map(el => {
           return (<Item className="item" key={el.id}>
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}%</span>
    </Item>)
       })}         
  </List>
</Section>)
    }
    return (<Section className="statistics">       
        <List className="stat-list">
            {props.stats.map(el => {
                return (<Item className="item" key={el.id}>
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}%</span>
    </Item>)
            })}
  </List>
    </Section>)
}
export default Statistics