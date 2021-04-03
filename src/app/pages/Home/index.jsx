/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { List, ListItem, TextField, Typography } from '@material-ui/core';
import './styles.scss';

export default function Home() {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState('');

  const OptionLabel = (option) => (
    <div>
      <Typography>{option.nome}</Typography>
      <Typography style={{ fontSize: 10, color: 'blue' }}>
        {option.estado}
      </Typography>
    </div>
  );

  useEffect(() => {
    setCities([
      {
        nome: 'Lavras',
        estado: 'Minas Gerais',
      },
      {
        nome: 'Belo Horizonte',
        estado: 'Minas Gerais',
      },
    ].filter(c => c.nome === query));
  }, [query]);

  return (
    <div className="container">
      <div className="inputContainer">
        <SearchIcon className="searchIcon" />
        <TextField
          placeholder="Buscar cidade..."
          className="searchInput"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <List component="nav" className="cityList">
        {cities.map((option, id) => (
          <ListItem button key={id}>
            {OptionLabel(option)}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
