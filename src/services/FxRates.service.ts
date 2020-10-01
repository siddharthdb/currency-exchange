export const getFXRates = async (base: string, date: string) => {

    const url = `${process.env.REACT_APP_API_URL}/${date.length ? date : 'latest'}${base.length ? `?base=${base}` : ''}`;
    
    const result = await fetch(url)
    return result.json()
}