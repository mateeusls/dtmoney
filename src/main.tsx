import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de Website",
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 5000,
          createdAt: new Date('2022-05-22 01:25:00')
        },
        {
          id: 2,
          title: "Aluguel",
          type: 'withdraw',
          category: 'Casa',
          amount: 1200,
          createdAt: new Date('2022-05-04 11:10:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api',

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
