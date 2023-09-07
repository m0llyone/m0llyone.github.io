import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk('weather/getWeather', async () => {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
  );
  return await response.json();
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWeather.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.weather = action.payload.current_weather;
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
