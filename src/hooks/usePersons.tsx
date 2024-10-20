import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants/config';
import { Person } from '../types/Person';

const usePersons = (amount: number = 12) => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPersons = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?results=${amount}`);
      setPersons(response.data.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [amount]);

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  return { persons, loading, error };
};

export default usePersons;
