import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = "https://fakestoreapi.com"

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/user/get-all-users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        if (error.response && error.response.status === 403 && error.response.data.message === "invalid token") {
            localStorage.removeItem('token');
            window.location.href = '/login';
            console.log({ error });
        }
        console.log({ error });

    }
})

export const fetchProductWithId = createAsyncThunk("products/fetchProductDetails", async (id) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products/${id}`)
        return response.data
    } catch (error) {
        console.log({ error });

    }
})