import React, { useState }  from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    "oranges", "apples", "candy"
  ]);
  return (
    <div id="list-container">
      <ListDisplay items={items}/>
      <InputText handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />
    </div>
  )
}

export default App;

const ListItem = (props) => {
  return <li>{props.name}</li>
}
 

const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
    />
  ))
  return (
    <ul>
      {items}
    </ul>
  )
}

const InputText = (props) => {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}
