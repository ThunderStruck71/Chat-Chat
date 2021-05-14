export type User = {
    userName: string;
    token: string;
};

export type Error = {
    status: number;
    errorMessage: string;
    stackTrace: string;
}