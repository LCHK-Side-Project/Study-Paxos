import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./App.css";
import QuestionBoard from "./QuestionBoard";
import Questions from "./store/reducer/questions";

const rootReducer = combineReducers({
	Questions: Questions,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<QuestionBoard />
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					></a>
				</header>
			</div>
		</Provider>
	);
}

export default App;
