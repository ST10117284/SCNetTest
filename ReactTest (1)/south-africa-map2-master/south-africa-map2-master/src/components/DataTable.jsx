import React, { useState, useEffect } from 'react';
import '../CSS/Table.css';

const DataTable = () => {
  const [corporateData, setCorporateData] = useState({});
  const [selectedTable, setSelectedTable] = useState('all'); // Initial selected table as 'all' for View All

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/GetCorporateData', {
          headers: {
            'Ocp-Apim-Subscription-Key': '91a75aab8cf248d2aca799f8546b1f6c',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCorporateData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty array as second argument ensures effect runs only on mount

  // Handle change of selected corporate table
  const handleTableChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTable(selectedValue);
  };

  // Get table headers dynamically from data keys
  const tableHeaders = selectedTable === 'all' ? getAllTableHeaders() : Object.keys(corporateData[selectedTable] || {});

  // Function to get all table headers
  function getAllTableHeaders() {
    if (Object.keys(corporateData).length === 0) {
      return [];
    }
    // Use Set to collect all unique headers
    let headersSet = new Set();
    Object.keys(corporateData).forEach(key => {
      Object.keys(corporateData[key]).forEach(header => headersSet.add(header));
    });
    return Array.from(headersSet);
  }

  // Determine the data to display based on selected table
  let tableData;
  if (selectedTable === 'all') {
    tableData = getAllTableData();
  } else {
    tableData = [corporateData[selectedTable]];
  }

  // Function to get all table data
  function getAllTableData() {
    if (Object.keys(corporateData).length === 0) {
      return [];
    }
    let allData = [];
    Object.keys(corporateData).forEach(key => {
      allData.push(corporateData[key]);
    });
    return allData;
  }

  return (
    <div className="data-container">
      <h1>Filter By Corporate: ID</h1>
      <select value={selectedTable} onChange={handleTableChange} className="dropdown">
        <option value="all">View All</option>
        {Object.keys(corporateData).map((key, index) => (
          <option key={key} value={key}>{index + 1}</option>
        ))}
      </select>
      <br />
      <table className="data-table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} className="table-header">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, dataIndex) => (
            <tr key={dataIndex}>
              {tableHeaders.map((header) => (
                <td key={header}>{data[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
