/**
|--------------------------------------------------
| Static page data like module names, routes
|--------------------------------------------------
*/

export default (
    {
        modules: [
            {
                name: "Main",
                title: "user",
                icon: "flaticon-business main",
                menu: [
                    {
                        title: "Employees List",
                        link: true,
                        module: "user",   // collection name
                        icon: "flaticon-employee",
                        table: [
                            { field: "id", header: "Id" },
                            { field: "name", header: "Name" },
                            { field: "age", header: "Age" },
                            { field: "gender", header: "Gender" },
                            { field: "email", header: "Email" },
                            { field: "phoneNo", header: "Phone No" }
                        ],
                        schema: {
                            title: "",
                            sections: [
                                {
                                    title: "",
                                    items: [
                                        
                                    ]

                                }
                            ]
                        }
                    },
                    
                ]
            },
         ]
    }
)