import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = "https://fakestoreapi.com"

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products`)
        return response.data
    } catch (error) {
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