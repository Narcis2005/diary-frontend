/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../utils/api";
import { userInterface, KnownError } from "../types/auth";

export const logoutUser = createAsyncThunk("auth/logoutUser", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh-token");
    api.defaults.headers.common["x-token"] = "";
    api.defaults.headers.common["x-refresh-token"] = "";
    return true;
});
export const getUserByToken = createAsyncThunk<userInterface, void, { rejectValue: KnownError }>(
    "auth/getUserByToken",
    async (_, thunkApi) => {
        try {
            if (!localStorage.getItem("token")) {
                throw "failed to login";
            }
            const result = await api.get(`/auth/getuser`);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return result.data;
        } catch (error) {
            console.log(error);
            // check if the error was thrown from axios
            if (axios.isAxiosError(error)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                const errorData = error.response?.data as KnownError;
                return thunkApi.rejectWithValue(errorData);
            }
            throw error;
        }
    },
);

export const loginUser = createAsyncThunk<
    userInterface,
    {
        username: string;
        password: string;
    },
    { rejectValue: KnownError }
>("auth/loginUser", async (profile, thunkApi) => {
    try {
        const result = await api.post(`/auth/login`, profile);
        return result.data;
    } catch (error) {
        // check if the error was thrown from axios
        if (axios.isAxiosError(error)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const errorData = error.response?.data as KnownError;
            return thunkApi.rejectWithValue(errorData);
        }
        throw error;
    }
});
interface stateInterface {
    result: userInterface;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: stateInterface = {
    result: {
        username: "",
        fullName: "",
        email: "",
        id: "",
        imageURL: "",
        refreshToken: "",
    },
    error: null,
    status: "idle",
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateRefreshToken(state, { payload }) {
            state.result.refreshToken = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserByToken.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getUserByToken.fulfilled, (state, { payload }) => {
            state.result = payload;
            state.error = null;
            state.status = "success";
        });
        builder.addCase(getUserByToken.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error.message;
            }
            state.status = "failed";
        });
        builder.addCase(loginUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.result = { ...payload };
            state.status = "success";
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error.message;
            }
            state.status = "failed";
        });
        builder.addCase(logoutUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.result = {
                username: "",
                fullName: "",
                email: "",
                id: "",
                imageURL: "",
                refreshToken: "",
            };
            state.error = null;
            state.status = "failed";
        });
    },
});
export const { updateRefreshToken } = userSlice.actions;
export default userSlice.reducer;
