export const cleanParams = async <T extends Record<string,any>>(obj:T) => {
    const clean = Object.fromEntries(
        Object.entries(obj).filter(([_,v]) => v !== undefined && v !== null && v !== '')
    ) as Record<string,string>

    return clean
}