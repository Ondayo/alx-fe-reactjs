import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ margin: '10px', padding: '10px 20px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
