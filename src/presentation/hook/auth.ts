// eslint-disable-next-line import/prefer-default-export
export const useAuth = () => {
    if (typeof window === 'undefined') return {};

    return {
        isLogged: !!localStorage.getItem('userId'),
    };
};
