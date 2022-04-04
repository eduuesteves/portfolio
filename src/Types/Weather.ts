export interface IWeather {
    name: string;
    sys: {
        country: string;
    };
    main: {
        temp: string;
    }
    weather: [
        { 
            description: string,
            icon: string
        }
    ]  
}