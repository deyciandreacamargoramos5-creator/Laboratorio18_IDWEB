async function CargarUsuariosMostrar_Async_await() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const users = await response.json(); 
        users.forEach(user => {
            console.log(user.name);
        });
    } catch (error) {
        console.error("Error al cargar los usuarios:", error);
    }
}
CargarUsuariosMostrar_Async_await();