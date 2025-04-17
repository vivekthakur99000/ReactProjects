import { useEffect, useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [includeDigit, setIncludeDigits] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8); // Default length

  const randomPassword = (length) => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]}';

    let passwordNew = '';

    if (includeDigit && includeSpecialChars) {
      passwordNew = letters + digits + specialChars;
    } else if (includeDigit) {
      passwordNew = letters + digits;
    } else if (includeSpecialChars) {
      passwordNew = letters + specialChars;
    } else {
      passwordNew = letters;
    }

    let coupledPassword = '';

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * passwordNew.length);
      coupledPassword += passwordNew[idx];
    }

    setPassword(coupledPassword);
  };

  useEffect(() => {
    randomPassword(passwordLength);
  }, [includeDigit, includeSpecialChars, passwordLength]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Random Password Generator</h1>
        <div className="mb-4">
          <input
            type="text"
            readOnly
            placeholder="Generated password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            />
            <span className="text-gray-700">Include Special Characters</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={(e) => setIncludeDigits(e.target.checked)}
            />
            <span className="text-gray-700">Include Digits</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password Length: {passwordLength}</label>
          <input
            type="range"
            min="1"
            max="30"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          onClick={() => randomPassword(passwordLength)}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
