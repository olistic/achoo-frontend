import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class OrderActions {
  constructor() {
    this.generateActions(
      'fetchOrders',
      'loadingOrders',
      'receivedOrders',
      'fetchingOrdersFailed',
      'rateOrder',
    );
  }
}
