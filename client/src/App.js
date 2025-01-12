import  { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

function App() {
  const [ text, setCsvData ] = useState([]);
  console.log(text);

  const handleFileUpload = (event) => {
    const file = "./data.csv"
    fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch the CSV file');
      }
      return response.text(); // Get the CSV content as text
    })
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true, // Treat the first row as headers
        skipEmptyLines: true,
        complete: (result) => {
          console.log('Parsed CSV data:', result.data);
          setCsvData(result.data); // Store parsed data in state or Redux
        },
        error: (error) => {
          console.error('Error while parsing CSV:', error);
        },
      });
    })
    .catch((error) => {
      console.error('Error loading file:', error);
    });
  };
useEffect(() => {
    handleFileUpload()
}, [])


  return (
    <div className="App">
      <div >Home</div>
    </div>
  );
}

export default App;
