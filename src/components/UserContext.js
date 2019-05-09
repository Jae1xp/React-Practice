import React from 'react'

const UserContext = React.createContext('Default value here') // only used when a component doesn't have a matching provider above it in the component tree

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext // being used to context type property