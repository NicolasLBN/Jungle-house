import Banner from './Components/Banner'
import ShoppingList from './Components/ShoppingList'
import logo from './assets/leaf.png'
import './App.css';

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App