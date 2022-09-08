export const getFXRates = async (base: string, date: string) => {

    const url = `${process.env.API_URL}/${date.length ? date : ''}${base.length ? `?base=${base}` : ''}`;
    
    const result = await fetch(url)
    return result.json()
}