export const json = {
    
    questions: [
        {
            name: "name",
            type: "text",
            title: "Ingrese su nombre:",
            placeHolder: "Manu Sanchez",
            isRequired: true
        },
        {
            name: "birthdate",
            type: "text",
            title: "Fecha de nacimiento:",
            inputType: "date",
            isRequired: true
        },
        {
            name: "color",
            type: "text",
            inputType: "color",
            title: "Color favorito:"
        },
        {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Su email:",
            placeHolder: "debmedia@debmedia.com",
            isRequired: true,
            validators: [
                {
                    type: "email"
                }
            ]
        }
    ]
}