import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants/config';

const usePersons = (amount: number = 12) => {
  const [persons, setPersons] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get(API_BASE_URL + '?results=' + amount);
        setPersons(response.data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersons();
  }, [amount]);

  return { persons, loading, error };
};

export default usePersons;
