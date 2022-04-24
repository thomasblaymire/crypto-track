import { ColumnType } from '../../types/types';

export const columns: ColumnType[] = [
  { accessor: 'watch', label: ' ' },
  { accessor: 'name', label: 'Name' },
  { accessor: 'current_price', label: 'Price' },
  { accessor: 'price_change_percentage_24h', label: '24%' },
  { accessor: 'market_cap_change_percentage_24h', label: '48%' },
  { accessor: 'market_cap', label: 'Market Cap' },
  { accessor: 'circulating_supply', label: 'Circulating Supply' },
  { accessor: 'total_volume', label: 'Total Volume' },
];
