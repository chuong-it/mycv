import "./Update.css";


function Update() {

    return (

        <div className="Update">

            <h2>Update</h2>

            <div className="form-group">
                <label for="name">Name:</label>
                <input type="name" className="form-control" id="name" placeholder="Enter full name" name="name" />
            </div>

            <div className="form-group">
                <label for="birthday">birthday:</label>
                <input type="birthday" className="form-control" id="birthday" placeholder="Enter Date of birth" name="birthday" />
            </div>

            <div className="form-group">
                <label for="address">address:</label>
                <input type="address" className="form-control" id="address" placeholder="Enter address" name="address" />
            </div>

            <div className="form-group">
                <label for="Village">Village:</label>
                <input type="Village" className="form-control" id="Village" placeholder="Enter Village" name="Village" />
            </div>

            <div className="form-group">
                <label for="phone">phone:</label>
                <input type="phone" className="form-control" id="phone" placeholder="Enter phone" name="phone" />
            </div>

            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
            </div>

            <button type="submit" className="btn btn-default">Submit</button>

        </div>


    );
}

export default Update;