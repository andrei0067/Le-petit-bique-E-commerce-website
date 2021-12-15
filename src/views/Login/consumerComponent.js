import React from 'react';
import { UserContext} from '../../components/context/UserContext'

function consumerComponent(props) {
    const { label } = props;
    return (
        <div>
            Bla bla bla {label}
            <UserContext.Consumer>
                {user => {
                    console.log(user);
                    if(user?.signOut) {
                        user.signOut();
                    }

                    return <div>{user?.name}</div>
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default consumerComponent;
