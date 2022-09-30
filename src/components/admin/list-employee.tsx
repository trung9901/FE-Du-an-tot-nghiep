import React from 'react'



const ListEmployee = () => {
    return (
        <>
            <div className="w-full px-6 py-6 mx-auto">
                <div>
                    <h1 className="mb-0 font-bold text-white capitalize pb-[20px] text-center text-[50px]">Nhân Viên</h1>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6 className="dark:text-white">Danh sách nhân viên </h6>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">NAME</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">idCard (CMND)</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"> gender</th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">John Michael</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">john@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="  px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user2" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Alexa Liras</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">alexa@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                   
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user3" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Laurent Perrier</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">laurent@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user4" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Michael Levi</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">michael@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user5" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Richard Gran</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">richard@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                  
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user6" />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Miriam Eric</h6>
                                                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">miriam@creative-tim.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">0978950874</p>
                                                    
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className=" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none dark:text-white">001301020934</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">Nữ</span>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <a href="javascript:;" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"> Edit </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6 className="dark:text-white">Projects table</h6>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center justify-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Project</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Budget</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Completion</th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap" />
                                            </tr>
                                        </thead>
                                        <tbody className="border-t">
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-spotify.svg" className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="spotify" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Spotify</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">$2,500</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">working</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">60%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="flex flex-col justify-center w-3/5 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-blue-700 to-cyan-500 whitespace-nowrap" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400">
                                                        <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-invision.svg" className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="invision" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Invision</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">$5,000</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">done</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">100%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="flex flex-col justify-center w-full h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-emerald-500 to-teal-400 whitespace-nowrap" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-jira.svg" className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="jira" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Jira</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">$3,400</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">canceled</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">30%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="flex flex-col justify-center h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-red-600 to-orange-600 w-3/10 whitespace-nowrap" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={30} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-slack.svg" className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="slack" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Slack</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">$1,000</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">canceled</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">0%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="flex flex-col justify-center w-0 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-emerald-500 to-teal-400 whitespace-nowrap" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={0} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-webdev.svg" className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="webdev" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Webdev</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">$14,000</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">working</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">80%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="flex flex-col justify-center w-4/5 h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-blue-700 to-cyan-500 whitespace-nowrap" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={80} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2">
                                                        <div>
                                                            <img src="../assets/img/small-logos/logo-xd.svg" className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 ease-in-out rounded-full h-9 w-9" alt="xd" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">Adobe XD</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">$2,300</p>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-60">done</span>
                                                </td>
                                                <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <div className="flex items-center justify-center">
                                                        <span className="mr-2 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">100%</span>
                                                        <div>
                                                            <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                <div className="flex flex-col justify-center w-full h-auto overflow-hidden text-center text-white transition-all bg-blue-500 rounded duration-600 ease bg-gradient-to-tl from-green-600 to-lime-400 whitespace-nowrap" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                                    <button className="inline-block px-5 py-2.5 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-normal text-sm ease-in bg-150 tracking-tight-rem bg-x-25 text-slate-400" aria-haspopup="true" aria-expanded="false">
                                                        <i className="text-xs leading-tight fa fa-ellipsis-v dark:text-white dark:opacity-60" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ListEmployee