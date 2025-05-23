export const  usuarios = [{"nombre":"Juan Pérez",
    "fechaIngreso":"2025-03-16"
    },
    {"nombre":"Juana Pérez",
    "fechaIngreso":"2025-04-16"
    },
    {"nombre":"Juan Pérez",
    "fechaIngreso":"2025-03-16"
    },
    {"nombre":"Juan Pérez",
    "fechaIngreso":"2025-03-16"
    }
]

export function almacenarLocalStorage(data){
    //Inserta la data suministrada, en formato JSON
    localStorage.setItem("data",JSON.stringify(data))
}

export function consultarLocalStorage(){
    //Me retorna lo almacenado en el local storage en formato json
    return JSON.parse(localStorage.getItem("data"))
}