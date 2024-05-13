import { useState, useEffect } from 'react';
import { LoadDataStorage, SaveDataStorage } from './connect';
import { ApiFetcher } from './connect';
const useReusableDataFetcher = (endpoints = []) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const token = LoadDataStorage('token');
      const fetchedData = {};

      if (endpoints.length === 0 || endpoints.includes('wallets')) {
        const walletsResult = await ApiFetcher(`wallet`, "get", null, null, null, null, token);
        fetchedData.wallets = walletsResult?.data;
        SaveDataStorage("wallets",JSON.stringify(walletsResult?.data));
      }

      if (endpoints.length === 0 || endpoints.includes('transactions')) {
        const transactionsResult = await ApiFetcher(`wallet/transaction`, "get", null, null, null, null, token);
        fetchedData.transactions = transactionsResult?.data;
        SaveDataStorage("transaction",JSON.stringify(transactionsResult?.data));
      }

      setData(fetchedData);
      setHasLoaded(true); // Set hasLoaded to true after initial data loading
    } catch (error) {
      console.error('Error during data fetching:', error);
      setError(error);
      if (error.message.includes('Unauthorized')) {
        sessionStorage.clear();
      }
    } finally {
      setIsRefreshing(false); // Set refreshing state to false after data fetching completes
    }
  };

  const refreshData = async () => {
    if (!isRefreshing && (!hasLoaded || endpoints.length > 0)) {
      setIsRefreshing(true);
      await fetchData(); // Call fetchData to refresh the data
    }
  };

  useEffect(() => {
    if (!hasLoaded) {
      fetchData(); // Fetch data when the component mounts
    }
  }, [endpoints]); // Fetch data again if endpoints change

  return { data, error, refreshData, isRefreshing };
};

export default useReusableDataFetcher;
