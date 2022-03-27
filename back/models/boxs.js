const boxs = [
    {
        "_id": "1",
        "name":"Toulouse Sud",
        "city":"Toulouse",
        "district": "Ramonville st Agne",
        "adress": "2 Avenue des Crêtes",
        "postal_code": "31520",
        "contact":"05 62 19 19 79",
        "opening_hours": "Lun-Ven de 9h-12h30 ; 13h15-17h30, Sam 9h-13h",

    },
    {
        "_id": "2",
        "name":"Toulouse Nord-Est",
        "city":"Toulouse",
        "district": "Toulouse",
        "adress": "243 Route d'Albi",
        "postal_code": "31200",
        "contact":"05 61 11 03 53",
        "opening_hours": "Lun-Ven de 9h-12h30 ; 13h15-17h30, Sam 9h-13h",
    },
    {
        "_id": "3",
        "name":"Toulouse Université",
        "city":"Toulouse",
        "district": "Toulouse",
        "adress": "70 Rue Jacques Babinet",
        "postal_code": "31100",
        "contact":"05 34 60 31 10",
        "opening_hours": "Lun-Ven de 9h-12h30 ; 13h15-17h30, Sam 9h-13h",
    },
    {
        "_id": "4",
        "name":"Toulouse Ouest",
        "city":"Toulouse",
        "district": "Toulouse",
        "adress": "4 Rue de Caulet",
        "postal_code": "31300",
        "contact":"05 34 55 19 18",
        "opening_hours": "Lun-Ven de 9h-12h30 ; 13h15-17h30, Sam 9h-13h",
    },
    {
        "_id": "5",
        "name":"Bordeaux Lac",
        "city":"Bordeaux",
        "district": "Bordeaux",
        "adress": "15 rue Francis Garnier",
        "postal_code": "33300",
        "contact":"05 57 10 09 09",
        "opening_hours": "Lun-Ven de 9h-12h30 ; 13h15-17h30, Sam 9h-13h",
    },
    {
        "_id": "6",
        "name":"Bordeaux Floirac",
        "city":"Bordeaux",
        "district": "Bouillac",
        "adress": "35 Rte du bord de l'eau",
        "postal_code": "33270",
        "contact":"05 56 33 18 55",
        "opening_hours": "Lun-Ven de 9h-12h30 ; 13h15-17h30, Sam 9h-13h",
    },
    

];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(boxs))));
}

exports.findByCity = (city) => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(boxs)).filter(box =>
        box.city.toLowerCase() == city.toLowerCase())));
};

exports.findByPostalCode = (postal_code) => {
   
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(boxs)).find(box =>
            box.postal_code == postal_code)
        )
    )
};

exports.findByDistrict = (district) => {

    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(boxs)).find(box =>
            box.district.toLowerCase() == district.toLowerCase())
        )
    )
};
