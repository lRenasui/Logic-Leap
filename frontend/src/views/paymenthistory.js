
import BillingTable from "../components/billing-table.js";
import "./generaltable.css";

export default function PaymentHistory() {
    
  return (
        <BillingTable title="Product Name" type="Software" status = "Pending" maxUsers = "-" billingDate="2023-03-12" billingAmount="€19.99" paymentDate = "2023-03-12 11:45 AM" startDate = "2023-03-12" action = "Pay"/>
  );
}
