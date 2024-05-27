import React from 'react';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => { 

    const data = [
        {
            id: '1',
        },
        {
            id: '2',
        },
        {
            id: '3',
        },
        {
            id: '4',
        },
        {
            id: '5',
        }
    ];

    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Max Users</th>
                        <th>Status</th>
                        <th>Billing date</th>
                        <th>Billing amount</th>
                        <th>Payment Date</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{title}</td>
                            <td>{type}</td>
                            <td>{maxUsers}</td>
                            <td>
                                <span className={`text-${status === 'Pending' ? 'warning' : status === 'Payed' ? 'success' : 'danger'}`}>
                                    {status}
                                </span>
                            </td>
                            <td>{billingDate}</td>
                            <td>{billingAmount}</td>
                            <td>{paymentDate}</td>
                            <td>{startDate}</td>
                            <td>
                                {action && <a className="linknormal" href="#">{action}</a>}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillingTable;