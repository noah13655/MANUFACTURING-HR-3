import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/payroll" : "/api/payroll";

axios.defaults.withCredentials = true;

export const usePayrollStore = create((set, get) => ({
  requestedAmount: 0,
  paymentMethod: 'Cash',
  gCashNumber: '',
  message: '',
  salaryRequests: [],
  error: '',

  setRequestedAmount: (amount) => set({requestedAmount:amount}),
  setPaymentMethod: (method) => set({paymentMethod:method,gCashNumber:method === 'Cash' ? '' : ''}),
  setGCashNumber: (number) => set({gCashNumber:number}),
  setMessage: (msg) => set({message:msg}),

  requestSalary: async () => {
    const {requestedAmount,paymentMethod,gCashNumber} = get();
    const requestData = {
      requestedAmount,
      paymentMethod,
      gCashNumber: paymentMethod === 'GCash' ? gCashNumber : null,
    };

    try {
      const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
      const csrfToken = csrfResponse.data.csrfToken;
      console.log('CSRF Token:', csrfToken);

      const response = await axios.post(`${API_URL}/request-salary`,requestData, {
        headers:{'csrf-token':csrfToken},
      });
      set({message:response.data.message});
    } catch (error) {
      console.error(error);
      set({message:error.response?.data?.message || 'An error occurred. Please try again.'}); // Set error message
    }
  },

  setSalaryRequests: (requests) => set({salaryRequests:requests}),
  addSalaryRequest: (newRequest) => 
    set((state) => ({salaryRequests:[...state.salaryRequests,newRequest]})),

  fetchSalaryRequests: async () => {
    try {
      const response = await axios.get(`${API_URL}/get-requested-salary`);
      set({salaryRequests:response.data.data});
    } catch (error) {
      set({error:'Failed to fetch salary requests. Please try again later.'});
    }
  },


}));
