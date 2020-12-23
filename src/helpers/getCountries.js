export const getCountries = async () => {
    const resp = await fetch('countries.json');
    const data = await resp.json();
    return data;
}