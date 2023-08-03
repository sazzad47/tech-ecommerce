import React, { useState, useEffect } from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useGetVolunteersQuery } from "src/state/api/user";
import { Oval } from "react-loader-spinner";

const volunteerHeaders = ["Photo", "Name", "Phone", "Email", "Address"];

const Volunteers = () => {
  const { data, isLoading } = useGetVolunteersQuery({});
  const [filteredData, setFilteredData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueCountries = [...new Set(data.map((item) => item.country))];
      setCountries(uniqueCountries);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const uniqueProvinces = [
        ...new Set(
          data
            .filter((item) => item.country === selectedCountry)
            .map((item) => item.province)
        ),
      ];
      setProvinces(uniqueProvinces);
    } else {
      setProvinces([]);
    }
    setSelectedProvince("");
    setSelectedCity("");
  }, [selectedCountry, data]);

  useEffect(() => {
    if (data) {
      const uniqueCities = [
        ...new Set(
          data
            .filter((item) => item.province === selectedProvince)
            .map((item) => item.city)
        ),
      ];
      setCities(uniqueCities);
    } else {
      setCities([]);
    }
    setSelectedCity("");
  }, [selectedProvince, data]);

  useEffect(() => {
    let filteredVolunteers = data || [];

    if (selectedCountry) {
      filteredVolunteers = filteredVolunteers.filter(
        (item) => item.country === selectedCountry
      );
    }

    if (selectedProvince) {
      filteredVolunteers = filteredVolunteers.filter(
        (item) => item.province === selectedProvince
      );
    }

    if (selectedCity) {
      filteredVolunteers = filteredVolunteers.filter(
        (item) => item.city === selectedCity
      );
    }

    setFilteredData(filteredVolunteers);
  }, [selectedCountry, selectedProvince, selectedCity, data]);

  return (
    <div className="w-full text-center text-gray-900 mb-[3rem]">
      <h1 className="text-2xl sm:text-4xl">Volunteers</h1>
      <div className="w-full flex flex-col gap-0 sm:gap-5 sm:flex-row justify-center sm:justify-start mt-4">

      <FormControl className="w-full sm:w-[15rem]">
        <Select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <MenuItem value="">All Countries</MenuItem>
          {countries.map((country, index) => (
            <MenuItem key={index} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="w-full sm:w-[15rem]">
        <Select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
        >
          <MenuItem value="">All Provinces</MenuItem>
          {provinces.map((province, index) => (
            <MenuItem key={index} value={province}>
              {province}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="w-full sm:w-[15rem]">
        <Select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <MenuItem value="">All Cities</MenuItem>
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

      <TableContainer className="bg-gray-100 mt-[2rem]" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-green-700">
            <TableRow>
              {volunteerHeaders.map((header, index) => (
                <TableCell key={index} className="text-white" align="left">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {isLoading ? (
            <div className="w-full h-[10vh] flex items-center justify-center">
              <Oval
                height={30}
                width={30}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : filteredData.length === 0 ? (
            <div className="h-[5rem] w-full flex items-center justify-start pl-3">
              No volunteer found!
            </div>
          ) : (
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="text-gray-900">
                    <Avatar
                      src={item.photo}
                      style={{ width: 56, height: 56 }}
                      alt=""
                    />
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {item.first_name} {item.last_name}
                  </TableCell>
                  <TableCell className="text-gray-900">{item.phone}</TableCell>
                  <TableCell className="text-gray-900">
                    {item.email}
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {item.address}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Volunteers;
