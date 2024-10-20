import { Person } from '@/types/Person';
import { useMemo } from 'react';

interface UseFilteredPersonsProps {
  persons: Person[];
  genderFilter: string;
  countryFilter: string;
  searchQuery: string;
  sortOrder: string;
}

const useFilteredPersons = ({
  persons,
  genderFilter,
  countryFilter,
  searchQuery,
  sortOrder,
}: UseFilteredPersonsProps) => {
  return useMemo(() => {
    let filtered = [...persons];

    if (genderFilter) {
      filtered = filtered.filter((person) => person.gender === genderFilter);
    }

    if (countryFilter) {
      filtered = filtered.filter(
        (person) => person.location.country === countryFilter
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((person) =>
        `${person.name.first} ${person.name.last}`.toLowerCase().includes(query)
      );
    }

    if (sortOrder === 'asc') {
      filtered.sort((a, b) =>
        `${a.name.first} ${a.name.last}`.localeCompare(
          `${b.name.first} ${b.name.last}`
        )
      );
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) =>
        `${b.name.first} ${b.name.last}`.localeCompare(
          `${a.name.first} ${a.name.last}`
        )
      );
    }

    return filtered;
  }, [persons, genderFilter, countryFilter, searchQuery, sortOrder]);
};

export default useFilteredPersons;
