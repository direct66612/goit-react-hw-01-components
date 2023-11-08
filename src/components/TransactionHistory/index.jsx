import styled from "styled-components";
const Table = styled('table')`
  display: flex;
  flex-direction: column;
  align-items: center;
  .table__items{
    display: flex;
    gap: 100px;
    background-color: aqua;
    padding: 20px;
    justify-content: left;
  }
`


const TransactionHistory = (props) => {
  return (<Table className="transaction-history">
  <thead>
    <tr className="table__items">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {props.item.map(el => {
        return (<tr className="table__items" key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
    </tr>) 
      })}
  </tbody>
</Table>)
}
export default TransactionHistory