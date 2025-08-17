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
    
    if (loading) return <LoadingSpinner />;
    
    return (
        <div className="user-profile">
            <img src={user.avatar} alt="Profile" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={() => editProfile(user.id)}>Edit Profile</button>
        </div>
    );
}
