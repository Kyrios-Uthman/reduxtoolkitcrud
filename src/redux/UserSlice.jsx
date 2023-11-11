import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://654be4eb5b38a59f28efdc04.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      console.log("res", result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// read action
export const readUser = createAsyncThunk(
  "readUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://654be4eb5b38a59f28efdc04.mockapi.io/crud"
    );

    try {
      const result = response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://654be4eb5b38a59f28efdc04.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

// update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://654be4eb5b38a59f28efdc04.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const UserSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
    loading: false,
    searchUser: [],
    pagination:[],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchUser = action.payload;
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [readUser.pending]: (state) => {
      state.loading = true;
    },
    [readUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [readUser.rejected]: (state, action) => {
      state.loading = false;
    },
  
  
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;

      if (id) {
        state.users = state.users.filter((item) => item.id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { searchUser } = UserSlice.actions;

export default UserSlice.reducer;
