function CargarUsuario() {
    const url = "https://jsonplaceholder.typicode.com/users/10";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error HTTP" + response.status);
            }
            return response.json(); 
        })
        .then(data => {
            console.log("Nombre: " + data.name);
            console.log("Username: " + data.username);
            console.log("Email: " + data.email);
        })
        .catch(error => {
            console.error("Error al cargar el usuario:", error);
        });
}
CargarUsuario();