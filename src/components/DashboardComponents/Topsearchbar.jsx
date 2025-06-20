import { useState } from 'react';

const randomData = {
    "votiplaq": "$1932",
    "nuxel": "$8534",
    "drimoux": "$2370",
    "quarlopix": "$6792",
    "zofka": "$1210",
    "bloxten": "$9307",
    "trivom": "$1805",
    "crenfiz": "$4432",
    "yumbazo": "$7784",
    "xelvorn": "$3400",
    "flibra": "$905",
    "torkenly": "$6341",
    "mivlun": "$2122",
    "jibtraz": "$7849",
    "zambrax": "$1560"
  };
  
export default function TopSearchBar() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [value,setValue]=useState("")

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setFiltered([]);
      setShowDropdown(false);
      setValue("");
      return;
    }

    const matches = Object.keys(randomData).filter((key) =>
      key.toLowerCase().includes(input.toLowerCase())
    );

    setFiltered(matches);
    setShowDropdown(true);
  };

  const handleSelect = (key) => {
    if (query===""){
        setValue("")
        return
    }
    setQuery("");
    setValue([key,randomData[key]]);
    setShowDropdown(false);
  };

  const handleClick = (e) =>{
    if (query===""){
        setValue("")
        return
    } 
  }

  return (
    <>
    <div className="flex flex-row items-center-safe p-6 justify-around">
        <h1 className="text-3xl mr-8 font-bold text-[#151D48] font-">Referral Dashboard</h1>
        <i className="fas fa-search mr-1 ml-3 text-xl text-[#706FE5]"></i>
        <div className='flex flex-col w-2/5 px-4 py-2 h-24 justify-center relative'>
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search here..."
            className="rounded-xl w-full p-6 bg-gray-100 h-3/5 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#706FE5]"
        />

        {showDropdown && filtered.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-gray-100 text-gray-700 rounded-xl text-md shadow-lg">
            {filtered.map((item, idx) => (
                <li
                key={idx}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                >
                {item}
                </li>
            ))}
            </ul>
        )}
        </div>
        <button onClick={handleClick} className="bg-[#706FE5] text-white font-semibold text-xl rounded-2xl h-12 w-36">Search</button>
        <img onClick="" src="/bell.svg" alt="Logo" className="rounded w-12 h-12" />
        <img src="/id.svg" alt="Logo" className="w-36 h-12" />
    </div>
    <p className='text-center text-[#706FE5] font-semibold text-xl'>{value!==""? <p>{value[0]} : {value[1]}</p>: <p></p>}</p> 
    </> 
  )
}
