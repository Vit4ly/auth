import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface Auth {
    email:string,
    password: string,
    key: string
    isLoading: boolean,
    error: TypeError | null,
}
const initialState: Auth = {
    email: '',
    password: '',
    key: '',
    isLoading: false,
    error: null,
}

export const fetchAuthThunk = createAsyncThunk('', async () => {
    return ''
})

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {},
})

export default AuthSlice.reducer;
