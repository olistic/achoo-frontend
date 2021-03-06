import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class PharmacyActions {
  constructor() {
    this.generateActions(
      'fetchPharmacies',
      'loadingPharmacies',
      'receivedPharmacies',
      'fetchingPharmaciesFailed',
    );
  }
}
