export const fetchApi = async <T>(url:string, option:RequestInit = {}):Promise<T> => {
    const response = await fetch(url, {
        headers: {'Content-Type':'application/json'},
        ...option
    })
    const result = await response.json()
    return result
}