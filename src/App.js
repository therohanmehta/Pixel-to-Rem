import './styles.css';
import { useState } from 'react';
export default function App() {
      const [pixel, setPixel] = useState('');

      return (
            <div className="App">
                  <input
                        style={{ width: '70px' }}
                        onChange={(e) => {
                              setPixel(e.target.value);
                        }}
                        type="text"
                        placeholder="enter pixel"
                  />
                  <label htmlFor="">Pixel</label>
                  <br />
                  <label>{pixel / 16}rem</label>
            </div>
      );
}
