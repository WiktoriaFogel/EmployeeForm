
export const getEmployeeCollection = () =>([
            {id: 0, name: 'Zaznacz wszystko', job:null, locations: null, condition: null},
            {id: 1, name: 'Adam Nowak', job:1, locations:[1,4,9], condition:1},
            {id: 2, name: 'Robert Dudek', job:1, locations:[11,6,12], condition:2},
            {id: 3, name: 'Anna Kwiatkowska', job:2, locations:[3,7,8], condition:3},
            {id: 4, name: 'Alicia Król', job:1, locations:[2,5], condition:1},
            {id: 5, name: 'Damian Malinowski', job:4, locations:[10], condition:2},
            {id: 6, name: 'Tomasz Jabłoński', job:5, locations:[1,4,6], condition:3},
            {id: 7, name: 'Wojciech Rybacki', job:3, locations:[2,8,11], condition:1},
            {id: 8, name: 'Joanna Ptak', job:5, locations:[3,5,7], condition:2},
            {id: 9, name: 'Katarzyna Majewska', job:4, locations:[9], condition:3},
            {id: 10, name: 'Arkadiusz Mazur', job:2, locations:[10,12], condition:1},
            {id: 11, name: 'Martyna Dąbrowska', job:3, locations:[1,6,9], condition:2},
            {id: 12, name: 'Henryk Jankowski', job:4, locations:[2,5,11], condition:3},
            {id: 13, name: 'Marta Szymańska', job:1, locations:[3,4], condition:1},
            {id: 14, name: 'Piotr Woźniak', job:2, locations:[7], condition:2},
            {id: 15, name: 'Mateusz Lewandowski', job:3, locations:[8,10,12], condition:3},
            {id: 16, name: 'Maciej Wójcik', job:3, locations:[1,5,6], condition:1},
            {id: 17, name: 'Natalia Kamińska', job:5, locations:[2], condition:2},
            {id: 18, name: 'Paweł Kot', job:4, locations:[3,7], condition:3},
            {id: 19, name: 'Ryszard Królikowski', job:6, locations:[4,8,12], condition:1},
            {id: 20, name: 'Edyta Krawczyk', job:1, locations:[10,11,9], condition:2},
            {id: 21, name: 'Helena Piotrowska', job:2, locations:[1,11], condition:3},
            {id: 22, name: 'Dominik Grabowski', job:6, locations:[2,7,8], condition:1},
            {id: 23, name: 'Czesław Michalski', job:4, locations:[3,4,6], condition:2},
            {id: 24, name: 'Irena Wieczorek', job:5, locations:[9], condition:3},
            {id: 25, name: 'Zuzanna Majewska', job:3, locations:[5,10], condition:1},
    ]
)

export const getLocationCollection = () =>([
        {id: 0, name: 'Zaznacz wszystko'},
        {id: 1, name: 'Arkady'},
        {id: 2, name: 'Magnolia'},
        {id: 3, name: 'Grunwald'},
        {id: 4, name: 'Krzyki'},
        {id: 5, name: 'Rynek'},
        {id: 6, name: 'Nadodrze'},
        {id: 7, name: 'Obłin'},
        {id: 8, name: 'Krzyki'},
        {id: 9, name: 'Psie pole'},
        {id: 10, name: 'Renoma'},
        {id: 11, name: 'Leśnica'},
        {id: 12, name: 'Świdnicka'},
    ]
)

export const getJobsCollection = () =>([
            {id: 0, name: 'Zaznacz wszystko'},
            {id: 1, name: 'Kucharz'},
            {id: 2, name: 'Kelner'},
            {id: 3, name: 'Piekarz'},
            {id: 4, name: 'Sekretarka'},
            {id: 5, name: 'Dostawca'},
            {id: 6, name: 'Architekt'},
    ]
)

export const getConditionsCollection = () =>([
            {id: 0, name: 'Zaznacz wszystko'},
            {id: 1, name: 'Umowa o pracę'},
            {id: 2, name: 'Umowa zlecenie'},
            {id: 3, name: 'Umowa o dzieło'},
    ]
)