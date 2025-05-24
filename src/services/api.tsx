// Mock API functions
export const mockAPI = {
    login: async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (email === 'demo@pettracker.com' && password === 'password') {
            return {success: true, user: {id: 1, name: 'Pet Parent', email}};
        }
        throw new Error('Invalid credentials');
    },

    getEvents: async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return [
            {
                id: 1,
                title: 'Vet Checkup - Bella',
                date: '2025-05-25',
                time: '10:00',
                category: 'health',
                pet: 'Bella',
                notes: 'Annual checkup and vaccinations'
            },
            {
                id: 2,
                title: 'Dog Park Visit',
                date: '2025-05-24',
                time: '16:00',
                category: 'exercise',
                pet: 'Max',
                notes: 'Socialization time'
            }
        ];
    }
};