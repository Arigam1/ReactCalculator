import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './api/users';
import './App.css';
import { addCashAction, getCashAction } from './redux/cashReducer';
import { addCustomerAction, removeCustomerAction } from './redux/customersReducer';



function App() {
  debugger

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
      <div style={{ fontSize: "3rem" }}>Баланс: {cash}</div>
      <div className={"buttons"}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchUsers())}>Показать клиентов</button>
        {/* <button onClick={() => removeCustomer(prompt())}>Удалить клиента</button> */}
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} style={{ margin: '5px', padding: '10px', background: '#f00' }}>
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

