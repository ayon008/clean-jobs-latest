export default async function getLeadByState(leads, state) {
    const res = await fetch(`http://localhost:5000/search/${leads}/${state}`)
    return res.json();
}