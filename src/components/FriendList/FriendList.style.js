import styled from 'styled-components';
const List = styled('ul')`
  display: flex;
  gap: 50px;
  margin: 70px 0px 70px 0px;
  justify-content: center;
  list-style: none;
  .green {
    background-color: green;
    width: 10px;
    height: 10px;
    padding: 5px;
    border-radius: 50%;
  }
  .red {
    background-color: red;
    width: 10px;
    height: 10px;
    padding: 5px;
    border-radius: 50%;
  }
  .item {
    background-color: grey;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px;
    flex-direction: column;
  }
  .name {
    color: #fff;
  }
`;
export default List;
