import React from "react";

const UserContext = React.createContext({
    user: 'guest',
    changeUser: () => {}
});

export default UserContext;