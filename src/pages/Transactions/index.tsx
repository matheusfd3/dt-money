import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./SearchForm";

import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  const {transactions} = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      R$ {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              ))
            }
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  )
}