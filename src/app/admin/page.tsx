'use client'

import './Admin.css'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Admin() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  async function fetchOrders() {
    const { data } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (*)
        )
      `)

    setOrders(data || [])
  }

  async function updateStatus(orderId: string, status: string) {
    await supabase
      .from('orders')
      .update({ status })
      .eq('id', orderId)

    fetchOrders()
  }

  const { data: { user } } = await supabase.auth.getUser()

if (!user) {
  router.push('/login')
}

  return (

    if (user.email !== "joseloper17@gmail.com") {
  router.push('/')
}

    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      {orders.map((order: any) => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <strong>Order: {order.id}</strong>
            <span>Total: ₦{order.total_amount}</span>
          </div>

          <div>
            Customer: {order.customer_name} <br />
            Phone: {order.customer_phone}
          </div>

          <div className="order-items">
            {order.order_items.map((item: any) => (
              <div key={item.id} className="order-item">
                {item.quantity}x {item.products.name}
              </div>
            ))}
          </div>

          <select
            className="status-select"
            value={order.status}
            onChange={(e) =>
              updateStatus(order.id, e.target.value)
            }
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      ))}
    </div>
  )
}
