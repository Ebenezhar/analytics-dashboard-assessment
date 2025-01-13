import Papa from 'papaparse';

export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_DATA_REQUEST' });
      try {
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
                        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: result.data });

                      // setCsvData(result.data); // Store parsed data in state or Redux
                    },
                    error: (error) => {
                      console.error('Error while parsing CSV:', error);
                    },
                  });
                })
                .catch((error) => {
                  console.error('Error loading file:', error);
                });
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
      } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      }
    };
  };