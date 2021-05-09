export type User = {
    id: string;
    userName: string;
    token: string;
};

export type Error = {
    errorCode: number;
    message: string;
    stackTrace: string;
}