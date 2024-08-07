import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "./utils";

const SearchWithDebounce = () => {
  const [search, setSearch] = useState("");
  const [allList, setAllList] = useState([]);
  const [allNames, setAllNames] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setAllList(result);
      setAllNames(result);
    } catch (error) {
      console.error("Error ", error);
    }
  };

  const handleSearch = useCallback(
    debounce((searchValue) => {
      setAllList(
        allNames.filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }, 500),
    [allNames]
  );

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    handleSearch(search);
  }, [search, handleSearch]);

  return (
    <div>
      <h2>Search With Debounce</h2>
      <input
        type="text"
        placeholder="Search Name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      {allList.map((list) => (
        <div key={list.id}>
          <h1>{list.name}</h1>
          <p>{list.email}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchWithDebounce;


//Optimized Version

const DebounceSearch = () => {
    const [search, setSearch] = useState("");
    const [names, setNames] = useState({ all: [], filtered: [] });
  
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setNames({ all: result, filtered: result });
      } catch (error) {
        console.error("Error ", error);
      } 
    };
  
    const handleSearch = useCallback(
      debounce((searchValue) => {
        setNames((prevState) => ({
          ...prevState,
          filtered: prevState.all.filter((user) =>
            user.name.toLowerCase().includes(searchValue.toLowerCase())
          ),
        }));
      }, 500),
      []
    );
  
    useEffect(() => {
      fetchApi();
    }, []);
  
    useEffect(() => {
      handleSearch(search);
    }, [search, handleSearch]);
  
    return (
      <div>
        <h2>Search With Debounce</h2>
        <input
          type="text"
          placeholder="Search Name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        {names.filtered.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    );
  };


