import React from "react";

function Signin(){
    return(
        <div className="container screen-center">
            <div class="card m-width">
                <div className="card-body">
                    <h3 class="mb-3 light">Sign in</h3>
                    <form>
                        <div className="form-group mb-2">
                            <label className="muted">Email</label>
                            <input type="text" placeholder="Email" className="form-control"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="muted">Password</label>
                            <input type="password" placeholder="Password" className="form-control"/>
                        </div>
                        <div className="form-group mb-2">
                            <button className="btn btn-pr ">Signin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;