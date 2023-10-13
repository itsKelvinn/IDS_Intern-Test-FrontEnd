async function fetchAllTransaction() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/transaction');
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function postTransaction(transactionData: any) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionData)
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error posting data:', error);
    return null;
  }
}

async function putTransaction(transactionId: string, transactionData: any) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/transaction/${transactionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionData)
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error updating data:', error);
    return null;
  }
}

export { fetchAllTransaction, postTransaction, putTransaction };
