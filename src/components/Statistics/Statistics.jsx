import { Section, Item, List } from './Statistics.style';
const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <List className="stat-list">
        {stats.map(el => {
          return (
            <Item className="item" key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};
export default Statistics;
