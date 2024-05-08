import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fetchUsers, User } from './fetchUsers';

const UserSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Autocomplete
        options={users}
        getOptionLabel={(option) => option.formattedName}
        style={{ width: 300 }}
        onChange={(event, newValue: User | null) => {
          setSelectedUser(newValue);
        }}
        renderInput={(params) => <TextField {...params} label="Name" variant="outlined" />}
      />
      {selectedUser && (
        <div>
          <p>{selectedUser.formattedName}</p>
          <p>{selectedUser.street}</p>
          <p>{selectedUser.suite}</p>
          <p>{selectedUser.zipcode}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
