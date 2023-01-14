import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';

import {
    loadingToggleAction,
    signupAction,
} from '../../store/actions/AuthActions';

// image

import logo2 from "../../images/logo-full.png";
import login from "../../images/reg-bg.jpg";

function Register(props) {
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }

        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }

        setErrors(errorObj);

        if (error) return;
        dispatch(loadingToggleAction(true));

        dispatch(signupAction(email, password, props.history));
    }
	return (
		<div className="login-wrapper">
            
			<div className="login-aside-left" style={{backgroundImage:"url("+ login +")", }}>
				<Link to="/" className="login-logo">
					<img src={logo2} alt="" />
				  </Link>
				<div className="login-description">
					<h2 className="text-white mb-4">Check the Status</h2>
					<p className="fs-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
					<ul className="social-icons mt-4">
						<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
						<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
						<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
					</ul>
					<div className="mt-5">
						<Link to={"#"} className="text-white mr-4">Privacy Policy</Link>
						<Link to={"#"} className="text-white mr-4">Contact</Link>
						<Link to={"#"} className="text-white">© 2022 DexignZone</Link>
					</div>
				</div>
			</div>
			{/* <div className="authincation h-100 p-meddle">
				<div className="container h-100"> */}
			<div className="login-aside-right">	
                <div className="row justify-content-center h-100 align-items-center">
						<div className="col-md-6">
							<div className="authincation-content">
								<div className="row no-gutters">
									
									<div className="col-xl-12">
										<div className="auth-form">
											{/* <div className="text-center mb-3">
												<Link to="/"><img src={logo} alt="" /></Link>
											</div> */}
											<div className="mb-3">
												<h2 className=" text-center text-black">Sign up</h2>
											</div>	
											<h4 className="text-center mb-5">Enter your details to create your account</h4>
											{props.errorMessage && (
                                                <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                                    {props.errorMessage}
                                                </div>
                                            )}
                                            {props.successMessage && (
                                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                                    {props.successMessage}
                                                </div>
                                            )}
											<form onSubmit={onSignUp}>
												<div className="form-group">
													<label className="mb-1 "><strong>Username</strong></label>
													<input type="text" className="form-control" placeholder="username"/>
												</div>
												<div className="form-group">
													<label className="mb-1 "> <strong>Email</strong></label>
													<input type="email" className="form-control"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>
												{errors.email && <div>{errors.email}</div>}
												<div className="form-group">
													<label className="mb-1 "><strong>Password</strong></label>
													<input type="password" className="form-control"
														value={password}
														onChange={(e) =>
															setPassword(e.target.value)
														}
													/>
												</div>
												{errors.password && <div>{errors.password}</div>}
												<div className="text-center mt-4">
													<button type="submit" className="btn btn-primary btn-block">
													  Sign up
													</button>
												</div>
											</form>
											<div className="new-account mt-3">
												<p className=""> Already have an account?{" "} <Link className="text-primary" to="/login">Sign in</Link></p>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		</div>	
	);
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Register);

