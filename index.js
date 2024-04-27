import { useState } from 'react';
import vehicleData from '../vehicle_data.json';
import Table from '../components/Table'; // We'll create this component later
import SearchForm from '../components/SearchForm'; // We'll create this component later

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(5); // Change this number according to your preference

  // Logic to filter vehicles based on search term
  const filteredVehicles = vehicle_data.filter(vehicle =>
    `${vehicle.make} ${vehicle.model} ${vehicle.year} ${vehicle.color}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic to paginate vehicles
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Vehicle List</h1>
      <SearchForm setSearchTerm={setSearchTerm} />
      <Table vehicles={currentVehicles} />
      {/* Pagination component can be added here */}
    </div>
  );
}
