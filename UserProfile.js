function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchUserData(userId)
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]);
};