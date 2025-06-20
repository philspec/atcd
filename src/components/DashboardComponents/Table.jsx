import { useState } from 'react';
import {sampleData} from "../../assets/tableData"

const TableComponent = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const filteredData = sampleData.filter(entry =>
    entry.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(search);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 w-full rounded-xl">
      <div className="flex justify-between items-center w-full max-w-5xl mb-4">
        <div className="flex items-center space-x-2">
          <label className="text-md text-[#1E1F4B]">Show</label>
          <input
            type="number"
            value="10"
            className="w-16 p-1 border rounded"
            
          />
          <span className="text-md text-[#1E1F4B]">Entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-md text-[#1E1F4B]">Search:</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="p-1 border rounded"
          />
        </div>
      </div>

      <table className="w-full max-w-5xl text-md text-[#1E1F4B] rounded-xl">
        <thead>
          <tr className="text-left text-white" style={{ background: 'linear-gradient(to left, #8E54E9, #4776E6)' }}>
            <th className="p-2">Name</th>
            <th className="p-2">Service Name</th>
            <th className="p-2">Date</th>
            <th className="p-2">Profit</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, 10).map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.service}</td>
              <td className="p-2">{row.date}</td>
              <td className="p-2">{row.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-2 mt-4">
        <button className="px-3 py-1 bg-white border rounded text-[#1E1F4B]">Previous</button>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${page === 1 ? 'bg-[#8E54E9] text-white' : 'bg-white border text-[#1E1F4B]'}`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 bg-white border rounded text-[#1E1F4B]">Next</button>
      </div>

      <div className="mt-2 text-md text-[#1E1F4B]">
        Showing 1 to 10 of {filteredData.length} entries
      </div>
    </div>
  );
};

export default TableComponent;
