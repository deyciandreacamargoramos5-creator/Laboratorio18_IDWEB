document.getElementById("cargarBtn").addEventListener("click", cargarUsuario);
function cargarUsuario() {
    const url = "https://jsonplaceholder.typicode.com/users/2";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error HTTP: " + response.status );
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("userName").textContent = data.name;
            document.getElementById("userEmail").textContent = data.email;
            document.getElementById("userCity").textContent = data.address.city;
        })
        .catch(error => {
            console.error("Error al cargar el usuario:", error);
            document.getElementById("userName").textContent = "Error";
            document.getElementById("userEmail").textContent = "Error";
            document.getElementById("userCity").textContent = "Error";
        });
}