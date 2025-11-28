"use client";

export default function OrdersTable() {
  const items = [
    { id: 101, customer: "Ali", amount: 35000, status: "Delivered" },
    { id: 102, customer: "Sara", amount: 29000, status: "Pending" },
    { id: 103, customer: "Uzair", amount: 25000, status: "Shipped" },

  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <table className="w-full text-left">
        <thead className="text-sm text-gray-500">
          <tr><th>#</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody>
          {items.map((o) => (
            <tr key={o.id} className="border-t">
              <td className="py-3">{o.id}</td>
              <td>{o.customer}</td>
              <td>Rs. {o.amount}</td>
              <td className="text-sm">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
