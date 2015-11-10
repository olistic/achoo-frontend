import axios from 'axios';
import querystring from 'querystring';
import OrderActions from '../actions/OrderActions';

const OrderSource = {
  fetch: {
    remote() {
      const jwt = localStorage.getItem('jwt');
      return axios.get(`http://api.achoo.uy/orders?token=${jwt}`);
    },

    loading: OrderActions.loadingOrders,
    success: OrderActions.receivedOrders,
    error: OrderActions.fetchingOrdersFailed,
  },

  rateOrder: {
    remote(state, orderRate) {
      const jwt = localStorage.getItem('jwt');
      return axios.post(`http://api.achoo.uy/orders/${orderRate.orderId}/score?token=${jwt}`,
        querystring.stringify({
          orderId: orderRate.orderId,
          score: orderRate.rate,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
    },

    success: OrderActions.receivedOrderRate,
    error: OrderActions.orderRateFailed,
  },
};

export default OrderSource;
