const handleDatabase = async () => {
    const res = await fetch("./database.json");
    const data = res.json();
    return data;
}
 
export default handleDatabase;