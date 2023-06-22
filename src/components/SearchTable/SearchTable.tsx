import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import Table from '../Table';
import axios from 'axios';
import { StyledSearchTable } from './style';

interface IRocketData {
  rocket_name: string;
  diameter: { meters: number };
  height: { meters: number };
  mass: { kg: number };
  cost_per_launch: number;
}

const prepareData = (rocket: IRocketData) => ({
  'Rocket Name': rocket.rocket_name,
  Diameter: `${rocket.diameter.meters.toString()}m`,
  Height: `${rocket.height.meters.toString()}m`,
  Mass: `${rocket.mass.kg.toString()}kg`,
  'Cost per launch': `$${rocket.cost_per_launch.toString()}`,
});

const fetchRockets = async (setData: any, setError: any, setLoading: any) => {
  try {
    const result = await axios.get('https://api.spacexdata.com/v3/rockets');
    setData(result.data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching data: ', error);
    setError('Error...');
    setLoading(false);
  }
};

function SearchTable() {
  const [data, setData] = useState<IRocketData[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [resultCount, setResultCount] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRockets(setData, setError, setLoading);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  const headers = [
    'Rocket Name',
    'Diameter',
    'Height',
    'Mass',
    'Cost per launch',
  ];

  const rows = data?.map(prepareData);

  return (
    <StyledSearchTable>
      <SearchBar resultCount={resultCount} setSearchTerm={setSearchTerm} />
      {rows && (
        <Table
          headers={headers}
          rows={rows}
          searchTerm={searchTerm}
          setResultCount={setResultCount}
        />
      )}
    </StyledSearchTable>
  );
}

export default SearchTable;
