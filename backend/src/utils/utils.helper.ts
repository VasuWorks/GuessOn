import { IResponse } from "./utils.types";

export function prepareResponse(
    status: number,
    message: string,
    data?: any
): IResponse {
    const response: IResponse = {
        status,
        message,
        data,
    }
    return response;
}