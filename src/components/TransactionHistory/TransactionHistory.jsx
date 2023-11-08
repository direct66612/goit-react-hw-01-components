import Table from "./Table"

const TransactionHistory = ({ item }) => {
  return (<Table className="transaction-history">
  <thead>
    <tr className="table__items">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {item.map(el => {
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