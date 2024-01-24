import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemsListContainer/ItemListContainer';
import NavBar from '../src/Components/NavBar/NavBar';
import Product from '../src/Product';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos al Portal de Compras mas grande de la Patagonia'}/>
      <Product img='data:image/png;base64,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'
        title='mesa ratona'
        description='mesa super cool'
        precio='$200,000.00'
      />
      <Product img='data:image/jpeg;base64,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'
        title='mesa quincho'
        description='mesa 6 o mas personas con sillas incluidas'
        precio='$700,000.00'
      />
      <Product img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOtVLbuhxvMYG8QN0StZfF5KLHlydQq6hQA&usqp=CAU'
        title='mesa dormitrio'
        description='mesa super cool'
        precio='$50,000.00'
      />
    </div>
  );
}

export default App;
