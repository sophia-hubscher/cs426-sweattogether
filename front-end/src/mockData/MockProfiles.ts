import { ProfileModel } from "../data/ProfileModel";

const profileData: ProfileModel[] = [
    {
        id: 1,
        image: "https://placehold.co/150x150",
        name: "Alice",
        age: 30,
        gender: "Female",
        location: {
            city: "New York",
            state: "NY",
            country: "USA",
            zip_code: "11004",
        },
        level: "Beginner",
        workout_preferences: ["Running", "Swimming"],
        bio: "Just somebody looking for a workout partner.",
    },
    {
        id: 2,
        image: "https://placehold.co/150x150",
        name: "Ina",
        age: 21,
        gender: "Female",
        location: {
            city: "Amherst",
            state: "MA",
            country: "USA",
            zip_code: "01003",
        },
        level: "Advanced",
        workout_preferences: ["Running", "Weightlifting", "Pilates", "Yoga"],
        bio: "super cool and awesome",
    },
    {
        id: 3,
        image: "https://placehold.co/150x150",
        name: "Jacob",
        age: 27,
        gender: "Male",
        location: {
            city: "Los Angeles",
            state: "CA",
            country: "USA",
            zip_code: "90001",
        },
        level: "Intermediate",
        workout_preferences: ["Cycling", "Boxing"],
        bio: "Love outdoor workouts and staying fit.",
    },
    {
        id: 4,
        image: "https://placehold.co/150x150",
        name: "Priya",
        age: 25,
        gender: "Female",
        location: {
            city: "Chicago",
            state: "IL",
            country: "USA",
            zip_code: "60601",
        },
        level: "Advanced",
        workout_preferences: ["Yoga", "Dancing", "Pilates"],
        bio: "Fitness is my therapy!",
    },
    {
        id: 5,
        image: "https://placehold.co/150x150",
        name: "Ethan",
        age: 22,
        gender: "Male",
        location: {
            city: "Austin",
            state: "TX",
            country: "USA",
            zip_code: "73301",
        },
        level: "Beginner",
        workout_preferences: ["Running", "Calisthenics"],
        bio: "Just getting started on my fitness journey.",
    },
    {
        id: 6,
        image: "https://placehold.co/150x150",
        name: "Mia",
        age: 29,
        gender: "Non-binary",
        location: {
            city: "Seattle",
            state: "WA",
            country: "USA",
            zip_code: "98101",
        },
        level: "Intermediate",
        workout_preferences: ["Rock Climbing", "Hiking", "Weightlifting"],
        bio: "Adventure enthusiast looking for workout buddies.",
    },
    {
        id: 7,
        image: "https://placehold.co/150x150",
        name: "John",
        age: 35,
        gender: "Male",
        location: {
            city: "Miami",
            state: "FL",
            country: "USA",
            zip_code: "33101",
        },
        level: "Advanced",
        workout_preferences: ["CrossFit", "Swimming"],
        bio: "Competitive athlete looking to push limits.",
    },
    {
        id: 8,
        image: "https://placehold.co/150x150",
        name: "Carlos",
        age: 26,
        gender: "Other",
        location: {
            city: "Portland",
            state: "OR",
            country: "USA",
            zip_code: "97201",
        },
        level: "Beginner",
        workout_preferences: ["Yoga", "Cycling"],
        bio: "New to fitness, but loving the journey!",
    },
    {
        id: 9,
        image: "https://placehold.co/150x150",
        name: "Liam",
        age: 24,
        gender: "Male",
        location: {
            city: "Denver",
            state: "CO",
            country: "USA",
            zip_code: "80201",
        },
        level: "Intermediate",
        workout_preferences: ["Running", "Weightlifting"],
        bio: "Nature lover and fitness fanatic.",
    },
    {
        id: 10,
        image: "https://placehold.co/150x150",
        name: "George",
        age: 23,
        gender: "Male",
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA",
            zip_code: "94101",
        },
        level: "Advanced",
        workout_preferences: ["Running", "Yoga", "Dancing"],
        bio: "Staying strong, both mentally and physically.",
    },
];

export default profileData;
