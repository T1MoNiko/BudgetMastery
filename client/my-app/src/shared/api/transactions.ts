import { AxiosInstance } from "axios";
import { instance as axiosInstance } from "../utils/axiosSettings";

interface ITransaction {
  id: string;
  title: string;
  amount: string;
}

export class TransactionsApi {
  private static _instance: TransactionsApi;

  private axios: AxiosInstance;

  private constructor(client: AxiosInstance) {
    this.axios = client;
  }

  public static getInstance(): TransactionsApi {
    if (!TransactionsApi._instance) {
      const client = axiosInstance();
      TransactionsApi._instance = new TransactionsApi(client);
    }
    
    return TransactionsApi._instance;
  }

  public async getTransactions(userId: number) {
    const res: {data: ITransaction} = await this.axios.get(`/transaction/${userId}`);
    return res.data;
  }

  public async addTransaction(data: {
    user_id: number;
    title: string;
    amount: number;
  }) {
    const res = await this.axios.post('/transaction', data);
    return res.data;
  }
}
