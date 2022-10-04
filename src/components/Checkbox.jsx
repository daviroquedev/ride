import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function Checkbox() {

  const [checkbox, setCheckbox] = useState(false);

  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setCheckbox(current => !current);
  };

  return (
    <div className="flex items-center m-2">
      <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
        <input
          type="checkbox"
          value={checkbox}
          onChange={handleChange}
          id="link-checkbox"
          name="link-checkbox"
          className="w-4 h-4 mb-2 mr-2 text-[#08B5CE] bg-gray-100 rounded border-gray-300 focus:ring-[#19e0fe] dark:focus:ring-red-900 dark:ring-offset-[gray-800] focus:ring-2 dark:bg-[#19e0fe] dark:border-[#19e0fe]" 
        />
        Eu declaro que li e aceito os <Link to="/" className="text-[#08B5CE] dark:text-blue-500 hover:underline">termos e condições</Link>
      </label>
    </div>
  );
}

// <Link className='flex justify-end m-3'>

//     <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#08B5CE] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-red-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//     <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eu declaro que li e aceito os <Link to="/" className="text-[#08B5CE] dark:text-blue-500 hover:underline">termos e condições</Link>.</label>

// </Link>