export default async function getLeadData(leads) {
    console.log(leads);
    const res = await fetch(`http://localhost:5000/search/${leads}`);
    return res.json();
}