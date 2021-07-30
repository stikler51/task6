import React, {useState} from "react";

function NewEmployeeForm (props) {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [errors, setErrors] = useState({
        'firstName': false,
        'lastName': false
    })

    return <div className="row">
        <div className="col">
            <input type="text"
                   className={`form-control ${errors['firstName'] ? 'is-invalid' : ''}`}
                   placeholder="First name"
                   aria-label="First name"
                   value={firstName}
                   onInput={(e) => {
                       setFirstName(e.target.value)
                       setErrors({
                           'firstName': false,
                           'lastName': errors['lastName']
                       })
                   }}
            />
        </div>
        <div className="col">
            <input type="text"
                   className={`form-control ${errors['lastName'] ? 'is-invalid' : ''}`}
                   placeholder="Last name"
                   aria-label="Last name"
                   value={lastName}
                   onInput={(e) => {
                       setLastName(e.target.value)
                       setErrors({
                           'firstName': errors['firstName'],
                           'lastName': false
                       })
                   }}
            />
        </div>
        <div className="col">
            <button
                className="btn btn-primary"
                onClick={() => {
                    if (firstName && lastName) {
                        props.addNewEmployee({
                            'first_name': firstName,
                            'last_name': lastName
                        })

                        setFirstName('')
                        setLastName('')

                        setErrors({
                            'firstName': false,
                            'lastName': false
                        })

                    } else {
                        setErrors({
                            'firstName': !firstName,
                            'lastName': !lastName
                        })
                    }

                }}
            >Add new Employee</button>
        </div>
    </div>
}
export default NewEmployeeForm;