import React,{useEffect, useState} from 'react';
import "../../css/LandingPage.css";
import "../../css/Mainpage.css";
import samplet from "../../images/samplet.png"
import { LoadDataStorage } from '../../auth/connect';

const Settings = () => {
    const [profile,setProfile]= useState(false);
    useEffect(() => {
        const profile = LoadDataStorage("profile");
        setProfile(JSON.parse(profile));
       
        
      }, []); 
   

    return (
        <div className="main">
            <div className="row">
                <div className="col-md-12">
                    <div className="card sendhead">
                        <div className="sendtitle titlepadding">
                            <div className="">Settings</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-12">


                    <div className="card">
                        <div className=" card-header profile-header">
                            Profile Details
                        </div>
                        <div className="card-body">
                            <div className="profile-container">
                                <img src={samplet} alt="" className="profileimg" />
                                <div className="upload-icon-container">
                                    <span role="img" aria-label="upload-icon" >
                                        <svg className='upload-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 38 38" fill="none">
                                            <rect width="37.6471" height="37.6471" transform="translate(0.17627 0.181641)" fill="#36474F" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 16.9939C17.7763 16.9939 16.628 17.4509 15.7433 18.3101C14.8774 19.151 14.4069 20.2661 14.4257 21.4178V21.4361C14.4257 22.6243 14.8963 23.7394 15.7622 24.5803C16.628 25.4212 17.7763 25.8782 18.9998 25.8782C21.5222 25.8782 23.5551 23.8856 23.5739 21.4361C23.5739 20.2478 23.1033 19.1327 22.2374 18.2918C21.3716 17.4509 20.2233 16.9939 18.9998 16.9939ZM29.5598 17.1219C28.6186 17.1219 27.8657 16.3907 27.8657 15.4767C27.8657 14.5626 28.6186 13.8132 29.5598 13.8132C30.501 13.8132 31.2727 14.5626 31.2727 15.4767C31.2727 16.3907 30.501 17.1219 29.5598 17.1219ZM24.2139 26.518C22.8774 27.8159 21.0327 28.6202 18.9998 28.6202C17.0233 28.6202 15.1786 27.8707 13.7669 26.518C12.3739 25.147 11.6022 23.3555 11.6022 21.4361C11.5833 19.5349 12.3551 17.7434 13.748 16.3724C15.1598 15.0014 17.0233 14.2519 18.9998 14.2519C20.9763 14.2519 22.8398 15.0014 24.2327 16.3541C25.6257 17.7251 26.3974 19.5349 26.3974 21.4361C26.3786 23.4286 25.5504 25.2201 24.2139 26.518ZM29.6163 8.67637C29.4469 8.67637 29.3151 8.58497 29.2398 8.45701L29.0516 8.05484C28.5433 7.01286 27.9598 5.80636 27.6022 5.11171C26.7363 3.46648 25.2492 2.55246 23.4233 2.53418H14.5574C12.7316 2.55246 11.2633 3.46648 10.3974 5.11171C10.021 5.84292 9.38098 7.15911 8.85392 8.23765L8.74098 8.45701C8.68451 8.60325 8.53392 8.67637 8.38333 8.67637C3.84686 8.67637 0.17627 12.2593 0.17627 16.6466V27.5051C0.17627 31.8924 3.84686 35.4754 8.38333 35.4754H29.6163C34.1339 35.4754 37.8233 31.8924 37.8233 27.5051V16.6466C37.8233 12.2593 34.1339 8.67637 29.6163 8.67637Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <br />
                            <p className='profilename'> {profile?.firstName} {profile?.lastName}</p>
                            <div className="row">
                                <div className="col-md-3 d-none d-sm-block ttex">
                                    Username
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder={profile?.userName} readOnly />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 d-none d-sm-block ">
                                    Mobile Number
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                        {profile?.phoneNumber}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 d-none d-sm-block ">
                                    Gender
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                    {profile?.gender??"Not set"}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 d-none d-sm-block ">
                                    Date of Birth
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                    {profile?.dob??"Not set"}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 d-none d-sm-block ">
                                    Email
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="mb-3">
                                    {profile?.email} <span className='bagedverified'>Verified</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <br />
                    <div className="card">
                        <div className=" ">
                            <table className="table">
                                <thead className='card-header  maind'>
                                    <tr className=''>
                                        <th className="custom-table-header pheader" >Type</th>
                                        <th className="custom-table-header pheader"  >Status</th>
                                        <th className="custom-table-header pheader" >Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className="custom-table-cell pbodyd">Login Password</td>
                                        <td className="custom-table-cell pbodyd">Active</td>
                                        <td className="custom-table-cell pbodyd debit">Change</td>
                                    </tr>

                                    <tr className=''>
                                        <td className="custom-table-cell pbodyd">Pin</td>
                                        <td className="custom-table-cell pbodyd">Active</td>
                                        <td className="custom-table-cell pbodyd debit">Change</td>
                                    </tr>





                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Settings;
