import { useState } from 'react';
import './App.css';

function App() {
  const [Data, setData] = useState("");
  const [Array, setArray] = useState([]);
  const change = (e) => {
    const value = e.target.value;
    setData(value);
  };
  const Click = () => {
    setArray([...Array, Data]);
    setData("");
  };
  const del = (index) => {
    Array.splice(index, 1);
    setArray([...Array]);
  };
  return (
    <>
      <div className='container-sm'>
        <div className='container-sm d-flex justify-content-center align-items-center flex-column'>
          <h4 className='my-4'> Todo List Project </h4>
          <div className='d-flex justify-content-center'>
            <input
              placeholder='Add Items'
              style={{ outline: "none" }}
              value={Data}
              onChange={change}
            />
            <button className='btn btn-primary mx-3' onClick={Click}>
              Add
            </button>
          </div>
          <div className='container row mx-1'>
            {Array && Array.map((item, index) => (
              <>
                <div className='col-lg-8'
                  style={{ textTransform: "capitalize" }}
                >
                  {index + 1}. {item}
                </div>
                <div className='col-lg-2' >
                  <span className='text-danger mx-5' onClick={() => del(index)}
                    style={{ cursor: "pointer" }}
                  >DEL</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
