import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstValue, updateSecondValue } from "./actions";

const App = () => {
  const convertFirstValue = useSelector((state) => state.convertFirstValue);
  const convertSecondValue = useSelector((state) => state.convertSecondValue);
  const dispatch = useDispatch();

  const handleFirstConvert = (e) => {
    const value = Number(e.target.value);
    dispatch(updateFirstValue(value));
  };

  const handleSecondConvert = (e) => {
    const value = Number(e.target.value);
    dispatch(updateSecondValue(value));
  };

  return (
    <div className="App">
      <div className="Converter-container">
        <div>
          <div>USD</div>
          <input
            className="Converter__input"
            type="number"
            placeholder="0"
            value={convertFirstValue.toString()}
            onChange={handleFirstConvert}
          />
        </div>
        <div>
          <div>EUR</div>
          <input
            className="Converter__input"
            type="number"
            placeholder="0"
            value={convertSecondValue.toString()}
            onChange={handleSecondConvert}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
