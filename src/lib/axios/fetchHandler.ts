import Cookies from "universal-cookie"
import axios, {AxiosError, AxiosRequestConfig} from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL
axios.defaults.withCredentials = true

interface IPayload extends AxiosRequestConfig {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
    body: Record<string, string | number | undefined> | FormData | File
}

const fetchHandler = async (baseUrl:any, url: string, options?: IPayload): Promise<{ data: any }> => {
    const cookies = new Cookies()
    const token = cookies.get("access_token")

    // const baseUrlV2 = `${process.env.NEXT_PUBLIC_BASE_URL_V2}`

    type ICustomErrorMessage = {
        message: Record<string, string>
    }

    const payload = {
        url: decodeURI(`${baseUrl}${url}`),
        method: options?.method || "GET",
        data: {},
        headers: {
            "Content-Type": "application/json",
            Authorization: "",
        },
    }

    if (options?.body) {
        payload.data = options.body
    }
    if (token) {
        payload.headers = {
            ...payload.headers,
            Authorization: `Bearer ${token}`,
        }
    }

    return new Promise((resolve, reject) => {
        try {
            axios(payload)
                .then((res) => {
                    resolve(res)
                })
                .catch((err: AxiosError & ICustomErrorMessage) => {
                    if (err?.response?.status === 401) {
                        // do some action for refresh token and stuff
                    } else {
                        // errorHandler(err.message);
                        // return err;
                        throw reject(err.response)
                    }
                })
        } catch (error) {
            return error
        }
    })
}

export default fetchHandler
