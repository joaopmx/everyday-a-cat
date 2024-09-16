async function connectApi() {
    const connection = await fetch("https://api.thecatapi.com/v1/images/search?page", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "x-api-key": "live_8zrh4dATWvehdmz6BRLuOqk9Hb1ipVPZrZLdtQZDsJjoO6gd7THs926Yh94aXezR"
        }
    })
    
    const convertedConnection = await connection.json();

    return convertedConnection;
}

connectApi();

export const getApi = {
    connectApi
}