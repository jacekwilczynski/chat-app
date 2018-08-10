import * as nicknameMessages from 'common/messages/nickname';
import * as nicknameActions from 'server/actions/nickname';

export default {
  [nicknameMessages.CHECK_AVAILABILITY]: {
    action: nicknameActions.checkAvailability,
    response: nicknameMessages.availability
  }
};
