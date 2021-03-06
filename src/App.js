import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './api/users';
import './App.css';
import { addCashAction, getCashAction } from './redux/cashReducer';
import { addCustomerAction, removeCustomerAction } from './redux/customersReducer';



function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={"app"}>
      <div className={"balance"}>Баланс: {cash}</div>
      <div className={"buttons"}>
        <div>
          <button className={"button"} onClick={() => addCash(Number(prompt()))}>Пополнить</button>
        </div>
        <div>
          <button className={"button"} onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
        <div>
          <button className={"button"} onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        </div>
        <div>
          <button className={"button"} onClick={() => dispatch(fetchUsers())}>Показать клиентов</button>
        </div>
        {/* <button onClick={() => removeCustomer(prompt())}>Удалить клиента</button> */}
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} className={"customers"}>
              {customer.name}
            </div>)}
        </div>
        :
        <div style={{ fontSize: '2rem' }}>Клиенты отсутствуют</div>
      }
    </div>
  );
};
export default App;

