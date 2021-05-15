import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {


    const [listOfUSer, setlistOfUSer] = useState([]);// where to store the returned data
    const [error, setError] = useState(null);// where to store the coming errors
    useEffect(() => {
        function fetchData() {// the function to fetch data from the api
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(res => setlistOfUSer(res))
                .catch(err => setError(err));
        }

        fetchData();
    }, []);

    return (
        <div>
           <div className="container bootstrap snippets bootdey">
    <div className="row">
        <div className="col-lg-12">
            <div className="main-box no-header clearfix">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <table className="table user-list">
                            <thead>
                                <tr>
                                <th><span>Name</span></th>
                                <th><span>User name</span></th>
                                <th><span>Adress</span></th>
                                <th><span>Email</span></th>
                                <th><span>Phone</span></th>
                                <th><span>Website</span></th>
                                <th><span>company</span></th>



                                </tr>
                            </thead>
                            {listOfUSer.map(user => (

                            <tbody>
                                <tr>
                                    <td>
                                        <span>{user.name}</span>
                                        </td>
                                        <td>
                                        <span className="user-subhead">{user.username}</span>
                                    </td>
                                    <td className="text-center">
                                        <span className="label label-default">{user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode} {user.address.geo.lat} {user.address.geo.lng}</span>
                                    </td>
                                    <td>
                                    <a href="#">{user.email}</a>
                                    </td>
                                   
                                    <td>
                                      <span>{user.phone}</span>
                                    </td>
                                    <td>
                                    <a href="#">{user.website}</a>
                                    </td>
                                    <td >
                                        <span>{user.company.name} {user.company.catchPhrase} {user.company.bs}</span>
                                    </td>
                                   
                                </tr>
                                
                            </tbody>
                               ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    );

};
export default UserList