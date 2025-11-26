function CargarUsuariosMostrar() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error HTTP: " + response.status);
            }
            return response.json(); 
        })
        .then(users => {
            users.forEach(user => {
                console.log(user.name);
            });
        })
        .catch(error => {
            console.error("Error al cargar los usuarios:", error);
        });
}
CargarUsuariosMostrar();