export default async function getLeadById(leads, state, id) {
    console.log(leads, state, id);
    const res = await fetch(`http://localhost:5000/search/${leads}/${state}/${id}`)
    return res.json()
}