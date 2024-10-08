export interface Transaction {
    id: number | null | string,
    transaction: string,
    category_id?: number,
    count: number,
    category_name?: string,
    createdAt?: Date,
    updatedAt?: Date,
    user_id?: number,
    selectedCategory?: string
}

export interface Category {
    id: number | string,
    name: string,
    createdAt?: Date,
    updatedAt?: Date,
    user_id?: number
}

export interface TransactionsAndCategories {
    transactions: Transaction[] | null,
    categories: Category[] | null
}