export const NavBar = () => {
    return (
        <div style={{
            display: "flex",
            padding: '0px 25px 0px 25px',
            // background: "#691515",
            gap: 10,
            justifyContent: "space-between",
        }}>
            <a href={`/`}>welcome to the nav bar</a>
            <a href={`/invoice`}>Your Friend</a>
            <a href={`/contacts/1`}>Your Name</a>
        </div>
    );
};